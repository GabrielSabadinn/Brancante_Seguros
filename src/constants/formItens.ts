export const formItens = [
  {
    title: "Nome Completo *",
    placeHolder: "Digite seu nome completo",
    value: "name",
    type: "text",
  },
  {
    title: "CPF *",
    placeHolder: "Digite seu CPF",
    value: "cpf",
    type: "text",
  },
  {
    title: "E-mail *",
    placeHolder: "Digite seu email",
    value: "email",
    type: "email",
  },
  {
    title: "Telefone / Celular *",
    placeHolder: "Digite seu telefone",
    value: "phone",
    type: "text",
  },
  {
    title: "Qual a categoria da embarcação? *",
    value: "shipCategory",
    type: "select",
    options: [
      { label: "Lancha", value: "lancha" },
      { label: "Veleiro", value: "veleiro" },
      { label: "Jet Ski", value: "jet-ski" },
      { label: "Bote", value: "bote" },
    ],
  },
  {
    title: "Marca e modelo da embarcação",
    placeHolder: "Digite a marca e o modelo",
    value: "shipModel",
    type: "text",
  },
  {
    title: "Ano da embarcação",
    placeHolder: "Ex: 2022",
    value: "shipYear",
    type: "text",
  },
  {
    title: "Motorização e potência",
    placeHolder: "Ex: 4 tempos - 800 hp",
    value: "shipEnginePower",
    type: "text",
  },
  {
    title: "Valor aproximado da sua embarcação *",
    placeHolder: "Digite o valor aproximado",
    value: "shipValue",
    type: "text",
  },
  {
    title: "Sua embarcação é compartilhada?",
    value: "isShared",
    type: "checkbox",
  },
  {
    title: "Qual o nome da sua embarcação?",
    placeHolder: "Digite o nome da embarcação",
    value: "shipName",
    type: "text",
  },
  {
    title: "Nome da marina de guarda da embarcação, cidade e estado:",
    placeHolder: "Ex: Centro Náutico Ilhabela - Ilhabela/SP/",
    value: "marineName",
    type: "text",
  },
  {
    title: "Você possui seguro atualmente?",
    value: "hasInsurance",
    type: "checkbox",
  },
  {
    title:
      "Fomos indicados por alguém? Se sim, poderia nos informar o nome do cliente ou parceiro que nos recomendou? *",
    placeHolder: "Digite o nome do parceiro",
    value: "hasRecommended",
    type: "text",
  },
  {
    title: "Li e aceito os termos e condições",
    value: "termsAccepted",
    type: "checkbox",
  },
];
