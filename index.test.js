const frontMatterLoader = require('.');

const source = `---
title: Example
description: This is an example
---

Here is some example content`;

test('extracts frontmatter and body as an object', () => {
  const context = {
    cacheable: jest.fn(),
    query: '',
  };

  expect(frontMatterLoader.call(context, source)).toBe(
    '{' +
      '"attributes":{' +
      '"title":"Example",' +
      '"description":"This is an example"' +
      '},' +
      '"body":"\\nHere is some example content",' +
      '"frontmatter":"title: Example\\ndescription: This is an example"' +
      '}',
  );
});

test('extracts only the frontmatter when onlyAttributes is passed', () => {
  const context = {
    cacheable: jest.fn(),
    query: '?onlyAttributes',
  };

  expect(frontMatterLoader.call(context, source)).toBe(
    '{"title":"Example","description":"This is an example"}',
  );
});

test('extracts only the body when onlyBody is passed', () => {
  const context = {
    cacheable: jest.fn(),
    query: '?onlyBody',
  };

  expect(frontMatterLoader.call(context, source)).toBe(
    '\nHere is some example content',
  );
});
