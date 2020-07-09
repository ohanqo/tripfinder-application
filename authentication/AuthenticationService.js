const { HTTP } = require("../shared/services/service");

export default class AuthenticationService {
  static async login(loginDTO) {
    try {
      return await HTTP.post("/login", loginDTO);
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  static async register(registerDTO) {
    try {
      return await HTTP.post("/users", registerDTO);
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}
