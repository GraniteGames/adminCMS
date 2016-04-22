import { Meteor } from 'meteor/meteor';

Beer= new Mongo.Collection("beers");
Meteor.startup(() => {
  // code to run on server at startup
});
