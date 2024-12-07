import { NextApiRequest, NextApiResponse } from "next";

// Define the request payload type
type GetNameRequestPayload = {
  id: number;
};

// Define the response type
type GetNameResponse = {
  name: string;
};

// Sample data for demonstration purposes
const mockDatabase = {
  1: "Alice",
  2: "Bob",
  3: "Charlie",
};

// rpc/handlers/getUser.ts
type GetUserParams = { id: number };
type GetUserResponse = { id: number; name: string };

export async function getUser(params: GetUserParams): Promise<GetUserResponse> {
  // Simulate fetching user from a database
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];
  const user = users.find((u) => u.id === params.id);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetNameResponse | { error: string }>
) {
  //   if (req.method !== 'POST') {
  //     return res.status(405).json({ error: 'Method Not Allowed' }); // Allow only POST requests
  //   }

  try {
    const { id }: Partial<GetNameRequestPayload> = req.body;

    // Validate the payload
    if (typeof id !== "number") {
      return res
        .status(400)
        .json({ error: "Invalid payload. `id` must be a number." });
    }

    // Fetch the name from the "database"
    const name = mockDatabase[id];

    if (!name) {
      return res.status(404).json({ error: "Name not found." });
    }

    // Send the response
    res.status(200).json({ name });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
