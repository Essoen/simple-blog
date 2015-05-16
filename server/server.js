Meteor.startup(function () {
  // code to run on server at startup

    // See if there are some basic users available. Add if not.
    if (! Meteor.users.findOne({profile: {name: "Admin"}}) )
        addInitiaTestlUsers();
});

function addInitiaTestlUsers(){
    var users = [
        {name:"User",email:"user@example.com",roles:[]},
        {name:"Author",email:"author@example.com",roles:['author']},
        {name:"Admin",email:"admin@example.com",roles:['admin', 'author']}
    ];

    _.each(users, function (user) {
        var id;

        id = Accounts.createUser({
            email: user.email,
            password: "orange1",
            profile: {name: user.name }
        });

        if (user.roles.length > 0) {
            // Need _id of existing user record so this call must come
            // after `Accounts.createUser` or `Accounts.onCreate`
            Roles.addUsersToRoles(id, user.roles);
        }

    })
}


