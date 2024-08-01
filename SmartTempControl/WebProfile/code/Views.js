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
D.Fc={F$:0xFFFFFFFF,Ga:0xFFFFFFFF,Gb:0xFFFFFFFF,D2:0xFFFFFFFF,A$:0xFFFFFFFF,Cr:function(
AK,aClip,aOffset,Az,aBlend){var A;var Z=this.D2;var Ag=this.Gb;var Ae=this.F$;var
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
G.Ac(this.O);},GA:function(C){var A;if(C===this.D2)return;this.D2=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ac(this.O);},A1:function(C){var A;if(C===this.A$)return;
this.A$=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},N9:function(C){if(
C)this.AD(0x2,0x0);else this.AD(0x0,0x2);},W:function(C){if(C)this.AD(0x1,0x0);else
this.AD(0x0,0x1);},KY:function(){return this.A$;},_Init:function(aArg){B.Core.AO.
_Init.call(this,aArg);this.__proto__=D.Fc;},_className:"Views::Rectangle"};D.CI={
Width:1,F$:0xFFFFFFFF,Ga:0xFFFFFFFF,Gb:0xFFFFFFFF,D2:0xFFFFFFFF,A$:0xFFFFFFFF,Cr:
function(AK,aClip,aOffset,Az,aBlend){var A;var Z=this.D2;var Ag=this.Gb;var Ae=this.
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
)|((((Az*((Af>>24)&0xFF))>>8)&0xFF)<<24);}AK.NR(aClip,B.abh(this.O,aOffset),this.
Width,Z,Ag,Af,Ae,aBlend);},K7:function(C){var A;if(C<0)C=0;if(C===this.Width)return;
this.Width=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},Js:function(C
){var A;if(C===this.F$)return;this.F$=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.
Ac(this.O);},Jt:function(C){var A;if(C===this.Ga)return;this.Ga=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ac(this.O);},Id:function(C){var A;if(C===this.Gb)return;
this.Gb=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},GA:function(C){var
A;if(C===this.D2)return;this.D2=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.
O);},A1:function(C){var A;if(C===this.A$)return;this.A$=C;if(!!this.G&&((this.F&
0x1)===0x1))this.G.Ac(this.O);},_Init:function(aArg){B.Core.AO._Init.call(this,aArg
);this.__proto__=D.CI;},_className:"Views::Border"};D.Hq={timer:null,Q:null,AP:-
1,A$:0xFFFFFFFF,H6:0x1F,Ev:0,AJ:0,Gx:B.wf,BR:false,Cr:function(AK,aClip,aOffset,
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
slice(0,3),(I[3]+d)-((d/2)|0));}Cj=Cj|0xA;}}AK.NQ(aClip,this.Q,AL,I,Cj,Z,Ag,Af,Ae
,aBlend);},DZ:function(Ap){var A;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.
O);},BH:function(Ap){var A;var AL=this.AP;var Bl=0;if(!!this.Q)Bl=this.Q.NoOfFrames
*this.Q.FrameDelay;if((!!this.timer&&(this.AP<0))&&(Bl>0))this.AJ=this.timer.Ax-(
this.Ev*this.Q.FrameDelay);if(!!this.timer&&(Bl>0)){var Al=(this.timer.Ax-this.AJ
)|0;AL=(Al/this.Q.FrameDelay)|0;if(Al>=Bl){AL=AL%this.Q.NoOfFrames;this.AJ=this.
timer.Ax-(Al%Bl);}}if(((AL!==this.AP)&&!!this.G)&&((this.F&0x1)===0x1))this.G.Ac(
this.O);this.AP=AL;if(!Bl&&!!this.timer){B.z9([this,this.BH],this.timer,0);this.
timer=null;}},A1:function(C){var A;if(C===this.A$)return;this.A$=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ac(this.O);},CQ:function(C){var A;if(this.BR===C)return;
this.BR=C;this.AP=-1;if(!C&&!!this.timer){B.z9([this,this.BH],this.timer,0);this.
timer=null;}if(C){this.timer=B._GetAutoObject(B.aci.E5);B.zV([this,this.BH],this.
timer,0);B.pe([this,this.BH],this);}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(
this.O);},Ml:function(C){var A;if(C===this.H6)return;this.H6=C;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.O);},Cn:function(C){var A;if(C<0)C=0;if((C===this.Ev
)&&(this.AP===-1))return;this.Ev=C;if(!this.timer)this.AP=-1;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.O);},AN:function(C){var A;if(C===this.Q)return;if(!
!this.Q&&this.Q.Ey)B.z9([this,this.DZ],this.Q,0);this.Q=C;this.AP=-1;if(!!C&&C.Ey
)B.zV([this,this.DZ],C,0);if(this.BR){this.CQ(false);this.CQ(true);}if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ac(this.O);},W:function(C){if(C)this.AD(0x1,0x0);else this.
AD(0x0,0x1);},Mo:function(C){var A;if(C[0]<0)C=[0,C[1]];if(C[1]<0)C=[C[0],0];if(
B.aaX(C,this.Gx))return;this.Gx=C;if((!!this.G&&((this.F&0x1)===0x1))&&!((this.H6&
0xF)===0xF))this.G.Ac(this.O);},_Init:function(aArg){B.Core.AO._Init.call(this,aArg
);this.__proto__=D.Hq;},_Mark:function(E){var A;B.Core.AO._Mark.call(this,E);if((
A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Q)&&(A._cycle!=E))A.
_Mark(A._cycle=E);},_className:"Views::Frame"};D.AX={timer:null,Q:null,AJ:0,AP:0
,D2:0xFFFFFFFF,A$:0xFFFFFFFF,ES:0x12,Ev:0,Cf:255,BR:false,Cr:function(AK,aClip,aOffset
,Az,aBlend){var A;var AL=this.Ev;if(this.AP>=0)AL=this.AP;if(!this.Q||(AL>=this.
Q.NoOfFrames))return;this.Q.Update();var V=this.KA();var Cp=this.Q.FrameSize;if((
V[0]>=V[2])||(V[1]>=V[3]))return;var Z=this.D2;var Ag=0xFFFFFFFF;var Af=0xFFFFFFFF;
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
)|((((((Ae>>24)&0xFF)*Bc)>>8)&0xFF)<<24);}if(B.aaX([V[2]-V[0],V[3]-V[1]],Cp))AK.
NM(aClip,this.Q,AL,B.abh(this.O,aOffset),B.abe(this.O.slice(0,2),V.slice(0,2)),Z
,Ag,Af,Ae,aBlend);else AK.OJ(aClip,this.Q,AL,B.abh(V,aOffset),[].concat(AH,Cp),Z
,Ag,Af,Ae,aBlend,true);},DZ:function(Ap){var A;if(!!this.G&&((this.F&0x1)===0x1)
)this.G.Ac(this.O);},BH:function(Ap){var A;var AL=this.AP;var Bl=0;if(!!this.Q)Bl=
this.Q.NoOfFrames*this.Q.FrameDelay;if((!!this.timer&&(this.AP<0))&&(Bl>0))this.
AJ=this.timer.Ax-(this.Ev*this.Q.FrameDelay);if(!!this.timer&&(Bl>0)){var Al=(this.
timer.Ax-this.AJ)|0;AL=(Al/this.Q.FrameDelay)|0;if(Al>=Bl){AL=AL%this.Q.NoOfFrames;
this.AJ=this.timer.Ax-(Al%Bl);}}if(((AL!==this.AP)&&!!this.G)&&((this.F&0x1)===0x1
))this.G.Ac(this.O);this.AP=AL;if(!Bl&&!!this.timer){B.z9([this,this.BH],this.timer
,0);this.timer=null;}},GA:function(C){var A;if(C===this.D2)return;this.D2=C;if(!
!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},A1:function(C){var A;if(C===this.
A$)return;this.A$=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},CQ:function(
C){var A;if(this.BR===C)return;this.BR=C;this.AP=-1;if(!C&&!!this.timer){B.z9([this
,this.BH],this.timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(B.aci.
E5);B.zV([this,this.BH],this.timer,0);B.pe([this,this.BH],this);}if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ac(this.O);},Ht:function(C){var A;if(C===this.ES)return;
this.ES=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},Cn:function(C){var
A;if(C<0)C=0;if((C===this.Ev)&&(this.AP===-1))return;this.Ev=C;if(!this.timer)this.
AP=-1;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},AN:function(C){var A;
if(C===this.Q)return;if(!!this.Q&&this.Q.Ey)B.z9([this,this.DZ],this.Q,0);this.Q=
C;this.AP=-1;if(!!C&&C.Ey)B.zV([this,this.DZ],C,0);if(this.BR){this.CQ(false);this.
CQ(true);}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},Ba:function(C){var
A;if(C>255)C=255;if(C<0)C=0;if(C===this.Cf)return;this.Cf=C;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.O);},W:function(C){if(C)this.AD(0x1,0x0);else this.
AD(0x0,0x1);},KA:function(){var A;if(!this.Q)return AS;var Aw=this.ES;var Cp=this.
Q.FrameSize;var AU=this.O;var width=AU[2]-AU[0];var height=AU[3]-AU[1];if(!Cp[0]||
!Cp[1])return AS;var AA=[0,0,width,height];var Am=AA;if(((Aw&0x40)===0x40)){var L9=((((
AA[2]-AA[0])<<16)+((Cp[0]/2)|0))/Cp[0])|0;var I8=((((AA[3]-AA[1])<<16)+((Cp[1]/2
)|0))/Cp[1])|0;var Fq=L9;if(I8>Fq)Fq=I8;Am=B.abL(Am,((Cp[0]*Fq)+32768)>>16);Am=B.
abI(Am,((Cp[1]*Fq)+32768)>>16);}else if(((Aw&0x80)===0x80)){var L9=((((AA[2]-AA[
0])<<16)+((Cp[0]/2)|0))/Cp[0])|0;var I8=((((AA[3]-AA[1])<<16)+((Cp[1]/2)|0))/Cp[
1])|0;var Fq=L9;if(I8<Fq)Fq=I8;Am=B.abL(Am,((Cp[0]*Fq)+32768)>>16);Am=B.abI(Am,((
Cp[1]*Fq)+32768)>>16);}else if(!((Aw&0x100)===0x100))Am=B.abK(Am,Cp);if((Am[2]-Am[
0])!==(AA[2]-AA[0])){if(((Aw&0x4)===0x4))Am=B.abM(Am,AA[2]-(Am[2]-Am[0]));else if(((
Aw&0x2)===0x2))Am=B.abM(Am,(AA[0]+(((AA[2]-AA[0])/2)|0))-(((Am[2]-Am[0])/2)|0));
}if((Am[3]-Am[1])!==(AA[3]-AA[1])){if(((Aw&0x20)===0x20))Am=B.abO(Am,AA[3]-(Am[3
]-Am[1]));else if(((Aw&0x10)===0x10))Am=B.abO(Am,(AA[1]+(((AA[3]-AA[1])/2)|0))-(((
Am[3]-Am[1])/2)|0));}Am=B.abh(Am,AU.slice(0,2));return Am;},_Init:function(aArg){
B.Core.AO._Init.call(this,aArg);this.__proto__=D.AX;},_Mark:function(E){var A;B.
Core.AO._Mark.call(this,E);if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);
if((A=this.Q)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Views::Image"};D.
JC={timer:null,Q:null,AP:0,Cf:255,AJ:0,BR:false,Cr:function(AK,aClip,aOffset,Az,
aBlend){var A;var AL=0;if(this.AP>=0)AL=this.AP;if(!this.Q||(AL>=this.Q.NoOfFrames
))return;this.Q.Update();var Z;var Ag;var Af;var Ae;var Bc=(((Az+1)*this.Cf)>>8)+
1;aBlend=aBlend&&((this.F&0x2)===0x2);Z=Ag=Ae=Af=0xFFFFFFFF;if(Bc<256){Z=(Z&0x00FFFFFF
)|((((255*Bc)>>8)&0xFF)<<24);Ag=(Ag&0x00FFFFFF)|((((255*Bc)>>8)&0xFF)<<24);Af=(Af&
0x00FFFFFF)|((((255*Bc)>>8)&0xFF)<<24);Ae=(Ae&0x00FFFFFF)|((((255*Bc)>>8)&0xFF)<<
24);}AK.OO(aClip,this.Q,AL,B.abh(this.O,aOffset),[].concat(AH,this.Q.FrameSize),
AH,Z,Ag,Af,Ae,aBlend);},DZ:function(Ap){var A;if(!!this.G&&((this.F&0x1)===0x1))
this.G.Ac(this.O);},BH:function(Ap){var A;var AL=this.AP;var Bl=0;if(!!this.Q)Bl=
this.Q.NoOfFrames*this.Q.FrameDelay;if((!!this.timer&&(this.AP<0))&&(Bl>0))this.
AJ=this.timer.Ax;if(!!this.timer&&(Bl>0)){var Al=(this.timer.Ax-this.AJ)|0;AL=(Al
/this.Q.FrameDelay)|0;if(Al>=Bl){AL=AL%this.Q.NoOfFrames;this.AJ=this.timer.Ax-(
Al%Bl);}}if(((AL!==this.AP)&&!!this.G)&&((this.F&0x1)===0x1))this.G.Ac(this.O);this.
AP=AL;if(!Bl&&!!this.timer){B.z9([this,this.BH],this.timer,0);this.timer=null;}}
,CQ:function(C){var A;if(this.BR===C)return;this.BR=C;this.AP=-1;if(!C&&!!this.timer
){B.z9([this,this.BH],this.timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(
B.aci.E5);B.zV([this,this.BH],this.timer,0);B.pe([this,this.BH],this);}if(!!this.
G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},AN:function(C){var A;if(C===this.Q)return;
if(!!this.Q&&this.Q.Ey)B.z9([this,this.DZ],this.Q,0);this.Q=C;this.AP=-1;if(!!C&&
C.Ey)B.zV([this,this.DZ],C,0);if(this.BR){this.CQ(false);this.CQ(true);}if(!!this.
G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},Ba:function(C){var A;if(C>255)C=255;
if(C<0)C=0;if(C===this.Cf)return;this.Cf=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ac(this.O);},W:function(C){if(C)this.AD(0x1,0x0);else this.AD(0x0,0x1);},Hr:function(
){return this.Cf;},_Init:function(aArg){B.Core.AO._Init.call(this,aArg);this.__proto__=
D.JC;},_Mark:function(E){var A;B.Core.AO._Mark.call(this,E);if((A=this.timer)&&(
A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Q)&&(A._cycle!=E))A._Mark(A._cycle=E
);},_className:"Views::Wallpaper"};D.Text={BI:null,A7:B.jV,String:B.jV,C6:null,FY:
B.wf,ES:0x12,A$:0xFFFFFFFF,Cf:255,HN:false,Hm:false,Kt:false,CF:false,C2:function(
){if(!!this.C6){this.LO(this.C6);this.C6=null;}},Cr:function(AK,aClip,aOffset,Az
,aBlend){var A;if((this.A7===B.jV)||!this.BI)return;var Aw=this.ES;var font=this.
BI;var AA=B.abh(this.O,aOffset);var Z;var Ag;var Af;var Ae;var Qd=this.A$;var Bc=(((
Az+1)*this.Cf)>>8)+1;var El=this.A7.charCodeAt(0)||0;var V=B.abh(this.KA(),aOffset
);var Na=[AA[0]-V[0],(AA[1]-V[1])-font.Ascent];if(El<1)return;Z=Ag=Ae=Af=Qd;if(Bc<
256){Z=(Z&0x00FFFFFF)|((((((Z>>24)&0xFF)*Bc)>>8)&0xFF)<<24);Ag=(Ag&0x00FFFFFF)|((((((
Ag>>24)&0xFF)*Bc)>>8)&0xFF)<<24);Af=(Af&0x00FFFFFF)|((((((Af>>24)&0xFF)*Bc)>>8)&
0xFF)<<24);Ae=(Ae&0x00FFFFFF)|((((((Ae>>24)&0xFF)*Bc)>>8)&0xFF)<<24);}if(((Aw&0x80
)===0x80)){if(this.KF())Aw=(Aw&~0x80)|0x4;else Aw=(Aw&~0x80)|0x1;}if((El===1)&&!((
Aw&0x40)===0x40)){AK.Md(aClip,font,this.A7,2,(this.A7.charCodeAt(1)||0)-1,AA,Na,
0,0,Z,Ag,Af,Ae,true);return;}var leading=font.Leading;var L8=(font.Ascent+font.Descent
)+leading;var Qb=aClip[1]-V[1];var Qc=aClip[3]-V[1];var LF=V[2]-V[0];var BQ=0;var
L=1;var Ah=this.A7.charCodeAt(1)||0;while(((BQ+L8)<Qb)&&(Ah>0)){L=L+Ah;BQ=BQ+L8;
Ah=this.A7.charCodeAt(L)||0;}while((BQ<Qc)&&(Ah>0)){var Hc=B.abe(Na,[0,BQ]);var Nn=
0;var JZ=false;if(((((Aw&0x40)===0x40)&&((this.A7.charCodeAt((L+Ah)-1)||0)!==0x0A
))&&((this.A7.charCodeAt(L+1)||0)!==0x0A))&&((this.A7.charCodeAt(L+Ah)||0)!==0x00
))JZ=true;if(JZ&&!!(Aw&0x6)){var Nm=L+Ah;var MT=this.A7.indexOf(String.fromCharCode(
0x20),L+1);var MU=this.A7.indexOf(String.fromCharCode(0xA0),L+1);if(((MT<0)||(MT>=
Nm))&&((MU<0)||(MU>=Nm)))JZ=false;}if(JZ)Nn=LF;else if(((Aw&0x4)===0x4))Hc=[(Hc[
0]-LF)+font.H8(this.A7,L+1,Ah-1),Hc[1]];else if(((Aw&0x2)===0x2))Hc=[(Hc[0]-((LF
/2)|0))+((font.H8(this.A7,L+1,Ah-1)/2)|0),Hc[1]];AK.Md(aClip,font,this.A7,L+1,Ah-
1,AA,Hc,Nn,0,Z,Ag,Af,Ae,true);L=L+Ah;BQ=BQ+L8;Ah=this.A7.charCodeAt(L)||0;}},N:function(
C){var A;if(B.aaY(C,this.O))return;var Nl;Nl=((A=this.O)[2]-A[0])!==(C[2]-C[0]);
if(((Nl&&this.HN)&&this.CF)&&!((this.F&0x2000)===0x2000)){this.A7=B.jV;this.CF=false;
B.pe([this,this.FT],this);}if(((this.Hm&&this.CF)&&!B.aaX([(A=this.O)[2]-A[0],A[
3]-A[1]],[C[2]-C[0],C[3]-C[1]]))&&!((this.F&0x2000)===0x2000)){this.A7=B.jV;this.
CF=false;B.pe([this,this.FT],this);}B.Core.AO.N.call(this,C);B.pe([this,this.L6]
,this);},LO:function(aBidi){if(!aBidi)return;B.rB(aBidi);},Qf:function(aSize){var
bidi=null;bidi=B.v3(aSize);return bidi;},L6:function(Ap){},FT:function(Ap){B.pe([
this,this.J6],this);},J6:function(Ap){var A;if(this.CF)return;var width=(A=this.
O)[2]-A[0];var height=(A=this.O)[3]-A[1];var EQ=-1;var font=this.BI;if((!!font&&
!!!font.Ascent)&&!!!font.Descent)font=null;if(this.HN){EQ=width;if(EQ<0)EQ=1;}if(
!!this.C6){this.LO(this.C6);this.C6=null;}this.CF=true;if((this.String!==B.jV)&&
!!font){var length=this.String.length;if(this.Kt)this.C6=this.Qf(length);this.A7=
font.OE(this.String,0,EQ,length,this.C6);if(!!this.C6&&!this.NY()){this.LO(this.
C6);this.C6=null;}}else this.A7=B.jV;this.FY=AH;if((this.Hm&&(this.A7!==B.jV))&&
!!font){var Aw=this.ES;var leading=font.Leading;var A_=this.A7;var J_=this.KF();
if(((Aw&0x80)===0x80)){if(J_)Aw=(Aw&~0x80)|0x4;else Aw=(Aw&~0x80)|0x1;}var J8=(font.
Ascent+font.Descent)+leading;var El=A_.charCodeAt(0)||0;var FQ=((height+leading)
/J8)|0;var LI=false;var JQ=false;if(FQ<=0)FQ=1;if(El>FQ){var D0=0;var I7=0;var J9=
El-1;var BA;var Cb=A_.length;var tmp=B.jV;if(!!(Aw&0x110)&&!!(Aw&0x28))Aw&=~0x110;
if(!!(Aw&0x110))Aw&=~0x28;if(((Aw&0x20)===0x20))I7=El-FQ;else if(((Aw&0x10)===0x10
)||((Aw&0x100)===0x100)){I7=((El-FQ)/2)|0;J9=(I7+FQ)-1;}else J9=FQ-1;LI=I7>0;JQ=
J9<(El-1);for(BA=1;D0<I7;D0=D0+1)BA=BA+(A_.charCodeAt(BA)||0);if(JQ)for(Cb=BA;D0<
J9;D0=D0+1)Cb=Cb+(A_.charCodeAt(Cb)||0);if(LI){var Co=A_.charCodeAt(BA)||0;tmp=(
Ca+B.abW(A_,BA,Co))+Ca;tmp=B.abQ(tmp,0,(Co+2)&0xFFFF);BA=BA+Co;if((tmp.charCodeAt(
Co)||0)===0x0A){tmp=B.abQ(tmp,Co,0xFEFF);tmp=B.abQ(tmp,Co+1,0x0A);}if((tmp.charCodeAt(
2)||0)===0x0A){tmp=B.abQ(tmp,2,0xFEFF);tmp=B.abQ(tmp,1,0x0A);}else tmp=B.abQ(tmp
,1,0xFEFF);}tmp=tmp+B.abW(A_,BA,Cb-BA);if(JQ&&(Cb>=BA)){var Co=A_.charCodeAt(Cb)||
0;var CH=(Ca+B.abW(A_,Cb,Co))+Ca;CH=B.abQ(CH,0,(Co+2)&0xFFFF);CH=B.abQ(CH,1,0xFEFF
);if((CH.charCodeAt(Co)||0)===0x0A){CH=B.abQ(CH,Co,0xFEFF);CH=B.abQ(CH,Co+1,0x0A
);}if((CH.charCodeAt(2)||0)===0x0A){CH=B.abQ(CH,2,0xFEFF);CH=B.abQ(CH,1,0x0A);}else
CH=B.abQ(CH,1,0xFEFF);tmp=tmp+CH;}A_=String.fromCharCode(FQ&0xFFFF)+tmp;}var D0=
0;var Dj=1;var LW=width;El=A_.charCodeAt(0)||0;for(;D0<El;D0=D0+1){var FW=LI&&!D0;
var FX=JQ&&(D0===(El-1));var Dz=false;var DA=false;var HZ=J_;if((J_&&FW)&&!FX){FW=
false;FX=true;}else if((J_&&FX)&&!FW){FX=false;FW=true;}var I9=Dj+1;var Co=A_.charCodeAt(
Dj)||0;var BA=I9;var Cb=(I9+Co)-2;var LT=-1;var LU=-1;if(!this.HN&&(font.H8(A_,I9
,Co-1)>LW)){var G5=Aw;if(((G5&0x2)===0x2)&&!!(G5&0x5))G5&=~0x2;if(((G5&0x2)===0x2
))G5&=~0x5;if(((G5&0x4)===0x4))Dz=true;else if(((G5&0x2)===0x2)){Dz=true;DA=true;
}else DA=true;}if((A_.charCodeAt(BA)||0)===0x0A)BA=BA+1;if((A_.charCodeAt(Cb)||0
)===0x0A)Cb=Cb-1;while(Dz&&((A_.charCodeAt(BA)||0)===0xFEFF))BA=BA+1;while(DA&&((
A_.charCodeAt(Cb)||0)===0xFEFF))Cb=Cb-1;Dz=Dz&&!FX;DA=DA&&!FW;while((((Dz||DA)||
FW)||FX)&&(BA<Cb)){if((Dz&&(HZ||!DA))||FW){if(LT>0)A_=B.abQ(A_,LT,0xFEFF);A_=B.abQ(
A_,BA,0x2026);LT=BA;BA=BA+1;HZ=!HZ;FW=false;if(font.H8(A_,I9,Co-1)<=LW){Dz=false;
DA=false;}else Dz=Dz||!DA;}if((DA&&(!HZ||!Dz))||FX){if(LU>0)A_=B.abQ(A_,LU,0xFEFF
);A_=B.abQ(A_,Cb,0x2026);LU=Cb;Cb=Cb-1;HZ=!HZ;FX=false;if(font.H8(A_,I9,Co-1)<=LW
){Dz=false;DA=false;}else DA=DA||!Dz;}}Dj=Dj+Co;}this.FY=[font.Mf(A_),((A_.charCodeAt(
0)||0)*J8)-leading];this.A7=A_;}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.
O);B.pe([this,this.L6],this);},N$:function(C){if(C===this.Kt)return;this.Kt=C;this.
A7=B.jV;this.CF=false;B.pe([this,this.FT],this);},N_:function(C){if(C===this.Hm)
return;this.Hm=C;if(this.HN||C)this.F=this.F&~0x100;else this.F=this.F|0x100;this.
A7=B.jV;this.CF=false;B.pe([this,this.FT],this);},OD:function(C){if(C===this.HN)
return;this.HN=C;if(this.CF){this.A7=B.jV;this.CF=false;B.pe([this,this.FT],this
);}if(C||this.Hm)this.F=this.F&~0x100;else this.F=this.F|0x100;},Ht:function(C){
var A;if(C===this.ES)return;this.ES=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(
this.O);if(this.Hm){this.A7=B.jV;this.CF=false;B.pe([this,this.FT],this);}if(this.
CF)B.pe([this,this.L6],this);},CS:function(C){if(C===this.String)return;this.String=
C;this.A7=B.jV;this.CF=false;B.pe([this,this.FT],this);},FD:function(C){if(C===this.
BI)return;this.BI=C;this.A7=B.jV;this.CF=false;B.pe([this,this.FT],this);},A1:function(
C){var A;if(C===this.A$)return;this.A$=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ac(this.O);},Ba:function(C){var A;if(C>255)C=255;if(C<0)C=0;if(C===this.Cf)return;
this.Cf=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},W:function(C){if(
C)this.AD(0x1,0x0);else this.AD(0x0,0x1);},KF:function(){if(!this.CF)this.J6(this
);if(!this.C6)return false;var result=false;var bidi=this.C6;result=B.v2(bidi);return result;
},NY:function(){if(!this.CF)this.J6(this);if(!this.C6)return false;var result=false;
var bidi=this.C6;result=B.zZ(bidi);return result;},KA:function(){var A;if((this.
String===B.jV)||!this.BI)return AS;if(!this.CF)this.J6(this);if(this.A7===B.jV)return AS;
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
},_Done:function(){this.C2();this.__proto__=B.Core.AO;B.Core.AO._Done.call(this);
},_Mark:function(E){var A;B.Core.AO._Mark.call(this,E);if((A=this.BI)&&(A._cycle
!=E))A._Mark(A._cycle=E);},_className:"Views::Text"};D.HM={Fj:B.wf,Au:B.abi(4,3,
0,null),K_:B.wf,Dk:0,Hd:0,B6:function(C){if(B.aaX(C,this.Bz))return;B.Core.Ed.B6.
call(this,C);this.Au.Set(3,0,C[0]);this.Au.Set(3,1,C[1]);this.Au.Set(3,2,1);this.
Dk=0x45;B.pe([this,this.H0],this);},B5:function(C){if(B.aaX(C,this.B8))return;B.
Core.Ed.B5.call(this,C);this.Au.Set(2,0,C[0]);this.Au.Set(2,1,C[1]);this.Au.Set(
2,2,1);this.Dk=0x45;B.pe([this,this.H0],this);},B4:function(C){if(B.aaX(C,this.By
))return;B.Core.Ed.B4.call(this,C);this.Au.Set(1,0,C[0]);this.Au.Set(1,1,C[1]);this.
Au.Set(1,2,1);this.Dk=0x45;B.pe([this,this.H0],this);},B3:function(C){if(B.aaX(C
,this.B7))return;B.Core.Ed.B3.call(this,C);this.Au.Set(0,0,C[0]);this.Au.Set(0,1
,C[1]);this.Au.Set(0,2,1);this.Dk=0x45;B.pe([this,this.H0],this);},MV:function(){
return;},H0:function(Ap){var A;if(this.Dk===0x00)return;if(this.Dk===0x45){var C0=
B._NewObject(B.Graphics.Mx,0);C0=C0.NO(this.Au.Get(0,0),this.Au.Get(0,1),this.Au.
Get(1,0),this.Au.Get(1,1),this.Au.Get(2,0),this.Au.Get(2,1),this.Au.Get(3,0),this.
Au.Get(3,1));if(!!C0){C0.Jd(0,0);this.Au.Set(0,2,C0.Iw*240);C0.Jd(1,0);this.Au.Set(
1,2,C0.Iw*240);C0.Jd(1,1);this.Au.Set(2,2,C0.Iw*240);C0.Jd(0,1);this.Au.Set(3,2,
C0.Iw*240);}this.MV();}this.Hd=this.Dk;this.Dk=0x00;if(!!this.G&&((this.F&0x1)===
0x1))this.G.Ac(this.GetClipping());},Ol:function(C){if(B.aaX(C,this.K_))return;this.
K_=C;if((this.Hd!==0x45)&&(this.Dk===0x00)){this.Dk=this.Hd;B.pe([this,this.H0],
this);}},OH:function(MJ,aAngle,MN,MO){var A;if(!this.Fj[0]||!this.Fj[1])return;var
Kd=[].concat(AH,this.Fj);var Kc=this.K_;var M5=(Kd[0]-Kc[0])*MN;var I=(Kd[2]-Kc[
0])*MN;var Nr=(Kd[1]-Kc[1])*MO;var MP=(Kd[3]-Kc[1])*MO;var JR=Math.cos(aAngle*B.
k$);var Kb=Math.sin(aAngle*B.k$);var M6=M5*JR;var M7=M5*Kb;var Nj=I*JR;var Nk=I*
Kb;var Ns=Nr*JR;var Nt=Nr*Kb;var MQ=MP*JR;var MR=MP*Kb;var JU=MJ[0];var JV=MJ[1];
this.Au.Set(0,0,(JU+M6)+Nt);this.Au.Set(0,1,(JV-M7)+Ns);this.Au.Set(1,0,(JU+Nj)+
Nt);this.Au.Set(1,1,(JV-Nk)+Ns);this.Au.Set(2,0,(JU+Nj)+MR);this.Au.Set(2,1,(JV-
Nk)+MQ);this.Au.Set(3,0,(JU+M6)+MR);this.Au.Set(3,1,(JV-M7)+MQ);this.Au.Set(0,2,
1);this.Au.Set(1,2,1);this.Au.Set(2,2,1);this.Au.Set(3,2,1);if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.GetClipping());this.B7=[(this.Au.Get(0,0)+0.5)|0,(this.
Au.Get(0,1)+0.5)|0];this.By=[(this.Au.Get(1,0)+0.5)|0,(this.Au.Get(1,1)+0.5)|0];
this.B8=[(this.Au.Get(2,0)+0.5)|0,(this.Au.Get(2,1)+0.5)|0];this.Bz=[(this.Au.Get(
3,0)+0.5)|0,(this.Au.Get(3,1)+0.5)|0];this.Hd=0x45;this.Dk=0x00;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.GetClipping());this.MV();},_Init:function(aArg){B.Core.
Ed._Init.call(this,aArg);(this.Au=[]).__proto__=D.HM.Au;this.__proto__=D.HM;this.
F=0x3;},_className:"Views::WarpView"};D.Lm={timer:null,Q:null,AJ:0,AP:0,A$:0xFFFFFFFF
,BR:false,Cr:function(AK,aClip,aOffset,Az,aBlend){var A;var AL=0;if(this.AP>=0)AL=
this.AP;if(!this.Q||(AL>=this.Q.NoOfFrames))return;this.Q.Update();var IG;var IH;
var II;var IJ;var Ah=this.A$;var Bc=(((Az+1)*255)>>8)+1;var J2=aOffset[0];var J3=
aOffset[1];var V=[].concat(AH,this.Fj);aBlend=aBlend&&((this.F&0x2)===0x2);IG=IH=
II=IJ=Ah;if(Bc<256){IG=(IG&0x00FFFFFF)|((((((IG>>24)&0xFF)*Bc)>>8)&0xFF)<<24);IH=(
IH&0x00FFFFFF)|((((((IH>>24)&0xFF)*Bc)>>8)&0xFF)<<24);II=(II&0x00FFFFFF)|((((((II>>
24)&0xFF)*Bc)>>8)&0xFF)<<24);IJ=(IJ&0x00FFFFFF)|((((((IJ>>24)&0xFF)*Bc)>>8)&0xFF
)<<24);}aClip=B.aaV(aClip,B.abh(AS,aOffset));AK.OP(aClip,this.Q,AL,this.Au.Get(0
,0)+J2,this.Au.Get(0,1)+J3,this.Au.Get(0,2),this.Au.Get(1,0)+J2,this.Au.Get(1,1)+
J3,this.Au.Get(1,2),this.Au.Get(2,0)+J2,this.Au.Get(2,1)+J3,this.Au.Get(2,2),this.
Au.Get(3,0)+J2,this.Au.Get(3,1)+J3,this.Au.Get(3,2),V,IG,IH,II,IJ,aBlend,true);}
,DZ:function(Ap){var A;var Nb=this.Fj;if(!!this.Q)this.Fj=this.Q.FrameSize;else this.
Fj=AH;if(((B.aaX(Nb,this.Fj)||((this.Hd===0x45)&&(this.Dk===0x00)))&&!!this.G)&&((
this.F&0x1)===0x1))this.G.Ac(this.GetClipping());if(((this.Hd!==0x45)&&(this.Dk===
0x00))&&!B.aaX(Nb,this.Fj)){this.Dk=this.Hd;B.pe([this,this.H0],this);}},BH:function(
Ap){var A;var AL=this.AP;var Bl=0;if(!!this.Q)Bl=this.Q.NoOfFrames*this.Q.FrameDelay;
if((!!this.timer&&(this.AP<0))&&(Bl>0))this.AJ=this.timer.Ax;if(!!this.timer&&(Bl>
0)){var Al=(this.timer.Ax-this.AJ)|0;AL=(Al/this.Q.FrameDelay)|0;if(Al>=Bl){AL=AL
%this.Q.NoOfFrames;this.AJ=this.timer.Ax-(Al%Bl);}}if(((AL!==this.AP)&&!!this.G)&&((
this.F&0x1)===0x1))this.G.Ac(this.GetClipping());this.AP=AL;if(!Bl&&!!this.timer
){B.z9([this,this.BH],this.timer,0);this.timer=null;}},CQ:function(C){var A;if(this.
BR===C)return;this.BR=C;this.AP=-1;if(!C&&!!this.timer){B.z9([this,this.BH],this.
timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(B.aci.E5);B.zV([this
,this.BH],this.timer,0);B.pe([this,this.BH],this);}if(!!this.G&&((this.F&0x1)===
0x1))this.G.Ac(this.GetClipping());},A1:function(C){var A;if(C===this.A$)return;
this.A$=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping());},AN:function(
C){if(C===this.Q)return;if(!!this.Q&&this.Q.Ey)B.z9([this,this.DZ],this.Q,0);this.
Q=C;this.AP=-1;if(!!C&&C.Ey)B.zV([this,this.DZ],C,0);if(this.BR){this.CQ(false);
this.CQ(true);}this.DZ(this);},_Init:function(aArg){D.HM._Init.call(this,aArg);this.
__proto__=D.Lm;},_Mark:function(E){var A;D.HM._Mark.call(this,E);if((A=this.timer
)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Q)&&(A._cycle!=E))A._Mark(A._cycle=
E);},_className:"Views::WarpImage"};D.Im={C3:null,A$:0xFFFFFFFF,Dt:B.wf,Width:1,
C2:function(){this.Qj();},Cr:function(AK,aClip,aOffset,Az,aBlend){if(!this.C3)return;
var Z;var Ag;var Ae;var Af;var Ah=this.A$;Az=Az+1;Z=Ag=Ae=Af=Ah;if(Az<256){Z=(Z&
0x00FFFFFF)|((((Az*((Z>>24)&0xFF))>>8)&0xFF)<<24);Ag=(Ag&0x00FFFFFF)|((((Az*((Ag>>
24)&0xFF))>>8)&0xFF)<<24);Ae=(Ae&0x00FFFFFF)|((((Az*((Ae>>24)&0xFF))>>8)&0xFF)<<
24);Af=(Af&0x00FFFFFF)|((((Az*((Af>>24)&0xFF))>>8)&0xFF)<<24);}AK.Im(aClip,this.
C3,B.abh(this.O,aOffset),false,this.Dt,this.Width,0,0,0,3,Z,Ag,Af,Ae,true,true);
},Qj:function(){return;},Nx:function(Ap){var A;if(!!this.G&&((this.F&0x1)===0x1)
)this.G.Ac(this.O);},A1:function(C){var A;if(C===this.A$)return;this.A$=C;if((!!
this.G&&((this.F&0x1)===0x1))&&!!this.C3)this.G.Ac(this.O);},Oh:function(C){var A;
if(B.aaX(C,this.Dt))return;this.Dt=C;if((!!this.G&&((this.F&0x1)===0x1))&&!!this.
C3)this.G.Ac(this.O);},K7:function(C){var A;if(C<0)C=0;if(C===this.Width)return;
this.Width=C;if((!!this.G&&((this.F&0x1)===0x1))&&!!this.C3)this.G.Ac(this.O);},
Oi:function(C){var A;if(C===this.C3)return;if(!!this.C3)B.z9([this,this.Nx],this.
C3,0);this.C3=C;if(!!this.C3)B.zV([this,this.Nx],this.C3,0);if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.O);},_Init:function(aArg){B.Core.AO._Init.call(this
,aArg);this.__proto__=D.Im;},_Done:function(){this.C2();this.__proto__=B.Core.AO;
B.Core.AO._Done.call(this);},_Mark:function(E){var A;B.Core.AO._Mark.call(this,E
);if((A=this.C3)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Views::StrokePath"
};D.Q5={NE:0x1,ND:0x2,NF:0x4,NI:0x8,NH:0x10,NG:0x20,Rw:0x40,Rx:0x80,Rz:0x100};D.
RA={NE:0x1,ND:0x2,NF:0x4,NI:0x8,NH:0x10,NG:0x20,QJ:0x40,QI:0x80,QO:0x100};D.Re={
Rd:0,Ru:1,Rs:2,Rt:3};
D._Init=function(){D.Fc.__proto__=B.Core.AO;D.CI.__proto__=B.Core.AO;D.Hq.__proto__=
B.Core.AO;D.AX.__proto__=B.Core.AO;D.JC.__proto__=B.Core.AO;D.Text.__proto__=B.Core.
AO;D.HM.__proto__=B.Core.Ed;D.Lm.__proto__=D.HM;D.Im.__proto__=B.Core.AO;};D._ReInit=
function(){};D.Ci=function(E){};return D;})();

/* Embedded Wizard */