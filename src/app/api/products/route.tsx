import { NextRequest, NextResponse } from "next/server";

import { promises as fs } from 'fs';
import { readdirSync } from 'fs';

import { ProductModel } from "@/interfaces/ProductModel";

type ResponseData = {
  message: string
}

export async function GET(
  request: NextRequest
) {

    let products: ProductModel[] = [];

    // const files = readdirSync(process.cwd() + '/public/data/');

    // files.forEach ( async (file) => {
    //   let product: ProductModel = Promise.resolve(fetch('/public/data/'+file));
    //   products.push(product);
    // });

    const file1 = await fs.readFile(process.cwd() + '/public/data/blackberry-jam.json', 'utf8');
    const file2 = await fs.readFile(process.cwd() + '/public/data/grape-jam.json', 'utf8');
    const file3 = await fs.readFile(process.cwd() + '/public/data/honey.json', 'utf8');
    const file4 = await fs.readFile(process.cwd() + '/public/data/apple-butter.json', 'utf8');
    const file5 = await fs.readFile(process.cwd() + '/public/data/blueberry-jam.json', 'utf8');
    const file6 = await fs.readFile(process.cwd() + '/public/data/black-raspberry-jam.json', 'utf8');
    const file7 = await fs.readFile(process.cwd() + '/public/data/persimmon-jam.json', 'utf8');
    
    products.push(JSON.parse(file1));
    products.push(JSON.parse(file2));
    products.push(JSON.parse(file3));
    products.push(JSON.parse(file4));
    products.push(JSON.parse(file5));
    products.push(JSON.parse(file6));
    products.push(JSON.parse(file7));

    return NextResponse.json(JSON.stringify(products));
}

async function fetch(path: string) {
  const file = await fs.readFile(process.cwd() + path, 'utf8');
  return JSON.parse(file);
}