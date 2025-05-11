# 🌌 AeroGlassyFOX 

> ⚠️ **Please read the [Installation Instructions](#️-how-to-install) and [Required Add-ons](#-required-add-ons-optional-enhancements) sections carefully to ensure the theme works correctly.**

A personal redesign of Firefox’s UI, inspired by and built upon:

- [Aris-t2’s CustomCSSforFx](https://github.com/Aris-t2/CustomCSSforFx)
- [Echelon Firefox Theme](https://github.com/echelon-theme/echelon)

This is a mashup of multiple open-source themes with my own custom tweaks and styles for the old, glassy aesthetic.

![image alt](https://github.com/Firefox4Guy/AEROGlassyFOX/blob/69bbd86475fc6b99af016687194dbadde6d9a86a/showcase.PNG)

---
## 📜 Licensing

This project includes and modifies code under the following licenses:

- **GPL v3** – from Aris-t2. (See `LICENSE-GPL-v3`)
- **MPL v2** – from Aris-t2 and Echelon. (See `LICENSE-MPL-v2`, `LICENSE`)
- My original modifications are under **GPL v3** for compatibility.

> All reused files retain their original licenses. MPL-licensed files are re-licensed under GPL v3 where required for combination.

---

## 🙏 Credits

- [Aris-t2 / CustomCSSforFx](https://github.com/Aris-t2/CustomCSSforFx)
- [Echelon Theme](https://github.com/echelon-theme/echelon)

Thanks to both for laying the groundwork and inspiration.

---


## 🛠️ How to Install

To apply this theme:

1. Go to `about:config` in Firefox.
   - Set `toolkit.legacyUserProfileCustomizations.stylesheets` to `true`.

2. Go to `about:profiles`.
   - Click **"Open Folder"** under the *Root Directory*.
   - Inside that directory, create a folder called `chrome`.
   - Paste the theme files (from the latest release) into the `chrome` folder.
   - Restart Firefox using the **"Restart"** button in `about:profiles`.

---

## 🧩 Required Add-ons (Optional Enhancements. Some addons are not watched by firefox, use at own risk)

These aren't strictly necessary but enhance the Aero/Glassy effects:

  - For Aero effects, use **StarDock WindowBlinds 11** *(Payware; 30-day trial available)*.
  - Use the **"Aero 11"** theme by *SimplexDesigns*.

### Recommended Firefox Add-ons

- ✅ **Reload in address bar** – brings back the reload button inside the URL bar.

---

## 🎉 Fun Add-ons (Totally Optional)

- 🎬 **YouTube Redux** – classic YouTube layout.
- 🔍 **Old Google** – retro Google search UI.

---

## 🧑‍💻 Contributing

Anyone is welcome to suggest improvements or contribute to the project!

**How to contribute:**

1. Fork this repository.
2. Create a new branch for your changes.
3. Make your edits.
4. Submit a pull request with a brief description of what you changed and why.

Don't know what to edit? Start with the `css/custom/` folder for your own style tweaks!

---
## 📁 Project Structure
```
chrome/
├── AEROGlassyFOX/ # 💠
│
├── config/ # ⚙️ Aris-t2 config variables
│   ├── general_variables
│   ├── color_variables_aero
│   ├── color_variables_aeroglass
│   ├── color_variables_classic-grey
│   ├── color_variables_deved
│   ├── color_variables_fx3
│   ├── color_variables_noia4_dark
│   ├── color_variables_noia4_grey
│   ├── color_variables_noia4_lightgrey
│   ├── color_variables_transparent
│   ├── custom_scrollbar_appearance
│   ├── custom_tab_color_settings
│   ├── custom_tab_text_settings
│   └── general_variables
│
├── css/ # 🎨 Aris-t2 UI modules (tabs, buttons, etc.)
│   ├── aboutaddons
│   ├── aboutconfig
│   ├── aboutlogins
│   ├── aboutnewtab
│   ├── aboutpreferences
│   ├── appbutton
│   ├── buttons
│   ├── generalui
│   ├── locationbar
│   ├── tabs
│   ├── toolbars
│   └── webcontent
│
├── image/ # 📸 Aris-t2 image assets
│   └── ...
│
├── img/ # 🖼️ image assets for AEROGlassyFOX
│   └── ...
│
├── AEROGlassyFOX.css # Main CSS file from AEROGlassyFOX
├── my_userChrome.css # 📝 (Optional) file for user’s custom tweaks
├── userChrome.css # 🔧 CSS loader (from Aris-t2)
└── userContent.css # (Optional) Web content (from Aris-t2)
