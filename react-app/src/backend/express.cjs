const express = require('express');
const app = express();

app.get('/teachers', (req, res)=>{
    res.sendStatus(200)
})

const port = 3333;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});