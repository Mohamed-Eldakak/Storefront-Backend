# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Show all products: `'products/' [GET]`
- Show a specific product: `'products/:id' [GET]`
- Create a product [token required]: `'products/' [POST] (token)`
- Update a product [token required]: `'products/:id' [PATCH] (token)`
- Delete a product [token required]: `'products/:id  [DELETE]`

#### Users
- Show all users [token required]: `'users/' [GET]`
- Show a specific user [token required]: `'users/:id' [GET]`
- Create a user : `'users/' [POST] (token)`
- Update a user [token required]: `'users/:id' [PATCH] (token)`
- Delete a user [token required]: `'users/:id  [DELETE]`

#### Orders
- Create Order [token required]: `'/create/:user_id/' [POST] (token)`
- Show all orders [token required]: `'/getAll/:user_id/' [GET] (token)`
- Show Active orders [token required]: `'/active/:user_id/' [GET] (token)`
- Show Completed orders [token required]: `'/complete/:user_id/' [GET] (token)`
- Update order's status [token required]: `'/:user_id' [PATCH] (token)`
- Cancel Order [token required]: `'/:user_id' [DELETE] (token)`

## Data Shapes
#### Product
-  id
- name
- price
- [OPTIONAL] category

```
Table: products ( 
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    product_name VARCHAR(100) UNIQUE NOT NULL,
    price INTEGER NOT NULL CHECK (price > 0))
```
#### User
- id
- firstName
- lastName
- password

```
Table: users ( 
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    user_name VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL)
```
#### Orders
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)

```
Table: orders (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id uuid REFERENCES users(id) NOT NULL,
    status status NOT NULL,
    CONSTRAINT check_types CHECK (status = 'active' OR status = 'complete'))
```
```
Table : order_products (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    order_id uuid REFERENCES orders(id) NOT NULL,
    quantity integer NOT NULL,
    product_id uuid REFERENCES products(id) NOT NULL
)
```