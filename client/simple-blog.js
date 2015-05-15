/**
 * Created by esso on 15.05.15.
 */

Blogposts = new Mongo.Collection("Blogposts");



Template.blogApp.helpers({
   'userIsAdmin' : function(){
       return Meteor.user().roles.indexOf("admin") != -1;
    }
});

Template.blogUserApp.helpers({
   'Blogposts' : function(){
       return Blogposts.find({},{
           sort: {time:-1},
           limit: 10
       }).fetch();
   }
});

Template.blogAdminApp.helpers({
    'Blogposts' : function(){
        return Blogposts.find({},{
            sort: {time:-1},
            limit: 10
        }).fetch();
    }
});

Template.blogAdminApp.events({
    'click #deletePost' : function(event, template){
        Blogposts.remove({
            _id: this._id
        });
    }
});

Template.blogPostEntry.events({
    'click button': function (event, template) {
        Blogposts.insert({
            time: new Date(),
            author: null,
            title: template.find("#title").value,
            content: template.find('#content').value
        });

        template.find('#title').value = ''; // Empty field
        template.find('#content').value = ''; // Empty field

    }
});