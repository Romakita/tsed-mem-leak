"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conf_1 = require("./config/conf");
const common_1 = require("@tsed/common");
const body_parser_1 = __importDefault(require("body-parser"));
const compression_1 = __importDefault(require("compression"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const method_override_1 = __importDefault(require("method-override"));
let Server = class Server extends common_1.ServerLoader {
    $afterInit() {
        this.use(body_parser_1.default.json());
    }
    $beforeRoutesInit() {
        if (this.httpServer) {
            this.httpServer.keepAliveTimeout = 600000;
        }
        if (this.httpsServer) {
            this.httpsServer.keepAliveTimeout = 600000;
        }
        this.use(cookie_parser_1.default())
            .use(compression_1.default({}))
            .use(cors_1.default())
            .use(method_override_1.default())
            .use(body_parser_1.default.urlencoded({
            extended: true
        }));
    }
    $onReady() {
        common_1.$log.info('Server started...');
    }
};
Server = __decorate([
    common_1.ServerSettings(conf_1.conf)
], Server);
exports.Server = Server;
//# sourceMappingURL=Server.js.map