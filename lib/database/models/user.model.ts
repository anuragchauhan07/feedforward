import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  photo: { type: String, required: true },
  isPro: { type: Boolean, required: true },
  totalProjects: { type: Number, required: true },
  totalFeedbacks: { type: Number, required: true },
});

const User = models.User || model("User", UserSchema);
export default User;