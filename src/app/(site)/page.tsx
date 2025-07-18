import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "eCommerce | Nextjs E-commerce",
  description: "This is eCommerce",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
