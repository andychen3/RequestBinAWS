import axios from "axios";

export const getBin = async (binRoute: string, token: string) => {
  const response = await axios.get(
    `https://69ade7f2b50a169ec8808476.mockapi.io/bins/bins/${binRoute}`,
    {
      headers: { Authorization: token },
    },
  );
  return response.data;
};
