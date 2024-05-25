import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";

(() => {
  main();
})();

function main() {
  const server = new Server(3000, AppRoutes.routes);
  server.start();
}
