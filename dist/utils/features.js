import mongoose from "mongoose";
export const connectDB = () => {
    mongoose
        .connect("mongodb://localhost:27017", {
        dbName: "MERN-Ecommerce",
    })
        .then((c) => console.log(`MongoDB is connected to ${c.connection.host}`))
        .catch((e) => console.log(e));
};
