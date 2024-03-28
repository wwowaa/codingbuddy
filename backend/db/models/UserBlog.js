import mongoose from "mongoose";

const UserBlogSchema = new mongoose.Schema({
  blog_id: { type: mongoose.SchemaTypes.ObjectId, required: true },
  user_id: { type: mongoose.SchemaTypes.ObjectId, required: true },
});

export default mongoose.model("UserBlog", UserBlogSchema);
