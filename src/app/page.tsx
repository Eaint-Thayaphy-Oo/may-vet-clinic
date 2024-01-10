"use client";

import React, { useState } from "react";
import Nav from "./Nav/Nav";
import Header from "./Header/Header";
import TableComponent from "./TableComponent/TableComponent";
import items from "../Data/data";
import { SubmitHandler, useForm } from "react-hook-form";
import { patientData, IFormInput } from "@/type/type";

export default function Home() {
  const [data, setData] = useState<patientData[]>(items);
  const [open, setOpen] = useState(true);
  const [idCounter, setIdCounter] = useState<number>(6);
  const [editItem, setEditItem] = useState<IFormInput | null>(null);
  const [editModal, setEditModal] = useState<boolean>(true);

  const {
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
  const removeItemHandler = (id: number) => {
    // console.log(id);
    let remainUsers = data.filter((d) => d.id != id);
    setData(remainUsers);
  };

  //update data
  const updatedData = (editItem: IFormInput, formData: any) => {
    setData((prevData) => {
      return prevData.map((item) =>
        item.id == editItem.id ? { ...item, ...formData } : item
      );
    });
  };
  // const updatedData = (editItem: IFormInput, formData: any) => {
  //   console.log(editItem);
  //   setEditItem((prevData) => ({
  //     ...prevData,
  //     ...formData,
  //   }));
  // };

  return (
    <>
      <Nav />
      {open && <Header onSubmit={onSubmit} handleClose={handleClose} />}
      <TableComponent
        data={data}
        remove={removeItemHandler}
        editItem={editItem}
        onSubmit={onSubmit}
        editModal={editModal}
        update={updatedData}
      />
    </>
  );
}
