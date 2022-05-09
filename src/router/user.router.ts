import express from 'express'
import { User } from '../model';

const router = express.Router();

router.post('/login', (req, res) => {

    console.log(`login`);
    res.end('loginiiiiii')
})

router.post('/register', (req, res) => {
    
    console.log(`register`);
    res.end('loginiiiiii')
})

export default router