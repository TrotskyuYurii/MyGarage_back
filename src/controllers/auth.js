import { registerUser} from "../services/user.js";
// import { createUser, loginUser, logoutUser, refreshSession, resetPassword, sendResetPassword } from "../services/auth.js";


//Реєстрація авторизація
export const registerUserController = async (req, res) => {

    const user = await registerUser(req.body);
    // const { password, ...userWithoutPassword } = user.toObject();

    res.json({
      status: 201,
      message: 'Successfully registered a user!',
      data: { user: "New User" },
    });
  };
