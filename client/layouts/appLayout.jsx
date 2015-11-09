var {
    Styles,
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
      <div>
        {this.props.header}
        {this.props.content}
        {this.props.footer}
      </div>
    );
  }
});
