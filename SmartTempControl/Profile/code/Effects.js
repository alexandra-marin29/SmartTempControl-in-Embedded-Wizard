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

D.FU={timer:null,HS:null,KG:null,Lu:0,G_:0,IF:0.001,Cu:0,AS:0,AJ:0,D0:0,EJ:1000,EX:
0,EW:0,Bw:false,BE:function(As){var A;if(!this.timer)return;if(!this.G_){this.G_=
1;this.Lu=this.G_;this.AJ=this.timer.Ax;this.AS=0;this.Cu=-1;}var Cr;if((this.G_>
0)&&(this.Lu>0))Cr=this.PL();else if((this.G_<0)&&(this.Lu<0))Cr=this.PO();else if(
this.G_>0)Cr=this.PM();else Cr=this.PN();if(Cr){this.Y(false);(A=this.HS)?A[1].call(
A[0],this):null;}},J1:function(Pb){var A;this.J$(Pb);(A=this.KG)?A[1].call(A[0],
this):null;},PO:function(){var Al=(this.timer.Ax-this.AJ)|0;if(Al<0)Al=-Al;var CX=
this.EW;var Ds=this.EW+this.EJ;var Bm=this.EX+this.EJ;var Cr=false;var Ay=this.Cu;
if(!this.AS&&(Al>=Ds)){this.AS=1;Al=Al-Ds;this.AJ=this.AJ+Ds;}if((this.AS>0)&&(Al>=
Bm)){var Bu=(Al/Bm)|0;this.AS=this.AS+Bu;Al=Al-(Bu*Bm);this.AJ=this.AJ+(Bu*Bm);}
if((this.AS>2)&&!this.D0)this.AS=1;if(this.AS>0)CX=this.EX;if((this.AS>=this.D0)&&(
this.D0>0)){Cr=true;Ay=0;}else if(Al>=CX)Ay=1-((Al-CX)*this.IF);else if(Ay>=0)Ay=
0;if(Ay!==this.Cu){if(Ay<0)Ay=0;if(Ay>1)Ay=1;}if(Ay!==this.Cu){this.Cu=Ay;this.J1(
Ay);}return Cr;},PN:function(){var Al=(this.AJ-this.timer.Ax)|0;var CX=this.EW;var
Ds=this.EW+this.EJ;var Bm=this.EX+this.EJ;var Cr=false;var Ay=this.Cu;if((this.AS>
1)&&(Al<0)){var Bu=(((-Al+Bm)-1)/Bm)|0;if((this.AS-Bu)<=0)Bu=this.AS-1;this.AS=this.
AS-Bu;Al=Al+(Bu*Bm);this.AJ=this.AJ+(Bu*Bm);}if(((this.AS===1)&&(Al<0))&&(this.D0>
0)){this.AS=0;Al=Al+Ds;this.AJ=this.AJ+Ds;}if(((this.AS===1)&&(Al<0))&&!this.D0){
var Bu=(((-Al+Bm)-1)/Bm)|0;Al=Al+(Bu*Bm);this.AJ=this.AJ+(Bu*Bm);}if(this.AS>0)CX=
this.EX;if(Al<0){Cr=true;Ay=1;}else if(Al>=CX)Ay=1-((Al-CX)*this.IF);else if(Ay>=
0)Ay=1;if(Ay!==this.Cu){if(Ay<0)Ay=0;if(Ay>1)Ay=1;}if(Ay!==this.Cu){this.Cu=Ay;this.
J1(Ay);}return Cr;},PM:function(){var Al=(this.AJ-this.timer.Ax)|0;var CX=this.EW;
var Ds=this.EW+this.EJ;var Bm=this.EX+this.EJ;var Cr=false;var Ay=this.Cu;if((this.
AS>1)&&(Al<0)){var Bu=(((-Al+Bm)-1)/Bm)|0;if((this.AS-Bu)<=0)Bu=this.AS-1;this.AS=
this.AS-Bu;Al=Al+(Bu*Bm);this.AJ=this.AJ+(Bu*Bm);}if(((this.AS===1)&&(Al<0))&&(this.
D0>0)){this.AS=0;Al=Al+Ds;this.AJ=this.AJ+Ds;}if(((this.AS===1)&&(Al<0))&&!this.
D0){var Bu=(((-Al+Bm)-1)/Bm)|0;Al=Al+(Bu*Bm);this.AJ=this.AJ+(Bu*Bm);}if(this.AS>
0)CX=this.EX;if(Al<0){Cr=true;Ay=0;}else if(Al>=CX)Ay=(Al-CX)*this.IF;else if(Ay>=
0)Ay=0;if(Ay!==this.Cu){if(Ay<0)Ay=0;if(Ay>1)Ay=1;}if(Ay!==this.Cu){this.Cu=Ay;this.
J1(Ay);}return Cr;},PL:function(){var Al=(this.timer.Ax-this.AJ)|0;if(Al<0)Al=-Al;
var CX=this.EW;var Ds=this.EW+this.EJ;var Bm=this.EX+this.EJ;var Cr=false;var Ay=
this.Cu;if(!this.AS&&(Al>=Ds)){this.AS=1;Al=Al-Ds;this.AJ=this.AJ+Ds;}if((this.AS>
0)&&(Al>=Bm)){var Bu=(Al/Bm)|0;this.AS=this.AS+Bu;Al=Al-(Bu*Bm);this.AJ=this.AJ+(
Bu*Bm);}if((this.AS>2)&&!this.D0)this.AS=1;if(this.AS>0)CX=this.EX;if((this.AS>=
this.D0)&&(this.D0>0)){Cr=true;Ay=1;}else if(Al>=CX)Ay=(Al-CX)*this.IF;else if(Ay>=
0)Ay=1;if(Ay!==this.Cu){if(Ay<0)Ay=0;if(Ay>1)Ay=1;}if(Ay!==this.Cu){this.Cu=Ay;this.
J1(Ay);}return Cr;},Hm:function(C){if(C<0)C=0;this.D0=C;},L7:function(C){if(C<15
)C=15;this.EJ=C;this.IF=1/C;},NT:function(C){if(C<0)C=0;this.EX=C;},L_:function(
C){if(C<0)C=0;this.EW=C;},Y:function(C){if(this.Bw===C)return;this.Bw=C;if(!C&&!
!this.timer){B.z9([this,this.BE],this.timer,0);this.timer=null;}if(C){this.timer=
B._GetAutoObject(D.ET);B.zV([this,this.BE],this.timer,0);this.G_=0;B.pe([this,this.
BE],this);}},J$:function(GS){},_Init:function(aArg){this.__proto__=D.FU;B.h7++;}
,_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(
E){var A;if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.HS)&&((
A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.KG)&&((A=A[0])._cycle!=E))A._Mark(
A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:
null,_className:"Effects::Effect"};D.Fk={W:null,GK:0,J$:function(GS){var R;this.
GK=Math.round(255*GS)|0;if(!!this.W)(R=this.W,R[2].call(R[0],this.GK));},_Init:function(
aArg){D.FU._Init.call(this,aArg);this.__proto__=D.Fk;},_Mark:function(E){var A;D.
FU._Mark.call(this,E);if((A=this.W)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);},
_className:"Effects::Int32Effect"};D.CR={W:null,GK:0,Ik:0xFFFFFFFF,Ij:0,J$:function(
GS){var R;var FJ=this.Ij&0xFF;var FD=(this.Ij>>8)&0xFF;var FA=(this.Ij>>16)&0xFF;
var Cp=(this.Ij>>24)&0xFF;FJ=FJ+((((this.Ik&0xFF)-FJ)*GS)|0);FD=FD+(((((this.Ik>>
8)&0xFF)-FD)*GS)|0);FA=FA+(((((this.Ik>>16)&0xFF)-FA)*GS)|0);Cp=Cp+(((((this.Ik>>
24)&0xFF)-Cp)*GS)|0);if(FJ<0)FJ=0;if(FJ>255)FJ=255;if(FD<0)FD=0;if(FD>255)FD=255;
if(FA<0)FA=0;if(FA>255)FA=255;if(Cp<0)Cp=0;if(Cp>255)Cp=255;this.GK=(FJ&0xFF)|((
FD&0xFF)<<8)|((FA&0xFF)<<16)|((Cp&0xFF)<<24);if(!!this.W)(R=this.W,R[2].call(R[0
],this.GK));},_Init:function(aArg){D.FU._Init.call(this,aArg);this.__proto__=D.CR;
},_Mark:function(E){var A;D.FU._Mark.call(this,E);if((A=this.W)&&((A=A[0])._cycle
!=E))A._Mark(A._cycle=E);},_className:"Effects::ColorEffect"};D.Ki={Trigger:function(
){B.Core.Timer.Trigger.call(this);B.we(this,0);},_Init:function(aArg){B.Core.Timer.
_Init.call(this,aArg);this.__proto__=D.Ki;},_className:"Effects::EffectTimerClass"
};D.ET={_Init:function(){D.Ki._Init.call(this,0);this.Fq(15);this.Y(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};
D._Init=function(){D.Fk.__proto__=D.FU;D.CR.__proto__=D.FU;D.Ki.__proto__=B.Core.
Timer;};D._ReInit=function(){var A;if((A=D.ET._this))A._ReInit(),D.ET._ReInit.call(
A);};D.B$=function(E){var A;if((A=D.ET._this)&&(A._cycle!=E))A._Done(D.ET._this=
null);};return D;})();

/* Embedded Wizard */