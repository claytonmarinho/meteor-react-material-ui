var {
    AppBar, AppCanvas, GridList, LeftNav, MenuItem, RefreshIndicator, IconButton, FontIcon, FloatingActionButton, ToggleStar,
    } = MUI;

HandoverLists = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    const handle = Meteor.subscribe('Lists');
    const data = {};
    if(handle.ready()) {
      data.lists = Lists.find({}).fetch();
    }

    return data;
  },

  getList() {
    return <div>
      {this.data.lists.map(card => {
        const path = FlowRouter.path('/handover-lists/view/', {_id: card._id})
        return <List key={card._id}
                     title={card.title}
                     description={card.description} >
                </List>
      })}
      </div>
  },

  _toggleNav: function(){
    this.refs.leftNav.toggle();
  },

  _back: function(){
    FlowRouter.go('/handover-lists')
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

    let standardActions = [
      { text: 'Done' },
    ];

    return <div>

        { (!this.props.add) ?
          <div>
          <AppBar title="Handover lists" onLeftIconButtonTouchTap={this._toggleNav} ></AppBar>
          <LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
          </div>
        :
          <div>
          <AppBar title="Handover lists / add new"
           iconElementLeft={<IconButton onClick={this._back}><i className="material-icons">keyboard_backspace</i></IconButton>} />
          <LeftNav ref="left</div>Nav" docked={false} menuItems={menuItems} />
          </div>
        }

        <div className="wrap container-fluid m-top-1em">
          <div className="row end-xs float-buttons">
              <div className="col-xs-1">
                  <div className="box">
                    { (!this.props.add) ?
                      <FloatingActionButton className="float-default-top" linkButton={true} href="/handover-lists/add"  >
                        <i className="material-icons">add</i>
                      </FloatingActionButton>
                    :
                      <div></div>
                   }
                  </div>
              </div>
          </div>
          <div className="row">
            { (this.props.add) ?
                <CardEdit add="true"/>
            :
                <div className="flex-cards">
                  {(this.data.lists)? this.getList() : <RefreshIndicator className="loading" size={40} left={80} top={5} status="loading" /> }
                </div>
            }
          </div>
        </div>
      </div>;
  },
});
