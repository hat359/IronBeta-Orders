import express from 'express';
import bodyParser from 'body-parser';
// import  connectDB  from './controllers/db';
import { exampleMiddleware } from './middleware/ExampleMiddleware';
import {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} from './controllers/OrderController';
// import { handleSignUp } from './controllers/UserController'; // Assuming UserController is created
// import { createSubscription } from './controllers/SubscriptionController';
import subscriptionRoutes from './routes/subscription'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(exampleMiddleware);

// User Routes
// app.post('/users', handleSignUp);

// Subscription Routes
// app.post('/subscriptions', createSubscription);

// // Order Routes
// app.post('/orders', createOrder);
// app.get('/orders', getAllOrders);
// app.get('/orders/:id', getOrderById);
// app.put('/orders/:id', updateOrder);
// app.delete('/orders/:id', deleteOrder);





app.use(bodyParser.json());

app.use('/api/v1/subscription', subscriptionRoutes);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// connectDB().then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
// });
