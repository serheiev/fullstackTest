import axios from "axios";

export const registration = async (email, password, name) => {
  try {
    const res = await axios.post("http://localhost:5000/api/registration", {
      name,
      email,
      password,
    });
    // console.log(res.data);
  } catch (e) {
    console.log(e);
  }
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };
};
