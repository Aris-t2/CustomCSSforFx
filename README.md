<b><a href=https://github.com/Aris-t2/CustomCSSforFx/issues/2>Classic Theme Restorer / Classic Toolbar Button / GlassMyFox</a> <a href=https://github.com/Aris-t2/CustomCSSforFx/releases/tag/NoiaButtons> / NoiaButtons</a> (Firefox 57+)</b>
<h2>Instructions / Howto / Readme</h2>
- <a href=https://github.com/Aris-t2/CustomCSSforFx/#want-to-support-this-project>Want to support this project?</a></br>
- <a href=https://github.com/Aris-t2/CustomCSSforFx/#webextensions-can-not-modify-browsers-appearance-in-firefox-57>WebExtensions can not modify browsers appearance in Firefox 57+</a></br>
- <a href=https://github.com/Aris-t2/CustomCSSforFx/#where-to-find-firefox-profile-folder-and-what-is-the-correct-location-for-user-styles>Where to find Firefox profile folder and what is the correct location for user styles?</a></br>
- <a href=https://github.com/Aris-t2/CustomCSSforFx/#how-to-use-custom-user-styles>How to use custom user styles?</a></br>
- <a href=https://github.com/Aris-t2/CustomCSSforFx/#how-to-find-item-ids-and-attributes>How to find ids and attributes?</a></br>
- <a href=https://github.com/Aris-t2/CustomCSSforFx/#how-to-modify-custom-user-styles>How to modify custom user styles?</a></br>
- <a href=https://github.com/Aris-t2/CustomCSSforFx/#suggested-ui-tweaks>Suggested ui tweaks</a></br>
- <a href=https://github.com/Aris-t2/CustomCSSforFx/#aboutconfig-tweaks>'about:config' tweaks</a></br>
<h2>Want to support this project?</h2></br>
<b><a href=https://www.paypal.me/tkpay>[ Paypal Me ]</a></b></br>
</br>
<h2>WebExtensions can not modify browsers appearance in Firefox 57+</h2></br>
The only way to modify ui is adding custom CSS code to <b>userChrome.css</b> and <b>userContent.css</b> files inside browsers profile folder.</br>
Keep in mind CSS code can not create entirely new items, buttons or toolbars. It only can modify already present ui items.</br>
</br>
<h2>Where to find Firefox profile folder and what is the correct location for user styles?</h2></br>
<b>1.</b> Find your profile folder ('profile names are different for everyone').</br>
</br>
<b>All OS</b></br>
<code>about:support > Profile Folder > Open Folder</code></br>
<code>Shift+F2</code> to open Firefox's command line, then enter the command <code>folder openprofile</code></br>
</br>
or</br>
</br>
<b>Windows</b></br>
<code>C:\Users\ USERNAME \AppData\Roaming\Mozilla\Firefox\Profiles\ PROFILENAME \ </code></br>
Hidden files must be visible to see "AppData" folder. Alternatively open "%APPDATA%\Mozilla\Firefox\Profiles\" from explorers location bar.</br>
</br>
<b>Linux</b></br>
<code>\.mozilla\firefox\ PROFILENAME \ </code></br>
Hidden files must be visible to see ".mozilla" folder.</br>
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
Restart Firefox after every modification for changes to take effect.</br>
</br>
<b>Example</b></br>
If "classic button appearance for navigation toolbar buttons" should be <u>enabled</u>, the corresponding line has to look like this:</br>
<code>@import url(./css/buttons/buttons_on_navbar_classic_appearance.css);</code></br>
</br>
If "classic button appearance for navigation toolbar buttons" should be <u>disabled</u>, the corresponding line has to look like this:</br>
<code>/* @import url(./css/buttons/buttons_on_navbar_classic_appearance.css); */</code></br>
</br>
Note</br>
<code>Code between /* and */ won't be used by Firefox.</code></br>
</br>
<h2>How to find item ids and attributes?</h2></br>
Enable once:</br>
1. Tools > WebDeveloper > Toggle Tools > Toolbox Options > Enable browser chrome and add-on debugging toolboxes</br>
2. Tools > WebDeveloper > Toggle Tools > Toolbox Options > Enable remote debugging</br>
</br>
Hit 'Ctrl+Alt+Shift+I' or open 'Tools > WebDeveloper > Browser Toolbox'.</br>
</br>
Inspect ui or web content.</br>
</br>
Force popups to stay open for inspection:</br>
Click on 'disable popup auto hide' button (= button with four squares) on developer toolbars end.</br>
</br>
<h2>How to modify custom user styles?</h2></br>
Open CSS files with a text editor. Look through the code and change values the way you need.</br>
Some files contain additional instructions about how to tweak the ui for individual cases.</br>
Restart Firefox for changes to take effect.</br>
</br>
<i>Example</i></br>
Open <code>./css/tabs/classic_squared_tabs.css</code> file</br>
Look for <code>/* unloaded/pending tabs color *//*</code></br>
Remove <code>/*</code> at lines end to make that part of the code active. Save the file and restart Firefox.</br>
</br>
<i>Example 2</i></br>
Open <code>./userChrome.css</code> file</br>
Look for <code>@import url(./css/locationbar/ac_popup_classic_with_two_lines.css);</code></br>
Add <code>/*</code> at lines start and <code>*/</code> at lines end to remove classic popup.</br>
Look for <code>/*@import url(./css/locationbar/ac_popup_url_and_title_50percent_width.css);*/</code></br>
Remove <code>/*</code> at lines start and <code>*/</code> at lines end to enable this popup appearance.</br>
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
<i>full-screen-api.warning.delay</i> &gt; 0 or -1 (reduces delay / hides warning)</br>
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
<b>Add-on manager: remove 'Get Add-ons' category</b></br>
<i>extensions.getAddons.showPane</i></br>
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
<b>Screenshots</b> (suggestion: disable / set to 'true')</br>
<i>extensions.screenshots.disabled</i></br>
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
<b>Anti fingerprinting (Caution: browser might behave in unforseen ways!)</b></br>
<i>privacy.resistFingerprinting</i></br>
<a href=https://wiki.mozilla.org/Security/Fingerprinting>Fingerprinting info at Mozilla Wiki tweaks</a></br>
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
