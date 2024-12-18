let { Scraper, Uploader } = require("akiraa-wb");
let fs = require("fs");
let fetch = require("node-fetch");
let moment = require("moment-timezone");
let cp = require("child_process");
let { promisify } = require("util");

global.owner = ["6285929930573", "6285929930573"];
global.mods = ["6285929930573"]; // Moderator
global.prems = ["6285929930573"]; // Premium
// YANG ATAS ITU UBAH JADI NOMOR LU
// & YG BAWAH INI, NOMOR,NAMA,EMAIL LU
global.fsizedoc = "45000000000"; // default 10TB
global.fpagedoc = "19";
global.numberbot = "6282253598041";
global.namedoc = "Makoros Bot Whatsapp Multi device";
global.nameowner = "Pasder";
global.nomorown = "6285929930573";

/*=====[ PAYMENT SETTING ]==========*/
global.dana = "-"; //kalo ga punya ubah jadi "-" aja
global.gopay = "-";
global.ovo = "-";
global.saweria = "https://saweria.co/";
/*====[ PAYMENT SETTING ]==========*/
global.namebot = "Makoros-𝗕𝗼𝘁";
global.sgc = "https://chat.whatsapp.com/FZR8QueHkAOCzk3zQQmoPs";
global.sourceUrl = "https://chat.whatsapp.com/FZR8QueHkAOCzk3zQQmoPs";
global.sig = "https://instagram.com/@vinstennn";
global.dash = "✧────···[ *Makoros MultiDevice* ]···────✧";
global.htki = "*––––––『"; // Hiasan Titile (KIRI)
global.htka = "』––––––*"; // Hiasan Title  (KANAN)
global.swa = "wa.me/6285929930573";
global.gif = "https://f.uguu.se/TljDsOPh.mp4"; //Ini buat gif yang di menu
global.icon = "https://files.catbox.moe/315ku6.jpg";
global.thumb = "https://pomf2.lain.la/f/3i8w7sbl.jpg";
global.version = "1.0.12";
global.wm = "© Makoros 2024-2025";
global.watermark = wm;
global.lann = "p8ADYJib";
global.wm2 = "Makoros-𝗕𝗼𝘁";
global.menu = "button";
global.wm3 = namebot;
global.idgc = "120363203126412960@g.us"; //isi pake id gc lu
global.isPairing = true ;
global.verify = false
global.wm4 = namebot;
global.fla =
  "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=";
global.wait = "*[ PLEASE WAIT... ]*";
global.eror = "*[ SYSTEM ERROR ]*";
global.done = "```© Makoros-Bot 2023-2024```";
global.salah = "Salah\n";
global.web = global.sourceUrl;
global.APIs = {};
global.APIKeys = {};
global.packname = "[ STICKER BY MAKOROS-BOT ]";
global.author = ``;

/*--------[ API SETTING ]------------*/
global.domain = "https://adicalonustad.gazz-store.live";
global.apikey = "ptla_cdQgcGS2cbPLMJfJbIdxtD4Ez2tnGmw96fLe8oHkx3J";

global.groq = {
  key: "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",
};
global.smtp = {
  email: "pasder20@gmail.com", //ganti pake email lu
  pass: "pecomhdvmrbltohc", //ganti pake app passwords
  url: "https://myaccount.google.com/apppasswords", //ambil app password nya disini, tutorial banyak di YouTube
};
global.hf = {
  key: "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",
  url: "https://api-inference.huggingface.co",
};
global.prodia = {
  key: "dc80a8a4-0b98-4d54-b3e4-b7c797bc2527",
  url: "https://api.prodia.com",
};
//Login : https://maupedia.com
global.maupedia = {
  key: "FBwdVOx2iuOJvLtsmmbTYz7vLUoVnevebwPPhCrNqqWOE8IwhjsKxp01dYXmxxWp",
  signature: "0a294c50a283acae3169984591ff75580aba4518",
  secret: "pedia",
};
global.atlantic = {
  url: 'https://atlantich2h.com',
  key: 'djKEiW9qA5DMrgb1NYP4RiY5lxFQY9odLcGT5e4jdkMEg7yU9ft7RZYH1ZXrXhF1BDXZRsV5rMv6N7b26FIlotD9ZbM6nqEsZTMq'
  }
global.botwa = {
   url: "https://api.botwa.space",
   key: "AeBYtaIYDdaM" //Login untk mendapatkan apikey
}
global.Api = async(endpoint, json = {}, method = "GET") => {
    var response;
      if (method.toLowerCase() === "get") {
      
        response = await axios.get(`${botwa.url}/api/${endpoint}?${Object.keys(json).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(json[key])}`).join('&')}`, { headers: { "x-api-key": botwa.key }}).catch(d => d.response);
     } else if (method.toLowerCase() === "post") {
       response = await axios.post(`${botwa.url}/api/${endpoint}`, json, { headers: { "x-api-key": botwa.key }}).catch(e => e.response);
     } else {
       throw "Invalid Method!, Input Method GET or POST"
     }
    return JSON.stringify(response.data) ? response.data : "Result can't send json";
};
global.lolhuman = "Akiraa";
global.multiplier = 100;
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    let emot = {
      exp: "✉️",
      money: "💵",
      potion: "🥤",
      diamond: "💎",
      common: "📦",
      uncommon: "🎁",
      mythic: "🗳️",
      legendary: "🗃️",
      pet: "🎁",
      sampah: "🗑",
      armor: "🥼",
      sword: "⚔️",
      kayu: "🪵",
      batu: "🪨",
      string: "🕸️",
      kuda: "🐎",
      kucing: "🐈",
      anjing: "🐕",
      petFood: "🍖",
      gold: "👑",
      emerald: "💚",
    };
    let results = Object.keys(emot)
      .map((v) => [v, new RegExp(v, "gi")])
      .filter((v) => v[1].test(string));
    if (!results.length) return "";
    else return emot[results[0][0]];
  },
};
global.doc = pickRandom([
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "application/msword",
  "application/pdf",
]);
global.fetch = require("node-fetch");
global.Func = new (require(process.cwd() + "/lib/func"))();
global.axios = require("axios");
global.Uploader = require(process.cwd()+"/lib/uploader.js");
global.cheerio = require("cheerio");

const _uptime = process.uptime() * 1000;

global.fkontak = {
  key: {
    remoteJid: "0@s.whatsapp.net",
    participant: "0@s.whatsapp.net",
    id: "",
  },
  message: {
    conversation: `*© Makoros MultiDevice*`,
  },
};
global.tanggal = async (numer) => {
  const myMonths = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const myDays = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jum'at",
    "Sabtu",
  ];

  const tgl = new Date(numer);
  const day = tgl.getDate();
  const bulan = tgl.getMonth();
  const thisDay = tgl.getDay();
  const thisDayName = myDays[thisDay];
  const yy = tgl.getYear();
  const year = yy < 1000 ? yy + 1900 : yy;
  const time = require("moment").tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
  const d = new Date();
  const locale = "id";
  const gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
  const weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
    Math.floor((d * 1 + gmt) / 84600000) % 5
  ];

  return `${thisDayName}, ${day} - ${myMonths[bulan]} - ${year}`;
};
global.fakestatus = (txt) => {
  return {
    key: {
      remoteJid: "0@s.whatsapp.net",
      participant: "0@s.whatsapp.net",
      id: "",
    },
    message: {
      conversation: txt,
    },
  };
};

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log("Update config.js");
  delete require.cache[file];
  require(file);
});
