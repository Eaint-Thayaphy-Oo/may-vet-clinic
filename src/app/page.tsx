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
  dateOfBirth: Date | string | null;
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
  dateOfBirth: string | Date | null;
  address: string;
  township: string;
}

export default function Home() {
  const [data, setData] = useState<patientData[]>(items);
  const [open, setOpen] = useState(true);
  const [idCounter, setIdCounter] = useState<number>(6);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    // console.log(data);
    //create item
    const newItem = { ...data, id: idCounter };
    setData((prevData) => [...prevData, newItem]);
    setIdCounter((prevId) => prevId + 1);
    handleClose();
  };

  //remove item
  const removeItemHandler = (id) => {
    console.log(id);
    let remainUsers = data.filter((d) => d.id != id);
    setData(remainUsers);
  };

  return (
    <>
      <Nav />
      {open && <Header onSubmit={onSubmit} handleClose={handleClose} />}
      <TableComponent data={data} remove={removeItemHandler} />
    </>
  );
}
