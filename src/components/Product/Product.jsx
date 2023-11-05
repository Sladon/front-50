import React, { useEffect, useState } from 'react';
import { GetProduct } from '../../api';
import { useLocation } from 'react-router-dom';

const Product = () => {
    const [product, setProduct] = useState({});
    const location = useLocation();
    const { id } = location.state;


    const handleData = (data) => {
        console.log(data);
    }

    useEffect(() => {
        GetProduct(id, handleData);
    })

    return (
        <div className='comp-container'>
            asd
        </div>

    );
};

export default Product;