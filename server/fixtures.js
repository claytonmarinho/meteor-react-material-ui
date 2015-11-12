Meteor.startup(function(){

  if(Lists.find({}).count() < 1) {
    for (var i = 1; i < 7; i++) {
      Lists.insert({
        title: "Card "+i,
        description: 'Lorem Ipsum',
        createdDate: new Date(),
      });
    }
  }
});
