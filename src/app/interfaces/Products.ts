export interface ApiProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export class Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;

  constructor(product: ApiProduct) {
    this.id = product.id;
    this.name = product.name;
    this.price = product.price + "€";
    this.image = product.image;
    this.description = product.description;
  }
}
