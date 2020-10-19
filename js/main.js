var elements = document.getElementsByTagName('script')

Array.prototype.forEach.call(elements, function(element) {
  if (element.type.indexOf('math/tex') != -1) {
     // Extract math markdown
     var textToRender = element.innerText || element.textContent;

     // Create span for KaTeX
     var katexElement = document.createElement('span');

     // Support inline and display math
     if (element.type.indexOf('mode=display') != -1){
       katexElement.className += "math-display";
       textToRender = '\\displaystyle {' + textToRender + '}';
     } else {
       katexElement.className += "math-inline";
     }

     katex.render(textToRender, katexElement);
     element.parentNode.insertBefore(katexElement, element);
  }
});

console.log('%cHi friend, watcha looking for?', 'font-weight: bold;font-size: 50px;color: red;text-shadow:3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8), 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
