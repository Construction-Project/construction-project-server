const CodeTablesDal = require("../dal/code-tabel-memory-accessor");


class CodeTableController{
    getAllTableValues=async(req,res)=>{
        const tableName=req.query.table;
        const values=await CodeTablesDal.getAllTableValues(tableName); 
        if(!values?.length){
            return res.status(400).json({ message: 'No ${tableName} values found' })
          }
        res.send(values)
    };

    getCodeByName=async(req,res)=>{
        const tableName=req.query.table;
        const code=await CodeTablesDal.getCodeByName(tableName,tableName); 
        res.send(code); 
    }; 

    getNameByCode=async(req,res)=>{
        const tableName=req.query.table;
        const code=await CodeTablesDal.getNameByCode(tableName,id); 
        res.send(code); 
    }
              
}


const codeTableController = new CodeTableController();
module.exports = codeTableController;


