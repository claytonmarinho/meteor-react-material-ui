var {
    AppBar, AppCanvas, GridList, LeftNav, MenuItem, RefreshIndicator
    } = MUI;

HandoverLists = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    const handle = Meteor.subscribe('Lists');
    const data = {};
    if(handle.ready()) {
      data.lists = Lists.find().fetch();
    }

    return data;
  },

  getMoment(date){
    return 'opa';
  },

  getList() {
    return <ul>


      {this.data.lists.map(task => {
        const path = FlowRouter.path('/handover-lists/list/', {_id: task._id})
        return <List key={task._id}
                     title={task.title}
                     description={task.description}
                     createdDate={this.getMoment}
                     > </List>
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
          title="Handover Lists" onLeftIconButtonTouchTap={this._toggleNav} ></AppBar>

        <LeftNav ref="leftNav" docked={false} menuItems={menuItems} />

        <div className="wrap container-fluid m-top-1em">
          <div className="container">
            <NewCard className="margin-1em" />
          </div>
          <div clasName="row">
            <div className="flex-cards" >
              {(this.data.lists)? this.getList() : <RefreshIndicator className="loading" size={40} left={80} top={5} status="loading" /> }
            </div>
          </div>
        </div>

      </div>;

  }
});
