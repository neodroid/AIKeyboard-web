import type { NextApiRequest, NextApiResponse } from "next";

import { firestore } from "../../lib/firebase-admin";

function saveToFirestore(email: string) {
  // Save the data to firestore
  firestore.collection("waitlist").add({
    email,
    createdAt: new Date(),
  });
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.body.email;
  saveToFirestore(query);
  res.json({
    result: "success",
  });
};
