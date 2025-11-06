import pg from "pg";

export const pool = new pg.Pool({
    port: 5432,
    host: "localhost",
    user: "postgres",
    password: "Qwerty201456",
    database: "PERN",
});

pool.on("connect", () => {
    console.log("Conectado a la base de datos");
});
