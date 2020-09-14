import React, { useRef } from "react";
import { Text, View } from "react-native";

import { Form } from "@unform/mobile";

import { SubmitHandler, FormHandles } from "@unform/core";

import Input from "../../components/Input";
import Header from "../../components/Header";
import styles from "./styles";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Choice from "../../components/Choice";

interface FormData {
  nome: string;
  userName: string;
  email: string;
  tipo: string;
  senha: string;
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
        <Input style={styles.input} key="nome" name="nome" placeholder="Nome" />
        <Input
          style={styles.input}
          key="email"
          name="nome"
          placeholder="Nome"
        />
        <Input
          style={styles.input}
          key="userName"
          name="userName"
          placeholder="Nome de usuário"
        />
        <Input
          style={styles.input}
          key="senha"
          name="senha"
          placeholder="senha"
        />
        <Choice
          name="tipo"
          key="tipo"
          options={[
            { id: "professor", label: "Professor" },
            { id: "alunos", label: "Aluno" },
          ]}
        />
        <Button label="Enviar" />
      </Form>
    </Container>
  );
};

export default Cadastro;
