"use server";
import axiosInstance from "@/utils/axios";
import { ContactForm } from "../definitions";

export const sendQuota = async (data: ContactForm) => {
  const response = await axiosInstance.post("/Quotas", {
    name: data.name,
    email: data.email,
    description: data.message,
  });
  console.log("response", response.data)
  return response.data;
};
