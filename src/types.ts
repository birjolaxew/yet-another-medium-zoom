export interface GlobalOptions {
    scrollAllowance: number,
    duration: number,
    container?: HTMLElement,
    lightboxGenerator?: ($img: HTMLElement, opts: ImageOptions, $original: HTMLElement) => HTMLElement,
};

export interface ImageOptions extends Partial<GlobalOptions> {
    highres?: string,
    class?: string,
};

export interface YamzElement extends HTMLElement {
    yamzOpts?: ImageOptions
};

export enum Classes {
    WRAPPER = "yamz__wrapper",
    WRAPPER_CLOSING = "yamz__wrapper--closing",
    IMG_WRAPPER = "yamz__img-wrapper",
    IMG = "yamz__img",
    HIGHRES = "yamz__highres",
    HAS_HIGHRES = "yamz__wrapper--has-highres",
    HIGHRES_LOADED = "yamz__wrapper--highres-loaded",
    CAPTION = "yamz__caption",
    HAS_CAPTION = "yamz__wrapper--has-caption",
    ORIGINAL = "yamz__original",
    ORIGINAL_OPEN = "yamz__original--open",
    LOADER = "yamz__loader",
    ALBUM_PREV = "yamz__album__prev",
    ALBUM_NEXT = "yamz__album__next",
};

export enum STATES {
    Closed,
    Opening,
    Open,
    Closing
};
