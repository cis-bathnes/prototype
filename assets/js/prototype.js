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

	// Shuffle the information submitted along to the end
	var title = getUrlParameter('title');
	$('#title').val(title);
	$('#title-check').text(title);
	var first_name = getUrlParameter('first-name');
	$('#first-name').val(first_name);
	$('#first-name-check').text(first_name);
	var last_name = getUrlParameter('last-name');
	$('#last-name').val(last_name);
	$('#last-name-check').text(last_name);
	var telephone = getUrlParameter('telephone');
	$('#telephone').val(telephone);
	$('#telephone-check').text(telephone);
	var email_address = getUrlParameter('email-address');
	$('#email-address').val(email_address);
	$('#email-address-check').text(email_address);
	var about_you = getUrlParameter('about-you');
	$('#about-you').val(about_you);
	$('#about-you-check').text(about_you.replace(/\+/g,' '));
	var address_select = getUrlParameter('address-select');
	$('#address-select').val(address_select);
	$('#address-select-check').text(address_select.replace(/\+/g,' '));
	var start_day = getUrlParameter('start-day');
	$('#start-day').val(start_day);
	$('#start-day-check').text(start_day);
	var start_month = getUrlParameter('start-month');
	$('#start-month').val(start_month);
	$('#start-month-check').text(start_month);
	var start_year = getUrlParameter('start-year');
	$('#start-year').val(start_year);
	$('#start-year-check').text(start_year);
	var moved_in = getUrlParameter('moved-in');
	$('#moved-in').val(moved_in);
	$('#moved-in-check').text(moved_in);
	var ownership = getUrlParameter('ownership');
	$('#ownership').val(ownership);
	$('#ownership-check').text(ownership);
	var discount = getUrlParameter('discount');
	$('#discount').val(discount);
	$('#discount-check').text(discount);
	var textarea = getUrlParameter('textarea');
	$('#textarea').val(textarea);
	$('#textarea-check').text(textarea);
	var address_leaving_select = getUrlParameter('address-leaving-select');
	$('#address-leaving-select').val(address_leaving_select);
	$('#address-leaving-select-check').text(address_leaving_select.replace(/\+/g,' '));
	var end_day = getUrlParameter('end-day');
	$('#end-day').val(end_day);
	$('#end-day-check').text(end_day);
	var end_month = getUrlParameter('end-month');
	$('#end-month').val(end_month);
	$('#end-month-check').text(end_month);
	var end_year = getUrlParameter('end-year');
	$('#end-year').val(end_year);
	$('#end-year-check').text(end_year);
	var moved_out = getUrlParameter('moved-out');
	$('#moved-out').val(moved_out);
	$('#moved-out-check').text(moved_out);
	var ownership_leaving = getUrlParameter('ownership-leaving');
	$('#ownership-leaving').val(ownership_leaving);
	$('#ownership-leaving-check').text(ownership_leaving);
	var council_tax = getUrlParameter('council-tax');
	$('#council-tax').val(council_tax);
	$('#council-tax-check').text(council_tax);
	var payment_method = getUrlParameter('payment-method');
	$('#payment-method').val(payment_method);
	$('#payment-method-check').text(payment_method);
	var new_payment_method = getUrlParameter('new-payment-method');
	$('#new-payment-method').val(new_payment_method);
	$('#new-payment-method-check').text(new_payment_method.replace(/\+/g,' '));
	var account_name = getUrlParameter('account-name');
	$('#account-name').val(account_name);
	$('#account-name-check').text(account_name);
	var sort_code = getUrlParameter('sort-code');
	$('#sort-code').val(sort_code);
	$('#sort-code-check').text(sort_code);
	var account_number = getUrlParameter('account-number');
	$('#account-number').val(account_number);
	$('#account-number-check').text(account_number);
	var new_payment_date = getUrlParameter('new-payment-date');
	$('#new-payment-date').val(new_payment_date);
	$('#new-payment-date-check').text(new_payment_date);
	var concessionary_travel = getUrlParameter('concessionary-travel');
	$('#concessionary-travel').val(concessionary_travel);
	$('#concessionary-travel-check').text(concessionary_travel);
	var pass_names = getUrlParameter('pass-names');
	$('#pass-names').val(pass_names);
	$('#pass-names-check').text(pass_names);
	var other_info = getUrlParameter('other-info');
	$('#other-info').val(other_info);
	$('#other-info-check').text(other_info);

});