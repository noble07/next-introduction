// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'

interface HelloResponse {
  name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<HelloResponse>) {
  res.status(200).json({ name: 'John Doe' })
}
