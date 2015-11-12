var {
    AppBar, AppCanvas, GridList, LeftNav, MenuItem
    } = MUI;

HandoverLists = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    const handle = Meteor.subscribe('Lists');
    const data = {};
    if(handle.ready()) {
      data.lists = Lists.find({}, {sort: {_id: 1}}).fetch();
    }

    return data;
  },

  getList() {
    return <ul>
      {this.data.lists.map(task => {
        const path = FlowRouter.path('/handover-lists/list/', {_id: task._id})
        return <List key={task._id} title={task.title}> </List>
      })}
    </ul>;
  },

  _toggleNav: function(){
    this.refs.leftNav.toggle();
  },

  render() {
    var menuItems = [
      { route: '/handover-lists/today', text: 'Today' },
      { route: '/handover-lists/next-days/7', text: 'Next 7 days' },
      { route: '/handover-lists/next-days/14', text: 'Next 14 days' },
      { route: '/handover-lists/next-month/', text: 'Next month' },
      { type: MenuItem.Types.SUBHEADER, text: 'More filters' },
      { route: '/handover-lists/all', text: 'All' },
      { route: '/handover-lists/starred', text: 'Starred' },
      { route: '/handover-lists/archived', text: 'Archived' }
    ];

    return <div>
        <AppBar
          title="HandoverLists" onLeftIconButtonTouchTap={this._toggleNav} ></AppBar>

        <LeftNav ref="leftNav" docked={false} menuItems={menuItems} />

        <div className="wrap container-fluid">
          <div clasName="row">
            <div className="flex-cards" >
              {(this.data.lists)? this.getList() : "loading..."}
            </div>
          </div>
        </div>

      </div>;

  }
});
