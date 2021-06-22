export const flattenArray = (array, keyName, flattened = {}) => {
  array.forEach((value, index) => {
    const newKeyName = `${keyName}.${index}`;

    if (Array.isArray(value)) {
      flattenArray(value, newKeyName, flattened);
    } else if (typeof value === 'object' && value !== null) {
      flattenObject(value, newKeyName, flattened);
    } else {
      flattened[newKeyName] = value;
    }
  });

  return flattened;
};

export const flattenObject = (object, keyName, flattened = {}) => {
  Object.entries(object).forEach(([key, value]) => {
    const newKeyName = keyName ? `${keyName}.${key}` : key;

    if (typeof value === 'object' && value !== null) {
      flattenObject(value, newKeyName, flattened);
    } else if (Array.isArray(value)) {
      flattenArray(value, newKeyName, flattened);
    } else {
      flattened[newKeyName] = value;
    }
  });

  return flattened;
};
