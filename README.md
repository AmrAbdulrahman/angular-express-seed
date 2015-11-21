# Angular & Express Seed Application

## Stack
- Bootstrap
- Express
- Angular
  - restangular
  - ui.bootstrap
  - ui.router
  - lodash
- Grunt
  - es6 (babel)
  - concat
  - jshint
  - less
  - watch

## Install
If you don't have grunt-cli installed:<br>
```
npm install -g grunt-cli
```

then,

```
git clone git@github.com:AbuMuslimAmr/angular-express-seed.git
cd <project-root>
sudo npm install
bower install
```

## Build
```
grunt
```

## Run express server:
open new terminal tab:<br>
```
node express
```
<br>
You can configure port from 'express/express-config.js'

App then should be up and running on port 3000 (by default).
