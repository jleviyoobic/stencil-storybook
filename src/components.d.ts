/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ArticleFeed {
        "article": any;
    }
    interface ArticleStats {
        "comments": string;
        "minToRead": string;
        "reactions": string;
    }
    interface ArticleTags {
        "tags": string[];
    }
    interface AvatarCircle {
        "pic": string;
    }
    interface ButtonHash {
        "color": string;
        "font": string;
        "link": string;
    }
    interface ButtonMain {
        "color": string;
        "font": string;
        "link": string;
    }
    interface CardArticle {
    }
    interface CardMain {
    }
    interface DescriptionBlock {
    }
    interface FeedTemplate {
    }
    interface LogoMain {
    }
    interface NavbarMain {
    }
    interface PostStamp {
        "picSrc": string;
        "timestamp": string;
        "username": string;
    }
    interface SearchBar {
    }
}
declare global {
    interface HTMLArticleFeedElement extends Components.ArticleFeed, HTMLStencilElement {
    }
    var HTMLArticleFeedElement: {
        prototype: HTMLArticleFeedElement;
        new (): HTMLArticleFeedElement;
    };
    interface HTMLArticleStatsElement extends Components.ArticleStats, HTMLStencilElement {
    }
    var HTMLArticleStatsElement: {
        prototype: HTMLArticleStatsElement;
        new (): HTMLArticleStatsElement;
    };
    interface HTMLArticleTagsElement extends Components.ArticleTags, HTMLStencilElement {
    }
    var HTMLArticleTagsElement: {
        prototype: HTMLArticleTagsElement;
        new (): HTMLArticleTagsElement;
    };
    interface HTMLAvatarCircleElement extends Components.AvatarCircle, HTMLStencilElement {
    }
    var HTMLAvatarCircleElement: {
        prototype: HTMLAvatarCircleElement;
        new (): HTMLAvatarCircleElement;
    };
    interface HTMLButtonHashElement extends Components.ButtonHash, HTMLStencilElement {
    }
    var HTMLButtonHashElement: {
        prototype: HTMLButtonHashElement;
        new (): HTMLButtonHashElement;
    };
    interface HTMLButtonMainElement extends Components.ButtonMain, HTMLStencilElement {
    }
    var HTMLButtonMainElement: {
        prototype: HTMLButtonMainElement;
        new (): HTMLButtonMainElement;
    };
    interface HTMLCardArticleElement extends Components.CardArticle, HTMLStencilElement {
    }
    var HTMLCardArticleElement: {
        prototype: HTMLCardArticleElement;
        new (): HTMLCardArticleElement;
    };
    interface HTMLCardMainElement extends Components.CardMain, HTMLStencilElement {
    }
    var HTMLCardMainElement: {
        prototype: HTMLCardMainElement;
        new (): HTMLCardMainElement;
    };
    interface HTMLDescriptionBlockElement extends Components.DescriptionBlock, HTMLStencilElement {
    }
    var HTMLDescriptionBlockElement: {
        prototype: HTMLDescriptionBlockElement;
        new (): HTMLDescriptionBlockElement;
    };
    interface HTMLFeedTemplateElement extends Components.FeedTemplate, HTMLStencilElement {
    }
    var HTMLFeedTemplateElement: {
        prototype: HTMLFeedTemplateElement;
        new (): HTMLFeedTemplateElement;
    };
    interface HTMLLogoMainElement extends Components.LogoMain, HTMLStencilElement {
    }
    var HTMLLogoMainElement: {
        prototype: HTMLLogoMainElement;
        new (): HTMLLogoMainElement;
    };
    interface HTMLNavbarMainElement extends Components.NavbarMain, HTMLStencilElement {
    }
    var HTMLNavbarMainElement: {
        prototype: HTMLNavbarMainElement;
        new (): HTMLNavbarMainElement;
    };
    interface HTMLPostStampElement extends Components.PostStamp, HTMLStencilElement {
    }
    var HTMLPostStampElement: {
        prototype: HTMLPostStampElement;
        new (): HTMLPostStampElement;
    };
    interface HTMLSearchBarElement extends Components.SearchBar, HTMLStencilElement {
    }
    var HTMLSearchBarElement: {
        prototype: HTMLSearchBarElement;
        new (): HTMLSearchBarElement;
    };
    interface HTMLElementTagNameMap {
        "article-feed": HTMLArticleFeedElement;
        "article-stats": HTMLArticleStatsElement;
        "article-tags": HTMLArticleTagsElement;
        "avatar-circle": HTMLAvatarCircleElement;
        "button-hash": HTMLButtonHashElement;
        "button-main": HTMLButtonMainElement;
        "card-article": HTMLCardArticleElement;
        "card-main": HTMLCardMainElement;
        "description-block": HTMLDescriptionBlockElement;
        "feed-template": HTMLFeedTemplateElement;
        "logo-main": HTMLLogoMainElement;
        "navbar-main": HTMLNavbarMainElement;
        "post-stamp": HTMLPostStampElement;
        "search-bar": HTMLSearchBarElement;
    }
}
declare namespace LocalJSX {
    interface ArticleFeed {
        "article"?: any;
    }
    interface ArticleStats {
        "comments"?: string;
        "minToRead"?: string;
        "reactions"?: string;
    }
    interface ArticleTags {
        "tags"?: string[];
    }
    interface AvatarCircle {
        "pic"?: string;
    }
    interface ButtonHash {
        "color"?: string;
        "font"?: string;
        "link"?: string;
    }
    interface ButtonMain {
        "color"?: string;
        "font"?: string;
        "link"?: string;
    }
    interface CardArticle {
    }
    interface CardMain {
    }
    interface DescriptionBlock {
    }
    interface FeedTemplate {
    }
    interface LogoMain {
    }
    interface NavbarMain {
    }
    interface PostStamp {
        "picSrc"?: string;
        "timestamp"?: string;
        "username"?: string;
    }
    interface SearchBar {
    }
    interface IntrinsicElements {
        "article-feed": ArticleFeed;
        "article-stats": ArticleStats;
        "article-tags": ArticleTags;
        "avatar-circle": AvatarCircle;
        "button-hash": ButtonHash;
        "button-main": ButtonMain;
        "card-article": CardArticle;
        "card-main": CardMain;
        "description-block": DescriptionBlock;
        "feed-template": FeedTemplate;
        "logo-main": LogoMain;
        "navbar-main": NavbarMain;
        "post-stamp": PostStamp;
        "search-bar": SearchBar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "article-feed": LocalJSX.ArticleFeed & JSXBase.HTMLAttributes<HTMLArticleFeedElement>;
            "article-stats": LocalJSX.ArticleStats & JSXBase.HTMLAttributes<HTMLArticleStatsElement>;
            "article-tags": LocalJSX.ArticleTags & JSXBase.HTMLAttributes<HTMLArticleTagsElement>;
            "avatar-circle": LocalJSX.AvatarCircle & JSXBase.HTMLAttributes<HTMLAvatarCircleElement>;
            "button-hash": LocalJSX.ButtonHash & JSXBase.HTMLAttributes<HTMLButtonHashElement>;
            "button-main": LocalJSX.ButtonMain & JSXBase.HTMLAttributes<HTMLButtonMainElement>;
            "card-article": LocalJSX.CardArticle & JSXBase.HTMLAttributes<HTMLCardArticleElement>;
            "card-main": LocalJSX.CardMain & JSXBase.HTMLAttributes<HTMLCardMainElement>;
            "description-block": LocalJSX.DescriptionBlock & JSXBase.HTMLAttributes<HTMLDescriptionBlockElement>;
            "feed-template": LocalJSX.FeedTemplate & JSXBase.HTMLAttributes<HTMLFeedTemplateElement>;
            "logo-main": LocalJSX.LogoMain & JSXBase.HTMLAttributes<HTMLLogoMainElement>;
            "navbar-main": LocalJSX.NavbarMain & JSXBase.HTMLAttributes<HTMLNavbarMainElement>;
            "post-stamp": LocalJSX.PostStamp & JSXBase.HTMLAttributes<HTMLPostStampElement>;
            "search-bar": LocalJSX.SearchBar & JSXBase.HTMLAttributes<HTMLSearchBarElement>;
        }
    }
}
