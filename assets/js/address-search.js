
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
    // $('#address').keyup(function () {
    //     addressSearch();
    // });
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
                        el.full_Address = el.full_Address.replace(searchCriteria, query.toUpperCase());
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
    var $dropdown = $("#address-select");
    $dropdown.empty();
    $dropdown.append($("<option />").val("").text("Please select"));
    $.each(addresses, function() {
        $dropdown.append($("<option />").val(this.address).text(this.address));
    });
}
function clearAddressSelect(){
    var $dropdown = $("#address-select");
    $dropdown.empty();
}