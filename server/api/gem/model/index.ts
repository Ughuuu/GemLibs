"use strict";

import Plugin from './plugin.model';
import User from './user.model';
import Message from './message.model';
import Role from './role.model';

export default function (orm, db) {
    Role(orm, db);
    User(orm, db);
    Message(orm, db);
    Plugin(orm, db);
};