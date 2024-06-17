const html = {
  "HTML Introduction": [
    "<h2 style='text-align: center;'>Introduction to HTML</h2>",
    "<li>HTML stands for <span style='color:#04aa6d;'>H</span>yper<span style='color:#04aa6d;'>T</span>ext <span style='color:#04aa6d;'>M</span>arkup <span style='color:#04aa6d;'>L</span>anguage</li>",
    "<li>HTML is the standard markup language for creating web pages and web applications.</li>",
    "<li>It was created by Tim Berners-Lee in late 1991 but was not officially published until 1993.</li>",
    "<li>HTML is used to describe the structure of web pages using markup. Elements are the building blocks of HTML pages.</li>",
    "<li>HTML elements are represented by tags such as &lt;head&gt;, &lt;title&gt;, &lt;body&gt;, &lt;header&gt;, &lt;footer&gt;, &lt;article&gt;, &lt;section&gt;, and many others.</li>",
    "<li>Over the years, HTML has undergone several updates and versions. The latest version is HTML5, which includes new elements, attributes, and behaviors.</li>",
    "<li>HTML5 also supports multimedia elements like &lt;audio&gt; and &lt;video&gt;, as well as new APIs to enhance web functionality.</li>",
    "<li>To write HTML, you can use code editors such as:</li>",
    "<ol><li>VS Code</li><li>Notepad</li><li>Atom</li></ol>",
    "<li>When we talk about websites, we often refer to two main specializations:</li>",
    "<ol><li>Front-end development</li><li>Back-end development</li></ol>",
    "<li>To build a website, it's important to understand the different types of files that compose it. Typically, a website consists of:</li>",
    "<ol><li>HTML files</li><li>CSS files</li><li>JavaScript files</li></ol></h6>",
  ],
  "HTML Editors": [
    "<h2 style='text-align: center;'>HTML Editors</h2>",
    "<li>HTML editors are software programs used to create and edit HTML code.</li>",
    "<li>Popular HTML editors include:</li>",
    "<ol><li>Visual Studio Code (VS Code)</li><li>Notepad++</li><li>Sublime Text</li><li>Atom</li></ol>",
    "<li>Features of good HTML editors:</li>",
    "<ul><li>Syntax highlighting</li><li>Code completion</li><li>Error detection</li><li>Version control integration</li></ul>",
    "<li>Using an HTML editor helps streamline the coding process and ensures more accurate and efficient code writing.</li>",
    "<li>To download and install an HTML editor like VS Code:</li>",
    "<ol><li>Visit the official website (e.g., code.visualstudio.com).</li><li>Download the installer for your operating system.</li><li>Run the installer and follow the on-screen instructions.</li><li>Open VS Code and start writing HTML code.</li></ol>",
  ],
  "HTML Basic": [
    "<h2 style='text-align: center;'>HTML Basic</h2>",
    "<li>The basic structure of an HTML document includes the following elements:</li>",
    "<ul><li>&lt;!DOCTYPE html&gt;: Declares the document type and version of HTML.</li>",
    "<li>&lt;html&gt;: The root element that contains all other elements.</li>",
    "<li>&lt;head&gt;: Contains meta-information about the document, such as the title and links to stylesheets.</li>",
    "<li>&lt;title&gt;: Sets the title of the document, which appears in the browser's title bar or tab.</li>",
    "<li>&lt;body&gt;: Contains the content of the document, such as text, images, and other media.</li></ul>",
    "<li>Example of a basic HTML document:</li>",
    "<code>&lt;!DOCTYPE html&gt;<br>&lt;html&gt;<br>&lt;head&gt;<br>&lt;title&gt;My First HTML Page&lt;/title&gt;<br>&lt;/head&gt;<br>&lt;body&gt;<br>&lt;h1&gt;Hello, World!&lt;/h1&gt;<br>&lt;p&gt;This is a paragraph.&lt;/p&gt;<br>&lt;/body&gt;<br>&lt;/html&gt;</code>",
    "<li>Each HTML element can have attributes that provide additional information about the element.</li>",
    "<li>It's important to correctly nest HTML elements to ensure the document is well-formed and renders properly in browsers.</li>",
  ],
  "HTML Elements": [
    "<h2 style='text-align: center;'>HTML Elements</h2>",
    "<li>An HTML document is composed of many elements</li>",
    "<li>Elements are opened and closed with tags</li>",
    "<li>For example :<code>&lt;mytagname&gt element content &lt;/mytagname&gt</code></li> <br>",
    "<li>The following example contains four HTML elements (&lt;html&gt;, &lt;body&gt;, &lt;h1&gt and &lt;p&gt;):</li>",
    "<code> &lt;!DOCTYPE html&gt;<br> &lt;html&gt;<br> &lt;body&gt;<br> &lt;h1&gtMy First Heading &lt;/h1&gt;<br> &lt;p&gt;My first paragraph.&lt;/p&gt;<br> &lt;/body&gt;<br> &lt;/html&gt;</code>",
    "<li>Examples of some HTML elements:</li>",
    "<ul><li><code>&lt;button &gt; Click me &lt;/button &gt; </code></li></ul>",
    "<ul><li><code>&lt;img src='my-image.jpg'&gt; </code></li></ul>",
    "<ul><li><code>&lt;br&gt; ==&gt; this is a tag used to break line </code></li></ul>",
    "<ul><li><code>&lt;head&gt; &lt;meta charset='Controls character encoding' &gt &lt;/head&gt;</code></li></ul>",
  ],
  "HTML Attributes": [
    "<h2 style='text-align: center;'>HTML Attributes</h2>",
    "<li>HTML attributes provide additional information about HTML elements.</li>",
    "<li>Attributes are always included in the opening tag and usually come in name/value pairs like name='value'.</li>",
    "<li>Common attributes include:</li>",
    "<ul><li>class: Specifies one or more class names for an element (used for CSS and JavaScript).</li>",
    "<li>id: Specifies a unique id for an element (used for CSS and JavaScript).</li>",
    "<li>style: Specifies an inline CSS style for an element.</li>",
    "<li>title: Provides extra information about an element (displayed as a tooltip).</li></ul>",
    "<li>Examples of an attribute usage:</li>",
    "<code>&lt;p class='intro'&gt;This is an introductory paragraph.&lt;/p&gt;</code><br>",
    "<code>&lt;head&gt; <br>&lt;meta charset='' &gt </code><br>",
    "<code> &lt;meta name='' content='' &gt <br>&lt;/head&gt;</code>",
    "<li>Attributes can also be used for accessibility purposes, such as:</li>",
    "<ul><li>alt: Provides alternative text for images.</li>",
    "<li>aria-label: Provides accessible labels for elements.</li></ul>",
  ],
  "HTML Headings": [
    "<h2 style='text-align: center;'>HTML Headings</h2>",
    "<li>HTML titles are designated using the &lt;h1&gt; to &lt;h6&gt; tags.</li><br>",
    "<li> &lt;h1&gt; denotes the larger heading, while &lt;h6&gt; represents the smaller section.</li><br><br>",
    "<code><li>&lt;h1&gt; Heading 1&lt;/h1&gt;</li>",
    "<h1> Heading 1</h1>",
    "<li>&lt;h2&gt; Heading 2&lt;/h2&gt;</li>",
    "<h2> Heading 2</h2>",
    "<li>&lt;h3&gt; Heading 3&lt;/h3&gt;</li>",
    "<h3> Heading 3</h3>",
    "<li>&lt;h4&gt; Heading 4&lt;/h4&gt;</li>",
    "<h4> Heading 4</h4>",
    "<li>&lt;h5&gt; Heading 5&lt;/h5&gt;</li>",
    "<h5> Heading 5</h5>",
    "<li>&lt;h6&gt; Heading 6&lt;/h6&gt;</li></code>",
    "<h6> Heading 6</h6>",
  ],
  "HTML Paragraphs": [
    "<h2 style='text-align: center;'>HTML Paragraphs</h2>",
    "<p><li>A paragraph is defined by this HTML element &lt;p&gt; </li></p>",
    "<p><li>With HTML paragraph elememt &lt;p&gt;, you cannot change the display by adding spaces or extra lines in your HTML code.</li></p>",
    "<p><li>The browser will automatically remove all extra spaces and lines when the page is displayed:</li></p>",
    "<p><li>But with &lt;pre&gt; HTML elememt, you can change the display by adding spaces or extra lines in your HTML code.</li></p>",
    "<p><li>Example of code:</li></p>",
    "<code>&lt;p&gt;<br>This paragraph<br> contains a lot of lines<br>in the source code,<br> but the browser<br> ignores it. &lt;/p&gt;</code>",
    "<p><li>The result of code:</li></p>",
    "<p>This paragraph contains a lot of lines in the source code, but the browser ignores it..</p>",
  ],
  "HTML Styles": [
    "<h2 style='text-align: center;'>HTML Styles</h2>",
    "<p><li>The HTML 'style' attribute is used to add styles to an element, such as color, background color, font, size, and more. </li></p>",
    "<p><li>These are some examples :</li></p>",
    "<code>&lt;p&gt;I am normal &lt;/p&gt;",
    "<p>I am normal</p>",
    "&lt;p style='color:blue;'&gt;I am blue &lt;/p&gt;",
    "<p style='color:blue;'>I am red</p>",
    "&lt;p style='font-size:30px;'&gt;I am big &lt;/p&gt;</code>",
    "<p style='font-size:30px;'>I am big</p>",
  ],
  "HTML Formatting": [
    "<h2 style='text-align: center;'>HTML Formatting</h2>",
    "<p>Formatting elements were designed to display special types of text:</p>",
    "<li>&lt;b&gt;- Bold text<br>",
    "<p>This text is normal.</p><p><b>This text is bold.</b></p>",
    "<li>&lt;strong&gt; - Important text<br>",
    "<p>This text is normal.</p><p><strong>This text is important!</strong></p>",
    "<li>&lt;i&gt; - Italic text<br>",
    "<p>This text is normal.</p><p><i>This text is italic.</i></p>",
    "<li>&lt;em&gt; - Emphasized text<br>",
    "<p>This text is normal.</p>  <p><em>This text is emphasized.</em></p>",
    "<li>&lt;mark&gt; - Marked text<br>",
    "<p>Do not forget to buy <mark>milk</mark> today.</p>",
    "<li>&lt;small&gt; - Smaller text<br>",
    "<p>This is some normal text.</p> <p><small>This is some smaller text.</small></p>",
    "<li>&lt;del&gt; - Deleted text<br>",
    "<p>My favorite color is <del>blue</del> red.</p>",
    "<li>&lt;ins&gt; - Inserted text<br>",
    "<p>My favorite color <ins>red</ins>.</p>",
    "<li>&lt;sub&gt;- Subscript text<br>",
    "<p>This is <sub>subscripted</sub> text.</p>",
    "<li>&lt;sup&gt; - Superscript text<br>",
    "<p>This is <sup>superscripted</sup> text.</p>",
  ],
  "HTML Quotations": [
    "<h2 style='text-align: center;'>HTML Quotations</h2><p>Placeholder text for HTML Quotations.</p>",
  ],
  "HTML Comments": [
    "<h2 style='text-align: center;'>HTML Comments</h2>",
    "<li>To insert comments in your HTML source code, you can use this syntax</li>",
    "<code >&lt;!-- your comments --&gt;</code>",
    "<li>HTML comments are beneficial for describing or explaining specific sections of your code, providing insights for developers who may need to understand or modify it in the future.</li>",
    "<li>Example</li>",
    "&lt;!-- Paragraph element containing text about ... --&gt;</code>",
    "<code>&lt;p&gt;This is a paragraph.&lt;/p&gt;<br>",
  ],
  "HTML Colors": [
    "<h2 style='text-align: center;'>HTML Colors</h2>",
    "<p><li><strong>Color Names</strong>: You can use color names directly in your HTML or CSS code.</li></p>",
    "<p><li><code>&lt;p style='color:red;'&gt;This is a red paragraph.&lt;/p&gt;</code></li></p>",
    "<p><li>Some common color names include <code>red</code>, <code>blue</code>, <code>green</code>, <code>black</code>, <code>white</code>, etc.</li></p>",

    "<p><li><strong>Hexadecimal Colors</strong>: Hex values are six-digit codes representing the amount of red, green, and blue.</li></p>",
    "<p><li><code>&lt;p style='color:#ff0000;'&gt;This is a red paragraph.&lt;/p&gt;</code></li></p>",
    "<p><li>Each pair of digits represents the intensity of the color component (red, green, blue).</li></p>",

    "<p><li><strong>RGB Colors</strong>: RGB values define colors using the Red, Green, Blue color model.</li></p>",
    "<p><li><code>&lt;p style='color:rgb(255, 0, 0);'&gt;This is a red paragraph.&lt;/p&gt;</code></li></p>",
    "<p><li>Each parameter defines the intensity of the color on a scale of 0 to 255.</li></p>",

    "<p><li><strong>RGBA Colors</strong>: RGBA is an extension of RGB with an alpha channel (opacity).</li></p>",
    "<p><li><code>&lt;p style='color:rgba(255, 0, 0, 0.5);'&gt;This is a semi-transparent red paragraph.&lt;/p&gt;</code></li></p>",
    "<p><li>The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).</li></p>",

    "<p><li><strong>HSL Colors</strong>: HSL stands for Hue, Saturation, and Lightness.</li></p>",
    "<p><li><code>&lt;p style='color:hsl(0, 100%, 50%);'&gt;This is a red paragraph.&lt;/p&gt;</code></li></p>",
    "<p><ul><strong>Hue</strong> is a degree on the color wheel (from 0 to 360).</ul></li></p>",
    "<p><ul><strong>Saturation</strong> is a percentage value (0% means a shade of gray, 100% means full color).</ul></li></p>",
    "<p><ul><strong>Lightness</strong> is also a percentage (0% is black, 100% is white).</ul></li></p>",

    "<p><li><strong>HSLA Colors</strong>: HSLA is an extension of HSL with an alpha channel.</li></p>",
    "<p><li><code>&lt;p style='color:hsla(0, 100%, 50%, 0.5);'&gt;This is a semi-transparent red paragraph.&lt;/p&gt;</code></li></p>",

    "<p><li><strong>Changing Background Color</strong>: You can change the background color of an element.</li></p>",
    "<p><li><code>&lt;div style='background-color:lightblue;'&gt;This is a light blue div.&lt;/div&gt;</code></li></p>",

    "<p><li><strong>Combining Colors</strong>: You can combine different color methods in CSS.</li></p>",
    "<p><li><code>&lt;style&gt; p { color: #ff6347; /* Tomato */ background-color: rgb(240, 248, 255); /* AliceBlue */ } &lt;/style&gt;</code></li></p>",
  ],
  "HTML CSS": [
    "<h2 style='text-align: center;'>HTML CSS</h2>",
    "<p><li>CSS stands for Cascading Style Sheets.</li></p>",
    "<p><li>CSS saves a lot of work. It can control the layout of multiple web pages all at once.</li></p>",
    "<p><li>CSS can be added to HTML documents in 3 ways:</li></p>",
    "<ol><p><li>Inline CSS is used for quick, one-off style changes directly within an HTML element.</li></p>",
    "<code><ul><p><li>&lt;p style=color:red;'&gt;A red paragraph.&lt;/p&gt;</li></p></ul></code>",
    "<p><li>Internal CSS is useful for styling a single document with multiple styles defined in one place.</li></p>",
    `<ul><pre><li>&lt;style&gt;
body{background-color:powderblue;}
h1   {color: blue;}
p    {color: red;}
    &lt;/style &gt;</li></pre></ul>`,
    "<p><li>External CSS is ideal for applying a consistent style across multiple HTML documents by linking to a separate CSS file.</li></p>",
    "<code><ul><p><li>&lt;link rel='stylesheet' href=styles.css'&gt;</li></p></ul></code></ol>",
  ],
  "HTML Links": [
    "<h2 style='text-align: center;'>HTML Links</h2>",
    "<p><li>The HTML &lt;a&gt; tag defines a hyperlink. It has the following syntax:</li></p>",
    "<p><li>We use 'https:' for the external sites</li></p>",
    "<p><li>We can use the <code>'target='_blank'' attribute to open the link in a new tab</code></li></p>",
    "<code>&lt;a href='https://www.google.com/'&gt;link text&lt;/a&gt;</code><br>",
    "<a href='https://www.google.com/'>Goooogle</a>",
    "<p><li>We use the path of a file if it is a local file</li></p>",
    "<code>&lt;a href='index.html'&gt;link text&lt;/a&gt;</code><br>",
    "<a href='index.html'>HTML page</a>",
  ],
  "HTML Images": [
    "<h2 style='text-align: center;'>HTML Images</h2>",
    "<p><li>Images can improve the design and the appearance of a web page.</li></p>",
    "<p><li>We can add an img to a website using the simple tag <code>&lt;img&gt;</code> .</li></p>",
    "<p><li>We will put the img-url in the attribute  <code>'src'</code></li></p>",
    "<p><li>For example:</li></p>",
    "<p><code>&lt;img src='img.jpj'&gt; width='320' height='240'</code></p>",
    "<p><code><img src='https://www.w3schools.com/html/workplace.jpg' width='320' height='240'></code></p>",
    "<p><li>We can controle the size of the image using  <code>'width' </code>and <code>'height'</code> attributes</li></p>",
  ],
  "HTML Videos": [
    "<h2 style='text-align: center;'>HTML Images</h2>",
    "<p><li>&lt;video&gt; tag allows you to specify the video file URL and various attributes to control the playback</li></p>",
    "<p><li><code>'width'</code> and <code>'heigth'</code> specify the dimensions of the video player.</li></p>",
    "<p><li><code>'controls'</code> adds playback controls like play, pause, and volume.</li></p>",
    "<p><li>The <code> &lt;source&gt;</code>  tag specifies the video file and its format using c'type'</code> attribute.</li></p>",
    "<p><li>Example :</li></p>",
    "<code>&lt;video width='320' height='240' controls&gt;<br>",
    "&lt;source src='video.mp4' type='video/mp4'&gt;<br>",
    "&lt;/video&gt;<br><code>",
    "<video width='320' height='240' controls>",
    "<source src='https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcSkz4py8QGdUXWhLUYt4pcnds4dMXE5GgytFQ' type='video/mp4'> ",
    "<p><li>We can controle the size of the image using  <code>'width' </code>and <code>'height'</code> attributes</li></p>",
    "</video>",
  ],
  "HTML Audio": [
    "<h2 style='text-align: center;'>HTML Audio</h2>",
    "<p><li>The HTML <code>&lt;audio&gt;</code> element is used To play an audio file on a web page.</li></p>",
    "<p><li>The HTML <code>&lt;source&gt;</code> element puted in the <code>&lt;audio&gt;</code> element .</li></p>",
    "<p><li>Then we will put the audio-url in the attribute  <code>'src'</code> in the <code>&lt;source&gt;</code> element.</li></p>",
    "<p><li>Example :</li></p>",
    "<code>&lt;audio &gt;<br>",
    "&lt;source src='music.ogg' type='audio/ogg'&gt;<br>",
    "&lt;/audio&gt;<br><code>",
    "<audio controls>",
    "<source src='http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/intromusic.ogg' type='audio/ogg'>",
    "</audio>",
  ],
  "HTML Favicon": [
    "<h2 style='text-align: center;'>HTML Favicon</h2>",
    "<p><li>   A favicon is a small image displayed next to the page title in the browser tab.</li></p>",
    "<p><li>To add a favicon to our website,we save our favicon image to the root directory of our web server or create a folder in the root directory called images and we save our favicon image to that folder. A common name for a favicon image is 'favicon.ico'.</li></p>",
    "<p><li> Next, add a &lt;link&gt; element to your 'index.html' file, after the &lt;title&gt; element   </li></p>",
    "<p><li> Now, save the 'index.html' file and reload it in your browser. Your browser tab should now display your favicon image to the left of the page title.</li></p>",

  ],
  "HTML Forms": [
    "<h2 style='text-align: center;'>HTML Forms</h2>",
    "<p><li>The HTML <code>&lt;form&gt;</code> element is used to create an HTML form for user input:.</li></p>",
    "<p><li>The <code>&lt;input&gt;</code> tag is the most important element in the <code>&lt;form&gt;</code> element.</li></p>",
    "<p><li>the <code>&lt;input&gt;</code> tag in HTML is used to create interactive controls in web forms that allow users to input data. It can be used for a variety of input types such as :</li></p>",
    "<p><ul><code>type='text'</code></ul></p>",
    "<p><ul><code>type='number'</code></ul></p>",
    "<p><ul><code>type='email'</code></ul></p>",
    "<p><ul><code>type='password'</code></ul></p>",
    "<p><ul><code>type='date'</code></ul></p>",
    "<p><ul><code>type='submit'</code></ul></p>",
    "<p><ul>etc...</ul></p>",
    "<p><li>The <code>&lt;label&gt;</code> element is useful for screen reader users because the screen reader will read the label out loud when the user focuses on the input element</li></p>",
    "<p><li>The <code>&lt;label&gt;</code> element is useful for screen reader users because the screen reader will read the label out loud when the user focuses on the input element</li></p>",
    "<p><li>We can use The <code>placeholder=''</code> attribute to discrib the <code>&lt;input&gt;</code> element or give it a name using The <code>name=''</code> attribute </li></p>",
    "<p><li>code example:</li></p>",
    `<pre>    &lt;form&gt;
      &lt;label >text&lt;/label&gt;
      &lt;input type="text" 
            placeholder='text' 
            name="Example" &gt;
    &lt;/form&gt;<br>`,
    `&lt;form&gt;
    &lt;label >password&lt;/label&gt;<br>
    &lt;input type="password" 
          placeholder='password' 
          name="Example" &gt;<br>
  &lt;/form&gt;<br> </pre>`,
    `<pre>    &lt;form&gt;
  &lt;label >HTML&lt;/label&gt;
  &lt;input type="number" 
        placeholder='number' 
         name="Example" &gt;
&lt;/form&gt;</pre>`,
    `<form>
    <label >text</label>
    <input type="text" placeholder='text' name="Example" > <br>`,

    `<label >number</label>
  <input type="number" placeholder='number' name="Example" > <br>
  `,
    `<label >password</label>
<input type="password" placeholder='password' name="Example" > <br>
<input type="submit" value="Submit"></input>
</form>`,
    "The <code>&lt;select&gt;</code> tag in HTML is used to create a drop-down list, allowing users to choose one or more options from a list This tag is typically used within a form to collect user input Each option within the drop-down list is defined using the <code>&lt;option&gt;</code> tag.",
    "<p><li>code example:</li></p>",
    `<pre><code>&lt;form action="/action_logic.js"&gt;
&lt;label &gt;Choose a car:&lt;/label&gt;
&lt;select id="cars" name="cars"&gt;
&lt;option value="volvo">Volvo&lt;/option&gt;
&lt;option value="saab">Saab&lt;/option&gt;
&lt;option value="fiat">Fiat&lt;/option&gt;
&lt;/select&gt;
&lt;input type="submit"&gt;
&lt;/form&gt;</code></pre>`,
    `<form action="/action_page.php">
<label >Choose a car:</label>
<select id="cars" name="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
</select>
<input type="submit">
</form>`,
    "<p><li>The <code>&lt;optgroup&gt;</code> tag to regroupe options in the <code>&lt;select&gt;</code> tag</li></p>",
    "<p><li>code example:</li></p>",
    `<pre><code>&lt;form action="/action_logic.js"&gt;
&lt;label >Choose a car:&lt;/label&gt;
&lt;select id="cars" name="cars"&gt;
&lt;optgroup label='Section 1'&gt;
&lt;option value="volvo">Volvo&lt;/option&gt;
&lt;option value="saab">Saab&lt;/option&gt;
&lt;option value="fiat">Fiat&lt;/option&gt;
&lt;/optgroup&gt;
&lt;optgroup label='Section 2'&gt;
&lt;option value="volvo">Volvo&lt;/option&gt;
&lt;option value="saab">Saab&lt;/option&gt;
&lt;option value="fiat">Fiat&lt;/option&gt;
&lt;/optgroup&gt;
&lt;/select&gt;
&lt;input type="submit"&gt;
&lt;/form&gt;</code></pre>`,
    `<form action="/action_page.php">
<label >Choose a car:</label>
<select id="cars" name="cars">
<optgroup label='Section 1'>
<option value="volvo">Volvo</option>
<option value="saab">Saab</option>
<option value="fiat">Fiat</option>
</optgroup> 
<optgroup label='Section 2'>
<option value="volvo">Toyota</option>
<option value="saab">Range</option>
<option value="fiat">Kiat</option>
</optgroup>
</select>
<input type="submit">
</form>`,
    "<p><li>The <code>&lt;datalist&gt;</code> element specifies a list of pre-defined options for an <code>&lt;input&gt;</code> element Users will see a drop-down list of the pre-defined options as they input data.</li></p>",
    "<p><li>The <code>list</code> attribute of the  <code>&lt;input&gt;</code> element, must refer to the <code>id</code> attribute of the <code>&lt;datalist&gt;</code> element.</li></p>",
    `<pre><code>&lt;form action="/action_logic.js"&gt;
&lt;input list="browsers"&gt;
&lt;datalist id="browsers"&gt;
&lt;option  value="Edge">Edge&lt;/option&gt;
&lt;option  value="FireFox">FireFox&lt;/option&gt;
&lt;option  value="Chrome">Chrome&lt;/option&gt;
&lt;option  value="Safari">Safari&lt;/option&gt;
&lt;option  value="Opera">Opera&lt;/option&gt;
&lt;/datalist&gt;
&lt;input type="submit"&gt;
&lt;/form&gt;</code></pre>`,
    `<form action="/action_page.php">
<input list="browsers">
<datalist id="browsers">
<option value="Edge">
<option value="Firefox">
<option value="Chrome">
<option value="Opera">
<option value="Safari">
</datalist>
<input type="submit">
</form>`,
  ],
  "HTML Page Title": [
    "<h2 style='text-align: center;'>HTML Page Title</h2>",
    "<p><li>Every web page should have a page title to describe the meaning of the page.</li></p>",
    "<p><li>The &lt;title&gt; element adds a title to your page</li></p>",
    "<p><li>The title should describe the content and the meaning of the page.</li></p>",
    "<p><li>So, try to make the title as precise and logical as possible.</li></p>",
  ],
  "HTML Tables": [
    "<h2 style='text-align: center;'>HTML Tables</h2>",
    "<p><li>HTML tables allow web developers to arrange data into rows and columns.</li></p>",
    "<p><li><code>&lt;td&gt;</code> stands for table data.</li></p>",
    "<p><li>Everything between <code>&lt;td&gt;</code> and <code>&lt;/td&gt;</code> corresponds to the contents of the table cell.</li></p>",
    "<p><li>A table cell can contain all sorts of HTML elements: text, images, lists, links, other tables, etc.</li></p>",
    "<p><li><code>&lt;tr&gt;</code> stands for table row</li></p>",
    "<code>&lt;table&gt;<br>",
    "&lt;tr&gt;<br>",
    " &lt;th&gt;Company&lt;/th&gt;<br>",
    "&lt;th&gt;Contact&lt;/th&gt;<br>",
    "&lt;th&gt;Country&lt;/th&gt;<br>",
    "&lt;/tr&gt;<br>",
    "&lt;tr&gt;<br>",
    "&lt;td&gt;Alfreds Futterkiste&lt;/td&gt;<br>",
    "&lt;td&gt;Maria Anders&lt;/td&gt;<br>",
    "&lt;td&gt;Germany&lt;/td&gt;<br>",
    "&lt;/tr&gt;<br>",
    "&lt;tr&gt;<br>",
    "&lt;td&gt;Centro comercial Moctezuma&lt;/td&gt;<br>",
    "&lt;td&gt;Francisco Chang&lt;/td&gt;<br>",
    "&lt;td&gt;Mexico&lt;/td&gt;<br>",
    "&lt;/tr&gt;<br>",
    "&lt;/table&gt;</code><br>",
    "<table>",
    "<tr>",
    " <th>Company</th>",
    "<th>Contact</th>",
    "<th>Country</th>",
    "</tr>",
    "<tr>",
    "<td>Alfreds Futterkiste</td>",
    "<td>Maria Anders</td>",
    "<td>Germany</td>",
    "</tr>",
    "<tr>",
    "<td>Centro comercial Moctezuma</td>",
    "<td>Francisco Chang</td>",
    "<td>Mexico</td>",
    "</tr>",
    "</table>",
  ],
  "HTML Lists": [
    "<h2 style='text-align: center;'>HTML Lists</h2>",
    "<p><li>There are Three types of list An Unordered HTML List &lt;ul&gt;, An Ordered HTML List &lt;ol&gt; and An Definition HTML List.&lt;dl&gt; </li></p>",
    "<p><li>An Unordered HTML List.</li></p>",
    "<code>&lt;ul&gt;<br>",
    "&lt;li&gt;item&lt;/li&gt;<br>",
    "&lt;li&gt;item&lt;/li&gt;<br>",
    "&lt;li&gt;item&lt;/li&gt;<br>",
    "&lt;li&gt;item&lt;/li&gt;<br>",
    "&lt;/ul&gt;</code><br>",

    "<ul>",
    "<li>item</li>",
    "<li>item</li>",
    "<li>item</li>",
    "<li>item</li>",
    "</ul>",
    "<p><li>An Ordered HTML List.</li></p>",
    "<code>&lt;ol&gt;<br>",
    "&lt;li&gt;item&lt;/li&gt;<br>",
    "&lt;li&gt;item&lt;/li&gt;<br>",
    "&lt;li&gt;item&lt;/li&gt;<br>",
    "&lt;li&gt;item&lt;/li&gt;<br>",
    "&lt;/ol&gt;</code><br>",

    "<ol>",
    "<li>First item</li>",
    "<li>Second item</li>",
    "<li>Third item</li>",
    "<li>Fourth item</li>",
    "</ol>",
    "<p><li>We can change the type of ordered list <code>&lt;ol&gt;</code> numbering in HTML by using the <code>'type'</code> attribute.</li></p>",
    "<p><li>For example</li></p>",
    "<code>type='a' </code>: Alphabetical (lowercase)<br>",
    "<code>type='A'</code>: Alphabetical (uppercase)<br>",
    "<code>type='i'</code>: Roman numerals (lowercase)<br>",
    "<code>type='I'</code>: Roman numerals (uppercase)<br>etc...",
    "<p><li>An Defination HTML List.</li></p>",
    "<code><&lt;dl&gt;<br>",
    "&lt;dt&gt;HTMl&lt;/dt&gt;",
    "<dd>HyperText Markup Language, used for structuring content on the web.</dd>",
    "&lt;dt&gt;CSS&lt;/dt&gt;",
    "<dd>Cascading Style Sheets, used for styling web documents.</dd>",
    "&lt;dt&gt;JavScript&lt;/dt&gt;",
    "<dd>A programming language used for adding interactivity to web pages.</dd>",
    "&lt;/dl&gt; </code>",
    "<dl>",
    `<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language, used for structuring content on the web.</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets, used for styling web documents.</dd>
  <dt>JavaScript</dt>
  <dd>A programming language used for adding interactivity to web pages.</dd>
</dl>`,
  ],
  "HTML Block & Inline": [
    "<h2 style='text-align: center;'>HTML Block & Inline</h2>",
    "<p><li>Every HTML element has a default display value, depending on what type of element it is.    </li></p>",
    "<p><li>The two most common display values are block and inline.</li></p>",
    "<p><li>A block element always takes up the full width available, the next element always starts on a new line</li></p>",
    "<p><li> here are two examples of block elements used: &lt;p&gt; and &lt;div&gt;.</li></p>",
    "<p><li>An inline element does not start on a new line and it only takes up as much width as necessary </li></p>",
    "<p><li>The   &lt;span>&gt; element is an inline container .</li></p>",
  ],
  "HTML Div": [
    "<h2 style='text-align: center;'>HTML Div</h2>",
    "<p><li>the <code>&lt;div&gt;</code> element is used as a container for other HTML elements.</li></p>",
    "<p><li>The <code>&lt;div&gt;</code> element it is a block-level meaning that it takes all available width, and comes with line breaks before and after. reforme.</li></p>",
    "<p><li>We can use the <code>&lt;div&gt;</code> element to to the header, nav bar, sidebar, footer, etc... .</li></p>",
    "<p><li>If we use it for all elements of the website the code will be unreadable .</li></p>",
    "<p><li>That is why we can use these semantic elements:</li></p>",
    "<p><ul><code>&lt;header&gt;</code> element to the header</ul></p>",
    "<p><ul><code>&lt;nav&gt;</code> element to the nav bar</ul></p>",
    "<p><ul><code>&lt;aside&gt;</code> element to the sidebar</ul></p>",
    "<p><ul><code>&lt;footer&gt;</code> element to the footer<br> etc...</ul></p>",
  ],
  "HTML Classes": [
    "<h2 style='text-align: center;'>HTML Classes</h2>",
    "<p><li>The HTML class attribute is used to specify a class for an HTML element.</li></p>",
    "<p><li>The class attribute can be used on any HTML element</li></p>",
    "<p><li>Multiple HTML elements can have the same class.</li></p>",
    "<p><li>The class attribute is often used to point to a class name in a style sheet. It can also be used by a JavaScript to access and manipulate elements with the specific class name.</li></p>",
    "<p><li>The class name is case sensitive </li></p>",

  ],
  "HTML Id": [
    "<h2 style='text-align: center;'>HTML Id</h2>",
    "<p><li>The id attribute is used to specify a unique id for an HTML element.</li></p>",
    "<p><li>The value of the id attribute must be unique within the HTML document</li></p>",
    "<p><li>The id attribute is used by CSS and JavaScript to style/select a specific element   </li></p>",
    "<p><li>The value of the id attribute is case sensitive</li></p>",
    "<p><li>The id attribute is also used to create HTML bookmarks</li></p>",
    "<p><li>HTML bookmarks are used to allow readers to jump to specific parts of a webpage.</li></p>",

  ],
  "HTML Iframes": [
    "<h2 style='text-align: center;'>HTML Iframes</h2><p>Placeholder text for HTML Iframes.</p>",
  ],
  "HTML JavaScript": [
    "<h2 style='text-align: center;'>HTML JavaScript</h2><p>Placeholder text for HTML JavaScript.</p>",
  ],
  "HTML File Paths": [
    "<h2 style='text-align: center;'>HTML File Paths</h2><p>Placeholder text for HTML File Paths.</p>",
  ],
  "HTML Head": [
    "<h2 style='text-align: center;'>HTML Head</h2><p>Placeholder text for HTML Head.</p>",
  ],
  "HTML Layout": [
    "<h2 style='text-align: center;'>HTML Layout</h2><p>Placeholder text for HTML Layout.</p>",
  ],
  "HTML Responsive": [
    "<h2 style='text-align: center;'>HTML Responsive</h2><p>Placeholder text for HTML Responsive.</p>",
  ],
  "HTML Computercode": [
    "<h2 style='text-align: center;'>HTML Computercode</h2><p>Placeholder text for HTML Computercode.</p>",
  ],
  "HTML Semantics": [
    "<h2 style='text-align: center;'>HTML Semantics</h2><p>Placeholder text for HTML Semantics.</p>",
  ],
  "HTML Style Guide": [
    "<h2 style='text-align: center;'>HTML Style Guide</h2><p>Placeholder text for HTML Style Guide.</p>",
  ],
  "HTML Entities": [
    "<h2 style='text-align: center;'>HTML Entities</h2><p>Placeholder text for HTML Entities.</p>",
  ],
  "HTML Symbols": [
    "<h2 style='text-align: center;'>HTML Symbols</h2><p>Placeholder text for HTML Symbols.</p>",
  ],
  "HTML Emojis": [
    "<h2 style='text-align: center;'>HTML Emojis</h2><p>Placeholder text for HTML Emojis.</p>",
  ],
  "HTML Charsets": [
    "<h2 style='text-align: center;'>HTML Charsets</h2><p>Placeholder text for HTML Charsets.</p>",
  ],
};
