const { Traveller, Trip, Location } = require('../models');

const router = require('express').Router();

router.get('/api/travellers', async (req, res) => {
  const travellerData = await Traveller.findAll({});
  res.json(travellerData);
});

router.post('/api/travellers', async (req, res) => {
  const travellerData = await Traveller.create(req.body);
  res.status(200), json(travellerData);
});

router.get('/api/travellers/:id', async (req, res) => {
  const travellerData = await Traveller.findByPk(
    req.params.id,
    {
      include: [
        {
          model: Location,
          through: {
            attributes: []
          }
        }
      ]
    }
  );
  res.json(travellerData);
});

router.delete('/api/travellers/:id', async (req, res) => {
  const travellerData = await Traveller.destroy({
    where: {
      id: req.params.id,
    },
  });
  if (!travellerData) {
    return res.status(404).json({ message: 'No traveller found with given id' });
  }
  res.status(200).json(travellerData);
});

router.get('/api/locations', async (req, res) => {
  const locationData = await Location.findAll({});
  res.json(locationData);
});

router.post('/api/locations', async (req, res) => {
  const locationData = await Location.create(req.body);
  res.status(200), json(locationData);
});

router.get('/api/locations/:id', async (req, res) => {
  const locationData = await Location.findByPk(req.params.id);
  res.json(locationData);
});

router.delete('/api/locations/:id', async (req, res) => {
  const locationData = await Location.destroy({
    where: {
      id: req.params.id,
    },
  });
  if (!locationData) {
    return res.status(404).json({ message: 'No location found with given id' });
  }
  res.status(200).json(locationData);
});

router.post('/api/trips', async (req, res) => {
  const tripData = await Trip.create(req.body);
  res.json(tripData);
});

router.delete('/api/trips/:id', async (req, res) => {
  const tripData = await Location.destroy({
    where: {
      id: req.params.id,
    },
  });
  if (!tripData) {
    return res.status(404).json({ message: 'No trip found with this given id' });
  }
})

module.exports = router;
