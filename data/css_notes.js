const css = {
  "CSS Introduction": [
    "<h2 style='text-align: center;'>Introduction to CSS</h2>",
    "<li>CSS stands for <span style='color:#04aa6d;'>C</span>ascading <span style='color:#04aa6d;'>S</span>tyle <span style='color:#04aa6d;'>S</span>heets.</li>",
    "<li>CSS is a stylesheet language used to describe the presentation of a document written in HTML or XML.</li>",
    "<li>It controls the layout of multiple web pages all at once.</li>",
    "<li>CSS can be added to HTML documents in 3 ways:</li>",
    "<ul><li>Inline - by using the style attribute inside HTML elements.</li>",
    "<li>Internal - by using a &lt;style&gt; element in the &lt;head&gt; section.</li>",
    "<li>External - by using an external CSS file.</li></ul>",
    "<li>The purpose of CSS is to separate the content of a web page from its style and layout, making the content more accessible and the layout more flexible.</li>"
  ],
  "CSS Syntax": [
    "<h2 style='text-align: center;'>CSS Syntax</h2>",
    "<li>A CSS rule set consists of a selector and a declaration block.</li>",
    "<li>The selector points to the HTML element you want to style.</li>",
    "<li>The declaration block contains one or more declarations separated by semicolons.</li>",
    "<li>Each declaration includes a CSS property name and a value, separated by a colon.</li>",
    "<li>Example of a CSS rule:</li>",
    "<code>p { color: red; font-size: 20px; }</code>",
    "<li>In this example, <code>p</code> is the selector, <code>color: red</code> and <code>font-size: 20px</code> are declarations.</li>"
  ],
  "CSS Selectors": [
    "<h2 style='text-align: center;'>CSS Selectors</h2>",
    "<li>CSS selectors are used to 'find' (or select) the HTML elements you want to style.</li>",
    "<li>There are several types of selectors:</li>",
    "<ul><li>Element Selector: selects HTML elements based on the element name.</li>",
    "<li>Id Selector: selects a single, unique element based on its id attribute.</li>",
    "<li>Class Selector: selects elements based on the class attribute.</li>",
    "<li>Universal Selector: selects all HTML elements on the page.</li>",
    "<li>Attribute Selector: selects elements based on an attribute or attribute value.</li></ul>",
    "<li>Examples of selectors:</li>",
    "<ul><li>Element Selector: <code>p {}</code></li>",
    "<li>Id Selector: <code>#uniqueId {}</code></li>",
    "<li>Class Selector: <code>.className {}</code></li>",
    "<li>Universal Selector: <code>* {}</code></li>",
    "<li>Attribute Selector: <code>[type='text'] {}</code></li>",
    `
    <li>Group = apply to both selectors</li>
    <code>selector,selector{
      color : red;
    }</code>
    <li>Child = apply to direct child of left side</li>
    selector > selector{
      color : red;
    }
    <code>   
    selector > selector{
    color : red;
    }</code>
    <li>Descendent =apply to a descendent of left side</li>
    <code>   
    selector  selector{
      color : red;
    }</code>
    <li>Chaining =apply where All selectors are true</li>
    <code>   
    selectorselector{
      color : red;;
    }</code>
    <li>combining combiners</li>
    <code>   
    selector selectorselector{
      font-size : 2em;
    }</code></ul>`
  ],
  "CSS Comments": [
    "<h2 style='text-align: center;'>CSS Comments</h2>",
    "<li>Comments are used to explain the code, and may help when you edit the source code at a later date.</li>",
    "<li>CSS comments are not displayed in the browser, but they can help document your source code.</li>",
    "<li>A CSS comment is placed inside the &lt;style&gt; element, and starts with /* and ends with */:</li>",
  ],
  "CSS Colors": [
    "<h2 style='text-align: center;'>CSS Colors</h2><p>Placeholder text for CSS Colors.</p>"
  ],
  "CSS Backgrounds": [
    "<h2 style='text-align: center;'>CSS Backgrounds</h2><p>Placeholder text for CSS Backgrounds.</p>"
  ],
  "CSS Borders": [
    "<h2 style='text-align: center;'>CSS Borders</h2>",
    "<li>CSS border properties allow you to style the borders of HTML elements by setting the style, width and color. Here's an overview of how each of these properties can be used:</li>",
    "<ol><li>Border Style (<code>'border-style'</code>): This property specifies the line style of the border</li>",
    "<li>Border Width (<code>'border-width'</code>): This property sets the width of the border.</li>",
    "<li>Border Color (<code>'border-color'</code>): This property sets the color of the border.</li></ol>",
    "<li>there are also properties for specifying each of the borders individually (top, right, bottom, and left) for example:</li>",
    "<ol><li>Width (<code>'border-top-style'</code>)</li>",
    "<li>Style (<code>'border-top-style'</code>)</li>",
    "<li>Color (<code>'border-top-color'</code>)</li></ol>",
    "<li>To shorten the code, it is also possible to specify all the individual border properties in one property.</li>",
    "<li>The <code>'border'</code> property is a shorthand property for the following individual border properties</li>",
    "<li>The <code>'border-radius'</code> property is used to add rounded borders to an element</li>",

  ],
  "CSS Margins": [
    "<h2 style='text-align: center;'>CSS Margins</h2>",
    "<li>The CSS margin properties create space around elements, outside of any defined borders. Here’s a breakdown of how each of these properties can be used:</li>",
    "<ol><li>Margin (<code>'margin'</code>): Sets margin for all four sides of an element.</li>",
    "<li>Margin Top (<code>'margin-top'</code>):Sets margin for the top side of an element.</li>",
    "<li>Margin Right (<code>'margin-right'</code>): Sets margin for the right side of an element.</li>",
    "<li>Margin Bottom (<code>'margin-bottom'</code>):Sets margin for the bottom side of an element.</li>",
    "<li>Margin Left (<code>'margin-left'</code>): Sets margin for the left side of an element.</li></ol>",
    "<li>we can also specify margin for individual sides using the margin shorthand property with multiple values:</li>",
    "<ol><li><code>margin: 10px 20px 30px 40px;  ==> 10px top, 20px right, 30px bottom, 40px left</code></li>",
    "<li><code>margin: 10px 20px 30px;  ==> 10px top, 20px left and right, 30px bottom </code></li>",
    "<li><code>margin: 10px 20px;  ==> 10px top and bottom, 20px left and right </code></li></ol>",
    "<li>Syntax: <code>margin: auto;</code></li>",
    "<li>Description: The auto value is typically used in block-level elements to horizontally center them within their containing element. When applied to the left and right margins, it takes up the remaining space equally, effectively centering the element.</li>",
  ],
  "CSS Padding": [
    "<h2 style='text-align: center;'>CSS Padding</h2>",
    "<li>The CSS padding properties create space around an element's content, inside any defined borders. Here’s a breakdown of how each of these properties can be used:</li>",
    "<ol><li>Padding (<code>'padding'</code>): Sets padding for all four sides of an element.</li>",
    "<li>Padding Top (<code>'padding'</code>):Sets padding for the top side of an element.</li>",
    "<li>Padding Right (<code>'padding-right'</code>): Sets padding for the right side of an element.</li>",
    "<li>Padding Bottom (<code>'padding-bottom'</code>):Sets padding for the bottom side of an element.</li>",
    "<li>Padding Left (<code>'padding-left'</code>): Sets padding for the left side of an element.</li></ol>",
    "<li>we can also specify padding for individual sides using the padding shorthand property with multiple values:</li>",
    "<ol><li><code>padding: 10px 20px 30px 40px;  ==> 10px top, 20px right, 30px bottom, 40px left</code></li>",
    "<li><code>padding: 10px 20px 30px;  ==> 10px top, 20px left and right, 30px bottom </code></li>",
    "<li><code>padding: 10px 20px;  ==> 10px top and bottom, 20px left and right </code></li></ol>",
  ],
  "CSS Height/Width": [
    "<h2 style='text-align: center;'>CSS Height/Width</h2>",
    "<li>Description; the <code>'height'</code> propertie Sets the height of an element's content area. This does not include padding, borders, or margins.</li>",
    "<li>Description; the <code>'width'</code> propertie Sets the width of an element's content area. This does not include padding, borders, or margins.</li>",
    "<li>Possible Values:</li>",
    "<ol><li><code>'auto'</code>:Default behavior: The browser calculates the height/width based on the element's content, or as dictated by other CSS properties.</li>",
    "<li><code>'length'</code>:Sets the height/width to a specific length in pixels, ems, rems, centimeters, etc.</li>",
    "<li><code>'%'</code>:Sets the height/width as a percentage of the height/width of the containing block</li>",
    "<li><code>'initial'</code>: Sets the height/width to its default value as defined by the browser.</li>",
    "<li><code>'inherit'</code>: Inherits the height/width from its parent element</li>",
    "<li><code>'fit-content'</code>: is a powerful CSS feature for designing flexible and responsive layouts, offering precise control over element widths based on their content's natural size while still providing an upper limit with the maximum-size parameter.</li>",
    "<li><code>'min-content'</code>:  is used with the width and height properties to size an element based on the minimum size required to fit its content.  </li></ol>",

  ],
  "CSS Box Model": [
    "<h2 style='text-align: center;'>CSS Box Model</h2><p>Placeholder text for CSS Box Model.</p>"
  ],
  "CSS Outline": [
    "<h2 style='text-align: center;'>CSS Outline</h2><p>Placeholder text for CSS Outline.</p>"
  ],
  "CSS Text": [
    "<h2 style='text-align: center;'>CSS Text</h2>",
    "<li>The 'text-align' property is used to define the horizontal alignment of text. It only works with block elements.</li>",
    "<li>A text can be left or right aligned or centered</li>",
    "<li>The direction property in CSS specifies the text direction within a block-level element. It can  be set to various values, such as:</li>",
    "<ol><li><code>'ltr'</code>: Text direction goes from left-to-right. This is default</li>",
    "<li><code>'rtl'</code>: Text direction goes from right-to-left</li></ol>",
    "<li>The <code>text-transform</code> property is used to control the capitalization of text. It can make text appear in uppercase, lowercase, capitalize the first letter of each word, and more. Here are some possible values for the text-transform property:</li>",
    "<ol><li><code>'capitalize'</code>: Transforms the first character of each word to uppercase.</li>",
    "<li><code>'uppercase'</code>uppercase: Transforms all characters to uppercase.</li>",
    "<li><code>'lowercase'</code>: Transforms all characters to lowercase.</li></ol>",
    "<li>There are several properties related to spacing that control how text is displayed. These include properties for managing the space between letters, words, and lines. Here are the properties:</li>",
    "<ol><li><code>'letter-spacing'</code>: Controls the space between characters in a text.</li>",
    "<li><code>'word-spacing'</code>: Controls the space between words in a text.</li>",
    "<li><code>'line-height'</code>: Controls the space between lines of text</li></ol>",
  ],
  "CSS Fonts": [
    "<h2 style='text-align: center;'>CSS Fonts</h2><p>Placeholder text for CSS Fonts.</p>"
  ],
  "CSS Icons": [
    "<h2 style='text-align: center;'>CSS Icons</h2><p>Placeholder text for CSS Icons.</p>"
  ],
  "CSS Links": [
    "<h2 style='text-align: center;'>CSS Links</h2><p>Placeholder text for CSS Links.</p>"
  ],
  "CSS Lists": [
    "<h2 style='text-align: center;'>CSS Lists</h2><p>Placeholder text for CSS Lists.</p>"
  ],
  "CSS Tables": [
    "<h2 style='text-align: center;'>CSS Tables</h2><p>Placeholder text for CSS Tables.</p>"
  ],
  "CSS Display": [
    "<h2 style='text-align: center;'>CSS Display</h2><p>Placeholder text for CSS Display.</p>"
  ],
  "CSS Max-Min-width": [
    "<h2 style='text-align: center;'>CSS Max-Min-width</h2>",
    "<li>Let's delve into the max-width and min-width properties in CSS, which are used to control the maximum and minimum widths of elements.</li>",
    "<li>Max width:</li>",
    "<ol><li><strong>Syntax</strong>: <code>max-width: value;</code></li>",
    "<li><strong>Description</strong>: Sets the maximum width that an element can have.</li>",
    "<li><strong>Usage</strong>: This property is particularly useful in responsive web design to prevent elements from becoming wider than a specified size, ensuring that layouts remain readable and maintainable across different screen sizes.</li></ol>",
    "<li>Min width:</li>",
    "<ol><li><strong>Syntax</strong>: <code>min-width: value;</code></li>",
    "<li><strong>Description</strong>: Sets the minimum width that an element can have.</li>",
    "<li><strong>Usage</strong>:This is useful when you want to ensure that elements have a minimum width to accommodate content or maintain layout consistency.</li></ol>",

  ],  
  "CSS Max-Min-height": [
    "<h2 style='text-align: center;'>CSS Max-Min-height</h2>",
    "<li>Let's delve into the max-height and min-height properties in CSS, which are used to control the maximum and minimum heights of elements.</li>",
    "<li>Max height:</li>",
    "<ol><li><strong>Syntax</strong>: <code>max-height: value;</code></li>",
    "<li><strong>Description</strong>: Sets the maximum height that an element can have.</li>",
    "<li><strong>Usage</strong>:It is commonly used in responsive design to ensure that elements do not exceed a certain height, especially when dealing with dynamic content or different viewport sizes.</li></ol>",
    "<li>Min height:</li>",
    "<ol><li><strong>Syntax</strong>: <code>min-height: value;</code></li>",
    "<li><strong>Description</strong>: Sets the minimum height that an element can have.</li>",
    "<li><strong>Usage</strong>:It is frequently used to prevent elements from becoming too small, especially when there's a need to maintain a minimum height for consistent layout.</li></ol>",
  ],
  "CSS Position": [
    "<h2 style='text-align: center;'>CSS Position</h2><p>Placeholder text for CSS Position.</p>"
  ],
  "CSS Z-index": [
    "<h2 style='text-align: center;'>CSS Z-index</h2><p>Placeholder text for CSS Z-index.</p>"
  ],
  "CSS Overflow": [
    "<h2 style='text-align: center;'>CSS Overflow</h2><p>Placeholder text for CSS Overflow.</p>"
  ],
  "CSS Float": [
    "<h2 style='text-align: center;'>CSS Float</h2><p>Placeholder text for CSS Float.</p>"
  ],
  "CSS Inline-block": [
    "<h2 style='text-align: center;'>CSS Inline-block</h2><p>Placeholder text for CSS Inline-block.</p>"
  ],
  "CSS Align": [
    "<h2 style='text-align: center;'>CSS Align</h2><p>Placeholder text for CSS Align.</p>"
  ],
  "CSS Combinators": [
    "<h2 style='text-align: center;'>CSS Combinators</h2><p>Placeholder text for CSS Combinators.</p>"
  ],
  "CSS Pseudo-class": [
    "<h2 style='text-align: center;'>CSS Pseudo-class</h2><p>Placeholder text for CSS Pseudo-class.</p>"
  ],
  "CSS Pseudo-element": [
    "<h2 style='text-align: center;'>CSS Pseudo-element</h2><p>Placeholder text for CSS Pseudo-element.</p>"
  ],
  "CSS Opacity": [
    "<h2 style='text-align: center;'>CSS Opacity</h2><p>Placeholder text for CSS Opacity.</p>"
  ],
  "CSS Navigation Bar": [
    "<h2 style='text-align: center;'>CSS Navigation Bar</h2><p>Placeholder text for CSS Navigation Bar.</p>"
  ],
  "CSS Dropdowns": [
    "<h2 style='text-align: center;'>CSS Dropdowns</h2><p>Placeholder text for CSS Dropdowns.</p>"
  ],
  "CSS Image Gallery": [
    "<h2 style='text-align: center;'>CSS Image Gallery</h2><p>Placeholder text for CSS Image Gallery.</p>"
  ],
  "CSS Image Sprites": [
    "<h2 style='text-align: center;'>CSS Image Sprites</h2><p>Placeholder text for CSS Image Sprites.</p>"
  ],
  "CSS Attr Selectors": [
    "<h2 style='text-align: center;'>CSS Attr Selectors</h2><p>Placeholder text for CSS Attr Selectors.</p>"
  ],
  "CSS Forms": [
    "<h2 style='text-align: center;'>CSS Forms</h2><p>Placeholder text for CSS Forms.</p>"
  ],
  "CSS Counters": [
    "<h2 style='text-align: center;'>CSS Counters</h2><p>Placeholder text for CSS Counters.</p>"
  ],
  "CSS Website Layout": [
    "<h2 style='text-align: center;'>CSS Website Layout</h2><p>Placeholder text for CSS Website Layout.</p>"
  ],
  "CSS Units": [
    "<h2 style='text-align: center;'>CSS Units</h2><p>Placeholder text for CSS Units.</p>"
  ],
  "CSS Specificity": [
    "<h2 style='text-align: center;'>CSS Specificity</h2><p>Placeholder text for CSS Specificity.</p>"
  ],
  "CSS !important": [
    "<h2 style='text-align: center;'>CSS !important</h2><p>Placeholder text for CSS !important.</p>"
  ],
  "CSS Math Functions": [
    "<h2 style='text-align: center;'>CSS Math Functions</h2><p>Placeholder text for CSS Math Functions.</p>"
  ],
};
