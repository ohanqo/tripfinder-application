import { HTTP, AUTH_HTTP } from "./service";

class CityService {
  static async getCities() {
    try {
      return await HTTP.get("/cities");
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  static async searchCities() {
    try {
      console.log("/search?minTmp=1&maxTmp=10");
      return await AUTH_HTTP.get("/search?minTmp=1&maxTmp=10");
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export default CityService;
