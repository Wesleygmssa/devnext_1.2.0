import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default (request: NextApiRequest, response: NextApiResponse) => {
  const { id } = request.query;
  const users = [{ id: 1, name: "Wesley" }];

  return response.json(users);
};
