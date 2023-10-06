import Stripe from "stripe";

export async function payment({
    stripe = new Stripe(process.env.STRIPE_KEY),
    payment_method_types = ["card"],
    mode = 'payment',
    customer_email,
    metadata,
    cancel_url,
    success_url,
    line_items,
    discounts = []
} = {}) {

    const session = await stripe.checkout.sessions.create({
        payment_method_types,
        mode,
        customer_email,
        metadata,
        cancel_url,
        success_url,
        line_items,
        discounts
    })
    return session
}

export  default  payment