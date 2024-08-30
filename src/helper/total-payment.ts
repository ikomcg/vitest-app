type Product = {
   name: string;
   price: number;
};

export default function totalPayment(products: Product[]) {
   if (!products || !products.length) throw new Error("Products not found");

   return products.reduce((acc, curr) => acc + curr.price, 0);
}
