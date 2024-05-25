import express, { Router } from "express";
import cors, { CorsOptions } from "cors";

const whiteList = new Set(["http://localhost:4000"]);
const corsOptions = {
  origin: function (origin: any, callback: any) {
    if (whiteList.has(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Access denied"));
    }
  },
};

export class Server {
  public app = express();
  private PORT: number;
  private routes: Router;

  constructor(port: number, routes: Router) {
    this.PORT = port;
    this.routes = routes;
  }

  async start() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors(corsOptions));

    this.app.use(this.routes);

    this.app.listen(this.PORT, () =>
      console.log(`Server running on PORT ${this.PORT}`)
    );
  }
}
