import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.adminHome.events({
  'click .logoutButton': ()=>{
    //Prevent Default Action
    event.preventDefault();
    //Log the User Out
    Meteor.logout();
  }
})
