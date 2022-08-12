import Route from "./Route.js";
import RouteService from "./RouteService.js";
import FileService from "./FileService.js";



class RouteController {
   async create (req, res) {
       try {
            console.log('req', req.file);
           //const pictureName = FileService.add(req.file);
           const route = await RouteService.create({...req.body, image:req.file.filename} )
           res.json(route);
       }catch (e) {
           res.status(500).json(e)
       }
   };

 async getAll(req, res){
    try {
        const routes = await RouteService.getAll()
        res.json(routes);
    }catch (e) {
        res.status(500).json(e)
    }
 }
async delete (req, res) {
     try {
         const deletedRoute = await RouteService.delete(req.params.id)
         res.json(deletedRoute);
     }catch (e){
         res.status(500).json(e.message)
     }

};

 async update (req, res){
     try {
         const updatedRoute = await RouteService.update(req.body);
         return res.json(updatedRoute);
     }catch (e) {
         res.status(500).json(e.message)
     }

}
async getById (req, res) {
    try {
        const route = await RouteService.getById(req.params.id);
        res.json(route);
    }catch(e){
        res.status(500).json(e.message)
    }
}

}

export default new RouteController();