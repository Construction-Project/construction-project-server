
const initiatorDal = require("../dal/initiator-memory-accessor");
class InitiatorController{

    //http://localhost:3600/initiator
    getAllInitiators=async(req,res)=>{
        var initiators = await initiatorDal.getAllInitiators();
        if(!initiators?.length){
            return res.status(400).json({ message: 'No initiators found' })
          }
        initiators.sort((a,b)=>(a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

        res.send(initiators)
      // return res.status(200).json({data:initiators});
    };

    //http://localhost:3600/initiator/1
    getInitiatorById=async(req,res)=>{
       const id=req.params.id
        const initiator = await initiatorDal.getInitiatorById(id); 
        if(!initiator)
            return res.status(400).json({ message: 'initiator is not found' })
        res.send(initiator);
    };

    search=async(req,res)=>{
        const{pinuiBinuy,tama38}=req.query;
        const initiator = await initiatorDal.search(pinuiBinuy,tama38);
        res.send(initiator);
    }

    //http://localhost:3600/initiator
    addInitiator=async(req,res)=>{
        const {id,hp,phone,address,tama38,pinuyBinuy,description,logo,name,company_name}=req.body;
        if(!id || !hp || !tama38 || !pinuyBinuy || !name){
            return res.status(400).json({message:"required fields"});
        }
        const initiatorData={id,hp,phone,address,tama38,pinuyBinuy,description,logo,name,company_name};
        const initiator=await initiatorDal.addInitiator(initiatorData); 
        if(initiator){ // Created
            console.log('Created')
            return res.status(201).json({ message: 'New initiator created' ,data:initiator})}
        else
            return res.status(400).json({ message: 'Invalid initiator data received' });
        //res.send(initiator)

    };
    //http://localhost:3600/initiator/4
    deleteInitiator=async(req,res)=>{
        const id=req.params.id;
        await initiatorDal.deleteInitiator(id);
        res.json(`Initiator with ID ${id} deleted`);
    }



    //http://localhost:3600/initiator/5
    updateInitiator=async(req,res)=>{    
        console.log('here')        
        const {hp,phone,address,tama38,pinuyBinuy,description,logo,name,company_name}=req.body;
        const id=req.params.id;
        if(!id || !hp || !tama38 || !pinuyBinuy || !name){
            return res.status(400).json({message:"required fields"});
        }
        const initiatorData={hp,phone,address,tama38,pinuyBinuy,description,logo,name,company_name};
        const initiator=await initiatorDal.updateInitiator(id,initiatorData);
        if(initiator){ // Updated
            return res.status(201).json({ message: `initiator ${id} updated` ,data:initiator})}
        else
            return res.status(400).json({ message: 'Invalid initiator data received' });
    };


}
const initiatorController = new InitiatorController();
module.exports = initiatorController;
