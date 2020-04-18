import React, {useEffect, useRef, useState} from 'react';

import { useHistory } from 'react-router-dom';

import {
  Container,
  Logon,
  Header,
  Body,
  Title,
  FormGroup,
  InputForm,
  NameInput,
  InputGroup,
  SelectInput,
  SubmitButton,
} from './styles';

import title from '../../utils/setTitle';

export default function Login() {
  const history = useHistory();
  const [join, setJoin] = useState('');
  const [cod, setCode] = useState('');
  const [rm, setRM] = useState('');
  const [password, setPassword] = useState('');

  const inputRefRM = useRef(null);
  const inputRefPass = useRef(null);
  const inputRefJoin = useRef(null);
  const inputRefCod = useRef(null);

  function select(ref) {
    ref.current.focus();
  }

  function changeInput(e, input) {
    input(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    history.push('dashboard');
  }

  useEffect(() => {
    const oldTitle = title('Login', true);

    return () => {
      title(oldTitle, false);
    }
  }, []);

  return (
    <>
      <Container>
        <Logon>
          <Header>
            <Title>
              Faça seu login
            </Title>
          </Header>
          <Body>
            <FormGroup onSubmit={handleSubmit}>
              <InputGroup>
                <NameInput onClick={() => select(inputRefJoin)}>
                  Entrar como:
                </NameInput>
                <SelectInput
                  ref={inputRefJoin}
                  name='typeusers'
                  value={join}
                  onChange={(e) => changeInput(e, setJoin)}
                >
                  <option>ALUNO</option>
                  <option>ETEC</option>
                  <option>PROFESSOR</option>
                  <option>RESPONSÁVEL</option>
                  <option>SUPERVISÃO</option>
                  <option>MONITORAMENTO</option>
                </SelectInput>
                <NameInput onClick={() => select(inputRefCod)}>
                  Código da ETEC:
                </NameInput>
                <InputForm
                  ref={inputRefCod}
                  type='number'
                  name='rm'
                  placeholder='ETEC'
                  value={cod}
                  onChange={(e) => changeInput(e, setCode)}
                />
              </InputGroup>
              <InputGroup>
                <NameInput onClick={() => select(inputRefRM)}>
                  RM:
                </NameInput>
                <InputForm
                  ref={inputRefRM}
                  type='text'
                  name='rm'
                  placeholder='Digite seu RM'
                  value={rm}
                  onChange={(e) => changeInput(e, setRM)}
                />
              </InputGroup>
              <InputGroup>
                <NameInput onClick={() => select(inputRefPass)}>
                  Senha:
                </NameInput>
                <InputForm
                  ref={inputRefPass}
                  type='password'
                  name='password'
                  placeholder='Digite sua senha'
                  value={password}
                  onChange={(e) => changeInput(e, setPassword)}
                />
              </InputGroup>
              <SubmitButton type='submit'>
                Entrar
              </SubmitButton>
            </FormGroup>
          </Body>
        </Logon>
      </Container>
    </>
  );
}
