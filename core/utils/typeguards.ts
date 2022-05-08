import { Message } from '../types/Message'

export const isMessage = (message: any): message is Message =>
  typeof message?.username === 'string' && typeof message?.message === 'string'
