export type patientData = {
  id: number;
  name: string;
  status: string;
  pawrent: string;
  breed: string;
  gender: string;
  dateOfBirth: string | null;
  phone: string;
  address: string;
  township?: string;
  city?: string;
};

export interface IFormInput {
  id?: number;
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

export default statusOptions;
