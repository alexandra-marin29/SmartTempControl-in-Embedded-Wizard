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
var AG=[36,52];var AZ=[0,0,36,52];var Cc=[0,0,10,30];var Et=[28,14];var DA=[0,0,40
,14];var Eu=[0,0,28,14];var Ev=[0,0,237,67];var E2=[0,0,236,67];var Gj=[36,0,72,
52];var HM=[71,9,81,39];var JM=[82,0,118,52];var JN=[118,0,154,52];var JO=[153,9
,163,39];var JP=[164,0,200,52];var HN=[200,0,236,52];var HO=[204,52,232,66];var IT=[
6,52,34,66];var JQ=[39,52,67,66];var JR=[72,52,100,66];var M2=[105,52,133,66];var
M3=[138,52,166,66];var M4=[171,52,199,66];var M5=[0,0,236,26];var M6=[0,26,236,66
];
D.EF={AI:null,Ed:null,EF:0,Iv:function(C){if(C>9)C=9;if(C<0)C=-1;if(C===this.EF)return;
this.EF=C;this.Ed.BQ(C!==-1);this.Ed.CC(C);},R:function(C){C=B.abK(C,AG);B.Core.
H.R.call(this,C);},_Init:function(aArg){B.Core.H._Init.call(this,aArg);B.acf.AJ.
_Init.call(this.AI={J:this},0);B.acf.AJ._Init.call(this.Ed={J:this},0);this.__proto__=
D.EF;this.R(AZ);this.AI.R(AZ);this.AI.A7(0xFFFFFFFF);this.AI.CC(10);this.AI.Bd(40
);this.Ed.R(AZ);this.Ed.HD(0xFFFFFFFF);this.Ed.A7(0xFFFFFFFF);this.Ed.CC(0);this.
S(this.AI,0);this.S(this.Ed,0);this.AI.AP(B.aaL(D.KG));this.Ed.AP(B.aaL(D.KG));}
,_Done:function(){this.__proto__=B.Core.H;this.AI._Done();this.Ed._Done();B.Core.
H._Done.call(this);},_ReInit:function(){B.Core.H._ReInit.call(this);this.AI._ReInit(
);this.Ed._ReInit();},_Mark:function(E){var A;B.Core.H._Mark.call(this,E);if((A=
this.AI)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Ed)._cycle!=E)A._Mark(A._cycle=
E);},_className:"Clock::Digit"};D.KI={AI:null,FW:null,If:true,CO:function(C){if(
C===this.If)return;this.If=C;this.FW.BQ(C);},_Init:function(aArg){B.Core.H._Init.
call(this,aArg);B.acf.AJ._Init.call(this.AI={J:this},0);B.acf.AJ._Init.call(this.
FW={J:this},0);this.__proto__=D.KI;this.R(Cc);this.AI.R(Cc);this.AI.CC(1);this.AI.
Bd(40);this.FW.R(Cc);this.FW.CC(0);this.S(this.AI,0);this.S(this.FW,0);this.AI.AP(
B.aaL(D.KJ));this.FW.AP(B.aaL(D.KJ));},_Done:function(){this.__proto__=B.Core.H;
this.AI._Done();this.FW._Done();B.Core.H._Done.call(this);},_ReInit:function(){B.
Core.H._ReInit.call(this);this.AI._ReInit();this.FW._ReInit();},_Mark:function(E
){var A;B.Core.H._Mark.call(this,E);if((A=this.AI)._cycle!=E)A._Mark(A._cycle=E);
if((A=this.FW)._cycle!=E)A._Mark(A._cycle=E);},_className:"Clock::Dots"};D.FP={AI:
null,FO:null,I9:0,If:true,R:function(C){C=B.abK(C,Et);B.Core.H.R.call(this,C);},
CO:function(C){if(C===this.If)return;this.If=C;this.FO.BQ(C);},GH:function(C){if(
C<0)C=0;if(C>6)C=6;if(C===this.I9)return;this.I9=C;C=C-1;if(C===-1)C=6;this.AI.CC(
C*2);this.FO.CC(C*2);},_Init:function(aArg){B.Core.H._Init.call(this,aArg);B.acf.
AJ._Init.call(this.AI={J:this},0);B.acf.AJ._Init.call(this.FO={J:this},0);this.__proto__=
D.FP;this.R(DA);this.AI.R(Eu);this.AI.CC(13);this.AI.Bd(40);this.FO.R(Eu);this.S(
this.AI,0);this.S(this.FO,0);this.AI.AP(B.aaL(D.KF));this.FO.AP(B.aaL(D.KF));},_Done:
function(){this.__proto__=B.Core.H;this.AI._Done();this.FO._Done();B.Core.H._Done.
call(this);},_ReInit:function(){B.Core.H._ReInit.call(this);this.AI._ReInit();this.
FO._ReInit();},_Mark:function(E){var A;B.Core.H._Mark.call(this,E);if((A=this.AI
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.FO)._cycle!=E)A._Mark(A._cycle=E);},_className:
"Clock::DayOfWeek"};D.Clock={AJ:null,Hs:null,Ht:null,GB:null,Hy:null,Hz:null,Hf:
null,HH:null,GR:null,Timer:null,AC:null,GA:null,FQ:null,FR:null,FS:null,FT:null,
FU:null,FV:null,C1:null,Fl:null,Fm:null,CL:function(aArg){B.pe([this,this.Ps],this
);},Ps:function(Ab){var Bj=this.AC.P8();this.Hs.Iv((Bj.Ma/10)|0);this.Ht.Iv(Bj.Ma
%10);this.Hy.Iv((Bj.Mp/10)|0);this.Hz.Iv(Bj.Mp%10);this.HH.Iv((Bj.K6/10)|0);this.
GR.Iv(Bj.K6%10);this.GB.CO(!(Bj.K6%2));this.Hf.CO(this.GB.If);this.GA.CO(!Bj.HC(
));this.FQ.CO(Bj.HC()===1);this.FR.CO(Bj.HC()===2);this.FS.CO(Bj.HC()===3);this.
FT.CO(Bj.HC()===4);this.FU.CO(Bj.HC()===5);this.FV.CO(Bj.HC()===6);},_Init:function(
aArg){B.Core.H._Init.call(this,aArg);B.acf.AJ._Init.call(this.AJ={J:this},0);D.EF.
_Init.call(this.Hs={J:this},0);D.EF._Init.call(this.Ht={J:this},0);D.KI._Init.call(
this.GB={J:this},0);D.EF._Init.call(this.Hy={J:this},0);D.EF._Init.call(this.Hz={
J:this},0);D.KI._Init.call(this.Hf={J:this},0);D.EF._Init.call(this.HH={J:this},
0);D.EF._Init.call(this.GR={J:this},0);B.Core.Timer._Init.call(this.Timer={J:this
},0);B.Core.AC._Init.call(this.AC={J:this},0);D.FP._Init.call(this.GA={J:this},0
);D.FP._Init.call(this.FQ={J:this},0);D.FP._Init.call(this.FR={J:this},0);D.FP._Init.
call(this.FS={J:this},0);D.FP._Init.call(this.FT={J:this},0);D.FP._Init.call(this.
FU={J:this},0);D.FP._Init.call(this.FV={J:this},0);B.acf.C1._Init.call(this.C1={
J:this},0);B.acf.CD._Init.call(this.Fl={J:this},0);B.acf.CD._Init.call(this.Fm={
J:this},0);this.__proto__=D.Clock;this.R(Ev);this.AJ.R(E2);this.AJ.Bd(50);this.Hs.
R(AZ);this.Ht.R(Gj);this.GB.R(HM);this.Hy.R(JM);this.Hz.R(JN);this.Hf.R(JO);this.
HH.R(JP);this.GR.R(HN);this.GR.Bd(255);this.Timer.GJ(500);this.Timer.Ao(true);this.
GA.R(HO);this.GA.CO(false);this.FQ.R(IT);this.FQ.CO(false);this.FQ.GH(1);this.FR.
R(JQ);this.FR.CO(false);this.FR.GH(2);this.FS.R(JR);this.FS.CO(false);this.FS.GH(
3);this.FT.R(M2);this.FT.CO(false);this.FT.GH(4);this.FU.R(M3);this.FU.CO(false);
this.FU.GH(5);this.FV.R(M4);this.FV.CO(false);this.FV.GH(6);this.C1.R(Ev);this.C1.
MD(3);this.C1.KX(B.Thermostat.MZ);this.C1.KY(B.Thermostat.Cb);this.C1.KZ(B.Thermostat.
G_);this.C1.HD(B.Thermostat.Cb);this.C1.A7(0xFFFFFFFF);this.Fl.R(M5);this.Fl.KX(
0xA0FFFFFF);this.Fl.KY(0xA0FFFFFF);this.Fl.KZ(0x00FFFFFF);this.Fl.HD(0x00FFFFFF);
this.Fm.R(M6);this.Fm.KX(0x00FFFFFF);this.Fm.KY(0x00FFFFFF);this.Fm.KZ(0xA0FFFFFF
);this.Fm.HD(0xA0FFFFFF);this.S(this.AJ,0);this.S(this.Hs,0);this.S(this.Ht,0);this.
S(this.GB,0);this.S(this.Hy,0);this.S(this.Hz,0);this.S(this.Hf,0);this.S(this.HH
,0);this.S(this.GR,0);this.S(this.GA,0);this.S(this.FQ,0);this.S(this.FR,0);this.
S(this.FS,0);this.S(this.FT,0);this.S(this.FU,0);this.S(this.FV,0);this.S(this.C1
,0);this.S(this.Fl,0);this.S(this.Fm,0);this.AJ.AP(B.aaL(D.LU));this.Timer.GO=[this
,this.Ps];this.CL(aArg);},_Done:function(){this.__proto__=B.Core.H;this.AJ._Done(
);this.Hs._Done();this.Ht._Done();this.GB._Done();this.Hy._Done();this.Hz._Done(
);this.Hf._Done();this.HH._Done();this.GR._Done();this.Timer._Done();this.AC._Done(
);this.GA._Done();this.FQ._Done();this.FR._Done();this.FS._Done();this.FT._Done(
);this.FU._Done();this.FV._Done();this.C1._Done();this.Fl._Done();this.Fm._Done(
);B.Core.H._Done.call(this);},_ReInit:function(){B.Core.H._ReInit.call(this);this.
AJ._ReInit();this.Hs._ReInit();this.Ht._ReInit();this.GB._ReInit();this.Hy._ReInit(
);this.Hz._ReInit();this.Hf._ReInit();this.HH._ReInit();this.GR._ReInit();this.Timer.
_ReInit();this.AC._ReInit();this.GA._ReInit();this.FQ._ReInit();this.FR._ReInit(
);this.FS._ReInit();this.FT._ReInit();this.FU._ReInit();this.FV._ReInit();this.C1.
_ReInit();this.Fl._ReInit();this.Fm._ReInit();},_Mark:function(E){var A;B.Core.H.
_Mark.call(this,E);if((A=this.AJ)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Hs)._cycle
!=E)A._Mark(A._cycle=E);if((A=this.Ht)._cycle!=E)A._Mark(A._cycle=E);if((A=this.
GB)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Hy)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.Hz)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Hf)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.HH)._cycle!=E)A._Mark(A._cycle=E);if((A=this.GR)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.Timer)._cycle!=E)A._Mark(A._cycle=E);if((A=this.AC)._cycle
!=E)A._Mark(A._cycle=E);if((A=this.GA)._cycle!=E)A._Mark(A._cycle=E);if((A=this.
FQ)._cycle!=E)A._Mark(A._cycle=E);if((A=this.FR)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.FS)._cycle!=E)A._Mark(A._cycle=E);if((A=this.FT)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.FU)._cycle!=E)A._Mark(A._cycle=E);if((A=this.FV)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.C1)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Fl)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.Fm)._cycle!=E)A._Mark(A._cycle=E);},_className:
"Clock::Clock"};D.KG={_class:function(){return B.acg.T;},0:{FileName:"./res/ClockDigitImages.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:11,FrameSize:[36,52],FrameDelay:0,_this:
null}};D.KJ={_class:function(){return B.acg.T;},0:{FileName:"./res/ClockDotsImages.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:2,FrameSize:[10,30],FrameDelay:0,_this:
null}};D.KF={_class:function(){return B.acg.T;},0:{FileName:"./res/ClockDOWImages.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:13,FrameSize:[28,14],FrameDelay:0,FrameMapping:[
0x0000,0x0001,0x0002,0x0003,0x0004,0x0005,0x0006,0x0007,0x0008,0x0009,0x000A,0x000B
,0x000C,0x000C],_this:null}};D.LU={_class:function(){return B.acg.T;},0:{FileName:
"./res/ClockBackgroundClock.png",Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[
424,200],FrameDelay:0,_this:null}};
D._Init=function(){D.EF.__proto__=B.Core.H;D.KI.__proto__=B.Core.H;D.FP.__proto__=
B.Core.H;D.Clock.__proto__=B.Core.H;};D._ReInit=function(){};D.Cx=function(E){var
A;if((A=D.KG[0]._this)&&(A._cycle!=E))A._Done(D.KG[0]._this=null);if((A=D.KJ[0].
_this)&&(A._cycle!=E))A._Done(D.KJ[0]._this=null);if((A=D.KF[0]._this)&&(A._cycle
!=E))A._Done(D.KF[0]._this=null);if((A=D.LU[0]._this)&&(A._cycle!=E))A._Done(D.LU[
0]._this=null);};return D;})();

/* Embedded Wizard */