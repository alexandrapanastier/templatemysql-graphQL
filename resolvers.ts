import { executeQuery } from './database';

const resolvers = {
  Query: {
    users: async () => {
      try {
        const query = 'SELECT id, name, email FROM users';
        const results = await executeQuery(query);
        return results;
      } catch (error) {
        throw new Error('Erreur lors de la récupération des utilisateurs');
      }
    },
  },
};

export default resolvers;
