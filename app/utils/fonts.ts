import { Barlow, Pacifico } from "next/font/google";
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const pacifico = Pacifico({
  style: "normal",
  weight: "400",
  subsets: ["latin"],
});

export { barlow, pacifico };
