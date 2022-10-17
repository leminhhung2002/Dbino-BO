// axios
import axios from "axios";
import SETTINGS from "../../settings.json";

export default () => {
  return axios.create({
    baseURL: `${SETTINGS.BASE_URL}`,
    headers: {
      Authorization: `HDB ${localStorage.getItem("token")}`,
    },
  });
};
