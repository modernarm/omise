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

app.get("/customers/:custId", (req, res) => {
  const custId = req.params.custId;
  omise.customers.retrieve(custId, function (error, customer) {
    res.send(customer);
  });
});

app.get("/customers/create", (req, res) => {
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

app.get("/customers/update/:custId", (req, res) => {
  const custId = req.params.custId;
  console.log(custId);
  omise.customers.update(
    custId,
    {
      description: "Estus shard",
      email: "estus.shard@example.com",
    },
    function (error, customer) {
      res.send(customer);
    }
  );
});

app.get("/customers/updatecard/:custId", (req, res) => {
  const custId = req.params.custId;
  omise.customers.update(
    custId,
    {
      card: "card_test_5labi99pi7far5hegbd",
    },
    function (error, customer) {
      res.send(customer);
    }
  );
});

app.get("/customers/addcard", (req, res) => {
  omise.customers.retrieveCard(
    "cust_test_5cv3e2dh65qrms4wwt0",
    "card_test_5labd2wbxa6v9hdw2ug",
    function (error, card) {
      res.send(card);
    }
  );
});

app.get("/customers/delete", (req, res) => {
  omise.customers.destroy("cust_test_5cv3epdv8e8mshgzzjo", function (
    error,
    customer
  ) {
    res.send(customer);
  });
});

app.get("/customers/addcard", (req, res) => {
  omise.customers.retrieveCard(
    "cust_test_5cv3e2dh65qrms4wwt0",
    "card_test_5lab6g2nbxc9vqsgvxu",
    function (error, card) {
      res.send(card);
    }
  );
});
app.get("/customers/cards/:custId", (req, res) => {
  const custId = req.params.custId;
  omise.customers.listCards(custId, function (error, list) {
    res.send(list);
  });
});

app.get("/customers/createwithcard", (req, res) => {
  omise.customers.create(
    {
      description: "John Doe (id: 30)",
      email: "john.doe@example.com",
      card: "tokn_test_5labd2wcevoqgpnrtmx",
    },
    function (error, customer) {
      res.send(customer);
    }
  );
});

//#endregion section - customer

//#region section - token

app.get("/token/create", (req, res) => {
  omise.tokens.create({ card: cardBody }, function (statusCode, token) {
    res.send(token);
  });
});

app.get("/token/retrieve", (req, res) => {
  omise.tokens.retrieve("tokn_test_5labjq8kavz56s5w6ox", function (
    error,
    token
  ) {
    res.send(token);
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

//#region section - charge
app.get("/charge", (req, res) => {
  omise.charges.create(
    {
      amount: "100000",
      currency: "thb",
      customer: "cust_test_5g0221fe8iwtayocgja",
    },
    function (error, charge) {
      res.send(charge);
    }
  );
});
//#endregion section - charge
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
