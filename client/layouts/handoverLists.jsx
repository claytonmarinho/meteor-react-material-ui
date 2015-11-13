var {
    AppBar, AppCanvas, GridList, LeftNav, MenuItem, RefreshIndicator, IconButton, FontIcon, FloatingActionButton, ToggleStar, Dialog,
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
        const path = FlowRouter.path('/handover-lists/list/', {_id: card._id})
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
        <AppBar title="Handover Lists" onLeftIconButtonTouchTap={this._toggleNav} ></AppBar>

        <LeftNav ref="leftNav" docked={false} menuItems={menuItems} />

        <Dialog
          autoDetectWindowHeight={true}
          autoScrollBodyContent={true}
          onRequestClose={this._closedNewCard}
          actions={standardActions}
          ref="editCard">
          <CardEdit />
        </Dialog>

        <div className="wrap container-fluid m-top-1em">

          <div className="row end-xs float-buttons">
              <div className="col-xs-1">
                  <div className="box">
                    <FloatingActionButton className="float-default-top" onTouchTap={this._openAddCard}  >
                      <i className="material-icons">add</i>
                    </FloatingActionButton>
                  </div>
              </div>
          </div>


          <div className="row">
            <div className="flex-cards">
              {(this.data.lists)? this.getList() : <RefreshIndicator className="loading" size={40} left={80} top={5} status="loading" /> }
            </div>
          </div>
        </div>
      </div>;
  },

  _openAddCard() {
   this.refs.editCard.show();
 },

  _closedAddCard() {
   alert('save');
  },
});
