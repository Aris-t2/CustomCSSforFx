**READ THIS BEFORE POSTING A NEW ISSUE REPORT**

1. This is a SUPPORT AREA for features CustomCSSforFx provides.
2. This is not a 'request' area for new stuff or legacy add-on features. Do not open a new
issue about something this project does not offer. Instead join the 'General
discussions, feedback, questions belong here' thread to ask questions about
what is or could be possible with CSS.
3. Read 'how to report issues properly' before posting a new issue.
--> https://github.com/Aris-t2/CustomCSSforFx/issues/4
4. Verify there are no '@namespace' references anywhere in your custom code.
5. Use available support threads:
- GENERAL DISCUSSIONS, FEEDBACK, QUESTIONS -->
  https://github.com/Aris-t2/CustomCSSforFx/discussions/454
- MULTIROW TABS SUPPORT THREAD -->
  https://github.com/Aris-t2/CustomCSSforFx/discussions/455

**IMPORTANT**
 By submitting a new issue you confirm having read and understood
the above and all 'how to report a new issue' instructions as well as guidelines specified below. 
Invalid issue reports will get closed without further notice to keep this projects support
area clean. Thanks for understanding.


# `userChrome.css` formating guidelines

If you wish to extend / update the userChrome.css file you are required to
follow the established guidelines. Otherwise your patch may not be accepted. 

## Comments

Comments are the most important part of our repositories userChrome.css
configuration as they dictate which files are to be included (or not). It is
crucial to keep informative, section declaring and 'disabling' comments
seperate to maintain readability and the ease of visual parsing of the file.

All lines except the ones that denote enabled stylesheets must be a comment
and formatted as described below.

Single line comments follow `/* this convention */` and important single line
comments can also look like 

    /*
     * This!
     */

Multiline comments are to be formatted as follows: 
 
    /* This is a regular multiline comment.  It should contain proper english
     * sentences beginning with capital letters.
     */

Reason: css uses C-like comments and that is the proper commenting style for C. Additionally the row of asterisks helps in distinguishing them from other content.

Some comments like section headings include additional rules.

## Table of Contents
 
The Table of Contents is a multiline comment, a series of sections seperated by
`seperator lines`, that is lines containing only[^1] hypens (55 of them to be
exact, just copy them to save the hassle). Each *SECTION* is named with one or
more uppercase words and is declared with `[N] <SECTION_NAME>` where N is a
number one higher than the previous section's number and `<SECTION_NAME>` is of
course its name. Subsections are declared on following lines, indented with a
tab character and prepended with a dash (`-`). Higher level subsections are
further indented. An example section declaration might look like this: 

    ...
    * -----------------------...
    * [7] TAB BAR
    * 	- tab background 
    * 		- variants
    * 	- tab foreground
    * -----------------------...
    ...

## Sections (Categories)

If your wish to create a new SECTION for your stylesheet and have already added
it to the [Table of Contents](#table of contents), append it to the end of the
file using this syntax:

    /* ================
     * SECTION NAME [N]
     * ================
     */

Subsections follow the same convention except equal signs are replaced with
hyphens (`-`).

## Entries

The section heading should be followed by a line containing the `/* ON | OFF
*/` label which should be aligned with the switches (`/**/`) of the entries.
Entries are your `@import` rules. Each disabled entry begins with 4
spaces followed by a toggle / lock (`/*/`) allowing the user to enable your entry
when removed. Enabled entries therefore begin directly on a new line without
anything prepending them e.g.:
    
    /* disabled */
        /*/ @import('foo/bar/stylesheet.css') /**/
    /* enabled */
    @import('foo/bar/...')               /**/

Each entry MUST end with a 'switch' (`/**/`) to maintain clear visual
indication of user-selected entries when paired with 'labels' (`/* ON | OFF
*/`) AND each switch must be aligned with the previous ones as well as the labels.


*important notes*: 
IF a section is particularly long, make sure a `/* ON | OFF */` label occurs
every 40 lines or so to ensure easy visual parsing of enabled / disabled
stylesheets when scrolling through the file. Format it properly so that it
alignes with the switches (`/**/`) of previous `@import`s.

[^1]: Except for the ` *`.
