Papa.parse("users100.csv", {
	download: true,
    complete: function(results) {
        console.log("Finished:", results.data);
    }
});

