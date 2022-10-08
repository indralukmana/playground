/***
 * 
 * NOT YET
 * 
 Given a List of Orders , where each Order is a string . For example : [aax 12 23 ] [ ff kindle ebook] are two orders. Each order has an ID which is first part of the order ( ID of order 1 = aax , ID2 = ff ). The remaining part of the order is referred to as MetaData. There are two types of orders, Prime orders ( which contain non numeric Meta Data) and Non-Prime Orders (which contain Only-Numeric Meta Data). Sort the List of Orders as given below :
a. Prime Orders before NonPrime Orders
b. Prime Order with lexicographically smaller MetaData comes first.
c. In Case of tie in (b) , the one with lexicographically smaller ID comes first.
d. The relative order of NonPrime Orders remains the same.
 * */

// ALMOST PASSING ALL TESTS

function sortOrders(orderList) {
  let sortedList = [...orderList].sort((order1, order2) => {
    const isPrimeOrder1 = Number.isNaN(parseInt(order1.split(' ')[1], 10));
    const isPrimeOrder2 = Number.isNaN(parseInt(order2.split(' ')[1], 10));

    const order1Split = order1.split(' ');
    const order2Split = order2.split(' ');

    //if both order is prime lexicographical compare
    if (isPrimeOrder1 && isPrimeOrder2) {
      const compareResult = order1Split[1].localeCompare(order2Split[1]);

      // return the compare result when not equal
      if (compareResult !== 0) {
        return compareResult;
      }

      //return the identifier compare result when ties
      return order1Split[0].localeCompare(order2Split[0]);
    }

    if (isPrimeOrder1) {
      return -1;
    }

    if (isPrimeOrder2) {
      return 1;
    }

    return 0;
  });

  return sortedList;
}
