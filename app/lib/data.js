import {Product, User} from "@/app/lib/models";
import {connectdb} from "@/app/lib/utils";

export const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, "i")
    const ITEMS_PER_PAGE = 2

    try {
        void connectdb()
        const count = await User.find({username: {$regex: regex}}).count()
        const users = await User.find({username: {$regex: regex}}).limit(ITEMS_PER_PAGE).skip((page - 1) * ITEMS_PER_PAGE)
        return {count,users}
    } catch (e) {
        console.log(e)
        throw new Error("failed to fetch users")
    }
}

export const fetchProducts = async (q, page) => {
    const regex = new RegExp(q, "i")
    const ITEMS_PER_PAGE = 2

    try {
        void connectdb()
        const count = await Product.find({title: {$regex: regex}}).count()
        const products = await Product.find({title: {$regex: regex}}).limit(ITEMS_PER_PAGE).skip((page - 1) * ITEMS_PER_PAGE)
        return {count,products}
    } catch (e) {
        console.log(e)
        throw new Error("failed to fetch product")
    }
}


export const cards = [
    {
        id: 1,
        title: "Total Users",
        number: 10.928,
        change: 12,
    },
    {
        id: 2,
        title: "Stock",
        number: 8.236,
        change: -2,
    },
    {
        id: 3,
        title: "Revenue",
        number: 6.642,
        change: 18,
    },
];
