# ECommerce API

A Node.js RESTful API for an eCommerce platform, built with Express, Knex, and Swagger for documentation.

## Features
- User authentication and registration
- Product management (CRUD)
- Cart operations
- Order management
- Product reviews
- JWT-based authentication middleware
- API documentation with Swagger UI

## Getting Started

### Prerequisites
- Node.js >= 14.x
- npm
- PostgreSQL or MySQL (configured in `db/knexfile.js`)

### Installation
1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd eCommerce
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   - Copy `.env.example` to `.env` and fill in your database and JWT secrets.
4. Run database migrations:
   ```sh
   npx knex migrate:latest
   ```
5. Start the server:
   ```sh
   npm start
   ```

## API Documentation
Swagger UI is available at [http://localhost:3000/api-docs](http://localhost:3000/api-docs).

## Project Structure
```
index.js
package.json
swagger.js
config/
controllers/
db/
middleware/
routes/
```

## Main Endpoints
- `/api/auth/register` - Register a new user
- `/api/auth/login` - Login
- `/api/product/` - CRUD for products
- `/api/cart/` - Cart operations
- `/api/order/` - Order operations
- `/api/review/` - Product reviews

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

