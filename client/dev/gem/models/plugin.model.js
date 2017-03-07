"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Plugin {
    constructor(name, content, version, createdAt, username) {
        this.name = name;
        this.content = content;
        this.version = version;
        this.createdAt = createdAt;
        this.username = username;
    }
}
exports.Plugin = Plugin;
