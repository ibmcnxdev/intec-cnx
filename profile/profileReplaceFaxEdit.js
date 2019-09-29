////
// @author Paul Withers, Intec
// @name Profiles Customization
// @version 1.0
// @date Sept 2019
// 
// Copied from samples
//
if (typeof (dojo) != "undefined") {

    // Change fax number label
	var faxNo = dojo.query("label[for='faxNumber']");
	if (faxNo.length > 0) {
	  faxNo[0].innerHTML = "NMC / HCPC";
	} else {
	  console.log('Query failed');
	}
    
    // Get the "Fax Number" input
	var input = dojo.query("input[id='faxNumber']");
	if (input.length > 0) {
        // Get the value, before we replace the HTML
        var currValue = input[0].value;
        // Replace the input with a select
        var newSelect = '<select id="faxNumber" onchange="dataChange(this);" onkeypress="dataChange(this);" name="attribute(faxNumber)"><option value="NMC" selected="">NMC</option><option value="HCPC">HCPC</option></select>'
	    input[0].parentNode.innerHTML = newSelect;
        var select = dojo.query("select[id='faxNumber']");
        // Now we need to put the value back. So get the options and set them to true / false
        var opts = select[0].options;
        var selected = (currValue === "NMC") ? true : false;
        opts[0] = new Option("NMC", "NMC", true, selected);
        selected = (currValue === "HCPC") ? true : false;
        opts[1] = new Option("HCPC", "HCPC", false, selected);
	} else {
	  console.log('Query failed');
	}
}