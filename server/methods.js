Meteor.methods({
  addNewCard:function(data){
    if(data){
      Lists.insert(data);
    }
  }
});
