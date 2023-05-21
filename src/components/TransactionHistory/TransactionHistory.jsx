import React from 'react';

import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Type,
  ExtTr,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Thead>

      <Tbody>
        {items.map((item, id_index) => (
          <ExtTr key={item.id} id_index={id_index}>
            <Type>{item.type}</Type>
            <Td>{item.amount}</Td>
            <Td>{item.currency}</Td>
          </ExtTr>
        ))}
      </Tbody>
    </Table>
  );
};
