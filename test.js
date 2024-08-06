var fs = require('fs');

fs.unlink('prisma/dev.db', (err) => {
  if (err) return console.log(err);
  console.log('file deleted successfully');
});
