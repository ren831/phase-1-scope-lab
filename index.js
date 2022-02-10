var customerName = "bob";

function upperCaseCustomerName() {
  return (customerName = customerName.toUpperCase());
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  return (bestCustomer = "maybe bob");
}

const LeastFavoriteCustomer = 2;

function changeLeastFavoriteCustomer() {
  LeastFavoriteCustomer = 5;
}
