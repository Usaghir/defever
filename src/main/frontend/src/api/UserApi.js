import Api from "./Api";

class UserApi {
  constructor() {
    this.loadUser();
  }

  currentUser = {
    id: "Loading...",
    name: "Loading...",
    email: "Loading...",
    address: "Loading...",
    phone: "Loading...",
  };
  currentUserSet = () => {};

  current() {
    return Api.get("/user");
  }

  updateUser(user) {
    return Api.put("/user", user);
  }

  async loadUser() {
    try {
      let userObject = await this.current();
      this.currentUser = userObject.data;
      this.currentUserSet(this.currentUser);
    } catch (e) {
      console.error(e);
    }
  }

  bindCurrentUserStateSetter(currentUserStateSetter) {
    this.currentUserSet = currentUserStateSetter;
  }
}

const userApiInstance = new UserApi();
export default userApiInstance;
