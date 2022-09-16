window.SIDEBAR_ITEMS = {"attr":[["connect","Creates route handler with `actix_web::guard::Connect`."],["delete","Creates route handler with `actix_web::guard::Delete`."],["get","Creates route handler with `actix_web::guard::Get`."],["head","Creates route handler with `actix_web::guard::Head`."],["main","Marks async main function as the Actix Web system entry-point."],["options","Creates route handler with `actix_web::guard::Options`."],["patch","Creates route handler with `actix_web::guard::Patch`."],["post","Creates route handler with `actix_web::guard::Post`."],["put","Creates route handler with `actix_web::guard::Put`."],["route","Creates resource handler, allowing multiple HTTP method guards."],["test","Marks async test functions to use the actix system entry-point."],["trace","Creates route handler with `actix_web::guard::Trace`."]],"enum":[["Either","Combines two extractor or responder types into a single type."]],"macro":[["services","Macro to help register different types of services at the same time."]],"mod":[["body","Traits and structures to aid consuming and writing HTTP payloads."],["dev","Lower-level types and re-exports."],["error","Error and Result module"],["guard","Route guards."],["http","Various HTTP related types."],["middleware","A collection of common middleware."],["rt","A selection of re-exports from `tokio` and `actix-rt`."],["test","Various helpers for Actix applications to use during testing."],["web","Essentials helper functions and types for application registration."]],"struct":[["App","The top-level builder for an Actix Web application."],["CustomizeResponder","Allows overriding status code and headers for a [`Responder`]."],["Error","General purpose Actix Web error."],["HttpRequest","An incoming request."],["HttpResponse","An outgoing response."],["HttpResponseBuilder","An HTTP response builder."],["HttpServer","An HTTP Server."],["Resource","A collection of [`Route`]s that respond to the same path pattern."],["Route","A request handler with guards."],["Scope","A collection of [`Route`]s, [`Resource`]s, or other services that share a common path prefix."]],"trait":[["FromRequest","A type that implements [`FromRequest`] is called an extractor and can extract data from the request. Some types that implement this trait are: `Json`, `Header`, and `Path`."],["Handler","The interface for request handlers."],["HttpMessage","Trait that implements general purpose operations on HTTP messages."],["Responder","Trait implemented by types that can be converted to an HTTP response."],["ResponseError","Errors that can generate responses."]],"type":[["Result","A convenience `Result` for Actix Web operations."]]};