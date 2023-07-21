import { model, models, Schema } from 'mongoose';

const UserSchema = new Schema(
	{
		rol: { type: String, enum: ['customer', 'stylist', 'admin'] },
		name: { type: String, required: true },
		username: { type: String, required: true, unique: true, maxLength: 12 },
		pass: { type: String, minLength: 8, required: true },
		email: { type: String, trim: true },
		dob: { type: Date },
		citas: { type: [Schema.Types.ObjectId], ref: 'Cita' },
	},
	{ timestamps: { createdAt: 'registered_since' } }
);

const User = models.User || model('User', UserSchema);

export default User;
