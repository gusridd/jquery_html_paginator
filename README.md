# jquery_html_paginator
A simple jquery plugin to handle client-side pagination


### Usage

Include jQuery and jquery_html_paginator in yout HTML as follows:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
<script type="text/javascript" src="html_paginator.js"></script>
```

The following example depicts the basic HTML structure for the plugin to work.

```html
<div class="paginable">
  <!-- Pages -->
  <div class="html_paginator_page">Page 1</div>
  <div class="html_paginator_page">Page 2</div>
  <div class="html_paginator_page">Page 3</div>
  <!-- Buttons for pagination -->
  <button class="html_paginator_prev">Prev</button>
  <button class="html_paginator_next">Next</button>
</div>
```

To activate the plugin include:

```js
$('.paginable').htmlPaginator();
```

By default the plugin will hide all pages, but the first and use the onclick event on elements with classes 'html_paginator_prev' and 'html_paginator_next' to handle page scrolling.

### Default values

Default values can be overriden as follows:

```js
$('.paginable').htmlPaginator({
  nextClass: '.html_paginator_next',
  prevClass: '.html_paginator_prev',
  pageClass: '.html_paginator_page',
});
```