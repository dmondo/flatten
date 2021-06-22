const motivatingObject = {
  "books": [
    {
      "name": "Harry Potter and the Philosopher's Stone",
      "no": 1,
    },
    {
      "name": "Harry Potter and the Chamber of Secrets",
      "no": 2,
    },
  ],
    "status": 200,
    "matrix": [[1, 2, 3], [4, 5, 6],[7, 8, 9]]
};

const flattenedMotivatingObject = {
  "books.0.name":"Harry Potter and the Philosopher's Stone",
  "books.0.no":1,
  "books.1.name":"Harry Potter and the Chamber of Secrets",
  "books.1.no":2,
  "status":200,
  "matrix.0.0":1,
  "matrix.0.1":2,
  "matrix.0.2":3,
  "matrix.1.0":4,
  "matrix.1.1":5,
  "matrix.1.2":6,
  "matrix.2.0":7,
  "matrix.2.1":8,
  "matrix.2.2":9
};

const nestedObject = {
  book: {
    chapters: {
      one: 'my first chapter',
      two: 'my second chapter'
    },
    title: 'my book',
    pages: 300
  },
  author: 'Pen Name'
};

const flattenedNestedObject = {
  'book.chapters.one': 'my first chapter',
  'book.chapters.two': 'my second chapter',
  'book.title': 'my book',
  'book.pages': 300,
  'author': 'Pen Name'
}

const flatObject = {
  title: 'another book',
  author: 'someone else',
  pages: 400,
};

const objectOfArrays = {
  one: [1, 2, 3],
  key: ['a', 'b', 'c']
};

const flattenedObjectOfArrays = {
  'one.0': 1,
  'one.1': 2,
  'one.2': 3,
  'key.0': 'a',
  'key.1': 'b',
  'key.2': 'c'
};

const deeplyNestedObject = {
  book: {
    chapter: {
      sentence: {
        word: "hi"
      }
    }
  }
};

const flattenedDeeplyNestedObject = {
  "book.chapter.sentence.word": "hi"
};

const objectInArray = {
  key: [
    {id: 1, name: "first"},
    {id: 2, name: "second"}
  ]
};

const flattenedObjectInArray = {
  "key.0.id": 1,
  "key.0.name": "first",
  "key.1.id": 2,
  "key.1.name": "second"
};

const arrayInArray = {
  'array': [[1, 2], [3, 'a', 4], [5, [6, 7]]]
};

const flattenedArrayInArray = {
  'array.0.0': 1,
  'array.0.1': 2,
  'array.1.0': 3,
  'array.1.1': 'a',
  'array.1.2': 4,
  'array.2.0': 5,
  'array.2.1.0': 6,
  'array.2.1.1': 7
};

const arrayInObject = {
  book: {
    chapters: [1, 2, 3]
  }
};

const flattenedArrayInObject = {
  'book.chapters.0': 1,
  'book.chapters.1': 2,
  'book.chapters.2': 3
};

export default {
  motivatingObject,
  flattenedMotivatingObject,
  nestedObject,
  flattenedNestedObject,
  flatObject,
  objectOfArrays,
  flattenedObjectOfArrays,
  deeplyNestedObject,
  flattenedDeeplyNestedObject,
  objectInArray,
  flattenedObjectInArray,
  arrayInArray,
  flattenedArrayInArray,
  arrayInObject,
  flattenedArrayInObject
};
