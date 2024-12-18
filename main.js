/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(1);
const config_1 = __webpack_require__(4);
const modules_expose_1 = __webpack_require__(5);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot(), ...modules_expose_1.moduleList],
    })
], AppModule);


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.moduleList = void 0;
const mongoose_1 = __webpack_require__(6);
const links_module_1 = __webpack_require__(7);
const mongoose_connection_1 = __webpack_require__(13);
exports.moduleList = [
    mongoose_1.MongooseModule.forRoot((_a = process.env.MONGO_URI_SHRTR) !== null && _a !== void 0 ? _a : process.env.MONGO_URI, {
        connectionName: mongoose_connection_1.connectionName,
    }),
    links_module_1.LinksModule,
];


/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LinksModule = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(6);
const link_entity_1 = __webpack_require__(8);
const links_controller_1 = __webpack_require__(9);
const links_service_1 = __webpack_require__(10);
const mongoose_connection_1 = __webpack_require__(13);
let LinksModule = class LinksModule {
};
exports.LinksModule = LinksModule;
exports.LinksModule = LinksModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: link_entity_1.Link.name, schema: link_entity_1.LinkSchema }], mongoose_connection_1.connectionName),
        ],
        providers: [links_service_1.LinksService],
        controllers: [links_controller_1.LinksController],
        exports: [],
    })
], LinksModule);


/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LinkSchema = exports.Link = void 0;
const mongoose_1 = __webpack_require__(6);
let Link = class Link {
};
exports.Link = Link;
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], Link.prototype, "shrt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], Link.prototype, "link", void 0);
exports.Link = Link = __decorate([
    (0, mongoose_1.Schema)({ collection: 'link' })
], Link);
exports.LinkSchema = mongoose_1.SchemaFactory.createForClass(Link);


/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LinksController = void 0;
const common_1 = __webpack_require__(1);
const links_service_1 = __webpack_require__(10);
const link_add_request_dto_1 = __webpack_require__(14);
const http_interfaces_1 = __webpack_require__(17);
let LinksController = class LinksController {
    constructor(linksService) {
        this.linksService = linksService;
    }
    findAll() {
        return this.linksService.findAll();
    }
    async find(response, shrt) {
        const redirectToError = () => response.status(302).redirect(`${process.env.SHRTR_HOME}?error`);
        try {
            const data = await this.linksService.findOneByShrt(shrt);
            if (data.link !== undefined) {
                let { link } = data;
                link = /https?:\/\//.test(link) ? link : `http://${link}`;
                response.status(302).redirect(link);
                return;
            }
            console.error('Not found');
            redirectToError();
            return;
        }
        catch (err) {
            console.error(err);
            redirectToError();
        }
    }
    count() {
        return this.linksService.count();
    }
    add(requestDto) {
        return this.linksService.generate(requestDto);
    }
};
exports.LinksController = LinksController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], LinksController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('@/:shrt'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('shrt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof http_interfaces_1.ApiResponse !== "undefined" && http_interfaces_1.ApiResponse) === "function" ? _c : Object, String]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], LinksController.prototype, "find", null);
__decorate([
    (0, common_1.Get)('count'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], LinksController.prototype, "count", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof link_add_request_dto_1.default !== "undefined" && link_add_request_dto_1.default) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], LinksController.prototype, "add", null);
exports.LinksController = LinksController = __decorate([
    (0, common_1.Controller)('links'),
    __metadata("design:paramtypes", [typeof (_a = typeof links_service_1.LinksService !== "undefined" && links_service_1.LinksService) === "function" ? _a : Object])
], LinksController);


/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var LinksService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LinksService = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(6);
const mongoose_2 = __webpack_require__(11);
const link_entity_1 = __webpack_require__(8);
const link_response_dto_1 = __webpack_require__(12);
const mongoose_connection_1 = __webpack_require__(13);
const { ObjectId } = mongoose_2.Types;
let LinksService = LinksService_1 = class LinksService {
    constructor(linkModel) {
        this.linkModel = linkModel;
        this.logger = new common_1.Logger(LinksService_1.name);
    }
    async findOneByShrt(shrt) {
        try {
            const link = await this.linkModel.findOne({ shrt }).exec();
            return link_response_dto_1.default.from(link);
        }
        catch (error) {
            throw new common_1.HttpException('Error finding the link', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findOne(id) {
        try {
            const _id = new ObjectId(id);
            const link = await this.linkModel.findById(_id).exec();
            return link_response_dto_1.default.from(link);
        }
        catch (error) {
            throw new common_1.HttpException('Error finding the link', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll() {
        try {
            const links = await this.linkModel.find().exec();
            return links.map(link_response_dto_1.default.from);
        }
        catch (error) {
            throw new common_1.HttpException('Error finding links', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async existsByShrt(shrt) {
        return await this.exists({ shrt });
    }
    async exists(query) {
        try {
            return (await this.linkModel.exists(query))._id !== undefined;
        }
        catch (error) {
            throw new common_1.HttpException('Error validating existence of the link', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async count() {
        try {
            return await this.linkModel.countDocuments().exec();
        }
        catch (error) {
            throw new common_1.HttpException('Error counting links', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async add(requestDto) {
        try {
            const newLink = new this.linkModel();
            newLink.link = requestDto.link;
            newLink.shrt = requestDto.shrt;
            const link = await newLink.save();
            return link_response_dto_1.default.from(link);
        }
        catch (error) {
            throw new common_1.HttpException('Error recording the link', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async generate(requestDto, recursion = false) {
        const regenerate = () => {
            const shrt = (Math.random() * 9007199254740991)
                .toString(36)
                .replace('.', 'A');
            return this.generate(Object.assign(Object.assign({}, requestDto), { shrt }), true);
        };
        try {
            if (requestDto.shrt !== undefined) {
                const exists = await this.existsByShrt(requestDto.shrt);
                if (exists) {
                    if (recursion) {
                        return regenerate();
                    }
                    return Promise.reject(new common_1.HttpException('The alias already exists, please try another', common_1.HttpStatus.BAD_REQUEST));
                }
                return this.add(requestDto);
            }
        }
        catch (error) {
            throw new common_1.HttpException('Error recording the link', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.LinksService = LinksService;
exports.LinksService = LinksService = LinksService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(link_entity_1.Link.name, mongoose_connection_1.connectionName)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], LinksService);


/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class LinkResponseDTO {
    constructor(id, link, shrt) {
        this.id = id;
        this.link = link;
        this.shrt = shrt;
    }
}
LinkResponseDTO.from = ({ _id, link, shrt }) => new LinkResponseDTO(_id.toHexString(), link, shrt);
exports["default"] = LinkResponseDTO;


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.connectionName = void 0;
exports.connectionName = 'shrtr';


/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const class_validator_1 = __webpack_require__(15);
const validation_messages_constants_1 = __webpack_require__(16);
class LinkAddRequestDTO {
}
exports["default"] = LinkAddRequestDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: validation_messages_constants_1.ValidationMessages.IS_NOT_EMPTY }),
    __metadata("design:type", String)
], LinkAddRequestDTO.prototype, "link", void 0);


/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationMessages = void 0;
exports.ValidationMessages = Object.freeze({
    IS_NOT_EMPTY: 'Campo $property não pode ser vazio.',
    IS_NOT_DATE: 'Campo $property não é uma data válida.',
    IS_NOT_NUMBER: 'Campo $property não é um número válido.',
});


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const app_module_1 = __webpack_require__(3);
const bootstrap = async () => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
        next();
    });
    await app.listen(3000);
};
bootstrap();

})();

/******/ })()
;