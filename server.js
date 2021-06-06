const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IeDs2DIAcdqkF1s4NBPVGmNJVxbzJTHGjOoOv8XbcYZC2VU4xXF83kUonzDGGdqPfAfFswldjaBCEtdIgUzGGSM00QKJiPHKI"
);
const { v4: uuidv4 } = require("uuid");
const app = express();

// const path = require('path');

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome into react shop website");
});


// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'))
//   app.get('*', (req, res) => {
//     res.send(path.resolve(__dirname,'client','build','index.html'))
//   })
// }



app.post("/checkout", async (req, res) => {
  let error;
  let status;
  try {
    const { product, token } = req.body;
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const key = uuidv4();
      const charge = await stripe.charges.create(
          {
              amount: product.price * 100,
              currency: "usd",
              customer: customer.id,
              receipt_email: token.email,
              description: 'all products description',
              shipping: {
                  name: token.card.name,
                  address: {
                      line1: token.card.address_line1,
                      line2: token.card.address_line2,
                      city: token.card.address_city,
                      country: token.card.address_country,
                      postal_code: token.card.address_zip
                  }
              }
          },
          { idempotencyKey: key });
      status = "success";
  } catch (error) {
      console.log("This is: ", error);
      status =  "error sorry";
    }
    res.json({ status });
});
app.listen(8080, () => {
  console.log("Your app is running on port number 8080");
});
