const express = require('express');
const Music = require('../model/musikmodel.js');
const router = express.Router();

router.get('/', async(req, res) => {
    try {
      const musics = await Music.findAll();
      res.json(musics);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

router.get('/:id', async (req, res) => {
    try {
        const music = await Music.findByPk(req.params.id);

        if (music) {
            res.status(200).json(music);
        } else {
            res.status(404).json({ msg: 'Music not found' });
        }
    } catch (error) {
    console.error(error);
    res.status(500).json({msg: 'Internal server error'});
    }
});

router.post('/', async (req,res) => {
    try {
        const {title, content, cover} = req.body;
        const music = await Music.create({
            title,
            content,
            cover
        });
        res.status(201).json({msg: 'successfully added song'});
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: 'Internal server error'});
    }
});

module.exports = router;
