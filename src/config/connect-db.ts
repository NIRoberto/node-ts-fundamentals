import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectToDatabase = async () => {
  try {
    console.log("🔗 Connecting to MongoDB...", process.env.MONGO_URI);

    await mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/mydb"
    );
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectToDatabase;
