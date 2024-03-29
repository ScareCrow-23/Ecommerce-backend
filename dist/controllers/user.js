import { User } from "../models/user.js";
export const newUser = async (req, res, next) => {
    try {
        const { name, photo, email, gender, _id, dob } = req.body;
        console.log(name, photo, email, gender, _id, dob);
        const user = await User.create({
            name,
            photo,
            email,
            gender,
            _id,
            dob: new Date(dob),
        });
        return res.status(201).json({
            success: true,
            message: `Welcome ${user.name}`,
        });
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            message: error,
        });
    }
};
