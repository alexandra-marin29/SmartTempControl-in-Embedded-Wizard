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

D.FU={timer:null,HV:null,KH:null,Ly:0,G$:0,IG:0.001,Cv:0,AS:0,AJ:0,D1:0,EJ:1000,EX:
0,EW:0,Bw:false,BE:function(As){var A;if(!this.timer)return;if(!this.G$){this.G$=
1;this.Ly=this.G$;this.AJ=this.timer.Ax;this.AS=0;this.Cv=-1;}var Cs;if((this.G$>
0)&&(this.Ly>0))Cs=this.PM();else if((this.G$<0)&&(this.Ly<0))Cs=this.PP();else if(
this.G$>0)Cs=this.PN();else Cs=this.PO();if(Cs){this.Y(false);(A=this.HV)?A[1].call(
A[0],this):null;}},J2:function(Pc){var A;this.Ka(Pc);(A=this.KH)?A[1].call(A[0],
this):null;},PP:function(){var Al=(this.timer.Ax-this.AJ)|0;if(Al<0)Al=-Al;var CX=
this.EW;var Dt=this.EW+this.EJ;var Bm=this.EX+this.EJ;var Cs=false;var Ay=this.Cv;
if(!this.AS&&(Al>=Dt)){this.AS=1;Al=Al-Dt;this.AJ=this.AJ+Dt;}if((this.AS>0)&&(Al>=
Bm)){var Bu=(Al/Bm)|0;this.AS=this.AS+Bu;Al=Al-(Bu*Bm);this.AJ=this.AJ+(Bu*Bm);}
if((this.AS>2)&&!this.D1)this.AS=1;if(this.AS>0)CX=this.EX;if((this.AS>=this.D1)&&(
this.D1>0)){Cs=true;Ay=0;}else if(Al>=CX)Ay=1-((Al-CX)*this.IG);else if(Ay>=0)Ay=
0;if(Ay!==this.Cv){if(Ay<0)Ay=0;if(Ay>1)Ay=1;}if(Ay!==this.Cv){this.Cv=Ay;this.J2(
Ay);}return Cs;},PO:function(){var Al=(this.AJ-this.timer.Ax)|0;var CX=this.EW;var
Dt=this.EW+this.EJ;var Bm=this.EX+this.EJ;var Cs=false;var Ay=this.Cv;if((this.AS>
1)&&(Al<0)){var Bu=(((-Al+Bm)-1)/Bm)|0;if((this.AS-Bu)<=0)Bu=this.AS-1;this.AS=this.
AS-Bu;Al=Al+(Bu*Bm);this.AJ=this.AJ+(Bu*Bm);}if(((this.AS===1)&&(Al<0))&&(this.D1>
0)){this.AS=0;Al=Al+Dt;this.AJ=this.AJ+Dt;}if(((this.AS===1)&&(Al<0))&&!this.D1){
var Bu=(((-Al+Bm)-1)/Bm)|0;Al=Al+(Bu*Bm);this.AJ=this.AJ+(Bu*Bm);}if(this.AS>0)CX=
this.EX;if(Al<0){Cs=true;Ay=1;}else if(Al>=CX)Ay=1-((Al-CX)*this.IG);else if(Ay>=
0)Ay=1;if(Ay!==this.Cv){if(Ay<0)Ay=0;if(Ay>1)Ay=1;}if(Ay!==this.Cv){this.Cv=Ay;this.
J2(Ay);}return Cs;},PN:function(){var Al=(this.AJ-this.timer.Ax)|0;var CX=this.EW;
var Dt=this.EW+this.EJ;var Bm=this.EX+this.EJ;var Cs=false;var Ay=this.Cv;if((this.
AS>1)&&(Al<0)){var Bu=(((-Al+Bm)-1)/Bm)|0;if((this.AS-Bu)<=0)Bu=this.AS-1;this.AS=
this.AS-Bu;Al=Al+(Bu*Bm);this.AJ=this.AJ+(Bu*Bm);}if(((this.AS===1)&&(Al<0))&&(this.
D1>0)){this.AS=0;Al=Al+Dt;this.AJ=this.AJ+Dt;}if(((this.AS===1)&&(Al<0))&&!this.
D1){var Bu=(((-Al+Bm)-1)/Bm)|0;Al=Al+(Bu*Bm);this.AJ=this.AJ+(Bu*Bm);}if(this.AS>
0)CX=this.EX;if(Al<0){Cs=true;Ay=0;}else if(Al>=CX)Ay=(Al-CX)*this.IG;else if(Ay>=
0)Ay=0;if(Ay!==this.Cv){if(Ay<0)Ay=0;if(Ay>1)Ay=1;}if(Ay!==this.Cv){this.Cv=Ay;this.
J2(Ay);}return Cs;},PM:function(){var Al=(this.timer.Ax-this.AJ)|0;if(Al<0)Al=-Al;
var CX=this.EW;var Dt=this.EW+this.EJ;var Bm=this.EX+this.EJ;var Cs=false;var Ay=
this.Cv;if(!this.AS&&(Al>=Dt)){this.AS=1;Al=Al-Dt;this.AJ=this.AJ+Dt;}if((this.AS>
0)&&(Al>=Bm)){var Bu=(Al/Bm)|0;this.AS=this.AS+Bu;Al=Al-(Bu*Bm);this.AJ=this.AJ+(
Bu*Bm);}if((this.AS>2)&&!this.D1)this.AS=1;if(this.AS>0)CX=this.EX;if((this.AS>=
this.D1)&&(this.D1>0)){Cs=true;Ay=1;}else if(Al>=CX)Ay=(Al-CX)*this.IG;else if(Ay>=
0)Ay=1;if(Ay!==this.Cv){if(Ay<0)Ay=0;if(Ay>1)Ay=1;}if(Ay!==this.Cv){this.Cv=Ay;this.
J2(Ay);}return Cs;},GG:function(C){if(C<0)C=0;this.D1=C;},KQ:function(C){if(C<15
)C=15;this.EJ=C;this.IG=1/C;},NU:function(C){if(C<0)C=0;this.EX=C;},KS:function(
C){if(C<0)C=0;this.EW=C;},Y:function(C){if(this.Bw===C)return;this.Bw=C;if(!C&&!
!this.timer){B.z9([this,this.BE],this.timer,0);this.timer=null;}if(C){this.timer=
B._GetAutoObject(D.ET);B.zV([this,this.BE],this.timer,0);this.G$=0;B.pe([this,this.
BE],this);}},Ka:function(GT){},_Init:function(aArg){this.__proto__=D.FU;B.h7++;}
,_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(
E){var A;if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.HV)&&((
A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.KH)&&((A=A[0])._cycle!=E))A._Mark(
A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:
null,_className:"Effects::Effect"};D.Fk={V:null,GL:0,Ka:function(GT){var R;this.
GL=Math.round(255*GT)|0;if(!!this.V)(R=this.V,R[2].call(R[0],this.GL));},_Init:function(
aArg){D.FU._Init.call(this,aArg);this.__proto__=D.Fk;},_Mark:function(E){var A;D.
FU._Mark.call(this,E);if((A=this.V)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);},
_className:"Effects::Int32Effect"};D.CA={V:null,GL:0,Hs:0xFFFFFFFF,Hr:0,Ka:function(
GT){var R;var FJ=this.Hr&0xFF;var FD=(this.Hr>>8)&0xFF;var FA=(this.Hr>>16)&0xFF;
var Cq=(this.Hr>>24)&0xFF;FJ=FJ+((((this.Hs&0xFF)-FJ)*GT)|0);FD=FD+(((((this.Hs>>
8)&0xFF)-FD)*GT)|0);FA=FA+(((((this.Hs>>16)&0xFF)-FA)*GT)|0);Cq=Cq+(((((this.Hs>>
24)&0xFF)-Cq)*GT)|0);if(FJ<0)FJ=0;if(FJ>255)FJ=255;if(FD<0)FD=0;if(FD>255)FD=255;
if(FA<0)FA=0;if(FA>255)FA=255;if(Cq<0)Cq=0;if(Cq>255)Cq=255;this.GL=(FJ&0xFF)|((
FD&0xFF)<<8)|((FA&0xFF)<<16)|((Cq&0xFF)<<24);if(!!this.V)(R=this.V,R[2].call(R[0
],this.GL));},_Init:function(aArg){D.FU._Init.call(this,aArg);this.__proto__=D.CA;
},_Mark:function(E){var A;D.FU._Mark.call(this,E);if((A=this.V)&&((A=A[0])._cycle
!=E))A._Mark(A._cycle=E);},_className:"Effects::ColorEffect"};D.Kj={Trigger:function(
){B.Core.Timer.Trigger.call(this);B.we(this,0);},_Init:function(aArg){B.Core.Timer.
_Init.call(this,aArg);this.__proto__=D.Kj;},_className:"Effects::EffectTimerClass"
};D.ET={_Init:function(){D.Kj._Init.call(this,0);this.Fq(15);this.Y(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};
D._Init=function(){D.Fk.__proto__=D.FU;D.CA.__proto__=D.FU;D.Kj.__proto__=B.Core.
Timer;};D._ReInit=function(){var A;if((A=D.ET._this))A._ReInit(),D.ET._ReInit.call(
A);};D.B$=function(E){var A;if((A=D.ET._this)&&(A._cycle!=E))A._Done(D.ET._this=
null);};return D;})();

/* Embedded Wizard */