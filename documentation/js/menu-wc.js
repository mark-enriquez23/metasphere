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
                    <a href="index.html" data-type="index-link">metasphere documentation</a>
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
                    <li class="chapter additional">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#additional-pages"'
                            : 'data-target="#xs-additional-pages"' }>
                            <span class="icon ion-ios-book"></span>
                            <span>Additional documentation</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"' }>
                                    <li class="link ">
                                        <a href="additional-documentation/landing-page.html" data-type="entity-link" data-context-id="additional">Landing Page</a>
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
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-7f84ffba6a3d65e80215dcec62a7a5c5"' : 'data-target="#xs-components-links-module-AppModule-7f84ffba6a3d65e80215dcec62a7a5c5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-7f84ffba6a3d65e80215dcec62a7a5c5"' :
                                            'id="xs-components-links-module-AppModule-7f84ffba6a3d65e80215dcec62a7a5c5"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageLoaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageLoaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HotelInformationModule.html" data-type="entity-link">HotelInformationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HotelInformationModule-dfb8c17e463aceb1cb94f726ca2505b6"' : 'data-target="#xs-components-links-module-HotelInformationModule-dfb8c17e463aceb1cb94f726ca2505b6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HotelInformationModule-dfb8c17e463aceb1cb94f726ca2505b6"' :
                                            'id="xs-components-links-module-HotelInformationModule-dfb8c17e463aceb1cb94f726ca2505b6"' }>
                                            <li class="link">
                                                <a href="components/FacilitiesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FacilitiesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FaqComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FaqComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServicesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ServicesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HotelInformationRoutingModule.html" data-type="entity-link">HotelInformationRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LandingModule.html" data-type="entity-link">LandingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LandingModule-80410ec21dd6afd19b86607a52585517"' : 'data-target="#xs-components-links-module-LandingModule-80410ec21dd6afd19b86607a52585517"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LandingModule-80410ec21dd6afd19b86607a52585517"' :
                                            'id="xs-components-links-module-LandingModule-80410ec21dd6afd19b86607a52585517"' }>
                                            <li class="link">
                                                <a href="components/LandingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LandingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LandingRoutingModule.html" data-type="entity-link">LandingRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link">LoginModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link">LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MainModule.html" data-type="entity-link">MainModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MainModule-c6c3f20a28916841e33d512a0e4f5557"' : 'data-target="#xs-components-links-module-MainModule-c6c3f20a28916841e33d512a0e4f5557"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MainModule-c6c3f20a28916841e33d512a0e4f5557"' :
                                            'id="xs-components-links-module-MainModule-c6c3f20a28916841e33d512a0e4f5557"' }>
                                            <li class="link">
                                                <a href="components/MainComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MainRoutingModule.html" data-type="entity-link">MainRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MyExperienceLoginModule.html" data-type="entity-link">MyExperienceLoginModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrderModule.html" data-type="entity-link">OrderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrderModule-92ffe365d0a992710b43d0e90d083eb1"' : 'data-target="#xs-components-links-module-OrderModule-92ffe365d0a992710b43d0e90d083eb1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrderModule-92ffe365d0a992710b43d0e90d083eb1"' :
                                            'id="xs-components-links-module-OrderModule-92ffe365d0a992710b43d0e90d083eb1"' }>
                                            <li class="link">
                                                <a href="components/CartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoryCardsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CategoryCardsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FbComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FbComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FbDrinksComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FbDrinksComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FbFoodComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FbFoodComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FbHomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FbHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FbItemCardsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FbItemCardsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FbNavHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FbNavHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HkAmenitiesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HkAmenitiesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HkComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HkComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HkHomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HkHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HkNavHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HkNavHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HkServicesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HkServicesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItemCardsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ItemCardsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReviewOrdersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ReviewOrdersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServicesCardsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ServicesCardsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderRoutingModule.html" data-type="entity-link">OrderRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PreCheckModule.html" data-type="entity-link">PreCheckModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PreCheckModule-c54b46a112c2cb9a558b704d7d8486ec"' : 'data-target="#xs-components-links-module-PreCheckModule-c54b46a112c2cb9a558b704d7d8486ec"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PreCheckModule-c54b46a112c2cb9a558b704d7d8486ec"' :
                                            'id="xs-components-links-module-PreCheckModule-c54b46a112c2cb9a558b704d7d8486ec"' }>
                                            <li class="link">
                                                <a href="components/PreCheckComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PreCheckComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PreCheckRoutingModule.html" data-type="entity-link">PreCheckRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SelfServiceModule.html" data-type="entity-link">SelfServiceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SelfServiceModule-d98d5e5c434fce1143031dcb77b75371"' : 'data-target="#xs-components-links-module-SelfServiceModule-d98d5e5c434fce1143031dcb77b75371"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SelfServiceModule-d98d5e5c434fce1143031dcb77b75371"' :
                                            'id="xs-components-links-module-SelfServiceModule-d98d5e5c434fce1143031dcb77b75371"' }>
                                            <li class="link">
                                                <a href="components/ConfirmDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfirmDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StepFiveComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StepFiveComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StepFourComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StepFourComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StepOneComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StepOneComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StepSixComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StepSixComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StepThreeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StepThreeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StepTwoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StepTwoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StepperComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StepperComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SelfServiceRoutingModule.html" data-type="entity-link">SelfServiceRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-8ef8cce6c7f3448edb9ff0c62afde0a1"' : 'data-target="#xs-components-links-module-SharedModule-8ef8cce6c7f3448edb9ff0c62afde0a1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-8ef8cce6c7f3448edb9ff0c62afde0a1"' :
                                            'id="xs-components-links-module-SharedModule-8ef8cce6c7f3448edb9ff0c62afde0a1"' }>
                                            <li class="link">
                                                <a href="components/ConfirmationDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfirmationDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OptionsDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OptionsDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PublicHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PublicHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SpinnerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SpinnerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UploadDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UploadDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-8ef8cce6c7f3448edb9ff0c62afde0a1"' : 'data-target="#xs-pipes-links-module-SharedModule-8ef8cce6c7f3448edb9ff0c62afde0a1"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-8ef8cce6c7f3448edb9ff0c62afde0a1"' :
                                            'id="xs-pipes-links-module-SharedModule-8ef8cce6c7f3448edb9ff0c62afde0a1"' }>
                                            <li class="link">
                                                <a href="pipes/ValidateNationalitiesListPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ValidateNationalitiesListPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/LoginComponent-1.html" data-type="entity-link">LoginComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NavHeaderComponent-1.html" data-type="entity-link">NavHeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NavHeaderComponent-2.html" data-type="entity-link">NavHeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NavHeaderComponent-3.html" data-type="entity-link">NavHeaderComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AddItemCart.html" data-type="entity-link">AddItemCart</a>
                            </li>
                            <li class="link">
                                <a href="classes/RemoveItemCart.html" data-type="entity-link">RemoveItemCart</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetCart.html" data-type="entity-link">SetCart</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCart.html" data-type="entity-link">UpdateCart</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ApiService.html" data-type="entity-link">ApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CheckTransactionHistoryService.html" data-type="entity-link">CheckTransactionHistoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GeneralService.html" data-type="entity-link">GeneralService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ItemListingService.html" data-type="entity-link">ItemListingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MainCategoryService.html" data-type="entity-link">MainCategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderListingService.html" data-type="entity-link">OrderListingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PreCheckinService.html" data-type="entity-link">PreCheckinService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RoomServerListingService.html" data-type="entity-link">RoomServerListingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SaveDocumentsService.html" data-type="entity-link">SaveDocumentsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SecondaryCategoryService.html" data-type="entity-link">SecondaryCategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SelfServiceGuardService.html" data-type="entity-link">SelfServiceGuardService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ServiceOrderListingService.html" data-type="entity-link">ServiceOrderListingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SpinnerService.html" data-type="entity-link">SpinnerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubmitGuestInfoService.html" data-type="entity-link">SubmitGuestInfoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubmitOrderService.html" data-type="entity-link">SubmitOrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuardService.html" data-type="entity-link">AuthGuardService</a>
                            </li>
                            <li class="link">
                                <a href="guards/FbfoodResolver.html" data-type="entity-link">FbfoodResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/FbhomeResolver.html" data-type="entity-link">FbhomeResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/HkamenitiesResolver.html" data-type="entity-link">HkamenitiesResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/HkhomeResolver.html" data-type="entity-link">HkhomeResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/HkServicesResolver.html" data-type="entity-link">HkServicesResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/StepperResolver.html" data-type="entity-link">StepperResolver</a>
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
                                <a href="interfaces/CartModel.html" data-type="entity-link">CartModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CartModel-1.html" data-type="entity-link">CartModel</a>
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
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
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