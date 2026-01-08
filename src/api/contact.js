import axios from "axios";

export const sendContactMessage = async (data) => {
  const response = await axios.post(
    "http://localhost:5000/api/contact",
    data
  );
  return response.data;
};






