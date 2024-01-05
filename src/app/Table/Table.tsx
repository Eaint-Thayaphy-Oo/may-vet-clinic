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
  const [data, setData] = useState<patientData[]>([
    {
      id: 1,
      name: "Mj",
      status: "picky",
      pawrent: "NayChi",
      breed: "spaniel",
      gender: "female",
      birth: "2016-4-01",
      phone: "12345",
      address: "no15",
      township: "shan",
      city: "pan lone",
    },
    {
      id: 2,
      name: "Pink pink",
      status: "allergy",
      pawrent: "kyaw kyaw",
      breed: "golden",
      gender: "male",
      birth: "2020-1-09",
      phone: "125456",
      address: "no12",
      township: "mandalay",
      city: "mahar si thu",
    },
    {
      id: 3,
      name: "jelly ",
      pawrent: "mama",
      gender: "female",
      phone: "12324",
      city: "yangon",
      status: "picky",
      breed: "breed",
      birth: "2023-11-30T17:30:00.000Z",
      address: "no.56",
      township: "yangon",
    },
    {
      id: 4,
      name: "boo ",
      pawrent: "mg kyaw",
      gender: "male",
      phone: "56879",
      city: "tarmwae",
      status: "allery",
      breed: "golden",
      birth: "4.5.2024",
      address: "no.34",
      township: "yangon",
    },
    {
      id: 5,
      name: "Lu Lu ",
      pawrent: "NayChi",
      gender: "female",
      phone: "654654",
      city: "insein",
      status: "picky",
      breed: "spaniel",
      birth: "9.2.2021",
      address: "no.7",
      township: "yangon",
    },
  ]);

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
            {data.map((d) => (
              <TableRow key={d.id}>
                {/* <TableCell>
                  <Checkbox
                    checked={selectedItems.includes(d.id)}
                    onChange={() => handleCheckboxChange(d.id)}
                  />
                </TableCell> */}
                <TableCell>{d.id}</TableCell>
                <TableCell>{d.name}</TableCell>
                <TableCell>{d.status}</TableCell>
                <TableCell>{d.pawrent}</TableCell>
                <TableCell>{d.breed}</TableCell>
                <TableCell>{d.gender}</TableCell>
                <TableCell>{d.birth}</TableCell>
                <TableCell>{d.phone}</TableCell>
                <TableCell>
                  {d.address},{d.city},{d.township}.
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
