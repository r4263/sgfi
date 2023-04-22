import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/sgfi.css'
import {UsuarioDataService} from '../services/usuario.service'

import { BrowserRouter, Route, Link } from "react-router-dom";
import { useState } from 'react';
import { Button } from 'reactstrap';
import { Form } from 'reactstrap';
import { FormGroup } from 'reactstrap';
import { Label } from 'reactstrap';
import { Input } from 'reactstrap';
import { FormText } from 'reactstrap';


function handleClick(){

  const usuario = {
    nome: 'Maycon',
    login: 'maycon',
    email: 'maycon.jung7@gmail.com',
    senha: 'teste',
    permissaonivel: '7',
    datacadastro: '01/01/1999',
    ultimologin: '01/01/2000'
}
UsuarioDataService.create(usuario);
}

function LoginForm() {

    // const [message, setMessage] = useState('');
  
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
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
              formAction={handleClick}
            />
          </Form>
        </div>
      </div>
    );
  }
  
  export default LoginForm;