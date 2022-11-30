
const 
create: async (req, res, next) => {
    try {
        const auth = await userService.addUser(req.body);

        req.user = auth;
        return res.status(201).json(auth);
    } catch (err) {
        next(err);
    }
};