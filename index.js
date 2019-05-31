const fs = require('fs');

const formatStrings = (strings, format, separator) => {
  switch (format) {
    case 'json':
      return JSON.stringify(strings);
    case 'csv':
      return strings.join(separator);
    default:
      return strings;
  }
};

module.exports = (options = {}) => {
  const {
    total = 100,
    min = 1,
    max = 10,
    format,
    separator = ',',
    file,
  } = options;

  const strings = [...Array(total)].map(() => {
    // determine string length
    const length = Math.floor(Math.random() * (max - min + 1) + min);

    // generate strings
    return [...Array(length)].map(
      () => (Math.random() * 36 | 0).toString(36)
    ).join('');
  });

  // format results
  const formattedStrings = formatStrings(strings, file && !format ? 'csv' : format, separator);

  // optionally write to a file
  if (file) fs.writeFileSync(file, formattedStrings);

  return formattedStrings;
};
