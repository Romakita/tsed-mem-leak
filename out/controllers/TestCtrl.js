"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@tsed/common");
const swagger_1 = require("@tsed/swagger");
const Data_1 = require("../models/Data");
let TestCtrl = class TestCtrl {
    async get(id) {
        common_1.$log.info(`GET - id ${id}`);
        return {
            id,
            name: `${id} name`
        };
    }
    async post(id, name) {
        common_1.$log.info(`POST - id ${id} `);
        return {
            id,
            name
        };
    }
    async put(id, name) {
        common_1.$log.info(`PUT - id ${id} `);
        return {
            id,
            name
        };
    }
    async delete(id) {
        common_1.$log.info(`DELETE - id ${id} `);
        return {
            id,
            name: `${id} name`
        };
    }
};
__decorate([
    common_1.Get('/:id'),
    swagger_1.Returns(Data_1.Data),
    __param(0, common_1.PathParams('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TestCtrl.prototype, "get", null);
__decorate([
    common_1.Post('/:id'),
    swagger_1.Returns(Data_1.Data),
    __param(0, common_1.PathParams('id')),
    __param(1, common_1.BodyParams('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], TestCtrl.prototype, "post", null);
__decorate([
    common_1.Put('/:id'),
    swagger_1.Returns(Data_1.Data),
    __param(0, common_1.PathParams('id')),
    __param(1, common_1.QueryParams('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], TestCtrl.prototype, "put", null);
__decorate([
    common_1.Delete('/:id'),
    swagger_1.Returns(Data_1.Data),
    __param(0, common_1.PathParams('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TestCtrl.prototype, "delete", null);
TestCtrl = __decorate([
    common_1.Controller('ctrl')
], TestCtrl);
exports.TestCtrl = TestCtrl;
//# sourceMappingURL=TestCtrl.js.map