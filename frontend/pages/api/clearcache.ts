import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.query.secret !== process.env.REVALIDATION_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    await res.unstable_revalidate('/')
    await res.unstable_revalidate('/impressum')
    await res.unstable_revalidate('/datenschutz')
    return res.json({ message: 'Pages revalidated' })
  } catch (err) {
    return res.status(500).send({ message: 'Error revalidating'})
  }
}