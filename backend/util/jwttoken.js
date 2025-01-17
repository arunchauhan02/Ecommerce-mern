//creating token and saving in cookie

const sendtoken = (req,user,statuscode,res)=>{
    const token = user.getJwtToken();

    const options = {
        expires:new Date(
            Date.now()+process.env.COOKIE_EXPIRE*24*60*60*1000
        ),
        domain:req.hostname,
        httpOnly:true,
    }

    res.status(statuscode).cookie('token',token,options).json({
        success:true,
        user,
        token
    })
}

module.exports = sendtoken