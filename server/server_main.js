Meteor.startup(function () {
    // code to run on server at startup
    /*zones.insert({ name: "airplane", map: airplane});
    zones.insert({ name: "akanon", map: akanon});
    zones.insert({ name: "befallen", map: befallen});
    zones.insert({ name: "blackburrow", map: blackburrow});
    zones.insert({ name: "burningwood", map: burningwood});
   	zones.insert({ name: "butcher", map: butcher});
   	zones.insert({ name: "cabeast", map: cabeast});
   	zones.insert({ name: "cabwest", map: cabwest});
   	zones.insert({ name: "cauldron", map: cauldron});
   	zones.insert({ name: "cazicthule", map: cazicthule});
   	zones.insert({ name: "charasis", map: charasis});
   	zones.insert({ name: "chardok", map: chardok});
   	zones.insert({ name: "citymist", map: citymist});
   	zones.insert({ name: "commons", map: commons});
   	zones.insert({ name: "crushbone", map: crushbone});
   	zones.insert({ name: "dalnir", map: dalnir});
   	zones.insert({ name: "dreadlands", map: dreadlands});
   	zones.insert({ name: "droga", map: droga});
   	zones.insert({ name: "eastkarana", map: eastkarana});
   	zones.insert({ name: "ecommons", map: ecommons});
   	zones.insert({ name: "emeraldjungle", map: emeraldjungle});
   	zones.insert({ name: "erudint", map: erudint});
   	zones.insert({ name: "erudnext", map: erudnext});
   	zones.insert({ name: "erudsxing", map: erudsxing});
   	zones.insert({ name: "everfrost", map: everfrost});
   	zones.insert({ name: "fearplane", map: fearplane});
   	zones.insert({ name: "feerrott", map: feerrott});
   	zones.insert({ name: "felwithea", map: felwithea});
   	zones.insert({ name: "felwitheb", map: felwitheb});
   	zones.insert({ name: "fieldofbone", map: fieldofbone});
   	zones.insert({ name: "firiona", map: firiona});
   	zones.insert({ name: "freporte", map: freporte});
   	zones.insert({ name: "freportn", map: freportn});
   	zones.insert({ name: "freportw", map: freportw});
   	zones.insert({ name: "frontiermtns", map: frontiermtns});
   	zones.insert({ name: "gfaydark", map: gfaydark});
   	zones.insert({ name: "grobb", map: grobb});
   	zones.insert({ name: "growthplane", map: growthplane});
   	zones.insert({ name: "gukbottom", map: gukbottom});
   	zones.insert({ name: "guktop", map: guktop});
   	zones.insert({ name: "halas", map: halas});
   	zones.insert({ name: "hateplane", map: hateplane});
   	zones.insert({ name: "highkeep", map: highkeep});
   	zones.insert({ name: "highpass", map: highpass});
   	zones.insert({ name: "hole", map: hole});
   	zones.insert({ name: "innothule", map: innothule});
   	zones.insert({ name: "kaesora", map: kaesora});
   	zones.insert({ name: "kaladima", map: kaladima});
   	zones.insert({ name: "kaladimb", map: kaladimb});
   	zones.insert({ name: "karnor", map: karnor});
   	zones.insert({ name: "kedge", map: kedge});
   	zones.insert({ name: "kerraridge", map: kerraridge});
   	zones.insert({ name: "kithicor", map: kithicor});
   	zones.insert({ name: "kurn", map: kurn});
   	zones.insert({ name: "lakeofillomen", map: lakeofillomen});
   	zones.insert({ name: "lakerathe", map: lakerathe});
   	zones.insert({ name: "lavastorm", map: lavastorm});
   	zones.insert({ name: "lfaydark", map: lfaydark});
   	zones.insert({ name: "mistmoore", map: mistmoore});
   	zones.insert({ name: "misty", map: misty});
   	zones.insert({ name: "najena", map: najena});
   	zones.insert({ name: "nektulos", map: nektulos});
   	zones.insert({ name: "neriaka", map: neriaka});
   	zones.insert({ name: "neriakb", map: neriakb});
   	zones.insert({ name: "neriakd", map: neriakd});
   	zones.insert({ name: "northkarana", map: northkarana});
   	zones.insert({ name: "nro", map: nro});
   	zones.insert({ name: "nurga", map: nurga});
   	zones.insert({ name: "oasis", map: oasis});
   	zones.insert({ name: "oggok", map: oggok});
   	zones.insert({ name: "oot", map: oot});
   	zones.insert({ name: "overthere", map: overthere});
   	zones.insert({ name: "paineel", map: paineel});
   	zones.insert({ name: "paw", map: paw});
   	zones.insert({ name: "permafrost", map: permafrost});
   	zones.insert({ name: "qcat", map: qcat});
   	zones.insert({ name: "qey2hh", map: qey2hh});
   	zones.insert({ name: "qeynos", map: qeynos});
   	zones.insert({ name: "qeynos2", map: qeynos2});
   	zones.insert({ name: "qeytoqrg", map: qeytoqrg});
   	zones.insert({ name: "qrg", map: qrg});
   	zones.insert({ name: "rathemtn", map: rathemtn});
   	zones.insert({ name: "rivervale", map: rivervale});
   	zones.insert({ name: "runnyeye", map: runnyeye});
   	zones.insert({ name: "sebilis", map: sebilis});
   	zones.insert({ name: "skyfire", map: skyfire});
   	zones.insert({ name: "soldunga", map: soldunga});
   	zones.insert({ name: "soldungb", map: soldungb});
   	zones.insert({ name: "soltemple", map: soltemple});
   	zones.insert({ name: "southkarana", map: southkarana});
   	zones.insert({ name: "sro", map: sro});
   	zones.insert({ name: "steamfont", map: steamfont});
   	zones.insert({ name: "swampofnohope", map: swampofnohope});
   	zones.insert({ name: "timorous", map: timorous});
   	zones.insert({ name: "tox", map: tox});
   	zones.insert({ name: "trakanon", map: trakanon});
   	zones.insert({ name: "unrest", map: unrest});
   	zones.insert({ name: "veeshan", map: veeshan});
   	zones.insert({ name: "warslikswood", map: warslikswood});*/

	
    

    Meteor.publish("zonemaps", function(){
    	return zones.find({});
    });
});


//(-?[0-9]{1,4}(\.[0-9]{4})?)
//{\n\tfirst: { x: $1, y: $2, z: $3 },\n\tsecond: { x: $4, y: $5, z: $6},\n\tcolor: { r: $7, g: $8, b: $9}\n},