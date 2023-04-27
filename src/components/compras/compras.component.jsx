import axios from "axios";

import React, { useState, useEffect } from 'react';
const url = 'http://localhost:4444/api';

const Compras = () => {

    const [response, setResponse] = useState('');

    const fetchData = async () => {
        try {
            const result = await axios.get(`${url}/insumos`);
            setResponse(JSON.stringify(result.data));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    })

    return <div>This is Blank page</div>;
};

export default Compras;
