"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCommentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const comment_entity_1 = require("../entities/comment.entity");
class CreateCommentDto extends (0, swagger_1.PickType)(comment_entity_1.Comment, ['comment']) {
}
exports.CreateCommentDto = CreateCommentDto;
//# sourceMappingURL=create-comment.dto.js.map