export const diff = {
  '+ addedKey': 'newValue',
  '- removedKey': 'oldValue',
  '~ updatedKey': { from: 'oldValue', to: 'newValue' },
};

export const stylishOutput = `{
  "+ addedKey": "newValue",
  "- removedKey": "oldValue",
  "~ updatedKey": {
    "from": "oldValue",
    "to": "newValue"
  }
}`;

export const plainOutput = `Property 'addedKey' was added with value: 'newValue'
Property 'removedKey' was removed
Property 'updatedKey' was updated. From 'oldValue' to 'newValue'`;
