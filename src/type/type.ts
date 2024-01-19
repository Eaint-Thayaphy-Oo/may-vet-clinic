export type patientData = {
  id: number;
  name: string;
  status: string;
  pawrent: string;
  breed: string;
  gender: string;
  dateOfBirth: string | Date | null;
  phone: string | number;
  address: string;
  township?: string;
  city?: string;
};

export interface IFormInput {
  id?: number;
  name: string;
  pawrent: string;
  gender: string;
  phone: string | number;
  city: string;
  status: string;
  breed: string;
  dateOfBirth: string | Date | null;
  address: string;
  township: string;
}

export const status = [
  { value: "allergy", label: "Allergy" },
  { value: "picky", label: "Picky Eater" },
];

export const breed = [
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
  { value: "allergy", label: "Allergy" },
  { value: "picky", label: "Picky Eater" },
];

export const breedOptions = [
  { value: "beagle", label: "Beagle" },
  { value: "spaniel", label: "Spaniel" },
  { value: "golden", label: "Golden Retriever" },
];

export const cityOptions = [
  { value: "yangon", label: "Yangon" },
  { value: "taunggyi", label: "Taunggyi" },
  { value: "bago", label: "Bago" },
];

export const townshipOptions = [
  { value: "bahan", label: "Bahan", city: "yangon" },
  { value: "sanchaung", label: "Sanchaung", city: "yangon" },
  { value: "tamwe", label: "Tamwe", city: "yangon" },
  { value: "aungban", label: "Aungban", city: "taunggyi" },
  { value: "ayetharyar", label: "Ayetharyar", city: "taunggyi" },
  { value: "bago", label: "Bago", city: "bago" },
  { value: "daik-u ", label: "Daik-U ", city: "bago" },
];
