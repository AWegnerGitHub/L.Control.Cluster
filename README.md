This adds a small map control to a [Leaflet](http://leafletjs.com/) map. This control will toggle between clustered and unclustered pins.

This requires the [MarkerCluster](https://github.com/Leaflet/Leaflet.markercluster) plugin and the [MarkerCluster.Freezable](https://github.com/ghybs/Leaflet.MarkerCluster.Freezable) sub-plugin. 

The icon provides in the example is from [Icons8](https://icons8.com), but is replaceable by overriding the `container.style.backgroundImage` option in `L.Control.Cluster`

---

## Usage

Add the control to your map by including the `L.Control.Cluster.js` file

    <script src="L.Control.Cluster.js"></script>
	
Then add the control to your map object

    map.addControl(new L.Control.Cluster())
	
By default, this will be added to the upper right of your map. If you have a lot of pins, the process of clustering and declustering may take several seconds.

---

## Example

You can view the an example of this plugin, based on MarkerCluster's "Real World Example", [here](http://awegnergithub.github.io/L.Control.Cluster/examples/example.html)