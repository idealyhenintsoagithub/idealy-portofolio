import type { Metadata } from "next";
import Home from "./home/home";

export default function IndexPage() {
  return <Home />;
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
