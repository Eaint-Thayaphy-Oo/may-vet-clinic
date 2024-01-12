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
import React, { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { RxCross1 } from "react-icons/rx";
import styles from "./dialog.module.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import { IFormInput, patientData } from "@/type/type";
import { statusOptions } from "@/type/type";
import { breedOptions } from "@/type/type";
import { cityOptions } from "@/type/type";
import { townshipOptions } from "@/type/type";

interface EditDialogProps {
  onSubmit: SubmitHandler<IFormInput>;
  handleClose: () => void;
  editItem: patientData;
  editModal: boolean;
  handleCloseEdit: () => void;
}

export default function Edit({
  onSubmit,
  editItem,
  handleCloseEdit,
}: EditDialogProps) {
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: { ...editItem },
  });

  //update form
  useEffect(() => {
    if (editItem.id) {
      setValue("name", editItem.name || "");
      setValue("pawrent", editItem.pawrent || "");
      setValue("gender", editItem.gender || "");
      setValue("phone", editItem.phone);
      setValue("city", editItem.city || "");
      setValue("status", editItem.status || "");
      setValue("breed", editItem.breed || "");
      setValue("dateOfBirth", editItem.dateOfBirth || "");
      setValue("address", editItem.address || "");
      setValue("township", editItem.township || "");
    }
  }, [editItem, setValue]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RxCross1 className={styles.icon} onClick={handleCloseEdit} />
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
                      style={{ height: "50px" }}
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
                      style={{ height: "50px" }}
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
                      style={{ height: "50px" }}
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
                      sx={{ width: "222px", height: "50px" }}
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
                      sx={{ width: "222px", height: "50px" }}
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
                      sx={{ width: "222px", height: "50px" }}
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
                        value={dayjs(field.value) || null}
                        onChange={(value) => field.onChange(value?.toString())}
                        sx={{ width: "222px", height: "50px" }}
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
                      style={{ height: "50px" }}
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
                      sx={{ width: "222px", height: "50px" }}
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
        <DialogActions sx={{ marginRight: "220px" }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: "#EDC339", width: "100px" }}
            // onClick={() => handleUpdate}
          >
            Update
          </Button>
          <Button variant="outlined" onClick={handleCloseEdit}>
            Cancel
          </Button>
        </DialogActions>
      </form>
    </>
  );
}
