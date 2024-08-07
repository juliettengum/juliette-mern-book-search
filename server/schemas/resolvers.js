const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        try {
          return await User.findOne({ _id: context.user._id }).populate('savedBooks');
        } catch (err) {
          console.error('Error fetching user data:', err);
          throw new Error('Failed to fetch user data');
        }
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      try {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user };
      } catch (err) {
        console.error('Error in addUser mutation:', err);
        throw new Error('Failed to create user');
      }
    },

    login: async (parent, { email, password }) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
        const correctPw = await user.isCorrectPassword(password);
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
        const token = signToken(user);
        return { token, user };
      } catch (err) {
        console.error('Error in login mutation:', err);
        throw new Error('Failed to login');
      }
    },

    saveBook: async (parent, { book }, context) => {
      if (context.user) {
        try {
          const updatedUser = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { savedBooks: book } },
            { new: true }
          ).populate('savedBooks');
          return updatedUser;
        } catch (err) {
          console.error('Error in saveBook mutation:', err);
          throw new Error('Failed to save book');
        }
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        try {
          const updatedUser = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { savedBooks: { bookId } } },
            { new: true }
          ).populate('savedBooks');
          return updatedUser;
        } catch (err) {
          console.error('Error in removeBook mutation:', err);
          throw new Error('Failed to remove book');
        }
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
