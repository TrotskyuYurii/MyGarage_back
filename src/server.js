import express from 'express';
import cors from 'cors';
import cookiesParser from 'cookie-parser';
import { env } from './utilites/env.js';
import { ENV_VARS } from './const/const.js';
// import { ENV_VARS, UPLOAD_DIR } from './const/const.js';

import rootRouter from './routers/rootRouter.js';
// import { errorHandlerMiddleware } from './middlewares/errorHandler.js';
// import { notFoundHandler } from './middlewares/notFoundHandler.js';



//Запуск сервера
export const setupServer=()=> {

    //Ініціалізація сервера
    const app = express();

    //Додавання middleware для обробки помилок
    app.use(cors());
    // app.use(errorHandlerMiddleware);
    // app.use(notFoundHandler);



    //Додавання middleware для парсингу JSON
    app.use(
      express.json({
        limit: '1mb',
        type: ['application/json', 'application/vnd.api+json'],
      }),
    );

    //Додавання middleware для парсингу cookies
    app.use(cookiesParser());

    //Підключення маршрутів
    app.use(rootRouter);



    //Запуск сервера
    const PORT = env(ENV_VARS.PORT, 3000);
    // const PORT = 3000;

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

}

