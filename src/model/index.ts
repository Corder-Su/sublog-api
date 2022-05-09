import mongoose from 'mongoose'
import { dbURI } from '../config/default.json'
import logger from '../utils/log'
import User from './user.model'

async function dbConnect(){
    try {
        await mongoose.connect(dbURI);

        logger.info('MongoDB Connected')

        

    } catch (error) {
        logger.error('Fail to connect mongoDB')
        process.exit(1)
    }

}

export default dbConnect
export { User }