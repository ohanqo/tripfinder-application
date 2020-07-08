import AuthenticationService from "./AuthenticationService";

export default class AuthenticationRepository {
  static async login(loginDTO) {
    try {
      const response = await AuthenticationService.login(loginDTO);
      // TODO store token
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  static async register(registerDTO) {
    try {
      return await AuthenticationService.register(registerDTO);
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}
