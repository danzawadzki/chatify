import type { NextApiRequest, NextApiResponse } from 'next'
import { PusherServer } from 'core/lib/Pusher'

export default (req: NextApiRequest, res: NextApiResponse) => {
  PusherServer.trigger(process.env.NEXT_PUBLIC_PUSHER_CHANNEL!, 'message', {
    message: req.body.message,
    username: req.body.username,
  })

  res.status(200)
}
