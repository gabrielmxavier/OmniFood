$(document).ready(function() {
    
    /*  FLOATING MENU   */
    
    $('.js--section-features').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '15%'
    })


    /*   SCROLLING BUTTONS    */

    $('.js--scroll-to-plan').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });



    /*    SCROLLING NAVIGATION    */


    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });
      

      /*     ANIMATIONS ON SCROLL     */


      $('.js--wp-1').waypoint(function(direction) {
          $('.js--wp-1').addClass('animated zoomIn');
      }, {
          offset: '70%'
      });
      
      $('.js--wp-2').waypoint(function(direction) {
          $('.js--wp-2').addClass('animated fadeInUp')
      }, {
          offset: '50%'
      });


      $('.js--wp-3').waypoint(function(direction) {
          $('.js--wp-3').addClass('animated zoomIn')
      }, {
          offset: '50%'
      });

      $('.js--wp-4').waypoint(function(direction) {
          $('.js--wp-4').addClass('animated fadeInLeft')
      }, {
          offset: '50%'
      });

      $('.js--wp-5').waypoint(function(direction) {
          $('.js--wp-5').addClass('animated fadeInUp')
      }, {
          offset: '50%'
      });

      $('.js--wp-6').waypoint(function(direction) {
          $('.js--wp-6').addClass('animated fadeInRight')
      }, {
          offset: '50%'
      })


      /** MOBILE MENU **/

      $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon');
        
        nav.slideToggle(200);

    
    
    
    });  
            
        

});