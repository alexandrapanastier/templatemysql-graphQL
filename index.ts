import { ApolloServer } from 'apollo-server';
import  typeDefs  from './schema';
import { connectToDatabase } from './database';
import resolvers from './resolvers';
async function startServer() {
  try {
    // Connexion à la base de données
    await connectToDatabase();

    // Création de l'instance Apollo Server
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });

    // Démarrage du serveur
    const { url } = await server.listen();
    console.log(`Serveur prêt à l'écoute sur l'URL ${url}`);
  } catch (error) {
    console.error('Erreur lors du démarrage du serveur :', error);
  }
}

startServer();
