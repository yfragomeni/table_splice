import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TableComponent from "./Components/Table";

function App() {
  const columns = [
    {
      title: "id",
      dataIndex: "id",
    },
    {
      title: "nome",
      dataIndex: "name",
    },
    {
      title: "idade",
      dataIndex: "age",
    },
  ];

  const datasource = [
    {
      id: "0",
      name: "João",
      age: "15",
    },
    {
      id: "1",
      name: "Ana",
      age: "24",
    },
    {
      id: "2",
      name: "Yasmin",
      age: "10",
    },
    {
      id: "3",
      name: "Fernanda",
      age: "31",
    },
    {
      id: "4",
      name: "Arthur",
      age: "37",
    },
    {
      id: "5",
      name: "Caio",
      age: "12",
    },
  ];
  return (
    <div className="App">
      <TableComponent columns={columns} datasource={datasource} rowsPerPage={3}/>
    </div>
  );
}

export default App;
