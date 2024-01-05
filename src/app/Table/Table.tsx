"use client";

import {
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import data from "../../Data/data";

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

export default function table() {
  const [items, setItem] = useState<patientData[]>(data);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* <TableCell>
                <Checkbox
                  indeterminate={
                    selectedItems.length > 0 &&
                    selectedItems.length < items.length
                  }
                  checked={selectedItems.length === items.length}
                  onChange={handleSelectAll}
                />
              </TableCell> */}
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
            {items.map((item) => (
              <TableRow key={item.id}>
                {/* <TableCell>
                  <Checkbox
                    checked={selectedItems.includes(d.id)}
                    onChange={() => handleCheckboxChange(d.id)}
                  />
                </TableCell> */}
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.pawrent}</TableCell>
                <TableCell>{item.breed}</TableCell>
                <TableCell>{item.gender}</TableCell>
                <TableCell>{item.birth}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>
                  {item.address},{item.city},{item.township}.
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
