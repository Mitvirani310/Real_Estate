// export default async function displayRazorpay() {
//     const data = await fetch("http://localhost:8080/payment/pay", {
//       method: "POST",
//     }).then((t) => t.json());
  
//     console.log(data);
  
//     const options = {
//       key: 'rzp_test_4zj1KjWTY6oX8G',
//       currency: 'INR',
//       amount: 100000,
//       name: "Learn Code Online",
//       description: "Wallet Transaction",
//       image: "",
//       order_id: 1,
//       handler: function (response) {
//         alert("PAYMENT ID ::" + 1);
//         alert("ORDER ID :: " + 1);
//       },
//       prefill: {
//         name: "Anirudh Jwala",
//         email: "anirudh@gmail.com",
//         contact: "9999999999",
//       },
//     };
  
//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   }