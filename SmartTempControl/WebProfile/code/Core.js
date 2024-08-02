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
var AG=[0,0];var AZ=[0,0,0,0];var Cc="The view does not belong to this group";var
Et=[800,480];var DA="The dialog component is already presented";var Eu="No fader to perform the fade-in/out operation";
var Ev="Trying to use the same fader twice";var E2="Trying to fade-in/out a group which belongs to another owner";
var Gj="No view to restack";var HM="View is not in this group";var JM="No view to remove";
var JN="No view to add";var JO="View already in a group";var JP="Recursive invalidate during active update cycle.";
var HN=[-8,-8,9,9];var HO=[0,0,1,1];var IT="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";var JQ="Trying to cancel a task not belonging to this queue!";
var JR="Trying to enqueue a task twice!";
D.Cq={Z:null,X:null,G:null,A$:null,F:0x103,Dz:0,Cm:0x14,J_:function(As,Lb){},IN:function(
C){if(this.Dz===C)return;this.Dz=C;if(!!this.G){var Gw=this.Z;var An=0;while(!!Gw&&(
C>Gw.Dz)){Gw=Gw.Z;An=An+1;}Gw=this.X;while(!!Gw&&(C<Gw.Dz)){Gw=Gw.X;An=An-1;}if(
!!An)this.G.QG(this,An);}},IM:function(C){var A;var An=C^this.Cm;if(!An)return;this.
Cm=C;if(!!this.A$&&!((this.F&0x400)===0x400)){this.G.F=this.G.F|0x5000;B.pe([A=this.
G,A.CH],this);this.G.Ag([0,0,(A=this.G.Q)[2]-A[0],A[3]-A[1]]);}if(!!this.A$&&((this.
F&0x400)===0x400)){this.A$.H_.F=this.A$.H_.F|0x1000;this.G.F=this.G.F|0x4000;B.pe([
A=this.G,A.CH],this);}},Jc:function(){var Av=this.G;while(!!Av){var DM=(D.Root.isPrototypeOf(
Av)?Av:null);if(!!DM)return DM;Av=Av.G;}return null;},CJ:function(AT,aClip,aOffset
,AE,aBlend){},GetClipping:function(){return this.GetExtent();},BG:function(AK){return null;
},FM:function(Az,W,CQ,Fy,FC,HW){return null;},Kz:function(Az){return Az;},KB:function(
As,DC){return AG;},Mq:function(aOffset,La){},GetExtent:function(){return AZ;},AB:
function(C_,DB){var A;if(((this.F&0x200)===0x200))C_=C_&~0x400;var Nz=(this.F&~DB
)|C_;var D6=Nz^this.F;this.F=Nz;if(!!this.G&&!!(D6&0x14)){var OW=((this.F&0x14)===
0x14);if(OW&&!this.G.CB)this.G.Dx(this);if(!OW&&(this.G.CB===this))this.G.Dx(this.
G.NV(this,0x14));}if(!!this.G&&!!(D6&0x403))this.G.Ag(this.GetClipping());if(((!
!this.A$&&!!this.G)&&((Nz&0x400)===0x400))&&((D6&0x1)===0x1)){this.F=this.F|0x800;
this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CH],this);}if(!!this.G&&((D6&0x400)===
0x400)){this.A$=null;this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G
,A.CH],this);}if(((((D6&0x100000)===0x100000)&&((DB&0x100000)===0x100000))&&((this.
F&0x10)===0x10))&&!((this.F&0x200080)===0x200080))this.AB(0x0,0x10);if(((((D6&0x100000
)===0x100000)&&((C_&0x100000)===0x100000))&&!((this.F&0x10)===0x10))&&(!((this.F&
0x200000)===0x200000)||((!((this.F&0x80)===0x80)&&!!this.G)&&((this.G.F&0x10)===
0x10))))this.AB(0x10,0x0);if(((((D6&0x200000)===0x200000)&&((DB&0x200000)===0x200000
))&&!((this.F&0x10)===0x10))&&((this.F&0x100000)===0x100000))this.AB(0x10,0x0);if((((((
D6&0x200000)===0x200000)&&((C_&0x200000)===0x200000))&&((this.F&0x100010)===0x100010
))&&!((this.F&0x80)===0x80))&&((!!this.G&&!((this.G.F&0x10)===0x10))||((((this.F&
0x10000)===0x10000)&&!!this.G)&&(this.G.Bk.Ba!==this))))this.AB(0x0,0x10);},_Init:
function(aArg){this.__proto__=D.Cq;B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.Z)&&(A._cycle!=
E))A._Mark(A._cycle=E);if((A=this.X)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.
G)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.A$)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.J)&&(A._cycle!=E))A._Mark(A._cycle=E);},J:null,_cycle:0,_observers:
null,_className:"Core::View"};D.EW={BS:B.wf,Cp:B.wf,BR:B.wf,Co:B.wf,J_:function(
As,Lb){var Au=B._NewObject(D.KQ,0);this.A$=null;Au.CV=this.GetExtent();Au.Ax=As;
Au.H_=Lb;Au.Ko=this.Co;Au.Kp=this.BR;Au.Kq=this.Cp;Au.Kr=this.BS;this.A$=Au;},KB:
function(As,DC){var A;var Bg=this.Cm;var Au=(D.KQ.isPrototypeOf(A=this.A$)?A:null
);var Ae=Au.CV[0];var Af=Au.CV[1];var Ah=Au.CV[2];var Aa=Au.CV[3];var CU=[As[2]-
As[0],As[3]-As[1]];var A9=Ah-Ae;var A1=Aa-Af;if(!DC){var D_=[(A=Au.Ax)[2]-A[0],A[
3]-A[1]];Ae=Ae-Au.Ax[0];Af=Af-Au.Ax[1];if(D_[0]!==CU[0]){var Bx=((Bg&0x4)===0x4);
var By=((Bg&0x8)===0x8);var Fc=((Bg&0x1)===0x1);if(!Bx&&(Fc||!By))Ae=((Ae*CU[0])
/D_[0])|0;if(!By&&(Fc||!Bx)){Ah=Ah-Au.Ax[0];Ah=((Ah*CU[0])/D_[0])|0;Ah=Ah-CU[0];
}else Ah=Ah-Au.Ax[2];Ae=Ae+As[0];Ah=Ah+As[2];if(!Fc){if(Bx&&!By)Ah=Ae+A9;else if(
!Bx&&By)Ae=Ah-A9;else{Ae=Ae+((((Ah-Ae)-A9)/2)|0);Ah=Ae+A9;}}}else{Ah=Ah-Au.Ax[2];
Ae=Ae+As[0];Ah=Ah+As[2];}if(D_[1]!==CU[1]){var Bz=((Bg&0x10)===0x10);var Bw=((Bg&
0x20)===0x20);var Fd=((Bg&0x2)===0x2);if(!Bz&&(Fd||!Bw))Af=((Af*CU[1])/D_[1])|0;
if(!Bw&&(Fd||!Bz)){Aa=Aa-Au.Ax[1];Aa=((Aa*CU[1])/D_[1])|0;Aa=Aa-CU[1];}else Aa=Aa-
Au.Ax[3];Af=Af+As[1];Aa=Aa+As[3];if(!Fd){if(Bz&&!Bw)Aa=Af+A1;else if(!Bz&&Bw)Af=
Aa-A1;else{Af=Af+((((Aa-Af)-A1)/2)|0);Aa=Af+A1;}}}else{Aa=Aa-Au.Ax[3];Af=Af+As[1
];Aa=Aa+As[3];}}else{switch(DC){case 3:{Ae=As[0];Ah=Ae+A9;}break;case 4:{Ah=As[2
];Ae=Ah-A9;}break;case 1:{Af=As[1];Aa=Af+A1;}break;case 2:{Aa=As[3];Af=Aa-A1;}break;
default:;}if((DC===3)||(DC===4)){var Bz=((Bg&0x10)===0x10);var Bw=((Bg&0x20)===0x20
);var Fd=((Bg&0x2)===0x2);if(Fd){Af=As[1];Aa=As[3];}else if(Bz&&!Bw){Af=As[1];Aa=
Af+A1;}else if(Bw&&!Bz){Aa=As[3];Af=Aa-A1;}else{Af=As[1]+((((As[3]-As[1])-A1)/2)|
0);Aa=Af+A1;}}if((DC===1)||(DC===2)){var Bx=((Bg&0x4)===0x4);var By=((Bg&0x8)===
0x8);var Fc=((Bg&0x1)===0x1);if(Fc){Ae=As[0];Ah=As[2];}else if(Bx&&!By){Ae=As[0];
Ah=Ae+A9;}else if(By&&!Bx){Ah=As[2];Ae=Ah-A9;}else{Ae=As[0]+((((As[2]-As[0])-A9)
/2)|0);Ah=Ae+A9;}}}Au.isEmpty=(Ae>=Ah)||(Af>=Aa);A9=(Ah-Ae)-1;A1=(Aa-Af)-1;var Gq=
Au.CV[0];var Gr=Au.CV[1];var FG=(Au.CV[2]-Gq)-1;var FF=(Au.CV[3]-Gr)-1;if(!FG)FG=
1;if(!FF)FF=1;if(((this.F&0x100)===0x100)){this.Co=[Ae+((((Au.Ko[0]-Gq)*A9)/FG)|
0),Af+((((Au.Ko[1]-Gr)*A1)/FF)|0)];this.BR=[Ae+((((Au.Kp[0]-Gq)*A9)/FG)|0),Af+((((
Au.Kp[1]-Gr)*A1)/FF)|0)];this.Cp=[Ae+((((Au.Kq[0]-Gq)*A9)/FG)|0),Af+((((Au.Kq[1]-
Gr)*A1)/FF)|0)];this.BS=[Ae+((((Au.Kr[0]-Gq)*A9)/FG)|0),Af+((((Au.Kr[1]-Gr)*A1)/
FF)|0)];}else{this.B2([Ae+((((Au.Ko[0]-Gq)*A9)/FG)|0),Af+((((Au.Ko[1]-Gr)*A1)/FF
)|0)]);this.B3([Ae+((((Au.Kp[0]-Gq)*A9)/FG)|0),Af+((((Au.Kp[1]-Gr)*A1)/FF)|0)]);
this.B4([Ae+((((Au.Kq[0]-Gq)*A9)/FG)|0),Af+((((Au.Kq[1]-Gr)*A1)/FF)|0)]);this.B5([
Ae+((((Au.Kr[0]-Gq)*A9)/FG)|0),Af+((((Au.Kr[1]-Gr)*A1)/FF)|0)]);this.A$=Au;}return[
A9+1,A1+1];},Mq:function(aOffset,La){if(La){this.Co=B.abf(this.Co,aOffset);this.
BR=B.abf(this.BR,aOffset);this.Cp=B.abf(this.Cp,aOffset);this.BS=B.abf(this.BS,aOffset
);}else{this.B2(B.abf(this.Co,aOffset));this.B3(B.abf(this.BR,aOffset));this.B4(
B.abf(this.Cp,aOffset));this.B5(B.abf(this.BS,aOffset));}},GetExtent:function(){
if(!!this.A$&&this.A$.isEmpty)return AZ;var Ae=this.Co[0];var Af=this.Co[1];var Ah=
this.Cp[0];var Aa=this.Cp[1];if((((this.BS[0]!==Ae)||(this.BR[1]!==Af))||(this.BR[
0]!==Ah))||(this.BS[1]!==Aa)){if(this.BR[0]<Ae)Ae=this.BR[0];if(this.Cp[0]<Ae)Ae=
this.Cp[0];if(this.BS[0]<Ae)Ae=this.BS[0];if(this.BR[1]<Af)Af=this.BR[1];if(this.
Cp[1]<Af)Af=this.Cp[1];if(this.BS[1]<Af)Af=this.BS[1];if(this.Co[0]>Ah)Ah=this.Co[
0];if(this.BR[0]>Ah)Ah=this.BR[0];if(this.BS[0]>Ah)Ah=this.BS[0];if(this.Co[1]>Aa
)Aa=this.Co[1];if(this.BR[1]>Aa)Aa=this.BR[1];if(this.BS[1]>Aa)Aa=this.BS[1];}else{
var tmp;if(Ah<Ae){tmp=Ae;Ae=Ah;Ah=tmp;}if(Aa<Af){tmp=Af;Af=Aa;Aa=tmp;}}return[Ae
,Af,Ah+1,Aa+1];},B5:function(C){var A;if(B.aaX(C,this.BS))return;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ag(this.GetClipping());this.A$=null;this.BS=C;if(!!this.
G&&((this.F&0x1)===0x1))this.G.Ag(this.GetClipping());if((!!this.G&&((this.F&0x400
)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.
F|0x4000;B.pe([A=this.G,A.CH],this);}},B4:function(C){var A;if(B.aaX(C,this.Cp))
return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.GetClipping());this.A$=null;
this.Cp=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.GetClipping());if((!!
this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|
0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CH],this);}},B3:function(C){var A;
if(B.aaX(C,this.BR))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.GetClipping(
));this.A$=null;this.BR=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.GetClipping(
));if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CH],this);}},B2:function(
C){var A;if(B.aaX(C,this.Co))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(
this.GetClipping());this.A$=null;this.Co=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ag(this.GetClipping());if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000
)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CH],this
);}},Me:function(HV){var Bf=B.abi(4,B.wf,null);var M=0;var Bn=3;var No=false;var
Np=false;Bf.Set(0,this.Co);Bf.Set(1,this.BR);Bf.Set(2,this.Cp);Bf.Set(3,this.BS);
while(M<4){var Pt=Bf.Get(M)[0];var LQ=Bf.Get(M)[1];var Td=Bf.Get(Bn)[0];var NN=Bf.
Get(Bn)[1];if(((LQ>HV[1])!==(NN>HV[1]))||((LQ<HV[1])!==(NN<HV[1]))){var Ie=((((Td-
Pt)*(HV[1]-LQ))/(NN-LQ))|0)+Pt;if(HV[0]>Ie)No=!No;if(HV[0]<Ie)Np=!Np;}Bn=M;M=M+1;
}return No||Np;},PW:function(){return((((this.Co[0]===this.BS[0])&&(this.BR[0]===
this.Cp[0]))&&(this.Co[1]===this.BR[1]))&&(this.Cp[1]===this.BS[1]))||((((this.Co[
0]===this.BR[0])&&(this.Cp[0]===this.BS[0]))&&(this.Co[1]===this.BS[1]))&&(this.
BR[1]===this.Cp[1]));},_Init:function(aArg){D.Cq._Init.call(this,aArg);this.__proto__=
D.EW;},_className:"Core::QuadView"};D.AX={Q:B.wg,J_:function(As,Lb){var Au=B._NewObject(
D.KP,0);Au.CV=this.Q;Au.Ax=As;Au.H_=Lb;this.A$=Au;},KB:function(As,DC){var A;var
Bg=this.Cm;var Au=this.A$;var Ae=Au.CV[0];var Af=Au.CV[1];var Ah=Au.CV[2];var Aa=
Au.CV[3];var CU=[As[2]-As[0],As[3]-As[1]];var A9=Ah-Ae;var A1=Aa-Af;if(!DC){var D_=[(
A=Au.Ax)[2]-A[0],A[3]-A[1]];Ae=Ae-Au.Ax[0];Af=Af-Au.Ax[1];if(D_[0]!==CU[0]){var Bx=((
Bg&0x4)===0x4);var By=((Bg&0x8)===0x8);var Fc=((Bg&0x1)===0x1);if(!Bx&&(Fc||!By)
)Ae=((Ae*CU[0])/D_[0])|0;if(!By&&(Fc||!Bx)){Ah=Ah-Au.Ax[0];Ah=((Ah*CU[0])/D_[0])|
0;Ah=Ah-CU[0];}else Ah=Ah-Au.Ax[2];Ae=Ae+As[0];Ah=Ah+As[2];if(!Fc){if(Bx&&!By)Ah=
Ae+A9;else if(!Bx&&By)Ae=Ah-A9;else{Ae=Ae+((((Ah-Ae)-A9)/2)|0);Ah=Ae+A9;}}}else{
Ah=Ah-Au.Ax[2];Ae=Ae+As[0];Ah=Ah+As[2];}if(D_[1]!==CU[1]){var Bz=((Bg&0x10)===0x10
);var Bw=((Bg&0x20)===0x20);var Fd=((Bg&0x2)===0x2);if(!Bz&&(Fd||!Bw))Af=((Af*CU[
1])/D_[1])|0;if(!Bw&&(Fd||!Bz)){Aa=Aa-Au.Ax[1];Aa=((Aa*CU[1])/D_[1])|0;Aa=Aa-CU[
1];}else Aa=Aa-Au.Ax[3];Af=Af+As[1];Aa=Aa+As[3];if(!Fd){if(Bz&&!Bw)Aa=Af+A1;else
if(!Bz&&Bw)Af=Aa-A1;else{Af=Af+((((Aa-Af)-A1)/2)|0);Aa=Af+A1;}}}else{Aa=Aa-Au.Ax[
3];Af=Af+As[1];Aa=Aa+As[3];}}else{switch(DC){case 3:{Ae=As[0];Ah=Ae+A9;}break;case
4:{Ah=As[2];Ae=Ah-A9;}break;case 1:{Af=As[1];Aa=Af+A1;}break;case 2:{Aa=As[3];Af=
Aa-A1;}break;default:;}if((DC===3)||(DC===4)){var Bz=((Bg&0x10)===0x10);var Bw=((
Bg&0x20)===0x20);var Fd=((Bg&0x2)===0x2);if(Fd){Af=As[1];Aa=As[3];}else if(Bz&&!
Bw){Af=As[1];Aa=Af+A1;}else if(Bw&&!Bz){Aa=As[3];Af=Aa-A1;}else{Af=As[1]+((((As[
3]-As[1])-A1)/2)|0);Aa=Af+A1;}}if((DC===1)||(DC===2)){var Bx=((Bg&0x4)===0x4);var
By=((Bg&0x8)===0x8);var Fc=((Bg&0x1)===0x1);if(Fc){Ae=As[0];Ah=As[2];}else if(Bx&&
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
};D.H={AO:null,AS:null,Lv:null,Bk:null,D7:null,H$:null,CB:null,Bi:255,J6:0,J9:0,
J8:0,J7:0,CL:function(aArg){this.Bt();},CJ:function(AT,aClip,aOffset,AE,aBlend){
var A;AE=((AE+1)*this.Bi)>>8;aBlend=aBlend&&((this.F&0x2)===0x2);this.SG(AT,aClip
,B.abf(aOffset,this.Q.slice(0,2)),AE,aBlend);},GetClipping:function(){var A;var N=
this.Q;N=[].concat(N[0]-this.J7,N.slice(1,4));N=B.abP(N,N[1]-this.J9);N=B.abN(N,
N[2]+this.J8);N=[].concat(N.slice(0,3),N[3]+this.J6);if(((this.F&0x80000)===0x80000
)){var Ib=AZ;var K;for(K=this.AO;!!K;K=K.Z)if(((K.F&0x1)===0x1))Ib=B.wC(Ib,K.GetClipping(
));N=B.wC(N,B.abh(Ib,this.Q.slice(0,2)));}return N;},FM:function(Az,W,CQ,Fy,FC,HW
){var A;var K=this.AS;var H3=null;var Y=AZ;var Db=null;var Nv=!!this.D7&&(!!this.
D7.Bj||!!this.D7.AO);if(((A=B.lb(Az,this.Q))[0]>=A[2])||(A[1]>=A[3]))return null;
Az=B.abg(Az,this.Q.slice(0,2));if(!!FC){K=FC;while(!!K&&(K.G!==this))K=K.G;}while(
!!K){if(((K.F&0x400)===0x400)&&!Db){Db=K.X;while(!!Db&&!((Db.F&0x200)===0x200))Db=
Db.X;if(!!Db)Y=B.lb(Az,Db.GetExtent());else Y=AZ;}if(Db===K){Db=null;Y=AZ;}if((!
!Fy&&!!(D.H.isPrototypeOf(K)?K:null))||((((((K.F&0x8)===0x8)&&((K.F&0x10)===0x10
))&&!((K.F&0x40000)===0x40000))&&!((K.F&0x20000)===0x20000))&&(!((K.F&0x10000)===
0x10000)||((this.Bk.Ba===K)&&!Nv)))){var CV=K.GetExtent();var Lo=Fy;var H0=null;
if(Lo===K)Lo=null;if(((K.F&0x400)===0x400)){if(!(((A=B.lb(CV,Y))[0]>=A[2])||(A[1
]>=A[3])))H0=K.FM(Y,W,CQ,Lo,FC,HW);}else if(!(((A=B.lb(CV,Az))[0]>=A[2])||(A[1]>=
A[3]))||(Fy===K))H0=K.FM(Az,W,CQ,Lo,FC,HW);K=K.X;if(!!H0){if(!H3||((H0.I_<H3.I_)&&(
H0.I_>=0)))H3=H0;if(!H0.I_)K=null;}}else K=K.X;FC=null;}return H3;},Kz:function(
Az){var A;var U;var K=this.AO;var HY=AZ;var Km=true;var result=(Az=U=B.abg(Az,this.
Q.slice(0,2)),U);while(!!K){if(((K.F&0x200)===0x200)){var I2=(D.Jv.isPrototypeOf(
K)?K:null);HY=B.lb(Az,I2.Q);Km=((I2.F&0x1)===0x1);}if(((K.F&0x1)===0x1)){if(((K.
F&0x400)===0x400)){if(Km){var Y=B.lb(K.GetClipping(),HY);if(!((Y[0]>=Y[2])||(Y[1
]>=Y[3])))result=B.wC(result,K.Kz(Y));}}else{var Y=B.lb(K.GetClipping(),Az);if(!((
Y[0]>=Y[2])||(Y[1]>=Y[3])))result=B.wC(result,K.Kz(Y));}}K=K.Z;}return B.lb(B.abh(
result,this.Q.slice(0,2)),this.Q);},AB:function(C_,DB){var A;var Lz=this.F;if((!
!this.G&&((this.F&0x80001)===0x80001))&&((DB&0x80000)===0x80000))this.G.Ag(this.
GetClipping());D.AX.AB.call(this,C_,DB);if(((!!this.G&&((this.F&0x1)===0x1))&&((
C_&0x80000)===0x80000))&&!((Lz&0x80000)===0x80000))this.G.Ag(this.GetClipping());
var D6=this.F^Lz;if(!!this.CB&&((D6&0x40)===0x40)){if(((this.F&0x40)===0x40))this.
CB.AB(0x40,0x0);else this.CB.AB(0x0,0x40);}if(!!this.Bk&&((D6&0x40)===0x40)){if(((
this.F&0x40)===0x40)&&((this.Bk.Ba.F&0x14)===0x14))this.Bk.Ba.AB(0x40,0x0);else this.
Bk.Ba.AB(0x0,0x40);}if(((D6&0x10)===0x10)){var K;for(K=this.AO;!!K;K=K.Z)if((((K.
F&0x300000)===0x300000)&&!((K.F&0x80)===0x80))&&(!((K.F&0x10000)===0x10000)||(this.
Bk.Ba===K)))K.AB(C_&0x10,DB&0x10);}if(!!D6){this.F=this.F|0x8000;B.pe([this,this.
LO],this);}},R:function(C){var A;if(B.aaY(C,this.Q))return;var G2=[(A=this.Q)[2]-
A[0],A[3]-A[1]];var Ny=[C[2]-C[0],C[3]-C[1]];var I3=!B.aaX(G2,Ny);D.AX.R.call(this
,C);if((I3&&(G2[0]>0))&&(G2[1]>0)){var Ax=[].concat(AG,G2);var K=this.AO;while(!
!K){if((!K.A$&&(K.Cm!==0x14))&&!((K.F&0x400)===0x400))K.J_(Ax,null);K=K.Z;}}if(I3
){this.F=this.F|0x5000;B.pe([this,this.LO],this);}},Pb:function(AK){var OZ=(D.KeyEvent.
isPrototypeOf(AK)?AK:null);var Ey=this.Lv;if(!OZ)return null;while(!!Ey&&(!Ey.AM||
!Ey.BG(OZ)))Ey=Ey.Z;return Ey;},SG:function(AT,aClip,aOffset,AE,aBlend){var A;var
K=this.AO;var HY=AZ;var Km=true;this.PN(AT,aClip,aOffset,AE,aBlend);while(!!K){if(((
K.F&0x200)===0x200)){var I2=(D.Jv.isPrototypeOf(K)?K:null);Km=((I2.F&0x1)===0x1);
HY=aClip;if(!((I2.F&0x80000)===0x80000))HY=B.lb(HY,B.abh(I2.Q,aOffset));}if(((K.
F&0x1)===0x1)){if(((K.F&0x400)===0x400)){if(Km){var Y=B.lb(B.abh(K.GetClipping()
,aOffset),HY);if(!((Y[0]>=Y[2])||(Y[1]>=Y[3])))K.CJ(AT,Y,aOffset,AE,aBlend);}}else{
var Y=B.lb(B.abh(K.GetClipping(),aOffset),aClip);if(!((Y[0]>=Y[2])||(Y[1]>=Y[3])
))K.CJ(AT,Y,aOffset,AE,aBlend);}}K=K.Z;}this.PQ(AT,aClip,aOffset,AE,aBlend);},S4:
function(){var A;var Nm=((this.F&0x1000)===0x1000);var Gs=[0,0,(A=this.Q)[2]-A[0
],A[3]-A[1]];var FH=false;var IY=AZ;var Nk=AZ;var K=this.AS;var Db=null;while(!!
K){if(((K.F&0x800)===0x800)){FH=true;K.F=K.F&~0x800;}if(FH&&((K.F&0x200)===0x200
))FH=false;K=K.X;}FH=false;K=this.AO;if(Nm){this.F=this.F&~0x1000;Nm=!((Gs[0]>=Gs[
2])||(Gs[1]>=Gs[3]));}this.F=this.F|0x2000;while(!!K){if(((K.F&0x400)===0x400)){
if(!!K.A$&&(K.A$.H_!==Db))K.A$=null;if((!K.A$&&FH)&&(K.Cm!==0x14))K.J_(Nk,Db);}if(
!!K.A$){if(Nm&&!((K.F&0x400)===0x400))K.KB(Gs,0);if(FH&&((K.F&0x400)===0x400))K.
KB(Nk,0);}if(((K.F&0x200)===0x200)){FH=((K.F&0x1000)===0x1000);Db=(D.Jv.isPrototypeOf(
K)?K:null);if(FH){K.F=K.F&~0x1000;IY=Db.Q;Nk=IY;FH=!((IY[0]>=IY[2])||(IY[1]>=IY[
3]));}if(FH)this.Ag(Db.Q);}K=K.Z;}this.F=this.F&~0x2000;this.K_([Gs[2]-Gs[0],Gs[
3]-Gs[1]]);},CH:function(Ab){B.pe([this,this.LO],this);},LO:function(Ab){var A;var
Tb=((this.F&0x1000)===0x1000);if(((this.F&0x4000)===0x4000)){this.F=this.F&~0x4000;
this.S4();}if(((this.F&0x8000)===0x8000)||Tb){this.F=this.F&~0x8000;this.Gh(this.
F);}},Dx:function(C){var A;if(!!C&&(C.G!==this))throw new Error(Cc);if(!!C&&!((C.
F&0x14)===0x14))C=null;if(!!C&&((C.F&0x10000)===0x10000))C=null;if(C===this.CB)return;
if(!!this.CB)this.CB.AB(0x0,0x60);this.CB=C;if(!!C){if(((this.F&0x40)===0x40))C.
AB(0x60,0x0);else C.AB(0x20,0x0);}},Ao:function(C){if(C)this.AB(0x100000,0x0);else
this.AB(0x0,0x100000);},Bd:function(C){var A;if(C>255)C=255;if(C<0)C=0;if(C===this.
Bi)return;this.Bi=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ag(this.GetClipping(
));},Oy:function(Tc){this.Bd(Tc);},Ek:function(){var A;return((this.F&0x1)===0x1
);},BQ:function(C){if(C)this.AB(0x1,0x0);else this.AB(0x0,0x1);},ExtendClipping:
function(HR,HS,HT,HQ){var A;var JZ=this.Q;var C$=JZ;if(HR<0)HR=0;if(HR>255)HR=255;
if(HS<0)HS=0;if(HS>255)HS=255;if(HT<0)HT=0;if(HT>255)HT=255;if(HQ<0)HQ=0;if(HQ>255
)HQ=255;C$=[].concat(C$[0]-(Math.max(HR,this.J7)&0xFF),C$.slice(1,4));C$=B.abN(C$
,C$[2]+(Math.max(HS,this.J8)&0xFF));C$=B.abP(C$,C$[1]-(Math.max(HT,this.J9)&0xFF
));C$=[].concat(C$.slice(0,3),C$[3]+(Math.max(HQ,this.J6)&0xFF));if(HR!==this.J7
){if((!!this.G&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var N=C$;N=
B.abN(N,JZ[0]);this.G.Ag(N);}this.J7=HR&0xFF;}if(HS!==this.J8){if((!!this.G&&((this.
F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var N=C$;N=[].concat(JZ[2],N.slice(
1,4));this.G.Ag(N);}this.J8=HS&0xFF;}if(HT!==this.J9){if((!!this.G&&((this.F&0x1
)===0x1))&&!((this.F&0x80000)===0x80000)){var N=C$;N=[].concat(N.slice(0,3),JZ[1
]);this.G.Ag(N);}this.J9=HT&0xFF;}if(HQ!==this.J6){if((!!this.G&&((this.F&0x1)===
0x1))&&!((this.F&0x80000)===0x80000)){var N=C$;N=B.abP(N,JZ[3]);this.G.Ag(N);}this.
J6=HQ&0xFF;}},PQ:function(AT,aClip,aOffset,AE,aBlend){},PN:function(AT,aClip,aOffset
,AE,aBlend){},GetMaximalSize:function(){return Et;},GetMinimalSize:function(){return AG;
},HJ:function(Cs,Dp,Gk,E6,E7,OE,Gl,HU,E5,E3,E4){var A;if(!this.Bk){this.QE(Cs,Dp
,Gk,E6,E7,null,null,E5,E3,E4);return;}var G1=this.Bk;var H5=G1.Z;if(((Cs.F&0x10000
)===0x10000)&&(this.Bk.Ba!==Cs))throw new Error(DA);var Cj=B._NewObject(D.L1,0);
var FE=G1.FE;var Gt=null;var Df=null;if(!!H5){Gt=H5.Gt;Df=H5.Df;}if(!!H5&&!!G1.Kn
)Gt=G1.Kn;if(!!H5&&!!Gl)Df=Gl;if(!!OE)FE=OE;if(!Dp)Dp=B._GetAutoObject(B.ach.IP);
if(!Gk)Gk=Dp;if(!E7)E7=E6;if(!E6)E6=E7;Cj.FE=Gk;Cj.Df=E6;Cj.Gt=E7;Cj.Kn=HU;Cj.Ba=
Cs;Cj.Z=this.Bk.Z;this.Bk.Z=null;this.Bk=Cj;if(this.CB===Cs)this.Dx(null);G1.Ba.
AB(0x0,0x10040);if(((this.F&0x40)===0x40)&&((Cs.F&0x4)===0x4))Cs.AB(0x10040,0x0);
else Cs.AB(0x10000,0x0);if(!!Df){this.Eg(H5.Ba,Df.Hd(),null,null,E4);this.Eg(G1.
Ba,FE.Hc(),null,null,true);this.Eg(Cj.Ba,Dp.Fi(),E5,E3,true);}else if(!!Gt){this.
Eg(H5.Ba,Gt.He(),null,null,E4);this.Eg(G1.Ba,FE.Hc(),null,null,true);this.Eg(Cj.
Ba,Dp.Fi(),E5,E3,true);}else if(!!FE){this.Eg(G1.Ba,FE.Hc(),null,null,E4);this.Eg(
Cj.Ba,Dp.Fi(),E5,E3,true);}else this.Eg(Cj.Ba,Dp.Fi(),E5,E3,E4);},QE:function(Cs
,Dp,Gk,E6,E7,Gl,HU,E5,E3,E4){var A;if(!Cs)return;if(!!this.Bk&&(this.Bk.Ba===Cs)
){this.HJ(Cs,Dp,Gk,E6,E7,null,Gl,HU,E5,E3,E4);return;}if(((Cs.F&0x10000)===0x10000
))throw new Error(DA);var H1=B._NewObject(D.L1,0);if(!!this.Bk&&!this.Bk.Df){if(
!HU)HU=Gl;if(!Gl)Gl=HU;}var Df=null;if(!!this.Bk)Df=this.Bk.Df;if(!!this.Bk&&!!Gl
)Df=Gl;if(!Dp)Dp=B._GetAutoObject(B.ach.IP);if(!Gk)Gk=Dp;if(!E7)E7=E6;if(!E6)E6=
E7;H1.FE=Gk;H1.Df=E6;H1.Gt=E7;H1.Kn=HU;if(this.CB===Cs)this.Dx(null);if(!!this.Bk&&((
this.Bk.Ba.F&0x200000)===0x200000))this.Bk.Ba.AB(0x0,0x10);if(!!this.Bk)this.Bk.
Ba.AB(0x0,0x40);if(((this.F&0x40)===0x40)&&((Cs.F&0x4)===0x4))Cs.AB(0x10040,0x0);
else Cs.AB(0x10000,0x0);H1.Ba=Cs;H1.Z=this.Bk;this.Bk=H1;if(!!Df){this.Eg(this.Bk.
Z.Ba,Df.Hd(),null,null,E4);this.Eg(Cs,Dp.Fi(),E5,E3,true);}else this.Eg(Cs,Dp.Fi(
),E5,E3,E4);},DispatchEvent:function(AK){var A;var K=this.CB;var Av=(D.H.isPrototypeOf(
K)?K:null);var Bm=null;var Nv=!!this.D7&&(!!this.D7.Bj||!!this.D7.AO);if(!!K&&((((
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
DD){},Bt:function(){this.F=this.F|0x8000;B.pe([this,this.LO],this);},Ag:function(
Az){var A;var Av=this;while(!!Av&&!((Az[0]>=Az[2])||(Az[1]>=Az[3]))){if(!Av.G&&(
Av!==this)){Av.Ag(Az);return;}if(!((Av.F&0x1)===0x1))return;var N=Av.Q;Az=B.abh(
Az,N.slice(0,2));if(!((Av.F&0x80000)===0x80000)){N=[].concat(N[0]-Av.J7,N.slice(
1,4));N=B.abP(N,N[1]-Av.J9);N=B.abN(N,N[2]+Av.J8);N=[].concat(N.slice(0,3),N[3]+
Av.J6);Az=B.lb(Az,N);}Av=Av.G;}},NV:function(O,aFilter){var A;if(!O||(O.G!==this
))return null;var G0=O.Z;var G4=O.X;var Kg=0x10000;if(((aFilter&0x10000)===0x10000
))Kg=0x0;while(!!G0||!!G4){if((!!G0&&(!aFilter||((A=aFilter)&&((G0.F&A)===A))))&&(
!Kg||!((A=Kg)&&((G0.F&A)===A))))return G0;if((!!G4&&(!aFilter||((A=aFilter)&&((G4.
F&A)===A))))&&(!Kg||!((A=Kg)&&((G4.F&A)===A))))return G4;if(!!G0)G0=G0.Z;if(!!G4
)G4=G4.X;}return null;},Eg:function(Fz,A5,E5,E3,E4){var A;if(!Fz)return;if(!A5)throw new
Error(Eu);if((!!A5.H||!!A5.G)||!!A5.DN)throw new Error(Ev);if(!!Fz.G&&(Fz.G!==this
))throw new Error(E2);if(!this.D7)this.D7=B._NewObject(D.On,0);A5.G=this;A5.H=Fz;
A5.LA=E3;A5.NB=E5;if(!!Fz.H$)Fz.H$.DN.QF(Fz.H$);Fz.H$=A5;Fz.F=Fz.F|0x20000;if((E4&&
!!this.D7.AS)&&!this.D7.AS.Md())(B.ach.KL.isPrototypeOf(A=this.D7.AS)?A:null).NO(
A5);else{var DN=B._NewObject(B.ach.KL,0);DN.NO(A5);this.D7.QL(DN,false);}},MH:function(
O){var A;if(!O)throw new Error(Gj);if(O.G!==this)throw new Error(HM);if(!O.Z)return;
var Ct=this.AS;var Gv=O.Dz;while(!!Ct&&(Ct.Dz>Gv))Ct=Ct.X;if(((Ct===O)||!Ct)||(Ct.
Z===O))return;if(((O.F&0x401)===0x401)){if(!!O.X&&!!O.A$)O.X.F=O.X.F|0x800;O.F=O.
F|0x800;this.F=this.F|0x4000;B.pe([this,this.CH],this);}if(((O.F&0x200)===0x200)
){if(!!O.X)O.X.F=O.X.F|0x800;this.F=this.F|0x4000;B.pe([this,this.CH],this);}if(
!!O.X)O.X.Z=O.Z;else this.AO=O.Z;O.Z.X=O.X;O.X=Ct;O.Z=Ct.Z;Ct.Z=O;if(!!O.Z)O.Z.X=
O;else this.AS=O;if(((O.F&0x1)===0x1))this.Ag(O.GetClipping());},QG:function(O,D0
){var A;if(!O)throw new Error(Gj);if(O.G!==this)throw new Error(HM);var Ct=O;var
BA=O;var Gv=O.Dz;while(((D0>0)&&!!Ct.Z)&&(Ct.Z.Dz<=Gv)){Ct=Ct.Z;D0=D0-1;}while(((
D0<0)&&!!BA.X)&&(BA.X.Dz>=Gv)){BA=BA.X;D0=D0+1;}if((Ct===O)&&(BA===O))return;if(((
O.F&0x401)===0x401)){if(!!O.X&&!!O.A$)O.X.F=O.X.F|0x800;O.F=O.F|0x800;this.F=this.
F|0x4000;B.pe([this,this.CH],this);}if(((O.F&0x200)===0x200)){if(!!O.X)O.X.F=O.X.
F|0x800;O.F=O.F|0x800;this.F=this.F|0x4000;B.pe([this,this.CH],this);}if(!!O.X)O.
X.Z=O.Z;if(!!O.Z)O.Z.X=O.X;if(this.AO===O)this.AO=O.Z;if(this.AS===O)this.AS=O.X;
if(Ct!==O){O.Z=Ct.Z;O.X=Ct;Ct.Z=O;if(!!O.Z)O.Z.X=O;}if(BA!==O){O.Z=BA;O.X=BA.X;BA.
X=O;if(!!O.X)O.X.Z=O;}if(!O.Z)this.AS=O;if(!O.X)this.AO=O;if(((O.F&0x1)===0x1))this.
Ag(O.GetClipping());},Gc:function(O){var A;if(!O)throw new Error(JM);if(O.G!==this
)throw new Error(HM);if((((O.F&0x401)===0x401)&&!!O.X)&&!!O.A$){O.X.F=O.X.F|0x800;
this.F=this.F|0x4000;B.pe([this,this.CH],this);}if(((O.F&0x200)===0x200)){if(!!O.
X)O.X.F=O.X.F|0x800;this.F=this.F|0x4000;B.pe([this,this.CH],this);}O.A$=null;if(
this.CB===O)this.Dx(this.NV(O,0x14));if(!!O.X)O.X.Z=O.Z;if(!!O.Z)O.Z.X=O.X;if(this.
AO===O)this.AO=O.Z;if(this.AS===O)this.AS=O.X;O.G=null;O.Z=null;O.X=null;if((!((
O.F&0x10)===0x10)&&((O.F&0x100000)===0x100000))&&!((this.F&0x80)===0x80))O.AB(0x10
,0x0);if(((O.F&0x1)===0x1))this.Ag(O.GetClipping());},S:function(O,D0){var A;if(
!O)throw new Error(JN);if(!!O.G)throw new Error(JO);var BA=null;var Gv=O.Dz;if(((
D0<0)&&!!this.AS)&&(this.AS.Dz>=Gv)){BA=this.AS;D0=D0+1;}while((((D0<0)&&!!BA)&&
!!BA.X)&&(BA.X.Dz>=Gv)){BA=BA.X;D0=D0+1;}if((!BA&&!!this.AS)&&(this.AS.Dz>Gv))BA=
this.AS;while((!!BA&&!!BA.X)&&(BA.X.Dz>Gv))BA=BA.X;if(!BA){O.G=this;O.X=this.AS;
if(!!this.AS)this.AS.Z=O;if(!this.AO)this.AO=O;this.AS=O;}else{O.G=this;O.X=BA.X;
O.Z=BA;BA.X=O;if(!!O.X)O.X.Z=O;else this.AO=O;}if(((O.F&0x1)===0x1))this.Ag(O.GetClipping(
));if(((O.F&0x80)===0x80)&&(B.aam().PT()===O))O.AB(0x10,0x0);else if(!((this.F&0x10
)===0x10)&&((O.F&0x200010)===0x200010))O.AB(0x0,0x10);else if((((this.F&0x10)===
0x10)&&!((O.F&0x10)===0x10))&&((O.F&0x100000)===0x100000))O.AB(0x10,0x0);if(((!this.
CB&&((O.F&0x4)===0x4))&&((O.F&0x10)===0x10))&&!((O.F&0x10000)===0x10000))this.Dx(
O);if(((O.F&0x401)===0x401)){O.F=O.F|0x800;this.F=this.F|0x4000;B.pe([this,this.
CH],this);}if(((O.F&0x200)===0x200)){O.F=O.F|0x800;this.F=this.F|0x4000;B.pe([this
,this.CH],this);}},KV:function(){return this.Bi;},_Init:function(aArg){D.AX._Init.
call(this,aArg);this.__proto__=D.H;this.F=0x10001F;this.CL(aArg);},_Mark:function(
E){var A;D.AX._Mark.call(this,E);if((A=this.AO)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.AS)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Lv)&&(A._cycle!=
E))A._Mark(A._cycle=E);if((A=this.Bk)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.
D7)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.H$)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.CB)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Core::Group"};
D.Root={Dd:null,Be:B.abi(10,null,null),IV:null,Gp:null,Ky:0,Bo:0,Ce:B.abi(10,0,null
),Ln:B.abi(10,B.wg,null),D5:B.abi(10,0,null),FD:B.abi(10,B.wf,null),IX:B.abi(10,
0,null),Go:B.abi(10,B.wf,null),D4:B.abi(10,B.wf,null),Da:B.abi(10,B.wf,null),E8:
B.abi(10,B.wf,null),AN:0,Ls:0,Lr:0,Cz:B.abi(4,0,null),BJ:B.abi(4,B.wg,null),BI:0
,Kb:0,IZ:0,Nn:true,CL:function(aArg){if(!!!this.J){var obj=this;B.abD(obj);}},Jc:
function(){return this;},CJ:function(AT,aClip,aOffset,AE,aBlend){var fullScreenUpdate=
false;fullScreenUpdate=B.m7;if(!fullScreenUpdate)AT.L6(aClip,B.abh(B.abh(aClip,aOffset
),this.Q.slice(0,2)),0x00000000,0x00000000,0x00000000,0x00000000,false);D.H.CJ.call(
this,AT,aClip,aOffset,AE,aBlend);},AB:function(C_,DB){var A;D.H.AB.call(this,C_,
DB);if(!this.G&&(((C_&0x1)===0x1)||((DB&0x1)===0x1)))this.Ag([0,0,(A=this.Q)[2]-
A[0],A[3]-A[1]]);if(!this.G&&(((C_&0x2)===0x2)||((DB&0x2)===0x2)))this.Ag([0,0,(
A=this.Q)[2]-A[0],A[3]-A[1]]);},Dx:function(C){if((C!==null)||!C)D.H.Dx.call(this
,C);},Bd:function(C){var A;var DJ=this.Bi;D.H.Bd.call(this,C);if(((DJ!==this.Bi)&&
!this.G)&&((this.F&0x1)===0x1))this.Ag([0,0,(A=this.Q)[2]-A[0],A[3]-A[1]]);},DispatchEvent:
function(AK){if(!!AK){AK.Jg=!!this.Bo;if(!!this.Bo)AK.AC=this.Bo;}var Bm;Bm=D.H.
DispatchEvent.call(this,AK);this.Bo=0;return Bm;},BroadcastEvent:function(AK,aFilter
){if(!!AK){AK.Jg=!!this.Bo;if(!!this.Bo)AK.AC=this.Bo;}var Bm=D.H.BroadcastEvent.
call(this,AK,aFilter);this.Bo=0;return Bm;},Ag:function(Az){var A;if(this.Ky>0)throw new
Error(JP);var fullScreenUpdate=false;fullScreenUpdate=B.m7;if(fullScreenUpdate)Az=[
0,0,(A=this.Q)[2]-A[0],A[3]-A[1]];if(!!this.G){D.H.Ag.call(this,Az);return;}Az=B.
lb(B.abh(Az,this.Q.slice(0,2)),this.Q);if((Az[0]>=Az[2])||(Az[1]>=Az[3]))return;
var M;for(M=0;M<this.BI;M=M+1)if(!(((A=B.lb(this.BJ.Get(M),Az))[0]>=A[2])||(A[1]>=
A[3]))){this.BJ.Set(M,B.wC(this.BJ.Get(M),Az));this.Cz.Set(M,B.aaH(this.BJ.Get(M
)));return;}if(this.BI<3){this.BJ.Set(this.BI,Az);this.Cz.Set(this.BI,B.aaH(Az));
this.BI=this.BI+1;return;}var Bn;var Dc;var Ka=0;var Kc=0;var OL=2147483647;this.
BJ.Set(this.BI,Az);this.Cz.Set(this.BI,B.aaH(Az));for(Bn=0;Bn<=this.BI;Bn=Bn+1)for(
Dc=Bn+1;Dc<=this.BI;Dc=Dc+1){var LN=B.aaH(B.wC(this.BJ.Get(Bn),this.BJ.Get(Dc)));
var Pa=((LN<<8)/(this.Cz.Get(Bn)+this.Cz.Get(Dc)))|0;if(Pa<OL){OL=Pa;Ka=Bn;Kc=Dc;
}}this.BJ.Set(Ka,B.wC(this.BJ.Get(Ka),this.BJ.Get(Kc)));this.Cz.Set(Ka,B.aaH(this.
BJ.Get(Ka)));if(Kc!==this.BI){this.BJ.Set(Kc,this.BJ.Get(this.BI));this.Cz.Set(Kc
,this.Cz.Get(this.BI));}},SC:function(){var Cf=B._NewObject(D.I$,0);Cf.Jg=!!this.
Bo;if(!!this.Bo)Cf.AC=this.Bo;return Cf;},HZ:function(){var Cf=B._NewObject(D.FL
,0);Cf.Jg=!!this.Bo;if(!!this.Bo)Cf.AC=this.Bo;return Cf;},IW:function(){var Cf=
B._NewObject(D.L0,0);Cf.Jg=!!this.Bo;if(!!this.Bo)Cf.AC=this.Bo;return Cf;},SD:function(
Ab){var M;var H3=false;for(M=0;M<10;M=M+1)if(!!this.Be.Get(M)){var V=this.Da.Get(
M);var Av=this.Be.Get(M).G;while(!!Av&&(Av!==this)){V=B.abe(V,Av.Q.slice(0,2));Av=
Av.G;}if(!Av&&(this.Be.Get(M)!==this)){var tmp=this.Be.Get(M);this.AN=M;this.Be.
Set(M,null);tmp.BG(this.HZ().InitializeUp(M,this.Go.Get(M),this.FD.Get(M),this.D5.
Get(M),this.Ce.Get(M)+1,this.D4.Get(M),false,this.Da.Get(M),this.E8.Get(M)));this.
BroadcastEvent(this.IW().InitializeUp(M,this.Ce.Get(M)+1,false,tmp,this.Da.Get(M
)),0x18);}else{this.D5.Set(M,(this.Gp.AC-this.IX.Get(M))|0);if(this.D5.Get(M)<10
)this.D5.Set(M,10);this.AN=M;this.Be.Get(M).BG(this.HZ().InitializeHold(M,V,this.
FD.Get(M),this.D5.Get(M),this.Ce.Get(M)+1,this.D4.Get(M),this.Da.Get(M),this.E8.
Get(M)));H3=true;}}if(!H3)this.Gp.Ao(false);},GetFPS:function(){var ticksCount=0;
var OX=0;ticksCount=((new Date).getTime()-B.v$)|0;if(!!this.Ls&&(ticksCount>this.
Ls))OX=((this.Lr*1000)/((ticksCount-this.Ls)|0))|0;this.Lr=0;this.Ls=ticksCount;
return OX;},Update:function(){var A;if(!this.IV)this.IV=B._NewObject(B.Graphics.
Canvas,0);this.IV.N9([(A=this.Q)[2]-A[0],A[3]-A[1]]);this.IV.Update();return this.
UpdateGE20(this.IV);},UpdateGE20:function(AT){if(!this.BeginUpdate())return AZ;var
FJ=this.UpdateCanvas(AT,AG);this.EndUpdate();return FJ;},EndUpdate:function(){if(
this.BI>0){this.Lr=this.Lr+1;this.BI=0;}},UpdateCanvas:function(AT,aOffset){var A;
var FJ=AZ;var Su=[].concat(aOffset,B.abf(AT.FrameSize,aOffset));var M;var Bn=this.
BI;this.Ky=this.Ky+1;AT.Ba=this;for(M=0;(M<Bn)&&(M<4);M=M+1)if(this.Cz.Get(M)>0){
this.CJ(AT,B.abg(this.BJ.Get(M),aOffset),[-aOffset[0],-aOffset[1]],255,true);FJ=
B.wC(FJ,B.lb(Su,this.BJ.Get(M)));}else Bn=Bn+1;AT.Ba=null;this.Ky=this.Ky-1;if(!((
FJ[0]>=FJ[2])||(FJ[1]>=FJ[3])))return B.abg(FJ,aOffset);else return FJ;},GetUpdateRegion:
function(Lc){var M;var Bn=this.BI;if(Lc<0)return AZ;for(M=0;(M<Bn)&&(M<4);M=M+1)
if(!this.Cz.Get(M)){Bn=Bn+1;Lc=Lc+1;}else if(M===Lc)return this.BJ.Get(M);return AZ;
},BeginUpdate:function(){var A;var M;if(!!this.BI&&!B.aaY(this.BJ.Get(0),[0,0,(A=
this.Q)[2]-A[0],A[3]-A[1]])){var Pp=B.abi(3,B.wg,null);var Po=this.BI;for(M=0;M<
Po;M++)Pp.Set(M,this.BJ.Get(M));for(M=0;M<Po;M++){var Pc=B.abh(Pp.Get(M),this.Q.
slice(0,2));var Pd=this.Kz(Pc);if(!B.aaY(Pc,Pd))this.Ag(B.abg(Pd,this.Q.slice(0,
2)));}}var Bn;var Dc;for(Bn=0;Bn<(this.BI-1);Bn++)if(this.Cz.Get(Bn)>0)for(Dc=Bn+
1;Dc<this.BI;Dc++)if(this.Cz.Get(Dc)>0){var LN=B.aaH(B.wC(this.BJ.Get(Bn),this.BJ.
Get(Dc)));if(((LN-this.Cz.Get(Bn))-this.Cz.Get(Dc))<0){this.BJ.Set(Bn,B.wC(this.
BJ.Get(Bn),this.BJ.Get(Dc)));this.Cz.Set(Bn,LN);this.Cz.Set(Dc,0);}}for(M=this.BI-
1;M>=0;M--)if(!this.Cz.Get(M))this.BI=this.BI-1;return this.BI;},DoesNeedUpdate:
function(){if(this.BI>0)return true;return false;},Initialize:function(aSize){this.
R([].concat(AG,aSize));if(this.Nn)this.F=this.F|0x60;else this.F=this.F|0x20;this.
Ag(this.Q);return this;},SetRootFocus:function(M9){if(M9===this.Nn)return false;
this.Nn=M9;if(!M9)this.AB(0x0,0x40);else this.AB(0x40,0x0);return true;},SetUserInputTimestamp:
function(Sq){this.Bo=Sq;},DriveKeyboardHitting:function(BL,JS,Ew){var A;var NJ=!
!this.Dd;if(!!this.Dd&&((!Ew||(this.Kb!==BL))||(this.IZ!==JS))){var Cf=null;var K=(
D.Cq.isPrototypeOf(A=this.Dd)?A:null);var Ey=(D.GE.isPrototypeOf(A=this.Dd)?A:null
);if(!!this.Kb)Cf=B._NewObject(D.KeyEvent,0).Initialize(this.Kb,false);if(this.IZ
!==0x00)Cf=B._NewObject(D.KeyEvent,0).Initialize2(this.IZ,false);if(!!Ey)Ey.BG(Cf
);else if(!!K)K.BG(Cf);this.Kb=0;this.IZ=0x00;this.Dd=null;}if(!!this.Dd){var Cf=
null;var K=(D.Cq.isPrototypeOf(A=this.Dd)?A:null);var Ey=(D.GE.isPrototypeOf(A=this.
Dd)?A:null);if(!!BL)Cf=B._NewObject(D.KeyEvent,0).Initialize(BL,true);if(this.IZ
!==0x00)Cf=B._NewObject(D.KeyEvent,0).Initialize2(JS,true);if(!!Ey)Ey.BG(Cf);else
if(!!K)K.BG(Cf);}if(!this.Dd&&Ew){if(!!BL)this.Dd=this.DispatchEvent(B._NewObject(
D.KeyEvent,0).Initialize(BL,true));if(JS!==0x00)this.Dd=this.DispatchEvent(B._NewObject(
D.KeyEvent,0).Initialize2(JS,true));if(!(D.GE.isPrototypeOf(A=this.Dd)?A:null)&&
!(D.Cq.isPrototypeOf(A=this.Dd)?A:null))this.Dd=null;this.Kb=BL;this.IZ=JS;NJ=NJ||
!!this.Dd;}this.Bo=0;return NJ;},DriveCursorMovement:function(B7){return this.DriveMultiTouchMovement(
this.AN,B7);},DriveMultiTouchMovement:function(W,B7){if((W<0)||(W>9)){this.Bo=0;
return false;}var BN=B.abe(B7,this.Da.Get(W));this.Da.Set(W,B7);if(!this.Be.Get(
W)||B.aaX(BN,AG)){this.Bo=0;return false;}var V=B7;var Av=this.Be.Get(W).G;while(
!!Av&&(Av!==this)){V=B.abe(V,Av.Q.slice(0,2));Av=Av.G;}if(!Av&&(this.Be.Get(W)!==
this)){var tmp=this.Be.Get(W);this.AN=W;this.Be.Set(W,null);tmp.BG(this.HZ().InitializeUp(
W,this.Go.Get(W),this.FD.Get(W),this.D5.Get(W),this.Ce.Get(W)+1,this.D4.Get(W),false
,this.Da.Get(W),this.E8.Get(W)));this.BroadcastEvent(this.IW().InitializeUp(W,this.
Ce.Get(W)+1,false,tmp,B7),0x18);}else{this.Go.Set(W,V);this.AN=W;this.Be.Get(W).
BG(this.SC().Initialize(W,V,this.FD.Get(W),BN,this.D5.Get(W),this.Ce.Get(W)+1,this.
D4.Get(W),B7,this.E8.Get(W)));}this.Bo=0;return true;},DriveCursorHitting:function(
Ew,W,B7){return this.DriveMultiTouchHitting(Ew,W,B7);},DriveMultiTouchHitting:function(
Ew,W,B7){if((W<0)||(W>9)){this.Bo=0;return false;}var ticksCount=this.Bo;if(!ticksCount
)ticksCount=((new Date).getTime()-B.v$)|0;var S9=this.Bo;this.DriveMultiTouchMovement(
W,B7);B7=this.Da.Get(W);this.Bo=S9;if(Ew)this.E8.Set(W,B7);if(Ew&&!this.Be.Get(W
)){var BY;var V=B7;if(B.wa(this.Ln.Get(W),B7)&&((ticksCount-this.IX.Get(W))<=250
))this.Ce.Set(W,this.Ce.Get(W)+1);else this.Ce.Set(W,0);this.Ln.Set(W,B.abh(HN,B7
));this.IX.Set(W,ticksCount);BY=this.FM(B.abh(HN,B7),W,this.Ce.Get(W)+1,null,null
,0x0);if(!!BY){this.BroadcastEvent(this.IW().InitializeDown(W,this.Ce.Get(W)+1,false
,BY.Cq,B7),0x18);this.Be.Set(W,BY.Cq);this.D4.Set(W,BY.DV);}else{this.Be.Set(W,null
);this.D4.Set(W,AG);this.Bo=0;return false;}var Av=BY.Cq.G;while(!!Av&&(Av!==this
)){V=B.abe(V,Av.Q.slice(0,2));Av=Av.G;}this.FD.Set(W,V);this.Go.Set(W,V);this.D5.
Set(W,0);this.Gp.Ao(true);this.AN=W;this.Be.Get(W).BG(this.HZ().InitializeDown(W
,V,this.Ce.Get(W)+1,this.D4.Get(W),false,B7));this.Bo=0;return true;}if(!Ew&&!!this.
Be.Get(W)){var V=B7;var Av=this.Be.Get(W).G;while(!!Av&&(Av!==this)){V=B.abe(V,Av.
Q.slice(0,2));Av=Av.G;}if(!Av)V=this.Go.Get(W);this.AN=W;var tmp=this.Be.Get(W);
this.Be.Set(W,null);tmp.BG(this.HZ().InitializeUp(W,V,this.FD.Get(W),this.D5.Get(
W),this.Ce.Get(W)+1,this.D4.Get(W),false,B7,this.E8.Get(W)));this.BroadcastEvent(
this.IW().InitializeUp(W,this.Ce.Get(W)+1,false,tmp,B7),0x18);this.Bo=0;return true;
}this.Bo=0;return false;},Oj:function(FA,OC,FC,HW){if(FA===this)FA=null;if(!this.
Be.Get(this.AN))return;var BY;BY=this.FM(B.abh(HN,this.Da.Get(this.AN)),this.AN,
1,FA,FC,HW);if(!!BY&&(this.Be.Get(this.AN)!==BY.Cq))this.NR(BY.Cq,BY.DV);if(!BY&&(
this.Be.Get(this.AN)!==OC))this.NR(OC,AG);},NR:function(FA,DZ){if(!this.Be.Get(this.
AN)||(this.Be.Get(this.AN)===FA))return;var tmp=this.Be.Get(this.AN);this.Be.Set(
this.AN,null);tmp.BG(this.HZ().InitializeUp(this.AN,this.Go.Get(this.AN),this.FD.
Get(this.AN),this.D5.Get(this.AN),this.Ce.Get(this.AN)+1,this.D4.Get(this.AN),true
,this.Da.Get(this.AN),this.E8.Get(this.AN)));this.BroadcastEvent(this.IW().InitializeUp(
this.AN,this.Ce.Get(this.AN)+1,true,tmp,this.Da.Get(this.AN)),0x18);var V=this.Da.
Get(this.AN);var Av=null;if(!!FA)Av=FA.G;while(!!Av&&(Av!==this)){V=B.abe(V,Av.Q.
slice(0,2));Av=Av.G;}if(!Av&&(FA!==this)){this.Be.Set(this.AN,null);return;}this.
BroadcastEvent(this.IW().InitializeDown(this.AN,this.Ce.Get(this.AN)+1,true,FA,this.
Da.Get(this.AN)),0x18);var ticksCount=0;ticksCount=((new Date).getTime()-B.v$)|0;
this.Be.Set(this.AN,FA);this.D4.Set(this.AN,DZ);this.FD.Set(this.AN,V);this.Go.Set(
this.AN,V);this.Ce.Set(this.AN,0);this.D5.Set(this.AN,0);this.IX.Set(this.AN,ticksCount
);this.E8.Set(this.AN,this.Da.Get(this.AN));this.Be.Get(this.AN).BG(this.HZ().InitializeDown(
this.AN,V,this.Ce.Get(this.AN)+1,this.D4.Get(this.AN),true,this.E8.Get(this.AN))
);},PT:function(){return null;},_Init:function(aArg){D.H._Init.call(this,aArg);D.
Timer._Init.call(this.Gp={J:this},0);(this.Be=[]).__proto__=D.Root.Be;(this.Ce=[
]).__proto__=D.Root.Ce;(this.Ln=[]).__proto__=D.Root.Ln;(this.D5=[]).__proto__=D.
Root.D5;(this.FD=[]).__proto__=D.Root.FD;(this.IX=[]).__proto__=D.Root.IX;(this.
Go=[]).__proto__=D.Root.Go;(this.D4=[]).__proto__=D.Root.D4;(this.Da=[]).__proto__=
D.Root.Da;(this.E8=[]).__proto__=D.Root.E8;(this.Cz=[]).__proto__=D.Root.Cz;(this.
BJ=[]).__proto__=D.Root.BJ;this.__proto__=D.Root;this.F=0x10007F;this.Gp.GJ(10);
this.Gp.GO=[this,this.SD];this.CL(aArg);},_Done:function(){this.__proto__=D.H;this.
Gp._Done();D.H._Done.call(this);},_ReInit:function(){D.H._ReInit.call(this);this.
Gp._ReInit();},_Mark:function(E){var A;D.H._Mark.call(this,E);if((A=this.Dd)&&(A.
_cycle!=E))A._Mark(A._cycle=E);B.aa6(this.Be,E);if((A=this.IV)&&(A._cycle!=E))A.
_Mark(A._cycle=E);if((A=this.Gp)._cycle!=E)A._Mark(A._cycle=E);},_className:"Core::Root"
};D.Event={AC:0,Jg:false,CL:function(aArg){this.AC=this.Jb();},Jb:function(){var
ticksCount=0;ticksCount=((new Date).getTime()-B.v$)|0;return ticksCount;},_Init:
function(aArg){this.__proto__=D.Event;this.CL(aArg);B.h7++;},_Done:function(){this.
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
};D.L0={MN:null,C3:B.wf,Cw:0,BK:0,Down:false,CA:false,InitializeUp:function(W,CQ
,HP,Na,Ex){this.Down=false;this.BK=W;this.Cw=CQ;this.C3=Ex;this.MN=Na;this.CA=HP;
return this;},InitializeDown:function(W,CQ,HP,Na,Ex){this.Down=true;this.BK=W;this.
Cw=CQ;this.C3=Ex;this.MN=Na;this.CA=HP;return this;},_Init:function(aArg){D.Event.
_Init.call(this,aArg);this.__proto__=D.L0;},_Mark:function(E){var A;D.Event._Mark.
call(this,E);if((A=this.MN)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Core::CursorGrabEvent"
};D.FL={Je:B.wf,C3:B.wf,Cw:0,B1:0,C4:B.wf,BW:B.wf,BK:0,Down:false,CA:false,InitializeHold:
function(W,GU,JU,JV,CQ,DZ,Ex,JT){this.Down=true;this.BK=W;this.BW=B.abf(GU,DZ);this.
C4=B.abf(JU,DZ);this.B1=JV;this.Cw=CQ;this.C3=Ex;this.Je=JT;return this;},InitializeUp:
function(W,GU,JU,JV,CQ,DZ,HP,Ex,JT){this.Down=false;this.BK=W;this.BW=B.abf(GU,DZ
);this.C4=B.abf(JU,DZ);this.B1=JV;this.Cw=CQ;this.CA=HP;this.C3=Ex;this.Je=JT;return this;
},InitializeDown:function(W,GU,CQ,DZ,HP,Ex){this.Down=true;this.BK=W;this.BW=B.abf(
GU,DZ);this.C4=B.abf(GU,DZ);this.B1=0;this.Cw=CQ;this.CA=HP;this.C3=Ex;this.Je=Ex;
return this;},_Init:function(aArg){D.Event._Init.call(this,aArg);this.__proto__=
D.FL;},_className:"Core::CursorEvent"};D.I$={Je:B.wf,C3:B.wf,Cw:0,B1:0,DV:B.wf,C4:
B.wf,BW:B.wf,BK:0,Initialize:function(W,GU,JU,aOffset,JV,Sn,DZ,Ex,JT){this.BK=W;
this.BW=B.abf(GU,DZ);this.C4=B.abf(JU,DZ);this.DV=aOffset;this.B1=JV;this.Cw=Sn;
this.C3=Ex;this.Je=JT;return this;},_Init:function(aArg){D.Event._Init.call(this
,aArg);this.__proto__=D.I$;},_className:"Core::DragEvent"};D.Jv={CJ:function(AT,
aClip,aOffset,AE,aBlend){},GetClipping:function(){var A;var N=D.AX.GetClipping.call(
this);if(((this.F&0x80000)===0x80000)){var Ib=AZ;var K;for(K=this.Z;!!K&&!((K.F&
0x200)===0x200);K=K.Z)if(((K.F&0x1)===0x1))Ib=B.wC(Ib,K.GetClipping());N=B.wC(N,
Ib);}return N;},AB:function(C_,DB){var A;var Lz=this.F;if((!!this.G&&((this.F&0x80001
)===0x80001))&&((DB&0x80000)===0x80000))this.G.Ag(this.GetClipping());D.AX.AB.call(
this,C_,DB);if(((!!this.G&&((this.F&0x1)===0x1))&&((C_&0x80000)===0x80000))&&!((
Lz&0x80000)===0x80000))this.G.Ag(this.GetClipping());},R:function(C){var A;if(B.
aaY(C,this.Q))return;var G2=[(A=this.Q)[2]-A[0],A[3]-A[1]];var Ny=[C[2]-C[0],C[3
]-C[1]];var I3=!B.aaX(G2,Ny);var BN=B.abe(C.slice(0,2),this.Q.slice(0,2));if(!B.
aaX(BN,AG)&&!I3){var K=this.Z;while(!!K&&!((K.F&0x200)===0x200)){if(((K.F&0x400)===
0x400)){var tmp=((K.F&0x100)===0x100);K.Mq(BN,tmp);}K=K.Z;}}if((I3&&(G2[0]>0))&&(
G2[1]>0)){var Ax=this.Q;var K=this.Z;while(!!K&&!((K.F&0x200)===0x200)){if(((K.F&
0x400)===0x400)){if(!!K.A$&&(K.A$.H_!==this))K.A$=null;if(!K.A$&&(K.Cm!==0x14))K.
J_(Ax,this);}K=K.Z;}}D.AX.R.call(this,C);if(!!this.G&&I3){this.F=this.F|0x1000;if(
!((this.G.F&0x2000)===0x2000)){this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CH],this
);}}},_Init:function(aArg){D.AX._Init.call(this,aArg);this.__proto__=D.Jv;this.F=
0x203;},_className:"Core::Outline"};D.Bu={Mr:null,KW:null,KU:null,DW:null,BP:null
,Aw:0,BK:0,AC:0,Cw:0,B1:0,DV:B.wf,C4:B.wf,BW:B.wf,QH:8,NZ:1,Down:false,DS:false,
CA:false,Nj:false,Kd:0,CJ:function(AT,aClip,aOffset,AE,aBlend){},BG:function(AK){
var A;var Am=(D.FL.isPrototypeOf(AK)?AK:null);var B8=(D.I$.isPrototypeOf(AK)?AK:
null);var Lt=this.DS;var DK;var Ds;var Kw;var B9;var H2;if(!Am&&!B8)return null;
DK=(!!Am&&Am.Down)&&!Am.B1;Ds=(!!Am&&Am.Down)&&(Am.B1>0);Kw=(!!Am&&Am.Down)&&(Am.
B1>this.Kd);B9=!!Am&&!Am.Down;H2=!!B8;if(DK)this.Kd=((A=(Am.CA?0:50))&0x80)?A|0xFFFFFF00:
A&0xFF;if(DK){var H6=0;var E9;this.Aw=this.Aw|(1<<Am.BK);for(E9=this.Aw&4095;E9>
0;E9=E9>>1)if(!!(E9&1))H6=H6+1;if(H6===1)this.Aw=(this.Aw|16777216)|(4096<<Am.BK
);}if(B9&&(this.Aw<16777216)){var DM=this.Jc();var BY=null;if(!!DM){var NM=(!!this.
X?this.X:this.G);BY=DM.FM(B.abh(HO,Am.C3),Am.BK,Am.Cw,null,NM,0x0);}if(!!BY){var
M;for(M=0;M<10;M++)if(!!(this.Aw&(1<<M)))BY.Cq.BG(B._NewObject(D.FL,0).InitializeDown(
M,Am.BW,Am.Cw,AG,true,Am.C3));for(M=0;M<10;M++)if(!!(this.Aw&(1<<M)))BY.Cq.BG(B.
_NewObject(D.FL,0).InitializeUp(M,Am.BW,Am.BW,0,Am.Cw,AG,false,Am.C3,Am.C3));}}if(
B9)this.Aw=(this.Aw&~(1<<Am.BK))|33554432;if(Kw&&(this.Aw<16777216))this.Aw=this.
Aw|67108864;if(B9&&Am.CA)this.Aw=this.Aw|67108864;if(B9&&!(this.Aw&16777215))this.
Aw=0;if(Ds&&(this.Aw>=67108864)){var DM=this.Jc();if(!!DM)DM.Oj(null,null,this,0x0
);}if((Ds&&!!(this.Aw&16777216))&&!!(this.Aw&33554432)){Ds=false;B9=true;}if(!!Am&&
!(this.Aw&(4096<<Am.BK)))return this;if(!!B8&&!(this.Aw&(4096<<B8.BK)))return this;
if(B9&&!(this.Aw&16777216))return this;if(((DK||H2)||Ds)&&((this.Aw<16777216)||(
this.Aw>=33554432)))return this;if(B9)this.Aw=this.Aw&3758100479;if(B9&&!(this.Aw&
16777215))this.Aw=0;if(!!Am){this.Down=DK||Ds;this.DS=this.Me(Am.BW);this.C4=Am.
C4;this.BW=Am.BW;this.DV=AG;this.B1=Am.B1;this.Cw=Am.Cw;this.CA=Am.CA;this.BK=Am.
BK;this.AC=Am.AC;if(Am.Down&&!Am.B1)Lt=false;}if(!!B8){this.Down=true;this.DS=this.
Me(B8.BW);this.C4=B8.C4;this.BW=B8.BW;this.DV=B8.DV;this.B1=B8.B1;this.Cw=B8.Cw;
this.BK=B8.BK;this.CA=false;this.AC=B8.AC;}var Ni=this.Down;if(!!B8)(A=this.Mr)?
A[1].call(A[0],this):null;if((!!Am&&this.Down)&&!this.B1)(A=this.BP)?A[1].call(A[
0],this):null;if((this.Down&&this.DS)&&!Lt){this.Nj=true;(A=this.KU)?A[1].call(A[
0],this):null;}if(this.Nj&&(((Ni&&!this.DS)&&Lt)||((!Ni&&this.DS)&&Lt))){this.Nj=
false;(A=this.KW)?A[1].call(A[0],this):null;}if(!!Am&&!Ni)(A=this.DW)?A[1].call(
A[0],this):null;return this;},FM:function(Az,W,CQ,Fy,FC,HW){var A;if(!!Fy&&(Fy!==
this))return null;if((CQ<1)||(CQ>this.NZ))return null;if(this.Aw>=33554432)return null;
if((this.Aw>=16777216)&&!(this.Aw&(4096<<W)))return null;if(this.PW()){var N=B.lb(
Az,this.GetExtent());if(!((N[0]>=N[2])||(N[1]>=N[3]))){var CS=B.aaI(Az);var BN=AG;
if(CS[0]<N[0])BN=[N[0]-CS[0],BN[1]];if(CS[0]>=N[2])BN=[(N[2]-CS[0])-1,BN[1]];if(
CS[1]<N[1])BN=[BN[0],N[1]-CS[1]];if(CS[1]>=N[3])BN=[BN[0],(N[3]-CS[1])-1];return B.
_NewObject(D.KE,0).Initialize(this,BN);}}else{var Bf=B.abi(9,B.wf,null);var M;Bf.
Set(0,B.aaI(Az));Bf.Set(1,Bf.Get(0));Bf.Set(2,Bf.Get(0));Bf.Set(3,Bf.Get(0));Bf.
Set(4,Bf.Get(0));Bf.Set(1,[Az[0],Bf.Get(1)[1]]);Bf.Set(2,[Bf.Get(2)[0],Az[1]]);Bf.
Set(3,[Az[2],Bf.Get(3)[1]]);Bf.Set(4,[Bf.Get(4)[0],Az[3]]);Bf.Set(5,Az.slice(0,2
));Bf.Set(6,[Az[2],Az[1]]);Bf.Set(7,[Az[0],Az[3]]);Bf.Set(8,Az.slice(2,4));for(M=
0;M<9;M=M+1)if(this.Me(Bf.Get(M)))return B._NewObject(D.KE,0).Initialize(this,B.
abe(Bf.Get(M),Bf.Get(0)));}return null;},MA:function(C){if(C<1)C=1;this.QH=C;},Jt:
function(C){if(C<1)C=1;this.NZ=C;},Ao:function(C){if(C)this.AB(0x100000,0x0);else
this.AB(0x0,0x100000);},_Init:function(aArg){D.EW._Init.call(this,aArg);this.__proto__=
D.Bu;this.F=0x10011B;},_Mark:function(E){var A;D.EW._Mark.call(this,E);if((A=this.
Mr)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.KW)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.KU)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);
if((A=this.DW)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.BP)&&((A=A[0
])._cycle!=E))A._Mark(A._cycle=E);},_className:"Core::SimpleTouchHandler"};D.Dn={
Mw:null,GF:null,EV:null,Aw:0,Oh:0,C4:B.wf,NS:0,K5:0,Angle:0,Down:false,DS:false,
CA:false,Kd:0,CJ:function(AT,aClip,aOffset,AE,aBlend){},BG:function(AK){var A;var
Am=(D.FL.isPrototypeOf(AK)?AK:null);var B8=(D.I$.isPrototypeOf(AK)?AK:null);var DK;
var Ds;var Kw;var B9;var H2;if(!Am&&!B8)return null;DK=(!!Am&&Am.Down)&&!Am.B1;Ds=(
!!Am&&Am.Down)&&(Am.B1>0);Kw=(!!Am&&Am.Down)&&(Am.B1>this.Kd);B9=!!Am&&!Am.Down;
H2=!!B8;if(DK)this.Kd=((A=(Am.CA?0:50))&0x80)?A|0xFFFFFF00:A&0xFF;if(DK){var H6=
0;var E9;this.Aw=this.Aw|(1<<Am.BK);for(E9=this.Aw&4095;E9>0;E9=E9>>1)if(!!(E9&1
))H6=H6+1;if(H6===1)this.Aw=(this.Aw|16777216)|(4096<<Am.BK);}if(B9&&(this.Aw<16777216
)){var DM=this.Jc();var BY=null;if(!!DM){var NM=(!!this.X?this.X:this.G);BY=DM.FM(
B.abh(HO,Am.C3),Am.BK,Am.Cw,null,NM,0x0);}if(!!BY){var M;for(M=0;M<10;M++)if(!!(
this.Aw&(1<<M)))BY.Cq.BG(B._NewObject(D.FL,0).InitializeDown(M,Am.BW,Am.Cw,AG,true
,Am.C3));for(M=0;M<10;M++)if(!!(this.Aw&(1<<M)))BY.Cq.BG(B._NewObject(D.FL,0).InitializeUp(
M,Am.BW,Am.BW,0,Am.Cw,AG,false,Am.C3,Am.C3));}}if(B9)this.Aw=(this.Aw&~(1<<Am.BK
))|33554432;if(Kw&&(this.Aw<16777216))this.Aw=this.Aw|67108864;if(B9&&Am.CA)this.
Aw=this.Aw|67108864;if(B9&&!(this.Aw&16777215))this.Aw=0;if(Ds&&(this.Aw>=67108864
)){var DM=this.Jc();if(!!DM)DM.Oj(null,null,this,0x0);}if((Ds&&!!(this.Aw&16777216
))&&!!(this.Aw&33554432)){Ds=false;B9=true;}if(!!Am&&!(this.Aw&(4096<<Am.BK)))return this;
if(!!B8&&!(this.Aw&(4096<<B8.BK)))return this;if(B9&&!(this.Aw&16777216))return this;
if(((DK||H2)||Ds)&&((this.Aw<16777216)||(this.Aw>=33554432)))return this;if(B9)this.
Aw=this.Aw&3758100479;if(B9&&!(this.Aw&16777215))this.Aw=0;if(((!DK&&!B9)&&!H2)&&
!Ds)return this;var V=AG;var JX=this.Angle;var LC=this.Oh;var SS=LC;var An;if((DK||
B9)||Ds){this.DS=B.wa(this.Q,Am.BW);this.CA=Am.CA;this.C4=Am.C4;this.Down=DK||Ds;
V=B.abe(Am.BW,B.aaI(this.Q));}if(H2){this.DS=B.wa(this.Q,B8.BW);this.C4=B8.C4;this.
Down=true;V=B.abe(B8.BW,B.aaI(this.Q));}var N=Math.sqrt((V[0]*V[0])+(V[1]*V[1]));
if(N>=8){LC=N|0;JX=(Math.acos(V[0]/N)*B.rE)|0;if(V[1]>0)JX=360-JX;}An=JX-this.Angle;
if(An>180)An=An-360;if(An<-180)An=An+360;this.Angle=JX;this.NS=An;this.K5=this.K5+
An;this.Oh=LC;if(DK){this.NS=0;this.K5=0;(A=this.EV)?A[1].call(A[0],this):null;}
if(!!An||(LC!==SS))(A=this.Mw)?A[1].call(A[0],this):null;if(B9)(A=this.GF)?A[1].
call(A[0],this):null;return this;},FM:function(Az,W,CQ,Fy,FC,HW){var A;if(!!Fy&&(
Fy!==this))return null;if(this.Aw>=33554432)return null;if((this.Aw>=16777216)&&
!(this.Aw&(4096<<W)))return null;var N=B.lb(Az,this.Q);if(!((N[0]>=N[2])||(N[1]>=
N[3]))){var CS=B.aaI(Az);var BN=AG;if(CS[0]<N[0])BN=[N[0]-CS[0],BN[1]];if(CS[0]>=
N[2])BN=[(N[2]-CS[0])-1,BN[1]];if(CS[1]<N[1])BN=[BN[0],N[1]-CS[1]];if(CS[1]>=N[3
])BN=[BN[0],(N[3]-CS[1])-1];return B._NewObject(D.KE,0).Initialize(this,BN);}return null;
},_Init:function(aArg){D.AX._Init.call(this,aArg);this.__proto__=D.Dn;this.F=0x10011B;
},_Mark:function(E){var A;D.AX._Mark.call(this,E);if((A=this.Mw)&&((A=A[0])._cycle
!=E))A._Mark(A._cycle=E);if((A=this.GF)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E
);if((A=this.EV)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);},_className:"Core::RotateTouchHandler"
};D.GE={Z:null,DW:null,BP:null,Ia:0,AC:0,Oi:0,B$:148,BF:0,AW:0,AM:true,Down:false
,MG:false,CL:function(aArg){var A;var Ba=(D.H.isPrototypeOf(A=this.J)?A:null);if(
!Ba)throw new Error(IT);this.Z=Ba.Lv;Ba.Lv=this;},BG:function(AK){var A;if(!!AK&&
AK.PY(this.B$)){this.Down=AK.Down;this.BF=AK.BF;this.AW=AK.AW;this.AC=AK.AC;if(AK.
Down){this.Oi=this.Ia;this.MG=this.Ia>0;if(!this.MG)(A=this.BP)?A[1].call(A[0],this
):null;this.Ia=this.Ia+1;return true;}if(!AK.Down){this.MG=this.Ia>1;this.Oi=this.
Ia-1;this.Ia=0;(A=this.DW)?A[1].call(A[0],this):null;return true;}}return false;
},_Init:function(aArg){this.__proto__=D.GE;this.CL(aArg);B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.Z)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.DW)&&((A=A[0])._cycle!=E
))A._Mark(A._cycle=E);if((A=this.BP)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((
A=this.J)&&(A._cycle!=E))A._Mark(A._cycle=E);},J:null,_cycle:0,_observers:null,_className:
"Core::KeyPressHandler"};D.KE={Cq:null,I_:0,DV:B.wf,Initialize:function(O,aOffset
){this.Cq=O;this.DV=aOffset;this.I_=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[
1]);return this;},_Init:function(aArg){this.__proto__=D.KE;B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.Cq)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.J)&&(A._cycle!=E))A._Mark(
A._cycle=E);},J:null,_cycle:0,_observers:null,_className:"Core::CursorHit"};D.KP={
H_:null,CV:B.wg,Ax:B.wg,isEmpty:false,_Init:function(aArg){this.__proto__=D.KP;B.
h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(E){var A;if((A=this.H_)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.J
)&&(A._cycle!=E))A._Mark(A._cycle=E);},J:null,_cycle:0,_observers:null,_className:
"Core::LayoutContext"};D.KQ={Kr:B.wf,Kq:B.wf,Kp:B.wf,Ko:B.wf,_Init:function(aArg
){D.KP._Init.call(this,aArg);this.__proto__=D.KQ;},_className:"Core::LayoutQuadContext"
};D.L1={Ba:null,Z:null,FE:null,Gt:null,Df:null,Kn:null,_Init:function(aArg){this.
__proto__=D.L1;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(
){},_Mark:function(E){var A;if((A=this.Ba)&&(A._cycle!=E))A._Mark(A._cycle=E);if((
A=this.Z)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.FE)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.Gt)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Df)&&(A.
_cycle!=E))A._Mark(A._cycle=E);if((A=this.Kn)&&(A._cycle!=E))A._Mark(A._cycle=E);
if((A=this.J)&&(A._cycle!=E))A._Mark(A._cycle=E);},J:null,_cycle:0,_observers:null
,_className:"Core::DialogContext"};D.On={Bj:null,AS:null,AO:null,OY:false,SA:function(
){if(!this.Bj)return;var DN=this.Bj;this.Bj.DL=null;this.Bj=null;B.pe([this,this.
NF],this);DN.N1(this);},SU:function(Ab){if(!!this.Bj)return;if(!this.AO)return;this.
Bj=this.AO;this.AO=this.AO.Z;if(!!this.AO)this.AO.X=null;else this.AS=null;this.
Bj.Z=null;this.OY=true;this.Bj.EV(this);this.OY=false;},SZ:function(Ab){B.pe([this
,this.SU],this);},SY:function(Ab){B.pe([this,this.SZ],this);},NF:function(Ab){B.
pe([this,this.SY],this);},PF:function(Bv){if(!Bv||!Bv.DL)return;if(Bv.DL!==this)
throw new Error(JQ);var Pu=false;if(this.Bj===Bv){this.Bj=null;Pu=true;B.pe([this
,this.NF],this);}else{if(!!Bv.Z)Bv.Z.X=Bv.X;else this.AS=Bv.X;if(!!Bv.X)Bv.X.Z=Bv.
Z;else this.AO=Bv.Z;Bv.X=null;Bv.Z=null;}Bv.DL=null;if(Pu)Bv.N0(this);},QL:function(
Bv,Sr){if(!Bv)return;if(!!Bv.DL)throw new Error(JR);Bv.DL=this;if(Sr){Bv.Z=this.
AO;if(!!this.AO)this.AO.X=Bv;else this.AS=Bv;this.AO=Bv;}else{Bv.X=this.AS;if(!!
this.AS)this.AS.Z=Bv;else this.AO=Bv;this.AS=Bv;}if(!this.Bj)B.pe([this,this.NF]
,this);},_Init:function(aArg){this.__proto__=D.On;B.h7++;},_Done:function(){this.
__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.
Bj)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.AS)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.AO)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.J)&&(A._cycle!=E
))A._Mark(A._cycle=E);},J:null,_cycle:0,_observers:null,_className:"Core::TaskQueue"
};D.JC={DL:null,X:null,Z:null,N1:function(JW){},N0:function(JW){},EV:function(JW
){this.NQ();},Dh:function(){if(!!this.DL&&(this.DL.Bj===this))this.DL.SA();},NQ:
function(){if(!!this.DL)this.DL.PF(this);},Md:function(){return!!this.DL&&(this.
DL.Bj===this);},_Init:function(aArg){this.__proto__=D.JC;B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.DL)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.X)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.Z)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.J)&&(A._cycle
!=E))A._Mark(A._cycle=E);},J:null,_cycle:0,_observers:null,_className:"Core::Task"
};D.Gd={resource:null,Dj:function(){this.resource=null;},CL:function(aArg){this.
resource=aArg;},_Init:function(aArg){this.__proto__=D.Gd;this.CL(aArg);B.h7++;},
_Done:function(){this.Dj();this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(E){var A;if((A=this.J)&&(A._cycle!=E))A._Mark(A._cycle=E);},J:null,_cycle:
0,_observers:null,_className:"Core::Resource"};D.Timer={GO:null,timer:null,AC:0,
Period:1000,Ii:0,AM:false,Dj:function(){var tmp=this.timer;if(!!tmp)tmp.DestroyTimer(
);this.timer=null;},LE:function(aBegin,aPeriod){if(aBegin<0)aBegin=0;if(aPeriod<
0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>0)||(aPeriod>0)))tmp=B.z8(this,
this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(aBegin,aPeriod);}this.timer=
tmp;},GJ:function(C){if(C<0)C=0;if(C===this.Period)return;this.Period=C;if(this.
AM)this.LE(this.Ii,C);},GG:function(C){if(C<0)C=0;if(C===this.Ii)return;this.Ii=
C;if(this.AM)this.LE(C,this.Period);},Ao:function(C){if(C===this.AM)return;this.
AM=C;if(C)this.LE(this.Ii,this.Period);else this.LE(0,0);this.AC=this.Jb();},Jb:
function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.v$)|0;return ticksCount;
},Trigger:function(){var A;this.AC=this.Jb();if(!this.Period)this.Ao(false);(A=this.
GO)?A[1].call(A[0],this):null;},_Init:function(aArg){this.__proto__=D.Timer;B.h7++;
},_Done:function(){this.Dj();this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(E){var A;if((A=this.GO)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=
this.J)&&(A._cycle!=E))A._Mark(A._cycle=E);},J:null,_cycle:0,_observers:null,_className:
"Core::Timer"};D.AC={K6:0,Mp:0,Ma:0,I9:0,KT:0,Op:0,SK:function(){var result=0;{var
d=new Date;result=Math.trunc(d.getTime()/1000-(d.getTimezoneOffset()*60));}return result;
},Ql:function(C){var A;C+=62162035200;if(C<0)C=0;var I6=Math.trunc(C/86400)|0;var
OU=(((I6>=0)?I6:I6-146096)/146097)|0;var J5=I6-(OU*146097);var LR=((((J5-((J5/1460
)|0))+((J5/36524)|0))-((J5/146096)|0))/365)|0;var BE=LR+(OU*400);var OT=J5-(((365
*LR)+((LR/4)|0))-((LR/100)|0));var Nx=(((5*OT)+2)/153)|0;var d=(OT-((((153*Nx)+2
)/5)|0))+1;var De=Nx+((Nx<10)?3:-9);var A1=Math.trunc(C/3600)%24|0;var M=Math.trunc(
C/60)%60|0;var EC=C%60|0;this.Op=BE+((De<=2)?1:0);this.Qg(De);this.GH(d);this.Qb(
A1+((A1<0)?24:0));this.Qf(M+((M<0)?60:0));this.Qj(EC+((EC<0)?60:0));},P8:function(
){return B._NewObject(D.AC,0).Initialize(this.SK());},HC:function(){var A;var d=
this.I9;var De=this.KT+((this.KT>2)?-2:10);var BE=this.Op-((this.KT<=2)?1:0);var
Al=(BE/100)|0;BE%=100;d+=((((((((26*De)-2)/10)|0)+BE)+((BE/4)|0))+((Al/4)|0))-(2
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
,_cycle:0,_observers:null,_className:"Core::PropertyObserver"};D.UI={AY:0x1,Tl:0x2
,TS:0x4,UF:0x8,AM:0x10,Gf:0x20,TT:0x40,T6:0x80,TQ:0x100,TZ:0x200,TK:0x400,Ug:0x800
,K_:0x1000,UH:0x2000,Ua:0x4000,Ub:0x8000,TD:0x10000,T$:0x20000,Ur:0x40000,TE:0x80000
,Uf:0x100000,TC:0x200000};D.Cm={Uh:0x1,Ui:0x2,Th:0x4,Ti:0x8,Tj:0x10,Tg:0x20};D.TW={
P6:0,UC:1,Ts:2,T0:3,Uk:4,UD:5,UE:6,Tt:7,Tu:8,T2:9,T1:10,Um:11,Ul:12};D.KH={P6:0,
UA:1,Left:2,Tq:3,QQ:4,PD:5,UB:6,Right:7,Tr:8};D.KeyCode={NoKey:0,Ok:1,Exit:2,Menu:
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};D.Uj={UM:0x1,UJ:0x2,UK:0x4,UL:0x8,T4:
0x10,TU:0x20};
D._Init=function(){D.EW.__proto__=D.Cq;D.AX.__proto__=D.Cq;D.H.__proto__=D.AX;D.Root.
__proto__=D.H;D.KeyEvent.__proto__=D.Event;D.L0.__proto__=D.Event;D.FL.__proto__=
D.Event;D.I$.__proto__=D.Event;D.Jv.__proto__=D.AX;D.Bu.__proto__=D.EW;D.Dn.__proto__=
D.AX;D.KQ.__proto__=D.KP;};D._ReInit=function(){};D.Cx=function(E){};return D;})(
);

/* Embedded Wizard */