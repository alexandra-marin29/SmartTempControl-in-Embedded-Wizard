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
var AH=[36,52];var AS=[0,0,36,52];var Cg=[0,0,10,30];var EM=[28,14];var DU=[0,0,40
,14];var Dw=[0,0,28,14];var DV=[0,0,237,67];var El=[0,0,236,67];var FO=[36,0,72,
52];var Iz=[71,9,81,39];var GW=[82,0,118,52];var HO=[118,0,154,52];var IA=[153,9
,163,39];var Lq=[164,0,200,52];var Lr=[200,0,236,52];var JJ=[204,52,232,66];var JK=[
6,52,34,66];var Ls=[39,52,67,66];var Lt=[72,52,100,66];var Lu=[105,52,133,66];var
Lv=[138,52,166,66];var Lw=[171,52,199,66];var Lx=[0,0,236,26];var Ly=[0,26,236,66
];
D.D5={AB:null,DJ:null,D5:0,Hx:function(C){if(C>9)C=9;if(C<0)C=-1;if(C===this.D5)return;
this.D5=C;this.DJ.Q(C!==-1);this.DJ.Cr(C);},N:function(C){C=B.abK(C,AH);B.Core.P.
N.call(this,C);},_Init:function(aArg){B.Core.P._Init.call(this,aArg);B.acf.AY._Init.
call(this.AB={K:this},0);B.acf.AY._Init.call(this.DJ={K:this},0);this.__proto__=
D.D5;this.N(AS);this.AB.N(AS);this.AB.AU(0xFFFFFFFF);this.AB.Cr(10);this.AB.A$(40
);this.DJ.N(AS);this.DJ.Gy(0xFFFFFFFF);this.DJ.AU(0xFFFFFFFF);this.DJ.Cr(0);this.
T(this.AB,0);this.T(this.DJ,0);this.AB.AO(B.aaL(D.Jj));this.DJ.AO(B.aaL(D.Jj));}
,_Done:function(){this.__proto__=B.Core.P;this.AB._Done();this.DJ._Done();B.Core.
P._Done.call(this);},_ReInit:function(){B.Core.P._ReInit.call(this);this.AB._ReInit(
);this.DJ._ReInit();},_Mark:function(E){var A;B.Core.P._Mark.call(this,E);if((A=
this.AB)._cycle!=E)A._Mark(A._cycle=E);if((A=this.DJ)._cycle!=E)A._Mark(A._cycle=
E);},_className:"Clock::Digit"};D.Jk={AB:null,E9:null,Hk:true,CB:function(C){if(
C===this.Hk)return;this.Hk=C;this.E9.Q(C);},_Init:function(aArg){B.Core.P._Init.
call(this,aArg);B.acf.AY._Init.call(this.AB={K:this},0);B.acf.AY._Init.call(this.
E9={K:this},0);this.__proto__=D.Jk;this.N(Cg);this.AB.N(Cg);this.AB.Cr(1);this.AB.
A$(40);this.E9.N(Cg);this.E9.Cr(0);this.T(this.AB,0);this.T(this.E9,0);this.AB.AO(
B.aaL(D.Jl));this.E9.AO(B.aaL(D.Jl));},_Done:function(){this.__proto__=B.Core.P;
this.AB._Done();this.E9._Done();B.Core.P._Done.call(this);},_ReInit:function(){B.
Core.P._ReInit.call(this);this.AB._ReInit();this.E9._ReInit();},_Mark:function(E
){var A;B.Core.P._Mark.call(this,E);if((A=this.AB)._cycle!=E)A._Mark(A._cycle=E);
if((A=this.E9)._cycle!=E)A._Mark(A._cycle=E);},_className:"Clock::Dots"};D.E2={AB:
null,E1:null,H6:0,Hk:true,N:function(C){C=B.abK(C,EM);B.Core.P.N.call(this,C);},
CB:function(C){if(C===this.Hk)return;this.Hk=C;this.E1.Q(C);},FG:function(C){if(
C<0)C=0;if(C>6)C=6;if(C===this.H6)return;this.H6=C;C=C-1;if(C===-1)C=6;this.AB.Cr(
C*2);this.E1.Cr(C*2);},_Init:function(aArg){B.Core.P._Init.call(this,aArg);B.acf.
AY._Init.call(this.AB={K:this},0);B.acf.AY._Init.call(this.E1={K:this},0);this.__proto__=
D.E2;this.N(DU);this.AB.N(Dw);this.AB.Cr(13);this.AB.A$(40);this.E1.N(Dw);this.T(
this.AB,0);this.T(this.E1,0);this.AB.AO(B.aaL(D.Ji));this.E1.AO(B.aaL(D.Ji));},_Done:
function(){this.__proto__=B.Core.P;this.AB._Done();this.E1._Done();B.Core.P._Done.
call(this);},_ReInit:function(){B.Core.P._ReInit.call(this);this.AB._ReInit();this.
E1._ReInit();},_Mark:function(E){var A;B.Core.P._Mark.call(this,E);if((A=this.AB
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.E1)._cycle!=E)A._Mark(A._cycle=E);},_className:
"Clock::DayOfWeek"};D.Clock={AY:null,Gp:null,Gq:null,Fy:null,Gt:null,Gu:null,Gb:
null,GR:null,FN:null,Timer:null,Ax:null,Fx:null,E3:null,E4:null,E5:null,E6:null,
E7:null,E8:null,CM:null,EA:null,EB:null,Cx:function(aArg){B.pe([this,this.NB],this
);},NB:function(An){var Dh=this.Ax.Oa();this.Gp.Hx((Dh.KI/10)|0);this.Gq.Hx(Dh.KI
%10);this.Gt.Hx((Dh.KV/10)|0);this.Gu.Hx(Dh.KV%10);this.GR.Hx((Dh.JE/10)|0);this.
FN.Hx(Dh.JE%10);this.Fy.CB(!(Dh.JE%2));this.Gb.CB(this.Fy.Hk);this.Fx.CB(!Dh.Gx(
));this.E3.CB(Dh.Gx()===1);this.E4.CB(Dh.Gx()===2);this.E5.CB(Dh.Gx()===3);this.
E6.CB(Dh.Gx()===4);this.E7.CB(Dh.Gx()===5);this.E8.CB(Dh.Gx()===6);},_Init:function(
aArg){B.Core.P._Init.call(this,aArg);B.acf.AY._Init.call(this.AY={K:this},0);D.D5.
_Init.call(this.Gp={K:this},0);D.D5._Init.call(this.Gq={K:this},0);D.Jk._Init.call(
this.Fy={K:this},0);D.D5._Init.call(this.Gt={K:this},0);D.D5._Init.call(this.Gu={
K:this},0);D.Jk._Init.call(this.Gb={K:this},0);D.D5._Init.call(this.GR={K:this},
0);D.D5._Init.call(this.FN={K:this},0);B.Core.Timer._Init.call(this.Timer={K:this
},0);B.Core.Ax._Init.call(this.Ax={K:this},0);D.E2._Init.call(this.Fx={K:this},0
);D.E2._Init.call(this.E3={K:this},0);D.E2._Init.call(this.E4={K:this},0);D.E2._Init.
call(this.E5={K:this},0);D.E2._Init.call(this.E6={K:this},0);D.E2._Init.call(this.
E7={K:this},0);D.E2._Init.call(this.E8={K:this},0);B.acf.CM._Init.call(this.CM={
K:this},0);B.acf.Cs._Init.call(this.EA={K:this},0);B.acf.Cs._Init.call(this.EB={
K:this},0);this.__proto__=D.Clock;this.N(DV);this.AY.N(El);this.AY.A$(50);this.Gp.
N(AS);this.Gq.N(FO);this.Fy.N(Iz);this.Gt.N(GW);this.Gu.N(HO);this.Gb.N(IA);this.
GR.N(Lq);this.FN.N(Lr);this.FN.A$(255);this.Timer.FI(500);this.Timer.S(true);this.
Fx.N(JJ);this.Fx.CB(false);this.E3.N(JK);this.E3.CB(false);this.E3.FG(1);this.E4.
N(Ls);this.E4.CB(false);this.E4.FG(2);this.E5.N(Lt);this.E5.CB(false);this.E5.FG(
3);this.E6.N(Lu);this.E6.CB(false);this.E6.FG(4);this.E7.N(Lv);this.E7.CB(false);
this.E7.FG(5);this.E8.N(Lw);this.E8.CB(false);this.E8.FG(6);this.CM.N(DV);this.CM.
K9(3);this.CM.Jx(B.Thermostat.Ln);this.CM.Jy(B.Thermostat.B$);this.CM.Jz(B.Thermostat.
Hm);this.CM.Gy(B.Thermostat.B$);this.CM.AU(0xFFFFFFFF);this.EA.N(Lx);this.EA.Jx(
0xA0FFFFFF);this.EA.Jy(0xA0FFFFFF);this.EA.Jz(0x00FFFFFF);this.EA.Gy(0x00FFFFFF);
this.EB.N(Ly);this.EB.Jx(0x00FFFFFF);this.EB.Jy(0x00FFFFFF);this.EB.Jz(0xA0FFFFFF
);this.EB.Gy(0xA0FFFFFF);this.T(this.AY,0);this.T(this.Gp,0);this.T(this.Gq,0);this.
T(this.Fy,0);this.T(this.Gt,0);this.T(this.Gu,0);this.T(this.Gb,0);this.T(this.GR
,0);this.T(this.FN,0);this.T(this.Fx,0);this.T(this.E3,0);this.T(this.E4,0);this.
T(this.E5,0);this.T(this.E6,0);this.T(this.E7,0);this.T(this.E8,0);this.T(this.CM
,0);this.T(this.EA,0);this.T(this.EB,0);this.AY.AO(B.aaL(D.Kr));this.Timer.FK=[this
,this.NB];this.Cx(aArg);},_Done:function(){this.__proto__=B.Core.P;this.AY._Done(
);this.Gp._Done();this.Gq._Done();this.Fy._Done();this.Gt._Done();this.Gu._Done(
);this.Gb._Done();this.GR._Done();this.FN._Done();this.Timer._Done();this.Ax._Done(
);this.Fx._Done();this.E3._Done();this.E4._Done();this.E5._Done();this.E6._Done(
);this.E7._Done();this.E8._Done();this.CM._Done();this.EA._Done();this.EB._Done(
);B.Core.P._Done.call(this);},_ReInit:function(){B.Core.P._ReInit.call(this);this.
AY._ReInit();this.Gp._ReInit();this.Gq._ReInit();this.Fy._ReInit();this.Gt._ReInit(
);this.Gu._ReInit();this.Gb._ReInit();this.GR._ReInit();this.FN._ReInit();this.Timer.
_ReInit();this.Ax._ReInit();this.Fx._ReInit();this.E3._ReInit();this.E4._ReInit(
);this.E5._ReInit();this.E6._ReInit();this.E7._ReInit();this.E8._ReInit();this.CM.
_ReInit();this.EA._ReInit();this.EB._ReInit();},_Mark:function(E){var A;B.Core.P.
_Mark.call(this,E);if((A=this.AY)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Gp)._cycle
!=E)A._Mark(A._cycle=E);if((A=this.Gq)._cycle!=E)A._Mark(A._cycle=E);if((A=this.
Fy)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Gt)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.Gu)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Gb)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.GR)._cycle!=E)A._Mark(A._cycle=E);if((A=this.FN)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.Timer)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Ax)._cycle
!=E)A._Mark(A._cycle=E);if((A=this.Fx)._cycle!=E)A._Mark(A._cycle=E);if((A=this.
E3)._cycle!=E)A._Mark(A._cycle=E);if((A=this.E4)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.E5)._cycle!=E)A._Mark(A._cycle=E);if((A=this.E6)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.E7)._cycle!=E)A._Mark(A._cycle=E);if((A=this.E8)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.CM)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EA)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.EB)._cycle!=E)A._Mark(A._cycle=E);},_className:
"Clock::Clock"};D.Jj={_class:function(){return B.acg.R;},0:{FileName:"./res/ClockDigitImages.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:11,FrameSize:[36,52],FrameDelay:0,_this:
null}};D.Jl={_class:function(){return B.acg.R;},0:{FileName:"./res/ClockDotsImages.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:2,FrameSize:[10,30],FrameDelay:0,_this:
null}};D.Ji={_class:function(){return B.acg.R;},0:{FileName:"./res/ClockDOWImages.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:13,FrameSize:[28,14],FrameDelay:0,FrameMapping:[
0x0000,0x0001,0x0002,0x0003,0x0004,0x0005,0x0006,0x0007,0x0008,0x0009,0x000A,0x000B
,0x000C,0x000C],_this:null}};D.Kr={_class:function(){return B.acg.R;},0:{FileName:
"./res/ClockBackgroundClock.png",Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[
424,200],FrameDelay:0,_this:null}};
D._Init=function(){D.D5.__proto__=B.Core.P;D.Jk.__proto__=B.Core.P;D.E2.__proto__=
B.Core.P;D.Clock.__proto__=B.Core.P;};D._ReInit=function(){};D.Cl=function(E){var
A;if((A=D.Jj[0]._this)&&(A._cycle!=E))A._Done(D.Jj[0]._this=null);if((A=D.Jl[0].
_this)&&(A._cycle!=E))A._Done(D.Jl[0]._this=null);if((A=D.Ji[0]._this)&&(A._cycle
!=E))A._Done(D.Ji[0]._this=null);if((A=D.Kr[0]._this)&&(A._cycle!=E))A._Done(D.Kr[
0]._this=null);};return D;})();

/* Embedded Wizard */