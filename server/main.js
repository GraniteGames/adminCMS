import { Meteor } from 'meteor/meteor';

Beer= new Mongo.Collection("beers");
Food = new Mongo.Collection("food");
Event= new Mongo.Collection("events");
Meteor.startup(() => {
  // code to run on server at startup
});
