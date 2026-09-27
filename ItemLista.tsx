import React from 'react';
import styled from 'styled-components/native';

type Props = {
  nome: string;
};

const Container = styled.View`
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #9d8282;
`;

const Nome = styled.Text`
  font-size: 16px;
`;

export default function ItemLista({ nome }: Props) {
  return (
    <Container>
      <Nome>{nome}</Nome>
    </Container>
  );
}