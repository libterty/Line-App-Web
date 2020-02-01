# Line Web App

- Simple Line Web App which allows you to login with Line oauth2 login api, after granting token you can access protected routes

- [DEMO](https://sheltered-brushlands-27967.herokuapp.com)


# CopyRight
Copyright © 2020, 11. Released under the MIT License.

## Feature

- Allow User to sigin with Line Login
- Grant access for User to view shops information
- Protect shop routes with JOSN WEB TOKEN
- Grant access for Adminstrator to login to admin routes
- Grant access for Adminstrator to create & edit & delete shops


### Shop Page
- Shop Page allow user with line login advance
![image](https://github.com/libterty/Line-App-Web/blob/master/src/assets/ShopShop.png)

### Admin Page
- Admin Page require Adminstrator login first
- The routes for access is [here](https://sheltered-brushlands-27967.herokuapp.com/signin)
    ```bash
        // you will require adminstrator email && password to login 
        email: root@example.com
        password: 12345678
    ```
- After loging you can access through [here](https://sheltered-brushlands-27967.herokuapp.com/admin/shops), Adminstrator is granted to manage products with CRUD
![image](https://github.com/libterty/Line-App-Web/blob/master/src/assets/ShopCMS.png)

## Environment Setup

- [Vue](https://cli.vuejs.org/zh/guide/)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run dev-build
```

### Lints and fixes files
```
npm run lint
```

### Run compiles and minifies for production
```
npm start
```

# Author
- [11](https://github.com/libterty)

