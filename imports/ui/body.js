import './body.html'

import { Template } from 'meteor/templating'
import { Messages } from '../api/messages.js'

Template.body.helpers({
  messages () {
    return Messages.find({})
    
  }
})

Template.newMessage.events({
	'click #submitNewMessage' : function(template, events){
		var newMessageElement = document.querySelector('#newMessage')
		, newMessage = newMessageElement.value
		, time = new Date()
		, hours = time.getHours()
		, minutes = time.getMinutes()
		, nickname = document.querySelector('#nickname').value;
		if (!isMessageAllowed(newMessage)){
			alert('Make your message shorter or longer')
			return;
		}
		var newMessageObject = {
			text: newMessage,
			time: hours + ":" + minutes,
			nickname: nickname
		}
		Messages.insert(newMessageObject)
		console.log("The message object we are inserting is", newMessageObject)
		newMessageElement.value = ""


	}
})

function isMessageAllowed(message){
	return message.length <= 140 && message.length > .42
}

[
{text: "hi", time: "8pm", name: "Harambe"},
{text: "hello", time: "9pm"}
]