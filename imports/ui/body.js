import './body.html'

import { Template } from 'meteor/templating'
import { Messages } from '../api/messages.js'

Template.body.helpers({
  messages () {
    return Messages.find({});
  }
});

