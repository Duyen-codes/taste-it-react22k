import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID HnpcuqOIx43c9PEAKYdjxbwCv7tQBpmST9FFSMKHLm0",
  },
});
