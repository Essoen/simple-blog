/**
 * Created by esso on 15.05.15.
 */

Router.configure({
    layoutTemplate: 'MainLayout'
});

Router.route('/', function () {
    this.render('Blog');
});

Router.route('/blog', function(){
    this.redirect('/');
});

Router.route('/admin', function(){
    this.render('Login');
});

Router.route('/about', function(){
    this.render('About')
});

 Router.route('/posts/:_id', function(){
    this.render('Post', {data: Blogposts.findOne({_id: this.params._id})});
 });

