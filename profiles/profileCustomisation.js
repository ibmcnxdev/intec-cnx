////
// @author Tony McGuckin, IBM
// @name Profiles Customization
// @version 0.1
// @date February, 2017
// 
// Copied from samples
//
if (typeof (dojo) != "undefined") {
	dojo.place(
		"<link rel=\"stylesheet\" type=\"text/css\" href=\"/files/customizer/samples/profiles/profilesCustomization.css?repoName=customizer\"></link>",
		dojo.doc.head,
		"last"
	);

	var labels = dojo.query("label[for='faxNumber']");
	alert(labels.length > 0);
	if (labels.length > 0) {
	  var row = labels[0].parentNode.parentNode;
	  row.style.display = "none";
	} else {
	  console.log('Query failed');
	}
	
	var selects = dojo.query("select[id='phone1.label']");
	if (selects.length > 0) {
	  var opts = selects[0].options;
	  opts.length = 0;
	  opts[0] = new Option("PS Team","PS Team",true, false);
	  opts[1] = new Option("Sales","Sales",false, false);
	  opts[2] = new Option("Finance / HR","FinHR",false, false);
	} else {
	  console.log('Query failed');
	}
	
	for (var i = 2; i < 4; i++) {
	  var phoneElems = dojo.query("select[id='phone" + i + ".label']");
	  if (phoneElems.length > 0) {
		var row = phoneElems[0].parentNode.parentNode;
		row.style.display = "none";
	  } else {
		console.log('Query failed');
	  }
	}
}