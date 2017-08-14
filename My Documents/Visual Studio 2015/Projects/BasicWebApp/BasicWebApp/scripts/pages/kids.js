// <reference path ="../Object.inherit.js" />

(function () {
    "use strict";

    var KidsBadgePage = Object.inherit({

        initialize: function (element) {
            this.imageElement = element.querySelector("img");

            // TODO: add listeners for element "dragover" and "drop" events
            //      handle with this.handleDragOver.bind(this) and this.handleDrop.bind(this)
            element.addEventListener("dragover", this.handleDragOver.bind(this), false);
            element.addEventListener("drop", this.handleDrop.bind(this), false);
        },

        handleDragOver: function (event) {
            event.stopPropagation();
            event.preventDefault();
            event.dataTransfer.dropEffect = 'copy';  // Makes the browser to display a "copy" cursor
        },

        handleDrop: function (event) {
            event.stopPropagation();
            event.preventDefault();

            // TODO: Get the files from the event
            var files = event.dataTransfer.files;

            if (files.length == 0) return;

            // TODO: read first file in array
            var file = files[0];

            // Check the file type is an image
            if (this.isImageType(file.type)) {
                // Use this.readFile to read file, then display image
                // (Note that this.readFile returns a jQuery deferred, so chain this.displayImage using the "done" method
                this.readFile(file).done(this.displayImage);
            } else {
                alert("Please drop an image file");
            }
        },

        isImageType: function (type) {
            var imageTypes = ["image/jpeg", "image/jpg", "image/png"];
            return imageTypes.indexOf(type) >= 0;
        },

        readFile: function (file) {
            var reading = $.Deferred();
            var context = this;

            // Create a new FileReader
            var reader = new FileReader();

            // TODO: Assign a callback function for reader.onload
            // TODO: In the callback use reading.resolveWith(context, [fileDataURL]); to return the file data URL
            reader.onload = function (loadEvent) {
                var fileDataUrl = loadEvent.target.result;
                reading.resolveWith(context, [fileDataUrl]);
            };

            // TODO: Start reading the file as a DataURL
            reader.readAsDataURL(file);

            return reading;
        },

        displayImage: function (imageUrl) {
            this.imageElement.src = imageUrl;
        }
    });

    var badgeElement = document.querySelector(".badge");
    KidsBadgePage.create(badgeElement);
}());