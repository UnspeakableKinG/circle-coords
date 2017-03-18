<head>
	<title>Circle Coordinates</title>
	<script src="circle_coords.js"></script>
</head>
<body>
	<p>Number of points: <input type="number" id="points" min="1" value="1"/></p>
	<p>Radius size: <input type="number" id="radius" min="1" value="1"/></p>
	<p><input type="button" value="Generate Coordinates" onclick="generate()"></p>
	<textarea readonly id="coordinates" cols="30" rows="20"></textarea>
</body>
