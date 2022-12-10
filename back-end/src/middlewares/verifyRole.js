const usersService = require("../services/usersService");

const verifyRole = async (req, res, next) => {
    const { id } = req.user;
    const user = await usersService.getById(id);

    if (user.role !== 'administrator') {
        return res.status(401).json({ message: 'Anauthorized' })
    } 

    next();
    
    // try {
    //     const user = await usersService.getById(id);
    //     console.log(user.role);
    //     next();
    // } catch (error) {
    //     next(error)
    // }



    // next();
}

module.exports = verifyRole;