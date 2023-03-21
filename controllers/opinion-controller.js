
const opinionDal = require("../dal/opinion-memory-accessor");



class OpinionController {

    getAllOpinions = async (req, res) => {
   
            const opinion = await opinionDal.getAllOpinions();
            res.send(opinion)
     
    }


    // http://localhost:3600/opinion
    addOpinion = async (req, res) => {
            const { stars, opinion, opinionInitiator, opinionUser } = req.body;
            if (!opinionInitiator || !opinionUser) {
                return res.status(400).json({ message: "required fields" });
            }

            const oldOpinion = await opinionDal.getOpinionByInitiatorIdAndUserId(opinionInitiator, opinionUser);
            if (oldOpinion) {
                return res.status(400).json({ message: "you cant give an opinion twice" });
            }

            const opinionData = { stars, opinion, opinionInitiator, opinionUser };
            const newOpinion = await opinionDal.addOpinion(opinionData);
            if (newOpinion)// Created
                return res.status(201).json({ message: 'New opinion created', data: newOpinion })
            else
                return res.status(400).json({ message: 'Invalid opinion data received' });
  
    }


    getOpinionByInitiatorId = async (req, res) => {
       
            const initiatorId = req.params.initiatorId;
            const opinion = await opinionDal.getOpinionByInitiatorId(initiatorId);
            res.send(opinion)
      
    }

    /*getAverageOpinionsStarsOfAllInitiators=async(req,res)=>{
        var stars=await opinionDal.getAverageOpinionsStarsOfAllInitiators()
        res.send(stars);
    }    */



}
const opinionController = new OpinionController();
module.exports = opinionController;



