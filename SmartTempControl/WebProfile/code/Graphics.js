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
var Ca=[0,0,0,0];var EH="No graphics engine bitmap attached to this canvas";var Eh=
"The canvas is already initialized with a graphics engine bitmap";var Dv="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var DT="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";
D.Canvas={G$:null,H_:B.wg,C$:0,IE:false,C2:function(){if(this.IE)this.DetachBitmap(
);},Ct:function(aArg){this.Ey=true;},Mm:function(C){if((C[0]<=0)||(C[1]<=0))C=AH;
if(B.aaX(C,this.FrameSize))return;if(this.IE)throw new Error(AS);this.FrameSize=
C;this.BR=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>0))&&(
this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;B._FreeBitmap(handle
);this.bitmap=null;},Update:function(){var A;if((!this.bitmap&&(this.FrameSize[0
]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=B._CreateBitmap(B._PIXEL_FORMAT_NATIVE
,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=
AH;this.FrameDelay=0;this.NoOfFrames=1;}this.H_=[].concat(AH,this.FrameSize);if(
!!this.bitmap){var dstFrameNr=this.C$;for(this.C$=this.NoOfFrames-1;this.C$>=0;this.
C$--)this.Kw(this.H_,this.H_,0x00000000,0x00000000,0x00000000,0x00000000,false);
this.C$=dstFrameNr;}}if(!(((A=this.H_)[0]>=A[2])||(A[1]>=A[3])))this.H_=Ca;},DetachBitmap:
function(){if(!this.IE)throw new Error(EH);this.bitmap=null;this.IE=false;this.FrameSize=
AH;this.FrameDelay=0;this.NoOfFrames=1;this.BR=false;return this;},AttachBitmap:
function(aBitmap){if(!!this.bitmap)throw new Error(Eh);if(!aBitmap)return this;this.
bitmap=aBitmap;this.IE=true;var noOfFrames=1;var frameSize=AH;var frameDelay=0;{
noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;
}this.NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;
this.BR=(this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},Md:function(aClip
,Ly,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,LA,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(aOffset<
0)aOffset=0;if((!Ly||!Ly.font)||((aOffset>0)&&(aOffset>=aString.length)))return;
var orient=0;if(LA===1)orient=90;else if(LA===2)orient=180;else if(LA===3)orient=
270;var dstFrameNo=this.C$;var dstBitmap=this.bitmap;var srcFont=Ly.font;{B.rz(dstBitmap
,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,aMinWidth,orient
,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},NQ:function(aClip,aBitmap,aFrameNr
,aDstRect,HP,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var A;if(!this.bitmap)this.
Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.bitmap)||!HP)||(aFrameNr<
0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=
aBitmap.bitmap;var dstFrameNo=this.C$;var srcRect=[].concat(AH,aBitmap.FrameSize
);var left=((HP&0x1)===0x1);var top=((HP&0x2)===0x2);var right=((HP&0x4)===0x4);
var bottom=((HP&0x8)===0x8);var interior=((HP&0x10)===0x10);{B.aab(dstBitmap,srcBitmap
,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right,bottom,interior,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},Im:function(aClip,LB,aDstRect,aFlipY,aOffset
,aWidth,P6,P2,P4,aMiterLimit,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(!LB||!LB.path)return;var
style=0;switch(P6){case 1:style=1;break;case 3:style=2;break;case 2:style=3;break;
default:;}switch(P2){case 1:style=style|256;break;case 3:style=style|512;break;case
2:style=style|768;break;default:;}switch(P4){case 1:style=style|65536;break;case
2:style=style|131072;break;default:;}var dstBitmap=this.bitmap;var dstFrameNo=this.
C$;var path=LB.path;{B.ab3(dstBitmap,path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset
,aWidth,style,aMiterLimit,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased
);}},OP:function(aClip,aBitmap,aFrameNr,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2
,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1,aColor2,aColor3,aColor4
,aBlend,aFilter){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||
!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var Aa=aDstX1;
var Ad=aDstX2;var Ab=aDstY1;var X=aDstY2;if(aDstX2<Aa)Aa=aDstX2;if(aDstX3<Aa)Aa=
aDstX3;if(aDstX4<Aa)Aa=aDstX4;if(aDstX2>Ad)Ad=aDstX2;if(aDstX3>Ad)Ad=aDstX3;if(aDstX4>
Ad)Ad=aDstX4;if(aDstY2<Ab)Ab=aDstY2;if(aDstY3<Ab)Ab=aDstY3;if(aDstY4<Ab)Ab=aDstY4;
if(aDstY2>X)X=aDstY2;if(aDstY3>X)X=aDstY3;if(aDstY4>X)X=aDstY4;if(((((Ad-Aa)>4096
)||((Ad-Aa)<-4096))||((X-Ab)>4096))||((X-Ab)<-4096)){B.ab5("%s",Dv);return;}var dstBitmap=
this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.C$;{B.ab6(dstBitmap
,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3
,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend
,aFilter);}},OJ:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend,aFilter){if(!this.bitmap)this.Update();if(!this.bitmap
)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames
))return;var top=aDstRect[1];var left=aDstRect[0];var right=aDstRect[2];var bottom=
aDstRect[3];if(((((right-left)>4096)||((right-left)<-4096))||((bottom-top)>4096)
)||((bottom-top)<-4096)){B.ab5("%s",DT);return;}var dstBitmap=this.bitmap;var srcBitmap=
aBitmap.bitmap;var dstFrameNo=this.C$;{B.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr
,aClip,left,top,1,right,top,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend,aFilter);}},OO:function(aClip,aBitmap,aFrameNr,aDstRect
,aSrcRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(
aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.
bitmap;var dstFrameNr=this.C$;{B.gN(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip
,aDstRect,aSrcRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},NM:function(
aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;
var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.C$;{B.db(dstBitmap,srcBitmap,dstFrameNr
,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},
NR:function(aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.C$;{B.m6(dstBitmap,dstFrameNo,aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},Kw:function(aClip,aDstRect,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
var dstBitmap=this.bitmap;var dstFrameNo=this.C$;{B.fR(dstBitmap,dstFrameNo,aClip
,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},_Init:function(aArg){B.
acg.Q._Init.call(this,aArg);this.__proto__=D.Canvas;this.Ct(aArg);},_Done:function(
){this.C2();this.__proto__=B.acg.Q;B.acg.Q._Done.call(this);},_Mark:function(E){
var A;B.acg.Q._Mark.call(this,E);if((A=this.G$)&&(A._cycle!=E))A._Mark(A._cycle=
E);},_className:"Graphics::Canvas"};D.Mx={N0:1,N1:0,N2:0,N3:0,N4:1,N5:0,Jn:0,Jo:
0,N6:1,Mh:0,Iw:0,Qq:true,Jd:function(aX,aY){var H1=((aX*this.Jn)+(aY*this.Jo))+this.
Mh;this.Iw=H1;return true;},NO:function(JJ,JM,JK,JN,LD,LE,JL,JO){var MW=JK-LD;var
MY=JN-LE;var MX=JL-LD;var MZ=JO-LE;var Np=((JJ-JK)+LD)-JL;var Nq=((JM-JN)+LE)-JO;
var LJ=(MW*MZ)-(MY*MX);if(!LJ)return null;this.Jn=((Np*MZ)-(Nq*MX))/LJ;this.Jo=((
MW*Nq)-(MY*Np))/LJ;this.N6=0;this.Mh=1;this.N0=(JK-JJ)+(this.Jn*JK);this.N1=(JL-
JJ)+(this.Jo*JL);this.N2=JJ;this.N3=(JN-JM)+(this.Jn*JN);this.N4=(JO-JM)+(this.Jo
*JO);this.N5=JM;this.Qq=false;return this;},_Init:function(aArg){this.__proto__=
D.Mx;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){}
,_Mark:function(E){var A;if((A=this.K)&&(A._cycle!=E))A._Mark(A._cycle=E);},K:null
,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"};D.C3={path:null,C2:
function(){if(!this.path)return;var handle=this.path;B.e6(handle);this.path=null;
},I0:function(Ap){B.we(this,0);},NB:function(aSubPathNo,aCenterX,aCenterY,aRadiusX
,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges){B.pe([this,this.I0],this);var handle=
this.path;var result=0;{result=B.dU(handle,aSubPathNo,aCenterX,aCenterY,aRadiusX
,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges);}return result;},NC:function(aSubPathNo
,aX,aY){B.pe([this,this.I0],this);var handle=this.path;var result=0;result=B.m5(
handle,aSubPathNo,aX,aY);return result;},Hl:function(aSubPathNo,aX,aY){B.pe([this
,this.I0],this);var handle=this.path;B.rt(handle,aSubPathNo,aX,aY);},Mg:function(
aSubPathNo,aMaxNoOfEdges){if(!this.path&&!aSubPathNo)this.Mw(1);B.pe([this,this.
I0],this);var handle=this.path;var result=false;result=B.gM(handle,aSubPathNo,aMaxNoOfEdges
);return result;},Mv:function(aAngle){if(!this.path)this.Mw(1);var handle=this.path;
B.rI(handle,aAngle);},NU:function(){if(!this.path)return 1;var handle=this.path;
var result=0;result=B.aax(handle);return result;},Mw:function(aMaxNoOfSubPaths){
if(aMaxNoOfSubPaths<1)aMaxNoOfSubPaths=1;if(!!this.path&&(this.NU()===aMaxNoOfSubPaths
))return true;var handle=this.path;{B.e6(handle);handle=B.k_(aMaxNoOfSubPaths);}
this.path=handle;B.pe([this,this.I0],this);return!!this.path;},_Init:function(aArg
){this.__proto__=D.C3;B.h7++;},_Done:function(){this.C2();this.__proto__=null;B.
h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.K)&&(A._cycle!=E)
)A._Mark(A._cycle=E);},K:null,_cycle:0,_observers:null,_className:"Graphics::Path"
};D.H6={Left:0x1,RB:0x2,Right:0x4,QR:0x8,Q6:0x10};D.Rg={QQ:0,Ra:1,OI:2};D.Rf={Q0:
0,Ry:1,OI:2,RG:3};
D._Init=function(){D.Canvas.__proto__=B.acg.Q;};D._ReInit=function(){};D.Ci=function(
E){};return D;})();

/* Embedded Wizard */