
//Address Search
var AddressOpts = {
    url: "https://www.bathnes.gov.uk/webapi/api/AddressesAPI/v2/search/",
    resultSize: 50,
    minChars: 3,
    useCache: "true",
    successCallback: buildAddressSelect
};

$(document).ready(function () {
    $('#address').on('keyup search', function () {
        addressSearch();
    });
    $('select#address-select').on('change', function () {
        var formattedAddr = '';
        var addr = $(this).val();
        if (addr != '') {
            var arr = addr.split('|');
            var arr2 = [];
            for (var i =0; i < arr.length; i++) {
                if (arr[i] != '') {
                    arr2[arr2.length] = arr[i];
                }
            }
            formattedAddr = arr2.join(',<br>');
        }
        $('#address-result').html(formattedAddr);
    });
});
function addressSearch() {
    var query = $('#address').val();
    var searchCriteria = query.toUpperCase().replace(/[^\w\s]|_/g, "").trim();
    if (query.length >= AddressOpts.minChars) {
        $.ajax({
            type: "GET",
            url: AddressOpts.url + searchCriteria + "/" + AddressOpts.resultSize + "/" + AddressOpts.useCache,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response, textStatus, jqXhr) {
                if (typeof (response) !== "undefined") {
                    var addresses = [];
                    $.each(response, function (index, el) {
                        el.full_Address = el.full_Address.toUpperCase();
                        el.payment_Address = el.payment_Address.toUpperCase();
                        addresses.push({ id: el.uprn + '_' + el.easting + '_' + el.northing + '_' + el.full_Address + '_' + el.payment_Address + '_' + el.ward, address: el.full_Address, search: el.full_Address });
                    });

                    if (AddressOpts.successCallback) {
                        AddressOpts.successCallback(addresses);
                    }
                } else {
                    // show address error?
                }
            }
        });
    } else {
        clearAddressSelect();
    }
}

function buildAddressSelect(addresses) {
    clearAddressSelect();
    var $dropdown = $("select#address-select");
    // $dropdown.empty();
    $dropdown.append($("<option />").val("").text("Please select"));
    $.each(addresses, function () {
        $dropdown.append($("<option />").val(this.id.split('_')[4]).text(this.address));
    });
}

function clearAddressSelect(){
    var $dropdown = $("select#address-select");
    $dropdown.empty();
    $('#address-result').text('');
}