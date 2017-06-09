import * as express from "express";
import * as path from 'path';
// import * as favicon  from 'serve-favicon';
import * as logger from 'morgan';
// import * as cookieParser  from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as routes from './routes';
// error TS2688: Cannot find type definition file for 'localforage'.  运行 npm i --save-dev -d @types/localforage

class Server {
    constructor(
    ) {
        this.app = express();
        this.config();
        this.routes();
        this.init();
    }
    public static bootstrap(): Server {
        return new Server();
    }
    app: express.Application;
    /**
     * 启动
     */
    init() {
        this.app.set('port', process.env.PORT || '3000');
        this.app.listen(this.app.get("port"), () => {
            console.log("App is running at http://localhost:%d ", this.app.get("port"));
        })
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
    }
}
// 启动
Server.bootstrap();
