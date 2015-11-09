var { AppBar, Tabs, Tab } = MUI;

Header = React.createClass({
  render() {
    var myTabs = (
      <Tabs onChange={_handleTabs} >
          <Tab label="Dashboard" value="dashboard" />
          <Tab label="Appointments" value="appointments"  />
          <Tab label="Patients" value="patients"  />
          <Tab label="Handover lists" value="handover-lists"  />
          <Tab label="Clinical Forms" value="clinical-forms"  />
          <Tab label="Careplans" value="careplans"  />
          <Tab label="Encounters" value="encounters"  />
      </Tabs>
    );
    return (
      <AppBar
        title="ClinicSpot"
        showMenuIconButton={false}
        iconElementRight={myTabs}
      />
    )
  },
});

function _handleTabs(route){
  FlowRouter.go('/'+route);
}
