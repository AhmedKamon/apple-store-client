// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { urlFor } from "../../sanity";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!,{
apiVersion:'2022-08-01'
})
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
 
 
}
