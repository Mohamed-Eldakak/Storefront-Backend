/* eslint-disable no-useless-catch */
import { Request, Response } from 'express'
import ProductModel from '../model/product.model'

const productModel = new ProductModel()

// create product
export const createRequestedProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = await productModel.createProduct(req.body)
    res.json({
      message: 'New product Successfully Created with down data',
      data: { ...newProduct }
    })
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while processing your request'
    })
  }
}

//    get all products
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await productModel.getAllProducts()
    res.json({
      message: 'Products retrieved successfully',
      data: products
    })
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while processing your request'
    })
  }
}

//    get specific product
export const getSpecificProduct = async (req: Request, res: Response) => {
  try {
    const product = await productModel.getSpecificProduct(req.params.id as unknown as string)
    res.json({
      message: 'Product retrieved successfully',
      data: product
    })
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while processing your request'
    })
  }
}

//    update product
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = await productModel.updateProduct(req.params.id as unknown as string, req.body)
    res.json({
      message: 'Product successfully updated',
      data: product
    })
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while processing your request'
    })
  }
}

//    delete product
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product = await productModel.deleteProduct(req.params.id as unknown as string)
    res.json({
      message: 'Product successfully deleted',
      data: product
    })
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while processing your request'
    })
  }
}
