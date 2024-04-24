// user.ts
import mongoose, { Document, Model } from 'mongoose';
import { UserSignUpCredentials } from '../types/types';

export interface IUser extends UserSignUpCredentials, Document {}

const userSchema = new mongoose.Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});




export default mongoose.model<IUser>('User', userSchema);
