// List Dropbox Files in Folder
// https://forums.getdrafts.com/t/examples-of-use-of-new-dropbox-integration/2572

// var folder = draft.processTemplate("[[safe_title]]");
var folder = '/drafts/';
var deleteEndpoint = 'https://api.dropboxapi.com/2/files/delete_v2';

// create Dropbox object and vars
let db = Dropbox.create();
let endpoint = "https://api.dropboxapi.com/2/files/list_folder";
let args = {
    "path": folder,
    "recursive": false,
    "include_media_info": false,
    "include_deleted": false,
    "include_has_explicit_shared_members": false,
    "include_mounted_folders": true
};

// make API request
let response = db.rpcRequest( {
    "url": endpoint,
    "method": "POST",
    "data": args
} );
if ( response.statusCode != 200 ) {
    console.log( "Dropbox Error: " + response.statusCode + ", " + response.error );
    context.fail();
} else {
    let p = Prompt.create();
    p.title = "Dropbox files";
    let fileList = response.responseData.entries;
    Object.keys( fileList ).forEach( function( key ) {
        p.addButton( fileList[ key ].name );
        // save as a draft from file
        let filePath = folder + fileList[ key ].name
        alert(filePath);
        var d = Draft.create();
        var fileContents = db.read(filePath);
        alert(fileContents);

        d.content = fileContents;
        d.update();

        // delete file when done
        
        let deleteArgs = {
            'path': folder + fileList[ key ].name
        }
        let deleteResponse = db.rpcRequest( {
            'url': deleteEndpoint,
            'method': 'POST',
            'data': deleteArgs
        })
        
    } );
    let didSelect = p.show();
    if ( didSelect ) {
        //
    }
}