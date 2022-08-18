import { v2 as cloudinary } from 'cloudinary'
class FileService{
    async add(file){
        const result = await cloudinary.uploader.upload(file);
        return result.secure_url;
    }
}

export default new FileService();