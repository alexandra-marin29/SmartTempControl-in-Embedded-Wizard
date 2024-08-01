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
);if(EmWiApp.aci)throw new Error("The unit file 'Effects.js' included twice!");EmWiApp.
aci=(function(){var B=EmWiApp;var D={};

D.Gd={timer:null,Ic:null,KT:null,LK:0,Hj:0,IQ:0.001,CF:0,AT:0,AJ:0,Eb:0,EV:1000,E8:
0,E7:0,By:false,BH:function(Ap){var A;if(!this.timer)return;if(!this.Hj){this.Hj=
1;this.LK=this.Hj;this.AJ=this.timer.Ax;this.AT=0;this.CF=-1;}var CC;if((this.Hj>
0)&&(this.LK>0))CC=this.QA();else if((this.Hj<0)&&(this.LK<0))CC=this.QD();else if(
this.Hj>0)CC=this.QB();else CC=this.QC();if(CC){this.R(false);(A=this.Ic)?A[1].call(
A[0],this):null;}},J$:function(P3){var A;this.Kj(P3);(A=this.KT)?A[1].call(A[0],
this):null;},QD:function(){var Al=(this.timer.Ax-this.AJ)|0;if(Al<0)Al=-Al;var C8=
this.E7;var DE=this.E7+this.EV;var Bm=this.E8+this.EV;var CC=false;var Ay=this.CF;
if(!this.AT&&(Al>=DE)){this.AT=1;Al=Al-DE;this.AJ=this.AJ+DE;}if((this.AT>0)&&(Al>=
Bm)){var Bw=(Al/Bm)|0;this.AT=this.AT+Bw;Al=Al-(Bw*Bm);this.AJ=this.AJ+(Bw*Bm);}
if((this.AT>2)&&!this.Eb)this.AT=1;if(this.AT>0)C8=this.E8;if((this.AT>=this.Eb)&&(
this.Eb>0)){CC=true;Ay=0;}else if(Al>=C8)Ay=1-((Al-C8)*this.IQ);else if(Ay>=0)Ay=
0;if(Ay!==this.CF){if(Ay<0)Ay=0;if(Ay>1)Ay=1;}if(Ay!==this.CF){this.CF=Ay;this.J$(
Ay);}return CC;},QC:function(){var Al=(this.AJ-this.timer.Ax)|0;var C8=this.E7;var
DE=this.E7+this.EV;var Bm=this.E8+this.EV;var CC=false;var Ay=this.CF;if((this.AT>
1)&&(Al<0)){var Bw=(((-Al+Bm)-1)/Bm)|0;if((this.AT-Bw)<=0)Bw=this.AT-1;this.AT=this.
AT-Bw;Al=Al+(Bw*Bm);this.AJ=this.AJ+(Bw*Bm);}if(((this.AT===1)&&(Al<0))&&(this.Eb>
0)){this.AT=0;Al=Al+DE;this.AJ=this.AJ+DE;}if(((this.AT===1)&&(Al<0))&&!this.Eb){
var Bw=(((-Al+Bm)-1)/Bm)|0;Al=Al+(Bw*Bm);this.AJ=this.AJ+(Bw*Bm);}if(this.AT>0)C8=
this.E8;if(Al<0){CC=true;Ay=1;}else if(Al>=C8)Ay=1-((Al-C8)*this.IQ);else if(Ay>=
0)Ay=1;if(Ay!==this.CF){if(Ay<0)Ay=0;if(Ay>1)Ay=1;}if(Ay!==this.CF){this.CF=Ay;this.
J$(Ay);}return CC;},QB:function(){var Al=(this.AJ-this.timer.Ax)|0;var C8=this.E7;
var DE=this.E7+this.EV;var Bm=this.E8+this.EV;var CC=false;var Ay=this.CF;if((this.
AT>1)&&(Al<0)){var Bw=(((-Al+Bm)-1)/Bm)|0;if((this.AT-Bw)<=0)Bw=this.AT-1;this.AT=
this.AT-Bw;Al=Al+(Bw*Bm);this.AJ=this.AJ+(Bw*Bm);}if(((this.AT===1)&&(Al<0))&&(this.
Eb>0)){this.AT=0;Al=Al+DE;this.AJ=this.AJ+DE;}if(((this.AT===1)&&(Al<0))&&!this.
Eb){var Bw=(((-Al+Bm)-1)/Bm)|0;Al=Al+(Bw*Bm);this.AJ=this.AJ+(Bw*Bm);}if(this.AT>
0)C8=this.E8;if(Al<0){CC=true;Ay=0;}else if(Al>=C8)Ay=(Al-C8)*this.IQ;else if(Ay>=
0)Ay=0;if(Ay!==this.CF){if(Ay<0)Ay=0;if(Ay>1)Ay=1;}if(Ay!==this.CF){this.CF=Ay;this.
J$(Ay);}return CC;},QA:function(){var Al=(this.timer.Ax-this.AJ)|0;if(Al<0)Al=-Al;
var C8=this.E7;var DE=this.E7+this.EV;var Bm=this.E8+this.EV;var CC=false;var Ay=
this.CF;if(!this.AT&&(Al>=DE)){this.AT=1;Al=Al-DE;this.AJ=this.AJ+DE;}if((this.AT>
0)&&(Al>=Bm)){var Bw=(Al/Bm)|0;this.AT=this.AT+Bw;Al=Al-(Bw*Bm);this.AJ=this.AJ+(
Bw*Bm);}if((this.AT>2)&&!this.Eb)this.AT=1;if(this.AT>0)C8=this.E8;if((this.AT>=
this.Eb)&&(this.Eb>0)){CC=true;Ay=1;}else if(Al>=C8)Ay=(Al-C8)*this.IQ;else if(Ay>=
0)Ay=1;if(Ay!==this.CF){if(Ay<0)Ay=0;if(Ay>1)Ay=1;}if(Ay!==this.CF){this.CF=Ay;this.
J$(Ay);}return CC;},GR:function(C){if(C<0)C=0;this.Eb=C;},K2:function(C){if(C<15
)C=15;this.EV=C;this.IQ=1/C;},Od:function(C){if(C<0)C=0;this.E8=C;},K4:function(
C){if(C<0)C=0;this.E7=C;},R:function(C){if(this.By===C)return;this.By=C;if(!C&&!
!this.timer){B.z9([this,this.BH],this.timer,0);this.timer=null;}if(C){this.timer=
B._GetAutoObject(D.E5);B.zV([this,this.BH],this.timer,0);this.Hj=0;B.pe([this,this.
BH],this);}},Kj:function(G3){},_Init:function(aArg){this.__proto__=D.Gd;B.h7++;}
,_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(
E){var A;if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ic)&&((
A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.KT)&&((A=A[0])._cycle!=E))A._Mark(
A._cycle=E);if((A=this.K)&&(A._cycle!=E))A._Mark(A._cycle=E);},K:null,_cycle:0,_observers:
null,_className:"Effects::Effect"};D.Fz={Y:null,GV:0,Kj:function(G3){var S;this.
GV=Math.round(255*G3)|0;if(!!this.Y)(S=this.Y,S[2].call(S[0],this.GV));},_Init:function(
aArg){D.Gd._Init.call(this,aArg);this.__proto__=D.Fz;},_Mark:function(E){var A;D.
Gd._Mark.call(this,E);if((A=this.Y)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);},
_className:"Effects::Int32Effect"};D.CK={Y:null,GV:0,HL:0xFFFFFFFF,HK:0,Kj:function(
G3){var S;var FV=this.HK&0xFF;var FP=(this.HK>>8)&0xFF;var FN=(this.HK>>16)&0xFF;
var CA=(this.HK>>24)&0xFF;FV=FV+((((this.HL&0xFF)-FV)*G3)|0);FP=FP+(((((this.HL>>
8)&0xFF)-FP)*G3)|0);FN=FN+(((((this.HL>>16)&0xFF)-FN)*G3)|0);CA=CA+(((((this.HL>>
24)&0xFF)-CA)*G3)|0);if(FV<0)FV=0;if(FV>255)FV=255;if(FP<0)FP=0;if(FP>255)FP=255;
if(FN<0)FN=0;if(FN>255)FN=255;if(CA<0)CA=0;if(CA>255)CA=255;this.GV=(FV&0xFF)|((
FP&0xFF)<<8)|((FN&0xFF)<<16)|((CA&0xFF)<<24);if(!!this.Y)(S=this.Y,S[2].call(S[0
],this.GV));},_Init:function(aArg){D.Gd._Init.call(this,aArg);this.__proto__=D.CK;
},_Mark:function(E){var A;D.Gd._Mark.call(this,E);if((A=this.Y)&&((A=A[0])._cycle
!=E))A._Mark(A._cycle=E);},_className:"Effects::ColorEffect"};D.Ks={Trigger:function(
){B.Core.Timer.Trigger.call(this);B.we(this,0);},_Init:function(aArg){B.Core.Timer.
_Init.call(this,aArg);this.__proto__=D.Ks;},_className:"Effects::EffectTimerClass"
};D.E5={_Init:function(){D.Ks._Init.call(this,0);this.FF(15);this.R(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};
D._Init=function(){D.Fz.__proto__=D.Gd;D.CK.__proto__=D.Gd;D.Ks.__proto__=B.Core.
Timer;};D._ReInit=function(){var A;if((A=D.E5._this))A._ReInit(),D.E5._ReInit.call(
A);};D.Ci=function(E){var A;if((A=D.E5._this)&&(A._cycle!=E))A._Done(D.E5._this=
null);};return D;})();

/* Embedded Wizard */