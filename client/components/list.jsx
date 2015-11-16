// Listing Cards

var { Avatar, Card, CardTitle, CardHeader, CardMedia, CardActions, FlatButton, CardText } = MUI;

List = React.createClass({

  hideAddCard() {
    $('.newCard').removeClass('expanded');
  },

  render() {
    return (
        <Card className="card margin-1em" onMouseOver={this.hideAddCard}>
          <CardTitle title={this.props.title} subtitle="lorem-ipsum"/>

          <CardHeader
            title="Pacient 1"
            subtitle="60% complete"
            avatar="http://lorempixel.com/100/100/nature/"/>

          <CardText>
            {this.props.description}
          </CardText>
          <CardActions>
            <FlatButton label="Action"/>
          </CardActions>
        </Card>
    )
  },
});
