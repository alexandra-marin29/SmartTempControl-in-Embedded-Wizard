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

D.Gd={timer:null,Ic:null,KT:null,LK:0,Hj:0,IQ:0.001,CE:0,AT:0,AJ:0,Ea:0,EV:1000,E8:
0,E7:0,Bx:false,BH:function(Ap){var A;if(!this.timer)return;if(!this.Hj){this.Hj=
1;this.LK=this.Hj;this.AJ=this.timer.Ax;this.AT=0;this.CE=-1;}var CB;if((this.Hj>
0)&&(this.LK>0))CB=this.QA();else if((this.Hj<0)&&(this.LK<0))CB=this.QD();else if(
this.Hj>0)CB=this.QB();else CB=this.QC();if(CB){this.S(false);(A=this.Ic)?A[1].call(
A[0],this):null;}},J$:function(P3){var A;this.Kj(P3);(A=this.KT)?A[1].call(A[0],
this):null;},QD:function(){var Al=(this.timer.Ax-this.AJ)|0;if(Al<0)Al=-Al;var C7=
this.E7;var DD=this.E7+this.EV;var Bm=this.E8+this.EV;var CB=false;var Ay=this.CE;
if(!this.AT&&(Al>=DD)){this.AT=1;Al=Al-DD;this.AJ=this.AJ+DD;}if((this.AT>0)&&(Al>=
Bm)){var Bv=(Al/Bm)|0;this.AT=this.AT+Bv;Al=Al-(Bv*Bm);this.AJ=this.AJ+(Bv*Bm);}
if((this.AT>2)&&!this.Ea)this.AT=1;if(this.AT>0)C7=this.E8;if((this.AT>=this.Ea)&&(
this.Ea>0)){CB=true;Ay=0;}else if(Al>=C7)Ay=1-((Al-C7)*this.IQ);else if(Ay>=0)Ay=
0;if(Ay!==this.CE){if(Ay<0)Ay=0;if(Ay>1)Ay=1;}if(Ay!==this.CE){this.CE=Ay;this.J$(
Ay);}return CB;},QC:function(){var Al=(this.AJ-this.timer.Ax)|0;var C7=this.E7;var
DD=this.E7+this.EV;var Bm=this.E8+this.EV;var CB=false;var Ay=this.CE;if((this.AT>
1)&&(Al<0)){var Bv=(((-Al+Bm)-1)/Bm)|0;if((this.AT-Bv)<=0)Bv=this.AT-1;this.AT=this.
AT-Bv;Al=Al+(Bv*Bm);this.AJ=this.AJ+(Bv*Bm);}if(((this.AT===1)&&(Al<0))&&(this.Ea>
0)){this.AT=0;Al=Al+DD;this.AJ=this.AJ+DD;}if(((this.AT===1)&&(Al<0))&&!this.Ea){
var Bv=(((-Al+Bm)-1)/Bm)|0;Al=Al+(Bv*Bm);this.AJ=this.AJ+(Bv*Bm);}if(this.AT>0)C7=
this.E8;if(Al<0){CB=true;Ay=1;}else if(Al>=C7)Ay=1-((Al-C7)*this.IQ);else if(Ay>=
0)Ay=1;if(Ay!==this.CE){if(Ay<0)Ay=0;if(Ay>1)Ay=1;}if(Ay!==this.CE){this.CE=Ay;this.
J$(Ay);}return CB;},QB:function(){var Al=(this.AJ-this.timer.Ax)|0;var C7=this.E7;
var DD=this.E7+this.EV;var Bm=this.E8+this.EV;var CB=false;var Ay=this.CE;if((this.
AT>1)&&(Al<0)){var Bv=(((-Al+Bm)-1)/Bm)|0;if((this.AT-Bv)<=0)Bv=this.AT-1;this.AT=
this.AT-Bv;Al=Al+(Bv*Bm);this.AJ=this.AJ+(Bv*Bm);}if(((this.AT===1)&&(Al<0))&&(this.
Ea>0)){this.AT=0;Al=Al+DD;this.AJ=this.AJ+DD;}if(((this.AT===1)&&(Al<0))&&!this.
Ea){var Bv=(((-Al+Bm)-1)/Bm)|0;Al=Al+(Bv*Bm);this.AJ=this.AJ+(Bv*Bm);}if(this.AT>
0)C7=this.E8;if(Al<0){CB=true;Ay=0;}else if(Al>=C7)Ay=(Al-C7)*this.IQ;else if(Ay>=
0)Ay=0;if(Ay!==this.CE){if(Ay<0)Ay=0;if(Ay>1)Ay=1;}if(Ay!==this.CE){this.CE=Ay;this.
J$(Ay);}return CB;},QA:function(){var Al=(this.timer.Ax-this.AJ)|0;if(Al<0)Al=-Al;
var C7=this.E7;var DD=this.E7+this.EV;var Bm=this.E8+this.EV;var CB=false;var Ay=
this.CE;if(!this.AT&&(Al>=DD)){this.AT=1;Al=Al-DD;this.AJ=this.AJ+DD;}if((this.AT>
0)&&(Al>=Bm)){var Bv=(Al/Bm)|0;this.AT=this.AT+Bv;Al=Al-(Bv*Bm);this.AJ=this.AJ+(
Bv*Bm);}if((this.AT>2)&&!this.Ea)this.AT=1;if(this.AT>0)C7=this.E8;if((this.AT>=
this.Ea)&&(this.Ea>0)){CB=true;Ay=1;}else if(Al>=C7)Ay=(Al-C7)*this.IQ;else if(Ay>=
0)Ay=1;if(Ay!==this.CE){if(Ay<0)Ay=0;if(Ay>1)Ay=1;}if(Ay!==this.CE){this.CE=Ay;this.
J$(Ay);}return CB;},GR:function(C){if(C<0)C=0;this.Ea=C;},K2:function(C){if(C<15
)C=15;this.EV=C;this.IQ=1/C;},Oc:function(C){if(C<0)C=0;this.E8=C;},K4:function(
C){if(C<0)C=0;this.E7=C;},S:function(C){if(this.Bx===C)return;this.Bx=C;if(!C&&!
!this.timer){B.z9([this,this.BH],this.timer,0);this.timer=null;}if(C){this.timer=
B._GetAutoObject(D.E5);B.zV([this,this.BH],this.timer,0);this.Hj=0;B.pe([this,this.
BH],this);}},Kj:function(G3){},_Init:function(aArg){this.__proto__=D.Gd;B.h7++;}
,_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(
E){var A;if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ic)&&((
A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.KT)&&((A=A[0])._cycle!=E))A._Mark(
A._cycle=E);if((A=this.K)&&(A._cycle!=E))A._Mark(A._cycle=E);},K:null,_cycle:0,_observers:
null,_className:"Effects::Effect"};D.Fz={Y:null,GV:0,Kj:function(G3){var R;this.
GV=Math.round(255*G3)|0;if(!!this.Y)(R=this.Y,R[2].call(R[0],this.GV));},_Init:function(
aArg){D.Gd._Init.call(this,aArg);this.__proto__=D.Fz;},_Mark:function(E){var A;D.
Gd._Mark.call(this,E);if((A=this.Y)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);},
_className:"Effects::Int32Effect"};D.CJ={Y:null,GV:0,HL:0xFFFFFFFF,HK:0,Kj:function(
G3){var R;var FV=this.HK&0xFF;var FP=(this.HK>>8)&0xFF;var FN=(this.HK>>16)&0xFF;
var Cz=(this.HK>>24)&0xFF;FV=FV+((((this.HL&0xFF)-FV)*G3)|0);FP=FP+(((((this.HL>>
8)&0xFF)-FP)*G3)|0);FN=FN+(((((this.HL>>16)&0xFF)-FN)*G3)|0);Cz=Cz+(((((this.HL>>
24)&0xFF)-Cz)*G3)|0);if(FV<0)FV=0;if(FV>255)FV=255;if(FP<0)FP=0;if(FP>255)FP=255;
if(FN<0)FN=0;if(FN>255)FN=255;if(Cz<0)Cz=0;if(Cz>255)Cz=255;this.GV=(FV&0xFF)|((
FP&0xFF)<<8)|((FN&0xFF)<<16)|((Cz&0xFF)<<24);if(!!this.Y)(R=this.Y,R[2].call(R[0
],this.GV));},_Init:function(aArg){D.Gd._Init.call(this,aArg);this.__proto__=D.CJ;
},_Mark:function(E){var A;D.Gd._Mark.call(this,E);if((A=this.Y)&&((A=A[0])._cycle
!=E))A._Mark(A._cycle=E);},_className:"Effects::ColorEffect"};D.Ks={Trigger:function(
){B.Core.Timer.Trigger.call(this);B.we(this,0);},_Init:function(aArg){B.Core.Timer.
_Init.call(this,aArg);this.__proto__=D.Ks;},_className:"Effects::EffectTimerClass"
};D.E5={_Init:function(){D.Ks._Init.call(this,0);this.FF(15);this.S(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};
D._Init=function(){D.Fz.__proto__=D.Gd;D.CJ.__proto__=D.Gd;D.Ks.__proto__=B.Core.
Timer;};D._ReInit=function(){var A;if((A=D.E5._this))A._ReInit(),D.E5._ReInit.call(
A);};D.Ci=function(E){var A;if((A=D.E5._this)&&(A._cycle!=E))A._Done(D.E5._this=
null);};return D;})();

/* Embedded Wizard */