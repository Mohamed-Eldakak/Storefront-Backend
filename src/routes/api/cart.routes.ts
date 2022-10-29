import { Router } from 'express'
import * as handler from '../../handler/orders.handler'
import authentication from '../../middleware/authToken'

const routes = Router()

routes.get('/:user_id/:order_id', authentication, handler.getAllProductsForOrder)
routes.post('/:user_id/:order_id', authentication, handler.addProductToOrder)
routes.delete('/:user_id/:order_id', authentication, handler.deleteProductFromOrder)
routes.patch('/:user_id/:order_id', authentication, handler.updateProductQuantityInOrder)

export default routes
