# SimToc
A simple "Table of Contents" Script

## Features
    
### Auto-Show / Auto-Hide
By default SimToc shows and hides itself automatically. Thats means it shows a TOC after it's loaded and on scrolling. It automatically hides itself after a few seconds except when the cursor hovers the TOC.

### Highly customizable
There are build in settings for the most needed customizations but also for lesser needed ones. For example you can (of course) set a title for the TOC, add a "To Top" link, set a timeout, etc.

### Fully designable
The design is fully customizable and simple to do so. By default the linked headlines are indented and the TOC is displayed as a fixed box. The target headline will be highlighted for 3 seconds after clicking on a TOC link.
All the default CSS Styles are created automatically by default. However if you don't wont or like the default style you can simple disable it.

### Lightweight and modern
As this is a very simple solution it does not need much code so it's fast and lightweight.

### No required third party libraries
You do not have to include some libraries to be able to run TOC on the page. No jQuery, no underscore.js, ... just a (modern) browser.

## Build

Simply build. Nothing special to do!

## Usage

1. Append the script in you HTML document. Like:

    ```html
    <script src="simtoc.js" async></script>
    ```
    
1. ...
1. Profit!

## Options
- `id: "simtoc"` (Type: string)
*Sets a different id for the TOC.*

- `title: "Table of contents"` (Type: string)
*Sets an own title if you want.*

- `scrollToTopText: "&uarr;"` (Type: string)
*Sets a "To Top"-Text. If you don't set one, the "To Top"-link will not be generated.*

- `timeout: 3000` (Type: number)
*Sets the time in milliseconds for the timeout when the TOC should automatically disappear.*

- `headlines: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']` (Type: string[])
*Sets what elements you want to put in the TOC. Keep in mind only HTML Headline Tags will have the automatically indent styled by default.*

- `autoStyle: true` (Type: boolean)
*Generated the default CSS.*

- `zIndex: 999` (Type: number)
*Sets the layer which holds the TOC.*

- `showOnPageload: true` (Type: boolean)
*Shows the TOC directly after the page is loaded.*

- `showAllTheTime: false` (Type: boolean)
*Do not hide the TOC.*
