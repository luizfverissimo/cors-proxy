import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json())
app.options('*', cors());

app.all('/:serverUrl', async (req, res) => {
  const { method, params, body } = req;

  console.log(params.serverUrl);
  console.log(method);
  console.log(body);

  try {
    const axiosRes = await axios({
      method,
      url: params.serverUrl,
      data: body
    });
  
    console.log(axiosRes.data)
    res.send(axiosRes.data)
  } catch(err) {
    res.status(400)
    res.send(err)
  }

});

app.listen(port, () => {
  console.log(`Test Server listening at http://localhost:${port}`);
});
