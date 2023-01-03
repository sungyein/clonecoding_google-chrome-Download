$(function(){
  /* Scroll Change Download */
  $(window).scroll(function(){
    if($(window).scrollTop() > 500) {
      $('.download').addClass('active')
    }
    else {
      $('.download').removeClass('active')
    }
  })

  /* Sitemap Accordion */
  $('.link-item-title').click(function(){
    $(this).next().slideToggle()
    $(this).parent().siblings().children('.link-item-content').slideUp()

    $(this).addClass('active')
    $(this).parent().siblings().children('.link-item-title').removeClass('active')
  })
})