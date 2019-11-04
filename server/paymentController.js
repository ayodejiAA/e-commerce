import Stripe from 'stripe';

export const paymentController = (req, res) => {
  const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

  const { token, amount } = req.body;
  const body = {
    source: token.id,
    amount,
    currency: 'usd'
  };

  stripe.charges.create(body, (error, response) => {
    if (error) return res.status(500).json({ error });
    res.status(200).json({ response });
  });
};
