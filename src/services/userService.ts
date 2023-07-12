import User, { IUser } from '../models/userModel';

export const createUser = async (userData: IUser): Promise<IUser> => {
  return User.create(userData);
};

export const getUsers = async (): Promise<IUser[]> => {
  return User.find();
};

export const getUserById = async (userId: string): Promise<IUser | null> => {
  return User.findById(userId);
};

export const updateUser = async (userId: string, userData: IUser): Promise<IUser | null> => {
  return User.findByIdAndUpdate(userId, userData, { new: true });
};

export const deleteUser = async (userId: string): Promise<IUser | null> => {
  return User.findByIdAndDelete(userId);
};
