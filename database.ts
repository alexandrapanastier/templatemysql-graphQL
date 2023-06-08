import mysql from 'mysql2';

// Configuration de la connexion MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'your_username',
  password: process.env.DB_PASSWORD || 'your_password',
  database: process.env.DB_DATABASE || 'your_database',
});

// Fonction pour exécuter des requêtes MySQL
export function executeQuery(query: string): Promise<any> {
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

export async function connectToDatabase(): Promise<void> {
  return new Promise((resolve, reject) => {
    // Connexion à la base de données
    connection.connect(error => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}
