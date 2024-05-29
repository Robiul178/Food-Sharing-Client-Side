import {
    useStripe,
    useElements,
    CardElement,
} from '@stripe/react-stripe-js';
import { Button } from 'evergreen-ui'
import { useEffect, useState } from 'react';
import { MdOutlinePayment } from 'react-icons/md';
import useAuth from '../../Hook/useAuth'
import swal from 'sweetalert'


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const { user } = useAuth();

    const price = 50;


    useEffect(() => {
        fetch("https://server-wine-ten.vercel.app/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!elements || !stripe) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        //confirm payment

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                }
            }
        })
        if (confirmError) {
            console.log('confirmError', confirmError)
        } else {
            if (paymentIntent.id) {
                swal("Good job! You have a great heart", `Your Payment Id :${paymentIntent.id}`, "success");
            }
        }


    };

    return (
        <div className='border p-4 rounded-lg bg-white'>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <Button type="submit" disabled={!stripe || !clientSecret}
                    marginY={8} marginRight={12} >
                    <MdOutlinePayment className="text-xl mr-2" /> PAY
                </Button>
            </form>
        </div>
    );


}


export default CheckoutForm;