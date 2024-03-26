"use server";

import { Category } from "@/app/lib/definitions";
import { Contact } from "@/app/lib/definitions";
import { Product } from "@/app/lib/definitions";
import axiosInstance from "@/utils/axios";
import { AxiosError, AxiosResponse } from "axios";

export const getProducts = async (): Promise<Product[]> => {
    const response: AxiosResponse<Product[], AxiosError> =
        await axiosInstance.get("/getProducts");
    return response.data;
};
export const getContacts = async (): Promise<Contact[]> => {
    const response: AxiosResponse<Contact[], AxiosError> =
        await axiosInstance.get("/getContacts");
    return response.data;
};
export const getCategories = async (): Promise<Category[]> => {
    const response: AxiosResponse<Category[], AxiosError> =
        await axiosInstance.get("/getCategories");
    return response.data;
};
export const getProduct = async (ref: string): Promise<Product> => {
    const response: AxiosResponse<Product, AxiosError> =
        await axiosInstance.get(`/getProduct/${ref}`);
    return response.data;
};
export const getProductsByCategory = async (
    category: string
): Promise<Product[]> => {
    const response: AxiosResponse<Product[], AxiosError> =
        await axiosInstance.get(`/getProductsByCategory/${category}`);
    return response.data;
};
export const getBillboard = async (): Promise<string> => {
    const response: AxiosResponse<string, AxiosError> = await axiosInstance.get(
        "/getBillboard"
    );
    return response.data;
};
export const getVideo = async (): Promise<string> => {
    const response: AxiosResponse<string, AxiosError> = await axiosInstance.get(
        "/getVideo"
    );
    return response.data;
};

export const getBillBoardMobile = async (): Promise<string> => {
    const response: AxiosResponse<string, AxiosError> =
        await axiosInstance.get("/getBillBoardMb");
    return response.data;
}
