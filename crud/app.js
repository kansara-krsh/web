const fs = require('fs');
const filePath = "C:\New folder\document.txt";

// CREATE (or Overwrite) a file
fs.writeFile(filePath, 'Hello, this is a sample file.', (err) => {
  if (err) throw err;
  console.log('✅ File created!');
  
  // READ the file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log('📖 File contents:', data);

    // UPDATE (Append) the file
    fs.appendFile(filePath, '\nThis line was added later.', (err) => {
      if (err) throw err;
      console.log('✏️ File updated!');

      // READ again to verify update
      fs.readFile(filePath, 'utf8', (err, newData) => {
        if (err) throw err;
        console.log('📖 Updated file contents:', newData);

        // DELETE the file
        fs.unlink(filePath, (err) => {
          if (err) throw err;
          console.log('🗑️ File deleted!');
        });
      });
    });
  });
});
