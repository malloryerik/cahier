FlowRouter.route('/', {
  subscriptions: function(){
 //   this.register('foo', Meteor.subscribe('bar'));
  },
  action: function(){
    FlowLayout.render('layout1', {
      upper: "entryChoice",
      middle: "",
      lower:""
    });
  }
});

FlowRouter.route("/pomo", {
  action: function() {
    FlowLayout.render('layout1', {
      upper: "header",
      middle: "pomo",
      lower: ""
    })
  }
});



FlowRouter.route('/customer', {
  subscriptions: function(){
//    this.register('foo', Meteor.subscribe('bar'));
  },
  action: function(){
    FlowLayout.render('layout1', {
      upper: "header",
      middle: "customerArea1",
      lower: "footer-a"
    });
  }
});

FlowRouter.route('/route66', {
  action: function() {
    FlowLayout.render('layout1', {
      upper: "header",
      middle: "route66Template",
      lower: "footer-a"
    });
  }
})

FlowRouter.route('/transporter', {
  subscriptions: function(){
  //  this.register('foo', Meteor.subscribe('bar'));
  },
  action: function(){
    FlowLayout.render('layout1', {
      upper: "thinTransTop",
      middle: "transporter",
      lower: "transActionFooter"
    });
  }
});

FlowRouter.route('/business', {
  subscriptions: function(){
    this.register('foo', Meteor.subscribe('bar'));
  },
  action: function(){
    FlowLayout.render('layout1', {
      upper: "header",
      middle: "business",
      lower: "transActionFooter"
    });
  }
});

FlowRouter.route("/dashboard", {
  subscriptions: function(){
    this.register('foo', Meteor.subscribe('bar'));
  },
  action: function() {
    FlowLayout.render('layout1', {
      upper: "thinTransTop",
      middle: "transporter1",
      lower: "transActionFooter"
    });
  }
});


FlowRouter.route("/profile", {
  subscriptions: function(){
    this.register('foo', Meteor.subscribe('bar'));
  },
  action: function() {
    FlowLayout.render('layout1', {
      upper: "header",
      middle: "myProfile",
      lower: ""
    });
  }
});