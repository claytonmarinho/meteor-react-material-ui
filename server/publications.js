Meteor.publish('Lists', () => {
  return Lists.find({});
});
