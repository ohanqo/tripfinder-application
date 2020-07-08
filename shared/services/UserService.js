import { AUTH_HTTP } from "./service";

export default class UserService {
  static async me() {
    try {
      return await AUTH_HTTP.get("/me");
    } catch (error) {
      return error;
    }
  }
}
