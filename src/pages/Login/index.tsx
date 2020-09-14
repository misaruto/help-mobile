import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";

import { Text, View } from "react-native";

import { Form } from "@unform/mobile";
import { SubmitHandler, FormHandles } from "@unform/core";

import { FontAwesome5 } from "@expo/vector-icons";

import Input from "../../components/Input";
import Header from "../../components/Header";
import styles from "./styles";
import Button from "../../components/Button";
import Link from "../../components/Link";
import Container from "../../components/Container";

interface FormData {
  name: string;
  senha: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { navigate } = useNavigation();
  function handleNavigateToCadastro() {
    navigate("Cadastro");
  }

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(formRef);
  };

  return (
    <Container style={styles.container}>
      <Header
        backLink={false}
        title="Login"
        text="Aplicativo desenvolvido para alunos do IF Campus Rio Pomba.
Desenvolvido para ajudar e conectar com mentorias."
      />
      <Form style={styles.form} ref={formRef} onSubmit={handleSubmit}>
        <Input
          style={styles.input}
          key="login"
          name="Nome"
          placeholder="Login"
        />
        <Input
          style={styles.input}
          key="senha"
          name="Senha"
          placeholder="Senha"
        />
        <Button label="Login" />
        <Link onPress={handleNavigateToCadastro} label="Cadastre-se" />
      </Form>
    </Container>
  );
};

export default Login;
