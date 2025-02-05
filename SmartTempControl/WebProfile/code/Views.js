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
var AG=[0,0];var AZ=[0,0,0,0];var Cd="\uFEFF";
D.CD={Hb:0xFFFFFFFF,Hc:0xFFFFFFFF,Hd:0xFFFFFFFF,ED:0xFFFFFFFF,Bq:0xFFFFFFFF,CJ:function(
AT,aClip,aOffset,AE,aBlend){var A;var Ac=this.ED;var Ak=this.Hd;var Ai=this.Hb;var
Aj=this.Hc;var Al=this.Bq;aBlend=aBlend&&((this.F&0x2)===0x2);AE=AE+1;if((((Ac===
Ak)&&(Ai===Aj))&&(Ac===Ai))&&(Ac===0xFFFFFFFF))Ac=Ak=Ai=Aj=Al;else if(Al!==0xFFFFFFFF
){Ac=(Ac&0x00FFFFFF)|((((((Ac>>24)&0xFF)*(((Al>>24)&0xFF)+1))>>8)&0xFF)<<24);Ac=(
Ac&0xFFFFFF00)|((((Ac&0xFF)*((Al&0xFF)+1))>>8)&0xFF);Ac=(Ac&0xFFFF00FF)|((((((Ac>>
8)&0xFF)*(((Al>>8)&0xFF)+1))>>8)&0xFF)<<8);Ac=(Ac&0xFF00FFFF)|((((((Ac>>16)&0xFF
)*(((Al>>16)&0xFF)+1))>>8)&0xFF)<<16);Ak=(Ak&0x00FFFFFF)|((((((Ak>>24)&0xFF)*(((
Al>>24)&0xFF)+1))>>8)&0xFF)<<24);Ak=(Ak&0xFFFFFF00)|((((Ak&0xFF)*((Al&0xFF)+1))>>
8)&0xFF);Ak=(Ak&0xFFFF00FF)|((((((Ak>>8)&0xFF)*(((Al>>8)&0xFF)+1))>>8)&0xFF)<<8);
Ak=(Ak&0xFF00FFFF)|((((((Ak>>16)&0xFF)*(((Al>>16)&0xFF)+1))>>8)&0xFF)<<16);Ai=(Ai&
0x00FFFFFF)|((((((Ai>>24)&0xFF)*(((Al>>24)&0xFF)+1))>>8)&0xFF)<<24);Ai=(Ai&0xFFFFFF00
)|((((Ai&0xFF)*((Al&0xFF)+1))>>8)&0xFF);Ai=(Ai&0xFFFF00FF)|((((((Ai>>8)&0xFF)*(((
Al>>8)&0xFF)+1))>>8)&0xFF)<<8);Ai=(Ai&0xFF00FFFF)|((((((Ai>>16)&0xFF)*(((Al>>16)&
0xFF)+1))>>8)&0xFF)<<16);Aj=(Aj&0x00FFFFFF)|((((((Aj>>24)&0xFF)*(((Al>>24)&0xFF)+
1))>>8)&0xFF)<<24);Aj=(Aj&0xFFFFFF00)|((((Aj&0xFF)*((Al&0xFF)+1))>>8)&0xFF);Aj=(
Aj&0xFFFF00FF)|((((((Aj>>8)&0xFF)*(((Al>>8)&0xFF)+1))>>8)&0xFF)<<8);Aj=(Aj&0xFF00FFFF
)|((((((Aj>>16)&0xFF)*(((Al>>16)&0xFF)+1))>>8)&0xFF)<<16);}if(AE<256){Ac=(Ac&0x00FFFFFF
)|((((AE*((Ac>>24)&0xFF))>>8)&0xFF)<<24);Ak=(Ak&0x00FFFFFF)|((((AE*((Ak>>24)&0xFF
))>>8)&0xFF)<<24);Ai=(Ai&0x00FFFFFF)|((((AE*((Ai>>24)&0xFF))>>8)&0xFF)<<24);Aj=(
Aj&0x00FFFFFF)|((((AE*((Aj>>24)&0xFF))>>8)&0xFF)<<24);}AT.L6(aClip,B.abh(this.Q,
aOffset),Ac,Ak,Aj,Ai,aBlend);},KX:function(C){var A;if(C===this.Hb)return;this.Hb=
C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.Q);},KY:function(C){var A;if(
C===this.Hc)return;this.Hc=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.Q);
},KZ:function(C){var A;if(C===this.Hd)return;this.Hd=C;if(!!this.G&&((this.F&0x1
)===0x1))this.G.Ag(this.Q);},HE:function(C){var A;if(C===this.ED)return;this.ED=
C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.Q);},A7:function(C){var A;if(
C===this.Bq)return;this.Bq=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.Q);
},P_:function(C){if(C)this.AB(0x2,0x0);else this.AB(0x0,0x2);},B6:function(C){if(
C)this.AB(0x1,0x0);else this.AB(0x0,0x1);},Mu:function(){return this.Bq;},_Init:
function(aArg){B.Core.AX._Init.call(this,aArg);this.__proto__=D.CD;},_className:
"Views::Rectangle"};D.C2={Width:1,Hb:0xFFFFFFFF,Hc:0xFFFFFFFF,Hd:0xFFFFFFFF,ED:0xFFFFFFFF
,Bq:0xFFFFFFFF,CJ:function(AT,aClip,aOffset,AE,aBlend){var A;var Ac=this.ED;var Ak=
this.Hd;var Ai=this.Hb;var Aj=this.Hc;var Al=this.Bq;aBlend=aBlend&&((this.F&0x2
)===0x2);AE=AE+1;if((((Ac===Ak)&&(Ai===Aj))&&(Ac===Ai))&&(Ac===0xFFFFFFFF))Ac=Ak=
Ai=Aj=Al;else if(Al!==0xFFFFFFFF){Ac=(Ac&0x00FFFFFF)|((((((Ac>>24)&0xFF)*(((Al>>
24)&0xFF)+1))>>8)&0xFF)<<24);Ac=(Ac&0xFFFFFF00)|((((Ac&0xFF)*((Al&0xFF)+1))>>8)&
0xFF);Ac=(Ac&0xFFFF00FF)|((((((Ac>>8)&0xFF)*(((Al>>8)&0xFF)+1))>>8)&0xFF)<<8);Ac=(
Ac&0xFF00FFFF)|((((((Ac>>16)&0xFF)*(((Al>>16)&0xFF)+1))>>8)&0xFF)<<16);Ak=(Ak&0x00FFFFFF
)|((((((Ak>>24)&0xFF)*(((Al>>24)&0xFF)+1))>>8)&0xFF)<<24);Ak=(Ak&0xFFFFFF00)|((((
Ak&0xFF)*((Al&0xFF)+1))>>8)&0xFF);Ak=(Ak&0xFFFF00FF)|((((((Ak>>8)&0xFF)*(((Al>>8
)&0xFF)+1))>>8)&0xFF)<<8);Ak=(Ak&0xFF00FFFF)|((((((Ak>>16)&0xFF)*(((Al>>16)&0xFF
)+1))>>8)&0xFF)<<16);Ai=(Ai&0x00FFFFFF)|((((((Ai>>24)&0xFF)*(((Al>>24)&0xFF)+1))>>
8)&0xFF)<<24);Ai=(Ai&0xFFFFFF00)|((((Ai&0xFF)*((Al&0xFF)+1))>>8)&0xFF);Ai=(Ai&0xFFFF00FF
)|((((((Ai>>8)&0xFF)*(((Al>>8)&0xFF)+1))>>8)&0xFF)<<8);Ai=(Ai&0xFF00FFFF)|((((((
Ai>>16)&0xFF)*(((Al>>16)&0xFF)+1))>>8)&0xFF)<<16);Aj=(Aj&0x00FFFFFF)|((((((Aj>>24
)&0xFF)*(((Al>>24)&0xFF)+1))>>8)&0xFF)<<24);Aj=(Aj&0xFFFFFF00)|((((Aj&0xFF)*((Al&
0xFF)+1))>>8)&0xFF);Aj=(Aj&0xFFFF00FF)|((((((Aj>>8)&0xFF)*(((Al>>8)&0xFF)+1))>>8
)&0xFF)<<8);Aj=(Aj&0xFF00FFFF)|((((((Aj>>16)&0xFF)*(((Al>>16)&0xFF)+1))>>8)&0xFF
)<<16);}if(AE<256){Ac=(Ac&0x00FFFFFF)|((((AE*((Ac>>24)&0xFF))>>8)&0xFF)<<24);Ak=(
Ak&0x00FFFFFF)|((((AE*((Ak>>24)&0xFF))>>8)&0xFF)<<24);Ai=(Ai&0x00FFFFFF)|((((AE*((
Ai>>24)&0xFF))>>8)&0xFF)<<24);Aj=(Aj&0x00FFFFFF)|((((AE*((Aj>>24)&0xFF))>>8)&0xFF
)<<24);}AT.PP(aClip,B.abh(this.Q,aOffset),this.Width,Ac,Ak,Aj,Ai,aBlend);},MD:function(
C){var A;if(C<0)C=0;if(C===this.Width)return;this.Width=C;if(!!this.G&&((this.F&
0x1)===0x1))this.G.Ag(this.Q);},KX:function(C){var A;if(C===this.Hb)return;this.
Hb=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.Q);},KY:function(C){var A;
if(C===this.Hc)return;this.Hc=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.
Q);},KZ:function(C){var A;if(C===this.Hd)return;this.Hd=C;if(!!this.G&&((this.F&
0x1)===0x1))this.G.Ag(this.Q);},HE:function(C){var A;if(C===this.ED)return;this.
ED=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.Q);},A7:function(C){var A;
if(C===this.Bq)return;this.Bq=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.
Q);},_Init:function(aArg){B.Core.AX._Init.call(this,aArg);this.__proto__=D.C2;},
_className:"Views::Border"};D.Im={timer:null,T:null,A0:-1,Bq:0xFFFFFFFF,Ja:0x1F,
Fk:0,AR:0,HB:B.wf,B$:false,CJ:function(AT,aClip,aOffset,AE,aBlend){var A;var AU=
this.Fk;if(this.A0>=0)AU=this.A0;if(!this.T||(AU>=this.T.NoOfFrames))return;this.
T.Update();var Ac;var Ak;var Aj;var Ai;var Al=this.Bq;var Bs=(((AE+1)*255)>>8)+1;
var Cy=this.Ja;var N=B.abh(this.Q,aOffset);var LJ=B.abe([N[2]-N[0],N[3]-N[1]],this.
HB);aBlend=aBlend&&((this.F&0x2)===0x2);Ac=Ak=Ai=Aj=Al;if(Bs<256){Ac=(Ac&0x00FFFFFF
)|((((((Ac>>24)&0xFF)*Bs)>>8)&0xFF)<<24);Ak=(Ak&0x00FFFFFF)|((((((Ak>>24)&0xFF)*
Bs)>>8)&0xFF)<<24);Aj=(Aj&0x00FFFFFF)|((((((Aj>>24)&0xFF)*Bs)>>8)&0xFF)<<24);Ai=(
Ai&0x00FFFFFF)|((((((Ai>>24)&0xFF)*Bs)>>8)&0xFF)<<24);}if(((this.HB[0]>0)&&(LJ[0
]>0))&&!((Cy&0x5)===0x5)){var d=((this.T.FrameSize[0]/3)|0)-LJ[0];if(((Cy&0x1)===
0x1)){if(aClip[2]>N[2])aClip=B.abN(aClip,N[2]);if(d>0)N=B.abN(N,N[2]+d);Cy=Cy|0x4;
}else if(((Cy&0x4)===0x4)){if(aClip[0]<N[0])aClip=[].concat(N[0],aClip.slice(1,4
));if(d>0)N=[].concat(N[0]-d,N.slice(1,4));Cy=Cy|0x1;}else{if(aClip[0]<N[0])aClip=[
].concat(N[0],aClip.slice(1,4));if(aClip[2]>N[2])aClip=B.abN(aClip,N[2]);if(d>0){
N=[].concat(N[0]-((d/2)|0),N.slice(1,4));N=B.abN(N,(N[2]+d)-((d/2)|0));}Cy=Cy|0x5;
}}if(((this.HB[1]>0)&&(LJ[1]>0))&&!((Cy&0xA)===0xA)){var d=((this.T.FrameSize[1]
/3)|0)-LJ[1];if(((Cy&0x2)===0x2)){if(aClip[3]>N[3])aClip=[].concat(aClip.slice(0
,3),N[3]);if(d>0)N=[].concat(N.slice(0,3),N[3]+d);Cy=Cy|0x8;}else if(((Cy&0x8)===
0x8)){if(aClip[1]<N[1])aClip=B.abP(aClip,N[1]);if(d>0)N=B.abP(N,N[1]-d);Cy=Cy|0x2;
}else{if(aClip[1]<N[1])aClip=B.abP(aClip,N[1]);if(aClip[3]>N[3])aClip=[].concat(
aClip.slice(0,3),N[3]);if(d>0){N=B.abP(N,N[1]-((d/2)|0));N=[].concat(N.slice(0,3
),(N[3]+d)-((d/2)|0));}Cy=Cy|0xA;}}AT.PO(aClip,this.T,AU,N,Cy,Ac,Ak,Aj,Ai,aBlend
);},EA:function(Ab){var A;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.Q);},
BZ:function(Ab){var A;var AU=this.A0;var BC=0;if(!!this.T)BC=this.T.NoOfFrames*this.
T.FrameDelay;if((!!this.timer&&(this.A0<0))&&(BC>0))this.AR=this.timer.AC-(this.
Fk*this.T.FrameDelay);if(!!this.timer&&(BC>0)){var Aq=(this.timer.AC-this.AR)|0;
AU=(Aq/this.T.FrameDelay)|0;if(Aq>=BC){AU=AU%this.T.NoOfFrames;this.AR=this.timer.
AC-(Aq%BC);}}if(((AU!==this.A0)&&!!this.G)&&((this.F&0x1)===0x1))this.G.Ag(this.
Q);this.A0=AU;if(!BC&&!!this.timer){B.z9([this,this.BZ],this.timer,0);this.timer=
null;}},A7:function(C){var A;if(C===this.Bq)return;this.Bq=C;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ag(this.Q);},C7:function(C){var A;if(this.B$===C)return;this.
B$=C;this.A0=-1;if(!C&&!!this.timer){B.z9([this,this.BZ],this.timer,0);this.timer=
null;}if(C){this.timer=B._GetAutoObject(B.ach.FX);B.zV([this,this.BZ],this.timer
,0);B.pe([this,this.BZ],this);}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.
Q);},N6:function(C){var A;if(C===this.Ja)return;this.Ja=C;if(!!this.G&&((this.F&
0x1)===0x1))this.G.Ag(this.Q);},CC:function(C){var A;if(C<0)C=0;if((C===this.Fk)&&(
this.A0===-1))return;this.Fk=C;if(!this.timer)this.A0=-1;if(!!this.G&&((this.F&0x1
)===0x1))this.G.Ag(this.Q);},AP:function(C){var A;if(C===this.T)return;if(!!this.
T&&this.T.Fn)B.z9([this,this.EA],this.T,0);this.T=C;this.A0=-1;if(!!C&&C.Fn)B.zV([
this,this.EA],C,0);if(this.B$){this.C7(false);this.C7(true);}if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ag(this.Q);},B6:function(C){if(C)this.AB(0x1,0x0);else this.
AB(0x0,0x1);},N_:function(C){var A;if(C[0]<0)C=[0,C[1]];if(C[1]<0)C=[C[0],0];if(
B.aaX(C,this.HB))return;this.HB=C;if((!!this.G&&((this.F&0x1)===0x1))&&!((this.Ja&
0xF)===0xF))this.G.Ag(this.Q);},_Init:function(aArg){B.Core.AX._Init.call(this,aArg
);this.__proto__=D.Im;},_Mark:function(E){var A;B.Core.AX._Mark.call(this,E);if((
A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.T)&&(A._cycle!=E))A.
_Mark(A._cycle=E);},_className:"Views::Frame"};D.AJ={timer:null,T:null,AR:0,A0:0
,ED:0xFFFFFFFF,Bq:0xFFFFFFFF,FK:0x12,Fk:0,Bi:255,B$:false,CJ:function(AT,aClip,aOffset
,AE,aBlend){var A;var AU=this.Fk;if(this.A0>=0)AU=this.A0;if(!this.T||(AU>=this.
T.NoOfFrames))return;this.T.Update();var Y=this.L9();var AV=this.T.FrameSize;if((
Y[0]>=Y[2])||(Y[1]>=Y[3]))return;var Ac=this.ED;var Ak=0xFFFFFFFF;var Aj=0xFFFFFFFF;
var Ai=0xFFFFFFFF;var Al=this.Bq;var Bs=(((AE+1)*this.Bi)>>8)+1;aBlend=aBlend&&((
this.F&0x2)===0x2);if(((Ac===0xFFFFFFFF)&&(Ac===0xFFFFFFFF))&&(Ac===0xFFFFFFFF))
Ac=Ak=Ai=Aj=Al;else if(Al!==0xFFFFFFFF){Ac=(Ac&0x00FFFFFF)|((((((Ac>>24)&0xFF)*(((
Al>>24)&0xFF)+1))>>8)&0xFF)<<24);Ac=(Ac&0xFFFFFF00)|((((Ac&0xFF)*((Al&0xFF)+1))>>
8)&0xFF);Ac=(Ac&0xFFFF00FF)|((((((Ac>>8)&0xFF)*(((Al>>8)&0xFF)+1))>>8)&0xFF)<<8);
Ac=(Ac&0xFF00FFFF)|((((((Ac>>16)&0xFF)*(((Al>>16)&0xFF)+1))>>8)&0xFF)<<16);Ak=(Ak&
0x00FFFFFF)|((((255*(((Al>>24)&0xFF)+1))>>8)&0xFF)<<24);Ak=(Ak&0xFFFFFF00)|((((Ak&
0xFF)*((Al&0xFF)+1))>>8)&0xFF);Ak=(Ak&0xFFFF00FF)|((((((Ak>>8)&0xFF)*(((Al>>8)&0xFF
)+1))>>8)&0xFF)<<8);Ak=(Ak&0xFF00FFFF)|((((((Ak>>16)&0xFF)*(((Al>>16)&0xFF)+1))>>
8)&0xFF)<<16);Ai=(Ai&0x00FFFFFF)|((((255*(((Al>>24)&0xFF)+1))>>8)&0xFF)<<24);Ai=(
Ai&0xFFFFFF00)|((((Ai&0xFF)*((Al&0xFF)+1))>>8)&0xFF);Ai=(Ai&0xFFFF00FF)|((((((Ai>>
8)&0xFF)*(((Al>>8)&0xFF)+1))>>8)&0xFF)<<8);Ai=(Ai&0xFF00FFFF)|((((((Ai>>16)&0xFF
)*(((Al>>16)&0xFF)+1))>>8)&0xFF)<<16);Aj=(Aj&0x00FFFFFF)|((((255*(((Al>>24)&0xFF
)+1))>>8)&0xFF)<<24);Aj=(Aj&0xFFFFFF00)|((((Aj&0xFF)*((Al&0xFF)+1))>>8)&0xFF);Aj=(
Aj&0xFFFF00FF)|((((((Aj>>8)&0xFF)*(((Al>>8)&0xFF)+1))>>8)&0xFF)<<8);Aj=(Aj&0xFF00FFFF
)|((((((Aj>>16)&0xFF)*(((Al>>16)&0xFF)+1))>>8)&0xFF)<<16);}if(Bs<256){Ac=(Ac&0x00FFFFFF
)|((((((Ac>>24)&0xFF)*Bs)>>8)&0xFF)<<24);Ak=(Ak&0x00FFFFFF)|((((((Ak>>24)&0xFF)*
Bs)>>8)&0xFF)<<24);Aj=(Aj&0x00FFFFFF)|((((((Aj>>24)&0xFF)*Bs)>>8)&0xFF)<<24);Ai=(
Ai&0x00FFFFFF)|((((((Ai>>24)&0xFF)*Bs)>>8)&0xFF)<<24);}if(B.aaX([Y[2]-Y[0],Y[3]-
Y[1]],AV))AT.PK(aClip,this.T,AU,B.abh(this.Q,aOffset),B.abe(this.Q.slice(0,2),Y.
slice(0,2)),Ac,Ak,Aj,Ai,aBlend);else AT.QK(aClip,this.T,AU,B.abh(Y,aOffset),[].concat(
AG,AV),Ac,Ak,Aj,Ai,aBlend,true);},EA:function(Ab){var A;if(!!this.G&&((this.F&0x1
)===0x1))this.G.Ag(this.Q);},BZ:function(Ab){var A;var AU=this.A0;var BC=0;if(!!
this.T)BC=this.T.NoOfFrames*this.T.FrameDelay;if((!!this.timer&&(this.A0<0))&&(BC>
0))this.AR=this.timer.AC-(this.Fk*this.T.FrameDelay);if(!!this.timer&&(BC>0)){var
Aq=(this.timer.AC-this.AR)|0;AU=(Aq/this.T.FrameDelay)|0;if(Aq>=BC){AU=AU%this.T.
NoOfFrames;this.AR=this.timer.AC-(Aq%BC);}}if(((AU!==this.A0)&&!!this.G)&&((this.
F&0x1)===0x1))this.G.Ag(this.Q);this.A0=AU;if(!BC&&!!this.timer){B.z9([this,this.
BZ],this.timer,0);this.timer=null;}},HE:function(C){var A;if(C===this.ED)return;
this.ED=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.Q);},A7:function(C){var
A;if(C===this.Bq)return;this.Bq=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.
Q);},C7:function(C){var A;if(this.B$===C)return;this.B$=C;this.A0=-1;if(!C&&!!this.
timer){B.z9([this,this.BZ],this.timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(
B.ach.FX);B.zV([this,this.BZ],this.timer,0);B.pe([this,this.BZ],this);}if(!!this.
G&&((this.F&0x1)===0x1))this.G.Ag(this.Q);},It:function(C){var A;if(C===this.FK)
return;this.FK=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.Q);},CC:function(
C){var A;if(C<0)C=0;if((C===this.Fk)&&(this.A0===-1))return;this.Fk=C;if(!this.timer
)this.A0=-1;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.Q);},AP:function(C){
var A;if(C===this.T)return;if(!!this.T&&this.T.Fn)B.z9([this,this.EA],this.T,0);
this.T=C;this.A0=-1;if(!!C&&C.Fn)B.zV([this,this.EA],C,0);if(this.B$){this.C7(false
);this.C7(true);}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.Q);},Bd:function(
C){var A;if(C>255)C=255;if(C<0)C=0;if(C===this.Bi)return;this.Bi=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ag(this.Q);},B6:function(C){if(C)this.AB(0x1,0x0);else
this.AB(0x0,0x1);},L9:function(){var A;if(!this.T)return AZ;var AA=this.FK;var AV=
this.T.FrameSize;var Ax=this.Q;var width=Ax[2]-Ax[0];var height=Ax[3]-Ax[1];if(!
AV[0]||!AV[1])return AZ;var AH=[0,0,width,height];var Ar=AH;if(((AA&0x40)===0x40
)){var NL=((((AH[2]-AH[0])<<16)+((AV[0]/2)|0))/AV[0])|0;var Kv=((((AH[3]-AH[1])<<
16)+((AV[1]/2)|0))/AV[1])|0;var Gu=NL;if(Kv>Gu)Gu=Kv;Ar=B.abL(Ar,((AV[0]*Gu)+32768
)>>16);Ar=B.abI(Ar,((AV[1]*Gu)+32768)>>16);}else if(((AA&0x80)===0x80)){var NL=((((
AH[2]-AH[0])<<16)+((AV[0]/2)|0))/AV[0])|0;var Kv=((((AH[3]-AH[1])<<16)+((AV[1]/2
)|0))/AV[1])|0;var Gu=NL;if(Kv<Gu)Gu=Kv;Ar=B.abL(Ar,((AV[0]*Gu)+32768)>>16);Ar=B.
abI(Ar,((AV[1]*Gu)+32768)>>16);}else if(!((AA&0x100)===0x100))Ar=B.abK(Ar,AV);if((
Ar[2]-Ar[0])!==(AH[2]-AH[0])){if(((AA&0x4)===0x4))Ar=B.abM(Ar,AH[2]-(Ar[2]-Ar[0]
));else if(((AA&0x2)===0x2))Ar=B.abM(Ar,(AH[0]+(((AH[2]-AH[0])/2)|0))-(((Ar[2]-Ar[
0])/2)|0));}if((Ar[3]-Ar[1])!==(AH[3]-AH[1])){if(((AA&0x20)===0x20))Ar=B.abO(Ar,
AH[3]-(Ar[3]-Ar[1]));else if(((AA&0x10)===0x10))Ar=B.abO(Ar,(AH[1]+(((AH[3]-AH[1
])/2)|0))-(((Ar[3]-Ar[1])/2)|0));}Ar=B.abh(Ar,Ax.slice(0,2));return Ar;},_Init:function(
aArg){B.Core.AX._Init.call(this,aArg);this.__proto__=D.AJ;},_Mark:function(E){var
A;B.Core.AX._Mark.call(this,E);if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.T)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Views::Image"};
D.K$={timer:null,T:null,A0:0,Bi:255,AR:0,B$:false,CJ:function(AT,aClip,aOffset,AE
,aBlend){var A;var AU=0;if(this.A0>=0)AU=this.A0;if(!this.T||(AU>=this.T.NoOfFrames
))return;this.T.Update();var Ac;var Ak;var Aj;var Ai;var Bs=(((AE+1)*this.Bi)>>8
)+1;aBlend=aBlend&&((this.F&0x2)===0x2);Ac=Ak=Ai=Aj=0xFFFFFFFF;if(Bs<256){Ac=(Ac&
0x00FFFFFF)|((((255*Bs)>>8)&0xFF)<<24);Ak=(Ak&0x00FFFFFF)|((((255*Bs)>>8)&0xFF)<<
24);Aj=(Aj&0x00FFFFFF)|((((255*Bs)>>8)&0xFF)<<24);Ai=(Ai&0x00FFFFFF)|((((255*Bs)>>
8)&0xFF)<<24);}AT.QP(aClip,this.T,AU,B.abh(this.Q,aOffset),[].concat(AG,this.T.FrameSize
),AG,Ac,Ak,Aj,Ai,aBlend);},EA:function(Ab){var A;if(!!this.G&&((this.F&0x1)===0x1
))this.G.Ag(this.Q);},BZ:function(Ab){var A;var AU=this.A0;var BC=0;if(!!this.T)
BC=this.T.NoOfFrames*this.T.FrameDelay;if((!!this.timer&&(this.A0<0))&&(BC>0))this.
AR=this.timer.AC;if(!!this.timer&&(BC>0)){var Aq=(this.timer.AC-this.AR)|0;AU=(Aq
/this.T.FrameDelay)|0;if(Aq>=BC){AU=AU%this.T.NoOfFrames;this.AR=this.timer.AC-(
Aq%BC);}}if(((AU!==this.A0)&&!!this.G)&&((this.F&0x1)===0x1))this.G.Ag(this.Q);this.
A0=AU;if(!BC&&!!this.timer){B.z9([this,this.BZ],this.timer,0);this.timer=null;}}
,C7:function(C){var A;if(this.B$===C)return;this.B$=C;this.A0=-1;if(!C&&!!this.timer
){B.z9([this,this.BZ],this.timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(
B.ach.FX);B.zV([this,this.BZ],this.timer,0);B.pe([this,this.BZ],this);}if(!!this.
G&&((this.F&0x1)===0x1))this.G.Ag(this.Q);},AP:function(C){var A;if(C===this.T)return;
if(!!this.T&&this.T.Fn)B.z9([this,this.EA],this.T,0);this.T=C;this.A0=-1;if(!!C&&
C.Fn)B.zV([this,this.EA],C,0);if(this.B$){this.C7(false);this.C7(true);}if(!!this.
G&&((this.F&0x1)===0x1))this.G.Ag(this.Q);},Bd:function(C){var A;if(C>255)C=255;
if(C<0)C=0;if(C===this.Bi)return;this.Bi=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ag(this.Q);},KV:function(){return this.Bi;},_Init:function(aArg){B.Core.AX._Init.
call(this,aArg);this.__proto__=D.K$;},_Mark:function(E){var A;B.Core.AX._Mark.call(
this,E);if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.T)&&(A._cycle
!=E))A._Mark(A._cycle=E);},_className:"Views::Wallpaper"};D.Text={B0:null,Bl:B.jV
,String:B.jV,Dr:null,G_:B.wf,FK:0x12,Bq:0xFFFFFFFF,Bi:255,IS:false,Ij:false,L4:false
,CY:false,Dk:function(){if(!!this.Dr){this.Nl(this.Dr);this.Dr=null;}},CJ:function(
AT,aClip,aOffset,AE,aBlend){var A;if((this.Bl===B.jV)||!this.B0)return;var AA=this.
FK;var font=this.B0;var AH=B.abh(this.Q,aOffset);var Ac;var Ak;var Aj;var Ai;var
Sy=this.Bq;var Bs=(((AE+1)*this.Bi)>>8)+1;var E_=this.Bl.charCodeAt(0)||0;var Y=
B.abh(this.L9(),aOffset);var O7=[AH[0]-Y[0],(AH[1]-Y[1])-font.Ascent];if(E_<1)return;
Ac=Ak=Ai=Aj=Sy;if(Bs<256){Ac=(Ac&0x00FFFFFF)|((((((Ac>>24)&0xFF)*Bs)>>8)&0xFF)<<
24);Ak=(Ak&0x00FFFFFF)|((((((Ak>>24)&0xFF)*Bs)>>8)&0xFF)<<24);Aj=(Aj&0x00FFFFFF)|((((((
Aj>>24)&0xFF)*Bs)>>8)&0xFF)<<24);Ai=(Ai&0x00FFFFFF)|((((((Ai>>24)&0xFF)*Bs)>>8)&
0xFF)<<24);}if(((AA&0x80)===0x80)){if(this.Mc())AA=(AA&~0x80)|0x4;else AA=(AA&~0x80
)|0x1;}if((E_===1)&&!((AA&0x40)===0x40)){AT.NU(aClip,font,this.Bl,2,(this.Bl.charCodeAt(
1)||0)-1,AH,O7,0,0,Ac,Ak,Aj,Ai,true);return;}var leading=font.Leading;var NK=(font.
Ascent+font.Descent)+leading;var Sw=aClip[1]-Y[1];var Sx=aClip[3]-Y[1];var Nd=Y[
2]-Y[0];var BE=0;var M=1;var Al=this.Bl.charCodeAt(1)||0;while(((BE+NK)<Sw)&&(Al>
0)){M=M+Al;BE=BE+NK;Al=this.Bl.charCodeAt(M)||0;}while((BE<Sx)&&(Al>0)){var H7=B.
abe(O7,[0,BE]);var Pi=0;var Lu=false;if(((((AA&0x40)===0x40)&&((this.Bl.charCodeAt((
M+Al)-1)||0)!==0x0A))&&((this.Bl.charCodeAt(M+1)||0)!==0x0A))&&((this.Bl.charCodeAt(
M+Al)||0)!==0x00))Lu=true;if(Lu&&!!(AA&0x6)){var Ph=M+Al;var OM=this.Bl.indexOf(
String.fromCharCode(0x20),M+1);var ON=this.Bl.indexOf(String.fromCharCode(0xA0),
M+1);if(((OM<0)||(OM>=Ph))&&((ON<0)||(ON>=Ph)))Lu=false;}if(Lu)Pi=Nd;else if(((AA&
0x4)===0x4))H7=[(H7[0]-Nd)+font.Je(this.Bl,M+1,Al-1),H7[1]];else if(((AA&0x2)===
0x2))H7=[(H7[0]-((Nd/2)|0))+((font.Je(this.Bl,M+1,Al-1)/2)|0),H7[1]];AT.NU(aClip
,font,this.Bl,M+1,Al-1,AH,H7,Pi,0,Ac,Ak,Aj,Ai,true);M=M+Al;BE=BE+NK;Al=this.Bl.charCodeAt(
M)||0;}},R:function(C){var A;if(B.aaY(C,this.Q))return;var Pg;Pg=((A=this.Q)[2]-
A[0])!==(C[2]-C[0]);if(((Pg&&this.IS)&&this.CY)&&!((this.F&0x2000)===0x2000)){this.
Bl=B.jV;this.CY=false;B.pe([this,this.G5],this);}if(((this.Ij&&this.CY)&&!B.aaX([(
A=this.Q)[2]-A[0],A[3]-A[1]],[C[2]-C[0],C[3]-C[1]]))&&!((this.F&0x2000)===0x2000
)){this.Bl=B.jV;this.CY=false;B.pe([this,this.G5],this);}B.Core.AX.R.call(this,C
);B.pe([this,this.NI],this);},Nl:function(aBidi){if(!aBidi)return;B.rB(aBidi);},
SB:function(aSize){var bidi=null;bidi=B.v3(aSize);return bidi;},NI:function(Ab){
},G5:function(Ab){B.pe([this,this.LD],this);},LD:function(Ab){var A;if(this.CY)return;
var width=(A=this.Q)[2]-A[0];var height=(A=this.Q)[3]-A[1];var FI=-1;var font=this.
B0;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.IS){FI=width;if(
FI<0)FI=1;}if(!!this.Dr){this.Nl(this.Dr);this.Dr=null;}this.CY=true;if((this.String
!==B.jV)&&!!font){var length=this.String.length;if(this.L4)this.Dr=this.SB(length
);this.Bl=font.QD(this.String,0,FI,length,this.Dr);if(!!this.Dr&&!this.PX()){this.
Nl(this.Dr);this.Dr=null;}}else this.Bl=B.jV;this.G_=AG;if((this.Ij&&(this.Bl!==
B.jV))&&!!font){var AA=this.FK;var leading=font.Leading;var Bp=this.Bl;var LH=this.
Mc();if(((AA&0x80)===0x80)){if(LH)AA=(AA&~0x80)|0x4;else AA=(AA&~0x80)|0x1;}var LF=(
font.Ascent+font.Descent)+leading;var E_=Bp.charCodeAt(0)||0;var G1=((height+leading
)/LF)|0;var Ng=false;var Ll=false;if(G1<=0)G1=1;if(E_>G1){var EB=0;var Ku=0;var LG=
E_-1;var BT;var Cu=Bp.length;var tmp=B.jV;if(!!(AA&0x110)&&!!(AA&0x28))AA&=~0x110;
if(!!(AA&0x110))AA&=~0x28;if(((AA&0x20)===0x20))Ku=E_-G1;else if(((AA&0x10)===0x10
)||((AA&0x100)===0x100)){Ku=((E_-G1)/2)|0;LG=(Ku+G1)-1;}else LG=G1-1;Ng=Ku>0;Ll=
LG<(E_-1);for(BT=1;EB<Ku;EB=EB+1)BT=BT+(Bp.charCodeAt(BT)||0);if(Ll)for(Cu=BT;EB<
LG;EB=EB+1)Cu=Cu+(Bp.charCodeAt(Cu)||0);if(Ng){var CF=Bp.charCodeAt(BT)||0;tmp=(
Cd+B.abW(Bp,BT,CF))+Cd;tmp=B.abQ(tmp,0,(CF+2)&0xFFFF);BT=BT+CF;if((tmp.charCodeAt(
CF)||0)===0x0A){tmp=B.abQ(tmp,CF,0xFEFF);tmp=B.abQ(tmp,CF+1,0x0A);}if((tmp.charCodeAt(
2)||0)===0x0A){tmp=B.abQ(tmp,2,0xFEFF);tmp=B.abQ(tmp,1,0x0A);}else tmp=B.abQ(tmp
,1,0xFEFF);}tmp=tmp+B.abW(Bp,BT,Cu-BT);if(Ll&&(Cu>=BT)){var CF=Bp.charCodeAt(Cu)||
0;var C1=(Cd+B.abW(Bp,Cu,CF))+Cd;C1=B.abQ(C1,0,(CF+2)&0xFFFF);C1=B.abQ(C1,1,0xFEFF
);if((C1.charCodeAt(CF)||0)===0x0A){C1=B.abQ(C1,CF,0xFEFF);C1=B.abQ(C1,CF+1,0x0A
);}if((C1.charCodeAt(2)||0)===0x0A){C1=B.abQ(C1,2,0xFEFF);C1=B.abQ(C1,1,0x0A);}else
C1=B.abQ(C1,1,0xFEFF);tmp=tmp+C1;}Bp=String.fromCharCode(G1&0xFFFF)+tmp;}var EB=
0;var DI=1;var Nw=width;E_=Bp.charCodeAt(0)||0;for(;EB<E_;EB=EB+1){var G8=Ng&&!EB;
var G9=Ll&&(EB===(E_-1));var D2=false;var D3=false;var I4=LH;if((LH&&G8)&&!G9){G8=
false;G9=true;}else if((LH&&G9)&&!G8){G9=false;G8=true;}var Kw=DI+1;var CF=Bp.charCodeAt(
DI)||0;var BT=Kw;var Cu=(Kw+CF)-2;var Nq=-1;var Nr=-1;if(!this.IS&&(font.Je(Bp,Kw
,CF-1)>Nw)){var HX=AA;if(((HX&0x2)===0x2)&&!!(HX&0x5))HX&=~0x2;if(((HX&0x2)===0x2
))HX&=~0x5;if(((HX&0x4)===0x4))D2=true;else if(((HX&0x2)===0x2)){D2=true;D3=true;
}else D3=true;}if((Bp.charCodeAt(BT)||0)===0x0A)BT=BT+1;if((Bp.charCodeAt(Cu)||0
)===0x0A)Cu=Cu-1;while(D2&&((Bp.charCodeAt(BT)||0)===0xFEFF))BT=BT+1;while(D3&&((
Bp.charCodeAt(Cu)||0)===0xFEFF))Cu=Cu-1;D2=D2&&!G9;D3=D3&&!G8;while((((D2||D3)||
G8)||G9)&&(BT<Cu)){if((D2&&(I4||!D3))||G8){if(Nq>0)Bp=B.abQ(Bp,Nq,0xFEFF);Bp=B.abQ(
Bp,BT,0x2026);Nq=BT;BT=BT+1;I4=!I4;G8=false;if(font.Je(Bp,Kw,CF-1)<=Nw){D2=false;
D3=false;}else D2=D2||!D3;}if((D3&&(!I4||!D2))||G9){if(Nr>0)Bp=B.abQ(Bp,Nr,0xFEFF
);Bp=B.abQ(Bp,Cu,0x2026);Nr=Cu;Cu=Cu-1;I4=!I4;G9=false;if(font.Je(Bp,Kw,CF-1)<=Nw
){D2=false;D3=false;}else D3=D3||!D2;}}DI=DI+CF;}this.G_=[font.NW(Bp),((Bp.charCodeAt(
0)||0)*LF)-leading];this.Bl=Bp;}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.
Q);B.pe([this,this.NI],this);},Qa:function(C){if(C===this.L4)return;this.L4=C;this.
Bl=B.jV;this.CY=false;B.pe([this,this.G5],this);},P$:function(C){if(C===this.Ij)
return;this.Ij=C;if(this.IS||C)this.F=this.F&~0x100;else this.F=this.F|0x100;this.
Bl=B.jV;this.CY=false;B.pe([this,this.G5],this);},QC:function(C){if(C===this.IS)
return;this.IS=C;if(this.CY){this.Bl=B.jV;this.CY=false;B.pe([this,this.G5],this
);}if(C||this.Ij)this.F=this.F&~0x100;else this.F=this.F|0x100;},It:function(C){
var A;if(C===this.FK)return;this.FK=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(
this.Q);if(this.Ij){this.Bl=B.jV;this.CY=false;B.pe([this,this.G5],this);}if(this.
CY)B.pe([this,this.NI],this);},Cn:function(C){if(C===this.String)return;this.String=
C;this.Bl=B.jV;this.CY=false;B.pe([this,this.G5],this);},El:function(C){if(C===this.
B0)return;this.B0=C;this.Bl=B.jV;this.CY=false;B.pe([this,this.G5],this);},A7:function(
C){var A;if(C===this.Bq)return;this.Bq=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ag(this.Q);},Bd:function(C){var A;if(C>255)C=255;if(C<0)C=0;if(C===this.Bi)return;
this.Bi=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.Q);},Mc:function(){if(
!this.CY)this.LD(this);if(!this.Dr)return false;var result=false;var bidi=this.Dr;
result=B.v2(bidi);return result;},PX:function(){if(!this.CY)this.LD(this);if(!this.
Dr)return false;var result=false;var bidi=this.Dr;result=B.zZ(bidi);return result;
},L9:function(){var A;if((this.String===B.jV)||!this.B0)return AZ;if(!this.CY)this.
LD(this);if(this.Bl===B.jV)return AZ;var leading=this.B0.Leading;var LF=(this.B0.
Ascent+this.B0.Descent)+this.B0.Leading;if(B.aaX(this.G_,AG))this.G_=[this.B0.NW(
this.Bl),this.G_[1]];this.G_=[this.G_[0],((this.Bl.charCodeAt(0)||0)*LF)-leading
];var AA=this.FK;var Ax=this.Q;var width=Ax[2]-Ax[0];var height=Ax[3]-Ax[1];var AH=[
0,0,width,height];var Ar=[].concat(AH.slice(0,2),B.abf(AH.slice(0,2),this.G_));if(((
AA&0x80)===0x80)){if(this.Mc())AA=(AA&~0x80)|0x4;else AA=(AA&~0x80)|0x1;}if(((AA&
0x40)===0x40)){var FI;FI=width;if(FI<0)FI=0;if(FI>(Ar[2]-Ar[0]))Ar=B.abL(Ar,FI);
}if((!!(AA&0x110)&&!!(AA&0x28))&&((Ar[3]-Ar[1])>(AH[3]-AH[1])))AA&=~0x110;if(!!(
AA&0x110))AA&=~0x28;if((((AA&0x2)===0x2)&&!!(AA&0x5))&&((Ar[2]-Ar[0])>(AH[2]-AH[
0])))AA&=~0x2;if(((AA&0x2)===0x2))AA&=~0x5;if((Ar[2]-Ar[0])!==(AH[2]-AH[0])){if(((
AA&0x4)===0x4))Ar=B.abM(Ar,AH[2]-(Ar[2]-Ar[0]));else if(((AA&0x2)===0x2))Ar=B.abM(
Ar,(AH[0]+(((AH[2]-AH[0])/2)|0))-(((Ar[2]-Ar[0])/2)|0));}if((Ar[3]-Ar[1])!==(AH[
3]-AH[1])){if(((AA&0x20)===0x20))Ar=B.abO(Ar,AH[3]-(Ar[3]-Ar[1]));else if(((AA&0x100
)===0x100))Ar=B.abO(Ar,((AH[1]+(((AH[3]-AH[1])/2)|0))-(((Ar[3]-Ar[1])/2)|0))+(((
this.B0.Descent-this.B0.Ascent)/2)|0));else if(((AA&0x10)===0x10))Ar=B.abO(Ar,(AH[
1]+(((AH[3]-AH[1])/2)|0))-(((Ar[3]-Ar[1])/2)|0));}Ar=B.abh(Ar,Ax.slice(0,2));return Ar;
},Mu:function(){return this.Bq;},_Init:function(aArg){B.Core.AX._Init.call(this,
aArg);this.__proto__=D.Text;},_Done:function(){this.Dk();this.__proto__=B.Core.AX;
B.Core.AX._Done.call(this);},_Mark:function(E){var A;B.Core.AX._Mark.call(this,E
);if((A=this.B0)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Views::Text"};
D.IR={Gm:B.wf,Ay:B.abi(4,3,0,null),MK:B.wf,DJ:0,H8:0,B5:function(C){if(B.aaX(C,this.
BR))return;B.Core.EV.B5.call(this,C);this.Ay.Set(3,0,C[0]);this.Ay.Set(3,1,C[1]);
this.Ay.Set(3,2,1);this.DJ=0x45;B.pe([this,this.I5],this);},B4:function(C){if(B.
aaX(C,this.Cp))return;B.Core.EV.B4.call(this,C);this.Ay.Set(2,0,C[0]);this.Ay.Set(
2,1,C[1]);this.Ay.Set(2,2,1);this.DJ=0x45;B.pe([this,this.I5],this);},B3:function(
C){if(B.aaX(C,this.BQ))return;B.Core.EV.B3.call(this,C);this.Ay.Set(1,0,C[0]);this.
Ay.Set(1,1,C[1]);this.Ay.Set(1,2,1);this.DJ=0x45;B.pe([this,this.I5],this);},B2:
function(C){if(B.aaX(C,this.Co))return;B.Core.EV.B2.call(this,C);this.Ay.Set(0,0
,C[0]);this.Ay.Set(0,1,C[1]);this.Ay.Set(0,2,1);this.DJ=0x45;B.pe([this,this.I5]
,this);},OO:function(){return;},I5:function(Ab){var A;if(this.DJ===0x00)return;if(
this.DJ===0x45){var Df=B._NewObject(B.Graphics.Oo,0);Df=Df.PM(this.Ay.Get(0,0),this.
Ay.Get(0,1),this.Ay.Get(1,0),this.Ay.Get(1,1),this.Ay.Get(2,0),this.Ay.Get(2,1),
this.Ay.Get(3,0),this.Ay.Get(3,1));if(!!Df){Df.KD(0,0);this.Ay.Set(0,2,Df.JM*240
);Df.KD(1,0);this.Ay.Set(1,2,Df.JM*240);Df.KD(1,1);this.Ay.Set(2,2,Df.JM*240);Df.
KD(0,1);this.Ay.Set(3,2,Df.JM*240);}this.OO();}this.H8=this.DJ;this.DJ=0x00;if(!
!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.GetClipping());},Qk:function(C){if(
B.aaX(C,this.MK))return;this.MK=C;if((this.H8!==0x45)&&(this.DJ===0x00)){this.DJ=
this.H8;B.pe([this,this.I5],this);}},QI:function(OB,aAngle,OG,OH){var A;if(!this.
Gm[0]||!this.Gm[1])return;var LM=[].concat(AG,this.Gm);var LL=this.MK;var O0=(LM[
0]-LL[0])*OG;var N=(LM[2]-LL[0])*OG;var Ck=(LM[1]-LL[1])*OH;var OI=(LM[3]-LL[1])
*OH;var Lm=Math.cos(aAngle*B.k$);var LK=Math.sin(aAngle*B.k$);var O1=O0*Lm;var O2=
O0*LK;var Pe=N*Lm;var Pf=N*LK;var Pm=Ck*Lm;var Pn=Ck*LK;var OJ=OI*Lm;var OK=OI*LK;
var Lp=OB[0];var Lq=OB[1];this.Ay.Set(0,0,(Lp+O1)+Pn);this.Ay.Set(0,1,(Lq-O2)+Pm
);this.Ay.Set(1,0,(Lp+Pe)+Pn);this.Ay.Set(1,1,(Lq-Pf)+Pm);this.Ay.Set(2,0,(Lp+Pe
)+OK);this.Ay.Set(2,1,(Lq-Pf)+OJ);this.Ay.Set(3,0,(Lp+O1)+OK);this.Ay.Set(3,1,(Lq-
O2)+OJ);this.Ay.Set(0,2,1);this.Ay.Set(1,2,1);this.Ay.Set(2,2,1);this.Ay.Set(3,2
,1);if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.GetClipping());this.Co=[(this.
Ay.Get(0,0)+0.5)|0,(this.Ay.Get(0,1)+0.5)|0];this.BQ=[(this.Ay.Get(1,0)+0.5)|0,(
this.Ay.Get(1,1)+0.5)|0];this.Cp=[(this.Ay.Get(2,0)+0.5)|0,(this.Ay.Get(2,1)+0.5
)|0];this.BR=[(this.Ay.Get(3,0)+0.5)|0,(this.Ay.Get(3,1)+0.5)|0];this.H8=0x45;this.
DJ=0x00;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.GetClipping());this.OO(
);},_Init:function(aArg){B.Core.EV._Init.call(this,aArg);(this.Ay=[]).__proto__=
D.IR.Ay;this.__proto__=D.IR;this.F=0x3;},_className:"Views::WarpView"};D.M0={timer:
null,T:null,AR:0,A0:0,Bq:0xFFFFFFFF,B$:false,CJ:function(AT,aClip,aOffset,AE,aBlend
){var A;var AU=0;if(this.A0>=0)AU=this.A0;if(!this.T||(AU>=this.T.NoOfFrames))return;
this.T.Update();var J1;var J2;var J3;var J4;var Al=this.Bq;var Bs=(((AE+1)*255)>>
8)+1;var Lx=aOffset[0];var Ly=aOffset[1];var Y=[].concat(AG,this.Gm);aBlend=aBlend&&((
this.F&0x2)===0x2);J1=J2=J3=J4=Al;if(Bs<256){J1=(J1&0x00FFFFFF)|((((((J1>>24)&0xFF
)*Bs)>>8)&0xFF)<<24);J2=(J2&0x00FFFFFF)|((((((J2>>24)&0xFF)*Bs)>>8)&0xFF)<<24);J3=(
J3&0x00FFFFFF)|((((((J3>>24)&0xFF)*Bs)>>8)&0xFF)<<24);J4=(J4&0x00FFFFFF)|((((((J4>>
24)&0xFF)*Bs)>>8)&0xFF)<<24);}aClip=B.aaV(aClip,B.abh(AZ,aOffset));AT.QR(aClip,this.
T,AU,this.Ay.Get(0,0)+Lx,this.Ay.Get(0,1)+Ly,this.Ay.Get(0,2),this.Ay.Get(1,0)+Lx
,this.Ay.Get(1,1)+Ly,this.Ay.Get(1,2),this.Ay.Get(2,0)+Lx,this.Ay.Get(2,1)+Ly,this.
Ay.Get(2,2),this.Ay.Get(3,0)+Lx,this.Ay.Get(3,1)+Ly,this.Ay.Get(3,2),Y,J1,J2,J3,
J4,aBlend,true);},EA:function(Ab){var A;var O8=this.Gm;if(!!this.T)this.Gm=this.
T.FrameSize;else this.Gm=AG;if(((B.aaX(O8,this.Gm)||((this.H8===0x45)&&(this.DJ===
0x00)))&&!!this.G)&&((this.F&0x1)===0x1))this.G.Ag(this.GetClipping());if(((this.
H8!==0x45)&&(this.DJ===0x00))&&!B.aaX(O8,this.Gm)){this.DJ=this.H8;B.pe([this,this.
I5],this);}},BZ:function(Ab){var A;var AU=this.A0;var BC=0;if(!!this.T)BC=this.T.
NoOfFrames*this.T.FrameDelay;if((!!this.timer&&(this.A0<0))&&(BC>0))this.AR=this.
timer.AC;if(!!this.timer&&(BC>0)){var Aq=(this.timer.AC-this.AR)|0;AU=(Aq/this.T.
FrameDelay)|0;if(Aq>=BC){AU=AU%this.T.NoOfFrames;this.AR=this.timer.AC-(Aq%BC);}
}if(((AU!==this.A0)&&!!this.G)&&((this.F&0x1)===0x1))this.G.Ag(this.GetClipping(
));this.A0=AU;if(!BC&&!!this.timer){B.z9([this,this.BZ],this.timer,0);this.timer=
null;}},C7:function(C){var A;if(this.B$===C)return;this.B$=C;this.A0=-1;if(!C&&!
!this.timer){B.z9([this,this.BZ],this.timer,0);this.timer=null;}if(C){this.timer=
B._GetAutoObject(B.ach.FX);B.zV([this,this.BZ],this.timer,0);B.pe([this,this.BZ]
,this);}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.GetClipping());},A7:function(
C){var A;if(C===this.Bq)return;this.Bq=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ag(this.GetClipping());},AP:function(C){if(C===this.T)return;if(!!this.T&&this.
T.Fn)B.z9([this,this.EA],this.T,0);this.T=C;this.A0=-1;if(!!C&&C.Fn)B.zV([this,this.
EA],C,0);if(this.B$){this.C7(false);this.C7(true);}this.EA(this);},_Init:function(
aArg){D.IR._Init.call(this,aArg);this.__proto__=D.M0;},_Mark:function(E){var A;D.
IR._Mark.call(this,E);if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=
this.T)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Views::WarpImage"};D.JB={
Dm:null,Bq:0xFFFFFFFF,DV:B.wf,Width:1,Dk:function(){this.SF();},CJ:function(AT,aClip
,aOffset,AE,aBlend){if(!this.Dm)return;var Ac;var Ak;var Ai;var Aj;var Al=this.Bq;
AE=AE+1;Ac=Ak=Ai=Aj=Al;if(AE<256){Ac=(Ac&0x00FFFFFF)|((((AE*((Ac>>24)&0xFF))>>8)&
0xFF)<<24);Ak=(Ak&0x00FFFFFF)|((((AE*((Ak>>24)&0xFF))>>8)&0xFF)<<24);Ai=(Ai&0x00FFFFFF
)|((((AE*((Ai>>24)&0xFF))>>8)&0xFF)<<24);Aj=(Aj&0x00FFFFFF)|((((AE*((Aj>>24)&0xFF
))>>8)&0xFF)<<24);}AT.JB(aClip,this.Dm,B.abh(this.Q,aOffset),false,this.DV,this.
Width,0,0,0,3,Ac,Ak,Aj,Ai,true,true);},SF:function(){return;},Pr:function(Ab){var
A;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.Q);},A7:function(C){var A;if(
C===this.Bq)return;this.Bq=C;if((!!this.G&&((this.F&0x1)===0x1))&&!!this.Dm)this.
G.Ag(this.Q);},Qh:function(C){var A;if(B.aaX(C,this.DV))return;this.DV=C;if((!!this.
G&&((this.F&0x1)===0x1))&&!!this.Dm)this.G.Ag(this.Q);},MD:function(C){var A;if(
C<0)C=0;if(C===this.Width)return;this.Width=C;if((!!this.G&&((this.F&0x1)===0x1)
)&&!!this.Dm)this.G.Ag(this.Q);},Qi:function(C){var A;if(C===this.Dm)return;if(!
!this.Dm)B.z9([this,this.Pr],this.Dm,0);this.Dm=C;if(!!this.Dm)B.zV([this,this.Pr
],this.Dm,0);if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.Q);},_Init:function(
aArg){B.Core.AX._Init.call(this,aArg);this.__proto__=D.JB;},_Done:function(){this.
Dk();this.__proto__=B.Core.AX;B.Core.AX._Done.call(this);},_Mark:function(E){var
A;B.Core.AX._Mark.call(this,E);if((A=this.Dm)&&(A._cycle!=E))A._Mark(A._cycle=E);
},_className:"Views::StrokePath"};D.TY={Py:0x1,Px:0x2,Pz:0x4,PC:0x8,PB:0x10,PA:0x20
,Ut:0x40,Uu:0x80,Uz:0x100};D.UA={Py:0x1,Px:0x2,Pz:0x4,PC:0x8,PB:0x10,PA:0x20,Tg:
0x40,Tf:0x80,Tl:0x100};D.T9={T8:0,Ur:1,Uo:2,Uq:3};
D._Init=function(){D.CD.__proto__=B.Core.AX;D.C2.__proto__=B.Core.AX;D.Im.__proto__=
B.Core.AX;D.AJ.__proto__=B.Core.AX;D.K$.__proto__=B.Core.AX;D.Text.__proto__=B.Core.
AX;D.IR.__proto__=B.Core.EV;D.M0.__proto__=D.IR;D.JB.__proto__=B.Core.AX;};D._ReInit=
function(){};D.Cx=function(E){};return D;})();

/* Embedded Wizard */