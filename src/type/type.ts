export type patientData = {
  id?: number;
  name: string;
  status: string;
  pawrent: string;
  breed: string;
  gender: string;
  dateOfBirth: string | Date | null;
  phone?: number;
  address: string;
  township?: string;
  city?: string;
};

export interface IFormInput {
  id?: number;
  name: string;
  pawrent: string;
  gender: string;
  phone?: number;
  city: string;
  status: string;
  breed: string;
  dateOfBirth: string | Date | null;
  address: string;
  township: string;
}

export const status = [
  { value: "all", label: "Status All" },
  { value: "allergy", label: "Allergy" },
  { value: "picky", label: "Picky Eater" },
];

export const breed = [
  { value: "all", label: "Breed All" },
  { value: "beagle", label: "Beagle" },
  { value: "spaniel", label: "Spaniel" },
  { value: "golden", label: "Golden Retriever" },
];

export const rows = [
  { value: "3", label: "3" },
  { value: "5", label: "5" },
  { value: "10", label: "10" },
];

export const statusOptions = [
  { value: "all", label: "please choose status" },
  { value: "allergy", label: "Allergy" },
  { value: "picky", label: "Picky Eater" },
];

export const breedOptions = [
  { value: "all", label: "please choose breed" },
  { value: "beagle", label: "Beagle" },
  { value: "spaniel", label: "Spaniel" },
  { value: "golden", label: "Golden Retriever" },
];

export const cityOptions = [
  { value: "all", label: "please choose city" },
  { value: "yangon", label: "Yangon" },
  { value: "insein", label: "Insein" },
  { value: "tarmwae", label: "Tarmwae" },
];

export const townshipOptions = [
  { value: "all", label: "please choose township" },
  { value: "yangon", label: "Yangon" },
  { value: "mandalay", label: "Mandalay" },
  { value: "Shan", label: "Shan" },
];
