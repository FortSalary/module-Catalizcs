module.exports.config = {
    name: "info",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "CatalizCS",
    description: "Xem thông tin người dùng, nhóm, ...",
    commandCategory: "general",
    usages: "[thread/user] [ID]",
    cooldowns: 20,
    dependencies: {
        "fs-extra": "",
        "path": "",
        "axios": ""
    },
    envConfig: {
		APIKEY: "531532681600063|PZKvEhQ2eQ_XGkh5GlhMv6HBS60"
	}
};

module.exports.onLoad = async function ({ api }) {
    const _0x2484=['\x73\x74\x61\x74\x75\x73\x43\x6f\x64\x65','\x31\x33\x31\x35\x39\x7a\x76\x68\x75\x49\x6d','\x31\x33\x30\x6e\x4f\x65\x48\x52\x50','\x20\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d','\x6c\x6f\x67','\x6b\x65\x79\x73','\x6e\x64\x2f','\x3d\x3d\x3d\x3d\x3d\x3d','\x70\x6f\x73\x74','\x61\x78\x69\x6f\x73','\x64\x61\x74\x61','\x34\x30\x31','\x31\x30\x30\x37\x36\x38\x37\x79\x59\x69\x46\x70\x62','\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d','\x35\x30\x30','\x6e\x61\x74\x65\x2e\x6d\x69\x72\x61\x69','\x33\x31\x76\x48\x41\x6f\x6a\x71','\x69\x6e\x66\x6f','\x63\x6f\x6e\x66\x69\x67','\x65\x72\x72\x6f\x72','\x31\x35\x35\x36\x32\x36\x33\x6d\x4e\x42\x5a\x71\x73','\x34\x30\x33','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x6f','\x6c\x65\x6e\x67\x74\x68','\x72\x65\x73\x75\x6c\x74','\x72\x21\x20','\x31\x39\x33\x65\x41\x68\x68\x79\x78','\x76\x65\x64\x20\x53\x75\x63\x63\x65\x73','\x31\x34\x32\x36\x33\x38\x41\x78\x64\x41\x4c\x78','\x72\x65\x73\x70\x6f\x6e\x73\x65','\x39\x31\x35\x36\x39\x46\x4b\x52\x6c\x68\x4e','\x35\x4b\x53\x77\x54\x52\x6d','\x69\x6e\x66\x6f\x20\x7c\x20\x57\x65\x6c','\x73\x20\x6d\x6f\x64\x75\x6c\x65\x3a\x20','\x63\x6f\x6d\x65\x20\x62\x61\x63\x6b\x20','\x31\x35\x32\x30\x38\x37\x32\x50\x47\x6b\x6b\x77\x77','\x55\x73\x65\x72\x49\x44','\x2f\x64\x6f\x6e\x61\x74\x65\x2f\x66\x69','\x6b\x65\x79\x41\x63\x74\x69\x76\x65','\x70\x72\x6f\x6a\x65\x63\x74\x2e\x74\x6b','\x31\x6e\x50\x75\x69\x57\x42'];function _0x183201(_0x6ae495,_0x326637){return _0x4c97(_0x6ae495- -0x36f,_0x326637);}(function(_0x42874b,_0x17bae8){function _0x28f5cb(_0xcbb3a1,_0x3cbb49){return _0x4c97(_0x3cbb49-0x2e6,_0xcbb3a1);}while(!![]){try{const _0x417554=parseInt(_0x28f5cb(0x4c2,0x4c3))*-parseInt(_0x28f5cb(0x4d7,0x4cd))+parseInt(_0x28f5cb(0x4e0,0x4cf))*parseInt(_0x28f5cb(0x4bf,0x4d2))+-parseInt(_0x28f5cb(0x4d0,0x4d1))+-parseInt(_0x28f5cb(0x4d6,0x4dd))*parseInt(_0x28f5cb(0x4e0,0x4de))+-parseInt(_0x28f5cb(0x4b2,0x4bf))+parseInt(_0x28f5cb(0x4b4,0x4c7))*parseInt(_0x28f5cb(0x4ef,0x4db))+parseInt(_0x28f5cb(0x4d8,0x4d6));if(_0x417554===_0x17bae8)break;else _0x42874b['push'](_0x42874b['shift']());}catch(_0x4017a4){_0x42874b['push'](_0x42874b['shift']());}}}(_0x2484,0x27135*0x3+0x3*-0x5ec84+0x19503d*0x1));function _0x4c97(_0x5d006a,_0x94723c){return _0x4c97=function(_0x357b17,_0x37d096){_0x357b17=_0x357b17-(-0x8c9+0x63d*-0x5+0x14e5*0x2);let _0x5aaddf=_0x2484[_0x357b17];return _0x5aaddf;},_0x4c97(_0x5d006a,_0x94723c);}try{const axios=global['\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65'][_0x183201(-0x199,-0x1a6)],{data}=await axios[_0x183201(-0x19a,-0x18d)](_0x183201(-0x18c,-0x198)+_0x183201(-0x193,-0x189)+_0x183201(-0x17b,-0x17c)+_0x183201(-0x17d,-0x16a)+_0x183201(-0x19c,-0x1ab),{'\x6b\x65\x79\x6c\x6f\x67\x69\x6e':global[_0x183201(-0x190,-0x1a3)][_0x183201(-0x17c,-0x168)]||'','\x62\x6f\x74\x49\x44':api['\x67\x65\x74\x43\x75\x72\x72\x65\x6e\x74'+_0x183201(-0x17e,-0x186)](),'\x6d\x6f\x64\x75\x6c\x65\x52\x65\x71\x75\x65\x73\x74':_0x183201(-0x191,-0x17f)});if(Object[_0x183201(-0x19d,-0x18d)](data['\x72\x65\x73\x75\x6c\x74'])[_0x183201(-0x18b,-0x185)]!=0x6a8+0x7f*0x47+-0x29e1){global['\x70\x61\x69\x64'][global[_0x183201(-0x190,-0x17f)][_0x183201(-0x17c,-0x18d)]][_0x183201(-0x191,-0x18d)]=!![],console[_0x183201(-0x19e,-0x194)](),console[_0x183201(-0x18f,-0x18a)](_0x183201(-0x195,-0x1a2)+'\x3d\x3d\x3d\x3d\x3d\x20\x41\x63\x74\x69'+_0x183201(-0x187,-0x19b)+_0x183201(-0x181,-0x17e)+_0x183201(-0x182,-0x173)+_0x183201(-0x180,-0x16d)+data[_0x183201(-0x18a,-0x181)]['\x6e\x61\x6d\x65']+(_0x183201(-0x19f,-0x18d)+'\x3d\x3d\x3d\x3d\x3d\x3d')),console[_0x183201(-0x19e,-0x193)]();return;}}catch(_0x22380e){if(!_0x22380e[_0x183201(-0x185,-0x17f)])return;if(_0x22380e[_0x183201(-0x185,-0x184)]['\x64\x61\x74\x61'][_0x183201(-0x179,-0x16f)]==_0x183201(-0x194,-0x191)||_0x22380e[_0x183201(-0x185,-0x185)][_0x183201(-0x198,-0x1a8)]['\x73\x74\x61\x74\x75\x73\x43\x6f\x64\x65']==_0x183201(-0x197,-0x1a9)||_0x22380e['\x72\x65\x73\x70\x6f\x6e\x73\x65'][_0x183201(-0x198,-0x1a4)][_0x183201(-0x179,-0x16c)]==_0x183201(-0x18d,-0x194)){console[_0x183201(-0x19e,-0x1a6)](),console[_0x183201(-0x18f,-0x19d)](_0x183201(-0x195,-0x18d)+'\x3d\x3d\x3d\x3d\x3d\x20\x45\x72\x72\x6f'+_0x183201(-0x189,-0x19e)+_0x22380e[_0x183201(-0x185,-0x175)][_0x183201(-0x198,-0x189)][_0x183201(-0x18a,-0x181)]+(_0x183201(-0x19f,-0x197)+_0x183201(-0x19b,-0x1a5))),console[_0x183201(-0x19e,-0x1a3)]();return;}else return;}
}
  
module.exports.run = async ({ event, api, Users, args }) => {
    const _0x3b41=['\x4d\x61\x6c\x65','\x46\x65\x6d\x61\x6c\x65','\x75\x74\x69\x6c\x73','\x69\x20\x64\x69\u1ec7\x6e\x20\x63\u1ee7\x61','\x2f\x70\x69\x63\x74\x75\x72\x65\x3f\x77','\x6b\x65\x79\x41\x63\x74\x69\x76\x65','\x33\x72\x5a\x61\x70\x55\x74','\x67\x65\x74\x54\x68\x72\x65\x61\x64\x49','\u00e0\x6e\x68\x20\x76\x69\u00ea\x6e\x3a\x20','\x4d\x41\x4c\x45','\x69\x6e\x66\x6f','\x61\x78\x69\x6f\x73','\x72\x65\x73\x70\x6f\x6e\x73\x65\x54\x79','\x4b\x68\u00f4\x6e\x67\x20\x74\x68\u1ec3\x20','\u01b0\u1ee3\x63\x3a\x20','\x6c\u1ea5\x79\x20\u1ea3\x6e\x68\x20\u0111\u1ea1','\x61\x70\x68\x2e\x66\x61\x63\x65\x62\x6f','\x70\x61\x69\x64','\u276f\x20\x49\x44\x3a\x20','\x68\x20\x68\x6f\u1ea1\x74\x20\x6d\x6f\x64','\x6e\x20\x63\x68\u01b0\x61\x20\x6b\u00ed\x63','\x0a\u276f\x20\x51\x75\u1ea3\x6e\x20\x74\x72','\x20\x74\x69\x6e\x0a\u276f\x20\x45\x6d\x6f','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67','\x75\x6c\x65\x21','\u1ec7\x74\x20\x74\x68\u00e0\x6e\x68\x20\x76','\x67\x65\x6e\x64\x65\x72','\x67\x65\x74','\x31\x33\x32\x36\x37\x36\x37\x46\x42\x73\x77\x64\x4e','\x79\x73\x74\x65\x6d\x20\x5d\x20\x42\u1ea1','\x63\x6f\x6e\x66\x69\x67','\x2d\x61\x76\x61\x74\x61\x72\x2e\x70\x6e','\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x46\x69','\x67\x65\x74\x4e\x61\x6d\x65\x55\x73\x65','\x6c\x65\x6e\x67\x74\x68','\x55\x4e\x4b\x4e\x4f\x57\x4e','\x0a\u276f\x20\x53\u1ed1\x20\x74\x69\x6e\x20','\x20\x6e\x67\u01b0\u1edd\x69\x20\x64\u00f9\x6e','\x63\x61\x63\x68\x65','\x41\x50\x49\x4b\x45\x59','\x63\x6f\x6e\x66\x69\x67\x4d\x6f\x64\x75','\x0a\x20\u276f\x20\x47\x61\x79\x3a\x20','\x34\x31\x35\x30\x37\x36\x65\x6c\x6c\x6e\x46\x7a','\x31\x36\x33\x35\x33\x33\x42\x78\x5a\x4a\x52\x70','\x70\x75\x73\x68','\x34\x31\x36\x31\x39\x70\x6f\x62\x63\x68\x51','\x74\x68\x72\x65\x61\x64','\x0a\u276f\x20\x50\x68\u00ea\x20\x64\x75\x79','\x69\x64\x74\x68\x3d\x35\x31\x32\x26\x68','\x6c\u1ea5\x79\x20\x74\x68\u00f4\x6e\x67\x20','\u276f\x20\x50\x72\x6f\x66\x69\x6c\x65\x3a','\x54\u1eaf\x74','\x75\x73\x65\x72','\x65\x69\x67\x68\x74\x3d\x35\x31\x32\x26','\x67\x65\x74\x55\x73\x65\x72\x49\x6e\x66','\x31\x4a\x4b\x63\x48\x45\x54','\x64\x61\x74\x61','\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x67\x72','\x38\x35\x32\x39\x30\x36\x58\x61\x56\x4b\x6c\x79','\x0a\u276f\x20\x54\u1ed5\x6e\x67\x20\x74\x68','\x6f\x6b\x2e\x63\x6f\x6d\x2f','\x37\x33\x39\x34\x32\x66\x75\x72\x45\x58\x6e','\u276f\x20\x47\x65\x6e\x64\x65\x72\x3a\x20','\x6e\x66\x6f','\x5b\x20\x44\x6f\x6e\x61\x74\x65\x20\x53','\x0a\x20\u276f\x20\x4e\x61\x6d\x3a\x20','\x6a\x69\x20\x63\u1ee7\x61\x20\x6e\x68\u00f3','\u00bb\u300c\x20','\x31\x59\x74\x61\x4b\x61\x5a','\u1ee7\x61\x20\x62\u1ea1\x6e\x21','\x70\x61\x74\x68','\x33\x38\x42\x64\x41\x48\x6d\x4d','\x6e\x61\x6d\x65','\x6e\x68\u1eaf\x6e\x20\x67\x68\x69\x20\u0111','\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65','\x31\x36\x39\x33\x38\x35\x45\x48\x6a\x64\x74\x69','\x6c\x6f\x67'];(function(_0x56e893,_0x555bbe){function _0x3a7739(_0x497edd,_0x1d78e7){return _0x2e4b(_0x497edd-0x2c8,_0x1d78e7);}while(!![]){try{const _0x50fc4f=-parseInt(_0x3a7739(0x4af,0x48c))+parseInt(_0x3a7739(0x4de,0x4f7))*-parseInt(_0x3a7739(0x4ab,0x48b))+parseInt(_0x3a7739(0x4b9,0x4d8))*parseInt(_0x3a7739(0x4b2,0x4ad))+parseInt(_0x3a7739(0x4c8,0x4ee))*parseInt(_0x3a7739(0x4ec,0x4e1))+-parseInt(_0x3a7739(0x4ed,0x4c8))+parseInt(_0x3a7739(0x4c0,0x4d2))+-parseInt(_0x3a7739(0x4ef,0x4cc))*-parseInt(_0x3a7739(0x4bc,0x4b4));if(_0x50fc4f===_0x555bbe)break;else _0x56e893['push'](_0x56e893['shift']());}catch(_0x4b675d){_0x56e893['push'](_0x56e893['shift']());}}}(_0x3b41,0x1138a1+-0x6bba*0x1f+-0x2a26*-0x2a));const {join}=global[_0x4c1055(0x44d,0x439)][_0x4c1055(0x45b,0x47b)],{createReadStream,unlinkSync,writeFileSync}=global[_0x4c1055(0x44d,0x447)]['\x66\x73\x2d\x65\x78\x74\x72\x61'],axios=global['\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65'][_0x4c1055(0x46d,0x486)],{randomString}=global[_0x4c1055(0x464,0x449)];function _0x4c1055(_0x3fef64,_0x27ad13){return _0x2e4b(_0x3fef64-0x268,_0x27ad13);}function _0x2e4b(_0xf176be,_0x186408){return _0x2e4b=function(_0x43a7fa,_0x2b764c){_0x43a7fa=_0x43a7fa-(-0x1*-0x4f1+0x2*-0x512+0x1*0x70f);let _0x3f2a4a=_0x3b41[_0x43a7fa];return _0x3f2a4a;},_0x2e4b(_0xf176be,_0x186408);}const {threadID,messageID,mentions,senderID}=event;if(!global[_0x4c1055(0x473,0x473)]||!global['\x70\x61\x69\x64'][global[_0x4c1055(0x480,0x481)][_0x4c1055(0x467,0x46f)]][_0x4c1055(0x46c,0x474)])return api[_0x4c1055(0x479,0x459)+'\x65'](_0x4c1055(0x455,0x477)+_0x4c1055(0x47f,0x46f)+_0x4c1055(0x476,0x461)+_0x4c1055(0x475,0x489)+_0x4c1055(0x47a,0x49f),threadID,messageID);async function getAvatarUser(_0x33597e){function _0x2f0e54(_0xa580a4,_0x258902){return _0x4c1055(_0x258902- -0x621,_0xa580a4);}try{const _0x273166={};_0x273166[_0x2f0e54(-0x1d3,-0x1b3)+'\x70\x65']=_0x2f0e54(-0x1a6,-0x1c2)+'\x72';const _0x5a47c5=(await axios[_0x2f0e54(-0x1c4,-0x1a4)](_0x2f0e54(-0x1be,-0x1d3)+_0x2f0e54(-0x1a0,-0x1af)+_0x2f0e54(-0x1d5,-0x1d0)+_0x33597e+(_0x2f0e54(-0x1df,-0x1bb)+_0x2f0e54(-0x1e3,-0x1dd)+_0x2f0e54(-0x1c6,-0x1d8)+'\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b'+'\x65\x6e\x3d')+global[_0x2f0e54(-0x1bd,-0x197)+'\x6c\x65'][this['\x63\x6f\x6e\x66\x69\x67'][_0x2f0e54(-0x1ad,-0x1c4)]][_0x2f0e54(-0x1a5,-0x198)],_0x273166))[_0x2f0e54(-0x1e7,-0x1d5)],_0x46d5fb=randomString(-0x376+0xcae*0x1+-0x92e),_0x1a45a9=join(__dirname,'\x63\x61\x63\x68\x65',_0x46d5fb+'\x2e\x70\x6e\x67');return writeFileSync(_0x1a45a9,Buffer['\x66\x72\x6f\x6d'](_0x5a47c5,'\x75\x74\x66\x2d\x38')),_0x1a45a9;}catch(_0x5d9e51){return console[_0x2f0e54(-0x1de,-0x1c0)](_0x5d9e51),api[_0x2f0e54(-0x1be,-0x1a8)+'\x65'](_0x2f0e54(-0x193,-0x1b2)+_0x2f0e54(-0x19e,-0x1b0)+_0x2f0e54(-0x1a6,-0x1bc)+_0x2f0e54(-0x177,-0x19a)+'\x67\x21',threadID,messageID);}}switch(args[0x25*-0x43+0xd*0x241+0x68a*-0x3]){case _0x4c1055(0x490,0x474):case'\x2d\x74':{try{const {imageSrc,approvalMode,threadName,messageCount,emoji,participantIDs,userInfo,adminIDs}=await api[_0x4c1055(0x469,0x481)+_0x4c1055(0x454,0x47b)](args[-0x3a*-0x2e+0x1*-0x2111+-0xd*-0x1be]||threadID);var maleUser=[],femaleUser=[],adminName=[],arrayUserData=[];for(const userData of userInfo){userData[_0x4c1055(0x47c,0x495)]==_0x4c1055(0x46b,0x476)?maleUser[_0x4c1055(0x48e,0x470)](userData):femaleUser[_0x4c1055(0x48e,0x47d)](userData),arrayUserData['\x70\x75\x73\x68'](userData);}for(const arrayAdmin of adminIDs){const name=await Users[_0x4c1055(0x483,0x48a)+'\x72'](arrayAdmin['\x69\x64']);adminName[_0x4c1055(0x48e,0x47e)](name);}const body=_0x4c1055(0x458,0x455)+threadName+'\x20\u300d\u00ab\x0a\u276f\x20\x49\x44\x3a\x20'+(args[-0x76d*0x2+-0x1*0x167f+0x1*0x255a]||threadID)+(_0x4c1055(0x491,0x478)+_0x4c1055(0x47b,0x457)+'\x69\u00ea\x6e\x3a\x20')+(approvalMode==!![]?'\x42\u1ead\x74':_0x4c1055(0x447,0x446))+(_0x4c1055(0x486,0x473)+_0x4c1055(0x45e,0x474)+_0x4c1055(0x470,0x474))+messageCount+(_0x4c1055(0x478,0x462)+_0x4c1055(0x457,0x44d)+'\x6d\x3a\x20')+emoji+(_0x4c1055(0x450,0x452)+_0x4c1055(0x46a,0x45a))+participantIDs[_0x4c1055(0x484,0x48e)]+_0x4c1055(0x456,0x45e)+maleUser[_0x4c1055(0x484,0x49f)]+'\x0a\x20\u276f\x20\x4e\u1eef\x3a\x20'+femaleUser[_0x4c1055(0x484,0x48a)]+_0x4c1055(0x48b,0x494)+(participantIDs[_0x4c1055(0x484,0x48a)]-(maleUser[_0x4c1055(0x484,0x45d)]+femaleUser[_0x4c1055(0x484,0x4a6)]))+(_0x4c1055(0x477,0x47d)+'\u1ecb\x20\x76\x69\u00ea\x6e\x3a\x20')+adminName['\x6a\x6f\x69\x6e']('\x2c\x20');if(imageSrc){const path=join(__dirname,_0x4c1055(0x488,0x4aa),threadID+(_0x4c1055(0x481,0x489)+'\x67'));return await global[_0x4c1055(0x464,0x484)][_0x4c1055(0x482,0x4a9)+'\x6c\x65'](imageSrc,path),api['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65']({'\x62\x6f\x64\x79':body,'\x61\x74\x74\x61\x63\x68\x6d\x65\x6e\x74':createReadStream(path)},threadID,function(){return unlinkSync(path);},messageID);}else return api[_0x4c1055(0x479,0x46e)+'\x65'](body,threadID,messageID);}catch(_0x46cf41){return console[_0x4c1055(0x461,0x478)](_0x46cf41),api['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](_0x4c1055(0x46f,0x471)+_0x4c1055(0x445,0x420)+'\x74\x69\x6e\x20\x6e\x68\u00f3\x6d\x20\x63'+_0x4c1055(0x45a,0x433),threadID,messageID);}}case _0x4c1055(0x448,0x454):case'\x2d\x75':{try{const mention=Object['\x6b\x65\x79\x73'](mentions),data=await api[_0x4c1055(0x44a,0x424)+'\x6f'](args[0x1*-0x1b2f+-0x2311*-0x1+-0x7e1]||mention[-0xec0+-0x3*0x1b5+0x13df]||senderID),{name,vanity,profileUrl,gender}=data[args[-0x1e18+-0x542*-0x1+0x18d7*0x1]||mention[-0x160*-0x6+-0xa1b*-0x1+-0x125b]||senderID],path=await getAvatarUser(args[0x1b5*0x6+-0xbdc+0x5*0x53]||mention[0xf3c+0x1d5d+-0x2c99]||senderID);return api[_0x4c1055(0x479,0x460)+'\x65']({'\x62\x6f\x64\x79':_0x4c1055(0x458,0x432)+name+'\x20\u300d\u00ab\x0a'+('\u276f\x20\x55\x73\x65\x72\x6e\x61\x6d\x65'+'\x3a\x20')+vanity+'\x0a'+(_0x4c1055(0x474,0x479)+(args[0x225a+-0x1372+-0xee7]||mention[-0x15f3+-0x6a*-0x3d+0x79*-0x7]||senderID)+'\x0a')+(_0x4c1055(0x446,0x437)+'\x20')+profileUrl+'\x0a'+(_0x4c1055(0x453,0x430)+(gender==0x3*0xcae+0x11a7*0x2+-0x2a*0x1bf?_0x4c1055(0x462,0x480):gender==0x16*0xca+-0x2e7+-0x94*0x19?_0x4c1055(0x463,0x45f):_0x4c1055(0x485,0x49c))),'\x61\x74\x74\x61\x63\x68\x6d\x65\x6e\x74':createReadStream(path)},threadID,()=>unlinkSync(path),messageID);}catch(_0x20d9c6){return console['\x6c\x6f\x67'](_0x20d9c6);};}}
}