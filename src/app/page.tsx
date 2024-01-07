"use client";

import React, { useState } from "react";
import Nav from "./Nav/Nav";
import Header from "./Header/Header";
import TableComponent from "./TableComponent/TableComponent";
import items from "../Data/data";

type patientData = {
  id: number;
  name: string;
  status: string;
  pawrent: string;
  breed: string;
  gender: string;
  birth: string;
  phone: string;
  address: string;
  township: string;
  city: string;
};

export default function Home() {
  const [data, setData] = useState<patientData[]>(items);

  return (
    <>
      <Nav />
      <Header />
      <TableComponent data={data} />
    </>
  );
}
