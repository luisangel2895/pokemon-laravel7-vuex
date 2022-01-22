# POKEDEX

Project to emulate a pokedex of pokemon when we searh our favorite pokemon and see its features, you can see the project here: ➡ [Go to the project](https://pokemon.angelorellana.com/)

# Stack

For this project i use the stack of:

-   Laravel 7
-   Vuejs 3
-   Vuex
-   Bootstrap 5

## Images

We can see a image of prefiew of this project, when this have a interactive search that recomend you the pokemon and show the pokemon selected of written in below part.

![image-pokemon]()

# Run

To run this project we need to build the laravel, and for that we need to have installed composer, so after in the folder of the project:

```php
php composer install
```

After we need to install nodem and build the part of vuejs of the project with command:

```js
npm i
```

```js
npm run development
```

If we want we can run the project in watch mode for more efficient development with the command:

```js
npm run watch
```

Finally we need to creat a file with our environment variables (.env) and in this file we need to have almost :

```php
APP_NAME=Laravel
APP_ENV=production
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost
```

NOTE: We can generate the key of the project with the command:

```php
php artisan key:generate
```

# DabaBases

This project dont have migrations, all the informacion is gotten by pokemon API, you can get more information of this API [click here.](https://pokeapi.co/)
