"use client";

import React, { useState } from "react";
import Nav from "./Nav/Nav";
import Header from "./Header/Header";
import TableComponent from "./TableComponent/TableComponent";
import items from "../Data/data";
import { SubmitHandler, useForm } from "react-hook-form";
import { patientData, IFormInput } from "@/type/type";
import MySnackbar from "@/components/MySnackbar/MySnackbar";

export default function Home() {
  const [data, setData] = useState<patientData[]>(items);
  const [open, setOpen] = useState(true);
  const [idCounter, setIdCounter] = useState<number>(6);
  const [editModal, setEditModal] = useState<boolean>(true);
  const [message, setMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

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
    setMessage("Patient is successfully created!");
    setOpenSnackbar(true);
    // setOpen(false);
    handleClose();
  };

  //remove item
  const removeItemHandler = (id: number) => {
    // console.log(id);
    let remainUsers = data.filter((d) => d.id != id);
    setData(remainUsers);
  };

  //update data
  const handleOnUpdate = (editItem: IFormInput, formData: any) => {
    data.map((item) => {
      if (item.id == editItem.id) {
        item.name = editItem.name;
        item.pawrent = editItem.pawrent;
        item.gender = editItem.gender;
        item.phone = editItem.phone;
        item.city = editItem.city;
        item.status = editItem.status;
        item.breed = editItem.breed;
        item.birth = editItem.birth;
        item.address = editItem.address;
        item.township = editItem.township;
        return item;
      }
      setMessage("Patient is successfully updated!");
      setOpenSnackbar(true);
      setEditModal(false);
    });
  };

  return (
    <>
      <Nav />
      <Header onSubmit={onSubmit} handleClose={handleClose} />
      <TableComponent
        data={data}
        remove={removeItemHandler}
        onSubmit={handleOnUpdate}
        editModal={editModal}
      />
      <MySnackbar
        message={message}
        onClose={handleClose}
        open={openSnackbar}
        autoHideDuration={6000}
      />
    </>
  );
}
