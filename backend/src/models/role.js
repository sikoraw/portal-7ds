import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const Role = mongoose.model("Role", RoleSchema);
export default Role;
