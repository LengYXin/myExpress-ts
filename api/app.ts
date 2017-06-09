/// <reference path="../typings/tsd.d.ts" />
import * as express from "express";
import * as path from 'path';
// import * as favicon  from 'serve-favicon';
import * as logger from 'morgan';
// import * as cookieParser  from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as routes from './routes';
import * as AppConfig from "../AppConfig.json";
// error TS2688: Cannot find type definition file for 'localforage'.  运行 npm i --save-dev -d @types/localforage
console.log("config-------------------", AppConfig);
export default class App {
    constructor(PORT?) {
        this.app = express();
        this.config();
        this.routes();
        if (PORT) {
            this.PORT = PORT;
        }
    }
    public static bootstrap(): App {
        return new App().init();
    }
    private PORT = process.env.PORT || AppConfig.PORT;
    app: express.Application;
    /**
     * 启动
     */
    init(): App {
        this.app.set('port', this.PORT);
        this.app.listen(this.app.get("port"), () => {
            console.log("App is running at http://localhost:%d ", this.app.get("port"));
        })
        return this;
    }
    /**
     * 注册路由
     */
    private routes() {
        let router: express.Router = express.Router();
        routes.modularList.map(x => {
            console.log("---------", x);
            this.app.get(x.path, x.router);
        });

        // catch 404 and forward to error handler
        this.app.use(function (req, res, next) {
            var err: any = new Error('Not Found');
            err.status = 404;
            next(err);
        });

        // error handler
        this.app.use(function (err, req, res, next) {
            // set locals, only providing error in development
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'development' ? err : {};

            // render the error page
            res.status(err.status || 500);
            res.render('error');
        });
        // this.app.use(router);
    }
    /**
     * 配置项
     */
    private config() {
        // view engine setup
        this.app.set('views', path.join(path.dirname(__dirname), 'views'));
        this.app.set('view engine', 'pug');
        // uncomment after placing your favicon in /public
        //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
        this.app.use(logger('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // app.use(cookieParser());
        this.app.use(express.static(path.join(__dirname, 'public')));
        this.app.use((req, res, next) => {
            // After successful login, redirect back to the intended page
            if (!req.user &&
                req.path !== "/login" &&
                req.path !== "/signup" &&
                !req.path.match(/^\/auth/) &&
                !req.path.match(/\./)) {
                // req.session.returnTo = req.path;
                console.log("--------------req---------------", req.path);
            } else if (req.user && req.path == "/account") {
                // req.session.returnTo = req.path;
                console.log("--------------req---------------", req.path);
            }
            next();
        });
    }
}
// 启动
// export let App = Server.bootstrap();
