import { mainServices } from "@/app/lib/services/MainServices";
import { useEffect, useState } from "react";

const useBillboard = () => {
    const [billboard, setBillboard] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const fetchBillboard = async () => {
            setLoading(true);
            setError("");
            try {
                const billboard = await mainServices.getBillboard();
                setBillboard(billboard);
            } catch (error) {
                setError("Error fetching billboard");
                setBillboard("/images/placeholder.png");
            }
            setLoading(false);
        };
        fetchBillboard();
    }, []);
    return { billboard, error, loading };
};

export default useBillboard;
