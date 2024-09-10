import { UsersCollection } from '../db/models/userModel.js';
import createHttpError from 'http-errors';



export async function registerUser(payload) {
    const user = await UsersCollection.findOne({ email: payload.email });

    if (user)
      throw createHttpError(409, req);

    // const hashedPassword = await bcrypt.hash(payload.password, 10);

    const createdUser = await UsersCollection.create({payload});

    // const createdUser = await UsersCollection.create({
    //   ...payload,
    //   password: hashedPassword,
    // });

    // await SessionsCollection.deleteOne({ userId: createdUser._id });

    // const session = await SessionsCollection.create({
    //   userId: createdUser._id,
    //   ...generateTokens(),
    // });

    return {
      createdUser,
    //   session,
    };
  }
