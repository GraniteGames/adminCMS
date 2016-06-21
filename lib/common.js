var imageStore = new FS.Store.FileSystem("images", {path:"~/uploads"});

Images = new FS.Collection("images", {
 stores: [imageStore]
});


