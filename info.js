module.exports.config = {
    name: "info",
    version: "1.0.3",
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
    const _0x434f=['\x31\x35\x34\x31\x71\x78\x61\x72\x50\x51','\x46\x65\x6d\x61\x6c\x65','\x61\x78\x69\x6f\x73','\x70\x75\x73\x68','\x70\x61\x69\x64','\x64\x61\x74\x61','\x67\x65\x74\x4e\x61\x6d\x65\x55\x73\x65','\x0a\x20\u276f\x20\x4e\u1eef\x3a\x20','\x55\x4e\x4b\x4e\x4f\x57\x4e','\u276f\x20\x47\x65\x6e\x64\x65\x72\x3a\x20','\x6f\x6b\x2e\x63\x6f\x6d\x2f','\x6e\x61\x6d\x65','\x4d\x61\x6c\x65','\x5b\x20\x44\x6f\x6e\x61\x74\x65\x20\x53','\x54\u1eaf\x74','\x67\x65\x6e\x64\x65\x72','\x63\x61\x63\x68\x65','\x6b\x65\x79\x41\x63\x74\x69\x76\x65','\x70\x61\x74\x68','\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b','\x31\x70\x5a\x4f\x72\x59\x4a','\x72\x65\x73\x70\x6f\x6e\x73\x65\x54\x79','\x6e\x66\x6f','\u00e0\x6e\x68\x20\x76\x69\u00ea\x6e\x3a\x20','\x32\x30\x31\x39\x32\x31\x77\x69\x52\x51\x4d\x4c','\u01b0\u1ee3\x63\x3a\x20','\x69\x64\x74\x68\x3d\x35\x31\x32\x26\x68','\x0a\u276f\x20\x50\x68\u00ea\x20\x64\x75\x79','\x34\x39\x39\x38\x37\x39\x73\x66\x79\x42\x5a\x59','\u276f\x20\x55\x73\x65\x72\x6e\x61\x6d\x65','\x6c\u1ea5\x79\x20\x74\x68\u00f4\x6e\x67\x20','\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65','\x6c\x65\x6e\x67\x74\x68','\x6c\x6f\x67','\x6b\x65\x79\x73','\x0a\u276f\x20\x54\u1ed5\x6e\x67\x20\x74\x68','\u1ee7\x61\x20\x62\u1ea1\x6e\x21','\x41\x50\x49\x4b\x45\x59','\x2e\x70\x6e\x67','\x6a\x6f\x69\x6e','\x2d\x61\x76\x61\x74\x61\x72\x2e\x70\x6e','\x37\x33\x39\x39\x38\x4c\x6a\x41\x6e\x73\x6c','\x0a\x20\u276f\x20\x4e\x61\x6d\x3a\x20','\x79\x73\x74\x65\x6d\x20\x5d\x20\x42\u1ea1','\x38\x38\x38\x34\x38\x61\x65\x4e\x49\x7a\x72','\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x46\x69','\x31\x31\x4f\x44\x4c\x79\x6e\x6c','\x6e\x20\x63\x68\u01b0\x61\x20\x6b\u00ed\x63','\x67\x65\x74','\x66\x73\x2d\x65\x78\x74\x72\x61','\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65','\x20\x74\x69\x6e\x0a\u276f\x20\x45\x6d\x6f','\x74\x68\x72\x65\x61\x64','\x36\x32\x33\x32\x35\x36\x4c\x73\x54\x4f\x51\x71','\x6a\x69\x20\x63\u1ee7\x61\x20\x6e\x68\u00f3','\x61\x70\x68\x2e\x66\x61\x63\x65\x62\x6f','\u00bb\u300c\x20','\x68\x20\x68\x6f\u1ea1\x74\x20\x6d\x6f\x64','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67','\u276f\x20\x50\x72\x6f\x66\x69\x6c\x65\x3a','\x0a\u276f\x20\x51\x75\u1ea3\x6e\x20\x74\x72','\x74\x69\x6e\x20\x6e\x68\u00f3\x6d\x20\x63','\x63\x6f\x6e\x66\x69\x67\x4d\x6f\x64\x75','\x75\x6c\x65\x21','\u1ecb\x20\x76\x69\u00ea\x6e\x3a\x20','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x67\x72','\x75\x74\x69\x6c\x73','\u1ec7\x74\x20\x74\x68\u00e0\x6e\x68\x20\x76','\x75\x74\x66\x2d\x38','\x63\x6f\x6e\x66\x69\x67','\x6d\x3a\x20','\x36\x35\x33\x37\x30\x31\x6f\x6c\x6f\x64\x4e\x42'];(function(_0x148221,_0x381289){function _0x5a1316(_0x1c80a4,_0x425486){return _0x4a12(_0x1c80a4- -0x18e,_0x425486);}while(!![]){try{const _0x513ab2=parseInt(_0x5a1316(0x48,0x2c))+parseInt(_0x5a1316(0x66,0x7e))+-parseInt(_0x5a1316(0x4b,0x5f))+parseInt(_0x5a1316(0x7b,0x6a))*parseInt(_0x5a1316(0x83,0x78))+-parseInt(_0x5a1316(0x7f,0x95))+-parseInt(_0x5a1316(0x54,0x30))+-parseInt(_0x5a1316(0x67,0x66))*-parseInt(_0x5a1316(0x4d,0x48));if(_0x513ab2===_0x381289)break;else _0x148221['push'](_0x148221['shift']());}catch(_0x1fa5d1){_0x148221['push'](_0x148221['shift']());}}}(_0x434f,0x47ee7+0x8eb*-0x3d+-0x1a5*-0x1a0));function _0x4a12(_0x182f0d,_0x41f894){return _0x4a12=function(_0xae5a6a,_0x4c34aa){_0xae5a6a=_0xae5a6a-(0x283*-0xb+-0x13e0+-0xd*-0x3cb);let _0x8e505=_0x434f[_0xae5a6a];return _0x8e505;},_0x4a12(_0x182f0d,_0x41f894);}function _0x534461(_0x398b0e,_0x57f676){return _0x4a12(_0x57f676- -0x3aa,_0x398b0e);}const {join}=global[_0x534461(-0x1a0,-0x196)][_0x534461(-0x1c3,-0x1a3)],{createReadStream,unlinkSync,writeFileSync}=global[_0x534461(-0x193,-0x196)][_0x534461(-0x1d1,-0x1cc)],axios=global[_0x534461(-0x19e,-0x196)][_0x534461(-0x1a3,-0x1b3)],{randomString}=global['\x75\x74\x69\x6c\x73'],{threadID,messageID,mentions,senderID}=event;if(!global['\x70\x61\x69\x64']||!global[_0x534461(-0x1ab,-0x1b1)][global[_0x534461(-0x195,-0x1b8)][_0x534461(-0x1aa,-0x1a4)]]['\x69\x6e\x66\x6f'])return api[_0x534461(-0x1cf,-0x1c3)+'\x65'](_0x534461(-0x184,-0x1a8)+_0x534461(-0x1d4,-0x1d2)+_0x534461(-0x1e2,-0x1ce)+_0x534461(-0x1de,-0x1c4)+_0x534461(-0x1c9,-0x1be),threadID,messageID);var getAvatarUser=async _0x2f50ba=>{function _0xd11290(_0x352af2,_0x5ef29c){return _0x534461(_0x5ef29c,_0x352af2-0x58e);}try{const _0x16ab23={};_0x16ab23[_0xd11290(0x3ee,0x40f)+'\x70\x65']=_0xd11290(0x3c3,0x3a7)+'\x72';const _0xc26245=(await axios[_0xd11290(0x3c1,0x3e5)](_0xd11290(0x3d2,0x3ca)+_0xd11290(0x3c8,0x3b0)+_0xd11290(0x3e3,0x3ea)+_0x2f50ba+('\x2f\x70\x69\x63\x74\x75\x72\x65\x3f\x77'+_0xd11290(0x3f3,0x3f0)+'\x65\x69\x67\x68\x74\x3d\x35\x31\x32\x26'+_0xd11290(0x3ec,0x3cc)+'\x65\x6e\x3d')+global[_0xd11290(0x3cf,0x3b1)+'\x6c\x65'][this[_0xd11290(0x3d6,0x3b2)][_0xd11290(0x3e4,0x3d9)]][_0xd11290(0x3b6,0x3d2)],_0x16ab23))[_0xd11290(0x3de,0x3ba)],_0x1cc144=randomString(-0x269e*0x1+-0x2363*-0x1+0x117*0x3),_0xeb880d=join(__dirname,_0xd11290(0x3e9,0x3dd),_0x1cc144+_0xd11290(0x3b7,0x3ce));return writeFileSync(_0xeb880d,Buffer['\x66\x72\x6f\x6d'](_0xc26245,_0xd11290(0x3d5,0x3c2))),_0xeb880d;}catch(_0x272b1f){return console[_0xd11290(0x3b2,0x399)](_0x272b1f),api['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65']('\x4b\x68\u00f4\x6e\x67\x20\x74\x68\u1ec3\x20'+'\x6c\u1ea5\x79\x20\u1ea3\x6e\x68\x20\u0111\u1ea1'+'\x69\x20\x64\x69\u1ec7\x6e\x20\x63\u1ee7\x61'+'\x20\x6e\x67\u01b0\u1edd\x69\x20\x64\u00f9\x6e'+'\x67\x21',threadID,messageID);}};switch(args[0x1e06+-0xf43*-0x1+-0x2d49]){case _0x534461(-0x1e9,-0x1c9):case'\x2d\x74':{try{const {imageSrc,approvalMode,threadName,messageCount,emoji,participantIDs,userInfo,adminIDs}=await api['\x67\x65\x74\x54\x68\x72\x65\x61\x64\x49'+_0x534461(-0x196,-0x19f)](args[0x62d*-0x5+0x1dea+0xf8]||threadID);var maleUser=[],femaleUser=[],adminName=[],arrayUserData=[];for(const userData of userInfo){userData[_0x534461(-0x193,-0x1a6)]=='\x4d\x41\x4c\x45'?maleUser[_0x534461(-0x192,-0x1b2)](userData):femaleUser[_0x534461(-0x1ba,-0x1b2)](userData),arrayUserData[_0x534461(-0x1c7,-0x1b2)](userData);}for(const arrayAdmin of adminIDs){const name=await Users[_0x534461(-0x1a5,-0x1af)+'\x72'](arrayAdmin['\x69\x64']);adminName[_0x534461(-0x1aa,-0x1b2)](name);}const body=_0x534461(-0x1ca,-0x1c5)+threadName+'\x20\u300d\u00ab\x0a\u276f\x20\x49\x44\x3a\x20'+(args[-0xed1*0x1+-0x1*-0x1079+-0x1a7]||threadID)+(_0x534461(-0x190,-0x19a)+_0x534461(-0x1a0,-0x1ba)+'\x69\u00ea\x6e\x3a\x20')+(approvalMode==!![]?'\x42\u1ead\x74':_0x534461(-0x1ac,-0x1a7))+('\x0a\u276f\x20\x53\u1ed1\x20\x74\x69\x6e\x20'+'\x6e\x68\u1eaf\x6e\x20\x67\x68\x69\x20\u0111'+_0x534461(-0x1ad,-0x19c))+messageCount+(_0x534461(-0x1aa,-0x1ca)+_0x534461(-0x1bb,-0x1c7)+_0x534461(-0x1ca,-0x1b7))+emoji+(_0x534461(-0x1ef,-0x1da)+_0x534461(-0x1c0,-0x19e))+participantIDs[_0x534461(-0x1a1,-0x195)]+_0x534461(-0x1f6,-0x1d3)+maleUser[_0x534461(-0x187,-0x195)]+_0x534461(-0x1cb,-0x1ae)+femaleUser[_0x534461(-0x17e,-0x195)]+'\x0a\x20\u276f\x20\x47\x61\x79\x3a\x20'+(participantIDs[_0x534461(-0x1a3,-0x195)]-(maleUser[_0x534461(-0x1a9,-0x195)]+femaleUser['\x6c\x65\x6e\x67\x74\x68']))+(_0x534461(-0x1ca,-0x1c1)+_0x534461(-0x1a6,-0x1bd))+adminName[_0x534461(-0x1e4,-0x1d6)]('\x2c\x20');if(imageSrc){const path=join(__dirname,'\x63\x61\x63\x68\x65',threadID+(_0x534461(-0x1ef,-0x1d5)+'\x67'));return await global[_0x534461(-0x19e,-0x1bb)][_0x534461(-0x1e1,-0x1d0)+'\x6c\x65'](imageSrc,path),api['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65']({'\x62\x6f\x64\x79':body,'\x61\x74\x74\x61\x63\x68\x6d\x65\x6e\x74':createReadStream(path)},threadID,function(){return unlinkSync(path);},messageID);}else return api['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](body,threadID,messageID);}catch(_0x2f0c55){return console[_0x534461(-0x1b9,-0x1dc)](_0x2f0c55),api[_0x534461(-0x1b9,-0x1c3)+'\x65']('\x4b\x68\u00f4\x6e\x67\x20\x74\x68\u1ec3\x20'+_0x534461(-0x175,-0x197)+_0x534461(-0x1c5,-0x1c0)+_0x534461(-0x1f7,-0x1d9),threadID,messageID);}}case'\x75\x73\x65\x72':case'\x2d\x75':{try{const mention=Object[_0x534461(-0x1c3,-0x1db)](mentions),data=await api['\x67\x65\x74\x55\x73\x65\x72\x49\x6e\x66'+'\x6f'](args[-0x3*-0xcb1+-0x2d*-0xc9+-0x2b*0x1b5]||mention[0x9a9*0x4+0x12c4*-0x2+-0x1*0x11c]||senderID),{name,vanity,profileUrl,gender}=data[args[0xef*-0x1+-0x4f*0x5b+0x1d05]||mention[0x128f+0x35*0x31+-0x1cb4]||senderID],path=await getAvatarUser(args[-0xc*0x33f+0x23*-0xc2+0x417b*0x1]||mention[-0x21b7+-0xdb+0x2292]||senderID);return api[_0x534461(-0x1cb,-0x1c3)+'\x65']({'\x62\x6f\x64\x79':'\u00bb\u300c\x20'+name+'\x20\u300d\u00ab\x0a'+(_0x534461(-0x187,-0x198)+'\x3a\x20')+vanity+'\x0a'+('\u276f\x20\x49\x44\x3a\x20'+(args[0x1733+0x103a+-0x15c*0x1d]||mention[0x986*-0x1+-0x1d4a*0x1+0x450*0x9]||senderID)+'\x0a')+(_0x534461(-0x1de,-0x1c2)+'\x20')+profileUrl+'\x0a'+(_0x534461(-0x1ca,-0x1ac)+(gender==0x1f69+0x1479+-0x33e0?_0x534461(-0x196,-0x1a9):gender==-0x133*-0x1+-0x7c1*0x1+0x1*0x68f?_0x534461(-0x1af,-0x1b4):_0x534461(-0x1ae,-0x1ad))),'\x61\x74\x74\x61\x63\x68\x6d\x65\x6e\x74':createReadStream(path)},threadID,()=>unlinkSync(path),messageID);}catch(_0x33ef76){return console[_0x534461(-0x1e3,-0x1dc)](_0x33ef76);};}}
}