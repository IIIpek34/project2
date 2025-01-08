export const stylishOutput = `{
  "name": "Alice",
  "~ age": {
    "from": 30,
    "to": 32
  },
  "~ isEmployed": {
    "from": true,
    "to": false
  },
  "+ city": "Wonderland"
}`;

export const plainOutput = `Property 'age' was updated. From '30' to '32'
Property 'isEmployed' was updated. From 'true' to 'false'
Property 'city' was added with value: 'Wonderland'`;
