import express from 'express';

const app = express();
app.use(express.json())
const port = 4000;

app.get('/', (req, res) => {
  console.log('Request arrived!')
  res.send({message: 'Hello World'});
});

app.post('/', (req, res) => {
  const {body} = req
  console.log(body)
  res.status(200)
  res.send({...req.body, message: 'Data was process!'})
})

app.listen(port, () => {
  console.log(`Test Server listennig at http://localhost:${port}`);
});
