const formatStylish = (diff) => JSON.stringify(diff, null, 2);

const formatPlain = (diff) => Object.entries(diff)
  .map(([key, value]) => {
    if (key.startsWith('+')) {
      return `Property '${key.slice(2)}' was added with value: '${value}'`;
    }
    if (key.startsWith('-')) {
      return `Property '${key.slice(2)}' was removed`;
    }
    if (key.startsWith('~')) {
      return `Property '${key.slice(2)}' was updated. From '${value.from}' to '${value.to}'`;
    }
    return null;
  })
  .filter(Boolean)
  .join('\n');

const format = (diff, outputFormat) => {
  switch (outputFormat) {
    case 'plain':
      return formatPlain(diff);
    case 'stylish':
    default:
      return formatStylish(diff);
  }
};

export default { format };
