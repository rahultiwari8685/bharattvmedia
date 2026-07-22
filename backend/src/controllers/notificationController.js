import NotificationToken from "../models/NotificationToken.js";

export const saveToken = async(req,res)=>{

    try{

        const {token}=req.body;

        const exists =
        await NotificationToken.findOne({token});

        if(!exists){

            await NotificationToken.create({
                token
            });

        }

        res.json({
            success:true
        });

    }catch(e){

        res.status(500).json({
            success:false
        });

    }

}