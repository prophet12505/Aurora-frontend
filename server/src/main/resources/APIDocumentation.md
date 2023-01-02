
# API documentation
=====User related===============
## SIGNUP
sign up
### HTTP REQUEST
POST /signup
back end signup up user(if not duplicated email), write email to user account
### REQUEST BODY
| Name     | Type   | Description          | Required(default yes) |
|----------|--------|----------------------|--)---------------------|
| name     | String | name of the user     |                       |
| email    | String | email of the user    |                       |
| password | String | password of the user |                       |
### RESPONSE BODY(signupDTO)
| Name             | Type    | Description                    | Required(default yes) |
|------------------|---------|--------------------------------|-----------------------|
| signed_up        | Boolean | signed up successfully or not  |                       |
| signup_error_msg | String  | if sign up failed, the message |                       |
| name             | String  | name of the user               |                       |
| email            | String  | email of the user              |                       |
| password         | String  | password of the user           |                       |

## VERIFY EMAIL
VERIFY EMAIL
### HTTP REQUEST
GET /verify-email/{token}  
token is encoded email and password, back end produce login logic, set up email_is_verified = true

### RESPONSE BODY(User) -- immediately log in after verification 
| Name             | Type    | Description                    | Required(default yes) |
|------------------|---------|--------------------------------|-----------------------|
| name             | String  | name of the user               |                       |
| email            | String  | email of the user              |                       |
| password         | String  | password of the user           |                       |

## LOGIN
login
### HTTP REQUEST
POST /login  
token is encoded email and password, back end produce login logic, set up email_is_verified = true
### REQUEST BODY
| Name     | Type   | Description          | Required(default yes) |
|----------|--------|----------------------|-----------------------|
| email    | String | email of the user    |                       |
| password | String | password of the user |                       |
### RESPONSE BODY(loginDTO)
| Name            | Type    | Description                   | Required(default yes) |
|-----------------|---------|-------------------------------|-----------------------|
| logged_in       | Boolean | logged in successfully or not |                       |
| login_error_msg | String  | if log in failed, the message |                       |
| name            | String  | name of the user              |                       |
| email           | String  | email of the user             |                       |
| password        | String  | password of the user          |                       |

=============product related===============================
## GET ALL PRODUCTS
products
### HTTP REQUEST
GET /products  
back end use repository quickly get all
### RESPONSE BODY
List<Products>

## GET PRODUCTS BY ID
GET PRODUCTS BY ID
### HTTP REQUEST
GET /products/{id}  
back end use repository quickly get by id
### RESPONSE BODY
Products entity

## ADD CART
ADD CART
### HTTP REQUEST
GET /add-to-cart/{user_id,product_id}
back end create a row in cart_item
### RESPONSE BODY
Products entity (actually it's useless, don't need to respond anything or we can use general message DTO)

## CREATE PRODUCT
### HTTP REQUEST
POST /create-a-product
### REQUEST BODY
product
### RESPONSE BODY
generalMessageDTO