/**
 * Created by esso on 15.05.15.
 */
Meteor.publish(null, function (){
    return Meteor.roles.find({})
});

Meteor.publish(null, function (){
    return Blogposts.find({})
});