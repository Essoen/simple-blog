/**
 * Created by esso on 15.05.15.
 */

Session.set("adminChosenView", "BlogAdmin");

Template.Login.helpers({
    'userIsAdmin' : function(){
        return Meteor.user() && Meteor.user().roles.indexOf("admin") != -1;
    }
});

Template.Admin.helpers({
    chosenViewIs : function(view){
        return view == Session.get("adminChosenView");
    }
});

Template.Admin.events({
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

Template.BlogAdmin.helpers({
    'Blogposts' : function(){
        return Blogposts.find({},{
            sort: {time:-1},
            limit: 10
        }).fetch();
    }
});

Template.UserAdministration.helpers({
    'User' : function(){
        return Meteor.users.find().fetch();
    }
});

Template.Admin.events({
    'click #deletePost' : function(event, template){
        if (Meteor.user()._id == this._id)
            return;
        Blogposts.remove({
            _id: this._id
        });
    }
});

Template.NewPost.events({
    'click button': function (event, template) {
        Blogposts.insert({
            time: new Date(),
            author: Meteor.user(),
            title: template.find("#title").value,
            content: template.find('#content').value
        });

        template.find('#title').value = ''; // Empty fields
        template.find('#content').value = '';

    }
});

Template.CreateUser.helpers({
    'Roles' : function(){
        return Session.get("availableRoles");
    }
});
Template.CreateUser.events({
   'click button #create' : function(event, template){
       var user = {
           email: template.find("#name").value,
           password: template.find("#password").value,
           profile: {
               name: template.find("#name").value
            }
       };
       Accounts.createUser(newUser);
       Roles.addUsersToRoles(newUser, roles);

   }
});