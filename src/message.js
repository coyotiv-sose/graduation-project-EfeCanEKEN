class Message {
  constructor(sender, text) {
    this.sender = sender;
    this.text = text;
    this.createdAt = new Date();
  }
}

module.exports = Message;
