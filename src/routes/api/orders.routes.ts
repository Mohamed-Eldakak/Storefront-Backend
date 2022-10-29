import { Router } from 'express'
import * as handler from '../../handler/orders.handler'
import authentication from '../../middleware/authToken'

const routes = Router()

routes.post('/create/:user_id/', authentication, handler.createOrder)
routes.get('/getAll/:user_id/', authentication, handler.getAllOrders)
routes.get('/active/:user_id/', authentication, handler.getAllActiveOrders)
routes.get('/complete/:user_id/', authentication, handler.getAllCompleteOrders)
routes.patch('/:user_id', authentication, handler.orderCompleted)
routes.delete('/:user_id', authentication, handler.cancelOrder)

export default routes
