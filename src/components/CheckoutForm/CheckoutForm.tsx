'use client';

import React, { FormEvent, useState } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:3000/instruction',
      },
    });

    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage('Validation card error');
    } else {
      setMessage('An unexpected error occurred.');
    }

    setIsLoading(false);
  };

  return (
    <div style={{ backgroundColor: '#F7F8FE' }}>
      <form id='payment-form' onSubmit={handleSubmit}>
        <PaymentElement id='payment-element' />
        <button
          disabled={isLoading || !stripe || !elements}
          id='submit'
          style={{
            padding: '15px',
            backgroundColor: '#50AEF1',
            borderRadius: '20px',
            border: 'none',
            color: 'white',
            marginTop: '30px',
          }}
        >
          <span id='button-text'>
            {isLoading ? (
              <div className='spinner' id='spinner'></div>
            ) : (
              'Pay now'
            )}
          </span>
        </button>
        {message && <div id='payment-message'>{message}</div>}
      </form>
    </div>
  );
}
