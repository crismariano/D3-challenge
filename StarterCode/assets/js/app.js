// @TODO: YOUR CODE HERE!

// Step 1: Set Up the chart

var svgWidth = 960;
var svgHeight = 500;

var margin = {
    top: 30,
    right: 30,
    bottom: 30,
    left: 30
}

var chartWidth = svgWidth - margin.left - margin.right;
var chartHeight = svgHeight - margin.top - margin.bottom;

// Step 2 Create an SVG wrapper,
// append and SVG group that will hold the chart,
// and shift the latter by left and top margins.

var svg = d3.select("#scatter")
            .append("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight)

var chartGroup = svg.append("g")
                .attr("transform", `translate(${margin.left}, ${margin.right})`)


// Step 3 Import data from csv file                
// Use D3 to pull data from data.csv file
d3.csv("assets/data/data.csv").then(function(journalData) {
    console.log(journalData);

    // Step 4: Parse the data
    // Format the data and convert to numerical and data
    // Create a function to parse data
    // Use unary + operator

    journalData.forEach(function(data) {
        data.poverty = +data.poverty;
        data.age = +data.age;
        data.healthcare = +data.healthcare;
        data.smokes = +data.smokes;
    });

    // Step 5: Create the scales for the chart

    var xPovertyScale = d3.scaleLinear()
        .domain(d3.max(journalData, d => d.poverty))
        .range([0, chartWidth]);

    var yHealthScale = d3.scaleLinear()
        .domain(d3.max(journalData, d => d.healthcare))
        .range([chartHeight, 0]);

    // Step 6: Create the axes

    var bottomAxis = d3.axisBottom(xPovertyScale);
    var leftAxis = d3.axisLeft(yHealthScale);

    // Step 7: Append the axes to the chartGroup

    chartGroup.append("g")
        .attr("transform", `translate(0, ${svgHeight})`)
        .call(bottomAxis)

    chartGroup.append("g").call(leftAxis);


})




    
    



