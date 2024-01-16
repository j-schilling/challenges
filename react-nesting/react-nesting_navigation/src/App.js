import "./styles.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Link from "./components/Link";
import Logo from "./components/Logo";
import Avatar from "./components/Avatar";
import avatar from "./img/avatar.jpg";
import logo from "./img/logo.jpg";

export default function App() {
  return (
    <>
      <Header>
        <Logo src={logo} alt="logo" />
        <Navigation>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>
        <Avatar src={avatar} alt="avatar" />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
