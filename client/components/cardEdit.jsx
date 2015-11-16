var {   RaisedButton,
        CardText,
        TextField,
        IconButton,
        CardTitle,
        Avatar,
        DatePicker,
        SelectField,
        DropDownMenu,
        Checkbox } = MUI;

var Colors = MUI.Styles.Colors;

CardEdit = React.createClass({
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

    let priorities = [
       { payload: '1', text: 'High' },
       { payload: '2', text: 'Medium' },
       { payload: '3', text: 'Low' },
    ];

    let status = [
       { payload: '1', text: 'Open' },
       { payload: '2', text: 'Closed' },
       { payload: '3', text: 'Stopped' },
    ];

    let privacity = [
       { payload: '1', text: 'Public' },
       { payload: '2', text: 'Private' },
    ];

    return (

      <div className="row">

          <div className="col-xs-12">
            <TextField className="title" floatingLabelText="title" hintText="Title" multiLine={true} /><br/>
              <TextField className="description" floatingLabelText="Description" hintText="Description" multiLine={true} />
          </div>


          <div className="col-xs-12 m-top-1em">
            <p>Assignees</p>
            <Avatar size={30}>A</Avatar>  <small>Assignee 1</small>
            <Avatar size={30} color={Colors.deepOrange300} backgroundColor={Colors.purple500}>B</Avatar> <small>Assignee 2</small>
          </div>


          <div className="col-xs-12 m-top-1em">
            <p>Subject</p>
            <Avatar size={30}>A</Avatar> <small>Subject 1</small>
            <Avatar size={30} color={Colors.deepOrange300} backgroundColor={Colors.purple500}>B</Avatar> <small>Subject 2</small>
          </div>


          <div className="row m-top-1em">
            <DatePicker
              floatingLabelText="Date due"
              hintText="Date due"
              mode="landscape"
              />
            <SelectField
              floatingLabelText="Priority"
              valueMember="payload"
              displayMember="text"
              menuItems={priorities} />

            <SelectField
              floatingLabelText="Status"
              valueMember="payload"
              displayMember="text"
              menuItems={priorities} />
          </div>


          <div className="col-xs-12 m-top-1em">
            <p>Create By</p>
            <Avatar size={30}>A</Avatar> <small>Admin 1</small>
          </div>



          <SelectField
            floatingLabelText="Privacity"
            valueMember="payload"
            displayMember="text"
            menuItems={privacity} />



          <div className="col-xs-12 m-top-1em">
            <p>Tasks</p>
              <Checkbox
                name="checkboxName1"
                value="checkboxValue1"
                label="Task1"/>
                <Checkbox
                name="checkboxName2"
                value="checkboxValue2"
                label="Task2"/>
            <p>Completed tasks</p>
              <Checkbox
                name="checkboxName1"
                value="checkboxValue1"
                label="Task1"/>
                <Checkbox
                name="checkboxName2"
                value="checkboxValue2"
                label="Task2"/>
          </div>


          <div className="col-xs-12 m-top-1em">
            <p>Comments</p>
          </div>
        </div>


    )
  },
});
