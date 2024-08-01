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

D.Gc={timer:null,Jv:null,KX:null,LM:0,Hj:0,IS:0.001,CI:0,AT:0,AJ:0,Ed:0,E0:1000,Fb:
0,BA:false,BL:function(An){var A;if(!this.timer)return;if(!this.Hj){this.Hj=1;this.
LM=this.Hj;this.AJ=this.timer.Ax;this.AT=0;this.CI=-1;}var CF;if((this.Hj>0)&&(this.
LM>0))CF=this.QY();else if((this.Hj<0)&&(this.LM<0))CF=this.Q1();else if(this.Hj>
0)CF=this.QZ();else CF=this.Q0();if(CF){this.S(false);(A=this.Jv)?A[1].call(A[0]
,this):null;}},Kf:function(Qp){var A;this.Kp(Qp);(A=this.KX)?A[1].call(A[0],this
):null;},Q1:function(){var Al=(this.timer.Ax-this.AJ)|0;if(Al<0)Al=-Al;var C8=this.
Fb;var DE=this.Fb+this.E0;var Bn=this.E0;var CF=false;var Ay=this.CI;if(!this.AT&&(
Al>=DE)){this.AT=1;Al=Al-DE;this.AJ=this.AJ+DE;}if((this.AT>0)&&(Al>=Bn)){var By=(
Al/Bn)|0;this.AT=this.AT+By;Al=Al-(By*Bn);this.AJ=this.AJ+(By*Bn);}if((this.AT>2
)&&!this.Ed)this.AT=1;if(this.AT>0)C8=0;if((this.AT>=this.Ed)&&(this.Ed>0)){CF=true;
Ay=0;}else if(Al>=C8)Ay=1-((Al-C8)*this.IS);else if(Ay>=0)Ay=0;if(Ay!==this.CI){
if(Ay<0)Ay=0;if(Ay>1)Ay=1;}if(Ay!==this.CI){this.CI=Ay;this.Kf(Ay);}return CF;},
Q0:function(){var Al=(this.AJ-this.timer.Ax)|0;var C8=this.Fb;var DE=this.Fb+this.
E0;var Bn=this.E0;var CF=false;var Ay=this.CI;if((this.AT>1)&&(Al<0)){var By=(((-
Al+Bn)-1)/Bn)|0;if((this.AT-By)<=0)By=this.AT-1;this.AT=this.AT-By;Al=Al+(By*Bn);
this.AJ=this.AJ+(By*Bn);}if(((this.AT===1)&&(Al<0))&&(this.Ed>0)){this.AT=0;Al=Al+
DE;this.AJ=this.AJ+DE;}if(((this.AT===1)&&(Al<0))&&!this.Ed){var By=(((-Al+Bn)-1
)/Bn)|0;Al=Al+(By*Bn);this.AJ=this.AJ+(By*Bn);}if(this.AT>0)C8=0;if(Al<0){CF=true;
Ay=1;}else if(Al>=C8)Ay=1-((Al-C8)*this.IS);else if(Ay>=0)Ay=1;if(Ay!==this.CI){
if(Ay<0)Ay=0;if(Ay>1)Ay=1;}if(Ay!==this.CI){this.CI=Ay;this.Kf(Ay);}return CF;},
QZ:function(){var Al=(this.AJ-this.timer.Ax)|0;var C8=this.Fb;var DE=this.Fb+this.
E0;var Bn=this.E0;var CF=false;var Ay=this.CI;if((this.AT>1)&&(Al<0)){var By=(((-
Al+Bn)-1)/Bn)|0;if((this.AT-By)<=0)By=this.AT-1;this.AT=this.AT-By;Al=Al+(By*Bn);
this.AJ=this.AJ+(By*Bn);}if(((this.AT===1)&&(Al<0))&&(this.Ed>0)){this.AT=0;Al=Al+
DE;this.AJ=this.AJ+DE;}if(((this.AT===1)&&(Al<0))&&!this.Ed){var By=(((-Al+Bn)-1
)/Bn)|0;Al=Al+(By*Bn);this.AJ=this.AJ+(By*Bn);}if(this.AT>0)C8=0;if(Al<0){CF=true;
Ay=0;}else if(Al>=C8)Ay=(Al-C8)*this.IS;else if(Ay>=0)Ay=0;if(Ay!==this.CI){if(Ay<
0)Ay=0;if(Ay>1)Ay=1;}if(Ay!==this.CI){this.CI=Ay;this.Kf(Ay);}return CF;},QY:function(
){var Al=(this.timer.Ax-this.AJ)|0;if(Al<0)Al=-Al;var C8=this.Fb;var DE=this.Fb+
this.E0;var Bn=this.E0;var CF=false;var Ay=this.CI;if(!this.AT&&(Al>=DE)){this.AT=
1;Al=Al-DE;this.AJ=this.AJ+DE;}if((this.AT>0)&&(Al>=Bn)){var By=(Al/Bn)|0;this.AT=
this.AT+By;Al=Al-(By*Bn);this.AJ=this.AJ+(By*Bn);}if((this.AT>2)&&!this.Ed)this.
AT=1;if(this.AT>0)C8=0;if((this.AT>=this.Ed)&&(this.Ed>0)){CF=true;Ay=1;}else if(
Al>=C8)Ay=(Al-C8)*this.IS;else if(Ay>=0)Ay=1;if(Ay!==this.CI){if(Ay<0)Ay=0;if(Ay>
1)Ay=1;}if(Ay!==this.CI){this.CI=Ay;this.Kf(Ay);}return CF;},GP:function(C){if(C<
0)C=0;this.Ed=C;},K5:function(C){if(C<15)C=15;this.E0=C;this.IS=1/C;},Mq:function(
C){if(C<0)C=0;this.Fb=C;},S:function(C){if(this.BA===C)return;this.BA=C;if(!C&&!
!this.timer){B.z9([this,this.BL],this.timer,0);this.timer=null;}if(C){this.timer=
B._GetAutoObject(D.E_);B.zV([this,this.BL],this.timer,0);this.Hj=0;B.pe([this,this.
BL],this);}},Kp:function(G3){},_Init:function(aArg){this.__proto__=D.Gc;B.h7++;}
,_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(
E){var A;if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Jv)&&((
A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.KX)&&((A=A[0])._cycle!=E))A._Mark(
A._cycle=E);if((A=this.K)&&(A._cycle!=E))A._Mark(A._cycle=E);},K:null,_cycle:0,_observers:
null,_className:"Effects::Effect"};D.FD={Z:null,GT:0,Kp:function(G3){var U;this.
GT=Math.round(255*G3)|0;if(!!this.Z)(U=this.Z,U[2].call(U[0],this.GT));},_Init:function(
aArg){D.Gc._Init.call(this,aArg);this.__proto__=D.FD;},_Mark:function(E){var A;D.
Gc._Mark.call(this,E);if((A=this.Z)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);},
_className:"Effects::Int32Effect"};D.Kv={Z:null,GT:0,Ix:0xFFFFFFFF,Kp:function(G3
){var U;var H0;var HV;var HQ;var C6;H0=((this.Ix&0xFF)*G3)|0;HV=(((this.Ix>>8)&0xFF
)*G3)|0;HQ=(((this.Ix>>16)&0xFF)*G3)|0;C6=(((this.Ix>>24)&0xFF)*G3)|0;if(H0<0)H0=
0;if(H0>255)H0=255;if(HV<0)HV=0;if(HV>255)HV=255;if(HQ<0)HQ=0;if(HQ>255)HQ=255;if(
C6<0)C6=0;if(C6>255)C6=255;this.GT=(H0&0xFF)|((HV&0xFF)<<8)|((HQ&0xFF)<<16)|((C6&
0xFF)<<24);if(!!this.Z)(U=this.Z,U[2].call(U[0],this.GT));},_Init:function(aArg){
D.Gc._Init.call(this,aArg);this.__proto__=D.Kv;},_Mark:function(E){var A;D.Gc._Mark.
call(this,E);if((A=this.Z)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);},_className:
"Effects::ColorEffect"};D.Kz={Trigger:function(){B.Core.Timer.Trigger.call(this);
B.we(this,0);},_Init:function(aArg){B.Core.Timer._Init.call(this,aArg);this.__proto__=
D.Kz;},_className:"Effects::EffectTimerClass"};D.E_={_Init:function(){D.Kz._Init.
call(this,0);this.FI(15);this.S(true);},_ReInit:function(){},_variants:function(
){return this;},_this:null};
D._Init=function(){D.FD.__proto__=D.Gc;D.Kv.__proto__=D.Gc;D.Kz.__proto__=B.Core.
Timer;};D._ReInit=function(){var A;if((A=D.E_._this))A._ReInit(),D.E_._ReInit.call(
A);};D.Cl=function(E){var A;if((A=D.E_._this)&&(A._cycle!=E))A._Done(D.E_._this=
null);};return D;})();

/* Embedded Wizard */