import { Router } from 'express'
import * as handler from '../../handler/products.handler'
import authentication from '../../middleware/authToken'

const routes = Router()

routes.get('/', handler.getAllProducts)
routes.get('/:id', handler.getSpecificProduct)
routes.post('/', authentication, handler.createRequestedProduct)
routes.patch('/:id', authentication, handler.updateProduct)
routes.delete('/:id', authentication, handler.deleteProduct)

export default routes
