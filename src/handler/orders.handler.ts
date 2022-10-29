/* eslint-disable no-useless-catch */
import { Request, Response } from 'express'
import OrderModel from '../model/orders.model'

const orderModel = new OrderModel()

//    create order
export const createOrder = async (req: Request, res: Response) => {
  try {
    const createOrder = await orderModel.createOrder(req.params.user_id as unknown as string)
    res.json({
      message: 'New Order Successfully Created with down data',
      data: createOrder
    })
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while processing your request'
    })
  }
}

//    get all orders
export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const allOrders = await orderModel.getAllOrders(req.params.user_id as unknown as string)
    if (allOrders.length === 0) {
      res.json({
        message: 'No orders found',
        data: allOrders
      })
    } else {
      res.json({
        message: 'All Orders retrieved successfully',
        data: allOrders
      })
    }
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while processing your request'
    })
  }
}

//    get all active orders
export const getAllActiveOrders = async (req: Request, res: Response) => {
  try {
    const activeOrders = await orderModel.getActiveOrders(req.params.user_id as unknown as string)
    if (activeOrders.length === 0) {
      res.json({
        message: 'No Active Orders',
        data: activeOrders
      })
    } else {
      res.json({
        message: 'Active Orders retrieved successfully',
        data: activeOrders
      })
    }
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while processing your request'
    })
  }
}

//    get all complete orders
export const getAllCompleteOrders = async (req: Request, res: Response) => {
  try {
    const completeOrders = await orderModel.getCompleteOrders(
      req.params.user_id as unknown as string
    )
    if (completeOrders.length === 0) {
      res.json({
        message: 'No Complete Orders',
        data: completeOrders
      })
    } else {
      res.json({
        message: 'Complete Orders retrieved successfully',
        data: completeOrders
      })
    }
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while processing your request'
    })
  }
}

//    update order
export const orderCompleted = async (req: Request, res: Response) => {
  try {
    const order = await orderModel.orderCompleted(
      req.params.user_id as unknown as string,
      req.body.id as unknown as string
    )
    res.json({
      message: 'Order Successfully Completed',
      data: order
    })
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while processing your request'
    })
  }
}

//    delete order
export const cancelOrder = async (req: Request, res: Response) => {
  try {
    const deletedOrder = await orderModel.cancelOrder(
      req.params.user_id as unknown as string,
      req.body.id as unknown as string
    )
    res.json({
      message: 'Order successfully deleted',
      data: deletedOrder
    })
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while processing your request'
    })
  }
}

//    get all products for order
export const getAllProductsForOrder = async (req: Request, res: Response) => {
  try {
    const allProducts = await orderModel.getAllProductsForOrder(
      req.params.order_id as unknown as string
    )
    if (allProducts.length === 0) {
      res.json({
        message: 'No products found',
        data: allProducts
      })
    } else {
      res.json({
        message: 'All Products retrieved successfully',
        data: allProducts
      })
    }
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while processing your request'
    })
  }
}

//    add product to order
export const addProductToOrder = async (req: Request, res: Response) => {
  try {
    const addedProduct = await orderModel.addProductToOrder(
      req.params.order_id as unknown as string,
      req.body.product_id as unknown as string,
      req.body.quantity as unknown as number
    )
    res.json({
      message: 'Product Successfully Added to Order',
      data: addedProduct
    })
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while processing your request'
    })
  }
}

//    delete product from order
export const deleteProductFromOrder = async (req: Request, res: Response) => {
  try {
    const deletedProduct = await orderModel.deleteProductFromOrder(
      req.params.order_id as unknown as string,
      req.body.product_id as unknown as string
    )
    res.json({
      message: 'Product Successfully Deleted from Order',
      data: deletedProduct
    })
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while processing your request'
    })
  }
}

//    update product quantity in order
export const updateProductQuantityInOrder = async (req: Request, res: Response) => {
  try {
    const updatedProduct = await orderModel.updateProductQuantityInOrder(
      req.params.order_id as unknown as string,
      req.body.product_id as unknown as string,
      req.body.quantity as unknown as number
    )
    res.json({
      message: 'Product Quantity Successfully Updated in Order',
      data: updatedProduct
    })
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while processing your request'
    })
  }
}
