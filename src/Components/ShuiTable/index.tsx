import React from "react";
import { Sticky, Table, Td, Wrapper } from "./styles";

const ShuiTable = () => {
  return (
    <Wrapper>
      <Table>
        <thead>
          <tr>
            <Sticky>Coluna brother</Sticky>
            <Td number>Numero</Td>
            <Td>Coluna</Td>
            <Td>Coluna</Td>
            <Td>Coluna</Td>
            <Td>Coluna</Td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Sticky>Linha</Sticky>
            <Td number>0</Td>
            <Td>Linha</Td>
            <Td>Linha</Td>
            <Td>Linha</Td>
            <Td>Linha</Td>
          </tr>
          <tr>
            <Sticky>Linha</Sticky>
            <Td number>0</Td>
            <Td>Linha</Td>
            <Td>Linha</Td>
            <Td>Linha</Td>
            <Td>Linha</Td>
          </tr>
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default ShuiTable;
