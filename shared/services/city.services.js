import { HTTP } from "./service";

class CityService {
  static async getCities() {
    try {
      return await HTTP.get("/cities");
    } catch (error) {
      console.log(error);
      return "error";
    }
  }
}

export default CityService;
