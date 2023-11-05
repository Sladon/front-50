import React, { useEffect, useState } from 'react';
import { GetStore } from '../../api';
import { useParams } from 'react-router-dom';

const Store = () => {
    const { id } = useParams();

    const [Store, setStore] = useState({});


    const handleData = (data) => {
        console.log(data);
    }

    useEffect(() => {
        GetStore(id, handleData);
    })

    return (
        <div className='comp-container'>
            asd
        </div>

    );
};

export default Store;