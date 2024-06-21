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
    "<li>The purpose of CSS is to separate the content of a web page from its style and layout, making the content more accessible and the layout more flexible.</li>",
  ],
  "CSS Syntax": [
    "<h2 style='text-align: center;'>CSS Syntax</h2>",
    "<li>A CSS rule set consists of a selector and a declaration block.</li>",
    "<li>The selector points to the HTML element you want to style.</li>",
    "<li>The declaration block contains one or more declarations separated by semicolons.</li>",
    "<li>Each declaration includes a CSS property name and a value, separated by a colon.</li>",
    "<li>Example of a CSS rule:</li>",
    "<code>p { color: red; font-size: 20px; }</code>",
    "<li>In this example, <code>p</code> is the selector, <code>color: red</code> and <code>font-size: 20px</code> are declarations.</li>",
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
    }</code></ul>`,
    "<li>The sibling selector is a CSS selector used to select elements that share the same parent and come after a specified element. There are two types of sibling selectors in CSS:</li>",
    "<ol><li>Adjacent Sibling Selector (+): Selects the element that is immediately next to a specified element.</li>",
    "<li>General Sibling Selector (~): Selects all elements that are siblings of a specified element and come after it.</li></ol>",
    "<li>The sibling selector is a CSS selector used to select elements that share the same parent and come after a specified element. There are two types of sibling selectors in CSS:</li>",
    "<ol><li>Adjacent Sibling Selector (+): Selects the element that is immediately next to a specified element.</li>",
    "<li>General Sibling Selector (~): Selects all elements that are siblings of a specified element and come after it.</li></ol>",
    "<li>Attribute selectors in CSS allow you to select elements based on the presence or value of their attributes</li>",
    "<ol><li><code>[attr]{ }</code>:Selects elements with a specific attribute.</li>",
    "<li><code>[attr ^ = 'value']{ }</code>:Selects elements with an attribute that starts with a specified value.</li>",
    "<li><code>[attr $ = 'value']{ }</code>:Selects elements with an attribute that ends with a specified value.</li>",
    "<li><code>[attr * ='value']{ }</code>:Selects elements with an attribute that containing a specified value.</li>",
    "<li><code>[attr ~ ='value']{ }</code>:Selects elements with an attribute that containing a specified word.</li>",
    "<li><code>[attr ='value']{ }</code>:Selects elements with an attribute with a specified value.</li>",
    "<li><code>tag[attr ='value' i]{ }</code>:Selects elements with a specific attribute that contain a specified value while removing case sensitive.</li>",
    "<li><code>tag[attr]{ }</code>:Selects elements with a specific attribute.</li>",
    "<li><code>tag[attr ='value']{ }</code>:Selects element with a specific tag that contain a specific attribute that contain a specified value.</li></ol>",
  ],
  "CSS Comments": [
    "<h2 style='text-align: center;'>CSS Comments</h2>",
    "<li>Comments are used to explain the code, and may help when you edit the source code at a later date.</li>",
    "<li>CSS comments are not displayed in the browser, but they can help document your source code.</li>",
    "<li>A CSS comment is placed inside the &lt;style&gt; element, and starts with /* and ends with */:</li>",
  ],
  "CSS transforms": [
    "<h2 style='text-align: center;'>CSS transforms</h2>",
    "<li>CSS transforms allow you to move, rotate, scale, and skew elements.</li>",
    "<li>With the CSS transform property we can use the following transformation methods:</li>",
    "<ol><li>The <code>'translate()'</code>: method moves an element from its current position (according to the parameters given for the X-axis and the Y-axis).</li>",
    "<li>The <code>'rotate()'</code>: method rotates an element clockwise or counter-clockwise according to a given degree.</li>",
    "<li>The <code>'scale()'</code>:method increases or decreases the size of an element (according to the parameters given for the width and height).</li>",
    "<li>The <code>'skew()'</code>:method skews an element along the X and Y-axis by the given angles.</li>",
    "<li>The <code>'matrix()'</code>:method take six parameters, containing mathematic functions, which allows you to scale, move (translate), and skew elements.</li>",
    "<ul><li>The parameters are as follow: <code>matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY())</code>.</li></ul></ol>",
  ], 
  "CSS Colors": [
    "<h2 style='text-align: center;'>CSS Colors</h2><p>Placeholder text for CSS Colors.</p>",
  ],
  "CSS Backgrounds": [
    "<h2 style='text-align: center;'>CSS Backgrounds</h2>",
    "<li>The CSS background properties are used to add background effects for elements such as:</li>",
    "<ol><li>The <code>'background-color</code>: property specifies the background color of an element.</li>",
    "<li>The <code>'background-image'</code>: property specifies an image to use as the background of an element.</li>",
    "<li>By default, the<code>'background-image'</code>:  property repeats an image both horizontally and vertically that is why we can use:</li>",
    "<ol type='a'><li>The <code>'background-repeat: no-repeat'</code>: To show the background image only once.</li>",
    "<li>The <code>'background-repeat: repeat-x'</code>: To repeat an image horizontally.</li>",
    "<li>The <code>'background-repeat: repeat-y'</code>: To repeat an image vertically.</li></ol>",
    "<li>The <code>'background-size'</code>: property specifies the size of the background images(example: cover, contain , ect...)</li>",
    "<li>The <code>'background-origin'</code>: specifies the origin position of an element's background image (example: border-box, padding-box, ect...).</li>",
    "<li>The <code>'background-position'</code>: property is used to specify the position of the background image (example: left, top , ect...)</li>",
    "<li><code>'background'</code>: A shorthand property that can combine the above properties.</li></ol>",
    "<li>CSS gradients let you display smooth transitions between two or more specified colors.</li>",
    "<li>To create a linear gradient you must define at least two color.</li>",
    "<li><code>background-image: linear-gradient(direction, color1, color2, ...);</code></li>",
    "<li>A radial gradient is defined by its center..</li>",
    "<li><code>background-image: radial-gradient(shape size at position, start-color, ..., last-color);</code>: By default, shape is ellipse, size is farthest-corner, and position is center</li>",
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
    "<h2 style='text-align: center;'>CSS Box Model</h2><p>Placeholder text for CSS Box Model.</p>",
  ],
  "CSS Outline": [
    "<h2 style='text-align: center;'>CSS Outline</h2><p>Placeholder text for CSS Outline.</p>",
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
    "<li><code>'uppercase'</code> Transforms all characters to uppercase.</li>",
    "<li><code>'lowercase'</code>: Transforms all characters to lowercase.</li></ol>",
    "<li>There are several properties related to spacing that control how text is displayed. These include properties for managing the space between letters, words, and lines. Here are the properties:</li>",
    "<ol><li><code>'letter-spacing'</code>: Controls the space between characters in a text.</li>",
    "<li><code>'word-spacing'</code>: Controls the space between words in a text.</li>",
    "<li><code>'line-height'</code>: Controls the space between lines of text</li></ol>",
    "<li>The 'text-decoration' property is used to add decorative elements to text, It can be used to set multiple decorations at once and control their styles such as:</li>",
    "<ol><li><code>'text-decoration-line'</code>:Specifies what kind of line decoration should be applied to the text (example: underline, overline, line-through).</li>",
    "<li><code>'text-decoration-style'</code>: Specifies the style of the line (example: solid, double, dotted, dashed, wavy).</li>",
    "<li><code>'text-decoration-color'</code>: Specifies the color of the line decoration.</li>",
    "<li><code>'text-decoration'</code>: A shorthand property that can combine the above properties.</li></ol>",
    "<li>The <code>'text-shadow'</code>:  property adds shadow to text.</li>",
    "<li>In simplest usage, you can just specify a horizontal shadow (2px), a vertical shadow (2px) and a color to the shadow:</li>",
  ],
  "CSS Fonts": [
    "<h2 style='text-align: center;'>CSS Fonts</h2>",
    "<li>Here are some ways you can use CSS to apply fonts to your web pages:</li>",
    "<ol><li>The <code>'font-size'</code>: property sets the size of the font we can use units like em, rem, %, vw, and vh.</li>",
    "<li>The <code>'font-weigth'</code>: property sets the weight (or boldness) of the font we can use numeric values ranging from 100 to 900.</li>",
    "<li>The <code>'font-variant'</code>: property is used to display text in a small-caps font</li>",
    "<li>The <code>'font-family'</code>: property is used to specify the font for text content.</li>",
    "<li>The <code>'font-style'</code>: property specifies whether the font should be italic, oblique, or normal.</li>",
    "<li><code>'font'</code>: A shorthand property that can combine the above properties.</li></ol>",
  ],
  "CSS Icons": [
    "<h2 style='text-align: center;'>CSS Icons</h2><p>Placeholder text for CSS Icons.</p>",
  ],
  "CSS Links": [
    "<h2 style='text-align: center;'>CSS Links</h2><p>Placeholder text for CSS Links.</p>",
  ],
  "CSS Lists": [
    "<h2 style='text-align: center;'>CSS Lists</h2>",
    "<li> the list-style property is used to specify the style, type, position, and image for list items in ordered and unordered lists. Here are the sub-properties of list-style:</li>",
    "<ol><li> <code>'list-style-type'</code>:Specifies the type of list item marker (example: disc, circle, square, decimal, lower-roman, none).</li>",
    "<li> <code>'list-style-position'</code>: Specifies the position of the list item markers (example: inside or outside).</li>",
    "<li> <code>'list-style-image'</code>: Specifies an image as the list item marker.</li></ol>",
  ],
  "CSS Tables": [
    "<h2 style='text-align: center;'>CSS Tables</h2>",
    "<li>To specify table borders in CSS, use the border property.</li>",
    "<li>The width and height of a table are defined by the width and height properties.</li>",
    "<li>The text-align property sets the horizontal alignment (like left, right, or center) of the content in &lt;th&gt; or &lt;td&gt;.  </li>",
    "<li>To control the space between the border and the content in a table, use the padding property on &lt;td&gt; and &lt;th&gt; elements:</li>",
    "<li>Add a container element (like &lt;div&gt;) with overflow-x:auto around the &lt;table&gt; element to make it responsive:</li>",
  ],
  "CSS Display": [
    "<h2 style='text-align: center;'>CSS Display</h2><p>Placeholder text for CSS Display.</p>",
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
    "<h2 style='text-align: center;'>CSS Position</h2>",
    "<li>The position property specifies the type of positioning method used for an element there are five different position values:</li>",
    "<ol><li> <code>'static'</code>: This is the default positioning for all elements. Elements are positioned according to the normal flow of the document. top, right, bottom, and left properties have no effect.</li>",
    "<li> <code>'relative'</code>: is positioned relative to its normal position. Setting top, right, bottom, and left will move the element away from its original position.</li>",
    "<li> <code>'fixed'</code>: is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.</li>",
    "<li> <code>'absolute'</code>: is positioned element is removed from the normal document flow and positioned relative to its nearest positioned ancestor.</li>",
    "<li> <code>'sticky'</code>: Sticky positioning is a hybrid of relative and fixed positioning. A sticky element switches between relative and fixed positioning depending on the user's scroll position.</li></ol>",
  ],
  "CSS Z-index": [
    "<h2 style='text-align: center;'>CSS Z-index</h2>",
    "<li>The z-index property specifies the stack order of an element, it can have a positive or negative stack order:</li>",
    "<li>If two positioned elements overlap each other without a z-index specified, the element defined last in the HTML code will be shown on top.</li>",
    "<li>z-index only works on positioned elements and flex items</li>",
  ],
  "CSS Overflow": [
    "<h2 style='text-align: center;'>CSS Overflow</h2>",
    "<li>The CSS overflow property controls what happens to content that is too big to fit into an area it has the following values:</li>",
    "<ol><li> <code>'visible'</code>: Default. The overflow is not clipped. The content renders outside the element's box.</li>",
    "<li> <code>'hidden'</code>: The overflow is clipped, and the rest of the content will be invisible.</li>",
    "<li> <code>'scroll'</code>: The overflow is clipped, and a scrollbar is added to see the rest of the content.</li>",
    "<li> <code>'auto'</code>: Similar to scroll, but it adds scrollbars only when necessary.</li></ol>",
  ],
  "CSS Float": [
    "<h2 style='text-align: center;'>CSS Float</h2>",
    "<li>The float property in CSS is used to position an element to the left or right within its container, allowing other content to wrap around it. This is commonly used to create layouts where text wraps around images it can has the following values: </li>",
    "<ol><li> <code>'left'</code>: The element floats to the left of its container</li>",
    "<li> <code>'right'</code>: The element floats to the right of its container</li>",
    "<li> <code>'none'</code>: Default value. The element does not float.</li>",
    "<li> <code>'inherit'</code>: The element inherits the float value of its parent.</li></ol>",
    "<li>The clear property in CSS is used to control the behavior of an element with respect to floating elements that precede it in the document it can has the following values:</li>",
    "<ol><li> <code>'left'</code>: The element must be moved down until it is below any preceding left-floated elements.</li>",
    "<li> <code>'right'</code>: The element must be moved down until it is below any preceding right-floated elements.</li>",
    "<li> <code>'none'</code>: Default value. The element is not moved down to clear past floats.</li>",
    "<li> <code>'both'</code>: The element must be moved down until it is below any preceding left-floated and right-floated elements.</li></ol>",
  ],
  "CSS Inline-block": [
    "<h2 style='text-align: center;'>CSS Inline-block</h2><p>Placeholder text for CSS Inline-block.</p>",
  ],
  "CSS Align": [
    "<h2 style='text-align: center;'>CSS Align</h2><p>Placeholder text for CSS Align.</p>",
  ],
  "CSS Combinators": [
    "<h2 style='text-align: center;'>CSS Combinators</h2><p>Placeholder text for CSS Combinators.</p>",
  ],
  "CSS Pseudo-class": [
    "<h2 style='text-align: center;'>CSS Pseudo-class</h2>",
    "<li>A pseudo-class is used to define a special state of an element.</li>",
    "<li>For example, it can be used to:</li>",
    "<ol><li> <code>':active'</code>:	Selects the active link.</li>",
    "<li> <code>':hover'</code>: Selects links on mouse over</li>",
    "<li> <code>':visited'</code>: Selects all visited links.</li>",
    "<li> <code>':link'</code>: Selects all unvisited links.</li>",
    "<li> <code>':empty'</code>:	Selects every &lt;p&gt; element that has no children.</li>",
    "<li> <code>':disabled'</code>: Selects every disabled &lt;input&gt; element.</li>",
    "<li> <code>':enabled'</code>: Selects every enabled &lt;input&gt; element.</li>",
    "<li> <code>':required'</code>:	Selects &lt;input&gt; elements with a 'required' attribute specified.</li>",
    "<li> <code>':invalid'</code>:	Selects all &lt;input&gt; elements with an invalid value.</li>",
    "<li> <code>'::checked'</code>:	Selects every checked &lt;input&gt; element.</li>",
    "<li> <code>':focus'</code>: Selects the &lt;input&gt; element that has focus</li></ol>",
  ],
  "CSS Pseudo-element": [
    "<h2 style='text-align: center;'>CSS Pseudo-element</h2>",
    "<li>A CSS pseudo-element is used to style specified parts of an element.</li>",
    "<li>For example, it can be used to:</li>",
    "<ol><li> <code>'::first-line'</code>:	Selects the first line of each &lt;p&gt; element.</li>",
    "<li> <code>'::first-letter'</code>: Selects the first letter of each &lt;p&gt; element.</li>",
    "<li> <code>'::selection'</code>:	Selects the portion of an element that is selected by a user.</li>",
    "<li> <code>'::before'</code>: Insert something before the content of each &lt;p&gt; element.</li>",
    "<li> <code>'::after'</code>:	Insert something after the content of each &lt;p&gt; element.</li></ol>",
  ],
  "CSS Opacity": [
    "<h2 style='text-align: center;'>CSS Opacity</h2><p>Placeholder text for CSS Opacity.</p>",
  ],
  "CSS Navigation Bar": [
    "<h2 style='text-align: center;'>CSS Navigation Bar</h2><p>Placeholder text for CSS Navigation Bar.</p>",
  ],
  "CSS Dropdowns": [
    "<h2 style='text-align: center;'>CSS Dropdowns</h2><p>Placeholder text for CSS Dropdowns.</p>",
  ],
  "CSS Image Gallery": [
    "<h2 style='text-align: center;'>CSS Image Gallery</h2><p>Placeholder text for CSS Image Gallery.</p>",
  ],
  "CSS Image Sprites": [
    "<h2 style='text-align: center;'>CSS Image Sprites</h2><p>Placeholder text for CSS Image Sprites.</p>",
  ],
  "CSS Attr Selectors": [
    "<h2 style='text-align: center;'>CSS Attr Selectors</h2><p>Placeholder text for CSS Attr Selectors.</p>",
  ],
  "CSS Forms": [
    "<h2 style='text-align: center;'>CSS Forms</h2><p>Placeholder text for CSS Forms.</p>",
  ],
  "CSS Counters": [
    "<h2 style='text-align: center;'>CSS Counters</h2><p>Placeholder text for CSS Counters.</p>",
  ],
  "CSS Website Layout": [
    "<h2 style='text-align: center;'>CSS Website Layout</h2><p>Placeholder text for CSS Website Layout.</p>",
  ],
  "CSS Units": [
    "<h2 style='text-align: center;'>CSS Units</h2>",
    "<li>CSS has several different units for expressing a length.</li>",
    "<li>Many CSS properties take 'length' values, such as width, margin, padding, font-size, etc.</li>",
    "<li>Length is a number followed by a length unit, such as:</li>",
    "<ol><li> <code>'px'</code>: pixel.</li>",
    "<li> <code>'cm'</code>:Centimeters .</li>",
    "<li> <code>'mm'</code>:Millimeters.</li>",
    "<li> <code>'in'</code>:inch.</li>",
    "<li> <code>'%'</code>:	Relative to the parent element .</li>",
    "<li> <code>'em'</code>: Relative to the font-size of the element .</li></ol>",
  ],
  "CSS Specificity": [
    "<h2 style='text-align: center;'>CSS Specificity</h2><p>Placeholder text for CSS Specificity.</p>",
  ],
  "CSS !important": [
    "<h2 style='text-align: center;'>CSS !important</h2><p>Placeholder text for CSS !important.</p>",
  ],
  "CSS Math Functions": [
    "<h2 style='text-align: center;'>CSS Math Functions</h2><p>Placeholder text for CSS Math Functions.</p>",
  ],
};
