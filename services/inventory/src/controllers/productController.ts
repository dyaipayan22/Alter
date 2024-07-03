import { IProductInteractor } from '../interfaces/IProductInteractor';
import { NextFunction, Request, Response } from 'express';

export class ProductController {
  private interactor: IProductInteractor;

  constructor(interactor: IProductInteractor) {
    this.interactor = interactor;
  }

  async onCreateProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const body = req.body;
      const response = await this.interactor.createProduct(body);
      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  async onGetProductById(req: Request, res: Response, next: NextFunction) {
    try {
      const { productId } = req.params;
      const response = await this.interactor.getProductById(productId);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  async onGetProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const limit = Number(req.query) || 1;
      const offset = Number(req.query) || 10;
      const response = await this.interactor.getProducts(limit, offset);
      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  async onUpdateProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { productId } = req.params;
      const body = req.body;
      const response = await this.interactor.updateProduct(productId, body);
      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  async onDeleteProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { productId } = req.params;
      const response = await this.interactor.deleteProduct(productId);
      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
}
