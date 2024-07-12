const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_52_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDkzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDksXG4gICAgICAgIDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDM0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODEsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDUxLFxuICAgICAgICA2NixcbiAgICAgICAgMjA1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzksXG4gICAgICAgIDg0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgODEsXG4gICAgICAgIDMzLFxuICAgICAgICAzMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzksXG4gICAgICAgIDExNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDY1LFxuICAgICAgICA0MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY3LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDgsXG4gICAgICAgIDkwLFxuICAgICAgICAxODEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTEwLFxuICAgICAgICA1OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjM3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjksXG4gICAgICAgIDg3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTM3LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJrVXU3QVNVZjNZdDFtYUZhUHRTanZaTC9aTTdveXBjMEVPNVFQdU8rUlU0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4ajJmWnJKVFFScUItRWRLcjk4dUpBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ4NzQ3OTgyLWJiOGUtNDQyZC1iMjYzLThkMjVjODAxM2RhYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDcsXG4gICAgICA0NCxcbiAgICAgIDIwMCxcbiAgICAgIDIxLFxuICAgICAgNzEsXG4gICAgICA5NCxcbiAgICAgIDE2LFxuICAgICAgMTI4LFxuICAgICAgNzYsXG4gICAgICAxMzksXG4gICAgICAyNDksXG4gICAgICA1MCxcbiAgICAgIDc5LFxuICAgICAgMTk5LFxuICAgICAgMjE0LFxuICAgICAgNDQsXG4gICAgICAxNTYsXG4gICAgICA3OSxcbiAgICAgIDE4NixcbiAgICAgIDEyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NixcbiAgICAgIDc1LFxuICAgICAgMTQ3LFxuICAgICAgMjU0LFxuICAgICAgMTQzLFxuICAgICAgMzYsXG4gICAgICAxNDIsXG4gICAgICA3MSxcbiAgICAgIDE4MyxcbiAgICAgIDExMyxcbiAgICAgIDQ2LFxuICAgICAgMjUzLFxuICAgICAgMjI2LFxuICAgICAgNjAsXG4gICAgICAyMjgsXG4gICAgICA3MixcbiAgICAgIDQxLFxuICAgICAgMTU3LFxuICAgICAgMTcyLFxuICAgICAgMTU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVBU0hFQVFQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2OTg5NDMwNzg6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZC38J2RksyoIPCdkLXwnZC/8J2QuPCdkLzwnZGNXCIsXG4gICAgXCJsaWRcIjogXCIyMTgzNjk0NzUyMjc4NjM6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2Z0MDZjRkVQV0l3N1FHR0E4Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ3R0JiWTFZMHl1WVR5WkpPNXhMOGlTNlhrTjFuWjREelR2NWJlL0RqY1NBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtlbDVrWmFVT3JwUUJ6MlBTRzZ2RHVFVzl2SVlQNndYU2twcFAySUtkTzUxRkM1SHJsbkM4OE05WFp0aDRCZmt6ZHo1bzJyNnllMTQ2czdkVUo4ekF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImJ1N2txWUN1Z1ZNWHdLY2tJdUlYekszc1dtcy9xMU1BbmF4ak5ybG45SHgrS2tTNlBhN3JLVm51NHdoZjIzSmxUaXRwUUpqbFlmT1RCRVRpdFVWT0JRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTY5ODk0MzA3ODoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDc2MzUxMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURhZVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRGFlLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVFdYYzB0YkkvS28xdVBTanc2Z0JMYXhWLzM2QzE2eXducEFEdWUwQ1A3ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDI1MzQwMTM1LFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCwyLDZdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
