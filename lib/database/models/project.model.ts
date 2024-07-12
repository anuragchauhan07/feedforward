import { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const Project = models.Project || model("Project", ProjectSchema);
export default Project;
