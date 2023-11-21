import {
  useStripe,
  useElements,
  CardNumberElement,
} from '@stripe/react-stripe-js';
import { FormEvent } from 'react';

function usePaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const cardElement = elements?.getElement(CardNumberElement);

    if (!stripe || !elements || !cardElement) {
      return;
    }

    // const stripeResponse = await stripe.createPaymentMethod({
    //   type: 'card',
    //   card: cardElement
    // });

    // console.log('stripeResponse', stripeResponse);

    // const { error, paymentMethod } = stripeResponse;

    // if (error || !paymentMethod) {
    //   return;
    // }

    const { token } = await stripe.createToken(cardElement);
    console.log(token?.id);

    // const paymentMethodId = paymentMethod.id;

    fetch(`http://localhost:3001/create-customer`, {
      method: 'POST',
      body: JSON.stringify(({
        paymentMethodId,
        amount: amountToCharge
      })),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
    })
  };

  return {
    handleSubmit,
  };
}

export default usePaymentForm;
