import Route from "./Route.js";
import  {Router} from 'express'
import routeController from "./RouteController.js";

const routeRouter = new Router();
routeRouter.post('/routes', routeController.create);
routeRouter.all('/routes', routeController.getAll);
routeRouter.delete('/routes/:id', routeController.delete);
routeRouter.put('/routes/:id', routeController.update);
routeRouter.get('/routes/:id', routeController.getById)


export default routeRouter;