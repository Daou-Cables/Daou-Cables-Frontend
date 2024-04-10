import type { Metadata } from "next";
import ContactUs from "../ui/General/ContactUs";
import PageHeader from "../ui/General/PageHeader";

export const metadata: Metadata = {
  title: "About Us",
  description: "",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PageHeader
        title="Company"
        subTitle1="WELCOME TO"
        subTitle2="DAOU CABLES MANUFACTURING"
      />
      {children}
      <div className="mt-28">
        <ContactUs />
      </div>
    </>
  );
}
