import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripCheckoutButton = ({price}) => {
    const priceForStripe = price * 100 // The unit in stripe system is cent, so we much convert from dollar to cent
    const publishableKey = 'pk_test_51JgWSyCjWv8vEFwMeKTp7khha3Pn3Sw8egZ0wGVDdxKVt68XpNqwzTKDnY4rFV0lY8gO58bHY6M0vZt20IRwryeX00MAOtPw6S'

    const onToken = (token) => {
        console.log({token})

        alert('Payment successfully!')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Crown clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripCheckoutButton