/**
 * Created by esso on 15.05.15.
 */
Template.Blog.helpers({
    'Blogposts' : function(){
        return Blogposts.find({},{
            sort: {time:-1},
            limit: 10
        }).fetch();
    }
});

Template.PostComment.events({
    'click #save': function(event, template){
        Comments.insert({
            postId: this.postId,
            username: template.find('#username').value,
            comment: template.find('#comment').value,
            time: new Date()
        });
        template.find('#username').value = '';
        template.find('#comment').value = '';
    }
});

Template.ShowComments.helpers({
    'Comments': function(template){
        return Comments.find({postId: this.postId}).fetch();
    }
});