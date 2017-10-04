<b>Firefox 57 and newer does not allow to modify browsers appearance through WebExtensions</b>
The only way to use custom CSS code is browser userChrome.css file inside browsers profile folder.


<b>Where to find Firefox profile folder and where do custom user styles belong?</b>

<b>1.</b>Find your profile folder ('profile names are different for everyone').

<b>Windows</b>
<i>C:\Users\ USERNAME \AppData\Roaming\Mozilla\Firefox\Profiles\ PROFILENAME \chrome\</i>

You have to make hidden files visible to see "AppData" folder or open "%APPDATA%\Mozilla\Firefox\Profiles\" from explorers location bar.</i>

<b>Linux</b>
<i>~\.mozilla\firefox\ PROFILENAME \chrome\</i>
You have to make hidden files visible to see \.mozilla\ folder.

<b>Mac OS X</b>
<i>~\Library\Mozilla\Firefox\Profiles\ PROFILENAME \chrome\</i> or
<i>~\Library\Application Support\Mozilla\Firefox\Profiles\ PROFILENAME \chrome\</i>

<b>2.</b>Create a \chrome\ subfolder, if there is none yet (\ PROFILENAME \chrome\).

<b>3.</b>Copy userChrome.css and subfolders into \chrome\ subfolder.


<b>How to use custom user styles?</b>
The <i>userChrome.css</i> file works like an options\configurations file. All main "features" can be enabled and disabled there.
Edit <i>userChrome.css</i> with any text editor (<b><a href=https://notepad-plus-plus.org/download/>Notepad++</a></b> recommended on Windows) and enable btw. disable any feature you like by modifying, removing or outcommenting available "@import..." strings.
Restart browser after every change for changes to take effect.

<b>Example (attend to " /* " and " */ ")</b>
If you <u>want</u> "classic button appearance" for navigation toolbar buttons, the corresponding line has to look like this:
<i>@import url(./css/buttons/classic_button_appearance_on_navbar.css);</i>

If you <u>do not want</u> "classic button appearance" for navigation toolbar buttons, the corresponding line has to look like this:
<i>/* @import url(./css/buttons/classic_button_appearance_on_navbar.css); */</i>


<b>How to modify custom user styles?</b>
Open CSS files with a text editor. Look through the code and change/remove values the way you like.
Some files contain additional instructions to tweak the ui for individual cases.
Restart Firefox for changes to take effect.


<b>Default 'about:config' tweaks present on CTRs prefwindow</b>
(To revert changes right-click entry and select 'reset')

Audio icon
<i>browser.tabs.showAudioPlayingIcon</i>

Insert related tab after current tab
<i>browser.tabs.insertRelatedAfterCurrent</i>

Preview tabs using 'Ctrl+Tab'
<i>browser.ctrlTab.previews</i>

Close window with last visible tab
<i>browser.tabs.closeWindowWithLastTab</i>

Titlebar
<i>browser.tabs.drawInTitlebar</i>

HTML5 fullscreen warning
<i>full-screen-api.warning.delay</i> > 0 (reduces delay)
<i>full-screen-api.warning.timeout</i> > 0 (reduces delay)

Recently added bookmarks
<i>browser.bookmarks.showRecentlyBookmarked</i>

General animations
<i>toolkit.cosmeticAnimations.enabled</i>

Fullscreen animations for HTML5 content
<i>full-screen-api.transition-duration.enter</i> > 0 0 (reduces animation time)
<i>full-screen-api.transition-duration.leave</i> > 0 0 (reduces animation time)

Findbar: animate result highlighting
<i>findbar.modalHighlight</i>

Searchbar in 'about:preferences'
<i>browser.preferences.search</i>

Search engines in location bar popup
<i>browser.urlbar.oneOffSearches</i>

Open search results in new tab
<i>browser.search.openintab</i>

Reader mode
<i>reader.parse-on-load.enabled</i>

Geolocation
<i>geo.enabled</i>

Pocket
<i>extensions.pocket.enabled</i>

Container tabs
<i>privacy.userContext.enabled</i>

Flyweb
<i>dom.flyweb.enabled</i>

Font rendering
<i>gfx.canvas.azure.backends</i> > direct2d1.1,cairo,skia (old font rendering)
<i>gfx.content.azure.backends</i> > direct2d1.1,cairo,skia (old font rendering)

Anti fingerprinting
<i>privacy.resistFingerprinting</i>



