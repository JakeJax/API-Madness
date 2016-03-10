function main() {
  var API_KEY = '88e61fd35bf9fd7a61c0dc0b596410f3';

  $.ajax({
    url: 'https://api.flickr.com/services/rest/',
    data: {
      method: 'flickr.photos.search',
      format: 'json',
      api_key: API_KEY,
      text: 'lighthouse',
      nojsoncallback: 1
    },
    method: 'GET'
  })
  .then(z)
    
  .fail(function(jqXHR, error) {
    console.error(jqXHR.responseText);
  });
}

$(document).ready(main);


function z (data) {  
  var currentIndex = 0
  var indivPhotos = data.photos.photo.slice(0,20)
  
  function changePhoto () {
    var photo = indivPhotos[currentIndex]
    var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg';
    $('.picHolder').replaceWith('<img class="picHolder" src="' + url + '"/>');
    currentIndex++
  }
  changePhoto()
  setInterval(function() {
    changePhoto();
  },3000);
}



// https://api.flickr.com/services/rest/
// ?method=flickr.photos.search
// &api_key=d52f65b6a7c1376da515bfe3d1a4d7a8
// &text=lighthouse
// &format=json
// &nojsoncallback=1
// &auth_token=72157665103048360-526e42ea463fb48d
// &api_sig=64c730b2230d0a595ebd44f09a6245e1


// function z (data) {  
//     data.photos.photo.slice(0,20).forEach(photo => {
//       var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg';
//       $('.picHolder').append('<img src="' + url + '"/>');
//       var currentIndex = 0
//       photo.
//     }