const { StatusCodes } = require("http-status-codes");
const { sendError } = require("../utils/response");


module.exports = (userService) => {

    const registerUserController = (req, res) => {
        try{
            const existingUser = userSerive.findbyEmail(req.body.email);
            if(existingUser){
                return sendError(
                    res,
                    'User already exists',
                    StatusCodes.CONFLICT
                )
            }

            const userCreated = userService.createdUser(req.body);
            return sendSuccess(
                res,
                userCreated,
                StatusCodes.CREATED
            );

        }catch (error) {
            console.error(error);
            return sendError(
                res,
                'An error occurred while registering the user',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    };

    const LoginUserController = async (req, res) => {
        try{
            const {email,password} = req.body;

            const user = await userService.findbyEmail(email);
            if(!user)sendError(res, 'User not found', StatusCodes.NOT_FOUND);

            const isValide = await bcrypt.compare(password, user.password);
            if(isValide)sendError(res, 'Invalid password', StatusCodes.UNAUTHORIZED);

            const token = jwt.sign({ id: user.id, email: user.email}, process.env.JWT_SECRET, { expiresIn: process.env.EXPIRE_TIME });
            return sendSuccess(
                res,
                {token,
                    user:{ id: user.id, email: user.email, name: user.name } },
                StatusCodes.OK);

            
        }catch(error){
            console.error(error);
            return sendError(
                res,
                'An error occurred while logging in',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }


    return {
        registerUserController,
        LoginUserController
    }
}