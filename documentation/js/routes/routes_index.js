var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/core/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","redirectTo":"landing","pathMatch":"full"},{"path":"landing","loadChildren":"src/app/modules/landing/landing.module#LandingModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/landing/landing-routing.module.ts","module":"LandingRoutingModule","children":[{"path":"","component":"LandingComponent","pathMatch":"full"}],"kind":"module"}],"module":"LandingModule"}]},{"path":"hotel-information","loadChildren":"src/app/modules/hotel-information/hotel-information.module#HotelInformationModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/hotel-information/hotel-information-routing.module.ts","module":"HotelInformationRoutingModule","children":[{"path":"","component":"HotelInformationComponent","children":[{"path":"","redirectTo":"services","pathMatch":"full"},{"path":"services","component":"ServicesComponent"},{"path":"facilities","component":"FacilitiesComponent"},{"path":"faq","component":"FaqComponent"}]}],"kind":"module"}],"module":"HotelInformationModule"}]}],"kind":"module"}]}