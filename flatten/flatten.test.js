import { flattenObject } from './flatten';
import constants from '../constants/constants';

describe('flattenObject', () => {
  it('should flatten the motivating test case', () => {
    const flattened = flattenObject(constants.motivatingObject);

    expect(flattened).toEqual(constants.flattenedMotivatingObject);
  });

  it('should flatten nested objects', () => {
    const flattened = flattenObject(constants.nestedObject);

    expect(flattened).toEqual(constants.flattenedNestedObject);
  });

  it('should flatten already flat objects', () => {
    const flattened = flattenObject(constants.flatObject);

    expect(flattened).toEqual(constants.flatObject);
  });

  it('should flatten objects of arrays', () => {
    const flattened = flattenObject(constants.objectOfArrays);

    expect(flattened).toEqual(constants.flattenedObjectOfArrays);
  });

  it('should flatten deeply nested objects', () => {
    const flattened = flattenObject(constants.deeplyNestedObject);

    expect(flattened).toEqual(constants.flattenedDeeplyNestedObject);
  });

  it('should flatten objects nested in arrays', () => {
    const flattened = flattenObject(constants.objectInArray);

    expect(flattened).toEqual(constants.flattenedObjectInArray);
  });

  it('should flatten arrays nested in arrays', () => {
    const flattened = flattenObject(constants.arrayInArray);

    expect(flattened).toEqual(constants.flattenedArrayInArray);
  });

  it('should flatten arrays nested in objects', () => {
    const flattened = flattenObject(constants.arrayInObject);

    expect(flattened).toEqual(constants.flattenedArrayInObject);
  });

  it('should flatten empty objects', () => {
    const flattened = flattenObject({});

    expect(flattened).toEqual({});
  });
});
