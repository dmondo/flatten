// check that key is coercible to number, has no floating whitespace,
// is non-negative, and is an integer.
export const isArrayKey = (key) => (
  !isNaN(key) && !isNaN(parseFloat(key)) && key >= 0 && Number.isInteger(Number(key))
);

const unflattenKeys = (keys, value, object) => {
  const [currentKey, ...remainingKeys] = keys;
  const isFinalKey = !remainingKeys.length;
  const nextKey = remainingKeys[0];
  const nextKeyIsArray = isArrayKey(nextKey);

  if (isFinalKey) {
    object[currentKey] = value;
  } else if (nextKeyIsArray) {
    object[currentKey] = object[currentKey] || []; // get current key if it exists, create it otherwise
    const nextArray = object[currentKey];

    unflattenKeys(remainingKeys, value, nextArray);
  } else {
    object[currentKey] = object[currentKey] || {}; // get current key if it exists, create it otherwise
    const nextObject = object[currentKey];

    unflattenKeys(remainingKeys, value, nextObject);
  }
};

export const unflattenObject = (object) => {
  const unflattened = {};

  Object.entries(object).forEach(([key, value]) => {
    const innerKeys = key.split('.');
    unflattenKeys(innerKeys, value, unflattened);
  });

  return unflattened;
};
