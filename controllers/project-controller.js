const db = require('../models/index');
const projectDal = require("../dal/project-memory-accessor");
const codeTableDal = require("../dal/code-tabel-memory-accessor");
const cityDal = require("../dal/city-memory-accessor");
const statusDal = require("../dal/status-memory-accessor");
const pictureDal = require("../dal/picture-memory-accessor");

//=require("../dal/status-memory-accessor");

class ProjectController {


    getProjectById=async(req, res, next)=>{
        try {
            const projectId = parseInt(req.params.projectId)
            console.log({projectId});
            var project = await projectDal.getProjectById(projectId);
            if (!project) {
                return res.status(204).json({ message: 'project didn"t found' })
            }

            res.send(project)
        }


        catch (error) {
            next(error)
        }

    }

    // http://localhost:3600/project/1
    getProjectsByInitiatorId = async (req, res, next) => {
        try {
            const id = req.query.initiatorId
            var projects = await projectDal.getProjectsByInitiatorId(id);
            if (!projects?.length) {
                return res.status(204).json({ message: 'No projects (of initiator) found' })
            }
            projects.sort((a, b) => (a.city - b.city || a.address.localeCompare(b.address)));
            res.send(projects)
        }


        catch (error) {
            next(error)
        }

    }

    //http://localhost:3600/project

    addProject = async (req, res) => {

        var { address, city, status, initiatorId, apartmentBefore, apartmentAfter,
            requestYear, permitYear, populatingYear, description, tama38, pinuyBinuy, picturesArr } = req.body;
            console.log(req.body , "req.body");
        // if(!status)
        //     status=1;
        //    if(!initiatorId ){  שינו י שלא בדקנו

        if (!initiatorId || !tama38 && !pinuyBinuy) {
            return res.status(400).json({ message: "required fields" });
        }
        if (city) {
            //cityName = await codeTableDal.getCodeByName(db.city,city); //cityCode
            var cityName = await cityDal.getCodeByName(city);
            if (!cityName)
                return res.status(400).json({ message: 'Invalid project data received' });
            city = cityName.toJSON().idCity;
        }
        //status =await codeTableDal.getCodeByName('Status',db.status);//statusCode
        if (status) {
            status = await statusDal.getCodeByName(status);
            if (!status) {
                return res.status(400).json({ message: 'Invalid project data received ' });
            }
            status = status.toJSON().statusId;
            //console.log(status,city);
        }
        const projectData = {
            address, city, status, initiatorId, apartmentBefore, apartmentAfter,
            requestYear, permitYear, populatingYear, description, tama38, pinuyBinuy, picturesArr
        }

        const project = await projectDal.addProject(projectData);
        if (project) { // Created
            console.log('Created')
            const projectId = project.toJSON().idProject;
            console.log({projectId});
            const picturesArrWithProjectId=picturesArr.map((pic)=>{return{'projectId':projectId,'picturePath':pic}});
            const pictures = await pictureDal.addProjectPictures(picturesArrWithProjectId);
            if (!pictures)
                return res.status(400).json({ message: 'Invalid pictures data received' });

            return res.status(201).json({ message: 'New project created', data: project })
        }
        else
            return res.status(400).json({ message: 'Invalid project data received' });

    }


    //  לחשוב אך הפינוי בינוי והתמא יעבוד בעדכון  
    //http://localhost:3600/project/1
    updateProject = async (req, res) => {

        var { address, city, status, initiatorId, apartmentBefore, apartmentAfter,
            requestYear, permitYear, populatingYear, description } = req.body;
        /*להוסיף
        
        console.log("USER", req.user)//token
        if(initiatorId!=req.user)
*/
        //var projectData =req.body; 
        //צריך לשלוף את  קוד העיר והסטטוס מהטבלאות שלהם

        if (!initiatorId) {
            return res.status(400).json({ message: "required fields" });
        }

        if (city) {
            //cityName = await codeTableDal.getCodeByName('city',city); //cityCode
            const cityName = await cityDal.getCodeByName(city);
            console.log({cityName})
            if (!cityName)
                return res.status(400).json({ message: 'Invalid project data received' });
            city = cityName.toJSON().idCity;
        }
        console.log({city})

        if (status) {
            //status =await codeTableDal.getCodeByName('status',status);//statusCode
            status = await statusDal.getCodeByName(status);

            if (!status) {
                return res.status(400).json({ message: 'Invalid project data received' });
            }
            status = status.toJSON().statusId;
        }
        console.log({status})




        const projectData = {
            address, city, status, initiatorId, apartmentBefore, apartmentAfter,
            requestYear, permitYear, populatingYear, description
        }
        //projectData.city=city;
        //projectData.status=status;
        console.log({projectData});
        const id = req.params.projectId;
        const project = await projectDal.updateProject(id, projectData);
        if (project) { // Updated
            return res.status(201).json({ message: `project ${id} updated`, data: project })
        }
        else
            return res.status(400).json({ message: 'Invalid project data received' });

        //res.send(project)

    }
}

const projectController = new ProjectController();
module.exports = projectController;