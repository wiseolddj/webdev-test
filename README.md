# NAP Tech Web Dev Test
___
## My Implementation
Due to the limited time I have had to spend on this example I mainly focused on
building an isomorphic redux framework for the products catalog. This would show some of my 
understanding in building a redux application.

I have implemented the following:

- Uses react redux
- Unit tests in mocha chai enzyme (not complete)
- Uses styled-components for css rendering
- isomorphic starting point with routing (not fully implemented)
- implemented webpack build tools with babel for es6 and react

Most of my work is in the /app and /test folders along with updating the landing-page route.

This is a fairly rough implementation and I would like to:

- implement filters & sorting
- write more tests and used pure TDD
- spend more time on the design (this was a simple implementation)
- reassess the size of the react components and the use of styled-components

to run:
```
npm run build
npm start

```
Then go to `http://localhost:3000`


For dev run
```
npm run dev:start
```
Then go to `http://localhost:8080`
___

This is a chance for you to show us how you think we should display our products.

## Task

* Build a product catalogue experience based on two sample APIs.

### Product lists
    http://127.0.0.1:3000/api/products

### Product details
    http://127.0.0.1:3000/api/product/$id  

### You might want to include

* Implement pagination/infinite scroll
* Filters and sorts (eg. lowest price first, select a size)
* A mix of server and clientside rendering
* It should be device agnostic
* A quick view or extended view for product

### Things to note

* We want to see your understanding of JavaScript (including ES6 and ES7) so please stick to VanillaJS.
* Aesthetics are very important to the Net-a-porter brand but so is performance.
* Don't worry about header/footer.

The following are examples of the existing mobile and desktop listing pages:

* [Mobile](public/images/mobile.jpg)
* [Desktop](public/images/desktop.jpg)

You can replicate these or if you think there is something we should be doing, or it should work another way - feel free to be creative but tell us why and what you think we are doing wrong.


## Setup

To run the app:

```shell
$ npm install
$ npm start
```

# Apis

## Products

Returns a list of products.

Example:

```
GET /api/products/?offset=0&limit=60
HTTP 200
Content-Type: application/json

{
    "offset": 0,
    "limit": 60,
    "total": 274,
    "data": [{
        "id": 540559,
        "name": "Roadmaster Waxed-Cotton Jacket",
        "price": "£550",
        "designer": "Belstaff",
        "image": {
            outfit: "//cache.net-a-porter.com/images/products/543002/543002_ou_sl.jpg"
        }
    }, ...]
}
```

Parameters:

* `offset` (optional) - defaults to 0
* `limit` (optional) - defaults to 60

## Products details

Example:

```
GET /api/product/$id
HTTP 200
Content-Type: application/json

{
    id: 504815,
    name: "Cutout stretch-jersey dress",
    price: "£1270",
    designer: "Donna Karan",
    onSale: false,
    sizes: [
        {
            id: "00004_S_Clothing",
            name: "S"
        },
        {
            id: "00005_M_Clothing",
         name: "M"
        },
        {
            id: "00006_L_Clothing",
            name: "L"
        },
        {
            id: "00007_XL_Clothing",
            name: "XL"
        }
    ],
    badges: [
        "In_Stock"
    ],
    images: {
        outfit: "//cache.net-a-porter.com/images/products/504815/504815_ou_sl.jpg",
        small: "//cache.net-a-porter.com/images/products/504815/504815_in_sl.jpg",
        large: "//cache.net-a-porter.com/images/products/504815/504815_in_pp.jpg"
    }
}
```
