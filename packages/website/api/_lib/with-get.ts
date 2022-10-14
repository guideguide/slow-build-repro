import type { VercelRequest, VercelResponse } from '@vercel/node'

function withPost(fn: Function) {
  return async (req: VercelRequest, res: VercelResponse) => {
    if (req.method !== 'GET') return res.status(405).send('Method not allowed')
    return await fn(req, res)
  }
}

export default withPost
