/*******************************************************************************
*
* E M B E D D E D   W I Z A R D   P R O J E C T
*
*                                                Copyright (c) TARA Systems GmbH
*                                    written by Paul Banach and Manfred Schweyer
*
********************************************************************************
*
* This file was generated automatically by Embedded Wizard Studio.
*
* Please do not make any modifications of this file! The modifications are lost
* when the file is generated again by Embedded Wizard Studio!
*
* The template of this heading text can be found in the file 'head.ewt' in the
* directory 'Platforms' of your Embedded Wizard installation directory. If you
* wish to adapt this text, please copy the template file 'head.ewt' into your
* project directory and edit the copy only. Please avoid any modifications of
* the original template file!
*
* Version  : 13.04
* Profile  : WebGL
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var EmWiApp;if(!EmWiApp)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(EmWiApp.Clock)throw new Error("The unit file 'Clock.js' included twice!");EmWiApp.
Clock=(function(){var B=EmWiApp;var D={};
var AG=[36,52];var AZ=[0,0,36,52];var Cd=[0,0,10,30];var Et=[28,14];var DB=[0,0,40
,14];var Eu=[0,0,28,14];var Ev=[0,0,237,67];var E1=[0,0,236,67];var Gj=[36,0,72,
52];var HM=[71,9,81,39];var JN=[82,0,118,52];var JO=[118,0,154,52];var JP=[153,9
,163,39];var JQ=[164,0,200,52];var HN=[200,0,236,52];var HO=[204,52,232,66];var IT=[
6,52,34,66];var JR=[39,52,67,66];var JS=[72,52,100,66];var M2=[105,52,133,66];var
M3=[138,52,166,66];var M4=[171,52,199,66];var M5=[0,0,236,26];var M6=[0,26,236,66
];
D.EF={AI:null,Ee:null,EF:0,Iv:function(C){if(C>9)C=9;if(C<0)C=-1;if(C===this.EF)return;
this.EF=C;this.Ee.B6(C!==-1);this.Ee.CC(C);},R:function(C){C=B.abK(C,AG);B.Core.
H.R.call(this,C);},_Init:function(aArg){B.Core.H._Init.call(this,aArg);B.acf.AJ.
_Init.call(this.AI={J:this},0);B.acf.AJ._Init.call(this.Ee={J:this},0);this.__proto__=
D.EF;this.R(AZ);this.AI.R(AZ);this.AI.A7(0xFFFFFFFF);this.AI.CC(10);this.AI.Bd(40
);this.Ee.R(AZ);this.Ee.HE(0xFFFFFFFF);this.Ee.A7(0xFFFFFFFF);this.Ee.CC(0);this.
S(this.AI,0);this.S(this.Ee,0);this.AI.AP(B.aaL(D.KH));this.Ee.AP(B.aaL(D.KH));}
,_Done:function(){this.__proto__=B.Core.H;this.AI._Done();this.Ee._Done();B.Core.
H._Done.call(this);},_ReInit:function(){B.Core.H._ReInit.call(this);this.AI._ReInit(
);this.Ee._ReInit();},_Mark:function(E){var A;B.Core.H._Mark.call(this,E);if((A=
this.AI)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Ee)._cycle!=E)A._Mark(A._cycle=
E);},_className:"Clock::Digit"};D.KJ={AI:null,FW:null,If:true,CP:function(C){if(
C===this.If)return;this.If=C;this.FW.B6(C);},_Init:function(aArg){B.Core.H._Init.
call(this,aArg);B.acf.AJ._Init.call(this.AI={J:this},0);B.acf.AJ._Init.call(this.
FW={J:this},0);this.__proto__=D.KJ;this.R(Cd);this.AI.R(Cd);this.AI.CC(1);this.AI.
Bd(40);this.FW.R(Cd);this.FW.CC(0);this.S(this.AI,0);this.S(this.FW,0);this.AI.AP(
B.aaL(D.KK));this.FW.AP(B.aaL(D.KK));},_Done:function(){this.__proto__=B.Core.H;
this.AI._Done();this.FW._Done();B.Core.H._Done.call(this);},_ReInit:function(){B.
Core.H._ReInit.call(this);this.AI._ReInit();this.FW._ReInit();},_Mark:function(E
){var A;B.Core.H._Mark.call(this,E);if((A=this.AI)._cycle!=E)A._Mark(A._cycle=E);
if((A=this.FW)._cycle!=E)A._Mark(A._cycle=E);},_className:"Clock::Dots"};D.FP={AI:
null,FO:null,I9:0,If:true,R:function(C){C=B.abK(C,Et);B.Core.H.R.call(this,C);},
CP:function(C){if(C===this.If)return;this.If=C;this.FO.B6(C);},GH:function(C){if(
C<0)C=0;if(C>6)C=6;if(C===this.I9)return;this.I9=C;C=C-1;if(C===-1)C=6;this.AI.CC(
C*2);this.FO.CC(C*2);},_Init:function(aArg){B.Core.H._Init.call(this,aArg);B.acf.
AJ._Init.call(this.AI={J:this},0);B.acf.AJ._Init.call(this.FO={J:this},0);this.__proto__=
D.FP;this.R(DB);this.AI.R(Eu);this.AI.CC(13);this.AI.Bd(40);this.FO.R(Eu);this.S(
this.AI,0);this.S(this.FO,0);this.AI.AP(B.aaL(D.KG));this.FO.AP(B.aaL(D.KG));},_Done:
function(){this.__proto__=B.Core.H;this.AI._Done();this.FO._Done();B.Core.H._Done.
call(this);},_ReInit:function(){B.Core.H._ReInit.call(this);this.AI._ReInit();this.
FO._ReInit();},_Mark:function(E){var A;B.Core.H._Mark.call(this,E);if((A=this.AI
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.FO)._cycle!=E)A._Mark(A._cycle=E);},_className:
"Clock::DayOfWeek"};D.Clock={AJ:null,Ht:null,Hu:null,GB:null,Hz:null,HA:null,Hg:
null,HI:null,GR:null,Timer:null,AC:null,GA:null,FQ:null,FR:null,FS:null,FT:null,
FU:null,FV:null,C2:null,Fl:null,Fm:null,CM:function(aArg){B.pe([this,this.Ps],this
);},Ps:function(Ab){var Bj=this.AC.P8();this.Ht.Iv((Bj.Ma/10)|0);this.Hu.Iv(Bj.Ma
%10);this.Hz.Iv((Bj.Mp/10)|0);this.HA.Iv(Bj.Mp%10);this.HI.Iv((Bj.K6/10)|0);this.
GR.Iv(Bj.K6%10);this.GB.CP(!(Bj.K6%2));this.Hg.CP(this.GB.If);this.GA.CP(!Bj.HD(
));this.FQ.CP(Bj.HD()===1);this.FR.CP(Bj.HD()===2);this.FS.CP(Bj.HD()===3);this.
FT.CP(Bj.HD()===4);this.FU.CP(Bj.HD()===5);this.FV.CP(Bj.HD()===6);},_Init:function(
aArg){B.Core.H._Init.call(this,aArg);B.acf.AJ._Init.call(this.AJ={J:this},0);D.EF.
_Init.call(this.Ht={J:this},0);D.EF._Init.call(this.Hu={J:this},0);D.KJ._Init.call(
this.GB={J:this},0);D.EF._Init.call(this.Hz={J:this},0);D.EF._Init.call(this.HA={
J:this},0);D.KJ._Init.call(this.Hg={J:this},0);D.EF._Init.call(this.HI={J:this},
0);D.EF._Init.call(this.GR={J:this},0);B.Core.Timer._Init.call(this.Timer={J:this
},0);B.Core.AC._Init.call(this.AC={J:this},0);D.FP._Init.call(this.GA={J:this},0
);D.FP._Init.call(this.FQ={J:this},0);D.FP._Init.call(this.FR={J:this},0);D.FP._Init.
call(this.FS={J:this},0);D.FP._Init.call(this.FT={J:this},0);D.FP._Init.call(this.
FU={J:this},0);D.FP._Init.call(this.FV={J:this},0);B.acf.C2._Init.call(this.C2={
J:this},0);B.acf.CD._Init.call(this.Fl={J:this},0);B.acf.CD._Init.call(this.Fm={
J:this},0);this.__proto__=D.Clock;this.R(Ev);this.AJ.R(E1);this.AJ.Bd(50);this.Ht.
R(AZ);this.Hu.R(Gj);this.GB.R(HM);this.Hz.R(JN);this.HA.R(JO);this.Hg.R(JP);this.
HI.R(JQ);this.GR.R(HN);this.GR.Bd(255);this.Timer.GJ(500);this.Timer.Ao(true);this.
GA.R(HO);this.GA.CP(false);this.FQ.R(IT);this.FQ.CP(false);this.FQ.GH(1);this.FR.
R(JR);this.FR.CP(false);this.FR.GH(2);this.FS.R(JS);this.FS.CP(false);this.FS.GH(
3);this.FT.R(M2);this.FT.CP(false);this.FT.GH(4);this.FU.R(M3);this.FU.CP(false);
this.FU.GH(5);this.FV.R(M4);this.FV.CP(false);this.FV.GH(6);this.C2.R(Ev);this.C2.
MD(3);this.C2.KX(B.Thermostat.MZ);this.C2.KY(B.Thermostat.Cc);this.C2.KZ(B.Thermostat.
G$);this.C2.HE(B.Thermostat.Cc);this.C2.A7(0xFFFFFFFF);this.Fl.R(M5);this.Fl.KX(
0xA0FFFFFF);this.Fl.KY(0xA0FFFFFF);this.Fl.KZ(0x00FFFFFF);this.Fl.HE(0x00FFFFFF);
this.Fm.R(M6);this.Fm.KX(0x00FFFFFF);this.Fm.KY(0x00FFFFFF);this.Fm.KZ(0xA0FFFFFF
);this.Fm.HE(0xA0FFFFFF);this.S(this.AJ,0);this.S(this.Ht,0);this.S(this.Hu,0);this.
S(this.GB,0);this.S(this.Hz,0);this.S(this.HA,0);this.S(this.Hg,0);this.S(this.HI
,0);this.S(this.GR,0);this.S(this.GA,0);this.S(this.FQ,0);this.S(this.FR,0);this.
S(this.FS,0);this.S(this.FT,0);this.S(this.FU,0);this.S(this.FV,0);this.S(this.C2
,0);this.S(this.Fl,0);this.S(this.Fm,0);this.AJ.AP(B.aaL(D.LU));this.Timer.GO=[this
,this.Ps];this.CM(aArg);},_Done:function(){this.__proto__=B.Core.H;this.AJ._Done(
);this.Ht._Done();this.Hu._Done();this.GB._Done();this.Hz._Done();this.HA._Done(
);this.Hg._Done();this.HI._Done();this.GR._Done();this.Timer._Done();this.AC._Done(
);this.GA._Done();this.FQ._Done();this.FR._Done();this.FS._Done();this.FT._Done(
);this.FU._Done();this.FV._Done();this.C2._Done();this.Fl._Done();this.Fm._Done(
);B.Core.H._Done.call(this);},_ReInit:function(){B.Core.H._ReInit.call(this);this.
AJ._ReInit();this.Ht._ReInit();this.Hu._ReInit();this.GB._ReInit();this.Hz._ReInit(
);this.HA._ReInit();this.Hg._ReInit();this.HI._ReInit();this.GR._ReInit();this.Timer.
_ReInit();this.AC._ReInit();this.GA._ReInit();this.FQ._ReInit();this.FR._ReInit(
);this.FS._ReInit();this.FT._ReInit();this.FU._ReInit();this.FV._ReInit();this.C2.
_ReInit();this.Fl._ReInit();this.Fm._ReInit();},_Mark:function(E){var A;B.Core.H.
_Mark.call(this,E);if((A=this.AJ)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Ht)._cycle
!=E)A._Mark(A._cycle=E);if((A=this.Hu)._cycle!=E)A._Mark(A._cycle=E);if((A=this.
GB)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Hz)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.HA)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Hg)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.HI)._cycle!=E)A._Mark(A._cycle=E);if((A=this.GR)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.Timer)._cycle!=E)A._Mark(A._cycle=E);if((A=this.AC)._cycle
!=E)A._Mark(A._cycle=E);if((A=this.GA)._cycle!=E)A._Mark(A._cycle=E);if((A=this.
FQ)._cycle!=E)A._Mark(A._cycle=E);if((A=this.FR)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.FS)._cycle!=E)A._Mark(A._cycle=E);if((A=this.FT)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.FU)._cycle!=E)A._Mark(A._cycle=E);if((A=this.FV)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.C2)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Fl)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.Fm)._cycle!=E)A._Mark(A._cycle=E);},_className:
"Clock::Clock"};D.KH={_class:function(){return B.acg.T;},0:{FileName:"./res/ClockDigitImages.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:11,FrameSize:[36,52],FrameDelay:0,_this:
null}};D.KK={_class:function(){return B.acg.T;},0:{FileName:"./res/ClockDotsImages.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:2,FrameSize:[10,30],FrameDelay:0,_this:
null}};D.KG={_class:function(){return B.acg.T;},0:{FileName:"./res/ClockDOWImages.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:13,FrameSize:[28,14],FrameDelay:0,FrameMapping:[
0x0000,0x0001,0x0002,0x0003,0x0004,0x0005,0x0006,0x0007,0x0008,0x0009,0x000A,0x000B
,0x000C,0x000C],_this:null}};D.LU={_class:function(){return B.acg.T;},0:{FileName:
"./res/ClockBackgroundClock.png",Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[
424,200],FrameDelay:0,_this:null}};
D._Init=function(){D.EF.__proto__=B.Core.H;D.KJ.__proto__=B.Core.H;D.FP.__proto__=
B.Core.H;D.Clock.__proto__=B.Core.H;};D._ReInit=function(){};D.Cx=function(E){var
A;if((A=D.KH[0]._this)&&(A._cycle!=E))A._Done(D.KH[0]._this=null);if((A=D.KK[0].
_this)&&(A._cycle!=E))A._Done(D.KK[0]._this=null);if((A=D.KG[0]._this)&&(A._cycle
!=E))A._Done(D.KG[0]._this=null);if((A=D.LU[0]._this)&&(A._cycle!=E))A._Done(D.LU[
0]._this=null);};return D;})();

/* Embedded Wizard */