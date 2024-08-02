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
);if(EmWiApp.Graphics)throw new Error("The unit file 'Graphics.js' included twice!"
);EmWiApp.Graphics=(function(){var B=EmWiApp;var D={};
var AG=[0,0];var AZ="Can not resize explicitly attached graphics engine bitmaps";
var Cc=[0,0,0,0];var Et="No graphics engine bitmap attached to this canvas";var DA=
"The canvas is already initialized with a graphics engine bitmap";var Eu="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Ev="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";
D.Canvas={Ba:null,Jf:B.wg,Du:0,JY:false,Dj:function(){if(this.JY)this.DetachBitmap(
);},CL:function(aArg){this.Fn=true;},N9:function(C){if((C[0]<=0)||(C[1]<=0))C=AG;
if(B.aaX(C,this.FrameSize))return;if(this.JY)throw new Error(AZ);this.FrameSize=
C;this.B_=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>0))&&(
this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;B._FreeBitmap(handle
);this.bitmap=null;},Update:function(){var A;if((!this.bitmap&&(this.FrameSize[0
]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=B._CreateBitmap(B._PIXEL_FORMAT_NATIVE
,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=
AG;this.FrameDelay=0;this.NoOfFrames=1;}this.Jf=[].concat(AG,this.FrameSize);if(
!!this.bitmap){var dstFrameNr=this.Du;for(this.Du=this.NoOfFrames-1;this.Du>=0;this.
Du--)this.L6(this.Jf,this.Jf,0x00000000,0x00000000,0x00000000,0x00000000,false);
this.Du=dstFrameNr;}}if(!(((A=this.Jf)[0]>=A[2])||(A[1]>=A[3])))this.Jf=Cc;},DetachBitmap:
function(){if(!this.JY)throw new Error(Et);this.bitmap=null;this.JY=false;this.FrameSize=
AG;this.FrameDelay=0;this.NoOfFrames=1;this.B_=false;return this;},AttachBitmap:
function(aBitmap){if(!!this.bitmap)throw new Error(DA);if(!aBitmap)return this;this.
bitmap=aBitmap;this.JY=true;var noOfFrames=1;var frameSize=AG;var frameDelay=0;{
noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;
}this.NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;
this.B_=(this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},NU:function(aClip
,M8,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,M_,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(aOffset<
0)aOffset=0;if((!M8||!M8.font)||((aOffset>0)&&(aOffset>=aString.length)))return;
var orient=0;if(M_===1)orient=90;else if(M_===2)orient=180;else if(M_===3)orient=
270;var dstFrameNo=this.Du;var dstBitmap=this.bitmap;var srcFont=M8.font;{B.rz(dstBitmap
,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,aMinWidth,orient
,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},PO:function(aClip,aBitmap,aFrameNr
,aDstRect,IU,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var A;if(!this.bitmap)this.
Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.bitmap)||!IU)||(aFrameNr<
0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=
aBitmap.bitmap;var dstFrameNo=this.Du;var srcRect=[].concat(AG,aBitmap.FrameSize
);var left=((IU&0x1)===0x1);var top=((IU&0x2)===0x2);var right=((IU&0x4)===0x4);
var bottom=((IU&0x8)===0x8);var interior=((IU&0x10)===0x10);{B.aab(dstBitmap,srcBitmap
,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right,bottom,interior,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},JA:function(aClip,M$,aDstRect,aFlipY,aOffset
,aWidth,So,Sl,Sm,aMiterLimit,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(!M$||!M$.path)return;var
style=0;switch(So){case 1:style=1;break;case 3:style=2;break;case 2:style=3;break;
default:;}switch(Sl){case 1:style=style|256;break;case 3:style=style|512;break;case
2:style=style|768;break;default:;}switch(Sm){case 1:style=style|65536;break;case
2:style=style|131072;break;default:;}var dstBitmap=this.bitmap;var dstFrameNo=this.
Du;var path=M$.path;{B.ab3(dstBitmap,path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset
,aWidth,style,aMiterLimit,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased
);}},QR:function(aClip,aBitmap,aFrameNr,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2
,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1,aColor2,aColor3,aColor4
,aBlend,aFilter){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||
!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var Ae=aDstX1;
var Ah=aDstX2;var Af=aDstY1;var Aa=aDstY2;if(aDstX2<Ae)Ae=aDstX2;if(aDstX3<Ae)Ae=
aDstX3;if(aDstX4<Ae)Ae=aDstX4;if(aDstX2>Ah)Ah=aDstX2;if(aDstX3>Ah)Ah=aDstX3;if(aDstX4>
Ah)Ah=aDstX4;if(aDstY2<Af)Af=aDstY2;if(aDstY3<Af)Af=aDstY3;if(aDstY4<Af)Af=aDstY4;
if(aDstY2>Aa)Aa=aDstY2;if(aDstY3>Aa)Aa=aDstY3;if(aDstY4>Aa)Aa=aDstY4;if(((((Ah-Ae
)>4096)||((Ah-Ae)<-4096))||((Aa-Af)>4096))||((Aa-Af)<-4096)){B.ab5("%s",Eu);return;
}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.Du;{
B.ab6(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstX1,aDstY1,aDstW1,aDstX2,
aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1,aColor2
,aColor3,aColor4,aBlend,aFilter);}},QK:function(aClip,aBitmap,aFrameNr,aDstRect,
aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter){if(!this.bitmap)this.
Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(
aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=aDstRect[0];var
right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096)||((right-left)<-
4096))||((bottom-top)>4096))||((bottom-top)<-4096)){B.ab5("%s",Ev);return;}var dstBitmap=
this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.Du;{B.ab6(dstBitmap
,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top,1,right,bottom,1,left,
bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter);}},QP:function(
aClip,aBitmap,aFrameNr,aDstRect,aSrcRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.
bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.
bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.Du;{B.gN(dstBitmap,srcBitmap
,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcRect,aSrcPos,aColorTL,aColorTR,aColorBR,
aColorBL,aBlend);}},PK:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames
))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.
Du;{B.db(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},PP:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Du;{B.m6(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},L6:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Du;{
B.fR(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},_Init:function(aArg){B.acg.T._Init.call(this,aArg);this.__proto__=D.Canvas;
this.CL(aArg);},_Done:function(){this.Dj();this.__proto__=B.acg.T;B.acg.T._Done.
call(this);},_Mark:function(E){var A;B.acg.T._Mark.call(this,E);if((A=this.Ba)&&(
A._cycle!=E))A._Mark(A._cycle=E);},_className:"Graphics::Canvas"};D.Oo={PZ:1,P0:
0,P1:0,P2:0,P3:1,P4:0,KR:0,KS:0,P5:1,NY:0,JL:0,SO:true,KC:function(aX,aY){var I6=((
aX*this.KR)+(aY*this.KS))+this.NY;this.JL=I6;return true;},PM:function(Ld,Lg,Le,
Lh,Nb,Nc,Lf,Li){var OP=Le-Nb;var OR=Lh-Nc;var OQ=Lf-Nb;var OS=Li-Nc;var Pk=((Ld-
Le)+Nb)-Lf;var Pl=((Lg-Lh)+Nc)-Li;var Nh=(OP*OS)-(OR*OQ);if(!Nh)return null;this.
KR=((Pk*OS)-(Pl*OQ))/Nh;this.KS=((OP*Pl)-(OR*Pk))/Nh;this.P5=0;this.NY=1;this.PZ=(
Le-Ld)+(this.KR*Le);this.P0=(Lf-Ld)+(this.KS*Lf);this.P1=Ld;this.P2=(Lh-Lg)+(this.
KR*Lh);this.P3=(Li-Lg)+(this.KS*Li);this.P4=Lg;this.SO=false;return this;},_Init:
function(aArg){this.__proto__=D.Oo;B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.J)&&(A._cycle!=
E))A._Mark(A._cycle=E);},J:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};D.Dl={path:null,Dj:function(){if(!this.path)return;var handle=this.path;B.e6(handle
);this.path=null;},Kl:function(Ab){B.we(this,0);},Pv:function(aSubPathNo,aCenterX
,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges){B.pe([this,this.Kl
],this);var handle=this.path;var result=0;{result=B.dU(handle,aSubPathNo,aCenterX
,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges);}return result;},Pw:
function(aSubPathNo,aX,aY){B.pe([this,this.Kl],this);var handle=this.path;var result=
0;result=B.m5(handle,aSubPathNo,aX,aY);return result;},Ii:function(aSubPathNo,aX
,aY){B.pe([this,this.Kl],this);var handle=this.path;B.rt(handle,aSubPathNo,aX,aY
);},NX:function(aSubPathNo,aMaxNoOfEdges){if(!this.path&&!aSubPathNo)this.Om(1);
B.pe([this,this.Kl],this);var handle=this.path;var result=false;result=B.gM(handle
,aSubPathNo,aMaxNoOfEdges);return result;},Ol:function(aAngle){if(!this.path)this.
Om(1);var handle=this.path;B.rI(handle,aAngle);},PS:function(){if(!this.path)return 1;
var handle=this.path;var result=0;result=B.aax(handle);return result;},Om:function(
aMaxNoOfSubPaths){if(aMaxNoOfSubPaths<1)aMaxNoOfSubPaths=1;if(!!this.path&&(this.
PS()===aMaxNoOfSubPaths))return true;var handle=this.path;{B.e6(handle);handle=B.
k_(aMaxNoOfSubPaths);}this.path=handle;B.pe([this,this.Kl],this);return!!this.path;
},_Init:function(aArg){this.__proto__=D.Dl;B.h7++;},_Done:function(){this.Dj();this.
__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.
J)&&(A._cycle!=E))A._Mark(A._cycle=E);},J:null,_cycle:0,_observers:null,_className:
"Graphics::Path"};D.Ja={Left:0x1,QQ:0x2,Right:0x4,PD:0x8,TY:0x10};D.T_={Tp:0,T5:
1,QJ:2};D.T9={TR:0,Ux:1,QJ:2,UG:3};
D._Init=function(){D.Canvas.__proto__=B.acg.T;};D._ReInit=function(){};D.Cx=function(
E){};return D;})();

/* Embedded Wizard */