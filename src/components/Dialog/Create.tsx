import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  Stack,
} from "@mui/material";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { RxCross1 } from "react-icons/rx";
import styles from "./dialog.module.css";
import dayjs from "dayjs";
import { IFormInput } from "@/type/type";
import { statusOptions } from "@/type/type";
import { breedOptions } from "@/type/type";
import { cityOptions } from "@/type/type";
import { townshipOptions } from "@/type/type";
import { Poppins } from "next/font/google";

interface CreateDialogProps {
  onSubmit: SubmitHandler<IFormInput>;
  handleClose: () => void;
}

export default function Create({ onSubmit, handleClose }: CreateDialogProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <Stack justifyContent={"space-between"} alignItems={"center"}>
        <IconButton
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
          }}
          onClick={handleClose}
        >
          <RxCross1 />
        </IconButton>
        <DialogTitle
          sx={{
            color: "#54bab9",
            textAlign: "center",
            fontSize: "18px",
            fontWeight: "medium",
            fontFamily: "Poppins",
          }}
        >
          Add new patient
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{
              fontFamily: "Poppins",
              fontSize: "12px",
              fontWeight: "regular",
              color: "#444444",
              textAlign: "center",
            }}
          >
            Enter new patient information below
          </DialogContentText>
          <DialogActions>
            <Stack
              justifyContent={"space-between"}
              alignItems={"center"}
              direction={"row"}
              spacing={11}
            >
              <div>
                <FormControl error={!!errors["name"]}>
                  <FormLabel
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "12px",
                      fontWeight: "regular",
                      color: "#444444",
                    }}
                  >
                    Pet Name
                  </FormLabel>
                  <Controller
                    control={control}
                    rules={{ required: true }}
                    name="name"
                    render={({ field }) => (
                      <OutlinedInput
                        error={!!errors["name"]}
                        value={field.value || ""}
                        onChange={(e) => field.onChange(e.target.value)}
                        style={{ height: "40px", marginBottom: "10px" }}
                      />
                    )}
                  />
                </FormControl>
                <FormControl error={!!errors["pawrent"]}>
                  <FormLabel
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "12px",
                      fontWeight: "regular",
                      color: "#444444",
                    }}
                  >
                    Pawrent
                  </FormLabel>
                  <Controller
                    control={control}
                    rules={{ required: true }}
                    name="pawrent"
                    render={({ field }) => (
                      <OutlinedInput
                        error={!!errors["pawrent"]}
                        value={field.value || ""}
                        onChange={(e) => field.onChange(e.target.value)}
                        style={{ height: "40px", marginBottom: "10px" }}
                      />
                    )}
                  />
                </FormControl>
                <FormControl error={!!errors["gender"]}>
                  <FormLabel
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "12px",
                      fontWeight: "regular",
                      color: "#444444",
                    }}
                  >
                    Gender
                  </FormLabel>
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
                        style={{ marginBottom: "10px" }}
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
                  <FormLabel
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "12px",
                      fontWeight: "regular",
                      color: "#444444",
                    }}
                  >
                    Contact Phone No.
                  </FormLabel>
                  <Controller
                    control={control}
                    rules={{ required: true }}
                    name="phone"
                    render={({ field }) => (
                      <OutlinedInput
                        error={!!errors["phone"]}
                        value={field.value || ""}
                        onChange={(e) => field.onChange(e.target.value)}
                        style={{ height: "40px", marginBottom: "10px" }}
                      />
                    )}
                  />
                </FormControl>
                <FormControl error={!!errors["city"]}>
                  <FormLabel
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "12px",
                      fontWeight: "regular",
                      color: "#444444",
                    }}
                  >
                    City
                  </FormLabel>
                  <Controller
                    control={control}
                    rules={{ required: true }}
                    name="city"
                    render={({ field }) => (
                      <Select
                        native
                        value={field.value || ""}
                        onChange={(e) => field.onChange(e.target.value)}
                        sx={{ width: "222px", height: "40px" }}
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
                  <FormLabel
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "12px",
                      fontWeight: "regular",
                      color: "#444444",
                    }}
                  >
                    Status
                  </FormLabel>
                  <Controller
                    control={control}
                    rules={{ required: true }}
                    name="status"
                    render={({ field }) => (
                      <Select
                        native
                        value={field.value || ""}
                        onChange={(e) => field.onChange(e.target.value)}
                        sx={{
                          width: "222px",
                          height: "40px",
                          marginBottom: "9px",
                        }}
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
                  <FormLabel
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "12px",
                      fontWeight: "regular",
                      color: "#444444",
                    }}
                  >
                    Breed
                  </FormLabel>
                  <Controller
                    control={control}
                    rules={{ required: true }}
                    name="breed"
                    render={({ field }) => (
                      <Select
                        native
                        value={field.value || ""}
                        onChange={(e) => field.onChange(e.target.value)}
                        sx={{
                          width: "222px",
                          height: "40px",
                          marginBottom: "9px",
                        }}
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
                  <FormLabel
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "12px",
                      fontWeight: "regular",
                      color: "#444444",
                    }}
                  >
                    Date of Birth
                  </FormLabel>
                  <Controller
                    control={control}
                    rules={{ required: true }}
                    name="dateOfBirth"
                    render={({ field }) => (
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          {...field}
                          value={dayjs(field.value) || null}
                          onChange={(value) => field.onChange(dayjs(value))}
                          sx={{ width: "222px", marginBottom: "9px" }}
                        />
                      </LocalizationProvider>
                    )}
                  />
                </FormControl>
                <FormControl error={!!errors["address"]}>
                  <FormLabel
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "12px",
                      fontWeight: "regular",
                      color: "#444444",
                    }}
                  >
                    Address
                  </FormLabel>
                  <Controller
                    control={control}
                    rules={{ required: true }}
                    name="address"
                    render={({ field }) => (
                      <OutlinedInput
                        error={!!errors["address"]}
                        value={field.value || ""}
                        onChange={(e) => field.onChange(e.target.value)}
                        style={{ height: "40px", marginBottom: "9px" }}
                      />
                    )}
                  />
                </FormControl>
                <FormControl error={!!errors["township"]}>
                  <FormLabel
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "12px",
                      fontWeight: "regular",
                      color: "#444444",
                    }}
                  >
                    Township
                  </FormLabel>
                  <Controller
                    control={control}
                    rules={{ required: true }}
                    name="township"
                    render={({ field }) => (
                      <Select
                        native
                        value={field.value || ""}
                        onChange={(e) => field.onChange(e.target.value)}
                        sx={{ width: "222px", height: "40px" }}
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
            </Stack>
          </DialogActions>
        </DialogContent>
        <DialogActions sx={{ paddingBottom: "20px" }}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#54bab9",
              fontFamily: "Poppins",
              fontSize: "14px",
              fontWeight: "regular",
              color: "#ffffff",
              width: "100px",
              "&:hover": {
                backgroundColor: "#54bab9",
              },
            }}
          >
            Save
          </Button>
          <Button
            variant="outlined"
            onClick={handleClose}
            sx={{
              fontFamily: "Poppins",
              fontSize: "14px",
              fontWeight: "regular",
              color: "#000000",
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Stack>
    </form>
  );
}
