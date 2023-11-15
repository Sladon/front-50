const origin = "http://206.81.13.63:8000/api/";
const products = origin + "productos/";
const createProduct = products + "crear/";
const product = (id) => products + `${id}/`;
const locals = origin + "locales/";
const local = (id) => locals + `${id}/`;
const localProducts = (id) => `${local(id)}` + "productos/"
const productReviews = (id) => origin + `product/${id}/reviews/`;
const ratingReviews = (id) => origin + `productos/${id}/reviews/avg/`;
const user = (id) => origin + `user/${id}/`
const login = origin + "login/"

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

function post_data(url, data) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}

export const GetProducts = (handleData) => fetch_data(products, handleData);

export const GetProduct = (id, handleData) => fetch_data(product(id), handleData);

export const GetImage = (extension) => images + `${extension}`;

export const GetStores = (handleData) => fetch_data(locals, handleData);

export const GetStore = (id, handleData) => fetch_data(local(id), handleData);

export const GetReviews = (id, handleData) => fetch_data(productReviews(id), handleData);

export const GetRatingReviews = (id, handleData) => fetch_data(ratingReviews(id), handleData);

export const GetStoreProducts = (id, handleData) => fetch_data(localProducts(id), handleData);

export const GetUser = (id, handleData) => fetch_data(user(id), handleData);

export const LoginUser = (data) => post_data(login, data);