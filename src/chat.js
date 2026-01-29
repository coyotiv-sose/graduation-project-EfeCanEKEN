const Message = require("./message");

class Chat {
  constructor(user1, user2) {
    this.user1 = user1;
    this.user2 = user2;
    this.messages = [];
  }

  sendMessage(sender, text) {
    const message = new Message(sender, text);
    this.messages.push(message);
  }
}

module.exports = Chat;
