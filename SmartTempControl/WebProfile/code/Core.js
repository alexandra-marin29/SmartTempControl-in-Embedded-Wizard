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
);if(EmWiApp.Core)throw new Error("The unit file 'Core.js' included twice!");EmWiApp.
Core=(function(){var B=EmWiApp;var D={};
var AG=[0,0];var AZ=[0,0,0,0];var Cd="The view does not belong to this group";var
Et=[800,480];var DB="The dialog component is already presented";var Eu="No fader to perform the fade-in/out operation";
var Ev="Trying to use the same fader twice";var E1="Trying to fade-in/out a group which belongs to another owner";
var Gj="No view to restack";var HM="View is not in this group";var JN="No view to remove";
var JO="No view to add";var JP="View already in a group";var JQ="Recursive invalidate during active update cycle.";
var HN=[-8,-8,9,9];var HO=[0,0,1,1];var IT="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";var JR="Trying to cancel a task not belonging to this queue!";
var JS="Trying to enqueue a task twice!";
D.Cq={Z:null,X:null,G:null,A$:null,F:0x103,DA:0,Cm:0x14,J$:function(As,Lb){},IN:function(
C){if(this.DA===C)return;this.DA=C;if(!!this.G){var Gw=this.Z;var An=0;while(!!Gw&&(
C>Gw.DA)){Gw=Gw.Z;An=An+1;}Gw=this.X;while(!!Gw&&(C<Gw.DA)){Gw=Gw.X;An=An-1;}if(
!!An)this.G.QG(this,An);}},IM:function(C){var A;var An=C^this.Cm;if(!An)return;this.
Cm=C;if(!!this.A$&&!((this.F&0x400)===0x400)){this.G.F=this.G.F|0x5000;B.pe([A=this.
G,A.CH],this);this.G.Ag([0,0,(A=this.G.Q)[2]-A[0],A[3]-A[1]]);}if(!!this.A$&&((this.
F&0x400)===0x400)){this.A$.H_.F=this.A$.H_.F|0x1000;this.G.F=this.G.F|0x4000;B.pe([
A=this.G,A.CH],this);}},Jd:function(){var Av=this.G;while(!!Av){var DN=(D.Root.isPrototypeOf(
Av)?Av:null);if(!!DN)return DN;Av=Av.G;}return null;},CJ:function(AT,aClip,aOffset
,AE,aBlend){},GetClipping:function(){return this.GetExtent();},BG:function(AK){return null;
},FM:function(Az,W,CR,Fy,FC,HW){return null;},KA:function(Az){return Az;},KC:function(
As,DD){return AG;},Mq:function(aOffset,La){},GetExtent:function(){return AZ;},AB:
function(C$,DC){var A;if(((this.F&0x200)===0x200))C$=C$&~0x400;var Nz=(this.F&~DC
)|C$;var D7=Nz^this.F;this.F=Nz;if(!!this.G&&!!(D7&0x14)){var OW=((this.F&0x14)===
0x14);if(OW&&!this.G.CB)this.G.Dy(this);if(!OW&&(this.G.CB===this))this.G.Dy(this.
G.NV(this,0x14));}if(!!this.G&&!!(D7&0x403))this.G.Ag(this.GetClipping());if(((!
!this.A$&&!!this.G)&&((Nz&0x400)===0x400))&&((D7&0x1)===0x1)){this.F=this.F|0x800;
this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CH],this);}if(!!this.G&&((D7&0x400)===
0x400)){this.A$=null;this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G
,A.CH],this);}if(((((D7&0x100000)===0x100000)&&((DC&0x100000)===0x100000))&&((this.
F&0x10)===0x10))&&!((this.F&0x200080)===0x200080))this.AB(0x0,0x10);if(((((D7&0x100000
)===0x100000)&&((C$&0x100000)===0x100000))&&!((this.F&0x10)===0x10))&&(!((this.F&
0x200000)===0x200000)||((!((this.F&0x80)===0x80)&&!!this.G)&&((this.G.F&0x10)===
0x10))))this.AB(0x10,0x0);if(((((D7&0x200000)===0x200000)&&((DC&0x200000)===0x200000
))&&!((this.F&0x10)===0x10))&&((this.F&0x100000)===0x100000))this.AB(0x10,0x0);if((((((
D7&0x200000)===0x200000)&&((C$&0x200000)===0x200000))&&((this.F&0x100010)===0x100010
))&&!((this.F&0x80)===0x80))&&((!!this.G&&!((this.G.F&0x10)===0x10))||((((this.F&
0x10000)===0x10000)&&!!this.G)&&(this.G.Bk.Ba!==this))))this.AB(0x0,0x10);},_Init:
function(aArg){this.__proto__=D.Cq;B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.Z)&&(A._cycle!=
E))A._Mark(A._cycle=E);if((A=this.X)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.
G)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.A$)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.J)&&(A._cycle!=E))A._Mark(A._cycle=E);},J:null,_cycle:0,_observers:
null,_className:"Core::View"};D.EV={BR:B.wf,Cp:B.wf,BQ:B.wf,Co:B.wf,J$:function(
As,Lb){var Au=B._NewObject(D.KQ,0);this.A$=null;Au.CW=this.GetExtent();Au.Ax=As;
Au.H_=Lb;Au.Kp=this.Co;Au.Kq=this.BQ;Au.Kr=this.Cp;Au.Ks=this.BR;this.A$=Au;},KC:
function(As,DD){var A;var Bg=this.Cm;var Au=(D.KQ.isPrototypeOf(A=this.A$)?A:null
);var Ae=Au.CW[0];var Af=Au.CW[1];var Ah=Au.CW[2];var Aa=Au.CW[3];var CV=[As[2]-
As[0],As[3]-As[1]];var A9=Ah-Ae;var A1=Aa-Af;if(!DD){var D$=[(A=Au.Ax)[2]-A[0],A[
3]-A[1]];Ae=Ae-Au.Ax[0];Af=Af-Au.Ax[1];if(D$[0]!==CV[0]){var Bx=((Bg&0x4)===0x4);
var By=((Bg&0x8)===0x8);var Fb=((Bg&0x1)===0x1);if(!Bx&&(Fb||!By))Ae=((Ae*CV[0])
/D$[0])|0;if(!By&&(Fb||!Bx)){Ah=Ah-Au.Ax[0];Ah=((Ah*CV[0])/D$[0])|0;Ah=Ah-CV[0];
}else Ah=Ah-Au.Ax[2];Ae=Ae+As[0];Ah=Ah+As[2];if(!Fb){if(Bx&&!By)Ah=Ae+A9;else if(
!Bx&&By)Ae=Ah-A9;else{Ae=Ae+((((Ah-Ae)-A9)/2)|0);Ah=Ae+A9;}}}else{Ah=Ah-Au.Ax[2];
Ae=Ae+As[0];Ah=Ah+As[2];}if(D$[1]!==CV[1]){var Bz=((Bg&0x10)===0x10);var Bw=((Bg&
0x20)===0x20);var Fc=((Bg&0x2)===0x2);if(!Bz&&(Fc||!Bw))Af=((Af*CV[1])/D$[1])|0;
if(!Bw&&(Fc||!Bz)){Aa=Aa-Au.Ax[1];Aa=((Aa*CV[1])/D$[1])|0;Aa=Aa-CV[1];}else Aa=Aa-
Au.Ax[3];Af=Af+As[1];Aa=Aa+As[3];if(!Fc){if(Bz&&!Bw)Aa=Af+A1;else if(!Bz&&Bw)Af=
Aa-A1;else{Af=Af+((((Aa-Af)-A1)/2)|0);Aa=Af+A1;}}}else{Aa=Aa-Au.Ax[3];Af=Af+As[1
];Aa=Aa+As[3];}}else{switch(DD){case 3:{Ae=As[0];Ah=Ae+A9;}break;case 4:{Ah=As[2
];Ae=Ah-A9;}break;case 1:{Af=As[1];Aa=Af+A1;}break;case 2:{Aa=As[3];Af=Aa-A1;}break;
default:;}if((DD===3)||(DD===4)){var Bz=((Bg&0x10)===0x10);var Bw=((Bg&0x20)===0x20
);var Fc=((Bg&0x2)===0x2);if(Fc){Af=As[1];Aa=As[3];}else if(Bz&&!Bw){Af=As[1];Aa=
Af+A1;}else if(Bw&&!Bz){Aa=As[3];Af=Aa-A1;}else{Af=As[1]+((((As[3]-As[1])-A1)/2)|
0);Aa=Af+A1;}}if((DD===1)||(DD===2)){var Bx=((Bg&0x4)===0x4);var By=((Bg&0x8)===
0x8);var Fb=((Bg&0x1)===0x1);if(Fb){Ae=As[0];Ah=As[2];}else if(Bx&&!By){Ae=As[0];
Ah=Ae+A9;}else if(By&&!Bx){Ah=As[2];Ae=Ah-A9;}else{Ae=As[0]+((((As[2]-As[0])-A9)
/2)|0);Ah=Ae+A9;}}}Au.isEmpty=(Ae>=Ah)||(Af>=Aa);A9=(Ah-Ae)-1;A1=(Aa-Af)-1;var Gq=
Au.CW[0];var Gr=Au.CW[1];var FG=(Au.CW[2]-Gq)-1;var FF=(Au.CW[3]-Gr)-1;if(!FG)FG=
1;if(!FF)FF=1;if(((this.F&0x100)===0x100)){this.Co=[Ae+((((Au.Kp[0]-Gq)*A9)/FG)|
0),Af+((((Au.Kp[1]-Gr)*A1)/FF)|0)];this.BQ=[Ae+((((Au.Kq[0]-Gq)*A9)/FG)|0),Af+((((
Au.Kq[1]-Gr)*A1)/FF)|0)];this.Cp=[Ae+((((Au.Kr[0]-Gq)*A9)/FG)|0),Af+((((Au.Kr[1]-
Gr)*A1)/FF)|0)];this.BR=[Ae+((((Au.Ks[0]-Gq)*A9)/FG)|0),Af+((((Au.Ks[1]-Gr)*A1)/
FF)|0)];}else{this.B2([Ae+((((Au.Kp[0]-Gq)*A9)/FG)|0),Af+((((Au.Kp[1]-Gr)*A1)/FF
)|0)]);this.B3([Ae+((((Au.Kq[0]-Gq)*A9)/FG)|0),Af+((((Au.Kq[1]-Gr)*A1)/FF)|0)]);
this.B4([Ae+((((Au.Kr[0]-Gq)*A9)/FG)|0),Af+((((Au.Kr[1]-Gr)*A1)/FF)|0)]);this.B5([
Ae+((((Au.Ks[0]-Gq)*A9)/FG)|0),Af+((((Au.Ks[1]-Gr)*A1)/FF)|0)]);this.A$=Au;}return[
A9+1,A1+1];},Mq:function(aOffset,La){if(La){this.Co=B.abf(this.Co,aOffset);this.
BQ=B.abf(this.BQ,aOffset);this.Cp=B.abf(this.Cp,aOffset);this.BR=B.abf(this.BR,aOffset
);}else{this.B2(B.abf(this.Co,aOffset));this.B3(B.abf(this.BQ,aOffset));this.B4(
B.abf(this.Cp,aOffset));this.B5(B.abf(this.BR,aOffset));}},GetExtent:function(){
if(!!this.A$&&this.A$.isEmpty)return AZ;var Ae=this.Co[0];var Af=this.Co[1];var Ah=
this.Cp[0];var Aa=this.Cp[1];if((((this.BR[0]!==Ae)||(this.BQ[1]!==Af))||(this.BQ[
0]!==Ah))||(this.BR[1]!==Aa)){if(this.BQ[0]<Ae)Ae=this.BQ[0];if(this.Cp[0]<Ae)Ae=
this.Cp[0];if(this.BR[0]<Ae)Ae=this.BR[0];if(this.BQ[1]<Af)Af=this.BQ[1];if(this.
Cp[1]<Af)Af=this.Cp[1];if(this.BR[1]<Af)Af=this.BR[1];if(this.Co[0]>Ah)Ah=this.Co[
0];if(this.BQ[0]>Ah)Ah=this.BQ[0];if(this.BR[0]>Ah)Ah=this.BR[0];if(this.Co[1]>Aa
)Aa=this.Co[1];if(this.BQ[1]>Aa)Aa=this.BQ[1];if(this.BR[1]>Aa)Aa=this.BR[1];}else{
var tmp;if(Ah<Ae){tmp=Ae;Ae=Ah;Ah=tmp;}if(Aa<Af){tmp=Af;Af=Aa;Aa=tmp;}}return[Ae
,Af,Ah+1,Aa+1];},B5:function(C){var A;if(B.aaX(C,this.BR))return;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ag(this.GetClipping());this.A$=null;this.BR=C;if(!!this.
G&&((this.F&0x1)===0x1))this.G.Ag(this.GetClipping());if((!!this.G&&((this.F&0x400
)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.
F|0x4000;B.pe([A=this.G,A.CH],this);}},B4:function(C){var A;if(B.aaX(C,this.Cp))
return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.GetClipping());this.A$=null;
this.Cp=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.GetClipping());if((!!
this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|
0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CH],this);}},B3:function(C){var A;
if(B.aaX(C,this.BQ))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.GetClipping(
));this.A$=null;this.BQ=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.GetClipping(
));if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CH],this);}},B2:function(
C){var A;if(B.aaX(C,this.Co))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(
this.GetClipping());this.A$=null;this.Co=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ag(this.GetClipping());if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000
)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CH],this
);}},Me:function(HV){var Bf=B.abi(4,B.wf,null);var M=0;var Bn=3;var No=false;var
Np=false;Bf.Set(0,this.Co);Bf.Set(1,this.BQ);Bf.Set(2,this.Cp);Bf.Set(3,this.BR);
while(M<4){var Pt=Bf.Get(M)[0];var LQ=Bf.Get(M)[1];var Te=Bf.Get(Bn)[0];var NN=Bf.
Get(Bn)[1];if(((LQ>HV[1])!==(NN>HV[1]))||((LQ<HV[1])!==(NN<HV[1]))){var Ie=((((Te-
Pt)*(HV[1]-LQ))/(NN-LQ))|0)+Pt;if(HV[0]>Ie)No=!No;if(HV[0]<Ie)Np=!Np;}Bn=M;M=M+1;
}return No||Np;},PW:function(){return((((this.Co[0]===this.BR[0])&&(this.BQ[0]===
this.Cp[0]))&&(this.Co[1]===this.BQ[1]))&&(this.Cp[1]===this.BR[1]))||((((this.Co[
0]===this.BQ[0])&&(this.Cp[0]===this.BR[0]))&&(this.Co[1]===this.BR[1]))&&(this.
BQ[1]===this.Cp[1]));},_Init:function(aArg){D.Cq._Init.call(this,aArg);this.__proto__=
D.EV;},_className:"Core::QuadView"};D.AX={Q:B.wg,J$:function(As,Lb){var Au=B._NewObject(
D.KP,0);Au.CW=this.Q;Au.Ax=As;Au.H_=Lb;this.A$=Au;},KC:function(As,DD){var A;var
Bg=this.Cm;var Au=this.A$;var Ae=Au.CW[0];var Af=Au.CW[1];var Ah=Au.CW[2];var Aa=
Au.CW[3];var CV=[As[2]-As[0],As[3]-As[1]];var A9=Ah-Ae;var A1=Aa-Af;if(!DD){var D$=[(
A=Au.Ax)[2]-A[0],A[3]-A[1]];Ae=Ae-Au.Ax[0];Af=Af-Au.Ax[1];if(D$[0]!==CV[0]){var Bx=((
Bg&0x4)===0x4);var By=((Bg&0x8)===0x8);var Fb=((Bg&0x1)===0x1);if(!Bx&&(Fb||!By)
)Ae=((Ae*CV[0])/D$[0])|0;if(!By&&(Fb||!Bx)){Ah=Ah-Au.Ax[0];Ah=((Ah*CV[0])/D$[0])|
0;Ah=Ah-CV[0];}else Ah=Ah-Au.Ax[2];Ae=Ae+As[0];Ah=Ah+As[2];if(!Fb){if(Bx&&!By)Ah=
Ae+A9;else if(!Bx&&By)Ae=Ah-A9;else{Ae=Ae+((((Ah-Ae)-A9)/2)|0);Ah=Ae+A9;}}}else{
Ah=Ah-Au.Ax[2];Ae=Ae+As[0];Ah=Ah+As[2];}if(D$[1]!==CV[1]){var Bz=((Bg&0x10)===0x10
);var Bw=((Bg&0x20)===0x20);var Fc=((Bg&0x2)===0x2);if(!Bz&&(Fc||!Bw))Af=((Af*CV[
1])/D$[1])|0;if(!Bw&&(Fc||!Bz)){Aa=Aa-Au.Ax[1];Aa=((Aa*CV[1])/D$[1])|0;Aa=Aa-CV[
1];}else Aa=Aa-Au.Ax[3];Af=Af+As[1];Aa=Aa+As[3];if(!Fc){if(Bz&&!Bw)Aa=Af+A1;else
if(!Bz&&Bw)Af=Aa-A1;else{Af=Af+((((Aa-Af)-A1)/2)|0);Aa=Af+A1;}}}else{Aa=Aa-Au.Ax[
3];Af=Af+As[1];Aa=Aa+As[3];}}else{switch(DD){case 3:{Ae=As[0];Ah=Ae+A9;}break;case
4:{Ah=As[2];Ae=Ah-A9;}break;case 1:{Af=As[1];Aa=Af+A1;}break;case 2:{Aa=As[3];Af=
Aa-A1;}break;default:;}if((DD===3)||(DD===4)){var Bz=((Bg&0x10)===0x10);var Bw=((
Bg&0x20)===0x20);var Fc=((Bg&0x2)===0x2);if(Fc){Af=As[1];Aa=As[3];}else if(Bz&&!
Bw){Af=As[1];Aa=Af+A1;}else if(Bw&&!Bz){Aa=As[3];Af=Aa-A1;}else{Af=As[1]+((((As[
3]-As[1])-A1)/2)|0);Aa=Af+A1;}}if((DD===1)||(DD===2)){var Bx=((Bg&0x4)===0x4);var
By=((Bg&0x8)===0x8);var Fb=((Bg&0x1)===0x1);if(Fb){Ae=As[0];Ah=As[2];}else if(Bx&&
!By){Ae=As[0];Ah=Ae+A9;}else if(By&&!Bx){Ah=As[2];Ae=Ah-A9;}else{Ae=As[0]+((((As[
2]-As[0])-A9)/2)|0);Ah=Ae+A9;}}}Au.isEmpty=(Ae>=Ah)||(Af>=Aa);if(((this.F&0x100)===
0x100))this.Q=[Ae,Af,Ah,Aa];else{this.R([Ae,Af,Ah,Aa]);this.A$=Au;}return[Ah-Ae,
Aa-Af];},Mq:function(aOffset,La){if(La)this.Q=B.abh(this.Q,aOffset);else this.R(
B.abh(this.Q,aOffset));},GetExtent:function(){return this.Q;},R:function(C){var A;
if(B.aaY(C,this.Q))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.GetClipping(
));this.A$=null;this.Q=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.GetClipping(
));if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CH],this);}},_Init:function(
aArg){D.Cq._Init.call(this,aArg);this.__proto__=D.AX;},_className:"Core::RectView"
};D.H={AO:null,AS:null,Lv:null,Bk:null,D8:null,H$:null,CB:null,Bi:255,J7:0,J_:0,
J9:0,J8:0,CM:function(aArg){this.Bt();},CJ:function(AT,aClip,aOffset,AE,aBlend){
var A;AE=((AE+1)*this.Bi)>>8;aBlend=aBlend&&((this.F&0x2)===0x2);this.SG(AT,aClip
,B.abf(aOffset,this.Q.slice(0,2)),AE,aBlend);},GetClipping:function(){var A;var N=
this.Q;N=[].concat(N[0]-this.J8,N.slice(1,4));N=B.abP(N,N[1]-this.J_);N=B.abN(N,
N[2]+this.J9);N=[].concat(N.slice(0,3),N[3]+this.J7);if(((this.F&0x80000)===0x80000
)){var Ib=AZ;var K;for(K=this.AO;!!K;K=K.Z)if(((K.F&0x1)===0x1))Ib=B.wC(Ib,K.GetClipping(
));N=B.wC(N,B.abh(Ib,this.Q.slice(0,2)));}return N;},FM:function(Az,W,CR,Fy,FC,HW
){var A;var K=this.AS;var H3=null;var Y=AZ;var Dc=null;var Nv=!!this.D8&&(!!this.
D8.Bj||!!this.D8.AO);if(((A=B.lb(Az,this.Q))[0]>=A[2])||(A[1]>=A[3]))return null;
Az=B.abg(Az,this.Q.slice(0,2));if(!!FC){K=FC;while(!!K&&(K.G!==this))K=K.G;}while(
!!K){if(((K.F&0x400)===0x400)&&!Dc){Dc=K.X;while(!!Dc&&!((Dc.F&0x200)===0x200))Dc=
Dc.X;if(!!Dc)Y=B.lb(Az,Dc.GetExtent());else Y=AZ;}if(Dc===K){Dc=null;Y=AZ;}if((!
!Fy&&!!(D.H.isPrototypeOf(K)?K:null))||((((((K.F&0x8)===0x8)&&((K.F&0x10)===0x10
))&&!((K.F&0x40000)===0x40000))&&!((K.F&0x20000)===0x20000))&&(!((K.F&0x10000)===
0x10000)||((this.Bk.Ba===K)&&!Nv)))){var CW=K.GetExtent();var Lo=Fy;var H0=null;
if(Lo===K)Lo=null;if(((K.F&0x400)===0x400)){if(!(((A=B.lb(CW,Y))[0]>=A[2])||(A[1
]>=A[3])))H0=K.FM(Y,W,CR,Lo,FC,HW);}else if(!(((A=B.lb(CW,Az))[0]>=A[2])||(A[1]>=
A[3]))||(Fy===K))H0=K.FM(Az,W,CR,Lo,FC,HW);K=K.X;if(!!H0){if(!H3||((H0.I_<H3.I_)&&(
H0.I_>=0)))H3=H0;if(!H0.I_)K=null;}}else K=K.X;FC=null;}return H3;},KA:function(
Az){var A;var U;var K=this.AO;var HY=AZ;var Kn=true;var result=(Az=U=B.abg(Az,this.
Q.slice(0,2)),U);while(!!K){if(((K.F&0x200)===0x200)){var I2=(D.Jw.isPrototypeOf(
K)?K:null);HY=B.lb(Az,I2.Q);Kn=((I2.F&0x1)===0x1);}if(((K.F&0x1)===0x1)){if(((K.
F&0x400)===0x400)){if(Kn){var Y=B.lb(K.GetClipping(),HY);if(!((Y[0]>=Y[2])||(Y[1
]>=Y[3])))result=B.wC(result,K.KA(Y));}}else{var Y=B.lb(K.GetClipping(),Az);if(!((
Y[0]>=Y[2])||(Y[1]>=Y[3])))result=B.wC(result,K.KA(Y));}}K=K.Z;}return B.lb(B.abh(
result,this.Q.slice(0,2)),this.Q);},AB:function(C$,DC){var A;var Lz=this.F;if((!
!this.G&&((this.F&0x80001)===0x80001))&&((DC&0x80000)===0x80000))this.G.Ag(this.
GetClipping());D.AX.AB.call(this,C$,DC);if(((!!this.G&&((this.F&0x1)===0x1))&&((
C$&0x80000)===0x80000))&&!((Lz&0x80000)===0x80000))this.G.Ag(this.GetClipping());
var D7=this.F^Lz;if(!!this.CB&&((D7&0x40)===0x40)){if(((this.F&0x40)===0x40))this.
CB.AB(0x40,0x0);else this.CB.AB(0x0,0x40);}if(!!this.Bk&&((D7&0x40)===0x40)){if(((
this.F&0x40)===0x40)&&((this.Bk.Ba.F&0x14)===0x14))this.Bk.Ba.AB(0x40,0x0);else this.
Bk.Ba.AB(0x0,0x40);}if(((D7&0x10)===0x10)){var K;for(K=this.AO;!!K;K=K.Z)if((((K.
F&0x300000)===0x300000)&&!((K.F&0x80)===0x80))&&(!((K.F&0x10000)===0x10000)||(this.
Bk.Ba===K)))K.AB(C$&0x10,DC&0x10);}if(!!D7){this.F=this.F|0x8000;B.pe([this,this.
LO],this);}},R:function(C){var A;if(B.aaY(C,this.Q))return;var G3=[(A=this.Q)[2]-
A[0],A[3]-A[1]];var Ny=[C[2]-C[0],C[3]-C[1]];var I3=!B.aaX(G3,Ny);D.AX.R.call(this
,C);if((I3&&(G3[0]>0))&&(G3[1]>0)){var Ax=[].concat(AG,G3);var K=this.AO;while(!
!K){if((!K.A$&&(K.Cm!==0x14))&&!((K.F&0x400)===0x400))K.J$(Ax,null);K=K.Z;}}if(I3
){this.F=this.F|0x5000;B.pe([this,this.LO],this);}},Pb:function(AK){var OZ=(D.KeyEvent.
isPrototypeOf(AK)?AK:null);var Ey=this.Lv;if(!OZ)return null;while(!!Ey&&(!Ey.AM||
!Ey.BG(OZ)))Ey=Ey.Z;return Ey;},SG:function(AT,aClip,aOffset,AE,aBlend){var A;var
K=this.AO;var HY=AZ;var Kn=true;this.PN(AT,aClip,aOffset,AE,aBlend);while(!!K){if(((
K.F&0x200)===0x200)){var I2=(D.Jw.isPrototypeOf(K)?K:null);Kn=((I2.F&0x1)===0x1);
HY=aClip;if(!((I2.F&0x80000)===0x80000))HY=B.lb(HY,B.abh(I2.Q,aOffset));}if(((K.
F&0x1)===0x1)){if(((K.F&0x400)===0x400)){if(Kn){var Y=B.lb(B.abh(K.GetClipping()
,aOffset),HY);if(!((Y[0]>=Y[2])||(Y[1]>=Y[3])))K.CJ(AT,Y,aOffset,AE,aBlend);}}else{
var Y=B.lb(B.abh(K.GetClipping(),aOffset),aClip);if(!((Y[0]>=Y[2])||(Y[1]>=Y[3])
))K.CJ(AT,Y,aOffset,AE,aBlend);}}K=K.Z;}this.PQ(AT,aClip,aOffset,AE,aBlend);},S4:
function(){var A;var Nm=((this.F&0x1000)===0x1000);var Gs=[0,0,(A=this.Q)[2]-A[0
],A[3]-A[1]];var FH=false;var IY=AZ;var Nk=AZ;var K=this.AS;var Dc=null;while(!!
K){if(((K.F&0x800)===0x800)){FH=true;K.F=K.F&~0x800;}if(FH&&((K.F&0x200)===0x200
))FH=false;K=K.X;}FH=false;K=this.AO;if(Nm){this.F=this.F&~0x1000;Nm=!((Gs[0]>=Gs[
2])||(Gs[1]>=Gs[3]));}this.F=this.F|0x2000;while(!!K){if(((K.F&0x400)===0x400)){
if(!!K.A$&&(K.A$.H_!==Dc))K.A$=null;if((!K.A$&&FH)&&(K.Cm!==0x14))K.J$(Nk,Dc);}if(
!!K.A$){if(Nm&&!((K.F&0x400)===0x400))K.KC(Gs,0);if(FH&&((K.F&0x400)===0x400))K.
KC(Nk,0);}if(((K.F&0x200)===0x200)){FH=((K.F&0x1000)===0x1000);Dc=(D.Jw.isPrototypeOf(
K)?K:null);if(FH){K.F=K.F&~0x1000;IY=Dc.Q;Nk=IY;FH=!((IY[0]>=IY[2])||(IY[1]>=IY[
3]));}if(FH)this.Ag(Dc.Q);}K=K.Z;}this.F=this.F&~0x2000;this.K_([Gs[2]-Gs[0],Gs[
3]-Gs[1]]);},CH:function(Ab){B.pe([this,this.LO],this);},LO:function(Ab){var A;var
Tc=((this.F&0x1000)===0x1000);if(((this.F&0x4000)===0x4000)){this.F=this.F&~0x4000;
this.S4();}if(((this.F&0x8000)===0x8000)||Tc){this.F=this.F&~0x8000;this.Gh(this.
F);}},Dy:function(C){var A;if(!!C&&(C.G!==this))throw new Error(Cd);if(!!C&&!((C.
F&0x14)===0x14))C=null;if(!!C&&((C.F&0x10000)===0x10000))C=null;if(C===this.CB)return;
if(!!this.CB)this.CB.AB(0x0,0x60);this.CB=C;if(!!C){if(((this.F&0x40)===0x40))C.
AB(0x60,0x0);else C.AB(0x20,0x0);}},Ao:function(C){if(C)this.AB(0x100000,0x0);else
this.AB(0x0,0x100000);},Bd:function(C){var A;if(C>255)C=255;if(C<0)C=0;if(C===this.
Bi)return;this.Bi=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.GetClipping(
));},Oy:function(Td){this.Bd(Td);},Ek:function(){var A;return((this.F&0x1)===0x1
);},B6:function(C){if(C)this.AB(0x1,0x0);else this.AB(0x0,0x1);},ExtendClipping:
function(HR,HS,HT,HQ){var A;var J0=this.Q;var Da=J0;if(HR<0)HR=0;if(HR>255)HR=255;
if(HS<0)HS=0;if(HS>255)HS=255;if(HT<0)HT=0;if(HT>255)HT=255;if(HQ<0)HQ=0;if(HQ>255
)HQ=255;Da=[].concat(Da[0]-(Math.max(HR,this.J8)&0xFF),Da.slice(1,4));Da=B.abN(Da
,Da[2]+(Math.max(HS,this.J9)&0xFF));Da=B.abP(Da,Da[1]-(Math.max(HT,this.J_)&0xFF
));Da=[].concat(Da.slice(0,3),Da[3]+(Math.max(HQ,this.J7)&0xFF));if(HR!==this.J8
){if((!!this.G&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var N=Da;N=
B.abN(N,J0[0]);this.G.Ag(N);}this.J8=HR&0xFF;}if(HS!==this.J9){if((!!this.G&&((this.
F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var N=Da;N=[].concat(J0[2],N.slice(
1,4));this.G.Ag(N);}this.J9=HS&0xFF;}if(HT!==this.J_){if((!!this.G&&((this.F&0x1
)===0x1))&&!((this.F&0x80000)===0x80000)){var N=Da;N=[].concat(N.slice(0,3),J0[1
]);this.G.Ag(N);}this.J_=HT&0xFF;}if(HQ!==this.J7){if((!!this.G&&((this.F&0x1)===
0x1))&&!((this.F&0x80000)===0x80000)){var N=Da;N=B.abP(N,J0[3]);this.G.Ag(N);}this.
J7=HQ&0xFF;}},PQ:function(AT,aClip,aOffset,AE,aBlend){},PN:function(AT,aClip,aOffset
,AE,aBlend){},GetMaximalSize:function(){return Et;},GetMinimalSize:function(){return AG;
},GS:function(Cs,Dq,Gk,E5,E6,OE,Gl,HU,E4,E2,E3){var A;if(!this.Bk){this.QE(Cs,Dq
,Gk,E5,E6,null,null,E4,E2,E3);return;}var G2=this.Bk;var H5=G2.Z;if(((Cs.F&0x10000
)===0x10000)&&(this.Bk.Ba!==Cs))throw new Error(DB);var BY=B._NewObject(D.L1,0);
var FE=G2.FE;var Gt=null;var Dg=null;if(!!H5){Gt=H5.Gt;Dg=H5.Dg;}if(!!H5&&!!G2.Ko
)Gt=G2.Ko;if(!!H5&&!!Gl)Dg=Gl;if(!!OE)FE=OE;if(!Dq)Dq=B._GetAutoObject(B.ach.IP);
if(!Gk)Gk=Dq;if(!E6)E6=E5;if(!E5)E5=E6;BY.FE=Gk;BY.Dg=E5;BY.Gt=E6;BY.Ko=HU;BY.Ba=
Cs;BY.Z=this.Bk.Z;this.Bk.Z=null;this.Bk=BY;if(this.CB===Cs)this.Dy(null);G2.Ba.
AB(0x0,0x10040);if(((this.F&0x40)===0x40)&&((Cs.F&0x4)===0x4))Cs.AB(0x10040,0x0);
else Cs.AB(0x10000,0x0);if(!!Dg){this.Eg(H5.Ba,Dg.He(),null,null,E3);this.Eg(G2.
Ba,FE.Hd(),null,null,true);this.Eg(BY.Ba,Dq.Fh(),E4,E2,true);}else if(!!Gt){this.
Eg(H5.Ba,Gt.Hf(),null,null,E3);this.Eg(G2.Ba,FE.Hd(),null,null,true);this.Eg(BY.
Ba,Dq.Fh(),E4,E2,true);}else if(!!FE){this.Eg(G2.Ba,FE.Hd(),null,null,E3);this.Eg(
BY.Ba,Dq.Fh(),E4,E2,true);}else this.Eg(BY.Ba,Dq.Fh(),E4,E2,E3);},QE:function(Cs
,Dq,Gk,E5,E6,Gl,HU,E4,E2,E3){var A;if(!Cs)return;if(!!this.Bk&&(this.Bk.Ba===Cs)
){this.GS(Cs,Dq,Gk,E5,E6,null,Gl,HU,E4,E2,E3);return;}if(((Cs.F&0x10000)===0x10000
))throw new Error(DB);var H1=B._NewObject(D.L1,0);if(!!this.Bk&&!this.Bk.Dg){if(
!HU)HU=Gl;if(!Gl)Gl=HU;}var Dg=null;if(!!this.Bk)Dg=this.Bk.Dg;if(!!this.Bk&&!!Gl
)Dg=Gl;if(!Dq)Dq=B._GetAutoObject(B.ach.IP);if(!Gk)Gk=Dq;if(!E6)E6=E5;if(!E5)E5=
E6;H1.FE=Gk;H1.Dg=E5;H1.Gt=E6;H1.Ko=HU;if(this.CB===Cs)this.Dy(null);if(!!this.Bk&&((
this.Bk.Ba.F&0x200000)===0x200000))this.Bk.Ba.AB(0x0,0x10);if(!!this.Bk)this.Bk.
Ba.AB(0x0,0x40);if(((this.F&0x40)===0x40)&&((Cs.F&0x4)===0x4))Cs.AB(0x10040,0x0);
else Cs.AB(0x10000,0x0);H1.Ba=Cs;H1.Z=this.Bk;this.Bk=H1;if(!!Dg){this.Eg(this.Bk.
Z.Ba,Dg.He(),null,null,E3);this.Eg(Cs,Dq.Fh(),E4,E2,true);}else this.Eg(Cs,Dq.Fh(
),E4,E2,E3);},DispatchEvent:function(AK){var A;var K=this.CB;var Av=(D.H.isPrototypeOf(
K)?K:null);var Bm=null;var Nv=!!this.D8&&(!!this.D8.Bj||!!this.D8.AO);if(!!K&&((((
K.F&0x10000)===0x10000)||((K.F&0x40000)===0x40000))||((K.F&0x20000)===0x20000))){
K=null;Av=null;}if(!!this.Bk&&!Nv)Bm=this.Bk.Ba.DispatchEvent(AK);if(!Bm&&!!Av)Bm=
Av.DispatchEvent(AK);else if(!Bm&&!!K)Bm=K.BG(AK);if(!Bm)Bm=this.BG(AK);if(!Bm)Bm=
this.Pb(AK);return Bm;},BroadcastEventAtPosition:function(AK,OF,aFilter){var A;var
K=this.AS;var Bm=null;while(!!K&&!Bm){if((!aFilter||((A=aFilter)&&((K.F&A)===A))
)&&B.wa(K.GetExtent(),OF)){var Av=(D.H.isPrototypeOf(K)?K:null);if(!!Av)Bm=Av.BroadcastEventAtPosition(
AK,B.abe(OF,Av.Q.slice(0,2)),aFilter);else Bm=K.BG(AK);}K=K.X;}if(!Bm)Bm=this.BG(
AK);return Bm;},BroadcastEvent:function(AK,aFilter){var A;var K=this.AS;var Bm=null;
while(!!K&&!Bm){if(!aFilter||((A=aFilter)&&((K.F&A)===A))){var Av=(D.H.isPrototypeOf(
K)?K:null);if(!!Av)Bm=Av.BroadcastEvent(AK,aFilter);else Bm=K.BG(AK);}K=K.X;}if(
!Bm)Bm=this.BG(AK);if(!Bm)Bm=this.Pb(AK);return Bm;},K_:function(aSize){},Gh:function(
DE){},Bt:function(){this.F=this.F|0x8000;B.pe([this,this.LO],this);},Ag:function(
Az){var A;var Av=this;while(!!Av&&!((Az[0]>=Az[2])||(Az[1]>=Az[3]))){if(!Av.G&&(
Av!==this)){Av.Ag(Az);return;}if(!((Av.F&0x1)===0x1))return;var N=Av.Q;Az=B.abh(
Az,N.slice(0,2));if(!((Av.F&0x80000)===0x80000)){N=[].concat(N[0]-Av.J8,N.slice(
1,4));N=B.abP(N,N[1]-Av.J_);N=B.abN(N,N[2]+Av.J9);N=[].concat(N.slice(0,3),N[3]+
Av.J7);Az=B.lb(Az,N);}Av=Av.G;}},NV:function(O,aFilter){var A;if(!O||(O.G!==this
))return null;var G1=O.Z;var G5=O.X;var Kh=0x10000;if(((aFilter&0x10000)===0x10000
))Kh=0x0;while(!!G1||!!G5){if((!!G1&&(!aFilter||((A=aFilter)&&((G1.F&A)===A))))&&(
!Kh||!((A=Kh)&&((G1.F&A)===A))))return G1;if((!!G5&&(!aFilter||((A=aFilter)&&((G5.
F&A)===A))))&&(!Kh||!((A=Kh)&&((G5.F&A)===A))))return G5;if(!!G1)G1=G1.Z;if(!!G5
)G5=G5.X;}return null;},Eg:function(Fz,A5,E4,E2,E3){var A;if(!Fz)return;if(!A5)throw new
Error(Eu);if((!!A5.H||!!A5.G)||!!A5.DO)throw new Error(Ev);if(!!Fz.G&&(Fz.G!==this
))throw new Error(E1);if(!this.D8)this.D8=B._NewObject(D.On,0);A5.G=this;A5.H=Fz;
A5.LA=E2;A5.NB=E4;if(!!Fz.H$)Fz.H$.DO.QF(Fz.H$);Fz.H$=A5;Fz.F=Fz.F|0x20000;if((E3&&
!!this.D8.AS)&&!this.D8.AS.Md())(B.ach.KL.isPrototypeOf(A=this.D8.AS)?A:null).NO(
A5);else{var DO=B._NewObject(B.ach.KL,0);DO.NO(A5);this.D8.QL(DO,false);}},MH:function(
O){var A;if(!O)throw new Error(Gj);if(O.G!==this)throw new Error(HM);if(!O.Z)return;
var Ct=this.AS;var Gv=O.DA;while(!!Ct&&(Ct.DA>Gv))Ct=Ct.X;if(((Ct===O)||!Ct)||(Ct.
Z===O))return;if(((O.F&0x401)===0x401)){if(!!O.X&&!!O.A$)O.X.F=O.X.F|0x800;O.F=O.
F|0x800;this.F=this.F|0x4000;B.pe([this,this.CH],this);}if(((O.F&0x200)===0x200)
){if(!!O.X)O.X.F=O.X.F|0x800;this.F=this.F|0x4000;B.pe([this,this.CH],this);}if(
!!O.X)O.X.Z=O.Z;else this.AO=O.Z;O.Z.X=O.X;O.X=Ct;O.Z=Ct.Z;Ct.Z=O;if(!!O.Z)O.Z.X=
O;else this.AS=O;if(((O.F&0x1)===0x1))this.Ag(O.GetClipping());},QG:function(O,D1
){var A;if(!O)throw new Error(Gj);if(O.G!==this)throw new Error(HM);var Ct=O;var
BA=O;var Gv=O.DA;while(((D1>0)&&!!Ct.Z)&&(Ct.Z.DA<=Gv)){Ct=Ct.Z;D1=D1-1;}while(((
D1<0)&&!!BA.X)&&(BA.X.DA>=Gv)){BA=BA.X;D1=D1+1;}if((Ct===O)&&(BA===O))return;if(((
O.F&0x401)===0x401)){if(!!O.X&&!!O.A$)O.X.F=O.X.F|0x800;O.F=O.F|0x800;this.F=this.
F|0x4000;B.pe([this,this.CH],this);}if(((O.F&0x200)===0x200)){if(!!O.X)O.X.F=O.X.
F|0x800;O.F=O.F|0x800;this.F=this.F|0x4000;B.pe([this,this.CH],this);}if(!!O.X)O.
X.Z=O.Z;if(!!O.Z)O.Z.X=O.X;if(this.AO===O)this.AO=O.Z;if(this.AS===O)this.AS=O.X;
if(Ct!==O){O.Z=Ct.Z;O.X=Ct;Ct.Z=O;if(!!O.Z)O.Z.X=O;}if(BA!==O){O.Z=BA;O.X=BA.X;BA.
X=O;if(!!O.X)O.X.Z=O;}if(!O.Z)this.AS=O;if(!O.X)this.AO=O;if(((O.F&0x1)===0x1))this.
Ag(O.GetClipping());},Gc:function(O){var A;if(!O)throw new Error(JN);if(O.G!==this
)throw new Error(HM);if((((O.F&0x401)===0x401)&&!!O.X)&&!!O.A$){O.X.F=O.X.F|0x800;
this.F=this.F|0x4000;B.pe([this,this.CH],this);}if(((O.F&0x200)===0x200)){if(!!O.
X)O.X.F=O.X.F|0x800;this.F=this.F|0x4000;B.pe([this,this.CH],this);}O.A$=null;if(
this.CB===O)this.Dy(this.NV(O,0x14));if(!!O.X)O.X.Z=O.Z;if(!!O.Z)O.Z.X=O.X;if(this.
AO===O)this.AO=O.Z;if(this.AS===O)this.AS=O.X;O.G=null;O.Z=null;O.X=null;if((!((
O.F&0x10)===0x10)&&((O.F&0x100000)===0x100000))&&!((this.F&0x80)===0x80))O.AB(0x10
,0x0);if(((O.F&0x1)===0x1))this.Ag(O.GetClipping());},S:function(O,D1){var A;if(
!O)throw new Error(JO);if(!!O.G)throw new Error(JP);var BA=null;var Gv=O.DA;if(((
D1<0)&&!!this.AS)&&(this.AS.DA>=Gv)){BA=this.AS;D1=D1+1;}while((((D1<0)&&!!BA)&&
!!BA.X)&&(BA.X.DA>=Gv)){BA=BA.X;D1=D1+1;}if((!BA&&!!this.AS)&&(this.AS.DA>Gv))BA=
this.AS;while((!!BA&&!!BA.X)&&(BA.X.DA>Gv))BA=BA.X;if(!BA){O.G=this;O.X=this.AS;
if(!!this.AS)this.AS.Z=O;if(!this.AO)this.AO=O;this.AS=O;}else{O.G=this;O.X=BA.X;
O.Z=BA;BA.X=O;if(!!O.X)O.X.Z=O;else this.AO=O;}if(((O.F&0x1)===0x1))this.Ag(O.GetClipping(
));if(((O.F&0x80)===0x80)&&(B.aam().PT()===O))O.AB(0x10,0x0);else if(!((this.F&0x10
)===0x10)&&((O.F&0x200010)===0x200010))O.AB(0x0,0x10);else if((((this.F&0x10)===
0x10)&&!((O.F&0x10)===0x10))&&((O.F&0x100000)===0x100000))O.AB(0x10,0x0);if(((!this.
CB&&((O.F&0x4)===0x4))&&((O.F&0x10)===0x10))&&!((O.F&0x10000)===0x10000))this.Dy(
O);if(((O.F&0x401)===0x401)){O.F=O.F|0x800;this.F=this.F|0x4000;B.pe([this,this.
CH],this);}if(((O.F&0x200)===0x200)){O.F=O.F|0x800;this.F=this.F|0x4000;B.pe([this
,this.CH],this);}},KV:function(){return this.Bi;},_Init:function(aArg){D.AX._Init.
call(this,aArg);this.__proto__=D.H;this.F=0x10001F;this.CM(aArg);},_Mark:function(
E){var A;D.AX._Mark.call(this,E);if((A=this.AO)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.AS)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Lv)&&(A._cycle!=
E))A._Mark(A._cycle=E);if((A=this.Bk)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.
D8)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.H$)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.CB)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Core::Group"};
D.Root={De:null,Be:B.abi(10,null,null),IV:null,Gp:null,Kz:0,Bo:0,Cf:B.abi(10,0,null
),Ln:B.abi(10,B.wg,null),D6:B.abi(10,0,null),FD:B.abi(10,B.wf,null),IX:B.abi(10,
0,null),Go:B.abi(10,B.wf,null),D5:B.abi(10,B.wf,null),Db:B.abi(10,B.wf,null),E7:
B.abi(10,B.wf,null),AN:0,Ls:0,Lr:0,Cz:B.abi(4,0,null),BJ:B.abi(4,B.wg,null),BI:0
,Kc:0,IZ:0,Nn:true,CM:function(aArg){if(!!!this.J){var obj=this;B.abD(obj);}},Jd:
function(){return this;},CJ:function(AT,aClip,aOffset,AE,aBlend){var fullScreenUpdate=
false;fullScreenUpdate=B.m7;if(!fullScreenUpdate)AT.L6(aClip,B.abh(B.abh(aClip,aOffset
),this.Q.slice(0,2)),0x00000000,0x00000000,0x00000000,0x00000000,false);D.H.CJ.call(
this,AT,aClip,aOffset,AE,aBlend);},AB:function(C$,DC){var A;D.H.AB.call(this,C$,
DC);if(!this.G&&(((C$&0x1)===0x1)||((DC&0x1)===0x1)))this.Ag([0,0,(A=this.Q)[2]-
A[0],A[3]-A[1]]);if(!this.G&&(((C$&0x2)===0x2)||((DC&0x2)===0x2)))this.Ag([0,0,(
A=this.Q)[2]-A[0],A[3]-A[1]]);},Dy:function(C){if((C!==null)||!C)D.H.Dy.call(this
,C);},Bd:function(C){var A;var DK=this.Bi;D.H.Bd.call(this,C);if(((DK!==this.Bi)&&
!this.G)&&((this.F&0x1)===0x1))this.Ag([0,0,(A=this.Q)[2]-A[0],A[3]-A[1]]);},DispatchEvent:
function(AK){if(!!AK){AK.Jh=!!this.Bo;if(!!this.Bo)AK.AC=this.Bo;}var Bm;Bm=D.H.
DispatchEvent.call(this,AK);this.Bo=0;return Bm;},BroadcastEvent:function(AK,aFilter
){if(!!AK){AK.Jh=!!this.Bo;if(!!this.Bo)AK.AC=this.Bo;}var Bm=D.H.BroadcastEvent.
call(this,AK,aFilter);this.Bo=0;return Bm;},Ag:function(Az){var A;if(this.Kz>0)throw new
Error(JQ);var fullScreenUpdate=false;fullScreenUpdate=B.m7;if(fullScreenUpdate)Az=[
0,0,(A=this.Q)[2]-A[0],A[3]-A[1]];if(!!this.G){D.H.Ag.call(this,Az);return;}Az=B.
lb(B.abh(Az,this.Q.slice(0,2)),this.Q);if((Az[0]>=Az[2])||(Az[1]>=Az[3]))return;
var M;for(M=0;M<this.BI;M=M+1)if(!(((A=B.lb(this.BJ.Get(M),Az))[0]>=A[2])||(A[1]>=
A[3]))){this.BJ.Set(M,B.wC(this.BJ.Get(M),Az));this.Cz.Set(M,B.aaH(this.BJ.Get(M
)));return;}if(this.BI<3){this.BJ.Set(this.BI,Az);this.Cz.Set(this.BI,B.aaH(Az));
this.BI=this.BI+1;return;}var Bn;var Dd;var Kb=0;var Kd=0;var OL=2147483647;this.
BJ.Set(this.BI,Az);this.Cz.Set(this.BI,B.aaH(Az));for(Bn=0;Bn<=this.BI;Bn=Bn+1)for(
Dd=Bn+1;Dd<=this.BI;Dd=Dd+1){var LN=B.aaH(B.wC(this.BJ.Get(Bn),this.BJ.Get(Dd)));
var Pa=((LN<<8)/(this.Cz.Get(Bn)+this.Cz.Get(Dd)))|0;if(Pa<OL){OL=Pa;Kb=Bn;Kd=Dd;
}}this.BJ.Set(Kb,B.wC(this.BJ.Get(Kb),this.BJ.Get(Kd)));this.Cz.Set(Kb,B.aaH(this.
BJ.Get(Kb)));if(Kd!==this.BI){this.BJ.Set(Kd,this.BJ.Get(this.BI));this.Cz.Set(Kd
,this.Cz.Get(this.BI));}},SC:function(){var Cg=B._NewObject(D.I$,0);Cg.Jh=!!this.
Bo;if(!!this.Bo)Cg.AC=this.Bo;return Cg;},HZ:function(){var Cg=B._NewObject(D.FL
,0);Cg.Jh=!!this.Bo;if(!!this.Bo)Cg.AC=this.Bo;return Cg;},IW:function(){var Cg=
B._NewObject(D.L0,0);Cg.Jh=!!this.Bo;if(!!this.Bo)Cg.AC=this.Bo;return Cg;},SD:function(
Ab){var M;var H3=false;for(M=0;M<10;M=M+1)if(!!this.Be.Get(M)){var V=this.Db.Get(
M);var Av=this.Be.Get(M).G;while(!!Av&&(Av!==this)){V=B.abe(V,Av.Q.slice(0,2));Av=
Av.G;}if(!Av&&(this.Be.Get(M)!==this)){var tmp=this.Be.Get(M);this.AN=M;this.Be.
Set(M,null);tmp.BG(this.HZ().InitializeUp(M,this.Go.Get(M),this.FD.Get(M),this.D6.
Get(M),this.Cf.Get(M)+1,this.D5.Get(M),false,this.Db.Get(M),this.E7.Get(M)));this.
BroadcastEvent(this.IW().InitializeUp(M,this.Cf.Get(M)+1,false,tmp,this.Db.Get(M
)),0x18);}else{this.D6.Set(M,(this.Gp.AC-this.IX.Get(M))|0);if(this.D6.Get(M)<10
)this.D6.Set(M,10);this.AN=M;this.Be.Get(M).BG(this.HZ().InitializeHold(M,V,this.
FD.Get(M),this.D6.Get(M),this.Cf.Get(M)+1,this.D5.Get(M),this.Db.Get(M),this.E7.
Get(M)));H3=true;}}if(!H3)this.Gp.Ao(false);},GetFPS:function(){var ticksCount=0;
var OX=0;ticksCount=((new Date).getTime()-B.v$)|0;if(!!this.Ls&&(ticksCount>this.
Ls))OX=((this.Lr*1000)/((ticksCount-this.Ls)|0))|0;this.Lr=0;this.Ls=ticksCount;
return OX;},Update:function(){var A;if(!this.IV)this.IV=B._NewObject(B.Graphics.
Canvas,0);this.IV.N9([(A=this.Q)[2]-A[0],A[3]-A[1]]);this.IV.Update();return this.
UpdateGE20(this.IV);},UpdateGE20:function(AT){if(!this.BeginUpdate())return AZ;var
FJ=this.UpdateCanvas(AT,AG);this.EndUpdate();return FJ;},EndUpdate:function(){if(
this.BI>0){this.Lr=this.Lr+1;this.BI=0;}},UpdateCanvas:function(AT,aOffset){var A;
var FJ=AZ;var Su=[].concat(aOffset,B.abf(AT.FrameSize,aOffset));var M;var Bn=this.
BI;this.Kz=this.Kz+1;AT.Ba=this;for(M=0;(M<Bn)&&(M<4);M=M+1)if(this.Cz.Get(M)>0){
this.CJ(AT,B.abg(this.BJ.Get(M),aOffset),[-aOffset[0],-aOffset[1]],255,true);FJ=
B.wC(FJ,B.lb(Su,this.BJ.Get(M)));}else Bn=Bn+1;AT.Ba=null;this.Kz=this.Kz-1;if(!((
FJ[0]>=FJ[2])||(FJ[1]>=FJ[3])))return B.abg(FJ,aOffset);else return FJ;},GetUpdateRegion:
function(Lc){var M;var Bn=this.BI;if(Lc<0)return AZ;for(M=0;(M<Bn)&&(M<4);M=M+1)
if(!this.Cz.Get(M)){Bn=Bn+1;Lc=Lc+1;}else if(M===Lc)return this.BJ.Get(M);return AZ;
},BeginUpdate:function(){var A;var M;if(!!this.BI&&!B.aaY(this.BJ.Get(0),[0,0,(A=
this.Q)[2]-A[0],A[3]-A[1]])){var Pp=B.abi(3,B.wg,null);var Po=this.BI;for(M=0;M<
Po;M++)Pp.Set(M,this.BJ.Get(M));for(M=0;M<Po;M++){var Pc=B.abh(Pp.Get(M),this.Q.
slice(0,2));var Pd=this.KA(Pc);if(!B.aaY(Pc,Pd))this.Ag(B.abg(Pd,this.Q.slice(0,
2)));}}var Bn;var Dd;for(Bn=0;Bn<(this.BI-1);Bn++)if(this.Cz.Get(Bn)>0)for(Dd=Bn+
1;Dd<this.BI;Dd++)if(this.Cz.Get(Dd)>0){var LN=B.aaH(B.wC(this.BJ.Get(Bn),this.BJ.
Get(Dd)));if(((LN-this.Cz.Get(Bn))-this.Cz.Get(Dd))<0){this.BJ.Set(Bn,B.wC(this.
BJ.Get(Bn),this.BJ.Get(Dd)));this.Cz.Set(Bn,LN);this.Cz.Set(Dd,0);}}for(M=this.BI-
1;M>=0;M--)if(!this.Cz.Get(M))this.BI=this.BI-1;return this.BI;},DoesNeedUpdate:
function(){if(this.BI>0)return true;return false;},Initialize:function(aSize){this.
R([].concat(AG,aSize));if(this.Nn)this.F=this.F|0x60;else this.F=this.F|0x20;this.
Ag(this.Q);return this;},SetRootFocus:function(M9){if(M9===this.Nn)return false;
this.Nn=M9;if(!M9)this.AB(0x0,0x40);else this.AB(0x40,0x0);return true;},SetUserInputTimestamp:
function(Sq){this.Bo=Sq;},DriveKeyboardHitting:function(BL,JT,Ew){var A;var NJ=!
!this.De;if(!!this.De&&((!Ew||(this.Kc!==BL))||(this.IZ!==JT))){var Cg=null;var K=(
D.Cq.isPrototypeOf(A=this.De)?A:null);var Ey=(D.GE.isPrototypeOf(A=this.De)?A:null
);if(!!this.Kc)Cg=B._NewObject(D.KeyEvent,0).Initialize(this.Kc,false);if(this.IZ
!==0x00)Cg=B._NewObject(D.KeyEvent,0).Initialize2(this.IZ,false);if(!!Ey)Ey.BG(Cg
);else if(!!K)K.BG(Cg);this.Kc=0;this.IZ=0x00;this.De=null;}if(!!this.De){var Cg=
null;var K=(D.Cq.isPrototypeOf(A=this.De)?A:null);var Ey=(D.GE.isPrototypeOf(A=this.
De)?A:null);if(!!BL)Cg=B._NewObject(D.KeyEvent,0).Initialize(BL,true);if(this.IZ
!==0x00)Cg=B._NewObject(D.KeyEvent,0).Initialize2(JT,true);if(!!Ey)Ey.BG(Cg);else
if(!!K)K.BG(Cg);}if(!this.De&&Ew){if(!!BL)this.De=this.DispatchEvent(B._NewObject(
D.KeyEvent,0).Initialize(BL,true));if(JT!==0x00)this.De=this.DispatchEvent(B._NewObject(
D.KeyEvent,0).Initialize2(JT,true));if(!(D.GE.isPrototypeOf(A=this.De)?A:null)&&
!(D.Cq.isPrototypeOf(A=this.De)?A:null))this.De=null;this.Kc=BL;this.IZ=JT;NJ=NJ||
!!this.De;}this.Bo=0;return NJ;},DriveCursorMovement:function(B8){return this.DriveMultiTouchMovement(
this.AN,B8);},DriveMultiTouchMovement:function(W,B8){if((W<0)||(W>9)){this.Bo=0;
return false;}var BN=B.abe(B8,this.Db.Get(W));this.Db.Set(W,B8);if(!this.Be.Get(
W)||B.aaX(BN,AG)){this.Bo=0;return false;}var V=B8;var Av=this.Be.Get(W).G;while(
!!Av&&(Av!==this)){V=B.abe(V,Av.Q.slice(0,2));Av=Av.G;}if(!Av&&(this.Be.Get(W)!==
this)){var tmp=this.Be.Get(W);this.AN=W;this.Be.Set(W,null);tmp.BG(this.HZ().InitializeUp(
W,this.Go.Get(W),this.FD.Get(W),this.D6.Get(W),this.Cf.Get(W)+1,this.D5.Get(W),false
,this.Db.Get(W),this.E7.Get(W)));this.BroadcastEvent(this.IW().InitializeUp(W,this.
Cf.Get(W)+1,false,tmp,B8),0x18);}else{this.Go.Set(W,V);this.AN=W;this.Be.Get(W).
BG(this.SC().Initialize(W,V,this.FD.Get(W),BN,this.D6.Get(W),this.Cf.Get(W)+1,this.
D5.Get(W),B8,this.E7.Get(W)));}this.Bo=0;return true;},DriveCursorHitting:function(
Ew,W,B8){return this.DriveMultiTouchHitting(Ew,W,B8);},DriveMultiTouchHitting:function(
Ew,W,B8){if((W<0)||(W>9)){this.Bo=0;return false;}var ticksCount=this.Bo;if(!ticksCount
)ticksCount=((new Date).getTime()-B.v$)|0;var S9=this.Bo;this.DriveMultiTouchMovement(
W,B8);B8=this.Db.Get(W);this.Bo=S9;if(Ew)this.E7.Set(W,B8);if(Ew&&!this.Be.Get(W
)){var BX;var V=B8;if(B.wa(this.Ln.Get(W),B8)&&((ticksCount-this.IX.Get(W))<=250
))this.Cf.Set(W,this.Cf.Get(W)+1);else this.Cf.Set(W,0);this.Ln.Set(W,B.abh(HN,B8
));this.IX.Set(W,ticksCount);BX=this.FM(B.abh(HN,B8),W,this.Cf.Get(W)+1,null,null
,0x0);if(!!BX){this.BroadcastEvent(this.IW().InitializeDown(W,this.Cf.Get(W)+1,false
,BX.Cq,B8),0x18);this.Be.Set(W,BX.Cq);this.D5.Set(W,BX.DW);}else{this.Be.Set(W,null
);this.D5.Set(W,AG);this.Bo=0;return false;}var Av=BX.Cq.G;while(!!Av&&(Av!==this
)){V=B.abe(V,Av.Q.slice(0,2));Av=Av.G;}this.FD.Set(W,V);this.Go.Set(W,V);this.D6.
Set(W,0);this.Gp.Ao(true);this.AN=W;this.Be.Get(W).BG(this.HZ().InitializeDown(W
,V,this.Cf.Get(W)+1,this.D5.Get(W),false,B8));this.Bo=0;return true;}if(!Ew&&!!this.
Be.Get(W)){var V=B8;var Av=this.Be.Get(W).G;while(!!Av&&(Av!==this)){V=B.abe(V,Av.
Q.slice(0,2));Av=Av.G;}if(!Av)V=this.Go.Get(W);this.AN=W;var tmp=this.Be.Get(W);
this.Be.Set(W,null);tmp.BG(this.HZ().InitializeUp(W,V,this.FD.Get(W),this.D6.Get(
W),this.Cf.Get(W)+1,this.D5.Get(W),false,B8,this.E7.Get(W)));this.BroadcastEvent(
this.IW().InitializeUp(W,this.Cf.Get(W)+1,false,tmp,B8),0x18);this.Bo=0;return true;
}this.Bo=0;return false;},Oj:function(FA,OC,FC,HW){if(FA===this)FA=null;if(!this.
Be.Get(this.AN))return;var BX;BX=this.FM(B.abh(HN,this.Db.Get(this.AN)),this.AN,
1,FA,FC,HW);if(!!BX&&(this.Be.Get(this.AN)!==BX.Cq))this.NR(BX.Cq,BX.DW);if(!BX&&(
this.Be.Get(this.AN)!==OC))this.NR(OC,AG);},NR:function(FA,D0){if(!this.Be.Get(this.
AN)||(this.Be.Get(this.AN)===FA))return;var tmp=this.Be.Get(this.AN);this.Be.Set(
this.AN,null);tmp.BG(this.HZ().InitializeUp(this.AN,this.Go.Get(this.AN),this.FD.
Get(this.AN),this.D6.Get(this.AN),this.Cf.Get(this.AN)+1,this.D5.Get(this.AN),true
,this.Db.Get(this.AN),this.E7.Get(this.AN)));this.BroadcastEvent(this.IW().InitializeUp(
this.AN,this.Cf.Get(this.AN)+1,true,tmp,this.Db.Get(this.AN)),0x18);var V=this.Db.
Get(this.AN);var Av=null;if(!!FA)Av=FA.G;while(!!Av&&(Av!==this)){V=B.abe(V,Av.Q.
slice(0,2));Av=Av.G;}if(!Av&&(FA!==this)){this.Be.Set(this.AN,null);return;}this.
BroadcastEvent(this.IW().InitializeDown(this.AN,this.Cf.Get(this.AN)+1,true,FA,this.
Db.Get(this.AN)),0x18);var ticksCount=0;ticksCount=((new Date).getTime()-B.v$)|0;
this.Be.Set(this.AN,FA);this.D5.Set(this.AN,D0);this.FD.Set(this.AN,V);this.Go.Set(
this.AN,V);this.Cf.Set(this.AN,0);this.D6.Set(this.AN,0);this.IX.Set(this.AN,ticksCount
);this.E7.Set(this.AN,this.Db.Get(this.AN));this.Be.Get(this.AN).BG(this.HZ().InitializeDown(
this.AN,V,this.Cf.Get(this.AN)+1,this.D5.Get(this.AN),true,this.E7.Get(this.AN))
);},PT:function(){return null;},_Init:function(aArg){D.H._Init.call(this,aArg);D.
Timer._Init.call(this.Gp={J:this},0);(this.Be=[]).__proto__=D.Root.Be;(this.Cf=[
]).__proto__=D.Root.Cf;(this.Ln=[]).__proto__=D.Root.Ln;(this.D6=[]).__proto__=D.
Root.D6;(this.FD=[]).__proto__=D.Root.FD;(this.IX=[]).__proto__=D.Root.IX;(this.
Go=[]).__proto__=D.Root.Go;(this.D5=[]).__proto__=D.Root.D5;(this.Db=[]).__proto__=
D.Root.Db;(this.E7=[]).__proto__=D.Root.E7;(this.Cz=[]).__proto__=D.Root.Cz;(this.
BJ=[]).__proto__=D.Root.BJ;this.__proto__=D.Root;this.F=0x10007F;this.Gp.GJ(10);
this.Gp.GO=[this,this.SD];this.CM(aArg);},_Done:function(){this.__proto__=D.H;this.
Gp._Done();D.H._Done.call(this);},_ReInit:function(){D.H._ReInit.call(this);this.
Gp._ReInit();},_Mark:function(E){var A;D.H._Mark.call(this,E);if((A=this.De)&&(A.
_cycle!=E))A._Mark(A._cycle=E);B.aa6(this.Be,E);if((A=this.IV)&&(A._cycle!=E))A.
_Mark(A._cycle=E);if((A=this.Gp)._cycle!=E)A._Mark(A._cycle=E);},_className:"Core::Root"
};D.Event={AC:0,Jh:false,CM:function(aArg){this.AC=this.Jc();},Jc:function(){var
ticksCount=0;ticksCount=((new Date).getTime()-B.v$)|0;return ticksCount;},_Init:
function(aArg){this.__proto__=D.Event;this.CM(aArg);B.h7++;},_Done:function(){this.
__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.
J)&&(A._cycle!=E))A._Mark(A._cycle=E);},J:null,_cycle:0,_observers:null,_className:
"Core::Event"};D.KeyEvent={BF:0,AW:0,Down:false,Initialize2:function(BL,Ew){this.
BF=0;this.AW=BL;this.Down=Ew;if((BL>=0x30)&&(BL<=0x39))this.BF=(10+BL)-48;if((BL>=
0x41)&&(BL<=0x5A))this.BF=(105+BL)-65;if((BL>=0x61)&&(BL<=0x7A))this.BF=(105+BL)-
97;if(BL===0x20)this.BF=131;if(!this.BF)switch(BL){case 0x2B:this.BF=132;break;case
0x2D:this.BF=133;break;case 0x2A:this.BF=134;break;case 0x2F:this.BF=135;break;case
0x3D:this.BF=136;break;case 0x2E:this.BF=137;break;case 0x2C:this.BF=138;break;case
0x3A:this.BF=139;break;case 0x3B:this.BF=140;break;default:;}return this;},Initialize:
function(BL,Ew){this.BF=BL;this.Down=Ew;this.AW=0x00;var Nf=BL-10;var Ne=BL-105;
if((Nf>=0)&&(Nf<=9))this.AW=(48+Nf)&0xFFFF;if((Ne>=0)&&(Ne<=25))this.AW=(65+Ne)&
0xFFFF;if(BL===131)this.AW=0x20;if(this.AW===0x00)switch(BL){case 132:this.AW=0x2B;
break;case 133:this.AW=0x2D;break;case 134:this.AW=0x2A;break;case 135:this.AW=0x2F;
break;case 136:this.AW=0x3D;break;case 137:this.AW=0x2E;break;case 138:this.AW=0x2C;
break;case 139:this.AW=0x3A;break;case 140:this.AW=0x3B;break;default:;}return this;
},PY:function(OA){switch(OA){case 141:return((this.AW>=0x41)&&(this.AW<=0x5A))||((
this.AW>=0x61)&&(this.AW<=0x7A));case 142:return(((this.AW>=0x41)&&(this.AW<=0x5A
))||((this.AW>=0x61)&&(this.AW<=0x7A)))||((this.AW>=0x30)&&(this.AW<=0x39));case
143:return(this.AW>=0x30)&&(this.AW<=0x39);case 144:return(((this.AW>=0x41)&&(this.
AW<=0x46))||((this.AW>=0x61)&&(this.AW<=0x66)))||((this.AW>=0x30)&&(this.AW<=0x39
));case 145:return this.AW!==0x00;case 146:return(this.AW===0x00)&&!!this.BF;case
147:return(((this.BF===6)||(this.BF===7))||(this.BF===4))||(this.BF===5);case 148:
return(this.AW!==0x00)||!!this.BF;default:;}return OA===this.BF;},_Init:function(
aArg){D.Event._Init.call(this,aArg);this.__proto__=D.KeyEvent;},_className:"Core::KeyEvent"
};D.L0={MN:null,C4:B.wf,Cw:0,BK:0,Down:false,CA:false,InitializeUp:function(W,CR
,HP,Na,Ex){this.Down=false;this.BK=W;this.Cw=CR;this.C4=Ex;this.MN=Na;this.CA=HP;
return this;},InitializeDown:function(W,CR,HP,Na,Ex){this.Down=true;this.BK=W;this.
Cw=CR;this.C4=Ex;this.MN=Na;this.CA=HP;return this;},_Init:function(aArg){D.Event.
_Init.call(this,aArg);this.__proto__=D.L0;},_Mark:function(E){var A;D.Event._Mark.
call(this,E);if((A=this.MN)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Core::CursorGrabEvent"
};D.FL={Jf:B.wf,C4:B.wf,Cw:0,B1:0,C5:B.wf,BV:B.wf,BK:0,Down:false,CA:false,InitializeHold:
function(W,GV,JV,JW,CR,D0,Ex,JU){this.Down=true;this.BK=W;this.BV=B.abf(GV,D0);this.
C5=B.abf(JV,D0);this.B1=JW;this.Cw=CR;this.C4=Ex;this.Jf=JU;return this;},InitializeUp:
function(W,GV,JV,JW,CR,D0,HP,Ex,JU){this.Down=false;this.BK=W;this.BV=B.abf(GV,D0
);this.C5=B.abf(JV,D0);this.B1=JW;this.Cw=CR;this.CA=HP;this.C4=Ex;this.Jf=JU;return this;
},InitializeDown:function(W,GV,CR,D0,HP,Ex){this.Down=true;this.BK=W;this.BV=B.abf(
GV,D0);this.C5=B.abf(GV,D0);this.B1=0;this.Cw=CR;this.CA=HP;this.C4=Ex;this.Jf=Ex;
return this;},_Init:function(aArg){D.Event._Init.call(this,aArg);this.__proto__=
D.FL;},_className:"Core::CursorEvent"};D.I$={Jf:B.wf,C4:B.wf,Cw:0,B1:0,DW:B.wf,C5:
B.wf,BV:B.wf,BK:0,Initialize:function(W,GV,JV,aOffset,JW,Sn,D0,Ex,JU){this.BK=W;
this.BV=B.abf(GV,D0);this.C5=B.abf(JV,D0);this.DW=aOffset;this.B1=JW;this.Cw=Sn;
this.C4=Ex;this.Jf=JU;return this;},_Init:function(aArg){D.Event._Init.call(this
,aArg);this.__proto__=D.I$;},_className:"Core::DragEvent"};D.Jw={CJ:function(AT,
aClip,aOffset,AE,aBlend){},GetClipping:function(){var A;var N=D.AX.GetClipping.call(
this);if(((this.F&0x80000)===0x80000)){var Ib=AZ;var K;for(K=this.Z;!!K&&!((K.F&
0x200)===0x200);K=K.Z)if(((K.F&0x1)===0x1))Ib=B.wC(Ib,K.GetClipping());N=B.wC(N,
Ib);}return N;},AB:function(C$,DC){var A;var Lz=this.F;if((!!this.G&&((this.F&0x80001
)===0x80001))&&((DC&0x80000)===0x80000))this.G.Ag(this.GetClipping());D.AX.AB.call(
this,C$,DC);if(((!!this.G&&((this.F&0x1)===0x1))&&((C$&0x80000)===0x80000))&&!((
Lz&0x80000)===0x80000))this.G.Ag(this.GetClipping());},R:function(C){var A;if(B.
aaY(C,this.Q))return;var G3=[(A=this.Q)[2]-A[0],A[3]-A[1]];var Ny=[C[2]-C[0],C[3
]-C[1]];var I3=!B.aaX(G3,Ny);var BN=B.abe(C.slice(0,2),this.Q.slice(0,2));if(!B.
aaX(BN,AG)&&!I3){var K=this.Z;while(!!K&&!((K.F&0x200)===0x200)){if(((K.F&0x400)===
0x400)){var tmp=((K.F&0x100)===0x100);K.Mq(BN,tmp);}K=K.Z;}}if((I3&&(G3[0]>0))&&(
G3[1]>0)){var Ax=this.Q;var K=this.Z;while(!!K&&!((K.F&0x200)===0x200)){if(((K.F&
0x400)===0x400)){if(!!K.A$&&(K.A$.H_!==this))K.A$=null;if(!K.A$&&(K.Cm!==0x14))K.
J$(Ax,this);}K=K.Z;}}D.AX.R.call(this,C);if(!!this.G&&I3){this.F=this.F|0x1000;if(
!((this.G.F&0x2000)===0x2000)){this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CH],this
);}}},_Init:function(aArg){D.AX._Init.call(this,aArg);this.__proto__=D.Jw;this.F=
0x203;},_className:"Core::Outline"};D.Bu={Mr:null,KW:null,KU:null,DX:null,BP:null
,Aw:0,BK:0,AC:0,Cw:0,B1:0,DW:B.wf,C5:B.wf,BV:B.wf,QH:8,NZ:1,Down:false,DT:false,
CA:false,Nj:false,Ke:0,CJ:function(AT,aClip,aOffset,AE,aBlend){},BG:function(AK){
var A;var Am=(D.FL.isPrototypeOf(AK)?AK:null);var B9=(D.I$.isPrototypeOf(AK)?AK:
null);var Lt=this.DT;var DL;var Dt;var Kx;var B_;var H2;if(!Am&&!B9)return null;
DL=(!!Am&&Am.Down)&&!Am.B1;Dt=(!!Am&&Am.Down)&&(Am.B1>0);Kx=(!!Am&&Am.Down)&&(Am.
B1>this.Ke);B_=!!Am&&!Am.Down;H2=!!B9;if(DL)this.Ke=((A=(Am.CA?0:50))&0x80)?A|0xFFFFFF00:
A&0xFF;if(DL){var H6=0;var E8;this.Aw=this.Aw|(1<<Am.BK);for(E8=this.Aw&4095;E8>
0;E8=E8>>1)if(!!(E8&1))H6=H6+1;if(H6===1)this.Aw=(this.Aw|16777216)|(4096<<Am.BK
);}if(B_&&(this.Aw<16777216)){var DN=this.Jd();var BX=null;if(!!DN){var NM=(!!this.
X?this.X:this.G);BX=DN.FM(B.abh(HO,Am.C4),Am.BK,Am.Cw,null,NM,0x0);}if(!!BX){var
M;for(M=0;M<10;M++)if(!!(this.Aw&(1<<M)))BX.Cq.BG(B._NewObject(D.FL,0).InitializeDown(
M,Am.BV,Am.Cw,AG,true,Am.C4));for(M=0;M<10;M++)if(!!(this.Aw&(1<<M)))BX.Cq.BG(B.
_NewObject(D.FL,0).InitializeUp(M,Am.BV,Am.BV,0,Am.Cw,AG,false,Am.C4,Am.C4));}}if(
B_)this.Aw=(this.Aw&~(1<<Am.BK))|33554432;if(Kx&&(this.Aw<16777216))this.Aw=this.
Aw|67108864;if(B_&&Am.CA)this.Aw=this.Aw|67108864;if(B_&&!(this.Aw&16777215))this.
Aw=0;if(Dt&&(this.Aw>=67108864)){var DN=this.Jd();if(!!DN)DN.Oj(null,null,this,0x0
);}if((Dt&&!!(this.Aw&16777216))&&!!(this.Aw&33554432)){Dt=false;B_=true;}if(!!Am&&
!(this.Aw&(4096<<Am.BK)))return this;if(!!B9&&!(this.Aw&(4096<<B9.BK)))return this;
if(B_&&!(this.Aw&16777216))return this;if(((DL||H2)||Dt)&&((this.Aw<16777216)||(
this.Aw>=33554432)))return this;if(B_)this.Aw=this.Aw&3758100479;if(B_&&!(this.Aw&
16777215))this.Aw=0;if(!!Am){this.Down=DL||Dt;this.DT=this.Me(Am.BV);this.C5=Am.
C5;this.BV=Am.BV;this.DW=AG;this.B1=Am.B1;this.Cw=Am.Cw;this.CA=Am.CA;this.BK=Am.
BK;this.AC=Am.AC;if(Am.Down&&!Am.B1)Lt=false;}if(!!B9){this.Down=true;this.DT=this.
Me(B9.BV);this.C5=B9.C5;this.BV=B9.BV;this.DW=B9.DW;this.B1=B9.B1;this.Cw=B9.Cw;
this.BK=B9.BK;this.CA=false;this.AC=B9.AC;}var Ni=this.Down;if(!!B9)(A=this.Mr)?
A[1].call(A[0],this):null;if((!!Am&&this.Down)&&!this.B1)(A=this.BP)?A[1].call(A[
0],this):null;if((this.Down&&this.DT)&&!Lt){this.Nj=true;(A=this.KU)?A[1].call(A[
0],this):null;}if(this.Nj&&(((Ni&&!this.DT)&&Lt)||((!Ni&&this.DT)&&Lt))){this.Nj=
false;(A=this.KW)?A[1].call(A[0],this):null;}if(!!Am&&!Ni)(A=this.DX)?A[1].call(
A[0],this):null;return this;},FM:function(Az,W,CR,Fy,FC,HW){var A;if(!!Fy&&(Fy!==
this))return null;if((CR<1)||(CR>this.NZ))return null;if(this.Aw>=33554432)return null;
if((this.Aw>=16777216)&&!(this.Aw&(4096<<W)))return null;if(this.PW()){var N=B.lb(
Az,this.GetExtent());if(!((N[0]>=N[2])||(N[1]>=N[3]))){var CT=B.aaI(Az);var BN=AG;
if(CT[0]<N[0])BN=[N[0]-CT[0],BN[1]];if(CT[0]>=N[2])BN=[(N[2]-CT[0])-1,BN[1]];if(
CT[1]<N[1])BN=[BN[0],N[1]-CT[1]];if(CT[1]>=N[3])BN=[BN[0],(N[3]-CT[1])-1];return B.
_NewObject(D.KF,0).Initialize(this,BN);}}else{var Bf=B.abi(9,B.wf,null);var M;Bf.
Set(0,B.aaI(Az));Bf.Set(1,Bf.Get(0));Bf.Set(2,Bf.Get(0));Bf.Set(3,Bf.Get(0));Bf.
Set(4,Bf.Get(0));Bf.Set(1,[Az[0],Bf.Get(1)[1]]);Bf.Set(2,[Bf.Get(2)[0],Az[1]]);Bf.
Set(3,[Az[2],Bf.Get(3)[1]]);Bf.Set(4,[Bf.Get(4)[0],Az[3]]);Bf.Set(5,Az.slice(0,2
));Bf.Set(6,[Az[2],Az[1]]);Bf.Set(7,[Az[0],Az[3]]);Bf.Set(8,Az.slice(2,4));for(M=
0;M<9;M=M+1)if(this.Me(Bf.Get(M)))return B._NewObject(D.KF,0).Initialize(this,B.
abe(Bf.Get(M),Bf.Get(0)));}return null;},MA:function(C){if(C<1)C=1;this.QH=C;},Ju:
function(C){if(C<1)C=1;this.NZ=C;},Ao:function(C){if(C)this.AB(0x100000,0x0);else
this.AB(0x0,0x100000);},_Init:function(aArg){D.EV._Init.call(this,aArg);this.__proto__=
D.Bu;this.F=0x10011B;},_Mark:function(E){var A;D.EV._Mark.call(this,E);if((A=this.
Mr)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.KW)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.KU)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);
if((A=this.DX)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.BP)&&((A=A[0
])._cycle!=E))A._Mark(A._cycle=E);},_className:"Core::SimpleTouchHandler"};D.Do={
Mw:null,GF:null,EU:null,Aw:0,Oh:0,C5:B.wf,NS:0,K5:0,Angle:0,Down:false,DT:false,
CA:false,Ke:0,CJ:function(AT,aClip,aOffset,AE,aBlend){},BG:function(AK){var A;var
Am=(D.FL.isPrototypeOf(AK)?AK:null);var B9=(D.I$.isPrototypeOf(AK)?AK:null);var DL;
var Dt;var Kx;var B_;var H2;if(!Am&&!B9)return null;DL=(!!Am&&Am.Down)&&!Am.B1;Dt=(
!!Am&&Am.Down)&&(Am.B1>0);Kx=(!!Am&&Am.Down)&&(Am.B1>this.Ke);B_=!!Am&&!Am.Down;
H2=!!B9;if(DL)this.Ke=((A=(Am.CA?0:50))&0x80)?A|0xFFFFFF00:A&0xFF;if(DL){var H6=
0;var E8;this.Aw=this.Aw|(1<<Am.BK);for(E8=this.Aw&4095;E8>0;E8=E8>>1)if(!!(E8&1
))H6=H6+1;if(H6===1)this.Aw=(this.Aw|16777216)|(4096<<Am.BK);}if(B_&&(this.Aw<16777216
)){var DN=this.Jd();var BX=null;if(!!DN){var NM=(!!this.X?this.X:this.G);BX=DN.FM(
B.abh(HO,Am.C4),Am.BK,Am.Cw,null,NM,0x0);}if(!!BX){var M;for(M=0;M<10;M++)if(!!(
this.Aw&(1<<M)))BX.Cq.BG(B._NewObject(D.FL,0).InitializeDown(M,Am.BV,Am.Cw,AG,true
,Am.C4));for(M=0;M<10;M++)if(!!(this.Aw&(1<<M)))BX.Cq.BG(B._NewObject(D.FL,0).InitializeUp(
M,Am.BV,Am.BV,0,Am.Cw,AG,false,Am.C4,Am.C4));}}if(B_)this.Aw=(this.Aw&~(1<<Am.BK
))|33554432;if(Kx&&(this.Aw<16777216))this.Aw=this.Aw|67108864;if(B_&&Am.CA)this.
Aw=this.Aw|67108864;if(B_&&!(this.Aw&16777215))this.Aw=0;if(Dt&&(this.Aw>=67108864
)){var DN=this.Jd();if(!!DN)DN.Oj(null,null,this,0x0);}if((Dt&&!!(this.Aw&16777216
))&&!!(this.Aw&33554432)){Dt=false;B_=true;}if(!!Am&&!(this.Aw&(4096<<Am.BK)))return this;
if(!!B9&&!(this.Aw&(4096<<B9.BK)))return this;if(B_&&!(this.Aw&16777216))return this;
if(((DL||H2)||Dt)&&((this.Aw<16777216)||(this.Aw>=33554432)))return this;if(B_)this.
Aw=this.Aw&3758100479;if(B_&&!(this.Aw&16777215))this.Aw=0;if(((!DL&&!B_)&&!H2)&&
!Dt)return this;var V=AG;var JY=this.Angle;var LC=this.Oh;var SS=LC;var An;if((DL||
B_)||Dt){this.DT=B.wa(this.Q,Am.BV);this.CA=Am.CA;this.C5=Am.C5;this.Down=DL||Dt;
V=B.abe(Am.BV,B.aaI(this.Q));}if(H2){this.DT=B.wa(this.Q,B9.BV);this.C5=B9.C5;this.
Down=true;V=B.abe(B9.BV,B.aaI(this.Q));}var N=Math.sqrt((V[0]*V[0])+(V[1]*V[1]));
if(N>=8){LC=N|0;JY=(Math.acos(V[0]/N)*B.rE)|0;if(V[1]>0)JY=360-JY;}An=JY-this.Angle;
if(An>180)An=An-360;if(An<-180)An=An+360;this.Angle=JY;this.NS=An;this.K5=this.K5+
An;this.Oh=LC;if(DL){this.NS=0;this.K5=0;(A=this.EU)?A[1].call(A[0],this):null;}
if(!!An||(LC!==SS))(A=this.Mw)?A[1].call(A[0],this):null;if(B_)(A=this.GF)?A[1].
call(A[0],this):null;return this;},FM:function(Az,W,CR,Fy,FC,HW){var A;if(!!Fy&&(
Fy!==this))return null;if(this.Aw>=33554432)return null;if((this.Aw>=16777216)&&
!(this.Aw&(4096<<W)))return null;var N=B.lb(Az,this.Q);if(!((N[0]>=N[2])||(N[1]>=
N[3]))){var CT=B.aaI(Az);var BN=AG;if(CT[0]<N[0])BN=[N[0]-CT[0],BN[1]];if(CT[0]>=
N[2])BN=[(N[2]-CT[0])-1,BN[1]];if(CT[1]<N[1])BN=[BN[0],N[1]-CT[1]];if(CT[1]>=N[3
])BN=[BN[0],(N[3]-CT[1])-1];return B._NewObject(D.KF,0).Initialize(this,BN);}return null;
},_Init:function(aArg){D.AX._Init.call(this,aArg);this.__proto__=D.Do;this.F=0x10011B;
},_Mark:function(E){var A;D.AX._Mark.call(this,E);if((A=this.Mw)&&((A=A[0])._cycle
!=E))A._Mark(A._cycle=E);if((A=this.GF)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E
);if((A=this.EU)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);},_className:"Core::RotateTouchHandler"
};D.GE={Z:null,DX:null,BP:null,Ia:0,AC:0,Oi:0,Ca:148,BF:0,AW:0,AM:true,Down:false
,MG:false,CM:function(aArg){var A;var Ba=(D.H.isPrototypeOf(A=this.J)?A:null);if(
!Ba)throw new Error(IT);this.Z=Ba.Lv;Ba.Lv=this;},BG:function(AK){var A;if(!!AK&&
AK.PY(this.Ca)){this.Down=AK.Down;this.BF=AK.BF;this.AW=AK.AW;this.AC=AK.AC;if(AK.
Down){this.Oi=this.Ia;this.MG=this.Ia>0;if(!this.MG)(A=this.BP)?A[1].call(A[0],this
):null;this.Ia=this.Ia+1;return true;}if(!AK.Down){this.MG=this.Ia>1;this.Oi=this.
Ia-1;this.Ia=0;(A=this.DX)?A[1].call(A[0],this):null;return true;}}return false;
},_Init:function(aArg){this.__proto__=D.GE;this.CM(aArg);B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.Z)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.DX)&&((A=A[0])._cycle!=E
))A._Mark(A._cycle=E);if((A=this.BP)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((
A=this.J)&&(A._cycle!=E))A._Mark(A._cycle=E);},J:null,_cycle:0,_observers:null,_className:
"Core::KeyPressHandler"};D.KF={Cq:null,I_:0,DW:B.wf,Initialize:function(O,aOffset
){this.Cq=O;this.DW=aOffset;this.I_=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[
1]);return this;},_Init:function(aArg){this.__proto__=D.KF;B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.Cq)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.J)&&(A._cycle!=E))A._Mark(
A._cycle=E);},J:null,_cycle:0,_observers:null,_className:"Core::CursorHit"};D.KP={
H_:null,CW:B.wg,Ax:B.wg,isEmpty:false,_Init:function(aArg){this.__proto__=D.KP;B.
h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(E){var A;if((A=this.H_)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.J
)&&(A._cycle!=E))A._Mark(A._cycle=E);},J:null,_cycle:0,_observers:null,_className:
"Core::LayoutContext"};D.KQ={Ks:B.wf,Kr:B.wf,Kq:B.wf,Kp:B.wf,_Init:function(aArg
){D.KP._Init.call(this,aArg);this.__proto__=D.KQ;},_className:"Core::LayoutQuadContext"
};D.L1={Ba:null,Z:null,FE:null,Gt:null,Dg:null,Ko:null,_Init:function(aArg){this.
__proto__=D.L1;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(
){},_Mark:function(E){var A;if((A=this.Ba)&&(A._cycle!=E))A._Mark(A._cycle=E);if((
A=this.Z)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.FE)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.Gt)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Dg)&&(A.
_cycle!=E))A._Mark(A._cycle=E);if((A=this.Ko)&&(A._cycle!=E))A._Mark(A._cycle=E);
if((A=this.J)&&(A._cycle!=E))A._Mark(A._cycle=E);},J:null,_cycle:0,_observers:null
,_className:"Core::DialogContext"};D.On={Bj:null,AS:null,AO:null,OY:false,SA:function(
){if(!this.Bj)return;var DO=this.Bj;this.Bj.DM=null;this.Bj=null;B.pe([this,this.
NF],this);DO.N1(this);},SU:function(Ab){if(!!this.Bj)return;if(!this.AO)return;this.
Bj=this.AO;this.AO=this.AO.Z;if(!!this.AO)this.AO.X=null;else this.AS=null;this.
Bj.Z=null;this.OY=true;this.Bj.EU(this);this.OY=false;},SZ:function(Ab){B.pe([this
,this.SU],this);},SY:function(Ab){B.pe([this,this.SZ],this);},NF:function(Ab){B.
pe([this,this.SY],this);},PF:function(Bv){if(!Bv||!Bv.DM)return;if(Bv.DM!==this)
throw new Error(JR);var Pu=false;if(this.Bj===Bv){this.Bj=null;Pu=true;B.pe([this
,this.NF],this);}else{if(!!Bv.Z)Bv.Z.X=Bv.X;else this.AS=Bv.X;if(!!Bv.X)Bv.X.Z=Bv.
Z;else this.AO=Bv.Z;Bv.X=null;Bv.Z=null;}Bv.DM=null;if(Pu)Bv.N0(this);},QL:function(
Bv,Sr){if(!Bv)return;if(!!Bv.DM)throw new Error(JS);Bv.DM=this;if(Sr){Bv.Z=this.
AO;if(!!this.AO)this.AO.X=Bv;else this.AS=Bv;this.AO=Bv;}else{Bv.X=this.AS;if(!!
this.AS)this.AS.Z=Bv;else this.AO=Bv;this.AS=Bv;}if(!this.Bj)B.pe([this,this.NF]
,this);},_Init:function(aArg){this.__proto__=D.On;B.h7++;},_Done:function(){this.
__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.
Bj)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.AS)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.AO)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.J)&&(A._cycle!=E
))A._Mark(A._cycle=E);},J:null,_cycle:0,_observers:null,_className:"Core::TaskQueue"
};D.JD={DM:null,X:null,Z:null,N1:function(JX){},N0:function(JX){},EU:function(JX
){this.NQ();},Di:function(){if(!!this.DM&&(this.DM.Bj===this))this.DM.SA();},NQ:
function(){if(!!this.DM)this.DM.PF(this);},Md:function(){return!!this.DM&&(this.
DM.Bj===this);},_Init:function(aArg){this.__proto__=D.JD;B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.DM)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.X)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.Z)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.J)&&(A._cycle
!=E))A._Mark(A._cycle=E);},J:null,_cycle:0,_observers:null,_className:"Core::Task"
};D.Gd={resource:null,Dk:function(){this.resource=null;},CM:function(aArg){this.
resource=aArg;},_Init:function(aArg){this.__proto__=D.Gd;this.CM(aArg);B.h7++;},
_Done:function(){this.Dk();this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(E){var A;if((A=this.J)&&(A._cycle!=E))A._Mark(A._cycle=E);},J:null,_cycle:
0,_observers:null,_className:"Core::Resource"};D.Timer={GO:null,timer:null,AC:0,
Period:1000,Ii:0,AM:false,Dk:function(){var tmp=this.timer;if(!!tmp)tmp.DestroyTimer(
);this.timer=null;},LE:function(aBegin,aPeriod){if(aBegin<0)aBegin=0;if(aPeriod<
0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>0)||(aPeriod>0)))tmp=B.z8(this,
this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(aBegin,aPeriod);}this.timer=
tmp;},GJ:function(C){if(C<0)C=0;if(C===this.Period)return;this.Period=C;if(this.
AM)this.LE(this.Ii,C);},GG:function(C){if(C<0)C=0;if(C===this.Ii)return;this.Ii=
C;if(this.AM)this.LE(C,this.Period);},Ao:function(C){if(C===this.AM)return;this.
AM=C;if(C)this.LE(this.Ii,this.Period);else this.LE(0,0);this.AC=this.Jc();},Jc:
function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.v$)|0;return ticksCount;
},Trigger:function(){var A;this.AC=this.Jc();if(!this.Period)this.Ao(false);(A=this.
GO)?A[1].call(A[0],this):null;},_Init:function(aArg){this.__proto__=D.Timer;B.h7++;
},_Done:function(){this.Dk();this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(E){var A;if((A=this.GO)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=
this.J)&&(A._cycle!=E))A._Mark(A._cycle=E);},J:null,_cycle:0,_observers:null,_className:
"Core::Timer"};D.AC={K6:0,Mp:0,Ma:0,I9:0,KT:0,Op:0,SK:function(){var result=0;{var
d=new Date;result=Math.trunc(d.getTime()/1000-(d.getTimezoneOffset()*60));}return result;
},Ql:function(C){var A;C+=62162035200;if(C<0)C=0;var I6=Math.trunc(C/86400)|0;var
OU=(((I6>=0)?I6:I6-146096)/146097)|0;var J6=I6-(OU*146097);var LR=((((J6-((J6/1460
)|0))+((J6/36524)|0))-((J6/146096)|0))/365)|0;var BE=LR+(OU*400);var OT=J6-(((365
*LR)+((LR/4)|0))-((LR/100)|0));var Nx=(((5*OT)+2)/153)|0;var d=(OT-((((153*Nx)+2
)/5)|0))+1;var Df=Nx+((Nx<10)?3:-9);var A1=Math.trunc(C/3600)%24|0;var M=Math.trunc(
C/60)%60|0;var EC=C%60|0;this.Op=BE+((Df<=2)?1:0);this.Qg(Df);this.GH(d);this.Qb(
A1+((A1<0)?24:0));this.Qf(M+((M<0)?60:0));this.Qj(EC+((EC<0)?60:0));},P8:function(
){return B._NewObject(D.AC,0).Initialize(this.SK());},HD:function(){var A;var d=
this.I9;var Df=this.KT+((this.KT>2)?-2:10);var BE=this.Op-((this.KT<=2)?1:0);var
Al=(BE/100)|0;BE%=100;d+=((((((((26*Df)-2)/10)|0)+BE)+((BE/4)|0))+((Al/4)|0))-(2
*Al));if(d>=0)return d%7;else return(7-(-d%7))%7;},Qj:function(C){if(C<0)C=0;if(
C>59)C=59;this.K6=C;},Qf:function(C){if(C<0)C=0;if(C>59)C=59;this.Mp=C;},Qb:function(
C){if(C<0)C=0;if(C>23)C=23;this.Ma=C;},GH:function(C){if(C<1)C=1;if(C>31)C=31;this.
I9=C;},Qg:function(C){if(C<1)C=1;if(C>12)C=12;this.KT=C;},Initialize:function(Sp
){this.Ql(Sp);return this;},_Init:function(aArg){this.__proto__=D.AC;B.h7++;},_Done:
function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var
A;if((A=this.J)&&(A._cycle!=E))A._Mark(A._cycle=E);},J:null,_cycle:0,_observers:
null,_className:"Core::Time"};D.Og={Ms:null,Ad:null,O$:function(Ab){var A;(A=this.
Ms)?A[1].call(A[0],this):null;},Fp:function(C){if(B.aaZ(this.Ad,C))return;if(!!this.
Ad)B.z$([this,this.O$],this.Ad,0);this.Ad=C;if(!!this.Ad)B.zX([this,this.O$],this.
Ad,0);},_Init:function(aArg){this.__proto__=D.Og;B.h7++;},_Done:function(){this.
__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.
Ms)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ad)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.J)&&(A._cycle!=E))A._Mark(A._cycle=E);},J:null
,_cycle:0,_observers:null,_className:"Core::PropertyObserver"};D.UJ={AY:0x1,Tm:0x2
,TT:0x4,UG:0x8,AM:0x10,Gf:0x20,TU:0x40,T7:0x80,TR:0x100,T0:0x200,TL:0x400,Uh:0x800
,K_:0x1000,UI:0x2000,Ub:0x4000,Uc:0x8000,TE:0x10000,Ua:0x20000,Us:0x40000,TF:0x80000
,Ug:0x100000,TD:0x200000};D.Cm={Ui:0x1,Uj:0x2,Ti:0x4,Tj:0x8,Tk:0x10,Th:0x20};D.TX={
P6:0,UD:1,Tt:2,T1:3,Ul:4,UE:5,UF:6,Tu:7,Tv:8,T3:9,T2:10,Un:11,Um:12};D.KI={P6:0,
UB:1,Left:2,Tr:3,QQ:4,PD:5,UC:6,Right:7,Ts:8};D.KeyCode={NoKey:0,Ok:1,Exit:2,Menu:
3,Up:4,Down:5,Left:6,Right:7,PageUp:8,PageDown:9,Key0:10,Key1:11,Key2:12,Key3:13
,Key4:14,Key5:15,Key6:16,Key7:17,Key8:18,Key9:19,Red:20,Green:21,Blue:22,Yellow:
23,White:24,Magenta:25,F1:26,F2:27,F3:28,F4:29,F5:30,F6:31,F7:32,F8:33,F9:34,F10:
35,ChannelUp:36,ChannelDown:37,Display:38,SkipPrev:39,SkipNext:40,Home:41,End:42
,Insert:43,Delete:44,Clear:45,VolumeUp:46,VolumeDown:47,Show:48,Hide:49,Play:50,
Pause:51,Record:52,Stop:53,Rev:54,Fwd:55,SlowRev:56,SlowFwd:57,SkipBwd:58,SkipFwd:
59,Repeat:60,Eject:61,Help:62,TV:63,DVD:64,VCR:65,EPG:66,OSD:67,Text:68,PIP:69,Audio:
70,Clock:71,Timer:72,Navigation:73,Karaoke:74,Game:75,Subtitle:76,Zoom:77,Index:
78,Info:79,Power:80,Setup:81,Angle:82,Mode:83,Mute:84,User0:85,User1:86,User2:87
,User3:88,User4:89,User5:90,User6:91,User7:92,User8:93,User9:94,User10:95,User11:
96,User12:97,User13:98,User14:99,User15:100,User16:101,User17:102,User18:103,User19:
104,KeyA:105,KeyB:106,KeyC:107,KeyD:108,KeyE:109,KeyF:110,KeyG:111,KeyH:112,KeyI:
113,KeyJ:114,KeyK:115,KeyL:116,KeyM:117,KeyN:118,KeyO:119,KeyP:120,KeyQ:121,KeyR:
122,KeyS:123,KeyT:124,KeyU:125,KeyV:126,KeyW:127,KeyX:128,KeyY:129,KeyZ:130,Space:
131,Plus:132,Minus:133,Multiply:134,Divide:135,Equals:136,Period:137,Comma:138,Colon:
139,Semicolon:140,AlphaKeys:141,AlphaOrDigitKeys:142,DigitKeys:143,HexDigitKeys:
144,CharacterKeys:145,ControlKeys:146,CursorKeys:147,AnyKey:148,Enter:149,Escape:
150,Backspace:151,Tab:152,CtrlKeyA:153,CtrlKeyB:154,CtrlKeyC:155,CtrlKeyD:156,CtrlKeyE:
157,CtrlKeyF:158,CtrlKeyG:159,CtrlKeyH:160,CtrlKeyI:161,CtrlKeyJ:162,CtrlKeyK:163
,CtrlKeyL:164,CtrlKeyM:165,CtrlKeyN:166,CtrlKeyO:167,CtrlKeyP:168,CtrlKeyQ:169,CtrlKeyR:
170,CtrlKeyS:171,CtrlKeyT:172,CtrlKeyU:173,CtrlKeyV:174,CtrlKeyW:175,CtrlKeyX:176
,CtrlKeyY:177,CtrlKeyZ:178,CtrlSpace:179,CtrlKey0:180,CtrlKey1:181,CtrlKey2:182,
CtrlKey3:183,CtrlKey4:184,CtrlKey5:185,CtrlKey6:186,CtrlKey7:187,CtrlKey8:188,CtrlKey9:
189,CtrlF1:190,CtrlF2:191,CtrlF3:192,CtrlF4:193,CtrlF5:194,CtrlF6:195,CtrlF7:196
,CtrlF8:197,CtrlF9:198,CtrlF10:199,CtrlEnter:200,CtrlEscape:201,CtrlUp:202,CtrlDown:
203,CtrlLeft:204,CtrlRight:205,CtrlPageUp:206,CtrlPageDown:207,CtrlBackspace:208
,CtrlInsert:209,CtrlDelete:210,CtrlHome:211,CtrlEnd:212,CtrlTab:213,CtrlShiftKeyA:
214,CtrlShiftKeyB:215,CtrlShiftKeyC:216,CtrlShiftKeyD:217,CtrlShiftKeyE:218,CtrlShiftKeyF:
219,CtrlShiftKeyG:220,CtrlShiftKeyH:221,CtrlShiftKeyI:222,CtrlShiftKeyJ:223,CtrlShiftKeyK:
224,CtrlShiftKeyL:225,CtrlShiftKeyM:226,CtrlShiftKeyN:227,CtrlShiftKeyO:228,CtrlShiftKeyP:
229,CtrlShiftKeyQ:230,CtrlShiftKeyR:231,CtrlShiftKeyS:232,CtrlShiftKeyT:233,CtrlShiftKeyU:
234,CtrlShiftKeyV:235,CtrlShiftKeyW:236,CtrlShiftKeyX:237,CtrlShiftKeyY:238,CtrlShiftKeyZ:
239,CtrlShiftSpace:240,CtrlShiftKey0:241,CtrlShiftKey1:242,CtrlShiftKey2:243,CtrlShiftKey3:
244,CtrlShiftKey4:245,CtrlShiftKey5:246,CtrlShiftKey6:247,CtrlShiftKey7:248,CtrlShiftKey8:
249,CtrlShiftKey9:250,CtrlShiftF1:251,CtrlShiftF2:252,CtrlShiftF3:253,CtrlShiftF4:
254,CtrlShiftF5:255,CtrlShiftF6:256,CtrlShiftF7:257,CtrlShiftF8:258,CtrlShiftF9:
259,CtrlShiftF10:260,CtrlShiftEnter:261,CtrlShiftEscape:262,CtrlShiftUp:263,CtrlShiftDown:
264,CtrlShiftLeft:265,CtrlShiftRight:266,CtrlShiftPageUp:267,CtrlShiftPageDown:268
,CtrlShiftBackspace:269,CtrlShiftInsert:270,CtrlShiftDelete:271,CtrlShiftHome:272
,CtrlShiftEnd:273,CtrlShiftTab:274,AltF1:275,AltF2:276,AltF3:277,AltF4:278,AltF5:
279,AltF6:280,AltF7:281,AltF8:282,AltF9:283,AltF10:284,AltEnter:285,AltEscape:286
,AltUp:287,AltDown:288,AltLeft:289,AltRight:290,AltPageUp:291,AltPageDown:292,AltBackspace:
293,AltInsert:294,AltDelete:295,AltHome:296,AltEnd:297,AltTab:298,AltShiftF1:299
,AltShiftF2:300,AltShiftF3:301,AltShiftF4:302,AltShiftF5:303,AltShiftF6:304,AltShiftF7:
305,AltShiftF8:306,AltShiftF9:307,AltShiftF10:308,AltShiftEnter:309,AltShiftEscape:
310,AltShiftUp:311,AltShiftDown:312,AltShiftLeft:313,AltShiftRight:314,AltShiftPageUp:
315,AltShiftPageDown:316,AltShiftBackspace:317,AltShiftInsert:318,AltShiftDelete:
319,AltShiftHome:320,AltShiftEnd:321,AltShiftTab:322,ShiftF1:323,ShiftF2:324,ShiftF3:
325,ShiftF4:326,ShiftF5:327,ShiftF6:328,ShiftF7:329,ShiftF8:330,ShiftF9:331,ShiftF10:
332,ShiftEnter:333,ShiftEscape:334,ShiftUp:335,ShiftDown:336,ShiftLeft:337,ShiftRight:
338,ShiftPageUp:339,ShiftPageDown:340,ShiftBackspace:341,ShiftInsert:342,ShiftDelete:
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};D.Uk={UN:0x1,UK:0x2,UL:0x4,UM:0x8,T5:
0x10,TW:0x20};
D._Init=function(){D.EV.__proto__=D.Cq;D.AX.__proto__=D.Cq;D.H.__proto__=D.AX;D.Root.
__proto__=D.H;D.KeyEvent.__proto__=D.Event;D.L0.__proto__=D.Event;D.FL.__proto__=
D.Event;D.I$.__proto__=D.Event;D.Jw.__proto__=D.AX;D.Bu.__proto__=D.EV;D.Do.__proto__=
D.AX;D.KQ.__proto__=D.KP;};D._ReInit=function(){};D.Cx=function(E){};return D;})(
);

/* Embedded Wizard */