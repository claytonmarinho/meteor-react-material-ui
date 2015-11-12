Meteor.publish('Lists', () => {
  return Lists.find({},{sort: {createDate: -1}});
});
