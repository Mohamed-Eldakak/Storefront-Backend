import { Router } from 'express'
import * as handler from '../../handler/users.handler'
import authentication from '../../middleware/authToken'

const routes = Router()

routes.get('/', authentication, handler.getUsers)
routes.get('/:id', authentication, handler.getSpecificUser)
routes.post('/', handler.createRequestedUser)
routes.patch('/:id', authentication, handler.updateUser)
routes.delete('/:id', authentication, handler.deleteUser)
// authentication
routes.route('/authenticate').post(handler.authenticate)

export default routes
