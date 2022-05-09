import { body  } from 'express-validator'
import { validate } from '../middleware/validate'

const Login = validate([
    body('')
])