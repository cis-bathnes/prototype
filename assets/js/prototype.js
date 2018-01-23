$(function() {

	showFirstPerson();

	/* functions */

	function showHideMenu(){
		var element = document.getElementById("navigation-primary");

		if (element.classList) {
			element.classList.toggle("navigation-primary--active");
		} else {
			// For IE9
			var classes = element.className.split(" ");
			var i = classes.indexOf("navigation-primary--active");

			if (i >= 0)
			classes.splice(i, 1);
			else
			classes.push("navigation-primary--active");
			element.className = classes.join(" ");
		}
	}

	$('#js-header-toggle').click(function(event) {
		showHideMenu();
	});

	function getUrlParameter(sParam) {
		var sPageURL = decodeURIComponent(window.location.search.substring(1)),
			sURLVariables = sPageURL.split('&'),
			sParameterName,
			i;

		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');

			if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined ? true : sParameterName[1];
			}
		}
	};

	// Adds the persons completing the form to the occupier list
	function showFirstPerson(){
		var title = getUrlParameter('title');
		var first_name = getUrlParameter('first-name');
		var last_name = getUrlParameter('last-name');
		$('#occupier1-title').val(title);
		$('#occupier1-first-name').val(first_name);
		$('#occupier1-last-name').val(last_name);
	}

	// function to add an occupier to the occupier list
	$('#add-occupier').click(function() {
		var count = $('#occupier-list .occupier').length + 1;
		$('<div class="occupier grid-row" id="occupier'+count+'"> \
			<div class="column-one-quarter"> \
				<label class="form-label" for="occupier'+count+'-title">Title</label> \
				<select class="form-control" name="occupier'+count+'-title" id="occupier'+count+'-title"> \
					<option value="">Select an Item</option> \
					<option value="Mr">Mr</option> \
					<option value="Mrs">Mrs</option> \
					<option value="Ms">Ms</option> \
					<option value="Miss">Miss</option> \
					<option value="Colonel">Colonel</option> \
					<option value="Councillor">Councillor</option> \
					<option value="Dr">Dr</option> \
					<option value="General">General</option> \
					<option value="Professor">Professor</option> \
					<option value="Reverend">Reverend</option> \
					<option value="Sir">Sir</option> \
					<option value="Baroness">Baroness</option> \
					<option value="Lord">Lord</option> \
					<option value="Lady">Lady</option> \
					<option value="Wing Commander">Wing Commander</option> \
				</select> \
			</div> \
			<div class="column-one-quarter"> \
				<label class="form-label" for="occupier'+count+'-first-name">First name</label> \
				<input class="form-control" id="occupier'+count+'-first-name" type="text" name="occupier'+count+'-first-name"> \
			</div> \
			<div class="column-one-quarter"> \
				<label class="form-label" for="occupier'+count+'-last-name">Last name</label> \
				<input class="form-control" id="occupier'+count+'-last-name" type="text" name="occupier'+count+'-last-name"> \
			</div> \
			<div class="column-one-quarter"> \
				<label class="form-label" for="occupier'+count+'-relationship">Relationship to you</label> \
				<input class="form-control" id="occupier'+count+'-relationship" type="text" name="occupier'+count+'-relationship"> \
			</div> \
		</div>').insertBefore(this);
	});

	// function to add a junior occupier to the occupier list
	$('#add-teen-occupier').click(function() {
		var count = $('#teen-occupier-list .occupier').length + 1;
		$('<div class="occupier grid-row" id="teen-occupier'+count+'"> \
			<div class="column-one-quarter"> \
				<label class="form-label" for="teen-occupier'+count+'-title">Title</label> \
				<select class="form-control" name="teen-occupier'+count+'-title" id="teen-occupier'+count+'-title"> \
					<option value="">Select an Item</option> \
					<option value="Mr">Mr</option> \
					<option value="Mrs">Mrs</option> \
					<option value="Ms">Ms</option> \
					<option value="Miss">Miss</option> \
					<option value="Colonel">Colonel</option> \
					<option value="Councillor">Councillor</option> \
					<option value="Dr">Dr</option> \
					<option value="General">General</option> \
					<option value="Professor">Professor</option> \
					<option value="Reverend">Reverend</option> \
					<option value="Sir">Sir</option> \
					<option value="Baroness">Baroness</option> \
					<option value="Lord">Lord</option> \
					<option value="Lady">Lady</option> \
					<option value="Wing Commander">Wing Commander</option> \
				</select> \
			</div> \
			<div class="column-one-quarter"> \
				<label class="form-label" for="teen-occupier'+count+'-first-name">First name</label> \
				<input class="form-control" id="teen-occupier'+count+'-first-name" type="text" name="teen-occupier'+count+'-first-name"> \
			</div> \
			<div class="column-one-quarter"> \
				<label class="form-label" for="teen-occupier'+count+'-last-name">Last name</label> \
				<input class="form-control" id="teen-occupier'+count+'-last-name" type="text" name="teen-occupier'+count+'-last-name"> \
			</div> \
			<div class="column-one-quarter"> \
				<label class="form-label" for="teen-occupier'+count+'-relationship">Relationship to you</label> \
				<input class="form-control" id="teen-occupier'+count+'-relationship" type="text" name="teen-occupier'+count+'-relationship"> \
			</div> \
		</div>').insertBefore(this);
	});

	// function to add an rental occupier to the occupier list
	$('#add-rental-occupier').click(function() {
		var count = $('#rental-occupier-list .occupier').length + 1;
		$('<div class="occupier grid-row" id="rental-occupier'+count+'"> \
			<div class="column-one-quarter"> \
				<label class="form-label" for="rental-occupier'+count+'-title">Title</label> \
				<select class="form-control" name="rental-occupier'+count+'-title" id="rental-occupier'+count+'-title"> \
					<option value="">Select an Item</option> \
					<option value="Mr">Mr</option> \
					<option value="Mrs">Mrs</option> \
					<option value="Ms">Ms</option> \
					<option value="Miss">Miss</option> \
					<option value="Colonel">Colonel</option> \
					<option value="Councillor">Councillor</option> \
					<option value="Dr">Dr</option> \
					<option value="General">General</option> \
					<option value="Professor">Professor</option> \
					<option value="Reverend">Reverend</option> \
					<option value="Sir">Sir</option> \
					<option value="Baroness">Baroness</option> \
					<option value="Lord">Lord</option> \
					<option value="Lady">Lady</option> \
					<option value="Wing Commander">Wing Commander</option> \
				</select> \
			</div> \
			<div class="column-one-quarter"> \
				<label class="form-label" for="rental-occupier'+count+'-first-name">First name</label> \
				<input class="form-control" id="rental-occupier'+count+'-first-name" type="text" name="rental-occupier'+count+'-first-name"> \
			</div> \
			<div class="column-one-quarter"> \
				<label class="form-label" for="rental-occupier'+count+'-last-name">Last name</label> \
				<input class="form-control" id="rental-occupier'+count+'-last-name" type="text" name="rental-occupier'+count+'-last-name"> \
			</div> \
		</div>').insertBefore(this);
	});

	// remove all required, for dev only
	// $('input').removeAttr('required');​​​​​
});