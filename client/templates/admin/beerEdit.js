Beer = new Mongo.Collection("beers");
//Schema for entries to the Beer Collection
Beer.attachSchema(new SimpleSchema({
  name :{
    type: String,
    label: "Name",
    max: 50
  },
  style: {
    type: String,
    label: "Style",
    max: 50

  },
  abv:{
    type: Number,
    label:"ABV(%)",
    decimal: true

  },
  price:{
    type: Number,
    label: "Price",
    decimal: true
  },
  servingSize:{
    type: Number,
    label: "Serving Size",
  },
  descFR:{
    type: String,
    label: "Description(FR)",
    max: 1000,
    optional: true,
    autoform: {
      rows: 5
    }

  },
  descEN:{
    type: String,
    label: "Description(EN)",
    max: 1000,
    optional: true,
    autoform: {
      rows: 5
    }
  },
  descJP:{
    type: String,
    label: "Description(JP)",
    max: 1000,
    optional: true,
    autoform: {
      rows: 5
    }
  },
  bottleCheck:{
    type: Boolean,
    label: "Available by Bottle"
  },
  draughtCheck:{
    type: Boolean,
    label:"Available on Tap"
  },
  lastEdited:{
    type: Date,
    label:"Date Edited",

  },


}
))

Template.beerEdit.helpers({
  //This returns the beer list
  beers: function(){
    var regexp = new RegExp(Session.get('search/keyword'), 'i');
    return Beer.find({name: regexp});
  },
  beerInfo: function(){
    return Session.get("beerData");
  }
});
Template.beerEdit.events({
  'keyup #search': function(event){
    Session.set('search/keyword',event.target.value);
    console.log(Session.get("search/keyword"))
  }

});

Template.beerEditTemp.events({
  'click .editButton': function(){
    Session.set('beerData', this);
  },
  'click .deleteButton': function(){
    Beer.remove(this._id);
  },
  'change .myFileInput': function(event, template) {
    var files = event.target.files;
    for (var i = 0, ln = files.length; i < ln; i++) {
      Images.insert(files[i], function (err, fileObj) {
        //Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      });
    }
  }

});
