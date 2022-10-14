import type { NextApiRequest, NextApiResponse } from "next";

function withSentry(fn: Function) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    return await fn(req, res);
  };
}

export default withSentry;
