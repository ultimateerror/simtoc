class SimToc {
    constructor(settings) {
        this.timeout = null;
        this.config = settings || {
            id: 'simtoc',
            title: 'Table of contents',
            scrollToTopText: '&uarr;',
            timeout: 2000,
            zIndex: 999,
            headlines: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
            autoStyle: true,
            showOnPageload: true,
            showAllTheTime: false
        };
        if (document.getElementById(this.config.id))
            return;
        this.init();
    }
    init() {
        this.createToc();
        if (this.config.autoStyle) {
            this.createStyle();
        }
        if (this.config.showOnPageload) {
            this.show();
        }
        document.addEventListener('scroll', this.show.bind(this));
        document.getElementById(this.config.id).addEventListener('mouseleave', () => {
            document.addEventListener('scroll', this.show.bind(this));
            this.show();
        });
        document.getElementById(this.config.id).addEventListener('mouseenter', () => {
            document.removeEventListener('scroll', this.show.bind(this));
            this.unhide();
        });
    }
    createToc() {
        const mapNodes = [`<div id="${this.config.id}" class="simtoc-container" hidden><div class="simtoc-head"><span class="simtoc-title">${this.config.title}</span>`];
        if (this.config.scrollToTopText) {
            mapNodes.push(`<a href="#" class="simtoc-totop">${this.config.scrollToTopText}</a>`);
        }
        mapNodes.push('</div>');
        Array.from(document.querySelectorAll(this.config.headlines.join())).forEach((x, i) => {
            if (!x.id) {
                x.id = `${this.config.id}-headline-${i}`;
            }
            mapNodes.push(`<a href="#${x.id}" class="simtoc-link simtoc-tag-${x.tagName.toLowerCase()}">${x.textContent}</a>`);
        });
        mapNodes.push('</div>');
        document.body.insertAdjacentHTML('afterbegin', mapNodes.join(''));
    }
    show() {
        this.unhide();
        if (this.config.showAllTheTime)
            return;
        this.timeout = setTimeout(this.hide.bind(this), this.config.timeout);
        if (!SimToc.documentIsScrollable()) {
            event.preventDefault();
        }
    }
    hide() {
        document.getElementById(this.config.id).hidden = true;
    }
    unhide() {
        document.getElementById(this.config.id).hidden = false;
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    }
    static documentIsScrollable() {
        const bodyRect = document.body.getBoundingClientRect();
        return bodyRect.top < 0 || window.innerHeight < document.body.scrollHeight + bodyRect.top + (bodyRect.bottom - bodyRect.height);
    }
    createStyle() {
        document.body.insertAdjacentHTML('afterbegin', `<style id="${this.config.id}-style">
            .simtoc-container {
                padding:5pt;
                border:1px solid #ccc;
                background:#fff;
                position:fixed;
                z-index: ${this.config.zIndex};
                top:10pt;
                right:10pt;
                max-height: 90vh;
                overflow-y: auto;
                box-shadow: #ccc 1pt 1pt 1pt;
                min-width: 150pt;
                white-space: nowrap;
            }
            
            .simtoc-head {
                margin-bottom:1em;
            }
        
            .simtoc-totop {
                float:right;
                font-size:14pt;
                font-weight:bold;
            }
        
            .simtoc-link {
                display:block;
                line-height:1.7;
                margin:0;
                padding:0;
                text-decoration:none;
            }
        
            .simtoc-link.simtoc-tag-h2 { margin-left:1em; }
            .simtoc-link.simtoc-tag-h3 { margin-left:2em; }
            .simtoc-link.simtoc-tag-h4 { margin-left:3em; }
            .simtoc-link.simtoc-tag-h5 { margin-left:4em; }
            .simtoc-link.simtoc-tag-h6 { margin-left:5em; }
            
            @keyframes simtoc-highlight {
                0% { background-color:#ff5; }
                100% {}
            }
            
            :target {
                animation: simtoc-highlight ${this.config.timeout}ms ease;     
            }
        </style>`);
    }
    destroy() {
        document.removeEventListener('scroll', this.show.bind(this));
        Array.from(document.querySelectorAll(`#${this.config.id}, #${this.config.id}-style`)).forEach((x) => {
            x.remove();
        });
    }
}
if (document.readyState !== 'loading') {
    initSimToc();
}
else {
    document.addEventListener('DOMContentLoaded', initSimToc);
}
var _simToc;
function initSimToc() {
    _simToc = new SimToc();
}
//# sourceMappingURL=simtoc.js.map