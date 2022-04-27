import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  overflow-x: scroll;
  margin-bottom: 10px;
  border: solid black 1px;
  ::-webkit-scrollbar {
    height: 20px; /* width of the entire scrollbar */
  }

  ::-webkit-scrollbar-track {
    background: white; /* color of the tracking area */
  }

  ::-webkit-scrollbar-thumb {
    background-clip: content-box;
    border: 5px solid transparent;
    border-radius: 16px;
    background-color: red;
  }
`;

export const Table = styled.table`
  table-layout: fixed;
`;

interface TdProps {
  number?: boolean
}

export const Td = styled.td<TdProps>`
  background-color: white;
  padding: 10px;
  text-align: ${ props => props.number && 'right'};
  min-width: ${ props => props.number ? '80px' : '152px'};
`;

export const Sticky = styled(Td)`
  position: sticky;
  left: 0;
  background-color: #ddd;
`;
