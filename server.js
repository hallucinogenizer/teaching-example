const app = require("express")();
const {Client} = require("pg")

const PORT = 3050;

app.get("/", async (req, res) => {
    const client = new Client({
        host: "localhost",
        port: "5432",
        user: "postgres",
        password: "mysecretpassword",
        database: "teaching2"
    });
    await client.connect();

    const data = await client.query("SELECT * FROM Students;");

    res.json(data.rows);
});

app.get("/courses", async (req, res) => {
    const client = new Client({
        host: "localhost",
        port: "5432",
        user: "postgres",
        password: "mysecretpassword",
        database: "teaching2"
    });
    await client.connect();

    const data = await client.query("SELECT * FROM Courses;");

    res.json(data.rows);
})

app.get("/enrollments3", async (req, res) => {
    const client = new Client({
        host: "localhost",
        port: "5432",
        user: "postgres",
        password: "mysecretpassword",
        database: "teaching2"
    });
    await client.connect();

    const data = await client.query("SELECT * FROM Enrollments;");

    res.json(data.rows);

    console.log("Hi")
})

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})