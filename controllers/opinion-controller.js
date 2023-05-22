
const opinionDal = require("../dal/opinion-memory-accessor");



class OpinionController {

    getAllOpinions = async (req, res ,next) => {
            try{
            const opinion = await opinionDal.getAllOpinions();
            res.send(opinion)
        }
            catch(error) {next(error)}

     
    }


    // http://localhost:3600/opinion
    addOpinion = async (req, res ,next) => {
        try{
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
  catch(error) {next(error)}

    }


    getOpinionByInitiatorId = async (req, res ,next) => {
        try{
            const initiatorId = req.params.initiatorId;
            const opinion = await opinionDal.getOpinionByInitiatorId(initiatorId);
            res.send(opinion)
      }
      catch(error) {next(error)}
    }
}
const opinionController = new OpinionController();
module.exports = opinionController;



