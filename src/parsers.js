import yaml from 'js-yaml';

const parse = (data) => {
  try {
    return JSON.parse(data);
  } catch {
    return yaml.load(data);
  }
};

export default { parse };
