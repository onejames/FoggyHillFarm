import { promises as fs } from 'fs';
import { readdirSync } from 'fs';

import ProductCard from '../components/ProductCard/ProductCard'

import { ProductModel } from '../interfaces/ProductModel';
import { ProductSource } from '../models/API';

const products = async () => {
  let products: ProductModel[] = [];

  const file1 = await fs.readFile(process.cwd() + '/public/data/blackberry-jam.json', 'utf8');
  const file2 = await fs.readFile(process.cwd() + '/public/data/grape-jam.json', 'utf8');
  const file3 = await fs.readFile(process.cwd() + '/public/data/honey.json', 'utf8');
  const file4 = await fs.readFile(process.cwd() + '/public/data/apple-butter.json', 'utf8');
  const file5 = await fs.readFile(process.cwd() + '/public/data/black-raspberry-jam.json', 'utf8');
  const file6 = await fs.readFile(process.cwd() + '/public/data/persimmon-jam.json', 'utf8');
  const file7 = await fs.readFile(process.cwd() + '/public/data/blueberry-jam.json', 'utf8');
  
  products.push(JSON.parse(file1));
  products.push(JSON.parse(file2));
  products.push(JSON.parse(file3));
  products.push(JSON.parse(file4));
  products.push(JSON.parse(file5));
  products.push(JSON.parse(file6));
  products.push(JSON.parse(file7));

  // fetch('/api/products')
  // .then((res) => res.json())
  // .then((data) => {
  //   products = JSON.parse(data)
  // })

  return (
    <div>
      <h2 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl'>Products</h2>
      <div className="grid lg:grid-cols-3 ">
          {products.map((product: ProductModel) => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  )
}

export default products