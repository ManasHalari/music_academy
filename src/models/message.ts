import mongoose,{Schema,Document} from "mongoose";

interface Message extends Document{
    subject:string,
    message: string;
}

const messageSchema:Schema<Message>=new Schema({
    message: {
        type: String,
        required: true
    },
   subject: {
    type: String,
    required: true
   }
},{timestamps:true})



const messageModel=(mongoose.models.messages as mongoose.Model<Message>) ||  mongoose.model<Message>("messages",messageSchema)

export default messageModel;
