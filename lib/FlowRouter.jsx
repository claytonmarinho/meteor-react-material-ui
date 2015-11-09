FlowRouter.route("/", {
  action() {
    name: "login",
    ReactLayout.render(appLayout, {
      content: <LoginLayout />,
    });
  }
});

FlowRouter.route('/dashboard', {
  action() {
    name: "dashboard",
    ReactLayout.render(appLayout, {
      header: <Header />,
      content: <Dashboard />,
      footer: <Footer />
    });
  }
});

FlowRouter.route('/appointments', {
  action() {
    name: "appointments",
    ReactLayout.render(appLayout, {
      header: <Header />,
      content: <Appointments />,
      footer: <Footer />
    });
  }
});

FlowRouter.route('/careplans', {
  action() {
    name: "careplans",
    ReactLayout.render(appLayout, {
      header: <Header />,
      content: <Careplans />,
      footer: <Footer />
    });
  }
});


FlowRouter.route('/clinical-forms', {
  action() {
    name: "clinical-forms",
    ReactLayout.render(appLayout, {
      header: <Header />,
      content: <ClinicalForms />,
      footer: <Footer />
    });
  }
});

FlowRouter.route('/encounters', {
  action() {
    name: "encounters",
    ReactLayout.render(appLayout, {
      header: <Header />,
      content: <Encounters />,
      footer: <Footer />
    });
  }
});

FlowRouter.route('/handover-lists', {
  action() {
    name: "handover-lists",
    ReactLayout.render(appLayout, {
      header: <Header />,
      content: <HandoverLists />,
      footer: <Footer />
    });
  }
});

FlowRouter.route('/patients', {
  action() {
    name: "patients",
    ReactLayout.render(appLayout, {
      header: <Header />,
      content: <Patients />,
      footer: <Footer />
    });
  }
});
