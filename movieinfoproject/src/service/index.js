import axios from "axios";
import HttpStatus from "http-status-codes";

export const get = url =>
  axios
    .get(url, {
      headers: {
        Authorization:
          localStorage.getItem("accessToken") !== null
            ? `Bearer ` + localStorage.getItem("accessToken")
            : null,
        "Content-Type": "application/json"
      }
    })
    .then(data => {
      console.log("IN GET IMPLEMENTATION ");
      if (data.status === HttpStatus.OK) {
        return {
          status: data.status,
          payload: data.data
        };
      }
    })
    .catch(err => {
      return {
        status: err.response.data,
        payload: null
      };
    });

export const post = (url, post_data) =>
  axios
    .post(url, post_data, {
      headers: {
        Authorization:
          localStorage.getItem("accessToken") !== null
            ? `Bearer ` + localStorage.getItem("accessToken")
            : null,
        "Content-Type": "application/json"
      }
    })
    .then(data => {
      console.log("IN post IMPLEMENTATION ");
      if (data.status === HttpStatus.OK) {
        return {
          status: data.status,
          payload: data.data
        };
      }
    })
    .catch(err => {
      return {
        status: err.response.data,
        payload: null
      };
    });
