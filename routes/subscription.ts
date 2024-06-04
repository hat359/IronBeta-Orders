import { Router } from 'express';
import { createCheckoutSession } from '../controllers/SubscriptionController';

const router = Router();

router.post('/create-subscription', createCheckoutSession);
// router.post('/cancel-subscription/:subscriptionId', cancelSubscription);

export default router;
