// Attaches headers that are utilized

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor () {}
intercept(
    req: HttpRequest<any>,
    next: HttpHandler
): Observable<HttpEvent<any>>{
    req = req.clone({
        setHeaders:{
            'x-rapidapi-key': 'b941293b81msh888e847afeb0f1bp152bbejsna49ed5b51064',
            'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com', 
        },
        
        setParams:{
            key:'7f1b00080cbf41f4b5cd90d0534e02e8'
        }
        
    });
    return next.handle(req)
}
}