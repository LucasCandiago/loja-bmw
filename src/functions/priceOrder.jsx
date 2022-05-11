import CarListItems from "../mocks/Mocks";

const OrderedList = CarListItems.slice();

OrderedList.sort((a, b) => {
  if (a.price > b.price) {
    return 1;
  }
  if (a.price < b.price) {
    return -1;
  }
  return 0;
});

export default OrderedList;
