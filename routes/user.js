var router = require('express').Router();
module.exports = router;

router.route('/')
      .get(function(req, res) {
        res.send('Home Route');
      })
      .post(function(req, res) {
        res.send('Post Route');
      });
router.route('/new')
      .get(function(req, res) {
        res.send('Create Route');
      });

router.route('/:id')
      .get(function(req, res) {
        res.send('Show Route');
      })
      .put(function(req, res) {
        res.send('Update Route');
      })
      .delete(function(req, res) {
        res.send('Delete Route');
      });

router.route('/:id/edit')
      .get(function(req, res) {
        res.send('Edit Route');
      });