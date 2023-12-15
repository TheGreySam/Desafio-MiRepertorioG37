import express from 'express';
import { getAllSongs, addNewSong } from '../controllers/songsController.js'
const router = express.Router();



router.get('/canciones', getAllSongs);
router.post('/canciones', addNewSong);


export default router;