import { Api } from "./myApi";

export const service = new Api({
  baseUrl: "https://iit.aminaabdelkafi93.workers.dev",
  baseApiParams: {
    headers: {
      authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5NDNkMThlYS1hMzBlLTQ1NzctYjkxYi04YjkxMmRiNTBiMTQiLCJleHAiOjE3MDUyNjQ4ODksImlhdCI6MTcwMzk2ODg4OSwidHlwZSI6ImFjY2VzcyIsInJvbGVzIjpbInVzZXIiXX0.BbVg3JeYeVjkv-zjPp1yNzToUvacx1QTVlXVnVsJ_UY",
    },
  },
});
