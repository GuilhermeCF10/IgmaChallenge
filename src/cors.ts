import cors from "cors";

const allowedOrigins = ["*"];

export const corsOptions: cors.CorsOptions = {
  origin: allowedOrigins,
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token",
    "Authorization",
  ],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};
