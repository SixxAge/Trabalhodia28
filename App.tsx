/*
Nome Aluno: Gabriel Tres
RA: 2025014556
*/



import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import ItemLista from './ItemLista';

type Produto = {
  id: string;
  nome: string;
};

const produtosIniciais: Produto[] = [
  { id: '1', nome: 'p1' },
  { id: '2', nome: 'p2' },
  { id: '3', nome: 'p3' },
  { id: '4', nome: 'p4' },
  { id: '5', nome: 'p5' },
  { id: '6', nome: 'p6' },
  { id: '7', nome: 'p7' },
  { id: '8', nome: 'p8' },
  { id: '9', nome: 'p9' },
  { id: '10', nome: 'p10' },
];

const Tela = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
`;

const Vazio = styled.Text`
  text-align: center;
  margin-top: 40px;
  font-size: 16px;
  color: #5b8067;
`;

export default function TelaLista() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  return (
    <Tela>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemLista nome={item.nome} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Vazio>Teste nenhum item</Vazio>}
      />
    </Tela>
  );
}