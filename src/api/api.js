import axios, {
  AxiosInstance,
  AxiosRequestConfig
} from "axios";

const baseurl = process.env.REACT_APP_DEV;
// const baseurl = "https://api.opensea.io/api"

// 登入 Request
const basicRequest = axios.create({
  baseURL: `${baseurl}/v1/assets`,
  withCredentials: true,
});

// GET List
export const apiGetList = (offset, limit) =>
  basicRequest.get(``, {
    params: {
      format: 'json',
      owner: "0x960DE9907A2e2f5363646d48D7FB675Cd2892e91",
      offset,
      limit
    }
  });

// GET Detail
export const apiGetDetail = (address, id) =>
  basicRequest.get(`/${address}/${id}`);