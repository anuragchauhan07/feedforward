import stripe from "stripe";
import { NextResponse } from "next/server";
import { updateUser } from "@/lib/actions/user.actions";

export async function POST(request: Request) {
  const body = await request.text();

  const sig = request.headers.get("stripe-signature") as string;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    return NextResponse.json({ message: "Webhook error", error: err });
  }

  const eventType = event.type;

  if (eventType === "checkout.session.completed") {
    const { metadata } = event.data.object;

    const proUser = await updateUser(metadata!.userId);
    return NextResponse.json({ message: "OK", updatedUser: proUser });
  }

  return new Response("", { status: 200 });
}