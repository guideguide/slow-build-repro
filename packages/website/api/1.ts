import type { VercelRequest, VercelResponse } from "@vercel/node";
import withCors from "./_lib/with-cors";
import withSentry from "./_lib/with-sentry";
import withPost from "./_lib/with-post";

const handler = async (req: VercelRequest, res: VercelResponse) => {
  res.status(200).send("Ok");
};

export default withSentry(withCors(withPost(handler)));
