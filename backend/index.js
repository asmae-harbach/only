const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');
const PORT = process.env.PORT || 3000;


app.use('/assets', express.static(path.join(__dirname, 'assets')));

const cors = require('cors')
app.use(cors({origin : "*"}))

app.use("/uploads", express.static("uploads"));

app.use(express.json())

require('./conn/conn')
app.use('/products', require('./Routes/products'));
app.use('/signin', require('./Routes/user'));




app.get('/', (req, res) => {
  res.send('Hello Express 🚀');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});