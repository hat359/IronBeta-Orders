import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51PMaYmLeZsRqYinm0gvelx21jxz4qCl4ji5s1WKtggyQ8N69uKrPwlgBi3UOVtAAq5dPDQ9oDB30M8QBnOoAeE7i00zMNPtmp7', {
  apiVersion: '2024-04-10',
});

export default stripe;
