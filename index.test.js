const frontMatterLoader = require('.');

const source = `---
title: Example
description: This is an example
---

Here is some example content`;

test('extracts frontmatter and body as an object', () => {
  const context = {
    cacheable: jest.fn(),
    getOptions: () => ({}),
  };

  expect(frontMatterLoader.call(context, source)).toBe(
    '{' +
      '"attributes":{' +
      '"title":"Example",' +
      '"description":"This is an example"' +
      '},' +
      '"body":"Here is some example content",' +
      '"bodyBegin":6,' +
      '"frontmatter":"title: Example\\ndescription: This is an example"' +
      '}'
  );
});

test('extracts only the frontmatter when onlyAttributes is passed', () => {
  const context = {
    cacheable: jest.fn(),
    getOptions: () => ({ onlyAttributes: true }),
  };

  expect(frontMatterLoader.call(context, source)).toBe(
    '{"title":"Example","description":"This is an example"}'
  );
});

test('extracts only the body when onlyBody is passed', () => {
  const context = {
    cacheable: jest.fn(),
    getOptions: () => ({ onlyBody: true }),
  };

  expect(frontMatterLoader.call(context, source)).toBe(
    'Here is some example content'
  );
});
