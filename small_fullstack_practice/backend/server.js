import express from "express";
import cors from "cors";

const app = express();

// app.use(cors({
//     origin: "*"
// }));

const port = process.env.PORT || 4000




// app.get("/", (req, res) => {
//     res.send("server is ready");
// })

// get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            "id": 1,
            "title": "The Programmer",
            "content": "Why do programmers prefer dark mode? Because light attracts bugs."
        },
        {
            "id": 2,
            "title": "The Bug",
            "content": "I told my computer I needed a break, and now it won't stop sending me KitKat ads."
        },
        {
            "id": 3,
            "title": "The Developer",
            "content": "A developer walked into a bar. He ordered 1 drink, 0 drinks, -1 drinks, 999999 drinks, and a lizard."
        },
        {
            "id": 4,
            "title": "The Database",
            "content": "Why did the database administrator leave his wife? She had too many relationships."
        },
        {
            "id": 5,
            "title": "The Git Command",
            "content": "I accidentally deleted my entire project. Good thing I had Git. Bad thing I forgot to commit."
        }
    ]

    res.send(jokes);
})

app.listen(port, () =>{
    console.log(`server is running at http://localhost:${port}`);
})