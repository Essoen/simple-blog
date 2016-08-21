# simple-blog
A simple blog and CMS, built with [Meteor](http://meteor.com). Uses [meteor-roles](https://github.com/alanning/meteor-roles
), [iron-router](https://github.com/iron-meteor/iron-router), [Froala Editor](https://github.com/froala/froala-reactive) and [Bootstrap](http://getbootstrap.com).

Can be seen live at [simpleblogapp.meteor.com](http://simpleblogapp.meteor.com/). If you want to try posting, you can log in with `admin@example.com` and the password `orange1`.

## Installation
1. Install [Meteor](https://www.meteor.com/) 
2. Get all the files and start the server:
```bash
$ git clone git@github.com:essoen/simple-blog.git
$ cd simple-blog
$ meteor
```

## Deployment 
We use Docker for simplicity. Clone the repo with `docker pull essoen/simple-blog`, and simply run the image with 

    docker run -d \
        -e ROOT_URL=http://yourdomain.com \
        -e MONGO_URL=mongodb://url \
        -e MONGO_OPLOG_URL=mongodb://oplog_url \
        -p 8080:80 \
        essoen/simple-blog

To start both a Mongo-instance and the app, we use Compose. Run `docker-compose up`.
