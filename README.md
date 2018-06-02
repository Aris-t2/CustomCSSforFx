## Downloads for Firefox Quantum (57+)

**[Classic Theme Restorer / Classic Toolbar Buttons / GlassMyFox CSS tweaks](https://github.com/Aris-t2/CustomCSSforFx/issues/2)**  
**[NoiaButtons CSS tweaks](https://github.com/Aris-t2/CustomCSSforFx/releases/tag/NoiaButtons)** / **[Custom Scrollbars](https://github.com/Aris-t2/Scrollbars/releases)**  

## Want to support this project?

**[[ Paypal Me ]](https://www.paypal.me/tkpay)**  

## Instructions / Howto / Readme

- [WebExtensions can not modify Firefox Quantums appearance properly](#webextensions-can-not-modify-firefox-quantums-appearance-properly)  
- [Where to find Firefox profile folder? The correct location for user styles.](#where-to-find-firefox-profile-folder-the-correct-location-for-user-styles)  
- [How to use custom user styles?](#how-to-use-custom-user-styles)  
- [How to find item ids and attributes?](#how-to-find-item-ids-and-attributes)  
- [How to modify custom user styles?](#how-to-modify-custom-user-styles)  
- [Suggested ui tweaks](#suggested-ui-tweaks)  
- ['about:config' tweaks](#aboutconfig-tweaks)  

## WebExtensions can not modify Firefox Quantums appearance properly

The only way to modify ui is adding custom CSS code to **userChrome.css** and **userContent.css** files inside browsers profile folder.  
Keep in mind CSS code can not create entirely new items, buttons or toolbars. It only can modify already present ui items.  

## Where to find Firefox profile folder? The correct location for user styles.

**1.** Find your profile folder ('profile names are different for everyone').  
`about:support > Profile Folder > Open Folder`  
or `about:profiles > Root Directory > Open Folder`  
or open command line with `Shift+F2` and enter`folder openprofile`  

**2.** User styles belong into `\chrome\` folder. Create it, if there is none yet. It should look like this afterwards:  
`\ PROFILE FOLDER NAME \chrome\`  

**3.** Copy `userChrome.css`, `userContent.css` and `\config\`, `\css\`, `\image\` folders into `\chrome\` folder. It should look like this afterwards:  
`\chrome\config\`  
`\chrome\css\`  
`\chrome\image\`  
`\chrome\userChrome.css`  
`\chrome\userContent.css`  

(Optional) Profile folders location on drive:  
**Windows**  
`C:\Users\ USERNAME \AppData\Roaming\Mozilla\Firefox\Profiles\ PROFILE FOLDER NAME \`  
Hidden files must be visible to see `AppData` folder. Alternatively open `%APPDATA%\Mozilla\Firefox\Profiles\` from explorers location bar.  
**Linux**  
`\home\ USERNAME \.mozilla\firefox\ PROFILE FOLDER NAME \`  
Hidden files must be visible to see `.mozilla` folder.  
**Mac OS X**  
`~\Library\Mozilla\Firefox\Profiles\ PROFILE FOLDER NAME \` or  
`~\Library\Application Support\Mozilla\Firefox\Profiles\ PROFILE FOLDER NAME \`  
`\Users\ USERNAME \Library\Application\Support\Firefox\Profiles\`  

## How to use custom user styles?

The _userChrome.css_ and _userContent.css_ files works like an options\configurations file. All main "features" can be enabled and disabled there.  
Edit _userChrome.css_ and _userContent.css_ with any text editor (**[Notepad++](https://notepad-plus-plus.org/download/)** recommended on Windows) and enable or disable any feature you like by modifying, removing or outcommenting available `@import` strings.  
Restart Firefox after every modification for changes to take effect.  

**Example**  
If "classic button appearance for navigation toolbar buttons" should be <u>enabled</u>, the corresponding line has to look like this:  
`@import url(./css/buttons/buttons_on_navbar_classic_appearance.css);`  

If "classic button appearance for navigation toolbar buttons" should be <u>disabled</u>, the corresponding line has to look like this:  
`/* @import url(./css/buttons/buttons_on_navbar_classic_appearance.css); */`  

Note  
Code between `/*` and `*/` won't be used by Firefox unless there are other `/*` or `*/` inbetween.  

## How to find item ids and attributes?

Firefox 57-60  

Enable once:  
1\. Tools > WebDeveloper > Toggle Tools > Toolbox Options > Enable browser chrome and add-on debugging toolboxes  
2\. Tools > WebDeveloper > Toggle Tools > Toolbox Options > Enable remote debugging  

Hit `Ctrl+Alt+Shift+I` or open 'Tools > WebDeveloper > Browser Toolbox'.  

Inspect ui or web content.  

Force popups to stay open for inspection:  
Click on 'disable popup auto hide' button (= button with four squares) on developer toolbars end.  

Firefox 61+  

Enable once:  
1\. Tools > WebDeveloper > Toggle Tools > 'Customize Tools and get help button' (= button with three dots) > Settings > Enable browser chrome and add-on debugging toolboxes  
2\. Tools > WebDeveloper > Toggle Tools > 'Customize Tools and get help button' (= button with three dots) > Settings > Enable remote debugging  

Hit `Ctrl+Alt+Shift+I` or open 'Tools > WebDeveloper > Browser Toolbox'.  

Inspect ui or web content.  

Force popups to stay open for inspection: 
Click on 'Customize Tools and get help button' (= button with three dots) and select 'Disable popup auto-hide'.  

## How to modify custom user styles?

Open CSS files with a text editor. Look through the code and change values the way you need.  
Some files contain additional instructions about how to tweak the ui for individual cases.  
Restart Firefox for changes to take effect.  

_Example_  
Open `./css/tabs/classic_squared_tabs.css` file  
Look for `/* unloaded/pending tabs color *//*`  
Remove `/*` at lines end to make that part of the code active. Save the file and restart Firefox.  

_Example 2_  
Open `./userChrome.css` file  
Look for `@import url(./css/locationbar/ac_popup_classic_with_two_lines.css);`  
Add `/*` at lines start and `*/` at lines end to remove classic popup.  
Look for `/*@import url(./css/locationbar/ac_popup_url_and_title_50percent_width.css);*/`  
Remove `/*` at lines start and `*/` at lines end to enable this popup appearance.  

## Suggested ui tweaks

**Toolbar modes (suggestion: compact mode)**  
_Customize mode > Density > Compact / Normal / Touch_  

**Titlebar modes** (suggestion: Firefox titlebar ['application/hamburger button in titlebar' only works in Firefox titlebar])  
_Customize mode > Title Bar > uncheck checkbox_  

**Drag space above tabs toolbar** (suggestion: disable drag space ['application/hamburger button in titlebar' works best without drag space])  
_Customize mode > Drag Space > uncheck checkbox_  

**Bookmarks menu button on bookmarks toolbar**  
_Customize mode > Toolbars > Bookmarks Toolbar_  
_Customize mode > move 'bookmarks menu' button to bookmark toolbars end_  

**Downloads button always visible**  
_Customize mode > downloads button > click on button and uncheck 'Auto-hide'_  

**Searchbar** (suggestion: placed after location bar)  
_Customize mode > Search(bar) > move to navigation toolbar_  

**Flexible spaces** (suggestion: remove spaces after and before location bar)  
_Customize mode > grab and drag flexible space into palette_  

**RSS icon in location bar**  
_Install [Awesome RSS](https://addons.mozilla.org/addon/awesome-rss/) WebExtension_  

## 'about:config' tweaks

(To revert changes right-click entry and select 'reset')  

**Tab audio icon**  
_browser.tabs.showAudioPlayingIcon_  

**Tab min width** (suggestion: 100)  
_browser.tabs.tabMinWidth_  

**Insert related tab after current tab** (suggestion: enable / set to 'true')  
_browser.tabs.insertRelatedAfterCurrent_  

**Hide 'http://' from url** (suggestion: disable / set to 'false')  
_browser.urlbar.trimURLs_  

**Open links in new tab/window**  
_browser.link.open_newwindow.restriction_ > 0 (new tab instead window)  

**Preview tabs using 'Ctrl + Tab'**  
_browser.ctrlTab.previews_  

**Close window with last visible tab** (suggestion: disable / set to 'false')  
_browser.tabs.closeWindowWithLastTab_  

**Titlebar**  
_browser.tabs.drawInTitlebar_  

**Old about:newtab and about:home pages (Firefox 57-59 only)**  
_browser.newtabpage.activity-stream.enabled_  
_browser.newtabpage.activity-stream.aboutHome.enabled_

**HTML5 fullscreen warning**  
_full-screen-api.warning.delay_ > 0 or -1 (reduces delay / hides warning)  
_full-screen-api.warning.timeout_ > 0 (reduces delay)  

**Recently added bookmarks**  
_browser.bookmarks.showRecentlyBookmarked_  

**General animations**  
_toolkit.cosmeticAnimations.enabled_  

**Fullscreen animations for HTML5 content**  
_full-screen-api.transition-duration.enter_ > 0 0 (reduces animation time)  
_full-screen-api.transition-duration.leave_ > 0 0 (reduces animation time)  

**Add-on manager: remove 'Get Add-ons' category**  
_extensions.getAddons.showPane_  

**Findbar: animated result highlighting**  
_findbar.modalHighlight_  

**Searchbar in 'about:preferences'**  
_browser.preferences.search_  

**Location Bar: search engines at popups bottom**  
_browser.urlbar.oneOffSearches_  

**Searchbar: open search results in new tab**  
_browser.search.openintab_  

**Reader mode**  
_reader.parse-on-load.enabled_  

**Geolocation** (suggestion: disable / set to 'false')  
_geo.enabled_  

**Pocket** (suggestion: disable / set to 'false')  
_extensions.pocket.enabled_  

**Screenshots** (suggestion: disable / set to 'true')  
_extensions.screenshots.disabled_  

**Container tabs**  
_privacy.userContext.enabled_  

**Flyweb**  
_dom.flyweb.enabled_  

**Font rendering**  
_gfx.canvas.azure.backends_ > direct2d1.1,cairo,skia (old font rendering)  
_gfx.content.azure.backends_ > direct2d1.1,cairo,skia (old font rendering)  

**Anti fingerprinting (Caution: browser might behave in unforseen ways!)**  
_privacy.resistFingerprinting_  
[Fingerprinting info at Mozilla Wiki tweaks](https://wiki.mozilla.org/Security/Fingerprinting)  

**Telemetry / data collection** (suggestion: disable / set to 'false')  
_browser.ping-centre.telemetry_  
_toolkit.telemetry.archive.enabled_  
_toolkit.telemetry.bhrPing.enabled_  
_toolkit.telemetry.enabled_  
_toolkit.telemetry.firstShutdownPing.enabled_  
_toolkit.telemetry.newProfilePing.enabled_  
_toolkit.telemetry.reportingpolicy.firstRun_  
_toolkit.telemetry.shutdownPingSender.enabled_  
_toolkit.telemetry.unified_  
_toolkit.telemetry.updatePing.enabled_  
_experiments.enabled_  
_experiments.activeExperiment_  
_experiments.supported_  
_datareporting.healthreport.uploadEnabled_  
_nsITelemetry.canRecordBase_  
_nsITelemetry.canRecordExtended_  
_browser.newtabpage.activity-stream.feeds.telemetry_  
_browser.newtabpage.activity-stream.telemetry_  
_extensions.screenshots.upload-disabled_ ("true" to disable)
