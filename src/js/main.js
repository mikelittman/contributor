$(function () {
  var $grid = $('#article_panel').masonry({
      itemSelector: '.grid-item',
      columnWidth: 256 + (8*2)
    });

  // layout Masonry after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });
});
