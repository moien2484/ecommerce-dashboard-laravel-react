export type CategoryproType = {
  id: number;
  img: string;
  title: string;
};
export type AllProductstype = {
  id: number;
  description: string;
  title: string;
  thumbnail_url: string;
  price: number;
  category_id: number;
};
export type UsercartProductstype = {
  id: number;
  product_id: number;
  description: string;
  quantity: number;
  updated_at: string;
  user_id: number;
  product: AllProductstype;
};

export type Alluserstype = {
  id: number;
  name: string;
  email: string;
  phone: string;
  password: number;
};
export type massagetype = {
  isincart: boolean;
  onClick: () => void;
};
