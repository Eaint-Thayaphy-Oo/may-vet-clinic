import styles from "./page.module.css";
import Nav from "./Nav/Nav";
import Header from "./Header/Header";
import Table from "./Table/Table";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <Table />
    </>
  );
}
