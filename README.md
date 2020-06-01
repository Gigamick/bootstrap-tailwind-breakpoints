# Always know what break point / screen size you're in
Supremely simple but quite useful.

Just copy the code below into the body of any pages you're working on and you'll always know what break point you're currently working in.

```
<div class="position-fixed" style="z-index: 9999999">
    <span class="badge badge-warning d-inline-block d-sm-none">XS</span>
    <span class="badge badge-warning d-none d-sm-inline-block d-md-none">SM</span>
    <span class="badge badge-warning d-none d-md-inline-block d-lg-none">MD</span>
    <span class="badge badge-warning d-none d-lg-inline-block d-xl-none">LG</span>
    <span class="badge badge-warning d-none d-xl-inline-block">XL</span>
</div>
```
