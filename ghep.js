module.exports.config = {
	name: "ghep",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "CatalizCS",
	description: "Ghép đôi với những người trong nhóm",
	commandCategory: "roleplay",
	cooldowns: 5,
	dependencies: {
        "axios": "",
        "fs-extra": ""
    },
    envConfig: {
		APIKEY: "531532681600063|PZKvEhQ2eQ_XGkh5GlhMv6HBS60"
	}
}

module.exports.onLoad = async function ({ api }) {
   const _0xf9cc=['\x3d\x3d\x3d\x3d\x3d\x3d','\x34\x30\x33','\x31\x38\x39\x31\x39\x31\x30\x52\x45\x57\x43\x44\x56','\x63\x6f\x6d\x65\x20\x62\x61\x63\x6b\x20','\x72\x65\x73\x70\x6f\x6e\x73\x65','\x67\x68\x65\x70\x20\x7c\x20\x57\x65\x6c','\x35\x38\x38\x30\x33\x53\x72\x55\x71\x70\x4a','\x6b\x65\x79\x73','\x73\x20\x6d\x6f\x64\x75\x6c\x65\x3a\x20','\x38\x34\x32\x70\x4e\x4f\x78\x41\x4e','\x55\x73\x65\x72\x49\x44','\x33\x35\x32\x33\x64\x48\x68\x55\x61\x4d','\x64\x61\x74\x61','\x72\x65\x73\x75\x6c\x74','\x35\x32\x6c\x58\x43\x75\x66\x53','\x36\x38\x33\x51\x6e\x6c\x65\x77\x79','\x67\x68\x65\x70','\x67\x65\x74\x43\x75\x72\x72\x65\x6e\x74','\x63\x6f\x6e\x66\x69\x67','\x76\x65\x64\x20\x53\x75\x63\x63\x65\x73','\x65\x72\x72\x6f\x72','\x2f\x64\x6f\x6e\x61\x74\x65\x2f\x66\x69','\x70\x61\x69\x64','\x6e\x64\x2f','\x31\x32\x33\x33\x47\x65\x57\x76\x61\x6c','\x32\x33\x38\x31\x33\x66\x7a\x69\x78\x41\x6d','\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d','\x31\x45\x4c\x46\x49\x79\x4b','\x3d\x3d\x3d\x3d\x3d\x20\x41\x63\x74\x69','\x20\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d','\x70\x6f\x73\x74','\x35\x30\x30','\x6e\x61\x74\x65\x2e\x6d\x69\x72\x61\x69','\x72\x21\x20','\x3d\x3d\x3d\x3d\x3d\x20\x45\x72\x72\x6f','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x6f','\x73\x74\x61\x74\x75\x73\x43\x6f\x64\x65','\x6c\x6f\x67','\x31\x30\x39\x38\x36\x31\x36\x43\x69\x47\x62\x50\x79','\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65','\x31\x36\x34\x6c\x4c\x79\x4b\x49\x4d','\x61\x78\x69\x6f\x73','\x6b\x65\x79\x41\x63\x74\x69\x76\x65','\x31\x66\x4f\x48\x6f\x56\x51','\x34\x30\x31','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x31\x33\x31\x33\x47\x63\x68\x6d\x63\x64'];function _0x378930(_0x57d44e,_0x2958a9){return _0x4e93(_0x2958a9-0x26c,_0x57d44e);}(function(_0x20ed4c,_0x7cc1fb){function _0x582b67(_0x76d968,_0x29c56a){return _0x4e93(_0x29c56a- -0xcf,_0x76d968);}while(!![]){try{const _0x320a4a=parseInt(_0x582b67(0x92,0x9d))*parseInt(_0x582b67(0x9a,0x94))+-parseInt(_0x582b67(0x92,0x81))*-parseInt(_0x582b67(0x72,0x87))+parseInt(_0x582b67(0x8d,0x8e))*parseInt(_0x582b67(0x7a,0x84))+parseInt(_0x582b67(0x8a,0xa0))*parseInt(_0x582b67(0x76,0x8b))+parseInt(_0x582b67(0xa4,0x93))*-parseInt(_0x582b67(0x9a,0x9e))+parseInt(_0x582b67(0x86,0x90))*-parseInt(_0x582b67(0xa1,0xad))+-parseInt(_0x582b67(0xbb,0xab));if(_0x320a4a===_0x7cc1fb)break;else _0x20ed4c['push'](_0x20ed4c['shift']());}catch(_0xbde85b){_0x20ed4c['push'](_0x20ed4c['shift']());}}}(_0xf9cc,-0x7db*0x9d+-0x6a1fb*0x3+0x7f1fe*0x5));function _0x4e93(_0x5c67ea,_0x34ff18){return _0x4e93=function(_0x170e7,_0x542d3a){_0x170e7=_0x170e7-(0x22f1+-0x29*0xde+0x2*0xf6);let _0xde38e6=_0xf9cc[_0x170e7];return _0xde38e6;},_0x4e93(_0x5c67ea,_0x34ff18);}try{const axios=global[_0x378930(0x3fa,0x3e7)][_0x378930(0x400,0x3e9)],{data}=await axios[_0x378930(0x3c9,0x3de)](_0x378930(0x3cc,0x3e3)+_0x378930(0x3ec,0x3e0)+'\x70\x72\x6f\x6a\x65\x63\x74\x2e\x74\x6b'+_0x378930(0x3c4,0x3d5)+_0x378930(0x3c2,0x3d7),{'\x6b\x65\x79\x6c\x6f\x67\x69\x6e':global[_0x378930(0x3bf,0x3d2)][_0x378930(0x3cb,0x3bb)]||'','\x62\x6f\x74\x49\x44':api[_0x378930(0x3d4,0x3d1)+_0x378930(0x3b9,0x3ca)](),'\x6d\x6f\x64\x75\x6c\x65\x52\x65\x71\x75\x65\x73\x74':_0x378930(0x3bd,0x3d0)});if(Object[_0x378930(0x3c5,0x3c7)](data[_0x378930(0x3c5,0x3cd)])['\x6c\x65\x6e\x67\x74\x68']!=0x1de5+0x1a1*-0x11+-0x234){if(typeof global[_0x378930(0x3cb,0x3d6)]==_0x378930(0x3b7,0x3be))global['\x70\x61\x69\x64']={};if(typeof global[_0x378930(0x3c6,0x3d6)][global[_0x378930(0x3d8,0x3d2)][_0x378930(0x3ca,0x3bb)]]==_0x378930(0x3b3,0x3be))global[_0x378930(0x3e0,0x3d6)][global['\x63\x6f\x6e\x66\x69\x67'][_0x378930(0x3c1,0x3bb)]]={};global[_0x378930(0x3d8,0x3d6)][global[_0x378930(0x3d3,0x3d2)][_0x378930(0x3c7,0x3bb)]][_0x378930(0x3c5,0x3d0)]=!![],console[_0x378930(0x3d3,0x3e5)](),console[_0x378930(0x3be,0x3d4)](_0x378930(0x3d9,0x3da)+_0x378930(0x3ee,0x3dc)+_0x378930(0x3e5,0x3d3)+_0x378930(0x3d8,0x3c8)+_0x378930(0x3b5,0x3c5)+_0x378930(0x3d9,0x3c3)+data[_0x378930(0x3c6,0x3cd)]['\x6e\x61\x6d\x65']+(_0x378930(0x3ea,0x3dd)+_0x378930(0x3c5,0x3c0))),console[_0x378930(0x3d2,0x3e5)]();return;}}catch(_0x50970a){if(!_0x50970a[_0x378930(0x3ca,0x3c4)])return;if(_0x50970a[_0x378930(0x3ae,0x3c4)]['\x64\x61\x74\x61'][_0x378930(0x3ec,0x3e4)]==_0x378930(0x3df,0x3df)||_0x50970a[_0x378930(0x3cd,0x3c4)][_0x378930(0x3c7,0x3cc)][_0x378930(0x3f7,0x3e4)]==_0x378930(0x3d0,0x3bd)||_0x50970a[_0x378930(0x3cd,0x3c4)][_0x378930(0x3b5,0x3cc)][_0x378930(0x3e6,0x3e4)]==_0x378930(0x3bd,0x3c1)){console[_0x378930(0x3ef,0x3e5)](),console[_0x378930(0x3cc,0x3d4)]('\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d'+_0x378930(0x3ee,0x3e2)+_0x378930(0x3ca,0x3e1)+_0x50970a[_0x378930(0x3dc,0x3c4)]['\x64\x61\x74\x61'][_0x378930(0x3c5,0x3cd)]+(_0x378930(0x3f3,0x3dd)+_0x378930(0x3cd,0x3c0))),console[_0x378930(0x3e9,0x3e5)]();return;}else return;}
}

module.exports.run = async ({ event, api }) => {
    const _0x525b=['\x55\x73\x65\x72\x49\x44','\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b','\x4b\x68\u00f4\x6e\x67\x20\x74\x68\u1ec3\x20','\x2f\x63\x61\x63\x68\x65\x2f','\x67\x65\x74\x54\x68\x72\x65\x61\x64\x49','\x66\x72\x6f\x6d','\u00e3\x20\x78\u1ea3\x79\x20\x72\x61\x20\x6c','\x43\x68\u1ed3\x6e\x67\x20\x63\u1ee7\x61','\x67\x68\u00e9\x70\x20\u0111\u00f4\x69\x20\x64','\x56\u1ee3\x20\x63\u1ee7\x61','\x74\x68\u00e0\x6e\x68\x20\x63\u00f4\x6e\x67','\x2e\x70\x6e\x67','\x20\x2d\x20','\x67\x65\x74\x55\x73\x65\x72\x49\x6e\x66','\x67\x65\x6e\x64\x65\x72','\x61\x70\x68\x2e\x66\x61\x63\x65\x62\x6f','\x66\x73\x2d\x65\x78\x74\x72\x61','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67','\x75\x6c\x65\x21','\x75\x74\x66\x2d\x38','\x63\x68\x61\x6e\x67\x65\x4e\x69\x63\x6b','\x67\x65\x74\x43\x75\x72\x72\x65\x6e\x74','\x2f\x70\x69\x63\x74\x75\x72\x65\x3f\x77','\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6e','\x31\x37\x37\x37\x37\x31\x34\x71\x6e\x70\x56\x68\x41','\x6f\x20\x6d\x6f\x64\x75\x6c\x65\x20\u0111','\x0a\x0a\x20\x20','\x35\x32\x35\x37\x32\x76\x72\x43\x54\x49\x5a','\x32\x47\x79\x73\x75\x55\x68','\x74\x69\x6e\x20\x63\u1ee7\x61\x20\x6e\x67','\x6c\u1ea5\x79\x20\u1ea3\x6e\x68\x20\u0111\u1ea1','\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65','\x32\x38\x34\x36\x32\x33\x59\x4b\x49\x54\x77\x78','\x6c\x6f\x67','\x66\x6c\x6f\x6f\x72','\x63\x6f\x6e\x66\x69\x67\x4d\x6f\x64\x75','\x6e\x61\x6d\x65','\x32\x39\x35\x37\x37\x36\x6d\x50\x41\x4a\x61\x64','\u01b0\u1edd\x69\x20\x64\u00f9\x6e\x67\x21','\u1ed7\x69\x21','\x66\x69\x6c\x74\x65\x72','\x64\x61\x74\x61','\x67\x65\x74','\x69\x20\x64\x69\u1ec7\x6e\x20\x63\u1ee7\x61','\x31\x79\x4c\x51\x6e\x79\x74','\x61\x78\x69\x6f\x73','\x20\x67\x68\u00e9\x70\x20\u0111\u00f4\x69\x20','\x6f\x6b\x2e\x63\x6f\x6d\x2f','\x69\x64\x74\x68\x3d\x35\x31\x32\x26\x68','\x72\x61\x6e\x64\x6f\x6d','\x68\x20\x68\x6f\u1ea1\x74\x20\x6d\x6f\x64','\x34\x35\x75\x53\x73\x61\x58\x49','\x33\x34\x32\x31\x36\x34\x5a\x53\x55\x55\x77\x63','\x61\x74\x74\x61\x63\x68\x6d\x65\x6e\x74','\x32\x31\x33\x37\x36\x64\x4c\x73\x79\x63\x78','\x65\x6e\x3d','\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65','\x72\x65\x73\x70\x6f\x6e\x73\x65\x54\x79','\x6c\x65\x6e\x67\x74\x68','\x6c\u1ea5\x79\x20\x74\x68\u00f4\x6e\x67\x20','\x74\x49\x44\x73','\x31\x34\x38\x34\x35\x33\x6a\x41\x4b\x54\x49\x75','\x5b\x20\x44\x6f\x6e\x61\x74\x65\x20\x53','\x62\x6f\x64\x79','\x70\x61\x69\x64','\x42\u00ea\u0111\u00ea','\x79\x73\x74\x65\x6d\x20\x5d\x20\x42\u1ea1','\x48\x61\x69\x20\x62\u1ea1\x6e\x20\u0111\u00e3'];(function(_0x13712b,_0x4861c2){function _0x1b5ec7(_0x4b3fa2,_0x56294f){return _0x2cb5(_0x4b3fa2- -0x18d,_0x56294f);}while(!![]){try{const _0x50af38=-parseInt(_0x1b5ec7(0x9a,0x83))*parseInt(_0x1b5ec7(0x97,0x90))+-parseInt(_0x1b5ec7(0x98,0x87))+-parseInt(_0x1b5ec7(0xa1,0xb9))+-parseInt(_0x1b5ec7(0x7f,0x95))+-parseInt(_0x1b5ec7(0x84,0x80))*-parseInt(_0x1b5ec7(0x80,0x64))+-parseInt(_0x1b5ec7(0x89,0x7c))+parseInt(_0x1b5ec7(0x7c,0x8b))*parseInt(_0x1b5ec7(0x90,0x7a));if(_0x50af38===_0x4861c2)break;else _0x13712b['push'](_0x13712b['shift']());}catch(_0x15a6e7){_0x13712b['push'](_0x13712b['shift']());}}}(_0x525b,0x13fe*0x33+0x1e18f+-0x2*-0x13bf9));if(!global[_0x16e141(-0x1b2,-0x1bf)]||!global[_0x16e141(-0x1b2,-0x1c2)][global['\x63\x6f\x6e\x66\x69\x67']['\x6b\x65\x79\x41\x63\x74\x69\x76\x65']]['\x67\x68\x65\x70'])return api['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](_0x16e141(-0x1b4,-0x1cb)+_0x16e141(-0x1f4,-0x1d6)+'\x6e\x20\x63\x68\u01b0\x61\x20\x6b\u00ed\x63'+_0x16e141(-0x1c0,-0x1a7)+_0x16e141(-0x1e0,-0x1f9),threadID,messageID);const axios=global['\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65'][_0x16e141(-0x1c5,-0x1e3)],{writeFileSync,createReadStream}=global[_0x16e141(-0x1ba,-0x1d3)][_0x16e141(-0x1e2,-0x1d1)];function _0x2cb5(_0x5c0bb3,_0x57281b){return _0x2cb5=function(_0x2d620c,_0x2722a2){_0x2d620c=_0x2d620c-(0x15a2+-0x2484+-0xcd*-0x15);let _0x1e0e01=_0x525b[_0x2d620c];return _0x1e0e01;},_0x2cb5(_0x5c0bb3,_0x57281b);}function _0x16e141(_0x3176d9,_0x5a3f8){return _0x2cb5(_0x3176d9- -0x3e3,_0x5a3f8);}const {threadID,messageID,senderID}=event;Array['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x72\x61\x6e\x64\x6f\x6d']=function(){function _0x3dcc74(_0x15a68d,_0x54cc75){return _0x16e141(_0x15a68d-0x3b0,_0x54cc75);}return this[Math[_0x3dcc74(0x1e0,0x1c0)](Math['\x72\x61\x6e\x64\x6f\x6d']()*this[_0x3dcc74(0x1f8,0x202)])];};async function getDataThread(_0x5b3d18){function _0x59b580(_0x4ae4f4,_0x830522){return _0x16e141(_0x830522-0xa5,_0x4ae4f4);}try{var _0x183c06=await api[_0x59b580(-0x147,-0x149)+'\x6e\x66\x6f'](_0x5b3d18);return _0x183c06[_0x59b580(-0x133,-0x136)+_0x59b580(-0x11b,-0x111)][_0x59b580(-0x107,-0x125)](_0x13b07e=>_0x13b07e!=api[_0x59b580(-0x117,-0x138)+_0x59b580(-0x15f,-0x14d)]()||_0x13b07e!=senderID);}catch(_0x1d5992){return console[_0x59b580(-0x123,-0x12c)](_0x1d5992),api[_0x59b580(-0x121,-0x13c)+'\x65'](_0x59b580(-0x13e,-0x14b)+_0x59b580(-0xfa,-0x112)+'\x74\x69\x6e\x20\x63\u1ee7\x61\x20\x6e\x68'+'\u00f3\x6d\x21',_0x5b3d18,messageID);}}async function getUserInfo(_0x2ab506){function _0x2044eb(_0x1d16da,_0x4808cd){return _0x16e141(_0x1d16da-0x230,_0x4808cd);}try{const _0x488f74=await api[_0x2044eb(0x4b,0x4d)+'\x6f'](_0x2ab506),_0x25777d={};return _0x25777d[_0x2044eb(0x62,0x69)]=_0x488f74[_0x2ab506][_0x2044eb(0x62,0x49)],_0x25777d[_0x2044eb(0x4c,0x4c)]=_0x488f74[_0x2ab506]['\x67\x65\x6e\x64\x65\x72'],_0x25777d;}catch(_0x572d2d){return console[_0x2044eb(0x5f,0x5f)](_0x572d2d),api[_0x2044eb(0x4f,0x35)+'\x65'](_0x2044eb(0x40,0x4d)+_0x2044eb(0x79,0x77)+_0x2044eb(0x5b,0x5a)+_0x2044eb(0x64,0x5b),threadID,messageID);}}async function getAvatarUser(_0x305476){function _0x50a57d(_0x141c95,_0x253933){return _0x16e141(_0x141c95-0x6e0,_0x253933);}try{const _0x2c3c38={};_0x2c3c38[_0x50a57d(0x527,0x51f)+'\x70\x65']=_0x50a57d(0x50d,0x516)+'\x72';const _0x5d7a6e=(await axios[_0x50a57d(0x518,0x52c)]('\x68\x74\x74\x70\x73\x3a\x2f\x2f\x67\x72'+_0x50a57d(0x4fd,0x50f)+_0x50a57d(0x51d,0x53e)+_0x305476+(_0x50a57d(0x504,0x4f2)+_0x50a57d(0x51e,0x540)+'\x65\x69\x67\x68\x74\x3d\x35\x31\x32\x26'+_0x50a57d(0x4ef,0x4db)+_0x50a57d(0x525,0x50b))+global[_0x50a57d(0x511,0x52b)+'\x6c\x65'][this['\x63\x6f\x6e\x66\x69\x67'][_0x50a57d(0x512,0x4f1)]]['\x41\x50\x49\x4b\x45\x59'],_0x2c3c38))[_0x50a57d(0x517,0x537)];return writeFileSync(__dirname+(_0x50a57d(0x4f1,0x4f2)+_0x305476+_0x50a57d(0x4f9,0x500)),Buffer[_0x50a57d(0x4f3,0x50b)](_0x5d7a6e,_0x50a57d(0x501,0x4f6))),createReadStream(__dirname+('\x2f\x63\x61\x63\x68\x65\x2f'+_0x305476+'\x2e\x70\x6e\x67'));}catch(_0x1dd351){return console[_0x50a57d(0x50f,0x51f)](_0x1dd351),api[_0x50a57d(0x4ff,0x4e2)+'\x65']('\x4b\x68\u00f4\x6e\x67\x20\x74\x68\u1ec3\x20'+_0x50a57d(0x50c,0x51f)+_0x50a57d(0x519,0x500)+'\x20\x6e\x67\u01b0\u1edd\x69\x20\x64\u00f9\x6e'+'\x67\x21',threadID,messageID);}}const emoji=['\u2665\ufe0f','\u2764\ufe0f','\ud83d\udc9b','\ud83d\udc9a','\ud83d\udc99','\ud83d\udc9c','\ud83d\udda4','\ud83d\udc96','\ud83d\udc9d','\ud83d\udc93','\ud83d\udc98','\ud83d\udc8d'][_0x16e141(-0x1c1,-0x1ac)]();try{const threadInfo=await getDataThread(threadID),userIDRandom=threadInfo[Math[_0x16e141(-0x1d0,-0x1d2)](Math[_0x16e141(-0x1c1,-0x1a3)]()*threadInfo[_0x16e141(-0x1b8,-0x1d9)])],userData=await getUserInfo(senderID),userDataRandom=await getUserInfo(userIDRandom),avatarPath=await getAvatarUser(senderID),avatarPathRandom=await getAvatarUser(userIDRandom);api[_0x16e141(-0x1de,-0x1f5)+_0x16e141(-0x1ce,-0x1c5)]((userData[_0x16e141(-0x1e4,-0x204)]==0x1c30+0x2639+-0x4267?_0x16e141(-0x1e9,-0x1f4):userData['\x67\x65\x6e\x64\x65\x72']==-0x8f*-0xb+0x15a+-0x77e?_0x16e141(-0x1eb,-0x1f8):_0x16e141(-0x1b1,-0x1d1))+'\x20'+userData[_0x16e141(-0x1ce,-0x1e5)]+'\x20'+emoji,threadID,userIDRandom),api[_0x16e141(-0x1de,-0x1fb)+_0x16e141(-0x1ce,-0x1d0)]((userData['\x67\x65\x6e\x64\x65\x72']==-0x25*-0xb5+-0x1c*-0x110+0xb*-0x515?_0x16e141(-0x1eb,-0x1f3):userData[_0x16e141(-0x1e4,-0x1fa)]==-0xb*-0x38+0x1442+-0x16a9?_0x16e141(-0x1e9,-0x1e4):_0x16e141(-0x1b1,-0x1be))+'\x20'+userDataRandom[_0x16e141(-0x1ce,-0x1b1)]+'\x20'+emoji,threadID,senderID);const _0x2d5a08={};return _0x2d5a08[_0x16e141(-0x1b3,-0x1cc)]=_0x16e141(-0x1f3,-0x1f7)+_0x16e141(-0x1c4,-0x1bc)+_0x16e141(-0x1e8,-0x1f9)+_0x16e141(-0x1d8,-0x1d9)+emoji+'\x20'+userData[_0x16e141(-0x1ce,-0x1b3)]+_0x16e141(-0x1e6,-0x1f0)+userDataRandom[_0x16e141(-0x1ce,-0x1c7)]+'\x20'+emoji,_0x2d5a08['\x6d\x65\x6e\x74\x69\x6f\x6e\x73']=[{'\x74\x61\x67':userData[_0x16e141(-0x1ce,-0x1cd)],'\x69\x64':senderID},{'\x74\x61\x67':userDataRandom[_0x16e141(-0x1ce,-0x1b9)],'\x69\x64':userIDRandom}],_0x2d5a08[_0x16e141(-0x1bd,-0x1c1)]=[avatarPath,avatarPathRandom],api['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](_0x2d5a08,threadID,messageID);}catch(_0x4b8982){return console[_0x16e141(-0x1d1,-0x1e7)](_0x4b8982),api[_0x16e141(-0x1e1,-0x1fc)+'\x65']('\x4b\x68\u00f4\x6e\x67\x20\x74\x68\u1ec3\x20'+_0x16e141(-0x1ea,-0x1e6)+_0x16e141(-0x1d9,-0x1b8)+_0x16e141(-0x1ec,-0x1dc)+_0x16e141(-0x1cb,-0x1c0),threadID,messageID);}
}