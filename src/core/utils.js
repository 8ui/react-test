export const matchUrl = (string, obj) => {
  let newString = string;
  Object.keys(obj).forEach((name) => {
    const value = obj[name] || '';

    const re = new RegExp(`:${name}`, 'g');
    newString = newString.replace(re, value);

    if (!value) {
      newString = newString.replace(`${name}=:${name}&`, '');
      newString = newString.replace(`${name}=:${name}`, '');
    }
  });

  return newString;
};
