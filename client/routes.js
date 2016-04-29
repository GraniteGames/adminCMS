//Main Pages (Content)

FlowRouter.route('/', {
  action: function(){
    BlazeLayout.render("splashLayout", {content:"splashPage"});
  }

})
FlowRouter.route('/home', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "homePage"});
  }

});
FlowRouter.route('/beer', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "beerPage"});
  }

});
FlowRouter.route('/menu', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "menuPage"});
  }

});
FlowRouter.route('/events', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "eventsPage"});
  }

});
FlowRouter.route('/about', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "aboutPage"});
  }

});

//Live menu Render
FlowRouter.route('/livemenu', {
  action: function(){
    BlazeLayout.render("liveMenuLayout", {content: "liveMenu"});
  }
})

//Admin Routes(CMS)
FlowRouter.route('/admin', {
  action: function() {
    BlazeLayout.render("adminLayout", {content: "adminHome"});
  }
});
FlowRouter.route('/admin/beer',{
  action: function(){
    BlazeLayout.render("adminLayout", {content: "beerEdit"});
  }
});
FlowRouter.route('/admin/food',{
  action: function(){
    BlazeLayout.render("adminLayout", {content: "foodEdit"});
  }
});
FlowRouter.route('/admin/events',{
  action: function(){
    BlazeLayout.render("adminLayout", {content: "eventEdit"});
  }
});
FlowRouter.route('/admin/data',{
  action: function(){
    BlazeLayout.render("adminLayout", {content: "siteData"});
  }
});
