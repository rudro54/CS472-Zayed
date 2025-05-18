const express = require('express');
const router = express.Router();

function extractNumbers(req) {
    let a, b;
    if (req.params.a && req.params.b) {
        a = Number(req.params.a);
        b = Number(req.params.b);
    } else if (req.query.a && req.query.b) {
        a = Number(req.query.a);
        b = Number(req.query.b);
    } else if (req.body.a && req.body.b) {
        a = Number(req.body.a);
        b = Number(req.body.b);
    }
    return { a, b };
}

const operations = {
    addition: (a, b) => a + b,
    subtraction: (a, b) => a - b,
    multiplication: (a, b) => a * b,
    division: (a, b) => b !== 0 ? a / b : 'Cannot divide by zero',
    modulus: (a, b) => b !== 0 ? a % b : 'Cannot mod by zero'
};

Object.keys(operations).forEach((op) => {
    router.get(`/${op}/:a/:b`, (req, res) => {
        const { a, b } = extractNumbers(req);
        res.json({ result: operations[op](a, b) });
    });

    router.get(`/${op}`, (req, res) => {
        const { a, b } = extractNumbers(req);
        res.json({ result: operations[op](a, b) });
    });

    router.post(`/${op}`, (req, res) => {
        const { a, b } = extractNumbers(req);
        res.json({ result: operations[op](a, b) });
    });
});

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {res.send("Calculator")})
app.use('/calculator', router);

app.listen(PORT, () => {
    console.log(`Calculator API running at http://localhost:${PORT}`);
});
