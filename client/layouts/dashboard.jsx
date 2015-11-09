var {
    AppBar, LeftNav, MenuItem
    } = MUI;

Dashboard = React.createClass({
  _toggleNav: function(){
    this.refs.leftNav.toggle();
  },
  render() {
    var menuItems = [
      { route: 'get-started', text: 'Get Started' },
      { route: 'customization', text: 'Customization' },
      { route: 'components', text: 'Components' },
      { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
      {
         type: MenuItem.Types.LINK,
         payload: 'https://github.com/callemall/material-ui',
         text: 'GitHub'
      },
      {
         text: 'Disabled',
         disabled: true
      },
      {
         type: MenuItem.Types.LINK,
         payload: 'https://www.google.com',
         text: 'Disabled Link',
         disabled: true
      },
    ];

    return <div>
      <AppBar
        title="Dashboard" onLeftIconButtonTouchTap={this._toggleNav} ></AppBar>

      <LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
    </div>;
  }
});
