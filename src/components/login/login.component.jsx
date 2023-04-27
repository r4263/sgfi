import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'
import axios from 'axios';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Form } from 'reactstrap';
import { FormGroup } from 'reactstrap';
import { Label } from 'reactstrap';
import { Input } from 'reactstrap';



const url = "http://localhost:4444/api/login";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState('');
    const [status, setStatus] = useState();

    const handleUsernameChange = event => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }

    const fetchData = async () => {
        try {
            const result = await axios.post(url, { login: username, senha: password });
            setResponse(JSON.stringify(result.data));
            setStatus(result.status);
        } catch (error) {
            console.log(error);
        }
    };


    function verifyStatus(){
        console.log(status);
        if(status === '200'){
            console.log("OK, autorizado")
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(fetchData());
    }

    useEffect(() => {
        verifyStatus();
    }, status)


    return (
        <div className="App">
            <header className="App-header">
            </header>
            <div className='logindivform'>
                <Form>
                    <div>
                        <a>
                            Sistema de Gerenciamento de Fármacos e Insumos
                        </a>
                    </div>
                    <FormGroup>
                        <Label for="login">
                            Usuário:
                        </Label>
                        <Input
                            id="login"
                            name="login"
                            placeholder="Login"
                            type="text"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="pwd">
                            Senha:
                        </Label>
                        <Input
                            id="pwd"
                            name="pwd"
                            placeholder="○○○○○○○"
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </FormGroup>
                    {/* <FormGroup check>
                        <Input type="checkbox" />
                        {' '}
                        <Label check>
                            Lembrar credenciais
                        </Label>
                    </FormGroup> */}
                    <input
                        id='loginbtn'
                        name='loginbtn'
                        type='submit'
                        value='Entrar'
                        onClick={handleSubmit}
                    />
                </Form>
            </div>
        </div>

        // <div>
        //   <button onClick={fetchData}>Buscar dados</button>
        //   <textarea value={response}/>
        // </div>
    )
};

export default Login;
