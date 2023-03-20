import axios from "axios";

export const domainUrl = axios.create({baseURL: "http://localhost:3000"})