import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const BASE_PATH = 'http://localhost:8000/api/';

export default function createBaseQuery() {
  return fetchBaseQuery({ baseUrl: BASE_PATH });
}