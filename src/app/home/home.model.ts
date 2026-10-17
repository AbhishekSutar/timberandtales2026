type Category = 'Home Decor' | 'Premium Decor' | 'Useful Utilities';

interface Product 
{ 
    id: number; 
    name: string; 
    category: Category; 
    price: number; 
    image: string; 
    tag?: string; 
}
