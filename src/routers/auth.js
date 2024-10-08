import { Router } from "express"
// import {registerUserController, loginUserController, logoutController, refreshTokenController, sendResetEmailController, resetPasswordController} from '../controllers/auth.js';
import {registerUserController } from '../controllers/auth.js';
import {ctrlWrapper} from '../middlewares/ctrlWrapper.js';
import {validateBody} from '../middlewares/validateBody.js';
import {registerUserSchema} from '../validation/registerUserSchema.js';
// import {loginUserSchema} from '../validation/loginUserSchema.js';
// import { sendResetPasswordSchema } from "../validation/sendResetPasswordSchema.js";
// import { resetPasswordSchema } from "../validation/resetPasswordSchema.js";


const authRouter = Router();

//обробка запитів
authRouter.get('/ping', (req, res) => res.send('pong'));
authRouter.post('/register', ctrlWrapper(registerUserController));
// authRouter.post('/register', validateBody(registerUserSchema),ctrlWrapper(registerUserController));

// authRouter.post('/login',validateBody(loginUserSchema),ctrlWrapper(loginUserController));
// authRouter.post('/logout', ctrlWrapper(logoutController));
// authRouter.post('/refresh', ctrlWrapper(refreshTokenController));
// authRouter.post('/send-reset-email', validateBody(sendResetPasswordSchema),ctrlWrapper(sendResetEmailController));
// authRouter.post('/reset-pwd', validateBody(resetPasswordSchema),ctrlWrapper(resetPasswordController));




export default authRouter;
