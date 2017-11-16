import {isMe} from '../utils';

export default async (ctx, next) => {
    if (ctx.message && ctx.message.new_chat_member && isMe(ctx.message.new_chat_member)) {
        ctx.reply('I`m ready!!');
    }
    next();
}