import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe =  price * 100; //Porque stripe toma el valor del precio en centavos
    const publishableKey = 'pk_test_51J3PXBJ6WyLTftAVHSAGXDg8lRcYmLdkuCJqe2vbrI1mzLX0fetiI9piHmNS6K7dToBZBzyCVdFdi4PbkMEUzQyK00h5hWnjtv';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful');
    }


    return(
        <StripeCheckout 
            label="Pay Now"
            name= "GochoStore"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;