import { HTTP } from "./service";

export default class CountryService {
  static async getCountries() {
    try {
      return await HTTP.get("/countries");
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
