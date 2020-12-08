import db, { firestore } from '../../lib/firebase';

export default async (req, res) => {
  switch (req.method) {
    case `POST`: {
      const { postId, type } = req.query;
      const doc = db.collection(`reactions`).doc(postId);

      await doc.update({ [type]: firestore.FieldValue.increment(1) });
      res.json((await doc.get()).data());

      break;
    }
    case `GET`:
    default: {
      const doc = await db.collection(`reactions`).doc(req.query.postId).get();
      if (doc.exists) {
        res.json(doc.data());
        return;
      }
      await doc.ref.set({
        hearts: 0,
        stars: 0,
      });
      res.json({
        hearts: 0,
        stars: 0,
      });
    }
  }
};
