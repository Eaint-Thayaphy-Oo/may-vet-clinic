"use client";

import React, { useState } from "react";
import Nav from "./Nav/Nav";
import Header from "./Header/Header";
import TableComponent from "./TableComponent/TableComponent";
import items from "../Data/data";
import { SubmitHandler, useForm } from "react-hook-form";

export type patientData = {
  id: number;
  name: string;
  status: string;
  pawrent: string;
  breed: string;
  gender: string;
  birth: string;
  phone: string;
  address: string;
  township?: string;
  city?: string;
};

interface IFormInput {
  id: number;
  name: string;
  pawrent: string;
  gender: string;
  phone: number;
  city: string;
  status: string;
  breed: string;
  dateOfBirth: Date | string |null;
  address: string;
  township: string;
}

export default function Home() {
  const [data, setData] = useState<patientData[]>(items);
  const [open, setOpen] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const handleClose = () => {
    setOpen(false);
  };

  // const onSubmit = (data: patientData) => {
  //   console.log("created data", data);
  // };

   const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    // console.log(data);
    setData((prevData) => [...prevData, data]);
    handleClose();
  };

  return (
    <>
      <Nav />
      <Header onSubmit={onSubmit} />
      <TableComponent data={data} />
    </>
  );
}
