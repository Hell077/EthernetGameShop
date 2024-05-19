import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connectDB, getDB } from './mongoDb.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/login', async (req, res) => {
  const { login, password } = req.body;

  if (!login || !password) {
    return res.status(400).send({ error: 'Логин и пароль должны быть заполнены' });
  }

  try {
    const db = getDB();
    const user = await db.collection('users').findOne({ login, password });

    if (user) {
      res.status(200).send({ message: 'Успешная авторизация', user });
    } else {
      res.status(401).send({ error: 'Неверные логин или пароль' });
    }
  } catch (error) {
    console.error('Ошибка при обработке запроса:', error);
    res.status(500).send({ error: 'Внутренняя ошибка сервера' });
  }
});

app.post('/register', async (req, res) => {
  const { login, password } = req.body;

  if (!login || !password) {
    return res.status(400).send({ error: 'Логин и пароль должны быть заполнены' });
  }

  try {
    const db = getDB();
    const existingUser = await db.collection('users').findOne({ login });

    if (existingUser) {
      return res.status(409).send({ error: 'Логин уже используется' });
    }

    const newUser = { login, password };
    await db.collection('users').insertOne(newUser);
    res.status(201).send({ message: 'Пользователь успешно зарегистрирован' });
  } catch (error) {
    console.error('Ошибка при обработке запроса:', error);
    res.status(500).send({ error: 'Внутренняя ошибка сервера' });
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту localhost:${port}`);
  connectDB().catch(console.error); // Подключаемся к базе данных при запуске сервера
});
