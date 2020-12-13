import React from 'react';
import { Form } from '@unform/web';
import { FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  function handleSubmit(data: object): any {
    console.log(data);
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="Go Barber" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input icon={FiUser} name="nome" placeholder="Nome" />
          <Input icon={FiMail} name="email" placeholder="Email" />
          <Input
            icon={FiLock}
            name="password"
            placeholder="Senha"
            type="password"
          />

          <Button type="submit">SignIn</Button>

          <a href="login">Esqueci minha senha</a>
        </Form>
        <a href="Arlen">
          <FiArrowLeft />
          Voltar para Login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
