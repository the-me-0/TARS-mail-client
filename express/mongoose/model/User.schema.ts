import mongoose from 'mongoose';

export const User = new mongoose.Schema({
	username: String,
	password: String
});
