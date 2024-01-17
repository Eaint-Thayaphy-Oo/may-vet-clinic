"use client";

import {
  Checkbox,
  Dialog,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import { MdMoreVert } from "react-icons/md";
import { LuPencil } from "react-icons/lu";
import { FiTrash } from "react-icons/fi";
import styles from "./table.module.css";
import Edit from "../../components/Dialog/Edit";
import { patientData, IFormInput } from "@/type/type";
import { SubmitHandler } from "react-hook-form";
import ConfirmationBox from "@/components/ConfirmationBox/ConfirmationBox";
import dayjs from "dayjs";

interface TableProps {
  data: patientData[];
  remove: (id: number) => void;
  onSubmit: SubmitHandler<IFormInput>;
  editItem?: IFormInput | null;
  update?: (editItem: IFormInput, formData: any) => void;
  editModal: boolean;
  handleCloseEdit: () => void;
  deleteModal: boolean;
}

export default function TableComponent({
  data,
  remove,
  onSubmit,
  editModal,
  handleCloseEdit,
  deleteModal,
}: TableProps) {
  const [selectedId, setSelectedId] = useState<string[]>([]);
  const [showDropDown, setShowDropDown] = useState<number | null>(null);
  const [editItem, setEditItem] = useState<patientData>();
  const [openEditDialog, setOpenEditDialog] = useState<boolean>(false);
  const [deleteItem, setDeleteItem] = useState<patientData>();
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);

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

  //edit dialog box
  const handleClickOpen = (id: number) => {
    const itemToEdit = data.find((item) => item.id === id);
    // console.log("item to edit", itemToEdit);
    setEditItem(itemToEdit);
    setOpenEditDialog(true);
  };

  //edit
  const handleClose = () => {
    setOpenEditDialog(false);
  };

  //delete for item
  const handleRemove = (id: number) => {
    remove(id);
  };

  //delete dialog box
  const handleClickDelete = (id: number) => {
    const itemToDelete = data.find((item) => item.id === id);
    // console.log("item to edit", itemToEdit);
    setDeleteItem(itemToDelete);
    setOpenDeleteDialog(true);
  };

  //delete
  const handleCloseDelete = () => {
    setDeleteItem(undefined);
  };

  return (
    <Stack mx={2.5}>
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
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontWeight: "Semibold",
                  color: "#54bab9",
                }}
              >
                ID
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontWeight: "Semibold",
                  color: "#54bab9",
                }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontWeight: "Semibold",
                  color: "#54bab9",
                }}
              >
                Status
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontWeight: "Semibold",
                  color: "#54bab9",
                }}
              >
                Pawrent
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontWeight: "Semibold",
                  color: "#54bab9",
                }}
              >
                Breed
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontWeight: "Semibold",
                  color: "#54bab9",
                }}
              >
                Gender
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontWeight: "Semibold",
                  color: "#54bab9",
                }}
              >
                Date of Birth
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontWeight: "Semibold",
                  color: "#54bab9",
                }}
              >
                Contact Phone No.
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontWeight: "Semibold",
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
                <TableCell
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: "regular",
                    color: "#000000",
                  }}
                >
                  {d.id}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: "regular",
                    color: "#000000",
                  }}
                >
                  {d.name}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: "regular",
                    color: "#000000",
                  }}
                >
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
                <TableCell
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: "regular",
                    color: "#000000",
                  }}
                >
                  {d.pawrent}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: "regular",
                    color: "#000000",
                  }}
                >
                  {d.breed}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: "regular",
                    color: "#000000",
                  }}
                >
                  {d.gender}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: "regular",
                    color: "#000000",
                  }}
                >
                  {dayjs(d.dateOfBirth).format("DD.MM.YYYY")}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: "regular",
                    color: "#000000",
                  }}
                >
                  {d.phone}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: "regular",
                    color: "#000000",
                  }}
                >
                  {d.address},{d.city},{d.township}.
                </TableCell>
                <TableCell onClick={() => handleOpenModal(d?.id)}>
                  <MdMoreVert />
                  {showDropDown === d?.id && (
                    <div className={styles.modal}>
                      <div
                        className={styles.button}
                        onClick={() => handleClickOpen(d.id)}
                      >
                        <LuPencil className={styles.pencil} />
                        Edit
                      </div>
                      <hr className={styles.hr} />
                      <div
                        className={styles.button}
                        onClick={() => handleClickDelete(d.id)}
                      >
                        <FiTrash className={styles.delete} />
                        Delete
                      </div>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          {editItem && (
            <Dialog open={editModal} onClose={handleCloseEdit}>
              <Edit
                onSubmit={onSubmit}
                handleClose={handleClose}
                editItem={editItem}
                editModal={editModal}
                handleCloseEdit={handleCloseEdit}
              />
            </Dialog>
          )}

          {deleteItem && (
            <Dialog open={deleteModal} onClose={handleCloseDelete}>
              <ConfirmationBox
                remove={(id: number) => handleRemove(id)}
                handleCloseDelete={handleCloseDelete}
                id={deleteItem.id}
                open={deleteModal}
              />
            </Dialog>
          )}
        </Table>
      </TableContainer>
    </Stack>
  );
}
