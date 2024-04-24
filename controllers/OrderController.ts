import { Request, Response } from 'express';
import Order, { IOrder } from '../models/Order';

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { orderNumber, customerName, totalAmount } = req.body;
    const newOrder: IOrder = new Order({
      orderNumber,
      customerName,
      totalAmount,
    });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create order' });
  }
};

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders: IOrder[] = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};

export const getOrderById = async (req: Request, res: Response) => {
  try {
    const orderId: string = req.params.id;
    const order: IOrder | null = await Order.findById(orderId);
    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ error: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch order' });
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const orderId: string = req.params.id;
    const { orderNumber, customerName, totalAmount } = req.body;
    const updatedOrder: IOrder | null = await Order.findByIdAndUpdate(
      orderId,
      { orderNumber, customerName, totalAmount },
      { new: true }
    );
    if (updatedOrder) {
      res.json(updatedOrder);
    } else {
      res.status(404).json({ error: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update order' });
  }
};

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const orderId: string = req.params.id;
    const deletedOrder: IOrder | null = await Order.findByIdAndDelete(orderId);
    if (deletedOrder) {
      res.json(deletedOrder);
    } else {
      res.status(404).json({ error: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete order' });
  }
};
