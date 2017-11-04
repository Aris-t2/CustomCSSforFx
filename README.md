<h1>Instructions / Howto / Readme</h1></br>
<h2>WebExtensions can not modify browsers appearance in Firefox 57+</h2></br>
The only way to modify ui is adding custom CSS code to <b>userChrome.css</b> and <b>userContent.css</b> files inside browsers profile folder.</br>
Keep in mind CSS code can not create entirely new items, buttons or toolbars. It only can modify already present ui items.</br>
</br>
<h2>Want to support me?</h2></br>
<b><a href=https://www.paypal.me/tkpay>[ Paypal Me ]</a></b></br>
</br>
<h2>Where to find Firefox profile folder and what is the correct location for user styles?</h2></br>
<b>1.</b> Find your profile folder ('profile names are different for everyone').</br>
</br>
<b>All OS</b></br>
<code>about:support > Profile Folder > Open Folder</code></br>
</br>
or</br>
</br>
<b>Windows</b></br>
<code>C:\Users\ USERNAME \AppData\Roaming\Mozilla\Firefox\Profiles\ PROFILENAME \ </code></br>
</br>
You have to make hidden files visible to see "AppData" folder or open "%APPDATA%\Mozilla\Firefox\Profiles\" from explorers location bar.</br>
</br>
<b>Linux</b></br>
<code>\.mozilla\firefox\ PROFILENAME \ </code></br>
You have to make hidden files visible to see ".mozilla" folder.</br>
</br>
<b>Mac OS X</b></br>
<code>~\Library\Mozilla\Firefox\Profiles\ PROFILENAME \ </code> or</br>
<code>~\Library\Application Support\Mozilla\Firefox\Profiles\ PROFILENAME \ </code></br>
</br>
<b>2.</b> User styles belong into "chrome" subolder. Create it, if there is none yet.</br>
<code>\ PROFILENAME \chrome\ </code></br>
</br>
<b>3.</b> Copy userChrome.css, userContent.css and subfolders into \chrome\ subfolder.</br>
</br>
<h2>How to use custom user styles?</h2></br>
The <i>userChrome.css</i> and <i>userContent.css</i> files works like an options\configurations file. All main "features" can be enabled and disabled there.</br>
Edit <i>userChrome.css</i> and <i>userContent.css</i> with any text editor (<b><a href=https://notepad-plus-plus.org/download/>Notepad++</a></b> recommended on Windows) and enable btw. disable any feature you like by modifying, removing or outcommenting available "@import..." strings.</br>
Restart browser after every change for changes to take effect.</br>
</br>
<b>Example</b></br>
If you <u>want</u> "classic button appearance" for navigation toolbar buttons, the corresponding line has to look like this:</br>
<code>@import url(./css/buttons/buttons_on_navbar_classic_appearance.css);</code></br>
</br>
If you <u>do not want</u> "classic button appearance" for navigation toolbar buttons, the corresponding line has to look like this:</br>
<code>/* @import url(./css/buttons/buttons_on_navbar_classic_appearance.css); */</code></br>
</br>
Note</br>
<code>/* Code between this lines start and end symbols will be "ignored" btw. "outcommented" */</code></br>
</br>
<h2>How to find ids and attributes?</h2></br>
Enable once:</br>
1. Tools > WebDeveloper > Toggle Tools > Toolbox Options > Enable browser chrome and add-on debugging toolboxes</br>
2. Tools > WebDeveloper > Toggle Tools > Toolbox Options > Enable remote debugging</br>
</br>
Hit 'Ctrl+Alt+Shift+I' or open 'Tools > WebDeveloper > Browser Toolbox'.</br>
</br>
<h2>How to modify custom user styles?</h2></br>
Open CSS files with a text editor. Look through the code and change/remove values the way you like.</br>
Some files contain additional instructions to tweak the ui for individual cases.</br>
Restart Firefox for changes to take effect.</br>
</br>
<h2>Suggested ui tweaks</h2>
</br>
<b>Toolbar modes (suggestion: compact mode)</b></br>
<i>Customize mode &gt; Density &gt; Compact / Normal / Touch</i></br>
</br>
<b>Titlebar modes</b> (suggestion: Firefox titlebar ['application/hamburger button in titlebar' only works in Firefox titlebar])</br>
<i>Customize mode &gt; Title Bar &gt; uncheck checkbox</i></br>
</br>
<b>Drag space above tabs toolbar</b> (suggestion: disable drag space ['application/hamburger button in titlebar' works best without drag space])</br>
<i>Customize mode &gt; Drag Space &gt; uncheck checkbox </i></br>
</br>
<b>Bookmarks menu button on bookmarks toolbar</b></br>
<i>Customize mode &gt; Toolbars &gt; Bookmarks Toolbar </i></br>
<i>Customize mode &gt; move 'bookmarks menu' button to bookmark toolbars end </i></br>
</br>
<b>Downloads button always visible</b></br>
<i>Customize mode &gt; downloads button &gt; click on button and uncheck 'Auto-hide'</i></br>
</br>
<b>Searchbar</b> (suggestion: placed after location bar)</br>
<i>Customize mode &gt; Search(bar) &gt; move to navigation toolbar</i></br>
</br>
<b>Flexible spaces</b> (suggestion: remove spaces after and before location bar)</br>
<i>Customize mode &gt; grab and drag flexible space into palette</i></br>
</br>
<b>RSS icon in location bar</b></br>
<i>Install <a href=https://addons.mozilla.org/addon/awesome-rss/>Awesome RSS</a> WebExtension</i></br>
</br>
<h2>'about:config' tweaks</h2>
(To revert changes right-click entry and select 'reset')</br>
</br>
<b>Tab audio icon</b></br>
<i>browser.tabs.showAudioPlayingIcon</i></br>
</br>
<b>Tab min width</b> (suggestion: 100)</br>
<i>browser.tabs.tabMinWidth</i></br>
</br>
<b>Insert related tab after current tab</b> (suggestion: enable / set to 'true')</br>
<i>browser.tabs.insertRelatedAfterCurrent</i></br>
</br>
<b>Hide 'http://' from url</b> (suggestion: disable / set to 'false')</br>
<i>browser.urlbar.trimURLs</i></br>
</br>
<b>Open links in new tab/window</b></br>
<i>browser.link.open_newwindow.restriction</i> &gt; 0 (new tab instead window)</br>
</br>
<b>Preview tabs using 'Ctrl + Tab'</b></br>
<i>browser.ctrlTab.previews</i></br>
</br>
<b>Close window with last visible tab</b> (suggestion: disable / set to 'false')</br>
<i>browser.tabs.closeWindowWithLastTab</i></br>
</br>
<b>Titlebar</b></br>
<i>browser.tabs.drawInTitlebar</i></br>
</br>
<b>HTML5 fullscreen warning</b></br>
<i>full-screen-api.warning.delay</i> &gt; 0 (reduces delay)</br>
<i>full-screen-api.warning.timeout</i> &gt; 0 (reduces delay)</br>
</br>
<b>Recently added bookmarks</b></br>
<i>browser.bookmarks.showRecentlyBookmarked</i></br>
</br>
<b>General animations</b></br>
<i>toolkit.cosmeticAnimations.enabled</i></br>
</br>
<b>Fullscreen animations for HTML5 content</b></br>
<i>full-screen-api.transition-duration.enter</i> &gt; 0 0 (reduces animation time)</br>
<i>full-screen-api.transition-duration.leave</i> &gt; 0 0 (reduces animation time)</br>
</br>
<b>Findbar: animated result highlighting</b></br>
<i>findbar.modalHighlight</i></br>
</br>
<b>Searchbar in 'about:preferences'</b></br>
<i>browser.preferences.search</i></br>
</br>
<b>Location Bar: search engines at popups bottom</b></br>
<i>browser.urlbar.oneOffSearches</i></br>
</br>
<b>Searchbar: open search results in new tab</b></br>
<i>browser.search.openintab</i></br>
</br>
<b>Reader mode</b></br>
<i>reader.parse-on-load.enabled</i></br>
</br>
<b>Geolocation</b> (suggestion: disable / set to 'false')</br>
<i>geo.enabled</i></br>
</br>
<b>Pocket</b> (suggestion: disable / set to 'false')</br>
<i>extensions.pocket.enabled</i></br>
</br>
<b>Container tabs</b></br>
<i>privacy.userContext.enabled</i></br>
</br>
<b>Flyweb</b></br>
<i>dom.flyweb.enabled</i></br>
</br>
<b>Font rendering</b></br>
<i>gfx.canvas.azure.backends</i> &gt; direct2d1.1,cairo,skia (old font rendering)</br>
<i>gfx.content.azure.backends</i> &gt; direct2d1.1,cairo,skia (old font rendering)</br>
</br>
<b>Anti fingerprinting</b></br>
<i>privacy.resistFingerprinting</i></br>
</br>
<b>Telemetry / data collection</b> (suggestion: disable / set to 'false')</br>
<i>browser.ping-centre.telemetry</i></br>
<i>toolkit.telemetry.archive.enabled</i></br>
<i>toolkit.telemetry.bhrPing.enabled</i></br>
<i>toolkit.telemetry.enabled</i></br>
<i>toolkit.telemetry.firstShutdownPing.enabled</i></br>
<i>toolkit.telemetry.newProfilePing.enabled</i></br>
<i>toolkit.telemetry.reportingpolicy.firstRun</i></br>
<i>toolkit.telemetry.shutdownPingSender.enabled</i></br>
<i>toolkit.telemetry.unified</i></br>
<i>toolkit.telemetry.updatePing.enabled</i></br>
<i>experiments.enabled</i></br>
<i>experiments.activeExperiment</i></br>
<i>experiments.supported</i></br>
<i>datareporting.healthreport.uploadEnabled</i></br>
<i>nsITelemetry.canRecordBase</i></br>
<i>nsITelemetry.canRecordExtended</i></br>
</br>
