import express from 'express';

import depRoutes from './routes/departaments.routes';
import empRoutes from './routes/employees.routes';
import perRoutes from './routes/permission.routes';

class App {
    public express: express.Application

    public constructor() {
        this.express = express();

        this.middlewares();
        this.routes();
    }

    private middlewares():void {
        this.express.use(express.json());
    }

    private routes():void {
        this.express.use(depRoutes);
        this.express.use(empRoutes);
        this.express.use(perRoutes);
    }
}

export default new App().express;
