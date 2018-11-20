# From Windows to Drafts App

## Getting Started

* Like the tagline says, where text starts. It is such a handy app and concept. But I spend a lot of time in Windows.
* Get content from Windows into Drafts App
* Get Windows command line output to Drafts. Wrapper scripts take commands and redirect output to a Dropbox file, overwriting previous content.
* Copy the content from _DropboxToDrafts.js_ to a Drafts action.
* Or import from the Drafts Actions directory.

## Ideas

* Develop a process to create Drafts with content from existing files.  This is useful with the iOS Workflow/Shortcuts app too.  And iOS Shortcuts are easy to automate with Siri voice commands.
* Instead of using one file, use a single purpose folder. Drafts checks all files. When the Drafts action imports the draft it will erase the content.

## Problems

* DOS file formats (CR/LF). I use a dos2unix function in the PowerShell profile to fix file format issues.
* Drafts App is iOS and macOS beta only.

## References

* [Drafts Community forum](https://forums.getdrafts.com/t/examples-of-use-of-new-dropbox-integration/2572)
* [Dropbox v2 /list_folder](https://www.dropbox.com/developers/documentation/http/documentation#files-list_folder)
* [Dropbox v2 /delete](https://www.dropbox.com/developers/documentation/http/documentation#files-delete)
