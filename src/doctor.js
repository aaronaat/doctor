import Doctor from "./service"
import $ from 'jquery';

$(document).ready(function() {

  $('#doctorName').click(function() {
    let search = $('#search').val();
    $('#search').val('');
    $('.showName').text('');
    let doctor = new Doctor();  
    let promise = doctor.searchName(search); 

    promise.then(function(response) {

      let body = JSON.parse(response);

      let patient = (p) => (p == true) ? 'yes' : 'no';
    
      if (body.meta.count == 0) {
      $('.showName').append(`Sorry no doctors found!`);
      } else {

        body.data.forEach(dr => {
      
          $('.showName').append(`
          ${dr.profile.first_name} ${dr.profile.last_name}<br>
          ${dr.practices[0].visit_address.street} ${dr.practices[0].visit_address.zip}<br>Phone: ${dr.practices[0].phones[0].number}<br>Accepting patients: ${patient(dr.practices[0].accepts_new_patients)}<br><br>`);

        });
          
      }

      }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

  $('#doctorSearch').click(function() {
    let search = $('#search').val();
    $('#search').val('');
    $('.showName').text('');
    let doctor = new Doctor();  
    let promise = doctor.search(search); 

    promise.then(function(response) {

      let body = JSON.parse(response);

      let patient = (p) => (p == true) ? 'yes' : 'no';
      
      if (body.meta.count == 0) {
        $('.showName').append(`Sorry no doctors found!`);
        } else {

        body.data.forEach(dr => {
      
          $('.showName').append(`
          ${dr.profile.first_name} ${dr.profile.last_name}<br>
          ${dr.practices[0].visit_address.street} ${dr.practices[0].visit_address.zip}<br>Phone: ${dr.practices[0].phones[0].number}<br>Accepting patients: ${patient(dr.practices[0].accepts_new_patients)}<br><br>`);

        });
      
      }

      }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);

    });
  });

});
