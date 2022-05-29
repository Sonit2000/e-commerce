const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.body.amount,
    // currency: "usd",
    currency: 'gbp',
    metadata: {
      company: "Ecommer",
    },
    // payment_method_types: ['card'],
    source: "tok_visa",
    payment_method: 'pm_card_visa',
    // capture_method: 'pm_card_us',
  });

  res
    .status(200)
    .json({ success: true, client_secret: paymentIntent.client_secret });
});

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
});
