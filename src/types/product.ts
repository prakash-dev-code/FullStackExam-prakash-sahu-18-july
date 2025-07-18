export type Product = {
  id: string;
  _id?: string;
  name: string;
  title?: string; // for backward compatibility
  description: string;
  price: number;
  discountedPrice: number;
  category: string;
  images: IImage[];
  stock: number;
  seller: string;
  createdAt: string;
  updatedAt: string;
  slug: string;
  __v: number;
  ratings: {
    average: number;
    count: number;
  };
};
export type IImage = {
  url: string;
  altText: string;
  _id: string;
  id: string;
};
