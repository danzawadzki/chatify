import '@testing-library/jest-dom'
import { isMessage } from './typeguards'

describe('Typeguards', () => {
  describe('isMessage', () => {
    it('should return false', () => {
      const message = {
        username: 'example',
      }

      expect(isMessage(message)).toBeFalse()
    })

    it('should return true', () => {
      const message = {
        username: 'example',
        message: 'message',
      }

      expect(isMessage(message)).toBeTruthy()
    })
  })
})
