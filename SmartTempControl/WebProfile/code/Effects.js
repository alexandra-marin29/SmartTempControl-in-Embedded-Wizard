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

D.Gj={timer:null,JA:null,K3:null,LU:0,Hr:0,IX:0.001,CK:0,AW:0,AL:0,Ek:0,E3:1000,Fe:
0,BE:false,BO:function(An){var A;if(!this.timer)return;if(!this.Hr){this.Hr=1;this.
LU=this.Hr;this.AL=this.timer.Ax;this.AW=0;this.CK=-1;}var CH;if((this.Hr>0)&&(this.
LU>0))CH=this.Q_();else if((this.Hr<0)&&(this.LU<0))CH=this.Rb();else if(this.Hr>
0)CH=this.Q$();else CH=this.Ra();if(CH){this.N(false);(A=this.JA)?A[1].call(A[0]
,this):null;}},Kk:function(QB){var A;this.Ku(QB);(A=this.K3)?A[1].call(A[0],this
):null;},Rb:function(){var Al=(this.timer.Ax-this.AL)|0;if(Al<0)Al=-Al;var C$=this.
Fe;var DL=this.Fe+this.E3;var Bo=this.E3;var CH=false;var Ay=this.CK;if(!this.AW&&(
Al>=DL)){this.AW=1;Al=Al-DL;this.AL=this.AL+DL;}if((this.AW>0)&&(Al>=Bo)){var BB=(
Al/Bo)|0;this.AW=this.AW+BB;Al=Al-(BB*Bo);this.AL=this.AL+(BB*Bo);}if((this.AW>2
)&&!this.Ek)this.AW=1;if(this.AW>0)C$=0;if((this.AW>=this.Ek)&&(this.Ek>0)){CH=true;
Ay=0;}else if(Al>=C$)Ay=1-((Al-C$)*this.IX);else if(Ay>=0)Ay=0;if(Ay!==this.CK){
if(Ay<0)Ay=0;if(Ay>1)Ay=1;}if(Ay!==this.CK){this.CK=Ay;this.Kk(Ay);}return CH;},
Ra:function(){var Al=(this.AL-this.timer.Ax)|0;var C$=this.Fe;var DL=this.Fe+this.
E3;var Bo=this.E3;var CH=false;var Ay=this.CK;if((this.AW>1)&&(Al<0)){var BB=(((-
Al+Bo)-1)/Bo)|0;if((this.AW-BB)<=0)BB=this.AW-1;this.AW=this.AW-BB;Al=Al+(BB*Bo);
this.AL=this.AL+(BB*Bo);}if(((this.AW===1)&&(Al<0))&&(this.Ek>0)){this.AW=0;Al=Al+
DL;this.AL=this.AL+DL;}if(((this.AW===1)&&(Al<0))&&!this.Ek){var BB=(((-Al+Bo)-1
)/Bo)|0;Al=Al+(BB*Bo);this.AL=this.AL+(BB*Bo);}if(this.AW>0)C$=0;if(Al<0){CH=true;
Ay=1;}else if(Al>=C$)Ay=1-((Al-C$)*this.IX);else if(Ay>=0)Ay=1;if(Ay!==this.CK){
if(Ay<0)Ay=0;if(Ay>1)Ay=1;}if(Ay!==this.CK){this.CK=Ay;this.Kk(Ay);}return CH;},
Q$:function(){var Al=(this.AL-this.timer.Ax)|0;var C$=this.Fe;var DL=this.Fe+this.
E3;var Bo=this.E3;var CH=false;var Ay=this.CK;if((this.AW>1)&&(Al<0)){var BB=(((-
Al+Bo)-1)/Bo)|0;if((this.AW-BB)<=0)BB=this.AW-1;this.AW=this.AW-BB;Al=Al+(BB*Bo);
this.AL=this.AL+(BB*Bo);}if(((this.AW===1)&&(Al<0))&&(this.Ek>0)){this.AW=0;Al=Al+
DL;this.AL=this.AL+DL;}if(((this.AW===1)&&(Al<0))&&!this.Ek){var BB=(((-Al+Bo)-1
)/Bo)|0;Al=Al+(BB*Bo);this.AL=this.AL+(BB*Bo);}if(this.AW>0)C$=0;if(Al<0){CH=true;
Ay=0;}else if(Al>=C$)Ay=(Al-C$)*this.IX;else if(Ay>=0)Ay=0;if(Ay!==this.CK){if(Ay<
0)Ay=0;if(Ay>1)Ay=1;}if(Ay!==this.CK){this.CK=Ay;this.Kk(Ay);}return CH;},Q_:function(
){var Al=(this.timer.Ax-this.AL)|0;if(Al<0)Al=-Al;var C$=this.Fe;var DL=this.Fe+
this.E3;var Bo=this.E3;var CH=false;var Ay=this.CK;if(!this.AW&&(Al>=DL)){this.AW=
1;Al=Al-DL;this.AL=this.AL+DL;}if((this.AW>0)&&(Al>=Bo)){var BB=(Al/Bo)|0;this.AW=
this.AW+BB;Al=Al-(BB*Bo);this.AL=this.AL+(BB*Bo);}if((this.AW>2)&&!this.Ek)this.
AW=1;if(this.AW>0)C$=0;if((this.AW>=this.Ek)&&(this.Ek>0)){CH=true;Ay=1;}else if(
Al>=C$)Ay=(Al-C$)*this.IX;else if(Ay>=0)Ay=1;if(Ay!==this.CK){if(Ay<0)Ay=0;if(Ay>
1)Ay=1;}if(Ay!==this.CK){this.CK=Ay;this.Kk(Ay);}return CH;},FK:function(C){if(C<
0)C=0;this.Ek=C;},La:function(C){if(C<15)C=15;this.E3=C;this.IX=1/C;},Lc:function(
C){if(C<0)C=0;this.Fe=C;},N:function(C){if(this.BE===C)return;this.BE=C;if(!C&&!
!this.timer){B.z9([this,this.BO],this.timer,0);this.timer=null;}if(C){this.timer=
B._GetAutoObject(D.Fb);B.zV([this,this.BO],this.timer,0);this.Hr=0;B.pe([this,this.
BO],this);}},Ku:function(G$){},_Init:function(aArg){this.__proto__=D.Gj;B.h7++;}
,_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(
E){var A;if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.JA)&&((
A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.K3)&&((A=A[0])._cycle!=E))A._Mark(
A._cycle=E);if((A=this.J)&&(A._cycle!=E))A._Mark(A._cycle=E);},J:null,_cycle:0,_observers:
null,_className:"Effects::Effect"};D.FG={Y:null,G1:0,Ku:function(G$){var U;this.
G1=Math.round(255*G$)|0;if(!!this.Y)(U=this.Y,U[2].call(U[0],this.G1));},_Init:function(
aArg){D.Gj._Init.call(this,aArg);this.__proto__=D.FG;},_Mark:function(E){var A;D.
Gj._Mark.call(this,E);if((A=this.Y)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);},
_className:"Effects::Int32Effect"};D.C5={Y:null,G1:0,HU:0xFFFFFFFF,HT:0,Ku:function(
G$){var U;var F$=this.HT&0xFF;var FW=(this.HT>>8)&0xFF;var FU=(this.HT>>16)&0xFF;
var CF=(this.HT>>24)&0xFF;F$=F$+((((this.HU&0xFF)-F$)*G$)|0);FW=FW+(((((this.HU>>
8)&0xFF)-FW)*G$)|0);FU=FU+(((((this.HU>>16)&0xFF)-FU)*G$)|0);CF=CF+(((((this.HU>>
24)&0xFF)-CF)*G$)|0);if(F$<0)F$=0;if(F$>255)F$=255;if(FW<0)FW=0;if(FW>255)FW=255;
if(FU<0)FU=0;if(FU>255)FU=255;if(CF<0)CF=0;if(CF>255)CF=255;this.G1=(F$&0xFF)|((
FW&0xFF)<<8)|((FU&0xFF)<<16)|((CF&0xFF)<<24);if(!!this.Y)(U=this.Y,U[2].call(U[0
],this.G1));},_Init:function(aArg){D.Gj._Init.call(this,aArg);this.__proto__=D.C5;
},_Mark:function(E){var A;D.Gj._Mark.call(this,E);if((A=this.Y)&&((A=A[0])._cycle
!=E))A._Mark(A._cycle=E);},_className:"Effects::ColorEffect"};D.KD={Trigger:function(
){B.Core.Timer.Trigger.call(this);B.we(this,0);},_Init:function(aArg){B.Core.Timer.
_Init.call(this,aArg);this.__proto__=D.KD;},_className:"Effects::EffectTimerClass"
};D.Fb={_Init:function(){D.KD._Init.call(this,0);this.FM(15);this.N(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};
D._Init=function(){D.FG.__proto__=D.Gj;D.C5.__proto__=D.Gj;D.KD.__proto__=B.Core.
Timer;};D._ReInit=function(){var A;if((A=D.Fb._this))A._ReInit(),D.Fb._ReInit.call(
A);};D.Cn=function(E){var A;if((A=D.Fb._this)&&(A._cycle!=E))A._Done(D.Fb._this=
null);};return D;})();

/* Embedded Wizard */