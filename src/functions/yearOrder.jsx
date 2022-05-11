import CarListItems from "../mocks/Mocks";

const OrderedList = CarListItems.slice();

OrderedList.sort((a, b) => {
  if (a.year > b.year) {
    return 1;
  }
  if (a.year < b.year) {
    return -1;
  }
  return 0;
});

export default OrderedList;
