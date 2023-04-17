declare class ProductService {
    constructor();
    getAll: () => {
        id: number;
        name: string;
        price: number;
        quantity: number;
        image: string;
    }[];
    add: (product: any) => void;
    deleteById: (index: any) => void;
}
declare const _default: ProductService;
export default _default;
