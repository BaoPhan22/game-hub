import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: "4599edd7f0074f0a8f861b3da7e1b922"
  }
});
