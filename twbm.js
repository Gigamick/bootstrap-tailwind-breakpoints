 var body = document.body;
    var node = document.createElement("DIV");
    node.classList.add("fixed", "z-50","text-xs", "font-bold", "text-black", "p-2");
    var html = '<span class="sm:hidden rounded px-1 bg-yellow-400 p-1">XS</span>\n' +
        '    <span class="hidden sm:inline-block md:hidden rounded px-1 bg-yellow-400">SM</span>\n' +
        '    <span class="hidden sm:hidden md:inline-block lg:hidden rounded px-1 bg-yellow-400">MD</span>\n' +
        '    <span class="hidden lg:inline-block xl:hidden rounded px-1 bg-yellow-400">LG</span>\n' +
        '    <span class="hidden xl:inline-block rounded px-1 bg-yellow-400">XL</span>';
    node.innerHTML = html;
    body.insertAdjacentHTML("afterbegin", node.outerHTML);
