const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main().then(()=>{
    console.log("Connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wp');

}

let allchats=[{
    from:"neha",
    to:"priya",
    msg:"hehe",
    created_at:new Date()
},
{
    from:"neha",
    to:"priya",
    msg:"okay",
    created_at:new Date()
},
{
    from:"neha",
    to:"priya",
    msg:"send me your exam sheets",
    created_at:new Date()
},
{
    from:"neha",
    to:"priya",
    msg:"wuit",
    created_at:new Date()
}];

Chat.insertMany(allchats);