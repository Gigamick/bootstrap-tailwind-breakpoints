# Always know your screen size
Supremely simple but quite useful. Drag your browser in and out to see it working.

Just copy the code below into the body of any pages you're working on and you'll always know what break point / screen size you're currently working in.

BOOTSTRAP

```
<div class="position-fixed" style="z-index: 9999999">
    <span class="badge badge-warning d-inline-block d-sm-none">XS</span>
    <span class="badge badge-warning d-none d-sm-inline-block d-md-none">SM</span>
    <span class="badge badge-warning d-none d-md-inline-block d-lg-none">MD</span>
    <span class="badge badge-warning d-none d-lg-inline-block d-xl-none">LG</span>
    <span class="badge badge-warning d-none d-xl-inline-block">XL</span>
</div>
```

TAILWIND

```
<div class="fixed z-50 text-xs font-bold text-black p-2">
    <span class="sm:hidden rounded px-1 bg-yellow-400 p-1">XS</span>
    <span class="hidden sm:inline-block md:hidden rounded px-1 bg-yellow-400">SM</span>
    <span class="hidden sm:hidden md:inline-block lg:hidden rounded px-1 bg-yellow-400">MD</span>
    <span class="hidden lg:inline-block xl:hidden rounded px-1 bg-yellow-400">LG</span>
    <span class="hidden xl:inline-block rounded px-1 bg-yellow-400">XL</span>
</div>
```
