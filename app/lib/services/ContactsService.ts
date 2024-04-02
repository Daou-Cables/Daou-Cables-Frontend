import axiosInstance from "@/utils/axios";

export const getContacts = async () => {
  const response = await axiosInstance.get("/Contacts");
  return response.data;
};
