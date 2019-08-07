
jQuery(function($) {
  $('.spoiler .text').hide();
  $(document).on('click', '.spoiler .title', function() {
    $(this).siblings('.text').slideToggle().parent().toggleClass('open');
  });
});
