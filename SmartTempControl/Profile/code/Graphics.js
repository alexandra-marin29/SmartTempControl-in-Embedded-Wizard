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
var AH=[0,0];var AR="Can not resize explicitly attached graphics engine bitmaps";
var B4=[0,0,0,0];var Ev="No graphics engine bitmap attached to this canvas";var D7=
"The canvas is already initialized with a graphics engine bitmap";var Dk="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var DG="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";
D.Canvas={G0:null,HO:B.wg,C1:0,It:false,CS:function(){if(this.It)this.DetachBitmap(
);},Ck:function(aArg){this.En=true;},L9:function(C){if((C[0]<=0)||(C[1]<=0))C=AH;
if(B.aaX(C,this.FrameSize))return;if(this.It)throw new Error(AR);this.FrameSize=
C;this.BL=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>0))&&(
this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;B._FreeBitmap(handle
);this.bitmap=null;},Update:function(){var A;if((!this.bitmap&&(this.FrameSize[0
]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=B._CreateBitmap(B._PIXEL_FORMAT_NATIVE
,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=
AH;this.FrameDelay=0;this.NoOfFrames=1;}this.HO=[].concat(AH,this.FrameSize);if(
!!this.bitmap){var dstFrameNr=this.C1;for(this.C1=this.NoOfFrames-1;this.C1>=0;this.
C1--)this.Km(this.HO,this.HO,0x00000000,0x00000000,0x00000000,0x00000000,false);
this.C1=dstFrameNr;}}if(!(((A=this.HO)[0]>=A[2])||(A[1]>=A[3])))this.HO=B4;},DetachBitmap:
function(){if(!this.It)throw new Error(Ev);this.bitmap=null;this.It=false;this.FrameSize=
AH;this.FrameDelay=0;this.NoOfFrames=1;this.BL=false;return this;},AttachBitmap:
function(aBitmap){if(!!this.bitmap)throw new Error(D7);if(!aBitmap)return this;this.
bitmap=aBitmap;this.It=true;var noOfFrames=1;var frameSize=AH;var frameDelay=0;{
noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;
}this.NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;
this.BL=(this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},LZ:function(aClip
,Li,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,Lk,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(aOffset<
0)aOffset=0;if((!Li||!Li.font)||((aOffset>0)&&(aOffset>=aString.length)))return;
var orient=0;if(Lk===1)orient=90;else if(Lk===2)orient=180;else if(Lk===3)orient=
270;var dstFrameNo=this.C1;var dstBitmap=this.bitmap;var srcFont=Li.font;{B.rz(dstBitmap
,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,aMinWidth,orient
,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Nt:function(aClip,aBitmap,aFrameNr
,aDstRect,Ht,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var A;if(!this.bitmap)this.
Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.bitmap)||!Ht)||(aFrameNr<
0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=
aBitmap.bitmap;var dstFrameNo=this.C1;var srcRect=[].concat(AH,aBitmap.FrameSize
);var left=((Ht&0x1)===0x1);var top=((Ht&0x2)===0x2);var right=((Ht&0x4)===0x4);
var bottom=((Ht&0x8)===0x8);var interior=((Ht&0x10)===0x10);{B.aab(dstBitmap,srcBitmap
,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right,bottom,interior,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},H$:function(aClip,Ll,aDstRect,aFlipY,aOffset
,aWidth,Pe,Pa,Pc,aMiterLimit,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(!Ll||!Ll.path)return;var
style=0;switch(Pe){case 1:style=1;break;case 3:style=2;break;case 2:style=3;break;
default:;}switch(Pa){case 1:style=style|256;break;case 3:style=style|512;break;case
2:style=style|768;break;default:;}switch(Pc){case 1:style=style|65536;break;case
2:style=style|131072;break;default:;}var dstBitmap=this.bitmap;var dstFrameNo=this.
C1;var path=Ll.path;{B.ab3(dstBitmap,path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset
,aWidth,style,aMiterLimit,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased
);}},Oq:function(aClip,aBitmap,aFrameNr,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2
,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1,aColor2,aColor3,aColor4
,aBlend,aFilter){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||
!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var Z=aDstX1;
var Ad=aDstX2;var Aa=aDstY1;var U=aDstY2;if(aDstX2<Z)Z=aDstX2;if(aDstX3<Z)Z=aDstX3;
if(aDstX4<Z)Z=aDstX4;if(aDstX2>Ad)Ad=aDstX2;if(aDstX3>Ad)Ad=aDstX3;if(aDstX4>Ad)
Ad=aDstX4;if(aDstY2<Aa)Aa=aDstY2;if(aDstY3<Aa)Aa=aDstY3;if(aDstY4<Aa)Aa=aDstY4;if(
aDstY2>U)U=aDstY2;if(aDstY3>U)U=aDstY3;if(aDstY4>U)U=aDstY4;if(((((Ad-Z)>4096)||((
Ad-Z)<-4096))||((U-Aa)>4096))||((U-Aa)<-4096)){B.ab5("%s",Dk);return;}var dstBitmap=
this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.C1;{B.ab6(dstBitmap
,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3
,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend
,aFilter);}},Om:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend,aFilter){if(!this.bitmap)this.Update();if(!this.bitmap
)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames
))return;var top=aDstRect[1];var left=aDstRect[0];var right=aDstRect[2];var bottom=
aDstRect[3];if(((((right-left)>4096)||((right-left)<-4096))||((bottom-top)>4096)
)||((bottom-top)<-4096)){B.ab5("%s",DG);return;}var dstBitmap=this.bitmap;var srcBitmap=
aBitmap.bitmap;var dstFrameNo=this.C1;{B.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr
,aClip,left,top,1,right,top,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend,aFilter);}},Op:function(aClip,aBitmap,aFrameNr,aDstRect
,aSrcRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(
aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.
bitmap;var dstFrameNr=this.C1;{B.gN(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip
,aDstRect,aSrcRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Np:function(
aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;
var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.C1;{B.db(dstBitmap,srcBitmap,dstFrameNr
,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},
Nu:function(aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.C1;{B.m6(dstBitmap,dstFrameNo,aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},Km:function(aClip,aDstRect,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
var dstBitmap=this.bitmap;var dstFrameNo=this.C1;{B.fR(dstBitmap,dstFrameNo,aClip
,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},_Init:function(aArg){B.
acg.O._Init.call(this,aArg);this.__proto__=D.Canvas;this.Ck(aArg);},_Done:function(
){this.CS();this.__proto__=B.acg.O;B.acg.O._Done.call(this);},_Mark:function(E){
var A;B.acg.O._Mark.call(this,E);if((A=this.G0)&&(A._cycle!=E))A._Mark(A._cycle=
E);},_className:"Graphics::Canvas"};D.Mi={ND:1,NE:0,NF:0,NG:0,NH:1,NI:0,Jc:0,Jd:
0,NJ:1,L3:0,Il:0,PA:true,I4:function(aX,aY){var HF=((aX*this.Jc)+(aY*this.Jd))+this.
L3;this.Il=HF;return true;},Nr:function(Jz,JC,JA,JD,Ln,Lo,JB,JE){var MB=JA-Ln;var
MD=JD-Lo;var MC=JB-Ln;var ME=JE-Lo;var M6=((Jz-JA)+Ln)-JB;var M7=((JC-JD)+Lo)-JE;
var Lt=(MB*ME)-(MD*MC);if(!Lt)return null;this.Jc=((M6*ME)-(M7*MC))/Lt;this.Jd=((
MB*M7)-(MD*M6))/Lt;this.NJ=0;this.L3=1;this.ND=(JA-Jz)+(this.Jc*JA);this.NE=(JB-
Jz)+(this.Jd*JB);this.NF=Jz;this.NG=(JD-JC)+(this.Jc*JD);this.NH=(JE-JC)+(this.Jd
*JE);this.NI=JC;this.PA=false;return this;},_Init:function(aArg){this.__proto__=
D.Mi;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){}
,_Mark:function(E){var A;if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null
,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"};D.CU={path:null,CS:
function(){if(!this.path)return;var handle=this.path;B.e6(handle);this.path=null;
},IP:function(As){B.we(this,0);},Ng:function(aSubPathNo,aCenterX,aCenterY,aRadiusX
,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges){B.pe([this,this.IP],this);var handle=
this.path;var result=0;{result=B.dU(handle,aSubPathNo,aCenterX,aCenterY,aRadiusX
,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges);}return result;},Nh:function(aSubPathNo
,aX,aY){B.pe([this,this.IP],this);var handle=this.path;var result=0;result=B.m5(
handle,aSubPathNo,aX,aY);return result;},Ha:function(aSubPathNo,aX,aY){B.pe([this
,this.IP],this);var handle=this.path;B.rt(handle,aSubPathNo,aX,aY);},L2:function(
aSubPathNo,aMaxNoOfEdges){if(!this.path&&!aSubPathNo)this.Mh(1);B.pe([this,this.
IP],this);var handle=this.path;var result=false;result=B.gM(handle,aSubPathNo,aMaxNoOfEdges
);return result;},Mg:function(aAngle){if(!this.path)this.Mh(1);var handle=this.path;
B.rI(handle,aAngle);},Nx:function(){if(!this.path)return 1;var handle=this.path;
var result=0;result=B.aax(handle);return result;},Mh:function(aMaxNoOfSubPaths){
if(aMaxNoOfSubPaths<1)aMaxNoOfSubPaths=1;if(!!this.path&&(this.Nx()===aMaxNoOfSubPaths
))return true;var handle=this.path;{B.e6(handle);handle=B.k_(aMaxNoOfSubPaths);}
this.path=handle;B.pe([this,this.IP],this);return!!this.path;},_Init:function(aArg
){this.__proto__=D.CU;B.h7++;},_Done:function(){this.CS();this.__proto__=null;B.
h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.L)&&(A._cycle!=E)
)A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:null,_className:"Graphics::Path"
};D.HK={Left:0x1,QM:0x2,Right:0x4,P2:0x8,Qf:0x10};D.Qr={P1:0,Ql:1,Ol:2};D.Qq={P$:
0,QJ:1,Ol:2,QR:3};
D._Init=function(){D.Canvas.__proto__=B.acg.O;};D._ReInit=function(){};D.B$=function(
E){};return D;})();

/* Embedded Wizard */