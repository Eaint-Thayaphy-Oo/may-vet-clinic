type patientData = {
  id: number;
  name: string;
  status: string;
  pawrent: string;
  breed: string;
  gender: string;
  dateOfBirth: string;
  phone: string;
  address: string;
  township: string;
  city: string;
};

const items: patientData[] = [
  {
    id: 1,
    name: "Mj",
    status: "picky",
    pawrent: "NayChi",
    breed: "spaniel",
    gender: "female",
    dateOfBirth: "2016-04-01",
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
    dateOfBirth: "2020-01-09",
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
    dateOfBirth: "2023-11-20",
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
    dateOfBirth: "2018-02-02",
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
    dateOfBirth: "2015-03-23",
    address: "no.7",
    township: "yangon",
  },
];

export default items;
