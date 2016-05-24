L.Control.Cluster = L.Control.extend({
  options: {
    position: "topright",
    clusterText: "Toggle Clusters",
    clusterTitle: "Toggle Clusters",
  },

  onAdd: function (map) {
    var clusterName = "leaflet-control-cluster"
      , container = L.DomUtil.create("div", clusterName + " leaflet-bar")
      , options = this.options

    this._map = map

    var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
    container.style.backgroundColor = 'white';
    container.style.backgroundImage = "url(decluster.png)";
    container.style.backgroundRepeat = "no-repeat";
    container.style.backgroundPosition = "center";
    container.style.backgroundSize = "25px 25px";
    container.style.width = '36px';
    container.style.height = '36px';
    container.onclick = toggleCluster;

    return container
  },
})

var clusteredToggle = true;
function toggleCluster() {
	if (clusteredToggle) {
		markers.disableClustering();
		clusteredToggle = false;
	}
	else {
		markers.enableClustering();
		clusteredToggle = true;
	}
}