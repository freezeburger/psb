'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">psb documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccountModule.html" data-type="entity-link">AccountModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AccountModule-c223a74a35c82fd5993dd3fa40d632a8"' : 'data-target="#xs-components-links-module-AccountModule-c223a74a35c82fd5993dd3fa40d632a8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AccountModule-c223a74a35c82fd5993dd3fa40d632a8"' :
                                            'id="xs-components-links-module-AccountModule-c223a74a35c82fd5993dd3fa40d632a8"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-473562adfbf78105e97abb01288da0f9"' : 'data-target="#xs-components-links-module-AppModule-473562adfbf78105e97abb01288da0f9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-473562adfbf78105e97abb01288da0f9"' :
                                            'id="xs-components-links-module-AppModule-473562adfbf78105e97abb01288da0f9"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BaseModule.html" data-type="entity-link">BaseModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BaseModule-e2e36197101513332e9c7aee56bbf3c4"' : 'data-target="#xs-components-links-module-BaseModule-e2e36197101513332e9c7aee56bbf3c4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BaseModule-e2e36197101513332e9c7aee56bbf3c4"' :
                                            'id="xs-components-links-module-BaseModule-e2e36197101513332e9c7aee56bbf3c4"' }>
                                            <li class="link">
                                                <a href="components/BaseAlertComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BaseAlertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseButtonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BaseButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseFooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BaseFooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BaseHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseImageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BaseImageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BlogModule.html" data-type="entity-link">BlogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BlogModule-48ca93a22d03a59e1536b883c97bcd16"' : 'data-target="#xs-components-links-module-BlogModule-48ca93a22d03a59e1536b883c97bcd16"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BlogModule-48ca93a22d03a59e1536b883c97bcd16"' :
                                            'id="xs-components-links-module-BlogModule-48ca93a22d03a59e1536b883c97bcd16"' }>
                                            <li class="link">
                                                <a href="components/BlogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BlogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BlogPostCommentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BlogPostCommentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BlogPostComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BlogPostComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeatureModule.html" data-type="entity-link">FeatureModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link">LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-20df9a48e2e09ff365dad02856b9f865"' : 'data-target="#xs-components-links-module-LoginModule-20df9a48e2e09ff365dad02856b9f865"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-20df9a48e2e09ff365dad02856b9f865"' :
                                            'id="xs-components-links-module-LoginModule-20df9a48e2e09ff365dad02856b9f865"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginRegisterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginRegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageModule.html" data-type="entity-link">PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageModule-e01343f5f37ce238c1f7990ff32326fe"' : 'data-target="#xs-components-links-module-PageModule-e01343f5f37ce238c1f7990ff32326fe"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageModule-e01343f5f37ce238c1f7990ff32326fe"' :
                                            'id="xs-components-links-module-PageModule-e01343f5f37ce238c1f7990ff32326fe"' }>
                                            <li class="link">
                                                <a href="components/PageBlogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageBlogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageLoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageLoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PagePollComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PagePollComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageShopComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageShopComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageTypeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageTypeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PollModule.html" data-type="entity-link">PollModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PollModule-9411bb309a43b2995758bc2496ba6aa8"' : 'data-target="#xs-components-links-module-PollModule-9411bb309a43b2995758bc2496ba6aa8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PollModule-9411bb309a43b2995758bc2496ba6aa8"' :
                                            'id="xs-components-links-module-PollModule-9411bb309a43b2995758bc2496ba6aa8"' }>
                                            <li class="link">
                                                <a href="components/PollComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PollComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PollCreatorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PollCreatorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PollViewerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PollViewerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ShopModule.html" data-type="entity-link">ShopModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ShopModule-6158bee986631efd0b895a56c2ffd506"' : 'data-target="#xs-components-links-module-ShopModule-6158bee986631efd0b895a56c2ffd506"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ShopModule-6158bee986631efd0b895a56c2ffd506"' :
                                            'id="xs-components-links-module-ShopModule-6158bee986631efd0b895a56c2ffd506"' }>
                                            <li class="link">
                                                <a href="components/ShopCartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShopCartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShopComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShopComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShopListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShopListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShopListItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShopListItemComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Alert.html" data-type="entity-link">Alert</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});