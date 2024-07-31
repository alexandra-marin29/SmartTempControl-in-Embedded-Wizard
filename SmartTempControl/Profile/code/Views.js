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
var AH=[0,0];var AR=[0,0,0,0];var B4="\uFEFF";
D.Fw={FQ:0xFFFFFFFF,FR:0xFFFFFFFF,FS:0xFFFFFFFF,DP:0xFFFFFFFF,Bc:0xFFFFFFFF,Cj:function(
AK,aClip,aOffset,Az,aBlend){var A;var V=this.DP;var Ag=this.FS;var Ae=this.FQ;var
Af=this.FR;var Ah=this.Bc;aBlend=aBlend&&((this.F&0x2)===0x2);Az=Az+1;if((((V===
Ag)&&(Ae===Af))&&(V===Ae))&&(V===0xFFFFFFFF))V=Ag=Ae=Af=Ah;else if(Ah!==0xFFFFFFFF
){V=(V&0x00FFFFFF)|((((((V>>24)&0xFF)*(((Ah>>24)&0xFF)+1))>>8)&0xFF)<<24);V=(V&0xFFFFFF00
)|((((V&0xFF)*((Ah&0xFF)+1))>>8)&0xFF);V=(V&0xFFFF00FF)|((((((V>>8)&0xFF)*(((Ah>>
8)&0xFF)+1))>>8)&0xFF)<<8);V=(V&0xFF00FFFF)|((((((V>>16)&0xFF)*(((Ah>>16)&0xFF)+
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
0xFF)*(((Ah>>16)&0xFF)+1))>>8)&0xFF)<<16);}if(Az<256){V=(V&0x00FFFFFF)|((((Az*((
V>>24)&0xFF))>>8)&0xFF)<<24);Ag=(Ag&0x00FFFFFF)|((((Az*((Ag>>24)&0xFF))>>8)&0xFF
)<<24);Ae=(Ae&0x00FFFFFF)|((((Az*((Ae>>24)&0xFF))>>8)&0xFF)<<24);Af=(Af&0x00FFFFFF
)|((((Az*((Af>>24)&0xFF))>>8)&0xFF)<<24);}AK.Km(aClip,B.abh(this.N,aOffset),V,Ag
,Af,Ae,aBlend);},Jh:function(C){var A;if(C===this.FQ)return;this.FQ=C;if(!!this.
G&&((this.F&0x1)===0x1))this.G.Ac(this.N);},Ji:function(C){var A;if(C===this.FR)
return;this.FR=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.N);},HT:function(
C){var A;if(C===this.FS)return;this.FS=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ac(this.N);},Gp:function(C){var A;if(C===this.DP)return;this.DP=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ac(this.N);},A9:function(C){var A;if(C===this.Bc)return;
this.Bc=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.N);},NN:function(C){if(
C)this.AD(0x2,0x0);else this.AD(0x0,0x2);},Ab:function(C){if(C)this.AD(0x1,0x0);
else this.AD(0x0,0x1);},_Init:function(aArg){B.Core.AN._Init.call(this,aArg);this.
__proto__=D.Fw;},_className:"Views::Rectangle"};D.Cy={Width:1,FQ:0xFFFFFFFF,FR:0xFFFFFFFF
,FS:0xFFFFFFFF,DP:0xFFFFFFFF,Bc:0xFFFFFFFF,Cj:function(AK,aClip,aOffset,Az,aBlend
){var A;var V=this.DP;var Ag=this.FS;var Ae=this.FQ;var Af=this.FR;var Ah=this.Bc;
aBlend=aBlend&&((this.F&0x2)===0x2);Az=Az+1;if((((V===Ag)&&(Ae===Af))&&(V===Ae))&&(
V===0xFFFFFFFF))V=Ag=Ae=Af=Ah;else if(Ah!==0xFFFFFFFF){V=(V&0x00FFFFFF)|((((((V>>
24)&0xFF)*(((Ah>>24)&0xFF)+1))>>8)&0xFF)<<24);V=(V&0xFFFFFF00)|((((V&0xFF)*((Ah&
0xFF)+1))>>8)&0xFF);V=(V&0xFFFF00FF)|((((((V>>8)&0xFF)*(((Ah>>8)&0xFF)+1))>>8)&0xFF
)<<8);V=(V&0xFF00FFFF)|((((((V>>16)&0xFF)*(((Ah>>16)&0xFF)+1))>>8)&0xFF)<<16);Ag=(
Ag&0x00FFFFFF)|((((((Ag>>24)&0xFF)*(((Ah>>24)&0xFF)+1))>>8)&0xFF)<<24);Ag=(Ag&0xFFFFFF00
)|((((Ag&0xFF)*((Ah&0xFF)+1))>>8)&0xFF);Ag=(Ag&0xFFFF00FF)|((((((Ag>>8)&0xFF)*(((
Ah>>8)&0xFF)+1))>>8)&0xFF)<<8);Ag=(Ag&0xFF00FFFF)|((((((Ag>>16)&0xFF)*(((Ah>>16)&
0xFF)+1))>>8)&0xFF)<<16);Ae=(Ae&0x00FFFFFF)|((((((Ae>>24)&0xFF)*(((Ah>>24)&0xFF)+
1))>>8)&0xFF)<<24);Ae=(Ae&0xFFFFFF00)|((((Ae&0xFF)*((Ah&0xFF)+1))>>8)&0xFF);Ae=(
Ae&0xFFFF00FF)|((((((Ae>>8)&0xFF)*(((Ah>>8)&0xFF)+1))>>8)&0xFF)<<8);Ae=(Ae&0xFF00FFFF
)|((((((Ae>>16)&0xFF)*(((Ah>>16)&0xFF)+1))>>8)&0xFF)<<16);Af=(Af&0x00FFFFFF)|((((((
Af>>24)&0xFF)*(((Ah>>24)&0xFF)+1))>>8)&0xFF)<<24);Af=(Af&0xFFFFFF00)|((((Af&0xFF
)*((Ah&0xFF)+1))>>8)&0xFF);Af=(Af&0xFFFF00FF)|((((((Af>>8)&0xFF)*(((Ah>>8)&0xFF)+
1))>>8)&0xFF)<<8);Af=(Af&0xFF00FFFF)|((((((Af>>16)&0xFF)*(((Ah>>16)&0xFF)+1))>>8
)&0xFF)<<16);}if(Az<256){V=(V&0x00FFFFFF)|((((Az*((V>>24)&0xFF))>>8)&0xFF)<<24);
Ag=(Ag&0x00FFFFFF)|((((Az*((Ag>>24)&0xFF))>>8)&0xFF)<<24);Ae=(Ae&0x00FFFFFF)|((((
Az*((Ae>>24)&0xFF))>>8)&0xFF)<<24);Af=(Af&0x00FFFFFF)|((((Az*((Af>>24)&0xFF))>>8
)&0xFF)<<24);}AK.Nu(aClip,B.abh(this.N,aOffset),this.Width,V,Ag,Af,Ae,aBlend);},
KR:function(C){var A;if(C<0)C=0;if(C===this.Width)return;this.Width=C;if(!!this.
G&&((this.F&0x1)===0x1))this.G.Ac(this.N);},Jh:function(C){var A;if(C===this.FQ)
return;this.FQ=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.N);},Ji:function(
C){var A;if(C===this.FR)return;this.FR=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ac(this.N);},HT:function(C){var A;if(C===this.FS)return;this.FS=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ac(this.N);},Gp:function(C){var A;if(C===this.DP)return;
this.DP=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.N);},A9:function(C){var
A;if(C===this.Bc)return;this.Bc=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.
N);},_Init:function(aArg){B.Core.AN._Init.call(this,aArg);this.__proto__=D.Cy;},
_className:"Views::Border"};D.He={timer:null,O:null,AO:-1,Bc:0xFFFFFFFF,HK:0x1F,
Ek:0,AJ:0,Gl:B.wf,BL:false,Cj:function(AK,aClip,aOffset,Az,aBlend){var A;var AL=
this.Ek;if(this.AO>=0)AL=this.AO;if(!this.O||(AL>=this.O.NoOfFrames))return;this.
O.Update();var V;var Ag;var Af;var Ae;var Ah=this.Bc;var Bb=(((Az+1)*255)>>8)+1;
var Ca=this.HK;var I=B.abh(this.N,aOffset);var J2=B.abe([I[2]-I[0],I[3]-I[1]],this.
Gl);aBlend=aBlend&&((this.F&0x2)===0x2);V=Ag=Ae=Af=Ah;if(Bb<256){V=(V&0x00FFFFFF
)|((((((V>>24)&0xFF)*Bb)>>8)&0xFF)<<24);Ag=(Ag&0x00FFFFFF)|((((((Ag>>24)&0xFF)*Bb
)>>8)&0xFF)<<24);Af=(Af&0x00FFFFFF)|((((((Af>>24)&0xFF)*Bb)>>8)&0xFF)<<24);Ae=(Ae&
0x00FFFFFF)|((((((Ae>>24)&0xFF)*Bb)>>8)&0xFF)<<24);}if(((this.Gl[0]>0)&&(J2[0]>0
))&&!((Ca&0x5)===0x5)){var d=((this.O.FrameSize[0]/3)|0)-J2[0];if(((Ca&0x1)===0x1
)){if(aClip[2]>I[2])aClip=B.abN(aClip,I[2]);if(d>0)I=B.abN(I,I[2]+d);Ca=Ca|0x4;}
else if(((Ca&0x4)===0x4)){if(aClip[0]<I[0])aClip=[].concat(I[0],aClip.slice(1,4)
);if(d>0)I=[].concat(I[0]-d,I.slice(1,4));Ca=Ca|0x1;}else{if(aClip[0]<I[0])aClip=[
].concat(I[0],aClip.slice(1,4));if(aClip[2]>I[2])aClip=B.abN(aClip,I[2]);if(d>0){
I=[].concat(I[0]-((d/2)|0),I.slice(1,4));I=B.abN(I,(I[2]+d)-((d/2)|0));}Ca=Ca|0x5;
}}if(((this.Gl[1]>0)&&(J2[1]>0))&&!((Ca&0xA)===0xA)){var d=((this.O.FrameSize[1]
/3)|0)-J2[1];if(((Ca&0x2)===0x2)){if(aClip[3]>I[3])aClip=[].concat(aClip.slice(0
,3),I[3]);if(d>0)I=[].concat(I.slice(0,3),I[3]+d);Ca=Ca|0x8;}else if(((Ca&0x8)===
0x8)){if(aClip[1]<I[1])aClip=B.abP(aClip,I[1]);if(d>0)I=B.abP(I,I[1]-d);Ca=Ca|0x2;
}else{if(aClip[1]<I[1])aClip=B.abP(aClip,I[1]);if(aClip[3]>I[3])aClip=[].concat(
aClip.slice(0,3),I[3]);if(d>0){I=B.abP(I,I[1]-((d/2)|0));I=[].concat(I.slice(0,3
),(I[3]+d)-((d/2)|0));}Ca=Ca|0xA;}}AK.Nt(aClip,this.O,AL,I,Ca,V,Ag,Af,Ae,aBlend);
},DM:function(As){var A;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.N);},BE:
function(As){var A;var AL=this.AO;var Bl=0;if(!!this.O)Bl=this.O.NoOfFrames*this.
O.FrameDelay;if((!!this.timer&&(this.AO<0))&&(Bl>0))this.AJ=this.timer.Ax-(this.
Ek*this.O.FrameDelay);if(!!this.timer&&(Bl>0)){var Al=(this.timer.Ax-this.AJ)|0;
AL=(Al/this.O.FrameDelay)|0;if(Al>=Bl){AL=AL%this.O.NoOfFrames;this.AJ=this.timer.
Ax-(Al%Bl);}}if(((AL!==this.AO)&&!!this.G)&&((this.F&0x1)===0x1))this.G.Ac(this.
N);this.AO=AL;if(!Bl&&!!this.timer){B.z9([this,this.BE],this.timer,0);this.timer=
null;}},A9:function(C){var A;if(C===this.Bc)return;this.Bc=C;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.N);},CD:function(C){var A;if(this.BL===C)return;this.
BL=C;this.AO=-1;if(!C&&!!this.timer){B.z9([this,this.BE],this.timer,0);this.timer=
null;}if(C){this.timer=B._GetAutoObject(B.aci.ET);B.zV([this,this.BE],this.timer
,0);B.pe([this,this.BE],this);}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.
N);},L8:function(C){var A;if(C===this.HK)return;this.HK=C;if(!!this.G&&((this.F&
0x1)===0x1))this.G.Ac(this.N);},Cf:function(C){var A;if(C<0)C=0;if((C===this.Ek)&&(
this.AO===-1))return;this.Ek=C;if(!this.timer)this.AO=-1;if(!!this.G&&((this.F&0x1
)===0x1))this.G.Ac(this.N);},AQ:function(C){var A;if(C===this.O)return;if(!!this.
O&&this.O.En)B.z9([this,this.DM],this.O,0);this.O=C;this.AO=-1;if(!!C&&C.En)B.zV([
this,this.DM],C,0);if(this.BL){this.CD(false);this.CD(true);}if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.N);},Ab:function(C){if(C)this.AD(0x1,0x0);else this.
AD(0x0,0x1);},L$:function(C){var A;if(C[0]<0)C=[0,C[1]];if(C[1]<0)C=[C[0],0];if(
B.aaX(C,this.Gl))return;this.Gl=C;if((!!this.G&&((this.F&0x1)===0x1))&&!((this.HK&
0xF)===0xF))this.G.Ac(this.N);},_Init:function(aArg){B.Core.AN._Init.call(this,aArg
);this.__proto__=D.He;},_Mark:function(E){var A;B.Core.AN._Mark.call(this,E);if((
A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.O)&&(A._cycle!=E))A.
_Mark(A._cycle=E);},_className:"Views::Frame"};D.AZ={timer:null,O:null,AJ:0,AO:0
,DP:0xFFFFFFFF,Bc:0xFFFFFFFF,EG:0x12,Ek:0,B8:255,BL:false,Cj:function(AK,aClip,aOffset
,Az,aBlend){var A;var AL=this.Ek;if(this.AO>=0)AL=this.AO;if(!this.O||(AL>=this.
O.NoOfFrames))return;this.O.Update();var T=this.Kp();var Ch=this.O.FrameSize;if((
T[0]>=T[2])||(T[1]>=T[3]))return;var V=this.DP;var Ag=0xFFFFFFFF;var Af=0xFFFFFFFF;
var Ae=0xFFFFFFFF;var Ah=this.Bc;var Bb=(((Az+1)*this.B8)>>8)+1;aBlend=aBlend&&((
this.F&0x2)===0x2);if(((V===0xFFFFFFFF)&&(V===0xFFFFFFFF))&&(V===0xFFFFFFFF))V=Ag=
Ae=Af=Ah;else if(Ah!==0xFFFFFFFF){V=(V&0x00FFFFFF)|((((((V>>24)&0xFF)*(((Ah>>24)&
0xFF)+1))>>8)&0xFF)<<24);V=(V&0xFFFFFF00)|((((V&0xFF)*((Ah&0xFF)+1))>>8)&0xFF);V=(
V&0xFFFF00FF)|((((((V>>8)&0xFF)*(((Ah>>8)&0xFF)+1))>>8)&0xFF)<<8);V=(V&0xFF00FFFF
)|((((((V>>16)&0xFF)*(((Ah>>16)&0xFF)+1))>>8)&0xFF)<<16);Ag=(Ag&0x00FFFFFF)|((((
255*(((Ah>>24)&0xFF)+1))>>8)&0xFF)<<24);Ag=(Ag&0xFFFFFF00)|((((Ag&0xFF)*((Ah&0xFF
)+1))>>8)&0xFF);Ag=(Ag&0xFFFF00FF)|((((((Ag>>8)&0xFF)*(((Ah>>8)&0xFF)+1))>>8)&0xFF
)<<8);Ag=(Ag&0xFF00FFFF)|((((((Ag>>16)&0xFF)*(((Ah>>16)&0xFF)+1))>>8)&0xFF)<<16);
Ae=(Ae&0x00FFFFFF)|((((255*(((Ah>>24)&0xFF)+1))>>8)&0xFF)<<24);Ae=(Ae&0xFFFFFF00
)|((((Ae&0xFF)*((Ah&0xFF)+1))>>8)&0xFF);Ae=(Ae&0xFFFF00FF)|((((((Ae>>8)&0xFF)*(((
Ah>>8)&0xFF)+1))>>8)&0xFF)<<8);Ae=(Ae&0xFF00FFFF)|((((((Ae>>16)&0xFF)*(((Ah>>16)&
0xFF)+1))>>8)&0xFF)<<16);Af=(Af&0x00FFFFFF)|((((255*(((Ah>>24)&0xFF)+1))>>8)&0xFF
)<<24);Af=(Af&0xFFFFFF00)|((((Af&0xFF)*((Ah&0xFF)+1))>>8)&0xFF);Af=(Af&0xFFFF00FF
)|((((((Af>>8)&0xFF)*(((Ah>>8)&0xFF)+1))>>8)&0xFF)<<8);Af=(Af&0xFF00FFFF)|((((((
Af>>16)&0xFF)*(((Ah>>16)&0xFF)+1))>>8)&0xFF)<<16);}if(Bb<256){V=(V&0x00FFFFFF)|((((((
V>>24)&0xFF)*Bb)>>8)&0xFF)<<24);Ag=(Ag&0x00FFFFFF)|((((((Ag>>24)&0xFF)*Bb)>>8)&0xFF
)<<24);Af=(Af&0x00FFFFFF)|((((((Af>>24)&0xFF)*Bb)>>8)&0xFF)<<24);Ae=(Ae&0x00FFFFFF
)|((((((Ae>>24)&0xFF)*Bb)>>8)&0xFF)<<24);}if(B.aaX([T[2]-T[0],T[3]-T[1]],Ch))AK.
Np(aClip,this.O,AL,B.abh(this.N,aOffset),B.abe(this.N.slice(0,2),T.slice(0,2)),V
,Ag,Af,Ae,aBlend);else AK.Om(aClip,this.O,AL,B.abh(T,aOffset),[].concat(AH,Ch),V
,Ag,Af,Ae,aBlend,true);},DM:function(As){var A;if(!!this.G&&((this.F&0x1)===0x1)
)this.G.Ac(this.N);},BE:function(As){var A;var AL=this.AO;var Bl=0;if(!!this.O)Bl=
this.O.NoOfFrames*this.O.FrameDelay;if((!!this.timer&&(this.AO<0))&&(Bl>0))this.
AJ=this.timer.Ax-(this.Ek*this.O.FrameDelay);if(!!this.timer&&(Bl>0)){var Al=(this.
timer.Ax-this.AJ)|0;AL=(Al/this.O.FrameDelay)|0;if(Al>=Bl){AL=AL%this.O.NoOfFrames;
this.AJ=this.timer.Ax-(Al%Bl);}}if(((AL!==this.AO)&&!!this.G)&&((this.F&0x1)===0x1
))this.G.Ac(this.N);this.AO=AL;if(!Bl&&!!this.timer){B.z9([this,this.BE],this.timer
,0);this.timer=null;}},Gp:function(C){var A;if(C===this.DP)return;this.DP=C;if(!
!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.N);},A9:function(C){var A;if(C===this.
Bc)return;this.Bc=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.N);},CD:function(
C){var A;if(this.BL===C)return;this.BL=C;this.AO=-1;if(!C&&!!this.timer){B.z9([this
,this.BE],this.timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(B.aci.
ET);B.zV([this,this.BE],this.timer,0);B.pe([this,this.BE],this);}if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ac(this.N);},Hh:function(C){var A;if(C===this.EG)return;
this.EG=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.N);},Cf:function(C){var
A;if(C<0)C=0;if((C===this.Ek)&&(this.AO===-1))return;this.Ek=C;if(!this.timer)this.
AO=-1;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.N);},AQ:function(C){var A;
if(C===this.O)return;if(!!this.O&&this.O.En)B.z9([this,this.DM],this.O,0);this.O=
C;this.AO=-1;if(!!C&&C.En)B.zV([this,this.DM],C,0);if(this.BL){this.CD(false);this.
CD(true);}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.N);},A5:function(C){var
A;if(C>255)C=255;if(C<0)C=0;if(C===this.B8)return;this.B8=C;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.N);},Ab:function(C){if(C)this.AD(0x1,0x0);else this.
AD(0x0,0x1);},Kp:function(){var A;if(!this.O)return AR;var Aw=this.EG;var Ch=this.
O.FrameSize;var AT=this.N;var width=AT[2]-AT[0];var height=AT[3]-AT[1];if(!Ch[0]||
!Ch[1])return AR;var AA=[0,0,width,height];var Am=AA;if(((Aw&0x40)===0x40)){var LT=((((
AA[2]-AA[0])<<16)+((Ch[0]/2)|0))/Ch[0])|0;var IX=((((AA[3]-AA[1])<<16)+((Ch[1]/2
)|0))/Ch[1])|0;var Fc=LT;if(IX>Fc)Fc=IX;Am=B.abL(Am,((Ch[0]*Fc)+32768)>>16);Am=B.
abI(Am,((Ch[1]*Fc)+32768)>>16);}else if(((Aw&0x80)===0x80)){var LT=((((AA[2]-AA[
0])<<16)+((Ch[0]/2)|0))/Ch[0])|0;var IX=((((AA[3]-AA[1])<<16)+((Ch[1]/2)|0))/Ch[
1])|0;var Fc=LT;if(IX<Fc)Fc=IX;Am=B.abL(Am,((Ch[0]*Fc)+32768)>>16);Am=B.abI(Am,((
Ch[1]*Fc)+32768)>>16);}else if(!((Aw&0x100)===0x100))Am=B.abK(Am,Ch);if((Am[2]-Am[
0])!==(AA[2]-AA[0])){if(((Aw&0x4)===0x4))Am=B.abM(Am,AA[2]-(Am[2]-Am[0]));else if(((
Aw&0x2)===0x2))Am=B.abM(Am,(AA[0]+(((AA[2]-AA[0])/2)|0))-(((Am[2]-Am[0])/2)|0));
}if((Am[3]-Am[1])!==(AA[3]-AA[1])){if(((Aw&0x20)===0x20))Am=B.abO(Am,AA[3]-(Am[3
]-Am[1]));else if(((Aw&0x10)===0x10))Am=B.abO(Am,(AA[1]+(((AA[3]-AA[1])/2)|0))-(((
Am[3]-Am[1])/2)|0));}Am=B.abh(Am,AT.slice(0,2));return Am;},_Init:function(aArg){
B.Core.AN._Init.call(this,aArg);this.__proto__=D.AZ;},_Mark:function(E){var A;B.
Core.AN._Mark.call(this,E);if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);
if((A=this.O)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Views::Image"};D.
Js={timer:null,O:null,AO:0,B8:255,AJ:0,BL:false,Cj:function(AK,aClip,aOffset,Az,
aBlend){var A;var AL=0;if(this.AO>=0)AL=this.AO;if(!this.O||(AL>=this.O.NoOfFrames
))return;this.O.Update();var V;var Ag;var Af;var Ae;var Bb=(((Az+1)*this.B8)>>8)+
1;aBlend=aBlend&&((this.F&0x2)===0x2);V=Ag=Ae=Af=0xFFFFFFFF;if(Bb<256){V=(V&0x00FFFFFF
)|((((255*Bb)>>8)&0xFF)<<24);Ag=(Ag&0x00FFFFFF)|((((255*Bb)>>8)&0xFF)<<24);Af=(Af&
0x00FFFFFF)|((((255*Bb)>>8)&0xFF)<<24);Ae=(Ae&0x00FFFFFF)|((((255*Bb)>>8)&0xFF)<<
24);}AK.Op(aClip,this.O,AL,B.abh(this.N,aOffset),[].concat(AH,this.O.FrameSize),
AH,V,Ag,Af,Ae,aBlend);},DM:function(As){var A;if(!!this.G&&((this.F&0x1)===0x1))
this.G.Ac(this.N);},BE:function(As){var A;var AL=this.AO;var Bl=0;if(!!this.O)Bl=
this.O.NoOfFrames*this.O.FrameDelay;if((!!this.timer&&(this.AO<0))&&(Bl>0))this.
AJ=this.timer.Ax;if(!!this.timer&&(Bl>0)){var Al=(this.timer.Ax-this.AJ)|0;AL=(Al
/this.O.FrameDelay)|0;if(Al>=Bl){AL=AL%this.O.NoOfFrames;this.AJ=this.timer.Ax-(
Al%Bl);}}if(((AL!==this.AO)&&!!this.G)&&((this.F&0x1)===0x1))this.G.Ac(this.N);this.
AO=AL;if(!Bl&&!!this.timer){B.z9([this,this.BE],this.timer,0);this.timer=null;}}
,CD:function(C){var A;if(this.BL===C)return;this.BL=C;this.AO=-1;if(!C&&!!this.timer
){B.z9([this,this.BE],this.timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(
B.aci.ET);B.zV([this,this.BE],this.timer,0);B.pe([this,this.BE],this);}if(!!this.
G&&((this.F&0x1)===0x1))this.G.Ac(this.N);},AQ:function(C){var A;if(C===this.O)return;
if(!!this.O&&this.O.En)B.z9([this,this.DM],this.O,0);this.O=C;this.AO=-1;if(!!C&&
C.En)B.zV([this,this.DM],C,0);if(this.BL){this.CD(false);this.CD(true);}if(!!this.
G&&((this.F&0x1)===0x1))this.G.Ac(this.N);},A5:function(C){var A;if(C>255)C=255;
if(C<0)C=0;if(C===this.B8)return;this.B8=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ac(this.N);},Ab:function(C){if(C)this.AD(0x1,0x0);else this.AD(0x0,0x1);},Hf:function(
){return this.B8;},_Init:function(aArg){B.Core.AN._Init.call(this,aArg);this.__proto__=
D.Js;},_Mark:function(E){var A;B.Core.AN._Mark.call(this,E);if((A=this.timer)&&(
A._cycle!=E))A._Mark(A._cycle=E);if((A=this.O)&&(A._cycle!=E))A._Mark(A._cycle=E
);},_className:"Views::Wallpaper"};D.Text={BO:null,A6:B.jV,String:B.jV,CW:null,FM:
B.wf,EG:0x12,Bc:0xFFFFFFFF,B8:255,Hr:false,Hb:false,Kj:false,Cv:false,CS:function(
){if(!!this.CW){this.Ly(this.CW);this.CW=null;}},Cj:function(AK,aClip,aOffset,Az
,aBlend){var A;if((this.A6===B.jV)||!this.BO)return;var Aw=this.EG;var font=this.
BO;var AA=B.abh(this.N,aOffset);var V;var Ag;var Af;var Ae;var Pn=this.Bc;var Bb=(((
Az+1)*this.B8)>>8)+1;var D$=this.A6.charCodeAt(0)||0;var T=B.abh(this.Kp(),aOffset
);var MR=[AA[0]-T[0],(AA[1]-T[1])-font.Ascent];if(D$<1)return;V=Ag=Ae=Af=Pn;if(Bb<
256){V=(V&0x00FFFFFF)|((((((V>>24)&0xFF)*Bb)>>8)&0xFF)<<24);Ag=(Ag&0x00FFFFFF)|((((((
Ag>>24)&0xFF)*Bb)>>8)&0xFF)<<24);Af=(Af&0x00FFFFFF)|((((((Af>>24)&0xFF)*Bb)>>8)&
0xFF)<<24);Ae=(Ae&0x00FFFFFF)|((((((Ae>>24)&0xFF)*Bb)>>8)&0xFF)<<24);}if(((Aw&0x80
)===0x80)){if(this.Ku())Aw=(Aw&~0x80)|0x4;else Aw=(Aw&~0x80)|0x1;}if((D$===1)&&!((
Aw&0x40)===0x40)){AK.LZ(aClip,font,this.A6,2,(this.A6.charCodeAt(1)||0)-1,AA,MR,
0,0,V,Ag,Af,Ae,true);return;}var leading=font.Leading;var LS=(font.Ascent+font.Descent
)+leading;var Pl=aClip[1]-T[1];var Pm=aClip[3]-T[1];var Lp=T[2]-T[0];var BK=0;var
K=1;var Ah=this.A6.charCodeAt(1)||0;while(((BK+LS)<Pl)&&(Ah>0)){K=K+Ah;BK=BK+LS;
Ah=this.A6.charCodeAt(K)||0;}while((BK<Pm)&&(Ah>0)){var G3=B.abe(MR,[0,BK]);var M4=
0;var JP=false;if(((((Aw&0x40)===0x40)&&((this.A6.charCodeAt((K+Ah)-1)||0)!==0x0A
))&&((this.A6.charCodeAt(K+1)||0)!==0x0A))&&((this.A6.charCodeAt(K+Ah)||0)!==0x00
))JP=true;if(JP&&!!(Aw&0x6)){var M3=K+Ah;var My=this.A6.indexOf(String.fromCharCode(
0x20),K+1);var Mz=this.A6.indexOf(String.fromCharCode(0xA0),K+1);if(((My<0)||(My>=
M3))&&((Mz<0)||(Mz>=M3)))JP=false;}if(JP)M4=Lp;else if(((Aw&0x4)===0x4))G3=[(G3[
0]-Lp)+font.HM(this.A6,K+1,Ah-1),G3[1]];else if(((Aw&0x2)===0x2))G3=[(G3[0]-((Lp
/2)|0))+((font.HM(this.A6,K+1,Ah-1)/2)|0),G3[1]];AK.LZ(aClip,font,this.A6,K+1,Ah-
1,AA,G3,M4,0,V,Ag,Af,Ae,true);K=K+Ah;BK=BK+LS;Ah=this.A6.charCodeAt(K)||0;}},P:function(
C){var A;if(B.aaY(C,this.N))return;var M2;M2=((A=this.N)[2]-A[0])!==(C[2]-C[0]);
if(((M2&&this.Hr)&&this.Cv)&&!((this.F&0x2000)===0x2000)){this.A6=B.jV;this.Cv=false;
B.pe([this,this.FH],this);}if(((this.Hb&&this.Cv)&&!B.aaX([(A=this.N)[2]-A[0],A[
3]-A[1]],[C[2]-C[0],C[3]-C[1]]))&&!((this.F&0x2000)===0x2000)){this.A6=B.jV;this.
Cv=false;B.pe([this,this.FH],this);}B.Core.AN.P.call(this,C);B.pe([this,this.LQ]
,this);},Ly:function(aBidi){if(!aBidi)return;B.rB(aBidi);},Pp:function(aSize){var
bidi=null;bidi=B.v3(aSize);return bidi;},LQ:function(As){},FH:function(As){B.pe([
this,this.JW],this);},JW:function(As){var A;if(this.Cv)return;var width=(A=this.
N)[2]-A[0];var height=(A=this.N)[3]-A[1];var EE=-1;var font=this.BO;if((!!font&&
!!!font.Ascent)&&!!!font.Descent)font=null;if(this.Hr){EE=width;if(EE<0)EE=1;}if(
!!this.CW){this.Ly(this.CW);this.CW=null;}this.Cv=true;if((this.String!==B.jV)&&
!!font){var length=this.String.length;if(this.Kj)this.CW=this.Pp(length);this.A6=
font.Og(this.String,0,EE,length,this.CW);if(!!this.CW&&!this.NB()){this.Ly(this.
CW);this.CW=null;}}else this.A6=B.jV;this.FM=AH;if((this.Hb&&(this.A6!==B.jV))&&
!!font){var Aw=this.EG;var leading=font.Leading;var A$=this.A6;var J0=this.Ku();
if(((Aw&0x80)===0x80)){if(J0)Aw=(Aw&~0x80)|0x4;else Aw=(Aw&~0x80)|0x1;}var JY=(font.
Ascent+font.Descent)+leading;var D$=A$.charCodeAt(0)||0;var FE=((height+leading)
/JY)|0;var Ls=false;var JG=false;if(FE<=0)FE=1;if(D$>FE){var DN=0;var IW=0;var JZ=
D$-1;var Bz;var B5=A$.length;var tmp=B.jV;if(!!(Aw&0x110)&&!!(Aw&0x28))Aw&=~0x110;
if(!!(Aw&0x110))Aw&=~0x28;if(((Aw&0x20)===0x20))IW=D$-FE;else if(((Aw&0x10)===0x10
)||((Aw&0x100)===0x100)){IW=((D$-FE)/2)|0;JZ=(IW+FE)-1;}else JZ=FE-1;Ls=IW>0;JG=
JZ<(D$-1);for(Bz=1;DN<IW;DN=DN+1)Bz=Bz+(A$.charCodeAt(Bz)||0);if(JG)for(B5=Bz;DN<
JZ;DN=DN+1)B5=B5+(A$.charCodeAt(B5)||0);if(Ls){var Cg=A$.charCodeAt(Bz)||0;tmp=(
B4+B.abW(A$,Bz,Cg))+B4;tmp=B.abQ(tmp,0,(Cg+2)&0xFFFF);Bz=Bz+Cg;if((tmp.charCodeAt(
Cg)||0)===0x0A){tmp=B.abQ(tmp,Cg,0xFEFF);tmp=B.abQ(tmp,Cg+1,0x0A);}if((tmp.charCodeAt(
2)||0)===0x0A){tmp=B.abQ(tmp,2,0xFEFF);tmp=B.abQ(tmp,1,0x0A);}else tmp=B.abQ(tmp
,1,0xFEFF);}tmp=tmp+B.abW(A$,Bz,B5-Bz);if(JG&&(B5>=Bz)){var Cg=A$.charCodeAt(B5)||
0;var Cx=(B4+B.abW(A$,B5,Cg))+B4;Cx=B.abQ(Cx,0,(Cg+2)&0xFFFF);Cx=B.abQ(Cx,1,0xFEFF
);if((Cx.charCodeAt(Cg)||0)===0x0A){Cx=B.abQ(Cx,Cg,0xFEFF);Cx=B.abQ(Cx,Cg+1,0x0A
);}if((Cx.charCodeAt(2)||0)===0x0A){Cx=B.abQ(Cx,2,0xFEFF);Cx=B.abQ(Cx,1,0x0A);}else
Cx=B.abQ(Cx,1,0xFEFF);tmp=tmp+Cx;}A$=String.fromCharCode(FE&0xFFFF)+tmp;}var DN=
0;var C9=1;var LG=width;D$=A$.charCodeAt(0)||0;for(;DN<D$;DN=DN+1){var FK=Ls&&!DN;
var FL=JG&&(DN===(D$-1));var Do=false;var Dp=false;var HD=J0;if((J0&&FK)&&!FL){FK=
false;FL=true;}else if((J0&&FL)&&!FK){FL=false;FK=true;}var IY=C9+1;var Cg=A$.charCodeAt(
C9)||0;var Bz=IY;var B5=(IY+Cg)-2;var LD=-1;var LE=-1;if(!this.Hr&&(font.HM(A$,IY
,Cg-1)>LG)){var GU=Aw;if(((GU&0x2)===0x2)&&!!(GU&0x5))GU&=~0x2;if(((GU&0x2)===0x2
))GU&=~0x5;if(((GU&0x4)===0x4))Do=true;else if(((GU&0x2)===0x2)){Do=true;Dp=true;
}else Dp=true;}if((A$.charCodeAt(Bz)||0)===0x0A)Bz=Bz+1;if((A$.charCodeAt(B5)||0
)===0x0A)B5=B5-1;while(Do&&((A$.charCodeAt(Bz)||0)===0xFEFF))Bz=Bz+1;while(Dp&&((
A$.charCodeAt(B5)||0)===0xFEFF))B5=B5-1;Do=Do&&!FL;Dp=Dp&&!FK;while((((Do||Dp)||
FK)||FL)&&(Bz<B5)){if((Do&&(HD||!Dp))||FK){if(LD>0)A$=B.abQ(A$,LD,0xFEFF);A$=B.abQ(
A$,Bz,0x2026);LD=Bz;Bz=Bz+1;HD=!HD;FK=false;if(font.HM(A$,IY,Cg-1)<=LG){Do=false;
Dp=false;}else Do=Do||!Dp;}if((Dp&&(!HD||!Do))||FL){if(LE>0)A$=B.abQ(A$,LE,0xFEFF
);A$=B.abQ(A$,B5,0x2026);LE=B5;B5=B5-1;HD=!HD;FL=false;if(font.HM(A$,IY,Cg-1)<=LG
){Do=false;Dp=false;}else Dp=Dp||!Do;}}C9=C9+Cg;}this.FM=[font.L1(A$),((A$.charCodeAt(
0)||0)*JY)-leading];this.A6=A$;}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.
N);B.pe([this,this.LQ],this);},NP:function(C){if(C===this.Kj)return;this.Kj=C;this.
A6=B.jV;this.Cv=false;B.pe([this,this.FH],this);},NO:function(C){if(C===this.Hb)
return;this.Hb=C;if(this.Hr||C)this.F=this.F&~0x100;else this.F=this.F|0x100;this.
A6=B.jV;this.Cv=false;B.pe([this,this.FH],this);},Of:function(C){if(C===this.Hr)
return;this.Hr=C;if(this.Cv){this.A6=B.jV;this.Cv=false;B.pe([this,this.FH],this
);}if(C||this.Hb)this.F=this.F&~0x100;else this.F=this.F|0x100;},Hh:function(C){
var A;if(C===this.EG)return;this.EG=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(
this.N);if(this.Hb){this.A6=B.jV;this.Cv=false;B.pe([this,this.FH],this);}if(this.
Cv)B.pe([this,this.LQ],this);},Fs:function(C){if(C===this.String)return;this.String=
C;this.A6=B.jV;this.Cv=false;B.pe([this,this.FH],this);},Hl:function(C){if(C===this.
BO)return;this.BO=C;this.A6=B.jV;this.Cv=false;B.pe([this,this.FH],this);},A9:function(
C){var A;if(C===this.Bc)return;this.Bc=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ac(this.N);},A5:function(C){var A;if(C>255)C=255;if(C<0)C=0;if(C===this.B8)return;
this.B8=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.N);},Ab:function(C){if(
C)this.AD(0x1,0x0);else this.AD(0x0,0x1);},Ku:function(){if(!this.Cv)this.JW(this
);if(!this.CW)return false;var result=false;var bidi=this.CW;result=B.v2(bidi);return result;
},NB:function(){if(!this.Cv)this.JW(this);if(!this.CW)return false;var result=false;
var bidi=this.CW;result=B.zZ(bidi);return result;},Kp:function(){var A;if((this.
String===B.jV)||!this.BO)return AR;if(!this.Cv)this.JW(this);if(this.A6===B.jV)return AR;
var leading=this.BO.Leading;var JY=(this.BO.Ascent+this.BO.Descent)+this.BO.Leading;
if(B.aaX(this.FM,AH))this.FM=[this.BO.L1(this.A6),this.FM[1]];this.FM=[this.FM[0
],((this.A6.charCodeAt(0)||0)*JY)-leading];var Aw=this.EG;var AT=this.N;var width=
AT[2]-AT[0];var height=AT[3]-AT[1];var AA=[0,0,width,height];var Am=[].concat(AA.
slice(0,2),B.abf(AA.slice(0,2),this.FM));if(((Aw&0x80)===0x80)){if(this.Ku())Aw=(
Aw&~0x80)|0x4;else Aw=(Aw&~0x80)|0x1;}if(((Aw&0x40)===0x40)){var EE;EE=width;if(
EE<0)EE=0;if(EE>(Am[2]-Am[0]))Am=B.abL(Am,EE);}if((!!(Aw&0x110)&&!!(Aw&0x28))&&((
Am[3]-Am[1])>(AA[3]-AA[1])))Aw&=~0x110;if(!!(Aw&0x110))Aw&=~0x28;if((((Aw&0x2)===
0x2)&&!!(Aw&0x5))&&((Am[2]-Am[0])>(AA[2]-AA[0])))Aw&=~0x2;if(((Aw&0x2)===0x2))Aw&=
~0x5;if((Am[2]-Am[0])!==(AA[2]-AA[0])){if(((Aw&0x4)===0x4))Am=B.abM(Am,AA[2]-(Am[
2]-Am[0]));else if(((Aw&0x2)===0x2))Am=B.abM(Am,(AA[0]+(((AA[2]-AA[0])/2)|0))-(((
Am[2]-Am[0])/2)|0));}if((Am[3]-Am[1])!==(AA[3]-AA[1])){if(((Aw&0x20)===0x20))Am=
B.abO(Am,AA[3]-(Am[3]-Am[1]));else if(((Aw&0x100)===0x100))Am=B.abO(Am,((AA[1]+(((
AA[3]-AA[1])/2)|0))-(((Am[3]-Am[1])/2)|0))+(((this.BO.Descent-this.BO.Ascent)/2)|
0));else if(((Aw&0x10)===0x10))Am=B.abO(Am,(AA[1]+(((AA[3]-AA[1])/2)|0))-(((Am[3
]-Am[1])/2)|0));}Am=B.abh(Am,AT.slice(0,2));return Am;},NK:function(){return this.
Bc;},_Init:function(aArg){B.Core.AN._Init.call(this,aArg);this.__proto__=D.Text;
},_Done:function(){this.CS();this.__proto__=B.Core.AN;B.Core.AN._Done.call(this);
},_Mark:function(E){var A;B.Core.AN._Mark.call(this,E);if((A=this.BO)&&(A._cycle
!=E))A._Mark(A._cycle=E);},_className:"Views::Text"};D.Hq={E8:B.wf,Au:B.abi(4,3,
0,null),KU:B.wf,C_:0,G4:0,CH:function(C){if(B.aaX(C,this.By))return;B.Core.D3.CH.
call(this,C);this.Au.Set(3,0,C[0]);this.Au.Set(3,1,C[1]);this.Au.Set(3,2,1);this.
C_=0x45;B.pe([this,this.HE],this);},CG:function(C){if(B.aaX(C,this.BZ))return;B.
Core.D3.CG.call(this,C);this.Au.Set(2,0,C[0]);this.Au.Set(2,1,C[1]);this.Au.Set(
2,2,1);this.C_=0x45;B.pe([this,this.HE],this);},CF:function(C){if(B.aaX(C,this.Bx
))return;B.Core.D3.CF.call(this,C);this.Au.Set(1,0,C[0]);this.Au.Set(1,1,C[1]);this.
Au.Set(1,2,1);this.C_=0x45;B.pe([this,this.HE],this);},CE:function(C){if(B.aaX(C
,this.BY))return;B.Core.D3.CE.call(this,C);this.Au.Set(0,0,C[0]);this.Au.Set(0,1
,C[1]);this.Au.Set(0,2,1);this.C_=0x45;B.pe([this,this.HE],this);},MA:function(){
return;},HE:function(As){var A;if(this.C_===0x00)return;if(this.C_===0x45){var CP=
B._NewObject(B.Graphics.Mi,0);CP=CP.Nr(this.Au.Get(0,0),this.Au.Get(0,1),this.Au.
Get(1,0),this.Au.Get(1,1),this.Au.Get(2,0),this.Au.Get(2,1),this.Au.Get(3,0),this.
Au.Get(3,1));if(!!CP){CP.I4(0,0);this.Au.Set(0,2,CP.Il*240);CP.I4(1,0);this.Au.Set(
1,2,CP.Il*240);CP.I4(1,1);this.Au.Set(2,2,CP.Il*240);CP.I4(0,1);this.Au.Set(3,2,
CP.Il*240);}this.MA();}this.G4=this.C_;this.C_=0x00;if(!!this.G&&((this.F&0x1)===
0x1))this.G.Ac(this.GetClipping());},NZ:function(C){if(B.aaX(C,this.KU))return;this.
KU=C;if((this.G4!==0x45)&&(this.C_===0x00)){this.C_=this.G4;B.pe([this,this.HE],
this);}},Oj:function(Mo,aAngle,Ms,Mt){var A;if(!this.E8[0]||!this.E8[1])return;var
J5=[].concat(AH,this.E8);var J4=this.KU;var MK=(J5[0]-J4[0])*Ms;var I=(J5[2]-J4[
0])*Ms;var M8=(J5[1]-J4[1])*Mt;var Mu=(J5[3]-J4[1])*Mt;var JH=Math.cos(aAngle*B.
k$);var J3=Math.sin(aAngle*B.k$);var ML=MK*JH;var MM=MK*J3;var M0=I*JH;var M1=I*
J3;var M9=M8*JH;var M_=M8*J3;var Mv=Mu*JH;var Mw=Mu*J3;var JK=Mo[0];var JL=Mo[1];
this.Au.Set(0,0,(JK+ML)+M_);this.Au.Set(0,1,(JL-MM)+M9);this.Au.Set(1,0,(JK+M0)+
M_);this.Au.Set(1,1,(JL-M1)+M9);this.Au.Set(2,0,(JK+M0)+Mw);this.Au.Set(2,1,(JL-
M1)+Mv);this.Au.Set(3,0,(JK+ML)+Mw);this.Au.Set(3,1,(JL-MM)+Mv);this.Au.Set(0,2,
1);this.Au.Set(1,2,1);this.Au.Set(2,2,1);this.Au.Set(3,2,1);if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.GetClipping());this.BY=[(this.Au.Get(0,0)+0.5)|0,(this.
Au.Get(0,1)+0.5)|0];this.Bx=[(this.Au.Get(1,0)+0.5)|0,(this.Au.Get(1,1)+0.5)|0];
this.BZ=[(this.Au.Get(2,0)+0.5)|0,(this.Au.Get(2,1)+0.5)|0];this.By=[(this.Au.Get(
3,0)+0.5)|0,(this.Au.Get(3,1)+0.5)|0];this.G4=0x45;this.C_=0x00;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.GetClipping());this.MA();},_Init:function(aArg){B.Core.
D3._Init.call(this,aArg);(this.Au=[]).__proto__=D.Hq.Au;this.__proto__=D.Hq;this.
F=0x3;},_className:"Views::WarpView"};D.K8={timer:null,O:null,AJ:0,AO:0,Bc:0xFFFFFFFF
,BL:false,Cj:function(AK,aClip,aOffset,Az,aBlend){var A;var AL=0;if(this.AO>=0)AL=
this.AO;if(!this.O||(AL>=this.O.NoOfFrames))return;this.O.Update();var Iv;var Iw;
var Ix;var Iy;var Ah=this.Bc;var Bb=(((Az+1)*255)>>8)+1;var JS=aOffset[0];var JT=
aOffset[1];var T=[].concat(AH,this.E8);aBlend=aBlend&&((this.F&0x2)===0x2);Iv=Iw=
Ix=Iy=Ah;if(Bb<256){Iv=(Iv&0x00FFFFFF)|((((((Iv>>24)&0xFF)*Bb)>>8)&0xFF)<<24);Iw=(
Iw&0x00FFFFFF)|((((((Iw>>24)&0xFF)*Bb)>>8)&0xFF)<<24);Ix=(Ix&0x00FFFFFF)|((((((Ix>>
24)&0xFF)*Bb)>>8)&0xFF)<<24);Iy=(Iy&0x00FFFFFF)|((((((Iy>>24)&0xFF)*Bb)>>8)&0xFF
)<<24);}aClip=B.aaV(aClip,B.abh(AR,aOffset));AK.Oq(aClip,this.O,AL,this.Au.Get(0
,0)+JS,this.Au.Get(0,1)+JT,this.Au.Get(0,2),this.Au.Get(1,0)+JS,this.Au.Get(1,1)+
JT,this.Au.Get(1,2),this.Au.Get(2,0)+JS,this.Au.Get(2,1)+JT,this.Au.Get(2,2),this.
Au.Get(3,0)+JS,this.Au.Get(3,1)+JT,this.Au.Get(3,2),T,Iv,Iw,Ix,Iy,aBlend,true);}
,DM:function(As){var A;var MS=this.E8;if(!!this.O)this.E8=this.O.FrameSize;else this.
E8=AH;if(((B.aaX(MS,this.E8)||((this.G4===0x45)&&(this.C_===0x00)))&&!!this.G)&&((
this.F&0x1)===0x1))this.G.Ac(this.GetClipping());if(((this.G4!==0x45)&&(this.C_===
0x00))&&!B.aaX(MS,this.E8)){this.C_=this.G4;B.pe([this,this.HE],this);}},BE:function(
As){var A;var AL=this.AO;var Bl=0;if(!!this.O)Bl=this.O.NoOfFrames*this.O.FrameDelay;
if((!!this.timer&&(this.AO<0))&&(Bl>0))this.AJ=this.timer.Ax;if(!!this.timer&&(Bl>
0)){var Al=(this.timer.Ax-this.AJ)|0;AL=(Al/this.O.FrameDelay)|0;if(Al>=Bl){AL=AL
%this.O.NoOfFrames;this.AJ=this.timer.Ax-(Al%Bl);}}if(((AL!==this.AO)&&!!this.G)&&((
this.F&0x1)===0x1))this.G.Ac(this.GetClipping());this.AO=AL;if(!Bl&&!!this.timer
){B.z9([this,this.BE],this.timer,0);this.timer=null;}},CD:function(C){var A;if(this.
BL===C)return;this.BL=C;this.AO=-1;if(!C&&!!this.timer){B.z9([this,this.BE],this.
timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(B.aci.ET);B.zV([this
,this.BE],this.timer,0);B.pe([this,this.BE],this);}if(!!this.G&&((this.F&0x1)===
0x1))this.G.Ac(this.GetClipping());},A9:function(C){var A;if(C===this.Bc)return;
this.Bc=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping());},AQ:function(
C){if(C===this.O)return;if(!!this.O&&this.O.En)B.z9([this,this.DM],this.O,0);this.
O=C;this.AO=-1;if(!!C&&C.En)B.zV([this,this.DM],C,0);if(this.BL){this.CD(false);
this.CD(true);}this.DM(this);},_Init:function(aArg){D.Hq._Init.call(this,aArg);this.
__proto__=D.K8;},_Mark:function(E){var A;D.Hq._Mark.call(this,E);if((A=this.timer
)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.O)&&(A._cycle!=E))A._Mark(A._cycle=
E);},_className:"Views::WarpImage"};D.H$={CU:null,Bc:0xFFFFFFFF,Di:B.wf,Width:1,
CS:function(){this.Pt();},Cj:function(AK,aClip,aOffset,Az,aBlend){if(!this.CU)return;
var V;var Ag;var Ae;var Af;var Ah=this.Bc;Az=Az+1;V=Ag=Ae=Af=Ah;if(Az<256){V=(V&
0x00FFFFFF)|((((Az*((V>>24)&0xFF))>>8)&0xFF)<<24);Ag=(Ag&0x00FFFFFF)|((((Az*((Ag>>
24)&0xFF))>>8)&0xFF)<<24);Ae=(Ae&0x00FFFFFF)|((((Az*((Ae>>24)&0xFF))>>8)&0xFF)<<
24);Af=(Af&0x00FFFFFF)|((((Az*((Af>>24)&0xFF))>>8)&0xFF)<<24);}AK.H$(aClip,this.
CU,B.abh(this.N,aOffset),false,this.Di,this.Width,0,0,0,3,V,Ag,Af,Ae,true,true);
},Pt:function(){return;},Nc:function(As){var A;if(!!this.G&&((this.F&0x1)===0x1)
)this.G.Ac(this.N);},A9:function(C){var A;if(C===this.Bc)return;this.Bc=C;if((!!
this.G&&((this.F&0x1)===0x1))&&!!this.CU)this.G.Ac(this.N);},NW:function(C){var A;
if(B.aaX(C,this.Di))return;this.Di=C;if((!!this.G&&((this.F&0x1)===0x1))&&!!this.
CU)this.G.Ac(this.N);},KR:function(C){var A;if(C<0)C=0;if(C===this.Width)return;
this.Width=C;if((!!this.G&&((this.F&0x1)===0x1))&&!!this.CU)this.G.Ac(this.N);},
NX:function(C){var A;if(C===this.CU)return;if(!!this.CU)B.z9([this,this.Nc],this.
CU,0);this.CU=C;if(!!this.CU)B.zV([this,this.Nc],this.CU,0);if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.N);},_Init:function(aArg){B.Core.AN._Init.call(this
,aArg);this.__proto__=D.H$;},_Done:function(){this.CS();this.__proto__=B.Core.AN;
B.Core.AN._Done.call(this);},_Mark:function(E){var A;B.Core.AN._Mark.call(this,E
);if((A=this.CU)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Views::StrokePath"
};D.Qe={Nj:0x1,Ni:0x2,Nk:0x4,Nn:0x8,Nm:0x10,Nl:0x20,QH:0x40,QI:0x80,QK:0x100};D.
QL={Nj:0x1,Ni:0x2,Nk:0x4,Nn:0x8,Nm:0x10,Nl:0x20,PU:0x40,PT:0x80,PZ:0x100};D.Qp={
Qo:0,QF:1,QD:2,QE:3};
D._Init=function(){D.Fw.__proto__=B.Core.AN;D.Cy.__proto__=B.Core.AN;D.He.__proto__=
B.Core.AN;D.AZ.__proto__=B.Core.AN;D.Js.__proto__=B.Core.AN;D.Text.__proto__=B.Core.
AN;D.Hq.__proto__=B.Core.D3;D.K8.__proto__=D.Hq;D.H$.__proto__=B.Core.AN;};D._ReInit=
function(){};D.B$=function(E){};return D;})();

/* Embedded Wizard */