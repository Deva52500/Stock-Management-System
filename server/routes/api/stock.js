const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Stock
router.get('/', async (req, res) => {
  const stock = await loadStock();
  res.send(await stock.find({}).toArray());
});

// Add Stock
router.post('/post', async (req, res) => {
  const stock = await loadStock();
  await stock.insertOne({
    type: req.body.type,
    total: req.body.total,
    createdAt: new Date()
  });
  res.status(201).send();
});

// Delete Stock
router.delete('/delete/:id', async (req, res) => {
  const stock = await loadStock();
  await stock.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
  res.status(200).send({});
});

async function loadStock() {
  const client = await mongodb.MongoClient.connect(
    'mongodb+srv://Akshay:525000@express.bxjccra.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true
    }
  );
  return client.db('express').collection('stock');
}

module.exports = router;