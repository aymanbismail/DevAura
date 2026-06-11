import { Language } from "@/types/quizz";

export const languages: Language[] = [
  {
    id: 1,
    name: "HTML",
    slug: "html",
    logo: "/icons/html.svg",
    topicCount: 3,
    topics: [
      {
        id: "html-basics-headings",
        name: "Basic Structure and Headings",
        slug: "html-basics-headings",
        description: "Learn the basics of HyperText Markup Language (HTML).",
        questions: [
          {
            id: "html-basics-q1",
            question: "What does HTML stand for?",
            options: [
              { id: "opt1", text: "HyperText Markup Language" },
              { id: "opt2", text: "Hyper Transfer Markup Language" },
              { id: "opt3", text: "HighText Machine Language" },
              { id: "opt4", text: "Home Tool Markup Language" }
            ],
            correctAnswerId: "opt1",
            explanation: "HTML stands for HyperText Markup Language, which is the standard markup language for creating web pages."
          },
          {
            id: "html-basics-q2",
            question: "Which of these tags is used to create a main heading?",
            options: [
              { id: "opt1", text: "<p>" },
              { id: "opt2", text: "<h1>" },
              { id: "opt3", text: "<heading>" },
              { id: "opt4", text: "<h6>" }
            ],
            correctAnswerId: "opt2",
            explanation: "The <h1> tag is used to define the main heading in HTML."
          },
          {
            id: "html-basics-q3",
            question: "What is the correct syntax of doctype in HTML5?",
            options: [
              { id: "opt1", text: "</doctype html>" },
              { id: "opt2", text: "<doctype html>" },
              { id: "opt3", text: "<doctype html!>" },
              { id: "opt4", text: "<!doctype html>" }
            ],
            correctAnswerId: "opt4",
            explanation: "he correct syntax of HTML5 doctype is <!doctype html>, doctype is the very first thing to write in HTML5. <!doctype html> or <!DOCTYPE HTML> both are same because doctype keyword is not case sensitive."
          },
          {
            id: "html-basics-q4",
            question: "Which of the following is used to read an HTML page and render it?",
            options: [
              { id: "opt1", text: "Web server" },
              { id: "opt2", text: "Web network" },
              { id: "opt3", text: "Web browser" },
              { id: "opt4", text: "Web matrix" }
            ],
            correctAnswerId: "opt3",
            explanation: "A web browser (commonly referred to as a browser) is a software application for retrieving, presenting and traversing information resources on the World Wide Web."
          },
          {
            id: "html-basics-q5",
            question: "In which part of the HTML metadata is contained?",
            options: [
              { id: "opt1", text: "head tag" },
              { id: "opt2", text: "title tag" },
              { id: "opt3", text: "html tag" },
              { id: "opt4", text: "body tag" }
            ],
            correctAnswerId: "opt1",
            explanation: "Metadata is present in head."
          },
          {
            id: "html-basics-q6",
            question: "Which element is used to get highlighted text in HTML5?",
            options: [
              { id: "opt1", text: "<u>" },
              { id: "opt2", text: "<mark>" },
              { id: "opt3", text: "<highlight>" },
              { id: "opt4", text: "<b>" }
            ],
            correctAnswerId: "opt2",
            explanation: "The <mark> element is used to highlight a section of text."
          },
          {
            id: "html-basics-q7",
            question: "Which HTML tag is used for making character appearance bold?",
            options: [
              { id: "opt1", text: "<u>content</u>" },
              { id: "opt2", text: "<b>content</b>" },
              { id: "opt3", text: "<br>content</br>" },
              { id: "opt4", text: "<i>content</i>" }
            ],
            correctAnswerId: "opt2",
            explanation: "By enclosing words in the tags <b>and</b> we can make characters appear bold. "
          },
          {
            id: "html-basics-q8",
            question: "Among the following, which is the HTML paragraph tag?",
            options: [
              { id: "opt1", text: "<p>" },
              { id: "opt2", text: "<pre>" },
              { id: "opt3", text: "<hr>" },
              { id: "opt4", text: "<a>" }
            ],
            correctAnswerId: "opt1",
            explanation: "<p> tag is used for paragraph in HTML."
          },
          {
            id: "html-basics-q9",
            question: "Which HTML tag is used to convert the plain text into italic format?",
            options: [
              { id: "opt1", text: "<b>" },
              { id: "opt2", text: "<p>" },
              { id: "opt3", text: "<i>" },
              { id: "opt4", text: "<a>" }
            ],
            correctAnswerId: "opt3",
            explanation: "In HTML, <i> tag is used to convert the plain text into italic format."
          },
          {
            id: "html-basics-q10",
            question: "What is the use of <hr/> tag in HTML?",
            options: [
              { id: "opt1", text: "For making content appearance italics" },
              { id: "opt2", text: "To create vertical rule between sections" },
              { id: "opt3", text: "To create a line break" },
              { id: "opt4", text: "To create horizontal rule between sections" }
            ],
            correctAnswerId: "opt4",
            explanation: "To create a break between themes-such as a change of topic in a book or a new scene in a play-you can add a horizontal rule between sections using <hr/> tag."
          },
          {
            id: "html-basics-q11",
            question: "Which tag is used to define a subheading in HTML?",
            options: [
                { id: "opt1", text: "<h1>" },
                { id: "opt2", text: "<h2>" },
                { id: "opt3", text: "<head>" },
                { id: "opt4", text: "<subtitle>" }
            ],
            correctAnswerId: "opt2",
            explanation: "<h2> is commonly used to define subheadings, following the main heading <h1>."
            },
            {
            id: "html-basics-q12",
            question: "What is the correct nesting order of HTML elements?",
            options: [
                { id: "opt1", text: "<body><html><h1></h1></html></body>" },
                { id: "opt2", text: "<html><body><h1></h1></body></html>" },
                { id: "opt3", text: "<h1><html><body></body></html></h1>" },
                { id: "opt4", text: "<html><h1><body></body></h1></html>" }
            ],
            correctAnswerId: "opt2",
            explanation: "HTML documents must be properly nested. The <html> element wraps the entire page, followed by <body> and then content like <h1>."
            },
            {
            id: "html-basics-q13",
            question: "Which HTML tag is used to insert a line break?",
            options: [
                { id: "opt1", text: "<br>" },
                { id: "opt2", text: "<lb>" },
                { id: "opt3", text: "<break>" },
                { id: "opt4", text: "<line>" }
            ],
            correctAnswerId: "opt1",
            explanation: "<br> is used in HTML to insert a line break."
            },
            {
            id: "html-basics-q14",
            question: "Which tag contains meta information about the HTML document?",
            options: [
                { id: "opt1", text: "<body>" },
                { id: "opt2", text: "<meta>" },
                { id: "opt3", text: "<head>" },
                { id: "opt4", text: "<title>" }
            ],
            correctAnswerId: "opt3",
            explanation: "The <head> element contains meta information such as <meta>, <title>, and <link>."
            },
            {
                id: "html-basics-q15",
                question: "What is the correct order of heading tags from largest to smallest in HTML?",
                options: [
                    { id: "opt1", text: "<h6>, <h5>, <h4>, <h3>, <h2>, <h1>" },
                    { id: "opt2", text: "<h1>, <h2>, <h3>, <h4>, <h5>, <h6>" },
                    { id: "opt3", text: "<header>, <title>, <h1>, <h2>, <h3>, <h4>" },
                    { id: "opt4", text: "<h1>, <h3>, <h2>, <h4>, <h6>, <h5>" }
                ],
                correctAnswerId: "opt2",
                explanation: "HTML headings range from <h1> (the largest and most important) to <h6> (the smallest)."
                },
            {
            id: "html-basics-q16",
            question: "Which of these tags is not a heading tag in HTML?",
            options: [
                { id: "opt1", text: "<h5>" },
                { id: "opt2", text: "<h3>" },
                { id: "opt3", text: "<h9>" },
                { id: "opt4", text: "<h1>" }
            ],
            correctAnswerId: "opt3",
            explanation: "HTML only defines heading tags from <h1> to <h6>. <h9> is not a valid heading tag."
            },
            {
            id: "html-basics-q17",
           question: "Is it the best way to include H1 heading only one time on the web page?",
           options: [
            { id: "opt1", text: "True" },
            { id: "opt2", text: "False" }
            ],
           correctAnswerId: "opt1",
           explanation: "It is recommended to use only one <h1> element per page to maintain a clear and semantic structure, which is beneficial for SEO."
            },
            {
            id: "html-basics-q18",
            question: "What is the purpose of the <title> tag in HTML?",
            options: [
                { id: "opt1", text: "To display a heading on the page" },
                { id: "opt2", text: "To define metadata" },
                { id: "opt3", text: "To set the title shown on the browser tab" },
                { id: "opt4", text: "To add a subtitle" }
            ],
            correctAnswerId: "opt3",
            explanation: "The <title> tag defines the page title shown in the browser's title bar or tab."
            },
            {
            id: "html-basics-q19",
            question: "Which HTML tag is used to group content together for styling or layout purposes?",
            options: [
                { id: "opt1", text: "<span>" },
                { id: "opt2", text: "<group>" },
                { id: "opt3", text: "<div>" },
                { id: "opt4", text: "<body>" }
            ],
            correctAnswerId: "opt3",
            explanation: "<div> is a block-level element used to group content for layout and styling."
            },
            {
            id: "html-basics-q20",
            question: " How do we write comments in HTML?",
            options: [
                { id: "opt1", text: "</…….>" },
                { id: "opt2", text: "<!……>" },
                { id: "opt3", text: "</……/>" },
                { id: "opt4", text: "<…….!>" }
            ],
            correctAnswerId: "opt2",
            explanation: "If one wants to add a comment in code, add the text between these characters <!…..comment….>."
            }
          // Add more questions as needed
        ]
      },
      {
        id: "links-and-lists",
        name: "Links and Lists",
        slug: "links-and-lists",
        description: "Learn the basics of HyperText Markup Language (HTML).",
        questions: [
          {
            id: "html-links-q1",
            question: "Which tag is used to create a numbered list in HTML?",
            options: [
              { id: "opt1", text: "<ol>" },
              { id: "opt2", text: "<ul>" },
              { id: "opt3", text: "<li>" },
              { id: "opt4", text: "<ll>" }
            ],
            correctAnswerId: "opt1",
            explanation: "<ol> tag is used to create the numbered list or ordered list items in an HTML document."
          },
          {
            id: "html-links-q2",
            question: "Which element is used for creating links?",
            options: [
              { id: "opt1", text: "<a>" },
              { id: "opt2", text: "<p>" },
              { id: "opt3", text: "<li>" },
              { id: "opt4", text: "<ol>" }
            ],
            correctAnswerId: "opt1",
            explanation: "<a> element is used for creating links. We can click anything written between opening <a> tag and closing </a> tag."
          },
          {
            id: "html-links-q3",
            question: "Which one of the following is not the value of the target attribute?",
            options: [
              { id: "opt1", text: "_blank" },
              { id: "opt2", text: "_top" },
              { id: "opt3", text: "_self" },
              { id: "opt4", text: "_empty" }
            ],
            correctAnswerId: "opt4",
            explanation: "Where to open linked document is specified by target attribute. It can have the values _blank, _top, _parent, _self, framename. _blank opens linked document is a new tab or window."
          },
          {
            id: "html-links-q4",
            question: "What does the <ul> tag represent?",
            options: [
                { id: "opt1", text: "Unordered list" },
                { id: "opt2", text: "Ordered list" },
                { id: "opt3", text: "List item" },
                { id: "opt4", text: "Definition list" }
            ],
            correctAnswerId: "opt1",
            explanation: "<ul> tag is used to create an unordered list in HTML."
            },
            {
            id: "html-links-q5",
            question: "Which attribute is used to specify the URL of the page the link goes to?",
            options: [
                { id: "opt1", text: "src" },
                { id: "opt2", text: "href" },
                { id: "opt3", text: "link" },
                { id: "opt4", text: "url" }
            ],
            correctAnswerId: "opt2",
            explanation: "The href attribute specifies the URL of the page the link goes to."
            },
            {
            id: "html-links-q6",
            question: "Which tag is used to define a list item?",
            options: [
                { id: "opt1", text: "<li>" },
                { id: "opt2", text: "<item>" },
                { id: "opt3", text: "<list>" },
                { id: "opt4", text: "<ul>" }
            ],
            correctAnswerId: "opt1",
            explanation: "<li> tag is used to define a list item in both ordered and unordered lists."
            },
            {
            id: "html-links-q7",
            question: "What is the default style of an unordered list?",
            options: [
                { id: "opt1", text: "Square bullets" },
                { id: "opt2", text: "No bullets" },
                { id: "opt3", text: "Circle bullets" },
                { id: "opt4", text: "Diamond bullets" }
            ],
            correctAnswerId: "opt3",
            explanation: "The default style of an unordered list is circle bullets."
            },
            {
            id: "html-links-q8",
            question: "Which tag is used to create a definition list?",
            options: [
                { id: "opt1", text: "<ul>" },
                { id: "opt2", text: "<ol>" },
                { id: "opt3", text: "<list>" },
                { id: "opt4", text: "<dl>" }
            ],
            correctAnswerId: "opt4",
            explanation: "<dl> tag is used to create a definition list in HTML."
            },
            {
            id: "html-links-q9",
            question: "What does the <dt> tag represent?",
            options: [
                { id: "opt1", text: "Definition term" },
                { id: "opt2", text: "Definition description" },
                { id: "opt3", text: "List item" },
                { id: "opt4", text: "Unordered list" }
            ],
            correctAnswerId: "opt1",
            explanation: "<dt> tag is used to define a term in a definition list."
            },
            {
            id: "html-links-q10",
            question: "What does the <dd> tag represent?",
            options: [
                { id: "opt1", text: "Definition term" },
                { id: "opt2", text: "Definition description" },
                { id: "opt3", text: "List item" },
                { id: "opt4", text: "Unordered list" }
            ],
            correctAnswerId: "opt2",
            explanation: "<dd> tag is used to provide a description for a term in a definition list."
            },
            {
            id: "html-links-q11",
            question: "Which attribute can be used to open a link in a new tab?",
            options: [
                { id: "opt1", text: "target='_new'" },
                { id: "opt2", text: "target='_self'" },
                { id: "opt3", text: "target='_blank'" },
                { id: "opt4", text: "target='_parent'" }
            ],
            correctAnswerId: "opt3",
            explanation: "Using target='_blank' opens the link in a new tab or window."
            },
            {
            id: "html-links-q12",
            question: "Which of the following is a valid way to create a link to an email address?",
            options: [
                { id: "opt1", text: "<a href='mailto:example@example.com'>Email Us</a>" },
                { id: "opt2", text: "<a href='http://example@example.com'>Email Us</a>" },
                { id: "opt3", text: "<a href='tel:123456789'>Call Us</a>" },
                { id: "opt4", text: "<a href='sms:123456789'>Text Us</a>" }
            ],
            correctAnswerId: "opt1",
            explanation: "The 'mailto:' scheme is used to create a link that opens the user's email client."
            },
            {
            id: "html-links-q13",
            question: "What is the purpose of the <nav> tag?",
            options: [
                { id: "opt1", text: "To define a section of the document" },
                { id: "opt2", text: "To define navigation links" },
                { id: "opt3", text: "To define a footer" },
                { id: "opt4", text: "To define a header" }
            ],
            correctAnswerId: "opt2",
            explanation: "<nav> tag is used to define a set of navigation links."
            },
            {
            id: "html-links-q14",
            question: "Which of the following is a valid HTML comment?",
            options: [
                { id: "opt1", text: "<!-- This is a comment -->" },
                { id: "opt2", text: "// This is a comment" },
                { id: "opt3", text: "/* This is a comment */" },
                { id: "opt4", text: "<# This is a comment #>" }
            ],
            correctAnswerId: "opt1",
            explanation: "HTML comments are written using <!-- comment --> syntax."
            },
            {
            id: "html-links-q15",
            question: "Which tag is used to create a hyperlink?",
            options: [
                { id: "opt1", text: "<link>" },
                { id: "opt2", text: "<a>" },
                { id: "opt3", text: "<href>" },
                { id: "opt4", text: "<url>" }
            ],
            correctAnswerId: "opt2",
            explanation: "<a> tag is used to create hyperlinks in HTML."
            },
            {
            id: "html-links-q16",
            question: "What is the correct way to create a list with nested lists?",
            options: [
                { id: "opt1", text: "<ul><li>Item 1<li>Subitem 1</li></li></ul>" },
                { id: "opt2", text: "<ul><li>Item 1><ul><li>Subitem 1</li></ul></li></ul>" },
                { id: "opt3", text: "<ul><li>Item 1</li><ul><li>Subitem 1</li></ul></li></ul>" },
                { id: "opt4", text: "<ul><li>Item 1<ul><li>Subitem 1</li></ul></li></ul>" }
            ],
            correctAnswerId: "opt4",
            explanation: "To create nested lists, you can place a <ul> inside a <li>."
            },
            {
            id: "html-links-q17",
            question: "Which of the following is not a valid list type in HTML?",
            options: [
                { id: "opt1", text: "Ordered list" },
                { id: "opt2", text: "Unordered list" },
                { id: "opt3", text: "Description list" },
                { id: "opt4", text: "Mixed list" }
            ],
            correctAnswerId: "opt4",
            explanation: "There is no 'mixed list' type in HTML; lists are either ordered, unordered, or definition lists."
            },
            {
            id: "html-links-q18",
            question: "What is the purpose of the <li> tag?",
            options: [
                { id: "opt1", text: "To define a list item" },
                { id: "opt2", text: "To define a link" },
                { id: "opt3", text: "To define a paragraph" },
                { id: "opt4", text: "To define a header" }
            ],
            correctAnswerId: "opt1",
            explanation: "<li> tag is used to define an item in a list."
            },
            {
            id: "html-links-q19",
            question: "Which of the following attributes is not valid for the <a> tag?",
            options: [
                { id: "opt1", text: "href" },
                { id: "opt2", text: "target" },
                { id: "opt3", text: "rel" },
                { id: "opt4", text: "style" }
            ],
            correctAnswerId: "opt4",
            explanation: "All listed attributes are valid for the <a> tag except 'style', which is not specific to links."
            },
            {
            id: "html-links-q20",
            question: "What does the <a> tag's rel attribute specify?",
            options: [
                { id: "opt1", text: "The target of the link" },
                { id: "opt2", text: "Relationship between the current document and the linked document" },
                { id: "opt3", text: "The style of the link" },
                { id: "opt4", text: "The title of the link" }
            ],
            correctAnswerId: "opt2",
            explanation: "The rel attribute specifies the relationship between the current document and the linked document."
            }
          
        ]
      },
      {
        id: "photos-and-videos",
        name: "Photos and Videos",
        slug: "photos-and-videos",
        description: "Learn the basics of HyperText Markup Language (HTML).",
        questions: [
          {
            id: "html-photos-q1",
            question: "Which of the following elements in HTML5 defines video or movie content?",
            options: [
              { id: "opt1", text: "<video>" },
              { id: "opt2", text: "<movie>" },
              { id: "opt3", text: "<audio>" },
              { id: "opt4", text: "<media>" }
            ],
            correctAnswerId: "opt1",
            explanation: "The HTML5 video element specifies a standard way to embed a video in a webpage."
          },
          {
            id: "html-photos-q2",
            question: "Which HTML tag is used to insert an image?",
            options: [
              { id: "opt1", text: "<img url=”htmllogo.jpg” />" },
              { id: "opt2", text: "<img alt=”htmllogo.jpg” />" },
              { id: "opt3", text: "<img src=”htmllogo.jpg” />" },
              { id: "opt4", text: "<img link=”htmllogo.jpg” />" }
            ],
            correctAnswerId: "opt3",
            explanation: "In HTML, <img> tag is used to insert an image in HTML page. Image tag has two attributes (src and Alt)."
          },
          {
            id: "html-photos-q3",
            question: "In HTML Audio/Video DOM, __________ sets or returns whether the audio/video should be loaded when the page loads.",
            options: [
              { id: "opt1", text: "preload" },
              { id: "opt2", text: "autoplay" },
              { id: "opt3", text: "buffered" },
              { id: "opt4", text: "controller" }
            ],
            correctAnswerId: "opt1",
            explanation: "The preload property allows the author to provide a hint to the browser about what he/she thinks will lead to the best user experience."
          },
             {
            id: "html-photos-q4",
            question: "Which attribute is used to specify the source of the video in the <video> tag?",
            options: [
                { id: "opt1", text: "source" },
                { id: "opt2", text: "src" },
                { id: "opt3", text: "file" },
                { id: "opt4", text: "href" }
            ],
            correctAnswerId: "opt2",
            explanation: "The src attribute in the <video> tag specifies the URL of the video file."
            },
            {
            id: "html-photos-q5",
            question: "Which of the following attributes can be used to make a video play automatically?",
            options: [
                { id: "opt1", text: "play" },
                { id: "opt2", text: "start" },
                { id: "opt3", text: "autoplay" },
                { id: "opt4", text: "loop" }
            ],
            correctAnswerId: "opt3",
            explanation: "The autoplay attribute makes the video start playing as soon as it is ready."
            },
            {
            id: "html-photos-q6",
            question: "What does the <audio> tag do in HTML?",
            options: [
                { id: "opt1", text: "Defines video content" },
                { id: "opt2", text: "Defines text content" },
                { id: "opt3", text: "Defines image content" },
                { id: "opt4", text: "Defines audio content" }
            ],
            correctAnswerId: "opt4",
            explanation: "The <audio> tag is used to embed sound content in a document."
            },
            {
            id: "html-photos-q7",
            question: "Which attribute is used to specify the audio file in the <audio> tag?",
            options: [
                { id: "opt1", text: "file" },
                { id: "opt2", text: "source" },
                { id: "opt3", text: "src" },
                { id: "opt4", text: "href" }
            ],
            correctAnswerId: "opt3",
            explanation: "The src attribute in the <audio> tag specifies the URL of the audio file."
            },
            {
            id: "html-photos-q8",
            question: "Which of the following is a valid way to include multiple sources for a video?",
            options: [
                { id: "opt1", text: "<video><source src='video.mp4'></video><video><source src='video.ogg'></video>" },
                { id: "opt2", text: "<video src='video.mp4' src='video.ogg'></video>" },
                { id: "opt3", text: "<video><source src='video.mp4' type='video/mp4'><source src='video.ogg' type='video/ogg'></video>" },
                { id: "opt4", text: "<video><source src='video.mp4' /><source src='video.ogg' /></video>" }
            ],
            correctAnswerId: "opt3",
            explanation: "You can include multiple <source> elements within a <video> tag to provide different video formats."
            },
            {
            id: "html-photos-q9",
            question: "What does the controls attribute do in the <video> tag?",
            options: [
                { id: "opt1", text: "Hires video controls" },
                { id: "opt2", text: "Autoplays the video" },
                { id: "opt3", text: "Displays video controls" },
                { id: "opt4", text: "Loops the video" }
            ],
            correctAnswerId: "opt3",
            explanation: "The controls attribute adds video controls, like play, pause, and volume."
            },
            {
            id: "html-photos-q10",
            question: "Which of the following is not a valid video format for the <video> tag?",
            options: [
                { id: "opt1", text: "AVI" },
                { id: "opt2", text: "MP4" },
                { id: "opt3", text: "WEBM" },
                { id: "opt4", text: "OGG" }
            ],
            correctAnswerId: "opt1",
            explanation: "AVI is not a valid format for the <video> tag; common formats include MP4, WEBM, and OGG."
            },
            {
            id: "html-photos-q11",
            question: "What is the purpose of the alt attribute in the <img> tag?",
            options: [
                { id: "opt1", text: "To provide alternative text when image fails to load" },
                { id: "opt2", text: "To specify image alignment" },
                { id: "opt3", text: "To set image dimensions" },
                { id: "opt4", text: "To link the image" }
            ],
            correctAnswerId: "opt1",
            explanation: "The alt attribute provides alternative text for an image if it cannot be displayed."
            },
            {
            id: "html-photos-q12",
            question: "Which attribute controls whether an audio file should play repeatedly?",
            options: [
                { id: "opt1", text: "repeat" },
                { id: "opt2", text: "autoplay" },
                { id: "opt3", text: "loop" },
                { id: "opt4", text: "replay" }
            ],
            correctAnswerId: "opt3",
            explanation: "The loop attribute makes the audio play repeatedly."
            },
            {
            id: "html-photos-q13",
            question: "What does the poster attribute in <video> specify?",
            options: [
                { id: "opt1", text: "Video thumbnail image" },
                { id: "opt2", text: "Video duration" },
                { id: "opt3", text: "Video quality" },
                { id: "opt4", text: "Video title" }
            ],
            correctAnswerId: "opt1",
            explanation: "The poster attribute specifies an image to show while the video is downloading or before playback."
            },
            {
            id: "html-photos-q14",
            question: "Which HTML5 element is used for vector graphics?",
            options: [
                { id: "opt1", text: "<canvas>" },
                { id: "opt2", text: "<svg>" },
                { id: "opt3", text: "<img>" },
                { id: "opt4", text: "<figure>" }
            ],
            correctAnswerId: "opt2",
            explanation: "The <svg> element is used for scalable vector graphics in HTML5."
            },
            {
            id: "html-photos-q15",
            question: "What is the purpose of the <track> element in HTML5?",
            options: [
                { id: "opt1", text: "To add captions/subtitles to media" },
                { id: "opt2", text: "To create audio tracks" },
                { id: "opt3", text: "To animate elements" },
                { id: "opt4", text: "To define media controls" }
            ],
            correctAnswerId: "opt1",
            explanation: "The <track> element provides text tracks like subtitles or captions for media elements."
            },
            {
            id: "html-photos-q16",
            question: "Which attribute specifies that a video should play without sound?",
            options: [
                { id: "opt1", text: "nosound" },
                { id: "opt2", text: "mute" },
                { id: "opt3", text: "silent" },
                { id: "opt4", text: "muted" }
            ],
            correctAnswerId: "opt4",
            explanation: "The muted attribute specifies that the video should play without sound."
            },
            {
            id: "html-photos-q17",
            question: "Which tag is used to group multiple image resources?",
            options: [
                { id: "opt1", text: "<images>" },
                { id: "opt2", text: "<picture>" },
                { id: "opt3", text: "<gallery>" },
                { id: "opt4", text: "<imgset>" }
            ],
            correctAnswerId: "opt2",
            explanation: "The <picture> element allows grouping multiple image resources for responsive design."
            },
            {
            id: "html-photos-q18",
            question: "What is the correct way to make a video fill its container while maintaining aspect ratio?",
            options: [
                { id: "opt1", text: "object-fit: fill" },
                { id: "opt2", text: "object-fit: contain" },
                { id: "opt3", text: "object-fit: cover" },
                { id: "opt4", text: "object-fit: scale" }
            ],
            correctAnswerId: "opt3",
            explanation: "object-fit: cover makes the video fill its container while maintaining aspect ratio."
            },
            {
            id: "html-photos-q19",
            question: "Which attribute defines the width of an image in pixels?",
            options: [
                { id: "opt1", text: "size" },
                { id: "opt2", text: "width" },
                { id: "opt3", text: "px" },
                { id: "opt4", text: "dimension" }
            ],
            correctAnswerId: "opt2",
            explanation: "The width attribute specifies the width of an image in pixels."
            },
            {
            id: "html-photos-q20",
            question: "Which of these is NOT a valid attribute for <source> element?",
            options: [
                { id: "opt1", text: "src" },
                { id: "opt2", text: "type" },
                { id: "opt3", text: "media" },
                { id: "opt4", text: "href" }
            ],
            correctAnswerId: "opt4",
            explanation: "<source> elements use src, type, and media attributes, but not href."
            }
          
        ]
      },
      {
        id: "forms-and-inputs",
        name: "Forms and Inputs",
        slug: "forms-and-inputs",
        description: "Learn the basics of HyperText Markup Language (HTML).",
        questions: [
          {
            id: "html-forms-q1",
            question: "What is the default type of ‘type’ attribute of <input> element?",
            options: [
              { id: "opt1", text: "Text" },
              { id: "opt2", text: "Password" },
              { id: "opt3", text: "Numerals" },
              { id: "opt4", text: "Special Characters" }
            ],
            correctAnswerId: "opt1",
            explanation: "Text input type defines single line text field."
          },
          {
            id: "html-forms-q2",
            question: "Which attribute defines the file-select field?",
            options: [
              { id: "opt1", text: "file" },
              { id: "opt2", text: "checkbox" },
              { id: "opt3", text: "button" },
              { id: "opt4", text: "text" }
            ],
            correctAnswerId: "opt1",
            explanation: "file input type defines a file-select field, also gives a “Browse” button for file uploads."
          },
          {
            id: "html-forms-q3",
            question: "Which of the following is not used with password attribute?",
            options: [
              { id: "opt1", text: "name" },
              { id: "opt2", text: "size" },
              { id: "opt3", text: "maxlength" },
              { id: "opt4", text: "min" }
            ],
            correctAnswerId: "opt4",
            explanation: "min is not used with password attribute ."
          },
          {
            id: "html-forms-q4",
            question: "Which element is used to create multi-line text input?",
            options: [
              { id: "opt1", text: "text" },
              { id: "opt2", text: "textarea" },
              { id: "opt3", text: "submit" },
              { id: "opt4", text: "radio button" }
            ],
            correctAnswerId: "opt2",
            explanation: "For creating multi-line text input we use <textarea> element."
          },
          {
            id: "html-forms-q5",
            question: "Which attribute is not used for the radio type?",
            options: [
              { id: "opt1", text: "name" },
              { id: "opt2", text: "value" },
              { id: "opt3", text: "checked" },
              { id: "opt4", text: "selected" }
            ],
            correctAnswerId: "opt4",
            explanation: "selected is not used with radio type ."
          },
          {
            id: "html-forms-q6",
            question: "Which attribute is used to pre-select a radio button by default?",
            options: [
            { id: "opt1", text: "name" },
           { id: "opt2", text: "value" },
            {id: "opt3", text: "checked" },
           { id: "opt4", text: "selected" }
          ],
          correctAnswerId: "opt3",
          explanation: "The 'checked' attribute is used to pre-select a radio button by default. Note that only one radio button in a group can be checked."
          },
        {
        id: "html-forms-q7",
        question: "What does the action attribute in a form specify?",
        options: [
        { id: "opt1", text: "The method of form submission" },
        { id: "opt2", text: "The URL to send the form data" },
        { id: "opt3", text: "The type of input fields" },
        { id: "opt4", text: "The name of the form" }
      ],
        correctAnswerId: "opt2",
        explanation: "The action attribute specifies the URL where the form data will be sent."
    },
    {
        id: "html-forms-q8",
        question: "Which method is used to send form data to the server?",
        options: [
        { id: "opt1", text: "GET" },
        { id: "opt2", text: "POST" },
        { id: "opt3", text: "Both GET and POST" },
        { id: "opt4", text: "None of the above" }
      ],
        correctAnswerId: "opt3",
        explanation: "Both GET and POST methods can be used to send form data to the server."
    },
    {
      id: "html-forms-q9",
      question: "What is the purpose of the method attribute in a form?",
      options: [
        { id: "opt1", text: "To specify the form's action" },
        { id: "opt2", text: "To define how to send form data" },
        { id: "opt3", text: "To set the form's target" },
        { id: "opt4", text: "To validate form inputs" }
      ],
      correctAnswerId: "opt2",
      explanation: "The method attribute defines how to send form data (GET or POST)."
    },
    {
      id: "html-forms-q10",
      question: "Which input type is used for a checkbox?",
      options: [
        { id: "opt1", text: "checkbox" },
        { id: "opt2", text: "radio" },
        { id: "opt3", text: "text" },
        { id: "opt4", text: "button" }
      ],
      correctAnswerId: "opt1",
      explanation: "The checkbox input type is used for checkboxes."
    },
    {
      id: "html-forms-q11",
      question: "What is the purpose of the placeholder attribute?",
      options: [
        { id: "opt1", text: "To provide a default value" },
        { id: "opt2", text: "To give a hint to the user" },
        { id: "opt3", text: "To specify the input type" },
        { id: "opt4", text: "To validate the input" }
      ],
      correctAnswerId: "opt2",
      explanation: "The placeholder attribute provides a hint to the user about what to enter in the input field."
    },
    {
      id: "html-forms-q12",
      question: "Which attribute is used to group related radio buttons?",
      options: [
        { id: "opt1", text: "name" },
        { id: "opt2", text: "value" },
        { id: "opt3", text: "checked" },
        { id: "opt4", text: "form" }
      ],
      correctAnswerId: "opt1",
      explanation: "The name attribute is used to group related radio buttons."
    },
    {
      id: "html-forms-q13",
      question: "What does the required attribute do?",
      options: [
        { id: "opt1", text: "Makes the input field optional" },
        { id: "opt2", text: "Makes the input field mandatory" },
        { id: "opt3", text: "Sets a default value" },
        { id: "opt4", text: "Limits the input length" }
      ],
      correctAnswerId: "opt2",
      explanation: "The required attribute makes the input field mandatory."
    },
    {
      id: "html-forms-q14",
      question: "Which input type is used for entering a date?",
      options: [
        { id: "opt1", text: "date" },
        { id: "opt2", text: "datetime" },
        { id: "opt3", text: "calendar" },
        { id: "opt4", text: "time" }
      ],
      correctAnswerId: "opt1",
      explanation: "The date input type is used for entering a date."
    },
    {
      id: "html-forms-q15",
      question: "What is the purpose of the autocomplete attribute?",
      options: [
        { id: "opt1", text: "To enable auto-filling of input fields" },
        { id: "opt2", text: "To disable form submission" },
        { id: "opt3", text: "To validate input" },
        { id: "opt4", text: "To set input type" }
      ],
      correctAnswerId: "opt1",
      explanation: "The autocomplete attribute enables auto-filling of input fields based on previous entries."
    },
    {
      id: "html-forms-q16",
      question: "Which element is used to create a dropdown list?",
      options: [
        { id: "opt1", text: "<select>" },
        { id: "opt2", text: "<dropdown>" },
        { id: "opt3", text: "<list>" },
        { id: "opt4", text: "<option>" }
      ],
      correctAnswerId: "opt1",
      explanation: "The <select> element is used to create a dropdown list."
    },
    {
      id: "html-forms-q17",
      question: "What does the value attribute represent in an input element?",
      options: [
        { id: "opt1", text: "The type of input" },
        { id: "opt2", text: "The default value of the input" },
        { id: "opt3", text: "The name of the input" },
        { id: "opt4", text: "The label of the input" }
      ],
      correctAnswerId: "opt2",
      explanation: "The value attribute represents the default value of the input element."
    },
    {
      id: "html-forms-q18",
      question: "Which input type is used for entering a telephone number?",
      options: [
        { id: "opt1", text: "tel" },
        { id: "opt2", text: "phone" },
        { id: "opt3", text: "text" },
        { id: "opt4", text: "number" }
      ],
      correctAnswerId: "opt1",
      explanation: "The tel input type is used for entering a telephone number."
    },
    {
      id: "html-forms-q19",
      question: "What is the purpose of the target attribute in a form?",
      options: [
        { id: "opt1", text: "To specify where to open the response" },
        { id: "opt2", text: "To define the form's action" },
        { id: "opt3", text: "To set the method of submission" },
        { id: "opt4", text: "To validate the form" }
      ],
      correctAnswerId: "opt1",
      explanation: "The target attribute specifies where to open the response after submitting the form."
    },
    {
      id: "html-forms-q20",
      question: "Which input type is used for entering a URL?",
      options: [
        { id: "opt1", text: "url" },
        { id: "opt2", text: "link" },
        { id: "opt3", text: "text" },
        { id: "opt4", text: "web" }
      ],
      correctAnswerId: "opt1",
      explanation: "The url input type is used for entering a URL."
    },
         
          
        ]
      },
      {
        id: "tables-and-iframes",
        name: "Tables and iFrames",
        slug: "tables-and-iframes",
        description: "Learn the basics of HyperText Markup Language (HTML).",
        questions: [
          {
            id: "html-tables-q1",
            question: "Each cell of the table can be represented by using __________",
            options: [
              { id: "opt1", text: "<tr>" },
              { id: "opt2", text: "<td>" },
              { id: "opt3", text: "<th>" },
              { id: "opt4", text: "<thead>" }
            ],
            correctAnswerId: "opt2",
            explanation: "td stands for table data, we can represent each cell of the table by using <td>, at the end we used </td> tag."
          },
          {
            id: "html-tables-q2",
            question: "Headings of table lies inside ___________",
            options: [
              { id: "opt1", text: "<thead>" },
              { id: "opt2", text: "<tfoot>" },
              { id: "opt3", text: "<th>" },
              { id: "opt4", text: "<tbody>" }
            ],
            correctAnswerId: "opt1",
            explanation: "Headings of the table lies inside <thead> element."
          },
          {
            id: "html-tables-q3",
            question: "For adding caption to the table we use ____________",
            options: [
              { id: "opt1", text: "<caption>" },
              { id: "opt2", text: "<thead>" },
              { id: "opt3", text: "<th>" },
              { id: "opt4", text: "<tr>" }
            ],
            correctAnswerId: "opt1",
            explanation: "For adding caption to the table we use <caption> tag."
          },
          {
            id: "html-tables-q4",
            question: "Borders can’t be applied on ________________",
            options: [
              { id: "opt1", text: "<th>" },
              { id: "opt2", text: "<td>" },
              { id: "opt3", text: "<tr>" },
              { id: "opt4", text: "<thead>" }
            ],
            correctAnswerId: "opt3",
            explanation: "Borders can’t be applied on <tr> elements. It can’t be applied on table structural elements."
          },
              {
      id: "html-tables-q5",
      question: "Which attribute is used to specify the number of columns a cell should span?",
      options: [
        { id: "opt1", text: "rowspan" },
        { id: "opt2", text: "colspan" },
        { id: "opt3", text: "span" },
        { id: "opt4", text: "width" }
      ],
      correctAnswerId: "opt2",
      explanation: "The colspan attribute specifies the number of columns a cell should span."
    },
    {
      id: "html-tables-q6",
      question: "Which element is used to group footer content in a table?",
      options: [
        { id: "opt1", text: "<tfoot>" },
        { id: "opt2", text: "<thead>" },
        { id: "opt3", text: "<tbody>" },
        { id: "opt4", text: "<caption>" }
      ],
      correctAnswerId: "opt1",
      explanation: "The <tfoot> element is used to group footer content in a table."
    },
    {
      id: "html-tables-q7",
      question: "What does the <th> element represent in a table?",
      options: [
        { id: "opt1", text: "Table header" },
        { id: "opt2", text: "Table data" },
        { id: "opt3", text: "Table row" },
        { id: "opt4", text: "Table footer" }
      ],
      correctAnswerId: "opt1",
      explanation: "<th> element represents a header cell in a table."
    },
    {
      id: "html-tables-q8",
      question: "Which attribute is used to set the width of a table?",
      options: [
        { id: "opt1", text: "width" },
        { id: "opt2", text: "size" },
        { id: "opt3", text: "height" },
        { id: "opt4", text: "length" }
      ],
      correctAnswerId: "opt1",
      explanation: "The width attribute is used to set the width of a table."
    },
    {
      id: "html-tables-q9",
      question: "Which element is used to create a new row in a table?",
      options: [
        { id: "opt1", text: "<tr>" },
        { id: "opt2", text: "<td>" },
        { id: "opt3", text: "<th>" },
        { id: "opt4", text: "<table>" }
      ],
      correctAnswerId: "opt1",
      explanation: "<tr> element is used to create a new row in a table."
    },
    {
      id: "html-tables-q10",
      question: "What is the purpose of the <caption> element in a table?",
      options: [
        { id: "opt1", text: "To define the table's title" },
        { id: "opt2", text: "To create a header" },
        { id: "opt3", text: "To add a footer" },
        { id: "opt4", text: "To group rows" }
      ],
      correctAnswerId: "opt1",
      explanation: "The <caption> element is used to define the table's title."
    },
    {
      id: "html-tables-q11",
      question: "Which attribute can be used to merge two or more rows in a table?",
      options: [
        { id: "opt1", text: "rowspan" },
        { id: "opt2", text: "colspan" },
        { id: "opt3", text: "merge" },
        { id: "opt4", text: "combine" }
      ],
      correctAnswerId: "opt1",
      explanation: "The rowspan attribute is used to merge two or more rows in a table."
    },
    {
      id: "html-tables-q12",
      question: "What does the <tbody> element represent in a table?",
      options: [
        { id: "opt1", text: "Table body" },
        { id: "opt2", text: "Table header" },
        { id: "opt3", text: "Table footer" },
        { id: "opt4", text: "Table caption" }
      ],
      correctAnswerId: "opt1",
      explanation: "<tbody> element represents the body of the table."
    },
    {
      id: "html-tables-q13",
      question: "Which attribute is used to specify the alignment of the content in a table cell?",
      options: [
        { id: "opt1", text: "align" },
        { id: "opt2", text: "valign" },
        { id: "opt3", text: "style" },
        { id: "opt4", text: "position" }
      ],
      correctAnswerId: "opt1",
      explanation: "The align attribute is used to specify the alignment of the content in a table cell."
    },
    {
      id: "html-tables-q14",
      question: "Which element is used to create an inline frame?",
      options: [
        { id: "opt1", text: "<iframe>" },
        { id: "opt2", text: "<frame>" },
        { id: "opt3", text: "<inline>" },
        { id: "opt4", text: "<object>" }
      ],
      correctAnswerId: "opt1",
      explanation: "<iframe> element is used to create an inline frame."
    },
    {
      id: "html-tables-q15",
      question: "What attribute is used to specify the source URL of an iframe?",
      options: [
        { id: "opt1", text: "src" },
        { id: "opt2", text: "href" },
        { id: "opt3", text: "url" },
        { id: "opt4", text: "link" }
      ],
      correctAnswerId: "opt1",
      explanation: "The src attribute is used to specify the source URL of an iframe."
    },
    {
      id: "html-tables-q16",
      question: "Which attribute can be used to specify the height of an iframe?",
      options: [
        { id: "opt1", text: "height" },
        { id: "opt2", text: "size" },
        { id: "opt3", text: "width" },
        { id: "opt4", text: "length" }
      ],
      correctAnswerId: "opt1",
      explanation: "The height attribute is used to specify the height of an iframe."
    },
    {
      id: "html-tables-q17",
      question: "What does the 'sandbox' attribute do in an iframe?",
      options: [
        { id: "opt1", text: "Restricts actions in the iframe" },
        { id: "opt2", text: "Sets the iframe's border" },
        { id: "opt3", text: "Defines the iframe's size" },
        { id: "opt4", text: "Specifies the source" }
      ],
      correctAnswerId: "opt1",
      explanation: "The sandbox attribute restricts actions in the iframe for security purposes."
    },
    {
      id: "html-tables-q18",
      question: "Which attribute is used to specify the frame border width in an iframe?",
      options: [
        { id: "opt1", text: "border" },
        { id: "opt2", text: "frameborder" },
        { id: "opt3", text: "width" },
        { id: "opt4", text: "style" }
      ],
      correctAnswerId: "opt2",
      explanation: "The frameborder attribute is used to specify the frame border width in an iframe."
    },
    {
      id: "html-tables-q19",
      question: "What does the 'allowfullscreen' attribute do in an iframe?",
      options: [
        { id: "opt1", text: "Allows the iframe to be displayed in full screen" },
        { id: "opt2", text: "Restricts the iframe's size" },
        { id: "opt3", text: "Sets the iframe's border" },
        { id: "opt4", text: "Specifies the source" }
      ],
      correctAnswerId: "opt1",
      explanation: "The allowfullscreen attribute allows the iframe to be displayed in full screen."
    },
    {
      id: "html-tables-q20",
      question: "Which element is used to create a table row?",
      options: [
        { id: "opt1", text: "<tr>" },
        { id: "opt2", text: "<td>" },
        { id: "opt3", text: "<th>" },
        { id: "opt4", text: "<table>" }
      ],
      correctAnswerId: "opt1",
      explanation: "<tr> element is used to create a table row."
    },
    {
      id: "html-tables-q21",
      question: "What is the default border size of a table?",
      options: [
        { id: "opt1", text: "0" },
        { id: "opt2", text: "1" },
        { id: "opt3", text: "2" },
        { id: "opt4", text: "3" }
      ],
      correctAnswerId: "opt1",
      explanation: "The default border size of a table is 0, meaning no border is displayed."
    },
    {
      id: "html-tables-q22",
      question: "Which attribute is used to specify the alignment of the table itself?",
      options: [
        { id: "opt1", text: "align" },
        { id: "opt2", text: "position" },
        { id: "opt3", text: "style" },
        { id: "opt4", text: "float" }
      ],
      correctAnswerId: "opt1",
      explanation: "The align attribute is used to specify the alignment of the table itself."
    },
    {
      id: "html-tables-q23",
      question: "What does the 'srcdoc' attribute do in an iframe?",
      options: [
        { id: "opt1", text: "Specifies the HTML content of the iframe" },
        { id: "opt2", text: "Defines the source URL" },
        { id: "opt3", text: "Sets the iframe's border" },
        { id: "opt4", text: "Specifies the height" }
      ],
      correctAnswerId: "opt1",
      explanation: "The srcdoc attribute specifies the HTML content of the iframe."
    },
    {
      id: "html-tables-q24",
      question: "Which element is used to create a table footer?",
      options: [
        { id: "opt1", text: "<tfoot>" },
        { id: "opt2", text: "<thead>" },
        { id: "opt3", text: "<tbody>" },
        { id: "opt4", text: "<caption>" }
      ],
      correctAnswerId: "opt1",
      explanation: "<tfoot> element is used to create a table footer."
    },
    {
      id: "html-tables-q25",
      question: "What is the purpose of the 'frame' attribute in an iframe?",
      options: [
        { id: "opt1", text: "Defines the type of frame" },
        { id: "opt2", text: "Sets the border style" },
        { id: "opt3", text: "Specifies the source" },
        { id: "opt4", text: "Sets the height" }
      ],
      correctAnswerId: "opt1",
      explanation: "The frame attribute defines the type of frame for the iframe."
    },
          

         
          
        ]
      },
      {
        id: "semantic-tags",
        name: "Semantic Tags",
        slug: "semantic-tags",
        description: "Learn the basics of HyperText Markup Language (HTML).",
        questions: [
          {
            id: "html-semantic-q1",
            question: "Which element works as a sidebar?",
            options: [
              { id: "opt1", text: "<header>" },
              { id: "opt2", text: "<footer>" },
              { id: "opt3", text: "<nav>" },
              { id: "opt4", text: "<aside>" }
            ],
            correctAnswerId: "opt4",
            explanation: "<aside> element works like a sidebar. It defines some content aside from the content it is placed in."
          },
            {
            id: "html-semantic-q2",
            question: "Which of the following elements is used to define a section in a document?",
            options: [
                { id: "opt1", text: "<section>" },
                { id: "opt2", text: "<div>" },
                { id: "opt3", text: "<head>" },
                { id: "opt4", text: "<footer>" }
            ],
            correctAnswerId: "opt1",
            explanation: "The <section> element is a semantic tag used to define sections in a web page."
            },
            {
            id: "html-semantic-q3",
            question: "Which of the following is a semantic HTML element?",
            options: [
                { id: "opt1", text: "<b>" },
                { id: "opt2", text: "<i>" },
                { id: "opt3", text: "<strong>" },
                { id: "opt4", text: "<span>" }
            ],
            correctAnswerId: "opt3",
            explanation: "<strong> is semantic because it indicates importance, not just style."
            },
                {
      id: "html-semantic-q4",
      question: "Which element is used to define the main content of a document?",
      options: [
        { id: "opt1", text: "<main>" },
        { id: "opt2", text: "<article>" },
        { id: "opt3", text: "<section>" },
        { id: "opt4", text: "<div>" }
      ],
      correctAnswerId: "opt1",
      explanation: "<main> element is used to define the main content of a document."
    },
    {
      id: "html-semantic-q5",
      question: "Which element is used to represent a self-contained composition in a document?",
      options: [
        { id: "opt1", text: "<section>" },
        { id: "opt2", text: "<article>" },
        { id: "opt3", text: "<aside>" },
        { id: "opt4", text: "<header>" }
      ],
      correctAnswerId: "opt2",
      explanation: "<article> element represents a self-contained composition in a document."
    },
    {
      id: "html-semantic-q6",
      question: "Which element is used to define navigation links?",
      options: [
        { id: "opt1", text: "<nav>" },
        { id: "opt2", text: "<link>" },
        { id: "opt3", text: "<menu>" },
        { id: "opt4", text: "<footer>" }
      ],
      correctAnswerId: "opt1",
      explanation: "<nav> element is used to define navigation links."
    },
    {
      id: "html-semantic-q7",
      question: "Which element is used to define a footer for a document or section?",
      options: [
        { id: "opt1", text: "<footer>" },
        { id: "opt2", text: "<section>" },
        { id: "opt3", text: "<aside>" },
        { id: "opt4", text: "<header>" }
      ],
      correctAnswerId: "opt1",
      explanation: "<footer> element is used to define a footer for a document or section."
    },
    {
      id: "html-semantic-q8",
      question: "Which element is used to define a header for a document or section?",
      options: [
        { id: "opt1", text: "<header>" },
        { id: "opt2", text: "<nav>" },
        { id: "opt3", text: "<section>" },
        { id: "opt4", text: "<footer>" }
      ],
      correctAnswerId: "opt1",
      explanation: "<header> element is used to define a header for a document or section."
    },
    {
      id: "html-semantic-q9",
      question: "Which element is used to define a time or date?",
      options: [
        { id: "opt1", text: "<time>" },
        { id: "opt2", text: "<date>" },
        { id: "opt3", text: "<datetime>" },
        { id: "opt4", text: "<timestamp>" }
      ],
      correctAnswerId: "opt1",
      explanation: "<time> element is used to define a time or date."
    },
    {
      id: "html-semantic-q10",
      question: "Which element is used to define a definition list?",
      options: [
        { id: "opt1", text: "<dl>" },
        { id: "opt2", text: "<ul>" },
        { id: "opt3", text: "<ol>" },
        { id: "opt4", text: "<list>" }
      ],
      correctAnswerId: "opt1",
      explanation: "<dl> element is used to define a definition list."
    },
    {
      id: "html-semantic-q11",
      question: "Which element is used to define a term in a definition list?",
      options: [
        { id: "opt1", text: "<dt>" },
        { id: "opt2", text: "<dd>" },
        { id: "opt3", text: "<dl>" },
        { id: "opt4", text: "<li>" }
      ],
      correctAnswerId: "opt1",
      explanation: "<dt> element is used to define a term in a definition list."
    },
    {
      id: "html-semantic-q12",
      question: "Which element is used to define a description in a definition list?",
      options: [
        { id: "opt1", text: "<dd>" },
        { id: "opt2", text: "<dt>" },
        { id: "opt3", text: "<dl>" },
        { id: "opt4", text: "<li>" }
      ],
      correctAnswerId: "opt1",
      explanation: "<dd> element is used to define a description in a definition list."
    },
    {
      id: "html-semantic-q13",
      question: "Which element is used to emphasize text?",
      options: [
        { id: "opt1", text: "<em>" },
        { id: "opt2", text: "<strong>" },
        { id: "opt3", text: "<b>" },
        { id: "opt4", text: "<i>" }
      ],
      correctAnswerId: "opt1",
      explanation: "<em> element is used to emphasize text."
    },
    {
      id: "html-semantic-q14",
      question: "Which element is used to indicate strong importance?",
      options: [
        { id: "opt1", text: "<strong>" },
        { id: "opt2", text: "<b>" },
        { id: "opt3", text: "<i>" },
        { id: "opt4", text: "<mark>" }
      ],
      correctAnswerId: "opt1",
      explanation: "<strong> element is used to indicate strong importance."
    },
    {
      id: "html-semantic-q15",
      question: "Which element is used to define a quotation?",
      options: [
        { id: "opt1", text: "<blockquote>" },
        { id: "opt2", text: "<q>" },
        { id: "opt3", text: "<cite>" },
        { id: "opt4", text: "<p>" }
      ],
      correctAnswerId: "opt1",
      explanation: "<blockquote> element is used to define a quotation."
    },
    {
      id: "html-semantic-q16",
      question: "Which element is used to define a citation?",
      options: [
        { id: "opt1", text: "<cite>" },
        { id: "opt2", text: "<q>" },
        { id: "opt3", text: "<blockquote>" },
        { id: "opt4", text: "<p>" }
      ],
      correctAnswerId: "opt1",
      explanation: "<cite> element is used to define a citation."
    },
    {
      id: "html-semantic-q17",
      question: "Which element is used to define a keyboard input?",
      options: [
        { id: "opt1", text: "<kbd>" },
        { id: "opt2", text: "<input>" },
        { id: "opt3", text: "<code>" },
        { id: "opt4", text: "<var>" }
      ],
      correctAnswerId: "opt1",
      explanation: "<kbd> element is used to define keyboard input."
    },
    {
      id: "html-semantic-q18",
      question: "Which element is used to define a variable in a mathematical expression?",
      options: [
        { id: "opt1", text: "<var>" },
        { id: "opt2", text: "<code>" },
        { id: "opt3", text: "<kbd>" },
        { id: "opt4", text: "<math>" }
      ],
      correctAnswerId: "opt1",
      explanation: "<var> element is used to define a variable in a mathematical expression."
    },
    {
      id: "html-semantic-q19",
      question: "Which element is used to define a sample output from a computer program?",
      options: [
        { id: "opt1", text: "<samp>" },
        { id: "opt2", text: "<code>" },
        { id: "opt3", text: "<pre>" },
        { id: "opt4", text: "<output>" }
      ],
      correctAnswerId: "opt1",
      explanation: "<samp> element is used to define a sample output from a computer program."
    },
    {
      id: "html-semantic-q20",
      question: "Which element is used to define a computer code?",
      options: [
        { id: "opt1", text: "<code>" },
        { id: "opt2", text: "<pre>" },
        { id: "opt3", text: "<kbd>" },
        { id: "opt4", text: "<var>" }
      ],
      correctAnswerId: "opt1",
      explanation: "<code> element is used to define a computer code."
    },
          
        ]
      },
      // Add more topics as needed
    ]
  },
  {
    id: 2,
    name: "CSS",
    slug: "css",
    logo: "/icons/css.svg",
    topicCount: 3,
    topics: [
      {
        id: "css-basics-and-linking",
        name: "CSS Basics and Linking Methods",
        slug: "css-basics-and-linking",
        description: "Learn the basics of Cascading Style Sheets (CSS).",
        questions: [
          {
            id: "css-basics-q1",
            question: "What does CSS stand for?",
            options: [
              { id: "opt1", text: "Cascading Style Sheets" },
              { id: "opt2", text: "Colorful Style Sheets" },
              { id: "opt3", text: "Computer Style Sheets" },
              { id: "opt4", text: "Creative Style Sheets" }
            ],
            correctAnswerId: "opt1",
            explanation: "CSS stands for Cascading Style Sheets, which is used for styling web pages."
          },
          {
            id: "css-basics-q2",
            question: "Which of the following tag is used to embed css in html page?",
            options: [
              { id: "opt1", text: "<css>" },
              { id: "opt2", text: "<!DOCTYPE html>" },
              { id: "opt3", text: "<script>" },
              { id: "opt4", text: "<style>" }
            ],
            correctAnswerId: "opt4",
            explanation: "<style> </style> tag is used to embed CSS in HTML page."
          },
          {
            id: "css-basics-q3",
            question: "Which of the following is the correct syntax to link an external style sheet in the HTML file?",
            options: [
              { id: "opt1", text: "<link rel=”stylesheet” href=”style.css” />" },
              { id: "opt2", text: "<link rel=”stylesheet” src=”style.css” />" },
              { id: "opt3", text: "<style rel=”stylesheet” src=”style.css” />" },
              { id: "opt4", text: "<style rel=”stylesheet” link=”style.css” />" }
            ],
            correctAnswerId: "opt1",
            explanation: "External style sheet files are defined within the <link> element and it should be inside the <head> section."
          },
          {
            id: "css-basics-q4",
            question: "Which of the following is the correct way to apply CSS Styles?",
            options: [
              { id: "opt1", text: "in an external CSS file" },
              { id: "opt2", text: "inside an HTML element" },
              { id: "opt3", text: "inside the <head> section of an HTML page" },
              { id: "opt4", text: "All of the mentioned" }
            ],
            correctAnswerId: "opt4",
            explanation: "We can style the document using CSS in three different ways i.e embed, inline and external."
          },
          {
            id: "css-basics-q5",
            question: "In CSS, h1 can be called as _______",
            options: [
              { id: "opt1", text: "Selector" },
              { id: "opt2", text: "Attribute" },
              { id: "opt3", text: "Value" },
              { id: "opt4", text: "Tag" }
            ],
            correctAnswerId: "opt1",
            explanation: "HTML element h1 is used in CSS for styling then it is also called a selector."
          },
          {
            id: "css-basics-q6",
            question: "In css, “color:red” can be called as _____________",
            options: [
              { id: "opt1", text: "Selector" },
              { id: "opt2", text: "Rule" },
              { id: "opt3", text: "Declaration" },
              { id: "opt4", text: "Tag" }
            ],
            correctAnswerId: "opt3",
            explanation: "In CSS, color:red is the declaration for an element saying that the given element has to apply a red color."
          },
          {
            id: "css-basics-q7",
            question: "Which of the following attributes is used to specify elements to bind style rules to?",
            options: [
              { id: "opt1", text: "id" },
              { id: "opt2", text: "class" },
              { id: "opt3", text: "tag" },
              { id: "opt4", text: "All of the mentioned" }
            ],
            correctAnswerId: "opt4",
            explanation: "In CSS, styling elements can be done by id, class and tag attribute."
          },
          {
            id: "css-basics-q8",
            question: " __________ has introduced text, list, box, margin, border, color, and background properties.",
            options: [
              { id: "opt1", text: "css" },
              { id: "opt2", text: "html" },
              { id: "opt3", text: "ajax" },
              { id: "opt4", text: "php" }
            ],
            correctAnswerId: "opt1",
            explanation: "CSS is a style sheet language which stands for Cascading Style Sheet."
          },
          {
            id: "css-basics-q9",
            question: "What is the correct syntax for an internal CSS style sheet?",
            options: [
                { id: "opt1", text: "<style> h1 { color: red; } </style>" },
                { id: "opt2", text: "<css> h1 { color: red; } </css>" },
                { id: "opt3", text: "<link> h1 { color: red; } </link>" },
                { id: "opt4", text: "<style src='styles.css'></style>" }
            ],
            correctAnswerId: "opt1",
            explanation: "The correct syntax for an internal CSS style sheet is to use the <style> tag."
        },
        {
            id: "css-basics-q10",
            question: "What is the correct order of CSS specificity from highest to lowest?",
            options: [
                {id: "opt1", text: "Inline styles > IDs > Classes > Elements"},
                {id: "opt2", text: "IDs > Inline styles > Classes > Elements"},
                {id: "opt3", text: "Classes > IDs > Elements > Inline styles"},
                {id: "opt4", text: "Elements > Classes > IDs > Inline styles"}
            ],
            correctAnswerId: "opt1",
            explanation: "Inline styles have the highest specificity, followed by IDs, then classes, and finally elements."
        },
        {
        id: "css-basics-q11",
        question: "What does the !important rule do in CSS?",
        options: [
          { id: "opt1", text: "Makes a style declaration override all other declarations" },
          { id: "opt2", text: "Makes the element disappear" },
          { id: "opt3", text: "Links an external stylesheet" },
          { id: "opt4", text: "Creates a new CSS rule" }
        ],
        correctAnswerId: "opt1",
        explanation: "The !important rule gives a CSS property the highest priority."
      },
      {
      id: "css-basics-q12",
      question: "What is the correct syntax for using !important?",
      options: [
        { id: "opt1", text: "color: red !important;" },
        { id: "opt2", text: "color: !important red;" },
        { id: "opt3", text: "!important color: red;" },
        { id: "opt4", text: "color!: important red;" }
      ],
      correctAnswerId: "opt1",
      explanation: "!important comes after the property value and before the semicolon."
    },
    {
      id: "css-basics-q13",
      question: "Which of these correctly demonstrates the 'cascading' in CSS?",
      options: [
        { id: "opt1", text: "More specific styles override less specific ones" },
        { id: "opt2", text: "Styles can come from multiple sources" },
        { id: "opt3", text: "Later style declarations can override earlier ones" },
        { id: "opt4", text: "All of the above" }
      ],
      correctAnswerId: "opt4",
      explanation: "All these factors contribute to CSS cascading behavior."
    },
    {
      id: "css-basics-q14",
      question: "What is the effect of using * { box-sizing: border-box; } in CSS?",
      options: [
        { id: "opt1", text: "It changes the box model calculation for all elements" },
        { id: "opt2", text: "It makes all borders important" },
        { id: "opt3", text: "It increases specificity for box elements" },
        { id: "opt4", text: "It prevents inheritance of box properties" }
      ],
      correctAnswerId: "opt1",
      explanation: "This rule makes the width and height include padding and borders for all elements."
    },
    {
      id: "css-basics-q15",
      question: "Which CSS at-rule allows you to import another stylesheet?",
      options: [
        { id: "opt1", text: "@import" },
        { id: "opt2", text: "@include" },
        { id: "opt3", text: "@media" },
        { id: "opt4", text: "@font-face" }
      ],
      correctAnswerId: "opt1",
      explanation: "@import is used to include another CSS file within a stylesheet."
    },
    {
      id: "css-basics-q16",
      question: "What is the correct way to make all <h2> elements override any !important declarations from their parents?",
      options: [
        { id: "opt1", text: "h2 { all: unset; }" },
        { id: "opt2", text: "h2 { color: inherit !important; }" },
        { id: "opt3", text: "h2 { !important: override; }" },
        { id: "opt4", text: "This is not possible in CSS" }
      ],
      correctAnswerId: "opt1",
      explanation: "The 'all: unset' property resets all properties to their initial or inherited values."
    },

          // Add more questions as needed
        ]
      },
      {
        id: "css-selectors",
        name: "CSS Selectors",
        slug: "css-selectors",
        description: "Learn the basics of Cascading Style Sheets (CSS).",
        questions: [
          {
            id: "css-selectors-q1",
            question: "What type of selector is used in this case? p {line-height: 150%;} ",
            options: [
              { id: "opt1", text: "class Selectors" },
              { id: "opt2", text: "element Selectors" },
              { id: "opt3", text: "id Selectors" },
              { id: "opt4", text: "none of the mentioned" }
            ],
            correctAnswerId: "opt2",
            explanation: "These selectors are called element selectors."
          },
          {
            id: "css-selectors-q2",
            question: "By applying an ___________ a style can be applied to just a single tag.",
            options: [
              { id: "opt1", text: "class rule" },
              { id: "opt2", text: "element rule" },
              { id: "opt3", text: "id rule" },
              { id: "opt4", text: "none of the mentioned" }
            ],
            correctAnswerId: "opt3",
            explanation: "By applying an id rule, a style can be applied to just a single tag."
          },
          {
            id: "css-selectors-q3",
            question: "What will be the output of this code? p strong {background-color: yellow;}",
            options: [
              { id: "opt1", text: "Strong have yellow background" },
              { id: "opt2", text: "Strong element within a p element have a yellow background" },
              { id: "opt3", text: "Both p and strong have yellow background" },
              { id: "opt4", text: "none of the mentioned" }
            ],
            correctAnswerId: "opt2",
            explanation: "All occurrences of the strong element within a p element have a yellow background."
          },
          {
            id: "css-selectors-q4",
            question: "A similar rule called the ____________ is specified using the plus sign (+) and is used to select elements that would be siblings of each other.",
            options: [
              { id: "opt1", text: "class selectors" },
              { id: "opt2", text: "attribute selectors" },
              { id: "opt3", text: "adjacent-sibling selector" },
              { id: "opt4", text: "none of the mentioned" }
            ],
            correctAnswerId: "opt3",
            explanation: "Self-explainatory."
          },
          {
            id: "css-selectors-q5",
            question: "Which of the following selectors selects any tag with an id attribute set?",
            options: [
              { id: "opt1", text: "#id" },
              { id: "opt2", text: ".class" },
              { id: "opt3", text: "E#id" },
              { id: "opt4", text: "*" }
            ],
            correctAnswerId: "opt1",
            explanation: "Example:#test {color: green;}."
          },
    {
      id: "css-selectors-q6",
      question: "What does the selector 'div > p' select?",
      options: [
        { id: "opt1", text: "All p elements" },
        { id: "opt2", text: "All p elements inside div" },
        { id: "opt3", text: "Only direct child p elements of div" },
        { id: "opt4", text: "None of the above" }
      ],
      correctAnswerId: "opt3",
      explanation: "This selector targets only direct child p elements of div."
    },
    {
      id: "css-selectors-q7",
      question: "Which selector is used to select elements with a specific attribute?",
      options: [
        { id: "opt1", text: "attribute selector" },
        { id: "opt2", text: "class selector" },
        { id: "opt3", text: "id selector" },
        { id: "opt4", text: "element selector" }
      ],
      correctAnswerId: "opt1",
      explanation: "Attribute selectors are used to select elements based on their attributes."
    },
    {
      id: "css-selectors-q8",
      question: "What does the selector 'input[type=\"text\"]' select?",
      options: [
        { id: "opt1", text: "All input elements" },
        { id: "opt2", text: "All text input elements" },
        { id: "opt3", text: "All input elements with type text" },
        { id: "opt4", text: "None of the above" }
      ],
      correctAnswerId: "opt3",
      explanation: "This selector targets all input elements with type attribute set to text."
    },
    {
      id: "css-selectors-q9",
      question: "Which of the following is a pseudo-class selector?",
      options: [
        { id: "opt1", text: ":hover" },
        { id: "opt2", text: ".class" },
        { id: "opt3", text: "#id" },
        { id: "opt4", text: "element" }
      ],
      correctAnswerId: "opt1",
      explanation: ":hover is a pseudo-class that applies styles when an element is hovered over."
    },
    {
      id: "css-selectors-q10",
      question: "What does the selector 'ul li:first-child' select?",
      options: [
        { id: "opt1", text: "All li elements" },
        { id: "opt2", text: "The first li element in any ul" },
        { id: "opt3", text: "All first child li elements" },
        { id: "opt4", text: "None of the above" }
      ],
      correctAnswerId: "opt2",
      explanation: "This selector targets the first li element within any ul."
    },
    {
      id: "css-selectors-q11",
      question: "Which selector is used to select all elements of a specific class?",
      options: [
        { id: "opt1", text: "#class" },
        { id: "opt2", text: ".class" },
        { id: "opt3", text: "class" },
        { id: "opt4", text: "element.class" }
      ],
      correctAnswerId: "opt2",
      explanation: "The .class selector is used to select all elements with that class."
    },
    {
      id: "css-selectors-q12",
      question: "What does the selector 'a:visited' select?",
      options: [
        { id: "opt1", text: "All links" },
        { id: "opt2", text: "All visited links" },
        { id: "opt3", text: "All unvisited links" },
        { id: "opt4", text: "None of the above" }
      ],
      correctAnswerId: "opt2",
      explanation: "This selector targets all links that have been visited."
    },
    {
      id: "css-selectors-q13",
      question: "What does the selector 'div:not(.class)' select?",
      options: [
        { id: "opt1", text: "All div elements" },
        { id: "opt2", text: "All div elements with class" },
        { id: "opt3", text: "All div elements without the specified class" },
        { id: "opt4", text: "None of the above" }
      ],
      correctAnswerId: "opt3",
      explanation: "This selector targets all div elements that do not have the specified class."
    },
    {
      id: "css-selectors-q14",
      question: "Which selector is used to select the last child of a parent?",
      options: [
        { id: "opt1", text: ":last-child" },
        { id: "opt2", text: ":first-child" },
        { id: "opt3", text: ":nth-child" },
        { id: "opt4", text: ":nth-last-child" }
      ],
      correctAnswerId: "opt1",
      explanation: ":last-child selects the last child element of a parent."
    },
    {
      id: "css-selectors-q15",
      question: "What does the selector 'p:nth-of-type(2)' select?",
      options: [
        { id: "opt1", text: "The second p element of any parent" },
        { id: "opt2", text: "All p elements" },
        { id: "opt3", text: "The second child of any parent" },
        { id: "opt4", text: "None of the above" }
      ],
      correctAnswerId: "opt1",
      explanation: "This selector targets the second p element of its parent."
    },
    {
      id: "css-selectors-q16",
      question: "Which selector is used to select elements based on their position in a group?",
      options: [
        { id: "opt1", text: ":nth-child" },
        { id: "opt2", text: ":first-of-type" },
        { id: "opt3", text: ":last-of-type" },
        { id: "opt4", text: ":nth-last-of-type" }
      ],
      correctAnswerId: "opt1",
      explanation: ":nth-child is used to select elements based on their position in a group."
    },
    {
      id: "css-selectors-q17",
      question: "What does the selector 'input:focus' select?",
      options: [
        { id: "opt1", text: "All input elements" },
        { id: "opt2", text: "All input elements that are currently focused" },
        { id: "opt3", text: "All input elements that are not focused" },
        { id: "opt4", text: "None of the above" }
      ],
      correctAnswerId: "opt2",
      explanation: "This selector targets input elements that are currently focused."
    },
    {
      id: "css-selectors-q18",
      question: "Which selector is used to select elements that are checked?",
      options: [
        { id: "opt1", text: ":checked" },
        { id: "opt2", text: ":disabled" },
        { id: "opt3", text: ":enabled" },
        { id: "opt4", text: ":active" }
      ],
      correctAnswerId: "opt1",
      explanation: ":checked is used to select elements that are checked, such as checkboxes."
    },
    {
      id: "css-selectors-q19",
      question: "What does the selector 'div ~ p' select?",
      options: [
        { id: "opt1", text: "All p elements" },
        { id: "opt2", text: "All p elements that are siblings of div" },
        { id: "opt3", text: "Only direct sibling p elements of div" },
        { id: "opt4", text: "None of the above" }
      ],
      correctAnswerId: "opt2",
      explanation: "This selector targets all p elements that are siblings of div."
    },
    {
      id: "css-selectors-q20",
      question: "Which selector is used to select elements based on their attribute value?",
      options: [
        { id: "opt1", text: "[attribute=value]" },
        { id: "opt2", text: ".class" },
        { id: "opt3", text: "#id" },
        { id: "opt4", text: "element" }
      ],
      correctAnswerId: "opt1",
      explanation: "The [attribute=value] selector is used to select elements based on their attribute value."
    },
    {
  id: "css-selectors-q21",
  question: "Which pseudo-element is used to style the first line of a text element?",
  options: [
    { id: "opt1", text: "::first-line" },
    { id: "opt2", text: "::first-letter" },
    { id: "opt3", text: ":first-child" },
    { id: "opt4", text: ":before" }
  ],
  correctAnswerId: "opt1",
  explanation: "::first-line is a pseudo-element used to style the first line of text in a block-level element."
},
{
  id: "css-selectors-q22",
  question: "Which selector targets every <p> element inside a <div>?",
  options: [
    { id: "opt1", text: "div + p" },
    { id: "opt2", text: "div > p" },
    { id: "opt3", text: "div p" },
    { id: "opt4", text: "p div" }
  ],
  correctAnswerId: "opt3",
  explanation: "The 'div p' selector targets all <p> elements that are descendants of a <div>."
},
{
  id: "css-selectors-q23",
  question: "Which selector is used to select the first child of a specific type?",
      options: [
        { id: "opt1", text: ":first-of-type" },
        { id: "opt2", text: ":first-child" },
        { id: "opt3", text: ":nth-child(1)" },
        { id: "opt4", text: ":only-child" }
      ],
      correctAnswerId: "opt1",
      explanation: ":first-of-type selects the first child of a specified type within its parent."
},
{
  id: "css-selectors-q24",
  question: "Which selector would you use to target input elements with type 'radio'?",
  options: [
    { id: "opt1", text: "input[type=radio]" },
    { id: "opt2", text: "input.radio" },
    { id: "opt3", text: ".input[type=radio]" },
    { id: "opt4", text: "#input[type=radio]" }
  ],
  correctAnswerId: "opt1",
  explanation: "The attribute selector 'input[type= radio]' selects input elements with a type attribute equal to 'radio'."
},
{
  id: "css-selectors-q25",
  question: "What is the purpose of the * selector in CSS?",
  options: [
    { id: "opt1", text: "Selects all elements on the page" },
    { id: "opt2", text: "Selects only text elements" },
    { id: "opt3", text: "Selects only div elements" },
    { id: "opt4", text: "Selects no elements" }
  ],
  correctAnswerId: "opt1",
  explanation: "The universal selector '*' matches all elements on the page."
},
{
  id: "css-selectors-q26",
  question: "Which selector will match a link that has been visited?",
  options: [
    { id: "opt1", text: ":visited" },
    { id: "opt2", text: ":link" },
    { id: "opt3", text: ":hover" },
    { id: "opt4", text: ":active" }
  ],
  correctAnswerId: "opt1",
  explanation: "The ':visited' pseudo-class targets links the user has previously clicked."
},
{
  id: "css-selectors-q27",
 question: "Which selector is used to select all elements that are disabled?",
      options: [
        { id: "opt1", text: ":disabled" },
        { id: "opt2", text: ":enabled" },
        { id: "opt3", text: ":checked" },
        { id: "opt4", text: ":focus" }
      ],
      correctAnswerId: "opt1",
      explanation: ":disabled selects all elements that are currently disabled."
},
{
  id: "css-selectors-q28",
 question: "Which selector is used to select elements that are the only child of their parent?",
      options: [
        { id: "opt1", text: ":only-child" },
        { id: "opt2", text: ":last-child" },
        { id: "opt3", text: ":first-child" },
        { id: "opt4", text: ":nth-child(1)" }
      ],
      correctAnswerId: "opt1",
      explanation: ":only-child selects elements that are the only child of their parent."
},
{
  id: "css-selectors-q29",
  question: "What does the selector 'div[title]' select?",
      options: [
        { id: "opt1", text: "All div elements with a title attribute" },
        { id: "opt2", text: "All div elements without a title attribute" },
        { id: "opt3", text: "All div elements" },
        { id: "opt4", text: "All title elements" }
      ],
      correctAnswerId: "opt1",
      explanation: "This selector targets all div elements that have a title attribute, regardless of its value."
},
{
  id: "css-selectors-q30",
  question: "How do you select all elements with a class that starts with 'icon-'?",
  options: [
    { id: "opt1", text: "[class^='icon-']" },
    { id: "opt2", text: "[class*='icon-']" },
    { id: "opt3", text: ".icon-" },
    { id: "opt4", text: ".icon*" }
  ],
  correctAnswerId: "opt1",
  explanation: "The attribute selector '[class^=\"icon-\"]' targets elements whose class attribute starts with 'icon-'."
}



          // Add more questions as needed
        ]
      },
      {
        id: "css-colors-and-backgrounds",
        name: "CSS Colors and Backgrounds",
        slug: "css-colors-and-backgrounds",
        description: "Learn the basics of Cascading Style Sheets (CSS).",
        questions: [
          {
            id: "css-colors-q1",
            question: "Which of the following property sets the background image to scroll or not to scroll with its associated element’s content?",
            options: [
              { id: "opt1", text: "background-scroll" },
              { id: "opt2", text: "background-attach" },
              { id: "opt3", text: "background-attachment" },
              { id: "opt4", text: "background-allowance" }
            ],
            correctAnswerId: "opt3",
            explanation: "Syntax: background-attachment: scroll | fixed | inherit."
          },
          {
            id: "css-colors-q2",
            question: "Which of the following property sets an element’s background color?",
            options: [
              { id: "opt1", text: "background-image" },
              { id: "opt2", text: "background-color" },
              { id: "opt3", text: "background-colors" },
              { id: "opt4", text: "background-position" }
            ],
            correctAnswerId: "opt2",
            explanation: "Syntax: background-color: color | transparent."
          },
          {
            id: "css-colors-q3",
            question: "Which of the following property sets the shadow for a box element?",
            options: [
              { id: "opt1", text: "shadow" },
              { id: "opt2", text: "set-shadow" },
              { id: "opt3", text: "canvas-shadow" },
              { id: "opt4", text: "box-shadow" }
            ],
            correctAnswerId: "opt4",
            explanation: "Syntax:box-shadow: none | inherit."
          },
          {
            id: "css-colors-q4",
            question: "Which of the following property defines a shadow effect for text?",
            options: [
              { id: "opt1", text: "none of the mentioned" },
              { id: "opt2", text: "set-shadow" },
              { id: "opt3", text: "text-shadow" },
              { id: "opt4", text: "box-shadow" }
            ],
            correctAnswerId: "opt3",
            explanation: "text-shadow is the official CSS property for adding a shadow effect to text."
          },
          {
            id: "css-colors-q5",
            question: "What scales the background image as large as possible?",
            options: [
              { id: "opt1", text: "contain" },
              { id: "opt2", text: "cover" },
              { id: "opt3", text: "size" },
              { id: "opt4", text: "resize" }
            ],
            correctAnswerId: "opt1",
            explanation: "The contain keyword scales the background image to be as large as possible but both its width and its height must fit inside the content area."
          },
          {
            id: "css-colors-q6",
            question: "Which property specifies where the background image is positioned?",
            options: [
              { id: "opt1", text: "background-size" },
              { id: "opt2", text: "background-origin" },
              { id: "opt3", text: "background-image" },
              { id: "opt4", text: "background-clip" }
            ],
            correctAnswerId: "opt2",
            explanation: "The CSS background-origin property specifies where the background image is positioned."
          },
          {
            id: "css-colors-q7",
            question: "Which property specifies the painting area of the background?",
            options: [
              { id: "opt1", text: "background-clip" },
              { id: "opt2", text: "background-size" },
              { id: "opt3", text: "background-image" },
              { id: "opt4", text: "background-origin" }
            ],
            correctAnswerId: "opt1",
            explanation: "The CSS background-clip property specifies the painting area of the background, the property takes three different values, border-box-, padding-box, content-box."
          },
          {
            id: "css-colors-q8",
            question: "Which of the following function defines a linear gradient as a CSS image?",
            options: [
              { id: "opt1", text: "gradient()" },
              { id: "opt2", text: "linear-gradient()" },
              { id: "opt3", text: "grayscale()" },
              { id: "opt4", text: "image()" }
            ],
            correctAnswerId: "opt2",
            explanation: "linear-gradient() function defines a linear gradient as a CSS image."
          },
          {
            id: "css-colors-q9",
            question: "Which of the following CSS property is used to set the color of the text?",
            options: [
              { id: "opt1", text: "text-decoration" },
              { id: "opt2", text: "pallet" },
              { id: "opt3", text: "text-color" },
              { id: "opt4", text: "color" }
            ],
            correctAnswerId: "opt4",
            explanation: "The color property is used to set the color of the text."
          },
      {
      id: "css-colors-q10",
      question: "Which property is used to set the opacity of an element's background?",
      options: [
        { id: "opt1", text: "background-opacity" },
        { id: "opt2", text: "opacity" },
        { id: "opt3", text: "background-color" },
        { id: "opt4", text: "color" }
      ],
      correctAnswerId: "opt2",
      explanation: "The opacity property sets the transparency level of an element."
    },
    {
      id: "css-colors-q11",
      question: "Which of the following values can be used with the background-repeat property?",
      options: [
        { id: "opt1", text: "repeat" },
        { id: "opt2", text: "no-repeat" },
        { id: "opt3", text: "repeat-x" },
        { id: "opt4", text: "all of the above" }
      ],
      correctAnswerId: "opt4",
      explanation: "The background-repeat property can take values like repeat, no-repeat, and repeat-x."
    },
    {
      id: "css-colors-q12",
      question: "Which property is used to set the background image of an element?",
      options: [
        { id: "opt1", text: "background-image" },
        { id: "opt2", text: "background" },
        { id: "opt3", text: "image" },
        { id: "opt4", text: "bg-image" }
      ],
      correctAnswerId: "opt1",
      explanation: "The background-image property is used to set the background image of an element."
    },
    {
      id: "css-colors-q13",
      question: "What is the default value of the background-repeat property?",
      options: [
        { id: "opt1", text: "no-repeat" },
        { id: "opt2", text: "repeat" },
        { id: "opt3", text: "repeat-x" },
        { id: "opt4", text: "inherit" }
      ],
      correctAnswerId: "opt2",
      explanation: "The default value of the background-repeat property is repeat."
    },
    {
      id: "css-colors-q14",
      question: "Which property combines background-color, background-image, and other background properties in one declaration?",
      options: [
        { id: "opt1", text: "background-combine" },
        { id: "opt2", text: "bg" }, 
        { id: "opt3", text: "background" },
        { id: "opt4", text: "background-all" }
      ],
      correctAnswerId: "opt3",
      explanation: "The background shorthand property combines multiple background properties in one declaration."
    },
    {
      id: "css-colors-q15",
      question: "Which of the following is a valid CSS color format?",
      options: [
        { id: "opt1", text: "rgb(255, 0, 0)" },
        { id: "opt2", text: "#FF0000" },
        { id: "opt3", text: "rgba(255, 0, 0, 0.5)" },
        { id: "opt4", text: "all of the above" }
      ],
      correctAnswerId: "opt4",
      explanation: "All of the options are valid CSS color formats."
    },
    {
      id: "css-colors-q16",
      question: "What is the default position of a background image when background-position is not specified?",
      options: [
        { id: "opt1", text: "0% 0%" },
        { id: "opt2", text: "center center" },
        { id: "opt3", text: "left top" },
        { id: "opt4", text: "50% 50%" }
      ],
      correctAnswerId: "opt1",
      explanation: "The default background-position is 0% 0% (same as left top)."
    },
    {
      id: "css-colors-q17",
      question: "What value would you use to make a background image fixed in place?",
      options: [
        { id: "opt1", text: "fixed" },
        { id: "opt2", text: "scroll" },
        { id: "opt3", text: "absolute" },
        { id: "opt4", text: "relative" }
      ],
      correctAnswerId: "opt1",
      explanation: "The value 'fixed' makes the background image fixed in place."
    },
    {
      id: "css-colors-q18",
      question: "Which property is used to control the size of the background image?",
      options: [
        { id: "opt1", text: "background-size" },
        { id: "opt2", text: "background-image" },
        { id: "opt3", text: "background-clip" },
        { id: "opt4", text: "background-position" }
      ],
      correctAnswerId: "opt1",
      explanation: "The background-size property is used to control the size of the background image."
    },
    {
      id: "css-colors-q19",
      question: "Which of the following is NOT a valid value for the background-clip property?",
      options: [
        { id: "opt1", text: "border-box" },
        { id: "opt2", text: "padding-box" },
        { id: "opt3", text: "content-box" },
        { id: "opt4", text: "margin-box" }
      ],
      correctAnswerId: "opt4",
      explanation: "The margin-box is not a valid value for the background-clip property."
    },
    {
      id: "css-colors-q20",
      question: "Which CSS function is used to create a radial gradient?",
      options: [
        { id: "opt1", text: "radial-gradient()" },
        { id: "opt2", text: "gradient()" },
        { id: "opt3", text: "circle-gradient()" },
        { id: "opt4", text: "bg-gradient()" }
      ],
      correctAnswerId: "opt1",
      explanation: "The radial-gradient() function is used to create a radial gradient."
    },



          // Add more questions as needed
        ]
      },
      {
        id: "css-box-model",
        name: "CSS Box Model",
        slug: "css-box-model",
        description: "Learn the basics of Cascading Style Sheets (CSS).",
        questions: [
    {
      id: "css-box-model-q1",
      question: "What are the four main components of the CSS box model (from inside out)?",
      options: [
        { id: "opt1", text: "content > padding > border > margin" },
        { id: "opt2", text: "margin > border > padding > content" },
        { id: "opt3", text: "padding > content > border > margin" },
        { id: "opt4", text: "content > border > margin > padding" }
      ],
      correctAnswerId: "opt1",
      explanation: "The correct order from the inside out is content, padding, border, and margin."
    },
    {
      id: "css-box-model-q2",
      question: "Which property is used to control the space between the element's content and its border?",
      options: [
        { id: "opt1", text: "margin" },
        { id: "opt2", text: "border" },
        { id: "opt3", text: "padding" },
        { id: "opt4", text: "spacing" }
      ],
      correctAnswerId: "opt3",
      explanation: "Padding controls the space between the content and the border."
    },
    {
      id: "css-box-model-q3",
      question: "What does the margin property affect?",
      options: [
        { id: "opt1", text: "space between content and border" },
        { id: "opt2", text: "space outside the element" },
        { id: "opt3", text: "space inside the content" },
        { id: "opt4", text: "font spacing" }
      ],
      correctAnswerId: "opt2",
      explanation: "Margin is the outermost layer and affects space between the element and others."
    },
    {
      id: "css-box-model-q4",
      question: "Which shorthand property sets all four paddings at once?",
      options: [
        { id: "opt1", text: "padding-all" },
        { id: "opt2", text: "paddingBox" },
        { id: "opt3", text: "padding" },
        { id: "opt4", text: "box-padding" }
      ],
      correctAnswerId: "opt3",
      explanation: "The padding property can accept 1 to 4 values to define padding for all sides."
    },
    {
      id: "css-box-model-q5",
      question: "What happens if you set `box-sizing: border-box` on an element?",
      options: [
        { id: "opt1", text: "The padding and border are added outside the set width and height" },
        { id: "opt2", text: "The padding and border are subtracted from the width and height" },
        { id: "opt3", text: "It removes margin" },
        { id: "opt4", text: "It hides the border" }
      ],
      correctAnswerId: "opt2",
      explanation: "With border-box, the total width/height includes content, padding, and border."
    },
    {
      id: "css-box-model-q6",
      question: "Which property is responsible for setting the thickness of the border?",
      options: [
        { id: "opt1", text: "border-thickness" },
        { id: "opt2", text: "border-style" },
        { id: "opt3", text: "border-width" },
        { id: "opt4", text: "border-space" }
      ],
      correctAnswerId: "opt3",
      explanation: "border-width controls the thickness of the border."
    },
    {
      id: "css-box-model-q7",
      question: "If you set `margin: 20px 10px`, which sides are affected?",
      options: [
        { id: "opt1", text: "top & bottom = 20px, left & right = 10px" },
        { id: "opt2", text: "top = 20px, bottom = 10px, others = 0" },
        { id: "opt3", text: "all sides = 20px" },
        { id: "opt4", text: "left & right = 20px, top & bottom = 10px" }
      ],
      correctAnswerId: "opt1",
      explanation: "Two values mean vertical spacing (top/bottom) and horizontal spacing (left/right)."
    },
    {
      id: "css-box-model-q8",
      question: "Which value of `box-sizing` is the default in most browsers?",
      options: [
        { id: "opt1", text: "border-box" },
        { id: "opt2", text: "content-box" },
        { id: "opt3", text: "inherit" },
        { id: "opt4", text: "auto-box" }
      ],
      correctAnswerId: "opt2",
      explanation: "By default, browsers use content-box where padding/border add to total size."
    },
    {
      id: "css-box-model-q9",
      question: "What unit can be used with padding or margin values?",
      options: [
        { id: "opt1", text: "px, em, %, rem" },
        { id: "opt2", text: "only px" },
        { id: "opt3", text: "only em" },
        { id: "opt4", text: "only %" }
      ],
      correctAnswerId: "opt1",
      explanation: "You can use many units including px, %, em, rem, etc."
    },
    {
      id: "css-box-model-q10",
      question: "Which of the following will remove spacing completely between two elements?",
      options: [
        { id: "opt1", text: "margin: 0" },
        { id: "opt2", text: "padding: 0" },
        { id: "opt3", text: "margin: 0; padding: 0" },
        { id: "opt4", text: "border: none" }
      ],
      correctAnswerId: "opt3",
      explanation: "You must remove both margin and padding to eliminate all spacing."
    },
    {
      id: "css-box-model-q11",
      question: "Which of the following statements about inline elements and box model is TRUE?",
      options: [
        { id: "opt1", text: "Inline elements do not accept padding or margin" },
        { id: "opt2", text: "Inline elements can have horizontal padding and margin, but vertical ones may not affect layout" },
        { id: "opt3", text: "Inline elements treat padding and margin exactly like block elements" },
        { id: "opt4", text: "Inline elements cannot have borders" }
      ],
      correctAnswerId: "opt2",
      explanation: "Inline elements accept horizontal padding/margin, but vertical values often don’t affect layout due to the inline formatting context."
    },
    {
      id: "css-box-model-q12",
      question: "What is 'margin collapse' in CSS?",
      options: [
        { id: "opt1", text: "Margins add up when stacked" },
        { id: "opt2", text: "Margins between elements are ignored" },
        { id: "opt3", text: "When vertical margins of adjacent block elements overlap and the larger margin is used" },
        { id: "opt4", text: "When margin is ignored due to display:inline" }
      ],
      correctAnswerId: "opt3",
      explanation: "Vertical margins of block elements collapse into a single margin — the larger of the two — instead of adding."
    },
    {
      id: "css-box-model-q13",
      question: "What happens when an empty element has padding but no content or height?",
      options: [
        { id: "opt1", text: "It collapses and disappears from layout" },
        { id: "opt2", text: "Padding forces the element to take up space even without content" },
        { id: "opt3", text: "Padding has no effect without content" },
        { id: "opt4", text: "It will show padding only if a background color is set" }
      ],
      correctAnswerId: "opt2",
      explanation: "Padding contributes to an element’s visual box and will make even an empty element occupy space."
    },
    {
      id: "css-box-model-q14",
      question: "What is the main difference between 'content-box' and 'border-box' in CSS?",
      options: [
        { id: "opt1", text: "'border-box' includes padding and border in the element’s total width and height" },
        { id: "opt2", text: "'content-box' ignores padding and margin completely" },
        { id: "opt3", text: "'border-box' adds margin inside the element" },
        { id: "opt4", text: "'content-box' removes the border from layout calculations" }
      ],
      correctAnswerId: "opt1",
      explanation: "With 'border-box', the width and height include the content, padding, and border, making layout sizing easier."
    },
    {
      id: "css-box-model-q15",
      question: "If an element has width: 100px, padding: 10px, and border: 5px, what is its total width with box-sizing: content-box?",
      options: [
        { id: "opt1", text: "100px" },
        { id: "opt2", text: "110px" },
        { id: "opt3", text: "120px" },
        { id: "opt4", text: "130px" }
      ],
      correctAnswerId: "opt4",
      explanation: "content-box adds padding and border to the width: 100 + (2×10) + (2×5) = 130px."
    },
    {
      id: "css-box-model-q16",
      question: "Which part of the box model is affected by the 'outline' property?",
      options: [
        { id: "opt1", text: "Margin" },
        { id: "opt2", text: "Padding" },
        { id: "opt3", text: "Outside the border" },
        { id: "opt4", text: "Content only" }
      ],
      correctAnswerId: "opt3",
      explanation: "Outline is drawn outside the element's border and does not take up space."
    },
    {
      id: "css-box-model-q17",
      question: "Can negative values be used for the margin property?",
      options: [
        { id: "opt1", text: "Yes, but only for top and bottom" },
        { id: "opt2", text: "Yes, for all sides" },
        { id: "opt3", text: "No, negative values are not allowed" },
        { id: "opt4", text: "Only in flex layouts" }
      ],
      correctAnswerId: "opt2",
      explanation: "Negative margins are allowed in CSS and can be used on any side."
    },
    {
      id: "css-box-model-q18",
      question: "Which box model component increases the space **between** elements?",
      options: [
        { id: "opt1", text: "Padding" },
        { id: "opt2", text: "Border" },
        { id: "opt3", text: "Margin" },
        { id: "opt4", text: "Outline" }
      ],
      correctAnswerId: "opt3",
      explanation: "Margin controls the space between adjacent elements."
    },
    {
      id: "css-box-model-q19",
      question: "What happens if you set margin: auto on a block-level element with fixed width?",
      options: [
        { id: "opt1", text: "It centers the element horizontally" },
        { id: "opt2", text: "It aligns the element to the left" },
        { id: "opt3", text: "It removes all margins" },
        { id: "opt4", text: "It breaks the layout" }
      ],
      correctAnswerId: "opt1",
      explanation: "margin: auto horizontally centers a block-level element with a fixed width."
    },
    {
      id: "css-box-model-q20",
      question: "Which value of box-sizing includes padding and border in the element’s total width?",
      options: [
        { id: "opt1", text: "content-box" },
        { id: "opt2", text: "border-box" },
        { id: "opt3", text: "padding-box" },
        { id: "opt4", text: "default" }
      ],
      correctAnswerId: "opt2",
      explanation: "'border-box' makes sure padding and border are included in total dimensions."
    }


    ]
      },
      {
        id: "css-typography",
        name: "CSS Typography",
        slug: "css-typography",
        description: "Learn the basics of Cascading Style Sheets (CSS).",
        questions: [
        {
          id: "css-typography-q1",
          question: "Which of the following value is supposed to be a slightly bolder weight that standard bold in font attribute?",
          options: [
            { id: "opt1", text: "bold" },
            { id: "opt2", text: "light" },
            { id: "opt3", text: "lighter" },
            { id: "opt4", text: "bolder" }
          ],
          correctAnswerId: "opt4",
          explanation: "bolder means a font weight that is slightly heavier than the inherited or base weight."
        },
        {
          id: "css-typography-q2",
          question: "Which of the following property allows contextual adjustment of inter-glyph spacing, i.e. the spaces between the characters in text?",
          options: [
            { id: "opt1", text: "font-style" },
            { id: "opt2", text: "font-family" },
            { id: "opt3", text: "font-kerning" },
            { id: "opt4", text: "font-variant" }
          ],
          correctAnswerId: "opt3",
          explanation: "font-kerning: Controls inter-glyph spacing, or contextual adjustment between letters, to improve text display."
        },
        {
          id: "css-typography-q3",
          question: "Which of the following is not a value for font-style property?",
          options: [
            { id: "opt1", text: "normal" },
            { id: "opt2", text: "italic" },
            { id: "opt3", text: "oblique" },
            { id: "opt4", text: "none of the above" }
          ],
          correctAnswerId: "opt4",
          explanation: "All of the following are valid values for the font-style property in CSS."
        },
        {
          id: "css-typography-q4",
          question: "Which of the following selects a normal, or small-caps face from a font family?",
          options: [
            { id: "opt1", text: "font-weight" },
            { id: "opt2", text: "font-synthesis" },
            { id: "opt3", text: "font-kerning" },
            { id: "opt4", text: "font-variant" }
          ],
          correctAnswerId: "opt4",
          explanation: "The font-variant property in CSS is used to specify whether to use a normal font or small-caps (i.e. convert lowercase letters to lowercase capitals)."
        },
        {
          id: "css-typography-q5",
          question: "Which CSS property controls the amount of space between lines of text?",
          options: [
            { id: "opt1", text: "letter-spacing" },
            { id: "opt2", text: "line-height" },
            { id: "opt3", text: "word-spacing" },
            { id: "opt4", text: "text-indent" }
          ],
          correctAnswerId: "opt2",
          explanation: "The line-height property sets the distance between lines of text."
        },
        {
          id: "css-typography-q6",
          question: "What does the 'letter-spacing' property affect?",
          options: [
            { id: "opt1", text: "Line height between paragraphs" },
            { id: "opt2", text: "Space between words" },
            { id: "opt3", text: "Space between individual letters" },
            { id: "opt4", text: "Font style of text" }
          ],
          correctAnswerId: "opt3",
          explanation: "letter-spacing defines the space between individual characters."
        },
        {
          id: "css-typography-q7",
          question: "Which property is used to indent the first line of a paragraph?",
          options: [
            { id: "opt1", text: "margin-left" },
            { id: "opt2", text: "text-indent" },
            { id: "opt3", text: "padding-left" },
            { id: "opt4", text: "line-height" }
          ],
          correctAnswerId: "opt2",
          explanation: "text-indent indents the first line of a block of text."
        },
        {
          id: "css-typography-q8",
          question: "Which of the following is not a generic font family in CSS?",
          options: [
            { id: "opt1", text: "serif" },
            { id: "opt2", text: "fantasy" },
            { id: "opt3", text: "monospace" },
            { id: "opt4", text: "compact" }
          ],
          correctAnswerId: "opt4",
          explanation: "compact is not a valid generic font family in CSS."
        },
        {
          id: "css-typography-q9",
          question: "What does the 'font-size: larger;' declaration do?",
          options: [
            { id: "opt1", text: "Sets the font size to 1.2rem" },
            { id: "opt2", text: "Increases size based on the parent element's size" },
            { id: "opt3", text: "Sets the size to 20px" },
            { id: "opt4", text: "Sets the font size to browser default" }
          ],
          correctAnswerId: "opt2",
          explanation: "'larger' is a relative keyword that increases font size based on its parent."
        },
        {
          id: "css-typography-q10",
          question: "Which unit is best for responsive font sizing?",
          options: [
            { id: "opt1", text: "px" },
            { id: "opt2", text: "pt" },
            { id: "opt3", text: "em" },
            { id: "opt4", text: "rem" }
          ],
          correctAnswerId: "opt4",
          explanation: "rem is based on the root element's font size and is great for responsive design."
        },
        {
          id: "css-typography-q11",
          question: "What is the default value of the 'font-style' property?",
          options: [
            { id: "opt1", text: "italic" },
            { id: "opt2", text: "oblique" },
            { id: "opt3", text: "normal" },
            { id: "opt4", text: "inherit" }
          ],
          correctAnswerId: "opt3",
          explanation: "The default value of font-style is normal."
        },
        {
          id: "css-typography-q12",
          question: "What is the purpose of the 'font-feature-settings' property?",
          options: [
            { id: "opt1", text: "Controls advanced typographic features like ligatures and small caps" },
            { id: "opt2", text: "Changes font color based on locale" },
            { id: "opt3", text: "For custom font family fallback" },
            { id: "opt4", text: "Adds outlines to fonts" }
          ],
          correctAnswerId: "opt1",
          explanation: "font-feature-settings enables fine-grained control of OpenType features."
        },
        {
          id: "css-typography-q13",
          question: "Which CSS property affects the space between words in a text block?",
          options: [
            { id: "opt1", text: "line-height" },
            { id: "opt2", text: "word-spacing" },
            { id: "opt3", text: "letter-spacing" },
            { id: "opt4", text: "text-align" }
          ],
          correctAnswerId: "opt2",
          explanation: "word-spacing adjusts the spacing between words."
        },
        {
          id: "css-typography-q14",
          question: "What does the 'text-transform' property do?",
          options: [
            { id: "opt1", text: "Changes font weight" },
            { id: "opt2", text: "Converts text to uppercase, lowercase, or capitalize" },
            { id: "opt3", text: "Rotates text" },
            { id: "opt4", text: "Controls text shadow" }
          ],
          correctAnswerId: "opt2",
          explanation: "text-transform allows altering case like uppercase or lowercase for display."
        },
        {
          id: "css-typography-q15",
          question: "Which value of 'text-align' aligns text to both left and right margins?",
          options: [
            { id: "opt1", text: "center" },
            { id: "opt2", text: "justify" },
            { id: "opt3", text: "start" },
            { id: "opt4", text: "right" }
          ],
          correctAnswerId: "opt2",
          explanation: "justify aligns text to both the left and right edges, adding space between words as needed."
        },
        {
          id: "css-typography-q16",
          question: "Which property is responsible for styling the appearance of underlined text?",
          options: [
            { id: "opt1", text: "text-decoration-style" },
            { id: "opt2", text: "text-style" },
            { id: "opt3", text: "underline-style" },
            { id: "opt4", text: "font-decoration" }
          ],
          correctAnswerId: "opt1",
          explanation: "text-decoration-style defines whether the underline is solid, wavy, dotted, etc."
        },
        {
          id: "css-typography-q17",
          question: "Which property sets how overflowed text is signaled (e.g., with ellipsis)?",
          options: [
            { id: "opt1", text: "text-overflow" },
            { id: "opt2", text: "overflow-wrap" },
            { id: "opt3", text: "word-break" },
            { id: "opt4", text: "clip-text" }
          ],
          correctAnswerId: "opt1",
          explanation: "text-overflow defines how overflowed content is displayed, commonly with 'ellipsis'."
        },
        {
          id: "css-typography-q18",
          question: "What is the result of using 'text-shadow' with no blur radius?",
          options: [
            { id: "opt1", text: "No shadow is applied" },
            { id: "opt2", text: "A sharp-edged shadow is created" },
            { id: "opt3", text: "Text becomes invisible" },
            { id: "opt4", text: "Shadow is ignored by all browsers" }
          ],
          correctAnswerId: "opt2",
          explanation: "Without a blur radius, text-shadow creates a sharp shadow based on x and y offsets."
        },
        {
        id: "css-typography-q19",
        question: "What is the effect of using 'text-transform: capitalize;' in CSS?",
        options: [
          { id: "opt1", text: "It converts all letters to uppercase" },
          { id: "opt2", text: "It converts all letters to lowercase" },
          { id: "opt3", text: "It capitalizes the first letter of each word" },
          { id: "opt4", text: "It makes the text bold" }
        ],
        correctAnswerId: "opt3",
        explanation: "'text-transform: capitalize;' makes the first letter of each word uppercase, regardless of the original casing."
},
        {
          id: "css-typography-q20",
          question: "Which of the following is used to control whether characters can break across lines?",
          options: [
            { id: "opt1", text: "word-break" },
            { id: "opt2", text: "white-space" },
            { id: "opt3", text: "line-break" },
            { id: "opt4", text: "text-wrap" }
          ],
          correctAnswerId: "opt1",
          explanation: "word-break helps determine where breaks are allowed in text when wrapping."
        }

        
    


    ]
      },
      {
        id: "css-flexbox-and-grid",
        name: "CSS Flexbox & Grid",
        slug: "css-flexbox-and-grid",
        description: "Learn the basics of Cascading Style Sheets (CSS).",
        questions: [
          {
            id: "css-flexbox-q1",
            question: "Which of the following was not present in the previous layout modes?",
            options: [
              { id: "opt1", text: "Block" },
              { id: "opt2", text: "Flexbox layout" },
              { id: "opt3", text: "Inline" },
              { id: "opt4", text: "Positioned" }
            ],
            correctAnswerId: "opt2",
            explanation: "Before Flexbox, layout modes included block, inline, table, and positioned. Flexbox is a new layout mode."
          },
          {
            id: "css-flexbox-q2",
            question: "Which property specifies the direction of the flexible items inside the container?",
            options: [
              { id: "opt1", text: "flex-flow" },
              { id: "opt2", text: "flex-wrap" },
              { id: "opt3", text: "flex-direction" },
              { id: "opt4", text: "align-content" }
            ],
            correctAnswerId: "opt3",
            explanation: "flex-direction sets the direction (row, column, etc.) of flex items."
          },
          {
            id: "css-flexbox-q3",
            question: "Which property is used to align the flexible items?",
            options: [
              { id: "opt1", text: "align-items" },
              { id: "opt2", text: "justify-content" },
              { id: "opt3", text: "align-content" },
              { id: "opt4", text: "flex-grow" }
            ],
            correctAnswerId: "opt2",
            explanation: "justify-content aligns flex items along the main axis."
          },
          {
            id: "css-flexbox-q4",
            question: "Which property defines the initial length of a flexible item?",
            options: [
              { id: "opt1", text: "flex-flow" },
              { id: "opt2", text: "flex-grow" },
              { id: "opt3", text: "flex-shrink" },
              { id: "opt4", text: "flex-basis" }
            ],
            correctAnswerId: "opt4",
            explanation: "flex-basis sets the initial size of a flex item before space distribution."
          },
          {
            id: "css-flexbox-q5",
            question: "Which property overrides the container’s align-items property for a specific item?",
            options: [
              { id: "opt1", text: "order" },
              { id: "opt2", text: "align-self" },
              { id: "opt3", text: "align-items" },
              { id: "opt4", text: "flex" }
            ],
            correctAnswerId: "opt2",
            explanation: "align-self overrides the alignment set by align-items for a specific flex item."
          },
          {
            id: "css-flexbox-q6",
            question: "Which CSS property defines the direction of flex items?",
            options: [
              { id: "opt1", text: "flex-direction" },
              { id: "opt2", text: "grid-template" },
              { id: "opt3", text: "align-items" },
              { id: "opt4", text: "justify-content" }
            ],
            correctAnswerId: "opt1",
            explanation: "flex-direction determines the main axis direction for flex items."
          },
          {
    id: "css-flexbox-q7",
    question: "What property specifies the number of columns in a grid?",
    options: [
      { id: "opt1", text: "grid-template-rows" },
      { id: "opt2", text: "grid-template-columns" },
      { id: "opt3", text: "flex-basis" },
      { id: "opt4", text: "align-self" }
    ],
    correctAnswerId: "opt2",
    explanation: "grid-template-columns defines the number and size of columns in a grid container."
          },
          {
            id: "css-flexbox-q8",
            question: "What is the default value of the flex-direction property?",
            options: [
              { id: "opt1", text: "row" },
              { id: "opt2", text: "column" },
              { id: "opt3", text: "row-reverse" },
              { id: "opt4", text: "column-reverse" }
            ],
            correctAnswerId: "opt1",
            explanation: "The default value of flex-direction is row."
          },
          {
            id: "css-flexbox-q9",
            question: "How do you vertically center align items in Flexbox?",
            options: [
              { id: "opt1", text: "align-items: center;" },
              { id: "opt2", text: "justify-content: center;" },
              { id: "opt3", text: "align-content: center;" },
              { id: "opt4", text: "flex-align: center;" }
            ],
            correctAnswerId: "opt1",
            explanation: "align-items: center vertically centers flex items along the cross axis."
          },
          {
            id: "css-flexbox-q10",
            question: "Which property controls the spacing between grid items?",
            options: [
              { id: "opt1", text: "gap" },
              { id: "opt2", text: "margin" },
              { id: "opt3", text: "padding" },
              { id: "opt4", text: "space" }
            ],
            correctAnswerId: "opt1",
            explanation: "The gap property controls spacing between rows and columns in a grid."
          },
          {
            id: "css-flexbox-q11",
            question: "What property determines how flex items grow to fill available space?",
            options: [
              { id: "opt1", text: "flex-grow" },
              { id: "opt2", text: "flex-shrink" },
              { id: "opt3", text: "flex-basis" },
              { id: "opt4", text: "justify-content" }
            ],
            correctAnswerId: "opt1",
            explanation: "flex-grow defines how much a flex item will grow relative to the rest."
          },
          {
            id: "css-flexbox-q12",
            question: "Which value makes a flex item take up remaining space?",
            options: [
              { id: "opt1", text: "flex: 1;" },
              { id: "opt2", text: "flex: auto;" },
              { id: "opt3", text: "flex: none;" },
              { id: "opt4", text: "flex: 0;" }
            ],
            correctAnswerId: "opt1",
            explanation: "flex:1 allows the item to take all remaining free space."
          },
          {
            id: "css-flexbox-q13",
            question: "How do you make grid items equally sized?",
            options: [
              { id: "opt1", text: "grid-auto-rows: 1fr;" },
              { id: "opt2", text: "grid-template-rows: auto;" },
              { id: "opt3", text: "grid-template-columns: 100px;" },
              { id: "opt4", text: "grid-gap: 10px;" }
            ],
            correctAnswerId: "opt1",
            explanation: "Using grid-auto-rows:1fr makes rows equally sized."
          },
          {
            id: "css-flexbox-q14",
            question: "What property aligns items horizontally in a grid container?",
            options: [
              { id: "opt1", text: "justify-items" },
              { id: "opt2", text: "align-items" },
              { id: "opt3", text: "justify-content" },
              { id: "opt4", text: "align-content" }
            ],
            correctAnswerId: "opt1",
            explanation: "justify-items aligns grid items along the inline (horizontal) axis."
          },
          {
            id: "css-flexbox-q15",
            question: "Which values can flex-wrap accept?",
            options: [
              { id: "opt1", text: "nowrap" },
              { id: "opt2", text: "wrap-reverse" },
              { id: "opt3", text: "wrap" },
              { id: "opt4", text: "all of the above" }
            ],
            correctAnswerId: "opt4",
            explanation: "flex-wrap supports nowrap, wrap, and wrap-reverse."
          },
          {
            id: "css-flexbox-q16",
            question: "How do you make grid items overlap?",
            options: [
              { id: "opt1", text: "grid-area" },
              { id: "opt2", text: "grid-column" },
              { id: "opt3", text: "grid-row" },
              { id: "opt4", text: "grid-template" }
            ],
            correctAnswerId: "opt1",
            explanation: "grid-area allows grid items to overlap by specifying overlapping areas."
          },
          {
            id: "css-flexbox-q17",
            question: "What property controls spacing between grid rows?",
            options: [
              { id: "opt1", text: "row-gap" },
              { id: "opt2", text: "column-gap" },
              { id: "opt3", text: "grid-gap" },
              { id: "opt4", text: "spacing" }
            ],
            correctAnswerId: "opt1",
            explanation: "row-gap sets the spacing between grid rows."
          },
          {
            id: "css-flexbox-q18",
            question: "How do you distribute flex items evenly along the main axis?",
            options: [
              { id: "opt1", text: "justify-content: space-between;" },
              { id: "opt2", text: "justify-content: center;" },
              { id: "opt3", text: "justify-content: flex-start;" },
              { id: "opt4", text: "justify-content: flex-end;" }
            ],
            correctAnswerId: "opt1",
            explanation: "justify-content: space-between evenly distributes items with space in between."
          },
          {
            id: "css-flexbox-q19",
            question: "What property vertically aligns grid items?",
            options: [
              { id: "opt1", text: "align-items" },
              { id: "opt2", text: "justify-items" },
              { id: "opt3", text: "align-content" },
              { id: "opt4", text: "justify-content" }
            ],
            correctAnswerId: "opt1",
            explanation: "align-items vertically aligns items within a grid container."
          },
          {
            id: "css-flexbox-q20",
            question: "How do you set column sizes using percentages in grid?",
            options: [
              { id: "opt1", text: "grid-template-columns: 50%;" },
              { id: "opt2", text: "grid-template-columns: 1fr;" },
              { id: "opt3", text: "grid-template-columns: auto;" },
              { id: "opt4", text: "grid-template-columns: fixed;" }
            ],
            correctAnswerId: "opt1",
            explanation: "Using percentage values in grid-template-columns sets column sizes proportionally."
          },
          {
            id: "css-flexbox-q21",
            question: "Which property distributes extra space in flex containers?",
            options: [
              { id: "opt1", text: "flex-flow" },
              { id: "opt2", text: "justify-content" },
              { id: "opt3", text: "align-content" },
              { id: "opt4", text: "flex-align" }
            ],
            correctAnswerId: "opt2",
            explanation: "justify-content handles distribution of extra space along the main axis."
          },
          {
            id: "css-flexbox-q22",
            question: "How do you make equal-width columns using fr units?",
            options: [
              { id: "opt1", text: "grid-template-columns: 1fr 1fr;" },
              { id: "opt2", text: "grid-template-columns: auto;" },
              { id: "opt3", text: "grid-template-columns: 100px;" },
              { id: "opt4", text: "grid-template-columns: 50%;" }
            ],
            correctAnswerId: "opt1",
            explanation: "Using 1fr units creates equal-width columns in a grid."
          },
          {
            id: "css-flexbox-q23",
            question: "What property aligns flex items vertically?",
            options: [
              { id: "opt1", text: "align-content" },
              { id: "opt2", text: "justify-content" },
              { id: "opt3", text: "align-items" },
              { id: "opt4", text: "flex-align" }
            ],
            correctAnswerId: "opt3",
            explanation: "align-items controls vertical alignment of flex items."
          },
          {
            id: "css-flexbox-q24",
            question: "How do you create equal-height rows in grid?",
            options: [
              { id: "opt1", text: "grid-auto-rows: 1fr;" },
              { id: "opt2", text: "grid-template-rows: auto;" },
              { id: "opt3", text: "grid-template-rows: 100px;" },
              { id: "opt4", text: "grid-template-rows: 50%;" }
            ],
            correctAnswerId: "opt1",
            explanation: "grid-auto-rows:1fr makes all rows equal in height."
          },
          {
            id: "css-flexbox-q25",
            question: "Which property controls auto-placement in grid?",
            options: [
              { id: "opt1", text: "grid-template" },
              { id: "opt2", text: "grid-area" },
              { id: "opt3", text: "grid-auto-flow" },
              { id: "opt4", text: "grid-gap" }
            ],
            correctAnswerId: "opt3",
            explanation: "grid-auto-flow controls the auto-placement algorithm for grid items."
          },
          {
            id: "css-flexbox-q26",
            question: "Which property allows you to change the order of flex items?",
            options: [
              { id: "opt1", text: "order" },
              { id: "opt2", text: "flex-grow" },
              { id: "opt3", text: "z-index" },
              { id: "opt4", text: "align-self" }
            ],
            correctAnswerId: "opt1",
            explanation: "The order property changes the visual order of flex items."
          },
          {
            id: "css-flexbox-q27",
            question: "Which property sets the minimum size of grid tracks?",
            options: [
              { id: "opt1", text: "minmax()" },
              { id: "opt2", text: "grid-template-rows" },
              { id: "opt3", text: "grid-template-columns" },
              { id: "opt4", text: "auto-fit" }
            ],
            correctAnswerId: "opt1",
            explanation: "The minmax() function defines a minimum and maximum size for grid tracks."
          },
          {
            id: "css-flexbox-q28",
            question: "How can you make grid columns automatically adjust to fit content?",
            options: [
              { id: "opt1", text: "grid-template-columns: auto-fit;" },
              { id: "opt2", text: "grid-template-columns: 1fr;" },
              { id: "opt3", text: "grid-auto-flow: dense;" },
              { id: "opt4", text: "justify-items: stretch;" }
            ],
            correctAnswerId: "opt1",
            explanation: "auto-fit makes columns adjust automatically to fit content."
          },
          {
            id: "css-flexbox-q29",
            question: "Which property is used to span a grid item across multiple rows?",
            options: [
              { id: "opt1", text: "grid-row" },
              { id: "opt2", text: "grid-column" },
              { id: "opt3", text: "grid-template" },
              { id: "opt4", text: "align-content" }
            ],
            correctAnswerId: "opt1",
            explanation: "grid-row allows a grid item to span multiple rows."
          },
          {   
          id: "css-flexbox-q31",
          question: "In CSS Grid, what does the property `grid-auto-flow: dense;` do?",
          options: [
            { id: "opt1", text: "Prevents empty grid cells" },
            { id: "opt2", text: "Allows grid items to overlap" },
            { id: "opt3", text: "Fills holes in the grid layout if possible" },
            { id: "opt4", text: "Automatically increases the number of columns" }
          ],
          correctAnswerId: "opt3",
          explanation: "grid-auto-flow: dense; attempts to fill in holes in the grid layout by placing smaller items into available gaps, optimizing space usage."
            }
          
    ]
      },
      {
        id: "css-positioning-and-display",
        name: "CSS Positioning & Display",
        slug: "css-positioning-and-display",
        description: "Learn the basics of Cascading Style Sheets (CSS).",
        questions: [

          {
      id: "css-positioning-q1",
      question: "Which of the following CSS Property controls how an element is positioned?",
      options: [
        { id: "opt1", text: "position" },
        { id: "opt2", text: "set" },
        { id: "opt3", text: "static" },
        { id: "opt4", text: "fix" }
      ],
      correctAnswerId: "opt1",
      explanation: "Controls how an element is positioned: static, relative, absolute, fixed. Default is static. :contentReference[oaicite:2]{index=2}"
    },
    {
      id: "css-positioning-q2",
      question: "Which of the following CSS Property specifies the top offset of a positioned element?",
      options: [
        { id: "opt1", text: "top" },
        { id: "opt2", text: "up" },
        { id: "opt3", text: "reverse" },
        { id: "opt4", text: "fix" }
      ],
      correctAnswerId: "opt1",
      explanation: "The top property specifies the top offset of a positioned element. :contentReference[oaicite:3]{index=3}"
    },
    {
      id: "css-positioning-q3",
      question: "Which of the following CSS Property Specifies the left offset of a positioned element?",
      options: [
        { id: "opt1", text: "right" },
        { id: "opt2", text: "left" },
        { id: "opt3", text: "bottom" },
        { id: "opt4", text: "up" }
      ],
      correctAnswerId: "opt2",
      explanation: "The left property specifies the left offset of a positioned element. :contentReference[oaicite:4]{index=4}"
    },
    {
      id: "css-positioning-q4",
      question: "Which of the following CSS Property sets the stacking order of positioned elements?",
      options: [
        { id: "opt1", text: "x-index" },
        { id: "opt2", text: "y-index" },
        { id: "opt3", text: "z-index" },
        { id: "opt4", text: "all of the mentioned" }
      ],
      correctAnswerId: "opt3",
      explanation: "z‑index sets the stacking order of positioned elements. :contentReference[oaicite:5]{index=5}"
    },
    {
      id: "css-positioning-q5",
      question: "Which of the following CSS Property Defines the area of an absolutely positioned element that remains visible?",
      options: [
        { id: "opt1", text: "clamp" },
        { id: "opt2", text: "clip" },
        { id: "opt3", text: "visibility" },
        { id: "opt4", text: "static" }
      ],
      correctAnswerId: "opt2",
      explanation: "clip defines the visible portion of an absolutely positioned element. :contentReference[oaicite:6]{index=6}"
    },
    {
      id: "css-positioning-q6",
      question: "Which of the following CSS Property specifies whether the labels for an element’s list items are positioned inside or outside the box?",
      options: [
        { id: "opt1", text: "list-style" },
        { id: "opt2", text: "list-position" },
        { id: "opt3", text: "list-style-position" },
        { id: "opt4", text: "all of the mentioned" }
      ],
      correctAnswerId: "opt3",
      explanation: "list‑style‑position: inside | outside. :contentReference[oaicite:7]{index=7}"
    },
    {
      id: "css-positioning-q7",
      question: "Which of the following CSS Property defines the x‑coordinate of the background‑position property?",
      options: [
        { id: "opt1", text: "background-position-x" },
        { id: "opt2", text: "background-position-y" },
        { id: "opt3", text: "background-x-axis" },
        { id: "opt4", text: "background-y-axis" }
      ],
      correctAnswerId: "opt1",
      explanation: "background-position-x specifies the x‑coordinate of the background image. :contentReference[oaicite:8]{index=8}"
    },
    {
      id: "css-positioning-q8",
      question: "Which of the following CSS Property specifies the position of the mask?",
      options: [
        { id: "opt1", text: "mask" },
        { id: "opt2", text: "mask-position" },
        { id: "opt3", text: "mask-origin" },
        { id: "opt4", text: "none of the mentioned" }
      ],
      correctAnswerId: "opt2",
      explanation: "mask‑position: xpos ypos. :contentReference[oaicite:9]{index=9}"
    },
    {
      id: "css-positioning-q9",
      question: "Which of the following CSS Property specifies the x‑coordinate in the position of the mask?",
      options: [
        { id: "opt1", text: "mask-x" },
        { id: "opt2", text: "mask-x-origin" },
        { id: "opt3", text: "mask-position-x" },
        { id: "opt4", text: "mask-origin-x" }
      ],
      correctAnswerId: "opt3",
      explanation: "mask-position-x: length | percentage | left | center | right. :contentReference[oaicite:10]{index=10}"
    },
    {
      id: "css-positioning-q10",
      question: "Which of the following Microsoft‑introduced property defines the position of underlining?",
      options: [
        { id: "opt1", text: "text-underline" },
        { id: "opt2", text: "text-underline-origin" },
        { id: "opt3", text: "text-underline-position" },
        { id: "opt4", text: "none of the mentioned" }
      ],
      correctAnswerId: "opt4",
      explanation: "No standard Microsoft property defines underline position. :contentReference[oaicite:11]{index=11}"
    },
    {
      id: "css-positioning-q11",
      question: "How many types of position values are there in CSS?",
      options: [
        { id: "opt1", text: "2" },
        { id: "opt2", text: "3" },
        { id: "opt3", text: "4" },
        { id: "opt4", text: "5" }
      ],
      correctAnswerId: "opt3",
      explanation: "There are four position values: static, relative, absolute, fixed. :contentReference[oaicite:12]{index=12}"
    },
    {
      id: "css-positioning-q12",
      question: "What is the default positioning value for CSS elements?",
      options: [
        { id: "opt1", text: "fixed" },
        { id: "opt2", text: "relative" },
        { id: "opt3", text: "absolute" },
        { id: "opt4", text: "static" }
      ],
      correctAnswerId: "opt4",
      explanation: "Static is the default value. :contentReference[oaicite:13]{index=13}"
    },
    {
      id: "css-positioning-q13",
      question: "Setting position to relative makes the element appear _____ static elements in its area.",
      options: [
        { id: "opt1", text: "below" },
        { id: "opt2", text: "on bottom" },
        { id: "opt3", text: "on top" },
        { id: "opt4", text: "inside" }
      ],
      correctAnswerId: "opt3",
      explanation: "Relative positioned element moves on top of static ones. :contentReference[oaicite:14]{index=14}"
    },
    {
      id: "css-positioning-q14",
      question: "Which property removes an element completely from the document flow?",
      options: [
        { id: "opt1", text: "position: absolute" },
        { id: "opt2", text: "display: none" },
        { id: "opt3", text: "visibility: hidden" },
        { id: "opt4", text: "float" }
      ],
      correctAnswerId: "opt2",
      explanation: "display:none removes element from layout entirely. :contentReference[oaicite:15]{index=15}"
    },
    {
      id: "css-display-q15",
      question: "Which property specifies an element’s display type and can override its default presentation?",
      options: [
        { id: "opt1", text: "content" },
        { id: "opt2", text: "display" },
        { id: "opt3", text: "visibility" },
        { id: "opt4", text: "none" }
      ],
      correctAnswerId: "opt2",
      explanation: "display property controls how element is rendered. :contentReference[oaicite:16]{index=16}"
    },
    {
      id: "css-display-q16",
      question: "Which display value renders an element as a block-level box?",
      options: [
        { id: "opt1", text: "inline" },
        { id: "opt2", text: "block" },
        { id: "opt3", text: "list-item" },
        { id: "opt4", text: "none" }
      ],
      correctAnswerId: "opt2",
      explanation: "display:block causes element to act as a block-level box. :contentReference[oaicite:17]{index=17}"
    },
    {
      id: "css-display-q17",
      question: "Which display value hides the element completely and doesn’t reserve space?",
      options: [
        { id: "opt1", text: "visibility: hidden" },
        { id: "opt2", text: "display: none" },
        { id: "opt3", text: "opacity: 0" },
        { id: "opt4", text: "collapse" }
      ],
      correctAnswerId: "opt2",
      explanation: "display:none removes element and no placeholder space remains. :contentReference[oaicite:18]{index=18}"
    },
    {
      id: "css-display-q18",
      question: "Which display value renders element as an inline-level list item?",
      options: [
        { id: "opt1", text: "inline" },
        { id: "opt2", text: "list-item" },
        { id: "opt3", text: "block" },
        { id: "opt4", text: "flex" }
      ],
      correctAnswerId: "opt2",
      explanation: "display:list-item renders element inline with marker. :contentReference[oaicite:19]{index=19}"
    },
    {
      id: "css-display-q19",
      question: "display:inline-block allows which capability?",
      options: [
        { id: "opt1", text: "block width/height on inline flow" },
        { id: "opt2", text: "block-level only" },
        { id: "opt3", text: "list items only" },
        { id: "opt4", text: "no margin support" }
      ],
      correctAnswerId: "opt1",
      explanation: "inline-block permits width/height yet remains inline. :contentReference[oaicite:20]{index=20}"
    },
    {
      id: "css-display-q20",
      question: "Which display value creates a flex container?",
      options: [
        { id: "opt1", text: "inline-flex" },
        { id: "opt2", text: "flex" },
        { id: "opt3", text: "grid" },
        { id: "opt4", text: "block" }
      ],
      correctAnswerId: "opt2",
      explanation: "display:flex makes the element a flex container. :contentReference[oaicite:21]{index=21}"
    },
    {
      id: "css-display-q21",
      question: "Which display value creates a two-dimensional grid layout?",
      options: [
        { id: "opt1", text: "inline-grid" },
        { id: "opt2", text: "grid" },
        { id: "opt3", text: "flex" },
        { id: "opt4", text: "block" }
      ],
      correctAnswerId: "opt2",
      explanation: "display:grid enables CSS Grid layout. :contentReference[oaicite:22]{index=22}"
    },
    {
      id: "css-positioning-q22",
      question: "Which property allows an element to stay fixed in the viewport and not scroll with document?",
      options: [
        { id: "opt1", text: "position: absolute" },
        { id: "opt2", text: "position: fixed" },
        { id: "opt3", text: "position: relative" },
        { id: "opt4", text: "position: static" }
      ],
      correctAnswerId: "opt2",
      explanation: "position:fixed locks the element relative to viewport; it doesn’t scroll. :contentReference[oaicite:23]{index=23}"
    },
    {
      id: "css-positioning-q23",
      question: "If absolute positioned element has no positioned ancestor, it is positioned relative to the ___",
      options: [
        { id: "opt1", text: "viewport" },
        { id: "opt2", text: "page body" },
        { id: "opt3", text: "closest container" },
        { id: "opt4", text: "inline parent" }
      ],
      correctAnswerId: "opt2",
      explanation: "If no positioned ancestor, absolute becomes relative to document body. :contentReference[oaicite:24]{index=24}"
    },
    {
      id: "css-positioning-q24",
      question: "Which position value is not affected by top/bottom/left/right properties?",
      options: [
        { id: "opt1", text: "static" },
        { id: "opt2", text: "fixed" },
        { id: "opt3", text: "absolute" },
        { id: "opt4", text: "relative" }
      ],
      correctAnswerId: "opt1",
      explanation: "Static elements are unaffected by offset properties. :contentReference[oaicite:25]{index=25}"
    },
    {
      id: "css-positioning-q25",
      question: "Which CSS property determines whether floating elements are cleared?",
      options: [
        { id: "opt1", text: "float" },
        { id: "opt2", text: "clear" },
        { id: "opt3", text: "overflow" },
        { id: "opt4", text: "display" }
      ],
      correctAnswerId: "opt2",
      explanation: "The clear property controls clearing of floats. :contentReference[oaicite:26]{index=26}"
    },
    {
      id: "css-positioning-q26",
      question: "Which values are accepted by property float?",
      options: [
        { id: "opt1", text: "left" },
        { id: "opt2", text: "right" },
        { id: "opt3", text: "none" },
        { id: "opt4", text: "all of the mentioned" }
      ],
      correctAnswerId: "opt4",
      explanation: "float accepts left, right, none and inherit. :contentReference[oaicite:27]{index=27}"
    },
    {
      id: "css-display-q27",
      question: "Which visibility value hides element but still occupies layout space?",
      options: [
        { id: "opt1", text: "visibility: hidden" },
        { id: "opt2", text: "visibility: collapse" },
        { id: "opt3", text: "display: none" },
        { id: "opt4", text: "opacity: 0" }
      ],
      correctAnswerId: "opt1",
      explanation: "visibility:hidden hides element but retains its reserved space. :contentReference[oaicite:28]{index=28}"
    },
    {
      id: "css-display-q28",
      question: "A table cell with display: table-cell behaves similarly to?",
      options: [
        { id: "opt1", text: "inline-block" },
        { id: "opt2", text: "block" },
        { id: "opt3", text: "table-cell" },
        { id: "opt4", text: "list-item" }
      ],
      correctAnswerId: "opt3",
      explanation: "display:table-cell gives native table‑cell behavior. :contentReference[oaicite:29]{index=29}"
    },
    {
      id: "css-display-q29",
      question: "Which of the following CSS property defines the space between cells in a table?",
      options: [
        { id: "opt1", text: "border-spacing" },
        { id: "opt2", text: "border-collapse" },
        { id: "opt3", text: "border-style" },
        { id: "opt4", text: "none of the mentioned" }
      ],
      correctAnswerId: "opt1",
      explanation: "border-spacing defines space between table cells. :contentReference[oaicite:30]{index=30}"
    },
    {
      id: "css-display-q30",
      question: "Which CSS property is used to control the behavior of floating elements?",
      options: [
        { id: "opt1", text: "format" },
        { id: "opt2", text: "clean" },
        { id: "opt3", text: "clear" },
        { id: "opt4", text: "remove" }
      ],
      correctAnswerId: "opt3",
      explanation: "clear property controls behavior of floats. :contentReference[oaicite:31]{index=31}"
    }

         
    ]
      },
      {
        id: "css-transitions-and-animations",
        name: "CSS Transitions & Animations",
        slug: "css-transitions-and-animations",
        description: "Learn the basics of Cascading Style Sheets (CSS).",
        questions: [
           {
    id: "css-transition-q1",
    question: "Which property defines how long a transition takes to complete?",
    options: [
      { id: "opt1", text: "transition-style" },
      { id: "opt2", text: "transition-type" },
      { id: "opt3", text: "transition-duration" },
      { id: "opt4", text: "transition-delay" }
    ],
    correctAnswerId: "opt3",
    explanation: "transition-duration specifies the length of time a transition animation should take to complete."
           },
          {
            id: "css-transition-q2",
            question: "What is the purpose of the transition-delay property?",
            options: [
              { id: "opt1", text: "To set the transition duration" },
              { id: "opt2", text: "To apply the transition to multiple elements" },
              { id: "opt3", text: "To delay the start of a transition" },
              { id: "opt4", text: "To loop the transition" }
            ],
            correctAnswerId: "opt3",
            explanation: "transition-delay specifies the amount of time to wait before the transition begins."
          },
          {
            id: "css-transition-q3",
            question: "Which property defines the CSS property to which the transition is applied?",
            options: [
              { id: "opt1", text: "transition-effect" },
              { id: "opt2", text: "transition-property" },
              { id: "opt3", text: "transition-object" },
              { id: "opt4", text: "transition-style" }
            ],
            correctAnswerId: "opt2",
            explanation: "transition-property specifies the name of the CSS property the transition effect is for."
          },
          {
            id: "css-transition-q4",
            question: "Which of the following is a valid value for transition-timing-function?",
            options: [
              { id: "opt1", text: "bounce" },
              { id: "opt2", text: "step-in" },
              { id: "opt3", text: "ease-in" },
              { id: "opt4", text: "flow" }
            ],
            correctAnswerId: "opt3",
            explanation: "ease-in is a valid value and starts the transition slowly before speeding up."
          },
          {
            id: "css-transition-q5",
            question: "Which property is used to define all transition properties in a single line?",
            options: [
              { id: "opt1", text: "transition-group" },
              { id: "opt2", text: "transition" },
              { id: "opt3", text: "transition-all" },
              { id: "opt4", text: "transition-pack" }
            ],
            correctAnswerId: "opt2",
            explanation: "The transition shorthand property combines property, duration, timing-function, and delay."
          },
          {
            id: "css-transition-q6",
            question: "What is the default value of transition-timing-function?",
            options: [
              { id: "opt1", text: "linear" },
              { id: "opt2", text: "ease" },
              { id: "opt3", text: "ease-in-out" },
              { id: "opt4", text: "none" }
            ],
            correctAnswerId: "opt2",
            explanation: "The default value is ease, which starts slow, speeds up, then slows down again."
          },
          {
            id: "css-transition-q7",
            question: "Which CSS property must change to trigger a transition?",
            options: [
              { id: "opt1", text: "display" },
              { id: "opt2", text: "color" },
              { id: "opt3", text: "content" },
              { id: "opt4", text: "position: static" }
            ],
            correctAnswerId: "opt2",
            explanation: "Only animatable properties like color, background, and transform can be transitioned."
          },
          {
            id: "css-transitions-q8",
            question: "What is the default value of the transition-duration property?",
            options: [
              { id: "opt1", text: "0.5s" },
              { id: "opt2", text: "1s" },
              { id: "opt3", text: "0s" },
              { id: "opt4", text: "2s" }
            ],
            correctAnswerId: "opt3",
            explanation: "The default value of transition-duration is 0s, which means no transition will occur unless a duration is explicitly set."
          },
          {
            id: "css-transitions-q9",
            question: "When is a CSS transition typically triggered?",
            options: [
              { id: "opt1", text: "Only when the page loads" },
              { id: "opt2", text: "When hovering or changing an element's state" },
              { id: "opt3", text: "When clicking on links" },
              { id: "opt4", text: "When changing the page title" }
            ],
            correctAnswerId: "opt2",
            explanation: "CSS transitions are usually triggered by user interactions like hovering, focusing, or changing the state of an element."
          },
          {
            id: "css-transition-q10",
            question: "Which of the following values will cause all animatable properties to transition?",
            options: [
              { id: "opt1", text: "all" },
              { id: "opt2", text: "*" },
              { id: "opt3", text: "everything" },
              { id: "opt4", text: "inherit" }
            ],
            correctAnswerId: "opt1",
            explanation: "Setting transition-property to all applies the transition to every animatable property."
          },
          {
            id: "css-transitions-q11",
            question: "When using 'transition: all 0.5s;', which properties will the transition apply to?",
            options: [
              { id: "opt1", text: "Only one property" },
              { id: "opt2", text: "Nothing" },
              { id: "opt3", text: "All transitionable properties" },
              { id: "opt4", text: "Only text-related properties" }
            ],
            correctAnswerId: "opt3",
            explanation: "The value 'all' means the transition will apply to any CSS property that is capable of being transitioned."
          },
          {
            id: "css-transitions-q12",
            question: "What is the purpose of using the transition property in web design?",
            options: [
              { id: "opt1", text: "To speed up page loading" },
              { id: "opt2", text: "To reduce memory usage" },
              { id: "opt3", text: "To enhance user experience with smooth effects" },
              { id: "opt4", text: "To disable user interaction" }
            ],
            correctAnswerId: "opt3",
            explanation: "CSS transitions create smooth changes in style properties, which improves user experience."
          },
          {
            id: "css-transitions-q13",
            question: "What is the effect of using 'transition-delay: 2s' along with 'transition-duration: 1s'?",
            options: [
              { id: "opt1", text: "The transition starts immediately" },
              { id: "opt2", text: "No transition occurs" },
              { id: "opt3", text: "The transition starts after 2 seconds and lasts for 1 second" },
              { id: "opt4", text: "The transition starts after 1 second and lasts for 2 seconds" }
            ],
            correctAnswerId: "opt3",
            explanation: "The transition will wait 2 seconds (delay) before starting, and then run for 1 second (duration)."
          },
          {
            id: "css-transitions-q14",
            question: "If two properties are listed in 'transition-property' but only one duration is provided, what happens?",
            options: [
              { id: "opt1", text: "The same duration applies to both properties" },
              { id: "opt2", text: "Only one property transitions" },
              { id: "opt3", text: "The browser throws an error" },
              { id: "opt4", text: "Both properties are ignored" }
            ],
            correctAnswerId: "opt1",
            explanation: "If multiple properties are listed but only one duration is set, the same duration is applied to all."
          },
          {
            id: "css-transitions-q15",
            question: "What happens when a transition is applied to the opacity property?",
            options: [
              { id: "opt1", text: "The element becomes unclickable" },
              { id: "opt2", text: "The opacity changes gradually" },
              { id: "opt3", text: "The element changes color" },
              { id: "opt4", text: "The element moves automatically" }
            ],
            correctAnswerId: "opt2",
            explanation: "When transition is used with opacity, the transparency level of the element changes smoothly."
          },
          {
    id: "css-animation-q1",
    question: "Which CSS rule is used to define animation keyframes?",
    options: [
      { id: "opt1", text: "@animation" },
      { id: "opt2", text: "@keyframes" },
      { id: "opt3", text: "@motion" },
      { id: "opt4", text: "@frameset" }
    ],
    correctAnswerId: "opt2",
    explanation: "@keyframes is used to define the sequence of animation steps."
          },
          {
            id: "css-animation-q2",
            question: "Which property sets how many times an animation should run?",
            options: [
              { id: "opt1", text: "animation-repeat" },
              { id: "opt2", text: "animation-iteration-count" },
              { id: "opt3", text: "animation-loops" },
              { id: "opt4", text: "repeat-count" }
            ],
            correctAnswerId: "opt2",
            explanation: "animation-iteration-count controls how many times the animation cycle will run."
          },
          {
            id: "css-animation-q3",
            question: "What value makes the animation run forever?",
            options: [
              { id: "opt1", text: "endless" },
              { id: "opt2", text: "forever" },
              { id: "opt3", text: "loop" },
              { id: "opt4", text: "infinite" }
            ],
            correctAnswerId: "opt4",
            explanation: "Setting animation-iteration-count to infinite makes the animation repeat indefinitely."
          },
          {
            id: "css-animation-q4",
            question: "What does the animation-direction: alternate property do?",
            options: [
              { id: "opt1", text: "Plays only in reverse" },
              { id: "opt2", text: "Plays backward first" },
              { id: "opt3", text: "Plays forward then backward" },
              { id: "opt4", text: "Random directions" }
            ],
            correctAnswerId: "opt3",
            explanation: "alternate plays the animation forward on odd iterations and backward on even ones."
          },
          {
            id: "css-animation-q5",
            question: "What property is used to pause or resume an animation?",
            options: [
              { id: "opt1", text: "animation-status" },
              { id: "opt2", text: "animation-timing" },
              { id: "opt3", text: "animation-play-state" },
              { id: "opt4", text: "animation-delay" }
            ],
            correctAnswerId: "opt3",
            explanation: "animation-play-state controls whether the animation is running or paused."
          },
          {
            id: "css-animation-q6",
            question: "Which is the default value for animation-play-state?",
            options: [
              { id: "opt1", text: "paused" },
              { id: "opt2", text: "running" },
              { id: "opt3", text: "none" },
              { id: "opt4", text: "idle" }
            ],
            correctAnswerId: "opt2",
            explanation: "By default, animations automatically run, so the default value is running."
          },
          {
            id: "css-animation-q7",
            question: "Which property defines the duration of an animation?",
            options: [
              { id: "opt1", text: "animation-time" },
              { id: "opt2", text: "animation-duration" },
              { id: "opt3", text: "animation-speed" },
              { id: "opt4", text: "animation-delay" }
            ],
            correctAnswerId: "opt2",
            explanation: "animation-duration defines how long the animation takes from start to finish."
          },
          {
            id: "css-animation-q8",
            question: "What does the animation-fill-mode property control?",
            options: [
              { id: "opt1", text: "Animation background" },
              { id: "opt2", text: "Whether styles apply before/after animation" },
              { id: "opt3", text: "Animation direction" },
              { id: "opt4", text: "Animation timing" }
            ],
            correctAnswerId: "opt2",
            explanation: "animation-fill-mode controls how an element behaves before and after the animation."
          },
          {
            id: "css-animation-q9",
            question: "Which property allows defining multiple animations in one line?",
            options: [
              { id: "opt1", text: "animation-all" },
              { id: "opt2", text: "animation" },
              { id: "opt3", text: "animation-group" },
              { id: "opt4", text: "keyframes" }
            ],
            correctAnswerId: "opt2",
            explanation: "The animation shorthand property can define name, duration, timing, and more in one line."
          },
          {
            id: "css-animation-q10",
            question: "Which of the following is NOT a valid value for animation-timing-function?",
            options: [
              { id: "opt1", text: "ease" },
              { id: "opt2", text: "ease-in-out" },
              { id: "opt3", text: "spring" },
              { id: "opt4", text: "linear" }
            ],
            correctAnswerId: "opt3",
            explanation: "spring is not a valid predefined value in CSS for animation-timing-function."
          },
          {
            id: "css-animation-q11",
            question: "Which CSS property allows defining a delay before an animation starts?",
            options: [
              { id: "opt1", text: "delay" },
              { id: "opt2", text: "transition-delay" },
              { id: "opt3", text: "transform-delay" },
              { id: "opt4", text: "animation-delay" }
            ],
            correctAnswerId: "opt4",
            explanation: "animation-delay sets a delay before the animation begins."
          },
          {
            id: "css-animation-q12",
            question: "Which property controls if an animation should play in reverse on alternating cycles?",
            options: [
              { id: "opt1", text: "animation-iteration" },
              { id: "opt2", text: "animation-check" },
              { id: "opt3", text: "animation-direction" },
              { id: "opt4", text: "animation-state" }
            ],
            correctAnswerId: "opt3",
            explanation: "animation-direction controls normal vs alternate play directions."
          },
          {
            id: "css-animation-q13",
            question: "Which CSS property specifies the name of the @keyframes animation to run?",
            options: [
              { id: "opt1", text: "animation-run" },
              { id: "opt2", text: "animation-name" },
              { id: "opt3", text: "transition-name" },
              { id: "opt4", text: "none of the mentioned" }
            ],
            correctAnswerId: "opt2",
            explanation: "animation-name applies the name of the keyframes defined for the element."
          },
          {
            id: "css-animation-q14",
            question: "Which property sets how many times an animation cycle should run?",
            options: [
              { id: "opt1", text: "scale-iteration-count" },
              { id: "opt2", text: "transition-iteration-count" },
              { id: "opt3", text: "animation-iteration-count" },
              { id: "opt4", text: "all of the mentioned" }
            ],
            correctAnswerId: "opt3",
            explanation: "animation-iteration-count determines the number of animation repetitions."
          },
          {
            id: "css-animation-q15",
            question: "Which property describes how an animation will play, in terms of timing?",
            options: [
              { id: "opt1", text: "animation-timing-function" },
              { id: "opt2", text: "css3-timing-function" },
              { id: "opt3", text: "transform-timing-function" },
              { id: "opt4", text: "transition-timing-function" }
            ],
            correctAnswerId: "opt1",
            explanation: "animation-timing-function sets the pace at which keyframe transitions happen."
          }
         
    ]
      },
      {
        id: "css-responsive-and-media",
        name: "Responsive Design & Media Queries",
        slug: "css-responsive-and-media",
        description: "Learn the basics of Cascading Style Sheets (CSS).",
        questions: [
{
    id: "css-media-q1",
    question: "Which media type is used for computer screens?",
    options: [
      { id: "opt1", text: "print" },
      { id: "opt2", text: "screen" },
      { id: "opt3", text: "all" },
      { id: "opt4", text: "tv" }
    ],
    correctAnswerId: "opt2",
    explanation: "The 'screen' media type is specifically used for computer screens, tablets, smartphones, etc."
  },
  {
    id: "css-media-q2",
    question: "What is the syntax of a media query?",
    options: [
      { id: "opt1", text: "@media [media-type] and ([media-feature])" },
      { id: "opt2", text: "@media [media-feature] only ([media-type])" },
      { id: "opt3", text: "@media only screen { ... }" },
      { id: "opt4", text: "@media screen and media-feature" }
    ],
    correctAnswerId: "opt1",
    explanation: "The standard syntax is '@media [media-type] and ([media-feature])'."
  },
  {
    id: "css-media-q3",
    question: "Which media feature is used to set the maximum width of the display area?",
    options: [
      { id: "opt1", text: "min-width" },
      { id: "opt2", text: "max-height" },
      { id: "opt3", text: "max-width" },
      { id: "opt4", text: "min-height" }
    ],
    correctAnswerId: "opt3",
    explanation: "The 'max-width' media feature limits styles to devices with a screen width less than or equal to the specified value."
  },
  {
    id: "css-media-q4",
    question: "What does the keyword 'only' do in a media query?",
    options: [
      { id: "opt1", text: "Applies styles to all devices" },
      { id: "opt2", text: "Hides the media query from old browsers" },
      { id: "opt3", text: "Enables the media query to work in IE6" },
      { id: "opt4", text: "Limits media queries to screen readers" }
    ],
    correctAnswerId: "opt2",
    explanation: "The 'only' keyword prevents older browsers from applying styles they do not support."
  },
  {
    id: "css-media-q5",
    question: "Which of the following media features is used to detect device orientation?",
    options: [
      { id: "opt1", text: "device-width" },
      { id: "opt2", text: "orientation" },
      { id: "opt3", text: "aspect-ratio" },
      { id: "opt4", text: "resolution" }
    ],
    correctAnswerId: "opt2",
    explanation: "The 'orientation' media feature checks whether the device is in landscape or portrait mode."
  },
  {
    id: "css-media-q6",
    question: "What is the purpose of using media queries in CSS?",
    options: [
      { id: "opt1", text: "To apply styles based on JavaScript" },
      { id: "opt2", text: "To apply styles based on device or screen characteristics" },
      { id: "opt3", text: "To create animations" },
      { id: "opt4", text: "To override HTML structure" }
    ],
    correctAnswerId: "opt2",
    explanation: "Media queries allow responsive styling depending on the device’s features like width, height, and resolution."
  },
  {
    id: "css-media-q7",
    question: "What value of 'orientation' is used for horizontal layout?",
    options: [
      { id: "opt1", text: "portrait" },
      { id: "opt2", text: "horizontal" },
      { id: "opt3", text: "landscape" },
      { id: "opt4", text: "wide" }
    ],
    correctAnswerId: "opt3",
    explanation: "The 'landscape' value is used when the width is greater than the height (horizontal layout)."
  },
  {
    id: "css-media-q8",
    question: "Which one is a correct media query to apply styles on screens with width less than or equal to 768px?",
    options: [
      { id: "opt1", text: "@media screen and (min-width: 768px)" },
      { id: "opt2", text: "@media screen and (max-width: 768px)" },
      { id: "opt3", text: "@media (width: 768px)" },
      { id: "opt4", text: "@media only screen and (min-height: 768px)" }
    ],
    correctAnswerId: "opt2",
    explanation: "The 'max-width' media feature targets screens that are 768px wide or smaller."
  },
  {
    id: "css-media-q9",
    question: "What does 'min-width' do in a media query?",
    options: [
      { id: "opt1", text: "Applies styles to smaller screens only" },
      { id: "opt2", text: "Applies styles to screens wider than the given width" },
      { id: "opt3", text: "Applies styles to print devices" },
      { id: "opt4", text: "Sets minimum width of elements" }
    ],
    correctAnswerId: "opt2",
    explanation: "'min-width' applies styles only when the screen is at least the specified width."
  },
  {
    id: "css-media-q10",
    question: "Which is the default media type if none is specified?",
    options: [
      { id: "opt1", text: "all" },
      { id: "opt2", text: "screen" },
      { id: "opt3", text: "print" },
      { id: "opt4", text: "tv" }
    ],
    correctAnswerId: "opt1",
    explanation: "If no media type is specified, 'all' is used by default which applies to all devices."
  },
    {
    id: "css-media-q11",
    question: "What is a breakpoint in responsive design?",
    options: [
      { id: "opt1", text: "A screen size where layout changes" },
      { id: "opt2", text: "A flexible unit like percentage" },
      { id: "opt3", text: "A CSS property to change fonts" },
      { id: "opt4", text: "A type of screen unit" }
    ],
    correctAnswerId: "opt1",
    explanation: "A breakpoint is a point (usually in pixels or ems) where the page layout adapts to screen width."
  },
  {
    id: "css-media-q12",
    question: "How do you combine multiple conditions in a media query?",
    options: [
      { id: "opt1", text: "Using or" },
      { id: "opt2", text: "Using and" },
      { id: "opt3", text: "Using comma" },
      { id: "opt4", text: "Using only" }
    ],
    correctAnswerId: "opt2",
    explanation: "You use 'and' to combine multiple media features in one query."
  },
  {
    id: "css-media-q13",
    question: "Which media feature checks for device resolution?",
    options: [
      { id: "opt1", text: "resolution" },
      { id: "opt2", text: "color-index" },
      { id: "opt3", text: "aspect-ratio" },
      { id: "opt4", text: "scan" }
    ],
    correctAnswerId: "opt1",
    explanation: "'resolution' targets devices based on pixel density."
  },
  {
    id: "css-media-q14",
    question: "Which media type applies styles to all devices?",
    options: [
      { id: "opt1", text: "all" },
      { id: "opt2", text: "print" },
      { id: "opt3", text: "tv" },
      { id: "opt4", text: "aural" }
    ],
    correctAnswerId: "opt1",
    explanation: "The 'all' media type targets all devices regardless of their type."
  },
  {
    id: "css-media-q15",
    question: "What does 'mobile-first' approach mean?",
    options: [
      { id: "opt1", text: "Design for small screens first and scale up" },
      { id: "opt2", text: "Use only em units" },
      { id: "opt3", text: "Target only print devices" },
      { id: "opt4", text: "Load mobile images only" }
    ],
    correctAnswerId: "opt1",
    explanation: "Mobile-first design starts with styles for small devices and adds media queries for larger screens."
  },
  {
    id: "css-media-q16",
    question: "Which unit provides better behavior when zooming in browsers in media queries?",
    options: [
      { id: "opt1", text: "pixel-based queries" },
      { id: "opt2", text: "em-based queries" },
      { id: "opt3", text: "vw units only" },
      { id: "opt4", text: "none of the above" }
    ],
    correctAnswerId: "opt2",
    explanation: "em-based queries scale better with zoom and accessibility adjustments."
  },
  {
    id: "css-media-q17",
    question: "Which media feature refers to the number of colors a device supports?",
    options: [
      { id: "opt1", text: "color" },
      { id: "opt2", text: "color-index" },
      { id: "opt3", text: "monochrome" },
      { id: "opt4", text: "resolution" }
    ],
    correctAnswerId: "opt2",
    explanation: "'color-index' checks the number of entries in the device’s color lookup table."
  },
  {
    id: "css-media-q18",
    question: "What is the main difference between responsive design and adaptive client-side design?",
    options: [
      { id: "opt1", text: "Responsive uses CSS; adaptive client-side uses JS" },
      { id: "opt2", text: "Responsive uses only JS" },
      { id: "opt3", text: "Adaptive client-side depends on the server" },
      { id: "opt4", text: "There is no real difference" }
    ],
    correctAnswerId: "opt1",
    explanation: "Responsive design relies on flexible CSS, while adaptive client-side uses JavaScript to change layouts."
  },
  {
    id: "css-media-q19",
    question: "Which media type is specifically for print styles?",
    options: [
      { id: "opt1", text: "aural" },
      { id: "opt2", text: "print" },
      { id: "opt3", text: "screen" },
      { id: "opt4", text: "all" }
    ],
    correctAnswerId: "opt2",
    explanation: "The 'print' media type targets printed materials like documents."
  },
  {
    id: "css-media-q20",
    question: "Which of the following is the correct syntax for targeting devices with a minimum width of 768px?",
    options: [
      { id: "opt1", text: "@media min-width: 768px" },
      { id: "opt2", text: "@media (min-width: 768px)" },
      { id: "opt3", text: "@media only screen and min-width: 768px" },
      { id: "opt4", text: "@media only screen and (min-width: 768px)" }
    ],
    correctAnswerId: "opt4",
    explanation: "The correct syntax is '@media only screen and (min-width: 768px)' to target screens with minimum width."
  },
    {
    id: "css-media-q21",
    question: "What is the main benefit of using media queries in responsive web design?",
    options: [
      { id: "opt1", text: "To create fixed layouts" },
      { id: "opt2", text: "To ensure styles adapt to different devices" },
      { id: "opt3", text: "To limit styles to mobile devices only" },
      { id: "opt4", text: "To enhance print styles only" }
    ],
    correctAnswerId: "opt2",
    explanation: "Media queries allow styles to adapt based on the characteristics of the device, enhancing user experience across various screen sizes."
  },
  {
    id: "css-media-q22",
    question: "Which media feature can be used to check the width of the viewport?",
    options: [
      { id: "opt1", text: "width" },
      { id: "opt2", text: "min-width" },
      { id: "opt3", text: "max-width" },
      { id: "opt4", text: "viewport-width" }
    ],
    correctAnswerId: "opt2",
    explanation: "The 'min-width' media feature checks if the viewport width is at least a specified value, allowing for responsive design adjustments."
  },
  {
    id: "css-media-q23",
    question: "How can you target devices with a specific pixel density using media queries?",
    options: [
      { id: "opt1", text: "@media (min-resolution: 2dppx)" },
      { id: "opt2", text: "@media (resolution: 300dpi)" },
      { id: "opt3", text: "@media (max-resolution: 150dpi)" },
      { id: "opt4", text: "@media (density: high)" }
    ],
    correctAnswerId: "opt1",
    explanation: "The 'min-resolution' media feature allows targeting devices with a minimum pixel density, such as high-resolution screens."
  },
  {
    id: "css-media-q24",
    question: "What does the 'hover' media feature check for?",
    options: [
      { id: "opt1", text: "If the device can hover over elements" },
      { id: "opt2", text: "If the device has a touch screen" },
      { id: "opt3", text: "If the device supports animations" },
      { id: "opt4", text: "If the device is in landscape mode" }
    ],
    correctAnswerId: "opt1",
    explanation: "The 'hover' media feature checks if the user can hover over elements, which is useful for styling interactive elements differently on touch devices."
  },
  {
    id: "css-media-q25",
    question: "Which of the following is a common practice when using media queries?",
    options: [
      { id: "opt1", text: "Using fixed pixel values for all styles" },
      { id: "opt2", text: "Starting with mobile styles and adding media queries for larger screens" },
      { id: "opt3", text: "Using only one media query for all devices" },
      { id: "opt4", text: "Ignoring older browsers" }
    ],
    correctAnswerId: "opt2",
    explanation: "A common practice is to adopt a mobile-first approach, where styles for smaller screens are defined first, followed by media queries for larger screens."
  },
  {
    id: "css-media-q26",
    question: "What is the purpose of the 'max-width' media feature?",
    options: [
      { id: "opt1", text: "To set a maximum width for elements" },
      { id: "opt2", text: "To apply styles only if the viewport width is below a certain value" },
      { id: "opt3", text: "To define the maximum resolution of a device" },
      { id: "opt4", text: "To limit styles to print media" }
    ],
    correctAnswerId: "opt2",
    explanation: "The 'max-width' media feature applies styles only if the viewport width is below a specified value, allowing for responsive adjustments."
  },
  {
    id: "css-media-q27",
    question: "Which media query syntax is correct for targeting devices with a maximum height of 600px?",
    options: [
      { id: "opt1", text: "@media (max-height: 600px)" },
      { id: "opt2", text: "@media max-height: 600px" },
      { id: "opt3", text: "@media (height <= 600px)" },
      { id: "opt4", text: "@media only screen and max-height: 600px" }
    ],
    correctAnswerId: "opt1",
    explanation: "The correct syntax for targeting devices with a maximum height is '@media (max-height: 600px)'."
  },
  {
    id: "css-media-q28",
    question: "What does the 'aspect-ratio' media feature check?",
    options: [
      { id: "opt1", text: "The ratio of width to height of the viewport" },
      { id: "opt2", text: "The total number of pixels on the screen" },
      { id: "opt3", text: "The resolution of the device" },
      { id: "opt4", text: "The color depth of the display" }
    ],
    correctAnswerId: "opt1",
    explanation: "The 'aspect-ratio' media feature checks the ratio of the width to the height of the viewport, which can be useful for responsive design."
  },
  {
    id: "css-media-q29",
    question: "Which of the following is a valid media query for targeting only print styles?",
    options: [
      { id: "opt1", text: "@media print" },
      { id: "opt2", text: "@media only print" },
      { id: "opt3", text: "@media (media-type: print)" },
      { id: "opt4", text: "@media screen and print" }
    ],
    correctAnswerId: "opt1",
    explanation: "The valid syntax for targeting print styles is '@media print', which applies styles specifically for printed documents."
  },
  {
    id: "css-media-q30",
    question: "How can you ensure that your website is accessible on all devices?",
    options: [
      { id: "opt1", text: "By using only desktop styles" },
      { id: "opt2", text: "By implementing responsive design with media queries" },
      { id: "opt3", text: "By ignoring mobile users" },
      { id: "opt4", text: "By using fixed layouts" }
    ],
    correctAnswerId: "opt2",
    explanation: "Implementing responsive design with media queries ensures that the website adapts to various devices, enhancing accessibility for all users."
  }

  
          
         
    ]
      },

          
          // Add more questions as needed
        

      // Add more topics as needed
    ]
  },
  {
    id: 3,
    name: "JavaScript",
    slug: "javascript",
    logo: "/icons/javascript.svg",
    topicCount: 3,
    topics: [
      {
        id: "js-basics",
        name: "JavaScript Basics & Introduction",
        slug: "js-basics",
        description: "Learn the basics of JavaScript programming language.",
        questions: [
          {
            id: "js-basics-q1",
            question: "What is JavaScript?",
            options: [
              { id: "opt1", text: "JavaScript is a scripting language used to make the website interactive" },
              { id: "opt2", text: "JavaScript is an assembly language used to make the website interactive" },
              { id: "opt3", text: "JavaScript is a compiled language used to make the website interactive" },
              { id: "opt4", text: "None of the mentioned" }
            ],
            correctAnswerId: "opt1",
            explanation: "JavaScript is a scripting language used along with HTML and CSS to make the website interactive along. It is used both on the client-side and server-side."
          },
          {
            id: "js-basics-q2",
            question: "The script tag must be placed in __________",
            options: [
              { id: "opt1", text: "the head tag" },
              { id: "opt2", text: "the head or body" },
              { id: "opt3", text: "the title or head" },
              { id: "opt4", text: "after the body tag" }
            ],
            correctAnswerId: "opt2",
            explanation: "If the script tag is placed after the body tag, then, it will not be evaluated at all. Also, it is always recommended and effective to use the script snippet in the <head> tag."
          },
          {
            id: "js-basics-q3",
            question: "JavaScript can be written __________",
            options: [
              { id: "opt1", text: "directly into JS file and included into HTML" },
              { id: "opt2", text: "directly on the server page" },
              { id: "opt3", text: "directly into HTML pages" },
              { id: "opt4", text: "directly into the css file" }
            ],
            correctAnswerId: "opt1",
            explanation: "JavaScript files can be saved by .JS extension and can be included in the HTML files."
          },
          {
            id: "js-basics-q4",
            question: "Which of the following Attribute is used to include External JS code inside your HTML Document?",
            options: [
              { id: "opt1", text: "src" },
              { id: "opt2", text: "ext" },
              { id: "opt3", text: "script" },
              { id: "opt4", text: "link" }
            ],
            correctAnswerId: "opt1",
            explanation: "Script “tag” is used to include the JavaScript code. To include external JavaScript files “src” attribute is used inside the script tag."
          },
          {
            id: "js-basics-q5",
            question: "A proper scripting language is a __________",
            options: [
              { id: "opt1", text: "High level programming language" },
              { id: "opt2", text: "Assembly level programming language" },
              { id: "opt3", text: "Machine level programming language" },
              { id: "opt4", text: "Low level programming language" }
            ],
            correctAnswerId: "opt1",
            explanation: "JavaScript is a high-level programming language that is interpreted by another program at runtime rather than compiled by the computer’s processor."
          },
          {
            id: "js-basics-q6",
            question: "Which of the following is a JavaScript engine?",
            options: [
              { id: "opt1", text: "V8" },
              { id: "opt2", text: "JVM" },
              { id: "opt3", text: "PYPY" },
              { id: "opt4", text: "CLR" }
            ],
            correctAnswerId: "opt1",
            explanation: "V8 is the JavaScript engine used by Chrome and Node.js to execute JavaScript code."
          },

          {
            id: "js-basics-q8",
            question: "What was JavaScript initially called?",
            options: [
              { id: "opt1", text: "LiveScript" },
              { id: "opt2", text: "MochaScript" },
              { id: "opt3", text: "JSX" },
              { id: "opt4", text: "JScript" }
            ],
            correctAnswerId: "opt1",
            explanation: "JavaScript was originally called LiveScript before being renamed to JavaScript for marketing reasons."
          },
          {
            id: "js-basics-q9",
            question: "JavaScript is primarily used for __________",
            options: [
              { id: "opt1", text: "Database programming" },
              { id: "opt2", text: "Backend logic only" },
              { id: "opt3", text: "Styling web pages" },
              { id: "opt4", text: "Adding interactivity to web pages" }
            ],
            correctAnswerId: "opt4",
            explanation: "JavaScript adds interactivity and dynamic behavior to web pages."
          },
          {
            id: "js-basics-q10",
            question: "JavaScript code is executed by __________",
            options: [
              { id: "opt1", text: "The server" },
              { id: "opt2", text: "The browser" },
              { id: "opt3", text: "The database" },
              { id: "opt4", text: "The operating system" }
            ],
            correctAnswerId: "opt2",
            explanation: "In traditional web development, JavaScript is executed in the browser (client-side)."
          },
          {
            id: "js-basics-q11",
            question: "Which HTML tag is used to embed JavaScript code?",
            options: [
              { id: "opt1", text: "<javascript>" },
              { id: "opt2", text: "<js>" },
              { id: "opt3", text: "<script>" },
              { id: "opt4", text: "<code>" }
            ],
            correctAnswerId: "opt3",
            explanation: "The <script> tag is used to embed or reference JavaScript code inside HTML."
          },
          {
            id: "js-basics-q12",
            question: "Which of the following is a feature of JavaScript?",
            options: [
              { id: "opt1", text: "Compiled language" },
              { id: "opt2", text: "Statically typed" },
              { id: "opt3", text: "Runs in the browser" },
              { id: "opt4", text: "Does not support functions" }
            ],
            correctAnswerId: "opt3",
            explanation: "One of JavaScript’s main features is that it runs directly in the browser without needing compilation."
          },
          {
            id: "js-basics-q13",
            question: "What type of language is JavaScript?",
            options: [
              { id: "opt1", text: "Client-side scripting" },
              { id: "opt2", text: "Server-side scripting only" },
              { id: "opt3", text: "Markup language" },
              { id: "opt4", text: "Database language" }
            ],
            correctAnswerId: "opt1",
            explanation: "JavaScript is primarily a client-side scripting language."
          },
          {
            id: "js-basics-q14",
            question: "What does ECMAScript refer to in JavaScript?",
            options: [
              { id: "opt1", text: "A JavaScript framework" },
              { id: "opt2", text: "A server" },
              { id: "opt3", text: "A scripting language standard" },
              { id: "opt4", text: "A browser plugin" }
            ],
            correctAnswerId: "opt3",
            explanation: "ECMAScript is the standardized specification that JavaScript is based on."
          },
          {
            id: "js-basics-q15",
            question: "Is JavaScript case-sensitive?",
            options: [
              { id: "opt1", text: "Yes" },
              { id: "opt2", text: "No" },
              { id: "opt3", text: "Only in strict mode" },
              { id: "opt4", text: "Depends on the browser" }
            ],
            correctAnswerId: "opt1",
            explanation: "JavaScript is case-sensitive, meaning `Variable` and `variable` are different."
          },
          {
            id: "js-basics-q16",
            question: "What does the term 'DOM' stand for?",
            options: [
              { id: "opt1", text: "Document Object Model" },
              { id: "opt2", text: "Data Object Management" },
              { id: "opt3", text: "Digital Operation Method" },
              { id: "opt4", text: "Desktop Object Model" }
            ],
            correctAnswerId: "opt1",
            explanation: "The DOM (Document Object Model) is a programming interface for HTML and XML documents."
          },
          {
            id: "js-basics-q17",
            question: "Which keyword is used to write a comment in JavaScript?",
            options: [
              { id: "opt1", text: "//" },
              { id: "opt2", text: "#" },
              { id: "opt3", text: "<!--" },
              { id: "opt4", text: "**" }
            ],
            correctAnswerId: "opt1",
            explanation: "Single-line comments in JavaScript use `//`. Multi-line comments use `/* ... */`."
          },
          {
            id: "js-basics-q18",
            question: "Which of the following is NOT a valid use case for JavaScript?",
            options: [
              { id: "opt1", text: "Creating mobile apps" },
              { id: "opt2", text: "Controlling hardware devices directly" },
              { id: "opt3", text: "Building web applications" },
              { id: "opt4", text: "Creating interactive UI" }
            ],
            correctAnswerId: "opt2",
            explanation: "JavaScript does not natively control hardware devices like a low-level language."
          },
          {
            id: "js-basics-q19",
            question: "In which year was JavaScript created?",
            options: [
              { id: "opt1", text: "1993" },
              { id: "opt2", text: "1995" },
              { id: "opt3", text: "1997" },
              { id: "opt4", text: "2000" }
            ],
            correctAnswerId: "opt2",
            explanation: "JavaScript was created by Brendan Eich in 1995."
          },
          {
            id: "js-basics-q20",
            question: "What does the browser do when it encounters a JavaScript error?",
            options: [
              { id: "opt1", text: "Skips all HTML content" },
              { id: "opt2", text: "Crashes the browser" },
              { id: "opt3", text: "Stops executing the current script" },
              { id: "opt4", text: "Ignores it and continues silently" }
            ],
            correctAnswerId: "opt3",
            explanation: "When an error occurs, JavaScript stops executing the current script unless handled."
          },
          {
      id: "js-basics-q21",
      question: "What does the 'alert' function do in JavaScript?",
      options: [
        { id: "opt1", text: "Displays a message in a dialog box" },
        { id: "opt2", text: "Logs a message to the console" },
        { id: "opt3", text: "Changes the content of an HTML element" },
        { id: "opt4", text: "None of the above" }
      ],
      correctAnswerId: "opt1",
      explanation: "The 'alert' function displays a message in a dialog box that the user must acknowledge."
          },
          {
      id: "js-basics-q22",
      question: "What is the purpose of the 'console.log' function?",
      options: [
        { id: "opt1", text: "To display output in the console" },
        { id: "opt2", text: "To create an alert box" },
        { id: "opt3", text: "To change the HTML content" },
        { id: "opt4", text: "To declare a variable" }
      ],
      correctAnswerId: "opt1",
      explanation: "'console.log' is used to print messages to the console for debugging purposes."
          },

          // Add more questions as needed
        ]
      },
      {
        id: "js-variables",
        name: "JavaScript Variables",
        slug: "js-variables",
        description: "Learn the basics of JavaScript programming language.",
        questions: [
              {
                id: "js-variables-q1",
                question: "What keyword is used to declare a variable that cannot be reassigned?",
                options: [
                  { id: "opt1", text: "let" },
                  { id: "opt2", text: "var" },
                  { id: "opt3", text: "const" },
                  { id: "opt4", text: "static" }
                ],
                correctAnswerId: "opt3",
                explanation: "`const` is used to declare a constant variable that cannot be reassigned."
              },
              {
                id: "js-variables-q2",
                question: "What is the difference between `let` and `var` in terms of scope?",
                options: [
                  { id: "opt1", text: "let has function scope, var has block scope" },
                  { id: "opt2", text: "Both have the same scope" },
                  { id: "opt3", text: "let has block scope, var has function scope" },
                  { id: "opt4", text: "var has no specific scope" }
                ],
                correctAnswerId: "opt3",
                explanation: "`let` is block-scoped while `var` is function-scoped."
              },
              {
                id: "js-variables-q3",
                question: "What happens if you use a `let` variable before it's declared?",
                options: [
                  { id: "opt1", text: "Prints undefined" },
                  { id: "opt2", text: "Throws an error" },
                  { id: "opt3", text: "Works normally" },
                  { id: "opt4", text: "It’s ignored" }
                ],
                correctAnswerId: "opt2",
                explanation: "`let` is not hoisted the same way as `var`, so using it before declaration throws an error."
              },
              {
                id: "js-variables-q4",
                question: "What happens if you declare a `const` variable without assigning a value?",
                options: [
                  { id: "opt1", text: "Prints null" },
                  { id: "opt2", text: "Takes value undefined" },
                  { id: "opt3", text: "Throws an error" },
                  { id: "opt4", text: "Gets ignored" }
                ],
                correctAnswerId: "opt3",
                explanation: "`const` declarations must be initialized when declared."
              },
              {
                id: "js-variables-q5",
                question: "What is the output of this code: `var name = \"Sara\"; var name = \"Lana\"; console.log(name);`?",
                options: [
                  { id: "opt1", text: "Sara" },
                  { id: "opt2", text: "Lana" },
                  { id: "opt3", text: "undefined" },
                  { id: "opt4", text: "Declaration error" }
                ],
                correctAnswerId: "opt2",
                explanation: "With `var`, the second declaration overrides the first."
              },
              {
                id: "js-variables-q6",
                question: "Which of the following is a valid variable name?",
                options: [
                  { id: "opt1", text: "1name" },
                  { id: "opt2", text: "_name" },
                  { id: "opt3", text: "-name" },
                  { id: "opt4", text: "var" }
                ],
                correctAnswerId: "opt2",
                explanation: "Variable names can start with letters, underscore (_) or dollar sign ($), but not numbers or hyphens."
              },
              {
                id: "js-variables-q7",
                question: "What is the difference between primitive and reference variables?",
                options: [
                  { id: "opt1", text: "Primitives store values directly, references store pointers" },
                  { id: "opt2", text: "There is no difference" },
                  { id: "opt3", text: "Primitives use only let" },
                  { id: "opt4", text: "References cannot be changed" }
                ],
                correctAnswerId: "opt1",
                explanation: "Primitive variables hold values directly, while reference variables hold memory addresses."
              },
              {
                id: "js-variables-q8",
                question: "What value is printed if you access an uninitialized variable?",
                options: [
                  { id: "opt1", text: "null" },
                  { id: "opt2", text: "0" },
                  { id: "opt3", text: "undefined" },
                  { id: "opt4", text: "false" }
                ],
                correctAnswerId: "opt3",
                explanation: "Uninitialized variables have the value undefined."
              },
              {
                id: "js-variables-q9",
                question: "Are variable names case sensitive in JavaScript?",
                options: [
                  { id: "opt1", text: "No" },
                  { id: "opt2", text: "Yes" },
                  { id: "opt3", text: "Only in ES6" },
                  { id: "opt4", text: "Only with const" }
                ],
                correctAnswerId: "opt2",
                explanation: "JavaScript is case sensitive; variables like Name and name are different."
              },
              {
                id: "js-variables-q10",
                question: "What is the scope of a `var` variable declared inside a function?",
                options: [
                  { id: "opt1", text: "Global" },
                  { id: "opt2", text: "Function scope" },
                  { id: "opt3", text: "Block scope" },
                  { id: "opt4", text: "Object scope" }
                ],
                correctAnswerId: "opt2",
                explanation: "`var` variables inside functions are scoped to the function."
              },
              {
                id: "js-variables-q11",
                question: "Which keyword allows a variable’s value to be changed?",
                options: [
                  { id: "opt1", text: "final" },
                  { id: "opt2", text: "const" },
                  { id: "opt3", text: "let" },
                  { id: "opt4", text: "static" }
                ],
                correctAnswerId: "opt3",
                explanation: "`let` allows reassignment of variables."
              },
              {
                id: "js-variables-q12",
                question: "Which of the following is a valid variable declaration?",
                options: [
                  { id: "opt1", text: "var 123name = 'Ali';" },
                  { id: "opt2", text: "let my-name = 'Ali';" },
                  { id: "opt3", text: "const _age = 20;" },
                  { id: "opt4", text: "let break = 5;" }
                ],
                correctAnswerId: "opt3",
                explanation: "Variable names cannot start with numbers, contain hyphens, or use reserved keywords."
              },
              {
                id: "js-variables-q13",
                question: "What happens if you declare the same variable twice using var?",
                options: [
                  { id: "opt1", text: "Throws error" },
                  { id: "opt2", text: "Ignores the second declaration" },
                  { id: "opt3", text: "Overwrites the previous value" },
                  { id: "opt4", text: "Deletes the variable" }
                ],
                correctAnswerId: "opt3",
                explanation: "Using var to redeclare a variable overwrites the previous value."
              },
              {
                id: "js-variables-q14",
                question: "Can you modify properties of an object declared with const?",
                options: [
                  { id: "opt1", text: "Never" },
                  { id: "opt2", text: "Yes, but cannot reassign the object" },
                  { id: "opt3", text: "Yes, and also reassign the object" },
                  { id: "opt4", text: "Depends on the browser" }
                ],
                correctAnswerId: "opt2",
                explanation: "const prevents reassignment of the reference, but properties can be changed."
              },
              {
                id: "js-variables-q15",
                question: "Which of the following is NOT a JavaScript variable keyword?",
                options: [
                  { id: "opt1", text: "var" },
                  { id: "opt2", text: "dim" },
                  { id: "opt3", text: "let" },
                  { id: "opt4", text: "const" }
                ],
                correctAnswerId: "opt2",
                explanation: "`dim` is not used in JavaScript, it belongs to VBScript."
              },
              {
                id: "js-variables-q16",
                question: "What is the default value of an uninitialized variable?",
                options: [
                  { id: "opt1", text: "null" },
                  { id: "opt2", text: "undefined" },
                  { id: "opt3", text: "0" },
                  { id: "opt4", text: "\"\" (empty string)" }
                ],
                correctAnswerId: "opt2",
                explanation: "Uninitialized variables have the value undefined by default."
              },
              {
                id: "js-variables-q17",
                question: "What happens in this code? `let x = 5; x = 'text';`",
                options: [
                  { id: "opt1", text: "Error" },
                  { id: "opt2", text: "Type changes automatically" },
                  { id: "opt3", text: "Remains a number" },
                  { id: "opt4", text: "Prints NaN" }
                ],
                correctAnswerId: "opt2",
                explanation: "JavaScript is dynamically typed and allows changing variable types."
              },
              {
                id: "js-variables-q18",
                question: "What is the difference between null and undefined?",
                options: [
                  { id: "opt1", text: "No difference" },
                  { id: "opt2", text: "null means intentional absence, undefined means not assigned" },
                  { id: "opt3", text: "undefined is always manually assigned" },
                  { id: "opt4", text: "null is numeric" }
                ],
                correctAnswerId: "opt2",
                explanation: "null is used to indicate intentional absence; undefined means a variable is uninitialized."
              },
              {
                id: "js-variables-q19",
                question: "Why are variables used in JavaScript?",
                options: [
                  { id: "opt1", text: "For code formatting only" },
                  { id: "opt2", text: "To store data for later use" },
                  { id: "opt3", text: "To speed up execution" },
                  { id: "opt4", text: "To call other functions" }
                ],
                correctAnswerId: "opt2",
                explanation: "Variables store values that can be used and modified later in the program."
              },
              {
                id: "js-variables-q20",
                question: "Can you declare the same variable twice with let in the same scope?",
                options: [
                  { id: "opt1", text: "Yes" },
                  { id: "opt2", text: "No" },
                  { id: "opt3", text: "Depends on data type" },
                  { id: "opt4", text: "Yes, but only with const" }
                ],
                correctAnswerId: "opt2",
                explanation: "let does not allow redeclaration in the same scope."
              },
              {
                id: "js-variables-q21",
                question: "Which keyword is best to declare a constant like π?",
                options: [
                  { id: "opt1", text: "let" },
                  { id: "opt2", text: "var" },
                  { id: "opt3", text: "const" },
                  { id: "opt4", text: "define" }
                ],
                correctAnswerId: "opt3",
                explanation: "Use const for values that should not change."
              },
              {
                id: "js-variables-q22",
                question: "Which of the following is an invalid variable name?",
                options: [
                  { id: "opt1", text: "let" },
                  { id: "opt2", text: "_total" },
                  { id: "opt3", text: "firstName" },
                  { id: "opt4", text: "123abc" }
                ],
                correctAnswerId: "opt4",
                explanation: "Variable names cannot start with a number."
              },
              {
                id: "js-variables-q23",
                question: "Can const be used to declare an array?",
                options: [
                  { id: "opt1", text: "Yes, but elements cannot be changed" },
                  { id: "opt2", text: "No, const is for constants only" },
                  { id: "opt3", text: "Yes, elements can be changed but not the array reference" },
                  { id: "opt4", text: "Only for numeric values" }
                ],
                correctAnswerId: "opt3",
                explanation: "const prevents reassignment of the reference, but elements of the array can be modified."
              },
              {
                id: "js-variables-q24",
                question: "What does `typeof undefined` return?",
                options: [
                  { id: "opt1", text: "\"null\"" },
                  { id: "opt2", text: "\"object\"" },
                  { id: "opt3", text: "\"undefined\"" },
                  { id: "opt4", text: "\"number\"" }
                ],
                correctAnswerId: "opt3",
                explanation: "`typeof undefined` returns the string \"undefined\"."
              },
              {
                id: "js-variables-q25",
                question: "What is the output of: `var x; console.log(x);`?",
                options: [
                  { id: "opt1", text: "null" },
                  { id: "opt2", text: "undefined" },
                  { id: "opt3", text: "Error" },
                  { id: "opt4", text: "0" }
                ],
                correctAnswerId: "opt2",
                explanation: "Uninitialized variables declared with var have the value undefined."
              },
              {
                id: "js-variables-q26",
                question: "Can const be used to declare a function?",
                options: [
                  { id: "opt1", text: "Yes" },
                  { id: "opt2", text: "No" },
                  { id: "opt3", text: "Only with arrow functions" },
                  { id: "opt4", text: "Only inside objects" }
                ],
                correctAnswerId: "opt1",
                explanation: "Functions can be assigned to const variables to prevent reassignment."
              },
              {
                id: "js-variables-q27",
                question: "Which causes a redeclaration error?",
                options: [
                  { id: "opt1", text: "let x = 5; let x = 10;" },
                  { id: "opt2", text: "var x = 5; var x = 10;" },
                  { id: "opt3", text: "const x = 5; // no redeclaration" },
                  { id: "opt4", text: "let x = 5; x = 10;" }
                ],
                correctAnswerId: "opt1",
                explanation: "Redeclaring a variable with let in the same scope causes an error."
              },
              {
                id: "js-variables-q28",
                question: "What is the main difference between var and let in initialization?",
                options: [
                  { id: "opt1", text: "var is initialized with undefined" },
                  { id: "opt2", text: "let must be initialized" },
                  { id: "opt3", text: "var is not hoisted" },
                  { id: "opt4", text: "let has default null value" }
                ],
                correctAnswerId: "opt1",
                explanation: "var is hoisted and initialized with undefined; let is hoisted but uninitialized."
              },
              {
                id: "js-variables-q29",
                question: "Which statement correctly gets the type of a variable?",
                options: [
                  { id: "opt1", text: "console.typeof(x)" },
                  { id: "opt2", text: "type(x)" },
                  { id: "opt3", text: "typeof x" },
                  { id: "opt4", text: "x.typeof" }
                ],
                correctAnswerId: "opt3",
                explanation: "`typeof x` returns the type of x as a string."
              }

          // Add more questions as needed
        ]
      },
      {
        id: "js-data-types",
        name: "JavaScript Data Types",
        slug: "js-data-types",
        description: "Learn the basics of JavaScript programming language.",
        questions: [
              {
    id: "js-datatypes-q1",
    question: "What data type is used to represent whole numbers in JavaScript?",
    options: [
      { id: "opt1", text: "Integer" },
      { id: "opt2", text: "Array" },
      { id: "opt3", text: "Boolean" },
      { id: "opt4", text: "String" }
    ],
    correctAnswerId: "opt1",
    explanation: "In JavaScript, both integers and floats are represented by the 'Number' type, but 'Integer' is used as a descriptive term for whole numbers."
              },
              {
                id: "js-datatypes-q2",
                question: "Which of the following is NOT a primitive data type in JavaScript?",
                options: [
                  { id: "opt1", text: "Boolean" },
                  { id: "opt2", text: "Object" },
                  { id: "opt3", text: "String" },
                  { id: "opt4", text: "Character" }
                ],
                correctAnswerId: "opt4",
                explanation: "JavaScript does not have a 'Character' data type; single characters are simply strings of length one."
              },
              {
                id: "js-datatypes-q3",
                question: "What does the Boolean data type represent in JavaScript?",
                options: [
                  { id: "opt1", text: "Numbers" },
                  { id: "opt2", text: "Lists" },
                  { id: "opt3", text: "True or False values" },
                  { id: "opt4", text: "Text" }
                ],
                correctAnswerId: "opt3",
                explanation: "Boolean is used to represent logical values: true or false."
              },
              {
                id: "js-datatypes-q4",
                question: "What is the correct syntax to define an Array in JavaScript?",
                options: [
                  { id: "opt1", text: "Angle brackets <>" },
                  { id: "opt2", text: "Parentheses ()" },
                  { id: "opt3", text: "Square brackets []" },
                  { id: "opt4", text: "Curly braces {}" }
                ],
                correctAnswerId: "opt3",
                explanation: "Arrays in JavaScript are defined using square brackets []."
              },
              {
                id: "js-datatypes-q5",
                question: "Which data type is used to represent decimal numbers in JavaScript?",
                options: [
                  { id: "opt1", text: "Double" },
                  { id: "opt2", text: "Decimal" },
                  { id: "opt3", text: "Float" },
                  { id: "opt4", text: "Integer" }
                ],
                correctAnswerId: "opt3",
                explanation: "Although all numbers are of type 'Number', decimal numbers are often referred to as floats."
              },
              {
                id: "js-datatypes-q6",
                question: "What is the result of `typeof 'hello'`?",
                options: [
                  { id: "opt1", text: "'object'" },
                  { id: "opt2", text: "'string'" },
                  { id: "opt3", text: "'text'" },
                  { id: "opt4", text: "'character'" }
                ],
                correctAnswerId: "opt2",
                explanation: "Strings return 'string' when passed to typeof."
              },
              {
                id: "js-datatypes-q7",
                question: "What is the type of a variable declared without a value?",
                options: [
                  { id: "opt1", text: "null" },
                  { id: "opt2", text: "undefined" },
                  { id: "opt3", text: "object" },
                  { id: "opt4", text: "string" }
                ],
                correctAnswerId: "opt2",
                explanation: "Variables declared without assignment default to undefined."
              },
              {
                id: "js-datatypes-q8",
                question: "What is an object in JavaScript?",
                options: [
                  { id: "opt1", text: "A collection of key-value pairs" },
                  { id: "opt2", text: "A function" },
                  { id: "opt3", text: "A decimal data type" },
                  { id: "opt4", text: "A Boolean type" }
                ],
                correctAnswerId: "opt1",
                explanation: "An object is a data structure that holds key-value pairs."
              },
              {
                id: "js-datatypes-q9",
                question: "How do you distinguish between a numeric string and a real number in JavaScript?",
                options: [
                  { id: "opt1", text: "Using curly braces" },
                  { id: "opt2", text: "Using parentheses" },
                  { id: "opt3", text: "Using the var keyword" },
                  { id: "opt4", text: "Using quotation marks" }
                ],
                correctAnswerId: "opt4",
                explanation: "Numbers inside quotes are treated as strings, while those without quotes are real numbers."
              },
              {
                id: "js-datatypes-q10",
                question: "Which operator is used to determine a variable's data type?",
                options: [
                  { id: "opt1", text: "typeof" },
                  { id: "opt2", text: "typeOf()" },
                  { id: "opt3", text: "getType" },
                  { id: "opt4", text: "typeof()" }
                ],
                correctAnswerId: "opt1",
                explanation: "`typeof` is the operator used to check a variable's type."
              },
              {
    id: "js-datatypes-q11",
    question: "Which of the following is a common use of the Boolean data type?",
    options: [
      { id: "opt1", text: "Storing user ages" },
      { id: "opt2", text: "Displaying user lists" },
      { id: "opt3", text: "Checking login status" },
      { id: "opt4", text: "Counting users" }
    ],
    correctAnswerId: "opt3",
    explanation: "Booleans are often used for true/false checks like login status."
              },
              {
                id: "js-datatypes-q12",
                question: "What is the result of `typeof null`?",
                options: [
                  { id: "opt1", text: "'null'" },
                  { id: "opt2", text: "'undefined'" },
                  { id: "opt3", text: "'object'" },
                  { id: "opt4", text: "'false'" }
                ],
                correctAnswerId: "opt3",
                explanation: "`typeof null` returns 'object' due to a long‑standing JavaScript quirk."
              },
              {
                id: "js-datatypes-q13",
                question: "Which keyword is used to intentionally assign 'no value'?",
                options: [
                  { id: "opt1", text: "undefined" },
                  { id: "opt2", text: "null" },
                  { id: "opt3", text: "empty" },
                  { id: "opt4", text: "false" }
                ],
                correctAnswerId: "opt2",
                explanation: "`null` is used to explicitly indicate the absence of a value."
              },
              {
                id: "js-datatypes-q15",
                question: "What is the result of `typeof []`?",
                options: [
                  { id: "opt1", text: "'array'" },
                  { id: "opt2", text: "'object'" },
                  { id: "opt3", text: "'list'" },
                  { id: "opt4", text: "'undefined'" }
                ],
                correctAnswerId: "opt2",
                explanation: "Arrays are objects in JavaScript, so `typeof []` returns 'object'."
              },
              {
                id: "js-datatypes-q16",
                question: "Which data type can hold both properties and methods?",
                options: [
                  { id: "opt1", text: "String" },
                  { id: "opt2", text: "Object" },
                  { id: "opt3", text: "Boolean" },
                  { id: "opt4", text: "Number" }
                ],
                correctAnswerId: "opt2",
                explanation: "Objects can contain both data (properties) and functions (methods)."
              },
              {
                id: "js-datatypes-q17",
                question: "What is the result of the following code?\nconsole.log(typeof {name: \"Shatha\", age: 20, country: \"Gaza\"});",
                options: [
                  { id: "opt1", text: "object" },
                  { id: "opt2", text: "number" },
                  { id: "opt3", text: "undefined" },
                  { id: "opt4", text: "string" }
                ],
                correctAnswerId: "opt1",
                explanation: "An object literal returns 'object' when passed to `typeof`."
              },
              {
                id: "js-datatypes-q18",
                question: "What is the result of the following code?\nconsole.log(typeof [1, 2, 3]);",
                options: [
                  { id: "opt1", text: "array" },
                  { id: "opt2", text: "object" },
                  { id: "opt3", text: "list" },
                  { id: "opt4", text: "number" }
                ],
                correctAnswerId: "opt2",
                explanation: "Even arrays return 'object' from `typeof`."
              },
              {
                id: "js-datatypes-q20",
                question: "What is the result of the following code?\nconsole.log(typeof NaN);",
                options: [
                  { id: "opt1", text: "NaN" },
                  { id: "opt2", text: "number" },
                  { id: "opt3", text: "undefined" },
                  { id: "opt4", text: "string" }
                ],
                correctAnswerId: "opt2",
                explanation: "Although NaN stands for Not‑a‑Number, its type is still 'number'."
              },
              {
                id: "js-datatypes-q21",
                question: "What is the result of the following code?\nconsole.log(typeof true);",
                options: [
                  { id: "opt1", text: "boolean" },
                  { id: "opt2", text: "string" },
                  { id: "opt3", text: "truthy" },
                  { id: "opt4", text: "object" }
                ],
                correctAnswerId: "opt1",
                explanation: "True or false values return 'boolean'."
              },
              {
                id: "js-datatypes-q22",
                question: "What is the result of the following code?\nconsole.log(typeof \"Gaza\");",
                options: [
                  { id: "opt1", text: "string" },
                  { id: "opt2", text: "text" },
                  { id: "opt3", text: "word" },
                  { id: "opt4", text: "object" }
                ],
                correctAnswerId: "opt1",
                explanation: "Strings return 'string' when used with `typeof`."
              },
              {
                id: "js-datatypes-q23",
                question: "What is the result of the following code?\nconsole.log(typeof 123.45);",
                options: [
                  { id: "opt1", text: "number" },
                  { id: "opt2", text: "float" },
                  { id: "opt3", text: "decimal" },
                  { id: "opt4", text: "string" }
                ],
                correctAnswerId: "opt1",
                explanation: "All numeric values—including decimals—are of type 'number'."
              },
              {
                id: "js-datatypes-q24",
                question: "What is the result of the following code?\nconsole.log(typeof undefined);",
                options: [
                  { id: "opt1", text: "null" },
                  { id: "opt2", text: "undefined" },
                  { id: "opt3", text: "object" },
                  { id: "opt4", text: "nothing" }
                ],
                correctAnswerId: "opt2",
                explanation: "The typeof undefined value returns 'undefined'."
              }

          // Add more questions as needed
        ]
      },
      {
        id: "js-operators",
        name: "JavaScript Operators (Arithmetic,Logical,Comparison)",
        slug: "js-operators",
        description: "Learn the basics of JavaScript programming language.",
        questions: [
              {
    id: "js-arith-q1",
    question: "What is the final result of this operation? 5 + 3 * 2",
    options: [
      { id: "opt1", text: "16" },
      { id: "opt2", text: "11" },
      { id: "opt3", text: "13" },
      { id: "opt4", text: "10" }
    ],
    correctAnswerId: "opt2",
    explanation: "Multiplication is done first: 3 * 2 = 6, then 5 + 6 = 11"
              },
              {
                id: "js-arith-q2",
                question: "What is the function of the % operator in JavaScript?",
                options: [
                  { id: "opt1", text: "Division" },
                  { id: "opt2", text: "Returns the remainder" },
                  { id: "opt3", text: "Exponentiation" },
                  { id: "opt4", text: "Addition" }
                ],
                correctAnswerId: "opt2",
                explanation: "The % operator returns the remainder of a division"
              },
              {
                id: "js-arith-q3",
                question: "What is the result of 10 / 0 in JavaScript?",
                options: [
                  { id: "opt1", text: "Error" },
                  { id: "opt2", text: "0" },
                  { id: "opt3", text: "Infinity" },
                  { id: "opt4", text: "NaN" }
                ],
                correctAnswerId: "opt3",
                explanation: "Division by zero in JavaScript returns Infinity"
              },
              {
                id: "js-arith-q4",
                "question": "What is the difference between x++ and ++x?",
                options: [
                  { id: "opt1", text: "No difference" },
                  { id: "opt2", text: "x++ increments then uses, ++x uses then increments" },
                  { id: "opt3", text: "x++ uses then increments, ++x increments then uses" },
                  { id: "opt4", text: "Both decrement the value" }
                ],
                correctAnswerId: "opt3",
                explanation: "x++ returns the original value then increments it. ++x increments first, then returns the value."
              },
              {
                id: "js-arith-q5",
                question: "What is the result of 2 ** 3?",
                options: [
                  { id: "opt1", text: "6" },
                  { id: "opt2", text: "8" },
                  { id: "opt3", text: "9" },
                  { id: "opt4", text: "5" }
                ],
                correctAnswerId: "opt2",
                explanation: "** is the exponentiation operator: 2 to the power of 3 = 8"
              },
              {
                id: "js-arith-q6",
                question: "What is the result of 5 + '5' in JavaScript?",
                options: [
                  { id: "opt1", text: "10" },
                  { id: "opt2", text: "'55'" },
                  { id: "opt3", text: "NaN" },
                  { id: "opt4", text: "Error" }
                ],
                correctAnswerId: "opt2",
                explanation: "Number + string results in string concatenation: '55'"
              },
              {
                id: "js-arith-q7",
                question: "Which of the following increases the variable by 1?",
                options: [
                  { id: "opt1", text: "x--" },
                  { id: "opt2", text: "x + 1" },
                  { id: "opt3", text: "x++" },
                  { id: "opt4", text: "x ** 1" }
                ],
                correctAnswerId: "opt3",
                explanation: "x++ increments the value of x by 1"
              },
              {
                id: "js-arith-q8",
                question: "What does x %= 3 do?",
                options: [
                  { id: "opt1", text: "x = x + 3" },
                  { id: "opt2", text: "x = x % 3" },
                  { id: "opt3", text: "x = x * 3" },
                  { id: "opt4", text: "x = x / 3" }
                ],
                correctAnswerId: "opt2",
                explanation: "It's shorthand for x = x % 3"
              },
              {
                id: "js-arith-q9",
                question: "If x = 4, what is the result of x *= 5?",
                options: [
                  { id: "opt1", text: "20" },
                  { id: "opt2", text: "9" },
                  { id: "opt3", text: "45" },
                  { id: "opt4", text: "1" }
                ],
                correctAnswerId: "opt1",
                explanation: "x *= 5 means x = x * 5, so 4 * 5 = 20"
              },
              {
                id: "js-arith-q10",
                question: "What is the result of console.log('10' - 5);?",
                options: [
                  { id: "opt1", text: "105" },
                  { id: "opt2", text: "5" },
                  { id: "opt3", text: "NaN" },
                  { id: "opt4", text: "Error" }
                ],
                correctAnswerId: "opt2",
                explanation: "The string '10' is coerced into a number: 10 - 5 = 5"
              },
              {
                id: "js-logical-q1",
                question: "Given x = 6, what are the results after: x -= 3 and x %= 4?",
                options: [
                  { id: "opt1", text: "4 and 5" },
                  { id: "opt2", text: "3 and 2" },
                  { id: "opt3", text: "3 and 7" },
                  { id: "opt4", text: "1 and 2" }
                ],
                correctAnswerId: "opt2",
                explanation: "x = 6 - 3 = 3, then x = 3 % 4 = 3"
              },
              {
                id: "js-logical-q2",
                question: "Given a = 4, d = 9, what is the result of: a - d?",
                options: [
                  { id: "opt1", text: "-5" },
                  { id: "opt2", text: "5" },
                  { id: "opt3", text: "8" },
                  { id: "opt4", text: "9" }
                ],
                correctAnswerId: "opt1",
                explanation: "4 - 9 = -5"
              },
              {
                id: "js-logical-q3",
                question: "Given b = 'happy', c = 'people', what is the result of: b + c?",
                options: [
                  { id: "opt1", text: "happy people" },
                  { id: "opt2", text: "people happy" },
                  { id: "opt3", text: "happy memories" },
                  { id: "opt4", text: "happyplus" }
                ],
                correctAnswerId: "opt1",
                explanation: "String + string results in concatenation: 'happy' + 'people'"
              },
              {
                id: "js-logical-q4",
                question: "x = 8, y = 16. Evaluate: (x !== 9 && y === 16) || (x > 10 || y != 16)",
                options: [
                  { id: "opt1", text: "False" },
                  { id: "opt2", text: "True" }
                ],
                correctAnswerId: "opt2",
                explanation: "First group is true, so the full expression is true"
              },
              {
                id: "js-logical-q5",
                question: "x = 8, y = 16. Evaluate: (x === 8 || y > 5) && (x !== 7 && y > '11')",
                options: [
                  { id: "opt1", text: "True" },
                  { id: "opt2", text: "False" }
                ],
                correctAnswerId: "opt1",
                explanation: "All conditions are true, so the result is true"
              },
              {
                id: "js-logical-q6",
                question: "x = 8, y = 16. Evaluate: (x > '4' || y <= 10) || x === 8 || y > 15",
                options: [
                  { id: "opt1", text: "True" },
                  { id: "opt2", text: "False" }
                ],
                correctAnswerId: "opt1",
                explanation: "Several expressions are true, so result is true"
              },
              {
                id: "js-logical-q7",
                question: "x = 8, y = 16. Evaluate: (x > 3 && y !== 7) && (x >= 6 && y == 16)",
                options: [
                  { id: "opt1", text: "True" },
                  { id: "opt2", text: "False" }
                ],
                correctAnswerId: "opt1",
                explanation: "All conditions are met"
              },
              {
                id: "js-logical-q8",
                question: "x = 8. What is the result of !(x = 8)?",
                options: [
                  { id: "opt1", text: "True" },
                  { id: "opt2", text: "False" }
                ],
                correctAnswerId: "opt2",
                explanation: "Assignment returns 8 (truthy), so !8 = false"
              },
              {
                id: "js-logical-q9",
                question: "x = 7, y = 9. Evaluate: (x > 2 && y !== 9) && (x >= 6 && y == 9)",
                options: [
                  { id: "opt1", text: "True" },
                  { id: "opt2", text: "False" }
                ],
                correctAnswerId: "opt2",
                explanation: "y !== 9 is false, so whole expression is false"
              },
              {
                id: "js-logical-q10",
                question: "x = 5, y = 3. Evaluate: (x == 2 || y == 3) || (x < 6 && y < 9)",
                options: [
                  { id: "opt1", text: "True" },
                  { id: "opt2", text: "False" }
                ],
                correctAnswerId: "opt1",
                explanation: "y == 3 is true, rest doesn't matter due to ||"
              },
              {
                id: "js-operators-q1",
                question: "Given the following code:\n\n```javascript\nlet a = 10;\nlet b = \"20\";\nlet c = 80;\nconsole.log(++a + +b++ + +c++ - +a++);\n```\n \nWhat will be printed to the console?",
                options: [
                  { id: "opt1", text: "100" },
                  { id: "opt2", text: "180" },
                  { id: "opt3", text: "181" },
                  { id: "opt4", text: "200" }
                ],
                correctAnswerId: "opt1",
                explanation: "++a = 11, +b++ = 20, +c++ = 80, +a++ = 11 → 11 + 20 + 80 - 11 = 100"
              },
              {
                id: "js-operators-q4",
                question: "What is the result of the following expression?\n\n```javascript\nconsole.log(10 == \"10\" || 10 > 8 || 10 > 50);\n```\n",
                options: [
                  { id: "opt1", text: "True" },
                  { id: "opt2", text: "False" }
                ],
                correctAnswerId: "opt1",
                explanation: "10 == \"10\" is true due to type coercion. So the whole OR expression becomes true."
              },
              {
                id: "js-operators-q5",
                question: "What will this expression return?\n\n```javascript\nconsole.log(!(6 > 2 && 3 < 5));\n```\n",
                options: [
                  { id: "opt1", text: "True" },
                  { id: "opt2", text: "False" }
                ],
                correctAnswerId: "opt2",
                explanation: "6 > 2 && 3 < 5 is true, but !true becomes false."
              },
              {
                id: "js-operators-q6",
                question: "Evaluate the result:\n\n```javascript\nconsole.log((5 > 3 && !(4 === '4')) || false);\n```\n",
                options: [
                  { id: "opt1", text: "True" },
                  { id: "opt2", text: "False" }
                ],
                correctAnswerId: "opt1",
                explanation: "5 > 3 is true, 4 === '4' is false, so !(false) = true → true && true = true → true || false = true"
              },
              {
                id: "js-operators-q7",
                question: "What does this complex expression return?\n\n```javascript\nconsole.log((10 > 2 || false) && !(8 !== \"8\" && 6 >= 6));\n```\n",
                options: [
                  { id: "opt1", text: "True" },
                  { id: "opt2", text: "False" }
                ],
                correctAnswerId: "opt1",
                explanation: "10 > 2 is true, so left side = true. Inside NOT: 8 !== \"8\" is true, 6 >= 6 is true → true && true = true → !true = false → final: true && false = false."
              }

          // Add more questions as needed
        ]
      },
      {
        id: "js-conditional-statements",
        name: "JavaScript Conditional Statements",
        slug: "js-conditional-statements",
        description: "Learn the basics of JavaScript programming language.",
        questions: [
                {
    id: "js-cond-q1",
    question: "Which keyword is used to start a conditional block in JavaScript?",
    options: [
      { id: "opt1", text: "if" },
      { id: "opt2", text: "when" },
      { id: "opt3", text: "check" },
      { id: "opt4", text: "compare" }
    ],
    correctAnswerId: "opt1",
    explanation: "The `if` keyword is used to define a conditional block in JavaScript."
  },
  {
    id: "js-cond-q2",
    question: "What is the correct syntax for an if-else statement in JavaScript?",
    options: [
      { id: "opt1", text: "if { condition } then { ... } else { ... }" },
      { id: "opt2", text: "if (condition) { ... } else { ... }" },
      { id: "opt3", text: "if condition { ... } or { ... }" },
      { id: "opt4", text: "if condition then else" }
    ],
    correctAnswerId: "opt2",
    explanation: "JavaScript requires parentheses around the condition and curly braces around the block."
  },
  {
    id: "js-cond-q3",
    question: "What will this code print? `let x = 10;\nif (x > 5) {\n  console.log(\"Greater\");\n} else {\n  console.log(\"Smaller\");\n}`",
    options: [
      { id: "opt1", text: "Smaller" },
      { id: "opt2", text: "Greater" },
      { id: "opt3", text: "Undefined" },
      { id: "opt4", text: "Error" }
    ],
    correctAnswerId: "opt2",
    explanation: "Since 10 is greater than 5, it will print 'Greater'."
  },
  {
    id: "js-cond-q4",
    question: "What will this code output? `let score = 70;\nif (score >= 90) {\n  console.log(\"A\");\n} else if (score >= 80) {\n  console.log(\"B\");\n} else {\n  console.log(\"C or lower\");\n}`",
    options: [
      { id: "opt1", text: "A" },
      { id: "opt2", text: "B" },
      { id: "opt3", text: "C or lower" },
      { id: "opt4", text: "Error" }
    ],
    correctAnswerId: "opt3",
    explanation: "Since the score is less than 80, the else block will execute."
  },
  {
    id: "js-cond-q5",
    question: "Which of the following is NOT a valid conditional operator in JavaScript?",
    options: [
      { id: "opt1", text: "===" },
      { id: "opt2", text: "<=" },
      { id: "opt3", text: "!=" },
      { id: "opt4", text: "#=" }
    ],
    correctAnswerId: "opt4",
    explanation: "`#=` is not a valid operator in JavaScript."
  },
  {
    id: "js-cond-q6",
    question: "How can you check if two values are NOT equal in both type and value in JavaScript?",
    options: [
      { id: "opt1", text: "!=" },
      { id: "opt2", text: "!==" },
      { id: "opt3", text: "=!=" },
      { id: "opt4", text: "=!" }
    ],
    correctAnswerId: "opt2",
    explanation: "`!==` checks for inequality in both type and value."
  },
  {
    id: "js-cond-q7",
    question: "Which symbol represents the ternary operator in JavaScript?",
    options: [
      { id: "opt1", text: "??" },
      { id: "opt2", text: "||" },
      { id: "opt3", text: "?:" },
      { id: "opt4", text: "//" }
    ],
    correctAnswerId: "opt3",
    explanation: "The ternary operator uses `?` and `:` for inline conditional expressions."
  },
  {
    id: "js-cond-q8",
    question: "Which code correctly uses the ternary operator? `let age = 18;\nlet status = ? age >= 18 : \"Adult\" : \"Minor\";`",
    options: [
      { id: "opt1", text: "let status = age >= 18 ? \"Adult\" : \"Minor\";" },
      { id: "opt2", text: "let status = ? age >= 18 : \"Adult\" : \"Minor\";" },
      { id: "opt3", text: "let status = age => 18 ? \"Adult\" : \"Minor\";" },
      { id: "opt4", text: "let status = if (age >= 18) ? \"Adult\" : \"Minor\";" }
    ],
    correctAnswerId: "opt1",
    explanation: "The correct syntax is `condition ? trueValue : falseValue`."
  },
  {
    id: "js-cond-q9",
    question: "What will this expression return? `\nfalse || 'Hello';`",
    options: [
      { id: "opt1", text: "false" },
      { id: "opt2", text: "undefined" },
      { id: "opt3", text: "'Hello'" },
      { id: "opt4", text: "null" }
    ],
    correctAnswerId: "opt3",
    explanation: "The `||` operator returns the first truthy value, which is `'Hello'`."
  },
  {
    id: "js-cond-q10",
    question: "Which case will match in this switch statement? `let fruit = 'apple';\nswitch(fruit) {\n  case 'banana': console.log('Banana'); break;\n  case 'apple': console.log('Apple'); break;\n  default: console.log('Other');\n}`",
    options: [
      { id: "opt1", text: "Banana" },
      { id: "opt2", text: "Apple" },
      { id: "opt3", text: "Other" },
      { id: "opt4", text: "Error" }
    ],
    correctAnswerId: "opt2",
    explanation: "Since fruit is 'apple', the 'apple' case matches."
  },
  {
    id: "js-cond-q11",
    question: "What is the purpose of the `default` case in a switch statement?",
    options: [
      { id: "opt1", text: "Runs when all previous conditions are true" },
      { id: "opt2", text: "Runs when no case matches" },
      { id: "opt3", text: "Must always run" },
      { id: "opt4", text: "Ends the switch block" }
    ],
    correctAnswerId: "opt2",
    explanation: "The `default` case runs only if no other case matches."
  },
  {
    id: "js-cond-q12",
    question: "What will this expression return?`true && 'JS';`",
    options: [
      { id: "opt1", text: "true" },
      { id: "opt2", text: "'JS'" },
      { id: "opt3", text: "false" },
      { id: "opt4", text: "undefined" }
    ],
    correctAnswerId: "opt2",
    explanation: "The `&&` operator returns the last truthy value if all are truthy."
  },
  {
    id: "js-cond-q13",
    question: "Which statement is true about switch statements?",
    options: [
      { id: "opt1", text: "They can evaluate boolean expressions" },
      { id: "opt2", text: "They compare values using strict equality `===`" },
      { id: "opt3", text: "They only work with numbers" },
      { id: "opt4", text: "They replace all if statements" }
    ],
    correctAnswerId: "opt2",
    explanation: "Switch statements use strict equality (`===`) to match cases."
  },
  {
    id: "js-cond-q14",
    question: "What happens if `break` is omitted in a switch statement?",
    options: [
      { id: "opt1", text: "Only the matched case executes" },
      { id: "opt2", text: "Code jumps immediately to default" },
      { id: "opt3", text: "All subsequent cases run (fall-through)" },
      { id: "opt4", text: "An error occurs" }
    ],
    correctAnswerId: "opt3",
    explanation: "Without `break`, JavaScript continues executing all subsequent cases (fall-through)."
  },
  {
    id: "js-cond-q15",
    question: "What is the value of `result` in this code? `let a = null;\nlet result = a || 'default';`",
    options: [
      { id: "opt1", text: "null" },
      { id: "opt2", text: "undefined" },
      { id: "opt3", text: "a" },
      { id: "opt4", text: "'default'" }
    ],
    correctAnswerId: "opt4",
    explanation: "`null` is falsy, so `'default'` is assigned."
  },
  {
    id: "js-cond-q16",
    question: "Which is equivalent to:`if (isAdmin) {\n  showDashboard();\n}`",
    options: [
      { id: "opt1", text: "isAdmin ? showDashboard() : false;" },
      { id: "opt2", text: "isAdmin && showDashboard();" },
      { id: "opt3", text: "showDashboard() && isAdmin;" },
      { id: "opt4", text: "showDashboard() || isAdmin;" }
    ],
    correctAnswerId: "opt2",
    explanation: "`isAdmin && showDashboard();` is a common shortcut for simple if-true logic."
  },
  {
    id: "js-cond-q17",
    question: "Which of the following values are falsy in JavaScript?",
    options: [
      { id: "opt1", text: "0, '', null, undefined, false, NaN" },
      { id: "opt2", text: "1, '0', 'false'" },
      { id: "opt3", text: "true, ' ', [], {}" },
      { id: "opt4", text: "undefined only" }
    ],
    correctAnswerId: "opt1",
    explanation: "These are all falsy values in JavaScript."
  },
  {
    id: "js-cond-q18",
    question: "What will this code print? `let msg = '';\nlet loggedIn = false;\nmsg = loggedIn ? 'Welcome' : 'Please log in';\nconsole.log(msg);`",
    options: [
      { id: "opt1", text: "Welcome" },
      { id: "opt2", text: "Please log in" },
      { id: "opt3", text: "undefined" },
      { id: "opt4", text: "true" }
    ],
    correctAnswerId: "opt2",
    explanation: "Since `loggedIn` is false, the ternary returns 'Please log in'."
  },
  {
    id: "js-cond-q19",
    question: "Which expression is best to assign a default value only if the variable is falsy?",
    options: [
      { id: "opt1", text: "let name = value && 'default';" },
      { id: "opt2", text: "let name = value || 'default';" },
      { id: "opt3", text: "let name = value ? 'default' : value;" },
      { id: "opt4", text: "let name = 'default' ?? value;" }
    ],
    correctAnswerId: "opt2",
    explanation: "`value || 'default'` assigns 'default' only if `value` is falsy."
  },
  {
    id: "js-cond-q20",
    question: "What surrounds the code blocks in an if/else statement?",
    options: [
      { id: "opt1", text: "Quotations" },
      { id: "opt2", text: "Curly Brackets" },
      { id: "opt3", text: "Parenthesis" },
      { id: "opt4", text: "Square Brackets" }
    ],
    correctAnswerId: "opt2",
    explanation: "Curly brackets `{}` are used to group statements inside if, else if, or else blocks."
  }

          // Add more questions as needed
        ]
      },
      {
        id: "js-loops",
        name: "JavaScript Loops",
        slug: "js-loops",
        description: "Learn the basics of JavaScript programming language.",
        questions: [
{
            id: "js-loops-q1",
            question: "Which loop is best suited when the number of iterations is known beforehand?",
            options: [
              { id: "opt1", text: "while" },
              { id: "opt2", text: "for" },
              { id: "opt3", text: "do...while" },
              { id: "opt4", text: "forEach" }
            ],
            correctAnswerId: "opt2",
            explanation: "The for loop is typically used when the number of iterations is known in advance."
          },
          {
            id: "js-loops-q2",
            question: "Which loop guarantees at least one execution of its block regardless of the condition?",
            options: [
              { id: "opt1", text: "while" },
              { id: "opt2", text: "for" },
              { id: "opt3", text: "do...while" },
              { id: "opt4", text: "for...in" }
            ],
            correctAnswerId: "opt3",
            explanation: "The do...while loop executes its block at least once before checking the condition."
          },
          {
            id: "js-loops-q3",
            question: "What keyword is used to exit a loop prematurely in JavaScript?",
            options: [
              { id: "opt1", text: "stop" },
              { id: "opt2", text: "break" },
              { id: "opt3", text: "exit" },
              { id: "opt4", text: "return" }
            ],
            correctAnswerId: "opt2",
            explanation: "The break statement terminates the loop immediately."
          },
          {
            id: "js-loops-q4",
            question: "Which keyword skips the current iteration and continues with the next one?",
            options: [
              { id: "opt1", text: "break" },
              { id: "opt2", text: "continue" },
              { id: "opt3", text: "skip" },
              { id: "opt4", text: "next" }
            ],
            correctAnswerId: "opt2",
            explanation: "The continue statement skips the current iteration and proceeds to the next loop cycle."
          },
          {
            id: "js-loops-q5",
            question: "What will be the output of: for(let i=0;i<3;i++){console.log(i);}?",
            options: [
              { id: "opt1", text: "0 1 2" },
              { id: "opt2", text: "1 2 3" },
              { id: "opt3", text: "0 1 2 3" },
              { id: "opt4", text: "Infinite loop" }
            ],
            correctAnswerId: "opt1",
            explanation: "The loop starts at 0 and stops when i reaches 3, so it logs 0,1,2."
          },
          {
            id: "js-loops-q6",
            question: "Which loop structure checks its condition at the end of each iteration?",
            options: [
              { id: "opt1", text: "for" },
              { id: "opt2", text: "while" },
              { id: "opt3", text: "do...while" },
              { id: "opt4", text: "forEach" }
            ],
            correctAnswerId: "opt3",
            explanation: "The do...while loop checks its condition after executing the loop body."
          },
          {
            id: "js-loops-q7",
            question: "Which loop can result in an infinite loop if the condition never becomes false?",
            options: [
              { id: "opt1", text: "for" },
              { id: "opt2", text: "while" },
              { id: "opt3", text: "do...while" },
              { id: "opt4", text: "All of the above" }
            ],
            correctAnswerId: "opt4",
            explanation: "Any loop can become infinite if its terminating condition is never satisfied."
          },
          {
            id: "js-loops-q8",
            question: "Which statement about the for loop is correct?",
            options: [
              { id: "opt1", text: "It has no initialization part" },
              { id: "opt2", text: "It must always increment by 1" },
              { id: "opt3", text: "It includes initialization, condition, and increment parts" },
              { id: "opt4", text: "It can only decrement" }
            ],
            correctAnswerId: "opt3",
            explanation: "The for loop typically has initialization, condition, and increment/decrement expressions."
          },
          {
            id: "js-loops-q9",
            question: "What will happen if you omit the condition in a for loop?",
            options: [
              { id: "opt1", text: "The loop will not execute" },
              { id: "opt2", text: "It results in an infinite loop" },
              { id: "opt3", text: "It executes only once" },
              { id: "opt4", text: "Syntax error" }
            ],
            correctAnswerId: "opt2",
            explanation: "If the condition is omitted, the loop will run indefinitely unless terminated by break."
          },
          {
            id: "js-loops-q10",
            question: "Which loop is most commonly used with arrays?",
            options: [
              { id: "opt1", text: "for" },
              { id: "opt2", text: "while" },
              { id: "opt3", text: "do...while" },
              { id: "opt4", text: "for...in or for...of" }
            ],
            correctAnswerId: "opt4",
            explanation: "for...of is particularly useful for iterating over array elements."
          },
          {
            id: "js-loops-q11",
            question: "Which loop is best suited for iterating over object properties?",
            options: [
              { id: "opt1", text: "for" },
              { id: "opt2", text: "for...in" },
              { id: "opt3", text: "while" },
              { id: "opt4", text: "do...while" }
            ],
            correctAnswerId: "opt2",
            explanation: "The for...in loop iterates over the enumerable properties of an object."
          },
          {
            id: "js-loops-q12",
            question: "What is the default increment in a standard for loop?",
            options: [
              { id: "opt1", text: "0" },
              { id: "opt2", text: "1" },
              { id: "opt3", text: "2" },
              { id: "opt4", text: "It depends on the code" }
            ],
            correctAnswerId: "opt4",
            explanation: "The increment value depends on the developer; commonly it's i++ which is +1."
          },
          {
            id: "js-loops-q13",
            question: "Which loop would you choose for validating user input until a correct value is entered?",
            options: [
              { id: "opt1", text: "for" },
              { id: "opt2", text: "while" },
              { id: "opt3", text: "do...while" },
              { id: "opt4", text: "for...of" }
            ],
            correctAnswerId: "opt3",
            explanation: "do...while is useful because it ensures the body executes at least once."
          },
          {
            id: "js-loops-q14",
            question: "What is logged by: let i=0; while(i<2){console.log(i);i++;}?",
            options: [
              { id: "opt1", text: "0 1" },
              { id: "opt2", text: "1 2" },
              { id: "opt3", text: "0 1 2" },
              { id: "opt4", text: "Nothing" }
            ],
            correctAnswerId: "opt1",
            explanation: "The loop logs 0 then 1 and stops when i becomes 2."
          },
          {
            id: "js-loops-q15",
            question: "Which loop executes faster in most cases: for or while?",
            options: [
              { id: "opt1", text: "for" },
              { id: "opt2", text: "while" },
              { id: "opt3", text: "do...while" },
              { id: "opt4", text: "They are generally similar" }
            ],
            correctAnswerId: "opt4",
            explanation: "Performance differences are negligible; choice depends on logic readability."
          },
          {
            id: "js-loops-q16",
            question: "Which loop is best when you do not know how many times to repeat?",
            options: [
              { id: "opt1", text: "for" },
              { id: "opt2", text: "while" },
              { id: "opt3", text: "do...while" },
              { id: "opt4", text: "for...of" }
            ],
            correctAnswerId: "opt2",
            explanation: "while loops are often used when the number of iterations is not predetermined."
          },
          {
            id: "js-loops-q17",
            question: "What happens if you place a semicolon right after a while(condition);?",
            options: [
              { id: "opt1", text: "Loop works normally" },
              { id: "opt2", text: "Empty loop body executes repeatedly" },
              { id: "opt3", text: "Syntax error" },
              { id: "opt4", text: "It behaves like a for loop" }
            ],
            correctAnswerId: "opt2",
            explanation: "The semicolon creates an empty statement, leading to an empty loop body."
          },
          {
            id: "js-loops-q18",
            question: "Which statement about nested loops is true?",
            options: [
              { id: "opt1", text: "They are not allowed in JavaScript" },
              { id: "opt2", text: "They can be used but may affect performance" },
              { id: "opt3", text: "Only while loops can be nested" },
              { id: "opt4", text: "They always cause infinite loops" }
            ],
            correctAnswerId: "opt2",
            explanation: "Nested loops are allowed but can slow down execution if not managed properly."
          },
          {
            id: "js-loops-q19",
            question: "How can you immediately exit from multiple nested loops?",
            options: [
              { id: "opt1", text: "continue" },
              { id: "opt2", text: "break with labels" },
              { id: "opt3", text: "return inside inner loop" },
              { id: "opt4", text: "Both 2 and 3" }
            ],
            correctAnswerId: "opt4",
            explanation: "You can use labeled break or return (in functions) to exit nested loops."
          },
          {
            id: "js-loops-q20",
            question: "Which loop would you use to iterate over an array of numbers and calculate a sum?",
            options: [
              { id: "opt1", text: "for" },
              { id: "opt2", text: "for...of" },
              { id: "opt3", text: "while" },
              { id: "opt4", text: "Any of these" }
            ],
            correctAnswerId: "opt4",
            explanation: "Any loop can iterate arrays; for...of is simple, for is traditional."
          },
          {
            id: "js-loops-q21",
            question: "What is the output of: for(let i=1;i<=3;i++){if(i==2)continue;console.log(i);}?",
            options: [
              { id: "opt1", text: "1 3" },
              { id: "opt2", text: "2 3" },
              { id: "opt3", text: "1 2 3" },
              { id: "opt4", text: "Only 2" }
            ],
            correctAnswerId: "opt1",
            explanation: "The continue skips 2, so logs 1 then 3."
          },
          {
            id: "js-loops-q22",
            question: "Which loop structure is not natively present in JavaScript?",
            options: [
              { id: "opt1", text: "for" },
              { id: "opt2", text: "while" },
              { id: "opt3", text: "repeat...until" },
              { id: "opt4", text: "do...while" }
            ],
            correctAnswerId: "opt3",
            explanation: "repeat...until is not a JavaScript construct."
          },
          {
            id: "js-loops-q23",
            question: "Which loop type is useful when iterating over array indices rather than values?",
            options: [
              { id: "opt1", text: "for...in" },
              { id: "opt2", text: "for...of" },
              { id: "opt3", text: "while" },
              { id: "opt4", text: "do...while" }
            ],
            correctAnswerId: "opt1",
            explanation: "for...in is used to iterate over keys (indices) in arrays or properties in objects."
          },
          {
            id: "js-loops-q24",
            question: "What does break do in a for loop?",
            options: [
              { id: "opt1", text: "Skips one iteration" },
              { id: "opt2", text: "Exits the loop completely" },
              { id: "opt3", text: "Pauses the loop" },
              { id: "opt4", text: "Continues to the next iteration" }
            ],
            correctAnswerId: "opt2",
            explanation: "break exits the loop immediately."
          },
          {
            id: "js-loops-q25",
            question: "Which loop is considered a post-test loop?",
            options: [
              { id: "opt1", text: "while" },
              { id: "opt2", text: "do...while" },
              { id: "opt3", text: "for" },
              { id: "opt4", text: "for...of" }
            ],
            correctAnswerId: "opt2",
            explanation: "do...while is a post-test loop since it checks the condition after executing the body."
          },
          {
            id: "js-loops-q26",
            question: "What happens if you use break in a while loop?",
            options: [
              { id: "opt1", text: "It stops the loop immediately" },
              { id: "opt2", text: "It skips one iteration" },
              { id: "opt3", text: "It throws an error" },
              { id: "opt4", text: "It restarts the loop" }
            ],
            correctAnswerId: "opt1",
            explanation: "break exits the while loop completely."
          },
          {
            id: "js-loops-q27",
            question: "Which statement correctly describes the difference between break and continue?",
            options: [
              { id: "opt1", text: "break ends the loop; continue skips to next iteration" },
              { id: "opt2", text: "continue ends the loop; break skips iteration" },
              { id: "opt3", text: "Both do the same" },
              { id: "opt4", text: "Neither can be used in loops" }
            ],
            correctAnswerId: "opt1",
            explanation: "break exits the loop, while continue skips the current iteration."
          },
          {
            id: "js-loops-q28",
            question: "Which of the following can be used to iterate over arrays in ES6?",
            options: [
              { id: "opt1", text: "for" },
              { id: "opt2", text: "for...of" },
              { id: "opt3", text: "forEach" },
              { id: "opt4", text: "All of the above" }
            ],
            correctAnswerId: "opt4",
            explanation: "All these constructs can be used to iterate arrays in JavaScript."
          },
          {
            id: "js-loops-q29",
            question: "What is printed by: let x=0; do{x++;}while(x<0); console.log(x);?",
            options: [
              { id: "opt1", text: "0" },
              { id: "opt2", text: "1" },
              { id: "opt3", text: "undefined" },
              { id: "opt4", text: "Infinite loop" }
            ],
            correctAnswerId: "opt2",
            explanation: "do...while executes once before checking the condition, so x becomes 1."
          },
          {
            id: "js-loops-q30",
            question: "Which loop syntax is correct?",
            options: [
              { id: "opt1", text: "for i=0; i<5; i++" },
              { id: "opt2", text: "for(i<5; i++; i=0)" },
              { id: "opt3", text: "for(let i=0;i<5;i++)" },
              { id: "opt4", text: "for i<5" }
            ],
            correctAnswerId: "opt3",
            explanation: "The correct for loop syntax is: for(initialization; condition; increment)."
          }


          // Add more questions as needed
        ]
      },
      {
        id: "js-functions",
        name: "JavaScript Functions (Regular,Arrow,Advanced)",
        slug: "js-functions",
        description: "Learn the basics of JavaScript programming language.",
        questions: [
          {
            id: "js-functions-q1",
            question: "How do you define a function in JavaScript?",
            options: [
              { id: "opt1", text: "function myFunction() {}" },
              { id: "opt2", text: "let myFunction = function() {};" },
              { id: "opt3", text: "const myFunction = () => {};" },
              { id: "opt4", text: "All of the above" }
            ],
            correctAnswerId: "opt4",
            explanation: "All three options are valid ways to define functions in JavaScript."
          },
          {
            id: "js-functions-q2",
            question: "What keyword is used to return a value from a JavaScript function?",
            options: [
              { id: "opt1", text: "value" },
              { id: "opt2", text: "result" },
              { id: "opt3", text: "return" },
              { id: "opt4", text: "output" }
            ],
            correctAnswerId: "opt3",
            explanation: "The return keyword is used to send a value back from the function to the caller."
          },
          {
            id: "js-functions-q3",
            question: "How do you call a JavaScript function named myFunction?",
            options: [
              { id: "opt1", text: "call myFunction();" },
              { id: "opt2", text: "run myFunction();" },
              { id: "opt3", text: "myFunction();" },
              { id: "opt4", text: "execute myFunction();" }
            ],
            correctAnswerId: "opt3",
            explanation: "To call a function in JavaScript, you simply use the function's name followed by parentheses ()."
          },
          {
            id: "js-functions-q4",
            question: "What is a callback function in JavaScript?",
            options: [
              { id: "opt1", text: "A function that performs asynchronous tasks" },
              { id: "opt2", text: "A function that is called at the end of the program's execution" },
              { id: "opt3", text: "A function that is passed as an argument to another function and is executed inside that function" },
              { id: "opt4", text: "A function that is used for error handling" }
            ],
            correctAnswerId: "opt3",
            explanation: "A callback function is a function that is passed as an argument to another function and is executed inside that function."
          },
          {
            id: "js-functions-q5",
            question: "What is a closure in JavaScript?",
            options: [
              { id: "opt1", text: "A function that is stored as a property of an object" },
              { id: "opt2", text: "A function that can be accessed globally from any part of the code" },
              { id: "opt3", text: "A function that is defined inside another function and has access to its outer function's variables" },
              { id: "opt4", text: "A function that takes an unlimited number of arguments" }
            ],
            correctAnswerId: "opt3",
            explanation: "A closure is a function that retains access to variables from its containing (enclosing) function's scope, even after the outer function has finished executing."
          },
          {
            id: "js-functions-q6",
            question: "How can you immediately invoke an anonymous function in JavaScript?",
            options: [
              { id: "opt1", text: "function myFunc() { }();" },
              { id: "opt2", text: "function { } ();" },
              { id: "opt3", text: "() => { }();" },
              { id: "opt4", text: "(function() { })();" }
            ],
            correctAnswerId: "opt4",
            explanation: "To immediately invoke an anonymous function, wrap it in parentheses and follow it with another set of parentheses to execute it. This is known as an IIFE (Immediately Invoked Function Expression)."
          },
          {
            id: "js-functions-q7",
            question: "How do arrow functions differ from regular functions in ES6?",
            options: [
              { id: "opt1", text: "Arrow functions have shorter syntax than regular functions" },
              { id: "opt2", text: "Arrow functions do not have their own this value" },
              { id: "opt3", text: "Arrow functions cannot be used as methods in objects" },
              { id: "opt4", text: "All of the above" }
            ],
            correctAnswerId: "opt4",
            explanation: "Arrow functions in ES6 have shorter syntax, do not have their own this value (they inherit it from the surrounding scope), and cannot be used as constructors or methods in objects."
          },
          {
          id: "js-functions-q8",
          question: "Which keyword allows a JavaScript function to accept a default value if no argument is passed?",
          options: [
            { id: "opt1", text: "optional" },
            { id: "opt2", text: "default" },
            { id: "opt3", text: "=" },
            { id: "opt4", text: "?" }
          ],
          correctAnswerId: "opt3",
          explanation: "You can assign a default value using the equal sign (=) in the parameter list."
          },
          {
            id: "js-functions-q9",
            question: "What is the purpose of the 'arguments' object in JavaScript functions?",
            options: [
              { id: "opt1", text: "To store the return values of functions" },
              { id: "opt2", text: "To hold the parameters passed to the function" },
              { id: "opt3", text: "To access the number of arguments passed to the function" },
              { id: "opt4", text: "To define default values for parameters" }
            ],
            correctAnswerId: "opt3",
            explanation: "The 'arguments' object is an array-like object that holds the values of the arguments passed to a function."
          },
          {
            id: "js-functions-q10",
            question: "Which symbol is used for rest parameters in JavaScript?",
            options: [
              { id: "opt1", text: "..." },
              { id: "opt2", text: "&&" },
              { id: "opt3", text: "**" },
              { id: "opt4", text: "@@" }
            ],
            correctAnswerId: "opt1",
            explanation: "The spread/rest operator (...) allows functions to accept variable numbers of arguments."
          },
          {
            id: "js-functions-q11",
            question: "Arrow functions do NOT have their own:",
            options: [
              { id: "opt1", text: "scope" },
              { id: "opt2", text: "return value" },
              { id: "opt3", text: "this" },
              { id: "opt4", text: "parameters" }
            ],
            correctAnswerId: "opt3",
            explanation: "Arrow functions inherit the 'this' value from their enclosing scope."
          },
          {
            id: "js-functions-q12",
            question: "What does the following code return?\n(() => 5 + 3)();",
            options: [
              { id: "opt1", text: "undefined" },
              { id: "opt2", text: "8" },
              { id: "opt3", text: "function" },
              { id: "opt4", text: "NaN" }
            ],
            correctAnswerId: "opt2",
            explanation: "The arrow function is immediately invoked and returns the result of 5 + 3."
          },
          {
          id: "js-functions-q13",
          question: "Which function keyword behavior causes function declarations to be moved to the top?",
          options: [
            { id: "opt1", text: "Hoisting" },
            { id: "opt2", text: "Callback" },
            { id: "opt3", text: "Closure" },
            { id: "opt4", text: "Async" }
          ],
          correctAnswerId: "opt1",
          explanation: "Function declarations are hoisted to the top of their scope in JavaScript."
          },
          {
            id: "js-functions-q14",
            question: "How many arguments can a JavaScript function accept?",
            options: [
              { id: "opt1", text: "Only one" },
              { id: "opt2", text: "Two" },
              { id: "opt3", text: "Unlimited" },
              { id: "opt4", text: "None" }
            ],
            correctAnswerId: "opt3",
            explanation: "Functions in JavaScript can accept any number of arguments using the rest operator or `arguments` object."
          },
          {
            id: "js-functions-q15",
            question: "Which of the following methods can stop function execution early?",
            options: [
              { id: "opt1", text: "break" },
              { id: "opt2", text: "exit" },
              { id: "opt3", text: "return" },
              { id: "opt4", text: "continue" }
            ],
            correctAnswerId: "opt3",
            explanation: "Using `return` ends function execution and optionally returns a value."
          },
          {
            id: "js-functions-q16",
            question: "What is the result of typeof function(){}?",
            options: [
              { id: "opt1", text: "'function'" },
              { id: "opt2", text: "'object'" },
              { id: "opt3", text: "'undefined'" },
              { id: "opt4", text: "'method'" }
            ],
            correctAnswerId: "opt1",
            explanation: "Functions in JavaScript have the typeof 'function'."
          },
          {
            id: "js-functions-q17",
            question: "What happens if a function is called with fewer arguments than declared parameters?",
            options: [
              { id: "opt1", text: "It throws an error" },
              { id: "opt2", text: "The extra parameters are skipped" },
              { id: "opt3", text: "The missing arguments are undefined" },
              { id: "opt4", text: "The missing arguments are set to null" }
            ],
            correctAnswerId: "opt3",
            explanation: "Missing arguments in JavaScript are automatically set to `undefined`."
          },
          {
            id: "js-functions-q18",
            question: "Can a function return another function in JavaScript?",
            options: [
              { id: "opt1", text: "No" },
              { id: "opt2", text: "Yes" },
              { id: "opt3", text: "Only in strict mode" },
              { id: "opt4", text: "Only with arrow functions" }
            ],
            correctAnswerId: "opt2",
            explanation: "Functions in JavaScript are first-class citizens and can return other functions."
          },
          {
            id: "js-functions-q19",
            question: "Which method is used to call a function with a specified 'this' value?",
            options: [
              { id: "opt1", text: "apply()" },
              { id: "opt2", text: "call()" },
              { id: "opt3", text: "bind()" },
              { id: "opt4", text: "All of the above" }
            ],
            correctAnswerId: "opt4",
            explanation: "`call`, `apply`, and `bind` are all used to manipulate the 'this' context of a function."
          },
          {
            id: "js-functions-q20",
            question: "Which function type is best suited for concise one-liners with implicit return?",
            options: [
              { id: "opt1", text: "Function Declaration" },
              { id: "opt2", text: "Function Expression" },
              { id: "opt3", text: "Arrow Function" },
              { id: "opt4", text: "Named Function" }
            ],
            correctAnswerId: "opt3",
            explanation: "Arrow functions are ideal for short, inline operations with implicit return."
          },
          {
          id: "js-functions-q21",
          question: "Which of these is NOT an advantage of using arrow functions?",
          options: [
            { id: "opt1", text: "Shorter syntax" },
            { id: "opt2", text: "Lexical `this` binding" },
            { id: "opt3", text: "Hoisting behavior" },
            { id: "opt4", text: "Implicit return" }
          ],
          correctAnswerId: "opt3",
          explanation: "Arrow functions are not hoisted like traditional function declarations."
          },
          {
          id: "js-functions-q22",
          question: "What will this return?\n(() => typeof this)();",
          options: [
            { id: "opt1", text: "'object'" },
            { id: "opt2", text: "'function'" },
            { id: "opt3", text: "'undefined'" },
            { id: "opt4", text: "'string'" }
          ],
          correctAnswerId: "opt1",
          explanation: "`this` in an arrow function refers to the surrounding lexical context (likely `window` in browser)."
          },
          {
          id: "js-functions-q23",
          question: "What is the output of this code?\nconst add = (a, b = 5) => a + b;\nadd(3);",
          options: [
            { id: "opt1", text: "3" },
            { id: "opt2", text: "5" },
            { id: "opt3", text: "8" },
            { id: "opt4", text: "NaN" }
          ],
          correctAnswerId: "opt3",
          explanation: "Because b has a default value of 5, and 3 + 5 = 8."
          },
          {
            id: "js-functions-q24",
            question: "What is a higher-order function in JavaScript?",
            options: [
              { id: "opt1", text: "A function that can take another function as an argument" },
              { id: "opt2", text: "A function that returns another function" },
              { id: "opt3", text: "Both of the above" },
              { id: "opt4", text: "A function that is called multiple times" }
            ],
            correctAnswerId: "opt3",
            explanation: "A higher-order function is a function that can take another function as an argument or return a function as its result."
          },
          {
            id: "js-functions-q25",
            question: "What is the purpose of the 'bind' method in JavaScript?",
            options: [
              { id: "opt1", text: "To create a new function that, when called, has its 'this' keyword set to the provided value" },
              { id: "opt2", text: "To call a function with a given 'this' value and arguments" },
              { id: "opt3", text: "To create a copy of a function" },
              { id: "opt4", text: "To execute a function immediately" }
            ],
            correctAnswerId: "opt1",
            explanation: "The 'bind' method creates a new function that, when called, has its 'this' keyword set to the provided value."
          },
          {
            id: "js-functions-q26",
            question: "What is the purpose of the 'call' method in JavaScript?",
            options: [
              { id: "opt1", text: "To call a function with a specified 'this' value and arguments" },
              { id: "opt2", text: "To create a new function" },
              { id: "opt3", text: "To bind a function to an object" },
              { id: "opt4", text: "To execute a function immediately" }
            ],
            correctAnswerId: "opt1",
            explanation: "The 'call' method calls a function with a specified 'this' value and arguments provided individually."
          },
          {
            id: "js-functions-q27",
            question: "What is the output of the following code: 'console.log((function() { return; })());'?",
            options: [
              { id: "opt1", text: "undefined" },
              { id: "opt2", text: "null" },
              { id: "opt3", text: "Error" },
              { id: "opt4", text: "NaN" }
            ],
            correctAnswerId: "opt1",
            explanation: "If a function does not explicitly return a value, it returns 'undefined' by default."
          },
          {
            id: "js-functions-q28",
            question: "Which of the following is an example of a higher-order function?",
            options: [
              { id: "opt1", text: "`setTimeout(() => console.log('Hi'), 1000)`" },
              { id: "opt2", text: "`function sayHi() { console.log('Hi'); }`" },
              { id: "opt3", text: "`const x = 5 + 3;`" },
              { id: "opt4", text: "`if (true) { console.log('Hi'); }`" }
            ],
            correctAnswerId: "opt1",
            explanation: "`setTimeout` is a higher-order function because it takes a function as an argument."
          },
          {
            id: "js-functions-q29",
            question: "Which built-in JavaScript method is a higher-order function?",
            options: [
              { id: "opt1", text: "parseInt()" },
              { id: "opt2", text: "map()" },
              { id: "opt3", text: "toString()" },
              { id: "opt4", text: "alert()" }
            ],
            correctAnswerId: "opt2",
            explanation: "`map()` is a higher-order function that takes a callback function and applies it to each element in an array."
          },
          {
            id: "js-functions-q30",
            question: "What will the following code output?\n`[1, 2, 3].map(num => num * 2)`",
            options: [
              { id: "opt1", text: "[1, 2, 3]" },
              { id: "opt2", text: "[2, 4, 6]" },
              { id: "opt3", text: "[1, 4, 9]" },
              { id: "opt4", text: "undefined" }
            ],
            correctAnswerId: "opt2",
            explanation: "The `map()` function returns a new array with each number multiplied by 2."
          },
          {
            id: "js-functions-q31",
            question: "What does the `map()` method return?",
            options: [
              { id: "opt1", text: "A new array with transformed elements" },
              { id: "opt2", text: "The original array" },
              { id: "opt3", text: "A boolean value" },
              { id: "opt4", text: "The length of the array" }
            ],
            correctAnswerId: "opt1",
            explanation: "`map()` returns a new array with the results of applying a function to every element in the original array."
          },
          {
            id: "js-functions-q32",
            question: "Which method is used to create a new array with only the elements that pass a condition?",
            options: [
              { id: "opt1", text: "map()" },
              { id: "opt2", text: "forEach()" },
              { id: "opt3", text: "filter()" },
              { id: "opt4", text: "reduce()" }
            ],
            correctAnswerId: "opt3",
            explanation: "`filter()` returns a new array with elements that satisfy the provided condition."
          },
          {
            id: "js-functions-q33",
            question: "Which method modifies the original array?",
            options: [
              { id: "opt1", text: "map()" },
              { id: "opt2", text: "filter()" },
              { id: "opt3", text: "reduce()" },
              { id: "opt4", text: "None of the above" }
            ],
            correctAnswerId: "opt4",
            explanation: "All these methods return new arrays or values without modifying the original array."
          },
          {
            id: "js-functions-q34",
            question: "What will `[1, 2, 3, 4].filter(x => x % 2 === 0)` return?",
            options: [
              { id: "opt1", text: "[2, 4]" },
              { id: "opt2", text: "[1, 3]" },
              { id: "opt3", text: "[1, 2, 3, 4]" },
              { id: "opt4", text: "[]" }
            ],
            correctAnswerId: "opt1",
            explanation: "Only even numbers pass the condition `x % 2 === 0`."
          },
          {
            id: "js-functions-q35",
            question: "Which method allows transforming an array into a single value?",
            options: [
              { id: "opt1", text: "filter()" },
              { id: "opt2", text: "reduce()" },
              { id: "opt3", text: "map()" },
              { id: "opt4", text: "forEach()" }
            ],
            correctAnswerId: "opt2",
            explanation: "`reduce()` combines all elements into a single result (e.g., sum, object, string)."
          }

          // Add more questions as needed
        ]
      },
      {
        id: "js-strings",
        name: "JavaScript Strings",
        slug: "js-strings",
        description: "Learn the basics of JavaScript programming language.",
        questions: [
              {
    id: "js-string-q1",
    question: "How do you declare a string variable in JavaScript?",
    options: [
      { id: "opt1", text: "let str = 'Hello';" },
      { id: "opt2", text: "var str = \"Hello\";" },
      { id: "opt3", text: "const str = 'Hello';" },
      { id: "opt4", text: "All of the above" }
    ],
    correctAnswerId: "opt4",
    explanation: "All these are valid ways to declare a string variable."
  },
  {
    id: "js-string-q2",
    question: "What will be the length of the string \"Hello, World!\"?",
    options: [
      { id: "opt1", text: "11" },
      { id: "opt2", text: "12" },
      { id: "opt3", text: "13" },
      { id: "opt4", text: "14" }
    ],
    correctAnswerId: "opt3",
    explanation: "The string contains 13 characters including spaces and punctuation."
  },
  {
    id: "js-string-q3",
    question: "Which method converts a string to all lowercase letters?",
    options: [
      { id: "opt1", text: "toLowerCase()" },
      { id: "opt2", text: "toLower()" },
      { id: "opt3", text: "lowerCase()" },
      { id: "opt4", text: "convertToLower()" }
    ],
    correctAnswerId: "opt1",
    explanation: "toLowerCase() converts all characters to lowercase."
  },
  {
    id: "js-string-q4",
    question: "Which method removes leading and trailing whitespace from a string?",
    options: [
      { id: "opt1", text: "trim()" },
      { id: "opt2", text: "strip()" },
      { id: "opt3", text: "removeWhitespace()" },
      { id: "opt4", text: "deleteWhitespace()" }
    ],
    correctAnswerId: "opt1",
    explanation: "trim() removes whitespace from both ends of the string."
  },
  {
    id: "js-string-q5",
    question: "What does 'JavaScript'.charAt(0) return?",
    options: [
      { id: "opt1", text: "'J'" },
      { id: "opt2", text: "'j'" },
      { id: "opt3", text: "'JavaScript'" },
      { id: "opt4", text: "Error" }
    ],
    correctAnswerId: "opt1",
    explanation: "charAt(0) returns the first character 'J'."
  },
  {
    id: "js-string-q6",
    question: "What is the output of 'hello'.concat(' world')?",
    options: [
      { id: "opt1", text: "'hello world'" },
      { id: "opt2", text: "'hello'" },
      { id: "opt3", text: "'world'" },
      { id: "opt4", text: "Error" }
    ],
    correctAnswerId: "opt1",
    explanation: "concat() joins the strings into 'hello world'."
  },
  {
    id: "js-string-q7",
    question: "Which method concatenates two or more strings?",
    options: [
      { id: "opt1", text: "append()" },
      { id: "opt2", text: "join()" },
      { id: "opt3", text: "concat()" },
      { id: "opt4", text: "add()" }
    ],
    correctAnswerId: "opt3",
    explanation: "concat() concatenates strings."
  },
  {
    id: "js-string-q8",
    question: "Which method finds the index of the first occurrence of a substring?",
    options: [
      { id: "opt1", text: "indexOf()" },
      { id: "opt2", text: "findIndex()" },
      { id: "opt3", text: "search()" },
      { id: "opt4", text: "locate()" }
    ],
    correctAnswerId: "opt1",
    explanation: "indexOf() returns the position of the substring."
  },
  {
    id: "js-string-q9",
    question: "What does 'Hello'.indexOf('x') return?",
    options: [
      { id: "opt1", text: "0" },
      { id: "opt2", text: "-1" },
      { id: "opt3", text: "undefined" },
      { id: "opt4", text: "Error" }
    ],
    correctAnswerId: "opt2",
    explanation: "Returns -1 if substring not found."
  },
  {
    id: "js-string-q10",
    question: "Which method replaces a specified substring with a new substring?",
    options: [
      { id: "opt1", text: "replace()" },
      { id: "opt2", text: "swap()" },
      { id: "opt3", text: "substitute()" },
      { id: "opt4", text: "switch()" }
    ],
    correctAnswerId: "opt1",
    explanation: "replace() substitutes the first occurrence."
  },
  {
    id: "js-string-q11",
    question: "What does 'Hello World'.slice(6, 11) return?",
    options: [
      { id: "opt1", text: "'World'" },
      { id: "opt2", text: "'World!'" },
      { id: "opt3", text: "'Hello'" },
      { id: "opt4", text: "''" }
    ],
    correctAnswerId: "opt1",
    explanation: "slice(6, 11) extracts characters from index 6 up to (but not including) index 11."
  },
  {
    id: "js-string-q12",
    question: "Which method extracts a part of a string and returns a new string?",
    options: [
      { id: "opt1", text: "substring()" },
      { id: "opt2", text: "slice()" },
      { id: "opt3", text: "substr()" },
      { id: "opt4", text: "All of the above" }
    ],
    correctAnswerId: "opt4",
    explanation: "All these methods can extract a portion of a string."
  },
  {
    id: "js-string-q13",
    question: "What is the purpose of the `includes()` method?",
    options: [
      { id: "opt1", text: "Checks if a string ends with a specified value" },
      { id: "opt2", text: "Checks if a string contains a specified substring" },
      { id: "opt3", text: "Checks if a string starts with a specified value" },
      { id: "opt4", text: "Checks if two strings are equal" }
    ],
    correctAnswerId: "opt2",
    explanation: "`includes()` returns true if the string contains the specified substring, otherwise false."
  },
  {
    id: "js-string-q14",
    question: "What does 'JavaScript'.startsWith('Java') return?",
    options: [
      { id: "opt1", text: "true" },
      { id: "opt2", text: "false" },
      { id: "opt3", text: "undefined" },
      { id: "opt4", text: "Error" }
    ],
    correctAnswerId: "opt1",
    explanation: "The string 'JavaScript' indeed starts with 'Java'."
  },
  {
    id: "js-string-q15",
    question: "Which operator is used for string concatenation?",
    options: [
      { id: "opt1", text: "-" },
      { id: "opt2", text: "*" },
      { id: "opt3", text: "+" },
      { id: "opt4", text: "/" }
    ],
    correctAnswerId: "opt3",
    explanation: "The `+` operator is used to concatenate strings in JavaScript."
  },
  {
    id: "js-string-q16",
    question: "What will `console.log('10' + 5);` output?",
    options: [
      { id: "opt1", text: "15" },
      { id: "opt2", text: "5" },
      { id: "opt3", text: "'105'" },
      { id: "opt4", text: "Error" }
    ],
    correctAnswerId: "opt3",
    explanation: "When a string is involved in addition, JavaScript performs string concatenation, resulting in '105'."
  },
  {
    id: "js-string-q17",
    question: "How do you access the character at a specific index in a string (e.g., the third character)?",
    options: [
      { id: "opt1", text: "str.get(2)" },
      { id: "opt2", text: "str[2]" },
      { id: "opt3", text: "str.characterAt(2)" },
      { id: "opt4", text: "str.charAtIndex(2)" }
    ],
    correctAnswerId: "opt2",
    explanation: "String characters can be accessed like array elements using bracket notation (0-indexed)."
  },
  {
    id: "js-string-q18",
    question: "What does `'abc'.repeat(3)` return?",
    options: [
      { id: "opt1", text: "'abcabcabc'" },
      { id: "opt2", text: "'abc3'" },
      { id: "opt3", text: "Error" },
      { id: "opt4", text: "undefined" }
    ],
    correctAnswerId: "opt1",
    explanation: "The `repeat()` method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together."
  },
  {
    id: "js-string-q19",
    question: "Which of these is a template literal?",
    options: [
      { id: "opt1", text: "'Hello world!'" },
      { id: "opt2", text: "\"Hello world!\"" },
      { id: "opt3", text: "`Hello world!`" },
      { id: "opt4", text: "(Hello world!)" }
    ],
    correctAnswerId: "opt3",
    explanation: "Template literals are enclosed by backticks (`` ` ``) and allow for embedded expressions."
  },
  {
    id: "js-string-q20",
    question: "How do you embed an expression in a template literal?",
    options: [
      { id: "opt1", text: "${expression}" },
      { id: "opt2", text: "#{expression}" },
      { id: "opt3", text: "{{expression}}" },
      { id: "opt4", text: "@@{expression}" }
    ],
    correctAnswerId: "opt1",
    explanation: "Expressions are embedded using the syntax `${expression}` within template literals."
  },
  {
    id: "js-string-q21",
    question: "What will `text.toUpperCase()` return if `text = 'hello'`?",
    options: [
      { id: "opt1", text: "'hello'" },
      { id: "opt2", text: "'HELLO'" },
      { id: "opt3", text: "Hello" },
      { id: "opt4", text: "error" }
    ],
    correctAnswerId: "opt2",
    explanation: "The `toUpperCase()` method converts a string to uppercase letters."
  },
  {
    id: "js-string-q22",
    question: "Which method checks if a string ends with a specified substring?",
    options: [
      { id: "opt1", text: "endsWith()" },
      { id: "opt2", text: "finalWith()" },
      { id: "opt3", text: "hasEnd()" },
      { id: "opt4", text: "checkEnd()" }
    ],
    correctAnswerId: "opt1",
    explanation: "The `endsWith()` method determines whether a string ends with the characters of a specified string."
  },
  {
    id: "js-string-q23",
    question: "What is the value of `str` after `let str = 'apple,banana'.split(',');`?",
    options: [
      { id: "opt1", text: "['apple', 'banana']" },
      { id: "opt2", text: "'applebanana'" },
      { id: "opt3", text: "'apple,banana'" },
      { id: "opt4", text: "['apple,banana']" }
    ],
    correctAnswerId: "opt1",
    explanation: "The `split(',')` method divides the string into an ordered list of substrings based on the comma delimiter and returns them as an array."
  },
  {
    id: "js-string-q24",
    question: "Which method is used to compare two strings lexicographically?",
    options: [
      { id: "opt1", text: "compare()" },
      { id: "opt2", text: "localeCompare()" },
      { id: "opt3", text: "match()" },
      { id: "opt4", text: "equals()" }
    ],
    correctAnswerId: "opt2",
    explanation: "The `localeCompare()` method compares two strings in the current locale's sort order."
  },
  {
    id: "js-string-q25",
    question: "What does `String.fromCharCode(65)` return?",
    options: [
      { id: "opt1", text: "65" },
      { id: "opt2", text: "'A'" },
      { id: "opt3", text: "Error" },
      { id: "opt4", text: "null" }
    ],
    correctAnswerId: "opt2",
    explanation: "`String.fromCharCode()` converts Unicode values to characters. 65 is the Unicode value for 'A'."
  }

        

          // Add more questions as needed
        ]
      },
      {
        id: "js-numbers",
        name: "JavaScript Numbers & Math Functions",
        slug: "js-numbers",
        description: "Learn the basics of JavaScript programming language.",
        questions: [
          {
            id: "js-numbers-q1",
            question: "What is the second parameter in parseInt() that specifies the numeral system?",
            options: [
                { id: "opt1", text: "mode" },
                { id: "opt2", text: "radix" },
                { id: "opt3", text: "base" },
                { id: "opt4", text: "system" }
            ],
            correctAnswerId: "opt2",
            explanation: "The second argument 'radix' defines the numeral system (e.g., 2 for binary, 16 for hexadecimal)."
        },
        {
            id: "js-numbers-q2",
            question: "What type of value does parseInt('123abc') return?",
            options: [
                { id: "opt1", text: "123 (Number)" },
                { id: "opt2", text: "'123' (String)" },
                { id: "opt3", text: "NaN" },
                { id: "opt4", text: "undefined" }
            ],
            correctAnswerId: "opt1",
            explanation: "parseInt reads the initial numeric characters and ignores the rest, returning 123 as a Number."
        },
        {
            id: "js-numbers-q3",
            question: "What is the result of parseInt('0xF')?",
            options: [
                { id: "opt1", text: "0" },
                { id: "opt2", text: "F" },
                { id: "opt3", text: "15" },
                { id: "opt4", text: "NaN" }
            ],
            correctAnswerId: "opt3",
            explanation: "'0xF' represents 15 in hexadecimal."
        },
        {
            id: "js-numbers-q4",
            question: "When calling parseInt('100') without specifying a base, which numeral system is used?",
            options: [
                { id: "opt1", text: "Base 8" },
                { id: "opt2", text: "Base 10" },
                { id: "opt3", text: "Base 16" },
                { id: "opt4", text: "Base 2" }
            ],
            correctAnswerId: "opt2",
            explanation: "By default, parseInt uses decimal (Base 10)."
        },
        {
            id: "js-numbers-q5",
            question: "Which function is NOT typically used to convert strings to numbers?",
            options: [
                { id: "opt1", text: "parseInt()" },
                { id: "opt2", text: "parseFloat()" },
                { id: "opt3", text: "Number()" },
                { id: "opt4", text: "toString()" }
            ],
            correctAnswerId: "opt4",
            explanation: "toString() converts numbers to strings, not the other way around."
        },
        {
            id: "js-numbers-q6",
            question: "What internal type does JavaScript use to store all numbers?",
            options: [
                { id: "opt1", text: "Integer" },
                { id: "opt2", text: "Double Precision (64-bit)" },
                { id: "opt3", text: "Single Precision (32-bit)" },
                { id: "opt4", text: "Arbitrary Precision" }
            ],
            correctAnswerId: "opt2",
            explanation: "JavaScript uses IEEE 754 double precision (64-bit) for all numbers."
        },
        {
            id: "js-numbers-q7",
            question: "Which method is used to control the number of decimal places without changing the original number?",
            options: [
                { id: "opt1", text: "toFixed()" },
                { id: "opt2", text: "toPrecision()" },
                { id: "opt3", text: "parseFloat()" },
                { id: "opt4", text: "Math.round()" }
            ],
            correctAnswerId: "opt1",
            explanation: "toFixed() formats the number with a fixed number of decimals and returns a string."
        },
        {
            id: "js-numbers-q8",
            question: "What is the main difference between toFixed(2) and toPrecision(2)?",
            options: [
                { id: "opt1", text: "The first controls decimal places, the second controls significant digits" },
                { id: "opt2", text: "The first controls significant digits, the second controls decimals" },
                { id: "opt3", text: "They do the same" },
                { id: "opt4", text: "toFixed() returns a number, toPrecision() returns a string" }
            ],
            correctAnswerId: "opt1",
            explanation: "toFixed controls decimal places; toPrecision controls significant digits."
        },
        {
            id: "js-numbers-q9",
            question: "What is the type of the value returned by (25.678).toFixed(2)?",
            options: [
                { id: "opt1", text: "Number" },
                { id: "opt2", text: "String" },
                { id: "opt3", text: "Float" },
                { id: "opt4", text: "NaN" }
            ],
            correctAnswerId: "opt2",
            explanation: "toFixed() returns a string, not a number."
        },
        {
            id: "js-numbers-q10",
            question: "How can you round 4.567 to two decimal places using Math.round()?",
            options: [
                { id: "opt1", text: "Math.round(4.567, 2)" },
                { id: "opt2", text: "Math.round(4.567 * 100) / 100" },
                { id: "opt3", text: "4.567.toFixed(2)" },
                { id: "opt4", text: "parseInt(4.567)" }
            ],
            correctAnswerId: "opt2",
            explanation: "Multiply by 100, round, then divide by 100 to keep two decimals."
        },
        {
            id: "js-numbers-q11",
            question: "Which method removes the decimal part without rounding?",
            options: [
                { id: "opt1", text: "Math.floor()" },
                { id: "opt2", text: "Math.trunc()" },
                { id: "opt3", text: "parseInt()" },
                { id: "opt4", text: "All of the above in different ways" }
            ],
            correctAnswerId: "opt4",
            explanation: "Math.floor and parseInt truncate positive numbers, Math.trunc removes decimals directly."
        },
        {
            id: "js-numbers-q12",
            question: "What is the result of Math.floor(-3.7)?",
            options: [
                { id: "opt1", text: "-3" },
                { id: "opt2", text: "-4" },
                { id: "opt3", text: "3" },
                { id: "opt4", text: "4" }
            ],
            correctAnswerId: "opt2",
            explanation: "Math.floor always rounds down, so -3.7 goes to -4."
        },
        {
            id: "js-numbers-q13",
            question: "What is the result of Math.trunc(-3.7)?",
            options: [
                { id: "opt1", text: "-3" },
                { id: "opt2", text: "-4" },
                { id: "opt3", text: "3" },
                { id: "opt4", text: "Error" }
            ],
            correctAnswerId: "opt1",
            explanation: "Math.trunc removes the fractional part, resulting in -3."
        },
        {
            id: "js-numbers-q14",
            question: "Which method always rounds up?",
            options: [
                { id: "opt1", text: "Math.floor()" },
                { id: "opt2", text: "Math.round()" },
                { id: "opt3", text: "Math.ceil()" },
                { id: "opt4", text: "parseInt()" }
            ],
            correctAnswerId: "opt3",
            explanation: "Math.ceil always rounds towards positive infinity."
        },

        // ✅ continuing with remaining questions from 15 to 30...

        {
            id: "js-numbers-q15",
            question: "What is the result of Math.max(2, 9, -5)?",
            options: [
                { id: "opt1", text: "9" },
                { id: "opt2", text: "2" },
                { id: "opt3", text: "-5" },
                { id: "opt4", text: "undefined" }
            ],
            correctAnswerId: "opt1",
            explanation: "Math.max returns the largest value, which is 9."
        },
        {
            id: "js-numbers-q16",
            question: "What is the result of Math.min(10, -3, 7)?",
            options: [
                { id: "opt1", text: "10" },
                { id: "opt2", text: "7" },
                { id: "opt3", text: "-3" },
                { id: "opt4", text: "undefined" }
            ],
            correctAnswerId: "opt3",
            explanation: "Math.min returns the smallest value, which is -3."
        },
        {
            id: "js-numbers-q17",
            question: "What is the result of Math.abs(-9)?",
            options: [
                { id: "opt1", text: "-9" },
                { id: "opt2", text: "9" },
                { id: "opt3", text: "0" },
                { id: "opt4", text: "undefined" }
            ],
            correctAnswerId: "opt2",
            explanation: "Math.abs returns the absolute value, which is 9."
        },
        {
            id: "js-numbers-q18",
            question: "Which method is used to find the square root of a number?",
            options: [
                { id: "opt1", text: "Math.pow()" },
                { id: "opt2", text: "Math.sqrt()" },
                { id: "opt3", text: "Math.cbrt()" },
                { id: "opt4", text: "parseFloat()" }
            ],
            correctAnswerId: "opt2",
            explanation: "Math.sqrt calculates the square root of a number."
        },
        {
            id: "js-numbers-q19",
            question: "What is the result of Math.pow(2, 3)?",
            options: [
                { id: "opt1", text: "6" },
                { id: "opt2", text: "8" },
                { id: "opt3", text: "9" },
                { id: "opt4", text: "NaN" }
            ],
            correctAnswerId: "opt2",
            explanation: "2 raised to the power of 3 equals 8."
        },
        {
            id: "js-numbers-q20",
            question: "What is the result of Math.sqrt(16)?",
            options: [
                { id: "opt1", text: "2" },
                { id: "opt2", text: "4" },
                { id: "opt3", text: "8" },
                { id: "opt4", text: "NaN" }
            ],
            correctAnswerId: "opt2",
            explanation: "The square root of 16 is 4."
        },
        {
            id: "js-numbers-q21",
            question: "Which method generates a random decimal between 0 (inclusive) and 1 (exclusive)?",
            options: [
                { id: "opt1", text: "Math.random()" },
                { id: "opt2", text: "Math.rand()" },
                { id: "opt3", text: "Number.random()" },
                { id: "opt4", text: "random()" }
            ],
            correctAnswerId: "opt1",
            explanation: "Math.random returns a floating-point number between 0 and 1."
        },
        {
            id: "js-numbers-q22",
            question: "How can you generate a random integer between 1 and 10 (inclusive)?",
            options: [
                { id: "opt1", text: "Math.random() * 10" },
                { id: "opt2", text: "Math.floor(Math.random() * 10) + 1" },
                { id: "opt3", text: "Math.ceil(Math.random() * 10)" },
                { id: "opt4", text: "parseInt(Math.random() * 10)" }
            ],
            correctAnswerId: "opt2",
            explanation: "Using Math.floor with +1 ensures the range is 1 to 10 inclusive."
        },
        {
            id: "js-numbers-q23",
            question: "What is always the result of Math.floor(Math.random() * 1)?",
            options: [
                { id: "opt1", text: "0" },
                { id: "opt2", text: "1" },
                { id: "opt3", text: "NaN" },
                { id: "opt4", text: "Random value" }
            ],
            correctAnswerId: "opt1",
            explanation: "Math.random() * 1 is always <1, and Math.floor makes it 0."
        },
        {
            id: "js-numbers-q24",
            question: "Which method checks if a value is an integer?",
            options: [
                { id: "opt1", text: "isNaN()" },
                { id: "opt2", text: "Number.isInteger()" },
                { id: "opt3", text: "parseInt()" },
                { id: "opt4", text: "Math.floor()" }
            ],
            correctAnswerId: "opt2",
            explanation: "Number.isInteger() checks if a value is an integer."
        },
        {
            id: "js-numbers-q25",
            question: "Which method checks if a value is NaN and of type Number?",
            options: [
                { id: "opt1", text: "isNaN()" },
                { id: "opt2", text: "Number.isNaN()" },
                { id: "opt3", text: "typeof NaN" },
                { id: "opt4", text: "parseFloat()" }
            ],
            correctAnswerId: "opt2",
            explanation: "Number.isNaN() ensures the value is NaN and its type is Number."
        },
        {
            id: "js-numbers-q26",
            question: "What is the result of isNaN('123')?",
            options: [
                { id: "opt1", text: "true" },
                { id: "opt2", text: "false" },
                { id: "opt3", text: "NaN" },
                { id: "opt4", text: "undefined" }
            ],
            correctAnswerId: "opt2",
            explanation: "'123' is converted to a number, so isNaN returns false."
        },
        {
            id: "js-numbers-q27",
            question: "What is the result of Number.isNaN('123')?",
            options: [
                { id: "opt1", text: "true" },
                { id: "opt2", text: "false" },
                { id: "opt3", text: "NaN" },
                { id: "opt4", text: "undefined" }
            ],
            correctAnswerId: "opt2",
            explanation: "Number.isNaN does not convert the value, so it returns false."
        },
        {
            id: "js-numbers-q28",
            question: "Which method checks if a value is finite?",
            options: [
                { id: "opt1", text: "isFinite()" },
                { id: "opt2", text: "Number.isFinite()" },
                { id: "opt3", text: "Both" },
                { id: "opt4", text: "None of the above" }
            ],
            correctAnswerId: "opt3",
            explanation: "Both isFinite() and Number.isFinite() check for finite numbers."
        },
        {
            id: "js-numbers-q29",
            question: "What is the output of console.log(Math.acos(0.5).toFixed(3));?",
            options: [
                { id: "opt1", text: "1.047" },
                { id: "opt2", text: "1.050" },
                { id: "opt3", text: "0.500" },
                { id: "opt4", text: "Error" }
            ],
            correctAnswerId: "opt1",
            explanation: "Math.acos(0.5) equals π/3 (~1.047), and toFixed(3) formats it as '1.047'."
        },
        {
            id: "js-numbers-q30",
            question: "What is the output of console.log(Number(' 12 ') + 3);?",
            options: [
                { id: "opt1", text: "'123'" },
                { id: "opt2", text: "15" },
                { id: "opt3", text: "NaN" },
                { id: "opt4", text: "12" }
            ],
            correctAnswerId: "opt2",
            explanation: "Number(' 12 ') converts to 12, adding 3 results in 15."
        }


        

          // Add more questions as needed
        ]
      },
      {
        id: "js-arrays-and-array-methods",
        name: "JavaScript Arrays & Array Methods",
        slug: "js-arrays-and-array-methods",
        description: "Multiple-choice questions on JavaScript arrays and array methods.",
        questions: [
          {
    id: "js-array-q1",
    question: "Which of the following methods adds one or more elements to the end of an array?",
    options: [
      { id: "opt1", text: "push()" },
      { id: "opt2", text: "pop()" },
      { id: "opt3", text: "shift()" },
      { id: "opt4", text: "unshift()" }
    ],
    correctAnswerId: "opt1",
    explanation: "push() adds element(s) at the end and returns the new length."
  },
  {
    id: "js-array-q2",
    question: "What does pop() do?",
    options: [
      { id: "opt1", text: "Adds element at beginning" },
      { id: "opt2", text: "Removes first element" },
      { id: "opt3", text: "Removes last element and returns it" },
      { id: "opt4", text: "Returns array length" }
    ],
    correctAnswerId: "opt3",
    explanation: "pop() removes the last element and returns that element."
  },
  {
    id: "js-array-q3",
    question: "Which method removes the first element of an array?",
    options: [
      { id: "opt1", text: "pop()" },
      { id: "opt2", text: "shift()" },
      { id: "opt3", text: "unshift()" },
      { id: "opt4", text: "slice()" }
    ],
    correctAnswerId: "opt2",
    explanation: "shift() removes and returns the first element."
  },
  {
    id: "js-array-q4",
    question: "What is the key difference between push/pop and shift/unshift?",
    options: [
      { id: "opt1", text: "Same position operations" },
      { id: "opt2", text: "push/pop operate at end; shift/unshift at beginning" },
      { id: "opt3", text: "pop shifts elements" },
      { id: "opt4", text: "unshift removes elements" }
    ],
    correctAnswerId: "opt2",
    explanation: "push/pop operate on the end; shift/unshift on the beginning."
  },
  {
    id: "js-array-q5",
    question: "What does map() return?",
    options: [
      { id: "opt1", text: "undefined" },
      { id: "opt2", text: "Original array" },
      { id: "opt3", text: "A new array with transformed elements" },
      { id: "opt4", text: "Number" }
    ],
    correctAnswerId: "opt3",
    explanation: "map() transforms each element and returns a new array."
  },
  {
    id: "js-array-q6",
    question: "Does map() modify the original array?",
    options: [
      { id: "opt1", text: "Yes, always" },
      { id: "opt2", text: "No, never" },
      { id: "opt3", text: "Only when callback mutates values" },
      { id: "opt4", text: "Only on sparse arrays" }
    ],
    correctAnswerId: "opt3",
    explanation: "map() returns a new array; origin remains unchanged unless mutated inside."
  },
  {
    id: "js-array-q7",
    question: "What does filter() do?",
    options: [
      { id: "opt1", text: "Transforms elements" },
      { id: "opt2", text: "Removes duplicate elements" },
      { id: "opt3", text: "Creates new array with elements satisfying a condition" },
      { id: "opt4", text: "Reverses array" }
    ],
    correctAnswerId: "opt3",
    explanation: "filter() returns a subset array based on a test function."
  },
  {
    id: "js-array-q8",
    question: "What is the return value of forEach()?",
    options: [
      { id: "opt1", text: "A new array" },
      { id: "opt2", text: "Original array" },
      { id: "opt3", text: "undefined" },
      { id: "opt4", text: "Sum of elements" }
    ],
    correctAnswerId: "opt3",
    explanation: "forEach() executes callback and always returns undefined."
  },
  {
    id: "js-array-q9",
    question: "Which loop-like method lets you execute a callback for each element?",
    options: [
      { id: "opt1", text: "map()" },
      { id: "opt2", text: "filter()" },
      { id: "opt3", text: "forEach()" },
      { id: "opt4", text: "reduce()" }
    ],
    correctAnswerId: "opt3",
    explanation: "forEach() iterates over each item and applies the callback."
  },
  {
    id: "js-array-q10",
    question: "What does slice(1, 3) return on [10,20,30,40]?",
    options: [
      { id: "opt1", text: "[10,20]" },
      { id: "opt2", text: "[20,30]" },
      { id: "opt3", text: "[20,30,40]" },
      { id: "opt4", text: "[10,20,30]" }
    ],
    correctAnswerId: "opt2",
    explanation: "slice extracts from start index inclusive to end index exclusive."
  },
  {
    id: "js-array-q11",
    question: "What is the difference between slice() and splice()?",
    options: [
      { id: "opt1", text: "slice modifies array, splice does not" },
      { id: "opt2", text: "splice modifies array; slice returns a new array" },
      { id: "opt3", text: "Both modify array" },
      { id: "opt4", text: "Neither modifies array" }
    ],
    correctAnswerId: "opt2",
    explanation: "splice changes the original; slice returns a portion without modifying."
  },
  {
    id: "js-array-q12",
    question: "What does concat() do?",
    options: [
      { id: "opt1", text: "Adds element to array" },
      { id: "opt2", text: "Merges arrays into a new array" },
      { id: "opt3", text: "Modifies original arrays" },
      { id: "opt4", text: "Deletes last element" }
    ],
    correctAnswerId: "opt2",
    explanation: "concat() joins arrays and returns a fresh new one."
  },
  {
    id: "js-array-q13",
    question: "Given arr=[1,2,3], arr.map(x=>x*2) returns?",
    options: [
      { id: "opt1", text: "[1,2,3]" },
      { id: "opt2", text: "[2,4,6]" },
      { id: "opt3", text: "[2,3,4]" },
      { id: "opt4", text: "undefined" }
    ],
    correctAnswerId: "opt2",
    explanation: "map applies function to each element."
  },
  {
    id: "js-array-q14",
    question: "Which method checks if every element passes a test?",
    options: [
      { id: "opt1", text: "filter()" },
      { id: "opt2", text: "every()" },
      { id: "opt3", text: "some()" },
      { id: "opt4", text: "find()" }
    ],
    correctAnswerId: "opt2",
    explanation: "every() returns true if all satisfy the condition."
  },
  {
    id: "js-array-q15",
    question: "Which returns index of first element satisfying a test?",
    options: [
      { id: "opt1", text: "find()" },
      { id: "opt2", text: "findIndex()" },
      { id: "opt3", text: "filter()" },
      { id: "opt4", text: "indexOf()" }
    ],
    correctAnswerId: "opt2",
    explanation: "findIndex() yields the index of the first match."
  },
  {
    id: "js-array-q16",
    question: "What does includes(‘x’) return?",
    options: [
      { id: "opt1", text: "Index of x" },
      { id: "opt2", text: "Boolean if x exists" },
      { id: "opt3", text: "An array" },
      { id: "opt4", text: "Undefined" }
    ],
    correctAnswerId: "opt2",
    explanation: "includes() checks presence and returns true/false."
  },
  {
    id: "js-array-q17",
    question: "Does forEach(callback) skip empty slots in sparse arrays?",
    options: [
      { id: "opt1", text: "Yes" },
      { id: "opt2", text: "No" },
      { id: "opt3", text: "Only in map()" },
      { id: "opt4", text: "Only in filter()" }
    ],
    correctAnswerId: "opt1",
    explanation: "forEach skips holes in sparse arrays."
  },
  {
    id: "js-array-q18",
    question: "Which method reverses the order of array elements in place?",
    options: [
      { id: "opt1", text: "sort()" },
      { id: "opt2", text: "reverse()" },
      { id: "opt3", text: "toReversed()" },
      { id: "opt4", text: "slice()" }
    ],
    correctAnswerId: "opt2",
    explanation: "reverse() mutates the array by reversing element order."
  },
  {
    id: "js-array-q19",
    question: "Which returns only matching elements rather than a boolean?",
    options: [
      { id: "opt1", text: "some()" },
      { id: "opt2", text: "every()" },
      { id: "opt3", text: "find()" },
      { id: "opt4", text: "filter()" }
    ],
    correctAnswerId: "opt4",
    explanation: "filter() returns full array of matching elements, not a boolean."
  },
  {
    id: "js-array-q20",
    question: "Given arr=[1,,3], what is arr[1]?",
    options: [
      { id: "opt1", text: "undefined" },
      { id: "opt2", text: "null" },
      { id: "opt3", text: "0" },
      { id: "opt4", text: "Error" }
    ],
    correctAnswerId: "opt1",
    explanation: "A missing element in literal yields 'undefined'."
  },
  {
    id: "js-array-q21",
    question: "Which method creates a new array by applying a function to each element, but only for elements that pass a test?",
    options: [
      { id: "opt1", text: "map()" },
      { id: "opt2", text: "filter()" },
      { id: "opt3", text: "flatMap()" },
      { id: "opt4", text: "reduce()" }
    ],
    correctAnswerId: "opt3",
    explanation: "`flatMap()` maps each element using a mapping function, then flattens the result into a new array. It's equivalent to `map().flat()`."
  },
  {
    id: "js-array-q22",
    question: "What does `Array.isArray([])` return?",
    options: [
      { id: "opt1", text: "false" },
      { id: "opt2", text: "true" },
      { id: "opt3", text: "undefined" },
      { id: "opt4", text: "Error" }
    ],
    correctAnswerId: "opt2",
    explanation: "`Array.isArray()` determines whether the passed value is an `Array`."
  },
  {
    id: "js-array-q23",
    question: "Which method sorts the elements of an array in place and returns the reference to the same array?",
    options: [
      { id: "opt1", text: "toSorted()" },
      { id: "opt2", text: "sorted()" },
      { id: "opt3", text: "sort()" },
      { id: "opt4", text: "order()" }
    ],
    correctAnswerId: "opt3",
    explanation: "`sort()` sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values."
  },
  {
    id: "js-array-q24",
    question: "What is the primary use case for `reduce()`?",
    options: [
      { id: "opt1", text: "Iterating over elements without returning a value" },
      { id: "opt2", text: "Filtering elements based on a condition" },
      { id: "opt3", text: "Transforming each element into a new array" },
      { id: "opt4", text: "Aggregating array elements into a single value" }
    ],
    correctAnswerId: "opt4",
    explanation: "`reduce()` executes a reducer callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The result is a single value."
  },
  {
    id: "js-array-q25",
    question: "Which array method checks if at least one element in the array passes the test implemented by the provided function?",
    options: [
      { id: "opt1", text: "every()" },
      { id: "opt2", text: "filter()" },
      { id: "opt3", text: "some()" },
      { id: "opt4", text: "find()" }
    ],
    correctAnswerId: "opt3",
    explanation: "`some()` returns `true` if, in the array, it finds an element for which the provided function returns `true`; otherwise it returns `false`. It does not modify the array."
  }

          // Add more questions as needed
        ]
      },
      {
        id: "js-objects-and-properties-methods",
        name: "JavaScript Objects: Properties & Methods",
        slug: "js-objects-and-properties-methods",
        description: "Multiple‑choice questions on JavaScript objects, accessing properties and methods using dot and bracket notation.",
        questions: [
          {
    id: "js-obj-q1",
    question: "How do you access property ‘name’ of object person using dot notation?",
    options: [
      { id: "opt1", text: "person[name]" },
      { id: "opt2", text: "person.'name'" },
      { id: "opt3", text: "person.name" },
      { id: "opt4", text: "person->name" }
    ],
    correctAnswerId: "opt3",
    explanation: "Dot notation is written as object.property."
  },
  {
    id: "js-obj-q2",
    question: "How to access property ‘age’ using bracket notation?",
    options: [
      { id: "opt1", text: "person.age" },
      { id: "opt2", text: "person['age']" },
      { id: "opt3", text: "person[age]" },
      { id: "opt4", text: "person.age()" }
    ],
    correctAnswerId: "opt2",
    explanation: "Bracket notation uses strings or variables as keys."
  },
  {
    id: "js-obj-q3",
    question: "What will person['first name'] return for property 'first name'?",
    options: [
      { id: "opt1", text: "undefined" },
      { id: "opt2", text: "Error" },
      { id: "opt3", text: "Value of the property first name" },
      { id: "opt4", text: "The string 'first name'" }
    ],
    correctAnswerId: "opt3",
    explanation: "Bracket notation allows spaces in keys if quoted."
  },
  {
    id: "js-obj-q4",
    question: "Which method deletes a property from object?",
    options: [
      { id: "opt1", text: "remove obj.key" },
      { id: "opt2", text: "obj.delete(key)" },
      { id: "opt3", text: "delete obj.key" },
      { id: "opt4", text: "obj.pop(key)" }
    ],
    correctAnswerId: "opt3",
    explanation: "The delete operator removes a property from an object."
  },
  {
    id: "js-obj-q5",
    question: "How to add a method ‘greet’ to object user?",
    options: [
      { id: "opt1", text: "user.greet = function() {...}" },
      { id: "opt2", text: "user['greet']()" },
      { id: "opt3", text: "user.greet()" },
      { id: "opt4", text: "user.function greet() {...}" }
    ],
    correctAnswerId: "opt1",
    explanation: "You assign a function to a property to create a method."
  },
  {
    id: "js-obj-q6",
    question: "What is the typeof a method stored in object?",
    options: [
      { id: "opt1", text: "object" },
      { id: "opt2", text: "function" },
      { id: "opt3", text: "method" },
      { id: "opt4", text: "undefined" }
    ],
    correctAnswerId: "opt2",
    explanation: "Methods are properties of type 'function'."
  },
  {
    id: "js-obj-q7",
    question: "What does this refer to inside a method?",
    options: [
      { id: "opt1", text: "The global object" },
      { id: "opt2", text: "undefined" },
      { id: "opt3", text: "The object owning the method" },
      { id: "opt4", text: "The method itself" }
    ],
    correctAnswerId: "opt3",
    explanation: "Inside an object method, this refers to the object instance."
  },
  {
    id: "js-obj-q8",
    question: "Which will access nested property obj.address.city via bracket notation?",
    options: [
      { id: "opt1", text: "obj['address']['city']" },
      { id: "opt2", text: "obj.address[city]" },
      { id: "opt3", text: "obj[address].city" },
      { id: "opt4", text: "obj[address][city]" }
    ],
    correctAnswerId: "opt1",
    explanation: "Use bracket for each key step when string or variable."
  },
  {
    id: "js-obj-q9",
    question: "What does Object.keys(obj) return?",
    options: [
      { id: "opt1", text: "Array of values" },
      { id: "opt2", text: "Array of property names" },
      { id: "opt3", text: "Array of key/value pairs" },
      { id: "opt4", text: "Function list" }
    ],
    correctAnswerId: "opt2",
    explanation: "Object.keys returns an array of the object's own enumerable property names."
  },
  {
    id: "js-obj-q10",
    question: "Which returns array of value entries [key, value] pairs?",
    options: [
      { id: "opt1", text: "Object.entries()" },
      { id: "opt2", text: "Object.values()" },
      { id: "opt3", text: "Object.keys()" },
      { id: "opt4", text: "JSON.stringify()" }
    ],
    correctAnswerId: "opt1",
    explanation: "Object.entries returns [key, value] arrays."
  },
  {
    id: "js-obj-q11",
    question: "What is the difference between dot and bracket notation?",
    options: [
      { id: "opt1", text: "Dot works only for string keys literal; bracket works for variables and keys with spaces or dynamic names" },
      { id: "opt2", text: "Bracket faster" },
      { id: "opt3", text: "Dot allows dynamic keys" },
      { id: "opt4", text: "They are identical" }
    ],
    correctAnswerId: "opt1",
    explanation: "Bracket notation is needed for keys with spaces or computed names."
  },
  {
    id: "js-obj-q12",
    question: "What does Object.freeze(obj) do?",
    options: [
      { id: "opt1", text: "Deletes all properties" },
      { id: "opt2", text: "Prevents adding, removing, or changing properties" },
      { id: "opt3", text: "Converts to string" },
      { id: "opt4", text: "Makes object iterable" }
    ],
    correctAnswerId: "opt2",
    explanation: "freeze prevents further modification of object structure or values."
  },
  {
    id: "js-obj-q13",
    question: "What will typeof null return when accessing a missing property like obj.missing?",
    options: [
      { id: "opt1", text: "object" },
      { id: "opt2", text: "undefined" },
      { id: "opt3", text: "null" },
      { id: "opt4", text: "error" }
    ],
    correctAnswerId: "opt2",
    explanation: "Accessing non-existent property returns undefined."
  },
  {
    id: "js-obj-q14",
    question: "How to check if property 'key' exists in object obj?",
    options: [
      { id: "opt1", text: "if (obj.key != undefined)" },
      { id: "opt2", text: "'key' in obj" },
      { id: "opt3", text: "obj.hasProperty('key')" },
      { id: "opt4", text: "obj.contains('key')" }
    ],
    correctAnswerId: "opt2",
    explanation: "'in' operator detects whether key exists on object or its prototype chain."
  },
  {
    id: "js-obj-q15",
    question: "What does Object.values(obj) return?",
    options: [
      { id: "opt1", text: "Array of property names" },
      { id: "opt2", text: "Array of property values" },
      { id: "opt3", text: "Array of entries" },
      { id: "opt4", text: "Array of methods" }
    ],
    correctAnswerId: "opt2",
    explanation: "Object.values returns just the values."
  },
  {
    id: "js-obj-q16",
    question: "What does obj.hasOwnProperty('prop') return?",
    options: [
      { id: "opt1", text: "Checks inherited properties too" },
      { id: "opt2", text: "True if obj has own property 'prop'" },
      { id: "opt3", text: "Always false" },
      { id: "opt4", text: "Throws error if no prop" }
    ],
    correctAnswerId: "opt2",
    explanation: "hasOwnProperty checks only directly owned, non-inherited properties."
  },
  {
    id: "js-obj-q17",
    question: "What happens if you assign obj.newKey = obj.otherKey = undefined?",
    options: [
      { id: "opt1", text: "newKey and otherKey exist with value undefined" },
      { id: "opt2", text: "Neither exist" },
      { id: "opt3", text: "Throws error" },
      { id: "opt4", text: "Only newKey set" }
    ],
    correctAnswerId: "opt1",
    explanation: "Assignment creates both properties with undefined."
  },
  {
    id: "js-obj-q18",
    question: "How to iterate over all enumerable properties of obj?",
    options: [
      { id: "opt1", text: "for (let key in obj)" },
      { id: "opt2", text: "for (let key of obj)" },
      { id: "opt3", text: "forEach(obj)" },
      { id: "opt4", text: "map(obj)" }
    ],
    correctAnswerId: "opt1",
    explanation: "`for…in` iterates enumerable keys in object."
  },
  {
    id: "js-obj-q19",
    question: "If obj.method is defined as arrow function, what is ‘this’ inside it?",
    options: [
      { id: "opt1", text: "The object" },
      { id: "opt2", text: "Undefined or outer lexical this" },
      { id: "opt3", text: "Window/global object" },
      { id: "opt4", text: "Depends on call site" }
    ],
    correctAnswerId: "opt2",
    explanation: "Arrow functions don’t have their own this; inherit from surrounding scope."
  },
  {
    id: "js-obj-q20",
    question: "Which method merges properties from one or more source objects into a target object?",
    options: [
      { id: "opt1", text: "Object.assign()" },
      { id: "opt2", text: "Object.merge()" },
      { id: "opt3", text: "obj.extend()" },
      { id: "opt4", text: "Object.copy()" }
    ],
    correctAnswerId: "opt1",
    explanation: "Object.assign copies enumerable source properties into the target."
  },
  {
    id: "js-obj-q21",
    question: "What is the purpose of `Object.create()`?",
    options: [
      { id: "opt1", text: "To create an empty object." },
      { id: "opt2", text: "To create an object with a specified prototype object and properties." },
      { id: "opt3", "text": "To create a deep copy of an object." },
      { id: "opt4", "text": "To create an array from an object." }
    ],
    correctAnswerId: "opt2",
    explanation: "`Object.create()` creates a new object, using an existing object as the prototype of the newly created object."
  },
  {
    id: "js-obj-q22",
    question: "How do you prevent adding new properties to an object, but still allow modifying existing ones?",
    options: [
      { id: "opt1", text: "Object.freeze()" },
      { id: "opt2", text: "Object.seal()" },
      { id: "opt3", text: "Object.preventExtensions()" },
      { id: "opt4", text: "delete obj.newProp" }
    ],
    correctAnswerId: "opt2",
    explanation: "`Object.seal()` prevents new properties from being added to an object and marks all existing properties as non-configurable. Values of existing properties can still be changed as long as they are writable."
  },
  {
    id: "js-obj-q23",
    question: "Which method is used to define new or modify existing properties directly on an object, returning the object?",
    options: [
      { id: "opt1", text: "Object.defineProperty()" },
      { id: "opt2", text: "Object.setProp()" },
      { id: "opt3", text: "obj.addProperty()" },
      { id: "opt4", text: "obj.editProperty()" }
    ],
    correctAnswerId: "opt1",
    explanation: "The `Object.defineProperty()` method defines a new property directly on an object, or modifies an existing property on an object, and returns the object."
  },
  {
    id: "js-obj-q24",
    question: "What is property 'enumerable' in JavaScript objects?",
    options: [
      { id: "opt1", text: "Indicates if a property can be deleted." },
      { id: "opt2", text: "Indicates if a property can be reconfigured." },
      { id: "opt3", text: "Indicates if a property shows up in `for...in` loops and `Object.keys()`." },
      { id: "opt4", text: "Indicates if a property's value can be changed." }
    ],
    correctAnswerId: "opt3",
    explanation: "The `enumerable` attribute controls whether the property is visible during enumeration of the object's properties (e.g., `for...in` loops, `Object.keys()`)."
  },
  {
    id: "js-obj-q25",
    question: "What is `Object.is(value1, value2)` used for?",
    options: [
      { id: "opt1", text: "To check if two values are loosely equal (==)." },
      { id: "opt2", text: "To check if two values are strictly equal (===)." },
      { id: "opt3", text: "To check if two values are the same value (like `===` but handles `NaN` and `+0`/`-0` differently)." },
      { id: "opt4", text: "To check if two values are objects." }
    ],
    correctAnswerId: "opt3",
    explanation: "`Object.is()` determines whether two values are the same value. It behaves similarly to the strict equality operator (`===`) but with a few differences, specifically regarding `NaN` and `+0`/`-0`."
  },
  {
    id: "js-obj-q26",
    question: "How can you prevent any extensions (adding new properties) to an object, while allowing modification and deletion of existing properties?",
    options: [
      { id: "opt1", text: "Object.freeze(obj)" },
      { id: "opt2", text: "Object.seal(obj)" },
      { id: "opt3", text: "Object.preventExtensions(obj)" },
      { id: "opt4", text: "obj.lock()" }
    ],
    correctAnswerId: "opt3",
    explanation: "`Object.preventExtensions()` prevents new properties from ever being added to an object. Existing properties can still be modified or deleted."
  },
  {
    id: "js-obj-q27",
    question: "Which syntax is typically preferred for accessing properties when the property name is known and doesn't contain special characters?",
    options: [
      { id: "opt1", text: "Bracket notation" },
      { id: "opt2", text: "Dot notation" },
      { id: "opt3", text: "Both are equally preferred" },
      { id: "opt4", text: "Only depends on browser compatibility" }
    ],
    correctAnswerId: "opt2",
    explanation: "Dot notation (`object.property`) is generally preferred for its conciseness and readability when property names are simple and static."
  },
  {
    id: "js-obj-q28",
    question: "What happens if you try to set a property on a frozen object?",
    options: [
      { id: "opt1", text: "The property is updated successfully." },
      { id: "opt2", text: "A TypeError is always thrown in strict mode." },
      { id: "opt3", text: "The operation is silently ignored in non-strict mode." },
      { id: "opt4", text: "Both B and C are correct." }
    ],
    correctAnswerId: "opt4",
    explanation: "If you attempt to set a property on a frozen object in strict mode, a `TypeError` will be thrown. In non-strict mode, the operation will silently fail (be ignored)."
  },
  {
    id: "js-obj-q29",
    question: "What is a 'method' in the context of a JavaScript object?",
    options: [
      { id: "opt1", text: "A data property that holds a string value." },
      { id: "opt2", "text": "A property that holds a function." },
      { id: "opt3", "text": "A property that holds a number." },
      { id: "opt4", "text": "A special type of object that cannot have properties." }
    ],
    correctAnswerId: "opt2",
    explanation: "In JavaScript, a method is a function stored as a property of an object."
  },
  {
    id: "js-obj-q30",
    question: "Which of the following creates an object with a property named `myProp` set to `42`?",
    options: [
      { id: "opt1", text: "let obj = { myProp: 42 };" },
      { id: "opt2", text: "let obj = new Object().myProp = 42;" },
      { id: "opt3", text: "let obj = myProp: 42;" },
      { id: "opt4", text: "let obj = [myProp: 42];" }
    ],
    correctAnswerId: "opt1",
    explanation: "The object literal syntax `{ key: value }` is the most common and direct way to create objects with properties."
  }

          // Add more questions as needed
        ]
      },
      {
        id: "js-oop-objects-classes-inheritance",
        name: "JavaScript Object-Oriented Programming (OOP)",
        slug: "js-oop-objects-classes-inheritance",
        description: "Multiple‑choice questions on JavaScript OOP: objects, classes, constructors, and simple inheritance.",
        questions: [
          {
    id: "js-oop-q1",
    question: "What is the purpose of a constructor in a JavaScript class?",
    options: [
      { id: "opt1", text: "To define a method shared by all instances" },
      { id: "opt2", text: "To initialize object properties when instantiating" },
      { id: "opt3", text: "To delete instance properties" },
      { id: "opt4", text: "To convert object to string" }
    ],
    correctAnswerId: "opt2",
    explanation: "A constructor initializes new objects with specified properties."
  },
  {
    id: "js-oop-q2",
    question: "How do you create an instance of a class named Person?",
    options: [
      { id: "opt1", text: "const p = Person('Alice');" },
      { id: "opt2", text: "const p = new Person('Alice');" },
      { id: "opt3", text: "const p = Person.new('Alice');" },
      { id: "opt4", text: "const p = class Person('Alice');" }
    ],
    correctAnswerId: "opt2",
    explanation: "Use the `new` keyword: `new Person()`."
  },
  {
    id: "js-oop-q3",
    question: "Which keyword is used to inherit from a parent class?",
    options: [
      { id: "opt1", text: "implements" },
      { id: "opt2", text: "extends" },
      { id: "opt3", text: "inherits" },
      { id: "opt4", text: "superclass" }
    ],
    correctAnswerId: "opt2",
    explanation: "`extends` is used for subclass inheritance in ES6 classes."
  },
  {
    id: "js-oop-q4",
    question: "Inside a subclass constructor, how do you call the parent constructor?",
    options: [
      { id: "opt1", text: "parent()" },
      { id: "opt2", text: "this.super()" },
      { id: "opt3", text: "super()" },
      { id: "opt4", text: "base()" }
    ],
    correctAnswerId: "opt3",
    explanation: "Use `super()` to invoke the parent's constructor."
  },
  {
    id: "js-oop-q5",
    question: "Given `class A {}`, what is typeof A?",
    options: [
      { id: "opt1", text: "object" },
      { id: "opt2", text: "function" },
      { id: "opt3", text: "class" },
      { id: "opt4", text: "undefined" }
    ],
    correctAnswerId: "opt2",
    explanation: "In JavaScript, classes are special functions under the hood."
  },
  {
    id: "js-oop-q6",
    question: "What does the `extends` syntax in JavaScript do?",
    options: [
      { id: "opt1", text: "Creates a copy of another class" },
      { id: "opt2", text: "Enables a class to inherit from another" },
      { id: "opt3", text: "Merges two classes into one" },
      { id: "opt4", text: "Defines private fields" }
    ],
    correctAnswerId: "opt2",
    explanation: "`extends` sets up inheritance between classes."
  },
  {
    id: "js-oop-q7",
    question: "Which syntax defines a class method inside a class definition?",
    options: [
      { id: "opt1", text: "methodName: function() {}" },
      { id: "opt2", text: "method methodName() {}" },
      { id: "opt3", text: "methodName() {}" },
      { id: "opt4", text: "function methodName() {}" }
    ],
    correctAnswerId: "opt3",
    explanation: "ES6 class methods are defined as `methodName() {}` inside class."
  },
  {
    id: "js-oop-q8",
    question: "What output does this code produce?\n```js\nclass A { greet() { return 'hi'; } }\nclass B extends A {}\nconsole.log(new B().greet());\n```",
    options: [
      { id: "opt1", text: "hi" },
      { id: "opt2", text: "undefined" },
      { id: "opt3", text: "Error" },
      { id: "opt4", text: "null" }
    ],
    correctAnswerId: "opt1",
    explanation: "Subclass B inherits greet() from A."
  },
  {
    id: "js-oop-q9",
    question: "How do you add a method inside a function-constructor object?",
    options: [
      { id: "opt1", text: "MyClass.prototype.method = function() {}" },
      { id: "opt2", text: "this.method = method" },
      { id: "opt3", text: "method() {}" },
      { id: "opt4", text: "static method() {}" }
    ],
    correctAnswerId: "opt1",
    explanation: "To share methods between instances, attach to `prototype`."
  },
  {
    id: "js-oop-q10",
    question: "What does Object.create(Super.prototype) help accomplish?",
    options: [
      { id: "opt1", text: "Creates a new Super instance" },
      { id: "opt2", text: "Sets up prototype chain without calling constructor" },
      { id: "opt3", text: "Deletes inherited properties" },
      { id: "opt4", text: "Creates deep clone" }
    ],
    correctAnswerId: "opt2",
    explanation: "Using Object.create avoids running the parent constructor when setting prototype."
  },
  {
    id: "js-oop-q11",
    question: "If a subclass overrides a parent method, which one runs when called on child instance?",
    options: [
      { id: "opt1", text: "Parent’s" },
      { id: "opt2", text: "Child’s" },
      { id: "opt3", text: "Both sequentially" },
      { id: "opt4", text: "Depends on invocation type" }
    ],
    correctAnswerId: "opt2",
    explanation: "Child methods override parent versions."
  },
  {
    id: "js-oop-q12",
    question: "What does instanceOf check in JS OOP?",
    options: [
      { id: "opt1", text: "Property ownership" },
      { id: "opt2", text: "Prototype chain membership" },
      { id: "opt3", text: "Exact class equality" },
      { id: "opt4", text: "Constructor parameters" }
    ],
    correctAnswerId: "opt2",
    explanation: "`instanceof` tells whether prototype chain includes the class prototype."
  },
  {
    id: "js-oop-q13",
    question: "What does this refer to inside a class instance method?",
    options: [
      { id: "opt1", text: "The class definition" },
      { id: "opt2", text: "The global object" },
      { id: "opt3", text: "The object instance" },
      { id: "opt4", text: "Undefined" }
    ],
    correctAnswerId: "opt3",
    explanation: "`this` inside a class method refers to the instance that invoked it."
  },
  {
    id: "js-oop-q14",
    question: "Which method properly sets parent prototype without calling parent constructor?",
    options: [
      { id: "opt1", text: "Sub.prototype = new Parent();" },
      { id: "opt2", text: "Sub.prototype = Parent.prototype;" },
      { id: "opt3", text: "Sub.prototype = Object.create(Parent.prototype);" },
      { id: "opt4", text: "Sub.prototype = Parent();" }
    ],
    correctAnswerId: "opt3",
    explanation: "Use Object.create(...) to avoid invoking the parent constructor."
  },
  {
    id: "js-oop-q15",
    question: "Which of these is true about JavaScript OOP?",
    options: [
      { id: "opt1", text: "Full class‑based" },
      { id: "opt2", text: "Prototype‑based under the hood" },
      { id: "opt3", text: "Cannot use `class` keyword" },
      { id: "opt4", text: "No inheritance support" }
    ],
    correctAnswerId: "opt2",
    explanation: "JS uses prototype‑based inheritance though ES6 provides class syntax."
  },
  {
    id: "js-oop-q16",
    question: "What is the output of this code?\n```js\nclass A { constructor() { this.x=1; }}\nclass B extends A { constructor() { super(); this.x=2; }}\nconsole.log(new B().x);\n```",
    options: [
      { id: "opt1", text: "1" },
      { id: "opt2", text: "2" },
      { id: "opt3", text: "undefined" },
      { id: "opt4", text: "Error" }
    ],
    correctAnswerId: "opt2",
    explanation: "Subclass sets x after calling the super, so value becomes 2."
  },
  {
    id: "js-oop-q17",
    question: "Which of these is NOT valid inheritance setup?",
    options: [
      { id: "opt1", text: "class B extends A {}" },
      { id: "opt2", text: "function B() { A.call(this); } B.prototype = Object.create(A.prototype);" },
      { id: "opt3", text: "B.prototype = new A();" },
      { id: "opt4", text: "B.prototype = A.prototype;" }
    ],
    correctAnswerId: "opt4",
    explanation: "Setting prototype equal loses separate subclass identity."
  },
  {
    id: "js-oop-q18",
    question: "What happens when you don’t call `super()` in subclass constructor?",
    options: [
      { id: "opt1", text: "It works fine" },
      { id: "opt2", text: "Parent constructor not run and this not available" },
      { id: "opt3", text: "Throws syntax error" },
      { id: "opt4", text: "`this` becomes global object" }
    ],
    correctAnswerId: "opt2",
    explanation: "In ES6, `super()` must be called before using `this`."
  },
  {
    id: "js-oop-q19",
    question: "Which keyword allows subclass to override methods of parent using same name?",
    options: [
      { id: "opt1", text: "override" },
      { id: "opt2", text: "super" },
      { id: "opt3", text: "extends" },
      { id: "opt4", text: "none; method name collision prefers subclass" }
    ],
    correctAnswerId: "opt4",
    explanation: "Overriding happens by defining same-named method in subclass; subclass wins."
  },
  {
    id: "js-oop-q20",
    question: "Which of the following best describes JavaScript’s primary inheritance mechanism?",
    options: [
      { id: "opt1", text: "Class-based with multiple inheritance" },
      { id: "opt2", text: "Prototype-based single inheritance chain" },
      { id: "opt3", text: "Trait-based composition only" },
      { id: "opt4", text: "Functional mixin only" }
    ],
    correctAnswerId: "opt2",
    explanation: "JS uses a prototype‑chain single inheritance model."
  },
  {
    id: "js-oop-q21",
    question: "What is the purpose of static methods in a JavaScript class?",
    options: [
      { id: "opt1", text: "They can be called only on instances of the class." },
      { id: "opt2", text: "They are called automatically when an instance is created." },
      { id: "opt3", text: "They are utility functions associated with the class itself, not with instances." },
      { id: "opt4", text: "They define properties that are unique to each instance." }
    ],
    correctAnswerId: "opt3",
    explanation: "Static methods belong to the class definition and are not available on instances. They are used for functionality related to the class as a whole."
  },
  {
    id: "js-oop-q22",
    question: "How do you define a static method called `factory` within a class `Product`?",
    options: [
      { id: "opt1", text: "Product.factory() {}" },
      { id: "opt2", text: "this.factory() {}" },
      { id: "opt3", text: "static factory() {}" },
      { id: "opt4", text: "function factory() {}" }
    ],
    correctAnswerId: "opt3",
    explanation: "The `static` keyword is used to define static methods (and properties) within a class."
  },
  {
    id: "js-oop-q23",
    question: "Can a subclass override a static method from its parent class?",
    options: [
      { id: "opt1", text: "Yes" },
      { id: "opt2", text: "No" }
    ],
    correctAnswerId: "opt1",
    explanation: "Yes, static methods can be overridden in subclasses, similar to instance methods, though they are called on the class itself."
  },
  {
    id: "js-oop-q24",
    question: "What is 'encapsulation' in OOP?",
    options: [
      { id: "opt1", text: "The process of creating multiple instances of a class." },
      { id: "opt2", text: "Bundling data and methods that operate on the data within a single unit." },
      { id: "opt3", text: "Hiding implementation details from the user." },
      { id: "opt4", text: "The ability of an object to take on many forms." }
    ],
    correctAnswerId: "opt2",
    explanation: "Encapsulation means keeping related data and behavior (methods) together within an object, often controlling access to the data."
  },
  {
    id: "js-oop-q25",
    question: "In JavaScript, how do you typically achieve 'private' class fields (true privacy before ES2022)?",
    options: [
      { id: "opt1", text: "Using the `private` keyword." },
      { id: "opt2", text: "By convention, prefixing with an underscore (`_`)." },
      { id: "opt3", text: "Using `Object.freeze()`." },
      { id: "opt4", text: "It's not possible to have private fields." }
    ],
    correctAnswerId: "opt2",
    explanation: "Before native private class fields (introduced in ES2022 with `#`), a common convention was to prefix property names with an underscore (`_`) to indicate they are intended to be private."
  },
  {
    id: "js-oop-q26",
    question: "What is 'Polymorphism' in OOP?",
    options: [
      { id: "opt1", text: "The ability to create multiple objects from a single class." },
      { id: "opt2", text: "The ability of an object to take on many forms (e.g., method overriding)." },
      { id: "opt3", text: "Hiding the complexity of an object's internal workings." },
      { id: "opt4", text: "Defining a hierarchy of classes." }
    ],
    correctAnswerId: "opt2",
    explanation: "Polymorphism (meaning 'many forms') allows objects of different classes to be treated as objects of a common superclass, enabling method overriding."
  },
  {
    id: "js-oop-q27",
    question: "What is the role of `this` when used in a class constructor?",
    options: [
      { id: "opt1", text: "It refers to the class itself." },
      { id: "opt2", text: "It refers to the global object (window/global)." },
      { id: "opt3", text: "It refers to the newly created instance of the class being constructed." },
      { id: "opt4", text: "It is undefined." }
    ],
    correctAnswerId: "opt3",
    explanation: "Inside a constructor, `this` refers to the specific instance of the object being created and initialized."
  },
  {
    id: "js-oop-q28",
    question: "Which of the following is true about JavaScript classes?",
    options: [
      { id: "opt1", text: "They are syntactic sugar over JavaScript's prototype-based inheritance." },
      { id: "opt2", text: "They introduce a new object model that is strictly class-based." },
      { id: "opt3", text: "They do not support inheritance." },
      { id: "opt4", text: "They allow multiple inheritance directly." }
    ],
    correctAnswerId: "opt1",
    explanation: "ES6 Classes provide a cleaner syntax for creating objects and dealing with inheritance, but under the hood, they still utilize JavaScript's existing prototype-based inheritance mechanism."
  },
  {
    id: "js-oop-q29",
    question: "When a method is defined in a class, where is it actually stored for efficiency?",
    options: [
      { id: "opt1", text: "On each individual instance of the class." },
      { id: "opt2", text: "On the class's prototype object." },
      { id: "opt3", text: "In the global scope." },
      { id: "opt4", text: "Inside the constructor function only." }
    ],
    correctAnswerId: "opt2",
    explanation: "Class methods are stored on the prototype object of the class, allowing all instances to share the same method definition, saving memory."
  },
  {
    id: "js-oop-q30",
    question: "What is 'Abstraction' in the context of OOP?",
    options: [
      { id: "opt1", text: "The process of creating detailed, complex classes." },
      { id: "opt2", text: "Hiding the complex implementation details and showing only the essential features of an object." },
      { id: "opt3", text: "The ability to inherit properties from multiple classes." },
      { id: "opt4", text: "Converting an object into a JSON string." }
    ],
    correctAnswerId: "opt2",
    explanation: "Abstraction focuses on showing only essential information while hiding complex, unnecessary details, presenting a simpler view to the user."
  }

          // Add more questions as needed
        ]
      },
      {
  id: "javascript-dom-quiz-practice",
  name: "JS DOM Manipulation",
  slug: "javascript-dom-manipulation",
  description:
    "A comprehensive quiz on interacting with the HTML DOM using JavaScript.",
  questions: [
    {
      id: "js-dom-q1",
      question: "What does DOM stand for in JavaScript?",
      options: [
        { id: "opt1", text: "Document Object Model" },
        { id: "opt2", text: "Data Object Model" },
        { id: "opt3", text: "Document Over Model" },
        { id: "opt4", text: "Dynamic Object Model" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "DOM stands for Document Object Model, which represents the structure of HTML documents.",
    },
    {
      id: "js-dom-q2",
      question:
        'How can you access an HTML element with the id "myElement" using JavaScript?',
      options: [
        { id: "opt1", text: 'document.getElementById("myElement")' },
        { id: "opt2", text: 'getElementById("myElement")' },
        { id: "opt3", text: 'element.getElementById("myElement")' },
        { id: "opt4", text: 'HTML.getElementById("myElement")' },
      ],
      correctAnswerId: "opt1",
      explanation:
        'You can access an HTML element with a specific id using document.getElementById("myElement").',
    },
    {
      id: "js-dom-q3",
      question:
        "Which method can be used to change the content of an HTML element using JavaScript?",
      options: [
        { id: "opt1", text: "setContent()" },
        { id: "opt2", text: "innerHTML()" },
        { id: "opt3", text: "setInnerHTML()" },
        { id: "opt4", text: "innerHTML" },
      ],
      correctAnswerId: "opt4",
      explanation:
        "You can change the content of an HTML element using the innerHTML property.",
    },
    {
      id: "js-dom-q4",
      question:
        "What is the purpose of the document.querySelector() method in JavaScript?",
      options: [
        { id: "opt1", text: "To create a new HTML element" },
        { id: "opt2", text: "To remove an HTML element" },
        {
          id: "opt3",
          text: "To select the first element that matches a specified CSS selector",
        },
        { id: "opt4", text: "To change the document's URL" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "The document.querySelector() method is used to select the first element that matches a specified CSS selector.",
    },
    {
      id: "js-dom-q5",
      question: "Which JavaScript method is used to create a new HTML element?",
      options: [
        { id: "opt1", text: "createElement()" },
        { id: "opt2", text: "create()" },
        { id: "opt3", text: "newElement()" },
        { id: "opt4", text: "addElement()" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "The createElement() method is used to create a new HTML element in JavaScript.",
    },
    {
      id: "js-dom-q6",
      question:
        "How can you append a child element to a parent element in the DOM using JavaScript?",
      options: [
        { id: "opt1", text: "appendChild()" },
        { id: "opt2", text: "addElement()" },
        { id: "opt3", text: "append()" },
        { id: "opt4", text: "addChild()" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "You can append a child element to a parent element using the appendChild() method in JavaScript.",
    },
    {
      id: "js-dom-q7",
      question: "What is the purpose of the innerHTML property in JavaScript?",
      options: [
        { id: "opt1", text: "To create a new HTML element" },
        { id: "opt2", text: "To access an element's attributes" },
        { id: "opt3", text: "To change the content of an HTML element" },
        { id: "opt4", text: "To select elements by their class name" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "The innerHTML property is used to change the content of an HTML element.",
    },
    {
      id: "js-dom-q8",
      question:
        "How can you remove an HTML element from the DOM using JavaScript?",
      options: [
        { id: "opt1", text: "removeElement()" },
        { id: "opt2", text: "deleteElement()" },
        { id: "opt3", text: "removeChild()" },
        { id: "opt4", text: "deleteChild()" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "You can remove an HTML element from the DOM using the removeChild() method.",
    },
    {
      id: "js-dom-q9",
      question:
        "What is the purpose of the textContent property in JavaScript?",
      options: [
        { id: "opt1", text: "To access an element's attributes" },
        { id: "opt2", text: "To change the content of an HTML element" },
        { id: "opt3", text: "To create a new HTML element" },
        { id: "opt4", text: "To select elements by their class name" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "The textContent property is used to change the text content of an HTML element.",
    },
    {
      id: "js-dom-q10",
      question:
        "How can you select all elements with a specific class name using JavaScript?",
      options: [
        { id: "opt1", text: "document.getElementsClass()" },
        { id: "opt2", text: "document.getElementsByClassName()" },
        { id: "opt3", text: "document.selectClass()" },
        { id: "opt4", text: "document.queryByClass()" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "You can select all elements with a specific class name using document.getElementsByClassName().",
    },
    {
      id: "js-dom-q11",
      question:
        "What is the purpose of the setAttribute() method in JavaScript?",
      options: [
        { id: "opt1", text: "To change an element's class name" },
        { id: "opt2", text: "To add a new HTML element" },
        { id: "opt3", text: "To remove an HTML element" },
        { id: "opt4", text: "To set or change an element's attribute value" },
      ],
      correctAnswerId: "opt4",
      explanation:
        "The setAttribute() method is used to set or change an element's attribute value.",
    },
    {
      id: "js-dom-q12",
      question:
        "How can you change the style of an HTML element using JavaScript?",
      options: [
        { id: "opt1", text: "setStyle()" },
        { id: "opt2", text: "changeStyle()" },
        { id: "opt3", text: "elementStyle()" },
        { id: "opt4", text: "style" },
      ],
      correctAnswerId: "opt4",
      explanation:
        "You can change the style of an HTML element using the style property in JavaScript.",
    },
    {
      id: "js-dom-q13",
      question:
        "What is the purpose of the removeAttribute() method in JavaScript?",
      options: [
        { id: "opt1", text: "To change an element's class name" },
        { id: "opt2", text: "To add a new HTML element" },
        { id: "opt3", text: "To remove an HTML element" },
        { id: "opt4", text: "To remove an element's attribute" },
      ],
      correctAnswerId: "opt4",
      explanation:
        "The removeAttribute() method is used to remove an element's attribute in JavaScript.",
    },
    {
      id: "js-dom-q14",
      question: "How can you add a class to an HTML element using JavaScript?",
      options: [
        { id: "opt1", text: "addClass()" },
        { id: "opt2", text: "addToClass()" },
        { id: "opt3", text: "element.addClass()" },
        { id: "opt4", text: "classList.add()" },
      ],
      correctAnswerId: "opt4",
      explanation:
        "You can add a class to an HTML element using classList.add() in JavaScript.",
    },
    {
      id: "js-dom-q15",
      question: "What is the purpose of the classList property in JavaScript?",
      options: [
        { id: "opt1", text: "To create a new HTML element" },
        { id: "opt2", text: "To access an element's attributes" },
        { id: "opt3", text: "To manipulate an element's class list" },
        { id: "opt4", text: "To change the content of an HTML element" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "The classList property is used to manipulate an element's class list.",
    },
    {
      id: "js-dom-q16",
      question:
        "How can you check if an HTML element has a specific class using JavaScript?",
      options: [
        { id: "opt1", text: "hasClass()" },
        { id: "opt2", text: "containsClass()" },
        { id: "opt3", text: "hasClassName()" },
        { id: "opt4", text: "classList.contains()" },
      ],
      correctAnswerId: "opt4",
      explanation:
        "You can check if an HTML element has a specific class using classList.contains().",
    },
    {
      id: "js-dom-q17",
      question:
        "What is the purpose of the addEventListener() method in JavaScript?",
      options: [
        { id: "opt1", text: "To change an element's class name" },
        { id: "opt2", text: "To remove an HTML element" },
        { id: "opt3", text: "To attach an event handler to an element" },
        { id: "opt4", text: "To select elements by their tag name" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "The addEventListener() method is used to attach an event handler to an element in JavaScript.",
    },
    {
      id: "js-dom-q18",
      question:
        "How can you prevent the default behavior of an event in JavaScript?",
      options: [
        { id: "opt1", text: "preventDefault()" },
        { id: "opt2", text: "stopPropagation()" },
        { id: "opt3", text: "stopEvent()" },
        { id: "opt4", text: "cancelEvent()" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "You can prevent the default behavior of an event in JavaScript using the preventDefault() method.",
    },
    {
      id: "js-dom-q19",
      question:
        "What is the purpose of the stopPropagation() method in JavaScript?",
      options: [
        { id: "opt1", text: "To change an element's class name" },
        { id: "opt2", text: "To add a new HTML element" },
        { id: "opt3", text: "To prevent the default behavior of an event" },
        { id: "opt4", text: "To stop the event from bubbling up the DOM tree" },
      ],
      correctAnswerId: "opt4",
      explanation:
        "The stopPropagation() method is used to stop the event from bubbling up the DOM tree.",
    },
    {
      id: "js-dom-q20",
      question:
        "How can you select all elements with a specific tag name using JavaScript?",
      options: [
        { id: "opt1", text: "document.getElementsByTag()" },
        { id: "opt2", text: "document.selectByTagName()" },
        { id: "opt3", text: "document.getElementsByTagName()" },
        { id: "opt4", text: "document.queryByTag()" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "You can select all elements with a specific tag name using document.getElementsByTagName().",
    },
    {
      id: "js-dom-q21",
      question:
        "What is the purpose of the createTextNode() method in JavaScript?",
      options: [
        { id: "opt1", text: "To create a new HTML element" },
        { id: "opt2", text: "To add text content to an element" },
        { id: "opt3", text: "To change the content of an HTML element" },
        { id: "opt4", text: "To remove an HTML element" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "The createTextNode() method is used to add text content to an element.",
    },
    {
      id: "js-dom-q22",
      question:
        "How can you retrieve the parent node of an HTML element using JavaScript?",
      options: [
        { id: "opt1", text: "parentNode()" },
        { id: "opt2", text: "getElementParent()" },
        { id: "opt3", text: "parentElement()" },
        { id: "opt4", text: "parentNode" },
      ],
      correctAnswerId: "opt4",
      explanation:
        "You can retrieve the parent node of an HTML element using the parentNode property.",
    },
    {
      id: "js-dom-q23",
      question:
        "What is the purpose of the insertBefore() method in JavaScript?",
      options: [
        { id: "opt1", text: "To create a new HTML element" },
        { id: "opt2", text: "To add an element before a specified element" },
        { id: "opt3", text: "To change the content of an HTML element" },
        { id: "opt4", text: "To remove an HTML element" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "The insertBefore() method is used to add an element before a specified element in JavaScript.",
    },
    {
      id: "js-dom-q24",
      question:
        "How can you change the value of an HTML input element using JavaScript?",
      options: [
        { id: "opt1", text: "inputValue()" },
        { id: "opt2", text: "changeValue()" },
        { id: "opt3", text: "value" },
        { id: "opt4", text: "setValue()" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "You can change the value of an HTML input element using the value property in JavaScript.",
    },
    {
      id: "js-dom-q25",
      question:
        "What is the purpose of the removeChild() method in JavaScript?",
      options: [
        { id: "opt1", text: "To change an element's class name" },
        { id: "opt2", text: "To add a new HTML element" },
        { id: "opt3", text: "To remove an HTML element" },
        { id: "opt4", text: "To change an element's attribute value" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "The removeChild() method is used to remove an HTML element from the DOM in JavaScript.",
    },
    {
      id: "js-dom-q26",
      question:
        "Which JavaScript method is used to change the value of an HTML input element without submitting the form?",
      options: [
        { id: "opt1", text: "changeValue()" },
        { id: "opt2", text: "setValue()" },
        { id: "opt3", text: "updateValue()" },
        { id: "opt4", text: "setAttribute()" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "You can change the value of an HTML input element without submitting the form using the setValue() method.",
    },
    {
      id: "js-dom-q27",
      question:
        "How can you select all elements with a specific tag name and class name using JavaScript?",
      options: [
        { id: "opt1", text: "document.getElementsByTagAndClass()" },
        { id: "opt2", text: "document.queryByTagAndClass()" },
        { id: "opt3", text: "document.getElementsByTagAndClassName()" },
        { id: "opt4", text: "document.querySelectorAll()" },
      ],
      correctAnswerId: "opt4",
      explanation:
        "You can select all elements with a specific tag name and class name using document.querySelectorAll().",
    },
    {
      id: "js-dom-q28",
      question:
        "What is the purpose of the appendChild() method in JavaScript?",
      options: [
        { id: "opt1", text: "To add a new HTML element" },
        { id: "opt2", text: "To remove an HTML element" },
        { id: "opt3", text: "To append a child element to a parent element" },
        { id: "opt4", text: "To change the document's URL" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "The appendChild() method is used to append a child element to a parent element in JavaScript.",
    },
    {
      id: "js-dom-q29",
      question:
        "How can you change the text of an HTML element using JavaScript?",
      options: [
        { id: "opt1", text: "text()" },
        { id: "opt2", text: "changeText()" },
        { id: "opt3", text: "textContent" },
        { id: "opt4", text: "innerText()" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "You can change the text of an HTML element using the textContent property in JavaScript.",
    },
    {
      id: "js-dom-q30",
      question:
        "What is the purpose of the createElementNS() method in JavaScript?",
      options: [
        {
          id: "opt1",
          text: "To create a new HTML element with a specified namespace",
        },
        { id: "opt2", text: "To change an element's class name" },
        { id: "opt3", text: "To remove an HTML element" },
        {
          id: "opt4",
          text: "To create a new HTML element without a namespace",
        },
      ],
      correctAnswerId: "opt1",
      explanation:
        "The createElementNS() method is used to create a new HTML element with a specified namespace in JavaScript.",
    },
    {
      id: "js-dom-q31",
      question:
        "How can you change the class name of an HTML element using JavaScript?",
      options: [
        { id: "opt1", text: "addClassName()" },
        { id: "opt2", text: "setClassName()" },
        { id: "opt3", text: "elementClassName()" },
        { id: "opt4", text: "className" },
      ],
      correctAnswerId: "opt4",
      explanation:
        "You can change the class name of an HTML element using the className property in JavaScript.",
    },
    {
      id: "js-dom-q32",
      question:
        "What is the purpose of the classList.remove() method in JavaScript?",
      options: [
        { id: "opt1", text: "To remove an element's attribute" },
        { id: "opt2", text: "To remove a class from an element's class list" },
        { id: "opt3", text: "To create a new HTML element" },
        { id: "opt4", text: "To change the style of an element" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "The classList.remove() method is used to remove a class from an element's class list in JavaScript.",
    },
    {
      id: "js-dom-q33",
      question:
        "How can you toggle a class on an HTML element using JavaScript?",
      options: [
        { id: "opt1", text: "toggleClass()" },
        { id: "opt2", text: "toggleClassList()" },
        { id: "opt3", text: "element.toggleClass()" },
        { id: "opt4", text: "classList.toggle()" },
      ],
      correctAnswerId: "opt4",
      explanation:
        "You can toggle a class on an HTML element using classList.toggle() in JavaScript.",
    },
    {
      id: "js-dom-q34",
      question:
        "What is the purpose of the insertAdjacentHTML() method in JavaScript?",
      options: [
        { id: "opt1", text: "To create a new HTML element" },
        { id: "opt2", text: "To add text content to an element" },
        {
          id: "opt3",
          text: "To insert HTML content at a specified position relative to an element",
        },
        { id: "opt4", text: "To remove an HTML element" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "The insertAdjacentHTML() method is used to insert HTML content at a specified position relative to an element in JavaScript.",
    },
    {
      id: "js-dom-q35",
      question: "How can you create a text node using JavaScript?",
      options: [
        { id: "opt1", text: "createTextNode()" },
        { id: "opt2", text: "newTextNode()" },
        { id: "opt3", text: "textNode()" },
        { id: "opt4", text: "generateTextNode()" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "You can create a text node using the createTextNode() method in JavaScript.",
    },
    {
      id: "js-dom-q36",
      question: "What is the purpose of the firstChild property in JavaScript?",
      options: [
        { id: "opt1", text: "To access an element's attributes" },
        { id: "opt2", text: "To retrieve the first child node of an element" },
        { id: "opt3", text: "To change the style of an element" },
        { id: "opt4", text: "To select elements by their tag name" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "The firstChild property is used to retrieve the first child node of an element in JavaScript.",
    },
    {
      id: "js-dom-q37",
      question:
        "How can you replace an HTML element with another element using JavaScript?",
      options: [
        { id: "opt1", text: "replaceWith()" },
        { id: "opt2", text: "changeElement()" },
        { id: "opt3", text: "element.replace()" },
        { id: "opt4", text: "replaceChild()" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "You can replace an HTML element with another element using the replaceWith() method in JavaScript.",
    },
    {
      id: "js-dom-q38",
      question:
        "What is the purpose of the offsetWidth property in JavaScript?",
      options: [
        { id: "opt1", text: "To change the content of an HTML element" },
        {
          id: "opt2",
          text: "To get the width of an element including padding and borders",
        },
        { id: "opt3", text: "To create a new HTML element" },
        { id: "opt4", text: "To access an element's attributes" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "The offsetWidth property is used to get the width of an element including padding and borders in JavaScript.",
    },
    {
      id: "js-dom-q39",
      question:
        'How can you change the value of an HTML input element of type "checkbox" using JavaScript?',
      options: [
        { id: "opt1", text: "setCheckboxValue()" },
        { id: "opt2", text: "checkboxValue()" },
        { id: "opt3", text: "checked" },
        { id: "opt4", text: "value" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "You can change the value of an HTML input element of type checkbox using the checked property in JavaScript.",
    },
    {
      id: "js-dom-q40",
      question:
        "What is the purpose of the setAttributeNS() method in JavaScript?",
      options: [
        { id: "opt1", text: "To change an element's attribute value" },
        { id: "opt2", text: "To add a new HTML element" },
        {
          id: "opt3",
          text: "To create a new HTML element with a specified namespace",
        },
        { id: "opt4", text: "To remove an HTML element" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "The setAttributeNS() method is used to change an element's attribute value, respecting namespaces in JavaScript.",
    },
    {
      id: "js-dom-q41",
      question:
        "How can you select the parent element of an HTML element using JavaScript?",
      options: [
        { id: "opt1", text: "selectParentElement()" },
        { id: "opt2", text: "parentElement()" },
        { id: "opt3", text: "getParent()" },
        { id: "opt4", text: "parent()" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "You can select the parent element of an HTML element using the parentElement property in JavaScript.",
    },
    {
      id: "js-dom-q42",
      question:
        "What is the purpose of the replaceChild() method in JavaScript?",
      options: [
        { id: "opt1", text: "To change an element's class name" },
        { id: "opt2", text: "To add a new HTML element" },
        { id: "opt3", text: "To replace a child element with another element" },
        { id: "opt4", text: "To remove an HTML element" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "The replaceChild() method is used to replace a child element with another element in JavaScript.",
    },
    {
      id: "js-dom-q43",
      question: "How can you create a comment node using JavaScript?",
      options: [
        { id: "opt1", text: "createComment()" },
        { id: "opt2", text: "newComment()" },
        { id: "opt3", text: "commentNode()" },
        { id: "opt4", text: "generateComment()" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "The createComment() method is used to create a comment node in JavaScript.",
    },
    {
      id: "js-dom-q44",
      question:
        "What is the purpose of the nextSibling property in JavaScript?",
      options: [
        { id: "opt1", text: "To change the content of an HTML element" },
        { id: "opt2", text: "To access an element's attributes" },
        { id: "opt3", text: "To retrieve the next sibling node of an element" },
        { id: "opt4", text: "To select elements by their tag name" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "The nextSibling property is used to retrieve the next sibling node of an element in JavaScript.",
    },
    {
      id: "js-dom-q45",
      question:
        "How can you check if an HTML element has a specific attribute using JavaScript?",
      options: [
        { id: "opt1", text: "hasAttribute()" },
        { id: "opt2", text: "containsAttribute()" },
        { id: "opt3", text: "hasAttributeName()" },
        { id: "opt4", text: "attributeList.has()" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "You can check if an HTML element has a specific attribute using the hasAttribute() method in JavaScript.",
    },
    {
      id: "js-dom-q46",
      question:
        "What is the purpose of the removeAttributeNS() method in JavaScript?",
      options: [
        { id: "opt1", text: "To change an element's class name" },
        { id: "opt2", text: "To add a new HTML element" },
        {
          id: "opt3",
          text: "To remove an element's attribute with a specified namespace",
        },
        { id: "opt4", text: "To change the style of an element" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "The removeAttributeNS() method is used to remove an element's attribute with a specified namespace in JavaScript.",
    },
    {
      id: "js-dom-q47",
      question:
        "How can you get the computed style of an HTML element using JavaScript?",
      options: [
        { id: "opt1", text: "getStyle()" },
        { id: "opt2", text: "getComputedStyle()" },
        { id: "opt3", text: "elementStyle()" },
        { id: "opt4", text: "style.getComputed()" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "You can get the computed style of an HTML element using the getComputedStyle() method in JavaScript.",
    },
    {
      id: "js-dom-q48",
      question:
        "What is the purpose of the querySelectorAll() method in JavaScript?",
      options: [
        { id: "opt1", text: "To create a new HTML element" },
        {
          id: "opt2",
          text: "To select all elements that match a specified CSS selector",
        },
        { id: "opt3", text: "To add text content to an element" },
        { id: "opt4", text: "To remove an HTML element" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "The querySelectorAll() method is used to select all elements that match a specified CSS selector.",
    },
    {
      id: "js-dom-q49",
      question:
        "What is the work of the form control elements in the HTML DOM?",
      options: [
        { id: "opt1", text: "User Interface elements" },
        { id: "opt2", text: "All the possible elements" },
        { id: "opt3", text: "Debugging elements" },
        { id: "opt4", text: "Collecting elements" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "Form control elements: The form object contains all the elements defined for that object such as text fields, buttons, radio buttons, and checkboxes. The elements collection returns a collection of all elements in a form.",
    },
    {
      id: "js-dom-q50",
      question: "How are the objects organized in the HTML DOM?",
      options: [
        { id: "opt1", text: "Class-wise" },
        { id: "opt2", text: "Queue" },
        { id: "opt3", text: "Hierarchy" },
        { id: "opt4", text: "Stack" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "The HTML DOM model is constructed as a tree of Objects. The objects are organized in the hierarchy format in the HTML DOM.",
    },
    {
      id: "js-dom-q51",
      question: "Which of the following is a type of HTML DOM?",
      options: [
        { id: "opt1", text: "Legacy DOM" },
        { id: "opt2", text: "W3C DOM" },
        { id: "opt3", text: "IE4 DOM" },
        { id: "opt4", text: "All of the mentioned" },
      ],
      correctAnswerId: "opt4",
      explanation:
        "IE4 document object model was introduced in Version 4 of Microsoft’s Internet Explorer browser. IE 5 and later versions include support for most basic W3C DOM features. All of the above mentioned are types of HTML DOM.",
    },
    {
      id: "js-dom-q52",
      question: "What is the purpose of the Legacy DOM?",
      options: [
        { id: "opt1", text: "Makes the scripting easier" },
        { id: "opt2", text: "Allows access to few keys and elements" },
        { id: "opt3", text: "Modify the nodes" },
        { id: "opt4", text: "Making the script modular" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "The Legacy DOM: This is the model which was introduced in early versions of JavaScript language. It is well supported by all browsers but allows access only to certain key portions of documents, such as forms, form elements, and images.",
    },
    {
      id: "js-dom-q53",
      question: "Which object is the top of the hierarchy?",
      options: [
        { id: "opt1", text: "Window Object" },
        { id: "opt2", text: "Document Object" },
        { id: "opt3", text: "Form Object" },
        { id: "opt4", text: "Form Control Elements" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "The DOM is arranged in the form of tree with every node as an object. Window object is the top of the hierarchy. It is the outmost element of the object hierarchy.",
    },
    {
      id: "js-dom-q54",
      question:
        "What among the following is an appropriate event handler for input text among the below options ?",
      options: [
        { id: "opt1", text: "onclick" },
        { id: "opt2", text: "onchange" },
        { id: "opt3", text: "onkeyup" },
        { id: "opt4", text: "onblur" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "This option is correct, because whenever the user enters some value the action should be taken.",
    },
    {
      id: "js-dom-q55",
      question:
        "What among the following is an appropriate when an event occurs when the user clicks on an element?",
      options: [
        { id: "opt1", text: "onclick" },
        { id: "opt2", text: "onchange" },
        { id: "opt3", text: "onkeyup" },
        { id: "opt4", text: "onblur" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "The onclick JavaScript event occurs when the user clicks on an element. It runs a specified line of code when you click a HTML object that has the onclick attribute.",
    },
    {
      id: "js-dom-q56",
      question:
        'Consider the below code:\n< body>\n< form name="register">\nEnter username < input value="John" id="name" name="username">\n< /form>\n< /body>\nIdentify the correct code in order to fetch the value entered in username text field?',
      options: [
        { id: "opt1", text: "document.register.name.value" },
        { id: "opt2", text: 'document.getElementById ("name").value' },
        { id: "opt3", text: 'document.getElementByName ("name").value' },
        { id: "opt4", text: "None of the above" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "This option is correct, because we can get the value with the help of DOM method getElementById().",
    },
    {
      id: "js-dom-q57",
      question:
        'Consider the below code:\n< body>\n< form name="login">\nEnter Your Name< input value="Akash" id="p_name" name="uname">\n< /form>\n< /body>\nIdentify the correct code in order to fetch the value entered in username text field?',
      options: [
        { id: "opt1", text: "document.login.uname.value" },
        { id: "opt2", text: 'document.getElementById ("p_name").value' },
        { id: "opt3", text: 'document.getElementByName ("name").value' },
        { id: "opt4", text: "Both A and B" },
      ],
      correctAnswerId: "opt4",
      explanation:
        "This option is correct, because we can get the value with the help of DOM method getElementById() and we can get the value with the help of form name and the name of the corresponding field.",
    },
    {
      id: "js-dom-q58",
      question: "Which of the following statements is/are TRUE about DOM?",
      options: [
        { id: "opt1", text: "W3C standard" },
        { id: "opt2", text: "Each page can have multiple Document objects" },
        {
          id: "opt3",
          text: "form elements can be accessed using the form object",
        },
        { id: "opt4", text: "Both A and C" },
      ],
      correctAnswerId: "opt4",
      explanation:
        "This option is correct, because W3C Web Applications Working Group has taken over responsibility for the Document Object Model specifications and we can access the form elements with the help of form objects (formObject.formelementname).",
    },
    {
      id: "js-dom-q59",
      question: "What is the full form DOM?",
      options: [
        { id: "opt1", text: "Document Object Model" },
        { id: "opt2", text: "Document Onhalt Model" },
        { id: "opt3", text: "Document Oriented Model" },
        { id: "opt4", text: "Document Oriented Management" },
      ],
      correctAnswerId: "opt1",
      explanation: "Document Object Model is the full form DOM.",
    },
    {
      id: "js-dom-q60",
      question: "What is the purpose of the Legacy DOM?",
      options: [
        { id: "opt1", text: "Modify the nodes" },
        { id: "opt2", text: "Making the script modular" },
        { id: "opt3", text: "Allows access to few keys and elements" },
        { id: "opt4", text: "Makes the scripting easier" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "The Legacy DOM: This is the model which was introduced in early versions of JavaScript language. It is well supported by all browsers but allows access only to certain key portions of documents, such as forms, form elements, and images.",
    },
    {
      id: "js-dom-q61",
      question: "What is the purpose of the NamedNodeMap object?",
      options: [
        { id: "opt1", text: "Unordered collection of arrays" },
        { id: "opt2", text: "Unordered collection of elements" },
        { id: "opt3", text: "Unordered collection of nodes" },
        { id: "opt4", text: "Unordered collection of attributes" },
      ],
      correctAnswerId: "opt4",
      explanation:
        "In the HTML DOM, the NamedNodeMap object represents an unordered collection of an elements attribute nodes. The nodes in the NamedNodeMap can be accessed through their name.",
    },
    {
      id: "js-dom-q62",
      question: "Which object is the top of the hierarchy?",
      options: [
        { id: "opt1", text: "Form Control Elements" },
        { id: "opt2", text: "Document Object" },
        { id: "opt3", text: "Form Object" },
        { id: "opt4", text: "Window Object" },
      ],
      correctAnswerId: "opt4",
      explanation:
        "The DOM is arranged in the form of tree with every node as an object. Window object is the top of the hierarchy. It is the outmost element of the object hierarchy.",
    },
    {
      id: "js-dom-q63",
      question: "How are the objects organized in the HTML DOM?",
      options: [
        { id: "opt1", text: "list" },
        { id: "opt2", text: "stack" },
        { id: "opt3", text: "queue" },
        { id: "opt4", text: "Hierarchy" },
      ],
      correctAnswerId: "opt4",
      explanation:
        "The HTML DOM model is constructed as a tree of Objects. The objects are organized in the hierarchy format in the HTML DOM.",
    },
    {
      id: "js-dom-q64",
      question: "In Javascript, DOM stands for?",
      options: [
        { id: "opt1", text: "Document Oriented Model" },
        { id: "opt2", text: "Document Object Method" },
        { id: "opt3", text: "Document Object Model" },
        { id: "opt4", text: "Document Optimized Model" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "When a web page is loaded, the browser creates a Document Object Model of the page.",
    },
    {
      id: "js-dom-q65",
      question: "The DOM is a ____________ standard.",
      options: [
        { id: "opt1", text: "WWW" },
        { id: "opt2", text: "W3C" },
        { id: "opt3", text: "W3B" },
        { id: "opt4", text: "WMB" },
      ],
      correctAnswerId: "opt2",
      explanation: "The DOM is a W3C (World Wide Web Consortium) standard.",
    },
    {
      id: "js-dom-q66",
      question: "The W3C DOM standard is separated into _____ different parts",
      options: [
        { id: "opt1", text: "1" },
        { id: "opt2", text: "2" },
        { id: "opt3", text: "3" },
        { id: "opt4", text: "4" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "The W3C DOM standard is separated into 3 different parts: Core DOM, XML DOM and HTML DOM.",
    },
    {
      id: "js-dom-q67",
      question: "_________ standard model for all document types.",
      options: [
        { id: "opt1", text: "Core DOM" },
        { id: "opt2", text: "XML DOM" },
        { id: "opt3", text: "HTML DOM" },
        { id: "opt4", text: "None of the above" },
      ],
      correctAnswerId: "opt1",
      explanation: "Core DOM : standard model for all document types",
    },
    {
      id: "js-dom-q68",
      question:
        "The HTML DOM is a standard object model and programming interface for HTML.",
      options: [
        { id: "opt1", text: "TRUE" },
        { id: "opt2", text: "FALSE" },
        { id: "opt3", text: "Can be true or false" },
        { id: "opt4", text: "Can not say" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "True, The HTML DOM is a standard object model and programming interface for HTML.",
    },
  ],
      },
      {
  id: "javascript-event-handling-quiz",
  name: "JavaScript Event Handling",
  slug: "javascript-event-handling",
  description: "A comprehensive quiz on handling events in JavaScript.",
  questions: [
    {
      id: "js-event-q1",
      question: "What is event handling in JavaScript?",
      options: [
        { id: "opt1", text: "Controlling the flow of execution" },
        { id: "opt2", text: "Managing data storage" },
        {
          id: "opt3",
          text: "Responding to user interactions or browser events",
        },
        { id: "opt4", text: "Creating HTML elements" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "Event handling in JavaScript involves responding to user interactions or browser events.",
    },
    {
      id: "js-event-q2",
      question:
        "Which HTML attribute is used to specify the JavaScript code that should be executed when an event occurs?",
      options: [
        { id: "opt1", text: "`script`" },
        { id: "opt2", text: "`code`" },
        { id: "opt3", text: "`onEvent`" },
        { id: "opt4", text: "`onclick`" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "The `onEvent` attribute (e.g., `onclick`, `onmouseover`) is used to specify JavaScript code for event handling.",
    },
    {
      id: "js-event-q3",
      question: "What is an event listener in JavaScript?",
      options: [
        { id: "opt1", text: "A built-in JavaScript function" },
        { id: "opt2", text: "A type of HTML element" },
        {
          id: "opt3",
          text: 'A piece of code that "listens" for and responds to events',
        },
        { id: "opt4", text: "An HTML tag" },
      ],
      correctAnswerId: "opt3",
      explanation:
        'An event listener is a piece of code that "listens" for and responds to events.',
    },
    {
      id: "js-event-q4",
      question:
        "Which function is used to add an event listener to an HTML element in JavaScript?",
      options: [
        { id: "opt1", text: "`addEventListener()`" },
        { id: "opt2", text: "`attachEvent()`" },
        { id: "opt3", text: "`listenForEvent()`" },
        { id: "opt4", text: "`addEvent()`" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "The `addEventListener()` function is used to add an event listener to an HTML element in JavaScript.",
    },
    {
      id: "js-event-q5",
      question:
        "What is the purpose of the `event` object in JavaScript event handling?",
      options: [
        { id: "opt1", text: "To create new events" },
        {
          id: "opt2",
          text: "To represent the element that triggered the event",
        },
        { id: "opt3", text: "To store data for the event" },
        { id: "opt4", text: "To provide information about the event" },
      ],
      correctAnswerId: "opt4",
      explanation:
        "The `event` object in JavaScript provides information about the event, such as the type, target element, and event details.",
    },
    {
      id: "js-event-q6",
      question: "Which event type occurs when an HTML element loses focus?",
      options: [
        { id: "opt1", text: "`click`" },
        { id: "opt2", text: "`mouseover`" },
        { id: "opt3", text: "`focus`" },
        { id: "opt4", text: "`blur`" },
      ],
      correctAnswerId: "opt4",
      explanation: "The `blur` event occurs when an HTML element loses focus.",
    },
    {
      id: "js-event-q7",
      question: "What is event propagation in JavaScript event handling?",
      options: [
        { id: "opt1", text: "The process of generating events" },
        { id: "opt2", text: "The order in which events occur" },
        {
          id: "opt3",
          text: "The flow of events from the target element to the root of the DOM tree",
        },
        { id: "opt4", text: "The timing of events" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "Event propagation in JavaScript refers to the flow of events from the target element to the root of the DOM tree.",
    },
    {
      id: "js-event-q8",
      question:
        "Which method is used to prevent the default behavior of an event in JavaScript?",
      options: [
        { id: "opt1", text: "`stopEvent()`" },
        { id: "opt2", text: "`preventDefault()`" },
        { id: "opt3", text: "`disableEvent()`" },
        { id: "opt4", text: "`defaultPrevent()`" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "The `preventDefault()` method is used to prevent the default behavior of an event in JavaScript.",
    },
    {
      id: "js-event-q9",
      question: "What is event delegation in JavaScript event handling?",
      options: [
        { id: "opt1", text: "The process of generating events" },
        { id: "opt2", text: "The propagation of events to multiple elements" },
        {
          id: "opt3",
          text: "The use of a single event listener on a parent element to handle events for its children",
        },
        { id: "opt4", text: "The combination of multiple events into one" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "Event delegation in JavaScript involves using a single event listener on a parent element to handle events for its children.",
    },
    {
      id: "js-event-q10",
      question:
        "Which method is used to stop the propagation of an event in JavaScript?",
      options: [
        { id: "opt1", text: "`stopPropagation()`" },
        { id: "opt2", text: "`preventPropagation()`" },
        { id: "opt3", text: "`cancelPropagation()`" },
        { id: "opt4", text: "`event.stopPropagation()`" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "The `stopPropagation()` method is used to stop the propagation of an event in JavaScript.",
    },
    {
      id: "js-event-q11",
      question:
        "Which event type occurs when a user clicks on an HTML element with the left mouse button?",
      options: [
        { id: "opt1", text: "`mousedown`" },
        { id: "opt2", text: "`mouseup`" },
        { id: "opt3", text: "`click`" },
        { id: "opt4", text: "`mouseover`" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "The `click` event occurs when a user clicks on an HTML element with the left mouse button.",
    },
    {
      id: "js-event-q12",
      question: "What is event bubbling in JavaScript event handling?",
      options: [
        { id: "opt1", text: "The process of generating events" },
        { id: "opt2", text: "The order in which events occur" },
        {
          id: "opt3",
          text: "The flow of events from the root of the DOM tree to the target element",
        },
        { id: "opt4", text: "The timing of events" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "Event bubbling in JavaScript is the flow of events from the root of the DOM tree to the target element.",
    },
    {
      id: "js-event-q13",
      question:
        "Which event type occurs when a user hovers the mouse pointer over an HTML element?",
      options: [
        { id: "opt1", text: "`mouseover`" },
        { id: "opt2", text: "`mouseenter`" },
        { id: "opt3", text: "`mouseout`" },
        { id: "opt4", text: "`mousemove`" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "The `mouseover` event occurs when a user hovers the mouse pointer over an HTML element.",
    },
    {
      id: "js-event-q14",
      question:
        "What is the purpose of the `stopImmediatePropagation()` method in JavaScript event handling?",
      options: [
        { id: "opt1", text: "To stop event propagation" },
        { id: "opt2", text: "To prevent the default behavior of an event" },
        {
          id: "opt3",
          text: "To prevent other listeners on the same element from being called",
        },
        { id: "opt4", text: "To start event propagation" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "The `stopImmediatePropagation()` method in JavaScript is used to prevent other listeners on the same element from being called.",
    },
    {
      id: "js-event-q15",
      question:
        "Which event type occurs when a user presses a key on the keyboard?",
      options: [
        { id: "opt1", text: "`keydown`" },
        { id: "opt2", text: "`keypress`" },
        { id: "opt3", text: "`keyup`" },
        { id: "opt4", text: "`keypressdown`" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "The `keydown` event occurs when a user presses a key on the keyboard.",
    },
    {
      id: "js-event-q16",
      question:
        "What is the purpose of the `event.currentTarget` property in JavaScript event handling?",
      options: [
        { id: "opt1", text: "To get the event target element" },
        { id: "opt2", text: "To get the event type" },
        { id: "opt3", text: "To get the currently focused element" },
        {
          id: "opt4",
          text: "To get the element to which the event listener is attached",
        },
      ],
      correctAnswerId: "opt4",
      explanation:
        "The `event.currentTarget` property in JavaScript is used to get the element to which the event listener is attached.",
    },
    {
      id: "js-event-q17",
      question:
        "Which event type occurs when an HTML element is being dragged?",
      options: [
        { id: "opt1", text: "`dragstart`" },
        { id: "opt2", text: "`dragmove`" },
        { id: "opt3", text: "`dragging`" },
        { id: "opt4", text: "`dragged`" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "The `dragstart` event occurs when an HTML element is being dragged.",
    },
    {
      id: "js-event-q18",
      question:
        "What is the purpose of the `event.target` property in JavaScript event handling?",
      options: [
        { id: "opt1", text: "To get the event type" },
        { id: "opt2", text: "To get the currently focused element" },
        {
          id: "opt3",
          text: "To get the element to which the event listener is attached",
        },
        { id: "opt4", text: "To get the event target element" },
      ],
      correctAnswerId: "opt4",
      explanation:
        "The `event.target` property in JavaScript is used to get the event target element.",
    },
    {
      id: "js-event-q19",
      question:
        "Which method is used to remove an event listener in JavaScript?",
      options: [
        { id: "opt1", text: "`removeEventListener()`" },
        { id: "opt2", text: "`detachEventListener()`" },
        { id: "opt3", text: "`removeEvent()`" },
        { id: "opt4", text: "`offEvent()`" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "The `removeEventListener()` method is used to remove an event listener in JavaScript.",
    },
    {
      id: "js-event-q20",
      question:
        "What is the purpose of the `mouseenter` event in JavaScript event handling?",
      options: [
        {
          id: "opt1",
          text: "To detect when the mouse pointer enters an element",
        },
        { id: "opt2", text: "To detect mouse movement" },
        {
          id: "opt3",
          text: "To detect when the mouse pointer leaves an element",
        },
        { id: "opt4", text: "To detect keyboard input" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "The `mouseenter` event is used to detect when the mouse pointer enters an element.",
    },
    {
      id: "js-event-q21",
      question:
        "Which event type occurs when a user releases the mouse button after clicking on an HTML element?",
      options: [
        { id: "opt1", text: "`mousedown`" },
        { id: "opt2", text: "`mouseup`" },
        { id: "opt3", text: "`click`" },
        { id: "opt4", text: "`dblclick`" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "The `mouseup` event occurs when a user releases the mouse button after clicking on an HTML element.",
    },
    {
      id: "js-event-q22",
      question:
        "What is the purpose of the `event.preventDefault()` method in JavaScript event handling?",
      options: [
        { id: "opt1", text: "To stop event propagation" },
        {
          id: "opt2",
          text: "To prevent other listeners on the same element from being called",
        },
        { id: "opt3", text: "To prevent the default behavior of an event" },
        { id: "opt4", text: "To start event propagation" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "The `event.preventDefault()` method is used to prevent the default behavior of an event in JavaScript.",
    },
    {
      id: "js-event-q23",
      question:
        "Which event type occurs when a user double-clicks on an HTML element?",
      options: [
        { id: "opt1", text: "`click`" },
        { id: "opt2", text: "`dblclick`" },
        { id: "opt3", text: "`doubleclick`" },
        { id: "opt4", text: "`doubleclicking`" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "The `dblclick` event occurs when a user double-clicks on an HTML element.",
    },
    {
      id: "js-event-q24",
      question:
        "What is the purpose of the `focus` event in JavaScript event handling?",
      options: [
        { id: "opt1", text: "To detect when an element gains focus" },
        { id: "opt2", text: "To detect mouse movement" },
        { id: "opt3", text: "To detect when an element loses focus" },
        { id: "opt4", text: "To detect keyboard input" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "The `focus` event is used to detect when an element gains focus.",
    },
    {
      id: "js-event-q25",
      question:
        "Which event type occurs when a user moves the mouse pointer over an HTML element?",
      options: [
        { id: "opt1", text: "`click`" },
        { id: "opt2", text: "`mouseover`" },
        { id: "opt3", text: "`mouseenter`" },
        { id: "opt4", text: "`mousemove`" },
      ],
      correctAnswerId: "opt4",
      explanation:
        "The `mousemove` event occurs when a user moves the mouse pointer over an HTML element.",
    },
    {
      id: "js-event-q26",
      question:
        "The type that specifies what kind of event occurred is ____________",
      options: [
        { id: "opt1", text: "event type" },
        { id: "opt2", text: "even target" },
        { id: "opt3", text: "both event type and even target" },
        { id: "opt4", text: "interface" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "The event type is a string that specifies what kind of event occurred. The type “mousemove”, for example, means that the user moved the mouse.",
    },
    {
      id: "js-event-q27",
      question:
        "Which is the object on which the event occurred or with which the event is associated?",
      options: [
        { id: "opt1", text: "event type" },
        { id: "opt2", text: "event target" },
        { id: "opt3", text: "both event type and even target" },
        { id: "opt4", text: "interface" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "The event target is the object on which the event occurred or with which the event is associated. When we speak of an event, we must specify both the type and the target. The target property of the Event interface is a reference to the object that dispatched the event.",
    },
    {
      id: "js-event-q28",
      question: "In general, event handler is nothing but ____________",
      options: [
        { id: "opt1", text: "function" },
        { id: "opt2", text: "interface" },
        { id: "opt3", text: "event" },
        { id: "opt4", text: "handler" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "An event handler is in general, a function that handles or responds to an event. For example onclick, onkeypress, onload etc are event handler functions.",
    },
    {
      id: "js-event-q29",
      question: "When will the browser invoke the handler?",
      options: [
        { id: "opt1", text: "Program begins" },
        { id: "opt2", text: "Any event occurs" },
        { id: "opt3", text: "Specified event occurs" },
        { id: "opt4", text: "Webpage loads" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "When an event of the specified type occurs on the specified target, the browser invokes the handler. For example onclick function is executed when mouse is clicked.",
    },
    {
      id: "js-event-q30",
      question: "Which property specifies the property of the event?",
      options: [
        { id: "opt1", text: "Type" },
        { id: "opt2", text: "Target" },
        { id: "opt3", text: "Manner" },
        { id: "opt4", text: "Program" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "All event objects have a type property that specifies the event type. Event type is a string that specifies what kind of event occurred.",
    },
    {
      id: "js-event-q31",
      question:
        "The process by which the browser decides which objects to trigger event handlers on is ____________",
      options: [
        { id: "opt1", text: "Event Triggering" },
        { id: "opt2", text: "Event Listening" },
        { id: "opt3", text: "Event Handling" },
        { id: "opt4", text: "Event propagation" },
      ],
      correctAnswerId: "opt4",
      explanation:
        "Event propagation is the process by which the browser decides which objects to trigger event handlers. Event propagation is a way to describe the “stack” of events that are fired in a web browser.",
    },
    {
      id: "js-event-q32",
      question:
        "Which form of event propagation handles the registered container elements?",
      options: [
        { id: "opt1", text: "Event Propagation" },
        { id: "opt2", text: "Event Registration" },
        { id: "opt3", text: "Event Capturing" },
        { id: "opt4", text: "Default Actions" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "Event bubbling and capturing are two ways of event propagation in the HTML DOM API. With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements. With capturing, the event is first captured by the outermost element and propagated to the inner elements.",
    },
    {
      id: "js-event-q33",
      question:
        "The events that are directly tied to a specific input device are ____________",
      options: [
        { id: "opt1", text: "Device-independent input events" },
        { id: "opt2", text: "Device-dependent input events" },
        { id: "opt3", text: "User interface events" },
        { id: "opt4", text: "State change events" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "These are events that are directly tied to a specific input device, such as the mouse or keyboard) They include legacy event types such as “mousedown”, “mousemove”, “mouseup”, “keydown”, “keypress”, and “keyup” and also new touch specific events like “touchmove” and “gesturechange”.",
    },
    {
      id: "js-event-q34",
      question:
        "The high-level events among the following events are ____________",
      options: [
        { id: "opt1", text: "User interface events" },
        { id: "opt2", text: "Device-independent events" },
        { id: "opt3", text: "Device-dependent events" },
        { id: "opt4", text: "Stage event change" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "UI events are higher-level events, often on HTML form elements that define a user interface for a web application. They include the focus event (when a text input field gains keyboard focus), the change event when the user changes the value displayed by a form element, and the submit event when the user clicks a Submit button in a form.",
    },
    {
      id: "js-event-q35",
      question:
        "The events that are not directly tied to a specific input device are _____________",
      options: [
        { id: "opt1", text: "User interface events" },
        { id: "opt2", text: "Device-independent events" },
        { id: "opt3", text: "Device-dependent events" },
        { id: "opt4", text: "Stage event change" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "These are input events that are not directly tied to a specific input device. The click event, for example, indicates that a link or button (or other document element) has been activated) This is often done via a mouse click, but it could also be done by keyboard or (on touch-sensitive devices) by gesture.",
    },
    {
      id: "js-event-q36",
      question:
        "……….. include legacy event types such as “mousedown”, “mousemove”, “mouseup”, “keydown”, “keypress”,”keyup”,”touchmove” and “gesturechange” events.",
      options: [
        { id: "opt1", text: "Device-dependent input events" },
        { id: "opt2", text: "Device-independent input events" },
        { id: "opt3", text: "User interface events" },
        { id: "opt4", text: "State change events" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "Device-dependent input events include legacy event types such as “mousedown”, “mousemove”, “mouseup”, “keydown”, “keypress”,”keyup”,”touchmove” and “gesturechange” events.",
    },
    {
      id: "js-event-q37",
      question:
        "………… are not triggered directly by user activity, but by network or browser activity, and indicate some kind of lifecycle.",
      options: [
        { id: "opt1", text: "Device-dependent input events" },
        { id: "opt2", text: "Device-independent input events" },
        { id: "opt3", text: "User interface events" },
        { id: "opt4", text: "State change events" },
      ],
      correctAnswerId: "opt4",
      explanation:
        "State change events are not triggered directly by user activity, but by network or browser activity, and indicate some kind of lifecycle.",
    },
    {
      id: "js-event-q38",
      question:
        "………… include the focus event, the change event when the user changes the value and the submit event when the user clicks a submit button.",
      options: [
        { id: "opt1", text: "Device-dependent input events" },
        { id: "opt2", text: "Device-independent input events" },
        { id: "opt3", text: "User interface events" },
        { id: "opt4", text: "State change events" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "User interface events include the focus event, the change event when the user changes the value and the submit event when the user clicks a submit button.",
    },
    {
      id: "js-event-q39",
      question:
        "……….. allows the same event handler function to be registered more than once. When an event of the specified type occurs, the registered function will be invoked as many times as it was registered.",
      options: [
        { id: "opt1", text: "addEvent()" },
        { id: "opt2", text: "addMultipltEvent()" },
        { id: "opt3", text: "attachEvent()" },
        { id: "opt4", text: "reattachEvent()" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "attachEvent() allows the same event handler function to be registered more than once. When an event of the specified type occurs, the registered function will be invoked as many times as it was registered.",
    },
    {
      id: "js-event-q40",
      question:
        "Which of the following statements about the arguments of addEventListener() is/are True?\ni) The first argument to addEventListener() is the event type for which the handler is being registered.\nii) The second argument to addEventListener() is the function that should be invoked when the specified type of event occurs.\niii) The third argument to addEventListener() is a numerical value.",
      options: [
        { id: "opt1", text: "i and ii only" },
        { id: "opt2", text: "i and iii only" },
        { id: "opt3", text: "ii and iii only" },
        { id: "opt4", text: "All i, ii, and iii" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "The first argument to addEventListener() is the event type for which the handler is being registered. The second argument to addEventListener() is the function that should be invoked when the specified type of event occurs. The third argument is a boolean, not a numerical value, controlling capturing vs. bubbling.",
    },
    {
      id: "js-event-q41",
      question:
        "When an event occurs on an object, all of the handlers registered for that type of event are invoked, in the order in which they were ………",
      options: [
        { id: "opt1", text: "occurred" },
        { id: "opt2", text: "registered" },
        { id: "opt3", text: "invoked" },
        { id: "opt4", text: "initialized" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "When an event occurs on an object, all of the handlers registered for that type of event are invoked, in the order in which they were registered.",
    },
    {
      id: "js-event-q42",
      question:
        "Invoking ………. more than once on the same object with the same arguments has no effect, the handler function remains registered only once, and repeated invocation does not alter the order in which handlers are invoked.",
      options: [
        { id: "opt1", text: "addEvent()" },
        { id: "opt2", text: "addMultipltEvent()" },
        { id: "opt3", text: "attachEvent()" },
        { id: "opt4", text: "addEventListener()" },
      ],
      correctAnswerId: "opt4",
      explanation:
        "Invoking addEventListener() more than once on the same object with the same arguments has no effect, the handler function remains registered only once, and repeated invocation does not alter the order in which handlers are invoked.",
    },
    {
      id: "js-event-q43",
      question:
        "State which of the following statements are True or False about the rules of invocation order for an event handler in JavaScript.\ni) Handlers registered by setting an object property of HTML attribute if any are always invoked first.\nii) Handlers registered with addEventListner() are invoked in the order in which they were registered.\niii) Handlers registered with attachEvent() may be invoked in any order and the code should not depend on sequential invocation.",
      options: [
        { id: "opt1", text: "i-True, ii-True, iii-False" },
        { id: "opt2", text: "i-True, ii-False, iii-False" },
        { id: "opt3", text: "i-True, ii-True, iii-True" },
        { id: "opt4", text: "i-False, ii-False, iii-True" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "All three statements are true regarding the invocation order of event handlers in JavaScript.",
    },
    {
      id: "js-event-q44",
      question:
        "………. is universally supported also it works in all browsers including IE, and works for all handlers, regardless of how they are registered.",
      options: [
        { id: "opt1", text: "Event bubbling" },
        { id: "opt2", text: "Event handling" },
        { id: "opt3", text: "Event capturing" },
        { id: "opt4", text: "Event registering" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "Event bubbling is universally supported, works in all browsers including IE, and works for all handlers, regardless of how they are registered.",
    },
    {
      id: "js-event-q45",
      question:
        "…………, only works with event handlers registered with addEventListner() when the third argument is True.",
      options: [
        { id: "opt1", text: "Event bubbling" },
        { id: "opt2", text: "Event handling" },
        { id: "opt3", text: "Event capturing" },
        { id: "opt4", text: "Event registering" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "Event capturing only works with event handlers registered with addEventListener() when the third argument is True (indicating the capturing phase).",
    },
    {
      id: "js-event-q46",
      question:
        "In browsers that support addEventListner(), we can also cancel the default action for an event by invoking the ……….. method of the event object.",
      options: [
        { id: "opt1", text: "preventBrowsers()" },
        { id: "opt2", text: "preventDefault()" },
        { id: "opt3", text: "preventPropagation()" },
        { id: "opt4", text: "preventEvent()" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "In browsers that support addEventListener(), we can also cancel the default action for an event by invoking the preventDefault() method of the event object.",
    },
    {
      id: "js-event-q47",
      question:
        "The ………….. event is fired when the document has been loaded and parsed and any deferred scripts have been executed.",
      options: [
        { id: "opt1", text: "DOMContent()" },
        { id: "opt2", text: "DOMContentLoad()" },
        { id: "opt3", text: "DOMLoaded()" },
        { id: "opt4", text: "DOMContentLoaded()" },
      ],
      correctAnswerId: "opt4",
      explanation:
        "The DOMContentLoaded() event is fired when the document has been loaded and parsed and any deferred scripts have been executed.",
    },
    {
      id: "js-event-q48",
      question:
        "………. is a user interface for transferring data between a “drag source” and “drop target” that may be in the same application or in different applications.",
      options: [
        { id: "opt1", text: "Drag-and-drop" },
        { id: "opt2", text: "User-drag-and-drop" },
        { id: "opt3", text: "Drag source-and-drop target" },
        { id: "opt4", text: "Source-drag-and-drop-target" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "Drag-and-drop is a user interface for transferring data between a “drag source” and “drop target” that may be in the same application or in different applications.",
    },
    {
      id: "js-event-q49",
      question:
        "Which of the following statements are True about the APIs for Implementing Drag-and-drop?\ni) They have to tie into the underlying OS so that they can work between unrelated applications.\nii) They must provide a way for a drag source to specify the icon or image to be dragged.\niii) They must provide event-based notification to both the drag source and drop target of the progress of the Drag-and-drop interaction.",
      options: [
        { id: "opt1", text: "i and ii only" },
        { id: "opt2", text: "i and iii only" },
        { id: "opt3", text: "ii and iii only" },
        { id: "opt4", text: "All i, ii, and iii" },
      ],
      correctAnswerId: "opt4",
      explanation:
        "All three statements are true for the APIs implementing drag-and-drop functionality.",
    },
    {
      id: "js-event-q50",
      question:
        "……… objects have altKey, ctrlKey, metaKey, and shiftKey properties, which are set to True if the corresponding modifier key is held down when the event occurs.",
      options: [
        { id: "opt1", text: "Key down" },
        { id: "opt2", text: "Key event" },
        { id: "opt3", text: "Key up" },
        { id: "opt4", text: "Keypress" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "Key event objects (e.g., from keydown, keyup, keypress) have altKey, ctrlKey, metaKey, and shiftKey properties, which are set to True if the corresponding modifier key is held down when the event occurs.",
    },
  ],
      },
      {
  id: "js-error-handling-and-debugging-quiz",
  name: "JS Error Handling and Debugging",
  slug: "js-error-handling-and-debugging",
  description:
    "A comprehensive quiz on JavaScript error handling and debugging techniques.",
  questions: [
    {
      id: "js-error-q1",
      question: "What is the code snippet to go back to a history twice?",
      options: [
        { id: "opt1", text: "history(2);" },
        { id: "opt2", text: "history(-2);" },
        { id: "opt3", text: "history.go(-2);" },
        { id: "opt4", text: "history.go(2);" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "The go() method loads a specific URL from the history list. The above code snippet goes back 2, like clicking the Back button twice.",
    },
    {
      id: "js-error-q2",
      question:
        "If the window has child windows, how will the Browse histories be affected?",
      options: [
        { id: "opt1", text: "Numerically interleaved" },
        { id: "opt2", text: "Chronologically interleaved" },
        {
          id: "opt3",
          text: "Both Numerically and Chronologically interleaved",
        },
        { id: "opt4", text: "Numerically or Chronologically interleaved" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "If a window contains child windows, the Browse histories of the child windows are chronologically interleaved with the history of the main window. The opener property returns a reference to the window that created the window.",
    },
    {
      id: "js-error-q3",
      question:
        "The length property belongs to which of the following objects?",
      options: [
        { id: "opt1", text: "Window" },
        { id: "opt2", text: "Element" },
        { id: "opt3", text: "History" },
        { id: "opt4", text: "Document" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "The length property of the History object specifies the number of elements in the Browse history list. The property returns at least 1, because the list includes the currently loaded page.",
    },
    {
      id: "js-error-q4",
      question: "What is the datatype of the go() method’s parameter?",
      options: [
        { id: "opt1", text: "String" },
        { id: "opt2", text: "Integer" },
        { id: "opt3", text: "Double" },
        { id: "opt4", text: "Float" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "The go() method takes an integer argument and can skip any number of pages forward and backward in the history list.",
    },
    {
      id: "js-error-q5",
      question: "What is the special feature of modern web applications?",
      options: [
        { id: "opt1", text: "Can alter contents without loading document" },
        { id: "opt2", text: "Must load the document to manipulate" },
        { id: "opt3", text: "Remains static" },
        { id: "opt4", text: "Can’t be altered at all" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "Modern web applications can dynamically alter their own content without loading a new document.",
    },
    {
      id: "js-error-q6",
      question:
        "The navigator property belongs to which of the following object?",
      options: [
        { id: "opt1", text: "Document" },
        { id: "opt2", text: "Window" },
        { id: "opt3", text: "Navigator" },
        { id: "opt4", text: "Location" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "The navigator property of a Window object refers to a Navigator object that contains browser vendor and version number information. Navigator object property includes appCodeName, appVersion, appName etc.",
    },
    {
      id: "js-error-q7",
      question: "What is the vendor-neutral synonym for navigator?",
      options: [
        { id: "opt1", text: "staticData" },
        { id: "opt2", text: "purposeInformation" },
        { id: "opt3", text: "dataInformation" },
        { id: "opt4", text: "clientInformation" },
      ],
      correctAnswerId: "opt4",
      explanation:
        "IE supports clientInformation as a vendor-neutral synonym for a navigator. The navigator property of a Window object refers to a Navigator object that contains browser vendor and version number information.",
    },
    {
      id: "js-error-q8",
      question: "Which is the preferred testing nowadays for scripting?",
      options: [
        { id: "opt1", text: "Software testing" },
        { id: "opt2", text: "Feature testing" },
        { id: "opt3", text: "Blackbox testing" },
        { id: "opt4", text: "Whitebox testing" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "The “browser-sniffing” approach is problematic because it requires constant tweaking as new browsers and new versions of existing browsers are introduced. Today, feature testing is preferred rather than making assumptions about particular browser versions and their features, you simply test for the feature (i.e., the method or property) you need.",
    },
    {
      id: "js-error-q9",
      question:
        "Which of the below properties can be used for browser sniffing?",
      options: [
        { id: "opt1", text: "platform" },
        { id: "opt2", text: "appVersion" },
        { id: "opt3", text: "both platform and appVersion" },
        { id: "opt4", text: "appName" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "The platform and appVersion can be found out in the navigator object properties.",
    },
    {
      id: "js-error-q10",
      question: "Where is the information of the userAgent property located?",
      options: [
        { id: "opt1", text: "appId" },
        { id: "opt2", text: "appName" },
        { id: "opt3", text: "platform" },
        { id: "opt4", text: "appVersion" },
      ],
      correctAnswerId: "opt4",
      explanation:
        "The string that the browser sends in its USER-AGENT HTTP header. This property typically contains all the information in appVersion and may contain additional details as well.",
    },
    {
      id: "js-error-q11",
      question:
        'What will be the output of the following JavaScript code?\nfunction myFunction() {\n    document.getElementById("demo").innerHTML = Boolean(10 > 9);}',
      options: [
        { id: "opt1", text: "true" },
        { id: "opt2", text: "false" },
        { id: "opt3", text: "error" },
        { id: "opt4", text: "0" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "The boolean function returns the boolean values. Since 10 is greater than 9 the boolean function returns true.",
    },
    {
      id: "js-error-q12",
      question:
        "What will be the output of the following JavaScript code?\nvar b5 = Boolean('false');\ndocument.getElementById(\"demo\").innerHTML =b5;",
      options: [
        { id: "opt1", text: "False" },
        { id: "opt2", text: "True" },
        { id: "opt3", text: "Error" },
        { id: "opt4", text: "Undefined" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "The boolean function returns the boolean values. The boolean function returns true for any non empty string even if the string is false.",
    },
    {
      id: "js-error-q13",
      question:
        'What will be the output of the following JavaScript code?\nfunction myFunction() {\n  var x = "";\n  document.getElementById("demo").innerHTML = Boolean(x);}',
      options: [
        { id: "opt1", text: "true" },
        { id: "opt2", text: "false" },
        { id: "opt3", text: "0" },
        { id: "opt4", text: "1" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "When an empty string is passed to the boolean function then the function returns false. The boolean function returns true or false according to the input passed to it.",
    },
    {
      id: "js-error-q14",
      question:
        'What will be the output of the following JavaScript code?\nfunction myFunction() {\n   var x = 10 / "H";\n   document.getElementById("demo").innerHTML = Boolean(x);}',
      options: [
        { id: "opt1", text: "True" },
        { id: "opt2", text: "False" },
        { id: "opt3", text: "Error" },
        { id: "opt4", text: "Undefined" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "The value return by the boolean method depends on the input passed to it. The NaN value when passed to the boolean function returns false.",
    },
    {
      id: "js-error-q15",
      question:
        'What will be the output of the following JavaScript code?\nfunction myFunction() {\n   var x = null;\n   document.getElementById("demo").innerHTML = Boolean(x);}',
      options: [
        { id: "opt1", text: "True" },
        { id: "opt2", text: "False" },
        { id: "opt3", text: "Error" },
        { id: "opt4", text: "Undefined" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "The value return by the boolean method depends on the input passed to it. The NULL value when passed to the boolean function returns false.",
    },
    {
      id: "js-error-q16",
      question: "What is it called when we make a mistake in the script?",
      options: [
        { id: "opt1", text: "Error" },
        { id: "opt2", text: "Bug" },
        { id: "opt3", text: "Mistake" },
        { id: "opt4", text: "Debug" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "A bug in a programming language refers to a set of code which results in an error in compilation. A mistake in a script is referred to as a bug.",
    },
    {
      id: "js-error-q17",
      question: "Which of the following is the definition for debugging?",
      options: [
        { id: "opt1", text: "Finding bugs" },
        { id: "opt2", text: "Fixing bugs" },
        { id: "opt3", text: "Both Finding & Fixing bugs" },
        { id: "opt4", text: "Clearing bugs" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "Debugging is the process of finding and resolving defects or problems within a computer program that prevent correct operation of computer software or a system. The process of finding and fixing bugs is called debugging and is a normal part of the development process.",
    },
    {
      id: "js-error-q18",
      question: "Where is the error icon shown in the Internet Explorer?",
      options: [
        { id: "opt1", text: "Taskbar" },
        { id: "opt2", text: "Status bar" },
        { id: "opt3", text: "Both Taskbar and Status bar" },
        { id: "opt4", text: "Bookmarks bar" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "The error icon option can be enabled in the Tools. To view the console, select Tools –> Error Consol or Web Development.",
    },
    {
      id: "js-error-q19",
      question: "Where is the error icon option available?",
      options: [
        { id: "opt1", text: "Tools" },
        { id: "opt2", text: "Help" },
        { id: "opt3", text: "File" },
        { id: "opt4", text: "Edit" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "The error icon option can be enabled in the Tools. To view the console, select Tools –> Error Consol or Web Development.",
    },
    {
      id: "js-error-q20",
      question:
        "Which of the following is the window that the Firefox sends the error messages to?",
      options: [
        { id: "opt1", text: "Bug Window" },
        { id: "opt2", text: "Error Issues" },
        { id: "opt3", text: "Error Window" },
        { id: "opt4", text: "Error Console" },
      ],
      correctAnswerId: "opt4",
      explanation:
        "The browsers like Firefox, Netscape and Mozilla send error messages to a special window called the JavaScript Console or Error Console. The Error Console is deprecated in Firefox and is now only made available if you set the devtools.errorconsole.enabled preference to true.",
    },
    {
      id: "js-error-q21",
      question: "What is the procedure to view the console in the Firefox?",
      options: [
        { id: "opt1", text: "Tools -> Error Console" },
        { id: "opt2", text: "Tools -> Error Window" },
        { id: "opt3", text: "Help -> Error Console" },
        { id: "opt4", text: "Tools -> Bug window" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "The error icon option can be enabled in the Tools. To view the console, select Tools –> Error Console or Web Development.",
    },
    {
      id: "js-error-q22",
      question:
        "What is the other way of calling the Error Console in Firefox?",
      options: [
        { id: "opt1", text: "Error Window" },
        { id: "opt2", text: "JavaScript Console" },
        { id: "opt3", text: "JavaScript Window" },
        { id: "opt4", text: "Error or JavaScript Window" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "The browsers like Firefox, Netscape and Mozilla send error messages to a special window called the JavaScript Console or Error Console. The Error Console is also termed as the JavaScript Console.",
    },
    {
      id: "js-error-q23",
      question:
        "What kind of error notifications are shown in the console window?",
      options: [
        { id: "opt1", text: "Syntax error" },
        { id: "opt2", text: "Runtime error" },
        { id: "opt3", text: "Both Syntax error and Runtime error" },
        { id: "opt4", text: "Compilation error" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "The browsers like Firefox, Netscape and Mozilla send error messages to a special window called the JavaScript Console or Error Console. Error notifications that show up on Console or through Internet Explorer dialog boxes are the result of both syntax and runtime errors. These error notification include the line number at which the error occurred.",
    },
    {
      id: "js-error-q24",
      question: "How do we debug a script?",
      options: [
        { id: "opt1", text: "Use of JavaScript Validator" },
        { id: "opt2", text: "Use of JavaScript Debugger" },
        { id: "opt3", text: "Use of JavaScript Validator & Debugger" },
        { id: "opt4", text: "Use of javascript interpreter" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "Both the JavaScript Validator and the JavaScript Debugger can be used to debug a script. The debugger statement stops the execution of JavaScript, and calls (if available) the debugging function.",
    },
    {
      id: "js-error-q25",
      question: "What is the purpose of a JavaScript debugger?",
      options: [
        { id: "opt1", text: "Correction of errors" },
        { id: "opt2", text: "Placing script execution under control" },
        {
          id: "opt3",
          text: "Correction of errors & Placing script execution under control",
        },
        { id: "opt4", text: "Compilation" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "A debugger is an application that places all aspects of script execution under the control of the programmer. Using the debugger statement has the same function as setting a breakpoint in the code. Debuggers provide fine-grained control over the state of the script through an interface that allows you to examine and set values as well as control the flow of execution.",
    },
    {
      id: "js-error-q26",
      question: "What is the code snippet to go back to a history thrice?",
      options: [
        { id: "opt1", text: "history(3);" },
        { id: "opt2", text: "history(-3);" },
        { id: "opt3", text: "history.go(-3);" },
        { id: "opt4", text: "history.go(3);" },
      ],
      correctAnswerId: "opt3",
      explanation:
        "The go() method loads a specific URL from the history list. The above code snippet goes back 3, like clicking the Back button thrice.",
    },
    {
      id: "js-error-q27",
      question:
        'What will be the output of the following JavaScript code?\nfunction myfun()\n{\ndocument.getElementById ("demo").innerHTML = Boolean(15.00 === 15);\n}',
      options: [
        { id: "opt1", text: "true" },
        { id: "opt2", text: "false" },
        { id: "opt3", text: "error" },
        { id: "opt4", text: "0" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "The boolean function returns the boolean values. Since 15.00 (float) is equal to 15 (int) but the type is not same so the boolean function returns false due to strict equality (===).",
    },
    {
      id: "js-error-q28",
      question:
        "The inner frame within a top-level window can be referred to as _____________",
      options: [
        { id: "opt1", text: "parent(parent)" },
        { id: "opt2", text: "parent.parent" },
        { id: "opt3", text: "parent*parent" },
        { id: "opt4", text: "parent/parent" },
      ],
      correctAnswerId: "opt2",
      explanation:
        "The inner frame within a top-level window can be referred to as parent.parent.",
    },
    {
      id: "js-error-q29",
      question:
        "How are windows, tabs, iframes, and frames treated according to client-side javascript?",
      options: [
        { id: "opt1", text: "They are all Browse contexts" },
        { id: "opt2", text: "They are all Browse information" },
        { id: "opt3", text: "They are all Window contexts" },
        { id: "opt4", text: "They are all Window objects" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "Client-side JavaScript makes very little distinction between windows, tabs, iframes, and frames they are all Browse contexts, and to JavaScript, they are all Window objects.",
    },
    {
      id: "js-error-q30",
      question:
        "Each tab in the single web browser window is called as ____________",
      options: [
        { id: "opt1", text: "Browse context" },
        { id: "opt2", text: "Browser Information" },
        { id: "opt3", text: "Both Browser Information & Browse context" },
        { id: "opt4", text: "Browser Log" },
      ],
      correctAnswerId: "opt1",
      explanation:
        "Each tab in the single web browser window is called as Browse context.",
    },
  ],
      },
      {
        id: "json-basics",
        name: "JSON Basics",
        slug: "json-basics",
        description:
          "A comprehensive quiz on JavaScript error handling and debugging techniques.",
        questions: [
            {
              id: "json-basics-q1",
              question: "JSON stands for _______",
              options: [
                { id: "opt1", text: "JavaScript Object Notation" },
                { id: "opt2", text: "Java Object Notation" },
                { id: "opt3", text: "JavaScript Object Normalization" },
                { id: "opt4", text: "JavaScript Object-Oriented Notation" },
              ],
              correctAnswerId: "opt1",
              explanation:
                "JSON stands for JavaScript Object Notation.",
            },
            {
              id: "json-basics-q2",
              question: "JSON is a _____ for storing and transporting data.",
              options: [
                { id: "opt1", text: "xml format" },
                { id: "opt2", text: "text format" },
                { id: "opt3", text: "JavaScript" },
                { id: "opt4", text: "php format" },
              ],
              correctAnswerId: "opt2",
              explanation:
                "JSON is a text format for storing and transporting data.",
            },
            {
              id: "json-basics-q3",
              question: "In the JSON syntax, data is separated by _____.",
              options: [
                { id: "opt1", text: "Semicolons" },
                { id: "opt2", text: "Colons" },
                { id: "opt3", text: "Commas" },
                { id: "opt4", text: "Hyper" },
              ],
              correctAnswerId: "opt3",
              explanation:
                "In the JSON syntax, data is separated by commas.",
            },
            {
              id: "json-basics-q4",
              question: "Which is the correct symbol to insert a comment in JSON?",
              options: [
                { id: "opt1", text: "//" },
                { id: "opt2", text: "/*…*/" },
                { id: "opt3", text: "<!-- … -->" },
                { id: "opt4", text: "JSON doesn't support the comments" },
              ],
              correctAnswerId: "opt4",
              explanation:
                "JSON doesn't support the comments. But you can add an extra attribute to write the comments.",
            },
            {
              id: "json-basics-q5",
              question: "In the JSON syntax, data is in ____ pairs",
              options: [
                { id: "opt1", text: "class/object" },
                { id: "opt2", text: "name/value" },
                { id: "opt3", text: "datatype/variable" },
                { id: "opt4", text: "value/=" },
              ],
              correctAnswerId: "opt2",
              explanation:
                "In the JSON syntax, data is in name/value pairs.",
            },
            {
              id: "json-basics-q6",
              question: "JSON names (keys) require double quotes?",
              options: [
                { id: "opt1", text: "True" },
                { id: "opt2", text: "False" },
              ],
              correctAnswerId: "opt1",
              explanation:
                "It's true that JSON names (key) require double quotes.",
            },
            {
              id: "json-basics-q7",
              question: "JSON names (keys) must be strings?",
              options: [
                { id: "opt1", text: "True" },
                { id: "opt2", text: "False" },
              ],
              correctAnswerId: "opt1",
              explanation:
                "It's true that JSON names (keys) must be strings.",
            },
            {
              id: "json-basics-q8",
              question: "Which is not a JSON data type?",
              options: [
                { id: "opt1", text: "number" },
                { id: "opt2", text: "string" },
                { id: "opt3", text: "array" },
                { id: "opt4", text: "date" },
              ],
              correctAnswerId: "opt4",
              explanation:
                "The date is not a valid data type.",
            },
            {
            id: "json-basics-q9",
            question: "What character encloses a JSON object?",
            options: [
              { id: "opt1", text: "[]" },
              { id: "opt2", text: "{}" },
              { id: "opt3", text: "()" },
              { id: "opt4", text: "<>" }
            ],
            correctAnswerId: "opt2",
            explanation: "A JSON object is enclosed by curly braces `{}`."
            },
            {
              id: "json-basics-q10",
              question: "What character encloses a JSON array?",
              options: [
                { id: "opt1", text: "[]" },
                { id: "opt2", text: "{}" },
                { id: "opt3", text: "()" },
                { id: "opt4", text: "<>" }
              ],
              correctAnswerId: "opt1",
              explanation: "A JSON array is enclosed by square brackets `[]`."
            },
            {
              id: "json-basics-q11",
              question: "JSON values can be:",
              options: [
                { id: "opt1", text: "A string, a number" },
                { id: "opt2", text: "An object, an array" },
                { id: "opt3", text: "true, false, null" },
                { id: "opt4", text: "All of the above" }
              ],
              correctAnswerId: "opt4",
              explanation: "JSON values can be strings, numbers, objects, arrays, booleans (true/false), or null."
            },
            {
              id: "json-basics-q12",
              question: "How do you parse a JSON string into a JavaScript object?",
              options: [
                { id: "opt1", text: "JSON.parse()" },
                { id: "opt2", text: "JSON.toObject()" },
                { id: "opt3", text: "JSON.convert()" },
                { id: "opt4", text: "JSON.decode()" }
              ],
              correctAnswerId: "opt1",
              explanation: "The `JSON.parse()` method parses a JSON string, constructing the JavaScript value or object described by the string."
            },
            {
              id: "json-basics-q13",
              question: "How do you convert a JavaScript object into a JSON string?",
              options: [
                { id: "opt1", text: "JSON.stringify()" },
                { id: "opt2", text: "JSON.toString()" },
                { id: "opt3", text: "JSON.encode()" },
                { id: "opt4", text: "JSON.toJSON()" }
              ],
              correctAnswerId: "opt1",
              explanation: "The `JSON.stringify()` method converts a JavaScript value to a JSON string."
            },
            {
              id: "json-basics-q14",
              question: "Which of the following JSON values is considered valid?",
              options: [
                { id: "opt1", text: "{ name: 'John' }" },
                { id: "opt2", text: "{ \"name\": 'John' }" },
                { id: "opt3", text: "{ \"name\": \"John\" }" },
                { id: "opt4", text: "{ \"name\": John }" }
              ],
              correctAnswerId: "opt3",
              explanation: "In valid JSON, both keys and string values must be enclosed in double quotes."
            },
            {
              id: "json-basics-q15",
              question: "Can JSON store functions?",
              options: [
                  { id: "opt1", text: "True" },
                  { id: "opt2", text: "False" },
              ],
              correctAnswerId: "opt2",
              explanation: "JSON cannot store functions. When you `stringify()` an object with a function, the function will be omitted."
            },
            {
              id: "json-basics-q16",
              question: "Is JSON a replacement for XML?",
              options: [
                { id: "opt1", text: "Yes, entirely" },
                { id: "opt2", text: "No, they serve different purposes" },
                { id: "opt3", text: "In many cases, it's a lighter alternative" },
                { id: "opt4", text: "Only for small data sets" }
              ],
              correctAnswerId: "opt3",
              explanation: "While not an entire replacement, JSON is often preferred over XML for web data exchange due to its lighter syntax and easier parsing in JavaScript."
            },
            {
              id: "json-basics-q17",
              question: "What is the MIME type for JSON?",
              options: [
                { id: "opt1", text: "application/json" },
                { id: "opt2", text: "text/json" },
                { id: "opt3", text: "application/javascript" },
                { id: "opt4", text: "text/plain" }
              ],
              correctAnswerId: "opt1",
              explanation: "The official MIME type for JSON is `application/json`."
            },
            {
              id: "json-basics-q18",
              question: "Can JSON values be boolean types?",
              options: [
                { id: "opt1", text: "Yes, `true` and `false`" },
                { id: "opt2", text: "No, only strings and numbers" },
                { id: "opt3", text: "Only `true`" },
                { id: "opt4", text: "Only `false`" }
              ],
              correctAnswerId: "opt1",
              explanation: "JSON supports boolean values `true` and `false`."
            },
            {
              id: "json-basics-q19",
              question: "When transmitting data, JSON is mostly compared to which other format?",
              options: [
                { id: "opt1", text: "HTML" },
                { id: "opt2", text: "CSS" },
                { id: "opt3", text: "XML" },
                { id: "opt4", text: "SQL" }
              ],
              correctAnswerId: "opt3",
              explanation: "JSON is frequently compared to XML for data interchange."
            },
            {
              id: "json-basics-q20",
              question: "Is the order of key-value pairs guaranteed in JSON objects?",
              options: [
                { id: "opt1", text: "Yes, always" },
                { id: "opt2", text: "No, not guaranteed" },
                { id: "opt3", text: "Only in specific implementations" },
                { id: "opt4", text: "Only for numeric keys" }
              ],
              correctAnswerId: "opt2",
              explanation: "The JSON specification does not guarantee the order of key-value pairs within an object. While some parsers might preserve it, you should not rely on it."
            },
            {
              id: "json-basics-q21",
              question: "Which of the following describes JSON arrays?",
              options: [
                { id: "opt1", text: "Ordered collections of values" },
                { id: "opt2", text: "Unordered collections of key-value pairs" },
                { id: "opt3", text: "Always contain elements of the same type" },
                { id: "opt4", text: "Can only contain objects" }
              ],
              correctAnswerId: "opt1",
              explanation: "JSON arrays are ordered collections of values. They can contain values of different types."
            },
            {
              id: "json-basics-q22",
              question: "What is the primary benefit of using JSON over XML for web APIs?",
              options: [
                { id: "opt1", text: "Better security" },
                { id: "opt2", text: "More human-readable" },
                { id: "opt3", text: "Smaller file size and easier parsing in JavaScript" },
                { id: "opt4", text: "Supports more complex data types" }
              ],
              correctAnswerId: "opt3",
              explanation: "JSON generally results in smaller data payloads and is natively supported and easily parsed in JavaScript, making it highly efficient for web APIs."
            },
            {
              id: "json-basics-q23",
              question: "Can JSON values be `undefined`?",
              options: [
                  { id: "opt1", text: "True" },
                  { id: "opt2", text: "False" },
              ],
              correctAnswerId: "opt2",
              explanation: "JSON does not support the `undefined` data type. If you `stringify()` an object containing `undefined` values, those keys will typically be omitted."
            },
            {
              id: "json-basics-q24",
              question: "What is the purpose of a JSON schema?",
              options: [
                { id: "opt1", text: "To compress JSON data" },
                { id: "opt2", text: "To encrypt JSON data" },
                { id: "opt3", text: "To validate the structure and content of JSON data" },
                { id: "opt4", text: "To convert JSON to XML" }
              ],
              correctAnswerId: "opt3",
              explanation: "JSON Schema is a vocabulary that allows you to annotate and validate JSON documents."
            },
            {
              id: "json-basics-q25",
              question: "Is `null` a valid data type in JSON?",
              options: [
                  { id: "opt1", text: "True" },
                  { id: "opt2", text: "False" },
              ],
              correctAnswerId: "opt1",
              explanation: "Yes, `null` is one of the primitive data types supported by JSON."
            },
            {
              id: "json-basics-q26",
              question: "Consider this JSON: `{\"age\": 30}`. What type is `30`?",
              options: [
                { id: "opt1", text: "string" },
                { id: "opt2", text: "number" },
                { id: "opt3", text: "boolean" },
                { id: "opt4", text: "object" }
              ],
              correctAnswerId: "opt2",
              explanation: "The value `30` is a JSON number."
            },
            {
              id: "json-basics-q27",
              question: "Which term best describes the relationship between JSON and JavaScript?",
              options: [
                { id: "opt1", text: "JSON is a subset of JavaScript's object literal syntax." },
                { id: "opt2", text: "JavaScript is a subset of JSON." },
                { id: "opt3", text: "They are completely unrelated." },
                { id: "opt4", text: "JSON is a programming language based on JavaScript." }
              ],
              correctAnswerId: "opt1",
              explanation: "JSON's syntax is derived from JavaScript object literal syntax, making it easy to parse for JavaScript engines."
            },
            {
              id: "json-basics-q28",
              question: "What does `JSON.parse('null')` return in JavaScript?",
              options: [
                { id: "opt1", text: "An empty object `{}`" },
                { id: "opt2", text: "The string 'null'" },
                { id: "opt3", text: "The JavaScript `null` value" },
                { id: "opt4", text: "An error" }
              ],
              correctAnswerId: "opt3",
              explanation: "`JSON.parse()` correctly converts the JSON `null` literal into the JavaScript `null` value."
            },
            {
              id: "json-basics-q29",
              question: "Can JSON directly contain executable code?",
              options: [
                  { id: "opt1", text: "True" },
                  { id: "opt2", text: "False" },
              ],
              correctAnswerId: "opt2",
              explanation: "JSON is a data interchange format and does not support executable code. It only represents data structures."
            },
            {
              id: "json-basics-q30",
              question: "In JSON, string values must be enclosed in:",
              options: [
                { id: "opt1", text: "Single quotes" },
                { id: "opt2", text: "Double quotes" },
                { id: "opt3", text: "Backticks" },
                { id: "opt4", text: "No quotes needed" }
              ],
              correctAnswerId: "opt2",
              explanation: "JSON requires string values to be enclosed in double quotes."
            }
    
  ],
      },
      {
        id: "js-asynchronous",
        name: "JS Asynchronous (Promises, async/await)",
        slug: "js-asynchronous",
        description:
          "A comprehensive quiz focusing on asynchronous JavaScript, covering Promises, async/await, and related concepts.",
        questions: [
              {
    id: "js-asynchronous-q1",
    question: "What is the initial state of a Promise when it is created?",
    options: [
      { id: "opt1", text: "Resolved" },
      { id: "opt2", text: "Rejected" },
      { id: "opt3", text: "Pending" },
      { id: "opt4", text: "Undefined" }
    ],
    correctAnswerId: "opt3",
    explanation: "A Promise starts in the 'pending' state."
  },
  {
    id: "js-asynchronous-q2",
    question: "How do you correctly create a new Promise?",
    options: [
      { id: "opt1", text: "Using new Promise with a callback function that takes resolve and reject" },
      { id: "opt2", text: "Using Promise.new" },
      { id: "opt3", text: "Using new Promise without parameters" },
      { id: "opt4", text: "Using Promise() only" }
    ],
    correctAnswerId: "opt1",
    explanation: "The correct syntax for creating a Promise is `new Promise((resolve, reject) => { ... })`."
  },
  {
    id: "js-asynchronous-q3",
    question: "What does resolve do in a Promise?",
    options: [
      { id: "opt1", text: "Returns a failure state" },
      { id: "opt2", text: "Returns a success state with a value" },
      { id: "opt3", text: "Cancels the operation" },
      { id: "opt4", text: "Starts the operation" }
    ],
    correctAnswerId: "opt2",
    explanation: "`resolve()` is called when the asynchronous operation successfully completes, providing a value."
  },
  {
    id: "js-asynchronous-q4",
    question: "How do you catch errors in a Promise?",
    options: [
      { id: "opt1", text: "Using .catch()" },
      { id: "opt2", text: "Using .then()" },
      { id: "opt3", text: "Using .finally()" },
      { id: "opt4", text: "Using try...catch only" }
    ],
    correctAnswerId: "opt1",
    explanation: "The `.catch()` method is specifically designed to handle rejected Promises."
  },
  {
    id: "js-asynchronous-q5",
    question: "Which feature converts Promise-based code into easier-to-read syntax?",
    options: [
      { id: "opt1", text: "async/await" },
      { id: "opt2", text: "callbacks" },
      { id: "opt3", text: "setTimeout" },
      { id: "opt4", text: "generator functions" }
    ],
    correctAnswerId: "opt1",
    explanation: "`async/await` syntax makes asynchronous code look and behave more like synchronous code, improving readability."
  },
  {
    id: "js-asynchronous-q6",
    question: "What does the await keyword do inside an async function?",
    options: [
      { id: "opt1", text: "Pauses execution until the Promise settles" },
      { id: "opt2", text: "Creates a new Promise" },
      { id: "opt3", text: "Rejects the Promise" },
      { id: "opt4", text: "Returns the result of a synchronous function" }
    ],
    correctAnswerId: "opt1",
    explanation: "The `await` keyword pauses the execution of its `async` function until the Promise it's waiting for settles (either fulfills or rejects)."
  },
  {
    id: "js-asynchronous-q7",
    question: "Can you use await outside of async functions?",
    options: [
      { id: "opt1", text: "Yes, everywhere" },
      { id: "opt2", text: "No, only inside async functions" },
      { id: "opt3", text: "Yes, only in the console" },
      { id: "opt4", text: "Yes, only in JSON files" }
    ],
    correctAnswerId: "opt2",
    explanation: "`await` is only valid inside an `async` function. Using it outside will cause a syntax error."
  },
  {
    id: "js-asynchronous-q8",
    question: "How do you wait for multiple Promises to complete at the same time?",
    options: [
      { id: "opt1", text: "Using Promise.all()" },
      { id: "opt2", text: "Using Promise.race()" },
      { id: "opt3", text: "Using Promise.resolve()" },
      { id: "opt4", text: "Using Promise.reject()" }
    ],
    correctAnswerId: "opt1",
    explanation: "`Promise.all()` takes an array of Promises and returns a single Promise that resolves when all of the input Promises have resolved."
  },
  {
    id: "js-asynchronous-q9",
    question: "What is the difference between Promise.all() and Promise.race()?",
    options: [
      { id: "opt1", text: "all waits for all Promises, race waits for the first to settle" },
      { id: "opt2", text: "all waits for the first, race waits for all" },
      { id: "opt3", text: "No difference" },
      { id: "opt4", text: "race only returns a new Promise" }
    ],
    correctAnswerId: "opt1",
    explanation: "`Promise.all()` waits for all Promises in the iterable to resolve, while `Promise.race()` waits for the first Promise in the iterable to settle (either fulfill or reject)."
  },
  {
    id: "js-asynchronous-q10",
    question: "How do you handle errors when using async/await?",
    options: [
      { id: "opt1", text: "Using try...catch" },
      { id: "opt2", text: "Using .catch() only" },
      { id: "opt3", text: "Cannot handle errors" },
      { id: "opt4", text: "Using throw only" }
    ],
    correctAnswerId: "opt1",
    explanation: "Errors in `async/await` functions are handled using traditional `try...catch` blocks, similar to synchronous code."
  },
  {
    id: "js-asynchronous-q11",
    question: "Which of the following is NOT a correct way to handle a Promise?",
    options: [
      { id: "opt1", text: ".then() and .catch()" },
      { id: "opt2", text: "async/await with try/catch" },
      { id: "opt3", text: "Using setTimeout only" },
      { id: "opt4", text: "Creating new Promises" }
    ],
    correctAnswerId: "opt3",
    explanation: "`setTimeout` is for scheduling a function to run after a delay, not for handling Promise states."
  },
  {
    id: "js-asynchronous-q12",
    question: "What is the purpose of .finally() in Promises?",
    options: [
      { id: "opt1", text: "Runs code after a Promise is settled, regardless of outcome" },
      { id: "opt2", text: "Runs code only on success" },
      { id: "opt3", text: "Runs code only on failure" },
      { id: "opt4", text: "Stops a Promise" }
    ],
    correctAnswerId: "opt1",
    explanation: "The `.finally()` method allows you to execute code whether the Promise fulfilled or rejected, useful for cleanup tasks."
  },
  {
    id: "js-asynchronous-q13",
    question: "What happens if you use an async function without await when calling a Promise?",
    options: [
      { id: "opt1", text: "Returns a Promise immediately without waiting" },
      { id: "opt2", text: "Returns the resolved value" },
      { id: "opt3", text: "Stops execution" },
      { id: "opt4", text: "Throws an error" }
    ],
    correctAnswerId: "opt1",
    explanation: "An `async` function always returns a Promise. If you don't `await` it, the code after the function call will execute immediately, and you'll get the Promise object itself."
  },
  {
    id: "js-asynchronous-q14",
    question: "How do you convert a callback-based function into a Promise?",
    options: [
      { id: "opt1", text: "Using new Promise and wrapping the callback" },
      { id: "opt2", text: "Using async only" },
      { id: "opt3", text: "Using .then() only" },
      { id: "opt4", text: "It cannot be converted" }
    ],
    correctAnswerId: "opt1",
    explanation: "You can 'promisify' a callback-based function by creating a new Promise and calling `resolve` or `reject` within the callback."
  },
  {
    id: "js-asynchronous-q15",
    question: "What does Promise.resolve() do?",
    options: [
      { id: "opt1", text: "Returns a Promise immediately resolved with a given value" },
      { id: "opt2", text: "Returns a rejected Promise" },
      { id: "opt3", text: "Creates a pending Promise" },
      { id: "opt4", text: "Only works inside async functions" }
    ],
    correctAnswerId: "opt1",
    explanation: "`Promise.resolve(value)` returns a Promise object that is resolved with the given value. If the value is a Promise, that Promise is returned."
  },
  {
    id: "js-asynchronous-q16",
    question: "What does Promise.reject() do?",
    options: [
      { id: "opt1", text: "Returns a rejected Promise with an error value" },
      { id: "opt2", text: "Returns a resolved Promise" },
      { id: "opt3", text: "Makes a Promise pending" },
      { id: "opt4", text: "Stops code execution" }
    ],
    correctAnswerId: "opt1",
    explanation: "`Promise.reject(reason)` returns a Promise object that is rejected with a given reason."
  },
  {
    id: "js-asynchronous-q17",
    question: "Which function handles all Promises in an array regardless of fulfillment or rejection?",
    options: [
      { id: "opt1", text: "Promise.allSettled()" },
      { id: "opt2", text: "Promise.all()" },
      { id: "opt3", text: "Promise.race()" },
      { id: "opt4", text: "Promise.any()" }
    ],
    correctAnswerId: "opt1",
    explanation: "`Promise.allSettled()` returns a Promise that resolves after all of the given Promises have either fulfilled or rejected, with an array of objects describing each Promise's outcome."
  },
  {
    id: "js-asynchronous-q18",
    question: "When do you use Promise.any()?",
    options: [
      { id: "opt1", text: "To get the first Promise that fulfills successfully" },
      { id: "opt2", text: "To get the first Promise rejected" },
      { id: "opt3", text: "To wait for all Promises" },
      { id: "opt4", text: "To cancel all Promises" }
    ],
    correctAnswerId: "opt1",
    explanation: "`Promise.any()` takes an iterable of Promises and returns a single Promise that resolves with the value of the first Promise in the iterable to fulfill. It rejects only if all of the Promises in the iterable reject."
  },
  {
    id: "js-asynchronous-q19",
    question: "How do you declare an async function in JavaScript?",
    options: [
      { id: "opt1", text: "Place async before function keyword" },
      { id: "opt2", text: "Place async after function keyword" },
      { id: "opt3", text: "Place async inside the function body" },
      { id: "opt4", text: "Async functions cannot be declared" }
    ],
    correctAnswerId: "opt1",
    explanation: "An `async` function is defined by placing the `async` keyword before the `function` keyword (or before the parameter list for arrow functions)."
  },
  {
    id: "js-asynchronous-q20",
    question: "How do you get a direct value from a Promise using async/await?",
    options: [
      { id: "opt1", text: "Using await" },
      { id: "opt2", text: "Using .then()" },
      { id: "opt3", text: "Using .catch()" },
      { id: "opt4", text: "Using .finally()" }
    ],
    correctAnswerId: "opt1",
    explanation: "Inside an `async` function, `await` allows you to directly get the resolved value of a Promise, as if it were a synchronous return."
  },
  {
    id: "js-asynchronous-q21",
    question: "What happens if you await a value that is not a Promise?",
    options: [
      { id: "opt1", text: "Returns the value directly" },
      { id: "opt2", text: "Returns a new Promise" },
      { id: "opt3", text: "Throws an error" },
      { id: "opt4", text: "Execution hangs" }
    ],
    correctAnswerId: "opt1",
    explanation: "If the awaited expression is not a Promise, the value is converted to a resolved Promise and its value is immediately returned."
  },
  {
    id: "js-asynchronous-q22",
    question: "What is the difference between synchronous and asynchronous execution?",
    options: [
      { id: "opt1", text: "Asynchronous allows code execution without waiting for previous code to finish" },
      { id: "opt2", text: "Synchronous allows code execution without waiting" },
      { id: "opt3", text: "Asynchronous is only sequential execution" },
      { id: "opt4", text: "Synchronous means delayed execution" }
    ],
    correctAnswerId: "opt1",
    explanation: "Asynchronous execution allows the program to continue running other code while a long-running operation (like a network request) is in progress, rather than blocking execution."
  },
  {
    id: "js-asynchronous-q23",
    question: "How do you handle an async function inside non-async code?",
    options: [
      { id: "opt1", text: "Using .then()" },
      { id: "opt2", text: "Using await directly" },
      { id: "opt3", text: "Cannot handle it" },
      { id: "opt4", text: "Convert async function to synchronous" }
    ],
    correctAnswerId: "opt1",
    explanation: "You call the `async` function and then use `.then()` and `.catch()` on the Promise it returns, just like any other Promise."
  },
  {
    id: "js-asynchronous-q24",
    question: "What is the difference between an async function and a regular function?",
    options: [
      { id: "opt1", text: "Async functions return a Promise implicitly" },
      { id: "opt2", text: "Async functions return nothing" },
      { id: "opt3", text: "Async functions stop executing immediately" },
      { id: "opt4", text: "No difference" }
    ],
    correctAnswerId: "opt1",
    explanation: "An `async` function always returns a Promise. If the function's return value is not explicitly a Promise, it will be implicitly wrapped in a resolved Promise."
  },
  {
    id: "js-asynchronous-q25",
    question: "Can you use await inside a non-async function?",
    options: [
      { id: "opt1", text: "No, it causes an error" },
      { id: "opt2", text: "Yes, it works fine" },
      { id: "opt3", text: "Yes, only in console" },
      { id: "opt4", text: "Only in modern browsers" }
    ],
    correctAnswerId: "opt1",
    explanation: "Using `await` outside of an `async` function (or top-level `await` in modules) results in a `SyntaxError`."
  },
  {
    id: "js-asynchronous-q26",
    question: "What happens if a Promise error is not handled?",
    options: [
      { id: "opt1", text: "Causes an uncaught promise rejection error" },
      { id: "opt2", text: "Ignores the error" },
      { id: "opt3", text: "Converts error to null" },
      { id: "opt4", text: "Stops the program" }
    ],
    correctAnswerId: "opt1",
    explanation: "An unhandled Promise rejection will typically cause an 'Uncaught (in promise)' error in the console and can potentially terminate Node.js processes."
  },
  {
    id: "js-asynchronous-q27",
    question: "How can you delay execution of some code using Promise?",
    options: [
      { id: "opt1", text: "Create a Promise that uses setTimeout inside" },
      { id: "opt2", text: "Use a built-in delay() function" },
      { id: "opt3", text: "Use async keyword only" },
      { id: "opt4", text: "You cannot delay using Promise" }
    ],
    correctAnswerId: "opt1",
    explanation: "A common pattern is to create a Promise that resolves after a `setTimeout` delay, allowing you to `await` this delay."
  },
  {
    id: "js-asynchronous-q28",
    question: "What is the difference between .then() and .catch()?",
    options: [
      { id: "opt1", text: ".then() handles success; .catch() handles errors" },
      { id: "opt2", text: "Both handle errors only" },
      { id: "opt3", text: "Both handle success only" },
      { id: "opt4", text: "No difference" }
    ],
    correctAnswerId: "opt1",
    explanation: "`.then()` is used to register callbacks for when a Promise fulfills, while `.catch()` is used to register callbacks for when a Promise rejects."
  },
  {
    id: "js-asynchronous-q29",
    question: "Which method returns a Promise resolved or rejected based on the first Promise settled in an array?",
    options: [
      { id: "opt1", text: "Promise.race()" },
      { id: "opt2", text: "Promise.all()" },
      { id: "opt3", text: "Promise.any()" },
      { id: "opt4", text: "Promise.allSettled()" }
    ],
    correctAnswerId: "opt1",
    explanation: "`Promise.race()` fulfills or rejects as soon as one of the Promises in the iterable fulfills or rejects, with the value or reason from that Promise."
  },
  {
    id: "js-asynchronous-q30",
    question: "How do you handle multiple async/await calls sequentially?",
    options: [
      { id: "opt1", text: "By chaining await calls inside a single async function" },
      { id: "opt2", text: "Using multiple separate async functions only" },
      { id: "opt3", text: "Using callbacks inside await" },
      { id: "opt4", text: "You cannot handle multiple async calls sequentially" }
    ],
    correctAnswerId: "opt1",
    explanation: "Inside an `async` function, you can simply use `await` for each Promise call one after another. Execution will pause for each `await` until the respective Promise settles."
  }
        ],
      },
      {
        id: "js-date-and-timers",
        name: "JS Date and Timers",
        slug: "js-date-and-timers",
        description:
          "A comprehensive quiz focusing on Date and Timers JavaScript, covering Date, Timers, and related concepts.",
        questions: [
       {
    id: "js-date-q1",
    question: "What keyword is used to create a new Date object in JavaScript?",
    options: [
      { id: "opt1", text: "currentDate()" },
      { id: "opt2", text: "makeDate()" },
      { id: "opt3", text: "new Date()" },
      { id: "opt4", text: "Date.create()" }
    ],
    correctAnswerId: "opt3",
    explanation: "The `new` operator is used with the `Date()` constructor to create a new Date object."
  },
  {
    id: "js-date-q2",
    question: "What does the `getDate()` method return when called on a Date object?",
    options: [
      { id: "opt1", text: "The day of the week (0-6)" },
      { id: "opt2", text: "The full year (YYYY)" },
      { id: "opt3", text: "The day of the month (1-31)" },
      { id: "opt4", text: "The month (0-11)" }
    ],
    correctAnswerId: "opt3",
    explanation: "The `getDate()` method returns the day of the month as an integer between 1 and 31."
  },
  {
    id: "js-date-q3",
    question: "What is the purpose of `setTimeout(function, delay)`?",
    options: [
      { id: "opt1", text: "To repeatedly execute a function after every specified interval." },
      { id: "opt2", text: "To pause the execution of a function." },
      { id: "opt3", text: "To execute a function once after a specified delay." },
      { id: "opt4", text: "To get the current time." }
    ],
    correctAnswerId: "opt3",
    explanation: "`setTimeout()` schedules a function to be executed only once after a specified delay in milliseconds."
  },
  {
    id: "js-date-q4",
    question: "How can you stop a `setTimeout` timer that is currently running?",
    options: [
      { id: "opt1", text: "clearInterval()" },
      { id: "opt2", text: "stopTimeout()" },
      { id: "opt3", text: "clearTimeout()" },
      { id: "opt4", text: "resetTimeout()" }
    ],
    correctAnswerId: "opt3",
    explanation: "`clearTimeout()` cancels a timer previously set up with `setTimeout()`."
  },
  {
    id: "js-date-q5",
    question: "What unit are delay values specified in for `setTimeout` and `setInterval`?",
    options: [
      { id: "opt1", text: "Seconds" },
      { id: "opt2", text: "Milliseconds" },
      { id: "opt3", text: "Minutes" },
      { id: "opt4", text: "Nanoseconds" }
    ],
    correctAnswerId: "opt2",
    explanation: "Delay values are specified in milliseconds (1000 milliseconds = 1 second)."
  },
  {
    id: "js-date-q6",
    question: "Which of the following methods returns the month (0-11) from a `Date` object?",
    options: [
      { id: "opt1", text: "getDate()" },
      { id: "opt2", text: "getMonth()" },
      { id: "opt3", text: "getYear()" },
      { id: "opt4", text: "getCalendarMonth()" }
    ],
    correctAnswerId: "opt2",
    explanation: "`getMonth()` returns the month as a zero-based integer (0 for January, 11 for December)."
  },
  {
    id: "js-date-q7",
    question: "What does the `getTime()` method return?",
    options: [
      { id: "opt1", text: "The current time in a string format." },
      { id: "opt2", text: "The number of milliseconds since January 1, 1970 UTC." },
      { id: "opt3", text: "The number of seconds since the Date object was created." },
      { id: "opt4", text: "A boolean indicating if the date is valid." }
    ],
    correctAnswerId: "opt2",
    explanation: "`getTime()` returns the number of milliseconds that have passed since the Unix Epoch (January 1, 1970, 00:00:00 UTC)."
  },
  {
    id: "js-date-q8",
    question: "What is the main difference between `setTimeout` and `setInterval`?",
    options: [
      { id: "opt1", text: "`setTimeout` is for repetition, `setInterval` is for one-time execution." },
      { id: "opt2", text: "`setTimeout` is faster than `setInterval`." },
      { id: "opt3", text: "`setTimeout` executes a function once, `setInterval` executes it repeatedly." },
      { id: "opt4", text: "`setInterval` can be stopped, `setTimeout` cannot." }
    ],
    correctAnswerId: "opt3",
    explanation: "`setTimeout()` executes a function once after a delay, while `setInterval()` repeatedly executes a function at fixed time intervals."
  },
  {
    id: "js-date-q9",
    question: "How do you get the current four-digit year (e.g., 2023) from a `Date` object?",
    options: [
      { id: "opt1", text: "getYear()" },
      { id: "opt2", text: "getFullYear()" },
      { id: "opt3", text: "getCentury()" },
      { id: "opt4", text: "getYearFull()" }
    ],
    correctAnswerId: "opt2",
    explanation: "`getFullYear()` returns the four-digit year."
  },
  {
    id: "js-date-q10",
    question: "Which of the following is NOT a valid way to create a new `Date` object?",
    options: [
      { id: "opt1", text: "new Date('2023-01-15')" },
      { id: "opt2", text: "new Date(2023, 0, 15)" },
      { id: "opt3", text: "Date.parseDate('January 15, 2023')" },
      { id: "opt4", text: "new Date(1673750400000)" }
    ],
    correctAnswerId: "opt3",
    explanation: "There is no `Date.parseDate()` method directly on the `Date` object in this form. `Date.parse()` can be used for parsing strings."
  },
  {
    id: "js-date-q11",
    question: "What is the first day of the week returned by the `getDay()` method in JavaScript?",
    options: [
      { id: "opt1", text: "Monday" },
      { id: "opt2", text: "Sunday" },
      { id: "opt3", text: "Saturday" },
      { id: "opt4", text: "Tuesday" }
    ],
    correctAnswerId: "opt2",
    explanation: "`getDay()` returns the day of the week as an integer (0 for Sunday, 1 for Monday, and so on)."
  },
  {
    id: "js-date-q12",
    question: "What does the value 0 mean when getting the month using `getMonth()`?",
    options: [
      { id: "opt1", text: "Invalid month" },
      { id: "opt2", text: "December" },
      { id: "opt3", text: "January" },
      { id: "opt4", text: "The current month" }
    ],
    correctAnswerId: "opt3",
    explanation: "`getMonth()` returns the month as a zero-based number, where 0 represents January."
  },
  {
    id: "js-date-q13",
    question: "What happens if `setInterval` is called with a non-existent function?",
    options: [
      { id: "opt1", text: "The browser will crash." },
      { id: "opt2", text: "It will keep running without executing anything." },
      { id: "opt3", text: "A `TypeError` or `ReferenceError` will be thrown." },
      { id: "opt4", text: "It will return `null`." }
    ],
    correctAnswerId: "opt3",
    explanation: "If the first argument to `setInterval` is not a function or refers to an undefined function, an error will be thrown when it tries to execute."
  },
  {
    id: "js-date-q14",
    question: "How do you get the time in a locale-sensitive, human-readable string format (e.g., '1:30:00 PM')?",
    options: [
      { id: "opt1", text: "toTimeString()" },
      { id: "opt2", text: "toLocaleTimeString()" },
      { id: "opt3", text: "getTimeString()" },
      { id: "opt4", text: "formatTime()" }
    ],
    correctAnswerId: "opt2",
    explanation: "`toLocaleTimeString()` returns the time portion of a Date object using a locale-sensitive format."
  },
  {
    id: "js-date-q15",
    question: "What does the `setFullYear(year, month, day)` method do?",
    options: [
      { id: "opt1", text: "Returns a new Date object." },
      { id: "opt2", text: "Sets only the year, leaving month and day unchanged." },
      { id: "opt3", text: "Sets the year, month, and day for an existing `Date` object." },
      { id: "opt4", text: "Converts the date to a numerical format." }
    ],
    correctAnswerId: "opt3",
    explanation: "`setFullYear()` sets the full year, month, and optionally the day of the month for a `Date` object, modifying it in place."
  },
  {
    id: "js-date-q16",
    question: "Which of the following `Date` methods will return the current day's name (e.g., 'Sunday')?",
    options: [
      { id: "opt1", text: "getDayName()" },
      { id: "opt2", text: "getWeekday()" },
      { id: "opt3", text: "toLocaleString('en-US', { weekday: 'long' })" },
      { id: "opt4", text: "getDay()" }
    ],
    correctAnswerId: "opt3",
    explanation: "`toLocaleString()` with appropriate options can return the full name of the weekday based on the locale."
  },
  {
    id: "js-date-q17",
    question: "What is the purpose of `Date.now()`?",
    options: [
      { id: "opt1", text: "To create a new Date object." },
      { id: "opt2", text: "To get the current time in seconds." },
      { id: "opt3", text: "To return the number of milliseconds since January 1, 1970 UTC (Epoch)." },
      { id: "opt4", text: "To freeze the current time." }
    ],
    correctAnswerId: "opt3",
    explanation: "`Date.now()` returns the current timestamp in milliseconds, which is equivalent to `new Date().getTime()` but without creating an actual `Date` object."
  },
  {
    id: "js-date-q18",
    question: "Which of the following methods will give the time-zone offset in minutes between local time and UTC?",
    options: [
      { id: "opt1", text: "getTimezoneOffset()" },
      { id: "opt2", text: "getUTCDifference()" },
      { id: "opt3", text: "getTimezone()" },
      { id: "opt4", text: "getOffset()" }
    ],
    correctAnswerId: "opt1",
    explanation: "`getTimezoneOffset()` returns the time-zone difference, in minutes, from UTC for the current locale."
  },
  {
    id: "js-date-q19",
    question: "What will be logged to the console after running this code?\n```javascript\nsetTimeout(() => console.log('Hello'), 0);\nconsole.log('World');\n```",
    options: [
      { id: "opt1", text: "Hello\nWorld" },
      { id: "opt2", text: "World\nHello" },
      { id: "opt3", text: "Only World" },
      { id: "opt4", text: "Error" }
    ],
    correctAnswerId: "opt2",
    explanation: "`console.log('World')` executes immediately (synchronously), while the `setTimeout` function is added to the event queue and executes after the synchronous code completes, even with a 0ms delay."
  },
  {
    id: "js-date-q20",
    question: "How do you create a `Date` object representing a specific date and time, like January 15, 2023, 10:30:00 AM?",
    options: [
      { id: "opt1", text: "new Date('2023/01/15 10:30:00')" },
      { id: "opt2", text: "Date.create(2023, 1, 15, 10, 30, 0)" },
      { id: "opt3", text: "new Date({year: 2023, month: 1, day: 15, hour: 10, minute: 30})" },
      { id: "opt4", text: "Date.fromComponents(2023, 1, 15, 10, 30, 0)" }
    ],
    correctAnswerId: "opt1",
    explanation: "A `Date` object can be created by passing a valid date/time string to the `Date()` constructor."
  },
  {
    id: "js-date-q21",
    question: "What happens if you don't clear an `setInterval` timer?",
    options: [
      { id: "opt1", text: "It will automatically stop after a certain number of repetitions." },
      { id: "opt2", text: "It will continue executing indefinitely or until the page is closed." },
      { id: "opt3", text: "It will turn into a `setTimeout` after the first execution." },
      { id: "opt4", text: "It will be stopped by the Garbage Collector." }
    ],
    correctAnswerId: "opt2",
    explanation: "Without a `clearInterval()` call, an `setInterval()` timer will continue to execute the specified function indefinitely."
  },
  {
    id: "js-date-q22",
    question: "Which of the following methods is used to set the minutes for a `Date` object?",
    options: [
      { id: "opt1", text: "setMinute()" },
      { id: "opt2", text: "setMinutes()" },
      { id: "opt3", text: "setUTCMinutes()" },
      { id: "opt4", text: "Both B and C" }
    ],
    correctAnswerId: "opt4",
    explanation: "`setMinutes()` sets the minutes according to local time, while `setUTCMinutes()` sets them according to UTC. Both are valid ways to set minutes."
  },
  {
    id: "js-date-q23",
    question: "How would you get the number of days in the current month using `Date` object methods (without external libraries)?",
    options: [
      { id: "opt1", text: "new Date().getDaysInMonth()" },
      { id: "opt2", text: "new Date(year, month + 1, 0).getDate()" },
      { id: "opt3", text: "new Date().getMonthDays()" },
      { id: "opt4", text: "Date.daysInMonth(month, year)" }
    ],
    correctAnswerId: "opt2",
    explanation: "You can get the last day of the current month by creating a new `Date` object for the 0th day of the *next* month. Its `getDate()` method will then return the number of days in the *current* month."
  },
  {
    id: "js-date-q24",
    question: "What is `performance.now()` primarily used for?",
    options: [
      { id: "opt1", text: "Getting the current date and time for display." },
      { id: "opt2", text: "Measuring high-resolution time, typically for performance benchmarking." },
      { id: "opt3", text: "Converting a timestamp to a readable date string." },
      { id: "opt4", text: "Scheduling functions with a delay." }
    ],
    correctAnswerId: "opt2",
    explanation: "`performance.now()` returns a `DOMHighResTimeStamp` representing the number of milliseconds elapsed since the time origin, useful for precise timing and benchmarking, as it's not subject to system clock adjustments."
  },
  {
    id: "js-date-q25",
    question: "Which method would you use to get the day of the week for a `Date` object, assuming Sunday is 0 and Saturday is 6?",
    options: [
      { id: "opt1", text: "getDay()" },
      { id: "opt2", text: "getWeekDay()" },
      { id: "opt3", text: "getUTCDay()" },
      { id: "opt4", text: "Both A and C are correct, depending on local or UTC time." }
    ],
    correctAnswerId: "opt4",
    explanation: "`getDay()` returns the day of the week for the local time, while `getUTCDay()` returns it for UTC. Both follow the Sunday=0 to Saturday=6 convention."
  }

        ],
      },
      {
        id: "js-storage",
        name: "JS Local & Session Storage",
        slug: "js-storage",
        description:
          "A comprehensive quiz focusing on Storage JavaScript, covering Local, Session, and related concepts.",
        questions: [
          {
    id: "js-storage-q1",
    question: "Which web storage object stores data with no expiration date, meaning data persists even after the browser is closed?",
    options: [
      { id: "opt1", text: "sessionStorage" },
      { id: "opt2", text: "localStorage" },
      { id: "opt3", text: "cookieStorage" },
      { id: "opt4", text: "webStorage" }
    ],
    correctAnswerId: "opt2",
    explanation: "`localStorage` stores data that has no expiration date and persists across browser sessions."
  },
  {
    id: "js-storage-q2",
    question: "Which web storage object stores data for the duration of a single browser session?",
    options: [
      { id: "opt1", text: "localStorage" },
      { id: "opt2", text: "sessionStorage" },
      { id: "opt3", text: "permanentStorage" },
      { id: "opt4", text: "tempStorage" }
    ],
    correctAnswerId: "opt2",
    explanation: "`sessionStorage` stores data for one session. The data is cleared when the browser tab/window is closed."
  },
  {
    id: "js-storage-q3",
    question: "Which method is used to store data in `localStorage` or `sessionStorage`?",
    options: [
      { id: "opt1", text: "saveItem(key, value)" },
      { id: "opt2", text: "addItem(key, value)" },
      { id: "opt3", text: "setItem(key, value)" },
      { id: "opt4", text: "store(key, value)" }
    ],
    correctAnswerId: "opt3",
    explanation: "The `setItem(key, value)` method is used to add a key-value pair to storage."
  },
  {
    id: "js-storage-q4",
    question: "Which method is used to retrieve data from `localStorage` or `sessionStorage`?",
    options: [
      { id: "opt1", text: "retrieveItem(key)" },
      { id: "opt2", text: "getItem(key)" },
      { id: "opt3", text: "fetchItem(key)" },
      { id: "opt4", text: "readItem(key)" }
    ],
    correctAnswerId: "opt2",
    explanation: "The `getItem(key)` method is used to retrieve the value associated with a specific key."
  },
  {
    id: "js-storage-q5",
    question: "By default, what data type are values stored as in `localStorage` and `sessionStorage`?",
    options: [
      { id: "opt1", text: "Objects" },
      { id: "opt2", text: "Numbers" },
      { id: "opt3", text: "Strings" },
      { id: "opt4", text: "Booleans" }
    ],
    correctAnswerId: "opt3",
    explanation: "Both `localStorage` and `sessionStorage` store data as strings. If you try to store other data types, they will be implicitly converted to strings."
  },
  {
    id: "js-storage-q6",
    question: "How do you remove a specific item from `localStorage`?",
    options: [
      { id: "opt1", text: "localStorage.deleteItem(key)" },
      { id: "opt2", text: "localStorage.removeItem(key)" },
      { id: "opt3", text: "localStorage.clearItem(key)" },
      { id: "opt4", text: "localStorage.remove(key)" }
    ],
    correctAnswerId: "opt2",
    explanation: "The `removeItem(key)` method removes the key-value pair with the given key from storage."
  },
  {
    id: "js-storage-q7",
    question: "How do you clear all items from `sessionStorage` for the current origin?",
    options: [
      { id: "opt1", text: "sessionStorage.removeAll()" },
      { id: "opt2", text: "sessionStorage.reset()" },
      { id: "opt3", text: "sessionStorage.clear()" },
      { id: "opt4", text: "sessionStorage.empty()" }
    ],
    correctAnswerId: "opt3",
    explanation: "The `clear()` method removes all key-value pairs from the storage for the current origin."
  },
  {
    id: "js-storage-q8",
    question: "What is the typical storage limit for `localStorage` and `sessionStorage`?",
    options: [
      { id: "opt1", text: "50 KB per origin" },
      { id: "opt2", text: "5 MB per origin" },
      { id: "opt3", text: "Unlimited" },
      { id: "opt4", text: "1 MB per item" }
    ],
    correctAnswerId: "opt2",
    explanation: "Most modern browsers allow around 5MB (or more) of data per origin for both `localStorage` and `sessionStorage`."
  },
  {
    id: "js-storage-q9",
    question: "Can data stored in `localStorage` by one tab be accessed by another tab from the same origin?",
    options: [
      { id: "opt1", text: "No, `localStorage` is tab-specific." },
      { id: "opt2", text: "Yes, `localStorage` is shared across all tabs/windows of the same origin." },
      { id: "opt3", text: "Only if the tabs are opened from the same parent window." },
      { id: "opt4", text: "Only if the user grants explicit permission." }
    ],
    correctAnswerId: "opt2",
    explanation: "`localStorage` data is shared across all browser tabs and windows from the same origin."
  },
  {
    id: "js-storage-q10",
    question: "Can data stored in `sessionStorage` by one tab be accessed by another tab from the same origin?",
    options: [
      { id: "opt1", text: "No, `sessionStorage` is strictly tab-specific." },
      { id: "opt2", text: "Yes, `sessionStorage` is shared across all tabs/windows of the same origin." },
      { id: "opt3", text: "Only if the tabs are opened simultaneously." },
      { id: "opt4", text: "Only for read operations." }
    ],
    correctAnswerId: "opt1",
    explanation: "`sessionStorage` is unique to each tab/window for a given origin. Data stored in one tab's `sessionStorage` cannot be accessed by another tab, even if they are from the same origin."
  },
  {
    id: "js-storage-q11",
    question: "To store a JavaScript object in `localStorage`, what must you do first?",
    options: [
      { id: "opt1", text: "Convert it to an Array." },
      { id: "opt2", text: "Convert it to a JSON string using `JSON.stringify()`." },
      { id: "opt3", text: "Break it down into individual string properties." },
      { id: "opt4", text: "It's not possible to store objects." }
    ],
    correctAnswerId: "opt2",
    explanation: "Since web storage only stores strings, objects must be serialized to a JSON string before storing, typically using `JSON.stringify()`."
  },
  {
    id: "js-storage-q12",
    question: "To retrieve a JavaScript object from `localStorage` that was stored as a JSON string, what must you do after `getItem()`?",
    options: [
      { id: "opt1", text: "Convert it to an Array using `Array.from()`." },
      { id: "opt2", text: "Convert it back to an object using `JSON.parse()`." },
      { id: "opt3", text: "Use `eval()` to execute the string." },
      { id: "opt4", text: "Nothing, it automatically becomes an object." }
    ],
    correctAnswerId: "opt2",
    explanation: "After retrieving the JSON string, it must be deserialized back into a JavaScript object using `JSON.parse()`."
  },
  {
    id: "js-storage-q13",
    question: "Which property of `localStorage` or `sessionStorage` returns the number of data items stored?",
    options: [
      { id: "opt1", text: "count" },
      { id: "opt2", text: "length" },
      { id: "opt3", text: "size" },
      { id: "opt4", text: "items" }
    ],
    correctAnswerId: "opt2",
    explanation: "The `length` property returns an integer representing the number of data items stored in the Storage object."
  },
  {
    id: "js-storage-q14",
    question: "What is the 'origin' in the context of Web Storage security?",
    options: [
      { id: "opt1", text: "The country where the website is hosted." },
      { id: "opt2", text: "The combination of protocol, hostname, and port number." },
      { id: "opt3", text: "The browser type (e.g., Chrome, Firefox)." },
      { id: "opt4", text: "The user's IP address." }
    ],
    correctAnswerId: "opt2",
    explanation: "Web Storage adheres to the same-origin policy, meaning data is isolated by the origin (protocol + hostname + port)."
  },
  {
    id: "js-storage-q15",
    question: "What happens if you try to store more data than the allowed limit in `localStorage`?",
    options: [
      { id: "opt1", text: "The oldest data is automatically deleted." },
      { id: "opt2", text: "A `QuotaExceededError` will be thrown." },
      { id: "opt3", text: "The data is silently truncated." },
      { id: "opt4", text: "The browser will prompt the user for more space." }
    ],
    correctAnswerId: "opt2",
    explanation: "If a storage operation would cause the `localStorage` limit to be exceeded, a `QuotaExceededError` exception is thrown."
  },
  {
    id: "js-storage-q16",
    question: "Which event fires on the `window` object when a storage area changes (e.g., `localStorage`) from another window of the same origin?",
    options: [
      { id: "opt1", text: "changeStorage" },
      { id: "opt2", text: "localStorageUpdate" },
      { id: "opt3", text: "storage" },
      { id: "opt4", text: "dataChange" }
    ],
    correctAnswerId: "opt3",
    explanation: "The `storage` event is dispatched on a `Window` object when a storage area (localStorage or sessionStorage) has been changed in the context of another document (e.g., another tab)."
  },
  {
    id: "js-storage-q17",
    question: "What is a key difference in use cases between `localStorage` and traditional HTTP cookies?",
    options: [
      { id: "opt1", text: "`localStorage` sends data with every HTTP request, cookies do not." },
      { id: "opt2", text: "Cookies have much larger storage limits than `localStorage`." },
      { id: "opt3", "text": "`localStorage` is only accessible via JavaScript, cookies can be sent with HTTP headers." },
      { id: "opt4", "text": "Cookies are designed for long-term storage, `localStorage` for temporary data." }
    ],
    correctAnswerId: "opt3",
    explanation: "A significant advantage of `localStorage` is that its data is not sent with every HTTP request, reducing network overhead, unlike cookies."
  },
  {
    id: "js-storage-q18",
    question: "Is Web Storage (localStorage and sessionStorage) inherently vulnerable to Cross-Site Scripting (XSS) attacks?",
    options: [
      { id: "opt1", text: "No, it's designed to be immune to XSS." },
      { id: "opt2", text: "Yes, if an attacker can inject JavaScript, they can access stored data." },
      { id: "opt3", text: "Only if the browser is outdated." },
      { id: "opt4", text: "Only if the user's antivirus is disabled." }
    ],
    correctAnswerId: "opt2",
    explanation: "If an XSS vulnerability exists on a website, an attacker can execute malicious JavaScript to steal or modify data stored in `localStorage` or `sessionStorage`."
  },
  {
    id: "js-storage-q19",
    question: "Which method allows you to get a key by its index from `localStorage` or `sessionStorage`?",
    options: [
      { id: "opt1", text: "keyByIndex(index)" },
      { id: "opt2", text: "getKey(index)" },
      { id: "opt3", text: "at(index)" },
      { id: "opt4", text: "key(index)" }
    ],
    correctAnswerId: "opt4",
    explanation: "The `key(index)` method returns the name of the key at the specified index."
  },
  {
    id: "js-storage-q20",
    question: "Consider an item `localStorage.setItem('user', JSON.stringify({ name: 'Alice' }));`. What is `localStorage.getItem('user')`?",
    options: [
      { id: "opt1", text: "{ name: 'Alice' }" },
      { id: "opt2", text: "A JavaScript object (automatically parsed)" },
      { id: "opt3", text: "The string `\"{\"name\":\"Alice\"}\"`" },
      { id: "opt4", text: "null" }
    ],
    correctAnswerId: "opt3",
    explanation: "`getItem()` always returns the value as a string. To get the object, you'd need `JSON.parse()`."
  },
  {
    id: "js-storage-q21",
    question: "If a user opens a new tab and navigates to the same website, will data from `sessionStorage` persist?",
    options: [
      { id: "opt1", text: "Yes, always." },
      { id: "opt2", text: "No, `sessionStorage` is unique per tab." },
      { id: "opt3", text: "Only if the new tab is opened via `window.open()` from the original tab." },
      { id: "opt4", text: "It depends on the browser's incognito mode." }
    ],
    correctAnswerId: "opt2",
    explanation: "`sessionStorage` data is bound to the lifespan of the specific browser tab or window in which it was created. Opening a new tab, even to the same URL, starts a new session for that tab."
  },
  {
    id: "js-storage-q22",
    question: "For what kind of data is `localStorage` generally more suitable than `sessionStorage`?",
    options: [
      { id: "opt1", text: "Temporary form data that should clear on refresh." },
      { id: "opt2", text: "User's shopping cart items that reset when the tab is closed." },
      { id: "opt3", text: "User preferences like theme selection or display settings." },
      { id: "opt4", text: "Sensitive user authentication tokens (generally better with HttpOnly cookies)." }
    ],
    correctAnswerId: "opt3",
    explanation: "`localStorage` is ideal for persistent user preferences or client-side caching of static data that needs to survive browser restarts."
  },
  {
    id: "js-storage-q23",
    question: "What happens to `sessionStorage` data if the user simply reloads the current page (without closing the tab)?",
    options: [
      { id: "opt1", text: "It is cleared." },
      { id: "opt2", text: "It persists." },
      { id: "opt3", text: "It is converted to `localStorage`." },
      { id: "opt4", text: "An error occurs." }
    ],
    correctAnswerId: "opt2",
    explanation: "`sessionStorage` data persists through page reloads within the same tab, but not across tab closures or new tab openings."
  },
  {
    id: "js-storage-q24",
    question: "Which of the following is true about the accessibility of `localStorage` from different domains?",
    options: [
      { id: "opt1", text: "Data is shared between all domains for easier integration." },
      { id: "opt2", text: "Data can only be accessed by the domain that set it, due to the Same-Origin Policy." },
      { id: "opt3", text: "Access is allowed only if they share the same TLD (Top-Level Domain)." },
      { id: "opt4", text: "It's possible with a Cross-Origin Resource Sharing (CORS) header." }
    ],
    correctAnswerId: "opt2",
    explanation: "Web Storage is strictly bound by the Same-Origin Policy. A webpage from `example.com` cannot access data stored by `another-domain.com`."
  },
  {
    id: "js-storage-q25",
    question: "If `localStorage.setItem('count', 0);` is executed, and then `localStorage.getItem('count');` is called, what will be returned?",
    options: [
      { id: "opt1", text: "The number 0" },
      { id: "opt2", text: "The string \"0\"" },
      { id: "opt3", text: "null" },
      { id: "opt4", text: "undefined" }
    ],
    correctAnswerId: "opt2",
    explanation: "All values are stored and retrieved as strings. The number `0` is implicitly converted to the string `\"0\"` when `setItem` is called, and `getItem` retrieves it as a string."
  }

        ],
      },
      {
        id: "js-es6",
        name: "Modern JavaScript ES6+",
        slug: "js-es6",
        description:
          "A comprehensive quiz focusing on Modern JavaScript ES6+ and related concepts.",
        questions: [
          {
    id: "js-es6-q1",
    question: "What is the primary difference between `let` and `var` for variable declaration?",
    options: [
      { id: "opt1", text: "`let` is hoisted, `var` is not." },
      { id: "opt2", text: "`var` is block-scoped, `let` is function-scoped." },
      { id: "opt3", text: "`let` is block-scoped, `var` is function-scoped." },
      { id: "opt4", text: "`let` can be redeclared, `var` cannot." }
    ],
    correctAnswerId: "opt3",
    explanation: "`let` declarations are block-scoped, meaning they are only accessible within the block they are defined in. `var` declarations are function-scoped or globally scoped."
  },
  {
    id: "js-es6-q2",
    question: "Which keyword is used to declare a constant variable that cannot be reassigned after its initial assignment?",
    options: [
      { id: "opt1", text: "`var`" },
      { id: "opt2", text: "`let`" },
      { id: "opt3", text: "`const`" },
      { id: "opt4", text: "`static`" }
    ],
    correctAnswerId: "opt3",
    explanation: "`const` is used for constant declarations. A `const` variable must be initialized when declared and cannot be reassigned."
  },
  {
    id: "js-es6-q3",
    question: "What is a key benefit of using Arrow Functions (`=>`) compared to traditional function expressions?",
    options: [
      { id: "opt1", text: "They can be hoisted." },
      { id: "opt2", text: "They always have their own `this` binding." },
      { id: "opt3", text: "They implicitly return `undefined`." },
      { id: "opt4", text: "They lexically bind `this` (inherit `this` from the enclosing context)." }
    ],
    correctAnswerId: "opt4",
    explanation: "Arrow functions do not have their own `this` context. Instead, they inherit `this` from the enclosing lexical (parent) scope, which is often a desired behavior."
  },
  {
    id: "js-es6-q4",
    question: "How do you define a class in ES6 JavaScript?",
    options: [
      { id: "opt1", text: "function MyClass() {}" },
      { id: "opt2", text: "var MyClass = {};" },
      { id: "opt3", text: "class MyClass {}" },
      { id: "opt4", text: "MyClass = new Class();" }
    ],
    correctAnswerId: "opt3",
    explanation: "The `class` keyword provides a syntactic sugar for creating constructor functions and prototype-based inheritance."
  },
  {
    id: "js-es6-q5",
    question: "Which feature allows you to extract values from arrays or properties from objects into distinct variables?",
    options: [
      { id: "opt1", text: "Concatenation" },
      { id: "opt2", text: "Inheritance" },
      { id: "opt3", text: "Destructuring Assignment" },
      { id: "opt4", text: "Type Coercion" }
    ],
    correctAnswerId: "opt3",
    explanation: "Destructuring assignment allows you to unpack values from arrays, or properties from objects, into distinct variables."
  },
  {
    id: "js-es6-q6",
    question: "What is the syntax for a template literal that allows embedded expressions?",
    options: [
      { id: "opt1", text: "'String concatenation'" },
      { id: "opt2", text: "\"String with variables\"" },
      { id: "opt3", text: "`String with ${expression}`" },
      { id: "opt4", text: "[String with {expression}]" }
    ],
    correctAnswerId: "opt3",
    explanation: "Template literals are enclosed by backticks (`` ` ``) and allow expressions to be embedded using the `${expression}` syntax."
  },
  {
    id: "js-es6-q7",
    question: "Which operator is used to 'spread' elements of an iterable (like an array) into another array or function call arguments?",
    options: [
      { id: "opt1", text: "..." },
      { id: "opt2", text: "**" },
      { id: "opt3", text: "&&" },
      { id: "opt4", text: "||" }
    ],
    correctAnswerId: "opt1",
    explanation: "The spread syntax (`...`) allows an iterable (like an array or string) to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected."
  },
  {
    id: "js-es6-q8",
    question: "What does the `for...of` loop iterate over?",
    options: [
      { id: "opt1", text: "Object properties (keys)" },
      { id: "opt2", text: "Object values" },
      { id: "opt3", text: "Iterable objects (like Arrays, Strings, Maps, Sets)" },
      { id: "opt4", text: "Non-iterable objects only" }
    ],
    correctAnswerId: "opt3",
    explanation: "The `for...of` statement creates a loop iterating over iterable objects, including: `Array`, `String`, `Map`, `Set`, `NodeList`, etc."
  },
  {
    id: "js-es6-q9",
    question: "Which of these is an example of a default parameter in a function?",
    options: [
      { id: "opt1", text: "function greet(name = 'Guest') {}" },
      { id: "opt2", text: "function greet(name || 'Guest') {}" },
      { id: "opt3", text: "function greet(name, default = 'Guest') {}" },
      { id: "opt4", text: "function greet(name: 'Guest') {}" }
    ],
    correctAnswerId: "opt1",
    explanation: "Default parameters allow formal parameters to be initialized with a default value if no value or `undefined` is passed."
  },
  {
    id: "js-es6-q10",
    question: "What is a major advantage of JavaScript Modules (`import`/`export`)?",
    options: [
      { id: "opt1", text: "They allow global variable declaration." },
      { id: "opt2", text: "They create a global namespace to avoid conflicts." },
      { id: "opt3", text: "They provide better code organization, reusability, and prevent global scope pollution." },
      { id: "opt4", text: "They run code synchronously without blocking." }
    ],
    correctAnswerId: "opt3",
    explanation: "Modules allow you to break your code into separate files, making it more organized, reusable, and preventing variable name collisions in the global scope."
  },
  {
    id: "js-es6-q11",
    question: "What does the `async` keyword do when placed before a function declaration?",
    options: [
      { id: "opt1", text: "Makes the function run synchronously." },
      { id: "opt2", text: "Makes the function return a Promise implicitly." },
      { id: "opt3", text: "Allows the function to be called only with `new`." },
      { id: "opt4", text: "Throws an error if `await` is not used inside." }
    ],
    correctAnswerId: "opt2",
    explanation: "An `async` function implicitly returns a Promise. If the function's return value is not explicitly a Promise, it will be wrapped in a resolved Promise."
  },
  {
    id: "js-es6-q12",
    question: "Which operator provides a concise way to conditionally access a property or call a method if an object is not null or undefined?",
    options: [
      { id: "opt1", text: "!!" },
      { id: "opt2", text: "?." },
      { id: "opt3", text: "||" },
      { id: "opt4", text: "&&" }
    ],
    correctAnswerId: "opt2",
    explanation: "Optional chaining (`?.`) allows you to read the value of a property located deep within a chain of connected objects without having to expressly validate that each reference in the chain is valid."
  },
  {
    id: "js-es6-q13",
    question: "What is the purpose of the Nullish Coalescing operator (`??`)?",
    options: [
      { id: "opt1", text: "Returns the right-hand operand if the left-hand operand is falsy (e.g., 0, '', null, undefined)." },
      { id: "opt2", text: "Returns the right-hand operand only if the left-hand operand is `null` or `undefined`." },
      { id: "opt3", text: "Performs strict equality comparison." },
      { id: "opt4", text: "Assigns a default value to a variable." }
    ],
    correctAnswerId: "opt2",
    explanation: "The nullish coalescing operator (`??`) returns its right-hand operand when its left-hand operand is `null` or `undefined`, and otherwise returns its left-hand operand. This is different from `||`, which returns the right-hand operand for any falsy value."
  },
  {
    id: "js-es6-q14",
    question: "Which of these is an example of an Enhanced Object Literal (shorthand property names)?",
    options: [
      { id: "opt1", text: "let a = 1; let obj = { a: a };" },
      { id: "opt2", text: "let a = 1; let obj = { a };" },
      { id: "opt3", text: "let a = 1; let obj = { 'a': a };" },
      { id: "opt4", text: "let a = 1; let obj = { a = 1 };" }
    ],
    correctAnswerId: "opt2",
    explanation: "Enhanced object literals allow using a variable name as a property name if the property name is the same as the variable name, e.g., `{ a }` is shorthand for `{ a: a }`."
  },
  {
    id: "js-es6-q15",
    question: "What type of value can a `Set` object store?",
    options: [
      { id: "opt1", text: "Only numbers" },
      { id: "opt2", text: "Only strings" },
      { id: "opt3", text: "Only unique values of any type" },
      { id: "opt4", text: "Key-value pairs" }
    ],
    correctAnswerId: "opt3",
    explanation: "A `Set` object lets you store unique values of any type, whether primitive values or object references."
  },
  {
    id: "js-es6-q16",
    question: "Which method is used to add an element to a `Set`?",
    options: [
      { id: "opt1", text: "push()" },
      { id: "opt2", text: "add()" },
      { id: "opt3", text: "insert()" },
      { id: "opt4", text: "setItem()" }
    ],
    correctAnswerId: "opt2",
    explanation: "The `add()` method is used to append a new element with a specified value to a `Set` object."
  },
  {
    id: "js-es6-q17",
    question: "What is a `Map` object used for?",
    options: [
      { id: "opt1", text: "Storing ordered lists of values." },
      { id: "opt2", text: "Storing key-value pairs where keys can be any data type." },
      { id: "opt3", text: "Storing unique values only." },
      { id: "opt4", text: "Representing mathematical sets." }
    ],
    correctAnswerId: "opt2",
    explanation: "A `Map` object holds key-value pairs and remembers the original insertion order of the keys. Any value (objects and primitive values) may be used as either a key or a value."
  },
  {
    id: "js-es6-q18",
    question: "How do you add a key-value pair to a `Map` object?",
    options: [
      { id: "opt1", text: "map.add(key, value)" },
      { id: "opt2", text: "map.put(key, value)" },
      { id: "opt3", text: "map.set(key, value)" },
      { id: "opt4", text: "map[key] = value" }
    ],
    correctAnswerId: "opt3",
    explanation: "The `set()` method adds a new element with a specified `key` and `value` to a `Map` object."
  },
  {
    id: "js-es6-q19",
    question: "Which built-in object represents a fixed-size raw binary data buffer?",
    options: [
      { id: "opt1", text: "ArrayBuffer" },
      { id: "opt2", text: "DataView" },
      { id: "opt3", text: "Blob" },
      { id: "opt4", text: "File" }
    ],
    correctAnswerId: "opt1",
    explanation: "`ArrayBuffer` is a low-level representation of a generic, fixed-length raw binary data buffer. It's often used with `TypedArray` views."
  },
  {
    id: "js-es6-q20",
    question: "What does `class extends` keyword combination achieve?",
    options: [
      { id: "opt1", text: "Multiple inheritance" },
      { id: "opt2", text: "Class composition" },
      { id: "opt3", text: "Prototypal inheritance for classes" },
      { id: "opt4", text: "Interface implementation" }
    ],
    correctAnswerId: "opt3",
    explanation: "The `extends` keyword is used in class declarations or class expressions to create a class that is a child of another class (inheritance in a prototypal sense)."
  },
  {
    id: "js-es6-q21",
    question: "What is the primary use case for the `rest` parameter syntax (`...args`) in a function signature?",
    options: [
      { id: "opt1", text: "To spread array elements into individual arguments." },
      { id: "opt2", text: "To collect an indefinite number of arguments into an array." },
      { id: "opt3", text: "To copy all properties from one object to another." },
      { id: "opt4", text: "To define default values for parameters." }
    ],
    correctAnswerId: "opt2",
    explanation: "The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, making it easier to work with variadic functions."
  },
  {
    id: "js-es6-q22",
    question: "Which method is used to iterate over the key-value pairs of a `Map` object?",
    options: [
      { id: "opt1", text: "map.forEach()" },
      { id: "opt2", text: "map.keys()" },
      { id: "opt3", text: "map.values()" },
      { id: "opt4", text: "map.entries()" }
    ],
    correctAnswerId: "opt1",
    explanation: "The `forEach()` method can iterate over all entries in insertion order. `map.entries()` returns an iterator for `[key, value]` pairs."
  },
  {
    id: "js-es6-q23",
    question: "What is the purpose of the `Symbol` primitive data type?",
    options: [
      { id: "opt1", text: "To define unique string identifiers for object properties." },
      { id: "opt2", text: "To create immutable values that cannot be changed." },
      { id: "opt3", text: "To represent very large integers." },
      { id: "opt4", text: "To define private class fields." }
    ],
    correctAnswerId: "opt1",
    explanation: "`Symbol` is a unique and immutable data type that may be used as the key of an object property. It's often used to create unique property keys that won't clash with other property names."
  },
  {
    id: "js-es6-q24",
    question: "Consider `const [a, b] = [1, 2, 3];`. What will be the value of `b`?",
    options: [
      { id: "opt1", text: "1" },
      { id: "opt2", text: "2" },
      { id: "opt3", text: "3" },
      { id: "opt4", text: "undefined" }
    ],
    correctAnswerId: "opt2",
    explanation: "This is array destructuring. `a` will be `1` and `b` will be `2`. The value `3` will be ignored as there's no corresponding variable."
  },
  {
    id: "js-es6-q25",
    question: "What does `BigInt` allow JavaScript to handle?",
    options: [
      { id: "opt1", text: "Very large floating-point numbers." },
      { id: "opt2", text: "Integers larger than `2^53 - 1`." },
      { id: "opt3", text: "Numbers with infinite precision." },
      { id: "opt4", text: "Numbers that are not `NaN` or `Infinity`." }
    ],
    correctAnswerId: "opt2",
    explanation: "`BigInt` is a new primitive type in JavaScript that can represent integers with arbitrary precision. This means it can safely store and operate on integers larger than `Number.MAX_SAFE_INTEGER` (`2^53 - 1`)."
  }

        ],
      },

      // Add more topics as needed
    ]
  }
];


