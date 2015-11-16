var {
    Styles, AppCanvas
    } = MUI;
var { ThemeManager, LightRawTheme } = Styles;


appLayout = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
        muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
    };
  },
  render() {
    return (
      <AppCanvas>
        {this.props.header}
        {this.props.content}
        {this.props.footer}
      </AppCanvas>
    );
  }
});
