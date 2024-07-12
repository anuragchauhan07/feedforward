import { Schema, model, models } from "mongoose";

const FeedbackSchema = new Schema({
  userId: { type: String, required: true },
  projectId: { type: String, required: true },
  feedbackTitle: { type: String, required: true },
  feedbackDescription: { type: String, required: true },
  votes: { type: Number, required: true, default: 0 },
});

const Feedback = models.Feedback || model("Feedback", FeedbackSchema);
export default Feedback;
