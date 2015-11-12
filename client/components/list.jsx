var { Avatar, Card, CardTitle, CardHeader, CardMedia, CardActions, FlatButton, CardText } = MUI;

List = React.createClass({
  render() {
    return (
        <Card className="card">
          <CardTitle title={this.props.title} subtitle="Subtitle"/>

          <CardHeader
            title="Pacient 1"
            subtitle="60% complete"
            avatar="http://lorempixel.com/100/100/nature/"/>

          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardActions>
            <FlatButton label="Action1"/>
            <FlatButton label="Action2"/>
          </CardActions>
        </Card>
    )
  },
});
