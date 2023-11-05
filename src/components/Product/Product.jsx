import React, { useEffect, useState } from 'react';
import { GetProduct } from '../../api';
import { useParams } from 'react-router-dom';

const Product = () => {
    const { id } = useParams();

    const [product, setProduct] = useState({});

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