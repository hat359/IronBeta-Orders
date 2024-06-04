
// import type { NextFunction, Request, Response } from 'express';
// import httpStatus from 'http-status';
// import { randomUUID } from 'crypto';
// import * as argon2 from 'argon2';
// import type {
//     TypedRequest,
//     UserLoginCredentials,
//     UserSignUpCredentials
//   } from '../types/types';
// import User from '../models/User';

// import RefreshToken from '../models/RefreshToken';
// import { config } from '../config/config';
// // import { createAccessToken, createRefreshToken } from '../utils/generateToken.util';
// /**
//  * This function handles the signup process for new users. It expects a request object with the following properties:
//  *
//  * @param {TypedRequest<UserSignUpCredentials>} req - The request object that includes user's username, email, and password.
//  * @param {Response} res - The response object that will be used to send the HTTP response.
//  *
//  * @returns {Response} Returns an HTTP response that includes one of the following:
//  *   - A 400 BAD REQUEST status code and an error message if the request body is missing any required parameters.
//  *   - A 409 CONFLICT status code if the user email already exists in the database.
//  *   - A 201 CREATED status code and a success message if the new user is successfully created and a verification email is sent.
//  *   - A 500 INTERNAL SERVER ERROR status code if there is an error in the server.
//  */


// export const handleSignUp = async (req: Request, res: Response): Promise<Response> => {
//   const { username, email, password } = req.body;

//   if (!username || !email || !password) {
//     return res.status(httpStatus.BAD_REQUEST).json({
//       message: 'Username, email, and password are required!',
//     });
//   }

//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(httpStatus.CONFLICT).json({
//         message: 'Email already exists!',
//       });
//     }

//     const hashedPassword = await argon2.hash(password);
//     const newUser = new User({
//       username,
//       email,
//       password: hashedPassword,
//     });

//     await newUser.save();

//     // Generate JWT access token
//     const accessToken = jwt.sign(
//       { userId: newUser._id, email: newUser.email },
//       config.access_token.secret,
//       { expiresIn: config.access_token.expire },
//     );

//     // Generate JWT refresh token
//     const refreshToken = jwt.sign(
//       { userId: newUser._id },
//       config.refresh_token.secret,
//       { expiresIn: config.refresh_token.expire },
//     );

//     // Save the refresh token in the database
//     // const newRefreshToken = new RefreshToken({
//     //   token: refreshToken,
//     //   user: newUser._id,
//     //   expiresAt: new Date(Date.now() + parseInt(config.refresh_token.expire) * 1000), // Expiration in milliseconds
//     // });

//     // await newRefreshToken.save();

//     // Return the access token and the refresh token
//     return res.status(httpStatus.CREATED).json({
//       message: 'User successfully registered.',
//       accessToken,
//       refreshToken,
//       data: { username, email }, // Don't return sensitive information like the password
//     });
//   } catch (err) {
//     console.error('Error during signup:', err);
//     return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
//       message: 'Error during user registration',
//     });
//   }
// };

