# From Windows to Drafts App

## Purpose

* Get content from Windows into Drafts App
* Develop a process to create Drafts with content from existing files.  This is useful with the iOS Workflow/Shortcuts app.  iOS Shortcuts are easy to automate with Siri voice commands.

## Problems

* DOS file formats (CR/LF)
* Drafts App is iOS and macOS beta only

```javascript
/*  
*   Drafts App Action 'FromWindows'
*
*       Creates a new Draft with the contents of a Dropbox file
*
*/

var db = Dropbox.create();
var filePath = '/Notes/fromWindows.txt';
var d = Draft.create();

var fileContents = db.read(filePath);

d.content = fileContents;
d.update();

```