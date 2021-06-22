import { unflattenObject, isArrayKey } from './unflatten';
import constants from '../constants/constants';

describe('isArrayKey', () => {
  it('should identify integers as array indices', () => {
    const arrayKeys = [0, 1, 2, 99, 100000000]

    arrayKeys.forEach((key) => expect(isArrayKey(key)).toBeTruthy());
  });

  it('should identify stringified integers as array indices', () => {
    const arrayKeys = ['0', '1', '2', '99', '100000000'];

    arrayKeys.forEach((key) => expect(isArrayKey(key)).toBeTruthy());
  });

  it('should not identify negative integers as array indices', () => {
    const arrayKeys = [-1, -2, '-1', '-2'];

    arrayKeys.forEach((key) => expect(isArrayKey(key)).toBeFalsy());
  });

  it('should not identify other data types as array indices', () => {
    const arrayKeys = ['hello world', 'h', 'zero', [], {}, true, false];

    arrayKeys.forEach((key) => expect(isArrayKey(key)).toBeFalsy());
  });
});

describe('unflattenObject', () => {
  it('should unflatten the motivating test case', () => {
    const unflattened = unflattenObject(constants.flattenedMotivatingObject);

    expect(unflattened).toEqual(constants.motivatingObject);
  });

  it('should unflatten nested object', () => {
    const unflattened = unflattenObject(constants.flattenedNestedObject);

    expect(unflattened).toEqual(constants.nestedObject);
  });

  it('should unflatten already unflattened object', () => {
    const unflattened = unflattenObject(constants.flatObject);

    expect(unflattened).toEqual(constants.flatObject);
  });

  it('should flatten objects of arrays', () => {
    const unflattened = unflattenObject(constants.flattenedObjectOfArrays);

    expect(unflattened).toEqual(constants.objectOfArrays);
  });

  it('should unflatten deeply nested object', () => {
    const unflattened = unflattenObject(constants.flattenedDeeplyNestedObject);

    expect(unflattened).toEqual(constants.deeplyNestedObject);
  });

  it('should unflatten objects nested in arrays', () => {
    const unflattened = unflattenObject(constants.flattenedObjectInArray);

    expect(unflattened).toEqual(constants.objectInArray);
  });

  it('should unflatten arrays nested in arrays', () => {
    const unflattened = unflattenObject(constants.flattenedArrayInArray);

    expect(unflattened).toEqual(constants.arrayInArray);
  });

  it('should unflatted arrays nested in object', () => {
    const unflattened = unflattenObject(constants.flattenedArrayInObject);

    expect(unflattened).toEqual(constants.arrayInObject);
  });

  it('should unflatten empty object', () => {
    const unflattened = unflattenObject({});

    expect(unflattened).toEqual({});
  });
});
