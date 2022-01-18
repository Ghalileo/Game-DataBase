// Attaches headers that are utilized

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {environment as env} from '../../environments/environment'

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor () {}
intercept(
    req: HttpRequest<any>,
    next: HttpHandler
): Observable<HttpEvent<any>>{
    req = req.clone({
        setHeaders:{
            'x-rapidapi-key': `${env.RAPIDAPI_KEY}`,
            'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com', 
        },
        
        setParams:{
            key:`${env.API_KEY}`
        }
        
    });
    return next.handle(req)
}
}