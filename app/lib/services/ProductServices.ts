"use server";
import axiosInstance from "@/utils/axios";

export const getProducts = async () => {
    const response = await axiosInstance.get("/Products");
    return response.data;
}