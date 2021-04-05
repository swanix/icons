<figure class="hero-large" style="--hero-image:url(https://source.unsplash.com/g-YsyUUwT9M/1800x600);"></figure>

# Swanix Icons

<section class="grid five-columns">
{{#icons}}
<div class="grid-item">
  <div class="grid-item-body">
    <svg class="icon huge">
      <use href="dist/swanix-icons.svg#{{{name}}}"></use>
    </svg>
    <span>{{{name}}}</span>
  </div>
  <div class="grid-item-footer">
    <button class="button copy" data-clipboard-text="{{{name}}}" aria-label="Copied!">Copy</button>
  </div>
</div>
{{/icons}}
{{^icons}}
No icons
{{/icons}}
</section>