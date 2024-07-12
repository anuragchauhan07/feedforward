"use server";

import Stripe from "stripe";
import { redirect } from "next/navigation";

export const StripeHandler = async (userId: string) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: "price_1OkLczGSCC3XaWl1NaWjbeDn",
          quantity: 1,
        },
      ],
      metadata: {
        userId: userId,
      },
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
    });

    redirect(session.url!);
  } catch (error) {
    throw error;
  }
};