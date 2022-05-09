import express from 'express'
import router from './router'
import log from './utils/log'
import config from './config/default.json'
import responseHeader from './middleware/responseHeader'
import connectDB from './model/index'

const app = express();

app.use(express.json());
app.use(express.urlencoded())

// 跨域配置
app.use(responseHeader)

const PORT = config.port || 3001;

app.listen(PORT, async () => {
    console.log(`App is running at http://localhost:${PORT}`);
    await connectDB()
})

app.use('/api', router)

app.get('/api', (req, res) => {
    console.log(`get ^^^`);
    
})