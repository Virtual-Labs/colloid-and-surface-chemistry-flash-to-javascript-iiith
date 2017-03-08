# Colloid-Surface-Chemisry-Flash-to-Javascript-lab
#### Problem statement
Conversion of experiments in Colloid-Surface-Chemisry lab from flash to JavaScript.

#### Introduction
The most interactive multimedia on the Web, which is in use is [Flash](#glossary). Flash offers the webmaster a single platform to create content that will be seen by the majority of Web site users, and that everyone who sees Flash will be able to interact with it in exactly the same way. However, there are some arguments against Flash, and many webmasters choose to use Flash in only limited pockets within their site. Hence creating similar experiences in JavaScript, we can avoid many of the problems inherent in Flash.

#### Motivation
###### Problems with Flash

* Accessibility : One of the major problems with Flash is that it presents difficulties for many people with disabilities. For some the issues are in translation from Flash to the screen reader. For others the big problem is the lack of keyboard navigation options in most Flash animations. For those who cannot use a mouse, an animation that requires mouse clicks is of no use.

* Search Engine Friendliness : The next major problem is Flash doesn't work well with all search engines. While there are capabilities within search engines to index Flash, they do it poorly. The Macromedia Flash Search Engine SDK has been around for years, but you're unlikely to see any Flash-only Web site show up properly in a free search engine. 

* Poor degradation : The next major issue for Flash is it doesn't fail well. When a Web application is said to degrade well, it means that even if an end user doesn't have the latest and the greatest software, they'll still have some content, and will be able to interact at some level with your application. Unfortunately, if a user doesn't have Flash at all, or if they don't have the right version of Flash, they'll get nothing.

###### Using JavaScript

These days, you can use JavaScript libraries that work fantastically across almost all platforms, and with a little thought you can ensure that you're still presenting usable content to users who don't have JavaScript enabled. Consider, for instance, the heavy use of JavaScript in sites like Google Maps. They work well for almost everyone as-is, and the lower-featured HTML-only versions work if JavaScript isn't working. Here there are no holes, no plugin suggestions, just a site that works.

With JavaScript and CSS, you can write accessibility into the site from the beginning. For any mouse-driven action, you can create a keyboard equivalent with as little as a single line added to your code. Of course, it's important to add ALT tags to images whenever they have bearing on the usability of the page. You can set the tab order of the elements in your page so a mouse-less user can navigate in a logical way based on the flow of information rather than the default order in the browser. CSS even includes standards for telling screen readers what voices to use, these can be added to your definitions for bolded text or headers, giving a customized experience similar to the one that sighted users receive.

Another advantage of JavaScript is that the code to make an animation flutter across the entire screen is no bigger than one that flutters across a small section of the screen. The complexity of the actual animation and the size of any image files used in your animation will determine its memory usage, not the size onscreen. All the while, all the text and links will be 100% indexable by the search engines because they're available in plain text to read.


##### Steps followed in the conversion.

* Get the [SWF files](#glossary) of the flash experiment which needs to be converted to JavaScript from github.

* Using [JPEXS free Flash Decompiler](https://www.free-decompiler.com/flash/download/) extract all the components of the experiment.
  **Steps to install and run JPEXS free Flash decompiler:
  - First you need to install the latest version of java on your machine.
  - Second install decompiler from the above link.
  - Third go to the directory where the decompiler is installed.
    - cd /home/ffdec_9.0.0
  - Fourth run the command in the terminal as below to open the decompiler.
    - ./ffdec.sh
  - Fifth open the .swf files from the decompiler from the open icon which is to the top left in the decompiler to extract all the components of the flash file.
  - Sixth export all the components in your machine by using the "Extact all the components" icon given in the decompiler.

* Identify the components which together form images required.

* Combine these images using photoshop or any other photo editors available. Make sure all images are in PNG format.

* Used the extracted images in html code to develop the simulations UI.

* Model view controller design pattern is used for implementing the functionality of the experiment.
  
  Model View Controller:
  Model–view–controller (MVC) is a software design pattern for implementing user interfaces on computers. It divides a given application into three interconnected parts in order to separate internal representations of information from the ways that information is presented to and accepted from the user.[1][2] The MVC design pattern decouples these major components allowing for efficient code reuse and parallel development.

  Model - The domain-specific representation of the information on which the application operates. The model is another name for the domain layer. Domain logic adds meaning to raw data (e.g., calculating if today is the user’s birthday, or the totals, taxes and shipping charges for shopping cart items).
  View - Renders the model into a form suitable for interaction, typically a user interface element. MVC is often seen in web applications, where the view is the HTML page and the code which gathers dynamic data for the page.
  Controller - Processes and responds to events, typically user actions, and invokes changes on the model and perhaps the view.


  Advantages:
    Simultaneous Development - Multiple developers can work simultaneously on the model, controller and views.
    High Cohesion - MVC enables logical grouping of related actions on a controller together. The views for a specific model are also grouped together.
    Low Coupling - The very nature of the MVC framework is such that there is low coupling among models, views or controllers
    Ease of modification - Because of the separation of responsibilities, future development or modification is easier
    Multiple views for a model - Models can have multiple views

* For other kind of animations like pouring liquid from one apparatus to other, checkout the [sprite sheets](http://kwiksher.com/tutorials_kwik/tutorial-sprites/) obtained after extraction of SWF files and identify the animations needed. Convert the [svg](#glossary) images of that sprite sheet to png images using [online convertors](http://image.online-convert.com/convert-to-png) available. Then change these images continously to obtain the required animations.

##### Additional scripts necessary 

* [jQuery](https://jquery.com/) for HTML document traversal and manipulation, event handling, animation, and Ajax.

* [Bootstrap](http://getbootstrap.com/) to make front-end web development faster and easier. It helps in dividing web page into various rows and columns.

* CSS3 is used for the smoother animation transitions.

#### Opportuniies for Improvements 

* Lab is not responsive.

* Since many images are used in these experiments, page takes time to load on certain machines. So in order to take care of performance factor, sprites can be used, to reduce the number of http requests for group of images. 

#### References
* [http://www.w3schools.com/](http://www.w3schools.com/) for basic HTML CSS and JavaScript.
* [http://stackoverflow.com/](http://stackoverflow.com/) for certain difficulties faced during the development.

#### Glossary

* Flash : [Adobe Flash](http://www.adobe.com/products/flashplayer.html) (formerly called Macromedia Flash and Shockwave Flash) is a multimedia software platform used for production of animations, browser games, rich Internet applications, desktop applications, mobile applications and mobile games.

* SWF file format : SWF is a file extension for a Shockwave Flash file format created by Macromedia and now owned by Adobe. SWF stands for Small Web Format. It consists of video and vector based animations. These can be viewed on web browsers only using Flash plug in. It is derived from FLA file.

* FLA file format : An FLA file is an editable video or animation project created with Adobe Flash. It is often saved as a .SWF file for use on the web.

* Flash Decompilor : Flash Decompiler is a SWF to FLA converter, which will help you decompile Flash movies, convert SWF elements into multiple formats and edit SWF files (texts, hyperlinks and more) on the go without Adobe Flash installed. Moreover, you will be able to extract all elements from SWF files and save them to your hard drive in various formats. Flash Decompiler doesn't decompile Captivate projectors (EXE), projectors created outside of Adobe Flash.

* SVG file format : Scalable Vector Graphics (SVG) is an XML-based vector image format for two-dimensional graphics with support for interactivity and animation. 


#### Conclusion
Inspite of Flash being a popular interactive media platform for building web pages, it needs to be converted to JavaScript inorder to make it Free and open-source. Currently the tools available for conversion are not sophisticated enough to convert more complex animations involved in the experiments. Hence for time being conversion using pure Javascript and HTML5 is the best option though it is not the efficient method. 
