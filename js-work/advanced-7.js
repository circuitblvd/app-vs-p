var player = videojs('preview-player');

player.playlist([{
  name: '160825_09_Grapevines4_1080p',
  description:'160825_09_Grapevines4_1080p',
  duration:7,
  sources: [{ src: 'mp4s/160825_09_Grapevines4_1080p.mp4', type: 'video/mp4' }],
  poster: 'mp4s/img/160825_09_Grapevines4_1080p.png',
  thumbnail: [{
    srcset: 'mp4s/img/160825_09_Grapevines4_1080p.png',
    type: 'image/png',
    media: '(min-width: 400px;)'
  }, {
    src: 'mp4s/img/160825_09_Grapevines4_1080p.png'
  }]
}, {
  name: '170509A_Vietnam_08',
  description:'170509A_Vietnam_08',
  duration:8,
  sources: [{ src: 'mp4s/170509A_Vietnam_08.mp4', type: 'video/mp4' }],
  poster: 'mp4s/img/170509A_Vietnam_08.png',
  thumbnail: [{
    srcset: 'mp4s/img/170509A_Vietnam_08.png',
    type: 'image/png',
    media: '(min-width: 400px;)'
  }, {
    src: 'mp4s/img/170509A_Vietnam_08.png'
  }]
}, {
  name: '170804_A_Lombok_005',
  description:'170804_A_Lombok_005',
  duration:17,
  sources: [{ src: 'mp4s/170804_A_Lombok_005.mp4', type: 'video/mp4' }],
  poster: 'mp4s/img/170804_A_Lombok_005.png',
  thumbnail: [{
    srcset: 'mp4s/img/170804_A_Lombok_005.png',
    type: 'image/png',
    media: '(min-width: 400px;)'
  }, {
    src: 'mp4s/img/170804_A_Lombok_005.png'
  }]
}, {
  name: '170804_B_Lombok_087',
  description:'170804_B_Lombok_087',
  duration:26,
  sources: [{ src: 'mp4s/170804_B_Lombok_087.mp4', type: 'video/mp4' }],
  poster: 'mp4s/img/170804_B_Lombok_087.png',
  thumbnail: [{
    srcset: 'mp4s/img/170804_B_Lombok_087.png',
    type: 'image/png',
    media: '(min-width: 400px;)'
  }, {
    src: 'mp4s/img/170804_B_Lombok_087.png'
  }]
}, {
  name: 'Baking_Cookies_Alt',
  description:'Baking_Cookies_Alt',
  duration:19,
  sources: [{ src: 'mp4s/Baking_Cookies_Alt.mp4', type: 'video/mp4' }],
  poster: 'mp4s/img/Baking_Cookies_Alt.png',
  thumbnail: [{
    srcset: 'mp4s/img/Baking_Cookies_Alt.png',
    type: 'image/png',
    media: '(min-width: 400px;)'
  }, {
    src: 'mp4s/img/Baking_Cookies_Alt.png'
  }]
}, {
  name: 'Barbecue_1',
  description:'Barbecue_1',
  duration:13,
  sources: [{ src: 'mp4s/Barbecue_1.mp4', type: 'video/mp4' }],
  poster: 'mp4s/img/Barbecue_1.png',
  thumbnail: [{
    srcset: 'mp4s/img/Barbecue_1.png',
    type: 'image/png',
    media: '(min-width: 400px;)'
  }, {
    src: 'mp4s/img/Barbecue_1.png'
  }]
}, {
  name: 'Beer_Pour_Videvo',
  description:'Beer_Pour_Videvo',
  duration:79,
  sources: [{ src: 'mp4s/Beer_Pour_Videvo.mp4', type: 'video/mp4' }],
  poster: 'mp4s/img/Beer_Pour_Videvo.png',
  thumbnail: [{
    srcset: 'mp4s/img/Beer_Pour_Videvo.png',
    type: 'image/png',
    media: '(min-width: 400px;)'
  }, {
    src: 'mp4s/img/Beer_Pour_Videvo.png'
  }]
}, {
  name: 'Chocolate',
  description:'Chocolate',
  duration:20,
  sources: [{ src: 'mp4s/Chocolate.mp4', type: 'video/mp4' }],
  poster: 'mp4s/img/Chocolate.png',
  thumbnail: [{
    srcset: 'mp4s/img/Chocolate.png',
    type: 'image/png',
    media: '(min-width: 400px;)'
  }, {
    src: 'mp4s/img/Chocolate.png'
  }]
}, {
  name: 'Coffee_Beans_Wide_Pour',
  description:'Coffee_Beans_Wide_Pour',
  duration:79,
  sources: [{ src: 'mp4s/Coffee_Beans_Wide_Pour.mp4', type: 'video/mp4' }],
  poster: 'mp4s/img/Coffee_Beans_Wide_Pour.png',
  thumbnail: [{
    srcset: 'mp4s/img/Coffee_Beans_Wide_Pour.png',
    type: 'image/png',
    media: '(min-width: 400px;)'
  }, {
    src: 'mp4s/img/Coffee_Beans_Wide_Pour.png'
  }]
}, {
  name: 'wine_pouring_in_slowmotion1',
  description:'wine_pouring_in_slowmotion1',
  duration:54,
  sources: [{ src: 'mp4s/wine_pouring_in_slowmotion1.mp4', type: 'video/mp4' }],
  poster: 'mp4s/img/wine_pouring_in_slowmotion1.png',
  thumbnail: [{
    srcset: 'mp4s/img/wine_pouring_in_slowmotion1.png',
    type: 'image/png',
    media: '(min-width: 400px;)'
  }, {
    src: 'mp4s/img/wine_pouring_in_slowmotion1.png'
  }]
}]);


player.playlist.autoadvance(0.5);
player.playlist.repeat(true);

// Initialize the playlist-ui plugin with no option (i.e. the defaults).
player.playlistUi();

