<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>



## Setup Project Locally



- [download the project ]
- [install composer](https://getcomposer.org/download/)
- open the project in your terminal
- cd to the project directory
- cd to core directory. `cd core`
- run `composer install`
- npm install
- npm run dev
- you will need to create a database in your mysql server
- setup your database in .env file in the core directory, change the DB_DATABASE & DB_USERNAME & DB_PASSWORD
- run `php artisan migrate`
- run `php artisan serve`
- open the project in your browser
- setup mailing service in .env file in the core directory, change the MAIL_MAILER & MAIL_HOST & MAIL_PORT & MAIL_USERNAME & MAIL_PASSWORD & MAIL_ENCRYPTION & EMAIL_TO

## Setup Project on Server Production

- open the project in your terminal
- cd to the project directory
- cd to core directory. `cd core`
- run `npm run build`
- go to public directory. `cd public`
- copy build directory to project root path (not in the core directory. one level back from core directory you will see another build directory just replace the new one with it)
- zip the entire project
- upload the zip file to your server
- unzip the file
- open .env file in the core directory
- setup database in .env file, change the DB_DATABASE & DB_USERNAME & DB_PASSWORD

## tips 
- every time you make changes to the project you will need to run `npm run build` not in the server but in your local machine and then upload the build directory to the server