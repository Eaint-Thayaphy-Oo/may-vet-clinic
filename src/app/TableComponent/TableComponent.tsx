"use client";

import {
  Checkbox,
  Dialog,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineMore } from "react-icons/ai";
import { LuPencil } from "react-icons/lu";
import { FiTrash } from "react-icons/fi";
import styles from "./table.module.css";
import Edit from "../../components/Dialog/Edit";
import { patientData, IFormInput } from "@/type/type";
import { SubmitHandler } from "react-hook-form";

interface TableProps {
  data: patientData[];
  remove: (id: number) => void;
  onSubmit: SubmitHandler<IFormInput>;
  editItem: IFormInput | null;
  update: (editItem: IFormInput, formData: any) => void;
  editModal: boolean;
}

export default function TableComponent({
  data,
  remove,
  onSubmit,
  update,
}: TableProps) {
  const [selectedId, setSelectedId] = useState<string[]>([]);
  const [showDropDown, setShowDropDown] = useState<number | null>(null);
  const [openEditDialog, setOpenEditDialog] = useState<boolean>(false);
  const [editItem, setEditItem] = useState<IFormInput | null>(null);

  //select checkbox
  const handleCheckboxChange = (id: string) => {
    if (selectedId?.includes(id.toString())) {
      setSelectedId(selectedId.filter((item) => item !== id));
    } else {
      setSelectedId([...selectedId, id]);
    }
  };

  const handleSelectAll = () => {
    const allItemIds = data.map((d) => d.id.toString());
    setSelectedId(allItemIds);
  };

  //handleopen model for edit and delete
  const handleOpenModal = (id: number) => {
    if (id == showDropDown) {
      setShowDropDown(null);
    } else {
      setShowDropDown(id);
    }
  };

  //delete for item
  const handleRemove = (id: number) => {
    remove(id);
  };

  //edit dialog box
  const handleClickOpen = (id: number) => {
    const itemToEdit = data.find((item) => item.id === id);
    setEditItem(itemToEdit);
    setOpenEditDialog(true);
  };

  const handleClose = () => {
    setOpenEditDialog(false);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox
                  indeterminate={
                    selectedId.length > 0 && selectedId.length < data.length
                  }
                  checked={selectedId.length === data.length}
                  onChange={handleSelectAll}
                />
              </TableCell>
              <TableCell
                sx={{
                  fontStyle: "Poppins",
                  fontSize: "14px",
                  fontWeight: "semibold",
                  color: "#54bab9",
                }}
              >
                ID
              </TableCell>
              <TableCell
                sx={{
                  fontStyle: "Poppins",
                  fontSize: "14px",
                  fontWeight: "semibold",
                  color: "#54bab9",
                }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{
                  fontStyle: "Poppins",
                  fontSize: "14px",
                  fontWeight: "semibold",
                  color: "#54bab9",
                }}
              >
                Status
              </TableCell>
              <TableCell
                sx={{
                  fontStyle: "Poppins",
                  fontSize: "14px",
                  fontWeight: "semibold",
                  color: "#54bab9",
                }}
              >
                Pawrent
              </TableCell>
              <TableCell
                sx={{
                  fontStyle: "Poppins",
                  fontSize: "14px",
                  fontWeight: "semibold",
                  color: "#54bab9",
                }}
              >
                Breed
              </TableCell>
              <TableCell
                sx={{
                  fontStyle: "Poppins",
                  fontSize: "14px",
                  fontWeight: "semibold",
                  color: "#54bab9",
                }}
              >
                Gender
              </TableCell>
              <TableCell
                sx={{
                  fontStyle: "Poppins",
                  fontSize: "14px",
                  fontWeight: "semibold",
                  color: "#54bab9",
                }}
              >
                Date of Birth
              </TableCell>
              <TableCell
                sx={{
                  fontStyle: "Poppins",
                  fontSize: "14px",
                  fontWeight: "semibold",
                  color: "#54bab9",
                }}
              >
                Contact Phone No.
              </TableCell>
              <TableCell
                sx={{
                  fontStyle: "Poppins",
                  fontSize: "14px",
                  fontWeight: "semibold",
                  color: "#54bab9",
                }}
              >
                Address
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((d) => (
              <TableRow key={d.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedId.includes(d.id.toString())}
                    onChange={() => handleCheckboxChange(d.id.toString())}
                  />
                </TableCell>
                <TableCell>{d.id}</TableCell>
                <TableCell>{d.name}</TableCell>
                <TableCell>
                  {d.status == "allergy" ? (
                    <Image
                      src="/images/allergy.png"
                      alt="allergy"
                      width={15}
                      height={15}
                    />
                  ) : (
                    <Image
                      src="/images/picky eater.png"
                      alt="picky"
                      width={15}
                      height={15}
                    />
                  )}
                </TableCell>
                <TableCell>{d.pawrent}</TableCell>
                <TableCell>{d.breed}</TableCell>
                <TableCell>{d.gender}</TableCell>
                <TableCell>{d.dateOfBirth}</TableCell>
                <TableCell>{d.phone}</TableCell>
                <TableCell>
                  {d.address},{d.city},{d.township}.
                </TableCell>
                <TableCell onClick={() => handleOpenModal(d?.id)}>
                  <AiOutlineMore />
                  {showDropDown === d?.id && (
                    <div className={styles.modal}>
                      <button
                        className={styles.button}
                        onClick={() => handleClickOpen(d.id)}
                      >
                        <LuPencil className={styles.pencil} />
                        Edit
                      </button>
                      <br />
                      <button
                        onClick={() => handleRemove(d.id)}
                        className={styles.button}
                      >
                        <FiTrash className={styles.delete} />
                        Delete
                      </button>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          {/* <Dialog open={openEditDialog} onClose={handleClose}>
            <Edit
              onSubmit={onSubmit}
              handleClose={handleClose}
              editItem={editItem}
            />
          </Dialog> */}
          {editItem && (
            <Dialog open={openEditDialog} onClose={handleClose}>
              <Edit
                onSubmit={onSubmit}
                handleClose={handleClose}
                editItem={editItem}
                update={update}
              />
            </Dialog>
          )}
        </Table>
      </TableContainer>
    </>
  );
}
