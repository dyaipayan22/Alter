import Stripe from 'stripe';
import dotenv from 'dotenv';
import expressAsyncHandler from 'express-async-handler';

dotenv.config();
const stripe = Stripe(process.env.STRIPE_PUBLISHABLE_KEY);

export const stripePayment = expressAsyncHandler(async (req, res) => {
  try {
    const user = req.user;
    const { items } = req.body;

    const lineItems = items.map((item) => ({
      price_data: {
        currency: 'inr',
        product_data: {
          name: item.name,
        },
        unit_amount: item.price,
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      payment_method_types: ['card'],
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/cart`,
    });

    res.json({ url: session.url });
  } catch (error) {
    res.status(500);
    throw new Error('Something went wrong');
  }
});
