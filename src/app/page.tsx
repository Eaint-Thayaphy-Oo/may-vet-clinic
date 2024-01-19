"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Nav from "./Nav/Nav";
import Header from "./Header/Header";
import TableComponent from "./TableComponent/TableComponent";
import items from "../Data/data";
import { SubmitHandler, useForm } from "react-hook-form";
import { patientData, IFormInput } from "@/type/type";
import MySnackbar from "@/components/MySnackbar/MySnackbar";
import { Pagination } from "@mui/material";

export default function Home() {
  const [data, setData] = useState<patientData[]>(items);
  const [idCounter, setIdCounter] = useState<number>(6);
  const [createModal, setCreateModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(true);
  const [deleteModal, setDeleteModal] = useState<boolean>(true);
  const [message, setMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  //search
  const [searchInput, setSearchInput] = useState("");
  //filter
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedBreed, setSelectedBreed] = useState("");
  //rowsperpage
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  //search
  const handleSearch = () => {
    setCurrentPage(1); 
  };

  const handleSearchInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchInput(event.target.value);
    handleSearch();
  };

  const filteredData = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.pawrent.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.gender.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.phone.toString().toLowerCase().includes(searchInput.toLowerCase()) ||
      item.city?.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.status.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.breed.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.dateOfBirth
        ?.toString()
        .toLowerCase()
        .includes(searchInput.toLowerCase()) ||
      item.township?.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.address.toLowerCase().includes(searchInput.toLowerCase())
    );
  });

  //filter
  const handleStatusChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedStatus(event.target.value);
  };

  const handleBreedChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedBreed(event.target.value);
  };

  const statusFilteredData = selectedStatus
    ? filteredData.filter((item) => item.status === selectedStatus)
    : filteredData;

  const breedFilteredData = selectedBreed
    ? statusFilteredData.filter((item) => item.breed === selectedBreed)
    : statusFilteredData;

  //rows per page
  const handleItemsPerPageChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    const newItemsPerPage = Number(event.target.value);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  const handlePageChange = (
    _event: any,
    value: React.SetStateAction<number>
  ) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = breedFilteredData.slice(startIndex, endIndex);

  const {
    formState: { errors },
  } = useForm<IFormInput>();

  //create modal open
  const handleClickOpen = () => {
    setCreateModal(true);
  };

  //create cancel
  const handleClose = () => {
    setCreateModal(false);
  };

  //edit cancel
  const handleCloseEdit = () => {
    setEditModal(false);
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    // console.log(data);
    //create item
    const newItem = { ...data, id: idCounter };
    setData((prevData) => [...prevData, newItem]);
    setIdCounter((prevId) => prevId + 1);
    setMessage("Patient is successfully created!");
    setOpenSnackbar(true);
    setCreateModal(false);
    handleClose();
  };

  //remove item
  const removeItemHandler = (id: number) => {
    // console.log(id);
    let remainUsers = data.filter((d) => d.id != id);
    setData(remainUsers);
    setMessage("Patient is successfully deleted!");
    setOpenSnackbar(true);
    setDeleteModal(false);
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
        item.dateOfBirth = editItem.dateOfBirth;
        item.address = editItem.address;
        item.township = editItem.township;
        return item;
      }
      setMessage("Patient is successfully updated!");
      setOpenSnackbar(true);
    });
  };

  // Function to close Snackbar
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <main className={styles.container}>
        <Nav />
        <Header
          onSubmit={onSubmit}
          handleClose={handleClose}
          createModal={createModal}
          handleClickOpen={handleClickOpen}
          searchInput={searchInput}
          handleSearchInputChange={handleSearchInputChange}
          selectedStatus={selectedStatus}
          handleStatusChange={handleStatusChange}
          selectedBreed={selectedBreed}
          handleBreedChange={handleBreedChange}
          itemsPerPage={itemsPerPage}
          handleItemsPerPageChange={handleItemsPerPageChange}
        />
        {breedFilteredData.length === 0 ? (
          <div className={styles.data}>There is no data available !</div>
        ) : (
          <>
            <TableComponent
              data={
                data &&
                filteredData &&
                statusFilteredData &&
                breedFilteredData &&
                paginatedData
              }
              remove={removeItemHandler}
              onSubmit={handleOnUpdate}
              editModal={editModal}
              deleteModal={deleteModal}
              handleCloseEdit={handleCloseEdit}
            />
            {searchInput === "" && (
              <Pagination
                sx={{ marginTop: "10px", marginLeft: "650px" }}
                count={Math.ceil(breedFilteredData.length / itemsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
              />
            )}
          </>
        )}
        <MySnackbar
          message={message}
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        />
      </main>
    </>
  );
}
