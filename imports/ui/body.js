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
		var newMessage = document.querySelector('#newMessage').value
		, time = new Date()
		, hours = time.getHours()
		, minutes = time.getMinutes()
		var newMessageObject = {
			text: newMessage,
			time: hours + ":" + minutes
		}
		Messages.insert(newMessageObject)
		console.log("The message object we are inserting is", newMessageObject)
	}
})

[
{text: "hi", time: "8pm"},
{text: "hello", time: "9pm"}
]