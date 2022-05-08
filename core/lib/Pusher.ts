import Pusher from 'pusher'
import PusherJs from 'pusher-js'

export const PusherServer = new Pusher({
  appId: process.env.PUSHER_ID!,
  key: process.env.NEXT_PUBLIC_PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
})

export const PusherClient = new PusherJs(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
})
