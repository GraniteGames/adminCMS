//Main Pages (Content)
FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "homePage"});
  }

});

//Admin Routes(CMS)
FlowRouter.route('/admin', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "adminHome"});
  }
});
FlowRouter.route('/admin/beer',{
  action: function(){
    BlazeLayout.render("mainLayout", {content: "beerEdit"});
  }
});
FlowRouter.route('/admin/food',{
  action: function(){
    BlazeLayout.render("mainLayout", {content: "foodEdit"});
  }
});
FlowRouter.route('/admin/data',{
  action: function(){
    BlazeLayout.render("mainLayout", {content: "siteData"});
  }
});
