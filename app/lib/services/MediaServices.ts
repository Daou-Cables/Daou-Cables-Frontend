"use server";
import axiosInstance from "@/utils/axios";

export const getBillBoard = async () => {
    const response = await axiosInstance.get("/Media/Billboard");
    return response.data;
}

export const getMobileBillBoard = async () => {
    const response = await axiosInstance.get("/Media/BillboardMb");
    return response.data;
}

export const getVideo = async () => {
    const response = await axiosInstance.get("/Media/Video");
    return response.data;
}