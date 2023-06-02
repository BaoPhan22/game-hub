import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: "7f2dd776e4bb417b80264663981cd5a9"
  }
});
