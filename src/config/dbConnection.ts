import pg from 'pg';

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'primeiro_projeto',
    password: '1234',
    port: 5433,
});

export default pool;
