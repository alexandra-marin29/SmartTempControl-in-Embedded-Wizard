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
Ev=[800,480];var D7="No view to restack";var Dk="View is not in this group";var DG=
"No view to remove";var D8="No view to add";var Fy="View already in a group";var
Im="Recursive invalidate during active update cycle.";var GL=[-8,-8,9,9];var Hs=[
0,0,1,1];var In="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";
D.B2={AG:null,At:null,G:null,AW:null,F:0x103,DD:0,BW:0x14,IE:function(An,Jx){},Fr:
function(C){if(this.DD===C)return;this.DD=C;if(!!this.G){var Fd=this.AG;var Aj=0;
while(!!Fd&&(C>Fd.DD)){Fd=Fd.AG;Aj=Aj+1;}Fd=this.At;while(!!Fd&&(C<Fd.DD)){Fd=Fd.
At;Aj=Aj-1;}if(!!Aj)this.G.Oh(this,Aj);}},Jk:function(C){var A;var Aj=C^this.BW;
if(!Aj)return;this.BW=C;if(!!this.AW&&!((this.F&0x400)===0x400)){this.G.F=this.G.
F|0x5000;B.pe([A=this.G,A.CQ],this);this.G.Ac([0,0,(A=this.G.N)[2]-A[0],A[3]-A[1
]]);}if(!!this.AW&&((this.F&0x400)===0x400)){this.AW.G6.F=this.AW.G6.F|0x1000;this.
G.F=this.G.F|0x4000;B.pe([A=this.G,A.CQ],this);}},HL:function(){var Aq=this.G;while(
!!Aq){var Db=(D.Root.isPrototypeOf(Aq)?Aq:null);if(!!Db)return Db;Aq=Aq.G;}return null;
},Cj:function(AK,aClip,aOffset,Az,aBlend){},GetClipping:function(){return this.GetExtent(
);},Bo:function(AE){return null;},EI:function(Av,S,Co,Ex,Ez,GT){return null;},I2:
function(Av){return Av;},I3:function(An,C6){return AH;},KF:function(aOffset,Jw){
},GetExtent:function(){return AR;},AD:function(CJ,C5){var A;if(((this.F&0x200)===
0x200))CJ=CJ&~0x400;var LJ=(this.F&~C5)|CJ;var DJ=LJ^this.F;this.F=LJ;if(!!this.
G&&!!(DJ&0x14)){var MH=((this.F&0x14)===0x14);if(MH&&!this.G.De)this.G.Hk(this);
if(!MH&&(this.G.De===this))this.G.Hk(this.G.L0(this,0x14));}if(!!this.G&&!!(DJ&0x403
))this.G.Ac(this.GetClipping());if(((!!this.AW&&!!this.G)&&((LJ&0x400)===0x400))&&((
DJ&0x1)===0x1)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CQ
],this);}if(!!this.G&&((DJ&0x400)===0x400)){this.AW=null;this.F=this.F|0x800;this.
G.F=this.G.F|0x4000;B.pe([A=this.G,A.CQ],this);}if(((((DJ&0x100000)===0x100000)&&((
C5&0x100000)===0x100000))&&((this.F&0x10)===0x10))&&!((this.F&0x200080)===0x200080
))this.AD(0x0,0x10);if(((((DJ&0x100000)===0x100000)&&((CJ&0x100000)===0x100000))&&
!((this.F&0x10)===0x10))&&(!((this.F&0x200000)===0x200000)||((!((this.F&0x80)===
0x80)&&!!this.G)&&((this.G.F&0x10)===0x10))))this.AD(0x10,0x0);if(((((DJ&0x200000
)===0x200000)&&((C5&0x200000)===0x200000))&&!((this.F&0x10)===0x10))&&((this.F&0x100000
)===0x100000))this.AD(0x10,0x0);if((((((DJ&0x200000)===0x200000)&&((CJ&0x200000)===
0x200000))&&((this.F&0x100010)===0x100010))&&!((this.F&0x80)===0x80))&&((!!this.
G&&!((this.G.F&0x10)===0x10))||((((this.F&0x10000)===0x10000)&&!!this.G)&&(null!==
this))))this.AD(0x0,0x10);},_Init:function(aArg){this.__proto__=D.B2;B.h7++;},_Done:
function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var
A;if((A=this.AG)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.At)&&(A._cycle!=E
))A._Mark(A._cycle=E);if((A=this.G)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.
AW)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=
E);},L:null,_cycle:0,_observers:null,_className:"Core::View"};D.D3={By:B.wf,BZ:B.
wf,Bx:B.wf,BY:B.wf,IE:function(An,Jx){var Ap=B._NewObject(D.Jb,0);this.AW=null;Ap.
Ct=this.GetExtent();Ap.AT=An;Ap.G6=Jx;Ap.IR=this.BY;Ap.IS=this.Bx;Ap.IT=this.BZ;
Ap.IU=this.By;this.AW=Ap;},I3:function(An,C6){var A;var A3=this.BW;var Ap=(D.Jb.
isPrototypeOf(A=this.AW)?A:null);var Z=Ap.Ct[0];var Aa=Ap.Ct[1];var Ad=Ap.Ct[2];
var U=Ap.Ct[3];var Cs=[An[2]-An[0],An[3]-An[1]];var AU=Ad-Z;var AP=U-Aa;if(!C6){
var Dt=[(A=Ap.AT)[2]-A[0],A[3]-A[1]];Z=Z-Ap.AT[0];Aa=Aa-Ap.AT[1];if(Dt[0]!==Cs[0
]){var Bh=((A3&0x4)===0x4);var Bi=((A3&0x8)===0x8);var Ec=((A3&0x1)===0x1);if(!Bh&&(
Ec||!Bi))Z=((Z*Cs[0])/Dt[0])|0;if(!Bi&&(Ec||!Bh)){Ad=Ad-Ap.AT[0];Ad=((Ad*Cs[0])/
Dt[0])|0;Ad=Ad-Cs[0];}else Ad=Ad-Ap.AT[2];Z=Z+An[0];Ad=Ad+An[2];if(!Ec){if(Bh&&!
Bi)Ad=Z+AU;else if(!Bh&&Bi)Z=Ad-AU;else{Z=Z+((((Ad-Z)-AU)/2)|0);Ad=Z+AU;}}}else{
Ad=Ad-Ap.AT[2];Z=Z+An[0];Ad=Ad+An[2];}if(Dt[1]!==Cs[1]){var Bj=((A3&0x10)===0x10
);var Bg=((A3&0x20)===0x20);var Ed=((A3&0x2)===0x2);if(!Bj&&(Ed||!Bg))Aa=((Aa*Cs[
1])/Dt[1])|0;if(!Bg&&(Ed||!Bj)){U=U-Ap.AT[1];U=((U*Cs[1])/Dt[1])|0;U=U-Cs[1];}else
U=U-Ap.AT[3];Aa=Aa+An[1];U=U+An[3];if(!Ed){if(Bj&&!Bg)U=Aa+AP;else if(!Bj&&Bg)Aa=
U-AP;else{Aa=Aa+((((U-Aa)-AP)/2)|0);U=Aa+AP;}}}else{U=U-Ap.AT[3];Aa=Aa+An[1];U=U+
An[3];}}else{switch(C6){case 3:{Z=An[0];Ad=Z+AU;}break;case 4:{Ad=An[2];Z=Ad-AU;
}break;case 1:{Aa=An[1];U=Aa+AP;}break;case 2:{U=An[3];Aa=U-AP;}break;default:;}
if((C6===3)||(C6===4)){var Bj=((A3&0x10)===0x10);var Bg=((A3&0x20)===0x20);var Ed=((
A3&0x2)===0x2);if(Ed){Aa=An[1];U=An[3];}else if(Bj&&!Bg){Aa=An[1];U=Aa+AP;}else if(
Bg&&!Bj){U=An[3];Aa=U-AP;}else{Aa=An[1]+((((An[3]-An[1])-AP)/2)|0);U=Aa+AP;}}if((
C6===1)||(C6===2)){var Bh=((A3&0x4)===0x4);var Bi=((A3&0x8)===0x8);var Ec=((A3&0x1
)===0x1);if(Ec){Z=An[0];Ad=An[2];}else if(Bh&&!Bi){Z=An[0];Ad=Z+AU;}else if(Bi&&
!Bh){Ad=An[2];Z=Ad-AU;}else{Z=An[0]+((((An[2]-An[0])-AU)/2)|0);Ad=Z+AU;}}}Ap.isEmpty=(
Z>=Ad)||(Aa>=U);AU=(Ad-Z)-1;AP=(U-Aa)-1;var E$=Ap.Ct[0];var Fa=Ap.Ct[1];var EC=(
Ap.Ct[2]-E$)-1;var EB=(Ap.Ct[3]-Fa)-1;if(!EC)EC=1;if(!EB)EB=1;if(((this.F&0x100)===
0x100)){this.BY=[Z+((((Ap.IR[0]-E$)*AU)/EC)|0),Aa+((((Ap.IR[1]-Fa)*AP)/EB)|0)];this.
Bx=[Z+((((Ap.IS[0]-E$)*AU)/EC)|0),Aa+((((Ap.IS[1]-Fa)*AP)/EB)|0)];this.BZ=[Z+((((
Ap.IT[0]-E$)*AU)/EC)|0),Aa+((((Ap.IT[1]-Fa)*AP)/EB)|0)];this.By=[Z+((((Ap.IU[0]-
E$)*AU)/EC)|0),Aa+((((Ap.IU[1]-Fa)*AP)/EB)|0)];}else{this.CE([Z+((((Ap.IR[0]-E$)
*AU)/EC)|0),Aa+((((Ap.IR[1]-Fa)*AP)/EB)|0)]);this.CF([Z+((((Ap.IS[0]-E$)*AU)/EC)|
0),Aa+((((Ap.IS[1]-Fa)*AP)/EB)|0)]);this.CG([Z+((((Ap.IT[0]-E$)*AU)/EC)|0),Aa+((((
Ap.IT[1]-Fa)*AP)/EB)|0)]);this.CH([Z+((((Ap.IU[0]-E$)*AU)/EC)|0),Aa+((((Ap.IU[1]-
Fa)*AP)/EB)|0)]);this.AW=Ap;}return[AU+1,AP+1];},KF:function(aOffset,Jw){if(Jw){
this.BY=B.abf(this.BY,aOffset);this.Bx=B.abf(this.Bx,aOffset);this.BZ=B.abf(this.
BZ,aOffset);this.By=B.abf(this.By,aOffset);}else{this.CE(B.abf(this.BY,aOffset));
this.CF(B.abf(this.Bx,aOffset));this.CG(B.abf(this.BZ,aOffset));this.CH(B.abf(this.
By,aOffset));}},GetExtent:function(){if(!!this.AW&&this.AW.isEmpty)return AR;var
Z=this.BY[0];var Aa=this.BY[1];var Ad=this.BZ[0];var U=this.BZ[1];if((((this.By[
0]!==Z)||(this.Bx[1]!==Aa))||(this.Bx[0]!==Ad))||(this.By[1]!==U)){if(this.Bx[0]<
Z)Z=this.Bx[0];if(this.BZ[0]<Z)Z=this.BZ[0];if(this.By[0]<Z)Z=this.By[0];if(this.
Bx[1]<Aa)Aa=this.Bx[1];if(this.BZ[1]<Aa)Aa=this.BZ[1];if(this.By[1]<Aa)Aa=this.By[
1];if(this.BY[0]>Ad)Ad=this.BY[0];if(this.Bx[0]>Ad)Ad=this.Bx[0];if(this.By[0]>Ad
)Ad=this.By[0];if(this.BY[1]>U)U=this.BY[1];if(this.Bx[1]>U)U=this.Bx[1];if(this.
By[1]>U)U=this.By[1];}else{var tmp;if(Ad<Z){tmp=Z;Z=Ad;Ad=tmp;}if(U<Aa){tmp=Aa;Aa=
U;U=tmp;}}return[Z,Aa,Ad+1,U+1];},CH:function(C){var A;if(B.aaX(C,this.By))return;
if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping());this.AW=null;this.
By=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping());if((!!this.
G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;
this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CQ],this);}},CG:function(C){var A;if(B.
aaX(C,this.BZ))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping(
));this.AW=null;this.BZ=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping(
));if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CQ],this);}},CF:function(
C){var A;if(B.aaX(C,this.Bx))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(
this.GetClipping());this.AW=null;this.Bx=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ac(this.GetClipping());if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000
)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CQ],this
);}},CE:function(C){var A;if(B.aaX(C,this.BY))return;if(!!this.G&&((this.F&0x1)===
0x1))this.G.Ac(this.GetClipping());this.AW=null;this.BY=C;if(!!this.G&&((this.F&
0x1)===0x1))this.G.Ac(this.GetClipping());if((!!this.G&&((this.F&0x400)===0x400)
)&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.
pe([A=this.G,A.CQ],this);}},Kv:function(GR){var A2=B.abi(4,B.wf,null);var K=0;var
A7=3;var LB=false;var LC=false;A2.Set(0,this.BY);A2.Set(1,this.Bx);A2.Set(2,this.
BZ);A2.Set(3,this.By);while(K<4){var Ne=A2.Get(K)[0];var J8=A2.Get(K)[1];var PS=
A2.Get(A7)[0];var LW=A2.Get(A7)[1];if(((J8>GR[1])!==(LW>GR[1]))||((J8<GR[1])!==(
LW<GR[1]))){var Nf=((((PS-Ne)*(GR[1]-J8))/(LW-J8))|0)+Ne;if(GR[0]>Nf)LB=!LB;if(GR[
0]<Nf)LC=!LC;}A7=K;K=K+1;}return LB||LC;},NA:function(){return((((this.BY[0]===this.
By[0])&&(this.Bx[0]===this.BZ[0]))&&(this.BY[1]===this.Bx[1]))&&(this.BZ[1]===this.
By[1]))||((((this.BY[0]===this.Bx[0])&&(this.BZ[0]===this.By[0]))&&(this.BY[1]===
this.By[1]))&&(this.Bx[1]===this.BZ[1]));},_Init:function(aArg){D.B2._Init.call(
this,aArg);this.__proto__=D.D3;},_className:"Core::QuadView"};D.AN={N:B.wg,IE:function(
An,Jx){var Ap=B._NewObject(D.Ja,0);Ap.Ct=this.N;Ap.AT=An;Ap.G6=Jx;this.AW=Ap;},I3:
function(An,C6){var A;var A3=this.BW;var Ap=this.AW;var Z=Ap.Ct[0];var Aa=Ap.Ct[
1];var Ad=Ap.Ct[2];var U=Ap.Ct[3];var Cs=[An[2]-An[0],An[3]-An[1]];var AU=Ad-Z;var
AP=U-Aa;if(!C6){var Dt=[(A=Ap.AT)[2]-A[0],A[3]-A[1]];Z=Z-Ap.AT[0];Aa=Aa-Ap.AT[1];
if(Dt[0]!==Cs[0]){var Bh=((A3&0x4)===0x4);var Bi=((A3&0x8)===0x8);var Ec=((A3&0x1
)===0x1);if(!Bh&&(Ec||!Bi))Z=((Z*Cs[0])/Dt[0])|0;if(!Bi&&(Ec||!Bh)){Ad=Ad-Ap.AT[
0];Ad=((Ad*Cs[0])/Dt[0])|0;Ad=Ad-Cs[0];}else Ad=Ad-Ap.AT[2];Z=Z+An[0];Ad=Ad+An[2
];if(!Ec){if(Bh&&!Bi)Ad=Z+AU;else if(!Bh&&Bi)Z=Ad-AU;else{Z=Z+((((Ad-Z)-AU)/2)|0
);Ad=Z+AU;}}}else{Ad=Ad-Ap.AT[2];Z=Z+An[0];Ad=Ad+An[2];}if(Dt[1]!==Cs[1]){var Bj=((
A3&0x10)===0x10);var Bg=((A3&0x20)===0x20);var Ed=((A3&0x2)===0x2);if(!Bj&&(Ed||
!Bg))Aa=((Aa*Cs[1])/Dt[1])|0;if(!Bg&&(Ed||!Bj)){U=U-Ap.AT[1];U=((U*Cs[1])/Dt[1])|
0;U=U-Cs[1];}else U=U-Ap.AT[3];Aa=Aa+An[1];U=U+An[3];if(!Ed){if(Bj&&!Bg)U=Aa+AP;
else if(!Bj&&Bg)Aa=U-AP;else{Aa=Aa+((((U-Aa)-AP)/2)|0);U=Aa+AP;}}}else{U=U-Ap.AT[
3];Aa=Aa+An[1];U=U+An[3];}}else{switch(C6){case 3:{Z=An[0];Ad=Z+AU;}break;case 4:{
Ad=An[2];Z=Ad-AU;}break;case 1:{Aa=An[1];U=Aa+AP;}break;case 2:{U=An[3];Aa=U-AP;
}break;default:;}if((C6===3)||(C6===4)){var Bj=((A3&0x10)===0x10);var Bg=((A3&0x20
)===0x20);var Ed=((A3&0x2)===0x2);if(Ed){Aa=An[1];U=An[3];}else if(Bj&&!Bg){Aa=An[
1];U=Aa+AP;}else if(Bg&&!Bj){U=An[3];Aa=U-AP;}else{Aa=An[1]+((((An[3]-An[1])-AP)
/2)|0);U=Aa+AP;}}if((C6===1)||(C6===2)){var Bh=((A3&0x4)===0x4);var Bi=((A3&0x8)===
0x8);var Ec=((A3&0x1)===0x1);if(Ec){Z=An[0];Ad=An[2];}else if(Bh&&!Bi){Z=An[0];Ad=
Z+AU;}else if(Bi&&!Bh){Ad=An[2];Z=Ad-AU;}else{Z=An[0]+((((An[2]-An[0])-AU)/2)|0);
Ad=Z+AU;}}}Ap.isEmpty=(Z>=Ad)||(Aa>=U);if(((this.F&0x100)===0x100))this.N=[Z,Aa,
Ad,U];else{this.P([Z,Aa,Ad,U]);this.AW=Ap;}return[Ad-Z,U-Aa];},KF:function(aOffset
,Jw){if(Jw)this.N=B.abh(this.N,aOffset);else this.P(B.abh(this.N,aOffset));},GetExtent:
function(){return this.N;},P:function(C){var A;if(B.aaY(C,this.N))return;if(!!this.
G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping());this.AW=null;this.N=C;if(!
!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping());if((!!this.G&&((this.
F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=
this.G.F|0x4000;B.pe([A=this.G,A.CQ],this);}},_Init:function(aArg){D.B2._Init.call(
this,aArg);this.__proto__=D.AN;},_className:"Core::RectView"};D.Q={CY:null,B6:null
,JQ:null,De:null,B8:255,IA:0,ID:0,IC:0,IB:0,Ck:function(aArg){this.Bd();},Cj:function(
AK,aClip,aOffset,Az,aBlend){var A;Az=((Az+1)*this.B8)>>8;aBlend=aBlend&&((this.F&
0x2)===0x2);this.Pu(AK,aClip,B.abf(aOffset,this.N.slice(0,2)),Az,aBlend);},GetClipping:
function(){var A;var I=this.N;I=[].concat(I[0]-this.IB,I.slice(1,4));I=B.abP(I,I[
1]-this.ID);I=B.abN(I,I[2]+this.IC);I=[].concat(I.slice(0,3),I[3]+this.IA);if(((
this.F&0x80000)===0x80000)){var G8=AR;var H;for(H=this.CY;!!H;H=H.AG)if(((H.F&0x1
)===0x1))G8=B.wC(G8,H.GetClipping());I=B.wC(I,B.abh(G8,this.N.slice(0,2)));}return I;
},EI:function(Av,S,Co,Ex,Ez,GT){var A;var H=this.B6;var GZ=null;var T=AR;var CM=
null;if(((A=B.lb(Av,this.N))[0]>=A[2])||(A[1]>=A[3]))return null;Av=B.abg(Av,this.
N.slice(0,2));if(!!Ez){H=Ez;while(!!H&&(H.G!==this))H=H.G;}while(!!H){if(((H.F&0x400
)===0x400)&&!CM){CM=H.At;while(!!CM&&!((CM.F&0x200)===0x200))CM=CM.At;if(!!CM)T=
B.lb(Av,CM.GetExtent());else T=AR;}if(CM===H){CM=null;T=AR;}if((!!Ex&&!!(D.Q.isPrototypeOf(
H)?H:null))||((((((H.F&0x8)===0x8)&&((H.F&0x10)===0x10))&&!((H.F&0x40000)===0x40000
))&&!((H.F&0x20000)===0x20000))&&(!((H.F&0x10000)===0x10000)||(null===H)))){var Ct=
H.GetExtent();var JJ=Ex;var GX=null;if(JJ===H)JJ=null;if(((H.F&0x400)===0x400)){
if(!(((A=B.lb(Ct,T))[0]>=A[2])||(A[1]>=A[3])))GX=H.EI(T,S,Co,JJ,Ez,GT);}else if(
!(((A=B.lb(Ct,Av))[0]>=A[2])||(A[1]>=A[3]))||(Ex===H))GX=H.EI(Av,S,Co,JJ,Ez,GT);
H=H.At;if(!!GX){if(!GZ||((GX.HI<GZ.HI)&&(GX.HI>=0)))GZ=GX;if(!GX.HI)H=null;}}else
H=H.At;Ez=null;}return GZ;},I2:function(Av){var A;var R;var H=this.CY;var GV=AR;
var IQ=true;var result=(Av=R=B.abg(Av,this.N.slice(0,2)),R);while(!!H){if(((H.F&
0x200)===0x200)){var HB=(D.H6.isPrototypeOf(H)?H:null);GV=B.lb(Av,HB.N);IQ=((HB.
F&0x1)===0x1);}if(((H.F&0x1)===0x1)){if(((H.F&0x400)===0x400)){if(IQ){var T=B.lb(
H.GetClipping(),GV);if(!((T[0]>=T[2])||(T[1]>=T[3])))result=B.wC(result,H.I2(T));
}}else{var T=B.lb(H.GetClipping(),Av);if(!((T[0]>=T[2])||(T[1]>=T[3])))result=B.
wC(result,H.I2(T));}}H=H.AG;}return B.lb(B.abh(result,this.N.slice(0,2)),this.N);
},AD:function(CJ,C5){var A;var JU=this.F;if((!!this.G&&((this.F&0x80001)===0x80001
))&&((C5&0x80000)===0x80000))this.G.Ac(this.GetClipping());D.AN.AD.call(this,CJ,
C5);if(((!!this.G&&((this.F&0x1)===0x1))&&((CJ&0x80000)===0x80000))&&!((JU&0x80000
)===0x80000))this.G.Ac(this.GetClipping());var DJ=this.F^JU;if(!!this.De&&((DJ&0x40
)===0x40)){if(((this.F&0x40)===0x40))this.De.AD(0x40,0x0);else this.De.AD(0x0,0x40
);}if(((DJ&0x10)===0x10)){var H;for(H=this.CY;!!H;H=H.AG)if((((H.F&0x300000)===0x300000
)&&!((H.F&0x80)===0x80))&&(!((H.F&0x10000)===0x10000)||(null===H)))H.AD(CJ&0x10,
C5&0x10);}if(!!DJ){this.F=this.F|0x8000;B.pe([this,this.J7],this);}},P:function(
C){var A;if(B.aaY(C,this.N))return;var FG=[(A=this.N)[2]-A[0],A[3]-A[1]];var LI=[
C[2]-C[0],C[3]-C[1]];var HC=!B.aaX(FG,LI);D.AN.P.call(this,C);if((HC&&(FG[0]>0))&&(
FG[1]>0)){var AT=[].concat(AH,FG);var H=this.CY;while(!!H){if((!H.AW&&(H.BW!==0x14
))&&!((H.F&0x400)===0x400))H.IE(AT,null);H=H.AG;}}if(HC){this.F=this.F|0x5000;B.
pe([this,this.J7],this);}},MX:function(AE){var MJ=(D.KeyEvent.isPrototypeOf(AE)?
AE:null);var DK=this.JQ;if(!MJ)return null;while(!!DK&&(!DK.Bw||!DK.Bo(MJ)))DK=DK.
AG;return DK;},Pu:function(AK,aClip,aOffset,Az,aBlend){var A;var H=this.CY;var GV=
AR;var IQ=true;this.Ns(AK,aClip,aOffset,Az,aBlend);while(!!H){if(((H.F&0x200)===
0x200)){var HB=(D.H6.isPrototypeOf(H)?H:null);IQ=((HB.F&0x1)===0x1);GV=aClip;if(
!((HB.F&0x80000)===0x80000))GV=B.lb(GV,B.abh(HB.N,aOffset));}if(((H.F&0x1)===0x1
)){if(((H.F&0x400)===0x400)){if(IQ){var T=B.lb(B.abh(H.GetClipping(),aOffset),GV
);if(!((T[0]>=T[2])||(T[1]>=T[3])))H.Cj(AK,T,aOffset,Az,aBlend);}}else{var T=B.lb(
B.abh(H.GetClipping(),aOffset),aClip);if(!((T[0]>=T[2])||(T[1]>=T[3])))H.Cj(AK,T
,aOffset,Az,aBlend);}}H=H.AG;}this.Nv(AK,aClip,aOffset,Az,aBlend);},PK:function(
){var A;var Lz=((this.F&0x1000)===0x1000);var Fb=[0,0,(A=this.N)[2]-A[0],A[3]-A[
1]];var ED=false;var Hx=AR;var Lx=AR;var H=this.B6;var CM=null;while(!!H){if(((H.
F&0x800)===0x800)){ED=true;H.F=H.F&~0x800;}if(ED&&((H.F&0x200)===0x200))ED=false;
H=H.At;}ED=false;H=this.CY;if(Lz){this.F=this.F&~0x1000;Lz=!((Fb[0]>=Fb[2])||(Fb[
1]>=Fb[3]));}this.F=this.F|0x2000;while(!!H){if(((H.F&0x400)===0x400)){if(!!H.AW&&(
H.AW.G6!==CM))H.AW=null;if((!H.AW&&ED)&&(H.BW!==0x14))H.IE(Lx,CM);}if(!!H.AW){if(
Lz&&!((H.F&0x400)===0x400))H.I3(Fb,0);if(ED&&((H.F&0x400)===0x400))H.I3(Lx,0);}if(((
H.F&0x200)===0x200)){ED=((H.F&0x1000)===0x1000);CM=(D.H6.isPrototypeOf(H)?H:null
);if(ED){H.F=H.F&~0x1000;Hx=CM.N;Lx=Hx;ED=!((Hx[0]>=Hx[2])||(Hx[1]>=Hx[3]));}if(
ED)this.Ac(CM.N);}H=H.AG;}this.F=this.F&~0x2000;this.Jr([Fb[2]-Fb[0],Fb[3]-Fb[1]
]);},CQ:function(As){B.pe([this,this.J7],this);},J7:function(As){var A;var PQ=((
this.F&0x1000)===0x1000);if(((this.F&0x4000)===0x4000)){this.F=this.F&~0x4000;this.
PK();}if(((this.F&0x8000)===0x8000)||PQ){this.F=this.F&~0x8000;this.E5(this.F);}
},Hk:function(C){var A;if(!!C&&(C.G!==this))throw new Error(B4);if(!!C&&!((C.F&0x14
)===0x14))C=null;if(!!C&&((C.F&0x10000)===0x10000))C=null;if(C===this.De)return;
if(!!this.De)this.De.AD(0x0,0x60);this.De=C;if(!!C){if(((this.F&0x40)===0x40))C.
AD(0x60,0x0);else C.AD(0x20,0x0);}},Y:function(C){if(C)this.AD(0x100000,0x0);else
this.AD(0x0,0x100000);},A5:function(C){var A;if(C>255)C=255;if(C<0)C=0;if(C===this.
B8)return;this.B8=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping(
));},Jv:function(PR){this.A5(PR);},Ab:function(C){if(C)this.AD(0x1,0x0);else this.
AD(0x0,0x1);},ExtendClipping:function(GO,GP,GQ,GN){var A;var Iu=this.N;var CK=Iu;
if(GO<0)GO=0;if(GO>255)GO=255;if(GP<0)GP=0;if(GP>255)GP=255;if(GQ<0)GQ=0;if(GQ>255
)GQ=255;if(GN<0)GN=0;if(GN>255)GN=255;CK=[].concat(CK[0]-(Math.max(GO,this.IB)&0xFF
),CK.slice(1,4));CK=B.abN(CK,CK[2]+(Math.max(GP,this.IC)&0xFF));CK=B.abP(CK,CK[1
]-(Math.max(GQ,this.ID)&0xFF));CK=[].concat(CK.slice(0,3),CK[3]+(Math.max(GN,this.
IA)&0xFF));if(GO!==this.IB){if((!!this.G&&((this.F&0x1)===0x1))&&!((this.F&0x80000
)===0x80000)){var I=CK;I=B.abN(I,Iu[0]);this.G.Ac(I);}this.IB=GO&0xFF;}if(GP!==this.
IC){if((!!this.G&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var I=CK;
I=[].concat(Iu[2],I.slice(1,4));this.G.Ac(I);}this.IC=GP&0xFF;}if(GQ!==this.ID){
if((!!this.G&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var I=CK;I=[
].concat(I.slice(0,3),Iu[1]);this.G.Ac(I);}this.ID=GQ&0xFF;}if(GN!==this.IA){if((
!!this.G&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var I=CK;I=B.abP(
I,Iu[3]);this.G.Ac(I);}this.IA=GN&0xFF;}},Nv:function(AK,aClip,aOffset,Az,aBlend
){},Ns:function(AK,aClip,aOffset,Az,aBlend){},GetMaximalSize:function(){return Ev;
},GetMinimalSize:function(){return AH;},DispatchEvent:function(AE){var A;var H=this.
De;var Aq=(D.Q.isPrototypeOf(H)?H:null);var Be=null;if(!!H&&((((H.F&0x10000)===0x10000
)||((H.F&0x40000)===0x40000))||((H.F&0x20000)===0x20000))){H=null;Aq=null;}if(!!
Aq)Be=Aq.DispatchEvent(AE);else if(!!H)Be=H.Bo(AE);if(!Be)Be=this.Bo(AE);if(!Be)
Be=this.MX(AE);return Be;},BroadcastEventAtPosition:function(AE,Mr,aFilter){var A;
var H=this.B6;var Be=null;while(!!H&&!Be){if((!aFilter||((A=aFilter)&&((H.F&A)===
A)))&&B.wa(H.GetExtent(),Mr)){var Aq=(D.Q.isPrototypeOf(H)?H:null);if(!!Aq)Be=Aq.
BroadcastEventAtPosition(AE,B.abe(Mr,Aq.N.slice(0,2)),aFilter);else Be=H.Bo(AE);
}H=H.At;}if(!Be)Be=this.Bo(AE);return Be;},BroadcastEvent:function(AE,aFilter){var
A;var H=this.B6;var Be=null;while(!!H&&!Be){if(!aFilter||((A=aFilter)&&((H.F&A)===
A))){var Aq=(D.Q.isPrototypeOf(H)?H:null);if(!!Aq)Be=Aq.BroadcastEvent(AE,aFilter
);else Be=H.Bo(AE);}H=H.At;}if(!Be)Be=this.Bo(AE);if(!Be)Be=this.MX(AE);return Be;
},Jr:function(aSize){},E5:function(C7){},Bd:function(){this.F=this.F|0x8000;B.pe([
this,this.J7],this);},Ac:function(Av){var A;var Aq=this;while(!!Aq&&!((Av[0]>=Av[
2])||(Av[1]>=Av[3]))){if(!Aq.G&&(Aq!==this)){Aq.Ac(Av);return;}if(!((Aq.F&0x1)===
0x1))return;var I=Aq.N;Av=B.abh(Av,I.slice(0,2));if(!((Aq.F&0x80000)===0x80000)){
I=[].concat(I[0]-Aq.IB,I.slice(1,4));I=B.abP(I,I[1]-Aq.ID);I=B.abN(I,I[2]+Aq.IC);
I=[].concat(I.slice(0,3),I[3]+Aq.IA);Av=B.lb(Av,I);}Aq=Aq.G;}},L0:function(M,aFilter
){var A;if(!M||(M.G!==this))return null;var FF=M.AG;var FI=M.At;var IL=0x10000;if(((
aFilter&0x10000)===0x10000))IL=0x0;while(!!FF||!!FI){if((!!FF&&(!aFilter||((A=aFilter
)&&((FF.F&A)===A))))&&(!IL||!((A=IL)&&((FF.F&A)===A))))return FF;if((!!FI&&(!aFilter||((
A=aFilter)&&((FI.F&A)===A))))&&(!IL||!((A=IL)&&((FI.F&A)===A))))return FI;if(!!FF
)FF=FF.AG;if(!!FI)FI=FI.At;}return null;},Oh:function(M,Dm){var A;if(!M)throw new
Error(D7);if(M.G!==this)throw new Error(Dk);var E7=M;var Bk=M;var G9=M.DD;while(((
Dm>0)&&!!E7.AG)&&(E7.AG.DD<=G9)){E7=E7.AG;Dm=Dm-1;}while(((Dm<0)&&!!Bk.At)&&(Bk.
At.DD>=G9)){Bk=Bk.At;Dm=Dm+1;}if((E7===M)&&(Bk===M))return;if(((M.F&0x401)===0x401
)){if(!!M.At&&!!M.AW)M.At.F=M.At.F|0x800;M.F=M.F|0x800;this.F=this.F|0x4000;B.pe([
this,this.CQ],this);}if(((M.F&0x200)===0x200)){if(!!M.At)M.At.F=M.At.F|0x800;M.F=
M.F|0x800;this.F=this.F|0x4000;B.pe([this,this.CQ],this);}if(!!M.At)M.At.AG=M.AG;
if(!!M.AG)M.AG.At=M.At;if(this.CY===M)this.CY=M.AG;if(this.B6===M)this.B6=M.At;if(
E7!==M){M.AG=E7.AG;M.At=E7;E7.AG=M;if(!!M.AG)M.AG.At=M;}if(Bk!==M){M.AG=Bk;M.At=
Bk.At;Bk.At=M;if(!!M.At)M.At.AG=M;}if(!M.AG)this.B6=M;if(!M.At)this.CY=M;if(((M.
F&0x1)===0x1))this.Ac(M.GetClipping());},Ho:function(M){var A;if(!M)throw new Error(
DG);if(M.G!==this)throw new Error(Dk);if((((M.F&0x401)===0x401)&&!!M.At)&&!!M.AW
){M.At.F=M.At.F|0x800;this.F=this.F|0x4000;B.pe([this,this.CQ],this);}if(((M.F&0x200
)===0x200)){if(!!M.At)M.At.F=M.At.F|0x800;this.F=this.F|0x4000;B.pe([this,this.CQ
],this);}M.AW=null;if(this.De===M)this.Hk(this.L0(M,0x14));if(!!M.At)M.At.AG=M.AG;
if(!!M.AG)M.AG.At=M.At;if(this.CY===M)this.CY=M.AG;if(this.B6===M)this.B6=M.At;M.
G=null;M.AG=null;M.At=null;if((!((M.F&0x10)===0x10)&&((M.F&0x100000)===0x100000)
)&&!((this.F&0x80)===0x80))M.AD(0x10,0x0);if(((M.F&0x1)===0x1))this.Ac(M.GetClipping(
));},X:function(M,Dm){var A;if(!M)throw new Error(D8);if(!!M.G)throw new Error(Fy
);var Bk=null;var G9=M.DD;if(((Dm<0)&&!!this.B6)&&(this.B6.DD>=G9)){Bk=this.B6;Dm=
Dm+1;}while((((Dm<0)&&!!Bk)&&!!Bk.At)&&(Bk.At.DD>=G9)){Bk=Bk.At;Dm=Dm+1;}if((!Bk&&
!!this.B6)&&(this.B6.DD>G9))Bk=this.B6;while((!!Bk&&!!Bk.At)&&(Bk.At.DD>G9))Bk=Bk.
At;if(!Bk){M.G=this;M.At=this.B6;if(!!this.B6)this.B6.AG=M;if(!this.CY)this.CY=M;
this.B6=M;}else{M.G=this;M.At=Bk.At;M.AG=Bk;Bk.At=M;if(!!M.At)M.At.AG=M;else this.
CY=M;}if(((M.F&0x1)===0x1))this.Ac(M.GetClipping());if(((M.F&0x80)===0x80)&&(B.aam(
).Ny()===M))M.AD(0x10,0x0);else if(!((this.F&0x10)===0x10)&&((M.F&0x200010)===0x200010
))M.AD(0x0,0x10);else if((((this.F&0x10)===0x10)&&!((M.F&0x10)===0x10))&&((M.F&0x100000
)===0x100000))M.AD(0x10,0x0);if(((!this.De&&((M.F&0x4)===0x4))&&((M.F&0x10)===0x10
))&&!((M.F&0x10000)===0x10000))this.Hk(M);if(((M.F&0x401)===0x401)){M.F=M.F|0x800;
this.F=this.F|0x4000;B.pe([this,this.CQ],this);}if(((M.F&0x200)===0x200)){M.F=M.
F|0x800;this.F=this.F|0x4000;B.pe([this,this.CQ],this);}},Hf:function(){return this.
B8;},_Init:function(aArg){D.AN._Init.call(this,aArg);this.__proto__=D.Q;this.F=0x10001F;
this.Ck(aArg);},_Mark:function(E){var A;D.AN._Mark.call(this,E);if((A=this.CY)&&(
A._cycle!=E))A._Mark(A._cycle=E);if((A=this.B6)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.JQ)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.De)&&(A._cycle!=
E))A._Mark(A._cycle=E);},_className:"Core::Group"};D.Root={CO:null,A1:B.abi(10,null
,null),Hu:null,E_:null,I1:0,A_:0,BR:B.abi(10,0,null),JI:B.abi(10,B.wg,null),Dr:B.
abi(10,0,null),EA:B.abi(10,B.wf,null),Hw:B.abi(10,0,null),E9:B.abi(10,B.wf,null)
,Dq:B.abi(10,B.wf,null),CL:B.abi(10,B.wf,null),D9:B.abi(10,B.wf,null),AF:0,JN:0,
JM:0,Cb:B.abi(4,0,null),Br:B.abi(4,B.wg,null),Bq:0,IH:0,Hy:0,LA:true,Ck:function(
aArg){if(!!!this.L){var obj=this;B.abD(obj);}},HL:function(){return this;},Cj:function(
AK,aClip,aOffset,Az,aBlend){var fullScreenUpdate=false;fullScreenUpdate=B.m7;if(
!fullScreenUpdate)AK.Km(aClip,B.abh(B.abh(aClip,aOffset),this.N.slice(0,2)),0x00000000
,0x00000000,0x00000000,0x00000000,false);D.Q.Cj.call(this,AK,aClip,aOffset,Az,aBlend
);},AD:function(CJ,C5){var A;D.Q.AD.call(this,CJ,C5);if(!this.G&&(((CJ&0x1)===0x1
)||((C5&0x1)===0x1)))this.Ac([0,0,(A=this.N)[2]-A[0],A[3]-A[1]]);if(!this.G&&(((
CJ&0x2)===0x2)||((C5&0x2)===0x2)))this.Ac([0,0,(A=this.N)[2]-A[0],A[3]-A[1]]);},
Hk:function(C){if((C!==null)||!C)D.Q.Hk.call(this,C);},A5:function(C){var A;var C$=
this.B8;D.Q.A5.call(this,C);if(((C$!==this.B8)&&!this.G)&&((this.F&0x1)===0x1))this.
Ac([0,0,(A=this.N)[2]-A[0],A[3]-A[1]]);},DispatchEvent:function(AE){if(!!AE){AE.
HP=!!this.A_;if(!!this.A_)AE.Ax=this.A_;}var Be;Be=D.Q.DispatchEvent.call(this,AE
);this.A_=0;return Be;},BroadcastEvent:function(AE,aFilter){if(!!AE){AE.HP=!!this.
A_;if(!!this.A_)AE.Ax=this.A_;}var Be=D.Q.BroadcastEvent.call(this,AE,aFilter);this.
A_=0;return Be;},Ac:function(Av){var A;if(this.I1>0)throw new Error(Im);var fullScreenUpdate=
false;fullScreenUpdate=B.m7;if(fullScreenUpdate)Av=[0,0,(A=this.N)[2]-A[0],A[3]-
A[1]];if(!!this.G){D.Q.Ac.call(this,Av);return;}Av=B.lb(B.abh(Av,this.N.slice(0,
2)),this.N);if((Av[0]>=Av[2])||(Av[1]>=Av[3]))return;var K;for(K=0;K<this.Bq;K=K+
1)if(!(((A=B.lb(this.Br.Get(K),Av))[0]>=A[2])||(A[1]>=A[3]))){this.Br.Set(K,B.wC(
this.Br.Get(K),Av));this.Cb.Set(K,B.aaH(this.Br.Get(K)));return;}if(this.Bq<3){this.
Br.Set(this.Bq,Av);this.Cb.Set(this.Bq,B.aaH(Av));this.Bq=this.Bq+1;return;}var A7;
var CN;var IG=0;var II=0;var Mx=2147483647;this.Br.Set(this.Bq,Av);this.Cb.Set(this.
Bq,B.aaH(Av));for(A7=0;A7<=this.Bq;A7=A7+1)for(CN=A7+1;CN<=this.Bq;CN=CN+1){var J6=
B.aaH(B.wC(this.Br.Get(A7),this.Br.Get(CN)));var MW=((J6<<8)/(this.Cb.Get(A7)+this.
Cb.Get(CN)))|0;if(MW<Mx){Mx=MW;IG=A7;II=CN;}}this.Br.Set(IG,B.wC(this.Br.Get(IG)
,this.Br.Get(II)));this.Cb.Set(IG,B.aaH(this.Br.Get(IG)));if(II!==this.Bq){this.
Br.Set(II,this.Br.Get(this.Bq));this.Cb.Set(II,this.Cb.Get(this.Bq));}},Pq:function(
){var BS=B._NewObject(D.HJ,0);BS.HP=!!this.A_;if(!!this.A_)BS.Ax=this.A_;return BS;
},GW:function(){var BS=B._NewObject(D.EH,0);BS.HP=!!this.A_;if(!!this.A_)BS.Ax=this.
A_;return BS;},Hv:function(){var BS=B._NewObject(D.Kh,0);BS.HP=!!this.A_;if(!!this.
A_)BS.Ax=this.A_;return BS;},Pr:function(As){var K;var GZ=false;for(K=0;K<10;K=K+
1)if(!!this.A1.Get(K)){var AX=this.CL.Get(K);var Aq=this.A1.Get(K).G;while(!!Aq&&(
Aq!==this)){AX=B.abe(AX,Aq.N.slice(0,2));Aq=Aq.G;}if(!Aq&&(this.A1.Get(K)!==this
)){var tmp=this.A1.Get(K);this.AF=K;this.A1.Set(K,null);tmp.Bo(this.GW().InitializeUp(
K,this.E9.Get(K),this.EA.Get(K),this.Dr.Get(K),this.BR.Get(K)+1,this.Dq.Get(K),false
,this.CL.Get(K),this.D9.Get(K)));this.BroadcastEvent(this.Hv().InitializeUp(K,this.
BR.Get(K)+1,false,tmp,this.CL.Get(K)),0x18);}else{this.Dr.Set(K,(this.E_.Ax-this.
Hw.Get(K))|0);if(this.Dr.Get(K)<10)this.Dr.Set(K,10);this.AF=K;this.A1.Get(K).Bo(
this.GW().InitializeHold(K,AX,this.EA.Get(K),this.Dr.Get(K),this.BR.Get(K)+1,this.
Dq.Get(K),this.CL.Get(K),this.D9.Get(K)));GZ=true;}}if(!GZ)this.E_.Y(false);},GetFPS:
function(){var ticksCount=0;var MI=0;ticksCount=((new Date).getTime()-B.v$)|0;if(
!!this.JN&&(ticksCount>this.JN))MI=((this.JM*1000)/((ticksCount-this.JN)|0))|0;this.
JM=0;this.JN=ticksCount;return MI;},Update:function(){var A;if(!this.Hu)this.Hu=
B._NewObject(B.Graphics.Canvas,0);this.Hu.L9([(A=this.N)[2]-A[0],A[3]-A[1]]);this.
Hu.Update();return this.UpdateGE20(this.Hu);},UpdateGE20:function(AK){if(!this.BeginUpdate(
))return AR;var EF=this.UpdateCanvas(AK,AH);this.EndUpdate();return EF;},EndUpdate:
function(){if(this.Bq>0){this.JM=this.JM+1;this.Bq=0;}},UpdateCanvas:function(AK
,aOffset){var A;var EF=AR;var Pj=[].concat(aOffset,B.abf(AK.FrameSize,aOffset));
var K;var A7=this.Bq;this.I1=this.I1+1;AK.G0=this;for(K=0;(K<A7)&&(K<4);K=K+1)if(
this.Cb.Get(K)>0){this.Cj(AK,B.abg(this.Br.Get(K),aOffset),[-aOffset[0],-aOffset[
1]],255,true);EF=B.wC(EF,B.lb(Pj,this.Br.Get(K)));}else A7=A7+1;AK.G0=null;this.
I1=this.I1-1;if(!((EF[0]>=EF[2])||(EF[1]>=EF[3])))return B.abg(EF,aOffset);else return EF;
},GetUpdateRegion:function(Jy){var K;var A7=this.Bq;if(Jy<0)return AR;for(K=0;(K<
A7)&&(K<4);K=K+1)if(!this.Cb.Get(K)){A7=A7+1;Jy=Jy+1;}else if(K===Jy)return this.
Br.Get(K);return AR;},BeginUpdate:function(){var A;var K;if(!!this.Bq&&!B.aaY(this.
Br.Get(0),[0,0,(A=this.N)[2]-A[0],A[3]-A[1]])){var Na=B.abi(3,B.wg,null);var M$=
this.Bq;for(K=0;K<M$;K++)Na.Set(K,this.Br.Get(K));for(K=0;K<M$;K++){var MY=B.abh(
Na.Get(K),this.N.slice(0,2));var MZ=this.I2(MY);if(!B.aaY(MY,MZ))this.Ac(B.abg(MZ
,this.N.slice(0,2)));}}var A7;var CN;for(A7=0;A7<(this.Bq-1);A7++)if(this.Cb.Get(
A7)>0)for(CN=A7+1;CN<this.Bq;CN++)if(this.Cb.Get(CN)>0){var J6=B.aaH(B.wC(this.Br.
Get(A7),this.Br.Get(CN)));if(((J6-this.Cb.Get(A7))-this.Cb.Get(CN))<0){this.Br.Set(
A7,B.wC(this.Br.Get(A7),this.Br.Get(CN)));this.Cb.Set(A7,J6);this.Cb.Set(CN,0);}
}for(K=this.Bq-1;K>=0;K--)if(!this.Cb.Get(K))this.Bq=this.Bq-1;return this.Bq;},
DoesNeedUpdate:function(){if(this.Bq>0)return true;return false;},Initialize:function(
aSize){this.P([].concat(AH,aSize));if(this.LA)this.F=this.F|0x60;else this.F=this.
F|0x20;this.Ac(this.N);return this;},SetRootFocus:function(Lj){if(Lj===this.LA)return false;
this.LA=Lj;if(!Lj)this.AD(0x0,0x40);else this.AD(0x40,0x0);return true;},SetUserInputTimestamp:
function(Pg){this.A_=Pg;},DriveKeyboardHitting:function(Bt,Io,DH){var A;var LR=!
!this.CO;if(!!this.CO&&((!DH||(this.IH!==Bt))||(this.Hy!==Io))){var BS=null;var H=(
D.B2.isPrototypeOf(A=this.CO)?A:null);var DK=(D.Fl.isPrototypeOf(A=this.CO)?A:null
);if(!!this.IH)BS=B._NewObject(D.KeyEvent,0).Initialize(this.IH,false);if(this.Hy
!==0x00)BS=B._NewObject(D.KeyEvent,0).Initialize2(this.Hy,false);if(!!DK)DK.Bo(BS
);else if(!!H)H.Bo(BS);this.IH=0;this.Hy=0x00;this.CO=null;}if(!!this.CO){var BS=
null;var H=(D.B2.isPrototypeOf(A=this.CO)?A:null);var DK=(D.Fl.isPrototypeOf(A=this.
CO)?A:null);if(!!Bt)BS=B._NewObject(D.KeyEvent,0).Initialize(Bt,true);if(this.Hy
!==0x00)BS=B._NewObject(D.KeyEvent,0).Initialize2(Io,true);if(!!DK)DK.Bo(BS);else
if(!!H)H.Bo(BS);}if(!this.CO&&DH){if(!!Bt)this.CO=this.DispatchEvent(B._NewObject(
D.KeyEvent,0).Initialize(Bt,true));if(Io!==0x00)this.CO=this.DispatchEvent(B._NewObject(
D.KeyEvent,0).Initialize2(Io,true));if(!(D.Fl.isPrototypeOf(A=this.CO)?A:null)&&
!(D.B2.isPrototypeOf(A=this.CO)?A:null))this.CO=null;this.IH=Bt;this.Hy=Io;LR=LR||
!!this.CO;}this.A_=0;return LR;},DriveCursorMovement:function(BH){return this.DriveMultiTouchMovement(
this.AF,BH);},DriveMultiTouchMovement:function(S,BH){if((S<0)||(S>9)){this.A_=0;
return false;}var Bv=B.abe(BH,this.CL.Get(S));this.CL.Set(S,BH);if(!this.A1.Get(
S)||B.aaX(Bv,AH)){this.A_=0;return false;}var AX=BH;var Aq=this.A1.Get(S).G;while(
!!Aq&&(Aq!==this)){AX=B.abe(AX,Aq.N.slice(0,2));Aq=Aq.G;}if(!Aq&&(this.A1.Get(S)
!==this)){var tmp=this.A1.Get(S);this.AF=S;this.A1.Set(S,null);tmp.Bo(this.GW().
InitializeUp(S,this.E9.Get(S),this.EA.Get(S),this.Dr.Get(S),this.BR.Get(S)+1,this.
Dq.Get(S),false,this.CL.Get(S),this.D9.Get(S)));this.BroadcastEvent(this.Hv().InitializeUp(
S,this.BR.Get(S)+1,false,tmp,BH),0x18);}else{this.E9.Set(S,AX);this.AF=S;this.A1.
Get(S).Bo(this.Pq().Initialize(S,AX,this.EA.Get(S),Bv,this.Dr.Get(S),this.BR.Get(
S)+1,this.Dq.Get(S),BH,this.D9.Get(S)));}this.A_=0;return true;},DriveCursorHitting:
function(DH,S,BH){return this.DriveMultiTouchHitting(DH,S,BH);},DriveMultiTouchHitting:
function(DH,S,BH){if((S<0)||(S>9)){this.A_=0;return false;}var ticksCount=this.A_;
if(!ticksCount)ticksCount=((new Date).getTime()-B.v$)|0;var PP=this.A_;this.DriveMultiTouchMovement(
S,BH);BH=this.CL.Get(S);this.A_=PP;if(DH)this.D9.Set(S,BH);if(DH&&!this.A1.Get(S
)){var BD;var AX=BH;if(B.wa(this.JI.Get(S),BH)&&((ticksCount-this.Hw.Get(S))<=250
))this.BR.Set(S,this.BR.Get(S)+1);else this.BR.Set(S,0);this.JI.Set(S,B.abh(GL,BH
));this.Hw.Set(S,ticksCount);BD=this.EI(B.abh(GL,BH),S,this.BR.Get(S)+1,null,null
,0x0);if(!!BD){this.BroadcastEvent(this.Hv().InitializeDown(S,this.BR.Get(S)+1,false
,BD.B2,BH),0x18);this.A1.Set(S,BD.B2);this.Dq.Set(S,BD.Di);}else{this.A1.Set(S,null
);this.Dq.Set(S,AH);this.A_=0;return false;}var Aq=BD.B2.G;while(!!Aq&&(Aq!==this
)){AX=B.abe(AX,Aq.N.slice(0,2));Aq=Aq.G;}this.EA.Set(S,AX);this.E9.Set(S,AX);this.
Dr.Set(S,0);this.E_.Y(true);this.AF=S;this.A1.Get(S).Bo(this.GW().InitializeDown(
S,AX,this.BR.Get(S)+1,this.Dq.Get(S),false,BH));this.A_=0;return true;}if(!DH&&!
!this.A1.Get(S)){var AX=BH;var Aq=this.A1.Get(S).G;while(!!Aq&&(Aq!==this)){AX=B.
abe(AX,Aq.N.slice(0,2));Aq=Aq.G;}if(!Aq)AX=this.E9.Get(S);this.AF=S;var tmp=this.
A1.Get(S);this.A1.Set(S,null);tmp.Bo(this.GW().InitializeUp(S,AX,this.EA.Get(S),
this.Dr.Get(S),this.BR.Get(S)+1,this.Dq.Get(S),false,BH,this.D9.Get(S)));this.BroadcastEvent(
this.Hv().InitializeUp(S,this.BR.Get(S)+1,false,tmp,BH),0x18);this.A_=0;return true;
}this.A_=0;return false;},Mf:function(Ey,Mp,Ez,GT){if(Ey===this)Ey=null;if(!this.
A1.Get(this.AF))return;var BD;BD=this.EI(B.abh(GL,this.CL.Get(this.AF)),this.AF,
1,Ey,Ez,GT);if(!!BD&&(this.A1.Get(this.AF)!==BD.B2))this.LX(BD.B2,BD.Di);if(!BD&&(
this.A1.Get(this.AF)!==Mp))this.LX(Mp,AH);},LX:function(Ey,Dl){if(!this.A1.Get(this.
AF)||(this.A1.Get(this.AF)===Ey))return;var tmp=this.A1.Get(this.AF);this.A1.Set(
this.AF,null);tmp.Bo(this.GW().InitializeUp(this.AF,this.E9.Get(this.AF),this.EA.
Get(this.AF),this.Dr.Get(this.AF),this.BR.Get(this.AF)+1,this.Dq.Get(this.AF),true
,this.CL.Get(this.AF),this.D9.Get(this.AF)));this.BroadcastEvent(this.Hv().InitializeUp(
this.AF,this.BR.Get(this.AF)+1,true,tmp,this.CL.Get(this.AF)),0x18);var AX=this.
CL.Get(this.AF);var Aq=null;if(!!Ey)Aq=Ey.G;while(!!Aq&&(Aq!==this)){AX=B.abe(AX
,Aq.N.slice(0,2));Aq=Aq.G;}if(!Aq&&(Ey!==this)){this.A1.Set(this.AF,null);return;
}this.BroadcastEvent(this.Hv().InitializeDown(this.AF,this.BR.Get(this.AF)+1,true
,Ey,this.CL.Get(this.AF)),0x18);var ticksCount=0;ticksCount=((new Date).getTime(
)-B.v$)|0;this.A1.Set(this.AF,Ey);this.Dq.Set(this.AF,Dl);this.EA.Set(this.AF,AX
);this.E9.Set(this.AF,AX);this.BR.Set(this.AF,0);this.Dr.Set(this.AF,0);this.Hw.
Set(this.AF,ticksCount);this.D9.Set(this.AF,this.CL.Get(this.AF));this.A1.Get(this.
AF).Bo(this.GW().InitializeDown(this.AF,AX,this.BR.Get(this.AF)+1,this.Dq.Get(this.
AF),true,this.D9.Get(this.AF)));},Ny:function(){return null;},_Init:function(aArg
){D.Q._Init.call(this,aArg);D.Timer._Init.call(this.E_={L:this},0);(this.A1=[]).
__proto__=D.Root.A1;(this.BR=[]).__proto__=D.Root.BR;(this.JI=[]).__proto__=D.Root.
JI;(this.Dr=[]).__proto__=D.Root.Dr;(this.EA=[]).__proto__=D.Root.EA;(this.Hw=[]
).__proto__=D.Root.Hw;(this.E9=[]).__proto__=D.Root.E9;(this.Dq=[]).__proto__=D.
Root.Dq;(this.CL=[]).__proto__=D.Root.CL;(this.D9=[]).__proto__=D.Root.D9;(this.
Cb=[]).__proto__=D.Root.Cb;(this.Br=[]).__proto__=D.Root.Br;this.__proto__=D.Root;
this.F=0x10007F;this.E_.Fq(10);this.E_.Ft=[this,this.Pr];this.Ck(aArg);},_Done:function(
){this.__proto__=D.Q;this.E_._Done();D.Q._Done.call(this);},_ReInit:function(){D.
Q._ReInit.call(this);this.E_._ReInit();},_Mark:function(E){var A;D.Q._Mark.call(
this,E);if((A=this.CO)&&(A._cycle!=E))A._Mark(A._cycle=E);B.aa6(this.A1,E);if((A=
this.Hu)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.E_)._cycle!=E)A._Mark(A._cycle=
E);},_className:"Core::Root"};D.Event={Ax:0,HP:false,Ck:function(aArg){this.Ax=this.
I$();},I$:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.v$)|0;return ticksCount;
},_Init:function(aArg){this.__proto__=D.Event;this.Ck(aArg);B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:null,_className:
"Core::Event"};D.KeyEvent={Bn:0,AM:0,Down:false,Initialize2:function(Bt,DH){this.
Bn=0;this.AM=Bt;this.Down=DH;if((Bt>=0x30)&&(Bt<=0x39))this.Bn=(10+Bt)-48;if((Bt>=
0x41)&&(Bt<=0x5A))this.Bn=(105+Bt)-65;if((Bt>=0x61)&&(Bt<=0x7A))this.Bn=(105+Bt)-
97;if(Bt===0x20)this.Bn=131;if(!this.Bn)switch(Bt){case 0x2B:this.Bn=132;break;case
0x2D:this.Bn=133;break;case 0x2A:this.Bn=134;break;case 0x2F:this.Bn=135;break;case
0x3D:this.Bn=136;break;case 0x2E:this.Bn=137;break;case 0x2C:this.Bn=138;break;case
0x3A:this.Bn=139;break;case 0x3B:this.Bn=140;break;default:;}return this;},Initialize:
function(Bt,DH){this.Bn=Bt;this.Down=DH;this.AM=0x00;var Lr=Bt-10;var Lq=Bt-105;
if((Lr>=0)&&(Lr<=9))this.AM=(48+Lr)&0xFFFF;if((Lq>=0)&&(Lq<=25))this.AM=(65+Lq)&
0xFFFF;if(Bt===131)this.AM=0x20;if(this.AM===0x00)switch(Bt){case 132:this.AM=0x2B;
break;case 133:this.AM=0x2D;break;case 134:this.AM=0x2A;break;case 135:this.AM=0x2F;
break;case 136:this.AM=0x3D;break;case 137:this.AM=0x2E;break;case 138:this.AM=0x2C;
break;case 139:this.AM=0x3A;break;case 140:this.AM=0x3B;break;default:;}return this;
},NC:function(Mn){switch(Mn){case 141:return((this.AM>=0x41)&&(this.AM<=0x5A))||((
this.AM>=0x61)&&(this.AM<=0x7A));case 142:return(((this.AM>=0x41)&&(this.AM<=0x5A
))||((this.AM>=0x61)&&(this.AM<=0x7A)))||((this.AM>=0x30)&&(this.AM<=0x39));case
143:return(this.AM>=0x30)&&(this.AM<=0x39);case 144:return(((this.AM>=0x41)&&(this.
AM<=0x46))||((this.AM>=0x61)&&(this.AM<=0x66)))||((this.AM>=0x30)&&(this.AM<=0x39
));case 145:return this.AM!==0x00;case 146:return(this.AM===0x00)&&!!this.Bn;case
147:return(((this.Bn===6)||(this.Bn===7))||(this.Bn===4))||(this.Bn===5);case 148:
return(this.AM!==0x00)||!!this.Bn;default:;}return Mn===this.Bn;},_Init:function(
aArg){D.Event._Init.call(this,aArg);this.__proto__=D.KeyEvent;},_className:"Core::KeyEvent"
};D.Kh={KX:null,CA:B.wf,B_:0,Bs:0,Down:false,Cc:false,InitializeUp:function(S,Co
,GM,Lm,DI){this.Down=false;this.Bs=S;this.B_=Co;this.CA=DI;this.KX=Lm;this.Cc=GM;
return this;},InitializeDown:function(S,Co,GM,Lm,DI){this.Down=true;this.Bs=S;this.
B_=Co;this.CA=DI;this.KX=Lm;this.Cc=GM;return this;},_Init:function(aArg){D.Event.
_Init.call(this,aArg);this.__proto__=D.Kh;},_Mark:function(E){var A;D.Event._Mark.
call(this,E);if((A=this.KX)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Core::CursorGrabEvent"
};D.EH={HN:B.wf,CA:B.wf,B_:0,BF:0,CB:B.wf,BB:B.wf,Bs:0,Down:false,Cc:false,InitializeHold:
function(S,Fz,Iq,Ir,Co,Dl,DI,Ip){this.Down=true;this.Bs=S;this.BB=B.abf(Fz,Dl);this.
CB=B.abf(Iq,Dl);this.BF=Ir;this.B_=Co;this.CA=DI;this.HN=Ip;return this;},InitializeUp:
function(S,Fz,Iq,Ir,Co,Dl,GM,DI,Ip){this.Down=false;this.Bs=S;this.BB=B.abf(Fz,Dl
);this.CB=B.abf(Iq,Dl);this.BF=Ir;this.B_=Co;this.Cc=GM;this.CA=DI;this.HN=Ip;return this;
},InitializeDown:function(S,Fz,Co,Dl,GM,DI){this.Down=true;this.Bs=S;this.BB=B.abf(
Fz,Dl);this.CB=B.abf(Fz,Dl);this.BF=0;this.B_=Co;this.Cc=GM;this.CA=DI;this.HN=DI;
return this;},_Init:function(aArg){D.Event._Init.call(this,aArg);this.__proto__=
D.EH;},_className:"Core::CursorEvent"};D.HJ={HN:B.wf,CA:B.wf,B_:0,BF:0,Di:B.wf,CB:
B.wf,BB:B.wf,Bs:0,Initialize:function(S,Fz,Iq,aOffset,Ir,Pd,Dl,DI,Ip){this.Bs=S;
this.BB=B.abf(Fz,Dl);this.CB=B.abf(Iq,Dl);this.Di=aOffset;this.BF=Ir;this.B_=Pd;
this.CA=DI;this.HN=Ip;return this;},_Init:function(aArg){D.Event._Init.call(this
,aArg);this.__proto__=D.HJ;},_className:"Core::DragEvent"};D.H6={Cj:function(AK,
aClip,aOffset,Az,aBlend){},GetClipping:function(){var A;var I=D.AN.GetClipping.call(
this);if(((this.F&0x80000)===0x80000)){var G8=AR;var H;for(H=this.AG;!!H&&!((H.F&
0x200)===0x200);H=H.AG)if(((H.F&0x1)===0x1))G8=B.wC(G8,H.GetClipping());I=B.wC(I
,G8);}return I;},AD:function(CJ,C5){var A;var JU=this.F;if((!!this.G&&((this.F&0x80001
)===0x80001))&&((C5&0x80000)===0x80000))this.G.Ac(this.GetClipping());D.AN.AD.call(
this,CJ,C5);if(((!!this.G&&((this.F&0x1)===0x1))&&((CJ&0x80000)===0x80000))&&!((
JU&0x80000)===0x80000))this.G.Ac(this.GetClipping());},P:function(C){var A;if(B.
aaY(C,this.N))return;var FG=[(A=this.N)[2]-A[0],A[3]-A[1]];var LI=[C[2]-C[0],C[3
]-C[1]];var HC=!B.aaX(FG,LI);var Bv=B.abe(C.slice(0,2),this.N.slice(0,2));if(!B.
aaX(Bv,AH)&&!HC){var H=this.AG;while(!!H&&!((H.F&0x200)===0x200)){if(((H.F&0x400
)===0x400)){var tmp=((H.F&0x100)===0x100);H.KF(Bv,tmp);}H=H.AG;}}if((HC&&(FG[0]>
0))&&(FG[1]>0)){var AT=this.N;var H=this.AG;while(!!H&&!((H.F&0x200)===0x200)){if(((
H.F&0x400)===0x400)){if(!!H.AW&&(H.AW.G6!==this))H.AW=null;if(!H.AW&&(H.BW!==0x14
))H.IE(AT,this);}H=H.AG;}}D.AN.P.call(this,C);if(!!this.G&&HC){this.F=this.F|0x1000;
if(!((this.G.F&0x2000)===0x2000)){this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CQ],
this);}}},_Init:function(aArg){D.AN._Init.call(this,aArg);this.__proto__=D.H6;this.
F=0x203;},_className:"Core::Outline"};D.BG={KH:null,Jg:null,Jf:null,DB:null,Ce:null
,Ar:0,Bs:0,Ax:0,B_:0,BF:0,Di:B.wf,CB:B.wf,BB:B.wf,Oi:8,L4:1,Down:false,Dg:false,
Cc:false,Lw:false,IJ:0,Cj:function(AK,aClip,aOffset,Az,aBlend){},Bo:function(AE){
var A;var Ai=(D.EH.isPrototypeOf(AE)?AE:null);var BI=(D.HJ.isPrototypeOf(AE)?AE:
null);var JO=this.Dg;var Da;var CZ;var IZ;var BJ;var GY;if(!Ai&&!BI)return null;
Da=(!!Ai&&Ai.Down)&&!Ai.BF;CZ=(!!Ai&&Ai.Down)&&(Ai.BF>0);IZ=(!!Ai&&Ai.Down)&&(Ai.
BF>this.IJ);BJ=!!Ai&&!Ai.Down;GY=!!BI;if(Da)this.IJ=((A=(Ai.Cc?0:50))&0x80)?A|0xFFFFFF00:
A&0xFF;if(Da){var G2=0;var D_;this.Ar=this.Ar|(1<<Ai.Bs);for(D_=this.Ar&4095;D_>
0;D_=D_>>1)if(!!(D_&1))G2=G2+1;if(G2===1)this.Ar=(this.Ar|16777216)|(4096<<Ai.Bs
);}if(BJ&&(this.Ar<16777216)){var Db=this.HL();var BD=null;if(!!Db){var LU=(!!this.
At?this.At:this.G);BD=Db.EI(B.abh(Hs,Ai.CA),Ai.Bs,Ai.B_,null,LU,0x0);}if(!!BD){var
K;for(K=0;K<10;K++)if(!!(this.Ar&(1<<K)))BD.B2.Bo(B._NewObject(D.EH,0).InitializeDown(
K,Ai.BB,Ai.B_,AH,true,Ai.CA));for(K=0;K<10;K++)if(!!(this.Ar&(1<<K)))BD.B2.Bo(B.
_NewObject(D.EH,0).InitializeUp(K,Ai.BB,Ai.BB,0,Ai.B_,AH,false,Ai.CA,Ai.CA));}}if(
BJ)this.Ar=(this.Ar&~(1<<Ai.Bs))|33554432;if(IZ&&(this.Ar<16777216))this.Ar=this.
Ar|67108864;if(BJ&&Ai.Cc)this.Ar=this.Ar|67108864;if(BJ&&!(this.Ar&16777215))this.
Ar=0;if(CZ&&(this.Ar>=67108864)){var Db=this.HL();if(!!Db)Db.Mf(null,null,this,0x0
);}if((CZ&&!!(this.Ar&16777216))&&!!(this.Ar&33554432)){CZ=false;BJ=true;}if(!!Ai&&
!(this.Ar&(4096<<Ai.Bs)))return this;if(!!BI&&!(this.Ar&(4096<<BI.Bs)))return this;
if(BJ&&!(this.Ar&16777216))return this;if(((Da||GY)||CZ)&&((this.Ar<16777216)||(
this.Ar>=33554432)))return this;if(BJ)this.Ar=this.Ar&3758100479;if(BJ&&!(this.Ar&
16777215))this.Ar=0;if(!!Ai){this.Down=Da||CZ;this.Dg=this.Kv(Ai.BB);this.CB=Ai.
CB;this.BB=Ai.BB;this.Di=AH;this.BF=Ai.BF;this.B_=Ai.B_;this.Cc=Ai.Cc;this.Bs=Ai.
Bs;this.Ax=Ai.Ax;if(Ai.Down&&!Ai.BF)JO=false;}if(!!BI){this.Down=true;this.Dg=this.
Kv(BI.BB);this.CB=BI.CB;this.BB=BI.BB;this.Di=BI.Di;this.BF=BI.BF;this.B_=BI.B_;
this.Bs=BI.Bs;this.Cc=false;this.Ax=BI.Ax;}var Lv=this.Down;if(!!BI)(A=this.KH)?
A[1].call(A[0],this):null;if((!!Ai&&this.Down)&&!this.BF)(A=this.Ce)?A[1].call(A[
0],this):null;if((this.Down&&this.Dg)&&!JO){this.Lw=true;(A=this.Jf)?A[1].call(A[
0],this):null;}if(this.Lw&&(((Lv&&!this.Dg)&&JO)||((!Lv&&this.Dg)&&JO))){this.Lw=
false;(A=this.Jg)?A[1].call(A[0],this):null;}if(!!Ai&&!Lv)(A=this.DB)?A[1].call(
A[0],this):null;return this;},EI:function(Av,S,Co,Ex,Ez,GT){var A;if(!!Ex&&(Ex!==
this))return null;if((Co<1)||(Co>this.L4))return null;if(this.Ar>=33554432)return null;
if((this.Ar>=16777216)&&!(this.Ar&(4096<<S)))return null;if(this.NA()){var I=B.lb(
Av,this.GetExtent());if(!((I[0]>=I[2])||(I[1]>=I[3]))){var Cq=B.aaI(Av);var Bv=AH;
if(Cq[0]<I[0])Bv=[I[0]-Cq[0],Bv[1]];if(Cq[0]>=I[2])Bv=[(I[2]-Cq[0])-1,Bv[1]];if(
Cq[1]<I[1])Bv=[Bv[0],I[1]-Cq[1]];if(Cq[1]>=I[3])Bv=[Bv[0],(I[3]-Cq[1])-1];return B.
_NewObject(D.I5,0).Initialize(this,Bv);}}else{var A2=B.abi(9,B.wf,null);var K;A2.
Set(0,B.aaI(Av));A2.Set(1,A2.Get(0));A2.Set(2,A2.Get(0));A2.Set(3,A2.Get(0));A2.
Set(4,A2.Get(0));A2.Set(1,[Av[0],A2.Get(1)[1]]);A2.Set(2,[A2.Get(2)[0],Av[1]]);A2.
Set(3,[Av[2],A2.Get(3)[1]]);A2.Set(4,[A2.Get(4)[0],Av[3]]);A2.Set(5,Av.slice(0,2
));A2.Set(6,[Av[2],Av[1]]);A2.Set(7,[Av[0],Av[3]]);A2.Set(8,Av.slice(2,4));for(K=
0;K<9;K=K+1)if(this.Kv(A2.Get(K)))return B._NewObject(D.I5,0).Initialize(this,B.
abe(A2.Get(K),A2.Get(0)));}return null;},KP:function(C){if(C<1)C=1;this.Oi=C;},H5:
function(C){if(C<1)C=1;this.L4=C;},Y:function(C){if(C)this.AD(0x100000,0x0);else
this.AD(0x0,0x100000);},_Init:function(aArg){D.D3._Init.call(this,aArg);this.__proto__=
D.BG;this.F=0x10011B;},_Mark:function(E){var A;D.D3._Mark.call(this,E);if((A=this.
KH)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Jg)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.Jf)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);
if((A=this.DB)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ce)&&((A=A[0
])._cycle!=E))A._Mark(A._cycle=E);},_className:"Core::SimpleTouchHandler"};D.CV={
KM:null,KI:null,KS:null,Ar:0,Md:0,CB:B.wf,LY:0,Jn:0,Angle:0,Down:false,Dg:false,
Cc:false,IJ:0,Cj:function(AK,aClip,aOffset,Az,aBlend){},Bo:function(AE){var A;var
Ai=(D.EH.isPrototypeOf(AE)?AE:null);var BI=(D.HJ.isPrototypeOf(AE)?AE:null);var Da;
var CZ;var IZ;var BJ;var GY;if(!Ai&&!BI)return null;Da=(!!Ai&&Ai.Down)&&!Ai.BF;CZ=(
!!Ai&&Ai.Down)&&(Ai.BF>0);IZ=(!!Ai&&Ai.Down)&&(Ai.BF>this.IJ);BJ=!!Ai&&!Ai.Down;
GY=!!BI;if(Da)this.IJ=((A=(Ai.Cc?0:50))&0x80)?A|0xFFFFFF00:A&0xFF;if(Da){var G2=
0;var D_;this.Ar=this.Ar|(1<<Ai.Bs);for(D_=this.Ar&4095;D_>0;D_=D_>>1)if(!!(D_&1
))G2=G2+1;if(G2===1)this.Ar=(this.Ar|16777216)|(4096<<Ai.Bs);}if(BJ&&(this.Ar<16777216
)){var Db=this.HL();var BD=null;if(!!Db){var LU=(!!this.At?this.At:this.G);BD=Db.
EI(B.abh(Hs,Ai.CA),Ai.Bs,Ai.B_,null,LU,0x0);}if(!!BD){var K;for(K=0;K<10;K++)if(
!!(this.Ar&(1<<K)))BD.B2.Bo(B._NewObject(D.EH,0).InitializeDown(K,Ai.BB,Ai.B_,AH
,true,Ai.CA));for(K=0;K<10;K++)if(!!(this.Ar&(1<<K)))BD.B2.Bo(B._NewObject(D.EH,
0).InitializeUp(K,Ai.BB,Ai.BB,0,Ai.B_,AH,false,Ai.CA,Ai.CA));}}if(BJ)this.Ar=(this.
Ar&~(1<<Ai.Bs))|33554432;if(IZ&&(this.Ar<16777216))this.Ar=this.Ar|67108864;if(BJ&&
Ai.Cc)this.Ar=this.Ar|67108864;if(BJ&&!(this.Ar&16777215))this.Ar=0;if(CZ&&(this.
Ar>=67108864)){var Db=this.HL();if(!!Db)Db.Mf(null,null,this,0x0);}if((CZ&&!!(this.
Ar&16777216))&&!!(this.Ar&33554432)){CZ=false;BJ=true;}if(!!Ai&&!(this.Ar&(4096<<
Ai.Bs)))return this;if(!!BI&&!(this.Ar&(4096<<BI.Bs)))return this;if(BJ&&!(this.
Ar&16777216))return this;if(((Da||GY)||CZ)&&((this.Ar<16777216)||(this.Ar>=33554432
)))return this;if(BJ)this.Ar=this.Ar&3758100479;if(BJ&&!(this.Ar&16777215))this.
Ar=0;if(((!Da&&!BJ)&&!GY)&&!CZ)return this;var AX=AH;var Is=this.Angle;var JV=this.
Md;var PC=JV;var Aj;if((Da||BJ)||CZ){this.Dg=B.wa(this.N,Ai.BB);this.Cc=Ai.Cc;this.
CB=Ai.CB;this.Down=Da||CZ;AX=B.abe(Ai.BB,B.aaI(this.N));}if(GY){this.Dg=B.wa(this.
N,BI.BB);this.CB=BI.CB;this.Down=true;AX=B.abe(BI.BB,B.aaI(this.N));}var I=Math.
sqrt((AX[0]*AX[0])+(AX[1]*AX[1]));if(I>=8){JV=I|0;Is=(Math.acos(AX[0]/I)*B.rE)|0;
if(AX[1]>0)Is=360-Is;}Aj=Is-this.Angle;if(Aj>180)Aj=Aj-360;if(Aj<-180)Aj=Aj+360;
this.Angle=Is;this.LY=Aj;this.Jn=this.Jn+Aj;this.Md=JV;if(Da){this.LY=0;this.Jn=
0;(A=this.KS)?A[1].call(A[0],this):null;}if(!!Aj||(JV!==PC))(A=this.KM)?A[1].call(
A[0],this):null;if(BJ)(A=this.KI)?A[1].call(A[0],this):null;return this;},EI:function(
Av,S,Co,Ex,Ez,GT){var A;if(!!Ex&&(Ex!==this))return null;if(this.Ar>=33554432)return null;
if((this.Ar>=16777216)&&!(this.Ar&(4096<<S)))return null;var I=B.lb(Av,this.N);if(
!((I[0]>=I[2])||(I[1]>=I[3]))){var Cq=B.aaI(Av);var Bv=AH;if(Cq[0]<I[0])Bv=[I[0]-
Cq[0],Bv[1]];if(Cq[0]>=I[2])Bv=[(I[2]-Cq[0])-1,Bv[1]];if(Cq[1]<I[1])Bv=[Bv[0],I[
1]-Cq[1]];if(Cq[1]>=I[3])Bv=[Bv[0],(I[3]-Cq[1])-1];return B._NewObject(D.I5,0).Initialize(
this,Bv);}return null;},_Init:function(aArg){D.AN._Init.call(this,aArg);this.__proto__=
D.CV;this.F=0x10011B;},_Mark:function(E){var A;D.AN._Mark.call(this,E);if((A=this.
KM)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.KI)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.KS)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);
},_className:"Core::RotateTouchHandler"};D.Fl={AG:null,DB:null,Ce:null,G7:0,Ax:0
,Me:0,BN:148,Bn:0,AM:0,Bw:true,Down:false,KT:false,Ck:function(aArg){var A;var G0=(
D.Q.isPrototypeOf(A=this.L)?A:null);if(!G0)throw new Error(In);this.AG=G0.JQ;G0.
JQ=this;},Bo:function(AE){var A;if(!!AE&&AE.NC(this.BN)){this.Down=AE.Down;this.
Bn=AE.Bn;this.AM=AE.AM;this.Ax=AE.Ax;if(AE.Down){this.Me=this.G7;this.KT=this.G7>
0;if(!this.KT)(A=this.Ce)?A[1].call(A[0],this):null;this.G7=this.G7+1;return true;
}if(!AE.Down){this.KT=this.G7>1;this.Me=this.G7-1;this.G7=0;(A=this.DB)?A[1].call(
A[0],this):null;return true;}}return false;},_Init:function(aArg){this.__proto__=
D.Fl;this.Ck(aArg);B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:
function(){},_Mark:function(E){var A;if((A=this.AG)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.DB)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ce)&&((A=
A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=
E);},L:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"};D.I5={B2:
null,HI:0,Di:B.wf,Initialize:function(M,aOffset){this.B2=M;this.Di=aOffset;this.
HI=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:function(
aArg){this.__proto__=D.I5;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;}
,_ReInit:function(){},_Mark:function(E){var A;if((A=this.B2)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:
null,_className:"Core::CursorHit"};D.Ja={G6:null,Ct:B.wg,AT:B.wg,isEmpty:false,_Init:
function(aArg){this.__proto__=D.Ja;B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.G6)&&(A._cycle!=
E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null
,_cycle:0,_observers:null,_className:"Core::LayoutContext"};D.Jb={IU:B.wf,IT:B.wf
,IS:B.wf,IR:B.wf,_Init:function(aArg){D.Ja._Init.call(this,aArg);this.__proto__=
D.Jb;},_className:"Core::LayoutQuadContext"};D.E2={resource:null,CS:function(){this.
resource=null;},Ck:function(aArg){this.resource=aArg;},_Init:function(aArg){this.
__proto__=D.E2;this.Ck(aArg);B.h7++;},_Done:function(){this.CS();this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.L)&&(A._cycle
!=E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:null,_className:"Core::Resource"
};D.Timer={Ft:null,timer:null,Ax:0,Period:1000,Ha:0,Bw:false,CS:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},JX:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=B.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},Fq:function(C){if(C<0)C=0;if(C===this.Period)return;
this.Period=C;if(this.Bw)this.JX(this.Ha,C);},Fm:function(C){if(C<0)C=0;if(C===this.
Ha)return;this.Ha=C;if(this.Bw)this.JX(C,this.Period);},Y:function(C){if(C===this.
Bw)return;this.Bw=C;if(C)this.JX(this.Ha,this.Period);else this.JX(0,0);this.Ax=
this.I$();},I$:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.v$
)|0;return ticksCount;},Trigger:function(){var A;this.Ax=this.I$();if(!this.Period
)this.Y(false);(A=this.Ft)?A[1].call(A[0],this):null;},_Init:function(aArg){this.
__proto__=D.Timer;B.h7++;},_Done:function(){this.CS();this.__proto__=null;B.h7--;
},_ReInit:function(){},_Mark:function(E){var A;if((A=this.Ft)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null
,_cycle:0,_observers:null,_className:"Core::Timer"};D.Ax={Jo:0,KE:0,Ks:0,HH:0,Je:
0,Mj:0,Px:function(){var result=0;{var d=new Date;result=Math.trunc(d.getTime()/
1000-(d.getTimezoneOffset()*60));}return result;},N0:function(C){var A;C+=62162035200;
if(C<0)C=0;var HF=Math.trunc(C/86400)|0;var MG=(((HF>=0)?HF:HF-146096)/146097)|0;
var Iz=HF-(MG*146097);var J9=((((Iz-((Iz/1460)|0))+((Iz/36524)|0))-((Iz/146096)|
0))/365)|0;var BK=J9+(MG*400);var MF=Iz-(((365*J9)+((J9/4)|0))-((J9/100)|0));var
LH=(((5*MF)+2)/153)|0;var d=(MF-((((153*LH)+2)/5)|0))+1;var CP=LH+((LH<10)?3:-9);
var AP=Math.trunc(C/3600)%24|0;var K=Math.trunc(C/60)%60|0;var DO=C%60|0;this.Mj=
BK+((CP<=2)?1:0);this.NV(CP);this.Fn(d);this.NR(AP+((AP<0)?24:0));this.NU(K+((K<
0)?60:0));this.NY(DO+((DO<0)?60:0));},NL:function(){return B._NewObject(D.Ax,0).
Initialize(this.Px());},Gn:function(){var A;var d=this.HH;var CP=this.Je+((this.
Je>2)?-2:10);var BK=this.Mj-((this.Je<=2)?1:0);var Ah=(BK/100)|0;BK%=100;d+=((((((((
26*CP)-2)/10)|0)+BK)+((BK/4)|0))+((Ah/4)|0))-(2*Ah));if(d>=0)return d%7;else return(
7-(-d%7))%7;},NY:function(C){if(C<0)C=0;if(C>59)C=59;this.Jo=C;},NU:function(C){
if(C<0)C=0;if(C>59)C=59;this.KE=C;},NR:function(C){if(C<0)C=0;if(C>23)C=23;this.
Ks=C;},Fn:function(C){if(C<1)C=1;if(C>31)C=31;this.HH=C;},NV:function(C){if(C<1)
C=1;if(C>12)C=12;this.Je=C;},Initialize:function(Pf){this.N0(Pf);return this;},_Init:
function(aArg){this.__proto__=D.Ax;B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.L)&&(A._cycle!=
E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:null,_className:"Core::Time"
};D.Mc={KJ:null,W:null,MV:function(As){var A;(A=this.KJ)?A[1].call(A[0],this):null;
},D2:function(C){if(B.aaZ(this.W,C))return;if(!!this.W)B.z$([this,this.MV],this.
W,0);this.W=C;if(!!this.W)B.zX([this,this.MV],this.W,0);},_Init:function(aArg){this.
__proto__=D.Mc;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(
){},_Mark:function(E){var A;if((A=this.KJ)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=
E);if((A=this.W)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle
!=E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:null,_className:"Core::PropertyObserver"
};D.QT={QU:0x1,P0:0x2,Qa:0x4,QQ:0x8,Bw:0x10,E3:0x20,Qb:0x40,Qm:0x80,P_:0x100,Qg:
0x200,P9:0x400,Qw:0x800,Jr:0x1000,QS:0x2000,Qt:0x4000,Qu:0x8000,P7:0x10000,Qs:0x20000
,QG:0x40000,P8:0x80000,Qv:0x100000,P6:0x200000};D.BW={Qx:0x1,Qy:0x2,PW:0x4,PX:0x8
,PY:0x10,PV:0x20};D.Qd={Qn:0,QN:1,P3:2,Qh:3,QA:4,QO:5,QP:6,P4:7,P5:8,Qj:9,Qi:10,
QC:11,QB:12};D.KeyCode={NoKey:0,Ok:1,Exit:2,Menu:3,Up:4,Down:5,Left:6,Right:7,PageUp:
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
346};D.Qz={QY:0x1,QV:0x2,QW:0x4,QX:0x8,Qk:0x10,Qc:0x20};
D._Init=function(){D.D3.__proto__=D.B2;D.AN.__proto__=D.B2;D.Q.__proto__=D.AN;D.Root.
__proto__=D.Q;D.KeyEvent.__proto__=D.Event;D.Kh.__proto__=D.Event;D.EH.__proto__=
D.Event;D.HJ.__proto__=D.Event;D.H6.__proto__=D.AN;D.BG.__proto__=D.D3;D.CV.__proto__=
D.AN;D.Jb.__proto__=D.Ja;};D._ReInit=function(){};D.B$=function(E){};return D;})(
);

/* Embedded Wizard */