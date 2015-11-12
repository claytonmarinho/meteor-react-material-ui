var { Card, CardActions, RaisedButton, CardText, TextField, IconButton } = MUI;

NewCard = React.createClass({
  toogleCard() {
     // Set the checked property to the opposite of its current value
     $('.newCard').toggleClass('expanded');

     if($('.newCard').hasClass('expanded')){
       $('.newCard input[type=text]').eq(0).focus();
     }

  },

  addNewCard() {
    var titleField =$('.newCard .title input');
    var DescField = $('.newCard .description textarea');

    var data = {
      title: titleField.val(),
      description: DescField.val(),
      createdDate: new Date()
    }

    if(data.title != '' && data.description != '') {
      Meteor.call('addNewCard', data);
      $(titleField).val('');
      $(DescField).val('');
    }

  },

  render() {
    return (

        <Card className="newCard col-xs-12 col-md-6">
          <CardText className="newCardClick" onClick={this.toogleCard}>
            Add new card
          </CardText>

          <div className="newCardFields container">
            <CardActions>
              <div className="col-xs-12">
                <div className="col-xs-6">
                  <TextField required className="title" hintText="Title" />
                </div>
                <div className="col-xs-6">
                  <TextField required className="description" hintText="Description" multiLine={true} />
                </div>
              </div>

              <div className="col-xs-12">
                <IconButton iconClassName="material-icons" tooltipPosition="top-center"
   tooltip="Setup Alarm">access_alarm</IconButton>

                <IconButton iconClassName="material-icons" tooltipPosition="top-center"
                tooltip="Set Color">palette</IconButton>
                <IconButton iconClassName="material-icons" tooltipPosition="top-center"
                tooltip="App Patient">person_add</IconButton>
                <IconButton iconClassName="material-icons" tooltipPosition="top-center"
                tooltip="Favorite">star_border</IconButton>
              </div>


              <RaisedButton label="Done" onClick={this.addNewCard} />
            </CardActions>
          </div>
        </Card>


    )
  },
});
