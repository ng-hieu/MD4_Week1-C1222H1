let productList = [
    {
        id: 0,
        name: 'Bánh mỳ',
        price: 444,
        quantity: 5,
        image: 'https://m.daikynguyen.tv/wp-content/uploads/2018/07/anh-9.jpg'
    },
    {
        id: 1,
        name: 'Bánh bao',
        price: 555,
        quantity: 4,
        image: 'https://c1thule-bd.edu.vn/wp-content/uploads/2022/04/Hinh-Anh-Ma-Cute-De-Thuong-Ma-Deo-Kinh-Dang.jpg'
    }
]
class ProductService {
    constructor() {
    }
    getAll = () =>{
        console.log('bf add '+ productList.length)
        return productList;
    }
    add = (product) => {
        productList.push(product)
        console.log('af add '+ productList.length)
    }
    deleteById = (index) => {
        this.getAll().splice(index,1);
        console.log('thành công')
    }
}

export default new ProductService();
