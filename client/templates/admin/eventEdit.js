Event= new Mongo.Collection("events");

Event.attachSchema(new SimpleSchema({
  name :{
    type: String,
    label: "Title",
    max: 50
  },
  bodyEN: {
    type: String,
    label: "Text(EN)",
    max: 1000,
    optional: true,
    autoform: {
      rows: 5
    }
  },
  bodyFR: {
    type: String,
    label: "Text(FR)",
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

  }

  //Need to put image in here
}
));
Template.eventEdit.helpers({
  //This returns the beer list
  events: function(){
    var regexp = new RegExp(Session.get('search/keyword'), 'i');
    return Event.find({name: regexp});
  },
  eventInfo: function(){
    return Session.get("eventData");
  }
});
Template.eventEdit.events({
  'keyup #search': function(event){
    Session.set('search/keyword',event.target.value);
    console.log(Session.get("search/keyword"))
  }

});

Template.eventEditTemp.events({
  'click .editButton': function(){
    Session.set('eventData', this);
  },
  'click .deleteButton': function(){
    Event.remove(this._id);
  },
  

});
Template.eventEdit.events({
	'change .myFileInput': function(event, template) {
    var files = event.target.files;
    for (var i = 0, ln = files.length; i < ln; i++) {
      Images.insert(files[i], function (err, fileObj) {
        //Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
		console.log("inserted file");
      });
    }
  }
})
