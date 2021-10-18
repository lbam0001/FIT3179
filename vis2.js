var vg_1 = "urban_map.vg.json";
vegaEmbed("#urban_pop_map", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);


var vg_4 = "migration_charts.vg.json";
vegaEmbed("#imm_pop_map", vg_4).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_5 = "birth_charts.vg.json";
vegaEmbed("#birth_charts", vg_5).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);