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
  Select,
} from "@mui/material";
import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { RxCross1 } from "react-icons/rx";
import styles from "./dialog.module.css";

interface IFormInput {
  id: number;
  name: string;
  pawrent: string;
  gender: string;
  phone: number;
  city: string;
  status: string;
  breed: string;
  dateOfBirth: string | Date | null;
  address: string;
  township: string;
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

// interface CreateDialogProps {
//   onSubmit: () => void;
// }
interface CreateDialogProps {
  onSubmit: SubmitHandler<IFormInput>;
  handleClose: () => void;
}

export default function Create({ onSubmit }: CreateDialogProps) {
  const [open, setOpen] = useState(true);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      {open && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <RxCross1 className={styles.icon} onClick={handleCancel} />
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
                <FormControl error={!!errors["gender"]}>
                  <FormLabel>Gender</FormLabel>
                  <Controller
                    control={control}
                    rules={{ required: true }}
                    name="gender"
                    render={({ field }) => (
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={field.value || ""}
                        onChange={(e) => field.onChange(e.target.value)}
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
                    )}
                  />
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
                <FormControl error={!!errors["city"]}>
                  <FormLabel>City</FormLabel>
                  <Controller
                    control={control}
                    rules={{ required: true }}
                    name="city"
                    render={({ field }) => (
                      <Select
                        native
                        value={field.value || ""}
                        onChange={(e) => field.onChange(e.target.value)}
                        sx={{ width: "222px" }}
                      >
                        {cityOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </Select>
                    )}
                  />
                </FormControl>
              </div>
              <div>
                <FormControl error={!!errors["status"]}>
                  <FormLabel>Status</FormLabel>
                  <Controller
                    control={control}
                    rules={{ required: true }}
                    name="status"
                    render={({ field }) => (
                      <Select
                        native
                        value={field.value || ""}
                        onChange={(e) => field.onChange(e.target.value)}
                        sx={{ width: "222px" }}
                      >
                        {statusOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </Select>
                    )}
                  />
                </FormControl>
                <FormControl error={!!errors["breed"]}>
                  <FormLabel>Breed</FormLabel>
                  <Controller
                    control={control}
                    rules={{ required: true }}
                    name="breed"
                    render={({ field }) => (
                      <Select
                        native
                        value={field.value || ""}
                        onChange={(e) => field.onChange(e.target.value)}
                        sx={{ width: "222px" }}
                      >
                        {breedOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </Select>
                    )}
                  />
                </FormControl>
                <FormControl error={!!errors["dateOfBirth"]}>
                  <FormLabel>Date of Birth</FormLabel>
                  <Controller
                    control={control}
                    rules={{ required: true }}
                    name="dateOfBirth"
                    render={({ field }) => (
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          {...field}
                          value={field.value || null}
                          onChange={(value) =>
                            field.onChange(value?.toString())
                          }
                          sx={{ width: "222px" }}
                        />
                      </LocalizationProvider>
                    )}
                  />
                </FormControl>
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
                <FormControl error={!!errors["township"]}>
                  <FormLabel>Township</FormLabel>
                  <Controller
                    control={control}
                    rules={{ required: true }}
                    name="township"
                    render={({ field }) => (
                      <Select
                        native
                        value={field.value || ""}
                        onChange={(e) => field.onChange(e.target.value)}
                        sx={{ width: "222px" }}
                      >
                        {townshipOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </Select>
                    )}
                  />
                </FormControl>
              </div>
            </DialogActions>
          </DialogContent>
          <DialogActions sx={{ marginRight: "205px" }}>
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "#54bab9", width: "100px" }}
            >
              Save
            </Button>
            <Button variant="outlined" onClick={handleCancel}>
              Cancel
            </Button>
          </DialogActions>
        </form>
      )}
    </>
  );
}
