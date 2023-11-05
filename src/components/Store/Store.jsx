import React, { useEffect, useState } from 'react';
import { GetStore } from '../../api';
import { useLocation } from 'react-router-dom';

const Store = () => {
    const [Store, setStore] = useState({});
    const location = useLocation();
    const { id } = location.state;


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