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
var AH=[36,52];var AR=[0,0,36,52];var B4=[0,0,10,30];var Ev=[28,14];var D8=[0,0,40
,14];var Dl=[0,0,28,14];var DH=[0,0,237,67];var D9=[0,0,236,67];var Fy=[36,0,72,
52];var In=[71,9,81,39];var GM=[82,0,118,52];var Hv=[118,0,154,52];var Io=[153,9
,163,39];var Lc=[164,0,200,52];var Ld=[200,0,236,52];var Ju=[204,52,232,66];var Jv=[
6,52,34,66];var Le=[39,52,67,66];var Lf=[72,52,100,66];var Lg=[105,52,133,66];var
Lh=[138,52,166,66];var Li=[171,52,199,66];var Lj=[0,0,236,26];var Lk=[0,26,236,66
];
D.DR={AB:null,Dy:null,DR:0,Hl:function(C){if(C>9)C=9;if(C<0)C=-1;if(C===this.DR)return;
this.DR=C;this.Dy.Ab(C!==-1);this.Dy.Cf(C);},P:function(C){C=B.abK(C,AH);B.Core.
Q.P.call(this,C);},_Init:function(aArg){B.Core.Q._Init.call(this,aArg);B.acf.AZ.
_Init.call(this.AB={L:this},0);B.acf.AZ._Init.call(this.Dy={L:this},0);this.__proto__=
D.DR;this.P(AR);this.AB.P(AR);this.AB.A2(0xFFFFFFFF);this.AB.Cf(10);this.AB.Ba(40
);this.Dy.P(AR);this.Dy.Gp(0xFFFFFFFF);this.Dy.A2(0xFFFFFFFF);this.Dy.Cf(0);this.
X(this.AB,0);this.X(this.Dy,0);this.AB.AQ(B.aaL(D.I8));this.Dy.AQ(B.aaL(D.I8));}
,_Done:function(){this.__proto__=B.Core.Q;this.AB._Done();this.Dy._Done();B.Core.
Q._Done.call(this);},_ReInit:function(){B.Core.Q._ReInit.call(this);this.AB._ReInit(
);this.Dy._ReInit();},_Mark:function(E){var A;B.Core.Q._Mark.call(this,E);if((A=
this.AB)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Dy)._cycle!=E)A._Mark(A._cycle=
E);},_className:"Clock::Digit"};D.I9={AB:null,ES:null,Ha:true,Co:function(C){if(
C===this.Ha)return;this.Ha=C;this.ES.Ab(C);},_Init:function(aArg){B.Core.Q._Init.
call(this,aArg);B.acf.AZ._Init.call(this.AB={L:this},0);B.acf.AZ._Init.call(this.
ES={L:this},0);this.__proto__=D.I9;this.P(B4);this.AB.P(B4);this.AB.Cf(1);this.AB.
Ba(40);this.ES.P(B4);this.ES.Cf(0);this.X(this.AB,0);this.X(this.ES,0);this.AB.AQ(
B.aaL(D.I_));this.ES.AQ(B.aaL(D.I_));},_Done:function(){this.__proto__=B.Core.Q;
this.AB._Done();this.ES._Done();B.Core.Q._Done.call(this);},_ReInit:function(){B.
Core.Q._ReInit.call(this);this.AB._ReInit();this.ES._ReInit();},_Mark:function(E
){var A;B.Core.Q._Mark.call(this,E);if((A=this.AB)._cycle!=E)A._Mark(A._cycle=E);
if((A=this.ES)._cycle!=E)A._Mark(A._cycle=E);},_className:"Clock::Dots"};D.EL={AB:
null,EK:null,HK:0,Ha:true,P:function(C){C=B.abK(C,Ev);B.Core.Q.P.call(this,C);},
Co:function(C){if(C===this.Ha)return;this.Ha=C;this.EK.Ab(C);},Fn:function(C){if(
C<0)C=0;if(C>6)C=6;if(C===this.HK)return;this.HK=C;C=C-1;if(C===-1)C=6;this.AB.Cf(
C*2);this.EK.Cf(C*2);},_Init:function(aArg){B.Core.Q._Init.call(this,aArg);B.acf.
AZ._Init.call(this.AB={L:this},0);B.acf.AZ._Init.call(this.EK={L:this},0);this.__proto__=
D.EL;this.P(D8);this.AB.P(Dl);this.AB.Cf(13);this.AB.Ba(40);this.EK.P(Dl);this.X(
this.AB,0);this.X(this.EK,0);this.AB.AQ(B.aaL(D.I7));this.EK.AQ(B.aaL(D.I7));},_Done:
function(){this.__proto__=B.Core.Q;this.AB._Done();this.EK._Done();B.Core.Q._Done.
call(this);},_ReInit:function(){B.Core.Q._ReInit.call(this);this.AB._ReInit();this.
EK._ReInit();},_Mark:function(E){var A;B.Core.Q._Mark.call(this,E);if((A=this.AB
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EK)._cycle!=E)A._Mark(A._cycle=E);},_className:
"Clock::DayOfWeek"};D.Clock={AZ:null,Ge:null,Gf:null,Ff:null,Gj:null,Gk:null,FT:
null,GJ:null,Fx:null,Timer:null,Ax:null,Fe:null,EM:null,EN:null,EO:null,EP:null,
EQ:null,ER:null,Cz:null,El:null,Em:null,Cl:function(aArg){B.pe([this,this.Nf],this
);},Nf:function(As){var C9=this.Ax.NM();this.Ge.Hl((C9.Kt/10)|0);this.Gf.Hl(C9.Kt
%10);this.Gj.Hl((C9.KF/10)|0);this.Gk.Hl(C9.KF%10);this.GJ.Hl((C9.Jp/10)|0);this.
Fx.Hl(C9.Jp%10);this.Ff.Co(!(C9.Jp%2));this.FT.Co(this.Ff.Ha);this.Fe.Co(!C9.Gn(
));this.EM.Co(C9.Gn()===1);this.EN.Co(C9.Gn()===2);this.EO.Co(C9.Gn()===3);this.
EP.Co(C9.Gn()===4);this.EQ.Co(C9.Gn()===5);this.ER.Co(C9.Gn()===6);},_Init:function(
aArg){B.Core.Q._Init.call(this,aArg);B.acf.AZ._Init.call(this.AZ={L:this},0);D.DR.
_Init.call(this.Ge={L:this},0);D.DR._Init.call(this.Gf={L:this},0);D.I9._Init.call(
this.Ff={L:this},0);D.DR._Init.call(this.Gj={L:this},0);D.DR._Init.call(this.Gk={
L:this},0);D.I9._Init.call(this.FT={L:this},0);D.DR._Init.call(this.GJ={L:this},
0);D.DR._Init.call(this.Fx={L:this},0);B.Core.Timer._Init.call(this.Timer={L:this
},0);B.Core.Ax._Init.call(this.Ax={L:this},0);D.EL._Init.call(this.Fe={L:this},0
);D.EL._Init.call(this.EM={L:this},0);D.EL._Init.call(this.EN={L:this},0);D.EL._Init.
call(this.EO={L:this},0);D.EL._Init.call(this.EP={L:this},0);D.EL._Init.call(this.
EQ={L:this},0);D.EL._Init.call(this.ER={L:this},0);B.acf.Cz._Init.call(this.Cz={
L:this},0);B.acf.Fw._Init.call(this.El={L:this},0);B.acf.Fw._Init.call(this.Em={
L:this},0);this.__proto__=D.Clock;this.P(DH);this.AZ.P(D9);this.AZ.Ba(50);this.Ge.
P(AR);this.Gf.P(Fy);this.Ff.P(In);this.Gj.P(GM);this.Gk.P(Hv);this.FT.P(Io);this.
GJ.P(Lc);this.Fx.P(Ld);this.Fx.Ba(255);this.Timer.Fq(500);this.Timer.Y(true);this.
Fe.P(Ju);this.Fe.Co(false);this.EM.P(Jv);this.EM.Co(false);this.EM.Fn(1);this.EN.
P(Le);this.EN.Co(false);this.EN.Fn(2);this.EO.P(Lf);this.EO.Co(false);this.EO.Fn(
3);this.EP.P(Lg);this.EP.Co(false);this.EP.Fn(4);this.EQ.P(Lh);this.EQ.Co(false);
this.EQ.Fn(5);this.ER.P(Li);this.ER.Co(false);this.ER.Fn(6);this.Cz.P(DH);this.Cz.
KV(3);this.Cz.Ji(B.Thermostat.K$);this.Cz.Jj(B.Thermostat.D0);this.Cz.HW(B.Thermostat.
FP);this.Cz.Gp(B.Thermostat.D0);this.Cz.A2(0xFFFFFFFF);this.El.P(Lj);this.El.Ji(
0xA0FFFFFF);this.El.Jj(0xA0FFFFFF);this.El.HW(0x00FFFFFF);this.El.Gp(0x00FFFFFF);
this.Em.P(Lk);this.Em.Ji(0x00FFFFFF);this.Em.Jj(0x00FFFFFF);this.Em.HW(0xA0FFFFFF
);this.Em.Gp(0xA0FFFFFF);this.X(this.AZ,0);this.X(this.Ge,0);this.X(this.Gf,0);this.
X(this.Ff,0);this.X(this.Gj,0);this.X(this.Gk,0);this.X(this.FT,0);this.X(this.GJ
,0);this.X(this.Fx,0);this.X(this.Fe,0);this.X(this.EM,0);this.X(this.EN,0);this.
X(this.EO,0);this.X(this.EP,0);this.X(this.EQ,0);this.X(this.ER,0);this.X(this.Cz
,0);this.X(this.El,0);this.X(this.Em,0);this.AZ.AQ(B.aaL(D.Kc));this.Timer.Ft=[this
,this.Nf];this.Cl(aArg);},_Done:function(){this.__proto__=B.Core.Q;this.AZ._Done(
);this.Ge._Done();this.Gf._Done();this.Ff._Done();this.Gj._Done();this.Gk._Done(
);this.FT._Done();this.GJ._Done();this.Fx._Done();this.Timer._Done();this.Ax._Done(
);this.Fe._Done();this.EM._Done();this.EN._Done();this.EO._Done();this.EP._Done(
);this.EQ._Done();this.ER._Done();this.Cz._Done();this.El._Done();this.Em._Done(
);B.Core.Q._Done.call(this);},_ReInit:function(){B.Core.Q._ReInit.call(this);this.
AZ._ReInit();this.Ge._ReInit();this.Gf._ReInit();this.Ff._ReInit();this.Gj._ReInit(
);this.Gk._ReInit();this.FT._ReInit();this.GJ._ReInit();this.Fx._ReInit();this.Timer.
_ReInit();this.Ax._ReInit();this.Fe._ReInit();this.EM._ReInit();this.EN._ReInit(
);this.EO._ReInit();this.EP._ReInit();this.EQ._ReInit();this.ER._ReInit();this.Cz.
_ReInit();this.El._ReInit();this.Em._ReInit();},_Mark:function(E){var A;B.Core.Q.
_Mark.call(this,E);if((A=this.AZ)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Ge)._cycle
!=E)A._Mark(A._cycle=E);if((A=this.Gf)._cycle!=E)A._Mark(A._cycle=E);if((A=this.
Ff)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Gj)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.Gk)._cycle!=E)A._Mark(A._cycle=E);if((A=this.FT)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.GJ)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Fx)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.Timer)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Ax)._cycle
!=E)A._Mark(A._cycle=E);if((A=this.Fe)._cycle!=E)A._Mark(A._cycle=E);if((A=this.
EM)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EN)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.EO)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EP)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.EQ)._cycle!=E)A._Mark(A._cycle=E);if((A=this.ER)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.Cz)._cycle!=E)A._Mark(A._cycle=E);if((A=this.El)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.Em)._cycle!=E)A._Mark(A._cycle=E);},_className:
"Clock::Clock"};D.I8={_class:function(){return B.acg.O;},0:{FileName:"./res/ClockDigitImages.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:11,FrameSize:[36,52],FrameDelay:0,_this:
null}};D.I_={_class:function(){return B.acg.O;},0:{FileName:"./res/ClockDotsImages.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:2,FrameSize:[10,30],FrameDelay:0,_this:
null}};D.I7={_class:function(){return B.acg.O;},0:{FileName:"./res/ClockDOWImages.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:13,FrameSize:[28,14],FrameDelay:0,FrameMapping:[
0x0000,0x0001,0x0002,0x0003,0x0004,0x0005,0x0006,0x0007,0x0008,0x0009,0x000A,0x000B
,0x000C,0x000C],_this:null}};D.Kc={_class:function(){return B.acg.O;},0:{FileName:
"./res/ClockBackgroundClock.png",Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[
424,200],FrameDelay:0,_this:null}};
D._Init=function(){D.DR.__proto__=B.Core.Q;D.I9.__proto__=B.Core.Q;D.EL.__proto__=
B.Core.Q;D.Clock.__proto__=B.Core.Q;};D._ReInit=function(){};D.B$=function(E){var
A;if((A=D.I8[0]._this)&&(A._cycle!=E))A._Done(D.I8[0]._this=null);if((A=D.I_[0].
_this)&&(A._cycle!=E))A._Done(D.I_[0]._this=null);if((A=D.I7[0]._this)&&(A._cycle
!=E))A._Done(D.I7[0]._this=null);if((A=D.Kc[0]._this)&&(A._cycle!=E))A._Done(D.Kc[
0]._this=null);};return D;})();

/* Embedded Wizard */