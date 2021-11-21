$('#campsite').on('change', 
  function() {
    var selectedCampsite = $(this).val();
	if (selectedCampsite == 1) {
		document.getElementById("camp-spot1").style.display  = "inline-block";
		document.getElementById("camp-spot2").style.display  = "none";
		document.getElementById("camp-spot3").style.display  = "none";
		document.getElementById("camp-spot4").style.display  = "none";
	}
	else if (selectedCampsite == 2) {
		document.getElementById("camp-spot1").style.display  = "none";
		document.getElementById("camp-spot2").style.display  = "inline-block";//code
		document.getElementById("camp-spot3").style.display  = "none";
		document.getElementById("camp-spot4").style.display  = "none";
	}
	else if (selectedCampsite == 3){
		document.getElementById("camp-spot1").style.display  = "none";
		document.getElementById("camp-spot2").style.display  = "none";
		document.getElementById("camp-spot3").style.display  = "inline-block";
		document.getElementById("camp-spot4").style.display  = "none";
	}
	else if (selectedCampsite == 4) {
		document.getElementById("camp-spot1").style.display  = "none";
		document.getElementById("camp-spot2").style.display  = "none";
		document.getElementById("camp-spot3").style.display  = "none";
		document.getElementById("camp-spot4").style.display  = "inline-block";
	}
	else{
		//null
	}
  }
);

$('#camp-spot1-choices').on('change', 
  function() {
    var selectedCampspot = $(this).val();
	if (selectedCampspot == 1) {
		document.getElementById("camp-spot1-choices-1").style.display  = "inline-block";
		document.getElementById("camp-spot1-choices-2").style.display  = "none";
	}
	else if (selectedCampspot == 2) {
		document.getElementById("camp-spot1-choices-1").style.display  = "none";
		document.getElementById("camp-spot1-choices-2").style.display  = "inline-block";
	}
	else if (selectedCampspot == 3){
		//null
	}
	else if (selectedCampspot == 4) {
		//null
	}
	else{
		document.getElementById("camp-spot1-choices-1").style.display  = "none";
		document.getElementById("camp-spot1-choices-2").style.display  = "none";
	}
  }
);

$('#camp-spot2-choices').on('change', 
  function() {
    var selectedCampspot = $(this).val();
	if (selectedCampspot == 1) {
		document.getElementById("camp-spot2-choices-1").style.display  = "inline-block";
	}
	else if (selectedCampspot == 2) {
		//null
	}
	else if (selectedCampspot == 3){
		//null
	}
	else if (selectedCampspot == 4) {
		//null
	}
	else{
		document.getElementById("camp-spot2-choices-1").style.display  = "inline-block";
	}
  }
);

$('#camp-spot3-choices').on('change', 
  function() {
    var selectedCampspot = $(this).val();
	if (selectedCampspot == 1) {
		document.getElementById("camp-spot3-choices-1").style.display  = "inline-block";
	}
	else if (selectedCampspot == 2) {
		//null
	}
	else if (selectedCampspot == 3){
		//null
	}
	else if (selectedCampspot == 4) {
		//null
	}
	else{
		document.getElementById("camp-spot3-choices-1").style.display  = "inline-block";
	}
  }
);

$('#camp-spot4-choices').on('change', 
  function() {
    var selectedCampspot = $(this).val();
	if (selectedCampspot == 1) {
		document.getElementById("camp-spot4-choices-1").style.display  = "inline-block";
	}
	else if (selectedCampspot == 2) {
		//null
	}
	else if (selectedCampspot == 3){
		//null
	}
	else if (selectedCampspot == 4) {
		//null
	}
	else{
		document.getElementById("camp-spot4-choices-1").style.display  = "none";
	}
  }
);