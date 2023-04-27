import axios from "axios";

import React, { useState, useEffect } from 'react';
const url = 'http://localhost:4444/api';

const Inicio = () => {
    const [response, setResponse] = useState('');

    const fetchData = async () => {
        try {
            const result = await axios.get(`${url}/usuarios/`);
            setResponse(JSON.stringify(result.data));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        var response = fetchData();
    })

    return (
        <div></div>
    )
};

export default Inicio;
