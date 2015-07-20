/**
 * Created by Stein-Otto Svorstøl on 15.05.15.
 */
Meteor.publish(null, function (){
    return Meteor.roles.find({})
});

Meteor.publish(null, function (){
    return Blogposts.find({})
});

Meteor.publish(null, function (){
    return Comments.find({})
});