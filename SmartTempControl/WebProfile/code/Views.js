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
var AH=[0,0];var AS=[0,0,0,0];var Cg="\uFEFF";
D.Cs={F_:0xFFFFFFFF,F$:0xFFFFFFFF,Ga:0xFFFFFFFF,D4:0xFFFFFFFF,Bc:0xFFFFFFFF,Cw:function(
AK,aClip,aOffset,Az,aBlend){var A;var Y=this.D4;var Ag=this.Ga;var Ae=this.F_;var
Af=this.F$;var Ah=this.Bc;aBlend=aBlend&&((this.F&0x2)===0x2);Az=Az+1;if((((Y===
Ag)&&(Ae===Af))&&(Y===Ae))&&(Y===0xFFFFFFFF))Y=Ag=Ae=Af=Ah;else if(Ah!==0xFFFFFFFF
){Y=(Y&0x00FFFFFF)|((((((Y>>24)&0xFF)*(((Ah>>24)&0xFF)+1))>>8)&0xFF)<<24);Y=(Y&0xFFFFFF00
)|((((Y&0xFF)*((Ah&0xFF)+1))>>8)&0xFF);Y=(Y&0xFFFF00FF)|((((((Y>>8)&0xFF)*(((Ah>>
8)&0xFF)+1))>>8)&0xFF)<<8);Y=(Y&0xFF00FFFF)|((((((Y>>16)&0xFF)*(((Ah>>16)&0xFF)+
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
0xFF)*(((Ah>>16)&0xFF)+1))>>8)&0xFF)<<16);}if(Az<256){Y=(Y&0x00FFFFFF)|((((Az*((
Y>>24)&0xFF))>>8)&0xFF)<<24);Ag=(Ag&0x00FFFFFF)|((((Az*((Ag>>24)&0xFF))>>8)&0xFF
)<<24);Ae=(Ae&0x00FFFFFF)|((((Az*((Ae>>24)&0xFF))>>8)&0xFF)<<24);Af=(Af&0x00FFFFFF
)|((((Az*((Af>>24)&0xFF))>>8)&0xFF)<<24);}AK.KD(aClip,B.abh(this.O,aOffset),Y,Ag
,Af,Ae,aBlend);},Jx:function(C){var A;if(C===this.F_)return;this.F_=C;if(!!this.
G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},Jy:function(C){var A;if(C===this.F$)
return;this.F$=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},Jz:function(
C){var A;if(C===this.Ga)return;this.Ga=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ac(this.O);},Gy:function(C){var A;if(C===this.D4)return;this.D4=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ac(this.O);},AU:function(C){var A;if(C===this.Bc)return;
this.Bc=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},Oc:function(C){if(
C)this.AD(0x2,0x0);else this.AD(0x0,0x2);},Q:function(C){if(C)this.AD(0x1,0x0);else
this.AD(0x0,0x1);},N$:function(){return this.Bc;},_Init:function(aArg){B.Core.AP.
_Init.call(this,aArg);this.__proto__=D.Cs;},_className:"Views::Rectangle"};D.CM={
Width:1,F_:0xFFFFFFFF,F$:0xFFFFFFFF,Ga:0xFFFFFFFF,D4:0xFFFFFFFF,Bc:0xFFFFFFFF,Cw:
function(AK,aClip,aOffset,Az,aBlend){var A;var Y=this.D4;var Ag=this.Ga;var Ae=this.
F_;var Af=this.F$;var Ah=this.Bc;aBlend=aBlend&&((this.F&0x2)===0x2);Az=Az+1;if((((
Y===Ag)&&(Ae===Af))&&(Y===Ae))&&(Y===0xFFFFFFFF))Y=Ag=Ae=Af=Ah;else if(Ah!==0xFFFFFFFF
){Y=(Y&0x00FFFFFF)|((((((Y>>24)&0xFF)*(((Ah>>24)&0xFF)+1))>>8)&0xFF)<<24);Y=(Y&0xFFFFFF00
)|((((Y&0xFF)*((Ah&0xFF)+1))>>8)&0xFF);Y=(Y&0xFFFF00FF)|((((((Y>>8)&0xFF)*(((Ah>>
8)&0xFF)+1))>>8)&0xFF)<<8);Y=(Y&0xFF00FFFF)|((((((Y>>16)&0xFF)*(((Ah>>16)&0xFF)+
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
0xFF)*(((Ah>>16)&0xFF)+1))>>8)&0xFF)<<16);}if(Az<256){Y=(Y&0x00FFFFFF)|((((Az*((
Y>>24)&0xFF))>>8)&0xFF)<<24);Ag=(Ag&0x00FFFFFF)|((((Az*((Ag>>24)&0xFF))>>8)&0xFF
)<<24);Ae=(Ae&0x00FFFFFF)|((((Az*((Ae>>24)&0xFF))>>8)&0xFF)<<24);Af=(Af&0x00FFFFFF
)|((((Az*((Af>>24)&0xFF))>>8)&0xFF)<<24);}AK.NV(aClip,B.abh(this.O,aOffset),this.
Width,Y,Ag,Af,Ae,aBlend);},K9:function(C){var A;if(C<0)C=0;if(C===this.Width)return;
this.Width=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},Jx:function(C
){var A;if(C===this.F_)return;this.F_=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.
Ac(this.O);},Jy:function(C){var A;if(C===this.F$)return;this.F$=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ac(this.O);},Jz:function(C){var A;if(C===this.Ga)return;
this.Ga=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},Gy:function(C){var
A;if(C===this.D4)return;this.D4=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.
O);},AU:function(C){var A;if(C===this.Bc)return;this.Bc=C;if(!!this.G&&((this.F&
0x1)===0x1))this.G.Ac(this.O);},_Init:function(aArg){B.Core.AP._Init.call(this,aArg
);this.__proto__=D.CM;},_className:"Views::Border"};D.Hr={timer:null,R:null,AQ:-
1,Bc:0xFFFFFFFF,H9:0x1F,Ez:0,AJ:0,Gv:B.wf,BY:false,Cw:function(AK,aClip,aOffset,
Az,aBlend){var A;var AL=this.Ez;if(this.AQ>=0)AL=this.AQ;if(!this.R||(AL>=this.R.
NoOfFrames))return;this.R.Update();var Y;var Ag;var Af;var Ae;var Ah=this.Bc;var
Bb=(((Az+1)*255)>>8)+1;var Cm=this.H9;var I=B.abh(this.O,aOffset);var Kg=B.abe([
I[2]-I[0],I[3]-I[1]],this.Gv);aBlend=aBlend&&((this.F&0x2)===0x2);Y=Ag=Ae=Af=Ah;
if(Bb<256){Y=(Y&0x00FFFFFF)|((((((Y>>24)&0xFF)*Bb)>>8)&0xFF)<<24);Ag=(Ag&0x00FFFFFF
)|((((((Ag>>24)&0xFF)*Bb)>>8)&0xFF)<<24);Af=(Af&0x00FFFFFF)|((((((Af>>24)&0xFF)*
Bb)>>8)&0xFF)<<24);Ae=(Ae&0x00FFFFFF)|((((((Ae>>24)&0xFF)*Bb)>>8)&0xFF)<<24);}if(((
this.Gv[0]>0)&&(Kg[0]>0))&&!((Cm&0x5)===0x5)){var d=((this.R.FrameSize[0]/3)|0)-
Kg[0];if(((Cm&0x1)===0x1)){if(aClip[2]>I[2])aClip=B.abN(aClip,I[2]);if(d>0)I=B.abN(
I,I[2]+d);Cm=Cm|0x4;}else if(((Cm&0x4)===0x4)){if(aClip[0]<I[0])aClip=[].concat(
I[0],aClip.slice(1,4));if(d>0)I=[].concat(I[0]-d,I.slice(1,4));Cm=Cm|0x1;}else{if(
aClip[0]<I[0])aClip=[].concat(I[0],aClip.slice(1,4));if(aClip[2]>I[2])aClip=B.abN(
aClip,I[2]);if(d>0){I=[].concat(I[0]-((d/2)|0),I.slice(1,4));I=B.abN(I,(I[2]+d)-((
d/2)|0));}Cm=Cm|0x5;}}if(((this.Gv[1]>0)&&(Kg[1]>0))&&!((Cm&0xA)===0xA)){var d=((
this.R.FrameSize[1]/3)|0)-Kg[1];if(((Cm&0x2)===0x2)){if(aClip[3]>I[3])aClip=[].concat(
aClip.slice(0,3),I[3]);if(d>0)I=[].concat(I.slice(0,3),I[3]+d);Cm=Cm|0x8;}else if(((
Cm&0x8)===0x8)){if(aClip[1]<I[1])aClip=B.abP(aClip,I[1]);if(d>0)I=B.abP(I,I[1]-d
);Cm=Cm|0x2;}else{if(aClip[1]<I[1])aClip=B.abP(aClip,I[1]);if(aClip[3]>I[3])aClip=[
].concat(aClip.slice(0,3),I[3]);if(d>0){I=B.abP(I,I[1]-((d/2)|0));I=[].concat(I.
slice(0,3),(I[3]+d)-((d/2)|0));}Cm=Cm|0xA;}}AK.NU(aClip,this.R,AL,I,Cm,Y,Ag,Af,Ae
,aBlend);},D1:function(An){var A;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.
O);},BL:function(An){var A;var AL=this.AQ;var Bm=0;if(!!this.R)Bm=this.R.NoOfFrames
*this.R.FrameDelay;if((!!this.timer&&(this.AQ<0))&&(Bm>0))this.AJ=this.timer.Ax-(
this.Ez*this.R.FrameDelay);if(!!this.timer&&(Bm>0)){var Al=(this.timer.Ax-this.AJ
)|0;AL=(Al/this.R.FrameDelay)|0;if(Al>=Bm){AL=AL%this.R.NoOfFrames;this.AJ=this.
timer.Ax-(Al%Bm);}}if(((AL!==this.AQ)&&!!this.G)&&((this.F&0x1)===0x1))this.G.Ac(
this.O);this.AQ=AL;if(!Bm&&!!this.timer){B.z9([this,this.BL],this.timer,0);this.
timer=null;}},AU:function(C){var A;if(C===this.Bc)return;this.Bc=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ac(this.O);},CR:function(C){var A;if(this.BY===C)return;
this.BY=C;this.AQ=-1;if(!C&&!!this.timer){B.z9([this,this.BL],this.timer,0);this.
timer=null;}if(C){this.timer=B._GetAutoObject(B.aci.E_);B.zV([this,this.BL],this.
timer,0);B.pe([this,this.BL],this);}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(
this.O);},Mn:function(C){var A;if(C===this.H9)return;this.H9=C;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.O);},Cr:function(C){var A;if(C<0)C=0;if((C===this.Ez
)&&(this.AQ===-1))return;this.Ez=C;if(!this.timer)this.AQ=-1;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.O);},AO:function(C){var A;if(C===this.R)return;if(!
!this.R&&this.R.EC)B.z9([this,this.D1],this.R,0);this.R=C;this.AQ=-1;if(!!C&&C.EC
)B.zV([this,this.D1],C,0);if(this.BY){this.CR(false);this.CR(true);}if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ac(this.O);},Q:function(C){if(C)this.AD(0x1,0x0);else this.
AD(0x0,0x1);},Mr:function(C){var A;if(C[0]<0)C=[0,C[1]];if(C[1]<0)C=[C[0],0];if(
B.aaX(C,this.Gv))return;this.Gv=C;if((!!this.G&&((this.F&0x1)===0x1))&&!((this.H9&
0xF)===0xF))this.G.Ac(this.O);},_Init:function(aArg){B.Core.AP._Init.call(this,aArg
);this.__proto__=D.Hr;},_Mark:function(E){var A;B.Core.AP._Mark.call(this,E);if((
A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.R)&&(A._cycle!=E))A.
_Mark(A._cycle=E);},_className:"Views::Frame"};D.AY={timer:null,R:null,AJ:0,AQ:0
,D4:0xFFFFFFFF,Bc:0xFFFFFFFF,EX:0x12,Ez:0,Cj:255,BY:false,Cw:function(AK,aClip,aOffset
,Az,aBlend){var A;var AL=this.Ez;if(this.AQ>=0)AL=this.AQ;if(!this.R||(AL>=this.
R.NoOfFrames))return;this.R.Update();var W=this.KG();var Cu=this.R.FrameSize;if((
W[0]>=W[2])||(W[1]>=W[3]))return;var Y=this.D4;var Ag=0xFFFFFFFF;var Af=0xFFFFFFFF;
var Ae=0xFFFFFFFF;var Ah=this.Bc;var Bb=(((Az+1)*this.Cj)>>8)+1;aBlend=aBlend&&((
this.F&0x2)===0x2);if(((Y===0xFFFFFFFF)&&(Y===0xFFFFFFFF))&&(Y===0xFFFFFFFF))Y=Ag=
Ae=Af=Ah;else if(Ah!==0xFFFFFFFF){Y=(Y&0x00FFFFFF)|((((((Y>>24)&0xFF)*(((Ah>>24)&
0xFF)+1))>>8)&0xFF)<<24);Y=(Y&0xFFFFFF00)|((((Y&0xFF)*((Ah&0xFF)+1))>>8)&0xFF);Y=(
Y&0xFFFF00FF)|((((((Y>>8)&0xFF)*(((Ah>>8)&0xFF)+1))>>8)&0xFF)<<8);Y=(Y&0xFF00FFFF
)|((((((Y>>16)&0xFF)*(((Ah>>16)&0xFF)+1))>>8)&0xFF)<<16);Ag=(Ag&0x00FFFFFF)|((((
255*(((Ah>>24)&0xFF)+1))>>8)&0xFF)<<24);Ag=(Ag&0xFFFFFF00)|((((Ag&0xFF)*((Ah&0xFF
)+1))>>8)&0xFF);Ag=(Ag&0xFFFF00FF)|((((((Ag>>8)&0xFF)*(((Ah>>8)&0xFF)+1))>>8)&0xFF
)<<8);Ag=(Ag&0xFF00FFFF)|((((((Ag>>16)&0xFF)*(((Ah>>16)&0xFF)+1))>>8)&0xFF)<<16);
Ae=(Ae&0x00FFFFFF)|((((255*(((Ah>>24)&0xFF)+1))>>8)&0xFF)<<24);Ae=(Ae&0xFFFFFF00
)|((((Ae&0xFF)*((Ah&0xFF)+1))>>8)&0xFF);Ae=(Ae&0xFFFF00FF)|((((((Ae>>8)&0xFF)*(((
Ah>>8)&0xFF)+1))>>8)&0xFF)<<8);Ae=(Ae&0xFF00FFFF)|((((((Ae>>16)&0xFF)*(((Ah>>16)&
0xFF)+1))>>8)&0xFF)<<16);Af=(Af&0x00FFFFFF)|((((255*(((Ah>>24)&0xFF)+1))>>8)&0xFF
)<<24);Af=(Af&0xFFFFFF00)|((((Af&0xFF)*((Ah&0xFF)+1))>>8)&0xFF);Af=(Af&0xFFFF00FF
)|((((((Af>>8)&0xFF)*(((Ah>>8)&0xFF)+1))>>8)&0xFF)<<8);Af=(Af&0xFF00FFFF)|((((((
Af>>16)&0xFF)*(((Ah>>16)&0xFF)+1))>>8)&0xFF)<<16);}if(Bb<256){Y=(Y&0x00FFFFFF)|((((((
Y>>24)&0xFF)*Bb)>>8)&0xFF)<<24);Ag=(Ag&0x00FFFFFF)|((((((Ag>>24)&0xFF)*Bb)>>8)&0xFF
)<<24);Af=(Af&0x00FFFFFF)|((((((Af>>24)&0xFF)*Bb)>>8)&0xFF)<<24);Ae=(Ae&0x00FFFFFF
)|((((((Ae>>24)&0xFF)*Bb)>>8)&0xFF)<<24);}if(B.aaX([W[2]-W[0],W[3]-W[1]],Cu))AK.
NQ(aClip,this.R,AL,B.abh(this.O,aOffset),B.abe(this.O.slice(0,2),W.slice(0,2)),Y
,Ag,Af,Ae,aBlend);else AK.ON(aClip,this.R,AL,B.abh(W,aOffset),[].concat(AH,Cu),Y
,Ag,Af,Ae,aBlend,true);},D1:function(An){var A;if(!!this.G&&((this.F&0x1)===0x1)
)this.G.Ac(this.O);},BL:function(An){var A;var AL=this.AQ;var Bm=0;if(!!this.R)Bm=
this.R.NoOfFrames*this.R.FrameDelay;if((!!this.timer&&(this.AQ<0))&&(Bm>0))this.
AJ=this.timer.Ax-(this.Ez*this.R.FrameDelay);if(!!this.timer&&(Bm>0)){var Al=(this.
timer.Ax-this.AJ)|0;AL=(Al/this.R.FrameDelay)|0;if(Al>=Bm){AL=AL%this.R.NoOfFrames;
this.AJ=this.timer.Ax-(Al%Bm);}}if(((AL!==this.AQ)&&!!this.G)&&((this.F&0x1)===0x1
))this.G.Ac(this.O);this.AQ=AL;if(!Bm&&!!this.timer){B.z9([this,this.BL],this.timer
,0);this.timer=null;}},Gy:function(C){var A;if(C===this.D4)return;this.D4=C;if(!
!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},AU:function(C){var A;if(C===this.
Bc)return;this.Bc=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},CR:function(
C){var A;if(this.BY===C)return;this.BY=C;this.AQ=-1;if(!C&&!!this.timer){B.z9([this
,this.BL],this.timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(B.aci.
E_);B.zV([this,this.BL],this.timer,0);B.pe([this,this.BL],this);}if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ac(this.O);},Hv:function(C){var A;if(C===this.EX)return;
this.EX=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},Cr:function(C){var
A;if(C<0)C=0;if((C===this.Ez)&&(this.AQ===-1))return;this.Ez=C;if(!this.timer)this.
AQ=-1;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},AO:function(C){var A;
if(C===this.R)return;if(!!this.R&&this.R.EC)B.z9([this,this.D1],this.R,0);this.R=
C;this.AQ=-1;if(!!C&&C.EC)B.zV([this,this.D1],C,0);if(this.BY){this.CR(false);this.
CR(true);}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},A$:function(C){var
A;if(C>255)C=255;if(C<0)C=0;if(C===this.Cj)return;this.Cj=C;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.O);},Q:function(C){if(C)this.AD(0x1,0x0);else this.
AD(0x0,0x1);},KG:function(){var A;if(!this.R)return AS;var Aw=this.EX;var Cu=this.
R.FrameSize;var AV=this.O;var width=AV[2]-AV[0];var height=AV[3]-AV[1];if(!Cu[0]||
!Cu[1])return AS;var AA=[0,0,width,height];var Am=AA;if(((Aw&0x40)===0x40)){var L$=((((
AA[2]-AA[0])<<16)+((Cu[0]/2)|0))/Cu[0])|0;var I_=((((AA[3]-AA[1])<<16)+((Cu[1]/2
)|0))/Cu[1])|0;var Fv=L$;if(I_>Fv)Fv=I_;Am=B.abL(Am,((Cu[0]*Fv)+32768)>>16);Am=B.
abI(Am,((Cu[1]*Fv)+32768)>>16);}else if(((Aw&0x80)===0x80)){var L$=((((AA[2]-AA[
0])<<16)+((Cu[0]/2)|0))/Cu[0])|0;var I_=((((AA[3]-AA[1])<<16)+((Cu[1]/2)|0))/Cu[
1])|0;var Fv=L$;if(I_<Fv)Fv=I_;Am=B.abL(Am,((Cu[0]*Fv)+32768)>>16);Am=B.abI(Am,((
Cu[1]*Fv)+32768)>>16);}else if(!((Aw&0x100)===0x100))Am=B.abK(Am,Cu);if((Am[2]-Am[
0])!==(AA[2]-AA[0])){if(((Aw&0x4)===0x4))Am=B.abM(Am,AA[2]-(Am[2]-Am[0]));else if(((
Aw&0x2)===0x2))Am=B.abM(Am,(AA[0]+(((AA[2]-AA[0])/2)|0))-(((Am[2]-Am[0])/2)|0));
}if((Am[3]-Am[1])!==(AA[3]-AA[1])){if(((Aw&0x20)===0x20))Am=B.abO(Am,AA[3]-(Am[3
]-Am[1]));else if(((Aw&0x10)===0x10))Am=B.abO(Am,(AA[1]+(((AA[3]-AA[1])/2)|0))-(((
Am[3]-Am[1])/2)|0));}Am=B.abh(Am,AV.slice(0,2));return Am;},_Init:function(aArg){
B.Core.AP._Init.call(this,aArg);this.__proto__=D.AY;},_Mark:function(E){var A;B.
Core.AP._Mark.call(this,E);if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);
if((A=this.R)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Views::Image"};D.
JI={timer:null,R:null,AQ:0,Cj:255,AJ:0,BY:false,Cw:function(AK,aClip,aOffset,Az,
aBlend){var A;var AL=0;if(this.AQ>=0)AL=this.AQ;if(!this.R||(AL>=this.R.NoOfFrames
))return;this.R.Update();var Y;var Ag;var Af;var Ae;var Bb=(((Az+1)*this.Cj)>>8)+
1;aBlend=aBlend&&((this.F&0x2)===0x2);Y=Ag=Ae=Af=0xFFFFFFFF;if(Bb<256){Y=(Y&0x00FFFFFF
)|((((255*Bb)>>8)&0xFF)<<24);Ag=(Ag&0x00FFFFFF)|((((255*Bb)>>8)&0xFF)<<24);Af=(Af&
0x00FFFFFF)|((((255*Bb)>>8)&0xFF)<<24);Ae=(Ae&0x00FFFFFF)|((((255*Bb)>>8)&0xFF)<<
24);}AK.OS(aClip,this.R,AL,B.abh(this.O,aOffset),[].concat(AH,this.R.FrameSize),
AH,Y,Ag,Af,Ae,aBlend);},D1:function(An){var A;if(!!this.G&&((this.F&0x1)===0x1))
this.G.Ac(this.O);},BL:function(An){var A;var AL=this.AQ;var Bm=0;if(!!this.R)Bm=
this.R.NoOfFrames*this.R.FrameDelay;if((!!this.timer&&(this.AQ<0))&&(Bm>0))this.
AJ=this.timer.Ax;if(!!this.timer&&(Bm>0)){var Al=(this.timer.Ax-this.AJ)|0;AL=(Al
/this.R.FrameDelay)|0;if(Al>=Bm){AL=AL%this.R.NoOfFrames;this.AJ=this.timer.Ax-(
Al%Bm);}}if(((AL!==this.AQ)&&!!this.G)&&((this.F&0x1)===0x1))this.G.Ac(this.O);this.
AQ=AL;if(!Bm&&!!this.timer){B.z9([this,this.BL],this.timer,0);this.timer=null;}}
,CR:function(C){var A;if(this.BY===C)return;this.BY=C;this.AQ=-1;if(!C&&!!this.timer
){B.z9([this,this.BL],this.timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(
B.aci.E_);B.zV([this,this.BL],this.timer,0);B.pe([this,this.BL],this);}if(!!this.
G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},AO:function(C){var A;if(C===this.R)return;
if(!!this.R&&this.R.EC)B.z9([this,this.D1],this.R,0);this.R=C;this.AQ=-1;if(!!C&&
C.EC)B.zV([this,this.D1],C,0);if(this.BY){this.CR(false);this.CR(true);}if(!!this.
G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},A$:function(C){var A;if(C>255)C=255;
if(C<0)C=0;if(C===this.Cj)return;this.Cj=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ac(this.O);},Q:function(C){if(C)this.AD(0x1,0x0);else this.AD(0x0,0x1);},Ht:function(
){return this.Cj;},_Init:function(aArg){B.Core.AP._Init.call(this,aArg);this.__proto__=
D.JI;},_Mark:function(E){var A;B.Core.AP._Mark.call(this,E);if((A=this.timer)&&(
A._cycle!=E))A._Mark(A._cycle=E);if((A=this.R)&&(A._cycle!=E))A._Mark(A._cycle=E
);},_className:"Views::Wallpaper"};D.Text={BN:null,A7:B.jV,String:B.jV,C7:null,FY:
B.wf,EX:0x12,Bc:0xFFFFFFFF,Cj:255,HN:false,Hn:false,KA:false,CJ:false,C2:function(
){if(!!this.C7){this.LQ(this.C7);this.C7=null;}},Cw:function(AK,aClip,aOffset,Az
,aBlend){var A;if((this.A7===B.jV)||!this.BN)return;var Aw=this.EX;var font=this.
BN;var AA=B.abh(this.O,aOffset);var Y;var Ag;var Af;var Ae;var QB=this.Bc;var Bb=(((
Az+1)*this.Cj)>>8)+1;var Eo=this.A7.charCodeAt(0)||0;var W=B.abh(this.KG(),aOffset
);var Nd=[AA[0]-W[0],(AA[1]-W[1])-font.Ascent];if(Eo<1)return;Y=Ag=Ae=Af=QB;if(Bb<
256){Y=(Y&0x00FFFFFF)|((((((Y>>24)&0xFF)*Bb)>>8)&0xFF)<<24);Ag=(Ag&0x00FFFFFF)|((((((
Ag>>24)&0xFF)*Bb)>>8)&0xFF)<<24);Af=(Af&0x00FFFFFF)|((((((Af>>24)&0xFF)*Bb)>>8)&
0xFF)<<24);Ae=(Ae&0x00FFFFFF)|((((((Ae>>24)&0xFF)*Bb)>>8)&0xFF)<<24);}if(((Aw&0x80
)===0x80)){if(this.KJ())Aw=(Aw&~0x80)|0x4;else Aw=(Aw&~0x80)|0x1;}if((Eo===1)&&!((
Aw&0x40)===0x40)){AK.Mf(aClip,font,this.A7,2,(this.A7.charCodeAt(1)||0)-1,AA,Nd,
0,0,Y,Ag,Af,Ae,true);return;}var leading=font.Leading;var L_=(font.Ascent+font.Descent
)+leading;var Qz=aClip[1]-W[1];var QA=aClip[3]-W[1];var LH=W[2]-W[0];var BX=0;var
L=1;var Ah=this.A7.charCodeAt(1)||0;while(((BX+L_)<Qz)&&(Ah>0)){L=L+Ah;BX=BX+L_;
Ah=this.A7.charCodeAt(L)||0;}while((BX<QA)&&(Ah>0)){var Hc=B.abe(Nd,[0,BX]);var Nq=
0;var J5=false;if(((((Aw&0x40)===0x40)&&((this.A7.charCodeAt((L+Ah)-1)||0)!==0x0A
))&&((this.A7.charCodeAt(L+1)||0)!==0x0A))&&((this.A7.charCodeAt(L+Ah)||0)!==0x00
))J5=true;if(J5&&!!(Aw&0x6)){var Np=L+Ah;var MW=this.A7.indexOf(String.fromCharCode(
0x20),L+1);var MX=this.A7.indexOf(String.fromCharCode(0xA0),L+1);if(((MW<0)||(MW>=
Np))&&((MX<0)||(MX>=Np)))J5=false;}if(J5)Nq=LH;else if(((Aw&0x4)===0x4))Hc=[(Hc[
0]-LH)+font.H$(this.A7,L+1,Ah-1),Hc[1]];else if(((Aw&0x2)===0x2))Hc=[(Hc[0]-((LH
/2)|0))+((font.H$(this.A7,L+1,Ah-1)/2)|0),Hc[1]];AK.Mf(aClip,font,this.A7,L+1,Ah-
1,AA,Hc,Nq,0,Y,Ag,Af,Ae,true);L=L+Ah;BX=BX+L_;Ah=this.A7.charCodeAt(L)||0;}},N:function(
C){var A;if(B.aaY(C,this.O))return;var No;No=((A=this.O)[2]-A[0])!==(C[2]-C[0]);
if(((No&&this.HN)&&this.CJ)&&!((this.F&0x2000)===0x2000)){this.A7=B.jV;this.CJ=false;
B.pe([this,this.FU],this);}if(((this.Hn&&this.CJ)&&!B.aaX([(A=this.O)[2]-A[0],A[
3]-A[1]],[C[2]-C[0],C[3]-C[1]]))&&!((this.F&0x2000)===0x2000)){this.A7=B.jV;this.
CJ=false;B.pe([this,this.FU],this);}B.Core.AP.N.call(this,C);B.pe([this,this.L8]
,this);},LQ:function(aBidi){if(!aBidi)return;B.rB(aBidi);},QD:function(aSize){var
bidi=null;bidi=B.v3(aSize);return bidi;},L8:function(An){},FU:function(An){B.pe([
this,this.Ka],this);},Ka:function(An){var A;if(this.CJ)return;var width=(A=this.
O)[2]-A[0];var height=(A=this.O)[3]-A[1];var EV=-1;var font=this.BN;if((!!font&&
!!!font.Ascent)&&!!!font.Descent)font=null;if(this.HN){EV=width;if(EV<0)EV=1;}if(
!!this.C7){this.LQ(this.C7);this.C7=null;}this.CJ=true;if((this.String!==B.jV)&&
!!font){var length=this.String.length;if(this.KA)this.C7=this.QD(length);this.A7=
font.OI(this.String,0,EV,length,this.C7);if(!!this.C7&&!this.N2()){this.LQ(this.
C7);this.C7=null;}}else this.A7=B.jV;this.FY=AH;if((this.Hn&&(this.A7!==B.jV))&&
!!font){var Aw=this.EX;var leading=font.Leading;var A_=this.A7;var Ke=this.KJ();
if(((Aw&0x80)===0x80)){if(Ke)Aw=(Aw&~0x80)|0x4;else Aw=(Aw&~0x80)|0x1;}var Kc=(font.
Ascent+font.Descent)+leading;var Eo=A_.charCodeAt(0)||0;var FR=((height+leading)
/Kc)|0;var LK=false;var JW=false;if(FR<=0)FR=1;if(Eo>FR){var D2=0;var I9=0;var Kd=
Eo-1;var BH;var Ch=A_.length;var tmp=B.jV;if(!!(Aw&0x110)&&!!(Aw&0x28))Aw&=~0x110;
if(!!(Aw&0x110))Aw&=~0x28;if(((Aw&0x20)===0x20))I9=Eo-FR;else if(((Aw&0x10)===0x10
)||((Aw&0x100)===0x100)){I9=((Eo-FR)/2)|0;Kd=(I9+FR)-1;}else Kd=FR-1;LK=I9>0;JW=
Kd<(Eo-1);for(BH=1;D2<I9;D2=D2+1)BH=BH+(A_.charCodeAt(BH)||0);if(JW)for(Ch=BH;D2<
Kd;D2=D2+1)Ch=Ch+(A_.charCodeAt(Ch)||0);if(LK){var Ct=A_.charCodeAt(BH)||0;tmp=(
Cg+B.abW(A_,BH,Ct))+Cg;tmp=B.abQ(tmp,0,(Ct+2)&0xFFFF);BH=BH+Ct;if((tmp.charCodeAt(
Ct)||0)===0x0A){tmp=B.abQ(tmp,Ct,0xFEFF);tmp=B.abQ(tmp,Ct+1,0x0A);}if((tmp.charCodeAt(
2)||0)===0x0A){tmp=B.abQ(tmp,2,0xFEFF);tmp=B.abQ(tmp,1,0x0A);}else tmp=B.abQ(tmp
,1,0xFEFF);}tmp=tmp+B.abW(A_,BH,Ch-BH);if(JW&&(Ch>=BH)){var Ct=A_.charCodeAt(Ch)||
0;var CL=(Cg+B.abW(A_,Ch,Ct))+Cg;CL=B.abQ(CL,0,(Ct+2)&0xFFFF);CL=B.abQ(CL,1,0xFEFF
);if((CL.charCodeAt(Ct)||0)===0x0A){CL=B.abQ(CL,Ct,0xFEFF);CL=B.abQ(CL,Ct+1,0x0A
);}if((CL.charCodeAt(2)||0)===0x0A){CL=B.abQ(CL,2,0xFEFF);CL=B.abQ(CL,1,0x0A);}else
CL=B.abQ(CL,1,0xFEFF);tmp=tmp+CL;}A_=String.fromCharCode(FR&0xFFFF)+tmp;}var D2=
0;var Di=1;var LY=width;Eo=A_.charCodeAt(0)||0;for(;D2<Eo;D2=D2+1){var FW=LK&&!D2;
var FX=JW&&(D2===(Eo-1));var DA=false;var DB=false;var H2=Ke;if((Ke&&FW)&&!FX){FW=
false;FX=true;}else if((Ke&&FX)&&!FW){FX=false;FW=true;}var I$=Di+1;var Ct=A_.charCodeAt(
Di)||0;var BH=I$;var Ch=(I$+Ct)-2;var LV=-1;var LW=-1;if(!this.HN&&(font.H$(A_,I$
,Ct-1)>LY)){var G5=Aw;if(((G5&0x2)===0x2)&&!!(G5&0x5))G5&=~0x2;if(((G5&0x2)===0x2
))G5&=~0x5;if(((G5&0x4)===0x4))DA=true;else if(((G5&0x2)===0x2)){DA=true;DB=true;
}else DB=true;}if((A_.charCodeAt(BH)||0)===0x0A)BH=BH+1;if((A_.charCodeAt(Ch)||0
)===0x0A)Ch=Ch-1;while(DA&&((A_.charCodeAt(BH)||0)===0xFEFF))BH=BH+1;while(DB&&((
A_.charCodeAt(Ch)||0)===0xFEFF))Ch=Ch-1;DA=DA&&!FX;DB=DB&&!FW;while((((DA||DB)||
FW)||FX)&&(BH<Ch)){if((DA&&(H2||!DB))||FW){if(LV>0)A_=B.abQ(A_,LV,0xFEFF);A_=B.abQ(
A_,BH,0x2026);LV=BH;BH=BH+1;H2=!H2;FW=false;if(font.H$(A_,I$,Ct-1)<=LY){DA=false;
DB=false;}else DA=DA||!DB;}if((DB&&(!H2||!DA))||FX){if(LW>0)A_=B.abQ(A_,LW,0xFEFF
);A_=B.abQ(A_,Ch,0x2026);LW=Ch;Ch=Ch-1;H2=!H2;FX=false;if(font.H$(A_,I$,Ct-1)<=LY
){DA=false;DB=false;}else DB=DB||!DA;}}Di=Di+Ct;}this.FY=[font.Mh(A_),((A_.charCodeAt(
0)||0)*Kc)-leading];this.A7=A_;}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.
O);B.pe([this,this.L8],this);},Oe:function(C){if(C===this.KA)return;this.KA=C;this.
A7=B.jV;this.CJ=false;B.pe([this,this.FU],this);},Od:function(C){if(C===this.Hn)
return;this.Hn=C;if(this.HN||C)this.F=this.F&~0x100;else this.F=this.F|0x100;this.
A7=B.jV;this.CJ=false;B.pe([this,this.FU],this);},OH:function(C){if(C===this.HN)
return;this.HN=C;if(this.CJ){this.A7=B.jV;this.CJ=false;B.pe([this,this.FU],this
);}if(C||this.Hn)this.F=this.F&~0x100;else this.F=this.F|0x100;},Hv:function(C){
var A;if(C===this.EX)return;this.EX=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(
this.O);if(this.Hn){this.A7=B.jV;this.CJ=false;B.pe([this,this.FU],this);}if(this.
CJ)B.pe([this,this.L8],this);},BC:function(C){if(C===this.String)return;this.String=
C;this.A7=B.jV;this.CJ=false;B.pe([this,this.FU],this);},Ef:function(C){if(C===this.
BN)return;this.BN=C;this.A7=B.jV;this.CJ=false;B.pe([this,this.FU],this);},AU:function(
C){var A;if(C===this.Bc)return;this.Bc=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ac(this.O);},A$:function(C){var A;if(C>255)C=255;if(C<0)C=0;if(C===this.Cj)return;
this.Cj=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},Q:function(C){if(
C)this.AD(0x1,0x0);else this.AD(0x0,0x1);},KJ:function(){if(!this.CJ)this.Ka(this
);if(!this.C7)return false;var result=false;var bidi=this.C7;result=B.v2(bidi);return result;
},N2:function(){if(!this.CJ)this.Ka(this);if(!this.C7)return false;var result=false;
var bidi=this.C7;result=B.zZ(bidi);return result;},KG:function(){var A;if((this.
String===B.jV)||!this.BN)return AS;if(!this.CJ)this.Ka(this);if(this.A7===B.jV)return AS;
var leading=this.BN.Leading;var Kc=(this.BN.Ascent+this.BN.Descent)+this.BN.Leading;
if(B.aaX(this.FY,AH))this.FY=[this.BN.Mh(this.A7),this.FY[1]];this.FY=[this.FY[0
],((this.A7.charCodeAt(0)||0)*Kc)-leading];var Aw=this.EX;var AV=this.O;var width=
AV[2]-AV[0];var height=AV[3]-AV[1];var AA=[0,0,width,height];var Am=[].concat(AA.
slice(0,2),B.abf(AA.slice(0,2),this.FY));if(((Aw&0x80)===0x80)){if(this.KJ())Aw=(
Aw&~0x80)|0x4;else Aw=(Aw&~0x80)|0x1;}if(((Aw&0x40)===0x40)){var EV;EV=width;if(
EV<0)EV=0;if(EV>(Am[2]-Am[0]))Am=B.abL(Am,EV);}if((!!(Aw&0x110)&&!!(Aw&0x28))&&((
Am[3]-Am[1])>(AA[3]-AA[1])))Aw&=~0x110;if(!!(Aw&0x110))Aw&=~0x28;if((((Aw&0x2)===
0x2)&&!!(Aw&0x5))&&((Am[2]-Am[0])>(AA[2]-AA[0])))Aw&=~0x2;if(((Aw&0x2)===0x2))Aw&=
~0x5;if((Am[2]-Am[0])!==(AA[2]-AA[0])){if(((Aw&0x4)===0x4))Am=B.abM(Am,AA[2]-(Am[
2]-Am[0]));else if(((Aw&0x2)===0x2))Am=B.abM(Am,(AA[0]+(((AA[2]-AA[0])/2)|0))-(((
Am[2]-Am[0])/2)|0));}if((Am[3]-Am[1])!==(AA[3]-AA[1])){if(((Aw&0x20)===0x20))Am=
B.abO(Am,AA[3]-(Am[3]-Am[1]));else if(((Aw&0x100)===0x100))Am=B.abO(Am,((AA[1]+(((
AA[3]-AA[1])/2)|0))-(((Am[3]-Am[1])/2)|0))+(((this.BN.Descent-this.BN.Ascent)/2)|
0));else if(((Aw&0x10)===0x10))Am=B.abO(Am,(AA[1]+(((AA[3]-AA[1])/2)|0))-(((Am[3
]-Am[1])/2)|0));}Am=B.abh(Am,AV.slice(0,2));return Am;},_Init:function(aArg){B.Core.
AP._Init.call(this,aArg);this.__proto__=D.Text;},_Done:function(){this.C2();this.
__proto__=B.Core.AP;B.Core.AP._Done.call(this);},_Mark:function(E){var A;B.Core.
AP._Mark.call(this,E);if((A=this.BN)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:
"Views::Text"};D.HM={Fo:B.wf,Au:B.abi(4,3,0,null),La:B.wf,Dj:0,Hd:0,BS:function(
C){if(B.aaX(C,this.BE))return;B.Core.Eh.BS.call(this,C);this.Au.Set(3,0,C[0]);this.
Au.Set(3,1,C[1]);this.Au.Set(3,2,1);this.Dj=0x45;B.pe([this,this.H3],this);},BR:
function(C){if(B.aaX(C,this.Cc))return;B.Core.Eh.BR.call(this,C);this.Au.Set(2,0
,C[0]);this.Au.Set(2,1,C[1]);this.Au.Set(2,2,1);this.Dj=0x45;B.pe([this,this.H3]
,this);},BQ:function(C){if(B.aaX(C,this.BD))return;B.Core.Eh.BQ.call(this,C);this.
Au.Set(1,0,C[0]);this.Au.Set(1,1,C[1]);this.Au.Set(1,2,1);this.Dj=0x45;B.pe([this
,this.H3],this);},BP:function(C){if(B.aaX(C,this.Cb))return;B.Core.Eh.BP.call(this
,C);this.Au.Set(0,0,C[0]);this.Au.Set(0,1,C[1]);this.Au.Set(0,2,1);this.Dj=0x45;
B.pe([this,this.H3],this);},MY:function(){return;},H3:function(An){var A;if(this.
Dj===0x00)return;if(this.Dj===0x45){var C0=B._NewObject(B.Graphics.MA,0);C0=C0.NS(
this.Au.Get(0,0),this.Au.Get(0,1),this.Au.Get(1,0),this.Au.Get(1,1),this.Au.Get(
2,0),this.Au.Get(2,1),this.Au.Get(3,0),this.Au.Get(3,1));if(!!C0){C0.Jf(0,0);this.
Au.Set(0,2,C0.Iy*240);C0.Jf(1,0);this.Au.Set(1,2,C0.Iy*240);C0.Jf(1,1);this.Au.Set(
2,2,C0.Iy*240);C0.Jf(0,1);this.Au.Set(3,2,C0.Iy*240);}this.MY();}this.Hd=this.Dj;
this.Dj=0x00;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping());},Op:
function(C){if(B.aaX(C,this.La))return;this.La=C;if((this.Hd!==0x45)&&(this.Dj===
0x00)){this.Dj=this.Hd;B.pe([this,this.H3],this);}},OL:function(MM,aAngle,MQ,MR){
var A;if(!this.Fo[0]||!this.Fo[1])return;var Kj=[].concat(AH,this.Fo);var Ki=this.
La;var M8=(Kj[0]-Ki[0])*MQ;var I=(Kj[2]-Ki[0])*MQ;var Nu=(Kj[1]-Ki[1])*MR;var MS=(
Kj[3]-Ki[1])*MR;var JX=Math.cos(aAngle*B.k$);var Kh=Math.sin(aAngle*B.k$);var M9=
M8*JX;var M_=M8*Kh;var Nm=I*JX;var Nn=I*Kh;var Nv=Nu*JX;var Nw=Nu*Kh;var MT=MS*JX;
var MU=MS*Kh;var J0=MM[0];var J1=MM[1];this.Au.Set(0,0,(J0+M9)+Nw);this.Au.Set(0
,1,(J1-M_)+Nv);this.Au.Set(1,0,(J0+Nm)+Nw);this.Au.Set(1,1,(J1-Nn)+Nv);this.Au.Set(
2,0,(J0+Nm)+MU);this.Au.Set(2,1,(J1-Nn)+MT);this.Au.Set(3,0,(J0+M9)+MU);this.Au.
Set(3,1,(J1-M_)+MT);this.Au.Set(0,2,1);this.Au.Set(1,2,1);this.Au.Set(2,2,1);this.
Au.Set(3,2,1);if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping());this.
Cb=[(this.Au.Get(0,0)+0.5)|0,(this.Au.Get(0,1)+0.5)|0];this.BD=[(this.Au.Get(1,0
)+0.5)|0,(this.Au.Get(1,1)+0.5)|0];this.Cc=[(this.Au.Get(2,0)+0.5)|0,(this.Au.Get(
2,1)+0.5)|0];this.BE=[(this.Au.Get(3,0)+0.5)|0,(this.Au.Get(3,1)+0.5)|0];this.Hd=
0x45;this.Dj=0x00;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping()
);this.MY();},_Init:function(aArg){B.Core.Eh._Init.call(this,aArg);(this.Au=[]).
__proto__=D.HM.Au;this.__proto__=D.HM;this.F=0x3;},_className:"Views::WarpView"};
D.Lo={timer:null,R:null,AJ:0,AQ:0,Bc:0xFFFFFFFF,BY:false,Cw:function(AK,aClip,aOffset
,Az,aBlend){var A;var AL=0;if(this.AQ>=0)AL=this.AQ;if(!this.R||(AL>=this.R.NoOfFrames
))return;this.R.Update();var II;var IJ;var IK;var IL;var Ah=this.Bc;var Bb=(((Az+
1)*255)>>8)+1;var J8=aOffset[0];var J9=aOffset[1];var W=[].concat(AH,this.Fo);aBlend=
aBlend&&((this.F&0x2)===0x2);II=IJ=IK=IL=Ah;if(Bb<256){II=(II&0x00FFFFFF)|((((((
II>>24)&0xFF)*Bb)>>8)&0xFF)<<24);IJ=(IJ&0x00FFFFFF)|((((((IJ>>24)&0xFF)*Bb)>>8)&
0xFF)<<24);IK=(IK&0x00FFFFFF)|((((((IK>>24)&0xFF)*Bb)>>8)&0xFF)<<24);IL=(IL&0x00FFFFFF
)|((((((IL>>24)&0xFF)*Bb)>>8)&0xFF)<<24);}aClip=B.aaV(aClip,B.abh(AS,aOffset));AK.
OT(aClip,this.R,AL,this.Au.Get(0,0)+J8,this.Au.Get(0,1)+J9,this.Au.Get(0,2),this.
Au.Get(1,0)+J8,this.Au.Get(1,1)+J9,this.Au.Get(1,2),this.Au.Get(2,0)+J8,this.Au.
Get(2,1)+J9,this.Au.Get(2,2),this.Au.Get(3,0)+J8,this.Au.Get(3,1)+J9,this.Au.Get(
3,2),W,II,IJ,IK,IL,aBlend,true);},D1:function(An){var A;var Ne=this.Fo;if(!!this.
R)this.Fo=this.R.FrameSize;else this.Fo=AH;if(((B.aaX(Ne,this.Fo)||((this.Hd===0x45
)&&(this.Dj===0x00)))&&!!this.G)&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping(
));if(((this.Hd!==0x45)&&(this.Dj===0x00))&&!B.aaX(Ne,this.Fo)){this.Dj=this.Hd;
B.pe([this,this.H3],this);}},BL:function(An){var A;var AL=this.AQ;var Bm=0;if(!!
this.R)Bm=this.R.NoOfFrames*this.R.FrameDelay;if((!!this.timer&&(this.AQ<0))&&(Bm>
0))this.AJ=this.timer.Ax;if(!!this.timer&&(Bm>0)){var Al=(this.timer.Ax-this.AJ)|
0;AL=(Al/this.R.FrameDelay)|0;if(Al>=Bm){AL=AL%this.R.NoOfFrames;this.AJ=this.timer.
Ax-(Al%Bm);}}if(((AL!==this.AQ)&&!!this.G)&&((this.F&0x1)===0x1))this.G.Ac(this.
GetClipping());this.AQ=AL;if(!Bm&&!!this.timer){B.z9([this,this.BL],this.timer,0
);this.timer=null;}},CR:function(C){var A;if(this.BY===C)return;this.BY=C;this.AQ=-
1;if(!C&&!!this.timer){B.z9([this,this.BL],this.timer,0);this.timer=null;}if(C){
this.timer=B._GetAutoObject(B.aci.E_);B.zV([this,this.BL],this.timer,0);B.pe([this
,this.BL],this);}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping());
},AU:function(C){var A;if(C===this.Bc)return;this.Bc=C;if(!!this.G&&((this.F&0x1
)===0x1))this.G.Ac(this.GetClipping());},AO:function(C){if(C===this.R)return;if(
!!this.R&&this.R.EC)B.z9([this,this.D1],this.R,0);this.R=C;this.AQ=-1;if(!!C&&C.
EC)B.zV([this,this.D1],C,0);if(this.BY){this.CR(false);this.CR(true);}this.D1(this
);},_Init:function(aArg){D.HM._Init.call(this,aArg);this.__proto__=D.Lo;},_Mark:
function(E){var A;D.HM._Mark.call(this,E);if((A=this.timer)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.R)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Views::WarpImage"
};D.In={C3:null,Bc:0xFFFFFFFF,Dt:B.wf,Width:1,C2:function(){this.QH();},Cw:function(
AK,aClip,aOffset,Az,aBlend){if(!this.C3)return;var Y;var Ag;var Ae;var Af;var Ah=
this.Bc;Az=Az+1;Y=Ag=Ae=Af=Ah;if(Az<256){Y=(Y&0x00FFFFFF)|((((Az*((Y>>24)&0xFF))>>
8)&0xFF)<<24);Ag=(Ag&0x00FFFFFF)|((((Az*((Ag>>24)&0xFF))>>8)&0xFF)<<24);Ae=(Ae&0x00FFFFFF
)|((((Az*((Ae>>24)&0xFF))>>8)&0xFF)<<24);Af=(Af&0x00FFFFFF)|((((Az*((Af>>24)&0xFF
))>>8)&0xFF)<<24);}AK.In(aClip,this.C3,B.abh(this.O,aOffset),false,this.Dt,this.
Width,0,0,0,3,Y,Ag,Af,Ae,true,true);},QH:function(){return;},NA:function(An){var
A;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},AU:function(C){var A;if(
C===this.Bc)return;this.Bc=C;if((!!this.G&&((this.F&0x1)===0x1))&&!!this.C3)this.
G.Ac(this.O);},Om:function(C){var A;if(B.aaX(C,this.Dt))return;this.Dt=C;if((!!this.
G&&((this.F&0x1)===0x1))&&!!this.C3)this.G.Ac(this.O);},K9:function(C){var A;if(
C<0)C=0;if(C===this.Width)return;this.Width=C;if((!!this.G&&((this.F&0x1)===0x1)
)&&!!this.C3)this.G.Ac(this.O);},On:function(C){var A;if(C===this.C3)return;if(!
!this.C3)B.z9([this,this.NA],this.C3,0);this.C3=C;if(!!this.C3)B.zV([this,this.NA
],this.C3,0);if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.O);},_Init:function(
aArg){B.Core.AP._Init.call(this,aArg);this.__proto__=D.In;},_Done:function(){this.
C2();this.__proto__=B.Core.AP;B.Core.AP._Done.call(this);},_Mark:function(E){var
A;B.Core.AP._Mark.call(this,E);if((A=this.C3)&&(A._cycle!=E))A._Mark(A._cycle=E);
},_className:"Views::StrokePath"};D.Rr={NH:0x1,NG:0x2,NI:0x4,NL:0x8,NK:0x10,NJ:0x20
,RU:0x40,RV:0x80,RX:0x100};D.RY={NH:0x1,NG:0x2,NI:0x4,NL:0x8,NK:0x10,NJ:0x20,Q7:
0x40,Q6:0x80,Ra:0x100};D.RC={RB:0,RS:1,RQ:2,RR:3};
D._Init=function(){D.Cs.__proto__=B.Core.AP;D.CM.__proto__=B.Core.AP;D.Hr.__proto__=
B.Core.AP;D.AY.__proto__=B.Core.AP;D.JI.__proto__=B.Core.AP;D.Text.__proto__=B.Core.
AP;D.HM.__proto__=B.Core.Eh;D.Lo.__proto__=D.HM;D.In.__proto__=B.Core.AP;};D._ReInit=
function(){};D.Cl=function(E){};return D;})();

/* Embedded Wizard */