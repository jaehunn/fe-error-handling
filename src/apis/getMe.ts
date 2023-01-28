import axios from "axios";

type Params = {
  //
};

export const getMe = (params: Params) => {
  return axios.get("/api/me", params);
};
