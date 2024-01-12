"use client";

import React from "react";
import styles from "./Header.module.css";
import { Button, Dialog, TextField } from "@mui/material";
import { CiSearch } from "react-icons/ci";
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
}

export default function Header({
  onSubmit,
  createModal,
  handleClickOpen,
  handleClose,
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
                placeholder="Search table"
                InputProps={{
                  style: {
                    borderRadius: "20px",
                    border: "1px solid rgba(68, 68, 68, 0.5)",
                    height: "40px",
                  },
                }}
              />
              <CiSearch className={styles.icon} />
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
                  },
                }}
                helperText=""
              >
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
                  },
                }}
                helperText=""
              >
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
                marginTop: "60px",
                marginRight: "50px",
                backgroundColor: "#54bab9",
                border: "1px solid #54bab9",
              }}
            >
              <img src="/images/add.png" alt="add" width={10} height={10} />
              Add new patient
            </Button>
            <h4 className={styles.p}>
              Rows per page :{" "}
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
