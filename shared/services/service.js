import axios from "axios";

export const SERVER_URL = "http://94.238.22.29:8921/";

export const HTTP = axios.create({
  baseURL: `${SERVER_URL}api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const AUTH_HTTP = axios.create({
  baseURL: `${SERVER_URL}api`,
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYwM2NhNThkMmE1ODZmNzU2OGM4MjQyMTBmMTAzMTg5MGU3YmNlMWNmMTYzOTY5ODE4MjczYjIzMTFmZWNhYTU1NmNhOTc0ODA5NDVjMjhhIn0.eyJhdWQiOiIxIiwianRpIjoiZjAzY2E1OGQyYTU4NmY3NTY4YzgyNDIxMGYxMDMxODkwZTdiY2UxY2YxNjM5Njk4MTgyNzNiMjMxMWZlY2FhNTU2Y2E5NzQ4MDk0NWMyOGEiLCJpYXQiOjE1OTQxNTI0NTAsIm5iZiI6MTU5NDE1MjQ1MCwiZXhwIjoxNjI1Njg4NDUwLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.Ru0la6J_dz7YXCCrWZkrAHB-KD3g6cmIawIghACJVNXdvnoD_fmXy-L0v500v7WKUyMOfsEhE3fFIz2ljbpX8atT0U1ZcmyaWPqOX-GN7LIcaSRy1X2XpNpoVIGgZkdtAKFAoo2lyVzpjNoRUV6zv2mqdWmOeVN0mEKpfLCMKqJ-XNuBZl-neqVysRl9UlYlKPZ25bG1tkf8m4Y0uEWQPJUz785oJ0x2y1RSi9NMPwDt4QmZZCsx5c3WhljNkLOlTvzCGGM-MVIpShn4U41UbqpEdkISA92bhRA69PRGlmNrm44BafNxhPU331I9fWf-QKIMPyIx2qRSyDDPZdqIEnlak5IA75Z4KOA5dq21yiKfmOA5Sb1b4rwPY9koOyWwXFUSDsQk8za8sFqboG5ZQN9jF8Lztaar6xZAudWA-NYDivGU-vmINOQwVGBlGsiCoqp1csPgX0ldMBgnuV_1huhSCt9bq5uMMjNDCGDxxfAeauz-YmYwIdmNreskBPVqN8mYk_JH7MISKUA0n1Ywy5mbInrDKpAu5VTE4K9w73760Gnw7WTwdQx3xA8dNmLBVve07nhc0vtFePIIDxNltVcZtCWarqQVtVhx7HaWM9ATX4a7Y3Gr1yVxG6NEsImlqFVQEtts4PSbHoRcQo7vUUzsWpIFGQaF9xybnguYnrI"
  },
  /*transformRequest: [
    ( headers) => {
      const token =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYwM2NhNThkMmE1ODZmNzU2OGM4MjQyMTBmMTAzMTg5MGU3YmNlMWNmMTYzOTY5ODE4MjczYjIzMTFmZWNhYTU1NmNhOTc0ODA5NDVjMjhhIn0.eyJhdWQiOiIxIiwianRpIjoiZjAzY2E1OGQyYTU4NmY3NTY4YzgyNDIxMGYxMDMxODkwZTdiY2UxY2YxNjM5Njk4MTgyNzNiMjMxMWZlY2FhNTU2Y2E5NzQ4MDk0NWMyOGEiLCJpYXQiOjE1OTQxNTI0NTAsIm5iZiI6MTU5NDE1MjQ1MCwiZXhwIjoxNjI1Njg4NDUwLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.Ru0la6J_dz7YXCCrWZkrAHB-KD3g6cmIawIghACJVNXdvnoD_fmXy-L0v500v7WKUyMOfsEhE3fFIz2ljbpX8atT0U1ZcmyaWPqOX-GN7LIcaSRy1X2XpNpoVIGgZkdtAKFAoo2lyVzpjNoRUV6zv2mqdWmOeVN0mEKpfLCMKqJ-XNuBZl-neqVysRl9UlYlKPZ25bG1tkf8m4Y0uEWQPJUz785oJ0x2y1RSi9NMPwDt4QmZZCsx5c3WhljNkLOlTvzCGGM-MVIpShn4U41UbqpEdkISA92bhRA69PRGlmNrm44BafNxhPU331I9fWf-QKIMPyIx2qRSyDDPZdqIEnlak5IA75Z4KOA5dq21yiKfmOA5Sb1b4rwPY9koOyWwXFUSDsQk8za8sFqboG5ZQN9jF8Lztaar6xZAudWA-NYDivGU-vmINOQwVGBlGsiCoqp1csPgX0ldMBgnuV_1huhSCt9bq5uMMjNDCGDxxfAeauz-YmYwIdmNreskBPVqN8mYk_JH7MISKUA0n1Ywy5mbInrDKpAu5VTE4K9w73760Gnw7WTwdQx3xA8dNmLBVve07nhc0vtFePIIDxNltVcZtCWarqQVtVhx7HaWM9ATX4a7Y3Gr1yVxG6NEsImlqFVQEtts4PSbHoRcQo7vUUzsWpIFGQaF9xybnguYnrI";
      headers.Authorization = `Bearer ${token}`;
    },
  ],*/
  
});

AUTH_HTTP.interceptors.response.use(
  (response) => response.data,
  (error) => error,
);

HTTP.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return error;
  },
);


