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
var AI=[0,0];var AU=[0,0,0,0];var Ch="\uFEFF";
D.Ct={Gf:0xFFFFFFFF,Gg:0xFFFFFFFF,Gh:0xFFFFFFFF,D9:0xFFFFFFFF,Bb:0xFFFFFFFF,Cx:function(
AM,aClip,aOffset,Az,aBlend){var A;var Z=this.D9;var Ag=this.Gh;var Ae=this.Gf;var
Af=this.Gg;var Ah=this.Bb;aBlend=aBlend&&((this.F&0x2)===0x2);Az=Az+1;if((((Z===
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
)|((((Az*((Af>>24)&0xFF))>>8)&0xFF)<<24);}AM.KH(aClip,B.abh(this.Q,aOffset),Z,Ag
,Af,Ae,aBlend);},JC:function(C){var A;if(C===this.Gf)return;this.Gf=C;if(!!this.
G&&((this.F&0x1)===0x1))this.G.Ac(this.Q);},JD:function(C){var A;if(C===this.Gg)
return;this.Gg=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.Q);},JE:function(
C){var A;if(C===this.Gh)return;this.Gh=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ac(this.Q);},GH:function(C){var A;if(C===this.D9)return;this.D9=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ac(this.Q);},AV:function(C){var A;if(C===this.Bb)return;
this.Bb=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.Q);},Oq:function(C){if(
C)this.AD(0x2,0x0);else this.AD(0x0,0x2);},R:function(C){if(C)this.AD(0x1,0x0);else
this.AD(0x0,0x1);},K8:function(){return this.Bb;},_Init:function(aArg){B.Core.AQ.
_Init.call(this,aArg);this.__proto__=D.Ct;},_className:"Views::Rectangle"};D.CO={
Width:1,Gf:0xFFFFFFFF,Gg:0xFFFFFFFF,Gh:0xFFFFFFFF,D9:0xFFFFFFFF,Bb:0xFFFFFFFF,Cx:
function(AM,aClip,aOffset,Az,aBlend){var A;var Z=this.D9;var Ag=this.Gh;var Ae=this.
Gf;var Af=this.Gg;var Ah=this.Bb;aBlend=aBlend&&((this.F&0x2)===0x2);Az=Az+1;if((((
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
)|((((Az*((Af>>24)&0xFF))>>8)&0xFF)<<24);}AM.N9(aClip,B.abh(this.Q,aOffset),this.
Width,Z,Ag,Af,Ae,aBlend);},Lf:function(C){var A;if(C<0)C=0;if(C===this.Width)return;
this.Width=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.Q);},JC:function(C
){var A;if(C===this.Gf)return;this.Gf=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.
Ac(this.Q);},JD:function(C){var A;if(C===this.Gg)return;this.Gg=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ac(this.Q);},JE:function(C){var A;if(C===this.Gh)return;
this.Gh=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.Q);},GH:function(C){var
A;if(C===this.D9)return;this.D9=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.
Q);},AV:function(C){var A;if(C===this.Bb)return;this.Bb=C;if(!!this.G&&((this.F&
0x1)===0x1))this.G.Ac(this.Q);},_Init:function(aArg){B.Core.AQ._Init.call(this,aArg
);this.__proto__=D.CO;},_className:"Views::Border"};D.Hy={timer:null,S:null,AS:-
1,Bb:0xFFFFFFFF,Id:0x1F,ED:0,AL:0,GE:B.wf,B1:false,Cx:function(AM,aClip,aOffset,
Az,aBlend){var A;var AN=this.ED;if(this.AS>=0)AN=this.AS;if(!this.S||(AN>=this.S.
NoOfFrames))return;this.S.Update();var Z;var Ag;var Af;var Ae;var Ah=this.Bb;var
Be=(((Az+1)*255)>>8)+1;var Co=this.Id;var I=B.abh(this.Q,aOffset);var Kl=B.abe([
I[2]-I[0],I[3]-I[1]],this.GE);aBlend=aBlend&&((this.F&0x2)===0x2);Z=Ag=Ae=Af=Ah;
if(Be<256){Z=(Z&0x00FFFFFF)|((((((Z>>24)&0xFF)*Be)>>8)&0xFF)<<24);Ag=(Ag&0x00FFFFFF
)|((((((Ag>>24)&0xFF)*Be)>>8)&0xFF)<<24);Af=(Af&0x00FFFFFF)|((((((Af>>24)&0xFF)*
Be)>>8)&0xFF)<<24);Ae=(Ae&0x00FFFFFF)|((((((Ae>>24)&0xFF)*Be)>>8)&0xFF)<<24);}if(((
this.GE[0]>0)&&(Kl[0]>0))&&!((Co&0x5)===0x5)){var d=((this.S.FrameSize[0]/3)|0)-
Kl[0];if(((Co&0x1)===0x1)){if(aClip[2]>I[2])aClip=B.abN(aClip,I[2]);if(d>0)I=B.abN(
I,I[2]+d);Co=Co|0x4;}else if(((Co&0x4)===0x4)){if(aClip[0]<I[0])aClip=[].concat(
I[0],aClip.slice(1,4));if(d>0)I=[].concat(I[0]-d,I.slice(1,4));Co=Co|0x1;}else{if(
aClip[0]<I[0])aClip=[].concat(I[0],aClip.slice(1,4));if(aClip[2]>I[2])aClip=B.abN(
aClip,I[2]);if(d>0){I=[].concat(I[0]-((d/2)|0),I.slice(1,4));I=B.abN(I,(I[2]+d)-((
d/2)|0));}Co=Co|0x5;}}if(((this.GE[1]>0)&&(Kl[1]>0))&&!((Co&0xA)===0xA)){var d=((
this.S.FrameSize[1]/3)|0)-Kl[1];if(((Co&0x2)===0x2)){if(aClip[3]>I[3])aClip=[].concat(
aClip.slice(0,3),I[3]);if(d>0)I=[].concat(I.slice(0,3),I[3]+d);Co=Co|0x8;}else if(((
Co&0x8)===0x8)){if(aClip[1]<I[1])aClip=B.abP(aClip,I[1]);if(d>0)I=B.abP(I,I[1]-d
);Co=Co|0x2;}else{if(aClip[1]<I[1])aClip=B.abP(aClip,I[1]);if(aClip[3]>I[3])aClip=[
].concat(aClip.slice(0,3),I[3]);if(d>0){I=B.abP(I,I[1]-((d/2)|0));I=[].concat(I.
slice(0,3),(I[3]+d)-((d/2)|0));}Co=Co|0xA;}}AM.N8(aClip,this.S,AN,I,Co,Z,Ag,Af,Ae
,aBlend);},D6:function(An){var A;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.
Q);},BO:function(An){var A;var AN=this.AS;var Bn=0;if(!!this.S)Bn=this.S.NoOfFrames
*this.S.FrameDelay;if((!!this.timer&&(this.AS<0))&&(Bn>0))this.AL=this.timer.Ax-(
this.ED*this.S.FrameDelay);if(!!this.timer&&(Bn>0)){var Al=(this.timer.Ax-this.AL
)|0;AN=(Al/this.S.FrameDelay)|0;if(Al>=Bn){AN=AN%this.S.NoOfFrames;this.AL=this.
timer.Ax-(Al%Bn);}}if(((AN!==this.AS)&&!!this.G)&&((this.F&0x1)===0x1))this.G.Ac(
this.Q);this.AS=AN;if(!Bn&&!!this.timer){B.z9([this,this.BO],this.timer,0);this.
timer=null;}},AV:function(C){var A;if(C===this.Bb)return;this.Bb=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ac(this.Q);},CT:function(C){var A;if(this.B1===C)return;
this.B1=C;this.AS=-1;if(!C&&!!this.timer){B.z9([this,this.BO],this.timer,0);this.
timer=null;}if(C){this.timer=B._GetAutoObject(B.aci.Fb);B.zV([this,this.BO],this.
timer,0);B.pe([this,this.BO],this);}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(
this.Q);},Mw:function(C){var A;if(C===this.Id)return;this.Id=C;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.Q);},Cs:function(C){var A;if(C<0)C=0;if((C===this.ED
)&&(this.AS===-1))return;this.ED=C;if(!this.timer)this.AS=-1;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.Q);},AK:function(C){var A;if(C===this.S)return;if(!
!this.S&&this.S.EG)B.z9([this,this.D6],this.S,0);this.S=C;this.AS=-1;if(!!C&&C.EG
)B.zV([this,this.D6],C,0);if(this.B1){this.CT(false);this.CT(true);}if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ac(this.Q);},R:function(C){if(C)this.AD(0x1,0x0);else this.
AD(0x0,0x1);},Mz:function(C){var A;if(C[0]<0)C=[0,C[1]];if(C[1]<0)C=[C[0],0];if(
B.aaX(C,this.GE))return;this.GE=C;if((!!this.G&&((this.F&0x1)===0x1))&&!((this.Id&
0xF)===0xF))this.G.Ac(this.Q);},_Init:function(aArg){B.Core.AQ._Init.call(this,aArg
);this.__proto__=D.Hy;},_Mark:function(E){var A;B.Core.AQ._Mark.call(this,E);if((
A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.S)&&(A._cycle!=E))A.
_Mark(A._cycle=E);},_className:"Views::Frame"};D.AH={timer:null,S:null,AL:0,AS:0
,D9:0xFFFFFFFF,Bb:0xFFFFFFFF,E0:0x12,ED:0,Cl:255,B1:false,Cx:function(AM,aClip,aOffset
,Az,aBlend){var A;var AN=this.ED;if(this.AS>=0)AN=this.AS;if(!this.S||(AN>=this.
S.NoOfFrames))return;this.S.Update();var W=this.KK();var Cv=this.S.FrameSize;if((
W[0]>=W[2])||(W[1]>=W[3]))return;var Z=this.D9;var Ag=0xFFFFFFFF;var Af=0xFFFFFFFF;
var Ae=0xFFFFFFFF;var Ah=this.Bb;var Be=(((Az+1)*this.Cl)>>8)+1;aBlend=aBlend&&((
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
Af>>16)&0xFF)*(((Ah>>16)&0xFF)+1))>>8)&0xFF)<<16);}if(Be<256){Z=(Z&0x00FFFFFF)|((((((
Z>>24)&0xFF)*Be)>>8)&0xFF)<<24);Ag=(Ag&0x00FFFFFF)|((((((Ag>>24)&0xFF)*Be)>>8)&0xFF
)<<24);Af=(Af&0x00FFFFFF)|((((((Af>>24)&0xFF)*Be)>>8)&0xFF)<<24);Ae=(Ae&0x00FFFFFF
)|((((((Ae>>24)&0xFF)*Be)>>8)&0xFF)<<24);}if(B.aaX([W[2]-W[0],W[3]-W[1]],Cv))AM.
N4(aClip,this.S,AN,B.abh(this.Q,aOffset),B.abe(this.Q.slice(0,2),W.slice(0,2)),Z
,Ag,Af,Ae,aBlend);else AM.O0(aClip,this.S,AN,B.abh(W,aOffset),[].concat(AI,Cv),Z
,Ag,Af,Ae,aBlend,true);},D6:function(An){var A;if(!!this.G&&((this.F&0x1)===0x1)
)this.G.Ac(this.Q);},BO:function(An){var A;var AN=this.AS;var Bn=0;if(!!this.S)Bn=
this.S.NoOfFrames*this.S.FrameDelay;if((!!this.timer&&(this.AS<0))&&(Bn>0))this.
AL=this.timer.Ax-(this.ED*this.S.FrameDelay);if(!!this.timer&&(Bn>0)){var Al=(this.
timer.Ax-this.AL)|0;AN=(Al/this.S.FrameDelay)|0;if(Al>=Bn){AN=AN%this.S.NoOfFrames;
this.AL=this.timer.Ax-(Al%Bn);}}if(((AN!==this.AS)&&!!this.G)&&((this.F&0x1)===0x1
))this.G.Ac(this.Q);this.AS=AN;if(!Bn&&!!this.timer){B.z9([this,this.BO],this.timer
,0);this.timer=null;}},GH:function(C){var A;if(C===this.D9)return;this.D9=C;if(!
!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.Q);},AV:function(C){var A;if(C===this.
Bb)return;this.Bb=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.Q);},CT:function(
C){var A;if(this.B1===C)return;this.B1=C;this.AS=-1;if(!C&&!!this.timer){B.z9([this
,this.BO],this.timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(B.aci.
Fb);B.zV([this,this.BO],this.timer,0);B.pe([this,this.BO],this);}if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ac(this.Q);},HC:function(C){var A;if(C===this.E0)return;
this.E0=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.Q);},Cs:function(C){var
A;if(C<0)C=0;if((C===this.ED)&&(this.AS===-1))return;this.ED=C;if(!this.timer)this.
AS=-1;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.Q);},AK:function(C){var A;
if(C===this.S)return;if(!!this.S&&this.S.EG)B.z9([this,this.D6],this.S,0);this.S=
C;this.AS=-1;if(!!C&&C.EG)B.zV([this,this.D6],C,0);if(this.B1){this.CT(false);this.
CT(true);}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.Q);},Bc:function(C){var
A;if(C>255)C=255;if(C<0)C=0;if(C===this.Cl)return;this.Cl=C;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.Q);},R:function(C){if(C)this.AD(0x1,0x0);else this.
AD(0x0,0x1);},KK:function(){var A;if(!this.S)return AU;var Aw=this.E0;var Cv=this.
S.FrameSize;var AX=this.Q;var width=AX[2]-AX[0];var height=AX[3]-AX[1];if(!Cv[0]||
!Cv[1])return AU;var AA=[0,0,width,height];var Am=AA;if(((Aw&0x40)===0x40)){var Mh=((((
AA[2]-AA[0])<<16)+((Cv[0]/2)|0))/Cv[0])|0;var Jd=((((AA[3]-AA[1])<<16)+((Cv[1]/2
)|0))/Cv[1])|0;var Fx=Mh;if(Jd>Fx)Fx=Jd;Am=B.abL(Am,((Cv[0]*Fx)+32768)>>16);Am=B.
abI(Am,((Cv[1]*Fx)+32768)>>16);}else if(((Aw&0x80)===0x80)){var Mh=((((AA[2]-AA[
0])<<16)+((Cv[0]/2)|0))/Cv[0])|0;var Jd=((((AA[3]-AA[1])<<16)+((Cv[1]/2)|0))/Cv[
1])|0;var Fx=Mh;if(Jd<Fx)Fx=Jd;Am=B.abL(Am,((Cv[0]*Fx)+32768)>>16);Am=B.abI(Am,((
Cv[1]*Fx)+32768)>>16);}else if(!((Aw&0x100)===0x100))Am=B.abK(Am,Cv);if((Am[2]-Am[
0])!==(AA[2]-AA[0])){if(((Aw&0x4)===0x4))Am=B.abM(Am,AA[2]-(Am[2]-Am[0]));else if(((
Aw&0x2)===0x2))Am=B.abM(Am,(AA[0]+(((AA[2]-AA[0])/2)|0))-(((Am[2]-Am[0])/2)|0));
}if((Am[3]-Am[1])!==(AA[3]-AA[1])){if(((Aw&0x20)===0x20))Am=B.abO(Am,AA[3]-(Am[3
]-Am[1]));else if(((Aw&0x10)===0x10))Am=B.abO(Am,(AA[1]+(((AA[3]-AA[1])/2)|0))-(((
Am[3]-Am[1])/2)|0));}Am=B.abh(Am,AX.slice(0,2));return Am;},_Init:function(aArg){
B.Core.AQ._Init.call(this,aArg);this.__proto__=D.AH;},_Mark:function(E){var A;B.
Core.AQ._Mark.call(this,E);if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);
if((A=this.S)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Views::Image"};D.
JN={timer:null,S:null,AS:0,Cl:255,AL:0,B1:false,Cx:function(AM,aClip,aOffset,Az,
aBlend){var A;var AN=0;if(this.AS>=0)AN=this.AS;if(!this.S||(AN>=this.S.NoOfFrames
))return;this.S.Update();var Z;var Ag;var Af;var Ae;var Be=(((Az+1)*this.Cl)>>8)+
1;aBlend=aBlend&&((this.F&0x2)===0x2);Z=Ag=Ae=Af=0xFFFFFFFF;if(Be<256){Z=(Z&0x00FFFFFF
)|((((255*Be)>>8)&0xFF)<<24);Ag=(Ag&0x00FFFFFF)|((((255*Be)>>8)&0xFF)<<24);Af=(Af&
0x00FFFFFF)|((((255*Be)>>8)&0xFF)<<24);Ae=(Ae&0x00FFFFFF)|((((255*Be)>>8)&0xFF)<<
24);}AM.O6(aClip,this.S,AN,B.abh(this.Q,aOffset),[].concat(AI,this.S.FrameSize),
AI,Z,Ag,Af,Ae,aBlend);},D6:function(An){var A;if(!!this.G&&((this.F&0x1)===0x1))
this.G.Ac(this.Q);},BO:function(An){var A;var AN=this.AS;var Bn=0;if(!!this.S)Bn=
this.S.NoOfFrames*this.S.FrameDelay;if((!!this.timer&&(this.AS<0))&&(Bn>0))this.
AL=this.timer.Ax;if(!!this.timer&&(Bn>0)){var Al=(this.timer.Ax-this.AL)|0;AN=(Al
/this.S.FrameDelay)|0;if(Al>=Bn){AN=AN%this.S.NoOfFrames;this.AL=this.timer.Ax-(
Al%Bn);}}if(((AN!==this.AS)&&!!this.G)&&((this.F&0x1)===0x1))this.G.Ac(this.Q);this.
AS=AN;if(!Bn&&!!this.timer){B.z9([this,this.BO],this.timer,0);this.timer=null;}}
,CT:function(C){var A;if(this.B1===C)return;this.B1=C;this.AS=-1;if(!C&&!!this.timer
){B.z9([this,this.BO],this.timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(
B.aci.Fb);B.zV([this,this.BO],this.timer,0);B.pe([this,this.BO],this);}if(!!this.
G&&((this.F&0x1)===0x1))this.G.Ac(this.Q);},AK:function(C){var A;if(C===this.S)return;
if(!!this.S&&this.S.EG)B.z9([this,this.D6],this.S,0);this.S=C;this.AS=-1;if(!!C&&
C.EG)B.zV([this,this.D6],C,0);if(this.B1){this.CT(false);this.CT(true);}if(!!this.
G&&((this.F&0x1)===0x1))this.G.Ac(this.Q);},Bc:function(C){var A;if(C>255)C=255;
if(C<0)C=0;if(C===this.Cl)return;this.Cl=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ac(this.Q);},R:function(C){if(C)this.AD(0x1,0x0);else this.AD(0x0,0x1);},HA:function(
){return this.Cl;},_Init:function(aArg){B.Core.AQ._Init.call(this,aArg);this.__proto__=
D.JN;},_Mark:function(E){var A;B.Core.AQ._Mark.call(this,E);if((A=this.timer)&&(
A._cycle!=E))A._Mark(A._cycle=E);if((A=this.S)&&(A._cycle!=E))A._Mark(A._cycle=E
);},_className:"Views::Wallpaper"};D.Text={BP:null,A8:B.jV,String:B.jV,C_:null,Gc:
B.wf,E0:0x12,Bb:0xFFFFFFFF,Cl:255,HW:false,Hu:false,KE:false,CL:false,C6:function(
){if(!!this.C_){this.LY(this.C_);this.C_=null;}},Cx:function(AM,aClip,aOffset,Az
,aBlend){var A;if((this.A8===B.jV)||!this.BP)return;var Aw=this.E0;var font=this.
BP;var AA=B.abh(this.Q,aOffset);var Z;var Ag;var Af;var Ae;var QN=this.Bb;var Be=(((
Az+1)*this.Cl)>>8)+1;var Eu=this.A8.charCodeAt(0)||0;var W=B.abh(this.KK(),aOffset
);var Nr=[AA[0]-W[0],(AA[1]-W[1])-font.Ascent];if(Eu<1)return;Z=Ag=Ae=Af=QN;if(Be<
256){Z=(Z&0x00FFFFFF)|((((((Z>>24)&0xFF)*Be)>>8)&0xFF)<<24);Ag=(Ag&0x00FFFFFF)|((((((
Ag>>24)&0xFF)*Be)>>8)&0xFF)<<24);Af=(Af&0x00FFFFFF)|((((((Af>>24)&0xFF)*Be)>>8)&
0xFF)<<24);Ae=(Ae&0x00FFFFFF)|((((((Ae>>24)&0xFF)*Be)>>8)&0xFF)<<24);}if(((Aw&0x80
)===0x80)){if(this.KP())Aw=(Aw&~0x80)|0x4;else Aw=(Aw&~0x80)|0x1;}if((Eu===1)&&!((
Aw&0x40)===0x40)){AM.Mo(aClip,font,this.A8,2,(this.A8.charCodeAt(1)||0)-1,AA,Nr,
0,0,Z,Ag,Af,Ae,true);return;}var leading=font.Leading;var Mg=(font.Ascent+font.Descent
)+leading;var QL=aClip[1]-W[1];var QM=aClip[3]-W[1];var LP=W[2]-W[0];var B0=0;var
M=1;var Ah=this.A8.charCodeAt(1)||0;while(((B0+Mg)<QL)&&(Ah>0)){M=M+Ah;B0=B0+Mg;
Ah=this.A8.charCodeAt(M)||0;}while((B0<QM)&&(Ah>0)){var Hk=B.abe(Nr,[0,B0]);var NE=
0;var J_=false;if(((((Aw&0x40)===0x40)&&((this.A8.charCodeAt((M+Ah)-1)||0)!==0x0A
))&&((this.A8.charCodeAt(M+1)||0)!==0x0A))&&((this.A8.charCodeAt(M+Ah)||0)!==0x00
))J_=true;if(J_&&!!(Aw&0x6)){var ND=M+Ah;var M_=this.A8.indexOf(String.fromCharCode(
0x20),M+1);var M$=this.A8.indexOf(String.fromCharCode(0xA0),M+1);if(((M_<0)||(M_>=
ND))&&((M$<0)||(M$>=ND)))J_=false;}if(J_)NE=LP;else if(((Aw&0x4)===0x4))Hk=[(Hk[
0]-LP)+font.If(this.A8,M+1,Ah-1),Hk[1]];else if(((Aw&0x2)===0x2))Hk=[(Hk[0]-((LP
/2)|0))+((font.If(this.A8,M+1,Ah-1)/2)|0),Hk[1]];AM.Mo(aClip,font,this.A8,M+1,Ah-
1,AA,Hk,NE,0,Z,Ag,Af,Ae,true);M=M+Ah;B0=B0+Mg;Ah=this.A8.charCodeAt(M)||0;}},L:function(
C){var A;if(B.aaY(C,this.Q))return;var NC;NC=((A=this.Q)[2]-A[0])!==(C[2]-C[0]);
if(((NC&&this.HW)&&this.CL)&&!((this.F&0x2000)===0x2000)){this.A8=B.jV;this.CL=false;
B.pe([this,this.F0],this);}if(((this.Hu&&this.CL)&&!B.aaX([(A=this.Q)[2]-A[0],A[
3]-A[1]],[C[2]-C[0],C[3]-C[1]]))&&!((this.F&0x2000)===0x2000)){this.A8=B.jV;this.
CL=false;B.pe([this,this.F0],this);}B.Core.AQ.L.call(this,C);B.pe([this,this.Me]
,this);},LY:function(aBidi){if(!aBidi)return;B.rB(aBidi);},QP:function(aSize){var
bidi=null;bidi=B.v3(aSize);return bidi;},Me:function(An){},F0:function(An){B.pe([
this,this.Kf],this);},Kf:function(An){var A;if(this.CL)return;var width=(A=this.
Q)[2]-A[0];var height=(A=this.Q)[3]-A[1];var EY=-1;var font=this.BP;if((!!font&&
!!!font.Ascent)&&!!!font.Descent)font=null;if(this.HW){EY=width;if(EY<0)EY=1;}if(
!!this.C_){this.LY(this.C_);this.C_=null;}this.CL=true;if((this.String!==B.jV)&&
!!font){var length=this.String.length;if(this.KE)this.C_=this.QP(length);this.A8=
font.OV(this.String,0,EY,length,this.C_);if(!!this.C_&&!this.Oe()){this.LY(this.
C_);this.C_=null;}}else this.A8=B.jV;this.Gc=AI;if((this.Hu&&(this.A8!==B.jV))&&
!!font){var Aw=this.E0;var leading=font.Leading;var Ba=this.A8;var Kj=this.KP();
if(((Aw&0x80)===0x80)){if(Kj)Aw=(Aw&~0x80)|0x4;else Aw=(Aw&~0x80)|0x1;}var Kh=(font.
Ascent+font.Descent)+leading;var Eu=Ba.charCodeAt(0)||0;var FX=((height+leading)
/Kh)|0;var LS=false;var J1=false;if(FX<=0)FX=1;if(Eu>FX){var D7=0;var Jc=0;var Ki=
Eu-1;var BK;var Ci=Ba.length;var tmp=B.jV;if(!!(Aw&0x110)&&!!(Aw&0x28))Aw&=~0x110;
if(!!(Aw&0x110))Aw&=~0x28;if(((Aw&0x20)===0x20))Jc=Eu-FX;else if(((Aw&0x10)===0x10
)||((Aw&0x100)===0x100)){Jc=((Eu-FX)/2)|0;Ki=(Jc+FX)-1;}else Ki=FX-1;LS=Jc>0;J1=
Ki<(Eu-1);for(BK=1;D7<Jc;D7=D7+1)BK=BK+(Ba.charCodeAt(BK)||0);if(J1)for(Ci=BK;D7<
Ki;D7=D7+1)Ci=Ci+(Ba.charCodeAt(Ci)||0);if(LS){var Cu=Ba.charCodeAt(BK)||0;tmp=(
Ch+B.abW(Ba,BK,Cu))+Ch;tmp=B.abQ(tmp,0,(Cu+2)&0xFFFF);BK=BK+Cu;if((tmp.charCodeAt(
Cu)||0)===0x0A){tmp=B.abQ(tmp,Cu,0xFEFF);tmp=B.abQ(tmp,Cu+1,0x0A);}if((tmp.charCodeAt(
2)||0)===0x0A){tmp=B.abQ(tmp,2,0xFEFF);tmp=B.abQ(tmp,1,0x0A);}else tmp=B.abQ(tmp
,1,0xFEFF);}tmp=tmp+B.abW(Ba,BK,Ci-BK);if(J1&&(Ci>=BK)){var Cu=Ba.charCodeAt(Ci)||
0;var CN=(Ch+B.abW(Ba,Ci,Cu))+Ch;CN=B.abQ(CN,0,(Cu+2)&0xFFFF);CN=B.abQ(CN,1,0xFEFF
);if((CN.charCodeAt(Cu)||0)===0x0A){CN=B.abQ(CN,Cu,0xFEFF);CN=B.abQ(CN,Cu+1,0x0A
);}if((CN.charCodeAt(2)||0)===0x0A){CN=B.abQ(CN,2,0xFEFF);CN=B.abQ(CN,1,0x0A);}else
CN=B.abQ(CN,1,0xFEFF);tmp=tmp+CN;}Ba=String.fromCharCode(FX&0xFFFF)+tmp;}var D7=
0;var Do=1;var L6=width;Eu=Ba.charCodeAt(0)||0;for(;D7<Eu;D7=D7+1){var Ga=LS&&!D7;
var Gb=J1&&(D7===(Eu-1));var DH=false;var DI=false;var H8=Kj;if((Kj&&Ga)&&!Gb){Ga=
false;Gb=true;}else if((Kj&&Gb)&&!Ga){Gb=false;Ga=true;}var Je=Do+1;var Cu=Ba.charCodeAt(
Do)||0;var BK=Je;var Ci=(Je+Cu)-2;var L3=-1;var L4=-1;if(!this.HW&&(font.If(Ba,Je
,Cu-1)>L6)){var Hb=Aw;if(((Hb&0x2)===0x2)&&!!(Hb&0x5))Hb&=~0x2;if(((Hb&0x2)===0x2
))Hb&=~0x5;if(((Hb&0x4)===0x4))DH=true;else if(((Hb&0x2)===0x2)){DH=true;DI=true;
}else DI=true;}if((Ba.charCodeAt(BK)||0)===0x0A)BK=BK+1;if((Ba.charCodeAt(Ci)||0
)===0x0A)Ci=Ci-1;while(DH&&((Ba.charCodeAt(BK)||0)===0xFEFF))BK=BK+1;while(DI&&((
Ba.charCodeAt(Ci)||0)===0xFEFF))Ci=Ci-1;DH=DH&&!Gb;DI=DI&&!Ga;while((((DH||DI)||
Ga)||Gb)&&(BK<Ci)){if((DH&&(H8||!DI))||Ga){if(L3>0)Ba=B.abQ(Ba,L3,0xFEFF);Ba=B.abQ(
Ba,BK,0x2026);L3=BK;BK=BK+1;H8=!H8;Ga=false;if(font.If(Ba,Je,Cu-1)<=L6){DH=false;
DI=false;}else DH=DH||!DI;}if((DI&&(!H8||!DH))||Gb){if(L4>0)Ba=B.abQ(Ba,L4,0xFEFF
);Ba=B.abQ(Ba,Ci,0x2026);L4=Ci;Ci=Ci-1;H8=!H8;Gb=false;if(font.If(Ba,Je,Cu-1)<=L6
){DH=false;DI=false;}else DI=DI||!DH;}}Do=Do+Cu;}this.Gc=[font.Mq(Ba),((Ba.charCodeAt(
0)||0)*Kh)-leading];this.A8=Ba;}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.
Q);B.pe([this,this.Me],this);},Os:function(C){if(C===this.KE)return;this.KE=C;this.
A8=B.jV;this.CL=false;B.pe([this,this.F0],this);},Or:function(C){if(C===this.Hu)
return;this.Hu=C;if(this.HW||C)this.F=this.F&~0x100;else this.F=this.F|0x100;this.
A8=B.jV;this.CL=false;B.pe([this,this.F0],this);},OU:function(C){if(C===this.HW)
return;this.HW=C;if(this.CL){this.A8=B.jV;this.CL=false;B.pe([this,this.F0],this
);}if(C||this.Hu)this.F=this.F&~0x100;else this.F=this.F|0x100;},HC:function(C){
var A;if(C===this.E0)return;this.E0=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(
this.Q);if(this.Hu){this.A8=B.jV;this.CL=false;B.pe([this,this.F0],this);}if(this.
CL)B.pe([this,this.Me],this);},A_:function(C){if(C===this.String)return;this.String=
C;this.A8=B.jV;this.CL=false;B.pe([this,this.F0],this);},DU:function(C){if(C===this.
BP)return;this.BP=C;this.A8=B.jV;this.CL=false;B.pe([this,this.F0],this);},AV:function(
C){var A;if(C===this.Bb)return;this.Bb=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ac(this.Q);},Bc:function(C){var A;if(C>255)C=255;if(C<0)C=0;if(C===this.Cl)return;
this.Cl=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.Q);},R:function(C){if(
C)this.AD(0x1,0x0);else this.AD(0x0,0x1);},KP:function(){if(!this.CL)this.Kf(this
);if(!this.C_)return false;var result=false;var bidi=this.C_;result=B.v2(bidi);return result;
},Oe:function(){if(!this.CL)this.Kf(this);if(!this.C_)return false;var result=false;
var bidi=this.C_;result=B.zZ(bidi);return result;},KK:function(){var A;if((this.
String===B.jV)||!this.BP)return AU;if(!this.CL)this.Kf(this);if(this.A8===B.jV)return AU;
var leading=this.BP.Leading;var Kh=(this.BP.Ascent+this.BP.Descent)+this.BP.Leading;
if(B.aaX(this.Gc,AI))this.Gc=[this.BP.Mq(this.A8),this.Gc[1]];this.Gc=[this.Gc[0
],((this.A8.charCodeAt(0)||0)*Kh)-leading];var Aw=this.E0;var AX=this.Q;var width=
AX[2]-AX[0];var height=AX[3]-AX[1];var AA=[0,0,width,height];var Am=[].concat(AA.
slice(0,2),B.abf(AA.slice(0,2),this.Gc));if(((Aw&0x80)===0x80)){if(this.KP())Aw=(
Aw&~0x80)|0x4;else Aw=(Aw&~0x80)|0x1;}if(((Aw&0x40)===0x40)){var EY;EY=width;if(
EY<0)EY=0;if(EY>(Am[2]-Am[0]))Am=B.abL(Am,EY);}if((!!(Aw&0x110)&&!!(Aw&0x28))&&((
Am[3]-Am[1])>(AA[3]-AA[1])))Aw&=~0x110;if(!!(Aw&0x110))Aw&=~0x28;if((((Aw&0x2)===
0x2)&&!!(Aw&0x5))&&((Am[2]-Am[0])>(AA[2]-AA[0])))Aw&=~0x2;if(((Aw&0x2)===0x2))Aw&=
~0x5;if((Am[2]-Am[0])!==(AA[2]-AA[0])){if(((Aw&0x4)===0x4))Am=B.abM(Am,AA[2]-(Am[
2]-Am[0]));else if(((Aw&0x2)===0x2))Am=B.abM(Am,(AA[0]+(((AA[2]-AA[0])/2)|0))-(((
Am[2]-Am[0])/2)|0));}if((Am[3]-Am[1])!==(AA[3]-AA[1])){if(((Aw&0x20)===0x20))Am=
B.abO(Am,AA[3]-(Am[3]-Am[1]));else if(((Aw&0x100)===0x100))Am=B.abO(Am,((AA[1]+(((
AA[3]-AA[1])/2)|0))-(((Am[3]-Am[1])/2)|0))+(((this.BP.Descent-this.BP.Ascent)/2)|
0));else if(((Aw&0x10)===0x10))Am=B.abO(Am,(AA[1]+(((AA[3]-AA[1])/2)|0))-(((Am[3
]-Am[1])/2)|0));}Am=B.abh(Am,AX.slice(0,2));return Am;},K8:function(){return this.
Bb;},_Init:function(aArg){B.Core.AQ._Init.call(this,aArg);this.__proto__=D.Text;
},_Done:function(){this.C6();this.__proto__=B.Core.AQ;B.Core.AQ._Done.call(this);
},_Mark:function(E){var A;B.Core.AQ._Mark.call(this,E);if((A=this.BP)&&(A._cycle
!=E))A._Mark(A._cycle=E);},_className:"Views::Text"};D.HV={Fq:B.wf,Au:B.abi(4,3,
0,null),Li:B.wf,Dp:0,Hl:0,BU:function(C){if(B.aaX(C,this.BH))return;B.Core.En.BU.
call(this,C);this.Au.Set(3,0,C[0]);this.Au.Set(3,1,C[1]);this.Au.Set(3,2,1);this.
Dp=0x45;B.pe([this,this.H9],this);},BT:function(C){if(B.aaX(C,this.Ce))return;B.
Core.En.BT.call(this,C);this.Au.Set(2,0,C[0]);this.Au.Set(2,1,C[1]);this.Au.Set(
2,2,1);this.Dp=0x45;B.pe([this,this.H9],this);},BS:function(C){if(B.aaX(C,this.BG
))return;B.Core.En.BS.call(this,C);this.Au.Set(1,0,C[0]);this.Au.Set(1,1,C[1]);this.
Au.Set(1,2,1);this.Dp=0x45;B.pe([this,this.H9],this);},BR:function(C){if(B.aaX(C
,this.Cd))return;B.Core.En.BR.call(this,C);this.Au.Set(0,0,C[0]);this.Au.Set(0,1
,C[1]);this.Au.Set(0,2,1);this.Dp=0x45;B.pe([this,this.H9],this);},Na:function(){
return;},H9:function(An){var A;if(this.Dp===0x00)return;if(this.Dp===0x45){var C3=
B._NewObject(B.Graphics.MI,0);C3=C3.N6(this.Au.Get(0,0),this.Au.Get(0,1),this.Au.
Get(1,0),this.Au.Get(1,1),this.Au.Get(2,0),this.Au.Get(2,1),this.Au.Get(3,0),this.
Au.Get(3,1));if(!!C3){C3.Jk(0,0);this.Au.Set(0,2,C3.ID*240);C3.Jk(1,0);this.Au.Set(
1,2,C3.ID*240);C3.Jk(1,1);this.Au.Set(2,2,C3.ID*240);C3.Jk(0,1);this.Au.Set(3,2,
C3.ID*240);}this.Na();}this.Hl=this.Dp;this.Dp=0x00;if(!!this.G&&((this.F&0x1)===
0x1))this.G.Ac(this.GetClipping());},OC:function(C){if(B.aaX(C,this.Li))return;this.
Li=C;if((this.Hl!==0x45)&&(this.Dp===0x00)){this.Dp=this.Hl;B.pe([this,this.H9],
this);}},OY:function(M0,aAngle,M4,M5){var A;if(!this.Fq[0]||!this.Fq[1])return;var
Ko=[].concat(AI,this.Fq);var Kn=this.Li;var Nk=(Ko[0]-Kn[0])*M4;var I=(Ko[2]-Kn[
0])*M4;var NI=(Ko[1]-Kn[1])*M5;var M6=(Ko[3]-Kn[1])*M5;var J2=Math.cos(aAngle*B.
k$);var Km=Math.sin(aAngle*B.k$);var Nl=Nk*J2;var Nm=Nk*Km;var NA=I*J2;var NB=I*
Km;var NJ=NI*J2;var NK=NI*Km;var M7=M6*J2;var M8=M6*Km;var J5=M0[0];var J6=M0[1];
this.Au.Set(0,0,(J5+Nl)+NK);this.Au.Set(0,1,(J6-Nm)+NJ);this.Au.Set(1,0,(J5+NA)+
NK);this.Au.Set(1,1,(J6-NB)+NJ);this.Au.Set(2,0,(J5+NA)+M8);this.Au.Set(2,1,(J6-
NB)+M7);this.Au.Set(3,0,(J5+Nl)+M8);this.Au.Set(3,1,(J6-Nm)+M7);this.Au.Set(0,2,
1);this.Au.Set(1,2,1);this.Au.Set(2,2,1);this.Au.Set(3,2,1);if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.GetClipping());this.Cd=[(this.Au.Get(0,0)+0.5)|0,(this.
Au.Get(0,1)+0.5)|0];this.BG=[(this.Au.Get(1,0)+0.5)|0,(this.Au.Get(1,1)+0.5)|0];
this.Ce=[(this.Au.Get(2,0)+0.5)|0,(this.Au.Get(2,1)+0.5)|0];this.BH=[(this.Au.Get(
3,0)+0.5)|0,(this.Au.Get(3,1)+0.5)|0];this.Hl=0x45;this.Dp=0x00;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.GetClipping());this.Na();},_Init:function(aArg){B.Core.
En._Init.call(this,aArg);(this.Au=[]).__proto__=D.HV.Au;this.__proto__=D.HV;this.
F=0x3;},_className:"Views::WarpView"};D.Lw={timer:null,S:null,AL:0,AS:0,Bb:0xFFFFFFFF
,B1:false,Cx:function(AM,aClip,aOffset,Az,aBlend){var A;var AN=0;if(this.AS>=0)AN=
this.AS;if(!this.S||(AN>=this.S.NoOfFrames))return;this.S.Update();var IN;var IO;
var IP;var IQ;var Ah=this.Bb;var Be=(((Az+1)*255)>>8)+1;var Kb=aOffset[0];var Kc=
aOffset[1];var W=[].concat(AI,this.Fq);aBlend=aBlend&&((this.F&0x2)===0x2);IN=IO=
IP=IQ=Ah;if(Be<256){IN=(IN&0x00FFFFFF)|((((((IN>>24)&0xFF)*Be)>>8)&0xFF)<<24);IO=(
IO&0x00FFFFFF)|((((((IO>>24)&0xFF)*Be)>>8)&0xFF)<<24);IP=(IP&0x00FFFFFF)|((((((IP>>
24)&0xFF)*Be)>>8)&0xFF)<<24);IQ=(IQ&0x00FFFFFF)|((((((IQ>>24)&0xFF)*Be)>>8)&0xFF
)<<24);}aClip=B.aaV(aClip,B.abh(AU,aOffset));AM.O7(aClip,this.S,AN,this.Au.Get(0
,0)+Kb,this.Au.Get(0,1)+Kc,this.Au.Get(0,2),this.Au.Get(1,0)+Kb,this.Au.Get(1,1)+
Kc,this.Au.Get(1,2),this.Au.Get(2,0)+Kb,this.Au.Get(2,1)+Kc,this.Au.Get(2,2),this.
Au.Get(3,0)+Kb,this.Au.Get(3,1)+Kc,this.Au.Get(3,2),W,IN,IO,IP,IQ,aBlend,true);}
,D6:function(An){var A;var Ns=this.Fq;if(!!this.S)this.Fq=this.S.FrameSize;else this.
Fq=AI;if(((B.aaX(Ns,this.Fq)||((this.Hl===0x45)&&(this.Dp===0x00)))&&!!this.G)&&((
this.F&0x1)===0x1))this.G.Ac(this.GetClipping());if(((this.Hl!==0x45)&&(this.Dp===
0x00))&&!B.aaX(Ns,this.Fq)){this.Dp=this.Hl;B.pe([this,this.H9],this);}},BO:function(
An){var A;var AN=this.AS;var Bn=0;if(!!this.S)Bn=this.S.NoOfFrames*this.S.FrameDelay;
if((!!this.timer&&(this.AS<0))&&(Bn>0))this.AL=this.timer.Ax;if(!!this.timer&&(Bn>
0)){var Al=(this.timer.Ax-this.AL)|0;AN=(Al/this.S.FrameDelay)|0;if(Al>=Bn){AN=AN
%this.S.NoOfFrames;this.AL=this.timer.Ax-(Al%Bn);}}if(((AN!==this.AS)&&!!this.G)&&((
this.F&0x1)===0x1))this.G.Ac(this.GetClipping());this.AS=AN;if(!Bn&&!!this.timer
){B.z9([this,this.BO],this.timer,0);this.timer=null;}},CT:function(C){var A;if(this.
B1===C)return;this.B1=C;this.AS=-1;if(!C&&!!this.timer){B.z9([this,this.BO],this.
timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(B.aci.Fb);B.zV([this
,this.BO],this.timer,0);B.pe([this,this.BO],this);}if(!!this.G&&((this.F&0x1)===
0x1))this.G.Ac(this.GetClipping());},AV:function(C){var A;if(C===this.Bb)return;
this.Bb=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping());},AK:function(
C){if(C===this.S)return;if(!!this.S&&this.S.EG)B.z9([this,this.D6],this.S,0);this.
S=C;this.AS=-1;if(!!C&&C.EG)B.zV([this,this.D6],C,0);if(this.B1){this.CT(false);
this.CT(true);}this.D6(this);},_Init:function(aArg){D.HV._Init.call(this,aArg);this.
__proto__=D.Lw;},_Mark:function(E){var A;D.HV._Mark.call(this,E);if((A=this.timer
)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.S)&&(A._cycle!=E))A._Mark(A._cycle=
E);},_className:"Views::WarpImage"};D.It={C7:null,Bb:0xFFFFFFFF,DA:B.wf,Width:1,
C6:function(){this.QT();},Cx:function(AM,aClip,aOffset,Az,aBlend){if(!this.C7)return;
var Z;var Ag;var Ae;var Af;var Ah=this.Bb;Az=Az+1;Z=Ag=Ae=Af=Ah;if(Az<256){Z=(Z&
0x00FFFFFF)|((((Az*((Z>>24)&0xFF))>>8)&0xFF)<<24);Ag=(Ag&0x00FFFFFF)|((((Az*((Ag>>
24)&0xFF))>>8)&0xFF)<<24);Ae=(Ae&0x00FFFFFF)|((((Az*((Ae>>24)&0xFF))>>8)&0xFF)<<
24);Af=(Af&0x00FFFFFF)|((((Az*((Af>>24)&0xFF))>>8)&0xFF)<<24);}AM.It(aClip,this.
C7,B.abh(this.Q,aOffset),false,this.DA,this.Width,0,0,0,3,Z,Ag,Af,Ae,true,true);
},QT:function(){return;},NO:function(An){var A;if(!!this.G&&((this.F&0x1)===0x1)
)this.G.Ac(this.Q);},AV:function(C){var A;if(C===this.Bb)return;this.Bb=C;if((!!
this.G&&((this.F&0x1)===0x1))&&!!this.C7)this.G.Ac(this.Q);},Oz:function(C){var A;
if(B.aaX(C,this.DA))return;this.DA=C;if((!!this.G&&((this.F&0x1)===0x1))&&!!this.
C7)this.G.Ac(this.Q);},Lf:function(C){var A;if(C<0)C=0;if(C===this.Width)return;
this.Width=C;if((!!this.G&&((this.F&0x1)===0x1))&&!!this.C7)this.G.Ac(this.Q);},
OA:function(C){var A;if(C===this.C7)return;if(!!this.C7)B.z9([this,this.NO],this.
C7,0);this.C7=C;if(!!this.C7)B.zV([this,this.NO],this.C7,0);if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.Q);},_Init:function(aArg){B.Core.AQ._Init.call(this
,aArg);this.__proto__=D.It;},_Done:function(){this.C6();this.__proto__=B.Core.AQ;
B.Core.AQ._Done.call(this);},_Mark:function(E){var A;B.Core.AQ._Mark.call(this,E
);if((A=this.C7)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Views::StrokePath"
};D.RD={NV:0x1,NU:0x2,NW:0x4,NZ:0x8,NY:0x10,NX:0x20,R6:0x40,R7:0x80,R9:0x100};D.
R_={NV:0x1,NU:0x2,NW:0x4,NZ:0x8,NY:0x10,NX:0x20,Rh:0x40,Rg:0x80,Rm:0x100};D.RO={
RN:0,R4:1,R2:2,R3:3};
D._Init=function(){D.Ct.__proto__=B.Core.AQ;D.CO.__proto__=B.Core.AQ;D.Hy.__proto__=
B.Core.AQ;D.AH.__proto__=B.Core.AQ;D.JN.__proto__=B.Core.AQ;D.Text.__proto__=B.Core.
AQ;D.HV.__proto__=B.Core.En;D.Lw.__proto__=D.HV;D.It.__proto__=B.Core.AQ;};D._ReInit=
function(){};D.Cn=function(E){};return D;})();

/* Embedded Wizard */