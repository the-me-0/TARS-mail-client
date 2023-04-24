import mongoose from 'mongoose';
import { User } from './model/User.schema';

export async function initMongoose(): Promise<string> {
	try {
		await mongoose.connect('mongodb://mongo/tars_mail_db');

		mongoose.model('User', User);

		return 'Mongoose ready for action.';
	} catch (error) {
		console.error('Error initializing Mongoose:', error);
		throw error;
	}
}
