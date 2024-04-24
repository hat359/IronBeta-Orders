import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './User';
import { ISubscription } from './Subscription';

export interface IOrder extends Document {
  orderNumber: string;
  customerName: string;
  totalAmount: number;
  orderDate: Date;
  user: IUser['_id'];
  subscription: ISubscription['_id'];
}

const OrderSchema: Schema = new Schema({
  orderNumber: { type: String, required: true },
  customerName: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  orderDate: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Foreign key to User model
  subscription: { type: Schema.Types.ObjectId, ref: 'Subscription', required: true }, // Foreign key to Subscription model
});

export default mongoose.model<IOrder>('Order', OrderSchema);
