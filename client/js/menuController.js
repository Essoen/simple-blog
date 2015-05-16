/**
 * Created by esso on 16.05.15.
 */

Template.Menu.helpers({
    activeIfTemplateIs: function (template) {
        return template === Router.current().lookupTemplate() ? 'active' : '';
    },
    loggedIn : function() {
        return Meteor.user() != null;
    }
});




Template.AdminMenu.events({
    'click #BlogAdmin' : function(){
        Session.set('adminChosenView', 'BlogAdmin');
    },
    'click #UserAdministration' : function(){
        Session.set('adminChosenView', 'UserAdministration');
    },
    'click #NewPost' : function() {
        Session.set('adminChosenView', 'NewPost');
    },
    'click #LogoutButton' : function(){
        Meteor.logout();
    }
});