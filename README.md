# SuperYachts Contact Book API

## Installation

Use composer and npm to install the necessary packages.

```bash
composer install
npm install
npm run dev
```

Or (with Yarn)

```bash
composer install
yarn install
yarn dev
```
## Environment
First, please create your .env, simply rename the .env.example file to '.env'

You will need to setup a local server to run this application, the easiest way is to use the built-in PHP server.
Please ensure PHP >7.4 is installed on your machine.

Please create 'database.sqlite' in the /database directory.

```bash
php artisan serve
php artisan migrate
```
You can now access the application, using the URL provided in the terminal.

## Using the application
If you're using the application for the first time, you'll want to click "Don't have an account?" to register.

Once registered, you can create, view, edit and delete contacts. You may also search contacts by name, email, mobile, landline and filter by favourite contacts.

Clicking the heart icon will favourite/unfavourite a contact.


 


## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
