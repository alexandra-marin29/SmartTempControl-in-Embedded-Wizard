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
var AH=[0,0];var AS="Can not resize explicitly attached graphics engine bitmaps";
var Cg=[0,0,0,0];var EM="No graphics engine bitmap attached to this canvas";var DU=
"The canvas is already initialized with a graphics engine bitmap";var Dw="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var DV="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";
D.Canvas={G$:null,Ib:B.wg,Da:0,IG:false,C2:function(){if(this.IG)this.DetachBitmap(
);},Cx:function(aArg){this.EC=true;},Mo:function(C){if((C[0]<=0)||(C[1]<=0))C=AH;
if(B.aaX(C,this.FrameSize))return;if(this.IG)throw new Error(AS);this.FrameSize=
C;this.BY=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>0))&&(
this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;B._FreeBitmap(handle
);this.bitmap=null;},Update:function(){var A;if((!this.bitmap&&(this.FrameSize[0
]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=B._CreateBitmap(B._PIXEL_FORMAT_NATIVE
,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=
AH;this.FrameDelay=0;this.NoOfFrames=1;}this.Ib=[].concat(AH,this.FrameSize);if(
!!this.bitmap){var dstFrameNr=this.Da;for(this.Da=this.NoOfFrames-1;this.Da>=0;this.
Da--)this.KD(this.Ib,this.Ib,0x00000000,0x00000000,0x00000000,0x00000000,false);
this.Da=dstFrameNr;}}if(!(((A=this.Ib)[0]>=A[2])||(A[1]>=A[3])))this.Ib=Cg;},DetachBitmap:
function(){if(!this.IG)throw new Error(EM);this.bitmap=null;this.IG=false;this.FrameSize=
AH;this.FrameDelay=0;this.NoOfFrames=1;this.BY=false;return this;},AttachBitmap:
function(aBitmap){if(!!this.bitmap)throw new Error(DU);if(!aBitmap)return this;this.
bitmap=aBitmap;this.IG=true;var noOfFrames=1;var frameSize=AH;var frameDelay=0;{
noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;
}this.NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;
this.BY=(this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},Mf:function(aClip
,LA,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,LC,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(aOffset<
0)aOffset=0;if((!LA||!LA.font)||((aOffset>0)&&(aOffset>=aString.length)))return;
var orient=0;if(LC===1)orient=90;else if(LC===2)orient=180;else if(LC===3)orient=
270;var dstFrameNo=this.Da;var dstBitmap=this.bitmap;var srcFont=LA.font;{B.rz(dstBitmap
,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,aMinWidth,orient
,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},NU:function(aClip,aBitmap,aFrameNr
,aDstRect,HP,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var A;if(!this.bitmap)this.
Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.bitmap)||!HP)||(aFrameNr<
0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=
aBitmap.bitmap;var dstFrameNo=this.Da;var srcRect=[].concat(AH,aBitmap.FrameSize
);var left=((HP&0x1)===0x1);var top=((HP&0x2)===0x2);var right=((HP&0x4)===0x4);
var bottom=((HP&0x8)===0x8);var interior=((HP&0x10)===0x10);{B.aab(dstBitmap,srcBitmap
,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right,bottom,interior,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},In:function(aClip,LD,aDstRect,aFlipY,aOffset
,aWidth,Qs,Qo,Qq,aMiterLimit,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(!LD||!LD.path)return;var
style=0;switch(Qs){case 1:style=1;break;case 3:style=2;break;case 2:style=3;break;
default:;}switch(Qo){case 1:style=style|256;break;case 3:style=style|512;break;case
2:style=style|768;break;default:;}switch(Qq){case 1:style=style|65536;break;case
2:style=style|131072;break;default:;}var dstBitmap=this.bitmap;var dstFrameNo=this.
Da;var path=LD.path;{B.ab3(dstBitmap,path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset
,aWidth,style,aMiterLimit,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased
);}},OT:function(aClip,aBitmap,aFrameNr,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2
,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1,aColor2,aColor3,aColor4
,aBlend,aFilter){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||
!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var Aa=aDstX1;
var Ad=aDstX2;var Ab=aDstY1;var X=aDstY2;if(aDstX2<Aa)Aa=aDstX2;if(aDstX3<Aa)Aa=
aDstX3;if(aDstX4<Aa)Aa=aDstX4;if(aDstX2>Ad)Ad=aDstX2;if(aDstX3>Ad)Ad=aDstX3;if(aDstX4>
Ad)Ad=aDstX4;if(aDstY2<Ab)Ab=aDstY2;if(aDstY3<Ab)Ab=aDstY3;if(aDstY4<Ab)Ab=aDstY4;
if(aDstY2>X)X=aDstY2;if(aDstY3>X)X=aDstY3;if(aDstY4>X)X=aDstY4;if(((((Ad-Aa)>4096
)||((Ad-Aa)<-4096))||((X-Ab)>4096))||((X-Ab)<-4096)){B.ab5("%s",Dw);return;}var dstBitmap=
this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.Da;{B.ab6(dstBitmap
,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3
,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend
,aFilter);}},ON:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend,aFilter){if(!this.bitmap)this.Update();if(!this.bitmap
)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames
))return;var top=aDstRect[1];var left=aDstRect[0];var right=aDstRect[2];var bottom=
aDstRect[3];if(((((right-left)>4096)||((right-left)<-4096))||((bottom-top)>4096)
)||((bottom-top)<-4096)){B.ab5("%s",DV);return;}var dstBitmap=this.bitmap;var srcBitmap=
aBitmap.bitmap;var dstFrameNo=this.Da;{B.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr
,aClip,left,top,1,right,top,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend,aFilter);}},OS:function(aClip,aBitmap,aFrameNr,aDstRect
,aSrcRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(
aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.
bitmap;var dstFrameNr=this.Da;{B.gN(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip
,aDstRect,aSrcRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},NQ:function(
aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;
var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.Da;{B.db(dstBitmap,srcBitmap,dstFrameNr
,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},
NV:function(aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.Da;{B.m6(dstBitmap,dstFrameNo,aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},KD:function(aClip,aDstRect,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
var dstBitmap=this.bitmap;var dstFrameNo=this.Da;{B.fR(dstBitmap,dstFrameNo,aClip
,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},_Init:function(aArg){B.
acg.R._Init.call(this,aArg);this.__proto__=D.Canvas;this.Cx(aArg);},_Done:function(
){this.C2();this.__proto__=B.acg.R;B.acg.R._Done.call(this);},_Mark:function(E){
var A;B.acg.R._Mark.call(this,E);if((A=this.G$)&&(A._cycle!=E))A._Mark(A._cycle=
E);},_className:"Graphics::Canvas"};D.MA={N4:1,N5:0,N6:0,N7:0,N8:1,N9:0,Jr:0,Js:
0,N_:1,Mj:0,Iy:0,QO:true,Jf:function(aX,aY){var H4=((aX*this.Jr)+(aY*this.Js))+this.
Mj;this.Iy=H4;return true;},NS:function(JP,JS,JQ,JT,LF,LG,JR,JU){var MZ=JQ-LF;var
M1=JT-LG;var M0=JR-LF;var M2=JU-LG;var Ns=((JP-JQ)+LF)-JR;var Nt=((JS-JT)+LG)-JU;
var LL=(MZ*M2)-(M1*M0);if(!LL)return null;this.Jr=((Ns*M2)-(Nt*M0))/LL;this.Js=((
MZ*Nt)-(M1*Ns))/LL;this.N_=0;this.Mj=1;this.N4=(JQ-JP)+(this.Jr*JQ);this.N5=(JR-
JP)+(this.Js*JR);this.N6=JP;this.N7=(JT-JS)+(this.Jr*JT);this.N8=(JU-JS)+(this.Js
*JU);this.N9=JS;this.QO=false;return this;},_Init:function(aArg){this.__proto__=
D.MA;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){}
,_Mark:function(E){var A;if((A=this.K)&&(A._cycle!=E))A._Mark(A._cycle=E);},K:null
,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"};D.C3={path:null,C2:
function(){if(!this.path)return;var handle=this.path;B.e6(handle);this.path=null;
},I2:function(An){B.we(this,0);},NE:function(aSubPathNo,aCenterX,aCenterY,aRadiusX
,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges){B.pe([this,this.I2],this);var handle=
this.path;var result=0;{result=B.dU(handle,aSubPathNo,aCenterX,aCenterY,aRadiusX
,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges);}return result;},NF:function(aSubPathNo
,aX,aY){B.pe([this,this.I2],this);var handle=this.path;var result=0;result=B.m5(
handle,aSubPathNo,aX,aY);return result;},Hl:function(aSubPathNo,aX,aY){B.pe([this
,this.I2],this);var handle=this.path;B.rt(handle,aSubPathNo,aX,aY);},Mi:function(
aSubPathNo,aMaxNoOfEdges){if(!this.path&&!aSubPathNo)this.Mz(1);B.pe([this,this.
I2],this);var handle=this.path;var result=false;result=B.gM(handle,aSubPathNo,aMaxNoOfEdges
);return result;},My:function(aAngle){if(!this.path)this.Mz(1);var handle=this.path;
B.rI(handle,aAngle);},NY:function(){if(!this.path)return 1;var handle=this.path;
var result=0;result=B.aax(handle);return result;},Mz:function(aMaxNoOfSubPaths){
if(aMaxNoOfSubPaths<1)aMaxNoOfSubPaths=1;if(!!this.path&&(this.NY()===aMaxNoOfSubPaths
))return true;var handle=this.path;{B.e6(handle);handle=B.k_(aMaxNoOfSubPaths);}
this.path=handle;B.pe([this,this.I2],this);return!!this.path;},_Init:function(aArg
){this.__proto__=D.C3;B.h7++;},_Done:function(){this.C2();this.__proto__=null;B.
h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.K)&&(A._cycle!=E)
)A._Mark(A._cycle=E);},K:null,_cycle:0,_observers:null,_className:"Graphics::Path"
};D.H9={Left:0x1,RZ:0x2,Right:0x4,Rd:0x8,Rs:0x10};D.RE={Rc:0,Ry:1,OM:2};D.RD={Rm:
0,RW:1,OM:2,R4:3};
D._Init=function(){D.Canvas.__proto__=B.acg.R;};D._ReInit=function(){};D.Cl=function(
E){};return D;})();

/* Embedded Wizard */