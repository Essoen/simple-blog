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