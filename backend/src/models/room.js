import mongoose from "mongoose";
import RoomTimetable from "./roomTimetable";

const RoomSchema = new mongoose.Schema({
  name: {
    type: String
  },
  symbol: {
    type: String
  },
  dailyLimit: {
    type: Number
  },
  weeklyLimit: {
    type: Number
  },
  timetable: {
    type: mongoose.Schema.Types.ObjectId,
    ref: RoomTimetable
  }
});

const Room = mongoose.model("Room", RoomSchema);
export default Room;
