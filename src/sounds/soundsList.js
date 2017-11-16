import sounds from './sounds'

export default (ctx) => {
    ctx.reply(`All sounds for inline-mod: @usernameBot

${Object.keys(sounds).join('\r\n')}`);
}
