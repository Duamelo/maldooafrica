# API E-COMMERCE NODE JS DE LA PLATEFORME maldooafrica

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)  [![forthebadge](http://forthebadge.com/images/badges/powered-by-electricity.svg)](http://forthebadge.com)

Il s'agit d'une api d'authentification des clients, de gestion des commandes, des commandes personnalisées, des menus, de la livraison, du e-paiement.

## Pour commencer

    - clone this repo

### Pré-requis

    - node js
    - mongodb
    - postman

### Installation

    - npm install

## Démarrer l'API

    - npm run start

## Routes

### Menus

    - GET       /api/v1/menus
    - GET       /api/v1/menus/:id
    - POST      /api/v1/menus
    - PUT       /api/v1/menus/:id
    - DELETE    /api/v1/menus/:menuId
    - GET       /api/v1/menus/get/count
    - PUT       /api/v1/menus/gallery-images/:id

### Orders

    - GET       /api/v1/orders
    - GET       /api/v1/orders/:id
    - POST      /api/v1/orders
    - PUT       /api/v1/orders/:id
    - DELETE    /api/v1/orders/:orderId
    - GET       /api/v1/orders/get/totalsales
    - GET       /api/v1/orders/get/count
    - GET       /api/v1/orders/userorders/:userId

### Categories

    - GET       /api/v1/categories
    - GET       /api/v1/categories/:id
    - PUT       /api/v1/categories/:id
    - POST      /api/v1/categories
    - DELETE    /api/v1/categories/:categoryId

### Users

    - GET       /api/v1/users/get/count
    - POST      /api/v1/users/login
    - POST      /api/v1/users/register
    - GET       /api/v1/users
    - GET       /api/v1/users/:userId
    - PUT       /api/v1/users/:userId
    - DELETE    /api/v1/users/:userId

## Versions

    - Node js v14.17.6
    - npm v7.24.1

## Auteurs

* **David DOSSEH** _alias_[@Duamelo](https://github.com/Duamelo)

## Licence
