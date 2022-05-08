import type { NextApiRequest, NextApiResponse } from 'next'
import { PusherServer } from 'core/lib/Pusher'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  PusherServer.trigger(process.env.NEXT_PUBLIC_PUSHER_CHANNEL!, 'message', {
    message: req.body.message,
    username: req.body.username,
  })

  return res.status(200)
}

export default handler
