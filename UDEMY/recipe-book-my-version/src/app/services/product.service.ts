import { Product } from '../shared/types';

export class ProductServise {
  products: Product[] = [
    {
      name: 'Product 1',
      description: 'Description product 1',
      imgPath:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE0Y0eo-lbmUpngYyKFrdeVixOFsykxZ31ol1M2WKPJqFffcs9crFlv1am7FGFARQx6E&usqp=CAU',
    },
    {
      name: 'Product 2',
      description: 'Description product 2',
      imgPath:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQSI6FkZ9uY0GotRwOKVEs1Z-peiwJzjiQoJNCad5jkLFGjIIrT98ln2338q4b0r9rT2w&usqp=CAU',
    },
    {
      name: 'Product 3',
      description: 'Description product 3',
      imgPath:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMnppyYaPisutGwDsVJCjcA7XxwHUWz8IeyRsftK9WaFd0kCbPhtVMJ6Kx6kOq6u1S4Io&usqp=CAU',
    },
  ];

  getProducts(): Product[] {
    return this.products.slice();
  }
}
