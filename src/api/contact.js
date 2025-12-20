import axiosInstance from "./axios";

export const sendContactMessage = async (data) => {
  try {
    const response = await axiosInstance.post("/api/contact", data);
    return response.data; // contains { message, data }
  } catch (error) {
    console.error("Error sending contact message:", error);
    throw error;
  }
};





