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
var AH=[36,52];var AS=[0,0,36,52];var Ca=[0,0,10,30];var EH=[28,14];var Eh=[0,0,40
,14];var Dv=[0,0,28,14];var DT=[0,0,237,67];var Ei=[0,0,236,67];var FL=[36,0,72,
52];var Ix=[71,9,81,39];var GW=[82,0,118,52];var HO=[118,0,154,52];var Iy=[153,9
,163,39];var Lo=[164,0,200,52];var Lp=[200,0,236,52];var JD=[204,52,232,66];var JE=[
6,52,34,66];var Lq=[39,52,67,66];var Lr=[72,52,100,66];var Ls=[105,52,133,66];var
Lt=[138,52,166,66];var Lu=[171,52,199,66];var Lv=[0,0,236,26];var Lw=[0,26,236,66
];
D.D3={AB:null,DI:null,D3:0,Hv:function(C){if(C>9)C=9;if(C<0)C=-1;if(C===this.D3)return;
this.D3=C;this.DI.W(C!==-1);this.DI.Cn(C);},N:function(C){C=B.abK(C,AH);B.Core.P.
N.call(this,C);},_Init:function(aArg){B.Core.P._Init.call(this,aArg);B.acf.AX._Init.
call(this.AB={K:this},0);B.acf.AX._Init.call(this.DI={K:this},0);this.__proto__=
D.D3;this.N(AS);this.AB.N(AS);this.AB.A1(0xFFFFFFFF);this.AB.Cn(10);this.AB.Ba(40
);this.DI.N(AS);this.DI.GA(0xFFFFFFFF);this.DI.A1(0xFFFFFFFF);this.DI.Cn(0);this.
T(this.AB,0);this.T(this.DI,0);this.AB.AN(B.aaL(D.Jg));this.DI.AN(B.aaL(D.Jg));}
,_Done:function(){this.__proto__=B.Core.P;this.AB._Done();this.DI._Done();B.Core.
P._Done.call(this);},_ReInit:function(){B.Core.P._ReInit.call(this);this.AB._ReInit(
);this.DI._ReInit();},_Mark:function(E){var A;B.Core.P._Mark.call(this,E);if((A=
this.AB)._cycle!=E)A._Mark(A._cycle=E);if((A=this.DI)._cycle!=E)A._Mark(A._cycle=
E);},_className:"Clock::Digit"};D.Jh={AB:null,E4:null,Hk:true,Cw:function(C){if(
C===this.Hk)return;this.Hk=C;this.E4.W(C);},_Init:function(aArg){B.Core.P._Init.
call(this,aArg);B.acf.AX._Init.call(this.AB={K:this},0);B.acf.AX._Init.call(this.
E4={K:this},0);this.__proto__=D.Jh;this.N(Ca);this.AB.N(Ca);this.AB.Cn(1);this.AB.
Ba(40);this.E4.N(Ca);this.E4.Cn(0);this.T(this.AB,0);this.T(this.E4,0);this.AB.AN(
B.aaL(D.Ji));this.E4.AN(B.aaL(D.Ji));},_Done:function(){this.__proto__=B.Core.P;
this.AB._Done();this.E4._Done();B.Core.P._Done.call(this);},_ReInit:function(){B.
Core.P._ReInit.call(this);this.AB._ReInit();this.E4._ReInit();},_Mark:function(E
){var A;B.Core.P._Mark.call(this,E);if((A=this.AB)._cycle!=E)A._Mark(A._cycle=E);
if((A=this.E4)._cycle!=E)A._Mark(A._cycle=E);},_className:"Clock::Dots"};D.EX={AB:
null,EW:null,H3:0,Hk:true,N:function(C){C=B.abK(C,EH);B.Core.P.N.call(this,C);},
Cw:function(C){if(C===this.Hk)return;this.Hk=C;this.EW.W(C);},FC:function(C){if(
C<0)C=0;if(C>6)C=6;if(C===this.H3)return;this.H3=C;C=C-1;if(C===-1)C=6;this.AB.Cn(
C*2);this.EW.Cn(C*2);},_Init:function(aArg){B.Core.P._Init.call(this,aArg);B.acf.
AX._Init.call(this.AB={K:this},0);B.acf.AX._Init.call(this.EW={K:this},0);this.__proto__=
D.EX;this.N(Eh);this.AB.N(Dv);this.AB.Cn(13);this.AB.Ba(40);this.EW.N(Dv);this.T(
this.AB,0);this.T(this.EW,0);this.AB.AN(B.aaL(D.Jf));this.EW.AN(B.aaL(D.Jf));},_Done:
function(){this.__proto__=B.Core.P;this.AB._Done();this.EW._Done();B.Core.P._Done.
call(this);},_ReInit:function(){B.Core.P._ReInit.call(this);this.AB._ReInit();this.
EW._ReInit();},_Mark:function(E){var A;B.Core.P._Mark.call(this,E);if((A=this.AB
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EW)._cycle!=E)A._Mark(A._cycle=E);},_className:
"Clock::DayOfWeek"};D.Clock={AX:null,Gq:null,Gr:null,Ft:null,Gv:null,Gw:null,Gc:
null,GT:null,FK:null,Timer:null,Ax:null,Fs:null,EY:null,EZ:null,E0:null,E1:null,
E2:null,E3:null,CI:null,Ew:null,Ex:null,Ct:function(aArg){B.pe([this,this.Ny],this
);},Ny:function(Ap){var Di=this.Ax.N7();this.Gq.Hv((Di.KD/10)|0);this.Gr.Hv(Di.KD
%10);this.Gv.Hv((Di.KR/10)|0);this.Gw.Hv(Di.KR%10);this.GT.Hv((Di.Jy/10)|0);this.
FK.Hv(Di.Jy%10);this.Ft.Cw(!(Di.Jy%2));this.Gc.Cw(this.Ft.Hk);this.Fs.Cw(!Di.Gz(
));this.EY.Cw(Di.Gz()===1);this.EZ.Cw(Di.Gz()===2);this.E0.Cw(Di.Gz()===3);this.
E1.Cw(Di.Gz()===4);this.E2.Cw(Di.Gz()===5);this.E3.Cw(Di.Gz()===6);},_Init:function(
aArg){B.Core.P._Init.call(this,aArg);B.acf.AX._Init.call(this.AX={K:this},0);D.D3.
_Init.call(this.Gq={K:this},0);D.D3._Init.call(this.Gr={K:this},0);D.Jh._Init.call(
this.Ft={K:this},0);D.D3._Init.call(this.Gv={K:this},0);D.D3._Init.call(this.Gw={
K:this},0);D.Jh._Init.call(this.Gc={K:this},0);D.D3._Init.call(this.GT={K:this},
0);D.D3._Init.call(this.FK={K:this},0);B.Core.Timer._Init.call(this.Timer={K:this
},0);B.Core.Ax._Init.call(this.Ax={K:this},0);D.EX._Init.call(this.Fs={K:this},0
);D.EX._Init.call(this.EY={K:this},0);D.EX._Init.call(this.EZ={K:this},0);D.EX._Init.
call(this.E0={K:this},0);D.EX._Init.call(this.E1={K:this},0);D.EX._Init.call(this.
E2={K:this},0);D.EX._Init.call(this.E3={K:this},0);B.acf.CI._Init.call(this.CI={
K:this},0);B.acf.Fc._Init.call(this.Ew={K:this},0);B.acf.Fc._Init.call(this.Ex={
K:this},0);this.__proto__=D.Clock;this.N(DT);this.AX.N(Ei);this.AX.Ba(50);this.Gq.
N(AS);this.Gr.N(FL);this.Ft.N(Ix);this.Gv.N(GW);this.Gw.N(HO);this.Gc.N(Iy);this.
GT.N(Lo);this.FK.N(Lp);this.FK.Ba(255);this.Timer.FF(500);this.Timer.S(true);this.
Fs.N(JD);this.Fs.Cw(false);this.EY.N(JE);this.EY.Cw(false);this.EY.FC(1);this.EZ.
N(Lq);this.EZ.Cw(false);this.EZ.FC(2);this.E0.N(Lr);this.E0.Cw(false);this.E0.FC(
3);this.E1.N(Ls);this.E1.Cw(false);this.E1.FC(4);this.E2.N(Lt);this.E2.Cw(false);
this.E2.FC(5);this.E3.N(Lu);this.E3.Cw(false);this.E3.FC(6);this.CI.N(DT);this.CI.
K7(3);this.CI.Js(B.Thermostat.Ll);this.CI.Jt(B.Thermostat.Ce);this.CI.Id(B.Thermostat.
F_);this.CI.GA(B.Thermostat.Ce);this.CI.A1(0xFFFFFFFF);this.Ew.N(Lv);this.Ew.Js(
0xA0FFFFFF);this.Ew.Jt(0xA0FFFFFF);this.Ew.Id(0x00FFFFFF);this.Ew.GA(0x00FFFFFF);
this.Ex.N(Lw);this.Ex.Js(0x00FFFFFF);this.Ex.Jt(0x00FFFFFF);this.Ex.Id(0xA0FFFFFF
);this.Ex.GA(0xA0FFFFFF);this.T(this.AX,0);this.T(this.Gq,0);this.T(this.Gr,0);this.
T(this.Ft,0);this.T(this.Gv,0);this.T(this.Gw,0);this.T(this.Gc,0);this.T(this.GT
,0);this.T(this.FK,0);this.T(this.Fs,0);this.T(this.EY,0);this.T(this.EZ,0);this.
T(this.E0,0);this.T(this.E1,0);this.T(this.E2,0);this.T(this.E3,0);this.T(this.CI
,0);this.T(this.Ew,0);this.T(this.Ex,0);this.AX.AN(B.aaL(D.Kl));this.Timer.FH=[this
,this.Ny];this.Ct(aArg);},_Done:function(){this.__proto__=B.Core.P;this.AX._Done(
);this.Gq._Done();this.Gr._Done();this.Ft._Done();this.Gv._Done();this.Gw._Done(
);this.Gc._Done();this.GT._Done();this.FK._Done();this.Timer._Done();this.Ax._Done(
);this.Fs._Done();this.EY._Done();this.EZ._Done();this.E0._Done();this.E1._Done(
);this.E2._Done();this.E3._Done();this.CI._Done();this.Ew._Done();this.Ex._Done(
);B.Core.P._Done.call(this);},_ReInit:function(){B.Core.P._ReInit.call(this);this.
AX._ReInit();this.Gq._ReInit();this.Gr._ReInit();this.Ft._ReInit();this.Gv._ReInit(
);this.Gw._ReInit();this.Gc._ReInit();this.GT._ReInit();this.FK._ReInit();this.Timer.
_ReInit();this.Ax._ReInit();this.Fs._ReInit();this.EY._ReInit();this.EZ._ReInit(
);this.E0._ReInit();this.E1._ReInit();this.E2._ReInit();this.E3._ReInit();this.CI.
_ReInit();this.Ew._ReInit();this.Ex._ReInit();},_Mark:function(E){var A;B.Core.P.
_Mark.call(this,E);if((A=this.AX)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Gq)._cycle
!=E)A._Mark(A._cycle=E);if((A=this.Gr)._cycle!=E)A._Mark(A._cycle=E);if((A=this.
Ft)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Gv)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.Gw)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Gc)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.GT)._cycle!=E)A._Mark(A._cycle=E);if((A=this.FK)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.Timer)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Ax)._cycle
!=E)A._Mark(A._cycle=E);if((A=this.Fs)._cycle!=E)A._Mark(A._cycle=E);if((A=this.
EY)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EZ)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.E0)._cycle!=E)A._Mark(A._cycle=E);if((A=this.E1)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.E2)._cycle!=E)A._Mark(A._cycle=E);if((A=this.E3)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.CI)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Ew)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.Ex)._cycle!=E)A._Mark(A._cycle=E);},_className:
"Clock::Clock"};D.Jg={_class:function(){return B.acg.Q;},0:{FileName:"./res/ClockDigitImages.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:11,FrameSize:[36,52],FrameDelay:0,_this:
null}};D.Ji={_class:function(){return B.acg.Q;},0:{FileName:"./res/ClockDotsImages.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:2,FrameSize:[10,30],FrameDelay:0,_this:
null}};D.Jf={_class:function(){return B.acg.Q;},0:{FileName:"./res/ClockDOWImages.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:13,FrameSize:[28,14],FrameDelay:0,FrameMapping:[
0x0000,0x0001,0x0002,0x0003,0x0004,0x0005,0x0006,0x0007,0x0008,0x0009,0x000A,0x000B
,0x000C,0x000C],_this:null}};D.Kl={_class:function(){return B.acg.Q;},0:{FileName:
"./res/ClockBackgroundClock.png",Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[
424,200],FrameDelay:0,_this:null}};
D._Init=function(){D.D3.__proto__=B.Core.P;D.Jh.__proto__=B.Core.P;D.EX.__proto__=
B.Core.P;D.Clock.__proto__=B.Core.P;};D._ReInit=function(){};D.Ci=function(E){var
A;if((A=D.Jg[0]._this)&&(A._cycle!=E))A._Done(D.Jg[0]._this=null);if((A=D.Ji[0].
_this)&&(A._cycle!=E))A._Done(D.Ji[0]._this=null);if((A=D.Jf[0]._this)&&(A._cycle
!=E))A._Done(D.Jf[0]._this=null);if((A=D.Kl[0]._this)&&(A._cycle!=E))A._Done(D.Kl[
0]._this=null);};return D;})();

/* Embedded Wizard */