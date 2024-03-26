import type { Metadata } from "next";
import ContactUs from "../ui/General/ContactUs";

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
        <div className="pt-12">
            <span className="flex items-center justify-center italic text-sm sm:text-2xl">
                Company
            </span>
            <h2 className="mt-2 flex items-center justify-center font-bold text-xl sm:text-4xl md:text-5xl">
                WELCOME TO
            </h2>
            <h2 className="flex items-center justify-center font-bold text-xl sm:text-4xl md:text-5xl">
                DAOU CABLES MANUFACTURING
            </h2>
            {children}
            <div className="mt-28">
                <ContactUs />
            </div>
        </div>
    );
}
