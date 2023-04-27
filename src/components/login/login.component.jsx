import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'

import { BrowserRouter, Route, Link } from "react-router-dom";
import { useState } from 'react';
import { Button } from 'reactstrap';
import { Form } from 'reactstrap';
import { FormGroup } from 'reactstrap';
import { Label } from 'reactstrap';
import { Input } from 'reactstrap';
import { FormText } from 'reactstrap';

const Login = () => {
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
                        type="email"
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
                    />
                </FormGroup>
                <FormGroup check>
                    <Input type="checkbox" />
                    {' '}
                    <Label check>
                        Lembrar credenciais
                    </Label>
                </FormGroup>
                <input
                    id='loginbtn'
                    name='loginbtn'
                    type='submit'
                    value='Entrar'
                />
            </Form>
        </div>
    </div>

    // <div>
    //   <button onClick={fetchData}>Buscar dados</button>
    //   <textarea value={response}/>
    // </div>
};

export default Login;
