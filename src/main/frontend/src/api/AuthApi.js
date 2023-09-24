import Api from "./Api";

class AuthApi {
  authenticate({ email, password }) {
    return Api.post("/authenticate", { email, password });
  }

  register({ name, email, password }) {
    return Api.post("/register", { name, email, password });
  }
}

const authApiInstance = new AuthApi();
export default authApiInstance;
