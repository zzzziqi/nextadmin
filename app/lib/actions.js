import {User} from "@/app/lib/models";
import {connectdb} from "@/app/lib/utils";

export const addUser = async (formData) => {
    "use server"
    const {username, email, password, img, isAdmin, isActive, phone, address} = Object.fromEntries(formData)
    try {
        void connectdb()
        const newUser = new User({username, email, password, img, isAdmin, isActive, phone, address});
        await newUser.save();
    } catch (e) {
        console.log(e)
        throw new Error("failed to add user")
    }
}
