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
var AH=[0,0];var AR=[0,0,0,0];var B4="The view does not belong to this group";var
Ev=[800,480];var D8="No view to restack";var Dl="View is not in this group";var DH=
"No view to remove";var D9="No view to add";var Fy="View already in a group";var
In="Recursive invalidate during active update cycle.";var GM=[-8,-8,9,9];var Hv=[
0,0,1,1];var Io="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";
D.B2={AG:null,At:null,G:null,AW:null,F:0x103,DE:0,BW:0x14,IF:function(An,Jy){},Fr:
function(C){if(this.DE===C)return;this.DE=C;if(!!this.G){var Fd=this.AG;var Aj=0;
while(!!Fd&&(C>Fd.DE)){Fd=Fd.AG;Aj=Aj+1;}Fd=this.At;while(!!Fd&&(C<Fd.DE)){Fd=Fd.
At;Aj=Aj-1;}if(!!Aj)this.G.Oi(this,Aj);}},Jl:function(C){var A;var Aj=C^this.BW;
if(!Aj)return;this.BW=C;if(!!this.AW&&!((this.F&0x400)===0x400)){this.G.F=this.G.
F|0x5000;B.pe([A=this.G,A.CS],this);this.G.Ac([0,0,(A=this.G.N)[2]-A[0],A[3]-A[1
]]);}if(!!this.AW&&((this.F&0x400)===0x400)){this.AW.G7.F=this.AW.G7.F|0x1000;this.
G.F=this.G.F|0x4000;B.pe([A=this.G,A.CS],this);}},HO:function(){var Aq=this.G;while(
!!Aq){var Dc=(D.Root.isPrototypeOf(Aq)?Aq:null);if(!!Dc)return Dc;Aq=Aq.G;}return null;
},Cj:function(AK,aClip,aOffset,Az,aBlend){},GetClipping:function(){return this.GetExtent(
);},Bo:function(AE){return null;},EI:function(Av,S,Cp,Ex,Ez,GU){return null;},I3:
function(Av){return Av;},I4:function(An,C7){return AH;},KG:function(aOffset,Jx){
},GetExtent:function(){return AR;},AD:function(CL,C6){var A;if(((this.F&0x200)===
0x200))CL=CL&~0x400;var LN=(this.F&~C6)|CL;var DK=LN^this.F;this.F=LN;if(!!this.
G&&!!(DK&0x14)){var MJ=((this.F&0x14)===0x14);if(MJ&&!this.G.Df)this.G.Hm(this);
if(!MJ&&(this.G.Df===this))this.G.Hm(this.G.L4(this,0x14));}if(!!this.G&&!!(DK&0x403
))this.G.Ac(this.GetClipping());if(((!!this.AW&&!!this.G)&&((LN&0x400)===0x400))&&((
DK&0x1)===0x1)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CS
],this);}if(!!this.G&&((DK&0x400)===0x400)){this.AW=null;this.F=this.F|0x800;this.
G.F=this.G.F|0x4000;B.pe([A=this.G,A.CS],this);}if(((((DK&0x100000)===0x100000)&&((
C6&0x100000)===0x100000))&&((this.F&0x10)===0x10))&&!((this.F&0x200080)===0x200080
))this.AD(0x0,0x10);if(((((DK&0x100000)===0x100000)&&((CL&0x100000)===0x100000))&&
!((this.F&0x10)===0x10))&&(!((this.F&0x200000)===0x200000)||((!((this.F&0x80)===
0x80)&&!!this.G)&&((this.G.F&0x10)===0x10))))this.AD(0x10,0x0);if(((((DK&0x200000
)===0x200000)&&((C6&0x200000)===0x200000))&&!((this.F&0x10)===0x10))&&((this.F&0x100000
)===0x100000))this.AD(0x10,0x0);if((((((DK&0x200000)===0x200000)&&((CL&0x200000)===
0x200000))&&((this.F&0x100010)===0x100010))&&!((this.F&0x80)===0x80))&&((!!this.
G&&!((this.G.F&0x10)===0x10))||((((this.F&0x10000)===0x10000)&&!!this.G)&&(null!==
this))))this.AD(0x0,0x10);},_Init:function(aArg){this.__proto__=D.B2;B.h7++;},_Done:
function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var
A;if((A=this.AG)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.At)&&(A._cycle!=E
))A._Mark(A._cycle=E);if((A=this.G)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.
AW)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=
E);},L:null,_cycle:0,_observers:null,_className:"Core::View"};D.D4={By:B.wf,BZ:B.
wf,Bx:B.wf,BY:B.wf,IF:function(An,Jy){var Ap=B._NewObject(D.Jc,0);this.AW=null;Ap.
Cu=this.GetExtent();Ap.AT=An;Ap.G7=Jy;Ap.IS=this.BY;Ap.IT=this.Bx;Ap.IU=this.BZ;
Ap.IV=this.By;this.AW=Ap;},I4:function(An,C7){var A;var A3=this.BW;var Ap=(D.Jc.
isPrototypeOf(A=this.AW)?A:null);var Z=Ap.Cu[0];var Aa=Ap.Cu[1];var Ad=Ap.Cu[2];
var U=Ap.Cu[3];var Ct=[An[2]-An[0],An[3]-An[1]];var AU=Ad-Z;var AP=U-Aa;if(!C7){
var Du=[(A=Ap.AT)[2]-A[0],A[3]-A[1]];Z=Z-Ap.AT[0];Aa=Aa-Ap.AT[1];if(Du[0]!==Ct[0
]){var Bh=((A3&0x4)===0x4);var Bi=((A3&0x8)===0x8);var Ed=((A3&0x1)===0x1);if(!Bh&&(
Ed||!Bi))Z=((Z*Ct[0])/Du[0])|0;if(!Bi&&(Ed||!Bh)){Ad=Ad-Ap.AT[0];Ad=((Ad*Ct[0])/
Du[0])|0;Ad=Ad-Ct[0];}else Ad=Ad-Ap.AT[2];Z=Z+An[0];Ad=Ad+An[2];if(!Ed){if(Bh&&!
Bi)Ad=Z+AU;else if(!Bh&&Bi)Z=Ad-AU;else{Z=Z+((((Ad-Z)-AU)/2)|0);Ad=Z+AU;}}}else{
Ad=Ad-Ap.AT[2];Z=Z+An[0];Ad=Ad+An[2];}if(Du[1]!==Ct[1]){var Bj=((A3&0x10)===0x10
);var Bg=((A3&0x20)===0x20);var Ee=((A3&0x2)===0x2);if(!Bj&&(Ee||!Bg))Aa=((Aa*Ct[
1])/Du[1])|0;if(!Bg&&(Ee||!Bj)){U=U-Ap.AT[1];U=((U*Ct[1])/Du[1])|0;U=U-Ct[1];}else
U=U-Ap.AT[3];Aa=Aa+An[1];U=U+An[3];if(!Ee){if(Bj&&!Bg)U=Aa+AP;else if(!Bj&&Bg)Aa=
U-AP;else{Aa=Aa+((((U-Aa)-AP)/2)|0);U=Aa+AP;}}}else{U=U-Ap.AT[3];Aa=Aa+An[1];U=U+
An[3];}}else{switch(C7){case 3:{Z=An[0];Ad=Z+AU;}break;case 4:{Ad=An[2];Z=Ad-AU;
}break;case 1:{Aa=An[1];U=Aa+AP;}break;case 2:{U=An[3];Aa=U-AP;}break;default:;}
if((C7===3)||(C7===4)){var Bj=((A3&0x10)===0x10);var Bg=((A3&0x20)===0x20);var Ee=((
A3&0x2)===0x2);if(Ee){Aa=An[1];U=An[3];}else if(Bj&&!Bg){Aa=An[1];U=Aa+AP;}else if(
Bg&&!Bj){U=An[3];Aa=U-AP;}else{Aa=An[1]+((((An[3]-An[1])-AP)/2)|0);U=Aa+AP;}}if((
C7===1)||(C7===2)){var Bh=((A3&0x4)===0x4);var Bi=((A3&0x8)===0x8);var Ed=((A3&0x1
)===0x1);if(Ed){Z=An[0];Ad=An[2];}else if(Bh&&!Bi){Z=An[0];Ad=Z+AU;}else if(Bi&&
!Bh){Ad=An[2];Z=Ad-AU;}else{Z=An[0]+((((An[2]-An[0])-AU)/2)|0);Ad=Z+AU;}}}Ap.isEmpty=(
Z>=Ad)||(Aa>=U);AU=(Ad-Z)-1;AP=(U-Aa)-1;var E$=Ap.Cu[0];var Fa=Ap.Cu[1];var EC=(
Ap.Cu[2]-E$)-1;var EB=(Ap.Cu[3]-Fa)-1;if(!EC)EC=1;if(!EB)EB=1;if(((this.F&0x100)===
0x100)){this.BY=[Z+((((Ap.IS[0]-E$)*AU)/EC)|0),Aa+((((Ap.IS[1]-Fa)*AP)/EB)|0)];this.
Bx=[Z+((((Ap.IT[0]-E$)*AU)/EC)|0),Aa+((((Ap.IT[1]-Fa)*AP)/EB)|0)];this.BZ=[Z+((((
Ap.IU[0]-E$)*AU)/EC)|0),Aa+((((Ap.IU[1]-Fa)*AP)/EB)|0)];this.By=[Z+((((Ap.IV[0]-
E$)*AU)/EC)|0),Aa+((((Ap.IV[1]-Fa)*AP)/EB)|0)];}else{this.CG([Z+((((Ap.IS[0]-E$)
*AU)/EC)|0),Aa+((((Ap.IS[1]-Fa)*AP)/EB)|0)]);this.CH([Z+((((Ap.IT[0]-E$)*AU)/EC)|
0),Aa+((((Ap.IT[1]-Fa)*AP)/EB)|0)]);this.CI([Z+((((Ap.IU[0]-E$)*AU)/EC)|0),Aa+((((
Ap.IU[1]-Fa)*AP)/EB)|0)]);this.CJ([Z+((((Ap.IV[0]-E$)*AU)/EC)|0),Aa+((((Ap.IV[1]-
Fa)*AP)/EB)|0)]);this.AW=Ap;}return[AU+1,AP+1];},KG:function(aOffset,Jx){if(Jx){
this.BY=B.abf(this.BY,aOffset);this.Bx=B.abf(this.Bx,aOffset);this.BZ=B.abf(this.
BZ,aOffset);this.By=B.abf(this.By,aOffset);}else{this.CG(B.abf(this.BY,aOffset));
this.CH(B.abf(this.Bx,aOffset));this.CI(B.abf(this.BZ,aOffset));this.CJ(B.abf(this.
By,aOffset));}},GetExtent:function(){if(!!this.AW&&this.AW.isEmpty)return AR;var
Z=this.BY[0];var Aa=this.BY[1];var Ad=this.BZ[0];var U=this.BZ[1];if((((this.By[
0]!==Z)||(this.Bx[1]!==Aa))||(this.Bx[0]!==Ad))||(this.By[1]!==U)){if(this.Bx[0]<
Z)Z=this.Bx[0];if(this.BZ[0]<Z)Z=this.BZ[0];if(this.By[0]<Z)Z=this.By[0];if(this.
Bx[1]<Aa)Aa=this.Bx[1];if(this.BZ[1]<Aa)Aa=this.BZ[1];if(this.By[1]<Aa)Aa=this.By[
1];if(this.BY[0]>Ad)Ad=this.BY[0];if(this.Bx[0]>Ad)Ad=this.Bx[0];if(this.By[0]>Ad
)Ad=this.By[0];if(this.BY[1]>U)U=this.BY[1];if(this.Bx[1]>U)U=this.Bx[1];if(this.
By[1]>U)U=this.By[1];}else{var tmp;if(Ad<Z){tmp=Z;Z=Ad;Ad=tmp;}if(U<Aa){tmp=Aa;Aa=
U;U=tmp;}}return[Z,Aa,Ad+1,U+1];},CJ:function(C){var A;if(B.aaX(C,this.By))return;
if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping());this.AW=null;this.
By=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping());if((!!this.
G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;
this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CS],this);}},CI:function(C){var A;if(B.
aaX(C,this.BZ))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping(
));this.AW=null;this.BZ=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping(
));if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CS],this);}},CH:function(
C){var A;if(B.aaX(C,this.Bx))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(
this.GetClipping());this.AW=null;this.Bx=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ac(this.GetClipping());if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000
)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CS],this
);}},CG:function(C){var A;if(B.aaX(C,this.BY))return;if(!!this.G&&((this.F&0x1)===
0x1))this.G.Ac(this.GetClipping());this.AW=null;this.BY=C;if(!!this.G&&((this.F&
0x1)===0x1))this.G.Ac(this.GetClipping());if((!!this.G&&((this.F&0x400)===0x400)
)&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.
pe([A=this.G,A.CS],this);}},Kw:function(GS){var A1=B.abi(4,B.wf,null);var K=0;var
A7=3;var LF=false;var LG=false;A1.Set(0,this.BY);A1.Set(1,this.Bx);A1.Set(2,this.
BZ);A1.Set(3,this.By);while(K<4){var Ng=A1.Get(K)[0];var J9=A1.Get(K)[1];var PT=
A1.Get(A7)[0];var L0=A1.Get(A7)[1];if(((J9>GS[1])!==(L0>GS[1]))||((J9<GS[1])!==(
L0<GS[1]))){var Nh=((((PT-Ng)*(GS[1]-J9))/(L0-J9))|0)+Ng;if(GS[0]>Nh)LF=!LF;if(GS[
0]<Nh)LG=!LG;}A7=K;K=K+1;}return LF||LG;},NC:function(){return((((this.BY[0]===this.
By[0])&&(this.Bx[0]===this.BZ[0]))&&(this.BY[1]===this.Bx[1]))&&(this.BZ[1]===this.
By[1]))||((((this.BY[0]===this.Bx[0])&&(this.BZ[0]===this.By[0]))&&(this.BY[1]===
this.By[1]))&&(this.Bx[1]===this.BZ[1]));},_Init:function(aArg){D.B2._Init.call(
this,aArg);this.__proto__=D.D4;},_className:"Core::QuadView"};D.AN={N:B.wg,IF:function(
An,Jy){var Ap=B._NewObject(D.Jb,0);Ap.Cu=this.N;Ap.AT=An;Ap.G7=Jy;this.AW=Ap;},I4:
function(An,C7){var A;var A3=this.BW;var Ap=this.AW;var Z=Ap.Cu[0];var Aa=Ap.Cu[
1];var Ad=Ap.Cu[2];var U=Ap.Cu[3];var Ct=[An[2]-An[0],An[3]-An[1]];var AU=Ad-Z;var
AP=U-Aa;if(!C7){var Du=[(A=Ap.AT)[2]-A[0],A[3]-A[1]];Z=Z-Ap.AT[0];Aa=Aa-Ap.AT[1];
if(Du[0]!==Ct[0]){var Bh=((A3&0x4)===0x4);var Bi=((A3&0x8)===0x8);var Ed=((A3&0x1
)===0x1);if(!Bh&&(Ed||!Bi))Z=((Z*Ct[0])/Du[0])|0;if(!Bi&&(Ed||!Bh)){Ad=Ad-Ap.AT[
0];Ad=((Ad*Ct[0])/Du[0])|0;Ad=Ad-Ct[0];}else Ad=Ad-Ap.AT[2];Z=Z+An[0];Ad=Ad+An[2
];if(!Ed){if(Bh&&!Bi)Ad=Z+AU;else if(!Bh&&Bi)Z=Ad-AU;else{Z=Z+((((Ad-Z)-AU)/2)|0
);Ad=Z+AU;}}}else{Ad=Ad-Ap.AT[2];Z=Z+An[0];Ad=Ad+An[2];}if(Du[1]!==Ct[1]){var Bj=((
A3&0x10)===0x10);var Bg=((A3&0x20)===0x20);var Ee=((A3&0x2)===0x2);if(!Bj&&(Ee||
!Bg))Aa=((Aa*Ct[1])/Du[1])|0;if(!Bg&&(Ee||!Bj)){U=U-Ap.AT[1];U=((U*Ct[1])/Du[1])|
0;U=U-Ct[1];}else U=U-Ap.AT[3];Aa=Aa+An[1];U=U+An[3];if(!Ee){if(Bj&&!Bg)U=Aa+AP;
else if(!Bj&&Bg)Aa=U-AP;else{Aa=Aa+((((U-Aa)-AP)/2)|0);U=Aa+AP;}}}else{U=U-Ap.AT[
3];Aa=Aa+An[1];U=U+An[3];}}else{switch(C7){case 3:{Z=An[0];Ad=Z+AU;}break;case 4:{
Ad=An[2];Z=Ad-AU;}break;case 1:{Aa=An[1];U=Aa+AP;}break;case 2:{U=An[3];Aa=U-AP;
}break;default:;}if((C7===3)||(C7===4)){var Bj=((A3&0x10)===0x10);var Bg=((A3&0x20
)===0x20);var Ee=((A3&0x2)===0x2);if(Ee){Aa=An[1];U=An[3];}else if(Bj&&!Bg){Aa=An[
1];U=Aa+AP;}else if(Bg&&!Bj){U=An[3];Aa=U-AP;}else{Aa=An[1]+((((An[3]-An[1])-AP)
/2)|0);U=Aa+AP;}}if((C7===1)||(C7===2)){var Bh=((A3&0x4)===0x4);var Bi=((A3&0x8)===
0x8);var Ed=((A3&0x1)===0x1);if(Ed){Z=An[0];Ad=An[2];}else if(Bh&&!Bi){Z=An[0];Ad=
Z+AU;}else if(Bi&&!Bh){Ad=An[2];Z=Ad-AU;}else{Z=An[0]+((((An[2]-An[0])-AU)/2)|0);
Ad=Z+AU;}}}Ap.isEmpty=(Z>=Ad)||(Aa>=U);if(((this.F&0x100)===0x100))this.N=[Z,Aa,
Ad,U];else{this.P([Z,Aa,Ad,U]);this.AW=Ap;}return[Ad-Z,U-Aa];},KG:function(aOffset
,Jx){if(Jx)this.N=B.abh(this.N,aOffset);else this.P(B.abh(this.N,aOffset));},GetExtent:
function(){return this.N;},P:function(C){var A;if(B.aaY(C,this.N))return;if(!!this.
G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping());this.AW=null;this.N=C;if(!
!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping());if((!!this.G&&((this.
F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=
this.G.F|0x4000;B.pe([A=this.G,A.CS],this);}},_Init:function(aArg){D.B2._Init.call(
this,aArg);this.__proto__=D.AN;},_className:"Core::RectView"};D.Q={CY:null,B6:null
,JR:null,Df:null,B8:255,IB:0,IE:0,ID:0,IC:0,Cl:function(aArg){this.Bd();},Cj:function(
AK,aClip,aOffset,Az,aBlend){var A;Az=((Az+1)*this.B8)>>8;aBlend=aBlend&&((this.F&
0x2)===0x2);this.Pv(AK,aClip,B.abf(aOffset,this.N.slice(0,2)),Az,aBlend);},GetClipping:
function(){var A;var I=this.N;I=[].concat(I[0]-this.IC,I.slice(1,4));I=B.abP(I,I[
1]-this.IE);I=B.abN(I,I[2]+this.ID);I=[].concat(I.slice(0,3),I[3]+this.IB);if(((
this.F&0x80000)===0x80000)){var G9=AR;var H;for(H=this.CY;!!H;H=H.AG)if(((H.F&0x1
)===0x1))G9=B.wC(G9,H.GetClipping());I=B.wC(I,B.abh(G9,this.N.slice(0,2)));}return I;
},EI:function(Av,S,Cp,Ex,Ez,GU){var A;var H=this.B6;var G0=null;var T=AR;var CO=
null;if(((A=B.lb(Av,this.N))[0]>=A[2])||(A[1]>=A[3]))return null;Av=B.abg(Av,this.
N.slice(0,2));if(!!Ez){H=Ez;while(!!H&&(H.G!==this))H=H.G;}while(!!H){if(((H.F&0x400
)===0x400)&&!CO){CO=H.At;while(!!CO&&!((CO.F&0x200)===0x200))CO=CO.At;if(!!CO)T=
B.lb(Av,CO.GetExtent());else T=AR;}if(CO===H){CO=null;T=AR;}if((!!Ex&&!!(D.Q.isPrototypeOf(
H)?H:null))||((((((H.F&0x8)===0x8)&&((H.F&0x10)===0x10))&&!((H.F&0x40000)===0x40000
))&&!((H.F&0x20000)===0x20000))&&(!((H.F&0x10000)===0x10000)||(null===H)))){var Cu=
H.GetExtent();var JK=Ex;var GY=null;if(JK===H)JK=null;if(((H.F&0x400)===0x400)){
if(!(((A=B.lb(Cu,T))[0]>=A[2])||(A[1]>=A[3])))GY=H.EI(T,S,Cp,JK,Ez,GU);}else if(
!(((A=B.lb(Cu,Av))[0]>=A[2])||(A[1]>=A[3]))||(Ex===H))GY=H.EI(Av,S,Cp,JK,Ez,GU);
H=H.At;if(!!GY){if(!G0||((GY.HL<G0.HL)&&(GY.HL>=0)))G0=GY;if(!GY.HL)H=null;}}else
H=H.At;Ez=null;}return G0;},I3:function(Av){var A;var R;var H=this.CY;var GW=AR;
var IR=true;var result=(Av=R=B.abg(Av,this.N.slice(0,2)),R);while(!!H){if(((H.F&
0x200)===0x200)){var HE=(D.H9.isPrototypeOf(H)?H:null);GW=B.lb(Av,HE.N);IR=((HE.
F&0x1)===0x1);}if(((H.F&0x1)===0x1)){if(((H.F&0x400)===0x400)){if(IR){var T=B.lb(
H.GetClipping(),GW);if(!((T[0]>=T[2])||(T[1]>=T[3])))result=B.wC(result,H.I3(T));
}}else{var T=B.lb(H.GetClipping(),Av);if(!((T[0]>=T[2])||(T[1]>=T[3])))result=B.
wC(result,H.I3(T));}}H=H.AG;}return B.lb(B.abh(result,this.N.slice(0,2)),this.N);
},AD:function(CL,C6){var A;var JV=this.F;if((!!this.G&&((this.F&0x80001)===0x80001
))&&((C6&0x80000)===0x80000))this.G.Ac(this.GetClipping());D.AN.AD.call(this,CL,
C6);if(((!!this.G&&((this.F&0x1)===0x1))&&((CL&0x80000)===0x80000))&&!((JV&0x80000
)===0x80000))this.G.Ac(this.GetClipping());var DK=this.F^JV;if(!!this.Df&&((DK&0x40
)===0x40)){if(((this.F&0x40)===0x40))this.Df.AD(0x40,0x0);else this.Df.AD(0x0,0x40
);}if(((DK&0x10)===0x10)){var H;for(H=this.CY;!!H;H=H.AG)if((((H.F&0x300000)===0x300000
)&&!((H.F&0x80)===0x80))&&(!((H.F&0x10000)===0x10000)||(null===H)))H.AD(CL&0x10,
C6&0x10);}if(!!DK){this.F=this.F|0x8000;B.pe([this,this.J8],this);}},P:function(
C){var A;if(B.aaY(C,this.N))return;var FG=[(A=this.N)[2]-A[0],A[3]-A[1]];var LM=[
C[2]-C[0],C[3]-C[1]];var HF=!B.aaX(FG,LM);D.AN.P.call(this,C);if((HF&&(FG[0]>0))&&(
FG[1]>0)){var AT=[].concat(AH,FG);var H=this.CY;while(!!H){if((!H.AW&&(H.BW!==0x14
))&&!((H.F&0x400)===0x400))H.IF(AT,null);H=H.AG;}}if(HF){this.F=this.F|0x5000;B.
pe([this,this.J8],this);}},MZ:function(AE){var ML=(D.KeyEvent.isPrototypeOf(AE)?
AE:null);var DL=this.JR;if(!ML)return null;while(!!DL&&(!DL.Bw||!DL.Bo(ML)))DL=DL.
AG;return DL;},Pv:function(AK,aClip,aOffset,Az,aBlend){var A;var H=this.CY;var GW=
AR;var IR=true;this.Nu(AK,aClip,aOffset,Az,aBlend);while(!!H){if(((H.F&0x200)===
0x200)){var HE=(D.H9.isPrototypeOf(H)?H:null);IR=((HE.F&0x1)===0x1);GW=aClip;if(
!((HE.F&0x80000)===0x80000))GW=B.lb(GW,B.abh(HE.N,aOffset));}if(((H.F&0x1)===0x1
)){if(((H.F&0x400)===0x400)){if(IR){var T=B.lb(B.abh(H.GetClipping(),aOffset),GW
);if(!((T[0]>=T[2])||(T[1]>=T[3])))H.Cj(AK,T,aOffset,Az,aBlend);}}else{var T=B.lb(
B.abh(H.GetClipping(),aOffset),aClip);if(!((T[0]>=T[2])||(T[1]>=T[3])))H.Cj(AK,T
,aOffset,Az,aBlend);}}H=H.AG;}this.Nx(AK,aClip,aOffset,Az,aBlend);},PL:function(
){var A;var LD=((this.F&0x1000)===0x1000);var Fb=[0,0,(A=this.N)[2]-A[0],A[3]-A[
1]];var ED=false;var HA=AR;var LB=AR;var H=this.B6;var CO=null;while(!!H){if(((H.
F&0x800)===0x800)){ED=true;H.F=H.F&~0x800;}if(ED&&((H.F&0x200)===0x200))ED=false;
H=H.At;}ED=false;H=this.CY;if(LD){this.F=this.F&~0x1000;LD=!((Fb[0]>=Fb[2])||(Fb[
1]>=Fb[3]));}this.F=this.F|0x2000;while(!!H){if(((H.F&0x400)===0x400)){if(!!H.AW&&(
H.AW.G7!==CO))H.AW=null;if((!H.AW&&ED)&&(H.BW!==0x14))H.IF(LB,CO);}if(!!H.AW){if(
LD&&!((H.F&0x400)===0x400))H.I4(Fb,0);if(ED&&((H.F&0x400)===0x400))H.I4(LB,0);}if(((
H.F&0x200)===0x200)){ED=((H.F&0x1000)===0x1000);CO=(D.H9.isPrototypeOf(H)?H:null
);if(ED){H.F=H.F&~0x1000;HA=CO.N;LB=HA;ED=!((HA[0]>=HA[2])||(HA[1]>=HA[3]));}if(
ED)this.Ac(CO.N);}H=H.AG;}this.F=this.F&~0x2000;this.Js([Fb[2]-Fb[0],Fb[3]-Fb[1]
]);},CS:function(As){B.pe([this,this.J8],this);},J8:function(As){var A;var PR=((
this.F&0x1000)===0x1000);if(((this.F&0x4000)===0x4000)){this.F=this.F&~0x4000;this.
PL();}if(((this.F&0x8000)===0x8000)||PR){this.F=this.F&~0x8000;this.E5(this.F);}
},Hm:function(C){var A;if(!!C&&(C.G!==this))throw new Error(B4);if(!!C&&!((C.F&0x14
)===0x14))C=null;if(!!C&&((C.F&0x10000)===0x10000))C=null;if(C===this.Df)return;
if(!!this.Df)this.Df.AD(0x0,0x60);this.Df=C;if(!!C){if(((this.F&0x40)===0x40))C.
AD(0x60,0x0);else C.AD(0x20,0x0);}},Y:function(C){if(C)this.AD(0x100000,0x0);else
this.AD(0x0,0x100000);},Ba:function(C){var A;if(C>255)C=255;if(C<0)C=0;if(C===this.
B8)return;this.B8=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping(
));},Jw:function(PS){this.Ba(PS);},Ab:function(C){if(C)this.AD(0x1,0x0);else this.
AD(0x0,0x1);},ExtendClipping:function(GP,GQ,GR,GO){var A;var Iv=this.N;var CM=Iv;
if(GP<0)GP=0;if(GP>255)GP=255;if(GQ<0)GQ=0;if(GQ>255)GQ=255;if(GR<0)GR=0;if(GR>255
)GR=255;if(GO<0)GO=0;if(GO>255)GO=255;CM=[].concat(CM[0]-(Math.max(GP,this.IC)&0xFF
),CM.slice(1,4));CM=B.abN(CM,CM[2]+(Math.max(GQ,this.ID)&0xFF));CM=B.abP(CM,CM[1
]-(Math.max(GR,this.IE)&0xFF));CM=[].concat(CM.slice(0,3),CM[3]+(Math.max(GO,this.
IB)&0xFF));if(GP!==this.IC){if((!!this.G&&((this.F&0x1)===0x1))&&!((this.F&0x80000
)===0x80000)){var I=CM;I=B.abN(I,Iv[0]);this.G.Ac(I);}this.IC=GP&0xFF;}if(GQ!==this.
ID){if((!!this.G&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var I=CM;
I=[].concat(Iv[2],I.slice(1,4));this.G.Ac(I);}this.ID=GQ&0xFF;}if(GR!==this.IE){
if((!!this.G&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var I=CM;I=[
].concat(I.slice(0,3),Iv[1]);this.G.Ac(I);}this.IE=GR&0xFF;}if(GO!==this.IB){if((
!!this.G&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var I=CM;I=B.abP(
I,Iv[3]);this.G.Ac(I);}this.IB=GO&0xFF;}},Nx:function(AK,aClip,aOffset,Az,aBlend
){},Nu:function(AK,aClip,aOffset,Az,aBlend){},GetMaximalSize:function(){return Ev;
},GetMinimalSize:function(){return AH;},DispatchEvent:function(AE){var A;var H=this.
Df;var Aq=(D.Q.isPrototypeOf(H)?H:null);var Be=null;if(!!H&&((((H.F&0x10000)===0x10000
)||((H.F&0x40000)===0x40000))||((H.F&0x20000)===0x20000))){H=null;Aq=null;}if(!!
Aq)Be=Aq.DispatchEvent(AE);else if(!!H)Be=H.Bo(AE);if(!Be)Be=this.Bo(AE);if(!Be)
Be=this.MZ(AE);return Be;},BroadcastEventAtPosition:function(AE,Mt,aFilter){var A;
var H=this.B6;var Be=null;while(!!H&&!Be){if((!aFilter||((A=aFilter)&&((H.F&A)===
A)))&&B.wa(H.GetExtent(),Mt)){var Aq=(D.Q.isPrototypeOf(H)?H:null);if(!!Aq)Be=Aq.
BroadcastEventAtPosition(AE,B.abe(Mt,Aq.N.slice(0,2)),aFilter);else Be=H.Bo(AE);
}H=H.At;}if(!Be)Be=this.Bo(AE);return Be;},BroadcastEvent:function(AE,aFilter){var
A;var H=this.B6;var Be=null;while(!!H&&!Be){if(!aFilter||((A=aFilter)&&((H.F&A)===
A))){var Aq=(D.Q.isPrototypeOf(H)?H:null);if(!!Aq)Be=Aq.BroadcastEvent(AE,aFilter
);else Be=H.Bo(AE);}H=H.At;}if(!Be)Be=this.Bo(AE);if(!Be)Be=this.MZ(AE);return Be;
},Js:function(aSize){},E5:function(C8){},Bd:function(){this.F=this.F|0x8000;B.pe([
this,this.J8],this);},Ac:function(Av){var A;var Aq=this;while(!!Aq&&!((Av[0]>=Av[
2])||(Av[1]>=Av[3]))){if(!Aq.G&&(Aq!==this)){Aq.Ac(Av);return;}if(!((Aq.F&0x1)===
0x1))return;var I=Aq.N;Av=B.abh(Av,I.slice(0,2));if(!((Aq.F&0x80000)===0x80000)){
I=[].concat(I[0]-Aq.IC,I.slice(1,4));I=B.abP(I,I[1]-Aq.IE);I=B.abN(I,I[2]+Aq.ID);
I=[].concat(I.slice(0,3),I[3]+Aq.IB);Av=B.lb(Av,I);}Aq=Aq.G;}},L4:function(M,aFilter
){var A;if(!M||(M.G!==this))return null;var FF=M.AG;var FI=M.At;var IM=0x10000;if(((
aFilter&0x10000)===0x10000))IM=0x0;while(!!FF||!!FI){if((!!FF&&(!aFilter||((A=aFilter
)&&((FF.F&A)===A))))&&(!IM||!((A=IM)&&((FF.F&A)===A))))return FF;if((!!FI&&(!aFilter||((
A=aFilter)&&((FI.F&A)===A))))&&(!IM||!((A=IM)&&((FI.F&A)===A))))return FI;if(!!FF
)FF=FF.AG;if(!!FI)FI=FI.At;}return null;},Oi:function(M,Dn){var A;if(!M)throw new
Error(D8);if(M.G!==this)throw new Error(Dl);var E7=M;var Bk=M;var G_=M.DE;while(((
Dn>0)&&!!E7.AG)&&(E7.AG.DE<=G_)){E7=E7.AG;Dn=Dn-1;}while(((Dn<0)&&!!Bk.At)&&(Bk.
At.DE>=G_)){Bk=Bk.At;Dn=Dn+1;}if((E7===M)&&(Bk===M))return;if(((M.F&0x401)===0x401
)){if(!!M.At&&!!M.AW)M.At.F=M.At.F|0x800;M.F=M.F|0x800;this.F=this.F|0x4000;B.pe([
this,this.CS],this);}if(((M.F&0x200)===0x200)){if(!!M.At)M.At.F=M.At.F|0x800;M.F=
M.F|0x800;this.F=this.F|0x4000;B.pe([this,this.CS],this);}if(!!M.At)M.At.AG=M.AG;
if(!!M.AG)M.AG.At=M.At;if(this.CY===M)this.CY=M.AG;if(this.B6===M)this.B6=M.At;if(
E7!==M){M.AG=E7.AG;M.At=E7;E7.AG=M;if(!!M.AG)M.AG.At=M;}if(Bk!==M){M.AG=Bk;M.At=
Bk.At;Bk.At=M;if(!!M.At)M.At.AG=M;}if(!M.AG)this.B6=M;if(!M.At)this.CY=M;if(((M.
F&0x1)===0x1))this.Ac(M.GetClipping());},Hp:function(M){var A;if(!M)throw new Error(
DH);if(M.G!==this)throw new Error(Dl);if((((M.F&0x401)===0x401)&&!!M.At)&&!!M.AW
){M.At.F=M.At.F|0x800;this.F=this.F|0x4000;B.pe([this,this.CS],this);}if(((M.F&0x200
)===0x200)){if(!!M.At)M.At.F=M.At.F|0x800;this.F=this.F|0x4000;B.pe([this,this.CS
],this);}M.AW=null;if(this.Df===M)this.Hm(this.L4(M,0x14));if(!!M.At)M.At.AG=M.AG;
if(!!M.AG)M.AG.At=M.At;if(this.CY===M)this.CY=M.AG;if(this.B6===M)this.B6=M.At;M.
G=null;M.AG=null;M.At=null;if((!((M.F&0x10)===0x10)&&((M.F&0x100000)===0x100000)
)&&!((this.F&0x80)===0x80))M.AD(0x10,0x0);if(((M.F&0x1)===0x1))this.Ac(M.GetClipping(
));},X:function(M,Dn){var A;if(!M)throw new Error(D9);if(!!M.G)throw new Error(Fy
);var Bk=null;var G_=M.DE;if(((Dn<0)&&!!this.B6)&&(this.B6.DE>=G_)){Bk=this.B6;Dn=
Dn+1;}while((((Dn<0)&&!!Bk)&&!!Bk.At)&&(Bk.At.DE>=G_)){Bk=Bk.At;Dn=Dn+1;}if((!Bk&&
!!this.B6)&&(this.B6.DE>G_))Bk=this.B6;while((!!Bk&&!!Bk.At)&&(Bk.At.DE>G_))Bk=Bk.
At;if(!Bk){M.G=this;M.At=this.B6;if(!!this.B6)this.B6.AG=M;if(!this.CY)this.CY=M;
this.B6=M;}else{M.G=this;M.At=Bk.At;M.AG=Bk;Bk.At=M;if(!!M.At)M.At.AG=M;else this.
CY=M;}if(((M.F&0x1)===0x1))this.Ac(M.GetClipping());if(((M.F&0x80)===0x80)&&(B.aam(
).NA()===M))M.AD(0x10,0x0);else if(!((this.F&0x10)===0x10)&&((M.F&0x200010)===0x200010
))M.AD(0x0,0x10);else if((((this.F&0x10)===0x10)&&!((M.F&0x10)===0x10))&&((M.F&0x100000
)===0x100000))M.AD(0x10,0x0);if(((!this.Df&&((M.F&0x4)===0x4))&&((M.F&0x10)===0x10
))&&!((M.F&0x10000)===0x10000))this.Hm(M);if(((M.F&0x401)===0x401)){M.F=M.F|0x800;
this.F=this.F|0x4000;B.pe([this,this.CS],this);}if(((M.F&0x200)===0x200)){M.F=M.
F|0x800;this.F=this.F|0x4000;B.pe([this,this.CS],this);}},Hh:function(){return this.
B8;},_Init:function(aArg){D.AN._Init.call(this,aArg);this.__proto__=D.Q;this.F=0x10001F;
this.Cl(aArg);},_Mark:function(E){var A;D.AN._Mark.call(this,E);if((A=this.CY)&&(
A._cycle!=E))A._Mark(A._cycle=E);if((A=this.B6)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.JR)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Df)&&(A._cycle!=
E))A._Mark(A._cycle=E);},_className:"Core::Group"};D.Root={CQ:null,A0:B.abi(10,null
,null),Hx:null,E_:null,I2:0,A9:0,BR:B.abi(10,0,null),JJ:B.abi(10,B.wg,null),Ds:B.
abi(10,0,null),EA:B.abi(10,B.wf,null),Hz:B.abi(10,0,null),E9:B.abi(10,B.wf,null)
,Dr:B.abi(10,B.wf,null),CN:B.abi(10,B.wf,null),D_:B.abi(10,B.wf,null),AF:0,JO:0,
JN:0,Cb:B.abi(4,0,null),Br:B.abi(4,B.wg,null),Bq:0,II:0,HB:0,LE:true,Cl:function(
aArg){if(!!!this.L){var obj=this;B.abD(obj);}},HO:function(){return this;},Cj:function(
AK,aClip,aOffset,Az,aBlend){var fullScreenUpdate=false;fullScreenUpdate=B.m7;if(
!fullScreenUpdate)AK.Kn(aClip,B.abh(B.abh(aClip,aOffset),this.N.slice(0,2)),0x00000000
,0x00000000,0x00000000,0x00000000,false);D.Q.Cj.call(this,AK,aClip,aOffset,Az,aBlend
);},AD:function(CL,C6){var A;D.Q.AD.call(this,CL,C6);if(!this.G&&(((CL&0x1)===0x1
)||((C6&0x1)===0x1)))this.Ac([0,0,(A=this.N)[2]-A[0],A[3]-A[1]]);if(!this.G&&(((
CL&0x2)===0x2)||((C6&0x2)===0x2)))this.Ac([0,0,(A=this.N)[2]-A[0],A[3]-A[1]]);},
Hm:function(C){if((C!==null)||!C)D.Q.Hm.call(this,C);},Ba:function(C){var A;var Da=
this.B8;D.Q.Ba.call(this,C);if(((Da!==this.B8)&&!this.G)&&((this.F&0x1)===0x1))this.
Ac([0,0,(A=this.N)[2]-A[0],A[3]-A[1]]);},DispatchEvent:function(AE){if(!!AE){AE.
HS=!!this.A9;if(!!this.A9)AE.Ax=this.A9;}var Be;Be=D.Q.DispatchEvent.call(this,AE
);this.A9=0;return Be;},BroadcastEvent:function(AE,aFilter){if(!!AE){AE.HS=!!this.
A9;if(!!this.A9)AE.Ax=this.A9;}var Be=D.Q.BroadcastEvent.call(this,AE,aFilter);this.
A9=0;return Be;},Ac:function(Av){var A;if(this.I2>0)throw new Error(In);var fullScreenUpdate=
false;fullScreenUpdate=B.m7;if(fullScreenUpdate)Av=[0,0,(A=this.N)[2]-A[0],A[3]-
A[1]];if(!!this.G){D.Q.Ac.call(this,Av);return;}Av=B.lb(B.abh(Av,this.N.slice(0,
2)),this.N);if((Av[0]>=Av[2])||(Av[1]>=Av[3]))return;var K;for(K=0;K<this.Bq;K=K+
1)if(!(((A=B.lb(this.Br.Get(K),Av))[0]>=A[2])||(A[1]>=A[3]))){this.Br.Set(K,B.wC(
this.Br.Get(K),Av));this.Cb.Set(K,B.aaH(this.Br.Get(K)));return;}if(this.Bq<3){this.
Br.Set(this.Bq,Av);this.Cb.Set(this.Bq,B.aaH(Av));this.Bq=this.Bq+1;return;}var A7;
var CP;var IH=0;var IJ=0;var Mz=2147483647;this.Br.Set(this.Bq,Av);this.Cb.Set(this.
Bq,B.aaH(Av));for(A7=0;A7<=this.Bq;A7=A7+1)for(CP=A7+1;CP<=this.Bq;CP=CP+1){var J7=
B.aaH(B.wC(this.Br.Get(A7),this.Br.Get(CP)));var MY=((J7<<8)/(this.Cb.Get(A7)+this.
Cb.Get(CP)))|0;if(MY<Mz){Mz=MY;IH=A7;IJ=CP;}}this.Br.Set(IH,B.wC(this.Br.Get(IH)
,this.Br.Get(IJ)));this.Cb.Set(IH,B.aaH(this.Br.Get(IH)));if(IJ!==this.Bq){this.
Br.Set(IJ,this.Br.Get(this.Bq));this.Cb.Set(IJ,this.Cb.Get(this.Bq));}},Pr:function(
){var BS=B._NewObject(D.HM,0);BS.HS=!!this.A9;if(!!this.A9)BS.Ax=this.A9;return BS;
},GX:function(){var BS=B._NewObject(D.EH,0);BS.HS=!!this.A9;if(!!this.A9)BS.Ax=this.
A9;return BS;},Hy:function(){var BS=B._NewObject(D.Ki,0);BS.HS=!!this.A9;if(!!this.
A9)BS.Ax=this.A9;return BS;},Ps:function(As){var K;var G0=false;for(K=0;K<10;K=K+
1)if(!!this.A0.Get(K)){var AX=this.CN.Get(K);var Aq=this.A0.Get(K).G;while(!!Aq&&(
Aq!==this)){AX=B.abe(AX,Aq.N.slice(0,2));Aq=Aq.G;}if(!Aq&&(this.A0.Get(K)!==this
)){var tmp=this.A0.Get(K);this.AF=K;this.A0.Set(K,null);tmp.Bo(this.GX().InitializeUp(
K,this.E9.Get(K),this.EA.Get(K),this.Ds.Get(K),this.BR.Get(K)+1,this.Dr.Get(K),false
,this.CN.Get(K),this.D_.Get(K)));this.BroadcastEvent(this.Hy().InitializeUp(K,this.
BR.Get(K)+1,false,tmp,this.CN.Get(K)),0x18);}else{this.Ds.Set(K,(this.E_.Ax-this.
Hz.Get(K))|0);if(this.Ds.Get(K)<10)this.Ds.Set(K,10);this.AF=K;this.A0.Get(K).Bo(
this.GX().InitializeHold(K,AX,this.EA.Get(K),this.Ds.Get(K),this.BR.Get(K)+1,this.
Dr.Get(K),this.CN.Get(K),this.D_.Get(K)));G0=true;}}if(!G0)this.E_.Y(false);},GetFPS:
function(){var ticksCount=0;var MK=0;ticksCount=((new Date).getTime()-B.v$)|0;if(
!!this.JO&&(ticksCount>this.JO))MK=((this.JN*1000)/((ticksCount-this.JO)|0))|0;this.
JN=0;this.JO=ticksCount;return MK;},Update:function(){var A;if(!this.Hx)this.Hx=
B._NewObject(B.Graphics.Canvas,0);this.Hx.Ma([(A=this.N)[2]-A[0],A[3]-A[1]]);this.
Hx.Update();return this.UpdateGE20(this.Hx);},UpdateGE20:function(AK){if(!this.BeginUpdate(
))return AR;var EF=this.UpdateCanvas(AK,AH);this.EndUpdate();return EF;},EndUpdate:
function(){if(this.Bq>0){this.JN=this.JN+1;this.Bq=0;}},UpdateCanvas:function(AK
,aOffset){var A;var EF=AR;var Pk=[].concat(aOffset,B.abf(AK.FrameSize,aOffset));
var K;var A7=this.Bq;this.I2=this.I2+1;AK.G1=this;for(K=0;(K<A7)&&(K<4);K=K+1)if(
this.Cb.Get(K)>0){this.Cj(AK,B.abg(this.Br.Get(K),aOffset),[-aOffset[0],-aOffset[
1]],255,true);EF=B.wC(EF,B.lb(Pk,this.Br.Get(K)));}else A7=A7+1;AK.G1=null;this.
I2=this.I2-1;if(!((EF[0]>=EF[2])||(EF[1]>=EF[3])))return B.abg(EF,aOffset);else return EF;
},GetUpdateRegion:function(Jz){var K;var A7=this.Bq;if(Jz<0)return AR;for(K=0;(K<
A7)&&(K<4);K=K+1)if(!this.Cb.Get(K)){A7=A7+1;Jz=Jz+1;}else if(K===Jz)return this.
Br.Get(K);return AR;},BeginUpdate:function(){var A;var K;if(!!this.Bq&&!B.aaY(this.
Br.Get(0),[0,0,(A=this.N)[2]-A[0],A[3]-A[1]])){var Nc=B.abi(3,B.wg,null);var Nb=
this.Bq;for(K=0;K<Nb;K++)Nc.Set(K,this.Br.Get(K));for(K=0;K<Nb;K++){var M0=B.abh(
Nc.Get(K),this.N.slice(0,2));var M1=this.I3(M0);if(!B.aaY(M0,M1))this.Ac(B.abg(M1
,this.N.slice(0,2)));}}var A7;var CP;for(A7=0;A7<(this.Bq-1);A7++)if(this.Cb.Get(
A7)>0)for(CP=A7+1;CP<this.Bq;CP++)if(this.Cb.Get(CP)>0){var J7=B.aaH(B.wC(this.Br.
Get(A7),this.Br.Get(CP)));if(((J7-this.Cb.Get(A7))-this.Cb.Get(CP))<0){this.Br.Set(
A7,B.wC(this.Br.Get(A7),this.Br.Get(CP)));this.Cb.Set(A7,J7);this.Cb.Set(CP,0);}
}for(K=this.Bq-1;K>=0;K--)if(!this.Cb.Get(K))this.Bq=this.Bq-1;return this.Bq;},
DoesNeedUpdate:function(){if(this.Bq>0)return true;return false;},Initialize:function(
aSize){this.P([].concat(AH,aSize));if(this.LE)this.F=this.F|0x60;else this.F=this.
F|0x20;this.Ac(this.N);return this;},SetRootFocus:function(Ln){if(Ln===this.LE)return false;
this.LE=Ln;if(!Ln)this.AD(0x0,0x40);else this.AD(0x40,0x0);return true;},SetUserInputTimestamp:
function(Ph){this.A9=Ph;},DriveKeyboardHitting:function(Bt,Ip,DI){var A;var LV=!
!this.CQ;if(!!this.CQ&&((!DI||(this.II!==Bt))||(this.HB!==Ip))){var BS=null;var H=(
D.B2.isPrototypeOf(A=this.CQ)?A:null);var DL=(D.Fl.isPrototypeOf(A=this.CQ)?A:null
);if(!!this.II)BS=B._NewObject(D.KeyEvent,0).Initialize(this.II,false);if(this.HB
!==0x00)BS=B._NewObject(D.KeyEvent,0).Initialize2(this.HB,false);if(!!DL)DL.Bo(BS
);else if(!!H)H.Bo(BS);this.II=0;this.HB=0x00;this.CQ=null;}if(!!this.CQ){var BS=
null;var H=(D.B2.isPrototypeOf(A=this.CQ)?A:null);var DL=(D.Fl.isPrototypeOf(A=this.
CQ)?A:null);if(!!Bt)BS=B._NewObject(D.KeyEvent,0).Initialize(Bt,true);if(this.HB
!==0x00)BS=B._NewObject(D.KeyEvent,0).Initialize2(Ip,true);if(!!DL)DL.Bo(BS);else
if(!!H)H.Bo(BS);}if(!this.CQ&&DI){if(!!Bt)this.CQ=this.DispatchEvent(B._NewObject(
D.KeyEvent,0).Initialize(Bt,true));if(Ip!==0x00)this.CQ=this.DispatchEvent(B._NewObject(
D.KeyEvent,0).Initialize2(Ip,true));if(!(D.Fl.isPrototypeOf(A=this.CQ)?A:null)&&
!(D.B2.isPrototypeOf(A=this.CQ)?A:null))this.CQ=null;this.II=Bt;this.HB=Ip;LV=LV||
!!this.CQ;}this.A9=0;return LV;},DriveCursorMovement:function(BH){return this.DriveMultiTouchMovement(
this.AF,BH);},DriveMultiTouchMovement:function(S,BH){if((S<0)||(S>9)){this.A9=0;
return false;}var Bv=B.abe(BH,this.CN.Get(S));this.CN.Set(S,BH);if(!this.A0.Get(
S)||B.aaX(Bv,AH)){this.A9=0;return false;}var AX=BH;var Aq=this.A0.Get(S).G;while(
!!Aq&&(Aq!==this)){AX=B.abe(AX,Aq.N.slice(0,2));Aq=Aq.G;}if(!Aq&&(this.A0.Get(S)
!==this)){var tmp=this.A0.Get(S);this.AF=S;this.A0.Set(S,null);tmp.Bo(this.GX().
InitializeUp(S,this.E9.Get(S),this.EA.Get(S),this.Ds.Get(S),this.BR.Get(S)+1,this.
Dr.Get(S),false,this.CN.Get(S),this.D_.Get(S)));this.BroadcastEvent(this.Hy().InitializeUp(
S,this.BR.Get(S)+1,false,tmp,BH),0x18);}else{this.E9.Set(S,AX);this.AF=S;this.A0.
Get(S).Bo(this.Pr().Initialize(S,AX,this.EA.Get(S),Bv,this.Ds.Get(S),this.BR.Get(
S)+1,this.Dr.Get(S),BH,this.D_.Get(S)));}this.A9=0;return true;},DriveCursorHitting:
function(DI,S,BH){return this.DriveMultiTouchHitting(DI,S,BH);},DriveMultiTouchHitting:
function(DI,S,BH){if((S<0)||(S>9)){this.A9=0;return false;}var ticksCount=this.A9;
if(!ticksCount)ticksCount=((new Date).getTime()-B.v$)|0;var PQ=this.A9;this.DriveMultiTouchMovement(
S,BH);BH=this.CN.Get(S);this.A9=PQ;if(DI)this.D_.Set(S,BH);if(DI&&!this.A0.Get(S
)){var BD;var AX=BH;if(B.wa(this.JJ.Get(S),BH)&&((ticksCount-this.Hz.Get(S))<=250
))this.BR.Set(S,this.BR.Get(S)+1);else this.BR.Set(S,0);this.JJ.Set(S,B.abh(GM,BH
));this.Hz.Set(S,ticksCount);BD=this.EI(B.abh(GM,BH),S,this.BR.Get(S)+1,null,null
,0x0);if(!!BD){this.BroadcastEvent(this.Hy().InitializeDown(S,this.BR.Get(S)+1,false
,BD.B2,BH),0x18);this.A0.Set(S,BD.B2);this.Dr.Set(S,BD.Dj);}else{this.A0.Set(S,null
);this.Dr.Set(S,AH);this.A9=0;return false;}var Aq=BD.B2.G;while(!!Aq&&(Aq!==this
)){AX=B.abe(AX,Aq.N.slice(0,2));Aq=Aq.G;}this.EA.Set(S,AX);this.E9.Set(S,AX);this.
Ds.Set(S,0);this.E_.Y(true);this.AF=S;this.A0.Get(S).Bo(this.GX().InitializeDown(
S,AX,this.BR.Get(S)+1,this.Dr.Get(S),false,BH));this.A9=0;return true;}if(!DI&&!
!this.A0.Get(S)){var AX=BH;var Aq=this.A0.Get(S).G;while(!!Aq&&(Aq!==this)){AX=B.
abe(AX,Aq.N.slice(0,2));Aq=Aq.G;}if(!Aq)AX=this.E9.Get(S);this.AF=S;var tmp=this.
A0.Get(S);this.A0.Set(S,null);tmp.Bo(this.GX().InitializeUp(S,AX,this.EA.Get(S),
this.Ds.Get(S),this.BR.Get(S)+1,this.Dr.Get(S),false,BH,this.D_.Get(S)));this.BroadcastEvent(
this.Hy().InitializeUp(S,this.BR.Get(S)+1,false,tmp,BH),0x18);this.A9=0;return true;
}this.A9=0;return false;},Mh:function(Ey,Mr,Ez,GU){if(Ey===this)Ey=null;if(!this.
A0.Get(this.AF))return;var BD;BD=this.EI(B.abh(GM,this.CN.Get(this.AF)),this.AF,
1,Ey,Ez,GU);if(!!BD&&(this.A0.Get(this.AF)!==BD.B2))this.L1(BD.B2,BD.Dj);if(!BD&&(
this.A0.Get(this.AF)!==Mr))this.L1(Mr,AH);},L1:function(Ey,Dm){if(!this.A0.Get(this.
AF)||(this.A0.Get(this.AF)===Ey))return;var tmp=this.A0.Get(this.AF);this.A0.Set(
this.AF,null);tmp.Bo(this.GX().InitializeUp(this.AF,this.E9.Get(this.AF),this.EA.
Get(this.AF),this.Ds.Get(this.AF),this.BR.Get(this.AF)+1,this.Dr.Get(this.AF),true
,this.CN.Get(this.AF),this.D_.Get(this.AF)));this.BroadcastEvent(this.Hy().InitializeUp(
this.AF,this.BR.Get(this.AF)+1,true,tmp,this.CN.Get(this.AF)),0x18);var AX=this.
CN.Get(this.AF);var Aq=null;if(!!Ey)Aq=Ey.G;while(!!Aq&&(Aq!==this)){AX=B.abe(AX
,Aq.N.slice(0,2));Aq=Aq.G;}if(!Aq&&(Ey!==this)){this.A0.Set(this.AF,null);return;
}this.BroadcastEvent(this.Hy().InitializeDown(this.AF,this.BR.Get(this.AF)+1,true
,Ey,this.CN.Get(this.AF)),0x18);var ticksCount=0;ticksCount=((new Date).getTime(
)-B.v$)|0;this.A0.Set(this.AF,Ey);this.Dr.Set(this.AF,Dm);this.EA.Set(this.AF,AX
);this.E9.Set(this.AF,AX);this.BR.Set(this.AF,0);this.Ds.Set(this.AF,0);this.Hz.
Set(this.AF,ticksCount);this.D_.Set(this.AF,this.CN.Get(this.AF));this.A0.Get(this.
AF).Bo(this.GX().InitializeDown(this.AF,AX,this.BR.Get(this.AF)+1,this.Dr.Get(this.
AF),true,this.D_.Get(this.AF)));},NA:function(){return null;},_Init:function(aArg
){D.Q._Init.call(this,aArg);D.Timer._Init.call(this.E_={L:this},0);(this.A0=[]).
__proto__=D.Root.A0;(this.BR=[]).__proto__=D.Root.BR;(this.JJ=[]).__proto__=D.Root.
JJ;(this.Ds=[]).__proto__=D.Root.Ds;(this.EA=[]).__proto__=D.Root.EA;(this.Hz=[]
).__proto__=D.Root.Hz;(this.E9=[]).__proto__=D.Root.E9;(this.Dr=[]).__proto__=D.
Root.Dr;(this.CN=[]).__proto__=D.Root.CN;(this.D_=[]).__proto__=D.Root.D_;(this.
Cb=[]).__proto__=D.Root.Cb;(this.Br=[]).__proto__=D.Root.Br;this.__proto__=D.Root;
this.F=0x10007F;this.E_.Fq(10);this.E_.Ft=[this,this.Ps];this.Cl(aArg);},_Done:function(
){this.__proto__=D.Q;this.E_._Done();D.Q._Done.call(this);},_ReInit:function(){D.
Q._ReInit.call(this);this.E_._ReInit();},_Mark:function(E){var A;D.Q._Mark.call(
this,E);if((A=this.CQ)&&(A._cycle!=E))A._Mark(A._cycle=E);B.aa6(this.A0,E);if((A=
this.Hx)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.E_)._cycle!=E)A._Mark(A._cycle=
E);},_className:"Core::Root"};D.Event={Ax:0,HS:false,Cl:function(aArg){this.Ax=this.
Ja();},Ja:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.v$)|0;return ticksCount;
},_Init:function(aArg){this.__proto__=D.Event;this.Cl(aArg);B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:null,_className:
"Core::Event"};D.KeyEvent={Bn:0,AM:0,Down:false,Initialize2:function(Bt,DI){this.
Bn=0;this.AM=Bt;this.Down=DI;if((Bt>=0x30)&&(Bt<=0x39))this.Bn=(10+Bt)-48;if((Bt>=
0x41)&&(Bt<=0x5A))this.Bn=(105+Bt)-65;if((Bt>=0x61)&&(Bt<=0x7A))this.Bn=(105+Bt)-
97;if(Bt===0x20)this.Bn=131;if(!this.Bn)switch(Bt){case 0x2B:this.Bn=132;break;case
0x2D:this.Bn=133;break;case 0x2A:this.Bn=134;break;case 0x2F:this.Bn=135;break;case
0x3D:this.Bn=136;break;case 0x2E:this.Bn=137;break;case 0x2C:this.Bn=138;break;case
0x3A:this.Bn=139;break;case 0x3B:this.Bn=140;break;default:;}return this;},Initialize:
function(Bt,DI){this.Bn=Bt;this.Down=DI;this.AM=0x00;var Lv=Bt-10;var Lu=Bt-105;
if((Lv>=0)&&(Lv<=9))this.AM=(48+Lv)&0xFFFF;if((Lu>=0)&&(Lu<=25))this.AM=(65+Lu)&
0xFFFF;if(Bt===131)this.AM=0x20;if(this.AM===0x00)switch(Bt){case 132:this.AM=0x2B;
break;case 133:this.AM=0x2D;break;case 134:this.AM=0x2A;break;case 135:this.AM=0x2F;
break;case 136:this.AM=0x3D;break;case 137:this.AM=0x2E;break;case 138:this.AM=0x2C;
break;case 139:this.AM=0x3A;break;case 140:this.AM=0x3B;break;default:;}return this;
},NE:function(Mp){switch(Mp){case 141:return((this.AM>=0x41)&&(this.AM<=0x5A))||((
this.AM>=0x61)&&(this.AM<=0x7A));case 142:return(((this.AM>=0x41)&&(this.AM<=0x5A
))||((this.AM>=0x61)&&(this.AM<=0x7A)))||((this.AM>=0x30)&&(this.AM<=0x39));case
143:return(this.AM>=0x30)&&(this.AM<=0x39);case 144:return(((this.AM>=0x41)&&(this.
AM<=0x46))||((this.AM>=0x61)&&(this.AM<=0x66)))||((this.AM>=0x30)&&(this.AM<=0x39
));case 145:return this.AM!==0x00;case 146:return(this.AM===0x00)&&!!this.Bn;case
147:return(((this.Bn===6)||(this.Bn===7))||(this.Bn===4))||(this.Bn===5);case 148:
return(this.AM!==0x00)||!!this.Bn;default:;}return Mp===this.Bn;},_Init:function(
aArg){D.Event._Init.call(this,aArg);this.__proto__=D.KeyEvent;},_className:"Core::KeyEvent"
};D.Ki={K1:null,CC:B.wf,B_:0,Bs:0,Down:false,Cc:false,InitializeUp:function(S,Cp
,GN,Lq,DJ){this.Down=false;this.Bs=S;this.B_=Cp;this.CC=DJ;this.K1=Lq;this.Cc=GN;
return this;},InitializeDown:function(S,Cp,GN,Lq,DJ){this.Down=true;this.Bs=S;this.
B_=Cp;this.CC=DJ;this.K1=Lq;this.Cc=GN;return this;},_Init:function(aArg){D.Event.
_Init.call(this,aArg);this.__proto__=D.Ki;},_Mark:function(E){var A;D.Event._Mark.
call(this,E);if((A=this.K1)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Core::CursorGrabEvent"
};D.EH={HQ:B.wf,CC:B.wf,B_:0,BF:0,CD:B.wf,BB:B.wf,Bs:0,Down:false,Cc:false,InitializeHold:
function(S,Fz,Ir,Is,Cp,Dm,DJ,Iq){this.Down=true;this.Bs=S;this.BB=B.abf(Fz,Dm);this.
CD=B.abf(Ir,Dm);this.BF=Is;this.B_=Cp;this.CC=DJ;this.HQ=Iq;return this;},InitializeUp:
function(S,Fz,Ir,Is,Cp,Dm,GN,DJ,Iq){this.Down=false;this.Bs=S;this.BB=B.abf(Fz,Dm
);this.CD=B.abf(Ir,Dm);this.BF=Is;this.B_=Cp;this.Cc=GN;this.CC=DJ;this.HQ=Iq;return this;
},InitializeDown:function(S,Fz,Cp,Dm,GN,DJ){this.Down=true;this.Bs=S;this.BB=B.abf(
Fz,Dm);this.CD=B.abf(Fz,Dm);this.BF=0;this.B_=Cp;this.Cc=GN;this.CC=DJ;this.HQ=DJ;
return this;},_Init:function(aArg){D.Event._Init.call(this,aArg);this.__proto__=
D.EH;},_className:"Core::CursorEvent"};D.HM={HQ:B.wf,CC:B.wf,B_:0,BF:0,Dj:B.wf,CD:
B.wf,BB:B.wf,Bs:0,Initialize:function(S,Fz,Ir,aOffset,Is,Pe,Dm,DJ,Iq){this.Bs=S;
this.BB=B.abf(Fz,Dm);this.CD=B.abf(Ir,Dm);this.Dj=aOffset;this.BF=Is;this.B_=Pe;
this.CC=DJ;this.HQ=Iq;return this;},_Init:function(aArg){D.Event._Init.call(this
,aArg);this.__proto__=D.HM;},_className:"Core::DragEvent"};D.H9={Cj:function(AK,
aClip,aOffset,Az,aBlend){},GetClipping:function(){var A;var I=D.AN.GetClipping.call(
this);if(((this.F&0x80000)===0x80000)){var G9=AR;var H;for(H=this.AG;!!H&&!((H.F&
0x200)===0x200);H=H.AG)if(((H.F&0x1)===0x1))G9=B.wC(G9,H.GetClipping());I=B.wC(I
,G9);}return I;},AD:function(CL,C6){var A;var JV=this.F;if((!!this.G&&((this.F&0x80001
)===0x80001))&&((C6&0x80000)===0x80000))this.G.Ac(this.GetClipping());D.AN.AD.call(
this,CL,C6);if(((!!this.G&&((this.F&0x1)===0x1))&&((CL&0x80000)===0x80000))&&!((
JV&0x80000)===0x80000))this.G.Ac(this.GetClipping());},P:function(C){var A;if(B.
aaY(C,this.N))return;var FG=[(A=this.N)[2]-A[0],A[3]-A[1]];var LM=[C[2]-C[0],C[3
]-C[1]];var HF=!B.aaX(FG,LM);var Bv=B.abe(C.slice(0,2),this.N.slice(0,2));if(!B.
aaX(Bv,AH)&&!HF){var H=this.AG;while(!!H&&!((H.F&0x200)===0x200)){if(((H.F&0x400
)===0x400)){var tmp=((H.F&0x100)===0x100);H.KG(Bv,tmp);}H=H.AG;}}if((HF&&(FG[0]>
0))&&(FG[1]>0)){var AT=this.N;var H=this.AG;while(!!H&&!((H.F&0x200)===0x200)){if(((
H.F&0x400)===0x400)){if(!!H.AW&&(H.AW.G7!==this))H.AW=null;if(!H.AW&&(H.BW!==0x14
))H.IF(AT,this);}H=H.AG;}}D.AN.P.call(this,C);if(!!this.G&&HF){this.F=this.F|0x1000;
if(!((this.G.F&0x2000)===0x2000)){this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CS],
this);}}},_Init:function(aArg){D.AN._Init.call(this,aArg);this.__proto__=D.H9;this.
F=0x203;},_className:"Core::Outline"};D.BG={KI:null,Jh:null,Jg:null,DC:null,Ce:null
,Ar:0,Bs:0,Ax:0,B_:0,BF:0,Dj:B.wf,CD:B.wf,BB:B.wf,Oj:8,L8:1,Down:false,Dh:false,
Cc:false,LA:false,IK:0,Cj:function(AK,aClip,aOffset,Az,aBlend){},Bo:function(AE){
var A;var Ai=(D.EH.isPrototypeOf(AE)?AE:null);var BI=(D.HM.isPrototypeOf(AE)?AE:
null);var JP=this.Dh;var Db;var CZ;var I0;var BJ;var GZ;if(!Ai&&!BI)return null;
Db=(!!Ai&&Ai.Down)&&!Ai.BF;CZ=(!!Ai&&Ai.Down)&&(Ai.BF>0);I0=(!!Ai&&Ai.Down)&&(Ai.
BF>this.IK);BJ=!!Ai&&!Ai.Down;GZ=!!BI;if(Db)this.IK=((A=(Ai.Cc?0:50))&0x80)?A|0xFFFFFF00:
A&0xFF;if(Db){var G3=0;var D$;this.Ar=this.Ar|(1<<Ai.Bs);for(D$=this.Ar&4095;D$>
0;D$=D$>>1)if(!!(D$&1))G3=G3+1;if(G3===1)this.Ar=(this.Ar|16777216)|(4096<<Ai.Bs
);}if(BJ&&(this.Ar<16777216)){var Dc=this.HO();var BD=null;if(!!Dc){var LY=(!!this.
At?this.At:this.G);BD=Dc.EI(B.abh(Hv,Ai.CC),Ai.Bs,Ai.B_,null,LY,0x0);}if(!!BD){var
K;for(K=0;K<10;K++)if(!!(this.Ar&(1<<K)))BD.B2.Bo(B._NewObject(D.EH,0).InitializeDown(
K,Ai.BB,Ai.B_,AH,true,Ai.CC));for(K=0;K<10;K++)if(!!(this.Ar&(1<<K)))BD.B2.Bo(B.
_NewObject(D.EH,0).InitializeUp(K,Ai.BB,Ai.BB,0,Ai.B_,AH,false,Ai.CC,Ai.CC));}}if(
BJ)this.Ar=(this.Ar&~(1<<Ai.Bs))|33554432;if(I0&&(this.Ar<16777216))this.Ar=this.
Ar|67108864;if(BJ&&Ai.Cc)this.Ar=this.Ar|67108864;if(BJ&&!(this.Ar&16777215))this.
Ar=0;if(CZ&&(this.Ar>=67108864)){var Dc=this.HO();if(!!Dc)Dc.Mh(null,null,this,0x0
);}if((CZ&&!!(this.Ar&16777216))&&!!(this.Ar&33554432)){CZ=false;BJ=true;}if(!!Ai&&
!(this.Ar&(4096<<Ai.Bs)))return this;if(!!BI&&!(this.Ar&(4096<<BI.Bs)))return this;
if(BJ&&!(this.Ar&16777216))return this;if(((Db||GZ)||CZ)&&((this.Ar<16777216)||(
this.Ar>=33554432)))return this;if(BJ)this.Ar=this.Ar&3758100479;if(BJ&&!(this.Ar&
16777215))this.Ar=0;if(!!Ai){this.Down=Db||CZ;this.Dh=this.Kw(Ai.BB);this.CD=Ai.
CD;this.BB=Ai.BB;this.Dj=AH;this.BF=Ai.BF;this.B_=Ai.B_;this.Cc=Ai.Cc;this.Bs=Ai.
Bs;this.Ax=Ai.Ax;if(Ai.Down&&!Ai.BF)JP=false;}if(!!BI){this.Down=true;this.Dh=this.
Kw(BI.BB);this.CD=BI.CD;this.BB=BI.BB;this.Dj=BI.Dj;this.BF=BI.BF;this.B_=BI.B_;
this.Bs=BI.Bs;this.Cc=false;this.Ax=BI.Ax;}var Lz=this.Down;if(!!BI)(A=this.KI)?
A[1].call(A[0],this):null;if((!!Ai&&this.Down)&&!this.BF)(A=this.Ce)?A[1].call(A[
0],this):null;if((this.Down&&this.Dh)&&!JP){this.LA=true;(A=this.Jg)?A[1].call(A[
0],this):null;}if(this.LA&&(((Lz&&!this.Dh)&&JP)||((!Lz&&this.Dh)&&JP))){this.LA=
false;(A=this.Jh)?A[1].call(A[0],this):null;}if(!!Ai&&!Lz)(A=this.DC)?A[1].call(
A[0],this):null;return this;},EI:function(Av,S,Cp,Ex,Ez,GU){var A;if(!!Ex&&(Ex!==
this))return null;if((Cp<1)||(Cp>this.L8))return null;if(this.Ar>=33554432)return null;
if((this.Ar>=16777216)&&!(this.Ar&(4096<<S)))return null;if(this.NC()){var I=B.lb(
Av,this.GetExtent());if(!((I[0]>=I[2])||(I[1]>=I[3]))){var Cr=B.aaI(Av);var Bv=AH;
if(Cr[0]<I[0])Bv=[I[0]-Cr[0],Bv[1]];if(Cr[0]>=I[2])Bv=[(I[2]-Cr[0])-1,Bv[1]];if(
Cr[1]<I[1])Bv=[Bv[0],I[1]-Cr[1]];if(Cr[1]>=I[3])Bv=[Bv[0],(I[3]-Cr[1])-1];return B.
_NewObject(D.I6,0).Initialize(this,Bv);}}else{var A1=B.abi(9,B.wf,null);var K;A1.
Set(0,B.aaI(Av));A1.Set(1,A1.Get(0));A1.Set(2,A1.Get(0));A1.Set(3,A1.Get(0));A1.
Set(4,A1.Get(0));A1.Set(1,[Av[0],A1.Get(1)[1]]);A1.Set(2,[A1.Get(2)[0],Av[1]]);A1.
Set(3,[Av[2],A1.Get(3)[1]]);A1.Set(4,[A1.Get(4)[0],Av[3]]);A1.Set(5,Av.slice(0,2
));A1.Set(6,[Av[2],Av[1]]);A1.Set(7,[Av[0],Av[3]]);A1.Set(8,Av.slice(2,4));for(K=
0;K<9;K=K+1)if(this.Kw(A1.Get(K)))return B._NewObject(D.I6,0).Initialize(this,B.
abe(A1.Get(K),A1.Get(0)));}return null;},KT:function(C){if(C<1)C=1;this.Oj=C;},H8:
function(C){if(C<1)C=1;this.L8=C;},Y:function(C){if(C)this.AD(0x100000,0x0);else
this.AD(0x0,0x100000);},_Init:function(aArg){D.D4._Init.call(this,aArg);this.__proto__=
D.BG;this.F=0x10011B;},_Mark:function(E){var A;D.D4._Mark.call(this,E);if((A=this.
KI)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Jh)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.Jg)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);
if((A=this.DC)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ce)&&((A=A[0
])._cycle!=E))A._Mark(A._cycle=E);},_className:"Core::SimpleTouchHandler"};D.CV={
KO:null,KJ:null,KW:null,Ar:0,Mf:0,CD:B.wf,L2:0,Jo:0,Angle:0,Down:false,Dh:false,
Cc:false,IK:0,Cj:function(AK,aClip,aOffset,Az,aBlend){},Bo:function(AE){var A;var
Ai=(D.EH.isPrototypeOf(AE)?AE:null);var BI=(D.HM.isPrototypeOf(AE)?AE:null);var Db;
var CZ;var I0;var BJ;var GZ;if(!Ai&&!BI)return null;Db=(!!Ai&&Ai.Down)&&!Ai.BF;CZ=(
!!Ai&&Ai.Down)&&(Ai.BF>0);I0=(!!Ai&&Ai.Down)&&(Ai.BF>this.IK);BJ=!!Ai&&!Ai.Down;
GZ=!!BI;if(Db)this.IK=((A=(Ai.Cc?0:50))&0x80)?A|0xFFFFFF00:A&0xFF;if(Db){var G3=
0;var D$;this.Ar=this.Ar|(1<<Ai.Bs);for(D$=this.Ar&4095;D$>0;D$=D$>>1)if(!!(D$&1
))G3=G3+1;if(G3===1)this.Ar=(this.Ar|16777216)|(4096<<Ai.Bs);}if(BJ&&(this.Ar<16777216
)){var Dc=this.HO();var BD=null;if(!!Dc){var LY=(!!this.At?this.At:this.G);BD=Dc.
EI(B.abh(Hv,Ai.CC),Ai.Bs,Ai.B_,null,LY,0x0);}if(!!BD){var K;for(K=0;K<10;K++)if(
!!(this.Ar&(1<<K)))BD.B2.Bo(B._NewObject(D.EH,0).InitializeDown(K,Ai.BB,Ai.B_,AH
,true,Ai.CC));for(K=0;K<10;K++)if(!!(this.Ar&(1<<K)))BD.B2.Bo(B._NewObject(D.EH,
0).InitializeUp(K,Ai.BB,Ai.BB,0,Ai.B_,AH,false,Ai.CC,Ai.CC));}}if(BJ)this.Ar=(this.
Ar&~(1<<Ai.Bs))|33554432;if(I0&&(this.Ar<16777216))this.Ar=this.Ar|67108864;if(BJ&&
Ai.Cc)this.Ar=this.Ar|67108864;if(BJ&&!(this.Ar&16777215))this.Ar=0;if(CZ&&(this.
Ar>=67108864)){var Dc=this.HO();if(!!Dc)Dc.Mh(null,null,this,0x0);}if((CZ&&!!(this.
Ar&16777216))&&!!(this.Ar&33554432)){CZ=false;BJ=true;}if(!!Ai&&!(this.Ar&(4096<<
Ai.Bs)))return this;if(!!BI&&!(this.Ar&(4096<<BI.Bs)))return this;if(BJ&&!(this.
Ar&16777216))return this;if(((Db||GZ)||CZ)&&((this.Ar<16777216)||(this.Ar>=33554432
)))return this;if(BJ)this.Ar=this.Ar&3758100479;if(BJ&&!(this.Ar&16777215))this.
Ar=0;if(((!Db&&!BJ)&&!GZ)&&!CZ)return this;var AX=AH;var It=this.Angle;var JW=this.
Mf;var PD=JW;var Aj;if((Db||BJ)||CZ){this.Dh=B.wa(this.N,Ai.BB);this.Cc=Ai.Cc;this.
CD=Ai.CD;this.Down=Db||CZ;AX=B.abe(Ai.BB,B.aaI(this.N));}if(GZ){this.Dh=B.wa(this.
N,BI.BB);this.CD=BI.CD;this.Down=true;AX=B.abe(BI.BB,B.aaI(this.N));}var I=Math.
sqrt((AX[0]*AX[0])+(AX[1]*AX[1]));if(I>=8){JW=I|0;It=(Math.acos(AX[0]/I)*B.rE)|0;
if(AX[1]>0)It=360-It;}Aj=It-this.Angle;if(Aj>180)Aj=Aj-360;if(Aj<-180)Aj=Aj+360;
this.Angle=It;this.L2=Aj;this.Jo=this.Jo+Aj;this.Mf=JW;if(Db){this.L2=0;this.Jo=
0;(A=this.KW)?A[1].call(A[0],this):null;}if(!!Aj||(JW!==PD))(A=this.KO)?A[1].call(
A[0],this):null;if(BJ)(A=this.KJ)?A[1].call(A[0],this):null;return this;},EI:function(
Av,S,Cp,Ex,Ez,GU){var A;if(!!Ex&&(Ex!==this))return null;if(this.Ar>=33554432)return null;
if((this.Ar>=16777216)&&!(this.Ar&(4096<<S)))return null;var I=B.lb(Av,this.N);if(
!((I[0]>=I[2])||(I[1]>=I[3]))){var Cr=B.aaI(Av);var Bv=AH;if(Cr[0]<I[0])Bv=[I[0]-
Cr[0],Bv[1]];if(Cr[0]>=I[2])Bv=[(I[2]-Cr[0])-1,Bv[1]];if(Cr[1]<I[1])Bv=[Bv[0],I[
1]-Cr[1]];if(Cr[1]>=I[3])Bv=[Bv[0],(I[3]-Cr[1])-1];return B._NewObject(D.I6,0).Initialize(
this,Bv);}return null;},_Init:function(aArg){D.AN._Init.call(this,aArg);this.__proto__=
D.CV;this.F=0x10011B;},_Mark:function(E){var A;D.AN._Mark.call(this,E);if((A=this.
KO)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.KJ)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.KW)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);
},_className:"Core::RotateTouchHandler"};D.Fl={AG:null,DC:null,Ce:null,G8:0,Ax:0
,Mg:0,BN:148,Bn:0,AM:0,Bw:true,Down:false,KX:false,Cl:function(aArg){var A;var G1=(
D.Q.isPrototypeOf(A=this.L)?A:null);if(!G1)throw new Error(Io);this.AG=G1.JR;G1.
JR=this;},Bo:function(AE){var A;if(!!AE&&AE.NE(this.BN)){this.Down=AE.Down;this.
Bn=AE.Bn;this.AM=AE.AM;this.Ax=AE.Ax;if(AE.Down){this.Mg=this.G8;this.KX=this.G8>
0;if(!this.KX)(A=this.Ce)?A[1].call(A[0],this):null;this.G8=this.G8+1;return true;
}if(!AE.Down){this.KX=this.G8>1;this.Mg=this.G8-1;this.G8=0;(A=this.DC)?A[1].call(
A[0],this):null;return true;}}return false;},_Init:function(aArg){this.__proto__=
D.Fl;this.Cl(aArg);B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:
function(){},_Mark:function(E){var A;if((A=this.AG)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.DC)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ce)&&((A=
A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=
E);},L:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"};D.I6={B2:
null,HL:0,Dj:B.wf,Initialize:function(M,aOffset){this.B2=M;this.Dj=aOffset;this.
HL=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:function(
aArg){this.__proto__=D.I6;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;}
,_ReInit:function(){},_Mark:function(E){var A;if((A=this.B2)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:
null,_className:"Core::CursorHit"};D.Jb={G7:null,Cu:B.wg,AT:B.wg,isEmpty:false,_Init:
function(aArg){this.__proto__=D.Jb;B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.G7)&&(A._cycle!=
E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null
,_cycle:0,_observers:null,_className:"Core::LayoutContext"};D.Jc={IV:B.wf,IU:B.wf
,IT:B.wf,IS:B.wf,_Init:function(aArg){D.Jb._Init.call(this,aArg);this.__proto__=
D.Jc;},_className:"Core::LayoutQuadContext"};D.E2={resource:null,CT:function(){this.
resource=null;},Cl:function(aArg){this.resource=aArg;},_Init:function(aArg){this.
__proto__=D.E2;this.Cl(aArg);B.h7++;},_Done:function(){this.CT();this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.L)&&(A._cycle
!=E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:null,_className:"Core::Resource"
};D.Timer={Ft:null,timer:null,Ax:0,Period:1000,Hb:0,Bw:false,CT:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},JY:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=B.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},Fq:function(C){if(C<0)C=0;if(C===this.Period)return;
this.Period=C;if(this.Bw)this.JY(this.Hb,C);},Fm:function(C){if(C<0)C=0;if(C===this.
Hb)return;this.Hb=C;if(this.Bw)this.JY(C,this.Period);},Y:function(C){if(C===this.
Bw)return;this.Bw=C;if(C)this.JY(this.Hb,this.Period);else this.JY(0,0);this.Ax=
this.Ja();},Ja:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.v$
)|0;return ticksCount;},Trigger:function(){var A;this.Ax=this.Ja();if(!this.Period
)this.Y(false);(A=this.Ft)?A[1].call(A[0],this):null;},_Init:function(aArg){this.
__proto__=D.Timer;B.h7++;},_Done:function(){this.CT();this.__proto__=null;B.h7--;
},_ReInit:function(){},_Mark:function(E){var A;if((A=this.Ft)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null
,_cycle:0,_observers:null,_className:"Core::Timer"};D.Ax={Jp:0,KF:0,Kt:0,HK:0,Jf:
0,Ml:0,Py:function(){var result=0;{var d=new Date;result=Math.trunc(d.getTime()/
1000-(d.getTimezoneOffset()*60));}return result;},N1:function(C){var A;C+=62162035200;
if(C<0)C=0;var HI=Math.trunc(C/86400)|0;var MI=(((HI>=0)?HI:HI-146096)/146097)|0;
var IA=HI-(MI*146097);var J_=((((IA-((IA/1460)|0))+((IA/36524)|0))-((IA/146096)|
0))/365)|0;var BK=J_+(MI*400);var MH=IA-(((365*J_)+((J_/4)|0))-((J_/100)|0));var
LL=(((5*MH)+2)/153)|0;var d=(MH-((((153*LL)+2)/5)|0))+1;var CR=LL+((LL<10)?3:-9);
var AP=Math.trunc(C/3600)%24|0;var K=Math.trunc(C/60)%60|0;var DP=C%60|0;this.Ml=
BK+((CR<=2)?1:0);this.NW(CR);this.Fn(d);this.NS(AP+((AP<0)?24:0));this.NV(K+((K<
0)?60:0));this.NZ(DP+((DP<0)?60:0));},NM:function(){return B._NewObject(D.Ax,0).
Initialize(this.Py());},Gn:function(){var A;var d=this.HK;var CR=this.Jf+((this.
Jf>2)?-2:10);var BK=this.Ml-((this.Jf<=2)?1:0);var Ah=(BK/100)|0;BK%=100;d+=((((((((
26*CR)-2)/10)|0)+BK)+((BK/4)|0))+((Ah/4)|0))-(2*Ah));if(d>=0)return d%7;else return(
7-(-d%7))%7;},NZ:function(C){if(C<0)C=0;if(C>59)C=59;this.Jp=C;},NV:function(C){
if(C<0)C=0;if(C>59)C=59;this.KF=C;},NS:function(C){if(C<0)C=0;if(C>23)C=23;this.
Kt=C;},Fn:function(C){if(C<1)C=1;if(C>31)C=31;this.HK=C;},NW:function(C){if(C<1)
C=1;if(C>12)C=12;this.Jf=C;},Initialize:function(Pg){this.N1(Pg);return this;},_Init:
function(aArg){this.__proto__=D.Ax;B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.L)&&(A._cycle!=
E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:null,_className:"Core::Time"
};D.Me={KK:null,V:null,MX:function(As){var A;(A=this.KK)?A[1].call(A[0],this):null;
},D3:function(C){if(B.aaZ(this.V,C))return;if(!!this.V)B.z$([this,this.MX],this.
V,0);this.V=C;if(!!this.V)B.zX([this,this.MX],this.V,0);},_Init:function(aArg){this.
__proto__=D.Me;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(
){},_Mark:function(E){var A;if((A=this.KK)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=
E);if((A=this.V)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle
!=E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:null,_className:"Core::PropertyObserver"
};D.QU={QV:0x1,P1:0x2,Qb:0x4,QR:0x8,Bw:0x10,E3:0x20,Qc:0x40,Qn:0x80,P$:0x100,Qh:
0x200,P_:0x400,Qx:0x800,Js:0x1000,QT:0x2000,Qu:0x4000,Qv:0x8000,P8:0x10000,Qt:0x20000
,QH:0x40000,P9:0x80000,Qw:0x100000,P7:0x200000};D.BW={Qy:0x1,Qz:0x2,PX:0x4,PY:0x8
,PZ:0x10,PW:0x20};D.Qe={Qo:0,QO:1,P4:2,Qi:3,QB:4,QP:5,QQ:6,P5:7,P6:8,Qk:9,Qj:10,
QD:11,QC:12};D.KeyCode={NoKey:0,Ok:1,Exit:2,Menu:3,Up:4,Down:5,Left:6,Right:7,PageUp:
8,PageDown:9,Key0:10,Key1:11,Key2:12,Key3:13,Key4:14,Key5:15,Key6:16,Key7:17,Key8:
18,Key9:19,Red:20,Green:21,Blue:22,Yellow:23,White:24,Magenta:25,F1:26,F2:27,F3:
28,F4:29,F5:30,F6:31,F7:32,F8:33,F9:34,F10:35,ChannelUp:36,ChannelDown:37,Display:
38,SkipPrev:39,SkipNext:40,Home:41,End:42,Insert:43,Delete:44,Clear:45,VolumeUp:
46,VolumeDown:47,Show:48,Hide:49,Play:50,Pause:51,Record:52,Stop:53,Rev:54,Fwd:55
,SlowRev:56,SlowFwd:57,SkipBwd:58,SkipFwd:59,Repeat:60,Eject:61,Help:62,TV:63,DVD:
64,VCR:65,EPG:66,OSD:67,Text:68,PIP:69,Audio:70,Clock:71,Timer:72,Navigation:73,
Karaoke:74,Game:75,Subtitle:76,Zoom:77,Index:78,Info:79,Power:80,Setup:81,Angle:
82,Mode:83,Mute:84,User0:85,User1:86,User2:87,User3:88,User4:89,User5:90,User6:91
,User7:92,User8:93,User9:94,User10:95,User11:96,User12:97,User13:98,User14:99,User15:
100,User16:101,User17:102,User18:103,User19:104,KeyA:105,KeyB:106,KeyC:107,KeyD:
108,KeyE:109,KeyF:110,KeyG:111,KeyH:112,KeyI:113,KeyJ:114,KeyK:115,KeyL:116,KeyM:
117,KeyN:118,KeyO:119,KeyP:120,KeyQ:121,KeyR:122,KeyS:123,KeyT:124,KeyU:125,KeyV:
126,KeyW:127,KeyX:128,KeyY:129,KeyZ:130,Space:131,Plus:132,Minus:133,Multiply:134
,Divide:135,Equals:136,Period:137,Comma:138,Colon:139,Semicolon:140,AlphaKeys:141
,AlphaOrDigitKeys:142,DigitKeys:143,HexDigitKeys:144,CharacterKeys:145,ControlKeys:
146,CursorKeys:147,AnyKey:148,Enter:149,Escape:150,Backspace:151,Tab:152,CtrlKeyA:
153,CtrlKeyB:154,CtrlKeyC:155,CtrlKeyD:156,CtrlKeyE:157,CtrlKeyF:158,CtrlKeyG:159
,CtrlKeyH:160,CtrlKeyI:161,CtrlKeyJ:162,CtrlKeyK:163,CtrlKeyL:164,CtrlKeyM:165,CtrlKeyN:
166,CtrlKeyO:167,CtrlKeyP:168,CtrlKeyQ:169,CtrlKeyR:170,CtrlKeyS:171,CtrlKeyT:172
,CtrlKeyU:173,CtrlKeyV:174,CtrlKeyW:175,CtrlKeyX:176,CtrlKeyY:177,CtrlKeyZ:178,CtrlSpace:
179,CtrlKey0:180,CtrlKey1:181,CtrlKey2:182,CtrlKey3:183,CtrlKey4:184,CtrlKey5:185
,CtrlKey6:186,CtrlKey7:187,CtrlKey8:188,CtrlKey9:189,CtrlF1:190,CtrlF2:191,CtrlF3:
192,CtrlF4:193,CtrlF5:194,CtrlF6:195,CtrlF7:196,CtrlF8:197,CtrlF9:198,CtrlF10:199
,CtrlEnter:200,CtrlEscape:201,CtrlUp:202,CtrlDown:203,CtrlLeft:204,CtrlRight:205
,CtrlPageUp:206,CtrlPageDown:207,CtrlBackspace:208,CtrlInsert:209,CtrlDelete:210
,CtrlHome:211,CtrlEnd:212,CtrlTab:213,CtrlShiftKeyA:214,CtrlShiftKeyB:215,CtrlShiftKeyC:
216,CtrlShiftKeyD:217,CtrlShiftKeyE:218,CtrlShiftKeyF:219,CtrlShiftKeyG:220,CtrlShiftKeyH:
221,CtrlShiftKeyI:222,CtrlShiftKeyJ:223,CtrlShiftKeyK:224,CtrlShiftKeyL:225,CtrlShiftKeyM:
226,CtrlShiftKeyN:227,CtrlShiftKeyO:228,CtrlShiftKeyP:229,CtrlShiftKeyQ:230,CtrlShiftKeyR:
231,CtrlShiftKeyS:232,CtrlShiftKeyT:233,CtrlShiftKeyU:234,CtrlShiftKeyV:235,CtrlShiftKeyW:
236,CtrlShiftKeyX:237,CtrlShiftKeyY:238,CtrlShiftKeyZ:239,CtrlShiftSpace:240,CtrlShiftKey0:
241,CtrlShiftKey1:242,CtrlShiftKey2:243,CtrlShiftKey3:244,CtrlShiftKey4:245,CtrlShiftKey5:
246,CtrlShiftKey6:247,CtrlShiftKey7:248,CtrlShiftKey8:249,CtrlShiftKey9:250,CtrlShiftF1:
251,CtrlShiftF2:252,CtrlShiftF3:253,CtrlShiftF4:254,CtrlShiftF5:255,CtrlShiftF6:
256,CtrlShiftF7:257,CtrlShiftF8:258,CtrlShiftF9:259,CtrlShiftF10:260,CtrlShiftEnter:
261,CtrlShiftEscape:262,CtrlShiftUp:263,CtrlShiftDown:264,CtrlShiftLeft:265,CtrlShiftRight:
266,CtrlShiftPageUp:267,CtrlShiftPageDown:268,CtrlShiftBackspace:269,CtrlShiftInsert:
270,CtrlShiftDelete:271,CtrlShiftHome:272,CtrlShiftEnd:273,CtrlShiftTab:274,AltF1:
275,AltF2:276,AltF3:277,AltF4:278,AltF5:279,AltF6:280,AltF7:281,AltF8:282,AltF9:
283,AltF10:284,AltEnter:285,AltEscape:286,AltUp:287,AltDown:288,AltLeft:289,AltRight:
290,AltPageUp:291,AltPageDown:292,AltBackspace:293,AltInsert:294,AltDelete:295,AltHome:
296,AltEnd:297,AltTab:298,AltShiftF1:299,AltShiftF2:300,AltShiftF3:301,AltShiftF4:
302,AltShiftF5:303,AltShiftF6:304,AltShiftF7:305,AltShiftF8:306,AltShiftF9:307,AltShiftF10:
308,AltShiftEnter:309,AltShiftEscape:310,AltShiftUp:311,AltShiftDown:312,AltShiftLeft:
313,AltShiftRight:314,AltShiftPageUp:315,AltShiftPageDown:316,AltShiftBackspace:
317,AltShiftInsert:318,AltShiftDelete:319,AltShiftHome:320,AltShiftEnd:321,AltShiftTab:
322,ShiftF1:323,ShiftF2:324,ShiftF3:325,ShiftF4:326,ShiftF5:327,ShiftF6:328,ShiftF7:
329,ShiftF8:330,ShiftF9:331,ShiftF10:332,ShiftEnter:333,ShiftEscape:334,ShiftUp:
335,ShiftDown:336,ShiftLeft:337,ShiftRight:338,ShiftPageUp:339,ShiftPageDown:340
,ShiftBackspace:341,ShiftInsert:342,ShiftDelete:343,ShiftHome:344,ShiftEnd:345,ShiftTab:
346};D.QA={QZ:0x1,QW:0x2,QX:0x4,QY:0x8,Ql:0x10,Qd:0x20};
D._Init=function(){D.D4.__proto__=D.B2;D.AN.__proto__=D.B2;D.Q.__proto__=D.AN;D.Root.
__proto__=D.Q;D.KeyEvent.__proto__=D.Event;D.Ki.__proto__=D.Event;D.EH.__proto__=
D.Event;D.HM.__proto__=D.Event;D.H9.__proto__=D.AN;D.BG.__proto__=D.D4;D.CV.__proto__=
D.AN;D.Jc.__proto__=D.Jb;};D._ReInit=function(){};D.B$=function(E){};return D;})(
);

/* Embedded Wizard */