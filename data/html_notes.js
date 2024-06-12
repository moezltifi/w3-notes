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
    "<ol><li>HTML files</li><li>CSS files</li><li>JavaScript files</li></ol></h6>"
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
    "<ol><li>Visit the official website (e.g., code.visualstudio.com).</li><li>Download the installer for your operating system.</li><li>Run the installer and follow the on-screen instructions.</li><li>Open VS Code and start writing HTML code.</li></ol>"
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
    "<li>It's important to correctly nest HTML elements to ensure the document is well-formed and renders properly in browsers.</li>"
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
    "<li>aria-label: Provides accessible labels for elements.</li></ul>"
  ],
  "HTML Headings": [
    "<h2 style='text-align: center;'>HTML Headings</h2>",
    "<li>HTML titles are designated using the &lt;h1&gt; to &lt;h6&gt; tags.</li><br>",
    "<li> &lt;h1&gt; denotes the larger heading, while &lt;h6&gt; represents the smaller section.</li><br><br>",
    "<code><li>&lt;h1&gt; Heading 1&lt;/h1&gt;</li>", "<h1> Heading 1</h1>",
    "<li>&lt;h2&gt; Heading 2&lt;/h2&gt;</li>", "<h2> Heading 2</h2>",
    "<li>&lt;h3&gt; Heading 3&lt;/h3&gt;</li>", "<h3> Heading 3</h3>",
    "<li>&lt;h4&gt; Heading 4&lt;/h4&gt;</li>", "<h4> Heading 4</h4>",
    "<li>&lt;h5&gt; Heading 5&lt;/h5&gt;</li>", "<h5> Heading 5</h5>",
    "<li>&lt;h6&gt; Heading 6&lt;/h6&gt;</li></code>", "<h6> Heading 6</h6>",

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
    "<code>&lt;p&gt;I am normal &lt;/p&gt;","<p>I am normal</p>",
    "&lt;p style='color:blue;'&gt;I am blue &lt;/p&gt;","<p style='color:blue;'>I am red</p>",
    "&lt;p style='font-size:30px;'&gt;I am big &lt;/p&gt;</code>","<p style='font-size:30px;'>I am big</p>",
  ],
  "HTML Formatting": [
    "<h2 style='text-align: center;'>HTML Formatting</h2>",
    "<p>Formatting elements were designed to display special types of text:</p>",
  "<li>&lt;b&gt;- Bold text<br>","<p>This text is normal.</p><p><b>This text is bold.</b></p>",
  "<li>&lt;strong&gt; - Important text<br>","<p>This text is normal.</p><p><strong>This text is important!</strong></p>",
  "<li>&lt;i&gt; - Italic text<br>","<p>This text is normal.</p><p><i>This text is italic.</i></p>",
  "<li>&lt;em&gt; - Emphasized text<br>","<p>This text is normal.</p>  <p><em>This text is emphasized.</em></p>",
  "<li>&lt;mark&gt; - Marked text<br>","<p>Do not forget to buy <mark>milk</mark> today.</p>",
  "<li>&lt;small&gt; - Smaller text<br>","<p>This is some normal text.</p> <p><small>This is some smaller text.</small></p>",
  "<li>&lt;del&gt; - Deleted text<br>","<p>My favorite color is <del>blue</del> red.</p>",
  "<li>&lt;ins&gt; - Inserted text<br>","<p>My favorite color <ins>red</ins>.</p>",
  "<li>&lt;sub&gt;- Subscript text<br>","<p>This is <sub>subscripted</sub> text.</p>",
  "<li>&lt;sup&gt; - Superscript text<br>","<p>This is <sup>superscripted</sup> text.</p>",
  ],
  "HTML Quotations": [
    "<h2 style='text-align: center;'>HTML Quotations</h2><p>Placeholder text for HTML Quotations.</p>"
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
    "<h2 style='text-align: center;'>HTML Colors</h2><p>Placeholder text for HTML Colors.</p>"
  ],
  "HTML CSS": [
    "<h2 style='text-align: center;'>HTML CSS</h2><p>Placeholder text for HTML CSS.</p>"
  ],
  "HTML Links": [
    "<h2 style='text-align: center;'>HTML Links</h2><p>Placeholder text for HTML Links.</p>"
  ],
  "HTML Images": [
    "<h2 style='text-align: center;'>HTML Images</h2>",
    "<p><li>Images can improve the design and the appearance of a web page.</li></p>",
    "<p><li>We can add an img to a website using the simple tag <code>&lt;img&gt;</code> .</li></p>",
    "<p><li>We will put the img-url in the attribute  <code>'src'</code></li></p>",
    "<p><li>For example:</li></p>",
    "<p><code>&lt;img src='img.jpj'&gt;</code></p>",
    "<p><code><img src='https://www.w3schools.com/html/workplace.jpg'></code></p>",
    "<p><li>We can controle the size of the image using  <code>'width' </code>and <code>'height'</code> attributes</li></p>",
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
    "</audio>"
  ], 
  "HTML Favicon": [
    "<h2 style='text-align: center;'>HTML Favicon</h2><p>Placeholder text for HTML Favicon.</p>"
  ],
  "HTML Page Title": [
    "<h2 style='text-align: center;'>HTML Page Title</h2><p>Placeholder text for HTML Page Title.</p>"
  ],
  "HTML Tables": [
    "<h2 style='text-align: center;'>HTML Tables</h2><p>Placeholder text for HTML Tables.</p>"
  ],
  "HTML Lists": [
    "<h2 style='text-align: center;'>HTML Lists</h2><p>Placeholder text for HTML Lists.</p>"
  ],
  "HTML Block & Inline": [
    "<h2 style='text-align: center;'>HTML Block & Inline</h2><p>Placeholder text for HTML Block & Inline.</p>"
  ],
  "HTML Div": [
    "<h2 style='text-align: center;'>HTML Div</h2><p>Placeholder text for HTML Div.</p>"
  ],
  "HTML Classes": [
    "<h2 style='text-align: center;'>HTML Classes</h2><p>Placeholder text for HTML Classes.</p>"
  ],
  "HTML Id": [
    "<h2 style='text-align: center;'>HTML Id</h2><p>Placeholder text for HTML Id.</p>"
  ],
  "HTML Iframes": [
    "<h2 style='text-align: center;'>HTML Iframes</h2><p>Placeholder text for HTML Iframes.</p>"
  ],
  "HTML JavaScript": [
    "<h2 style='text-align: center;'>HTML JavaScript</h2><p>Placeholder text for HTML JavaScript.</p>"
  ],
  "HTML File Paths": [
    "<h2 style='text-align: center;'>HTML File Paths</h2><p>Placeholder text for HTML File Paths.</p>"
  ],
  "HTML Head": [
    "<h2 style='text-align: center;'>HTML Head</h2><p>Placeholder text for HTML Head.</p>"
  ],
  "HTML Layout": [
    "<h2 style='text-align: center;'>HTML Layout</h2><p>Placeholder text for HTML Layout.</p>"
  ],
  "HTML Responsive": [
    "<h2 style='text-align: center;'>HTML Responsive</h2><p>Placeholder text for HTML Responsive.</p>"
  ],
  "HTML Computercode": [
    "<h2 style='text-align: center;'>HTML Computercode</h2><p>Placeholder text for HTML Computercode.</p>"
  ],
  "HTML Semantics": [
    "<h2 style='text-align: center;'>HTML Semantics</h2><p>Placeholder text for HTML Semantics.</p>"
  ],
  "HTML Style Guide": [
    "<h2 style='text-align: center;'>HTML Style Guide</h2><p>Placeholder text for HTML Style Guide.</p>"
  ],
  "HTML Entities": [
    "<h2 style='text-align: center;'>HTML Entities</h2><p>Placeholder text for HTML Entities.</p>"
  ],
  "HTML Symbols": [
    "<h2 style='text-align: center;'>HTML Symbols</h2><p>Placeholder text for HTML Symbols.</p>"
  ],
  "HTML Emojis": [
    "<h2 style='text-align: center;'>HTML Emojis</h2><p>Placeholder text for HTML Emojis.</p>"
  ],
  "HTML Charsets": [
    "<h2 style='text-align: center;'>HTML Charsets</h2><p>Placeholder text for HTML Charsets.</p>"
  ],
};
