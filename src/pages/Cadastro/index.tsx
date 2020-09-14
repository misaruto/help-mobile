import React, { useRef } from "react";
import { Text, View } from "react-native";

import { Form } from "@unform/mobile";
import { SubmitHandler, FormHandles } from "@unform/core";

import Input from "../../components/Input";
import Header from "../../components/Header";
import styles from "./styles";
import Button from "../../components/Button";
import Container from "../../components/Container";

interface FormData {
  nome: string;
  email: string;
  senha: string;
  senha2: string;
}

const Cadastro: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(formRef);
  };

  return (
    <Container style={styles.container}>
      <Header title="Cadastro" backLink={true} />
      <Form style={styles.form} ref={formRef} onSubmit={handleSubmit}>
        <Input
          style={styles.input}
          key="email"
          name="nome"
          placeholder="Nome"
        />
        <Input
          style={styles.input}
          key="email"
          name="email"
          placeholder="Email"
        />
        <Input
          style={styles.input}
          key="senha"
          name="senha"
          placeholder="senha"
        />
        <Input
          style={styles.input}
          key="senha2"
          name="senha2"
          placeholder="senha2"
        />
        <Button label="Enviar" />
      </Form>
    </Container>
  );
};

export default Cadastro;
