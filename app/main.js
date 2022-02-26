import { ClockController } from "./Controllers/ClockController.js";
import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { UserController } from "./Controllers/UserController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  clockController = new ClockController()
  imagesController = new ImagesController()
  quotesController = new QuotesController()
  todosController = new TodosController()
  weatherController = new WeatherController()
  userController = new UserController()
}

window["app"] = new App();
