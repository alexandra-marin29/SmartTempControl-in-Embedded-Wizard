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
);if(EmWiApp.acg)throw new Error("The unit file 'Resources.js' included twice!");
EmWiApp.acg=(function(){var B=EmWiApp;var D={};
var AH=[0,0];var AR="The property \'FrameSize\' is READ ONLY.";
D.O={bitmap:null,FrameDelay:0,NoOfFrames:1,FrameSize:B.wf,En:false,BL:false,CT:function(
){if(!this.bitmap)return;var handle=this.bitmap;B._FreeBitmap(handle);this.bitmap=
null;this.FrameSize=AH;this.FrameDelay=0;this.NoOfFrames=1;this.BL=false;},Cl:function(
aArg){if(!aArg)return;var handle=null;var noOfFrames=1;var frameSize=AH;var frameDelay=
0;{var bmp=B.aa3(aArg,this);if(bmp){noOfFrames=bmp.NoOfFrames;frameSize=bmp.FrameSize;
frameDelay=bmp.FrameDelay;}handle=bmp;}this.bitmap=handle;this.NoOfFrames=noOfFrames;
this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.En=true;this.BL=(!!this.
bitmap&&(this.FrameDelay>0))&&(this.NoOfFrames>1);},Ma:function(C){throw new Error(
AR);},Update:function(){},_Init:function(aArg){B.Core.E2._Init.call(this,aArg);this.
__proto__=D.O;this.Cl(aArg);},_Done:function(){this.CT();this.__proto__=B.Core.E2;
B.Core.E2._Done.call(this);},_className:"Resources::Bitmap"};D.BO={font:null,Leading:
0,Descent:0,Ascent:0,CT:function(){this.Px();},Cl:function(aArg){this.PC(aArg);}
,Px:function(){if(!this.font)return;var handle=this.font;B.aal(handle);this.font=
null;this.Ascent=0;this.Descent=0;this.Leading=0;},PC:function(aFontResource){if(
!aFontResource)return;var handle=null;var ascent=0;var descent=0;var leading=0;{
var font=B.aa5(aFontResource);if(font){ascent=font.Ascent;descent=font.Descent;leading=
font.Leading;}handle=font;}this.font=handle;this.Ascent=ascent;this.Descent=descent;
this.Leading=leading;},L5:function(aFlowString){if(!this.font)return 0;var handle=
this.font;var advance=0;advance=B.aav(handle,aFlowString);return advance;},Oh:function(
aString,aOffset,aWidth,aMaxNoOfRows,aBidi){if(aOffset<0)aOffset=0;if(!this.font||((
aOffset>0)&&(aOffset>=aString.length)))return B.jV;var handle=this.font;var result=
B.jV;result=B.abv(handle,aString,aOffset,aWidth,aMaxNoOfRows,aBidi);return result;
},HP:function(aString,aOffset,aCount){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>
0)&&(aOffset>=aString.length)))return 0;var handle=this.font;var advance=0;advance=
B.m9(handle,aString,aOffset,aCount);return advance;},_Init:function(aArg){B.Core.
E2._Init.call(this,aArg);this.__proto__=D.BO;this.Cl(aArg);},_Done:function(){this.
CT();this.__proto__=B.Core.E2;B.Core.E2._Done.call(this);},_className:"Resources::Font"
};D.Ko={_class:function(){return D.BO;},0:{Data:function(){return B.ack;},Cache:[
],_this:null}};
D._Init=function(){D.O.__proto__=B.Core.E2;D.BO.__proto__=B.Core.E2;};D._ReInit=function(
){};D.B$=function(E){var A;if((A=D.Ko[0]._this)&&(A._cycle!=E))A._Done(D.Ko[0]._this=
null);};return D;})();

/* Embedded Wizard */