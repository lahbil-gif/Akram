const express = require('express');
const app = express();
const chalk = require("chalk");

app.get('/', (req, res) => {
  res.send('Hello Express app!')
})
app.use('/ping', (req, res) => {
  res.send(new Date());
});
app.listen(3000, () => {
  console.log(chalk.red.bold('Express is ready.'))
});

const Discord = require("discord.js");

const { Client, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu, Intents } = require("discord.js");


const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
  ],
  allowedMentions: { repliedUser: true }, ws: {
    properties: { $browser: "Discord iOS" }
  },
});

const db = require("quick.db");
const ms = require("ms");

const prefix = "§";

client.on('ready', () => {
  console.log(`================`)
  console.log(``)
  console.log(`Bot User name : ${client.user.username}`)
  console.log(`Bot Id : ${client.user.id}`)
  console.log(`Bot Tag : ${client.user.tag}`)
  console.log(`Servers Count : ${client.guilds.cache.size}`)
  console.log(`Users Count : ${client.guilds.cache
    .reduce((a, b) => a + b.memberCount, 0)
    .toLocaleString()}`)
  console.log(``)
  console.log(`================`)
  client.user.setActivity(`Guild : ${client.guilds.cache.size.toLocaleString()}`, { type: 'online' })
  client.user.setActivity(`${prefix}help`, { type: 'WATCHING' })
});


client.login("MTI3MDg1NDAzODcxOTU2MTc5MA.GV65ao.2Dsz3XCHcw9vucdY6tGM-t9fuJE-wmlibynjG8").catch((err) => {
  console.log(err.message)
});


client.on('ready', () => {
  console.log(``)

  setInterval(() => {

    const activities = [`BY LAHBIL`, `Welcome To Zone Bot`];
    const random = activities[Math.floor(Math.random() * activities.length)]

    client.user.setActivity(`${random}`, { type: `PLAYING` });

  }, 1000 * 5)// كل 20 ثانيه بيتغير

})

// ===================== Const Channel ===================== \\

const FeedbackChannel = "1270831206199595149" // ايدي روم الفيد باك
const SuggestionChannel = "1274415473953341571" // ايدي روم الاقتراحات
const OfferChannel = "1271561277520609311" // ايدي روم الخط التلقائي
const TaxChannel = "1270831253947420682" // ايدي روم الضريبه
const WelcomeChannel = "1270431058655055872" // ايدي روم الترحيب

const OrderWelcome = "1272548893644820703" // ايدي روم الطلبات عشان تظهر في الويلكم
const ApllyWelcome = "1271463770883096607" // ايدي روم التقديم عشان تظهر في الويلكم

const TransferChannel = "1274339975877623919" // ايدي روم التحويلات

// ===================== Const Catigory ===================== \\

const OrderCatigory = "1272548893644820703" // ايدي كاتيغوري الطلبات
const ApplyCatigory = "1271463770883096607" // ايدي كاتيغوري التقديم
const MediatorCatigory = ""
const MediatorCatigory_2 = ""
const MediatorCatigory_3 = ""
const MediatorCatigory_4 = ""

// ===================== Const Role ===================== \\

const SellerRole = "" // ايدي رتبة السيلر
const PerfixStore = "§" // البيرفكس عشان يظهر في الهيلب

const OwnerBot = "504851608148901889"

const LinkServer = "https://discord.com/invite/Puf96YtBgC" // لينك السيرفر

// ===================== Const Seller Role ===================== \\

const Netflix = ""
const Nitro = ""
const Insta = ""
const TikTok = ""
const Visa = ""
const Bot = ""
const Boost = ""
const Uc = ""
const Spotify = ""
const Shahid = ""
const Credit = ""
const Vote = ""

// ===================== Const Offers Room ===================== \\

const TeamOffer = "" // ايدي روم التيم اوفر
const OffersChannel = "" // ايدي روم الي راح تترسل ليها الاوفر
const OrderChannel = "" // ايدي روم الطلبات 

const OffersRole = "" // ايدي رتبة الي تتمنشن 
const TeamRole = "" // ايدي رتبة لي تقدر تنشر

// ===================== Const Line Guild ===================== \\

const Line = "" // الخط الخاص بسيرفرك

// ===================== Const Emoji Guild ===================== \\

const SugEmoji_1 = "✅" // الايموجي الاول للاقتراحات
const SugEmoji_2 = "❌" // الايموجي الثاني للاقتراحات

const FedEmoji_1 = "❤️" // الايموجي الاول للفيدباك
const FedEmoji_2 = "📈" // الايموجي الثاني للفيدباك

// ===================== Const Delete ===================== \\

let chnldel = ['1270474112015269971']; // ايدي روم الي ممنوع ذكر الكلمات


let autoDelet = ['اكونت', 'اكونتات', 'ديسكورد', '', '', 'رولات', 'متوفر', 'بيع', 'ابيع', 'للبيع', 'تفعيل', 'افع', 'حساب', 'حسابات', 'نسخ', 'نيترو', 'كميه', 'نيتروهات', 'كريديت', 'انسخ', 'انسخلك', 'تنسخ', 'سيرفر', 'عروض', 'عرض', 'لايك', 'لايكات', 'فولورز', 'نايترو', 'نيتفليكس', 'اكواد', 'كود', 'فولو', 'كميات', 'سيرفرات', 'تيكتوك', 'بوت', 'سيرفر', 'توكن', 'توكنات', 'سعر', 'السعر', 'سعره', 'شراء', 'السعر', 'توفر', 'توفير', 'بيعه', 'ابيعه', 'انباع', 'بوستات', 'افعل', 'تفعل', 'اسعار', 'الاسعار'] // الكلمات الي راح تنحذف في المنشور

// ===================== FeedBack ===================== \\

client.on('messageCreate', async message => {
  if (FeedbackChannel.includes(message.channel.id)) {

    if (message.author.bot) return;
    const att2 = new Discord.MessageEmbed()
      .setDescription(`
        > Thanks for FeedBack ${FedEmoji_1}
        
        > We Hope You Visit Us Again ${FedEmoji_2}`)
      .setImage(`${Line}`)
      .setThumbnail(message.author.avatarURL({ dynamic: true }))

      .setAuthor(message.author.username, message.author.avatarURL({ dynaimc: true }))
      .setTimestamp()
      .setColor("ORANGE")
    message.channel.send({ embeds: [att2] })
    return;
  }
})

// ===================== Suggestion ===================== \\

client.on("messageCreate", message => {
  if (message.channel.type === "dm" ||
    message.author.bot) return

  if (SuggestionChannel.includes(message.channel.id)) {
    message.delete()

    let args = message.content.split(',')

    let embed = new Discord.MessageEmbed()
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))

      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))

      .setDescription(`**
   > __New Sugesstion :__
   
   > ${args}**`)

      .setColor(message.guild.me.displayColor)

      .setImage(`${Line}`)

      .setTimestamp()

    message.channel.send({ embeds: [embed] }).then(msg => {
      msg.react(`${SugEmoji_1}`).then(() => {
        msg.react(`${SugEmoji_2}`)
      })
    })
  }
});

// ===================== Offer Room ===================== \\

client.on('messageCreate', async message => {
  if (OfferChannel.includes(message.channel.id)) {
    if (message.author.bot) return;
    const att2 = new Discord.MessageEmbed()
      .setImage(`${Line}`)
      .setColor("ORANGE")
    message.channel.send({ embeds: [att2] })
    return;
  }
})

// ===================== Order Catigory ===================== \\

client.on("channelCreate", async channel => {
  if (channel.type === "GUILD_TEXT" && channel.name.startsWith("ticket-") && channel.parent.id === OrderCatigory) {

    await new Promise(r => setTimeout(r, 2000))

    const embed = new Discord.MessageEmbed()
      .setImage(`${Line}`)
      .setDescription(`\`#\` <:HachTag:1049422575639474236> Hello User Pls Select Your Order

\`#\`  <:HachTag:1049422575639474236> مرحبا.. رجاء اختيار الطلب الخاص بك

==================

>  \`-\` **Netflix**



>  \`-\` **Insta**



>  \`-\` **Nitro**



>  \`-\` **Visa**



>  \`-\` **Bot**



>  \`-\` **Designe**



>  \`-\` **Uc**



>  \`-\` **Boost**



>  \`-\` **Spotify**



>  \`-\` **Shahid**



>  \`-\` **Credit**



>  \`-\` **TikTok**

===========================

\`#\`  To Metion Seller : buy + Your Order

\`#\`   لمنشن السيلر الرجاء كتابة التالي : buy + المنتج

\`#\`   مثال : buy netflix | buy nitro
`)
      .setThumbnail(channel.guild.iconURL())

    channel.send({ content: "_ _", embeds: [embed] })

  }
});

// ===================== Apply Catigory ===================== \\

client.on("channelCreate", async channel => {
  if (channel.type === "GUILD_TEXT" && channel.name.startsWith("ticket-") && channel.parent.id === ApplyCatigory) {

    await new Promise(r => setTimeout(r, 2000))

    const embed = new Discord.MessageEmbed()
      .setImage(`${Line}`)
      .setDescription(`\`#\` Please Complete

\`#\`  الرجاء ملأ هذا الاستبيان

==================

>  \`-\` اسمك  :


>  \`-\` سنك  :


>  \`-\` عدد السيرفرات الي شغال فيها  :


>  \`-\` رولاتك  :


>  \`-\` طريقه الدفع الخاصه بك  :


>  \`-\` فيدباكاتك  :

==================

\`#\` يرجي ارسال فيدباكاتك هنا  :
`)
      .setThumbnail(channel.guild.iconURL())

    channel.send({ content: "_ _*", embeds: [embed] })

  }
});

// ===================== Mediator Catigory ===================== \\

client.on("channelCreate", async channel => {
  if (channel.type === "GUILD_TEXT" && channel.name.startsWith("ticket-") && channel.parent.id === MediatorCatigory) {

    await new Promise(r => setTimeout(r, 2000))

    const embed = new Discord.MessageEmbed()
      .setImage(`${Line}`)
      .setDescription(`\`#\` Please Complete

\`#\`  الرجاء ملأ هذا الاستبيان

==================

>  \`-\` اسم البائع :


>  \`-\` ايدي البائع :


>  \`-\` اسم المشتري :


>  \`-\` ايدي المشتري :


>  \`-\` السلعة :


>  \`-\` ثمنها :
`)
      .setThumbnail(channel.guild.iconURL())

    channel.send({ content: "_ _", embeds: [embed] })

  }
});

// ===================== Mediator_2 Catigory ===================== \\

client.on("channelCreate", async channel => {
  if (channel.type === "GUILD_TEXT" && channel.name.startsWith("ticket-") && channel.parent.id === MediatorCatigory_2) {

    await new Promise(r => setTimeout(r, 2000))

    const embed = new Discord.MessageEmbed()
      .setImage(`${Line}`)
      .setDescription(`\`#\` Please Complete

\`#\`  الرجاء ملأ هذا الاستبيان

==================

>  \`-\` اسم البائع :


>  \`-\` ايدي البائع :


>  \`-\` اسم المشتري :


>  \`-\` ايدي المشتري :


>  \`-\` السلعة :


>  \`-\` ثمنها :
`)
      .setThumbnail(channel.guild.iconURL())

    channel.send({ content: "_ _", embeds: [embed] })

  }
});

// ===================== Mediator_3 Catigory ===================== \\

client.on("channelCreate", async channel => {
  if (channel.type === "GUILD_TEXT" && channel.name.startsWith("ticket-") && channel.parent.id === MediatorCatigory_3) {

    await new Promise(r => setTimeout(r, 2000))

    const embed = new Discord.MessageEmbed()
      .setImage(`${Line}`)
      .setDescription(`\`#\` Please Complete

\`#\`  الرجاء ملأ هذا الاستبيان

==================

>  \`-\` اسم البائع :


>  \`-\` ايدي البائع :


>  \`-\` اسم المشتري :


>  \`-\` ايدي المشتري :


>  \`-\` السلعة :


>  \`-\` ثمنها :
`)
      .setThumbnail(channel.guild.iconURL())

    channel.send({ content: "_ _", embeds: [embed] })

  }
});

// ===================== Mediator_4 Catigory ===================== \\

client.on("channelCreate", async channel => {
  if (channel.type === "GUILD_TEXT" && channel.name.startsWith("ticket-") && channel.parent.id === MediatorCatigory_4) {

    await new Promise(r => setTimeout(r, 2000))

    const embed = new Discord.MessageEmbed()
      .setImage(`${Line}`)
      .setDescription(`\`#\` Please Complete

\`#\`  الرجاء ملأ هذا الاستبيان

==================

>  \`-\` اسم البائع :


>  \`-\` ايدي البائع :


>  \`-\` اسم المشتري :


>  \`-\` ايدي المشتري :


>  \`-\` السلعة :


>  \`-\` ثمنها :
`)
      .setThumbnail(channel.guild.iconURL())

    channel.send({ content: "_ _", embeds: [embed] })

  }
});

// ===================== Code ===================== \\

const Database = require("@replit/database");
const Db = new Database();

client.on("channelCreate", (channel) => {
  if (channel.type === "GUILD_TEXT" && channel.name.startsWith("ticket")) {
    Db.set(`Ticket-Channel_${channel.id}`, true)
  }
})

// ===================== Rename Ticket ===================== \\

client.on("messageCreate", async message => {
  if (message.content.toLowerCase() === (`re`) || message.content === (`استلام`)) {
    if (message.member.roles.cache.find(r => r.id === SellerRole)) {

      const isTicket = await Db.get(`Ticket-Channel_${message.channel.id}`) || message.channel.name.startsWith("ticket");
      if (!isTicket) return;
      message.delete()
      const channel = message.channel
      channel.setName(`By ${message.member.user.username}`)
      message.channel.send(` Renamed By <@${message.member.user.id}>`).then(msg => setTimeout(() => {
        msg.delete();
      }, 5000));
    }
  }
})

// ===================== Delete Ticket ===================== \\

client.on("messageCreate", async message => {
  if (message.content.toLowerCase() === (`de`)) {

    if (message.member.roles.cache.find(r => r.id === SellerRole)) {

      const isTicket = await Db.get(`Ticket-Channel_${message.channel.id}`) || message.channel.name.startsWith("ticket");
      console.log(isTicket)
      if (!isTicket) return;
      const channel = message.channel
      message.channel.send(`The ${channel.name} will delete in a few seconds`).then(msg => setTimeout(() => {
        channel.delete();
      }, 5000));
    }
  }
})

// ===================== Delete Ticket ===================== \\

client.on("messageCreate", message => {
  if (message.channel.id === TeamOffer) {
    if (message.author.bot) return;
    let seller = message.member.guild.roles.cache.find(i => i.id === TeamRole)

    if (message.member.roles.highest.position < seller.position) return message.reply("**You Are Not A Seller!**");
    if (message.content.length < 10) return message.reply("** يجب ان تتضمن الرساله ١٠ احرف علي الاقل ! ** ");

    let mentionedRole = message.mentions.roles.first()
    if (mentionedRole) return message.reply("** ارسل رسالتك بدون منشن! ** ");


    let chnnl = client.channels.cache.get(OffersChannel);

    chnnl.send(`> -  **__New Discount :__**
 
 **__${message.content}__**

> ** -  From : ${message.author} **
> _ _
> ** -  Mention : <@&${OffersRole}> **
> _ _
> ** -  Order : <#${OrderChannel}> **


`)
    message.reply("** Offer Sent!**")
    message.react('🎉')
    chnnl.send(`${Line}`)

  }
})

// ===================== Mention Seller ===================== \\

client.on('messageCreate', message => {
  if (message.content.startsWith('buy netflix')) {
    return message.reply(`> \`#\` **Please wait while the seller responds to you** 

**Mention** : ||<@&${netflixrole}>||`)
  }
});

//nitro
client.on('messageCreate', message => {
  if (message.content.startsWith('buy nitro')) {
    return message.reply(`> \`#\` **Please wait while the seller responds to you** 

**Mention** : ||<@&${Nitro}>||`)
  }
});

//bot
client.on('messageCreate', message => {
  if (message.content.startsWith('buy bot')) {
    return message.reply(`> \`#\` **Please wait while the seller responds to you** 

**Mention** : ||<@&${Bot}>||`)
  }
});

//tiktok
client.on('messageCreate', message => {
  if (message.content.startsWith('buy tiktok')) {
    return message.reply(`> \`#\` **Please wait while the seller responds to you** 

**Mention** : ||<@&${TikTok}>||`)
  }
});

//uc
client.on('messageCreate', message => {
  if (message.content.startsWith('buy uc')) {
    return message.reply(`> \`#\` **Please wait while the seller responds to you** 

**Mention** : ||<@&${Uc}>||`)
  }
});

//spotify
client.on('messageCreate', message => {
  if (message.content.startsWith('buy spotify')) {
    return message.reply(`> \`#\` **Please wait while the seller responds to you** 

**Mention** : ||<@&${Spotify}>||`)
  }
});

//visa
client.on('messageCreate', message => {
  if (message.content.startsWith('buy visa')) {
    return message.reply(`> \`#\` **Please wait while the seller responds to you** 

**Mention** : ||<@&${Visa}>||`)
  }
});

//boost
client.on('messageCreate', message => {
  if (message.content.startsWith('buy boost')) {
    return message.reply(`> \`#\` **Please wait while the seller responds to you** 

**Mention** : ||<@&${Boost}>||`)
  }
});

//vote
client.on('messageCreate', message => {
  if (message.content.startsWith('buy vote')) {
    return message.reply(`> \`#\` **Please wait while the seller responds to you** 

**Mention** : ||<@&${Vote}>||`)
  }
});

//credit
client.on('messageCreate', message => {
  if (message.content.startsWith('buy credit')) {
    return message.reply(`> \`#\` **Please wait while the seller responds to you** 

**Mention** : ||<@&${Credit}>||`)
  }
});

//shahid
client.on('messageCreate', message => {
  if (message.content.startsWith('buy shahid')) {
    return message.reply(`> \`#\` **Please wait while the seller responds to you** 

**Mention** : ||<@&${Shahid}>||`)
  }
});

//insta
client.on('messageCreate', message => {
  if (message.content.startsWith('buy insta')) {
    return message.reply(`> \`#\` **Please wait while the seller responds to you** 

**Mention** : ||<@&${Insta}>||`)
  }
});

// ===================== Cmd Line ===================== \\

client.on("messageCreate", message => {
  var cmd = message.content.split(' ')[0]

  if (cmd == prefix + "line" || cmd == prefix + "خط" || cmd == "line" || cmd == "خط") {

    if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`** :rolling_eyes: You don't have permissions **`)

    message.delete();

    let CmdEmbed = new MessageEmbed()

      .setColor(message.guild.me.displayHexColor)
      .setImage(`${Line}`)

    message.channel.send({ embeds: [CmdEmbed] });
  }
});

// ===================== Auto Tax ===================== \\

client.on("messageCreate", message => {
  if (message.channel.type === "dm" ||
    message.author.bot) return

  if (TaxChannel.includes(message.channel.id)) {

    var args = message.content.split(' ').slice(0).join(' ')
    if (!args) return;

    if (args.endsWith("m")) args = args.replace(/m/gi, "") * 1000000;
    else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
    else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
    else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
    let args2 = parseInt(args)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1) - (args2))
    let tax3 = Math.floor(tax2 * (20) / (19) + (1))
    let tax4 = Math.floor(tax2 + tax3 + args2)

    let Taxembed = new MessageEmbed()

      .setAuthor(`TAX CALCULATOR`, client.user.avatarURL({ dynamic: true }))

      .setThumbnail(client.user.avatarURL({ dynamic: true }))

      .addFields([
        {
          name: `الضريبه: `,
          value: `${tax}`
        },
        {
          name: `ضريبة الوسيط: `,
          value: `${tax4}`
        },
      ])
      .setColor(message.guild.me.displayColor)
      .setTimestamp()
    message.reply({ embeds: [Taxembed] }).catch((err) => {
      console.log(err.message)
    });
  }
});

// ===================== Welcome Embed ===================== \\

var { inviteTracker } = require("discord-inviter"),
  tracker = new inviteTracker(client);

tracker.on("guildMemberAdd", async (member, inviter, invite, error) => {
  let channel = member.guild.channels.cache.get(`${WelcomeChannel}`);

  let embed = new MessageEmbed()

    .setAuthor(member.guild.name, member.guild.iconURL({ dynamic: true }))
    .setThumbnail(member.user.avatarURL({ dynamic: true }))

    .setDescription(`** 
   > Hey \`${member.user.username}\`
           
   > Welcome To ${member.guild.name}
   
   > Member Id \`${member.id}\`

   > Invited By <@${inviter.id}>
   
   > For Nitro <#${ApllyWelcome}>
   
   > For Order <#${OrderWelcome}> **`)

    .setColor(member.guild.me.displayHexColor)
    .setTimestamp()
    .setImage(`${Line}`)
  const mess = `${member.user}`
  channel.send({ embeds: [embed] }).catch((err) => {
    console.log(err.message)
    channel.send(`${mess}`)
  });
});

// ====