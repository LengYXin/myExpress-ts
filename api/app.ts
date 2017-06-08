import * as express from "express";
import * as path from 'path';
// import * as favicon  from 'serve-favicon';
import * as logger from 'morgan';
// import * as cookieParser  from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as routes from './routes';
// error TS2688: Cannot find type definition file for 'localforage'.  运行 npm i --save-dev -d @types/localforage

let app = express();

// view engine setup
console.log("-------------", path.dirname(__dirname));
app.set('views', path.join(path.dirname(__dirname), 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

routes.modularList.forEach(route => {
    let { path, router } = route;
    app.get(path, router);
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err: any = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
console.log("object", app);
export { app };

