// const mongoose = require("mongoose")
// const MONGO_URI = "mongodb://127.0.0.1:27017/Mern_Chat_App";

// const connectDB = async()=>{
//     try{
//         const conn =await mongoose.connect(MONGO_URI,{
//             useNewrlParser: true,
//             useUnifiedTopology: true,
//             useFindAndModify: true
//         })
//     console.log(`Mongoose Connected: ${conn.connection.host}`);
        
//     } catch(error){
//     console.log(`Error: ${error.message}`);
//     }
// }

// module.exports = {
//     connectDB
//   };

const mongoose = require("mongoose")
const MONGO_URI = "mongodb://127.0.0.1:27017/Mern_Chat_App";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Mongoose Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

module.exports = {
    connectDB
};