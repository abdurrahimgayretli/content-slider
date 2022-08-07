import axios from "axios";

export const fetchGallery = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/gallery`
  );
  return data;
};

export const postGallery = async (input) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/gallery`,
    input
  );
  return data;
};
