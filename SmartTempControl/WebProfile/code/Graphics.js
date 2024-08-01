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
var AI=[0,0];var AU="Can not resize explicitly attached graphics engine bitmaps";
var Ch=[0,0,0,0];var EQ="No graphics engine bitmap attached to this canvas";var DZ=
"The canvas is already initialized with a graphics engine bitmap";var DD="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var D0="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";
D.Canvas={Hh:null,Ih:B.wg,Dd:0,IL:false,C6:function(){if(this.IL)this.DetachBitmap(
);},Cy:function(aArg){this.EG=true;},Mx:function(C){if((C[0]<=0)||(C[1]<=0))C=AI;
if(B.aaX(C,this.FrameSize))return;if(this.IL)throw new Error(AU);this.FrameSize=
C;this.B1=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>0))&&(
this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;B._FreeBitmap(handle
);this.bitmap=null;},Update:function(){var A;if((!this.bitmap&&(this.FrameSize[0
]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=B._CreateBitmap(B._PIXEL_FORMAT_NATIVE
,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=
AI;this.FrameDelay=0;this.NoOfFrames=1;}this.Ih=[].concat(AI,this.FrameSize);if(
!!this.bitmap){var dstFrameNr=this.Dd;for(this.Dd=this.NoOfFrames-1;this.Dd>=0;this.
Dd--)this.KH(this.Ih,this.Ih,0x00000000,0x00000000,0x00000000,0x00000000,false);
this.Dd=dstFrameNr;}}if(!(((A=this.Ih)[0]>=A[2])||(A[1]>=A[3])))this.Ih=Ch;},DetachBitmap:
function(){if(!this.IL)throw new Error(EQ);this.bitmap=null;this.IL=false;this.FrameSize=
AI;this.FrameDelay=0;this.NoOfFrames=1;this.B1=false;return this;},AttachBitmap:
function(aBitmap){if(!!this.bitmap)throw new Error(DZ);if(!aBitmap)return this;this.
bitmap=aBitmap;this.IL=true;var noOfFrames=1;var frameSize=AI;var frameDelay=0;{
noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;
}this.NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;
this.B1=(this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},Mo:function(aClip
,LI,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,LK,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(aOffset<
0)aOffset=0;if((!LI||!LI.font)||((aOffset>0)&&(aOffset>=aString.length)))return;
var orient=0;if(LK===1)orient=90;else if(LK===2)orient=180;else if(LK===3)orient=
270;var dstFrameNo=this.Dd;var dstBitmap=this.bitmap;var srcFont=LI.font;{B.rz(dstBitmap
,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,aMinWidth,orient
,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},N8:function(aClip,aBitmap,aFrameNr
,aDstRect,HY,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var A;if(!this.bitmap)this.
Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.bitmap)||!HY)||(aFrameNr<
0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=
aBitmap.bitmap;var dstFrameNo=this.Dd;var srcRect=[].concat(AI,aBitmap.FrameSize
);var left=((HY&0x1)===0x1);var top=((HY&0x2)===0x2);var right=((HY&0x4)===0x4);
var bottom=((HY&0x8)===0x8);var interior=((HY&0x10)===0x10);{B.aab(dstBitmap,srcBitmap
,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right,bottom,interior,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},It:function(aClip,LL,aDstRect,aFlipY,aOffset
,aWidth,QE,QA,QC,aMiterLimit,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(!LL||!LL.path)return;var
style=0;switch(QE){case 1:style=1;break;case 3:style=2;break;case 2:style=3;break;
default:;}switch(QA){case 1:style=style|256;break;case 3:style=style|512;break;case
2:style=style|768;break;default:;}switch(QC){case 1:style=style|65536;break;case
2:style=style|131072;break;default:;}var dstBitmap=this.bitmap;var dstFrameNo=this.
Dd;var path=LL.path;{B.ab3(dstBitmap,path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset
,aWidth,style,aMiterLimit,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased
);}},O7:function(aClip,aBitmap,aFrameNr,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2
,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1,aColor2,aColor3,aColor4
,aBlend,aFilter){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||
!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var Aa=aDstX1;
var Ad=aDstX2;var Ab=aDstY1;var X=aDstY2;if(aDstX2<Aa)Aa=aDstX2;if(aDstX3<Aa)Aa=
aDstX3;if(aDstX4<Aa)Aa=aDstX4;if(aDstX2>Ad)Ad=aDstX2;if(aDstX3>Ad)Ad=aDstX3;if(aDstX4>
Ad)Ad=aDstX4;if(aDstY2<Ab)Ab=aDstY2;if(aDstY3<Ab)Ab=aDstY3;if(aDstY4<Ab)Ab=aDstY4;
if(aDstY2>X)X=aDstY2;if(aDstY3>X)X=aDstY3;if(aDstY4>X)X=aDstY4;if(((((Ad-Aa)>4096
)||((Ad-Aa)<-4096))||((X-Ab)>4096))||((X-Ab)<-4096)){B.ab5("%s",DD);return;}var dstBitmap=
this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.Dd;{B.ab6(dstBitmap
,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3
,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend
,aFilter);}},O0:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend,aFilter){if(!this.bitmap)this.Update();if(!this.bitmap
)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames
))return;var top=aDstRect[1];var left=aDstRect[0];var right=aDstRect[2];var bottom=
aDstRect[3];if(((((right-left)>4096)||((right-left)<-4096))||((bottom-top)>4096)
)||((bottom-top)<-4096)){B.ab5("%s",D0);return;}var dstBitmap=this.bitmap;var srcBitmap=
aBitmap.bitmap;var dstFrameNo=this.Dd;{B.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr
,aClip,left,top,1,right,top,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend,aFilter);}},O6:function(aClip,aBitmap,aFrameNr,aDstRect
,aSrcRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(
aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.
bitmap;var dstFrameNr=this.Dd;{B.gN(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip
,aDstRect,aSrcRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},N4:function(
aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;
var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.Dd;{B.db(dstBitmap,srcBitmap,dstFrameNr
,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},
N9:function(aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.Dd;{B.m6(dstBitmap,dstFrameNo,aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},KH:function(aClip,aDstRect,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
var dstBitmap=this.bitmap;var dstFrameNo=this.Dd;{B.fR(dstBitmap,dstFrameNo,aClip
,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},_Init:function(aArg){B.
acg.S._Init.call(this,aArg);this.__proto__=D.Canvas;this.Cy(aArg);},_Done:function(
){this.C6();this.__proto__=B.acg.S;B.acg.S._Done.call(this);},_Mark:function(E){
var A;B.acg.S._Mark.call(this,E);if((A=this.Hh)&&(A._cycle!=E))A._Mark(A._cycle=
E);},_className:"Graphics::Canvas"};D.MI={Og:1,Oh:0,Oi:0,Oj:0,Ol:1,Om:0,Jw:0,Jx:
0,On:1,Ms:0,ID:0,Q0:true,Jk:function(aX,aY){var H_=((aX*this.Jw)+(aY*this.Jx))+this.
Ms;this.ID=H_;return true;},N6:function(JU,JX,JV,JY,LN,LO,JW,JZ){var Nb=JV-LN;var
Nd=JY-LO;var Nc=JW-LN;var Ne=JZ-LO;var NG=((JU-JV)+LN)-JW;var NH=((JX-JY)+LO)-JZ;
var LT=(Nb*Ne)-(Nd*Nc);if(!LT)return null;this.Jw=((NG*Ne)-(NH*Nc))/LT;this.Jx=((
Nb*NH)-(Nd*NG))/LT;this.On=0;this.Ms=1;this.Og=(JV-JU)+(this.Jw*JV);this.Oh=(JW-
JU)+(this.Jx*JW);this.Oi=JU;this.Oj=(JY-JX)+(this.Jw*JY);this.Ol=(JZ-JX)+(this.Jx
*JZ);this.Om=JX;this.Q0=false;return this;},_Init:function(aArg){this.__proto__=
D.MI;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){}
,_Mark:function(E){var A;if((A=this.J)&&(A._cycle!=E))A._Mark(A._cycle=E);},J:null
,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"};D.C7={path:null,C6:
function(){if(!this.path)return;var handle=this.path;B.e6(handle);this.path=null;
},I7:function(An){B.we(this,0);},NS:function(aSubPathNo,aCenterX,aCenterY,aRadiusX
,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges){B.pe([this,this.I7],this);var handle=
this.path;var result=0;{result=B.dU(handle,aSubPathNo,aCenterX,aCenterY,aRadiusX
,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges);}return result;},NT:function(aSubPathNo
,aX,aY){B.pe([this,this.I7],this);var handle=this.path;var result=0;result=B.m5(
handle,aSubPathNo,aX,aY);return result;},Ht:function(aSubPathNo,aX,aY){B.pe([this
,this.I7],this);var handle=this.path;B.rt(handle,aSubPathNo,aX,aY);},Mr:function(
aSubPathNo,aMaxNoOfEdges){if(!this.path&&!aSubPathNo)this.MH(1);B.pe([this,this.
I7],this);var handle=this.path;var result=false;result=B.gM(handle,aSubPathNo,aMaxNoOfEdges
);return result;},MG:function(aAngle){if(!this.path)this.MH(1);var handle=this.path;
B.rI(handle,aAngle);},Oa:function(){if(!this.path)return 1;var handle=this.path;
var result=0;result=B.aax(handle);return result;},MH:function(aMaxNoOfSubPaths){
if(aMaxNoOfSubPaths<1)aMaxNoOfSubPaths=1;if(!!this.path&&(this.Oa()===aMaxNoOfSubPaths
))return true;var handle=this.path;{B.e6(handle);handle=B.k_(aMaxNoOfSubPaths);}
this.path=handle;B.pe([this,this.I7],this);return!!this.path;},_Init:function(aArg
){this.__proto__=D.C7;B.h7++;},_Done:function(){this.C6();this.__proto__=null;B.
h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.J)&&(A._cycle!=E)
)A._Mark(A._cycle=E);},J:null,_cycle:0,_observers:null,_className:"Graphics::Path"
};D.Id={Left:0x1,R$:0x2,Right:0x4,Rp:0x8,RE:0x10};D.RQ={Ro:0,RK:1,OZ:2};D.RP={Ry:
0,R8:1,OZ:2,Se:3};
D._Init=function(){D.Canvas.__proto__=B.acg.S;};D._ReInit=function(){};D.Cn=function(
E){};return D;})();

/* Embedded Wizard */