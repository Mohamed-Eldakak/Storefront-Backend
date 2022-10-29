import { Router, Request, Response } from 'express'
import userRoutes from './api/users.routes'
import productRoutes from './api/products.routes'
import orderRoutes from './api/orders.routes'
import cartRoutes from './api/cart.routes'

const router = Router()
router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Welcome to StoreFront API 🏪'
  })
})
router.use('/users', userRoutes)
router.use('/products', productRoutes)
router.use('/orders', orderRoutes)
router.use('/cart', cartRoutes)

export default router
