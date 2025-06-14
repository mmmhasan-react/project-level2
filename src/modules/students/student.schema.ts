import { Schema } from "mongoose";
import { Student } from "./student.interface";

const StudentShchma = new Schema<Student>({
  id: {
    type: String,
    required: true,
  },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    middleName:{
      type:String,
      required:true                                             ue
    },
    lasttName:{
      type:String,
      required:true,
    }
  },
  gender:{
    type:String,
    enum:['male','female'],
    required:true
  }
});
