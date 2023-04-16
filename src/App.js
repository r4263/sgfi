import 'bootstrap/dist/css/bootstrap.min.css';

//import logo from './logo.svg';
import './App.css';

import { Button } from 'reactstrap';
import { Form } from 'reactstrap';
import { FormGroup } from 'reactstrap';
import { Label } from 'reactstrap';
import { Input } from 'reactstrap';
import { FormText } from 'reactstrap';

import {logo} from './content/svg/pharmacy.svg'



function App() {
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
            <Label for="exampleEmail">
              Usuário:
            </Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Login"
              type="email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">
              Senha:
            </Label>
            <Input
              id="examplePassword"
              name="password"
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
          <Button>
            Entrar
          </Button>
        </Form>
      </div>

    </div>
  );
}

export default App;
