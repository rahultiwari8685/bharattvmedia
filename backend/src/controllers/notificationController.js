import NotificationToken from "../models/NotificationToken.js";

export const saveToken = async (req, res) => {
  try {
    const { token, platform } = req.body;

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Token Required",
      });
    }

    const exists = await NotificationToken.findOne({
      token,
    });

    if (!exists) {
      await NotificationToken.create({
        token,
        platform,
      });
    }

    return res.json({
      success: true,
      message: "Token Saved Successfully",
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
