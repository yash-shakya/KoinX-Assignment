import express from "express";
import { config } from "dotenv";
import connectDB from "./db/index.js";
import routes from "./routes/router.js";
config();

const PORT = process.env.PORT || 4000;

const app = express();

routes(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error) => {
    console.log("Error in connecting MongoDB: ", error);
    process.exit(1);
});