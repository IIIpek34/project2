import parsers from './parsers';
import formatters from './formatters';

const compare = (file1, file2, format = 'stylish') => {
  const data1 = parsers.parse(file1);
  const data2 = parsers.parse(file2);

  const diff = {};
  const keys = new Set([...Object.keys(data1), ...Object.keys(data2)]);

  keys.forEach((key) => {
    if (!Object.hasOwn(data1, key)) {
      diff[`+ ${key}`] = data2[key];
    } else if (!Object.hasOwn(data2, key)) {
      diff[`- ${key}`] = data1[key];
    } else if (data1[key] !== data2[key]) {
      diff[`~ ${key}`] = { from: data1[key], to: data2[key] };
    } else {
      diff[key] = data1[key];
    }
  });

  return formatters.format(diff, format);
};

export default compare;
