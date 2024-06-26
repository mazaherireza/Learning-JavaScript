const availableBooks = [
  {
    id: "BK_1001_0",
    title: "1984",
    author: "George Orwell",
    price: 13,
  },
  {
    id: "BK_1001_1",
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    price: 25,
  },
];

const pricesWithCurrency = availableBooks.map((book) => `€${book.price}`);
console.log(pricesWithCurrency);
