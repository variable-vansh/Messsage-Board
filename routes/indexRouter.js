const { Router } = require("express");
var id=2;

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
    id:1
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
    id:2
  }
];


indexRouter.get("/", (req, res) => res.render("index",{heading:"Home Header", messages:messages}));
indexRouter.post("/new", (req,res)=>{
    console.log('form submitted')
    id++;
    // console.log(req.body.message)
    // console.log(req.body.username)

    messages.push({text:req.body.message, user:req.body.username, added:new Date(), id:id})
    res.redirect("/")
})

indexRouter.get('/messages/:id', function(req, res) {
  let messageId = req.params.id;
  messageId=(parseInt(messageId))
  // Retrieve message details from database or data storage
  const messageDetails = getMessageDetailsFromDatabase(messageId);
  res.render('expandMessage', { messageDetails: messageDetails });
});

function getMessageDetailsFromDatabase(id) {
  return messages.find(message => message.id === id);
}

module.exports = indexRouter;