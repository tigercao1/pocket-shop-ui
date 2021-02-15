import axios from 'axios';
import env from 'react-dotenv';

class ProductController {
    constructor() {
        this.api = axios.create({
            baseURL: env.API_PROTOCOL + "://" + env.API_HOST + (env.API_PORT !== null ? ":" + env.API_PORT : ""),
            responseType: "json",
            timeout: 5000
        });
        this.getProducts = this.getProducts.bind(this);
    }

    async getProducts() {
        let products = await this.api.get("/");
        return products;
    }

}

export default ProductController;