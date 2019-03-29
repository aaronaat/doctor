import Doctor from "./service"
import $ from 'jquery';

$(document).ready(function() {

  $('#doctorName').click(function() {
    let search = $('#search').val();
    $('#search').val("");

    let doctor = new Doctor();  
    let promise = doctor.searchName(search); 

    promise.then(function(response) {

      let body = JSON.parse(response);

      $('.showName').append(`${body.data[0].profile.first_name}`);
      }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
