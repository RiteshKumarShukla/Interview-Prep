## MongoDB Relationships

MongoDB handles relationships between collections through two approaches: embedding and referencing.

### Embedding

In embedding, you can store related data directly within a document. This means that the related data is nested inside the main document. Embedding is suitable when the related data is frequently accessed together and has a one-to-one or one-to-many relationship. It provides better read performance but can lead to data duplication if the embedded data is shared across multiple documents.

Example:

```javascript
// Users collection
{
  _id: ObjectId("user1"),
  name: "John",
  email: "john@example.com",
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA"
  },
  orders: [
    {
      _id: ObjectId("order1"),
      product: "Phone",
      price: 999
    },
    {
      _id: ObjectId("order2"),
      product: "Laptop",
      price: 1499
    }
  ]
}
```

### Referencing

Referencing involves storing references to related documents. Instead of nesting the data, you store the \_id of one document in another document to establish a relationship. Referencing is suitable for many-to-many relationships, large data sets, and scenarios where the related data is frequently modified or accessed independently. It ensures data consistency and avoids data duplication but may require additional queries to fetch related data.

Example:

```javascript
// Users collection
{
  _id: ObjectId("user1"),
  name: "John",
  email: "john@example.com",
  address: ObjectId("address1"),
  orders: [
    ObjectId("order1"),
    ObjectId("order2")
  ]
}

// Addresses collection
{
  _id: ObjectId("address1"),
  street: "123 Main St",
  city: "New York",
  country: "USA"
}

// Orders collection
{
  _id: ObjectId("order1"),
  product: "Phone",
  price: 999
}

{
  _id: ObjectId("order2"),
  product: "Laptop",
  price: 1499
}

```

By using either embedding or referencing, you can establish relationships between collections in MongoDB based on your application's needs. Choose the approach that best suits your data access patterns and scalability requirements.
