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
var AI=[36,52];var AU=[0,0,36,52];var Ch=[0,0,10,30];var EQ=[28,14];var DZ=[0,0,40
,14];var DD=[0,0,28,14];var D0=[0,0,237,67];var Er=[0,0,236,67];var FS=[36,0,72,
52];var IE=[71,9,81,39];var G4=[82,0,118,52];var HX=[118,0,154,52];var IF=[153,9
,163,39];var Ly=[164,0,200,52];var Lz=[200,0,236,52];var JO=[204,52,232,66];var JP=[
6,52,34,66];var LA=[39,52,67,66];var LB=[72,52,100,66];var LC=[105,52,133,66];var
LD=[138,52,166,66];var LE=[171,52,199,66];var LF=[0,0,236,26];var LG=[0,26,236,66
];
D.D_={AB:null,DQ:null,D_:0,HE:function(C){if(C>9)C=9;if(C<0)C=-1;if(C===this.D_)return;
this.D_=C;this.DQ.R(C!==-1);this.DQ.Cs(C);},L:function(C){C=B.abK(C,AI);B.Core.P.
L.call(this,C);},_Init:function(aArg){B.Core.P._Init.call(this,aArg);B.acf.AH._Init.
call(this.AB={J:this},0);B.acf.AH._Init.call(this.DQ={J:this},0);this.__proto__=
D.D_;this.L(AU);this.AB.L(AU);this.AB.AV(0xFFFFFFFF);this.AB.Cs(10);this.AB.Bc(40
);this.DQ.L(AU);this.DQ.GH(0xFFFFFFFF);this.DQ.AV(0xFFFFFFFF);this.DQ.Cs(0);this.
T(this.AB,0);this.T(this.DQ,0);this.AB.AK(B.aaL(D.Jo));this.DQ.AK(B.aaL(D.Jo));}
,_Done:function(){this.__proto__=B.Core.P;this.AB._Done();this.DQ._Done();B.Core.
P._Done.call(this);},_ReInit:function(){B.Core.P._ReInit.call(this);this.AB._ReInit(
);this.DQ._ReInit();},_Mark:function(E){var A;B.Core.P._Mark.call(this,E);if((A=
this.AB)._cycle!=E)A._Mark(A._cycle=E);if((A=this.DQ)._cycle!=E)A._Mark(A._cycle=
E);},_className:"Clock::Digit"};D.Jp={AB:null,Fa:null,Hs:true,CC:function(C){if(
C===this.Hs)return;this.Hs=C;this.Fa.R(C);},_Init:function(aArg){B.Core.P._Init.
call(this,aArg);B.acf.AH._Init.call(this.AB={J:this},0);B.acf.AH._Init.call(this.
Fa={J:this},0);this.__proto__=D.Jp;this.L(Ch);this.AB.L(Ch);this.AB.Cs(1);this.AB.
Bc(40);this.Fa.L(Ch);this.Fa.Cs(0);this.T(this.AB,0);this.T(this.Fa,0);this.AB.AK(
B.aaL(D.Jq));this.Fa.AK(B.aaL(D.Jq));},_Done:function(){this.__proto__=B.Core.P;
this.AB._Done();this.Fa._Done();B.Core.P._Done.call(this);},_ReInit:function(){B.
Core.P._ReInit.call(this);this.AB._ReInit();this.Fa._ReInit();},_Mark:function(E
){var A;B.Core.P._Mark.call(this,E);if((A=this.AB)._cycle!=E)A._Mark(A._cycle=E);
if((A=this.Fa)._cycle!=E)A._Mark(A._cycle=E);},_className:"Clock::Dots"};D.E5={AB:
null,E4:null,Ia:0,Hs:true,L:function(C){C=B.abK(C,EQ);B.Core.P.L.call(this,C);},
CC:function(C){if(C===this.Hs)return;this.Hs=C;this.E4.R(C);},FJ:function(C){if(
C<0)C=0;if(C>6)C=6;if(C===this.Ia)return;this.Ia=C;C=C-1;if(C===-1)C=6;this.AB.Cs(
C*2);this.E4.Cs(C*2);},_Init:function(aArg){B.Core.P._Init.call(this,aArg);B.acf.
AH._Init.call(this.AB={J:this},0);B.acf.AH._Init.call(this.E4={J:this},0);this.__proto__=
D.E5;this.L(DZ);this.AB.L(DD);this.AB.Cs(13);this.AB.Bc(40);this.E4.L(DD);this.T(
this.AB,0);this.T(this.E4,0);this.AB.AK(B.aaL(D.Jn));this.E4.AK(B.aaL(D.Jn));},_Done:
function(){this.__proto__=B.Core.P;this.AB._Done();this.E4._Done();B.Core.P._Done.
call(this);},_ReInit:function(){B.Core.P._ReInit.call(this);this.AB._ReInit();this.
E4._ReInit();},_Mark:function(E){var A;B.Core.P._Mark.call(this,E);if((A=this.AB
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.E4)._cycle!=E)A._Mark(A._cycle=E);},_className:
"Clock::DayOfWeek"};D.Clock={AH:null,Gw:null,Gx:null,FB:null,GC:null,GD:null,Gi:
null,GZ:null,FR:null,Timer:null,Ax:null,FA:null,E6:null,E7:null,E8:null,E9:null,
E_:null,E$:null,CO:null,EE:null,EF:null,Cy:function(aArg){B.pe([this,this.NP],this
);},NP:function(An){var Dn=this.Ax.Oo();this.Gw.HE((Dn.KN/10)|0);this.Gx.HE(Dn.KN
%10);this.GC.HE((Dn.K1/10)|0);this.GD.HE(Dn.K1%10);this.GZ.HE((Dn.JJ/10)|0);this.
FR.HE(Dn.JJ%10);this.FB.CC(!(Dn.JJ%2));this.Gi.CC(this.FB.Hs);this.FA.CC(!Dn.GG(
));this.E6.CC(Dn.GG()===1);this.E7.CC(Dn.GG()===2);this.E8.CC(Dn.GG()===3);this.
E9.CC(Dn.GG()===4);this.E_.CC(Dn.GG()===5);this.E$.CC(Dn.GG()===6);},_Init:function(
aArg){B.Core.P._Init.call(this,aArg);B.acf.AH._Init.call(this.AH={J:this},0);D.D_.
_Init.call(this.Gw={J:this},0);D.D_._Init.call(this.Gx={J:this},0);D.Jp._Init.call(
this.FB={J:this},0);D.D_._Init.call(this.GC={J:this},0);D.D_._Init.call(this.GD={
J:this},0);D.Jp._Init.call(this.Gi={J:this},0);D.D_._Init.call(this.GZ={J:this},
0);D.D_._Init.call(this.FR={J:this},0);B.Core.Timer._Init.call(this.Timer={J:this
},0);B.Core.Ax._Init.call(this.Ax={J:this},0);D.E5._Init.call(this.FA={J:this},0
);D.E5._Init.call(this.E6={J:this},0);D.E5._Init.call(this.E7={J:this},0);D.E5._Init.
call(this.E8={J:this},0);D.E5._Init.call(this.E9={J:this},0);D.E5._Init.call(this.
E_={J:this},0);D.E5._Init.call(this.E$={J:this},0);B.acf.CO._Init.call(this.CO={
J:this},0);B.acf.Ct._Init.call(this.EE={J:this},0);B.acf.Ct._Init.call(this.EF={
J:this},0);this.__proto__=D.Clock;this.L(D0);this.AH.L(Er);this.AH.Bc(50);this.Gw.
L(AU);this.Gx.L(FS);this.FB.L(IE);this.GC.L(G4);this.GD.L(HX);this.Gi.L(IF);this.
GZ.L(Ly);this.FR.L(Lz);this.FR.Bc(255);this.Timer.FM(500);this.Timer.N(true);this.
FA.L(JO);this.FA.CC(false);this.E6.L(JP);this.E6.CC(false);this.E6.FJ(1);this.E7.
L(LA);this.E7.CC(false);this.E7.FJ(2);this.E8.L(LB);this.E8.CC(false);this.E8.FJ(
3);this.E9.L(LC);this.E9.CC(false);this.E9.FJ(4);this.E_.L(LD);this.E_.CC(false);
this.E_.FJ(5);this.E$.L(LE);this.E$.CC(false);this.E$.FJ(6);this.CO.L(D0);this.CO.
Lf(3);this.CO.JC(B.Thermostat.Lv);this.CO.JD(B.Thermostat.B5);this.CO.JE(B.Thermostat.
Ge);this.CO.GH(B.Thermostat.B5);this.CO.AV(0xFFFFFFFF);this.EE.L(LF);this.EE.JC(
0xA0FFFFFF);this.EE.JD(0xA0FFFFFF);this.EE.JE(0x00FFFFFF);this.EE.GH(0x00FFFFFF);
this.EF.L(LG);this.EF.JC(0x00FFFFFF);this.EF.JD(0x00FFFFFF);this.EF.JE(0xA0FFFFFF
);this.EF.GH(0xA0FFFFFF);this.T(this.AH,0);this.T(this.Gw,0);this.T(this.Gx,0);this.
T(this.FB,0);this.T(this.GC,0);this.T(this.GD,0);this.T(this.Gi,0);this.T(this.GZ
,0);this.T(this.FR,0);this.T(this.FA,0);this.T(this.E6,0);this.T(this.E7,0);this.
T(this.E8,0);this.T(this.E9,0);this.T(this.E_,0);this.T(this.E$,0);this.T(this.CO
,0);this.T(this.EE,0);this.T(this.EF,0);this.AH.AK(B.aaL(D.Kw));this.Timer.FO=[this
,this.NP];this.Cy(aArg);},_Done:function(){this.__proto__=B.Core.P;this.AH._Done(
);this.Gw._Done();this.Gx._Done();this.FB._Done();this.GC._Done();this.GD._Done(
);this.Gi._Done();this.GZ._Done();this.FR._Done();this.Timer._Done();this.Ax._Done(
);this.FA._Done();this.E6._Done();this.E7._Done();this.E8._Done();this.E9._Done(
);this.E_._Done();this.E$._Done();this.CO._Done();this.EE._Done();this.EF._Done(
);B.Core.P._Done.call(this);},_ReInit:function(){B.Core.P._ReInit.call(this);this.
AH._ReInit();this.Gw._ReInit();this.Gx._ReInit();this.FB._ReInit();this.GC._ReInit(
);this.GD._ReInit();this.Gi._ReInit();this.GZ._ReInit();this.FR._ReInit();this.Timer.
_ReInit();this.Ax._ReInit();this.FA._ReInit();this.E6._ReInit();this.E7._ReInit(
);this.E8._ReInit();this.E9._ReInit();this.E_._ReInit();this.E$._ReInit();this.CO.
_ReInit();this.EE._ReInit();this.EF._ReInit();},_Mark:function(E){var A;B.Core.P.
_Mark.call(this,E);if((A=this.AH)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Gw)._cycle
!=E)A._Mark(A._cycle=E);if((A=this.Gx)._cycle!=E)A._Mark(A._cycle=E);if((A=this.
FB)._cycle!=E)A._Mark(A._cycle=E);if((A=this.GC)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.GD)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Gi)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.GZ)._cycle!=E)A._Mark(A._cycle=E);if((A=this.FR)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.Timer)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Ax)._cycle
!=E)A._Mark(A._cycle=E);if((A=this.FA)._cycle!=E)A._Mark(A._cycle=E);if((A=this.
E6)._cycle!=E)A._Mark(A._cycle=E);if((A=this.E7)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.E8)._cycle!=E)A._Mark(A._cycle=E);if((A=this.E9)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.E_)._cycle!=E)A._Mark(A._cycle=E);if((A=this.E$)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.CO)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EE)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.EF)._cycle!=E)A._Mark(A._cycle=E);},_className:
"Clock::Clock"};D.Jo={_class:function(){return B.acg.S;},0:{FileName:"./res/ClockDigitImages.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:11,FrameSize:[36,52],FrameDelay:0,_this:
null}};D.Jq={_class:function(){return B.acg.S;},0:{FileName:"./res/ClockDotsImages.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:2,FrameSize:[10,30],FrameDelay:0,_this:
null}};D.Jn={_class:function(){return B.acg.S;},0:{FileName:"./res/ClockDOWImages.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:13,FrameSize:[28,14],FrameDelay:0,FrameMapping:[
0x0000,0x0001,0x0002,0x0003,0x0004,0x0005,0x0006,0x0007,0x0008,0x0009,0x000A,0x000B
,0x000C,0x000C],_this:null}};D.Kw={_class:function(){return B.acg.S;},0:{FileName:
"./res/ClockBackgroundClock.png",Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[
424,200],FrameDelay:0,_this:null}};
D._Init=function(){D.D_.__proto__=B.Core.P;D.Jp.__proto__=B.Core.P;D.E5.__proto__=
B.Core.P;D.Clock.__proto__=B.Core.P;};D._ReInit=function(){};D.Cn=function(E){var
A;if((A=D.Jo[0]._this)&&(A._cycle!=E))A._Done(D.Jo[0]._this=null);if((A=D.Jq[0].
_this)&&(A._cycle!=E))A._Done(D.Jq[0]._this=null);if((A=D.Jn[0]._this)&&(A._cycle
!=E))A._Done(D.Jn[0]._this=null);if((A=D.Kw[0]._this)&&(A._cycle!=E))A._Done(D.Kw[
0]._this=null);};return D;})();

/* Embedded Wizard */