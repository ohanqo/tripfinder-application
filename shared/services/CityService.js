import { AUTH_HTTP, HTTP } from "./service";

class CityService {
  static async getCities() {
    try {
      return await HTTP.get("/cities");
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  static async postCity(cityDTO) {
    try {
      return await AUTH_HTTP.post("/cities", cityDTO);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  static async searchCities(filters) {
    let apiUlrFilters = "/search";

    if (filters !== undefined) {
      const {
        minTemperature,
        maxTemperature,
        minBudget,
        maxBudget,
        continent,
        type,
      } = filters;

      apiUlrFilters += "?";

      if (minTemperature !== 0 && maxTemperature !== 0) {
        apiUlrFilters += `minTmp=${minTemperature}&maxTmp=${maxTemperature}&`;
      }
      if (minBudget !== 0 && maxBudget !== 0) {
        apiUlrFilters += `minBudget=${minBudget}&maxBudget=${maxBudget}&`;
      }
      if (continent !== undefined) {
        apiUlrFilters += `continent=${continent}&`;
      }
      if (type !== undefined) {
        apiUlrFilters += `type=${type}&`;
      }
    }

    try {
      return await AUTH_HTTP.get(apiUlrFilters);
    } catch (error) {
      return error;
    }
  }
}

export default CityService;
