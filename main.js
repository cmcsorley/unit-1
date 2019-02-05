/* Javascript by Catherine McSorley, 2019 */
//initialize function called when the script loads as detailed at the bottom
function initialize() {
    cities();
}

//function to create a table with cities and their populations
function cities(){
	//define two arrays for cities and population
	var cityPop = [
		{
            city: 'Glasgow',
            population: 598830
        },
        {
            city: 'Edinburgh',
            population: 482005
        },
        {
            city: 'Paris',
            population: 2211000
        },
        {
            city: 'Amsterdam',
            population: 821752
        }
	];

	//append the table element to the div
	$("#mydiv").append("<table>");

	//append a header row to the table
	$("table").append("<tr>");
	
	//add the "City" and "Population" columns to the header row
	$("tr").append("<th>City</th><th>Population</th>");
	
	//loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };
    //calls the function that adds the City Size column
    addColumns(cityPop);
    //calls the function that adds the clickable pop-up and the mouseover random colors
    addEvents();
};

function addColumns(cityPop){
    
    $('tr').each(function(i){
        
        //adds the label to the first row
    	if (i == 0){
            //correct spelling of append
    		$(this).append('<th>City Size</th>');
        //adds the appropriate size to each city row
    	} else {
            //this function sets the city size with small (<100,000), medium (<500,000), or large cities
    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};
            //added a > to debug
            //this adds the city size to the appropriate row
    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};

function addEvents(){
    //changes the color of the text to a random colo
	$('table').mouseover(function(){
		
		var color = "rgb(";

		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);
            //random was a number and it was being entered a sa string here, debugged
			color += random;
            //this sets up an RGB color from the random numbers
			if (i<2){
				color += ",";
			
			} else {
				color += ")";
            }
            //added bracket above to debug
		};
        //changes the color of this table in the CSS file
		$(this).css('color', color);
	});

	function clickme(){

		alert('Hey, you clicked me!');
	};
    //when the table is clicked the clickme function outlined above operates and a pop up appears
	$('table').on('click', clickme);
};

//call the initialize function when the document has loaded
$(document).ready(initialize);