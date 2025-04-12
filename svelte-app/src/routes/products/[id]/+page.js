import { products } from "$lib/products";

export function load({ params }) {
    const product = products.find(p => p.id === params.id);

    if (!product) {
        return {
            status: 404,
            error: new Error('Product not found')
        
        };
    }

    return {
        product
    };
}