const cart = ["shoes", "pants", "kurta"];
const promise = createOrdre(cart);

promise
  .then((orderid) => {
    console.log(orderid);
    return orderid;
  })
  .then ((orderid)=>{
    return proceedpayment(orderid);
  })
  .then((paymentInfo) =>{
    console.log(paymentInfo);
  })
  .catch((err) => {
    console.log(err.message);
  });

function createOrdre(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validatorCart(cart)) {
      const err = new Error("cart is not valid");
      reject(err);
    }

    const orderid = "12345";

    if (orderid) {
      setTimeout(() => {
        resolve(orderid);
      }, 6000);
    }
  });
  return pr;
}

function validatorCart(cart) {
  return true;
}

function proceedpayment(orderid) {
  return new Promise(function (resolve, reject) {
    resolve("payment done");
  });
}

