module.exports = {
  type: 'postgres',
  port: 5432,
  host: process.env.POSTGRES_HOST || 'localhost',
  username: process.env.POSTGRES_USERNAME || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  database: process.env.POSTGRES_DATABASE || 'umin',
  synchronize: true,
  logging: true,
  entities: ['src/**/*entity.js', 'dist/**/*entity.js'],
};
