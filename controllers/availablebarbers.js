const getAvailableBarbers= async (req, res)=>{
    res.status(200).json({msg:'Got Available barbers'});
};

const getAvailableBarbersTesting= async (req, res)=>{
    res.status(200).json({msg:'Got Available barbers for Testing'});
};

module.exports={getAvailableBarbers, getAvailableBarbersTesting};