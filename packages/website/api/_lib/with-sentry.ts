import * as Sentry from '@sentry/nextjs'
import type { NextApiRequest, NextApiResponse } from 'next'

function withSentry(fn: Function) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      return await fn(req, res)
    } catch (error) {
      Sentry.captureException(error)
      res.status(500).send('Error')
    }
  }
}

export default withSentry
