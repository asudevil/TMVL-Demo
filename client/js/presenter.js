var Presenter = {
    makeDocument: function(resource) {
        if (!Presenter.parser) {
            Presenter.parser = new DOMParser();
        }
        
        var doc = Presenter.parser.parseFromString(resource, "application/xml");
        return doc;
    },
    
    modalDialogPresenter: function(xml) {
        navigationDocument.presentModal(xml);
    },
    
    pushDocument: function(xml) {
        navigationDocument.pushDocument(xml);
    },
    
    load: function(event) {
        var self = this;
        var element = event.target;
        var videoUrl = element.getAttribute("vidUrl")
        
        templateURL = element.getAttribute("template"),
        presentation = element.getAttribute("presentation");
        
        if (videoUrl) {
            var player = new Player();
            var playlist = new Playlist();
            var mediaItem = new MediaItem("video", videoUrl);
            
            player.playlist = playlist;
            player.playlist.push(mediaItem);
            player.present();
        }
        
        if(templateURL) {
        self.showLoadingIndicator(presentation);
        resourceLoader.loadResource(templateURL,
            function(resource) {
                if (resource) {
                    var doc = self.makeDocument(resource);
                    doc.addEventListener("select", self.load.bind(self));
                    if (self[presentation] instanceof Function) {
                        self.defaultPresenter.call(self, doc);
                        }    
                    }
                }
            );
        }
    },
    
    showLoadingIndicator: function(presentation) {
        if (!this.loadingIndicator) {
            this.loadingIndicator = this.makeDocument(this.loadingTemplate);
        }
        if (!this.loadingIndicatorVisible && presentation != "modalDialogPresenter" && presentation != "menuBarItemPresenter") {
            navigationDocument.pushDocument(this.loadingIndicator);
            this.loadingIndicatorVisible = true;
        }
    },

    removeLoadingIndicator: function() {
        if (this.loadingIndicatorVisible) {
            navigationDocument.removeDocument(this.loadingIndicator);
            this.loadingIndicatorVisible = false;
        }
    },


    defaultPresenter: function(xml) {
        if(this.loadingIndicatorVisible) {
            navigationDocument.replaceDocument(xml, this.loadingIndicator);
            this.loadingIndicatorVisible = false;
        } else {
            navigationDocument.pushDocument(xml);
        }
    },

      loadingTemplate: `<?xml version="1.0" encoding="UTF-8" ?>
        <document>
          <loadingTemplate>
            <activityIndicator>
              <text>Loading...</text>
            </activityIndicator>
          </loadingTemplate>
        </document>`
}
