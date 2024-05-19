import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

let db;

async function connectDB() {
  try {
    await client.connect(); // Подключение к базе данных
    console.log('Успешно подключено к базе данных');
    db = client.db('login'); // НАЗВАНИЕ БАЗЫ
  } catch (error) {
    console.error('Ошибка при подключении к базе данных:', error);
  }
}

function getDB() {
  return db;
}

export { connectDB, getDB };



