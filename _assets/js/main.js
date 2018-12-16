//= require vendor/jquery-3.2.1.min

/* masonry */
//= require vendor/masonry.pkgd.min
//= require vendor/imagesloaded.pkgd.min

/* loading */
//= require pace.min

/* global header */
//= require stickyheader

var $grid = $('.grid').imagesLoaded( function() {
  // init Masonry after all images have loaded
  $grid.masonry({
    itemSelector: '.grid-item',
    horizontalOrder: true,
    gutter: 12
  });
});
