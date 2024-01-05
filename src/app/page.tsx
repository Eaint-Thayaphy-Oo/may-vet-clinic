import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./Nav/Nav";
import Header from "./Header/Header";
import Table from "./Table/table";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <Table />
    </>
  );
}
