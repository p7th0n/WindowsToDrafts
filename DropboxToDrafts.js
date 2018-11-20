// DropboxToDrafts.js
//
// Import file content from files in a 'Drafts' folder on Dropbox
// as individual Drafts.
//
// Dropbox is used to pipe text _Drafts_ from Windows or Linux
// to the Drafts app on iOS.

let msg = '';
let fileCount = 0;
var folder = '/drafts/';

// create Dropbox object and vars
let db = Dropbox.create();
let apiListFolder = "https://api.dropboxapi.com/2/files/list_folder";
var apiDeleteV2 = 'https://api.dropboxapi.com/2/files/delete_v2';

// get Dropbox API file list from 'Drafts' folder 
let listFolderArgs = {
    "path": folder,
    "recursive": false,
    "include_media_info": false,
    "include_deleted": false,
    "include_has_explicit_shared_members": false,
    "include_mounted_folders": true
};
let response = db.rpcRequest( {
    "url": apiListFolder,
    "method": "POST",
    "data": listFolderArgs
} );
if ( response.statusCode != 200 ) {
    alert( "Dropbox Error: " + response.statusCode + ": " + response.error );
} else {
    msg = "Import Dropbox files to Drafts...\n";
    let dbDraftsList = response.responseData.entries;
    Object.keys( dbDraftsList ).forEach( function( key ) {

        // Get Dropbox file content
        let fileName = dbDraftsList[ key ].name
        let filePath = folder + fileName
        msg += '* ' + fileName + '\n';
        var fileContents = db.read(filePath);
        // TODO: check for errors reading content like Windows/DOS line endings [CR-LF]

        // Create a new Draft for each Dropbox file
        var d = Draft.create();
        d.content = fileContents;
        d.update();                     // save Draft
        fileCount += 1;                 // count how many Drafts imported

        // delete Dropbox file once a Draft is created
        // to avoid importing the same content again.
        let deleteArgs = {
            'path': folder + fileName
        }
        let deleteResponse = db.rpcRequest( {
            'url': apiDeleteV2,
            'method': 'POST',
            'data': deleteArgs
        })
    });
    // show a message when import completes
    if (fileCount > 0) {
        msg += '\n' + fileCount.toString() + ' files imported.'
        alert(msg);
    } else {
        alert(msg + '\nNo files found!');
    }
}