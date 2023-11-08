const origin = "http://127.0.0.1:8000/api/";
const products = origin + "productos/";
const createProduct = products + "crear/";
const product = (id) => products + `${id}/`;
const locals = origin + "locales/";
const local = (id) => locals + `${id}/`;
const localProducts = (id) => `${local(id)}` + "productos/"
const productReviews = (id) => `product/${id}/reviews/`;

const images = origin + "images/"

function fetch_data(url, handleData) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            handleData(data);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}

export const GetProducts = (handleData) => fetch_data(products, handleData);

export const GetProduct = (id, handleData) => fetch_data(product(id), handleData);

export const GetImage = (extension) => images + `${extension}`;

export const GetStores = (handleData) => fetch_data(locals, handleData);

export const GetStore = (id, handleData) => fetch_data(local(id), handleData);

export const GetReviews = (id, handleData) => fetch_data(productReviews(id), handleData);

export const GetStoreProducts = (id, handleData) => fetch_data(localProducts(id), handleData);