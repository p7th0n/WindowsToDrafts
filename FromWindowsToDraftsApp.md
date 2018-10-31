# From Windows to Drafts App

```javascript


var db = Dropbox.create();
var filePath = '/Notes/fromWindows.txt';
var d = Draft.create();

// var result = db.write(filePath, fileContents, 'add', false);
var fileContents = db.read(filePath);
// alert(db.lastError);

// alert(fileContents);

d.content = fileContents;
d.update();

```