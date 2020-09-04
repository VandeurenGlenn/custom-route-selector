# &lt;custom-route-selector&gt;

> A navigating selector which listens for hashchange events & is designed to work with custom-route-pages



## example
```html
...
<custom-route-selector hash-bang>
  
  <span url="https://...." data-route="info"></span>
  
  <span hash="home" data-route="home"></span>
  <!-- or
  <span data-route="home"></span> -->
  
</custom-route-selector>
...
```

## API

### mixins
 - [custom-selector-mixin](https://github.com/VandeurenGlenn/custom-select-mixins/blob/master/src/selector-mixin.js)


### click()
dispatches 'route-selected' event