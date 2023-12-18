import express from 'express';
import { getAllSongs, addNewSong, editSong, deleteSong } from '../controllers/songsController.js'
const router = express.Router();



router.get('/canciones', getAllSongs);
router.post('/canciones', addNewSong);
router.put('/canciones/:id', editSong);
router.delete('/canciones/:id', deleteSong);

export default router;