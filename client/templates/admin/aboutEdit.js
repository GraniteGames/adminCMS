About= new Mongo.Collection("about");

About.attachSchema(new SimpleSchema({
  
  //Attach about image
  bodyEN: {
    type: String,
    label: "History(EN)",
    max: 1000,
    optional: true,
    autoform: {
      rows: 5
    }
  },
  bodyFR: {
    type: String,
    label: "History(FR)",
    max: 1000,
    optional: true,
    autoform: {
      rows: 5
    }
  },
  bodyJP: {
    type: String,
    label: "Text(JP)",
    max: 1000,
    optional: true,
    autoform: {
      rows: 5
    }
  },
  lastEdited:{
    type: Date,
    label:"Date Created/Edited",

  },
  hoursMonday: {
    type: String,
    label: "Monday Hours (X-X)"
  },
  hoursTuesday: {
    type: String,
    label: "Tuesday Hours (X-X)"
  },
  hoursWednesday: {
    type: String,
    label: "Wednesday Hours (X-X)"
  },
  hoursThursday: {
    type: String,
    label: "Thursday Hours (X-X)"
  },
  hoursFriday: {
    type: String,
    label: "Friday Hours (X-X)"
  },
  hoursSaturday: {
    type: String,
    label: "Saturday Hours (X-X)"
  },
  hoursSunday: {
    type: String,
    label: "Sunday Hours (X-X)"
  }
}
));

Template.aboutEdit.helpers({
	about: function(){
		return About.find();
	},
	aboutInfo: function(){
    return Session.get("aboutData");
  }
})
Template.aboutDisplay.events({
  'click .aboutUp': function(){
    Session.set('aboutData', this);
	console.log("Session Set")
  },
})