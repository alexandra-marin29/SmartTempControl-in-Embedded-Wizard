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
);if(EmWiApp.acf)throw new Error("The unit file 'Views.js' included twice!");EmWiApp.
acf=(function(){var B=EmWiApp;var D={};
var AH=[0,0];var AS=[0,0,0,0];var Ca="\uFEFF";
D.Fc={F$:0xFFFFFFFF,Ga:0xFFFFFFFF,Gb:0xFFFFFFFF,D3:0xFFFFFFFF,A$:0xFFFFFFFF,Cs:function(
AK,aClip,aOffset,Az,aBlend){var A;var Z=this.D3;var Ag=this.Gb;var Ae=this.F$;var
Af=this.Ga;var Ah=this.A$;aBlend=aBlend&&((this.F&0x2)===0x2);Az=Az+1;if((((Z===
Ag)&&(Ae===Af))&&(Z===Ae))&&(Z===0xFFFFFFFF))Z=Ag=Ae=Af=Ah;else if(Ah!==0xFFFFFFFF
){Z=(Z&0x00FFFFFF)|((((((Z>>24)&0xFF)*(((Ah>>24)&0xFF)+1))>>8)&0xFF)<<24);Z=(Z&0xFFFFFF00
)|((((Z&0xFF)*((Ah&0xFF)+1))>>8)&0xFF);Z=(Z&0xFFFF00FF)|((((((Z>>8)&0xFF)*(((Ah>>
8)&0xFF)+1))>>8)&0xFF)<<8);Z=(Z&0xFF00FFFF)|((((((Z>>16)&0xFF)*(((Ah>>16)&0xFF)+
1))>>8)&0xFF)<<16);Ag=(Ag&0x00FFFFFF)|((((((Ag>>24)&0xFF)*(((Ah>>24)&0xFF)+1))>>
8)&0xFF)<<24);Ag=(Ag&0xFFFFFF00)|((((Ag&0xFF)*((Ah&0xFF)+1))>>8)&0xFF);Ag=(Ag&0xFFFF00FF
)|((((((Ag>>8)&0xFF)*(((Ah>>8)&0xFF)+1))>>8)&0xFF)<<8);Ag=(Ag&0xFF00FFFF)|((((((
Ag>>16)&0xFF)*(((Ah>>16)&0xFF)+1))>>8)&0xFF)<<16);Ae=(Ae&0x00FFFFFF)|((((((Ae>>24
)&0xFF)*(((Ah>>24)&0xFF)+1))>>8)&0xFF)<<24);Ae=(Ae&0xFFFFFF00)|((((Ae&0xFF)*((Ah&
0xFF)+1))>>8)&0xFF);Ae=(Ae&0xFFFF00FF)|((((((Ae>>8)&0xFF)*(((Ah>>8)&0xFF)+1))>>8
)&0xFF)<<8);Ae=(Ae&0xFF00FFFF)|((((((Ae>>16)&0xFF)*(((Ah>>16)&0xFF)+1))>>8)&0xFF
)<<16);Af=(Af&0x00FFFFFF)|((((((Af>>24)&0xFF)*(((Ah>>24)&0xFF)+1))>>8)&0xFF)<<24
);Af=(Af&0xFFFFFF00)|((((Af&0xFF)*((Ah&0xFF)+1))>>8)&0xFF);Af=(Af&0xFFFF00FF)|((((((
Af>>8)&0xFF)*(((Ah>>8)&0xFF)+1))>>8)&0xFF)<<8);Af=(Af&0xFF00FFFF)|((((((Af>>16)&
0xFF)*(((Ah>>16)&0xFF)+1))>>8)&0xFF)<<16);}if(Az<256){Z=(Z&0x00FFFFFF)|((((Az*((
Z>>24)&0xFF))>>8)&0xFF)<<24);Ag=(Ag&0x00FFFFFF)|((((Az*((Ag>>24)&0xFF))>>8)&0xFF
)<<24);Ae=(Ae&0x00FFFFFF)|((((Az*((Ae>>24)&0xFF))>>8)&0xFF)<<24);Af=(Af&0x00FFFFFF
)|((((Az*((Af>>24)&0xFF))>>8)&0xFF)<<24);}AK.Kw(aClip,B.abh(this.O,aOffset),Z,Ag
,Af,Ae,aBlend);},Js:function(C){var A;if(C===this.F$)return;this.F$=C;if(!!this.
G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},Jt:function(C){var A;if(C===this.Ga)
return;this.Ga=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},Id:function(
C){var A;if(C===this.Gb)return;this.Gb=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ac(this.O);},GA:function(C){var A;if(C===this.D3)return;this.D3=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ac(this.O);},A1:function(C){var A;if(C===this.A$)return;
this.A$=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},N_:function(C){if(
C)this.AD(0x2,0x0);else this.AD(0x0,0x2);},W:function(C){if(C)this.AD(0x1,0x0);else
this.AD(0x0,0x1);},KY:function(){return this.A$;},_Init:function(aArg){B.Core.AO.
_Init.call(this,aArg);this.__proto__=D.Fc;},_className:"Views::Rectangle"};D.CJ={
Width:1,F$:0xFFFFFFFF,Ga:0xFFFFFFFF,Gb:0xFFFFFFFF,D3:0xFFFFFFFF,A$:0xFFFFFFFF,Cs:
function(AK,aClip,aOffset,Az,aBlend){var A;var Z=this.D3;var Ag=this.Gb;var Ae=this.
F$;var Af=this.Ga;var Ah=this.A$;aBlend=aBlend&&((this.F&0x2)===0x2);Az=Az+1;if((((
Z===Ag)&&(Ae===Af))&&(Z===Ae))&&(Z===0xFFFFFFFF))Z=Ag=Ae=Af=Ah;else if(Ah!==0xFFFFFFFF
){Z=(Z&0x00FFFFFF)|((((((Z>>24)&0xFF)*(((Ah>>24)&0xFF)+1))>>8)&0xFF)<<24);Z=(Z&0xFFFFFF00
)|((((Z&0xFF)*((Ah&0xFF)+1))>>8)&0xFF);Z=(Z&0xFFFF00FF)|((((((Z>>8)&0xFF)*(((Ah>>
8)&0xFF)+1))>>8)&0xFF)<<8);Z=(Z&0xFF00FFFF)|((((((Z>>16)&0xFF)*(((Ah>>16)&0xFF)+
1))>>8)&0xFF)<<16);Ag=(Ag&0x00FFFFFF)|((((((Ag>>24)&0xFF)*(((Ah>>24)&0xFF)+1))>>
8)&0xFF)<<24);Ag=(Ag&0xFFFFFF00)|((((Ag&0xFF)*((Ah&0xFF)+1))>>8)&0xFF);Ag=(Ag&0xFFFF00FF
)|((((((Ag>>8)&0xFF)*(((Ah>>8)&0xFF)+1))>>8)&0xFF)<<8);Ag=(Ag&0xFF00FFFF)|((((((
Ag>>16)&0xFF)*(((Ah>>16)&0xFF)+1))>>8)&0xFF)<<16);Ae=(Ae&0x00FFFFFF)|((((((Ae>>24
)&0xFF)*(((Ah>>24)&0xFF)+1))>>8)&0xFF)<<24);Ae=(Ae&0xFFFFFF00)|((((Ae&0xFF)*((Ah&
0xFF)+1))>>8)&0xFF);Ae=(Ae&0xFFFF00FF)|((((((Ae>>8)&0xFF)*(((Ah>>8)&0xFF)+1))>>8
)&0xFF)<<8);Ae=(Ae&0xFF00FFFF)|((((((Ae>>16)&0xFF)*(((Ah>>16)&0xFF)+1))>>8)&0xFF
)<<16);Af=(Af&0x00FFFFFF)|((((((Af>>24)&0xFF)*(((Ah>>24)&0xFF)+1))>>8)&0xFF)<<24
);Af=(Af&0xFFFFFF00)|((((Af&0xFF)*((Ah&0xFF)+1))>>8)&0xFF);Af=(Af&0xFFFF00FF)|((((((
Af>>8)&0xFF)*(((Ah>>8)&0xFF)+1))>>8)&0xFF)<<8);Af=(Af&0xFF00FFFF)|((((((Af>>16)&
0xFF)*(((Ah>>16)&0xFF)+1))>>8)&0xFF)<<16);}if(Az<256){Z=(Z&0x00FFFFFF)|((((Az*((
Z>>24)&0xFF))>>8)&0xFF)<<24);Ag=(Ag&0x00FFFFFF)|((((Az*((Ag>>24)&0xFF))>>8)&0xFF
)<<24);Ae=(Ae&0x00FFFFFF)|((((Az*((Ae>>24)&0xFF))>>8)&0xFF)<<24);Af=(Af&0x00FFFFFF
)|((((Az*((Af>>24)&0xFF))>>8)&0xFF)<<24);}AK.NS(aClip,B.abh(this.O,aOffset),this.
Width,Z,Ag,Af,Ae,aBlend);},K7:function(C){var A;if(C<0)C=0;if(C===this.Width)return;
this.Width=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},Js:function(C
){var A;if(C===this.F$)return;this.F$=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.
Ac(this.O);},Jt:function(C){var A;if(C===this.Ga)return;this.Ga=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ac(this.O);},Id:function(C){var A;if(C===this.Gb)return;
this.Gb=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},GA:function(C){var
A;if(C===this.D3)return;this.D3=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.
O);},A1:function(C){var A;if(C===this.A$)return;this.A$=C;if(!!this.G&&((this.F&
0x1)===0x1))this.G.Ac(this.O);},_Init:function(aArg){B.Core.AO._Init.call(this,aArg
);this.__proto__=D.CJ;},_className:"Views::Border"};D.Hq={timer:null,Q:null,AP:-
1,A$:0xFFFFFFFF,H6:0x1F,Ev:0,AJ:0,Gx:B.wf,BR:false,Cs:function(AK,aClip,aOffset,
Az,aBlend){var A;var AL=this.Ev;if(this.AP>=0)AL=this.AP;if(!this.Q||(AL>=this.Q.
NoOfFrames))return;this.Q.Update();var Z;var Ag;var Af;var Ae;var Ah=this.A$;var
Bc=(((Az+1)*255)>>8)+1;var Cj=this.H6;var I=B.abh(this.O,aOffset);var Ka=B.abe([
I[2]-I[0],I[3]-I[1]],this.Gx);aBlend=aBlend&&((this.F&0x2)===0x2);Z=Ag=Ae=Af=Ah;
if(Bc<256){Z=(Z&0x00FFFFFF)|((((((Z>>24)&0xFF)*Bc)>>8)&0xFF)<<24);Ag=(Ag&0x00FFFFFF
)|((((((Ag>>24)&0xFF)*Bc)>>8)&0xFF)<<24);Af=(Af&0x00FFFFFF)|((((((Af>>24)&0xFF)*
Bc)>>8)&0xFF)<<24);Ae=(Ae&0x00FFFFFF)|((((((Ae>>24)&0xFF)*Bc)>>8)&0xFF)<<24);}if(((
this.Gx[0]>0)&&(Ka[0]>0))&&!((Cj&0x5)===0x5)){var d=((this.Q.FrameSize[0]/3)|0)-
Ka[0];if(((Cj&0x1)===0x1)){if(aClip[2]>I[2])aClip=B.abN(aClip,I[2]);if(d>0)I=B.abN(
I,I[2]+d);Cj=Cj|0x4;}else if(((Cj&0x4)===0x4)){if(aClip[0]<I[0])aClip=[].concat(
I[0],aClip.slice(1,4));if(d>0)I=[].concat(I[0]-d,I.slice(1,4));Cj=Cj|0x1;}else{if(
aClip[0]<I[0])aClip=[].concat(I[0],aClip.slice(1,4));if(aClip[2]>I[2])aClip=B.abN(
aClip,I[2]);if(d>0){I=[].concat(I[0]-((d/2)|0),I.slice(1,4));I=B.abN(I,(I[2]+d)-((
d/2)|0));}Cj=Cj|0x5;}}if(((this.Gx[1]>0)&&(Ka[1]>0))&&!((Cj&0xA)===0xA)){var d=((
this.Q.FrameSize[1]/3)|0)-Ka[1];if(((Cj&0x2)===0x2)){if(aClip[3]>I[3])aClip=[].concat(
aClip.slice(0,3),I[3]);if(d>0)I=[].concat(I.slice(0,3),I[3]+d);Cj=Cj|0x8;}else if(((
Cj&0x8)===0x8)){if(aClip[1]<I[1])aClip=B.abP(aClip,I[1]);if(d>0)I=B.abP(I,I[1]-d
);Cj=Cj|0x2;}else{if(aClip[1]<I[1])aClip=B.abP(aClip,I[1]);if(aClip[3]>I[3])aClip=[
].concat(aClip.slice(0,3),I[3]);if(d>0){I=B.abP(I,I[1]-((d/2)|0));I=[].concat(I.
slice(0,3),(I[3]+d)-((d/2)|0));}Cj=Cj|0xA;}}AK.NR(aClip,this.Q,AL,I,Cj,Z,Ag,Af,Ae
,aBlend);},D0:function(Ap){var A;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.
O);},BH:function(Ap){var A;var AL=this.AP;var Bl=0;if(!!this.Q)Bl=this.Q.NoOfFrames
*this.Q.FrameDelay;if((!!this.timer&&(this.AP<0))&&(Bl>0))this.AJ=this.timer.Ax-(
this.Ev*this.Q.FrameDelay);if(!!this.timer&&(Bl>0)){var Al=(this.timer.Ax-this.AJ
)|0;AL=(Al/this.Q.FrameDelay)|0;if(Al>=Bl){AL=AL%this.Q.NoOfFrames;this.AJ=this.
timer.Ax-(Al%Bl);}}if(((AL!==this.AP)&&!!this.G)&&((this.F&0x1)===0x1))this.G.Ac(
this.O);this.AP=AL;if(!Bl&&!!this.timer){B.z9([this,this.BH],this.timer,0);this.
timer=null;}},A1:function(C){var A;if(C===this.A$)return;this.A$=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ac(this.O);},CS:function(C){var A;if(this.BR===C)return;
this.BR=C;this.AP=-1;if(!C&&!!this.timer){B.z9([this,this.BH],this.timer,0);this.
timer=null;}if(C){this.timer=B._GetAutoObject(B.aci.E5);B.zV([this,this.BH],this.
timer,0);B.pe([this,this.BH],this);}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(
this.O);},Ml:function(C){var A;if(C===this.H6)return;this.H6=C;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.O);},Cn:function(C){var A;if(C<0)C=0;if((C===this.Ev
)&&(this.AP===-1))return;this.Ev=C;if(!this.timer)this.AP=-1;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.O);},AN:function(C){var A;if(C===this.Q)return;if(!
!this.Q&&this.Q.Ey)B.z9([this,this.D0],this.Q,0);this.Q=C;this.AP=-1;if(!!C&&C.Ey
)B.zV([this,this.D0],C,0);if(this.BR){this.CS(false);this.CS(true);}if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ac(this.O);},W:function(C){if(C)this.AD(0x1,0x0);else this.
AD(0x0,0x1);},Mo:function(C){var A;if(C[0]<0)C=[0,C[1]];if(C[1]<0)C=[C[0],0];if(
B.aaX(C,this.Gx))return;this.Gx=C;if((!!this.G&&((this.F&0x1)===0x1))&&!((this.H6&
0xF)===0xF))this.G.Ac(this.O);},_Init:function(aArg){B.Core.AO._Init.call(this,aArg
);this.__proto__=D.Hq;},_Mark:function(E){var A;B.Core.AO._Mark.call(this,E);if((
A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Q)&&(A._cycle!=E))A.
_Mark(A._cycle=E);},_className:"Views::Frame"};D.AX={timer:null,Q:null,AJ:0,AP:0
,D3:0xFFFFFFFF,A$:0xFFFFFFFF,ES:0x12,Ev:0,Cf:255,BR:false,Cs:function(AK,aClip,aOffset
,Az,aBlend){var A;var AL=this.Ev;if(this.AP>=0)AL=this.AP;if(!this.Q||(AL>=this.
Q.NoOfFrames))return;this.Q.Update();var V=this.KA();var Cq=this.Q.FrameSize;if((
V[0]>=V[2])||(V[1]>=V[3]))return;var Z=this.D3;var Ag=0xFFFFFFFF;var Af=0xFFFFFFFF;
var Ae=0xFFFFFFFF;var Ah=this.A$;var Bc=(((Az+1)*this.Cf)>>8)+1;aBlend=aBlend&&((
this.F&0x2)===0x2);if(((Z===0xFFFFFFFF)&&(Z===0xFFFFFFFF))&&(Z===0xFFFFFFFF))Z=Ag=
Ae=Af=Ah;else if(Ah!==0xFFFFFFFF){Z=(Z&0x00FFFFFF)|((((((Z>>24)&0xFF)*(((Ah>>24)&
0xFF)+1))>>8)&0xFF)<<24);Z=(Z&0xFFFFFF00)|((((Z&0xFF)*((Ah&0xFF)+1))>>8)&0xFF);Z=(
Z&0xFFFF00FF)|((((((Z>>8)&0xFF)*(((Ah>>8)&0xFF)+1))>>8)&0xFF)<<8);Z=(Z&0xFF00FFFF
)|((((((Z>>16)&0xFF)*(((Ah>>16)&0xFF)+1))>>8)&0xFF)<<16);Ag=(Ag&0x00FFFFFF)|((((
255*(((Ah>>24)&0xFF)+1))>>8)&0xFF)<<24);Ag=(Ag&0xFFFFFF00)|((((Ag&0xFF)*((Ah&0xFF
)+1))>>8)&0xFF);Ag=(Ag&0xFFFF00FF)|((((((Ag>>8)&0xFF)*(((Ah>>8)&0xFF)+1))>>8)&0xFF
)<<8);Ag=(Ag&0xFF00FFFF)|((((((Ag>>16)&0xFF)*(((Ah>>16)&0xFF)+1))>>8)&0xFF)<<16);
Ae=(Ae&0x00FFFFFF)|((((255*(((Ah>>24)&0xFF)+1))>>8)&0xFF)<<24);Ae=(Ae&0xFFFFFF00
)|((((Ae&0xFF)*((Ah&0xFF)+1))>>8)&0xFF);Ae=(Ae&0xFFFF00FF)|((((((Ae>>8)&0xFF)*(((
Ah>>8)&0xFF)+1))>>8)&0xFF)<<8);Ae=(Ae&0xFF00FFFF)|((((((Ae>>16)&0xFF)*(((Ah>>16)&
0xFF)+1))>>8)&0xFF)<<16);Af=(Af&0x00FFFFFF)|((((255*(((Ah>>24)&0xFF)+1))>>8)&0xFF
)<<24);Af=(Af&0xFFFFFF00)|((((Af&0xFF)*((Ah&0xFF)+1))>>8)&0xFF);Af=(Af&0xFFFF00FF
)|((((((Af>>8)&0xFF)*(((Ah>>8)&0xFF)+1))>>8)&0xFF)<<8);Af=(Af&0xFF00FFFF)|((((((
Af>>16)&0xFF)*(((Ah>>16)&0xFF)+1))>>8)&0xFF)<<16);}if(Bc<256){Z=(Z&0x00FFFFFF)|((((((
Z>>24)&0xFF)*Bc)>>8)&0xFF)<<24);Ag=(Ag&0x00FFFFFF)|((((((Ag>>24)&0xFF)*Bc)>>8)&0xFF
)<<24);Af=(Af&0x00FFFFFF)|((((((Af>>24)&0xFF)*Bc)>>8)&0xFF)<<24);Ae=(Ae&0x00FFFFFF
)|((((((Ae>>24)&0xFF)*Bc)>>8)&0xFF)<<24);}if(B.aaX([V[2]-V[0],V[3]-V[1]],Cq))AK.
NN(aClip,this.Q,AL,B.abh(this.O,aOffset),B.abe(this.O.slice(0,2),V.slice(0,2)),Z
,Ag,Af,Ae,aBlend);else AK.OK(aClip,this.Q,AL,B.abh(V,aOffset),[].concat(AH,Cq),Z
,Ag,Af,Ae,aBlend,true);},D0:function(Ap){var A;if(!!this.G&&((this.F&0x1)===0x1)
)this.G.Ac(this.O);},BH:function(Ap){var A;var AL=this.AP;var Bl=0;if(!!this.Q)Bl=
this.Q.NoOfFrames*this.Q.FrameDelay;if((!!this.timer&&(this.AP<0))&&(Bl>0))this.
AJ=this.timer.Ax-(this.Ev*this.Q.FrameDelay);if(!!this.timer&&(Bl>0)){var Al=(this.
timer.Ax-this.AJ)|0;AL=(Al/this.Q.FrameDelay)|0;if(Al>=Bl){AL=AL%this.Q.NoOfFrames;
this.AJ=this.timer.Ax-(Al%Bl);}}if(((AL!==this.AP)&&!!this.G)&&((this.F&0x1)===0x1
))this.G.Ac(this.O);this.AP=AL;if(!Bl&&!!this.timer){B.z9([this,this.BH],this.timer
,0);this.timer=null;}},GA:function(C){var A;if(C===this.D3)return;this.D3=C;if(!
!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},A1:function(C){var A;if(C===this.
A$)return;this.A$=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},CS:function(
C){var A;if(this.BR===C)return;this.BR=C;this.AP=-1;if(!C&&!!this.timer){B.z9([this
,this.BH],this.timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(B.aci.
E5);B.zV([this,this.BH],this.timer,0);B.pe([this,this.BH],this);}if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ac(this.O);},Ht:function(C){var A;if(C===this.ES)return;
this.ES=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},Cn:function(C){var
A;if(C<0)C=0;if((C===this.Ev)&&(this.AP===-1))return;this.Ev=C;if(!this.timer)this.
AP=-1;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},AN:function(C){var A;
if(C===this.Q)return;if(!!this.Q&&this.Q.Ey)B.z9([this,this.D0],this.Q,0);this.Q=
C;this.AP=-1;if(!!C&&C.Ey)B.zV([this,this.D0],C,0);if(this.BR){this.CS(false);this.
CS(true);}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},Ba:function(C){var
A;if(C>255)C=255;if(C<0)C=0;if(C===this.Cf)return;this.Cf=C;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.O);},W:function(C){if(C)this.AD(0x1,0x0);else this.
AD(0x0,0x1);},KA:function(){var A;if(!this.Q)return AS;var Aw=this.ES;var Cq=this.
Q.FrameSize;var AU=this.O;var width=AU[2]-AU[0];var height=AU[3]-AU[1];if(!Cq[0]||
!Cq[1])return AS;var AA=[0,0,width,height];var Am=AA;if(((Aw&0x40)===0x40)){var L9=((((
AA[2]-AA[0])<<16)+((Cq[0]/2)|0))/Cq[0])|0;var I8=((((AA[3]-AA[1])<<16)+((Cq[1]/2
)|0))/Cq[1])|0;var Fq=L9;if(I8>Fq)Fq=I8;Am=B.abL(Am,((Cq[0]*Fq)+32768)>>16);Am=B.
abI(Am,((Cq[1]*Fq)+32768)>>16);}else if(((Aw&0x80)===0x80)){var L9=((((AA[2]-AA[
0])<<16)+((Cq[0]/2)|0))/Cq[0])|0;var I8=((((AA[3]-AA[1])<<16)+((Cq[1]/2)|0))/Cq[
1])|0;var Fq=L9;if(I8<Fq)Fq=I8;Am=B.abL(Am,((Cq[0]*Fq)+32768)>>16);Am=B.abI(Am,((
Cq[1]*Fq)+32768)>>16);}else if(!((Aw&0x100)===0x100))Am=B.abK(Am,Cq);if((Am[2]-Am[
0])!==(AA[2]-AA[0])){if(((Aw&0x4)===0x4))Am=B.abM(Am,AA[2]-(Am[2]-Am[0]));else if(((
Aw&0x2)===0x2))Am=B.abM(Am,(AA[0]+(((AA[2]-AA[0])/2)|0))-(((Am[2]-Am[0])/2)|0));
}if((Am[3]-Am[1])!==(AA[3]-AA[1])){if(((Aw&0x20)===0x20))Am=B.abO(Am,AA[3]-(Am[3
]-Am[1]));else if(((Aw&0x10)===0x10))Am=B.abO(Am,(AA[1]+(((AA[3]-AA[1])/2)|0))-(((
Am[3]-Am[1])/2)|0));}Am=B.abh(Am,AU.slice(0,2));return Am;},_Init:function(aArg){
B.Core.AO._Init.call(this,aArg);this.__proto__=D.AX;},_Mark:function(E){var A;B.
Core.AO._Mark.call(this,E);if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);
if((A=this.Q)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Views::Image"};D.
JC={timer:null,Q:null,AP:0,Cf:255,AJ:0,BR:false,Cs:function(AK,aClip,aOffset,Az,
aBlend){var A;var AL=0;if(this.AP>=0)AL=this.AP;if(!this.Q||(AL>=this.Q.NoOfFrames
))return;this.Q.Update();var Z;var Ag;var Af;var Ae;var Bc=(((Az+1)*this.Cf)>>8)+
1;aBlend=aBlend&&((this.F&0x2)===0x2);Z=Ag=Ae=Af=0xFFFFFFFF;if(Bc<256){Z=(Z&0x00FFFFFF
)|((((255*Bc)>>8)&0xFF)<<24);Ag=(Ag&0x00FFFFFF)|((((255*Bc)>>8)&0xFF)<<24);Af=(Af&
0x00FFFFFF)|((((255*Bc)>>8)&0xFF)<<24);Ae=(Ae&0x00FFFFFF)|((((255*Bc)>>8)&0xFF)<<
24);}AK.OP(aClip,this.Q,AL,B.abh(this.O,aOffset),[].concat(AH,this.Q.FrameSize),
AH,Z,Ag,Af,Ae,aBlend);},D0:function(Ap){var A;if(!!this.G&&((this.F&0x1)===0x1))
this.G.Ac(this.O);},BH:function(Ap){var A;var AL=this.AP;var Bl=0;if(!!this.Q)Bl=
this.Q.NoOfFrames*this.Q.FrameDelay;if((!!this.timer&&(this.AP<0))&&(Bl>0))this.
AJ=this.timer.Ax;if(!!this.timer&&(Bl>0)){var Al=(this.timer.Ax-this.AJ)|0;AL=(Al
/this.Q.FrameDelay)|0;if(Al>=Bl){AL=AL%this.Q.NoOfFrames;this.AJ=this.timer.Ax-(
Al%Bl);}}if(((AL!==this.AP)&&!!this.G)&&((this.F&0x1)===0x1))this.G.Ac(this.O);this.
AP=AL;if(!Bl&&!!this.timer){B.z9([this,this.BH],this.timer,0);this.timer=null;}}
,CS:function(C){var A;if(this.BR===C)return;this.BR=C;this.AP=-1;if(!C&&!!this.timer
){B.z9([this,this.BH],this.timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(
B.aci.E5);B.zV([this,this.BH],this.timer,0);B.pe([this,this.BH],this);}if(!!this.
G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},AN:function(C){var A;if(C===this.Q)return;
if(!!this.Q&&this.Q.Ey)B.z9([this,this.D0],this.Q,0);this.Q=C;this.AP=-1;if(!!C&&
C.Ey)B.zV([this,this.D0],C,0);if(this.BR){this.CS(false);this.CS(true);}if(!!this.
G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},Ba:function(C){var A;if(C>255)C=255;
if(C<0)C=0;if(C===this.Cf)return;this.Cf=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ac(this.O);},W:function(C){if(C)this.AD(0x1,0x0);else this.AD(0x0,0x1);},Hr:function(
){return this.Cf;},_Init:function(aArg){B.Core.AO._Init.call(this,aArg);this.__proto__=
D.JC;},_Mark:function(E){var A;B.Core.AO._Mark.call(this,E);if((A=this.timer)&&(
A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Q)&&(A._cycle!=E))A._Mark(A._cycle=E
);},_className:"Views::Wallpaper"};D.Text={BI:null,A7:B.jV,String:B.jV,C7:null,FY:
B.wf,ES:0x12,A$:0xFFFFFFFF,Cf:255,HN:false,Hm:false,Kt:false,CG:false,C3:function(
){if(!!this.C7){this.LO(this.C7);this.C7=null;}},Cs:function(AK,aClip,aOffset,Az
,aBlend){var A;if((this.A7===B.jV)||!this.BI)return;var Aw=this.ES;var font=this.
BI;var AA=B.abh(this.O,aOffset);var Z;var Ag;var Af;var Ae;var Qd=this.A$;var Bc=(((
Az+1)*this.Cf)>>8)+1;var El=this.A7.charCodeAt(0)||0;var V=B.abh(this.KA(),aOffset
);var Nb=[AA[0]-V[0],(AA[1]-V[1])-font.Ascent];if(El<1)return;Z=Ag=Ae=Af=Qd;if(Bc<
256){Z=(Z&0x00FFFFFF)|((((((Z>>24)&0xFF)*Bc)>>8)&0xFF)<<24);Ag=(Ag&0x00FFFFFF)|((((((
Ag>>24)&0xFF)*Bc)>>8)&0xFF)<<24);Af=(Af&0x00FFFFFF)|((((((Af>>24)&0xFF)*Bc)>>8)&
0xFF)<<24);Ae=(Ae&0x00FFFFFF)|((((((Ae>>24)&0xFF)*Bc)>>8)&0xFF)<<24);}if(((Aw&0x80
)===0x80)){if(this.KF())Aw=(Aw&~0x80)|0x4;else Aw=(Aw&~0x80)|0x1;}if((El===1)&&!((
Aw&0x40)===0x40)){AK.Md(aClip,font,this.A7,2,(this.A7.charCodeAt(1)||0)-1,AA,Nb,
0,0,Z,Ag,Af,Ae,true);return;}var leading=font.Leading;var L8=(font.Ascent+font.Descent
)+leading;var Qb=aClip[1]-V[1];var Qc=aClip[3]-V[1];var LF=V[2]-V[0];var BQ=0;var
L=1;var Ah=this.A7.charCodeAt(1)||0;while(((BQ+L8)<Qb)&&(Ah>0)){L=L+Ah;BQ=BQ+L8;
Ah=this.A7.charCodeAt(L)||0;}while((BQ<Qc)&&(Ah>0)){var Hc=B.abe(Nb,[0,BQ]);var No=
0;var JZ=false;if(((((Aw&0x40)===0x40)&&((this.A7.charCodeAt((L+Ah)-1)||0)!==0x0A
))&&((this.A7.charCodeAt(L+1)||0)!==0x0A))&&((this.A7.charCodeAt(L+Ah)||0)!==0x00
))JZ=true;if(JZ&&!!(Aw&0x6)){var Nn=L+Ah;var MU=this.A7.indexOf(String.fromCharCode(
0x20),L+1);var MV=this.A7.indexOf(String.fromCharCode(0xA0),L+1);if(((MU<0)||(MU>=
Nn))&&((MV<0)||(MV>=Nn)))JZ=false;}if(JZ)No=LF;else if(((Aw&0x4)===0x4))Hc=[(Hc[
0]-LF)+font.H8(this.A7,L+1,Ah-1),Hc[1]];else if(((Aw&0x2)===0x2))Hc=[(Hc[0]-((LF
/2)|0))+((font.H8(this.A7,L+1,Ah-1)/2)|0),Hc[1]];AK.Md(aClip,font,this.A7,L+1,Ah-
1,AA,Hc,No,0,Z,Ag,Af,Ae,true);L=L+Ah;BQ=BQ+L8;Ah=this.A7.charCodeAt(L)||0;}},N:function(
C){var A;if(B.aaY(C,this.O))return;var Nm;Nm=((A=this.O)[2]-A[0])!==(C[2]-C[0]);
if(((Nm&&this.HN)&&this.CG)&&!((this.F&0x2000)===0x2000)){this.A7=B.jV;this.CG=false;
B.pe([this,this.FT],this);}if(((this.Hm&&this.CG)&&!B.aaX([(A=this.O)[2]-A[0],A[
3]-A[1]],[C[2]-C[0],C[3]-C[1]]))&&!((this.F&0x2000)===0x2000)){this.A7=B.jV;this.
CG=false;B.pe([this,this.FT],this);}B.Core.AO.N.call(this,C);B.pe([this,this.L6]
,this);},LO:function(aBidi){if(!aBidi)return;B.rB(aBidi);},Qf:function(aSize){var
bidi=null;bidi=B.v3(aSize);return bidi;},L6:function(Ap){},FT:function(Ap){B.pe([
this,this.J6],this);},J6:function(Ap){var A;if(this.CG)return;var width=(A=this.
O)[2]-A[0];var height=(A=this.O)[3]-A[1];var EQ=-1;var font=this.BI;if((!!font&&
!!!font.Ascent)&&!!!font.Descent)font=null;if(this.HN){EQ=width;if(EQ<0)EQ=1;}if(
!!this.C7){this.LO(this.C7);this.C7=null;}this.CG=true;if((this.String!==B.jV)&&
!!font){var length=this.String.length;if(this.Kt)this.C7=this.Qf(length);this.A7=
font.OF(this.String,0,EQ,length,this.C7);if(!!this.C7&&!this.NZ()){this.LO(this.
C7);this.C7=null;}}else this.A7=B.jV;this.FY=AH;if((this.Hm&&(this.A7!==B.jV))&&
!!font){var Aw=this.ES;var leading=font.Leading;var A_=this.A7;var J_=this.KF();
if(((Aw&0x80)===0x80)){if(J_)Aw=(Aw&~0x80)|0x4;else Aw=(Aw&~0x80)|0x1;}var J8=(font.
Ascent+font.Descent)+leading;var El=A_.charCodeAt(0)||0;var FQ=((height+leading)
/J8)|0;var LI=false;var JQ=false;if(FQ<=0)FQ=1;if(El>FQ){var D1=0;var I7=0;var J9=
El-1;var BB;var Cb=A_.length;var tmp=B.jV;if(!!(Aw&0x110)&&!!(Aw&0x28))Aw&=~0x110;
if(!!(Aw&0x110))Aw&=~0x28;if(((Aw&0x20)===0x20))I7=El-FQ;else if(((Aw&0x10)===0x10
)||((Aw&0x100)===0x100)){I7=((El-FQ)/2)|0;J9=(I7+FQ)-1;}else J9=FQ-1;LI=I7>0;JQ=
J9<(El-1);for(BB=1;D1<I7;D1=D1+1)BB=BB+(A_.charCodeAt(BB)||0);if(JQ)for(Cb=BB;D1<
J9;D1=D1+1)Cb=Cb+(A_.charCodeAt(Cb)||0);if(LI){var Cp=A_.charCodeAt(BB)||0;tmp=(
Ca+B.abW(A_,BB,Cp))+Ca;tmp=B.abQ(tmp,0,(Cp+2)&0xFFFF);BB=BB+Cp;if((tmp.charCodeAt(
Cp)||0)===0x0A){tmp=B.abQ(tmp,Cp,0xFEFF);tmp=B.abQ(tmp,Cp+1,0x0A);}if((tmp.charCodeAt(
2)||0)===0x0A){tmp=B.abQ(tmp,2,0xFEFF);tmp=B.abQ(tmp,1,0x0A);}else tmp=B.abQ(tmp
,1,0xFEFF);}tmp=tmp+B.abW(A_,BB,Cb-BB);if(JQ&&(Cb>=BB)){var Cp=A_.charCodeAt(Cb)||
0;var CI=(Ca+B.abW(A_,Cb,Cp))+Ca;CI=B.abQ(CI,0,(Cp+2)&0xFFFF);CI=B.abQ(CI,1,0xFEFF
);if((CI.charCodeAt(Cp)||0)===0x0A){CI=B.abQ(CI,Cp,0xFEFF);CI=B.abQ(CI,Cp+1,0x0A
);}if((CI.charCodeAt(2)||0)===0x0A){CI=B.abQ(CI,2,0xFEFF);CI=B.abQ(CI,1,0x0A);}else
CI=B.abQ(CI,1,0xFEFF);tmp=tmp+CI;}A_=String.fromCharCode(FQ&0xFFFF)+tmp;}var D1=
0;var Dj=1;var LW=width;El=A_.charCodeAt(0)||0;for(;D1<El;D1=D1+1){var FW=LI&&!D1;
var FX=JQ&&(D1===(El-1));var DA=false;var DB=false;var HZ=J_;if((J_&&FW)&&!FX){FW=
false;FX=true;}else if((J_&&FX)&&!FW){FX=false;FW=true;}var I9=Dj+1;var Cp=A_.charCodeAt(
Dj)||0;var BB=I9;var Cb=(I9+Cp)-2;var LT=-1;var LU=-1;if(!this.HN&&(font.H8(A_,I9
,Cp-1)>LW)){var G5=Aw;if(((G5&0x2)===0x2)&&!!(G5&0x5))G5&=~0x2;if(((G5&0x2)===0x2
))G5&=~0x5;if(((G5&0x4)===0x4))DA=true;else if(((G5&0x2)===0x2)){DA=true;DB=true;
}else DB=true;}if((A_.charCodeAt(BB)||0)===0x0A)BB=BB+1;if((A_.charCodeAt(Cb)||0
)===0x0A)Cb=Cb-1;while(DA&&((A_.charCodeAt(BB)||0)===0xFEFF))BB=BB+1;while(DB&&((
A_.charCodeAt(Cb)||0)===0xFEFF))Cb=Cb-1;DA=DA&&!FX;DB=DB&&!FW;while((((DA||DB)||
FW)||FX)&&(BB<Cb)){if((DA&&(HZ||!DB))||FW){if(LT>0)A_=B.abQ(A_,LT,0xFEFF);A_=B.abQ(
A_,BB,0x2026);LT=BB;BB=BB+1;HZ=!HZ;FW=false;if(font.H8(A_,I9,Cp-1)<=LW){DA=false;
DB=false;}else DA=DA||!DB;}if((DB&&(!HZ||!DA))||FX){if(LU>0)A_=B.abQ(A_,LU,0xFEFF
);A_=B.abQ(A_,Cb,0x2026);LU=Cb;Cb=Cb-1;HZ=!HZ;FX=false;if(font.H8(A_,I9,Cp-1)<=LW
){DA=false;DB=false;}else DB=DB||!DA;}}Dj=Dj+Cp;}this.FY=[font.Mf(A_),((A_.charCodeAt(
0)||0)*J8)-leading];this.A7=A_;}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.
O);B.pe([this,this.L6],this);},Oa:function(C){if(C===this.Kt)return;this.Kt=C;this.
A7=B.jV;this.CG=false;B.pe([this,this.FT],this);},N$:function(C){if(C===this.Hm)
return;this.Hm=C;if(this.HN||C)this.F=this.F&~0x100;else this.F=this.F|0x100;this.
A7=B.jV;this.CG=false;B.pe([this,this.FT],this);},OE:function(C){if(C===this.HN)
return;this.HN=C;if(this.CG){this.A7=B.jV;this.CG=false;B.pe([this,this.FT],this
);}if(C||this.Hm)this.F=this.F&~0x100;else this.F=this.F|0x100;},Ht:function(C){
var A;if(C===this.ES)return;this.ES=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(
this.O);if(this.Hm){this.A7=B.jV;this.CG=false;B.pe([this,this.FT],this);}if(this.
CG)B.pe([this,this.L6],this);},Co:function(C){if(C===this.String)return;this.String=
C;this.A7=B.jV;this.CG=false;B.pe([this,this.FT],this);},FD:function(C){if(C===this.
BI)return;this.BI=C;this.A7=B.jV;this.CG=false;B.pe([this,this.FT],this);},A1:function(
C){var A;if(C===this.A$)return;this.A$=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ac(this.O);},Ba:function(C){var A;if(C>255)C=255;if(C<0)C=0;if(C===this.Cf)return;
this.Cf=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},W:function(C){if(
C)this.AD(0x1,0x0);else this.AD(0x0,0x1);},KF:function(){if(!this.CG)this.J6(this
);if(!this.C7)return false;var result=false;var bidi=this.C7;result=B.v2(bidi);return result;
},NZ:function(){if(!this.CG)this.J6(this);if(!this.C7)return false;var result=false;
var bidi=this.C7;result=B.zZ(bidi);return result;},KA:function(){var A;if((this.
String===B.jV)||!this.BI)return AS;if(!this.CG)this.J6(this);if(this.A7===B.jV)return AS;
var leading=this.BI.Leading;var J8=(this.BI.Ascent+this.BI.Descent)+this.BI.Leading;
if(B.aaX(this.FY,AH))this.FY=[this.BI.Mf(this.A7),this.FY[1]];this.FY=[this.FY[0
],((this.A7.charCodeAt(0)||0)*J8)-leading];var Aw=this.ES;var AU=this.O;var width=
AU[2]-AU[0];var height=AU[3]-AU[1];var AA=[0,0,width,height];var Am=[].concat(AA.
slice(0,2),B.abf(AA.slice(0,2),this.FY));if(((Aw&0x80)===0x80)){if(this.KF())Aw=(
Aw&~0x80)|0x4;else Aw=(Aw&~0x80)|0x1;}if(((Aw&0x40)===0x40)){var EQ;EQ=width;if(
EQ<0)EQ=0;if(EQ>(Am[2]-Am[0]))Am=B.abL(Am,EQ);}if((!!(Aw&0x110)&&!!(Aw&0x28))&&((
Am[3]-Am[1])>(AA[3]-AA[1])))Aw&=~0x110;if(!!(Aw&0x110))Aw&=~0x28;if((((Aw&0x2)===
0x2)&&!!(Aw&0x5))&&((Am[2]-Am[0])>(AA[2]-AA[0])))Aw&=~0x2;if(((Aw&0x2)===0x2))Aw&=
~0x5;if((Am[2]-Am[0])!==(AA[2]-AA[0])){if(((Aw&0x4)===0x4))Am=B.abM(Am,AA[2]-(Am[
2]-Am[0]));else if(((Aw&0x2)===0x2))Am=B.abM(Am,(AA[0]+(((AA[2]-AA[0])/2)|0))-(((
Am[2]-Am[0])/2)|0));}if((Am[3]-Am[1])!==(AA[3]-AA[1])){if(((Aw&0x20)===0x20))Am=
B.abO(Am,AA[3]-(Am[3]-Am[1]));else if(((Aw&0x100)===0x100))Am=B.abO(Am,((AA[1]+(((
AA[3]-AA[1])/2)|0))-(((Am[3]-Am[1])/2)|0))+(((this.BI.Descent-this.BI.Ascent)/2)|
0));else if(((Aw&0x10)===0x10))Am=B.abO(Am,(AA[1]+(((AA[3]-AA[1])/2)|0))-(((Am[3
]-Am[1])/2)|0));}Am=B.abh(Am,AU.slice(0,2));return Am;},KY:function(){return this.
A$;},_Init:function(aArg){B.Core.AO._Init.call(this,aArg);this.__proto__=D.Text;
},_Done:function(){this.C3();this.__proto__=B.Core.AO;B.Core.AO._Done.call(this);
},_Mark:function(E){var A;B.Core.AO._Mark.call(this,E);if((A=this.BI)&&(A._cycle
!=E))A._Mark(A._cycle=E);},_className:"Views::Text"};D.HM={Fj:B.wf,Au:B.abi(4,3,
0,null),K_:B.wf,Dk:0,Hd:0,B6:function(C){if(B.aaX(C,this.BA))return;B.Core.Ee.B6.
call(this,C);this.Au.Set(3,0,C[0]);this.Au.Set(3,1,C[1]);this.Au.Set(3,2,1);this.
Dk=0x45;B.pe([this,this.H0],this);},B5:function(C){if(B.aaX(C,this.B8))return;B.
Core.Ee.B5.call(this,C);this.Au.Set(2,0,C[0]);this.Au.Set(2,1,C[1]);this.Au.Set(
2,2,1);this.Dk=0x45;B.pe([this,this.H0],this);},B4:function(C){if(B.aaX(C,this.Bz
))return;B.Core.Ee.B4.call(this,C);this.Au.Set(1,0,C[0]);this.Au.Set(1,1,C[1]);this.
Au.Set(1,2,1);this.Dk=0x45;B.pe([this,this.H0],this);},B3:function(C){if(B.aaX(C
,this.B7))return;B.Core.Ee.B3.call(this,C);this.Au.Set(0,0,C[0]);this.Au.Set(0,1
,C[1]);this.Au.Set(0,2,1);this.Dk=0x45;B.pe([this,this.H0],this);},MW:function(){
return;},H0:function(Ap){var A;if(this.Dk===0x00)return;if(this.Dk===0x45){var C1=
B._NewObject(B.Graphics.Mx,0);C1=C1.NP(this.Au.Get(0,0),this.Au.Get(0,1),this.Au.
Get(1,0),this.Au.Get(1,1),this.Au.Get(2,0),this.Au.Get(2,1),this.Au.Get(3,0),this.
Au.Get(3,1));if(!!C1){C1.Jd(0,0);this.Au.Set(0,2,C1.Iw*240);C1.Jd(1,0);this.Au.Set(
1,2,C1.Iw*240);C1.Jd(1,1);this.Au.Set(2,2,C1.Iw*240);C1.Jd(0,1);this.Au.Set(3,2,
C1.Iw*240);}this.MW();}this.Hd=this.Dk;this.Dk=0x00;if(!!this.G&&((this.F&0x1)===
0x1))this.G.Ac(this.GetClipping());},Om:function(C){if(B.aaX(C,this.K_))return;this.
K_=C;if((this.Hd!==0x45)&&(this.Dk===0x00)){this.Dk=this.Hd;B.pe([this,this.H0],
this);}},OI:function(MK,aAngle,MO,MP){var A;if(!this.Fj[0]||!this.Fj[1])return;var
Kd=[].concat(AH,this.Fj);var Kc=this.K_;var M6=(Kd[0]-Kc[0])*MO;var I=(Kd[2]-Kc[
0])*MO;var Ns=(Kd[1]-Kc[1])*MP;var MQ=(Kd[3]-Kc[1])*MP;var JR=Math.cos(aAngle*B.
k$);var Kb=Math.sin(aAngle*B.k$);var M7=M6*JR;var M8=M6*Kb;var Nk=I*JR;var Nl=I*
Kb;var Nt=Ns*JR;var Nu=Ns*Kb;var MR=MQ*JR;var MS=MQ*Kb;var JU=MK[0];var JV=MK[1];
this.Au.Set(0,0,(JU+M7)+Nu);this.Au.Set(0,1,(JV-M8)+Nt);this.Au.Set(1,0,(JU+Nk)+
Nu);this.Au.Set(1,1,(JV-Nl)+Nt);this.Au.Set(2,0,(JU+Nk)+MS);this.Au.Set(2,1,(JV-
Nl)+MR);this.Au.Set(3,0,(JU+M7)+MS);this.Au.Set(3,1,(JV-M8)+MR);this.Au.Set(0,2,
1);this.Au.Set(1,2,1);this.Au.Set(2,2,1);this.Au.Set(3,2,1);if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.GetClipping());this.B7=[(this.Au.Get(0,0)+0.5)|0,(this.
Au.Get(0,1)+0.5)|0];this.Bz=[(this.Au.Get(1,0)+0.5)|0,(this.Au.Get(1,1)+0.5)|0];
this.B8=[(this.Au.Get(2,0)+0.5)|0,(this.Au.Get(2,1)+0.5)|0];this.BA=[(this.Au.Get(
3,0)+0.5)|0,(this.Au.Get(3,1)+0.5)|0];this.Hd=0x45;this.Dk=0x00;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.GetClipping());this.MW();},_Init:function(aArg){B.Core.
Ee._Init.call(this,aArg);(this.Au=[]).__proto__=D.HM.Au;this.__proto__=D.HM;this.
F=0x3;},_className:"Views::WarpView"};D.Lm={timer:null,Q:null,AJ:0,AP:0,A$:0xFFFFFFFF
,BR:false,Cs:function(AK,aClip,aOffset,Az,aBlend){var A;var AL=0;if(this.AP>=0)AL=
this.AP;if(!this.Q||(AL>=this.Q.NoOfFrames))return;this.Q.Update();var IG;var IH;
var II;var IJ;var Ah=this.A$;var Bc=(((Az+1)*255)>>8)+1;var J2=aOffset[0];var J3=
aOffset[1];var V=[].concat(AH,this.Fj);aBlend=aBlend&&((this.F&0x2)===0x2);IG=IH=
II=IJ=Ah;if(Bc<256){IG=(IG&0x00FFFFFF)|((((((IG>>24)&0xFF)*Bc)>>8)&0xFF)<<24);IH=(
IH&0x00FFFFFF)|((((((IH>>24)&0xFF)*Bc)>>8)&0xFF)<<24);II=(II&0x00FFFFFF)|((((((II>>
24)&0xFF)*Bc)>>8)&0xFF)<<24);IJ=(IJ&0x00FFFFFF)|((((((IJ>>24)&0xFF)*Bc)>>8)&0xFF
)<<24);}aClip=B.aaV(aClip,B.abh(AS,aOffset));AK.OQ(aClip,this.Q,AL,this.Au.Get(0
,0)+J2,this.Au.Get(0,1)+J3,this.Au.Get(0,2),this.Au.Get(1,0)+J2,this.Au.Get(1,1)+
J3,this.Au.Get(1,2),this.Au.Get(2,0)+J2,this.Au.Get(2,1)+J3,this.Au.Get(2,2),this.
Au.Get(3,0)+J2,this.Au.Get(3,1)+J3,this.Au.Get(3,2),V,IG,IH,II,IJ,aBlend,true);}
,D0:function(Ap){var A;var Nc=this.Fj;if(!!this.Q)this.Fj=this.Q.FrameSize;else this.
Fj=AH;if(((B.aaX(Nc,this.Fj)||((this.Hd===0x45)&&(this.Dk===0x00)))&&!!this.G)&&((
this.F&0x1)===0x1))this.G.Ac(this.GetClipping());if(((this.Hd!==0x45)&&(this.Dk===
0x00))&&!B.aaX(Nc,this.Fj)){this.Dk=this.Hd;B.pe([this,this.H0],this);}},BH:function(
Ap){var A;var AL=this.AP;var Bl=0;if(!!this.Q)Bl=this.Q.NoOfFrames*this.Q.FrameDelay;
if((!!this.timer&&(this.AP<0))&&(Bl>0))this.AJ=this.timer.Ax;if(!!this.timer&&(Bl>
0)){var Al=(this.timer.Ax-this.AJ)|0;AL=(Al/this.Q.FrameDelay)|0;if(Al>=Bl){AL=AL
%this.Q.NoOfFrames;this.AJ=this.timer.Ax-(Al%Bl);}}if(((AL!==this.AP)&&!!this.G)&&((
this.F&0x1)===0x1))this.G.Ac(this.GetClipping());this.AP=AL;if(!Bl&&!!this.timer
){B.z9([this,this.BH],this.timer,0);this.timer=null;}},CS:function(C){var A;if(this.
BR===C)return;this.BR=C;this.AP=-1;if(!C&&!!this.timer){B.z9([this,this.BH],this.
timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(B.aci.E5);B.zV([this
,this.BH],this.timer,0);B.pe([this,this.BH],this);}if(!!this.G&&((this.F&0x1)===
0x1))this.G.Ac(this.GetClipping());},A1:function(C){var A;if(C===this.A$)return;
this.A$=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping());},AN:function(
C){if(C===this.Q)return;if(!!this.Q&&this.Q.Ey)B.z9([this,this.D0],this.Q,0);this.
Q=C;this.AP=-1;if(!!C&&C.Ey)B.zV([this,this.D0],C,0);if(this.BR){this.CS(false);
this.CS(true);}this.D0(this);},_Init:function(aArg){D.HM._Init.call(this,aArg);this.
__proto__=D.Lm;},_Mark:function(E){var A;D.HM._Mark.call(this,E);if((A=this.timer
)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Q)&&(A._cycle!=E))A._Mark(A._cycle=
E);},_className:"Views::WarpImage"};D.Im={C4:null,A$:0xFFFFFFFF,Dt:B.wf,Width:1,
C3:function(){this.Qj();},Cs:function(AK,aClip,aOffset,Az,aBlend){if(!this.C4)return;
var Z;var Ag;var Ae;var Af;var Ah=this.A$;Az=Az+1;Z=Ag=Ae=Af=Ah;if(Az<256){Z=(Z&
0x00FFFFFF)|((((Az*((Z>>24)&0xFF))>>8)&0xFF)<<24);Ag=(Ag&0x00FFFFFF)|((((Az*((Ag>>
24)&0xFF))>>8)&0xFF)<<24);Ae=(Ae&0x00FFFFFF)|((((Az*((Ae>>24)&0xFF))>>8)&0xFF)<<
24);Af=(Af&0x00FFFFFF)|((((Az*((Af>>24)&0xFF))>>8)&0xFF)<<24);}AK.Im(aClip,this.
C4,B.abh(this.O,aOffset),false,this.Dt,this.Width,0,0,0,3,Z,Ag,Af,Ae,true,true);
},Qj:function(){return;},Ny:function(Ap){var A;if(!!this.G&&((this.F&0x1)===0x1)
)this.G.Ac(this.O);},A1:function(C){var A;if(C===this.A$)return;this.A$=C;if((!!
this.G&&((this.F&0x1)===0x1))&&!!this.C4)this.G.Ac(this.O);},Oi:function(C){var A;
if(B.aaX(C,this.Dt))return;this.Dt=C;if((!!this.G&&((this.F&0x1)===0x1))&&!!this.
C4)this.G.Ac(this.O);},K7:function(C){var A;if(C<0)C=0;if(C===this.Width)return;
this.Width=C;if((!!this.G&&((this.F&0x1)===0x1))&&!!this.C4)this.G.Ac(this.O);},
Oj:function(C){var A;if(C===this.C4)return;if(!!this.C4)B.z9([this,this.Ny],this.
C4,0);this.C4=C;if(!!this.C4)B.zV([this,this.Ny],this.C4,0);if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.O);},_Init:function(aArg){B.Core.AO._Init.call(this
,aArg);this.__proto__=D.Im;},_Done:function(){this.C3();this.__proto__=B.Core.AO;
B.Core.AO._Done.call(this);},_Mark:function(E){var A;B.Core.AO._Mark.call(this,E
);if((A=this.C4)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Views::StrokePath"
};D.Q5={NF:0x1,NE:0x2,NG:0x4,NJ:0x8,NI:0x10,NH:0x20,Rw:0x40,Rx:0x80,Rz:0x100};D.
RA={NF:0x1,NE:0x2,NG:0x4,NJ:0x8,NI:0x10,NH:0x20,QJ:0x40,QI:0x80,QO:0x100};D.Re={
Rd:0,Ru:1,Rs:2,Rt:3};
D._Init=function(){D.Fc.__proto__=B.Core.AO;D.CJ.__proto__=B.Core.AO;D.Hq.__proto__=
B.Core.AO;D.AX.__proto__=B.Core.AO;D.JC.__proto__=B.Core.AO;D.Text.__proto__=B.Core.
AO;D.HM.__proto__=B.Core.Ee;D.Lm.__proto__=D.HM;D.Im.__proto__=B.Core.AO;};D._ReInit=
function(){};D.Ci=function(E){};return D;})();

/* Embedded Wizard */