// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { DataStore } = require("notarealdb");

export default function handler(req, res) {
  const store = new DataStore("./data");
  const apples = store.collection("apples");
  const oranges = store.collection("oranges");

  // create a new item; returns a generated id
  //const id = apples.create({variety: 'Gala', weight: 133}); // => 'BJ4E9mQOG'

  // list all items in a collection
  const a = apples.list(); // => [{id: 'BJ4E9mQOG', variety: 'Gala', weight: 133}]

  // get a single item
  //apples.get('BJ4E9mQOG'); // => {id: 'BJ4E9mQOG', variety: 'Gala', weight: 133}

  // update an item
  /*
  apples.update({
    id: "BJ4E9mQOG",
    variety: "Braeburn",
    weight: 150,
    description: "Hello",
  });
  */
  // delete an item
  //apples.delete('BJ4E9mQOG');

  res.status(200).json({
    name: "John Doe",
    list: a,
  });
}
