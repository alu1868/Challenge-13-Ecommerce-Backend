const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// GET ALL CATEGORIES
router.get('/', (req, res) => {
  Category.findAll({
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
        }
      ]
    })
    .then(categoryData => res.json(categoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

// GET SPECIFIC CATEGORY BY ID NUMBER
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes: ['product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
  .then(categoryData => {
    if (!categoryData) {
      res.status(404).json({ message: 'No category with that ID'})
      return;
    }
    res.json(categoryData)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  })
});

// CREATE NEW CATEGORY
router.post('/', (req, res) => {
  Category.create({ category_name: req.body.category_name })
    .then(categoryData => {
      res.json(categoryData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    });
});

// UPDATE EXISTING CATEGORY BY ID NUMBER
router.put('/:id', (req, res) => {
  Category.update(req.body, { where: { id: req.params.id }})
  .then(categoryData => {
    if(!categoryData) {
      res.status(404).json({ message: 'No category with that ID' })
      return;
    }
    res.json(categoryData);
  });
});

// DELETE CATEGORY BY ID NUMBER
router.delete('/:id', (req, res) => {
  Category.destroy({ where: { id: req.params.id }})
    .then(categoryData => {
        if (!categoryData) {
            res.status(404).json({ message: "No category with that ID" });
            return;
        }
        res.json(categoryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
