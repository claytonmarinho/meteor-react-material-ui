var {
  Card, CardText, RaisedButton
} = MUI;

LoginLayout = React.createClass({
  render() {
    return <div>
      <Card>
        <CardText>
          <h1 class="center">ClinicSpot</h1>

          <p>A simple, transparent and accountable messaging tool for medical professionals</p>

            <RaisedButton linkButton={true} secondary={true} href="/dashboard" label="LogIn" />

        </CardText>
      </Card>
    </div>;
  }
});
