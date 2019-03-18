module.exports - class Say {
  constructor(){
    this.name = 'hi',
  }
  run(client, message, args){
    message.reply(this.name)
  }
 
}
