var vg_1 = "urban_map.vg.json";
vegaEmbed("#urban_pop_map", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "migration_map.vg.json";
vegaEmbed("#imm_pop_map", vg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "pop_pyramid.vg.json";
vegaEmbed("#pop_pyramid", vg_3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);