import Pusher from 'pusher'
import PusherJs from 'pusher-js'

export const PusherServer = new Pusher({
  appId: process.env.PUSHER_ID!,
  key: process.env.PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: process.env.PUSHER_CLUSTER!,
})

export const PusherClient = new PusherJs(process.env.PUSHER_KEY!, {
  cluster: process.env.PUSHER_CLUSTER!,
})
