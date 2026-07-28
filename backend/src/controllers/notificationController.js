import NotificationToken from "../models/NotificationToken.js";

export const saveToken = async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Token Required",
      });
    }

    const exists = await NotificationToken.findOne({ token });

    if (!exists) {
      await NotificationToken.create({
        token,
      });
    }

    res.json({
      success: true,
      message: "Token Saved",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
    });
  }
};
