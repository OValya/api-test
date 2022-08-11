import Route from "./Route.js";
import  {Router} from 'express'

const routeRouter = new Router();
routeRouter.post('/routes', async (req, res) => {
    try {
        const {title, description, level, length, image} = req.body
        const route = await Route.create({title, description, level, length, image})
        res.json(route);
    }catch (e) {
        res.status(500).json(e)
    }
});
routeRouter.all('/routes', async (req, res) =>{
    try {
        const allRoutes = await Route.find({});
        res.json(allRoutes);
    }catch (e) {
        res.status(500).json(e)
    }
})
routeRouter.delete('/routes/:id', async (req, res) => {
    const {id} = req.params;
    const deletedPost = await Route.findByIdAndDelete(id);
    res.json(deletedPost);
})
routeRouter.put('/routes/:id', async (req, res)=>{
    const route = req.body;
    const updatedRoute = await Route.findByIdAndUpdate(route._id, route, {new:true});
    res.json(updatedRoute);
})
routeRouter.get('/routes/:id', async (req, res) => {
    try {

        const {id} = req.params;
        const routeById = await Route.findById(id);
        res.json(routeById);
    }catch(e){
        res.status(500).json(e)
    }
})


export default routeRouter;