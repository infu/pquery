function select(name) {
    var doc = app.activeDocument; var o;
    if (typeof name == "object") o = name;
    if (typeof name== "undefined") o = doc.activeLayer;
    if (typeof name=="string") o = doc.artLayers.getByName(name);

    o.move = function (fX,fY) {
      fLayer = this;
      var Position = fLayer.bounds;
      Position[0] = fX - Position[0];
      Position[1] = fY - Position[1];
      fLayer.translate(-Position[0],-Position[1]);
    }
    o.dup = function() {
       var z = this.duplicate();
       return select(z);
       }
  return o;
}
