const jwt = require('jsonwebtoken');

const sendCookie = (user = {}, statusCode, res) => {

  

   const usersData =  {
        name: user?.name,
        email: user?.email,
        username: user?.username,   
        _id: user?._id,
    }
    
    // console.log('user', usersData)

    const token = jwt.sign(usersData, process.env.JWT_SECRET||'U3YU23wef32BFE48t48br4tGERbvrtbrtb45n4ty848t4nerS')

    

    // console.log('user', token)

    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE||5 * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    } 


    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        user,
    });
}

module.exports = sendCookie;