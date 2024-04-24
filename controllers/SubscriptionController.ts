import { Request, Response } from 'express';
import Subscription, { ISubscription } from '../models/Subscription';

// Create a new subscription
export const createSubscription = async (req: Request, res: Response) => {
  try {
    const { type, duration, price } = req.body;
    const newSubscription: ISubscription = new Subscription({ type, duration, price });
    await newSubscription.save();
    res.status(201).json(newSubscription);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create subscription' });
  }
};

// Get all subscriptions
export const getAllSubscriptions = async (req: Request, res: Response) => {
  try {
    const subscriptions: ISubscription[] = await Subscription.find();
    res.json(subscriptions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch subscriptions' });
  }
};

// Get a single subscription by ID
export const getSubscriptionById = async (req: Request, res: Response) => {
  try {
    const subscriptionId: string = req.params.id;
    const subscription: ISubscription | null = await Subscription.findById(subscriptionId);
    if (subscription) {
      res.json(subscription);
    } else {
      res.status(404).json({ error: 'Subscription not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch subscription' });
  }
};

// Update a subscription by ID
export const updateSubscription = async (req: Request, res: Response) => {
  try {
    const subscriptionId: string = req.params.id;
    const { type, duration, price } = req.body;
    const updatedSubscription: ISubscription | null = await Subscription.findByIdAndUpdate(
      subscriptionId,
      { type, duration, price },
      { new: true }
    );
    if (updatedSubscription) {
      res.json(updatedSubscription);
    } else {
      res.status(404).json({ error: 'Subscription not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update subscription' });
  }
};

// Delete a subscription by ID
export const deleteSubscription = async (req: Request, res: Response) => {
  try {
    const subscriptionId: string = req.params.id;
    const deletedSubscription: ISubscription | null = await Subscription.findByIdAndDelete(subscriptionId);
    if (deletedSubscription) {
      res.json(deletedSubscription);
    } else {
      res.status(404).json({ error: 'Subscription not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete subscription' });
  }
};
