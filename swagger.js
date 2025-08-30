import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import moment from "moment-timezone";

const START_TIME = moment.tz("Asia/Kolkata").format("DD-MMM-YYYY hh:mm:ss a");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "E-Commerce API",
    version: "1.0.0",
    description: `<h4>Last build: <b>${START_TIME}</b></h4>`,
  },
  servers: [
    {
      url: `http://localhost:3000`,
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./index.js", "./routes/routes.js",],
};

const swaggerSpec = swaggerJsDoc(options);

export default app => {
  // URL to access Swagger UI: http://{BASE_URL}/api-docs/
  app.use(
    "/api-docs",
    swaggerUI.serve,
    swaggerUI.setup(swaggerSpec, false, {
      docExpansion: "none",
      tryItOutEnabled: true,
    })
  );
};
