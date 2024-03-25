import AboutUs from "./ui/HomePage/AboutUs";
import Hero from "./ui/HomePage/Hero";
import MyProducts from "./ui/HomePage/OurProducts";
import { Suspense } from "react";
import { BillBoardSkeleton } from "./ui/skeletons";
import ContactUs from "./ui/HomePage/ContactUs";

export default function Home() {
    return (
        <div className="p-4 sm:p-12 flex flex-col space-y-36">
            <Suspense fallback={<BillBoardSkeleton />}>
                <Hero />
            </Suspense>
            <MyProducts />
            <AboutUs />
            <ContactUs />
        </div>
    );
}
