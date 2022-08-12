import multer from 'multer'
import  {Router} from 'express'
import routeController from "./RouteController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'static')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() +'.jpg')
    }
})

const upload = multer({ storage: storage })

const routeRouter = new Router();
routeRouter.post('/routes', upload.single('image'), routeController.create);
routeRouter.all('/routes', routeController.getAll);
routeRouter.delete('/routes/:id', routeController.delete);
routeRouter.put('/routes/:id', routeController.update);
routeRouter.get('/routes/:id', routeController.getById)


export default routeRouter;