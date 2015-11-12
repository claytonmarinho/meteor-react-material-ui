var {
    AppBar, LeftNav, MenuItem
    } = MUI;

Appointments = React.createClass({
  _toggleNav: function(){
    this.refs.leftNav.toggle();
  },
  render() {
    var menuItems = [
      { route: '/appointment/today', text: 'Today' },
      { route: '/appointment/next-7-days', text: 'Next 7 days' },
      { route: '/appointment/next-14-days', text: 'Next 14 days' },
      { route: '/appointment/next-month', text: 'Next month' },
      { type: MenuItem.Types.SUBHEADER, text: '' },
      { route: '/appointment/all', text: 'All' },
      { route: '/appointment/starred', text: 'Starred' },
      { route: '/appointment/archived', text: 'Archived' },
    ];

    return <div>
      <AppBar
        title="Appointments" onLeftIconButtonTouchTap={this._toggleNav} ></AppBar>

      <LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
    </div>;
  }
});
