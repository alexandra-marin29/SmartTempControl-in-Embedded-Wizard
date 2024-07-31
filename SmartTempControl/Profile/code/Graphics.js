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
var B4=[0,0,0,0];var Ev="No graphics engine bitmap attached to this canvas";var D8=
"The canvas is already initialized with a graphics engine bitmap";var Dl="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var DH="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";
D.Canvas={G1:null,HR:B.wg,C1:0,Iu:false,CT:function(){if(this.Iu)this.DetachBitmap(
);},Cl:function(aArg){this.En=true;},Ma:function(C){if((C[0]<=0)||(C[1]<=0))C=AH;
if(B.aaX(C,this.FrameSize))return;if(this.Iu)throw new Error(AR);this.FrameSize=
C;this.BL=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>0))&&(
this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;B._FreeBitmap(handle
);this.bitmap=null;},Update:function(){var A;if((!this.bitmap&&(this.FrameSize[0
]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=B._CreateBitmap(B._PIXEL_FORMAT_NATIVE
,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=
AH;this.FrameDelay=0;this.NoOfFrames=1;}this.HR=[].concat(AH,this.FrameSize);if(
!!this.bitmap){var dstFrameNr=this.C1;for(this.C1=this.NoOfFrames-1;this.C1>=0;this.
C1--)this.Kn(this.HR,this.HR,0x00000000,0x00000000,0x00000000,0x00000000,false);
this.C1=dstFrameNr;}}if(!(((A=this.HR)[0]>=A[2])||(A[1]>=A[3])))this.HR=B4;},DetachBitmap:
function(){if(!this.Iu)throw new Error(Ev);this.bitmap=null;this.Iu=false;this.FrameSize=
AH;this.FrameDelay=0;this.NoOfFrames=1;this.BL=false;return this;},AttachBitmap:
function(aBitmap){if(!!this.bitmap)throw new Error(D8);if(!aBitmap)return this;this.
bitmap=aBitmap;this.Iu=true;var noOfFrames=1;var frameSize=AH;var frameDelay=0;{
noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;
}this.NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;
this.BL=(this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},L3:function(aClip
,Lm,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,Lo,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(aOffset<
0)aOffset=0;if((!Lm||!Lm.font)||((aOffset>0)&&(aOffset>=aString.length)))return;
var orient=0;if(Lo===1)orient=90;else if(Lo===2)orient=180;else if(Lo===3)orient=
270;var dstFrameNo=this.C1;var dstBitmap=this.bitmap;var srcFont=Lm.font;{B.rz(dstBitmap
,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,aMinWidth,orient
,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Nv:function(aClip,aBitmap,aFrameNr
,aDstRect,Hw,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var A;if(!this.bitmap)this.
Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.bitmap)||!Hw)||(aFrameNr<
0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=
aBitmap.bitmap;var dstFrameNo=this.C1;var srcRect=[].concat(AH,aBitmap.FrameSize
);var left=((Hw&0x1)===0x1);var top=((Hw&0x2)===0x2);var right=((Hw&0x4)===0x4);
var bottom=((Hw&0x8)===0x8);var interior=((Hw&0x10)===0x10);{B.aab(dstBitmap,srcBitmap
,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right,bottom,interior,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},Ic:function(aClip,Lp,aDstRect,aFlipY,aOffset
,aWidth,Pf,Pb,Pd,aMiterLimit,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(!Lp||!Lp.path)return;var
style=0;switch(Pf){case 1:style=1;break;case 3:style=2;break;case 2:style=3;break;
default:;}switch(Pb){case 1:style=style|256;break;case 3:style=style|512;break;case
2:style=style|768;break;default:;}switch(Pd){case 1:style=style|65536;break;case
2:style=style|131072;break;default:;}var dstBitmap=this.bitmap;var dstFrameNo=this.
C1;var path=Lp.path;{B.ab3(dstBitmap,path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset
,aWidth,style,aMiterLimit,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased
);}},Or:function(aClip,aBitmap,aFrameNr,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2
,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1,aColor2,aColor3,aColor4
,aBlend,aFilter){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||
!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var Z=aDstX1;
var Ad=aDstX2;var Aa=aDstY1;var U=aDstY2;if(aDstX2<Z)Z=aDstX2;if(aDstX3<Z)Z=aDstX3;
if(aDstX4<Z)Z=aDstX4;if(aDstX2>Ad)Ad=aDstX2;if(aDstX3>Ad)Ad=aDstX3;if(aDstX4>Ad)
Ad=aDstX4;if(aDstY2<Aa)Aa=aDstY2;if(aDstY3<Aa)Aa=aDstY3;if(aDstY4<Aa)Aa=aDstY4;if(
aDstY2>U)U=aDstY2;if(aDstY3>U)U=aDstY3;if(aDstY4>U)U=aDstY4;if(((((Ad-Z)>4096)||((
Ad-Z)<-4096))||((U-Aa)>4096))||((U-Aa)<-4096)){B.ab5("%s",Dl);return;}var dstBitmap=
this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.C1;{B.ab6(dstBitmap
,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3
,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend
,aFilter);}},On:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend,aFilter){if(!this.bitmap)this.Update();if(!this.bitmap
)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames
))return;var top=aDstRect[1];var left=aDstRect[0];var right=aDstRect[2];var bottom=
aDstRect[3];if(((((right-left)>4096)||((right-left)<-4096))||((bottom-top)>4096)
)||((bottom-top)<-4096)){B.ab5("%s",DH);return;}var dstBitmap=this.bitmap;var srcBitmap=
aBitmap.bitmap;var dstFrameNo=this.C1;{B.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr
,aClip,left,top,1,right,top,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend,aFilter);}},Oq:function(aClip,aBitmap,aFrameNr,aDstRect
,aSrcRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(
aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.
bitmap;var dstFrameNr=this.C1;{B.gN(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip
,aDstRect,aSrcRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Nr:function(
aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;
var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.C1;{B.db(dstBitmap,srcBitmap,dstFrameNr
,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},
Nw:function(aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.C1;{B.m6(dstBitmap,dstFrameNo,aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},Kn:function(aClip,aDstRect,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
var dstBitmap=this.bitmap;var dstFrameNo=this.C1;{B.fR(dstBitmap,dstFrameNo,aClip
,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},_Init:function(aArg){B.
acg.O._Init.call(this,aArg);this.__proto__=D.Canvas;this.Cl(aArg);},_Done:function(
){this.CT();this.__proto__=B.acg.O;B.acg.O._Done.call(this);},_Mark:function(E){
var A;B.acg.O._Mark.call(this,E);if((A=this.G1)&&(A._cycle!=E))A._Mark(A._cycle=
E);},_className:"Graphics::Canvas"};D.Mk={NF:1,NG:0,NH:0,NI:0,NJ:1,NK:0,Jd:0,Je:
0,NL:1,L7:0,Im:0,PB:true,I5:function(aX,aY){var HI=((aX*this.Jd)+(aY*this.Je))+this.
L7;this.Im=HI;return true;},Nt:function(JA,JD,JB,JE,Lr,Ls,JC,JF){var MD=JB-Lr;var
MF=JE-Ls;var ME=JC-Lr;var MG=JF-Ls;var M8=((JA-JB)+Lr)-JC;var M9=((JD-JE)+Ls)-JF;
var Lx=(MD*MG)-(MF*ME);if(!Lx)return null;this.Jd=((M8*MG)-(M9*ME))/Lx;this.Je=((
MD*M9)-(MF*M8))/Lx;this.NL=0;this.L7=1;this.NF=(JB-JA)+(this.Jd*JB);this.NG=(JC-
JA)+(this.Je*JC);this.NH=JA;this.NI=(JE-JD)+(this.Jd*JE);this.NJ=(JF-JD)+(this.Je
*JF);this.NK=JD;this.PB=false;return this;},_Init:function(aArg){this.__proto__=
D.Mk;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){}
,_Mark:function(E){var A;if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null
,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"};D.CU={path:null,CT:
function(){if(!this.path)return;var handle=this.path;B.e6(handle);this.path=null;
},IQ:function(As){B.we(this,0);},Ni:function(aSubPathNo,aCenterX,aCenterY,aRadiusX
,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges){B.pe([this,this.IQ],this);var handle=
this.path;var result=0;{result=B.dU(handle,aSubPathNo,aCenterX,aCenterY,aRadiusX
,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges);}return result;},Nj:function(aSubPathNo
,aX,aY){B.pe([this,this.IQ],this);var handle=this.path;var result=0;result=B.m5(
handle,aSubPathNo,aX,aY);return result;},Hb:function(aSubPathNo,aX,aY){B.pe([this
,this.IQ],this);var handle=this.path;B.rt(handle,aSubPathNo,aX,aY);},L6:function(
aSubPathNo,aMaxNoOfEdges){if(!this.path&&!aSubPathNo)this.Mj(1);B.pe([this,this.
IQ],this);var handle=this.path;var result=false;result=B.gM(handle,aSubPathNo,aMaxNoOfEdges
);return result;},Mi:function(aAngle){if(!this.path)this.Mj(1);var handle=this.path;
B.rI(handle,aAngle);},Nz:function(){if(!this.path)return 1;var handle=this.path;
var result=0;result=B.aax(handle);return result;},Mj:function(aMaxNoOfSubPaths){
if(aMaxNoOfSubPaths<1)aMaxNoOfSubPaths=1;if(!!this.path&&(this.Nz()===aMaxNoOfSubPaths
))return true;var handle=this.path;{B.e6(handle);handle=B.k_(aMaxNoOfSubPaths);}
this.path=handle;B.pe([this,this.IQ],this);return!!this.path;},_Init:function(aArg
){this.__proto__=D.CU;B.h7++;},_Done:function(){this.CT();this.__proto__=null;B.
h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.L)&&(A._cycle!=E)
)A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:null,_className:"Graphics::Path"
};D.HN={Left:0x1,QN:0x2,Right:0x4,P3:0x8,Qg:0x10};D.Qs={P2:0,Qm:1,Om:2};D.Qr={Qa:
0,QK:1,Om:2,QS:3};
D._Init=function(){D.Canvas.__proto__=B.acg.O;};D._ReInit=function(){};D.B$=function(
E){};return D;})();

/* Embedded Wizard */