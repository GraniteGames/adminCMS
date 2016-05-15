About= new Mongo.Collection("about");

About.attachSchema(new SimpleSchema({
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

  }

  //Need to put image in here
}
));
