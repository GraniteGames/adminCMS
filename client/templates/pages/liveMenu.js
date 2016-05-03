
Template.liveMenu.helpers({
  //This returns the beer list
  beers: function(){
    return Beer.find();
  },
  date: function(){
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; //Months are zero based
    var curr_year = d.getFullYear();
    var date = curr_date+"/"+curr_month+"/"+curr_year
    return date;
  }
});
