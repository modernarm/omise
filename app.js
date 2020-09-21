import express from "express";
import omiseModule from "omise";
const app = express();
const port = 3030;
const omise = omiseModule({
  secretKey: "skey_test_5laaaxxo03uuwpdvxrw",
  omiseVersion: "2019-05-29",
  publicKey: "pkey_test_5cv2508go6dp6fybd9e",
});
import { cardBody, truemoneyBody } from "./mock.js";

//#region section - customer
app.get("/customers", (req, res) => {
  omise.customers.list(function (error, list) {
    res.send(list);
  });
});

app.get("/customer/create", (req, res) => {
  omise.customers.create(
    {
      description: "Estus shard",
      email: "estus.shard@example.com",
    },
    function (error, customer) {
      res.send(customer);
    }
  );
});

app.get("/customer/update", (req, res) => {
  omise.customers.update(
    "cust_test_5cv3e2dh65qrms4wwt0",
    {
      email: "estus.shard.change@example.com",
      description: "change customer cust_test_5cv3e2dh65qrms4wwt0",
    },
    function (error, customer) {
      res.send(customer);
    }
  );
});

app.get("/customer/delete", (req, res) => {
  omise.customers.destroy("cust_test_5cv3epdv8e8mshgzzjo", function (
    error,
    customer
  ) {
    res.send(customer);
  });
});

//#endregion section - customer

//#region section - token
app.get("/token/retrieve", (req, res) => {
  omise.tokens.retrieve("tokn_test_5laasv3bkc4dpuedbb4", function (
    error,
    token
  ) {
    console.log(error);
    res.send(token);
  });
});

app.get("/token/create", (req, res) => {
  omise.tokens.create({ card: cardBody }, function (statusCode, response) {
    res.send(response);
  });
});
//#region section - token

//#endregion section - source
app.get("/source/create/truemoney", (req, res) => {
  omise.sources.create(truemoneyBody, function (statusCode, response) {
    res.send(response);
  });
});

app.get("/sources", (req, res) => {
  omise.sources.create(truemoneyBody, function (statusCode, response) {
    res.send(response);
  });
});
//#endregion section - source

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
