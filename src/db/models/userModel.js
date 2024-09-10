import { Schema, model } from 'mongoose';

export const userSchema = new Schema(
  {
    name: { type: String, default: 'Guest' },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true, versionKey: false },
);

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
//   delete obj.password;
  return obj;
};

export const UsersCollection = model('users', userSchema);
