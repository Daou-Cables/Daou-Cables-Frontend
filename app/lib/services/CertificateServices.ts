"use server";
import axiosInstance from "@/utils/axios";

export const getCertificates = async () => {
    const response = await axiosInstance.get("/Certificates");
    return response.data;
};