import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface IFormInput {
  name: string;
  pawrent: string;
  phone: number;
  address: string;
}

const statusOptions = [
  { value: "all", label: "please choose status" },
  { value: "allergy", label: "Allergy" },
  { value: "picky", label: "Picky Eater" },
];

const breedOptions = [
  { value: "all", label: "please choose breed" },
  { value: "beagle", label: "Beagle" },
  { value: "spaniel", label: "Spaniel" },
  { value: "golden", label: "Golden Retriever" },
];

const cityOptions = [
  { value: "all", label: "please choose city" },
  { value: "yangon", label: "Yangon" },
  { value: "insein", label: "Insein" },
  { value: "tarmwae", label: "Tarmwae" },
];

const townshipOptions = [
  { value: "all", label: "please choose township" },
  { value: "yangon", label: "Yangon" },
  { value: "mandalay", label: "Mandalay" },
  { value: "Shan", label: "Shan" },
];

export default function Create() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DialogTitle
        sx={{
          color: "#54bab9",
          textAlign: "center",
          fontStyle: "Poppins",
          fontSize: "18px",
          fontWeight: "medium",
        }}
      >
        Add new patient
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          sx={{
            fontStyle: "Poppins",
            fontSize: "12px",
            fontWeight: "regular",
            color: "#444444",
            textAlign: "center",
          }}
        >
          Enter new patient information below
        </DialogContentText>
        <DialogActions>
          <div>
            <FormControl error={!!errors["name"]}>
              <FormLabel>Pet Name</FormLabel>
              <Controller
                control={control}
                rules={{ required: true }}
                name="name"
                render={({ field }) => (
                  <OutlinedInput
                    error={!!errors["name"]}
                    value={field.value || ""}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                )}
              />
            </FormControl>
            <FormControl error={!!errors["pawrent"]}>
              <FormLabel>Pawrent</FormLabel>
              <Controller
                control={control}
                rules={{ required: true }}
                name="pawrent"
                render={({ field }) => (
                  <OutlinedInput
                    error={!!errors["pawrent"]}
                    value={field.value || ""}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                )}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </FormControl>
            <FormControl error={!!errors["phone"]}>
              <FormLabel>Contact Phone No.</FormLabel>
              <Controller
                control={control}
                rules={{ required: true }}
                name="phone"
                render={({ field }) => (
                  <OutlinedInput
                    error={!!errors["phone"]}
                    value={field.value || ""}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                )}
              />
            </FormControl>
            <DialogContentText>City</DialogContentText>
            <TextField
              id="outlined-select-currency-native"
              select
              label=""
              SelectProps={{
                native: true,
                sx: {
                  width: "222px",
                },
              }}
              helperText=""
            >
              {cityOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </div>
          <div>
            <DialogContentText>Status</DialogContentText>
            <TextField
              id="outlined-select-currency-native"
              select
              label=""
              SelectProps={{
                native: true,
                sx: {
                  width: "222px",
                },
              }}
              helperText=""
            >
              {statusOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <DialogContentText>Breed</DialogContentText>
            <TextField
              id="outlined-select-currency-native"
              select
              label=""
              SelectProps={{
                native: true,
                sx: {
                  width: "222px",
                },
              }}
              helperText=""
            >
              {breedOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <DialogContentText>Date of Birth</DialogContentText>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker sx={{ width: "222px" }} />
            </LocalizationProvider>
            <FormControl error={!!errors["address"]}>
              <FormLabel>Address</FormLabel>
              <Controller
                control={control}
                rules={{ required: true }}
                name="address"
                render={({ field }) => (
                  <OutlinedInput
                    error={!!errors["address"]}
                    value={field.value || ""}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                )}
              />
            </FormControl>
            <DialogContentText>Township</DialogContentText>
            <TextField
              id="outlined-select-currency-native"
              select
              label=""
              SelectProps={{
                native: true,
                sx: {
                  width: "222px",
                },
              }}
              helperText=""
            >
              {townshipOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </div>
        </DialogActions>
      </DialogContent>
      <DialogActions sx={{ marginRight: "155px" }}>
        <Button
          type="submit"
          variant="contained"
          sx={{ backgroundColor: "#54bab9", width: "100px" }}
        >
          Save
        </Button>
        <Button variant="outlined">Cancel</Button>
      </DialogActions>
    </form>
  );
}
