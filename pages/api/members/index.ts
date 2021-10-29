import { createClient } from '@astrajs/collections';
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const astraClient = await createClient({
      astraDatabaseId: process.env.ASTRA_DB_ID,
      astraDatabaseRegion: process.env.ASTRA_DB_REGION,
      applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
    });

    const membersCollection = astraClient
      .namespace(process.env.ASTRA_DB_KEYSPACE)
      .collection("members");

    const members = await membersCollection.find({});

    if (!members) {
      throw new Error('Cannot find product data')
    }

    res.status(200).json(Object.keys(members).map(key => ({ id: key, ...members[key] }))
    )
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
