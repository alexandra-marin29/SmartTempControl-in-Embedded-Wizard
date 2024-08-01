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
var AH=[0,0];var AS=[0,0,0,0];var Cg="The view does not belong to this group";var
EM=[800,480];var DU="No view to restack";var Dw="View is not in this group";var DV=
"No view to remove";var El="No view to add";var FO="View already in a group";var
Iz="Recursive invalidate during active update cycle.";var GW=[-8,-8,9,9];var HO=[
0,0,1,1];var IA="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";
D.Ce={AG:null,At:null,G:null,AZ:null,F:0x103,DQ:0,Ca:0x14,IR:function(Ap,JN){},FJ:
function(C){if(this.DQ===C)return;this.DQ=C;if(!!this.G){var Fw=this.AG;var Aj=0;
while(!!Fw&&(C>Fw.DQ)){Fw=Fw.AG;Aj=Aj+1;}Fw=this.At;while(!!Fw&&(C<Fw.DQ)){Fw=Fw.
At;Aj=Aj-1;}if(!!Aj)this.G.OJ(this,Aj);}},HI:function(C){var A;var Aj=C^this.Ca;
if(!Aj)return;this.Ca=C;if(!!this.AZ&&!((this.F&0x400)===0x400)){this.G.F=this.G.
F|0x5000;B.pe([A=this.G,A.C1],this);this.G.Ac([0,0,(A=this.G.O)[2]-A[0],A[3]-A[1
]]);}if(!!this.AZ&&((this.F&0x400)===0x400)){this.AZ.Hf.F=this.AZ.Hf.F|0x1000;this.
G.F=this.G.F|0x4000;B.pe([A=this.G,A.C1],this);}},H_:function(){var Ar=this.G;while(
!!Ar){var Dm=(D.Root.isPrototypeOf(Ar)?Ar:null);if(!!Dm)return Dm;Ar=Ar.G;}return null;
},Cw:function(AK,aClip,aOffset,Az,aBlend){},GetClipping:function(){return this.GetExtent(
);},Bp:function(AE){return null;},EZ:function(Av,V,CD,EO,EQ,G4){return null;},Jd:
function(Av){return Av;},Je:function(Ap,Df){return AH;},KW:function(aOffset,JM){
},GetExtent:function(){return AS;},AD:function(CU,De){var A;if(((this.F&0x200)===
0x200))CU=CU&~0x400;var L1=(this.F&~De)|CU;var DY=L1^this.F;this.F=L1;if(!!this.
G&&!!(DY&0x14)){var M5=((this.F&0x14)===0x14);if(M5&&!this.G.Dq)this.G.Hy(this);
if(!M5&&(this.G.Dq===this))this.G.Hy(this.G.Mg(this,0x14));}if(!!this.G&&!!(DY&0x403
))this.G.Ac(this.GetClipping());if(((!!this.AZ&&!!this.G)&&((L1&0x400)===0x400))&&((
DY&0x1)===0x1)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.C1
],this);}if(!!this.G&&((DY&0x400)===0x400)){this.AZ=null;this.F=this.F|0x800;this.
G.F=this.G.F|0x4000;B.pe([A=this.G,A.C1],this);}if(((((DY&0x100000)===0x100000)&&((
De&0x100000)===0x100000))&&((this.F&0x10)===0x10))&&!((this.F&0x200080)===0x200080
))this.AD(0x0,0x10);if(((((DY&0x100000)===0x100000)&&((CU&0x100000)===0x100000))&&
!((this.F&0x10)===0x10))&&(!((this.F&0x200000)===0x200000)||((!((this.F&0x80)===
0x80)&&!!this.G)&&((this.G.F&0x10)===0x10))))this.AD(0x10,0x0);if(((((DY&0x200000
)===0x200000)&&((De&0x200000)===0x200000))&&!((this.F&0x10)===0x10))&&((this.F&0x100000
)===0x100000))this.AD(0x10,0x0);if((((((DY&0x200000)===0x200000)&&((CU&0x200000)===
0x200000))&&((this.F&0x100010)===0x100010))&&!((this.F&0x80)===0x80))&&((!!this.
G&&!((this.G.F&0x10)===0x10))||((((this.F&0x10000)===0x10000)&&!!this.G)&&(null!==
this))))this.AD(0x0,0x10);},_Init:function(aArg){this.__proto__=D.Ce;B.h7++;},_Done:
function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var
A;if((A=this.AG)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.At)&&(A._cycle!=E
))A._Mark(A._cycle=E);if((A=this.G)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.
AZ)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.K)&&(A._cycle!=E))A._Mark(A._cycle=
E);},K:null,_cycle:0,_observers:null,_className:"Core::View"};D.Eh={BE:B.wf,Cc:B.
wf,BD:B.wf,Cb:B.wf,IR:function(Ap,JN){var Aq=B._NewObject(D.Jq,0);this.AZ=null;Aq.
CH=this.GetExtent();Aq.AV=Ap;Aq.Hf=JN;Aq.I4=this.Cb;Aq.I5=this.BD;Aq.I6=this.Cc;
Aq.I7=this.BE;this.AZ=Aq;},Je:function(Ap,Df){var A;var A5=this.Ca;var Aq=(D.Jq.
isPrototypeOf(A=this.AZ)?A:null);var Aa=Aq.CH[0];var Ab=Aq.CH[1];var Ad=Aq.CH[2];
var X=Aq.CH[3];var CG=[Ap[2]-Ap[0],Ap[3]-Ap[1]];var AW=Ad-Aa;var AR=X-Ab;if(!Df){
var DF=[(A=Aq.AV)[2]-A[0],A[3]-A[1]];Aa=Aa-Aq.AV[0];Ab=Ab-Aq.AV[1];if(DF[0]!==CG[
0]){var Bi=((A5&0x4)===0x4);var Bj=((A5&0x8)===0x8);var Er=((A5&0x1)===0x1);if(!
Bi&&(Er||!Bj))Aa=((Aa*CG[0])/DF[0])|0;if(!Bj&&(Er||!Bi)){Ad=Ad-Aq.AV[0];Ad=((Ad*
CG[0])/DF[0])|0;Ad=Ad-CG[0];}else Ad=Ad-Aq.AV[2];Aa=Aa+Ap[0];Ad=Ad+Ap[2];if(!Er){
if(Bi&&!Bj)Ad=Aa+AW;else if(!Bi&&Bj)Aa=Ad-AW;else{Aa=Aa+((((Ad-Aa)-AW)/2)|0);Ad=
Aa+AW;}}}else{Ad=Ad-Aq.AV[2];Aa=Aa+Ap[0];Ad=Ad+Ap[2];}if(DF[1]!==CG[1]){var Bk=((
A5&0x10)===0x10);var Bh=((A5&0x20)===0x20);var Es=((A5&0x2)===0x2);if(!Bk&&(Es||
!Bh))Ab=((Ab*CG[1])/DF[1])|0;if(!Bh&&(Es||!Bk)){X=X-Aq.AV[1];X=((X*CG[1])/DF[1])|
0;X=X-CG[1];}else X=X-Aq.AV[3];Ab=Ab+Ap[1];X=X+Ap[3];if(!Es){if(Bk&&!Bh)X=Ab+AR;
else if(!Bk&&Bh)Ab=X-AR;else{Ab=Ab+((((X-Ab)-AR)/2)|0);X=Ab+AR;}}}else{X=X-Aq.AV[
3];Ab=Ab+Ap[1];X=X+Ap[3];}}else{switch(Df){case 3:{Aa=Ap[0];Ad=Aa+AW;}break;case
4:{Ad=Ap[2];Aa=Ad-AW;}break;case 1:{Ab=Ap[1];X=Ab+AR;}break;case 2:{X=Ap[3];Ab=X-
AR;}break;default:;}if((Df===3)||(Df===4)){var Bk=((A5&0x10)===0x10);var Bh=((A5&
0x20)===0x20);var Es=((A5&0x2)===0x2);if(Es){Ab=Ap[1];X=Ap[3];}else if(Bk&&!Bh){
Ab=Ap[1];X=Ab+AR;}else if(Bh&&!Bk){X=Ap[3];Ab=X-AR;}else{Ab=Ap[1]+((((Ap[3]-Ap[1
])-AR)/2)|0);X=Ab+AR;}}if((Df===1)||(Df===2)){var Bi=((A5&0x4)===0x4);var Bj=((A5&
0x8)===0x8);var Er=((A5&0x1)===0x1);if(Er){Aa=Ap[0];Ad=Ap[2];}else if(Bi&&!Bj){Aa=
Ap[0];Ad=Aa+AW;}else if(Bj&&!Bi){Ad=Ap[2];Aa=Ad-AW;}else{Aa=Ap[0]+((((Ap[2]-Ap[0
])-AW)/2)|0);Ad=Aa+AW;}}}Aq.isEmpty=(Aa>=Ad)||(Ab>=X);AW=(Ad-Aa)-1;AR=(X-Ab)-1;var
Fs=Aq.CH[0];var Ft=Aq.CH[1];var ET=(Aq.CH[2]-Fs)-1;var ES=(Aq.CH[3]-Ft)-1;if(!ET
)ET=1;if(!ES)ES=1;if(((this.F&0x100)===0x100)){this.Cb=[Aa+((((Aq.I4[0]-Fs)*AW)/
ET)|0),Ab+((((Aq.I4[1]-Ft)*AR)/ES)|0)];this.BD=[Aa+((((Aq.I5[0]-Fs)*AW)/ET)|0),Ab+((((
Aq.I5[1]-Ft)*AR)/ES)|0)];this.Cc=[Aa+((((Aq.I6[0]-Fs)*AW)/ET)|0),Ab+((((Aq.I6[1]-
Ft)*AR)/ES)|0)];this.BE=[Aa+((((Aq.I7[0]-Fs)*AW)/ET)|0),Ab+((((Aq.I7[1]-Ft)*AR)/
ES)|0)];}else{this.BP([Aa+((((Aq.I4[0]-Fs)*AW)/ET)|0),Ab+((((Aq.I4[1]-Ft)*AR)/ES
)|0)]);this.BQ([Aa+((((Aq.I5[0]-Fs)*AW)/ET)|0),Ab+((((Aq.I5[1]-Ft)*AR)/ES)|0)]);
this.BR([Aa+((((Aq.I6[0]-Fs)*AW)/ET)|0),Ab+((((Aq.I6[1]-Ft)*AR)/ES)|0)]);this.BS([
Aa+((((Aq.I7[0]-Fs)*AW)/ET)|0),Ab+((((Aq.I7[1]-Ft)*AR)/ES)|0)]);this.AZ=Aq;}return[
AW+1,AR+1];},KW:function(aOffset,JM){if(JM){this.Cb=B.abf(this.Cb,aOffset);this.
BD=B.abf(this.BD,aOffset);this.Cc=B.abf(this.Cc,aOffset);this.BE=B.abf(this.BE,aOffset
);}else{this.BP(B.abf(this.Cb,aOffset));this.BQ(B.abf(this.BD,aOffset));this.BR(
B.abf(this.Cc,aOffset));this.BS(B.abf(this.BE,aOffset));}},GetExtent:function(){
if(!!this.AZ&&this.AZ.isEmpty)return AS;var Aa=this.Cb[0];var Ab=this.Cb[1];var Ad=
this.Cc[0];var X=this.Cc[1];if((((this.BE[0]!==Aa)||(this.BD[1]!==Ab))||(this.BD[
0]!==Ad))||(this.BE[1]!==X)){if(this.BD[0]<Aa)Aa=this.BD[0];if(this.Cc[0]<Aa)Aa=
this.Cc[0];if(this.BE[0]<Aa)Aa=this.BE[0];if(this.BD[1]<Ab)Ab=this.BD[1];if(this.
Cc[1]<Ab)Ab=this.Cc[1];if(this.BE[1]<Ab)Ab=this.BE[1];if(this.Cb[0]>Ad)Ad=this.Cb[
0];if(this.BD[0]>Ad)Ad=this.BD[0];if(this.BE[0]>Ad)Ad=this.BE[0];if(this.Cb[1]>X
)X=this.Cb[1];if(this.BD[1]>X)X=this.BD[1];if(this.BE[1]>X)X=this.BE[1];}else{var
tmp;if(Ad<Aa){tmp=Aa;Aa=Ad;Ad=tmp;}if(X<Ab){tmp=Ab;Ab=X;X=tmp;}}return[Aa,Ab,Ad+
1,X+1];},BS:function(C){var A;if(B.aaX(C,this.BE))return;if(!!this.G&&((this.F&0x1
)===0x1))this.G.Ac(this.GetClipping());this.AZ=null;this.BE=C;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.GetClipping());if((!!this.G&&((this.F&0x400)===0x400
))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;
B.pe([A=this.G,A.C1],this);}},BR:function(C){var A;if(B.aaX(C,this.Cc))return;if(
!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping());this.AZ=null;this.Cc=
C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping());if((!!this.G&&((
this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.
G.F=this.G.F|0x4000;B.pe([A=this.G,A.C1],this);}},BQ:function(C){var A;if(B.aaX(
C,this.BD))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping()
);this.AZ=null;this.BD=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping(
));if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.C1],this);}},BP:function(
C){var A;if(B.aaX(C,this.Cb))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(
this.GetClipping());this.AZ=null;this.Cb=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ac(this.GetClipping());if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000
)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.C1],this
);}},KK:function(G2){var A3=B.abi(4,B.wf,null);var L=0;var A8=3;var LT=false;var
LU=false;A3.Set(0,this.Cb);A3.Set(1,this.BD);A3.Set(2,this.Cc);A3.Set(3,this.BE);
while(L<4){var NC=A3.Get(L)[0];var Km=A3.Get(L)[1];var Q5=A3.Get(A8)[0];var Mc=A3.
Get(A8)[1];if(((Km>G2[1])!==(Mc>G2[1]))||((Km<G2[1])!==(Mc<G2[1]))){var ND=((((Q5-
NC)*(G2[1]-Km))/(Mc-Km))|0)+NC;if(G2[0]>ND)LT=!LT;if(G2[0]<ND)LU=!LU;}A8=L;L=L+1;
}return LT||LU;},N1:function(){return((((this.Cb[0]===this.BE[0])&&(this.BD[0]===
this.Cc[0]))&&(this.Cb[1]===this.BD[1]))&&(this.Cc[1]===this.BE[1]))||((((this.Cb[
0]===this.BD[0])&&(this.Cc[0]===this.BE[0]))&&(this.Cb[1]===this.BE[1]))&&(this.
BD[1]===this.Cc[1]));},_Init:function(aArg){D.Ce._Init.call(this,aArg);this.__proto__=
D.Eh;},_className:"Core::QuadView"};D.AP={O:B.wg,IR:function(Ap,JN){var Aq=B._NewObject(
D.Jp,0);Aq.CH=this.O;Aq.AV=Ap;Aq.Hf=JN;this.AZ=Aq;},Je:function(Ap,Df){var A;var
A5=this.Ca;var Aq=this.AZ;var Aa=Aq.CH[0];var Ab=Aq.CH[1];var Ad=Aq.CH[2];var X=
Aq.CH[3];var CG=[Ap[2]-Ap[0],Ap[3]-Ap[1]];var AW=Ad-Aa;var AR=X-Ab;if(!Df){var DF=[(
A=Aq.AV)[2]-A[0],A[3]-A[1]];Aa=Aa-Aq.AV[0];Ab=Ab-Aq.AV[1];if(DF[0]!==CG[0]){var Bi=((
A5&0x4)===0x4);var Bj=((A5&0x8)===0x8);var Er=((A5&0x1)===0x1);if(!Bi&&(Er||!Bj)
)Aa=((Aa*CG[0])/DF[0])|0;if(!Bj&&(Er||!Bi)){Ad=Ad-Aq.AV[0];Ad=((Ad*CG[0])/DF[0])|
0;Ad=Ad-CG[0];}else Ad=Ad-Aq.AV[2];Aa=Aa+Ap[0];Ad=Ad+Ap[2];if(!Er){if(Bi&&!Bj)Ad=
Aa+AW;else if(!Bi&&Bj)Aa=Ad-AW;else{Aa=Aa+((((Ad-Aa)-AW)/2)|0);Ad=Aa+AW;}}}else{
Ad=Ad-Aq.AV[2];Aa=Aa+Ap[0];Ad=Ad+Ap[2];}if(DF[1]!==CG[1]){var Bk=((A5&0x10)===0x10
);var Bh=((A5&0x20)===0x20);var Es=((A5&0x2)===0x2);if(!Bk&&(Es||!Bh))Ab=((Ab*CG[
1])/DF[1])|0;if(!Bh&&(Es||!Bk)){X=X-Aq.AV[1];X=((X*CG[1])/DF[1])|0;X=X-CG[1];}else
X=X-Aq.AV[3];Ab=Ab+Ap[1];X=X+Ap[3];if(!Es){if(Bk&&!Bh)X=Ab+AR;else if(!Bk&&Bh)Ab=
X-AR;else{Ab=Ab+((((X-Ab)-AR)/2)|0);X=Ab+AR;}}}else{X=X-Aq.AV[3];Ab=Ab+Ap[1];X=X+
Ap[3];}}else{switch(Df){case 3:{Aa=Ap[0];Ad=Aa+AW;}break;case 4:{Ad=Ap[2];Aa=Ad-
AW;}break;case 1:{Ab=Ap[1];X=Ab+AR;}break;case 2:{X=Ap[3];Ab=X-AR;}break;default:;
}if((Df===3)||(Df===4)){var Bk=((A5&0x10)===0x10);var Bh=((A5&0x20)===0x20);var Es=((
A5&0x2)===0x2);if(Es){Ab=Ap[1];X=Ap[3];}else if(Bk&&!Bh){Ab=Ap[1];X=Ab+AR;}else if(
Bh&&!Bk){X=Ap[3];Ab=X-AR;}else{Ab=Ap[1]+((((Ap[3]-Ap[1])-AR)/2)|0);X=Ab+AR;}}if((
Df===1)||(Df===2)){var Bi=((A5&0x4)===0x4);var Bj=((A5&0x8)===0x8);var Er=((A5&0x1
)===0x1);if(Er){Aa=Ap[0];Ad=Ap[2];}else if(Bi&&!Bj){Aa=Ap[0];Ad=Aa+AW;}else if(Bj&&
!Bi){Ad=Ap[2];Aa=Ad-AW;}else{Aa=Ap[0]+((((Ap[2]-Ap[0])-AW)/2)|0);Ad=Aa+AW;}}}Aq.
isEmpty=(Aa>=Ad)||(Ab>=X);if(((this.F&0x100)===0x100))this.O=[Aa,Ab,Ad,X];else{this.
N([Aa,Ab,Ad,X]);this.AZ=Aq;}return[Ad-Aa,X-Ab];},KW:function(aOffset,JM){if(JM)this.
O=B.abh(this.O,aOffset);else this.N(B.abh(this.O,aOffset));},GetExtent:function(
){return this.O;},N:function(C){var A;if(B.aaY(C,this.O))return;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.GetClipping());this.AZ=null;this.O=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ac(this.GetClipping());if((!!this.G&&((this.F&0x400)===
0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;
B.pe([A=this.G,A.C1],this);}},_Init:function(aArg){D.Ce._Init.call(this,aArg);this.
__proto__=D.AP;},_className:"Core::RectView"};D.P={C9:null,Ci:null,J6:null,Dq:null
,Cj:255,IN:0,IQ:0,IP:0,IO:0,Cx:function(aArg){this.Bd();},Cw:function(AK,aClip,aOffset
,Az,aBlend){var A;Az=((Az+1)*this.Cj)>>8;aBlend=aBlend&&((this.F&0x2)===0x2);this.
QI(AK,aClip,B.abf(aOffset,this.O.slice(0,2)),Az,aBlend);},GetClipping:function(){
var A;var I=this.O;I=[].concat(I[0]-this.IO,I.slice(1,4));I=B.abP(I,I[1]-this.IQ
);I=B.abN(I,I[2]+this.IP);I=[].concat(I.slice(0,3),I[3]+this.IN);if(((this.F&0x80000
)===0x80000)){var Hh=AS;var H;for(H=this.C9;!!H;H=H.AG)if(((H.F&0x1)===0x1))Hh=B.
wC(Hh,H.GetClipping());I=B.wC(I,B.abh(Hh,this.O.slice(0,2)));}return I;},EZ:function(
Av,V,CD,EO,EQ,G4){var A;var H=this.Ci;var G_=null;var W=AS;var CX=null;if(((A=B.
lb(Av,this.O))[0]>=A[2])||(A[1]>=A[3]))return null;Av=B.abg(Av,this.O.slice(0,2)
);if(!!EQ){H=EQ;while(!!H&&(H.G!==this))H=H.G;}while(!!H){if(((H.F&0x400)===0x400
)&&!CX){CX=H.At;while(!!CX&&!((CX.F&0x200)===0x200))CX=CX.At;if(!!CX)W=B.lb(Av,CX.
GetExtent());else W=AS;}if(CX===H){CX=null;W=AS;}if((!!EO&&!!(D.P.isPrototypeOf(
H)?H:null))||((((((H.F&0x8)===0x8)&&((H.F&0x10)===0x10))&&!((H.F&0x40000)===0x40000
))&&!((H.F&0x20000)===0x20000))&&(!((H.F&0x10000)===0x10000)||(null===H)))){var CH=
H.GetExtent();var JZ=EO;var G8=null;if(JZ===H)JZ=null;if(((H.F&0x400)===0x400)){
if(!(((A=B.lb(CH,W))[0]>=A[2])||(A[1]>=A[3])))G8=H.EZ(W,V,CD,JZ,EQ,G4);}else if(
!(((A=B.lb(CH,Av))[0]>=A[2])||(A[1]>=A[3]))||(EO===H))G8=H.EZ(Av,V,CD,JZ,EQ,G4);
H=H.At;if(!!G8){if(!G_||((G8.H7<G_.H7)&&(G8.H7>=0)))G_=G8;if(!G8.H7)H=null;}}else
H=H.At;EQ=null;}return G_;},Jd:function(Av){var A;var U;var H=this.C9;var G6=AS;
var I3=true;var result=(Av=U=B.abg(Av,this.O.slice(0,2)),U);while(!!H){if(((H.F&
0x200)===0x200)){var HZ=(D.Ii.isPrototypeOf(H)?H:null);G6=B.lb(Av,HZ.O);I3=((HZ.
F&0x1)===0x1);}if(((H.F&0x1)===0x1)){if(((H.F&0x400)===0x400)){if(I3){var W=B.lb(
H.GetClipping(),G6);if(!((W[0]>=W[2])||(W[1]>=W[3])))result=B.wC(result,H.Jd(W));
}}else{var W=B.lb(H.GetClipping(),Av);if(!((W[0]>=W[2])||(W[1]>=W[3])))result=B.
wC(result,H.Jd(W));}}H=H.AG;}return B.lb(B.abh(result,this.O.slice(0,2)),this.O);
},AD:function(CU,De){var A;var J_=this.F;if((!!this.G&&((this.F&0x80001)===0x80001
))&&((De&0x80000)===0x80000))this.G.Ac(this.GetClipping());D.AP.AD.call(this,CU,
De);if(((!!this.G&&((this.F&0x1)===0x1))&&((CU&0x80000)===0x80000))&&!((J_&0x80000
)===0x80000))this.G.Ac(this.GetClipping());var DY=this.F^J_;if(!!this.Dq&&((DY&0x40
)===0x40)){if(((this.F&0x40)===0x40))this.Dq.AD(0x40,0x0);else this.Dq.AD(0x0,0x40
);}if(((DY&0x10)===0x10)){var H;for(H=this.C9;!!H;H=H.AG)if((((H.F&0x300000)===0x300000
)&&!((H.F&0x80)===0x80))&&(!((H.F&0x10000)===0x10000)||(null===H)))H.AD(CU&0x10,
De&0x10);}if(!!DY){this.F=this.F|0x8000;B.pe([this,this.Kl],this);}},N:function(
C){var A;if(B.aaY(C,this.O))return;var FT=[(A=this.O)[2]-A[0],A[3]-A[1]];var L0=[
C[2]-C[0],C[3]-C[1]];var H1=!B.aaX(FT,L0);D.AP.N.call(this,C);if((H1&&(FT[0]>0))&&(
FT[1]>0)){var AV=[].concat(AH,FT);var H=this.C9;while(!!H){if((!H.AZ&&(H.Ca!==0x14
))&&!((H.F&0x400)===0x400))H.IR(AV,null);H=H.AG;}}if(H1){this.F=this.F|0x5000;B.
pe([this,this.Kl],this);}},Nj:function(AE){var M7=(D.KeyEvent.isPrototypeOf(AE)?
AE:null);var DZ=this.J6;if(!M7)return null;while(!!DZ&&(!DZ.BA||!DZ.Bp(M7)))DZ=DZ.
AG;return DZ;},QI:function(AK,aClip,aOffset,Az,aBlend){var A;var H=this.C9;var G6=
AS;var I3=true;this.NT(AK,aClip,aOffset,Az,aBlend);while(!!H){if(((H.F&0x200)===
0x200)){var HZ=(D.Ii.isPrototypeOf(H)?H:null);I3=((HZ.F&0x1)===0x1);G6=aClip;if(
!((HZ.F&0x80000)===0x80000))G6=B.lb(G6,B.abh(HZ.O,aOffset));}if(((H.F&0x1)===0x1
)){if(((H.F&0x400)===0x400)){if(I3){var W=B.lb(B.abh(H.GetClipping(),aOffset),G6
);if(!((W[0]>=W[2])||(W[1]>=W[3])))H.Cw(AK,W,aOffset,Az,aBlend);}}else{var W=B.lb(
B.abh(H.GetClipping(),aOffset),aClip);if(!((W[0]>=W[2])||(W[1]>=W[3])))H.Cw(AK,W
,aOffset,Az,aBlend);}}H=H.AG;}this.NW(AK,aClip,aOffset,Az,aBlend);},QX:function(
){var A;var LR=((this.F&0x1000)===0x1000);var Fu=[0,0,(A=this.O)[2]-A[0],A[3]-A[
1]];var EU=false;var HU=AS;var LP=AS;var H=this.Ci;var CX=null;while(!!H){if(((H.
F&0x800)===0x800)){EU=true;H.F=H.F&~0x800;}if(EU&&((H.F&0x200)===0x200))EU=false;
H=H.At;}EU=false;H=this.C9;if(LR){this.F=this.F&~0x1000;LR=!((Fu[0]>=Fu[2])||(Fu[
1]>=Fu[3]));}this.F=this.F|0x2000;while(!!H){if(((H.F&0x400)===0x400)){if(!!H.AZ&&(
H.AZ.Hf!==CX))H.AZ=null;if((!H.AZ&&EU)&&(H.Ca!==0x14))H.IR(LP,CX);}if(!!H.AZ){if(
LR&&!((H.F&0x400)===0x400))H.Je(Fu,0);if(EU&&((H.F&0x400)===0x400))H.Je(LP,0);}if(((
H.F&0x200)===0x200)){EU=((H.F&0x1000)===0x1000);CX=(D.Ii.isPrototypeOf(H)?H:null
);if(EU){H.F=H.F&~0x1000;HU=CX.O;LP=HU;EU=!((HU[0]>=HU[2])||(HU[1]>=HU[3]));}if(
EU)this.Ac(CX.O);}H=H.AG;}this.F=this.F&~0x2000;this.JH([Fu[2]-Fu[0],Fu[3]-Fu[1]
]);},C1:function(An){B.pe([this,this.Kl],this);},Kl:function(An){var A;var Q3=((
this.F&0x1000)===0x1000);if(((this.F&0x4000)===0x4000)){this.F=this.F&~0x4000;this.
QX();}if(((this.F&0x8000)===0x8000)||Q3){this.F=this.F&~0x8000;this.Fk(this.F);}
},Hy:function(C){var A;if(!!C&&(C.G!==this))throw new Error(Cg);if(!!C&&!((C.F&0x14
)===0x14))C=null;if(!!C&&((C.F&0x10000)===0x10000))C=null;if(C===this.Dq)return;
if(!!this.Dq)this.Dq.AD(0x0,0x60);this.Dq=C;if(!!C){if(((this.F&0x40)===0x40))C.
AD(0x60,0x0);else C.AD(0x20,0x0);}},S:function(C){if(C)this.AD(0x100000,0x0);else
this.AD(0x0,0x100000);},A$:function(C){var A;if(C>255)C=255;if(C<0)C=0;if(C===this.
Cj)return;this.Cj=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping(
));},JL:function(Q4){this.A$(Q4);},Q:function(C){if(C)this.AD(0x1,0x0);else this.
AD(0x0,0x1);},ExtendClipping:function(GZ,G0,G1,GY){var A;var IH=this.O;var CV=IH;
if(GZ<0)GZ=0;if(GZ>255)GZ=255;if(G0<0)G0=0;if(G0>255)G0=255;if(G1<0)G1=0;if(G1>255
)G1=255;if(GY<0)GY=0;if(GY>255)GY=255;CV=[].concat(CV[0]-(Math.max(GZ,this.IO)&0xFF
),CV.slice(1,4));CV=B.abN(CV,CV[2]+(Math.max(G0,this.IP)&0xFF));CV=B.abP(CV,CV[1
]-(Math.max(G1,this.IQ)&0xFF));CV=[].concat(CV.slice(0,3),CV[3]+(Math.max(GY,this.
IN)&0xFF));if(GZ!==this.IO){if((!!this.G&&((this.F&0x1)===0x1))&&!((this.F&0x80000
)===0x80000)){var I=CV;I=B.abN(I,IH[0]);this.G.Ac(I);}this.IO=GZ&0xFF;}if(G0!==this.
IP){if((!!this.G&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var I=CV;
I=[].concat(IH[2],I.slice(1,4));this.G.Ac(I);}this.IP=G0&0xFF;}if(G1!==this.IQ){
if((!!this.G&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var I=CV;I=[
].concat(I.slice(0,3),IH[1]);this.G.Ac(I);}this.IQ=G1&0xFF;}if(GY!==this.IN){if((
!!this.G&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var I=CV;I=B.abP(
I,IH[3]);this.G.Ac(I);}this.IN=GY&0xFF;}},NW:function(AK,aClip,aOffset,Az,aBlend
){},NT:function(AK,aClip,aOffset,Az,aBlend){},GetMaximalSize:function(){return EM;
},GetMinimalSize:function(){return AH;},DispatchEvent:function(AE){var A;var H=this.
Dq;var Ar=(D.P.isPrototypeOf(H)?H:null);var Bf=null;if(!!H&&((((H.F&0x10000)===0x10000
)||((H.F&0x40000)===0x40000))||((H.F&0x20000)===0x20000))){H=null;Ar=null;}if(!!
Ar)Bf=Ar.DispatchEvent(AE);else if(!!H)Bf=H.Bp(AE);if(!Bf)Bf=this.Bp(AE);if(!Bf)
Bf=this.Nj(AE);return Bf;},BroadcastEventAtPosition:function(AE,MP,aFilter){var A;
var H=this.Ci;var Bf=null;while(!!H&&!Bf){if((!aFilter||((A=aFilter)&&((H.F&A)===
A)))&&B.wa(H.GetExtent(),MP)){var Ar=(D.P.isPrototypeOf(H)?H:null);if(!!Ar)Bf=Ar.
BroadcastEventAtPosition(AE,B.abe(MP,Ar.O.slice(0,2)),aFilter);else Bf=H.Bp(AE);
}H=H.At;}if(!Bf)Bf=this.Bp(AE);return Bf;},BroadcastEvent:function(AE,aFilter){var
A;var H=this.Ci;var Bf=null;while(!!H&&!Bf){if(!aFilter||((A=aFilter)&&((H.F&A)===
A))){var Ar=(D.P.isPrototypeOf(H)?H:null);if(!!Ar)Bf=Ar.BroadcastEvent(AE,aFilter
);else Bf=H.Bp(AE);}H=H.At;}if(!Bf)Bf=this.Bp(AE);if(!Bf)Bf=this.Nj(AE);return Bf;
},JH:function(aSize){},Fk:function(Dg){},Bd:function(){this.F=this.F|0x8000;B.pe([
this,this.Kl],this);},Ac:function(Av){var A;var Ar=this;while(!!Ar&&!((Av[0]>=Av[
2])||(Av[1]>=Av[3]))){if(!Ar.G&&(Ar!==this)){Ar.Ac(Av);return;}if(!((Ar.F&0x1)===
0x1))return;var I=Ar.O;Av=B.abh(Av,I.slice(0,2));if(!((Ar.F&0x80000)===0x80000)){
I=[].concat(I[0]-Ar.IO,I.slice(1,4));I=B.abP(I,I[1]-Ar.IQ);I=B.abN(I,I[2]+Ar.IP);
I=[].concat(I.slice(0,3),I[3]+Ar.IN);Av=B.lb(Av,I);}Ar=Ar.G;}},Mg:function(M,aFilter
){var A;if(!M||(M.G!==this))return null;var FS=M.AG;var FV=M.At;var IY=0x10000;if(((
aFilter&0x10000)===0x10000))IY=0x0;while(!!FS||!!FV){if((!!FS&&(!aFilter||((A=aFilter
)&&((FS.F&A)===A))))&&(!IY||!((A=IY)&&((FS.F&A)===A))))return FS;if((!!FV&&(!aFilter||((
A=aFilter)&&((FV.F&A)===A))))&&(!IY||!((A=IY)&&((FV.F&A)===A))))return FV;if(!!FS
)FS=FS.AG;if(!!FV)FV=FV.At;}return null;},OJ:function(M,Dy){var A;if(!M)throw new
Error(DU);if(M.G!==this)throw new Error(Dw);var Fn=M;var Bl=M;var Hi=M.DQ;while(((
Dy>0)&&!!Fn.AG)&&(Fn.AG.DQ<=Hi)){Fn=Fn.AG;Dy=Dy-1;}while(((Dy<0)&&!!Bl.At)&&(Bl.
At.DQ>=Hi)){Bl=Bl.At;Dy=Dy+1;}if((Fn===M)&&(Bl===M))return;if(((M.F&0x401)===0x401
)){if(!!M.At&&!!M.AZ)M.At.F=M.At.F|0x800;M.F=M.F|0x800;this.F=this.F|0x4000;B.pe([
this,this.C1],this);}if(((M.F&0x200)===0x200)){if(!!M.At)M.At.F=M.At.F|0x800;M.F=
M.F|0x800;this.F=this.F|0x4000;B.pe([this,this.C1],this);}if(!!M.At)M.At.AG=M.AG;
if(!!M.AG)M.AG.At=M.At;if(this.C9===M)this.C9=M.AG;if(this.Ci===M)this.Ci=M.At;if(
Fn!==M){M.AG=Fn.AG;M.At=Fn;Fn.AG=M;if(!!M.AG)M.AG.At=M;}if(Bl!==M){M.AG=Bl;M.At=
Bl.At;Bl.At=M;if(!!M.At)M.At.AG=M;}if(!M.AG)this.Ci=M;if(!M.At)this.C9=M;if(((M.
F&0x1)===0x1))this.Ac(M.GetClipping());},HK:function(M){var A;if(!M)throw new Error(
DV);if(M.G!==this)throw new Error(Dw);if((((M.F&0x401)===0x401)&&!!M.At)&&!!M.AZ
){M.At.F=M.At.F|0x800;this.F=this.F|0x4000;B.pe([this,this.C1],this);}if(((M.F&0x200
)===0x200)){if(!!M.At)M.At.F=M.At.F|0x800;this.F=this.F|0x4000;B.pe([this,this.C1
],this);}M.AZ=null;if(this.Dq===M)this.Hy(this.Mg(M,0x14));if(!!M.At)M.At.AG=M.AG;
if(!!M.AG)M.AG.At=M.At;if(this.C9===M)this.C9=M.AG;if(this.Ci===M)this.Ci=M.At;M.
G=null;M.AG=null;M.At=null;if((!((M.F&0x10)===0x10)&&((M.F&0x100000)===0x100000)
)&&!((this.F&0x80)===0x80))M.AD(0x10,0x0);if(((M.F&0x1)===0x1))this.Ac(M.GetClipping(
));},T:function(M,Dy){var A;if(!M)throw new Error(El);if(!!M.G)throw new Error(FO
);var Bl=null;var Hi=M.DQ;if(((Dy<0)&&!!this.Ci)&&(this.Ci.DQ>=Hi)){Bl=this.Ci;Dy=
Dy+1;}while((((Dy<0)&&!!Bl)&&!!Bl.At)&&(Bl.At.DQ>=Hi)){Bl=Bl.At;Dy=Dy+1;}if((!Bl&&
!!this.Ci)&&(this.Ci.DQ>Hi))Bl=this.Ci;while((!!Bl&&!!Bl.At)&&(Bl.At.DQ>Hi))Bl=Bl.
At;if(!Bl){M.G=this;M.At=this.Ci;if(!!this.Ci)this.Ci.AG=M;if(!this.C9)this.C9=M;
this.Ci=M;}else{M.G=this;M.At=Bl.At;M.AG=Bl;Bl.At=M;if(!!M.At)M.At.AG=M;else this.
C9=M;}if(((M.F&0x1)===0x1))this.Ac(M.GetClipping());if(((M.F&0x80)===0x80)&&(B.aam(
).NZ()===M))M.AD(0x10,0x0);else if(!((this.F&0x10)===0x10)&&((M.F&0x200010)===0x200010
))M.AD(0x0,0x10);else if((((this.F&0x10)===0x10)&&!((M.F&0x10)===0x10))&&((M.F&0x100000
)===0x100000))M.AD(0x10,0x0);if(((!this.Dq&&((M.F&0x4)===0x4))&&((M.F&0x10)===0x10
))&&!((M.F&0x10000)===0x10000))this.Hy(M);if(((M.F&0x401)===0x401)){M.F=M.F|0x800;
this.F=this.F|0x4000;B.pe([this,this.C1],this);}if(((M.F&0x200)===0x200)){M.F=M.
F|0x800;this.F=this.F|0x4000;B.pe([this,this.C1],this);}},Ht:function(){return this.
Cj;},_Init:function(aArg){D.AP._Init.call(this,aArg);this.__proto__=D.P;this.F=0x10001F;
this.Cx(aArg);},_Mark:function(E){var A;D.AP._Mark.call(this,E);if((A=this.C9)&&(
A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ci)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.J6)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Dq)&&(A._cycle!=
E))A._Mark(A._cycle=E);},_className:"Core::Group"};D.Root={CZ:null,A2:B.abi(10,null
,null),HR:null,Fr:null,Jc:0,A9:0,B5:B.abi(10,0,null),JY:B.abi(10,B.wg,null),DD:B.
abi(10,0,null),ER:B.abi(10,B.wf,null),HT:B.abi(10,0,null),Fq:B.abi(10,B.wf,null)
,DC:B.abi(10,B.wf,null),CW:B.abi(10,B.wf,null),Em:B.abi(10,B.wf,null),AF:0,J3:0,
J2:0,Cn:B.abi(4,0,null),Bt:B.abi(4,B.wg,null),Bs:0,IU:0,HW:0,LS:true,Cx:function(
aArg){if(!!!this.K){var obj=this;B.abD(obj);}},H_:function(){return this;},Cw:function(
AK,aClip,aOffset,Az,aBlend){var fullScreenUpdate=false;fullScreenUpdate=B.m7;if(
!fullScreenUpdate)AK.KD(aClip,B.abh(B.abh(aClip,aOffset),this.O.slice(0,2)),0x00000000
,0x00000000,0x00000000,0x00000000,false);D.P.Cw.call(this,AK,aClip,aOffset,Az,aBlend
);},AD:function(CU,De){var A;D.P.AD.call(this,CU,De);if(!this.G&&(((CU&0x1)===0x1
)||((De&0x1)===0x1)))this.Ac([0,0,(A=this.O)[2]-A[0],A[3]-A[1]]);if(!this.G&&(((
CU&0x2)===0x2)||((De&0x2)===0x2)))this.Ac([0,0,(A=this.O)[2]-A[0],A[3]-A[1]]);},
Hy:function(C){if((C!==null)||!C)D.P.Hy.call(this,C);},A$:function(C){var A;var Dk=
this.Cj;D.P.A$.call(this,C);if(((Dk!==this.Cj)&&!this.G)&&((this.F&0x1)===0x1))this.
Ac([0,0,(A=this.O)[2]-A[0],A[3]-A[1]]);},DispatchEvent:function(AE){if(!!AE){AE.
Ic=!!this.A9;if(!!this.A9)AE.Ax=this.A9;}var Bf;Bf=D.P.DispatchEvent.call(this,AE
);this.A9=0;return Bf;},BroadcastEvent:function(AE,aFilter){if(!!AE){AE.Ic=!!this.
A9;if(!!this.A9)AE.Ax=this.A9;}var Bf=D.P.BroadcastEvent.call(this,AE,aFilter);this.
A9=0;return Bf;},Ac:function(Av){var A;if(this.Jc>0)throw new Error(Iz);var fullScreenUpdate=
false;fullScreenUpdate=B.m7;if(fullScreenUpdate)Av=[0,0,(A=this.O)[2]-A[0],A[3]-
A[1]];if(!!this.G){D.P.Ac.call(this,Av);return;}Av=B.lb(B.abh(Av,this.O.slice(0,
2)),this.O);if((Av[0]>=Av[2])||(Av[1]>=Av[3]))return;var L;for(L=0;L<this.Bs;L=L+
1)if(!(((A=B.lb(this.Bt.Get(L),Av))[0]>=A[2])||(A[1]>=A[3]))){this.Bt.Set(L,B.wC(
this.Bt.Get(L),Av));this.Cn.Set(L,B.aaH(this.Bt.Get(L)));return;}if(this.Bs<3){this.
Bt.Set(this.Bs,Av);this.Cn.Set(this.Bs,B.aaH(Av));this.Bs=this.Bs+1;return;}var A8;
var CY;var IT=0;var IV=0;var MV=2147483647;this.Bt.Set(this.Bs,Av);this.Cn.Set(this.
Bs,B.aaH(Av));for(A8=0;A8<=this.Bs;A8=A8+1)for(CY=A8+1;CY<=this.Bs;CY=CY+1){var Kk=
B.aaH(B.wC(this.Bt.Get(A8),this.Bt.Get(CY)));var Ni=((Kk<<8)/(this.Cn.Get(A8)+this.
Cn.Get(CY)))|0;if(Ni<MV){MV=Ni;IT=A8;IV=CY;}}this.Bt.Set(IT,B.wC(this.Bt.Get(IT)
,this.Bt.Get(IV)));this.Cn.Set(IT,B.aaH(this.Bt.Get(IT)));if(IV!==this.Bs){this.
Bt.Set(IV,this.Bt.Get(this.Bs));this.Cn.Set(IV,this.Cn.Get(this.Bs));}},QE:function(
){var B6=B._NewObject(D.H8,0);B6.Ic=!!this.A9;if(!!this.A9)B6.Ax=this.A9;return B6;
},G7:function(){var B6=B._NewObject(D.EY,0);B6.Ic=!!this.A9;if(!!this.A9)B6.Ax=this.
A9;return B6;},HS:function(){var B6=B._NewObject(D.Ky,0);B6.Ic=!!this.A9;if(!!this.
A9)B6.Ax=this.A9;return B6;},QF:function(An){var L;var G_=false;for(L=0;L<10;L=L+
1)if(!!this.A2.Get(L)){var A0=this.CW.Get(L);var Ar=this.A2.Get(L).G;while(!!Ar&&(
Ar!==this)){A0=B.abe(A0,Ar.O.slice(0,2));Ar=Ar.G;}if(!Ar&&(this.A2.Get(L)!==this
)){var tmp=this.A2.Get(L);this.AF=L;this.A2.Set(L,null);tmp.Bp(this.G7().InitializeUp(
L,this.Fq.Get(L),this.ER.Get(L),this.DD.Get(L),this.B5.Get(L)+1,this.DC.Get(L),false
,this.CW.Get(L),this.Em.Get(L)));this.BroadcastEvent(this.HS().InitializeUp(L,this.
B5.Get(L)+1,false,tmp,this.CW.Get(L)),0x18);}else{this.DD.Set(L,(this.Fr.Ax-this.
HT.Get(L))|0);if(this.DD.Get(L)<10)this.DD.Set(L,10);this.AF=L;this.A2.Get(L).Bp(
this.G7().InitializeHold(L,A0,this.ER.Get(L),this.DD.Get(L),this.B5.Get(L)+1,this.
DC.Get(L),this.CW.Get(L),this.Em.Get(L)));G_=true;}}if(!G_)this.Fr.S(false);},GetFPS:
function(){var ticksCount=0;var M6=0;ticksCount=((new Date).getTime()-B.v$)|0;if(
!!this.J3&&(ticksCount>this.J3))M6=((this.J2*1000)/((ticksCount-this.J3)|0))|0;this.
J2=0;this.J3=ticksCount;return M6;},Update:function(){var A;if(!this.HR)this.HR=
B._NewObject(B.Graphics.Canvas,0);this.HR.Mo([(A=this.O)[2]-A[0],A[3]-A[1]]);this.
HR.Update();return this.UpdateGE20(this.HR);},UpdateGE20:function(AK){if(!this.BeginUpdate(
))return AS;var EW=this.UpdateCanvas(AK,AH);this.EndUpdate();return EW;},EndUpdate:
function(){if(this.Bs>0){this.J2=this.J2+1;this.Bs=0;}},UpdateCanvas:function(AK
,aOffset){var A;var EW=AS;var Qx=[].concat(aOffset,B.abf(AK.FrameSize,aOffset));
var L;var A8=this.Bs;this.Jc=this.Jc+1;AK.G$=this;for(L=0;(L<A8)&&(L<4);L=L+1)if(
this.Cn.Get(L)>0){this.Cw(AK,B.abg(this.Bt.Get(L),aOffset),[-aOffset[0],-aOffset[
1]],255,true);EW=B.wC(EW,B.lb(Qx,this.Bt.Get(L)));}else A8=A8+1;AK.G$=null;this.
Jc=this.Jc-1;if(!((EW[0]>=EW[2])||(EW[1]>=EW[3])))return B.abg(EW,aOffset);else return EW;
},GetUpdateRegion:function(JO){var L;var A8=this.Bs;if(JO<0)return AS;for(L=0;(L<
A8)&&(L<4);L=L+1)if(!this.Cn.Get(L)){A8=A8+1;JO=JO+1;}else if(L===JO)return this.
Bt.Get(L);return AS;},BeginUpdate:function(){var A;var L;if(!!this.Bs&&!B.aaY(this.
Bt.Get(0),[0,0,(A=this.O)[2]-A[0],A[3]-A[1]])){var Ny=B.abi(3,B.wg,null);var Nx=
this.Bs;for(L=0;L<Nx;L++)Ny.Set(L,this.Bt.Get(L));for(L=0;L<Nx;L++){var Nk=B.abh(
Ny.Get(L),this.O.slice(0,2));var Nl=this.Jd(Nk);if(!B.aaY(Nk,Nl))this.Ac(B.abg(Nl
,this.O.slice(0,2)));}}var A8;var CY;for(A8=0;A8<(this.Bs-1);A8++)if(this.Cn.Get(
A8)>0)for(CY=A8+1;CY<this.Bs;CY++)if(this.Cn.Get(CY)>0){var Kk=B.aaH(B.wC(this.Bt.
Get(A8),this.Bt.Get(CY)));if(((Kk-this.Cn.Get(A8))-this.Cn.Get(CY))<0){this.Bt.Set(
A8,B.wC(this.Bt.Get(A8),this.Bt.Get(CY)));this.Cn.Set(A8,Kk);this.Cn.Set(CY,0);}
}for(L=this.Bs-1;L>=0;L--)if(!this.Cn.Get(L))this.Bs=this.Bs-1;return this.Bs;},
DoesNeedUpdate:function(){if(this.Bs>0)return true;return false;},Initialize:function(
aSize){this.N([].concat(AH,aSize));if(this.LS)this.F=this.F|0x60;else this.F=this.
F|0x20;this.Ac(this.O);return this;},SetRootFocus:function(LB){if(LB===this.LS)return false;
this.LS=LB;if(!LB)this.AD(0x0,0x40);else this.AD(0x40,0x0);return true;},SetUserInputTimestamp:
function(Qu){this.A9=Qu;},DriveKeyboardHitting:function(Bx,IB,DW){var A;var L9=!
!this.CZ;if(!!this.CZ&&((!DW||(this.IU!==Bx))||(this.HW!==IB))){var B6=null;var H=(
D.Ce.isPrototypeOf(A=this.CZ)?A:null);var DZ=(D.FE.isPrototypeOf(A=this.CZ)?A:null
);if(!!this.IU)B6=B._NewObject(D.KeyEvent,0).Initialize(this.IU,false);if(this.HW
!==0x00)B6=B._NewObject(D.KeyEvent,0).Initialize2(this.HW,false);if(!!DZ)DZ.Bp(B6
);else if(!!H)H.Bp(B6);this.IU=0;this.HW=0x00;this.CZ=null;}if(!!this.CZ){var B6=
null;var H=(D.Ce.isPrototypeOf(A=this.CZ)?A:null);var DZ=(D.FE.isPrototypeOf(A=this.
CZ)?A:null);if(!!Bx)B6=B._NewObject(D.KeyEvent,0).Initialize(Bx,true);if(this.HW
!==0x00)B6=B._NewObject(D.KeyEvent,0).Initialize2(IB,true);if(!!DZ)DZ.Bp(B6);else
if(!!H)H.Bp(B6);}if(!this.CZ&&DW){if(!!Bx)this.CZ=this.DispatchEvent(B._NewObject(
D.KeyEvent,0).Initialize(Bx,true));if(IB!==0x00)this.CZ=this.DispatchEvent(B._NewObject(
D.KeyEvent,0).Initialize2(IB,true));if(!(D.FE.isPrototypeOf(A=this.CZ)?A:null)&&
!(D.Ce.isPrototypeOf(A=this.CZ)?A:null))this.CZ=null;this.IU=Bx;this.HW=IB;L9=L9||
!!this.CZ;}this.A9=0;return L9;},DriveCursorMovement:function(BU){return this.DriveMultiTouchMovement(
this.AF,BU);},DriveMultiTouchMovement:function(V,BU){if((V<0)||(V>9)){this.A9=0;
return false;}var Bz=B.abe(BU,this.CW.Get(V));this.CW.Set(V,BU);if(!this.A2.Get(
V)||B.aaX(Bz,AH)){this.A9=0;return false;}var A0=BU;var Ar=this.A2.Get(V).G;while(
!!Ar&&(Ar!==this)){A0=B.abe(A0,Ar.O.slice(0,2));Ar=Ar.G;}if(!Ar&&(this.A2.Get(V)
!==this)){var tmp=this.A2.Get(V);this.AF=V;this.A2.Set(V,null);tmp.Bp(this.G7().
InitializeUp(V,this.Fq.Get(V),this.ER.Get(V),this.DD.Get(V),this.B5.Get(V)+1,this.
DC.Get(V),false,this.CW.Get(V),this.Em.Get(V)));this.BroadcastEvent(this.HS().InitializeUp(
V,this.B5.Get(V)+1,false,tmp,BU),0x18);}else{this.Fq.Set(V,A0);this.AF=V;this.A2.
Get(V).Bp(this.QE().Initialize(V,A0,this.ER.Get(V),Bz,this.DD.Get(V),this.B5.Get(
V)+1,this.DC.Get(V),BU,this.Em.Get(V)));}this.A9=0;return true;},DriveCursorHitting:
function(DW,V,BU){return this.DriveMultiTouchHitting(DW,V,BU);},DriveMultiTouchHitting:
function(DW,V,BU){if((V<0)||(V>9)){this.A9=0;return false;}var ticksCount=this.A9;
if(!ticksCount)ticksCount=((new Date).getTime()-B.v$)|0;var Q2=this.A9;this.DriveMultiTouchMovement(
V,BU);BU=this.CW.Get(V);this.A9=Q2;if(DW)this.Em.Set(V,BU);if(DW&&!this.A2.Get(V
)){var BK;var A0=BU;if(B.wa(this.JY.Get(V),BU)&&((ticksCount-this.HT.Get(V))<=250
))this.B5.Set(V,this.B5.Get(V)+1);else this.B5.Set(V,0);this.JY.Set(V,B.abh(GW,BU
));this.HT.Set(V,ticksCount);BK=this.EZ(B.abh(GW,BU),V,this.B5.Get(V)+1,null,null
,0x0);if(!!BK){this.BroadcastEvent(this.HS().InitializeDown(V,this.B5.Get(V)+1,false
,BK.Ce,BU),0x18);this.A2.Set(V,BK.Ce);this.DC.Set(V,BK.Dt);}else{this.A2.Set(V,null
);this.DC.Set(V,AH);this.A9=0;return false;}var Ar=BK.Ce.G;while(!!Ar&&(Ar!==this
)){A0=B.abe(A0,Ar.O.slice(0,2));Ar=Ar.G;}this.ER.Set(V,A0);this.Fq.Set(V,A0);this.
DD.Set(V,0);this.Fr.S(true);this.AF=V;this.A2.Get(V).Bp(this.G7().InitializeDown(
V,A0,this.B5.Get(V)+1,this.DC.Get(V),false,BU));this.A9=0;return true;}if(!DW&&!
!this.A2.Get(V)){var A0=BU;var Ar=this.A2.Get(V).G;while(!!Ar&&(Ar!==this)){A0=B.
abe(A0,Ar.O.slice(0,2));Ar=Ar.G;}if(!Ar)A0=this.Fq.Get(V);this.AF=V;var tmp=this.
A2.Get(V);this.A2.Set(V,null);tmp.Bp(this.G7().InitializeUp(V,A0,this.ER.Get(V),
this.DD.Get(V),this.B5.Get(V)+1,this.DC.Get(V),false,BU,this.Em.Get(V)));this.BroadcastEvent(
this.HS().InitializeUp(V,this.B5.Get(V)+1,false,tmp,BU),0x18);this.A9=0;return true;
}this.A9=0;return false;},Mx:function(EP,MN,EQ,G4){if(EP===this)EP=null;if(!this.
A2.Get(this.AF))return;var BK;BK=this.EZ(B.abh(GW,this.CW.Get(this.AF)),this.AF,
1,EP,EQ,G4);if(!!BK&&(this.A2.Get(this.AF)!==BK.Ce))this.Md(BK.Ce,BK.Dt);if(!BK&&(
this.A2.Get(this.AF)!==MN))this.Md(MN,AH);},Md:function(EP,Dx){if(!this.A2.Get(this.
AF)||(this.A2.Get(this.AF)===EP))return;var tmp=this.A2.Get(this.AF);this.A2.Set(
this.AF,null);tmp.Bp(this.G7().InitializeUp(this.AF,this.Fq.Get(this.AF),this.ER.
Get(this.AF),this.DD.Get(this.AF),this.B5.Get(this.AF)+1,this.DC.Get(this.AF),true
,this.CW.Get(this.AF),this.Em.Get(this.AF)));this.BroadcastEvent(this.HS().InitializeUp(
this.AF,this.B5.Get(this.AF)+1,true,tmp,this.CW.Get(this.AF)),0x18);var A0=this.
CW.Get(this.AF);var Ar=null;if(!!EP)Ar=EP.G;while(!!Ar&&(Ar!==this)){A0=B.abe(A0
,Ar.O.slice(0,2));Ar=Ar.G;}if(!Ar&&(EP!==this)){this.A2.Set(this.AF,null);return;
}this.BroadcastEvent(this.HS().InitializeDown(this.AF,this.B5.Get(this.AF)+1,true
,EP,this.CW.Get(this.AF)),0x18);var ticksCount=0;ticksCount=((new Date).getTime(
)-B.v$)|0;this.A2.Set(this.AF,EP);this.DC.Set(this.AF,Dx);this.ER.Set(this.AF,A0
);this.Fq.Set(this.AF,A0);this.B5.Set(this.AF,0);this.DD.Set(this.AF,0);this.HT.
Set(this.AF,ticksCount);this.Em.Set(this.AF,this.CW.Get(this.AF));this.A2.Get(this.
AF).Bp(this.G7().InitializeDown(this.AF,A0,this.B5.Get(this.AF)+1,this.DC.Get(this.
AF),true,this.Em.Get(this.AF)));},NZ:function(){return null;},_Init:function(aArg
){D.P._Init.call(this,aArg);D.Timer._Init.call(this.Fr={K:this},0);(this.A2=[]).
__proto__=D.Root.A2;(this.B5=[]).__proto__=D.Root.B5;(this.JY=[]).__proto__=D.Root.
JY;(this.DD=[]).__proto__=D.Root.DD;(this.ER=[]).__proto__=D.Root.ER;(this.HT=[]
).__proto__=D.Root.HT;(this.Fq=[]).__proto__=D.Root.Fq;(this.DC=[]).__proto__=D.
Root.DC;(this.CW=[]).__proto__=D.Root.CW;(this.Em=[]).__proto__=D.Root.Em;(this.
Cn=[]).__proto__=D.Root.Cn;(this.Bt=[]).__proto__=D.Root.Bt;this.__proto__=D.Root;
this.F=0x10007F;this.Fr.FI(10);this.Fr.FK=[this,this.QF];this.Cx(aArg);},_Done:function(
){this.__proto__=D.P;this.Fr._Done();D.P._Done.call(this);},_ReInit:function(){D.
P._ReInit.call(this);this.Fr._ReInit();},_Mark:function(E){var A;D.P._Mark.call(
this,E);if((A=this.CZ)&&(A._cycle!=E))A._Mark(A._cycle=E);B.aa6(this.A2,E);if((A=
this.HR)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Fr)._cycle!=E)A._Mark(A._cycle=
E);},_className:"Core::Root"};D.Event={Ax:0,Ic:false,Cx:function(aArg){this.Ax=this.
Jo();},Jo:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.v$)|0;return ticksCount;
},_Init:function(aArg){this.__proto__=D.Event;this.Cx(aArg);B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.K)&&(A._cycle!=E))A._Mark(A._cycle=E);},K:null,_cycle:0,_observers:null,_className:
"Core::Event"};D.KeyEvent={Bo:0,AN:0,Down:false,Initialize2:function(Bx,DW){this.
Bo=0;this.AN=Bx;this.Down=DW;if((Bx>=0x30)&&(Bx<=0x39))this.Bo=(10+Bx)-48;if((Bx>=
0x41)&&(Bx<=0x5A))this.Bo=(105+Bx)-65;if((Bx>=0x61)&&(Bx<=0x7A))this.Bo=(105+Bx)-
97;if(Bx===0x20)this.Bo=131;if(!this.Bo)switch(Bx){case 0x2B:this.Bo=132;break;case
0x2D:this.Bo=133;break;case 0x2A:this.Bo=134;break;case 0x2F:this.Bo=135;break;case
0x3D:this.Bo=136;break;case 0x2E:this.Bo=137;break;case 0x2C:this.Bo=138;break;case
0x3A:this.Bo=139;break;case 0x3B:this.Bo=140;break;default:;}return this;},Initialize:
function(Bx,DW){this.Bo=Bx;this.Down=DW;this.AN=0x00;var LJ=Bx-10;var LI=Bx-105;
if((LJ>=0)&&(LJ<=9))this.AN=(48+LJ)&0xFFFF;if((LI>=0)&&(LI<=25))this.AN=(65+LI)&
0xFFFF;if(Bx===131)this.AN=0x20;if(this.AN===0x00)switch(Bx){case 132:this.AN=0x2B;
break;case 133:this.AN=0x2D;break;case 134:this.AN=0x2A;break;case 135:this.AN=0x2F;
break;case 136:this.AN=0x3D;break;case 137:this.AN=0x2E;break;case 138:this.AN=0x2C;
break;case 139:this.AN=0x3A;break;case 140:this.AN=0x3B;break;default:;}return this;
},N3:function(ML){switch(ML){case 141:return((this.AN>=0x41)&&(this.AN<=0x5A))||((
this.AN>=0x61)&&(this.AN<=0x7A));case 142:return(((this.AN>=0x41)&&(this.AN<=0x5A
))||((this.AN>=0x61)&&(this.AN<=0x7A)))||((this.AN>=0x30)&&(this.AN<=0x39));case
143:return(this.AN>=0x30)&&(this.AN<=0x39);case 144:return(((this.AN>=0x41)&&(this.
AN<=0x46))||((this.AN>=0x61)&&(this.AN<=0x66)))||((this.AN>=0x30)&&(this.AN<=0x39
));case 145:return this.AN!==0x00;case 146:return(this.AN===0x00)&&!!this.Bo;case
147:return(((this.Bo===6)||(this.Bo===7))||(this.Bo===4))||(this.Bo===5);case 148:
return(this.AN!==0x00)||!!this.Bo;default:;}return ML===this.Bo;},_Init:function(
aArg){D.Event._Init.call(this,aArg);this.__proto__=D.KeyEvent;},_className:"Core::KeyEvent"
};D.Ky={Ld:null,CO:B.wf,Ck:0,Bu:0,Down:false,Co:false,InitializeUp:function(V,CD
,GX,LE,DX){this.Down=false;this.Bu=V;this.Ck=CD;this.CO=DX;this.Ld=LE;this.Co=GX;
return this;},InitializeDown:function(V,CD,GX,LE,DX){this.Down=true;this.Bu=V;this.
Ck=CD;this.CO=DX;this.Ld=LE;this.Co=GX;return this;},_Init:function(aArg){D.Event.
_Init.call(this,aArg);this.__proto__=D.Ky;},_Mark:function(E){var A;D.Event._Mark.
call(this,E);if((A=this.Ld)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Core::CursorGrabEvent"
};D.EY={Ia:B.wf,CO:B.wf,Ck:0,BO:0,CP:B.wf,BJ:B.wf,Bu:0,Down:false,Co:false,InitializeHold:
function(V,FP,ID,IE,CD,Dx,DX,IC){this.Down=true;this.Bu=V;this.BJ=B.abf(FP,Dx);this.
CP=B.abf(ID,Dx);this.BO=IE;this.Ck=CD;this.CO=DX;this.Ia=IC;return this;},InitializeUp:
function(V,FP,ID,IE,CD,Dx,GX,DX,IC){this.Down=false;this.Bu=V;this.BJ=B.abf(FP,Dx
);this.CP=B.abf(ID,Dx);this.BO=IE;this.Ck=CD;this.Co=GX;this.CO=DX;this.Ia=IC;return this;
},InitializeDown:function(V,FP,CD,Dx,GX,DX){this.Down=true;this.Bu=V;this.BJ=B.abf(
FP,Dx);this.CP=B.abf(FP,Dx);this.BO=0;this.Ck=CD;this.Co=GX;this.CO=DX;this.Ia=DX;
return this;},_Init:function(aArg){D.Event._Init.call(this,aArg);this.__proto__=
D.EY;},_className:"Core::CursorEvent"};D.H8={Ia:B.wf,CO:B.wf,Ck:0,BO:0,Dt:B.wf,CP:
B.wf,BJ:B.wf,Bu:0,Initialize:function(V,FP,ID,aOffset,IE,Qr,Dx,DX,IC){this.Bu=V;
this.BJ=B.abf(FP,Dx);this.CP=B.abf(ID,Dx);this.Dt=aOffset;this.BO=IE;this.Ck=Qr;
this.CO=DX;this.Ia=IC;return this;},_Init:function(aArg){D.Event._Init.call(this
,aArg);this.__proto__=D.H8;},_className:"Core::DragEvent"};D.Ii={Cw:function(AK,
aClip,aOffset,Az,aBlend){},GetClipping:function(){var A;var I=D.AP.GetClipping.call(
this);if(((this.F&0x80000)===0x80000)){var Hh=AS;var H;for(H=this.AG;!!H&&!((H.F&
0x200)===0x200);H=H.AG)if(((H.F&0x1)===0x1))Hh=B.wC(Hh,H.GetClipping());I=B.wC(I
,Hh);}return I;},AD:function(CU,De){var A;var J_=this.F;if((!!this.G&&((this.F&0x80001
)===0x80001))&&((De&0x80000)===0x80000))this.G.Ac(this.GetClipping());D.AP.AD.call(
this,CU,De);if(((!!this.G&&((this.F&0x1)===0x1))&&((CU&0x80000)===0x80000))&&!((
J_&0x80000)===0x80000))this.G.Ac(this.GetClipping());},N:function(C){var A;if(B.
aaY(C,this.O))return;var FT=[(A=this.O)[2]-A[0],A[3]-A[1]];var L0=[C[2]-C[0],C[3
]-C[1]];var H1=!B.aaX(FT,L0);var Bz=B.abe(C.slice(0,2),this.O.slice(0,2));if(!B.
aaX(Bz,AH)&&!H1){var H=this.AG;while(!!H&&!((H.F&0x200)===0x200)){if(((H.F&0x400
)===0x400)){var tmp=((H.F&0x100)===0x100);H.KW(Bz,tmp);}H=H.AG;}}if((H1&&(FT[0]>
0))&&(FT[1]>0)){var AV=this.O;var H=this.AG;while(!!H&&!((H.F&0x200)===0x200)){if(((
H.F&0x400)===0x400)){if(!!H.AZ&&(H.AZ.Hf!==this))H.AZ=null;if(!H.AZ&&(H.Ca!==0x14
))H.IR(AV,this);}H=H.AG;}}D.AP.N.call(this,C);if(!!this.G&&H1){this.F=this.F|0x1000;
if(!((this.G.F&0x2000)===0x2000)){this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.C1],
this);}}},_Init:function(aArg){D.AP._Init.call(this,aArg);this.__proto__=D.Ii;this.
F=0x203;},_className:"Core::Outline"};D.Be={KY:null,Jw:null,Ju:null,Du:null,BB:null
,As:0,Bu:0,Ax:0,Ck:0,BO:0,Dt:B.wf,CP:B.wf,BJ:B.wf,OK:8,Mk:1,Down:false,Dr:false,
Co:false,LO:false,IW:0,Cw:function(AK,aClip,aOffset,Az,aBlend){},Bp:function(AE){
var A;var Ai=(D.EY.isPrototypeOf(AE)?AE:null);var BV=(D.H8.isPrototypeOf(AE)?AE:
null);var J4=this.Dr;var Dl;var C_;var Ja;var BW;var G9;if(!Ai&&!BV)return null;
Dl=(!!Ai&&Ai.Down)&&!Ai.BO;C_=(!!Ai&&Ai.Down)&&(Ai.BO>0);Ja=(!!Ai&&Ai.Down)&&(Ai.
BO>this.IW);BW=!!Ai&&!Ai.Down;G9=!!BV;if(Dl)this.IW=((A=(Ai.Co?0:50))&0x80)?A|0xFFFFFF00:
A&0xFF;if(Dl){var Hb=0;var En;this.As=this.As|(1<<Ai.Bu);for(En=this.As&4095;En>
0;En=En>>1)if(!!(En&1))Hb=Hb+1;if(Hb===1)this.As=(this.As|16777216)|(4096<<Ai.Bu
);}if(BW&&(this.As<16777216)){var Dm=this.H_();var BK=null;if(!!Dm){var Ma=(!!this.
At?this.At:this.G);BK=Dm.EZ(B.abh(HO,Ai.CO),Ai.Bu,Ai.Ck,null,Ma,0x0);}if(!!BK){var
L;for(L=0;L<10;L++)if(!!(this.As&(1<<L)))BK.Ce.Bp(B._NewObject(D.EY,0).InitializeDown(
L,Ai.BJ,Ai.Ck,AH,true,Ai.CO));for(L=0;L<10;L++)if(!!(this.As&(1<<L)))BK.Ce.Bp(B.
_NewObject(D.EY,0).InitializeUp(L,Ai.BJ,Ai.BJ,0,Ai.Ck,AH,false,Ai.CO,Ai.CO));}}if(
BW)this.As=(this.As&~(1<<Ai.Bu))|33554432;if(Ja&&(this.As<16777216))this.As=this.
As|67108864;if(BW&&Ai.Co)this.As=this.As|67108864;if(BW&&!(this.As&16777215))this.
As=0;if(C_&&(this.As>=67108864)){var Dm=this.H_();if(!!Dm)Dm.Mx(null,null,this,0x0
);}if((C_&&!!(this.As&16777216))&&!!(this.As&33554432)){C_=false;BW=true;}if(!!Ai&&
!(this.As&(4096<<Ai.Bu)))return this;if(!!BV&&!(this.As&(4096<<BV.Bu)))return this;
if(BW&&!(this.As&16777216))return this;if(((Dl||G9)||C_)&&((this.As<16777216)||(
this.As>=33554432)))return this;if(BW)this.As=this.As&3758100479;if(BW&&!(this.As&
16777215))this.As=0;if(!!Ai){this.Down=Dl||C_;this.Dr=this.KK(Ai.BJ);this.CP=Ai.
CP;this.BJ=Ai.BJ;this.Dt=AH;this.BO=Ai.BO;this.Ck=Ai.Ck;this.Co=Ai.Co;this.Bu=Ai.
Bu;this.Ax=Ai.Ax;if(Ai.Down&&!Ai.BO)J4=false;}if(!!BV){this.Down=true;this.Dr=this.
KK(BV.BJ);this.CP=BV.CP;this.BJ=BV.BJ;this.Dt=BV.Dt;this.BO=BV.BO;this.Ck=BV.Ck;
this.Bu=BV.Bu;this.Co=false;this.Ax=BV.Ax;}var LN=this.Down;if(!!BV)(A=this.KY)?
A[1].call(A[0],this):null;if((!!Ai&&this.Down)&&!this.BO)(A=this.BB)?A[1].call(A[
0],this):null;if((this.Down&&this.Dr)&&!J4){this.LO=true;(A=this.Ju)?A[1].call(A[
0],this):null;}if(this.LO&&(((LN&&!this.Dr)&&J4)||((!LN&&this.Dr)&&J4))){this.LO=
false;(A=this.Jw)?A[1].call(A[0],this):null;}if(!!Ai&&!LN)(A=this.Du)?A[1].call(
A[0],this):null;return this;},EZ:function(Av,V,CD,EO,EQ,G4){var A;if(!!EO&&(EO!==
this))return null;if((CD<1)||(CD>this.Mk))return null;if(this.As>=33554432)return null;
if((this.As>=16777216)&&!(this.As&(4096<<V)))return null;if(this.N1()){var I=B.lb(
Av,this.GetExtent());if(!((I[0]>=I[2])||(I[1]>=I[3]))){var CE=B.aaI(Av);var Bz=AH;
if(CE[0]<I[0])Bz=[I[0]-CE[0],Bz[1]];if(CE[0]>=I[2])Bz=[(I[2]-CE[0])-1,Bz[1]];if(
CE[1]<I[1])Bz=[Bz[0],I[1]-CE[1]];if(CE[1]>=I[3])Bz=[Bz[0],(I[3]-CE[1])-1];return B.
_NewObject(D.Jh,0).Initialize(this,Bz);}}else{var A3=B.abi(9,B.wf,null);var L;A3.
Set(0,B.aaI(Av));A3.Set(1,A3.Get(0));A3.Set(2,A3.Get(0));A3.Set(3,A3.Get(0));A3.
Set(4,A3.Get(0));A3.Set(1,[Av[0],A3.Get(1)[1]]);A3.Set(2,[A3.Get(2)[0],Av[1]]);A3.
Set(3,[Av[2],A3.Get(3)[1]]);A3.Set(4,[A3.Get(4)[0],Av[3]]);A3.Set(5,Av.slice(0,2
));A3.Set(6,[Av[2],Av[1]]);A3.Set(7,[Av[0],Av[3]]);A3.Set(8,Av.slice(2,4));for(L=
0;L<9;L=L+1)if(this.KK(A3.Get(L)))return B._NewObject(D.Jh,0).Initialize(this,B.
abe(A3.Get(L),A3.Get(0)));}return null;},K7:function(C){if(C<1)C=1;this.OK=C;},Ih:
function(C){if(C<1)C=1;this.Mk=C;},S:function(C){if(C)this.AD(0x100000,0x0);else
this.AD(0x0,0x100000);},_Init:function(aArg){D.Eh._Init.call(this,aArg);this.__proto__=
D.Be;this.F=0x10011B;},_Mark:function(E){var A;D.Eh._Mark.call(this,E);if((A=this.
KY)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Jw)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.Ju)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);
if((A=this.Du)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.BB)&&((A=A[0
])._cycle!=E))A._Mark(A._cycle=E);},_className:"Core::SimpleTouchHandler"};D.C4={
K3:null,KZ:null,K_:null,As:0,Mv:0,CP:B.wf,Me:0,JD:0,Angle:0,Down:false,Dr:false,
Co:false,IW:0,Cw:function(AK,aClip,aOffset,Az,aBlend){},Bp:function(AE){var A;var
Ai=(D.EY.isPrototypeOf(AE)?AE:null);var BV=(D.H8.isPrototypeOf(AE)?AE:null);var Dl;
var C_;var Ja;var BW;var G9;if(!Ai&&!BV)return null;Dl=(!!Ai&&Ai.Down)&&!Ai.BO;C_=(
!!Ai&&Ai.Down)&&(Ai.BO>0);Ja=(!!Ai&&Ai.Down)&&(Ai.BO>this.IW);BW=!!Ai&&!Ai.Down;
G9=!!BV;if(Dl)this.IW=((A=(Ai.Co?0:50))&0x80)?A|0xFFFFFF00:A&0xFF;if(Dl){var Hb=
0;var En;this.As=this.As|(1<<Ai.Bu);for(En=this.As&4095;En>0;En=En>>1)if(!!(En&1
))Hb=Hb+1;if(Hb===1)this.As=(this.As|16777216)|(4096<<Ai.Bu);}if(BW&&(this.As<16777216
)){var Dm=this.H_();var BK=null;if(!!Dm){var Ma=(!!this.At?this.At:this.G);BK=Dm.
EZ(B.abh(HO,Ai.CO),Ai.Bu,Ai.Ck,null,Ma,0x0);}if(!!BK){var L;for(L=0;L<10;L++)if(
!!(this.As&(1<<L)))BK.Ce.Bp(B._NewObject(D.EY,0).InitializeDown(L,Ai.BJ,Ai.Ck,AH
,true,Ai.CO));for(L=0;L<10;L++)if(!!(this.As&(1<<L)))BK.Ce.Bp(B._NewObject(D.EY,
0).InitializeUp(L,Ai.BJ,Ai.BJ,0,Ai.Ck,AH,false,Ai.CO,Ai.CO));}}if(BW)this.As=(this.
As&~(1<<Ai.Bu))|33554432;if(Ja&&(this.As<16777216))this.As=this.As|67108864;if(BW&&
Ai.Co)this.As=this.As|67108864;if(BW&&!(this.As&16777215))this.As=0;if(C_&&(this.
As>=67108864)){var Dm=this.H_();if(!!Dm)Dm.Mx(null,null,this,0x0);}if((C_&&!!(this.
As&16777216))&&!!(this.As&33554432)){C_=false;BW=true;}if(!!Ai&&!(this.As&(4096<<
Ai.Bu)))return this;if(!!BV&&!(this.As&(4096<<BV.Bu)))return this;if(BW&&!(this.
As&16777216))return this;if(((Dl||G9)||C_)&&((this.As<16777216)||(this.As>=33554432
)))return this;if(BW)this.As=this.As&3758100479;if(BW&&!(this.As&16777215))this.
As=0;if(((!Dl&&!BW)&&!G9)&&!C_)return this;var A0=AH;var IF=this.Angle;var J$=this.
Mv;var QQ=J$;var Aj;if((Dl||BW)||C_){this.Dr=B.wa(this.O,Ai.BJ);this.Co=Ai.Co;this.
CP=Ai.CP;this.Down=Dl||C_;A0=B.abe(Ai.BJ,B.aaI(this.O));}if(G9){this.Dr=B.wa(this.
O,BV.BJ);this.CP=BV.CP;this.Down=true;A0=B.abe(BV.BJ,B.aaI(this.O));}var I=Math.
sqrt((A0[0]*A0[0])+(A0[1]*A0[1]));if(I>=8){J$=I|0;IF=(Math.acos(A0[0]/I)*B.rE)|0;
if(A0[1]>0)IF=360-IF;}Aj=IF-this.Angle;if(Aj>180)Aj=Aj-360;if(Aj<-180)Aj=Aj+360;
this.Angle=IF;this.Me=Aj;this.JD=this.JD+Aj;this.Mv=J$;if(Dl){this.Me=0;this.JD=
0;(A=this.K_)?A[1].call(A[0],this):null;}if(!!Aj||(J$!==QQ))(A=this.K3)?A[1].call(
A[0],this):null;if(BW)(A=this.KZ)?A[1].call(A[0],this):null;return this;},EZ:function(
Av,V,CD,EO,EQ,G4){var A;if(!!EO&&(EO!==this))return null;if(this.As>=33554432)return null;
if((this.As>=16777216)&&!(this.As&(4096<<V)))return null;var I=B.lb(Av,this.O);if(
!((I[0]>=I[2])||(I[1]>=I[3]))){var CE=B.aaI(Av);var Bz=AH;if(CE[0]<I[0])Bz=[I[0]-
CE[0],Bz[1]];if(CE[0]>=I[2])Bz=[(I[2]-CE[0])-1,Bz[1]];if(CE[1]<I[1])Bz=[Bz[0],I[
1]-CE[1]];if(CE[1]>=I[3])Bz=[Bz[0],(I[3]-CE[1])-1];return B._NewObject(D.Jh,0).Initialize(
this,Bz);}return null;},_Init:function(aArg){D.AP._Init.call(this,aArg);this.__proto__=
D.C4;this.F=0x10011B;},_Mark:function(E){var A;D.AP._Mark.call(this,E);if((A=this.
K3)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.KZ)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.K_)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);
},_className:"Core::RotateTouchHandler"};D.FE={AG:null,Du:null,BB:null,Hg:0,Ax:0
,Mw:0,B2:148,Bo:0,AN:0,BA:true,Down:false,K$:false,Cx:function(aArg){var A;var G$=(
D.P.isPrototypeOf(A=this.K)?A:null);if(!G$)throw new Error(IA);this.AG=G$.J6;G$.
J6=this;},Bp:function(AE){var A;if(!!AE&&AE.N3(this.B2)){this.Down=AE.Down;this.
Bo=AE.Bo;this.AN=AE.AN;this.Ax=AE.Ax;if(AE.Down){this.Mw=this.Hg;this.K$=this.Hg>
0;if(!this.K$)(A=this.BB)?A[1].call(A[0],this):null;this.Hg=this.Hg+1;return true;
}if(!AE.Down){this.K$=this.Hg>1;this.Mw=this.Hg-1;this.Hg=0;(A=this.Du)?A[1].call(
A[0],this):null;return true;}}return false;},_Init:function(aArg){this.__proto__=
D.FE;this.Cx(aArg);B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:
function(){},_Mark:function(E){var A;if((A=this.AG)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.Du)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.BB)&&((A=
A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.K)&&(A._cycle!=E))A._Mark(A._cycle=
E);},K:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"};D.Jh={Ce:
null,H7:0,Dt:B.wf,Initialize:function(M,aOffset){this.Ce=M;this.Dt=aOffset;this.
H7=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:function(
aArg){this.__proto__=D.Jh;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;}
,_ReInit:function(){},_Mark:function(E){var A;if((A=this.Ce)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.K)&&(A._cycle!=E))A._Mark(A._cycle=E);},K:null,_cycle:0,_observers:
null,_className:"Core::CursorHit"};D.Jp={Hf:null,CH:B.wg,AV:B.wg,isEmpty:false,_Init:
function(aArg){this.__proto__=D.Jp;B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.Hf)&&(A._cycle!=
E))A._Mark(A._cycle=E);if((A=this.K)&&(A._cycle!=E))A._Mark(A._cycle=E);},K:null
,_cycle:0,_observers:null,_className:"Core::LayoutContext"};D.Jq={I7:B.wf,I6:B.wf
,I5:B.wf,I4:B.wf,_Init:function(aArg){D.Jp._Init.call(this,aArg);this.__proto__=
D.Jq;},_className:"Core::LayoutQuadContext"};D.Fh={resource:null,C2:function(){this.
resource=null;},Cx:function(aArg){this.resource=aArg;},_Init:function(aArg){this.
__proto__=D.Fh;this.Cx(aArg);B.h7++;},_Done:function(){this.C2();this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.K)&&(A._cycle
!=E))A._Mark(A._cycle=E);},K:null,_cycle:0,_observers:null,_className:"Core::Resource"
};D.Timer={FK:null,timer:null,Ax:0,Period:1000,Hl:0,BA:false,C2:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},Kb:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=B.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},FI:function(C){if(C<0)C=0;if(C===this.Period)return;
this.Period=C;if(this.BA)this.Kb(this.Hl,C);},FF:function(C){if(C<0)C=0;if(C===this.
Hl)return;this.Hl=C;if(this.BA)this.Kb(C,this.Period);},S:function(C){if(C===this.
BA)return;this.BA=C;if(C)this.Kb(this.Hl,this.Period);else this.Kb(0,0);this.Ax=
this.Jo();},Jo:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.v$
)|0;return ticksCount;},Trigger:function(){var A;this.Ax=this.Jo();if(!this.Period
)this.S(false);(A=this.FK)?A[1].call(A[0],this):null;},_Init:function(aArg){this.
__proto__=D.Timer;B.h7++;},_Done:function(){this.C2();this.__proto__=null;B.h7--;
},_ReInit:function(){},_Mark:function(E){var A;if((A=this.FK)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.K)&&(A._cycle!=E))A._Mark(A._cycle=E);},K:null
,_cycle:0,_observers:null,_className:"Core::Timer"};D.Ax={JE:0,KV:0,KI:0,H6:0,Jt:
0,MB:0,QL:function(){var result=0;{var d=new Date;result=Math.trunc(d.getTime()/
1000-(d.getTimezoneOffset()*60));}return result;},Oq:function(C){var A;C+=62162035200;
if(C<0)C=0;var H4=Math.trunc(C/86400)|0;var M4=(((H4>=0)?H4:H4-146096)/146097)|0;
var IM=H4-(M4*146097);var Kn=((((IM-((IM/1460)|0))+((IM/36524)|0))-((IM/146096)|
0))/365)|0;var BX=Kn+(M4*400);var M3=IM-(((365*Kn)+((Kn/4)|0))-((Kn/100)|0));var
LZ=(((5*M3)+2)/153)|0;var d=(M3-((((153*LZ)+2)/5)|0))+1;var C0=LZ+((LZ<10)?3:-9);
var AR=Math.trunc(C/3600)%24|0;var L=Math.trunc(C/60)%60|0;var D3=C%60|0;this.MB=
BX+((C0<=2)?1:0);this.Ol(C0);this.FG(d);this.Og(AR+((AR<0)?24:0));this.Oj(L+((L<
0)?60:0));this.Oo(D3+((D3<0)?60:0));},Oa:function(){return B._NewObject(D.Ax,0).
Initialize(this.QL());},Gx:function(){var A;var d=this.H6;var C0=this.Jt+((this.
Jt>2)?-2:10);var BX=this.MB-((this.Jt<=2)?1:0);var Ah=(BX/100)|0;BX%=100;d+=((((((((
26*C0)-2)/10)|0)+BX)+((BX/4)|0))+((Ah/4)|0))-(2*Ah));if(d>=0)return d%7;else return(
7-(-d%7))%7;},Oo:function(C){if(C<0)C=0;if(C>59)C=59;this.JE=C;},Oj:function(C){
if(C<0)C=0;if(C>59)C=59;this.KV=C;},Og:function(C){if(C<0)C=0;if(C>23)C=23;this.
KI=C;},FG:function(C){if(C<1)C=1;if(C>31)C=31;this.H6=C;},Ol:function(C){if(C<1)
C=1;if(C>12)C=12;this.Jt=C;},Initialize:function(Qt){this.Oq(Qt);return this;},_Init:
function(aArg){this.__proto__=D.Ax;B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.K)&&(A._cycle!=
E))A._Mark(A._cycle=E);},K:null,_cycle:0,_observers:null,_className:"Core::Time"
};D.Mu={K0:null,Z:null,Nh:function(An){var A;(A=this.K0)?A[1].call(A[0],this):null;
},Eg:function(C){if(B.aaZ(this.Z,C))return;if(!!this.Z)B.z$([this,this.Nh],this.
Z,0);this.Z=C;if(!!this.Z)B.zX([this,this.Nh],this.Z,0);},_Init:function(aArg){this.
__proto__=D.Mu;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(
){},_Mark:function(E){var A;if((A=this.K0)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=
E);if((A=this.Z)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.K)&&(A._cycle
!=E))A._Mark(A._cycle=E);},K:null,_cycle:0,_observers:null,_className:"Core::PropertyObserver"
};D.R6={R7:0x1,Rb:0x2,Rn:0x4,R3:0x8,BA:0x10,Fi:0x20,Ro:0x40,Rz:0x80,Rl:0x100,Rt:
0x200,Rk:0x400,RJ:0x800,JH:0x1000,R5:0x2000,RG:0x4000,RH:0x8000,Ri:0x10000,RF:0x20000
,RT:0x40000,Rj:0x80000,RI:0x100000,Rh:0x200000};D.Ca={RK:0x1,RL:0x2,Q9:0x4,Q_:0x8
,Q$:0x10,Q8:0x20};D.Rq={RA:0,R0:1,Re:2,Ru:3,RN:4,R1:5,R2:6,Rf:7,Rg:8,Rw:9,Rv:10,
RP:11,RO:12};D.KeyCode={NoKey:0,Ok:1,Exit:2,Menu:3,Up:4,Down:5,Left:6,Right:7,PageUp:
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
346};D.RM={R$:0x1,R8:0x2,R9:0x4,R_:0x8,Rx:0x10,Rp:0x20};
D._Init=function(){D.Eh.__proto__=D.Ce;D.AP.__proto__=D.Ce;D.P.__proto__=D.AP;D.Root.
__proto__=D.P;D.KeyEvent.__proto__=D.Event;D.Ky.__proto__=D.Event;D.EY.__proto__=
D.Event;D.H8.__proto__=D.Event;D.Ii.__proto__=D.AP;D.Be.__proto__=D.Eh;D.C4.__proto__=
D.AP;D.Jq.__proto__=D.Jp;};D._ReInit=function(){};D.Cl=function(E){};return D;})(
);

/* Embedded Wizard */