# This might just save you a few minutes
Easy as pie. Just copy the code in snippet.html into the head of any page you need and you'll always be able to see what bootstrap breakpoint you're at.

Super simple but I use it all the time, so thought others may benefit.

In fact you don't even need to go into snippet.html:

```
<div class="position-fixed">
    <span class="badge badge-warning d-inline-block d-sm-none">XS</span>
    <span class="badge badge-warning d-none d-sm-inline-block d-md-none">SM</span>
    <span class="badge badge-warning d-none d-md-inline-block d-lg-none">MD</span>
    <span class="badge badge-warning d-none d-lg-inline-block d-xl-none">LG</span>
    <span class="badge badge-warning d-none d-xl-inline-block">XL</span>
</div>
```
