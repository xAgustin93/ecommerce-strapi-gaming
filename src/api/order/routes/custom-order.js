module.exports = {
  routes: [
    {
      method: "POST",
      path: "/payment-order",
      handler: "order.paymentOrder",
    },
  ],
};
