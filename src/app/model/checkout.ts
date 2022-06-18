import { CheckOutProduct } from "./checkout-product"
export interface checkout {
    GrandtotalPrice: number
    Allquantity: number
    checkOutProduct: CheckOutProduct[]
  }