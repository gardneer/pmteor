Template.applications.events({
  'click .start'() {
    Meteor.call('start', this._id);
  },
  'click .stop'() {
    Meteor.call('stop', this._id);
  },
  'click .delete'() {
    swal({
      title: TAPi18n.__('are-you-sure-title'),
      text: TAPi18n.__('are-you-sure-text'),
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f05050",
      confirmButtonText: TAPi18n.__('delete-confirm'),
      closeOnConfirm: false,
      showLoaderOnConfirm: true,
      html: false
    }, () => {
      Meteor.call('delete', this._id, () => {
        swal({
          title: TAPi18n.__('deleted-application-title'),
          text: TAPi18n.__('deleted-application-text'),
          type: "success",
          confirmButtonColor: "#7266ba"
        });
      });
    });
  },
  'click .absoluteUrl'(event) {
    event.preventDefault();

    // in container then  go to click stop.
    window.open(this.absoluteUrl());
  }
});

Template.updateApplication.events({
  'click .stop'() {
    Meteor.call('stop', this._id);
  }
});
