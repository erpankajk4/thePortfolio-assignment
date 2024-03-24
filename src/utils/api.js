import axios from "axios";

const BASE_URL =
  "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae";

export const fetchDataFromApi = async () => {
  try {
    const { data } = await axios.get(BASE_URL);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
