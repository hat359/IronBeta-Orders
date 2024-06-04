import { Request, Response } from 'express';
import stripe from '../config/stripe';



interface StoreItem {
  name: string;
  priceInCents: number;
}

const storeItems: Map<Number, StoreItem> = new Map([
  [1, { name: 'Item One', priceInCents: 10000000 }],
  [2, { name: 'Item Two', priceInCents: 20000 }],
  // Add more items as needed
]);

export default storeItems;


export const createCheckoutSession = async (req: Request, res: Response): Promise<void> => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: req.body.map((item: { id: number; quantity: number }) => {
        const storeItem = storeItems.get(item.id);
        if (!storeItem) {
          throw new Error(`Item with ID ${item.id} not found`);
        }
        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        };
      }),
      success_url: 'https://netflix.com',
      cancel_url: 'https://apple.com',
    });
    console.log(session.url)
    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


    




// export const cancelSubscription = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { subscriptionId } = req.params;

//     // The correct method is stripe.subscriptions.del(subscriptionId)
//     const deletedSubscription = await stripe.subscriptions.cancel(subscriptionId);

//     res.status(200).json(deletedSubscription);
//   } catch (error) {
//     console.error('Error cancelling subscription:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };


const getPriceId = (plan: string): string => {
  switch (plan) {
    case 'basic':
      return 'price_1JXXlq2eZvKYlo2C5mpyNaXD';
    case 'premium':
      return 'price_1JXXmC2eZvKYlo2CUcVKl0h7';
    case 'enterprise':
      return 'price_1JXXmQ2eZvKYlo2CL8gJGkSa';
    default:
      throw new Error('Invalid subscription plan');
  }
};
