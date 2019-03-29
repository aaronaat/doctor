export default class Doctor {
  searchName (name) {
    return new Promise(function(resolve, reject) {

      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2018-03-01/doctors?location=wa-seattle&name=${name}&user_key=${process.env.exports.apiKey}`;
      
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }

      request.open("GET", url, true);
      request.send();

    });
  }



}
