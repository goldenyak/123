'use client';
import CheckoutForm from '@/components/CheckoutForm/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { StripeElementsOptions, loadStripe } from '@stripe/stripe-js';

export default function CheckoutFormPage() {
  const clientSecret = process.env.STRIPE_CLIENT_SECRET_KEY;

  const options: StripeElementsOptions = {
    clientSecret: clientSecret,
    appearance: {
      theme: 'flat',
    },
  };

  const stripePromise = clientSecret ? loadStripe(
    process.env.STRIPE_PUBLISHABLE_KEY!,
  ) : null;

  return (
    <>
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}
