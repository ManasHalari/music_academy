import mongoose from "mongoose";

type ConnectionObject={
    isConnected?: number;
}

const connection: ConnectionObject = {};

const dbConnect=async ():Promise<void>=>{
    if(connection.isConnected){
        console.log('Database is already connected');
        return;
    }

    try {
       const db= await mongoose.connect(process.env.MONGODB_URI || "")
    //    console.log(db);
    //    console.log(db.connections);
       connection.isConnected=db.connections[0].readyState;

       const mongoConnection=mongoose.connection;

       mongoConnection.on("connected",()=>{
        console.log("Connected to MongoDB")
       })

       mongoConnection.on("error",(err)=>{
        console.log("Error connecting to MongoDB.It is Try part:",err);
        process.exit(1);
       })
    } catch (error) {
        console.log("Catch part Database error",error);
        process.exit(1);
    }
}

export default dbConnect;