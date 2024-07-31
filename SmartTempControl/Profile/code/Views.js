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
D.Fw={FQ:0xFFFFFFFF,FR:0xFFFFFFFF,FS:0xFFFFFFFF,DQ:0xFFFFFFFF,A$:0xFFFFFFFF,Cj:function(
AK,aClip,aOffset,Az,aBlend){var A;var W=this.DQ;var Ag=this.FS;var Ae=this.FQ;var
Af=this.FR;var Ah=this.A$;aBlend=aBlend&&((this.F&0x2)===0x2);Az=Az+1;if((((W===
Ag)&&(Ae===Af))&&(W===Ae))&&(W===0xFFFFFFFF))W=Ag=Ae=Af=Ah;else if(Ah!==0xFFFFFFFF
){W=(W&0x00FFFFFF)|((((((W>>24)&0xFF)*(((Ah>>24)&0xFF)+1))>>8)&0xFF)<<24);W=(W&0xFFFFFF00
)|((((W&0xFF)*((Ah&0xFF)+1))>>8)&0xFF);W=(W&0xFFFF00FF)|((((((W>>8)&0xFF)*(((Ah>>
8)&0xFF)+1))>>8)&0xFF)<<8);W=(W&0xFF00FFFF)|((((((W>>16)&0xFF)*(((Ah>>16)&0xFF)+
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
0xFF)*(((Ah>>16)&0xFF)+1))>>8)&0xFF)<<16);}if(Az<256){W=(W&0x00FFFFFF)|((((Az*((
W>>24)&0xFF))>>8)&0xFF)<<24);Ag=(Ag&0x00FFFFFF)|((((Az*((Ag>>24)&0xFF))>>8)&0xFF
)<<24);Ae=(Ae&0x00FFFFFF)|((((Az*((Ae>>24)&0xFF))>>8)&0xFF)<<24);Af=(Af&0x00FFFFFF
)|((((Az*((Af>>24)&0xFF))>>8)&0xFF)<<24);}AK.Kn(aClip,B.abh(this.N,aOffset),W,Ag
,Af,Ae,aBlend);},Ji:function(C){var A;if(C===this.FQ)return;this.FQ=C;if(!!this.
G&&((this.F&0x1)===0x1))this.G.Ac(this.N);},Jj:function(C){var A;if(C===this.FR)
return;this.FR=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.N);},HW:function(
C){var A;if(C===this.FS)return;this.FS=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ac(this.N);},Gp:function(C){var A;if(C===this.DQ)return;this.DQ=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ac(this.N);},A2:function(C){var A;if(C===this.A$)return;
this.A$=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.N);},NO:function(C){if(
C)this.AD(0x2,0x0);else this.AD(0x0,0x2);},Ab:function(C){if(C)this.AD(0x1,0x0);
else this.AD(0x0,0x1);},KM:function(){return this.A$;},_Init:function(aArg){B.Core.
AN._Init.call(this,aArg);this.__proto__=D.Fw;},_className:"Views::Rectangle"};D.
Cz={Width:1,FQ:0xFFFFFFFF,FR:0xFFFFFFFF,FS:0xFFFFFFFF,DQ:0xFFFFFFFF,A$:0xFFFFFFFF
,Cj:function(AK,aClip,aOffset,Az,aBlend){var A;var W=this.DQ;var Ag=this.FS;var Ae=
this.FQ;var Af=this.FR;var Ah=this.A$;aBlend=aBlend&&((this.F&0x2)===0x2);Az=Az+
1;if((((W===Ag)&&(Ae===Af))&&(W===Ae))&&(W===0xFFFFFFFF))W=Ag=Ae=Af=Ah;else if(Ah
!==0xFFFFFFFF){W=(W&0x00FFFFFF)|((((((W>>24)&0xFF)*(((Ah>>24)&0xFF)+1))>>8)&0xFF
)<<24);W=(W&0xFFFFFF00)|((((W&0xFF)*((Ah&0xFF)+1))>>8)&0xFF);W=(W&0xFFFF00FF)|((((((
W>>8)&0xFF)*(((Ah>>8)&0xFF)+1))>>8)&0xFF)<<8);W=(W&0xFF00FFFF)|((((((W>>16)&0xFF
)*(((Ah>>16)&0xFF)+1))>>8)&0xFF)<<16);Ag=(Ag&0x00FFFFFF)|((((((Ag>>24)&0xFF)*(((
Ah>>24)&0xFF)+1))>>8)&0xFF)<<24);Ag=(Ag&0xFFFFFF00)|((((Ag&0xFF)*((Ah&0xFF)+1))>>
8)&0xFF);Ag=(Ag&0xFFFF00FF)|((((((Ag>>8)&0xFF)*(((Ah>>8)&0xFF)+1))>>8)&0xFF)<<8);
Ag=(Ag&0xFF00FFFF)|((((((Ag>>16)&0xFF)*(((Ah>>16)&0xFF)+1))>>8)&0xFF)<<16);Ae=(Ae&
0x00FFFFFF)|((((((Ae>>24)&0xFF)*(((Ah>>24)&0xFF)+1))>>8)&0xFF)<<24);Ae=(Ae&0xFFFFFF00
)|((((Ae&0xFF)*((Ah&0xFF)+1))>>8)&0xFF);Ae=(Ae&0xFFFF00FF)|((((((Ae>>8)&0xFF)*(((
Ah>>8)&0xFF)+1))>>8)&0xFF)<<8);Ae=(Ae&0xFF00FFFF)|((((((Ae>>16)&0xFF)*(((Ah>>16)&
0xFF)+1))>>8)&0xFF)<<16);Af=(Af&0x00FFFFFF)|((((((Af>>24)&0xFF)*(((Ah>>24)&0xFF)+
1))>>8)&0xFF)<<24);Af=(Af&0xFFFFFF00)|((((Af&0xFF)*((Ah&0xFF)+1))>>8)&0xFF);Af=(
Af&0xFFFF00FF)|((((((Af>>8)&0xFF)*(((Ah>>8)&0xFF)+1))>>8)&0xFF)<<8);Af=(Af&0xFF00FFFF
)|((((((Af>>16)&0xFF)*(((Ah>>16)&0xFF)+1))>>8)&0xFF)<<16);}if(Az<256){W=(W&0x00FFFFFF
)|((((Az*((W>>24)&0xFF))>>8)&0xFF)<<24);Ag=(Ag&0x00FFFFFF)|((((Az*((Ag>>24)&0xFF
))>>8)&0xFF)<<24);Ae=(Ae&0x00FFFFFF)|((((Az*((Ae>>24)&0xFF))>>8)&0xFF)<<24);Af=(
Af&0x00FFFFFF)|((((Az*((Af>>24)&0xFF))>>8)&0xFF)<<24);}AK.Nw(aClip,B.abh(this.N,
aOffset),this.Width,W,Ag,Af,Ae,aBlend);},KV:function(C){var A;if(C<0)C=0;if(C===
this.Width)return;this.Width=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.
N);},Ji:function(C){var A;if(C===this.FQ)return;this.FQ=C;if(!!this.G&&((this.F&
0x1)===0x1))this.G.Ac(this.N);},Jj:function(C){var A;if(C===this.FR)return;this.
FR=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.N);},HW:function(C){var A;
if(C===this.FS)return;this.FS=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.
N);},Gp:function(C){var A;if(C===this.DQ)return;this.DQ=C;if(!!this.G&&((this.F&
0x1)===0x1))this.G.Ac(this.N);},A2:function(C){var A;if(C===this.A$)return;this.
A$=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.N);},_Init:function(aArg){
B.Core.AN._Init.call(this,aArg);this.__proto__=D.Cz;},_className:"Views::Border"
};D.Hg={timer:null,O:null,AO:-1,A$:0xFFFFFFFF,HN:0x1F,Ek:0,AJ:0,Gl:B.wf,BL:false
,Cj:function(AK,aClip,aOffset,Az,aBlend){var A;var AL=this.Ek;if(this.AO>=0)AL=this.
AO;if(!this.O||(AL>=this.O.NoOfFrames))return;this.O.Update();var W;var Ag;var Af;
var Ae;var Ah=this.A$;var Bc=(((Az+1)*255)>>8)+1;var Ca=this.HN;var I=B.abh(this.
N,aOffset);var J3=B.abe([I[2]-I[0],I[3]-I[1]],this.Gl);aBlend=aBlend&&((this.F&0x2
)===0x2);W=Ag=Ae=Af=Ah;if(Bc<256){W=(W&0x00FFFFFF)|((((((W>>24)&0xFF)*Bc)>>8)&0xFF
)<<24);Ag=(Ag&0x00FFFFFF)|((((((Ag>>24)&0xFF)*Bc)>>8)&0xFF)<<24);Af=(Af&0x00FFFFFF
)|((((((Af>>24)&0xFF)*Bc)>>8)&0xFF)<<24);Ae=(Ae&0x00FFFFFF)|((((((Ae>>24)&0xFF)*
Bc)>>8)&0xFF)<<24);}if(((this.Gl[0]>0)&&(J3[0]>0))&&!((Ca&0x5)===0x5)){var d=((this.
O.FrameSize[0]/3)|0)-J3[0];if(((Ca&0x1)===0x1)){if(aClip[2]>I[2])aClip=B.abN(aClip
,I[2]);if(d>0)I=B.abN(I,I[2]+d);Ca=Ca|0x4;}else if(((Ca&0x4)===0x4)){if(aClip[0]<
I[0])aClip=[].concat(I[0],aClip.slice(1,4));if(d>0)I=[].concat(I[0]-d,I.slice(1,
4));Ca=Ca|0x1;}else{if(aClip[0]<I[0])aClip=[].concat(I[0],aClip.slice(1,4));if(aClip[
2]>I[2])aClip=B.abN(aClip,I[2]);if(d>0){I=[].concat(I[0]-((d/2)|0),I.slice(1,4));
I=B.abN(I,(I[2]+d)-((d/2)|0));}Ca=Ca|0x5;}}if(((this.Gl[1]>0)&&(J3[1]>0))&&!((Ca&
0xA)===0xA)){var d=((this.O.FrameSize[1]/3)|0)-J3[1];if(((Ca&0x2)===0x2)){if(aClip[
3]>I[3])aClip=[].concat(aClip.slice(0,3),I[3]);if(d>0)I=[].concat(I.slice(0,3),I[
3]+d);Ca=Ca|0x8;}else if(((Ca&0x8)===0x8)){if(aClip[1]<I[1])aClip=B.abP(aClip,I[
1]);if(d>0)I=B.abP(I,I[1]-d);Ca=Ca|0x2;}else{if(aClip[1]<I[1])aClip=B.abP(aClip,
I[1]);if(aClip[3]>I[3])aClip=[].concat(aClip.slice(0,3),I[3]);if(d>0){I=B.abP(I,
I[1]-((d/2)|0));I=[].concat(I.slice(0,3),(I[3]+d)-((d/2)|0));}Ca=Ca|0xA;}}AK.Nv(
aClip,this.O,AL,I,Ca,W,Ag,Af,Ae,aBlend);},DN:function(As){var A;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.N);},BE:function(As){var A;var AL=this.AO;var Bl=0;
if(!!this.O)Bl=this.O.NoOfFrames*this.O.FrameDelay;if((!!this.timer&&(this.AO<0)
)&&(Bl>0))this.AJ=this.timer.Ax-(this.Ek*this.O.FrameDelay);if(!!this.timer&&(Bl>
0)){var Al=(this.timer.Ax-this.AJ)|0;AL=(Al/this.O.FrameDelay)|0;if(Al>=Bl){AL=AL
%this.O.NoOfFrames;this.AJ=this.timer.Ax-(Al%Bl);}}if(((AL!==this.AO)&&!!this.G)&&((
this.F&0x1)===0x1))this.G.Ac(this.N);this.AO=AL;if(!Bl&&!!this.timer){B.z9([this
,this.BE],this.timer,0);this.timer=null;}},A2:function(C){var A;if(C===this.A$)return;
this.A$=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.N);},CF:function(C){var
A;if(this.BL===C)return;this.BL=C;this.AO=-1;if(!C&&!!this.timer){B.z9([this,this.
BE],this.timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(B.aci.ET);B.
zV([this,this.BE],this.timer,0);B.pe([this,this.BE],this);}if(!!this.G&&((this.F&
0x1)===0x1))this.G.Ac(this.N);},L$:function(C){var A;if(C===this.HN)return;this.
HN=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.N);},Cf:function(C){var A;
if(C<0)C=0;if((C===this.Ek)&&(this.AO===-1))return;this.Ek=C;if(!this.timer)this.
AO=-1;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.N);},AQ:function(C){var A;
if(C===this.O)return;if(!!this.O&&this.O.En)B.z9([this,this.DN],this.O,0);this.O=
C;this.AO=-1;if(!!C&&C.En)B.zV([this,this.DN],C,0);if(this.BL){this.CF(false);this.
CF(true);}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.N);},Ab:function(C){if(
C)this.AD(0x1,0x0);else this.AD(0x0,0x1);},Mb:function(C){var A;if(C[0]<0)C=[0,C[
1]];if(C[1]<0)C=[C[0],0];if(B.aaX(C,this.Gl))return;this.Gl=C;if((!!this.G&&((this.
F&0x1)===0x1))&&!((this.HN&0xF)===0xF))this.G.Ac(this.N);},_Init:function(aArg){
B.Core.AN._Init.call(this,aArg);this.__proto__=D.Hg;},_Mark:function(E){var A;B.
Core.AN._Mark.call(this,E);if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);
if((A=this.O)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Views::Frame"};D.
AZ={timer:null,O:null,AJ:0,AO:0,DQ:0xFFFFFFFF,A$:0xFFFFFFFF,EG:0x12,Ek:0,B8:255,
BL:false,Cj:function(AK,aClip,aOffset,Az,aBlend){var A;var AL=this.Ek;if(this.AO>=
0)AL=this.AO;if(!this.O||(AL>=this.O.NoOfFrames))return;this.O.Update();var T=this.
Kq();var Ch=this.O.FrameSize;if((T[0]>=T[2])||(T[1]>=T[3]))return;var W=this.DQ;
var Ag=0xFFFFFFFF;var Af=0xFFFFFFFF;var Ae=0xFFFFFFFF;var Ah=this.A$;var Bc=(((Az+
1)*this.B8)>>8)+1;aBlend=aBlend&&((this.F&0x2)===0x2);if(((W===0xFFFFFFFF)&&(W===
0xFFFFFFFF))&&(W===0xFFFFFFFF))W=Ag=Ae=Af=Ah;else if(Ah!==0xFFFFFFFF){W=(W&0x00FFFFFF
)|((((((W>>24)&0xFF)*(((Ah>>24)&0xFF)+1))>>8)&0xFF)<<24);W=(W&0xFFFFFF00)|((((W&
0xFF)*((Ah&0xFF)+1))>>8)&0xFF);W=(W&0xFFFF00FF)|((((((W>>8)&0xFF)*(((Ah>>8)&0xFF
)+1))>>8)&0xFF)<<8);W=(W&0xFF00FFFF)|((((((W>>16)&0xFF)*(((Ah>>16)&0xFF)+1))>>8)&
0xFF)<<16);Ag=(Ag&0x00FFFFFF)|((((255*(((Ah>>24)&0xFF)+1))>>8)&0xFF)<<24);Ag=(Ag&
0xFFFFFF00)|((((Ag&0xFF)*((Ah&0xFF)+1))>>8)&0xFF);Ag=(Ag&0xFFFF00FF)|((((((Ag>>8
)&0xFF)*(((Ah>>8)&0xFF)+1))>>8)&0xFF)<<8);Ag=(Ag&0xFF00FFFF)|((((((Ag>>16)&0xFF)
*(((Ah>>16)&0xFF)+1))>>8)&0xFF)<<16);Ae=(Ae&0x00FFFFFF)|((((255*(((Ah>>24)&0xFF)+
1))>>8)&0xFF)<<24);Ae=(Ae&0xFFFFFF00)|((((Ae&0xFF)*((Ah&0xFF)+1))>>8)&0xFF);Ae=(
Ae&0xFFFF00FF)|((((((Ae>>8)&0xFF)*(((Ah>>8)&0xFF)+1))>>8)&0xFF)<<8);Ae=(Ae&0xFF00FFFF
)|((((((Ae>>16)&0xFF)*(((Ah>>16)&0xFF)+1))>>8)&0xFF)<<16);Af=(Af&0x00FFFFFF)|((((
255*(((Ah>>24)&0xFF)+1))>>8)&0xFF)<<24);Af=(Af&0xFFFFFF00)|((((Af&0xFF)*((Ah&0xFF
)+1))>>8)&0xFF);Af=(Af&0xFFFF00FF)|((((((Af>>8)&0xFF)*(((Ah>>8)&0xFF)+1))>>8)&0xFF
)<<8);Af=(Af&0xFF00FFFF)|((((((Af>>16)&0xFF)*(((Ah>>16)&0xFF)+1))>>8)&0xFF)<<16);
}if(Bc<256){W=(W&0x00FFFFFF)|((((((W>>24)&0xFF)*Bc)>>8)&0xFF)<<24);Ag=(Ag&0x00FFFFFF
)|((((((Ag>>24)&0xFF)*Bc)>>8)&0xFF)<<24);Af=(Af&0x00FFFFFF)|((((((Af>>24)&0xFF)*
Bc)>>8)&0xFF)<<24);Ae=(Ae&0x00FFFFFF)|((((((Ae>>24)&0xFF)*Bc)>>8)&0xFF)<<24);}if(
B.aaX([T[2]-T[0],T[3]-T[1]],Ch))AK.Nr(aClip,this.O,AL,B.abh(this.N,aOffset),B.abe(
this.N.slice(0,2),T.slice(0,2)),W,Ag,Af,Ae,aBlend);else AK.On(aClip,this.O,AL,B.
abh(T,aOffset),[].concat(AH,Ch),W,Ag,Af,Ae,aBlend,true);},DN:function(As){var A;
if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.N);},BE:function(As){var A;var AL=
this.AO;var Bl=0;if(!!this.O)Bl=this.O.NoOfFrames*this.O.FrameDelay;if((!!this.timer&&(
this.AO<0))&&(Bl>0))this.AJ=this.timer.Ax-(this.Ek*this.O.FrameDelay);if(!!this.
timer&&(Bl>0)){var Al=(this.timer.Ax-this.AJ)|0;AL=(Al/this.O.FrameDelay)|0;if(Al>=
Bl){AL=AL%this.O.NoOfFrames;this.AJ=this.timer.Ax-(Al%Bl);}}if(((AL!==this.AO)&&
!!this.G)&&((this.F&0x1)===0x1))this.G.Ac(this.N);this.AO=AL;if(!Bl&&!!this.timer
){B.z9([this,this.BE],this.timer,0);this.timer=null;}},Gp:function(C){var A;if(C===
this.DQ)return;this.DQ=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.N);},A2:
function(C){var A;if(C===this.A$)return;this.A$=C;if(!!this.G&&((this.F&0x1)===0x1
))this.G.Ac(this.N);},CF:function(C){var A;if(this.BL===C)return;this.BL=C;this.
AO=-1;if(!C&&!!this.timer){B.z9([this,this.BE],this.timer,0);this.timer=null;}if(
C){this.timer=B._GetAutoObject(B.aci.ET);B.zV([this,this.BE],this.timer,0);B.pe([
this,this.BE],this);}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.N);},Hj:function(
C){var A;if(C===this.EG)return;this.EG=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ac(this.N);},Cf:function(C){var A;if(C<0)C=0;if((C===this.Ek)&&(this.AO===-1))
return;this.Ek=C;if(!this.timer)this.AO=-1;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ac(this.N);},AQ:function(C){var A;if(C===this.O)return;if(!!this.O&&this.O.En)
B.z9([this,this.DN],this.O,0);this.O=C;this.AO=-1;if(!!C&&C.En)B.zV([this,this.DN
],C,0);if(this.BL){this.CF(false);this.CF(true);}if(!!this.G&&((this.F&0x1)===0x1
))this.G.Ac(this.N);},Ba:function(C){var A;if(C>255)C=255;if(C<0)C=0;if(C===this.
B8)return;this.B8=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.N);},Ab:function(
C){if(C)this.AD(0x1,0x0);else this.AD(0x0,0x1);},Kq:function(){var A;if(!this.O)
return AR;var Aw=this.EG;var Ch=this.O.FrameSize;var AT=this.N;var width=AT[2]-AT[
0];var height=AT[3]-AT[1];if(!Ch[0]||!Ch[1])return AR;var AA=[0,0,width,height];
var Am=AA;if(((Aw&0x40)===0x40)){var LX=((((AA[2]-AA[0])<<16)+((Ch[0]/2)|0))/Ch[
0])|0;var IY=((((AA[3]-AA[1])<<16)+((Ch[1]/2)|0))/Ch[1])|0;var Fc=LX;if(IY>Fc)Fc=
IY;Am=B.abL(Am,((Ch[0]*Fc)+32768)>>16);Am=B.abI(Am,((Ch[1]*Fc)+32768)>>16);}else
if(((Aw&0x80)===0x80)){var LX=((((AA[2]-AA[0])<<16)+((Ch[0]/2)|0))/Ch[0])|0;var IY=((((
AA[3]-AA[1])<<16)+((Ch[1]/2)|0))/Ch[1])|0;var Fc=LX;if(IY<Fc)Fc=IY;Am=B.abL(Am,((
Ch[0]*Fc)+32768)>>16);Am=B.abI(Am,((Ch[1]*Fc)+32768)>>16);}else if(!((Aw&0x100)===
0x100))Am=B.abK(Am,Ch);if((Am[2]-Am[0])!==(AA[2]-AA[0])){if(((Aw&0x4)===0x4))Am=
B.abM(Am,AA[2]-(Am[2]-Am[0]));else if(((Aw&0x2)===0x2))Am=B.abM(Am,(AA[0]+(((AA[
2]-AA[0])/2)|0))-(((Am[2]-Am[0])/2)|0));}if((Am[3]-Am[1])!==(AA[3]-AA[1])){if(((
Aw&0x20)===0x20))Am=B.abO(Am,AA[3]-(Am[3]-Am[1]));else if(((Aw&0x10)===0x10))Am=
B.abO(Am,(AA[1]+(((AA[3]-AA[1])/2)|0))-(((Am[3]-Am[1])/2)|0));}Am=B.abh(Am,AT.slice(
0,2));return Am;},_Init:function(aArg){B.Core.AN._Init.call(this,aArg);this.__proto__=
D.AZ;},_Mark:function(E){var A;B.Core.AN._Mark.call(this,E);if((A=this.timer)&&(
A._cycle!=E))A._Mark(A._cycle=E);if((A=this.O)&&(A._cycle!=E))A._Mark(A._cycle=E
);},_className:"Views::Image"};D.Jt={timer:null,O:null,AO:0,B8:255,AJ:0,BL:false
,Cj:function(AK,aClip,aOffset,Az,aBlend){var A;var AL=0;if(this.AO>=0)AL=this.AO;
if(!this.O||(AL>=this.O.NoOfFrames))return;this.O.Update();var W;var Ag;var Af;var
Ae;var Bc=(((Az+1)*this.B8)>>8)+1;aBlend=aBlend&&((this.F&0x2)===0x2);W=Ag=Ae=Af=
0xFFFFFFFF;if(Bc<256){W=(W&0x00FFFFFF)|((((255*Bc)>>8)&0xFF)<<24);Ag=(Ag&0x00FFFFFF
)|((((255*Bc)>>8)&0xFF)<<24);Af=(Af&0x00FFFFFF)|((((255*Bc)>>8)&0xFF)<<24);Ae=(Ae&
0x00FFFFFF)|((((255*Bc)>>8)&0xFF)<<24);}AK.Oq(aClip,this.O,AL,B.abh(this.N,aOffset
),[].concat(AH,this.O.FrameSize),AH,W,Ag,Af,Ae,aBlend);},DN:function(As){var A;if(
!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.N);},BE:function(As){var A;var AL=
this.AO;var Bl=0;if(!!this.O)Bl=this.O.NoOfFrames*this.O.FrameDelay;if((!!this.timer&&(
this.AO<0))&&(Bl>0))this.AJ=this.timer.Ax;if(!!this.timer&&(Bl>0)){var Al=(this.
timer.Ax-this.AJ)|0;AL=(Al/this.O.FrameDelay)|0;if(Al>=Bl){AL=AL%this.O.NoOfFrames;
this.AJ=this.timer.Ax-(Al%Bl);}}if(((AL!==this.AO)&&!!this.G)&&((this.F&0x1)===0x1
))this.G.Ac(this.N);this.AO=AL;if(!Bl&&!!this.timer){B.z9([this,this.BE],this.timer
,0);this.timer=null;}},CF:function(C){var A;if(this.BL===C)return;this.BL=C;this.
AO=-1;if(!C&&!!this.timer){B.z9([this,this.BE],this.timer,0);this.timer=null;}if(
C){this.timer=B._GetAutoObject(B.aci.ET);B.zV([this,this.BE],this.timer,0);B.pe([
this,this.BE],this);}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.N);},AQ:function(
C){var A;if(C===this.O)return;if(!!this.O&&this.O.En)B.z9([this,this.DN],this.O,
0);this.O=C;this.AO=-1;if(!!C&&C.En)B.zV([this,this.DN],C,0);if(this.BL){this.CF(
false);this.CF(true);}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.N);},Ba:function(
C){var A;if(C>255)C=255;if(C<0)C=0;if(C===this.B8)return;this.B8=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ac(this.N);},Ab:function(C){if(C)this.AD(0x1,0x0);else
this.AD(0x0,0x1);},Hh:function(){return this.B8;},_Init:function(aArg){B.Core.AN.
_Init.call(this,aArg);this.__proto__=D.Jt;},_Mark:function(E){var A;B.Core.AN._Mark.
call(this,E);if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.O)&&(
A._cycle!=E))A._Mark(A._cycle=E);},_className:"Views::Wallpaper"};D.Text={BO:null
,A6:B.jV,String:B.jV,CW:null,FM:B.wf,EG:0x12,A$:0xFFFFFFFF,B8:255,Hu:false,Hc:false
,Kk:false,Cw:false,CT:function(){if(!!this.CW){this.LC(this.CW);this.CW=null;}},
Cj:function(AK,aClip,aOffset,Az,aBlend){var A;if((this.A6===B.jV)||!this.BO)return;
var Aw=this.EG;var font=this.BO;var AA=B.abh(this.N,aOffset);var W;var Ag;var Af;
var Ae;var Po=this.A$;var Bc=(((Az+1)*this.B8)>>8)+1;var Ea=this.A6.charCodeAt(0
)||0;var T=B.abh(this.Kq(),aOffset);var MT=[AA[0]-T[0],(AA[1]-T[1])-font.Ascent];
if(Ea<1)return;W=Ag=Ae=Af=Po;if(Bc<256){W=(W&0x00FFFFFF)|((((((W>>24)&0xFF)*Bc)>>
8)&0xFF)<<24);Ag=(Ag&0x00FFFFFF)|((((((Ag>>24)&0xFF)*Bc)>>8)&0xFF)<<24);Af=(Af&0x00FFFFFF
)|((((((Af>>24)&0xFF)*Bc)>>8)&0xFF)<<24);Ae=(Ae&0x00FFFFFF)|((((((Ae>>24)&0xFF)*
Bc)>>8)&0xFF)<<24);}if(((Aw&0x80)===0x80)){if(this.Kv())Aw=(Aw&~0x80)|0x4;else Aw=(
Aw&~0x80)|0x1;}if((Ea===1)&&!((Aw&0x40)===0x40)){AK.L3(aClip,font,this.A6,2,(this.
A6.charCodeAt(1)||0)-1,AA,MT,0,0,W,Ag,Af,Ae,true);return;}var leading=font.Leading;
var LW=(font.Ascent+font.Descent)+leading;var Pm=aClip[1]-T[1];var Pn=aClip[3]-T[
1];var Lt=T[2]-T[0];var BK=0;var K=1;var Ah=this.A6.charCodeAt(1)||0;while(((BK+
LW)<Pm)&&(Ah>0)){K=K+Ah;BK=BK+LW;Ah=this.A6.charCodeAt(K)||0;}while((BK<Pn)&&(Ah>
0)){var G4=B.abe(MT,[0,BK]);var M6=0;var JQ=false;if(((((Aw&0x40)===0x40)&&((this.
A6.charCodeAt((K+Ah)-1)||0)!==0x0A))&&((this.A6.charCodeAt(K+1)||0)!==0x0A))&&((
this.A6.charCodeAt(K+Ah)||0)!==0x00))JQ=true;if(JQ&&!!(Aw&0x6)){var M5=K+Ah;var MA=
this.A6.indexOf(String.fromCharCode(0x20),K+1);var MB=this.A6.indexOf(String.fromCharCode(
0xA0),K+1);if(((MA<0)||(MA>=M5))&&((MB<0)||(MB>=M5)))JQ=false;}if(JQ)M6=Lt;else if(((
Aw&0x4)===0x4))G4=[(G4[0]-Lt)+font.HP(this.A6,K+1,Ah-1),G4[1]];else if(((Aw&0x2)===
0x2))G4=[(G4[0]-((Lt/2)|0))+((font.HP(this.A6,K+1,Ah-1)/2)|0),G4[1]];AK.L3(aClip
,font,this.A6,K+1,Ah-1,AA,G4,M6,0,W,Ag,Af,Ae,true);K=K+Ah;BK=BK+LW;Ah=this.A6.charCodeAt(
K)||0;}},P:function(C){var A;if(B.aaY(C,this.N))return;var M4;M4=((A=this.N)[2]-
A[0])!==(C[2]-C[0]);if(((M4&&this.Hu)&&this.Cw)&&!((this.F&0x2000)===0x2000)){this.
A6=B.jV;this.Cw=false;B.pe([this,this.FH],this);}if(((this.Hc&&this.Cw)&&!B.aaX([(
A=this.N)[2]-A[0],A[3]-A[1]],[C[2]-C[0],C[3]-C[1]]))&&!((this.F&0x2000)===0x2000
)){this.A6=B.jV;this.Cw=false;B.pe([this,this.FH],this);}B.Core.AN.P.call(this,C
);B.pe([this,this.LU],this);},LC:function(aBidi){if(!aBidi)return;B.rB(aBidi);},
Pq:function(aSize){var bidi=null;bidi=B.v3(aSize);return bidi;},LU:function(As){
},FH:function(As){B.pe([this,this.JX],this);},JX:function(As){var A;if(this.Cw)return;
var width=(A=this.N)[2]-A[0];var height=(A=this.N)[3]-A[1];var EE=-1;var font=this.
BO;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.Hu){EE=width;if(
EE<0)EE=1;}if(!!this.CW){this.LC(this.CW);this.CW=null;}this.Cw=true;if((this.String
!==B.jV)&&!!font){var length=this.String.length;if(this.Kk)this.CW=this.Pq(length
);this.A6=font.Oh(this.String,0,EE,length,this.CW);if(!!this.CW&&!this.ND()){this.
LC(this.CW);this.CW=null;}}else this.A6=B.jV;this.FM=AH;if((this.Hc&&(this.A6!==
B.jV))&&!!font){var Aw=this.EG;var leading=font.Leading;var A_=this.A6;var J1=this.
Kv();if(((Aw&0x80)===0x80)){if(J1)Aw=(Aw&~0x80)|0x4;else Aw=(Aw&~0x80)|0x1;}var JZ=(
font.Ascent+font.Descent)+leading;var Ea=A_.charCodeAt(0)||0;var FE=((height+leading
)/JZ)|0;var Lw=false;var JH=false;if(FE<=0)FE=1;if(Ea>FE){var DO=0;var IX=0;var J0=
Ea-1;var Bz;var B5=A_.length;var tmp=B.jV;if(!!(Aw&0x110)&&!!(Aw&0x28))Aw&=~0x110;
if(!!(Aw&0x110))Aw&=~0x28;if(((Aw&0x20)===0x20))IX=Ea-FE;else if(((Aw&0x10)===0x10
)||((Aw&0x100)===0x100)){IX=((Ea-FE)/2)|0;J0=(IX+FE)-1;}else J0=FE-1;Lw=IX>0;JH=
J0<(Ea-1);for(Bz=1;DO<IX;DO=DO+1)Bz=Bz+(A_.charCodeAt(Bz)||0);if(JH)for(B5=Bz;DO<
J0;DO=DO+1)B5=B5+(A_.charCodeAt(B5)||0);if(Lw){var Cg=A_.charCodeAt(Bz)||0;tmp=(
B4+B.abW(A_,Bz,Cg))+B4;tmp=B.abQ(tmp,0,(Cg+2)&0xFFFF);Bz=Bz+Cg;if((tmp.charCodeAt(
Cg)||0)===0x0A){tmp=B.abQ(tmp,Cg,0xFEFF);tmp=B.abQ(tmp,Cg+1,0x0A);}if((tmp.charCodeAt(
2)||0)===0x0A){tmp=B.abQ(tmp,2,0xFEFF);tmp=B.abQ(tmp,1,0x0A);}else tmp=B.abQ(tmp
,1,0xFEFF);}tmp=tmp+B.abW(A_,Bz,B5-Bz);if(JH&&(B5>=Bz)){var Cg=A_.charCodeAt(B5)||
0;var Cy=(B4+B.abW(A_,B5,Cg))+B4;Cy=B.abQ(Cy,0,(Cg+2)&0xFFFF);Cy=B.abQ(Cy,1,0xFEFF
);if((Cy.charCodeAt(Cg)||0)===0x0A){Cy=B.abQ(Cy,Cg,0xFEFF);Cy=B.abQ(Cy,Cg+1,0x0A
);}if((Cy.charCodeAt(2)||0)===0x0A){Cy=B.abQ(Cy,2,0xFEFF);Cy=B.abQ(Cy,1,0x0A);}else
Cy=B.abQ(Cy,1,0xFEFF);tmp=tmp+Cy;}A_=String.fromCharCode(FE&0xFFFF)+tmp;}var DO=
0;var C_=1;var LK=width;Ea=A_.charCodeAt(0)||0;for(;DO<Ea;DO=DO+1){var FK=Lw&&!DO;
var FL=JH&&(DO===(Ea-1));var Dp=false;var Dq=false;var HG=J1;if((J1&&FK)&&!FL){FK=
false;FL=true;}else if((J1&&FL)&&!FK){FL=false;FK=true;}var IZ=C_+1;var Cg=A_.charCodeAt(
C_)||0;var Bz=IZ;var B5=(IZ+Cg)-2;var LH=-1;var LI=-1;if(!this.Hu&&(font.HP(A_,IZ
,Cg-1)>LK)){var GV=Aw;if(((GV&0x2)===0x2)&&!!(GV&0x5))GV&=~0x2;if(((GV&0x2)===0x2
))GV&=~0x5;if(((GV&0x4)===0x4))Dp=true;else if(((GV&0x2)===0x2)){Dp=true;Dq=true;
}else Dq=true;}if((A_.charCodeAt(Bz)||0)===0x0A)Bz=Bz+1;if((A_.charCodeAt(B5)||0
)===0x0A)B5=B5-1;while(Dp&&((A_.charCodeAt(Bz)||0)===0xFEFF))Bz=Bz+1;while(Dq&&((
A_.charCodeAt(B5)||0)===0xFEFF))B5=B5-1;Dp=Dp&&!FL;Dq=Dq&&!FK;while((((Dp||Dq)||
FK)||FL)&&(Bz<B5)){if((Dp&&(HG||!Dq))||FK){if(LH>0)A_=B.abQ(A_,LH,0xFEFF);A_=B.abQ(
A_,Bz,0x2026);LH=Bz;Bz=Bz+1;HG=!HG;FK=false;if(font.HP(A_,IZ,Cg-1)<=LK){Dp=false;
Dq=false;}else Dp=Dp||!Dq;}if((Dq&&(!HG||!Dp))||FL){if(LI>0)A_=B.abQ(A_,LI,0xFEFF
);A_=B.abQ(A_,B5,0x2026);LI=B5;B5=B5-1;HG=!HG;FL=false;if(font.HP(A_,IZ,Cg-1)<=LK
){Dp=false;Dq=false;}else Dq=Dq||!Dp;}}C_=C_+Cg;}this.FM=[font.L5(A_),((A_.charCodeAt(
0)||0)*JZ)-leading];this.A6=A_;}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.
N);B.pe([this,this.LU],this);},NQ:function(C){if(C===this.Kk)return;this.Kk=C;this.
A6=B.jV;this.Cw=false;B.pe([this,this.FH],this);},NP:function(C){if(C===this.Hc)
return;this.Hc=C;if(this.Hu||C)this.F=this.F&~0x100;else this.F=this.F|0x100;this.
A6=B.jV;this.Cw=false;B.pe([this,this.FH],this);},Og:function(C){if(C===this.Hu)
return;this.Hu=C;if(this.Cw){this.A6=B.jV;this.Cw=false;B.pe([this,this.FH],this
);}if(C||this.Hc)this.F=this.F&~0x100;else this.F=this.F|0x100;},Hj:function(C){
var A;if(C===this.EG)return;this.EG=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(
this.N);if(this.Hc){this.A6=B.jV;this.Cw=false;B.pe([this,this.FH],this);}if(this.
Cw)B.pe([this,this.LU],this);},Fs:function(C){if(C===this.String)return;this.String=
C;this.A6=B.jV;this.Cw=false;B.pe([this,this.FH],this);},Hn:function(C){if(C===this.
BO)return;this.BO=C;this.A6=B.jV;this.Cw=false;B.pe([this,this.FH],this);},A2:function(
C){var A;if(C===this.A$)return;this.A$=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ac(this.N);},Ba:function(C){var A;if(C>255)C=255;if(C<0)C=0;if(C===this.B8)return;
this.B8=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.N);},Ab:function(C){if(
C)this.AD(0x1,0x0);else this.AD(0x0,0x1);},Kv:function(){if(!this.Cw)this.JX(this
);if(!this.CW)return false;var result=false;var bidi=this.CW;result=B.v2(bidi);return result;
},ND:function(){if(!this.Cw)this.JX(this);if(!this.CW)return false;var result=false;
var bidi=this.CW;result=B.zZ(bidi);return result;},Kq:function(){var A;if((this.
String===B.jV)||!this.BO)return AR;if(!this.Cw)this.JX(this);if(this.A6===B.jV)return AR;
var leading=this.BO.Leading;var JZ=(this.BO.Ascent+this.BO.Descent)+this.BO.Leading;
if(B.aaX(this.FM,AH))this.FM=[this.BO.L5(this.A6),this.FM[1]];this.FM=[this.FM[0
],((this.A6.charCodeAt(0)||0)*JZ)-leading];var Aw=this.EG;var AT=this.N;var width=
AT[2]-AT[0];var height=AT[3]-AT[1];var AA=[0,0,width,height];var Am=[].concat(AA.
slice(0,2),B.abf(AA.slice(0,2),this.FM));if(((Aw&0x80)===0x80)){if(this.Kv())Aw=(
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
]-Am[1])/2)|0));}Am=B.abh(Am,AT.slice(0,2));return Am;},KM:function(){return this.
A$;},_Init:function(aArg){B.Core.AN._Init.call(this,aArg);this.__proto__=D.Text;
},_Done:function(){this.CT();this.__proto__=B.Core.AN;B.Core.AN._Done.call(this);
},_Mark:function(E){var A;B.Core.AN._Mark.call(this,E);if((A=this.BO)&&(A._cycle
!=E))A._Mark(A._cycle=E);},_className:"Views::Text"};D.Ht={E8:B.wf,Au:B.abi(4,3,
0,null),KY:B.wf,C$:0,G5:0,CJ:function(C){if(B.aaX(C,this.By))return;B.Core.D4.CJ.
call(this,C);this.Au.Set(3,0,C[0]);this.Au.Set(3,1,C[1]);this.Au.Set(3,2,1);this.
C$=0x45;B.pe([this,this.HH],this);},CI:function(C){if(B.aaX(C,this.BZ))return;B.
Core.D4.CI.call(this,C);this.Au.Set(2,0,C[0]);this.Au.Set(2,1,C[1]);this.Au.Set(
2,2,1);this.C$=0x45;B.pe([this,this.HH],this);},CH:function(C){if(B.aaX(C,this.Bx
))return;B.Core.D4.CH.call(this,C);this.Au.Set(1,0,C[0]);this.Au.Set(1,1,C[1]);this.
Au.Set(1,2,1);this.C$=0x45;B.pe([this,this.HH],this);},CG:function(C){if(B.aaX(C
,this.BY))return;B.Core.D4.CG.call(this,C);this.Au.Set(0,0,C[0]);this.Au.Set(0,1
,C[1]);this.Au.Set(0,2,1);this.C$=0x45;B.pe([this,this.HH],this);},MC:function(){
return;},HH:function(As){var A;if(this.C$===0x00)return;if(this.C$===0x45){var CR=
B._NewObject(B.Graphics.Mk,0);CR=CR.Nt(this.Au.Get(0,0),this.Au.Get(0,1),this.Au.
Get(1,0),this.Au.Get(1,1),this.Au.Get(2,0),this.Au.Get(2,1),this.Au.Get(3,0),this.
Au.Get(3,1));if(!!CR){CR.I5(0,0);this.Au.Set(0,2,CR.Im*240);CR.I5(1,0);this.Au.Set(
1,2,CR.Im*240);CR.I5(1,1);this.Au.Set(2,2,CR.Im*240);CR.I5(0,1);this.Au.Set(3,2,
CR.Im*240);}this.MC();}this.G5=this.C$;this.C$=0x00;if(!!this.G&&((this.F&0x1)===
0x1))this.G.Ac(this.GetClipping());},N0:function(C){if(B.aaX(C,this.KY))return;this.
KY=C;if((this.G5!==0x45)&&(this.C$===0x00)){this.C$=this.G5;B.pe([this,this.HH],
this);}},Ol:function(Mq,aAngle,Mu,Mv){var A;if(!this.E8[0]||!this.E8[1])return;var
J6=[].concat(AH,this.E8);var J5=this.KY;var MM=(J6[0]-J5[0])*Mu;var I=(J6[2]-J5[
0])*Mu;var M_=(J6[1]-J5[1])*Mv;var Mw=(J6[3]-J5[1])*Mv;var JI=Math.cos(aAngle*B.
k$);var J4=Math.sin(aAngle*B.k$);var MN=MM*JI;var MO=MM*J4;var M2=I*JI;var M3=I*
J4;var M$=M_*JI;var Na=M_*J4;var Mx=Mw*JI;var My=Mw*J4;var JL=Mq[0];var JM=Mq[1];
this.Au.Set(0,0,(JL+MN)+Na);this.Au.Set(0,1,(JM-MO)+M$);this.Au.Set(1,0,(JL+M2)+
Na);this.Au.Set(1,1,(JM-M3)+M$);this.Au.Set(2,0,(JL+M2)+My);this.Au.Set(2,1,(JM-
M3)+Mx);this.Au.Set(3,0,(JL+MN)+My);this.Au.Set(3,1,(JM-MO)+Mx);this.Au.Set(0,2,
1);this.Au.Set(1,2,1);this.Au.Set(2,2,1);this.Au.Set(3,2,1);if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.GetClipping());this.BY=[(this.Au.Get(0,0)+0.5)|0,(this.
Au.Get(0,1)+0.5)|0];this.Bx=[(this.Au.Get(1,0)+0.5)|0,(this.Au.Get(1,1)+0.5)|0];
this.BZ=[(this.Au.Get(2,0)+0.5)|0,(this.Au.Get(2,1)+0.5)|0];this.By=[(this.Au.Get(
3,0)+0.5)|0,(this.Au.Get(3,1)+0.5)|0];this.G5=0x45;this.C$=0x00;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.GetClipping());this.MC();},_Init:function(aArg){B.Core.
D4._Init.call(this,aArg);(this.Au=[]).__proto__=D.Ht.Au;this.__proto__=D.Ht;this.
F=0x3;},_className:"Views::WarpView"};D.La={timer:null,O:null,AJ:0,AO:0,A$:0xFFFFFFFF
,BL:false,Cj:function(AK,aClip,aOffset,Az,aBlend){var A;var AL=0;if(this.AO>=0)AL=
this.AO;if(!this.O||(AL>=this.O.NoOfFrames))return;this.O.Update();var Iw;var Ix;
var Iy;var Iz;var Ah=this.A$;var Bc=(((Az+1)*255)>>8)+1;var JT=aOffset[0];var JU=
aOffset[1];var T=[].concat(AH,this.E8);aBlend=aBlend&&((this.F&0x2)===0x2);Iw=Ix=
Iy=Iz=Ah;if(Bc<256){Iw=(Iw&0x00FFFFFF)|((((((Iw>>24)&0xFF)*Bc)>>8)&0xFF)<<24);Ix=(
Ix&0x00FFFFFF)|((((((Ix>>24)&0xFF)*Bc)>>8)&0xFF)<<24);Iy=(Iy&0x00FFFFFF)|((((((Iy>>
24)&0xFF)*Bc)>>8)&0xFF)<<24);Iz=(Iz&0x00FFFFFF)|((((((Iz>>24)&0xFF)*Bc)>>8)&0xFF
)<<24);}aClip=B.aaV(aClip,B.abh(AR,aOffset));AK.Or(aClip,this.O,AL,this.Au.Get(0
,0)+JT,this.Au.Get(0,1)+JU,this.Au.Get(0,2),this.Au.Get(1,0)+JT,this.Au.Get(1,1)+
JU,this.Au.Get(1,2),this.Au.Get(2,0)+JT,this.Au.Get(2,1)+JU,this.Au.Get(2,2),this.
Au.Get(3,0)+JT,this.Au.Get(3,1)+JU,this.Au.Get(3,2),T,Iw,Ix,Iy,Iz,aBlend,true);}
,DN:function(As){var A;var MU=this.E8;if(!!this.O)this.E8=this.O.FrameSize;else this.
E8=AH;if(((B.aaX(MU,this.E8)||((this.G5===0x45)&&(this.C$===0x00)))&&!!this.G)&&((
this.F&0x1)===0x1))this.G.Ac(this.GetClipping());if(((this.G5!==0x45)&&(this.C$===
0x00))&&!B.aaX(MU,this.E8)){this.C$=this.G5;B.pe([this,this.HH],this);}},BE:function(
As){var A;var AL=this.AO;var Bl=0;if(!!this.O)Bl=this.O.NoOfFrames*this.O.FrameDelay;
if((!!this.timer&&(this.AO<0))&&(Bl>0))this.AJ=this.timer.Ax;if(!!this.timer&&(Bl>
0)){var Al=(this.timer.Ax-this.AJ)|0;AL=(Al/this.O.FrameDelay)|0;if(Al>=Bl){AL=AL
%this.O.NoOfFrames;this.AJ=this.timer.Ax-(Al%Bl);}}if(((AL!==this.AO)&&!!this.G)&&((
this.F&0x1)===0x1))this.G.Ac(this.GetClipping());this.AO=AL;if(!Bl&&!!this.timer
){B.z9([this,this.BE],this.timer,0);this.timer=null;}},CF:function(C){var A;if(this.
BL===C)return;this.BL=C;this.AO=-1;if(!C&&!!this.timer){B.z9([this,this.BE],this.
timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(B.aci.ET);B.zV([this
,this.BE],this.timer,0);B.pe([this,this.BE],this);}if(!!this.G&&((this.F&0x1)===
0x1))this.G.Ac(this.GetClipping());},A2:function(C){var A;if(C===this.A$)return;
this.A$=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping());},AQ:function(
C){if(C===this.O)return;if(!!this.O&&this.O.En)B.z9([this,this.DN],this.O,0);this.
O=C;this.AO=-1;if(!!C&&C.En)B.zV([this,this.DN],C,0);if(this.BL){this.CF(false);
this.CF(true);}this.DN(this);},_Init:function(aArg){D.Ht._Init.call(this,aArg);this.
__proto__=D.La;},_Mark:function(E){var A;D.Ht._Mark.call(this,E);if((A=this.timer
)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.O)&&(A._cycle!=E))A._Mark(A._cycle=
E);},_className:"Views::WarpImage"};D.Ic={CU:null,A$:0xFFFFFFFF,Dj:B.wf,Width:1,
CT:function(){this.Pu();},Cj:function(AK,aClip,aOffset,Az,aBlend){if(!this.CU)return;
var W;var Ag;var Ae;var Af;var Ah=this.A$;Az=Az+1;W=Ag=Ae=Af=Ah;if(Az<256){W=(W&
0x00FFFFFF)|((((Az*((W>>24)&0xFF))>>8)&0xFF)<<24);Ag=(Ag&0x00FFFFFF)|((((Az*((Ag>>
24)&0xFF))>>8)&0xFF)<<24);Ae=(Ae&0x00FFFFFF)|((((Az*((Ae>>24)&0xFF))>>8)&0xFF)<<
24);Af=(Af&0x00FFFFFF)|((((Az*((Af>>24)&0xFF))>>8)&0xFF)<<24);}AK.Ic(aClip,this.
CU,B.abh(this.N,aOffset),false,this.Dj,this.Width,0,0,0,3,W,Ag,Af,Ae,true,true);
},Pu:function(){return;},Ne:function(As){var A;if(!!this.G&&((this.F&0x1)===0x1)
)this.G.Ac(this.N);},A2:function(C){var A;if(C===this.A$)return;this.A$=C;if((!!
this.G&&((this.F&0x1)===0x1))&&!!this.CU)this.G.Ac(this.N);},NX:function(C){var A;
if(B.aaX(C,this.Dj))return;this.Dj=C;if((!!this.G&&((this.F&0x1)===0x1))&&!!this.
CU)this.G.Ac(this.N);},KV:function(C){var A;if(C<0)C=0;if(C===this.Width)return;
this.Width=C;if((!!this.G&&((this.F&0x1)===0x1))&&!!this.CU)this.G.Ac(this.N);},
NY:function(C){var A;if(C===this.CU)return;if(!!this.CU)B.z9([this,this.Ne],this.
CU,0);this.CU=C;if(!!this.CU)B.zV([this,this.Ne],this.CU,0);if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.N);},_Init:function(aArg){B.Core.AN._Init.call(this
,aArg);this.__proto__=D.Ic;},_Done:function(){this.CT();this.__proto__=B.Core.AN;
B.Core.AN._Done.call(this);},_Mark:function(E){var A;B.Core.AN._Mark.call(this,E
);if((A=this.CU)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Views::StrokePath"
};D.Qf={Nl:0x1,Nk:0x2,Nm:0x4,Np:0x8,No:0x10,Nn:0x20,QI:0x40,QJ:0x80,QL:0x100};D.
QM={Nl:0x1,Nk:0x2,Nm:0x4,Np:0x8,No:0x10,Nn:0x20,PV:0x40,PU:0x80,P0:0x100};D.Qq={
Qp:0,QG:1,QE:2,QF:3};
D._Init=function(){D.Fw.__proto__=B.Core.AN;D.Cz.__proto__=B.Core.AN;D.Hg.__proto__=
B.Core.AN;D.AZ.__proto__=B.Core.AN;D.Jt.__proto__=B.Core.AN;D.Text.__proto__=B.Core.
AN;D.Ht.__proto__=B.Core.D4;D.La.__proto__=D.Ht;D.Ic.__proto__=B.Core.AN;};D._ReInit=
function(){};D.B$=function(E){};return D;})();

/* Embedded Wizard */