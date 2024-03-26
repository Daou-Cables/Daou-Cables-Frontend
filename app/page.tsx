import AboutUs from "./ui/HomePage/AboutUs";
import Hero from "./ui/HomePage/Hero";
import MyProducts from "./ui/HomePage/OurProducts";
import { Suspense } from "react";
import { BillBoardSkeleton } from "./ui/skeletons";
import ContactUs from "./ui/General/ContactUs";

export default function Home() {
    return (
        <div className="flex flex-col space-y-36">
            <Suspense fallback={<BillBoardSkeleton />}>
                <Hero />
            </Suspense>
            <MyProducts />
            <AboutUs />
            <ContactUs />
        </div>
    );
}
