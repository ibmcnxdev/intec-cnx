////
// @author Tony McGuckin, IBM
// @name Profiles Customization
// @version 0.1
// @date February, 2017
// 
// Copied from samples
//
if (typeof (dojo) != "undefined") {
	var selects = dojo.query("select[id='phone1.label']");
	if (selects.length > 0) {
	  var opts = selects[0].options;
	  opts.length = 0;
	  opts[0] = new Option("NMC / HCPC","NMC / HCPC",true, false);
	} else {
	  console.log('Query failed');
	}
	
	var input = dojo.query("input[id='phone1']");
	if (input.length > 0) {
		var currValue = input[0].value;
    var newSelect = '<select id="phone1" onchange="dataChange(this);" onkeypress="dataChange(this);" name="attribute(phone1)"><option value="NMC / HCPC" selected="">NMC / HCPC</option>'
	  input[0].parentNode.innerHTML = newSelect;
    var select = dojo.query("select[id='phone1']");
    var opts = select[0].options;
    var selected = (currValue === "NMC") ? true : false;
    opts[0] = new Option("NMC", "NMC", true, selected);
    selected = (currValue === "HCPC") ? true : false;
    opts[1] = new Option("HCPC", "HCPC", false, selected);
	} else {
	  console.log('Query failed');
	}
}