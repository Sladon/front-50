const origin = "http://127.0.0.1:8000/api/";
const products = origin + "productos/";
const createProduct = products + "/crear";
const product = (id) => productos + `/${id}`;
const locals = origin + "locales/";
const local = (id) => locals + `${id}/`;
const productReviews = (id, productId) => local(productId) + `${id}/`;
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

export const GetProducts = (handleData) => {
    fetch_data(products, handleData);
};

export const GetProduct = () => {
    fetch_data(product, null);
}

export const GetImage = (extension) => images + `${extension}`;