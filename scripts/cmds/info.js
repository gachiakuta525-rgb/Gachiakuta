const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
	config: {
		name: "info",
 aliases: ["owner", "botinfo" ],
		version: "1.0",
		author: "Chitron Bhattacharjee",
		countDown: 20,
		role: 0,
		shortDescription: { vi: "", en: "" },
		longDescription: { vi: "", en: "" },
		category: "owner",
		guide: { en: "" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const authorName = "Sexy Rocky";
		const ownAge = "『20』";
		const messenger = " //m.me/Bangladesh.Top.Video.Editor.Rocky.Vai.320";
		const authorFB = " //www.facebook.com/Bangladesh.Top.Video.Editor.Rocky.Vai.320";
		const authorNumber = "+8801621251318";
		const Status = "⩸____⩸";
		const urls = [
"https://drive.google.com/uc?export=view&id=1mzJeualLnMS-wABThyCQFfJsX-2hMADG",
"https://drive.google.com/uc?export=view&id=14M_Qx2OfCQhybST0tAzQ4QEqT7COD6Z1"
];
		const link = urls[Math.floor(Math.random() * urls.length)];
		const now = moment().tz('Asia/Jakarta');
		const date = now.format('MMMM Do YYYY');
		const time = now.format('h:mm:ss A');
		const uptime = process.uptime();
		const seconds = Math.floor(uptime % 60);
		const minutes = Math.floor((uptime / 60) % 60);
		const hours = Math.floor((uptime / (60 * 60)) % 24);
		const days = Math.floor(uptime / (60 * 60 * 24));
		const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

		message.reply({
			body: `✨《 𝐁𝐨𝐭 𝐀𝐧𝐝 𝐎𝐰𝐧𝐞𝐫 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 》🎀
\🤖彡𝐵𝑜𝑡 𝑁𝑎𝑚𝑒 : ${global.GoatBot.config.Robin Chan}
\👾彡𝐵𝑜𝑡 𝑆𝑦𝑠𝑡𝑒𝑚 𝑃𝑟𝑒𝑓𝑖𝑥 : ${global.GoatBot.config.}
\💙彡𝑂𝑤𝑛𝑒𝑟 𝑁𝑎𝑚𝑒 : ${JABED D KURÕ}
\📝彡𝐴𝑔𝑒 : ${18+}
\💕彡𝑅𝑒𝑙𝑎𝑡𝑖𝑜𝑛𝑆ℎ𝑖𝑝: ${SINGLE}
\🌐彡𝑊𝑝 : ${01840100926}
\🌍彡𝐹𝑎𝑐𝑒𝑏𝑜𝑜𝑘 𝐿𝑖𝑛𝑘 : ${https://www.facebook.com/profile.php?id=61576355017916}
\🗓彡𝐷𝑎𝑡𝑒 : ${date}
\⏰彡𝑁𝑜𝑤 𝑇𝑖𝑚𝑒 : ${time}
\🔰彡𝐴𝑛𝑦 𝐻𝑒𝑙𝑝 𝐶𝑜𝑛𝑡𝑎𝑐𝑡 : ${https://www.facebook.com/profile.php?id=61576355017916}__⩸
\📛彡𝐵𝑜𝑡 𝐼𝑠 𝑅𝑢𝑛𝑛𝑖𝑛𝑔 𝐹𝑜𝑟 : ${uptimeString}
\===============`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "info") {
			this.onStart({ message });
		}
	}
};
