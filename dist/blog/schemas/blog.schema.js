"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogSchema = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
(0, mongoose_1.Schema)();
exports.BlogSchema = new mongoose.Schema({
    title: String,
    description: String,
    body: String,
    author: String,
    date_posted: String
});
//# sourceMappingURL=blog.schema.js.map