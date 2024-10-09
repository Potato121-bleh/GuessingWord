import Image from "next/image";
import styles from "./page.module.css";
import { redirect } from "next/navigation";
import GuessPage from "./guess-the-word/page";
import WelcomePage from "./welcome/page";
export default function Home() {
  return <WelcomePage />;
}
