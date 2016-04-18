"use strict";

/**

Basic HTML structure

.html_paginator_page
.html_paginator_next
.html_paginator_prev

**/
(function ( $ ) {

  $.fn.htmlPaginator = function htmlPaginator(options){

    var settings = $.extend({
            // Default setting values.
            nextClass: '.html_paginator_next',
            prevClass: '.html_paginator_prev',
            pageClass: '.html_paginator_page',
        }, options );


    return this.each(function(){

      var $paginator = $(this);

      var $next_triggers = $paginator.find(settings.nextClass);
      var $prev_triggers = $paginator.find(settings.prevClass);

      if($next_triggers.size() === 0){
        console.error("The following html_paginator element does not have an element with " + settings.nextClass);
        console.error($paginator);
      }

      if($prev_triggers.size() === 0){
        console.error("The following html_paginator element does not have an element with " + settings.prevClass);
        console.error($paginator);
      }

      var page_divs = $paginator.find(settings.pageClass);
      var shown_index = 0;
      var total_pages = page_divs.size();

      function showRespective(){
        // Hide all elements
        page_divs.map(function(){ $(this).hide() });
        // Then show
        $(page_divs[shown_index]).show();
      }

      function nextPage(e){
        e.preventDefault();
        shown_index = (shown_index + 1) % total_pages;
        showRespective();
      }

      function prevPage(e){
        e.preventDefault();
        shown_index = (shown_index + (total_pages -1) ) % total_pages;
        showRespective();
      }

      $next_triggers.on('click', nextPage);
      $prev_triggers.on('click', prevPage);

      showRespective();

      // For chaining
      return this;
    });
  }
}( jQuery ));