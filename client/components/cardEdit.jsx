var {   RaisedButton,
        CardText,
        Card,
        TextField,
        IconButton,
        CardTitle,
        Avatar,
        DatePicker,
        SelectField,
        DropDownMenu,
        Checkbox,
        ListDivider,
        Paper } = MUI;

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

      <Card initiallyExpanded={true} className="m-top-3em">
        <CardTitle title="New list" subtitle="First, type the title and description."/>
        <div className="card-content">
          <TextField className="title block" floatingLabelText="title" hintText="Title" multiLine={true} /><br/>
          <TextField className="description block" floatingLabelText="Description" hintText="Description" multiLine={true} />
        </div>
        <ListDivider/>
        <CardTitle title="Assignees" subtitle="Check at least one assignee."/>
        <div className="card-content">
            <Avatar size={30}>A</Avatar>  <small>Assignee 1</small>
            <Avatar size={30} color={Colors.deepOrange300} backgroundColor={Colors.purple500}>B</Avatar> <small>Assignee 2</small>
        </div>
        <ListDivider/>
        <div className="card-content">
          <p>Subject</p>
          <Avatar size={30}>A</Avatar> <small>Subject 1</small>
          <Avatar size={30} color={Colors.deepOrange300} backgroundColor={Colors.purple500}>B</Avatar> <small>Subject 2</small>
        </div>
        <ListDivider/>
        <div className="card-content">
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
          <ListDivider/>
          <div className="card-content">
            <p>Create By</p>
            <Avatar size={30}>A</Avatar> <small>Admin 1</small>
          </div>
          <ListDivider/>
          <div className="card-content">
            <SelectField
              floatingLabelText="Privacity"
              valueMember="payload"
              displayMember="text"
              menuItems={privacity} />
          </div>
          <ListDivider/>
          <div className="card-content">
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
          <ListDivider/>
          <div className="card-content">
            <p>Comments</p>
          </div>
        </Card>
    )
  },
});
