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

function sortOrders(orderList) {
  const result = [];
  const primeOrders = [];
  const nonPrimeOrders = [];
  for (let i = 0; i < orderList.length; i++) {
    const order = orderList[i];
    const id = order.split(' ')[0];
    const metaData = order.split(' ')[1];
    if (isPrime(metaData)) {
      primeOrders.push({ id, metaData });
    } else {
      nonPrimeOrders.push({ id, metaData });
    }
  }
  primeOrders.sort((a, b) => {
    if (a.metaData === b.metaData) {
      return a.id.localeCompare(b.id);
    }
    return a.metaData.localeCompare(b.metaData);
  });
  for (let i = 0; i < primeOrders.length; i++) {
    result.push(`${primeOrders[i].id} ${primeOrders[i].metaData}`);
  }
  for (let i = 0; i < nonPrimeOrders.length; i++) {
    result.push(`${nonPrimeOrders[i].id} ${nonPrimeOrders[i].metaData}`);
  }
  return result;
}
