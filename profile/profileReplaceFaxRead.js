////
// @author Paul Withers, Intec
// @name Profiles Customization
// @version 1.0
// @date Sept 2019
// 
// Copied from samples
//
if (typeof (dojo) != "undefined") {
    console.log("Starting...");

    // Change fax number label
	let faxNo = dojo.query("span[data-phone-type='fax']");
	if (faxNo.length > 0) {
        let table = faxNo[0].parentNode.parentNode.parentNode;
        let th = table.getElementsByTagName;
        if (th.length > 0) {
            th[0].innerHTML = "NMC / HCPC";
        } else {
            console.log('Table header not found');
        }
	} else {
	  console.log('Query failed');
	}
    
}