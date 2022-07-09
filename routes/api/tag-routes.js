const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// FIND ALL TAGS
router.get('/', (req, res) => {
  Tag.findAll({
    include:
    {
      model: Product,
      attributes: ["product_name", "price", "stock", "category_id"],
    }
  })
  .then(tagData => res.json(tagData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// FIND ONE TAG
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [{
      model: Product,
      attributes: ['product_name', 'price', 'stock', 'category_id']
    }]
  })
  .then(tagData => {
    if (!tagData) {
      res.status(404).json({ message: "No product with that ID" });
      return;
    }
    res.json(tagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// CREATE TAG
router.post('/', (req, res) => {
  Tag.create({ tag_name: req.body.tag_name })
  .then(tagData => {res.json(tagData)})
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// UPDATE TAG
router.put('/:id', (req, res) => {
  Tag.update(req.body, { where: { id:req.params.id }})
  .then(tagData => {
    if (!tagData) {
      res.status(404).json({ message: "No tag with that ID" });
      return;
    }
    res.json(tagData)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// DELETE TAG
router.delete('/:id', (req, res) => {
  Tag.destroy({ where: { id: req.params.id }})
  .then(tagData => {
    if (!tagData) {
      res.status(404).json({ message: 'No tag with that ID'});
      return;
    }
    res.json(tagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  })
});

module.exports = router;
