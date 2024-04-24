import mongoose, { Schema, Document, Model } from 'mongoose';
import { IUser } from './User'; // Import IUserModel if it's exported

interface IRefreshTokenModel extends Document {
  user: IUser['_id']; // Reference to the User model's _id field
  token: string;
  expiresAt: Date;
}

const refreshTokenSchema = new Schema<IRefreshTokenModel>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  token: { type: String, required: true },
  expiresAt: { type: Date, required: true }
});

const RefreshToken: Model<IRefreshTokenModel> = mongoose.model('RefreshToken', refreshTokenSchema);

export default RefreshToken;