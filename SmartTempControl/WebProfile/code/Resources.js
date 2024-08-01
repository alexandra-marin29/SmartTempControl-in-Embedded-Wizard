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
var AI=[0,0];var AU="The property \'FrameSize\' is READ ONLY.";
D.S={bitmap:null,FrameDelay:0,NoOfFrames:1,FrameSize:B.wf,EG:false,B1:false,C6:function(
){if(!this.bitmap)return;var handle=this.bitmap;B._FreeBitmap(handle);this.bitmap=
null;this.FrameSize=AI;this.FrameDelay=0;this.NoOfFrames=1;this.B1=false;},Cy:function(
aArg){if(!aArg)return;var handle=null;var noOfFrames=1;var frameSize=AI;var frameDelay=
0;{var bmp=B.aa3(aArg,this);if(bmp){noOfFrames=bmp.NoOfFrames;frameSize=bmp.FrameSize;
frameDelay=bmp.FrameDelay;}handle=bmp;}this.bitmap=handle;this.NoOfFrames=noOfFrames;
this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.EG=true;this.B1=(!!this.
bitmap&&(this.FrameDelay>0))&&(this.NoOfFrames>1);},Mx:function(C){throw new Error(
AU);},Update:function(){},_Init:function(aArg){B.Core.Fk._Init.call(this,aArg);this.
__proto__=D.S;this.Cy(aArg);},_Done:function(){this.C6();this.__proto__=B.Core.Fk;
B.Core.Fk._Done.call(this);},_className:"Resources::Bitmap"};D.BP={font:null,Leading:
0,Descent:0,Ascent:0,C6:function(){this.QW();},Cy:function(aArg){this.Q1(aArg);}
,QW:function(){if(!this.font)return;var handle=this.font;B.aal(handle);this.font=
null;this.Ascent=0;this.Descent=0;this.Leading=0;},Q1:function(aFontResource){if(
!aFontResource)return;var handle=null;var ascent=0;var descent=0;var leading=0;{
var font=B.aa5(aFontResource);if(font){ascent=font.Ascent;descent=font.Descent;leading=
font.Leading;}handle=font;}this.font=handle;this.Ascent=ascent;this.Descent=descent;
this.Leading=leading;},Mq:function(aFlowString){if(!this.font)return 0;var handle=
this.font;var advance=0;advance=B.aav(handle,aFlowString);return advance;},OV:function(
aString,aOffset,aWidth,aMaxNoOfRows,aBidi){if(aOffset<0)aOffset=0;if(!this.font||((
aOffset>0)&&(aOffset>=aString.length)))return B.jV;var handle=this.font;var result=
B.jV;result=B.abv(handle,aString,aOffset,aWidth,aMaxNoOfRows,aBidi);return result;
},If:function(aString,aOffset,aCount){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>
0)&&(aOffset>=aString.length)))return 0;var handle=this.font;var advance=0;advance=
B.m9(handle,aString,aOffset,aCount);return advance;},_Init:function(aArg){B.Core.
Fk._Init.call(this,aArg);this.__proto__=D.BP;this.Cy(aArg);},_Done:function(){this.
C6();this.__proto__=B.Core.Fk;B.Core.Fk._Done.call(this);},_className:"Resources::Font"
};D.KI={_class:function(){return D.BP;},0:{Data:function(){return B.acl;},Cache:[
],_this:null}};D.Jr={_class:function(){return D.BP;},0:{Data:function(){return B.
ack;},Cache:[],_this:null}};
D._Init=function(){D.S.__proto__=B.Core.Fk;D.BP.__proto__=B.Core.Fk;};D._ReInit=function(
){};D.Cn=function(E){var A;if((A=D.KI[0]._this)&&(A._cycle!=E))A._Done(D.KI[0]._this=
null);if((A=D.Jr[0]._this)&&(A._cycle!=E))A._Done(D.Jr[0]._this=null);};return D;
})();

/* Embedded Wizard */