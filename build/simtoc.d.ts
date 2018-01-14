interface Settings {
    id: string;
    title: string;
    scrollToTopText: string;
    timeout: number;
    zIndex: number;
    headlines: string[];
    autoStyle: boolean;
    showOnPageload: boolean;
    showAllTheTime: boolean;
}
declare class SimToc {
    private timeout;
    private config;
    constructor(settings?: Settings);
    private init();
    private createToc();
    private show();
    private hide();
    private unhide();
    private static documentIsScrollable();
    private createStyle();
    destroy(): void;
}
declare var _simToc: SimToc | undefined;
declare function initSimToc(): void;
