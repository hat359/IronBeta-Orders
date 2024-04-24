import mongoose, { Schema, Document } from 'mongoose';

export interface ISubscription extends Document {
  type: string;
  duration: number;
  price: number;
}

const SubscriptionSchema: Schema = new Schema({
  type: { type: String, required: true, unique: true },
  duration: { type: Number, required: true },
  price: { type: Number, required: true },
});

export default mongoose.model<ISubscription>('Subscription', SubscriptionSchema);
