function generate(){
	result = "";
	radius = document.getElementById("radius").value;
	points = document.getElementById("points").value;
	
	for(var i=1; i<=points; i++){
		angle = (2 * Math.PI / points) * i
		x = Math.round((radius * Math.sin(angle) + 0.00001) * 1000) / 1000;
		z = Math.round((radius * Math.cos(angle) + 0.00001) * 1000) / 1000;
		result += "~" + x + " ~ ~" + z + "\n";
	}
	
	document.getElementById("coordinates").innerHTML = result;
}