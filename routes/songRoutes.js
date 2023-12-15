import express from 'express';
import { getAllSongs } from '../controllers/songsController.js'
const router = express.Router();



router.get('/canciones', getAllSongs);


export default router;