"use client";

import React from "react";
import styles from "./Header.module.css";
import {
  Button,
  Dialog,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { CiSearch } from "react-icons/ci";
import SearchIcon from "@mui/icons-material/Search";
import Create from "@/components/Dialog/Create";
import { SubmitHandler } from "react-hook-form";
import { IFormInput } from "@/type/type";
import { status } from "@/type/type";
import { breed } from "@/type/type";
import { rows } from "@/type/type";

interface HeaderProps {
  onSubmit: SubmitHandler<IFormInput>;
  handleClose: () => void;
  createModal: boolean;
  handleClickOpen: () => void;
  searchInput: string;
  handleSearchInputChange: (event: any) => void;
  selectedStatus: string;
  handleStatusChange: (event: any) => void;
  selectedBreed: string;
  handleBreedChange: (event: any) => void;
  itemsPerPage: number;
  handleItemsPerPageChange: (
    event: React.ChangeEvent<{ value: unknown }>
  ) => void;
}

export default function Header({
  onSubmit,
  createModal,
  handleClickOpen,
  handleClose,
  searchInput,
  handleSearchInputChange,
  selectedStatus,
  handleStatusChange,
  selectedBreed,
  handleBreedChange,
  itemsPerPage,
  handleItemsPerPageChange,
}: HeaderProps) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.block}>
          <div className={styles.firstblock}>
            <div>
              <h2 className={styles.header}>Patient List</h2>
              <TextField
                id="outlined-basic"
                variant="outlined"
                value={searchInput}
                placeholder="Search table"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  style: {
                    width: "230px",
                    borderRadius: "15px",
                    height: "40px",
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: "regular",
                    color: "rgba(68, 68, 68, 0.5)",
                  },
                }}
                onChange={(event) => handleSearchInputChange(event)}
              />
            </div>
            <div className={styles.select}>
              <TextField
                id="outlined-select-currency-native"
                select
                label=""
                SelectProps={{
                  native: true,
                  sx: {
                    borderRadius: "15px",
                    height: "40px",
                    width: "115px",
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: "regular",
                    color: "#000000",
                  },
                }}
                helperText=""
                value={selectedStatus}
                onChange={(event) => handleStatusChange(event)}
              >
                <option value="">Status All</option>
                {status.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
              <TextField
                id="outlined-select-currency-native"
                select
                label=""
                SelectProps={{
                  native: true,
                  sx: {
                    borderRadius: "15px",
                    height: "40px",
                    width: "110px",
                    marginLeft: "3px",
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: "regular",
                    color: "#000000",
                  },
                }}
                helperText=""
                value={selectedBreed}
                onChange={(event) => handleBreedChange(event)}
              >
                <option value="">Breed All</option>
                {breed.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </div>
          </div>
          <div className={styles.secondblock}>
            <Button
              variant="contained"
              onClick={handleClickOpen}
              sx={{
                fontFamily: "Poppins",
                fontSize: "14px",
                fontWeight: "regular",
                color: "#ffffff",
                marginTop: "60px",
                marginRight: "50px",
                backgroundColor: "#54bab9",
                border: "1px solid #54bab9",
                borderRadius: "15px",
                "&:hover": {
                  backgroundColor: "#54bab9",
                },
              }}
            >
              <img
                src="/images/add.png"
                alt="add"
                width={10}
                height={10}
                className={styles.image}
              />
              Add new patient
            </Button>
            <h4 className={styles.p}>
              Rows per pages :{" "}
              <TextField
                id="outlined-select-currency-native"
                select
                label=""
                SelectProps={{
                  native: true,
                  sx: {
                    borderRadius: "10px",
                    height: "30px",
                    width: "100%",
                  },
                }}
                helperText=""
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
              >
                {rows.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </h4>
            {createModal && (
              <Dialog open={createModal} onClose={handleClose}>
                <Create onSubmit={onSubmit} handleClose={handleClose} />
              </Dialog>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
