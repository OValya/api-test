import Route from "./Route.js";

class RouteService {
    async create (routeData, picture) {
        const route = await Route.create(routeData)
        return route
    };

    async getAll(){
        const allRoutes = await Route.find({});
        return allRoutes;
    }
    async delete (id) {
        if(!id) throw new Error('id is incorrect!!')
        const deletedPost = await Route.findByIdAndDelete(id);
        return deletedPost;
    };

    async update (route){
       // console.log(route)
        if(!route._id) throw new Error('id is incorrect!');
        const up =  await Route.findByIdAndUpdate(route._id, route, {new:true});
        return up;
    }
    async getById (id) {
        if(!id) throw new Error('id is incorrect!!');
        const routeById = await Route.findById(id);
        return routeById;
    }
}

export default new RouteService();