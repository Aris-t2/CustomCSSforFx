<b>Firefox 57 and newer does not allow to modify browsers appearance through WebExtensions</b></br>
The only way to use custom CSS code is browser userChrome.css file inside browsers profile folder.</br>
</br>
</br>
<b>Where to find Firefox profile folder and where do custom user styles belong?</b></br>
</br>
<b>1.</b>Find your profile folder ('profile names are different for everyone').</br>
</br>
<b>Windows</b></br>
<i> C:\Users\ USERNAME \AppData\Roaming\Mozilla\Firefox\Profiles\ PROFILENAME \chrome\ </i></br>
</br>
You have to make hidden files visible to see "AppData" folder or open "%APPDATA%\Mozilla\Firefox\Profiles\" from explorers location bar.</br>
</br>
<b>Linux</b></br>
<i> \.mozilla\firefox\ PROFILENAME \chrome\ </i></br>
You have to make hidden files visible to see \.mozilla\ folder.</br>
</br>
<b>Mac OS X</b></br>
<i> \Library\Mozilla\Firefox\Profiles\ PROFILENAME \chrome\ </i> or</br>
<i> \Library\Application Support\Mozilla\Firefox\Profiles\ PROFILENAME \chrome\ </i></br>
</br>
<b>2.</b>Create a \chrome\ subfolder, if there is none yet (\ PROFILENAME \chrome\).</br>
</br>
<b>3.</b>Copy userChrome.css and subfolders into \chrome\ subfolder.</br>
</br>
</br>
<b>How to use custom user styles?</b></br>
The <i>userChrome.css</i> file works like an options\configurations file. All main "features" can be enabled and disabled there.</br>
Edit <i>userChrome.css</i> with any text editor (<b><a href=https://notepad-plus-plus.org/download/>Notepad++</a></b> recommended on Windows) and enable btw. disable any feature you like by modifying, removing or outcommenting available "@import..." strings.</br>
Restart browser after every change for changes to take effect.</br>
</br>
<b>Example (attend to " /* " and " */ ")</b></br>
If you <u>want</u> "classic button appearance" for navigation toolbar buttons, the corresponding line has to look like this:</br>
<i>@import url(./css/buttons/classic_button_appearance_on_navbar.css);</i></br>
</br>
If you <u>do not want</u> "classic button appearance" for navigation toolbar buttons, the corresponding line has to look like this:</br>
<i>/* @import url(./css/buttons/classic_button_appearance_on_navbar.css); */</i></br>
</br>
</br>
<b>How to modify custom user styles?</b></br>
Open CSS files with a text editor. Look through the code and change/remove values the way you like.</br>
Some files contain additional instructions to tweak the ui for individual cases.</br>
Restart Firefox for changes to take effect.</br>
</br>
</br>
<b>Default 'about:config' tweaks present on CTRs prefwindow</b></br>
(To revert changes right-click entry and select 'reset')</br>
</br>
Audio icon</br>
<i>browser.tabs.showAudioPlayingIcon</i></br>
</br>
Insert related tab after current tab
<i>browser.tabs.insertRelatedAfterCurrent</i>
</br>
Preview tabs using 'Ctrl+Tab'</br>
<i>browser.ctrlTab.previews</i></br>
</br>
Close window with last visible tab</br>
<i>browser.tabs.closeWindowWithLastTab</i></br>
</br>
Titlebar</br>
<i>browser.tabs.drawInTitlebar</i></br>
</br>
HTML5 fullscreen warning</br>
<i>full-screen-api.warning.delay</i> > 0 (reduces delay)</br>
<i>full-screen-api.warning.timeout</i> > 0 (reduces delay)</br>
</br>
Recently added bookmarks</br>
<i>browser.bookmarks.showRecentlyBookmarked</i></br>
</br>
General animations</br>
<i>toolkit.cosmeticAnimations.enabled</i></br>
</br>
Fullscreen animations for HTML5 content</br>
<i>full-screen-api.transition-duration.enter</i> > 0 0 (reduces animation time)</br>
<i>full-screen-api.transition-duration.leave</i> > 0 0 (reduces animation time)</br>
</br>
Findbar: animate result highlighting</br>
<i>findbar.modalHighlight</i></br>
</br>
Searchbar in 'about:preferences'</br>
<i>browser.preferences.search</i></br>
</br>
Search engines in location bar popup</br>
<i>browser.urlbar.oneOffSearches</i></br>
</br>
Open search results in new tab</br>
<i>browser.search.openintab</i></br>
</br>
Reader mode</br>
<i>reader.parse-on-load.enabled</i></br>
</br>
Geolocation</br>
<i>geo.enabled</i></br>
</br>
Pocket</br>
<i>extensions.pocket.enabled</i></br>
</br>
Container tabs</br>
<i>privacy.userContext.enabled</i></br>
</br>
Flyweb</br>
<i>dom.flyweb.enabled</i></br>
</br>
Font rendering</br>
<i>gfx.canvas.azure.backends</i> > direct2d1.1,cairo,skia (old font rendering)</br>
<i>gfx.content.azure.backends</i> > direct2d1.1,cairo,skia (old font rendering)</br>
</br>
Anti fingerprinting</br>
<i>privacy.resistFingerprinting</i></br>



