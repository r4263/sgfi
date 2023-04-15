import { Button } from 'reactstrap';
import { Form } from 'reactstrap';
import { FormGroup } from 'reactstrap';
import { Label } from 'reactstrap';
import { Input } from 'reactstrap';
import { FormText } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function renderloginform() {

    return (
        <div className='logindivform'>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">
                        Usuário
                    </Label>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="with a placeholder"
                        type="email"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">
                        Password
                    </Label>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="password placeholder"
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
        </div>)
}

export default renderloginform;