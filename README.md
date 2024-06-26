Sure, here’s a comprehensive documentation for your `Order` model and its associated controller functions:

## Order Model Documentation

### Overview

The `Order` model represents an order in the system, capturing essential information such as order number, customer name, total amount, order date, and references to the `User` and `Subscription` models.

### Schema Definition

```typescript
import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './User';
import { ISubscription } from './Subscription';

export interface IOrder extends Document {
  orderNumber: string;
  customerName: string;
  totalAmount: number;
  orderDate: Date;
  user: IUser['_id'];
  subscription: ISubscription['_id'];
}

const OrderSchema: Schema = new Schema({
  orderNumber: { type: String, required: true },
  customerName: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  orderDate: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  subscription: { type: Schema.Types.ObjectId, ref: 'Subscription', required: true },
});

export default mongoose.model<IOrder>('Order', OrderSchema);
```

### Fields

- `orderNumber`: A string representing the order number. This field is required.
- `customerName`: A string representing the name of the customer. This field is required.
- `totalAmount`: A number representing the total amount of the order. This field is required.
- `orderDate`: A date representing the date of the order. Defaults to the current date.
- `user`: A reference to the `User` model, indicating the user associated with the order. This field is required.
- `subscription`: A reference to the `Subscription` model, indicating the subscription associated with the order. This field is required.

### Methods and Usage

The `Order` model uses Mongoose’s `model` method to define the schema and create the model. It supports standard Mongoose operations such as `find`, `findById`, `create`, `update`, and `delete`.

## Order Controller Documentation

### Overview

The `Order` controller handles CRUD operations for the `Order` model, managing HTTP requests and interacting with the database.

### Methods

#### `createOrder`

Creates a new order.

- **URL**: `/orders`
- **Method**: `POST`
- **Request Body**:
  - `orderNumber` (string): The order number.
  - `customerName` (string): The customer’s name.
  - `totalAmount` (number): The total amount of the order.
  - `user` (ObjectId): The ID of the user associated with the order.
  - `subscription` (ObjectId): The ID of the subscription associated with the order.
- **Responses**:
  - `201 Created`: Returns the created order.
  - `500 Internal Server Error`: Failed to create the order.

#### `getAllOrders`

Fetches all orders.

- **URL**: `/orders`
- **Method**: `GET`
- **Responses**:
  - `200 OK`: Returns a list of all orders.
  - `500 Internal Server Error`: Failed to fetch orders.

#### `getOrderById`

Fetches an order by its ID.

- **URL**: `/orders/:id`
- **Method**: `GET`
- **URL Params**:
  - `id` (string): The ID of the order to fetch.
- **Responses**:
  - `200 OK`: Returns the order with the specified ID.
  - `404 Not Found`: Order not found.
  - `500 Internal Server Error`: Failed to fetch the order.

#### `updateOrder`

Updates an existing order by its ID.

- **URL**: `/orders/:id`
- **Method**: `PUT`
- **URL Params**:
  - `id` (string): The ID of the order to update.
- **Request Body**:
  - `orderNumber` (string): The updated order number.
  - `customerName` (string): The updated customer’s name.
  - `totalAmount` (number): The updated total amount.
  - `user` (ObjectId): The updated ID of the user associated with the order.
  - `subscription` (ObjectId): The updated ID of the subscription associated with the order.
- **Responses**:
  - `200 OK`: Returns the updated order.
  - `404 Not Found`: Order not found.
  - `500 Internal Server Error`: Failed to update the order.

#### `deleteOrder`

Deletes an existing order by its ID.

- **URL**: `/orders/:id`
- **Method**: `DELETE`
- **URL Params**:
  - `id` (string): The ID of the order to delete.
- **Responses**:
  - `200 OK`: Returns the deleted order.
  - `404 Not Found`: Order not found.
  - `500 Internal Server Error`: Failed to delete the order.

### Example Usage

#### Creating an Order

```bash
curl -X POST http://localhost:3000/orders -H "Content-Type: application/json" -d '{
  "orderNumber": "12345",
  "customerName": "John Doe",
  "totalAmount": 99.99,
  "user": "60d5ec49a2b3a5a9c8d8d8d8",
  "subscription": "60d5ec49a2b3a5a9c8d8d8d9"
}'
```

#### Fetching All Orders

```bash
curl -X GET http://localhost:3000/orders
```

#### Fetching an Order by ID

```bash
curl -X GET http://localhost:3000/orders/60d5ec49a2b3a5a9c8d8d8da
```

#### Updating an Order

```bash
curl -X PUT http://localhost:3000/orders/60d5ec49a2b3a5a9c8d8d8da -H "Content-Type: application/json" -d '{
  "orderNumber": "54321",
  "customerName": "Jane Doe",
  "totalAmount": 149.99,
  "user": "60d5ec49a2b3a5a9c8d8d8d8",
  "subscription": "60d5ec49a2b3a5a9c8d8d8d9"
}'
```

#### Deleting an Order

```bash
curl -X DELETE http://localhost:3000/orders/60d5ec49a2b3a5a9c8d8d8da
```

This documentation should help developers understand and interact with the `Order` model and its associated controller functions effectively.
