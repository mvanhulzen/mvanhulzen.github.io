define(['dojo/_base/declare', 'jimu/BaseWidget',"dojo/on", "dojo/_base/lang", "dojo/dom-construct",
"esri/dijit/BasemapGallery", "esri/graphic","esri/geometry/webMercatorUtils"
],
function(declare, BaseWidget,on,lang,domConstruct,
  BasemapGallery, Graphic,webMercatorUtils) {
  //To create a widget, you need to derive from BaseWidget.
  return declare([BaseWidget], {
    // DemoWidget code goes here

    //please note that this property is be set by the framework when widget is loaded.
    //templateString: template,

    baseClass: 'esrinl-quickmap',
    basemapGallery:null,
    crossGraphic:null,
    activeSymbolUrl:null,
    activeBasemapId:"da02f7e87f114bc1bb70afcba257e138",
    basemapsToShow:["6e03e8c26aad4b9c92a87c1063ddb0e3", //topographic
                    "413fd05bbd7342f5991d5ec96f4f8b18", //imagery with labels
                    "25869b8718c0419db87dad07de5b02d8", //Dark gray
                    "8b3b470883a744aeb60e5fff0a319ce7", //Light gray
                    "6a033f20a4bf405cac135d3e1d9a67db", //Lichtgrijs Canvas
                    "65721ffdbd7942049bf7531728135cb4", //Donkergrijs Canvas
                    "da02f7e87f114bc1bb70afcba257e138", //Topographisch
                    "d3d9b6de50a246c6bca539c74b024cf9" //Satellietbeelden met labels

                  ], 

    postCreate: function() {
      this.inherited(arguments);
      console.log('postCreate');
    },

    startup: function() {
      this.inherited(arguments);
      this.basemapGallery =  new BasemapGallery({
        showArcGISBasemaps: true,
        map: this.map
      }, "BaseMapGalleryNode");
      
      on(this.CopyResult,"click",lang.hitch(this,this.copyResultClick));
      on(this.map,"extent-change",lang.hitch(this,this.mapextentchange));
      on(this.map,"load",lang.hitch(this,this.mapextentchange));
      on(this.basemapGallery,"selection-change",lang.hitch(this,this.basemapGalleryChanged));
      on(this.basemapGallery,"load",lang.hitch(this,this.basemapGalleryLoaded));
      on(this.txtTitle, "change",lang.hitch(this,this.textChanged));
      on(this.txtLabel, "change",lang.hitch(this,this.textChanged));
      this.basemapGallery.startup();
      

      var urls = this.config.imageUrls.split(',')
      var isFirst=true;
      for(var i in urls)
      {
          var imageurl = urls[i];
          console.log("image: ",imageurl);
        var className = "symbolpickeritem";
        if(isFirst)
        {
            className = className + " active";
            this.activeSymbolUrl  = imageurl;
            isFirst= false;
        }
         // var div = domConstruct.create("div", { innerHTML: "<img src="+imageurl+">" }, this.SymbolPickerNode);
         var div = domConstruct.create("div", { style: { "background-image": "url("+imageurl+")" },class:className,url:imageurl} , this.SymbolPickerNode);
         //div.url = imageurl;
         on(div,"click",lang.hitch(this,function(evt){
            
            this.symbolClicked(evt,imageurl);
          }));
      }

      var gjson = {
          "geometry":{"x":6.18,"y":52.5,
          "spatialReference":{"wkid":4326}},
          "symbol":
          {
            "url": this.activeSymbolUrl,
            "height":30,
            "width":30,
            "type":"esriPMS"
            
          }
          //{"color":[255,0,0,255],"size":12,"angle":0,"xoffset":0,"yoffset":0,"type":"esriSMS","style":"esriSMSCross", "outline": {"color":[255,0,0,255],"width":1,"type":"esriSLS","style":"esriSLSSolid"}
        }
      
      this.crossGraphic = new Graphic(gjson);
      this.map.graphics.add(this.crossGraphic);
      console.log('startup');
    },

    onOpen: function(){
      console.log('onOpen');
    },

    onClose: function(){
      console.log('onClose');
    },

    onMinimize: function(){
      console.log('onMinimize');
    },

    onMaximize: function(){
      console.log('onMaximize');
    },

    onSignIn: function(credential){
      /* jshint unused:false*/
      console.log('onSignIn');
    },

    onSignOut: function(){
      console.log('onSignOut');
    },
    basemapGalleryLoaded: function(evt)
    {
        console.log("basemapGalleryLoaded",evt);
        var basemaps = this.basemapGallery.basemaps;

        for(var i=basemaps.length-1;i>-1;i--)
        {
          var bm = basemaps[i];
          console.log(bm);
          if(this.basemapsToShow.indexOf(bm.itemId)<0)
          {
            //console.log("removing: ",bm.title);
              this.basemapGallery.remove(bm.id);

          }

        }
        this.createhtmlpart();
    }
    ,
    symbolClicked:function(evt,url)
    {
        var allSymbolDivs = this.SymbolPickerNode.children;
        for(var i=0;i<allSymbolDivs.length;i++)
        {
          symbolItemNode = allSymbolDivs[i];
          symbolItemNode.className = symbolItemNode.className.replace(" active","");

        }
        
        console.log("symbol clicked",evt,url)
        var sourceDiv = evt.target;
        sourceDiv.className = sourceDiv.className + " active";
        this.activeSymbolUrl = sourceDiv.getAttribute("url");
        this.createhtmlpart();
    },
    copyResultClick: function(evt)
    {
        console.log("copyResultClick");

        this.ResultText.select();

        document.execCommand("Copy");
    },
    mapextentchange:function(evt)
    {
        //console.log('extentchange',evt);
       
        this.createhtmlpart();

    },
    basemapGalleryChanged: function(evt)
    {
        console.log("basemapGalleryChanged",evt);

        this.activeBasemapId = this.basemapGallery.getSelected().itemId;
        this.createhtmlpart();

    },
    textChanged: function(evt)
    {
      this.createhtmlpart();
    },
    createhtmlpart:function()
    {
      var baseUrl = "//www.arcgis.com/apps/Embed/index.html?webmap={basemapid}&center={center}&level={level}&marker={markerx},{markery},,{markerlabel},{markerimageurl},{markertitle}&disable_scroll=false";
      //var baseMapUrl = this.map.basemap.url;
      this.crossGraphic.geometry = this.map.extent.getCenter();
      this.crossGraphic.symbol.setUrl(this.activeSymbolUrl);
      this.map.graphics.clear();
      this.map.graphics.add(this.crossGraphic);
      var center = webMercatorUtils.webMercatorToGeographic(this.crossGraphic.geometry);
      
      params = {}
      params.basemapid = this.activeBasemapId;
      params.center = center.x + ","+center.y;
      params.level = this.map.getLevel();
      params.markerx = center.x;
      params.markery = center.y;
      params.markertitle = encodeURI(this.txtTitle.value).replace(",","%2C");
      params.markerlabel = encodeURI(this.txtLabel.value).replace(",","%2C");
      params.markerimageurl = this.activeSymbolUrl;
      url = baseUrl;

      for(var propertyName in params) {
        //console.log("replacing property: ",propertyName);
        url = url.replace("{"+propertyName+"}",params[propertyName]);
      
      }
      var completeTemplate = '<style>.embed-container {position: relative; padding-bottom: 80%; height: 0; max-width: 100%;} .embed-container iframe, .embed-container object, .embed-container iframe{position: absolute; top: 0; left: 0; width: 100%; height: 100%;} small{position: absolute; z-index: 40; bottom: 0; margin-bottom: -15px;}</style><div class="embed-container"><iframe width="500" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="asdfasdfas" src="{url}"></iframe><small><a href="http://www.esri.nl" target="_blank">Kaart gemaakt met ArcGIS van Esri.</a> | <a href="{url}" target="_blank">Kaart in groot venster weergeven...</a></small></div>';

      //this.ResultNode.innerHTML = "<a target=\"_blank\" href=\""+url+"\">Klik hier voor een preview</a>";
      //this.ResultText.value = completeTemplate.replace("{url}",url);
      this.ResultText.value = completeTemplate.replace(/{url}/g,url);
      this.PreviewNode.innerHTML = this.ResultText.value;
    }
  });
});