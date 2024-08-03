const mongoose = require('mongoose');
const Chat = require('./models/chat.js');

main().then(() => {console.log("Connection is working")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from:"ayush",
        to:"priya",
        msg:"Send me data file",
        created_at: new Date()
    },
    {
        from:"goru",
        to:"kallu",
        msg:"Fair and lovely bhejio",
        created_at: new Date()
    },
    {
        from:"blackiya",
        to:"smackiya",
        msg:"Black ki smack de",
        created_at: new Date()
    },
    {
        from:"riya",
        to:"priya",
        msg:"apne naam se P hata de",
        created_at: new Date()
    },
    {
        from:"mister",
        to:"misses",
        msg:"will you marry me?",
        created_at: new Date()
    },
];

// Chat.insertMany(allChats);
// Chat.findByIdAndDelete('66a4b95fc18b5144848cd650').then((res)=>{console.log(res)})
