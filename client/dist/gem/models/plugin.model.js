"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Plugin {
    constructor(id, name, version, createdAt, content, username) {
        this.id = id;
        this.name = name;
        this.version = version;
        this.createdAt = createdAt;
        this.content = content;
        this.username = username;
    }
}
exports.Plugin = Plugin;
