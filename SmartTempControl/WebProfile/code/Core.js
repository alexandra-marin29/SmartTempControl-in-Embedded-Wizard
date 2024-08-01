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
var AH=[0,0];var AS=[0,0,0,0];var Ca="The view does not belong to this group";var
EH=[800,480];var DT="No view to restack";var Dw="View is not in this group";var DU=
"No view to remove";var Ei="No view to add";var FL="View already in a group";var
Ix="Recursive invalidate during active update cycle.";var GW=[-8,-8,9,9];var HO=[
0,0,1,1];var Iy="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";
D.B_={AG:null,At:null,G:null,AY:null,F:0x103,DQ:0,B1:0x14,IP:function(Ao,JH){},FG:
function(C){if(this.DQ===C)return;this.DQ=C;if(!!this.G){var Fr=this.AG;var Aj=0;
while(!!Fr&&(C>Fr.DQ)){Fr=Fr.AG;Aj=Aj+1;}Fr=this.At;while(!!Fr&&(C<Fr.DQ)){Fr=Fr.
At;Aj=Aj-1;}if(!!Aj)this.G.OG(this,Aj);}},HG:function(C){var A;var Aj=C^this.B1;
if(!Aj)return;this.B1=C;if(!!this.AY&&!((this.F&0x400)===0x400)){this.G.F=this.G.
F|0x5000;B.pe([A=this.G,A.C2],this);this.G.Ac([0,0,(A=this.G.O)[2]-A[0],A[3]-A[1
]]);}if(!!this.AY&&((this.F&0x400)===0x400)){this.AY.Hf.F=this.AY.Hf.F|0x1000;this.
G.F=this.G.F|0x4000;B.pe([A=this.G,A.C2],this);}},H7:function(){var Ar=this.G;while(
!!Ar){var Dn=(D.Root.isPrototypeOf(Ar)?Ar:null);if(!!Dn)return Dn;Ar=Ar.G;}return null;
},Cs:function(AK,aClip,aOffset,Az,aBlend){},GetClipping:function(){return this.GetExtent(
);},Bo:function(AE){return null;},EU:function(Av,U,Cz,EJ,EL,G4){return null;},Jb:
function(Av){return Av;},Jc:function(Ao,Dg){return AH;},KS:function(aOffset,JG){
},GetExtent:function(){return AS;},AD:function(CV,Df){var A;if(((this.F&0x200)===
0x200))CV=CV&~0x400;var LZ=(this.F&~Df)|CV;var DX=LZ^this.F;this.F=LZ;if(!!this.
G&&!!(DX&0x14)){var M3=((this.F&0x14)===0x14);if(M3&&!this.G.Dq)this.G.Hw(this);
if(!M3&&(this.G.Dq===this))this.G.Hw(this.G.Me(this,0x14));}if(!!this.G&&!!(DX&0x403
))this.G.Ac(this.GetClipping());if(((!!this.AY&&!!this.G)&&((LZ&0x400)===0x400))&&((
DX&0x1)===0x1)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.C2
],this);}if(!!this.G&&((DX&0x400)===0x400)){this.AY=null;this.F=this.F|0x800;this.
G.F=this.G.F|0x4000;B.pe([A=this.G,A.C2],this);}if(((((DX&0x100000)===0x100000)&&((
Df&0x100000)===0x100000))&&((this.F&0x10)===0x10))&&!((this.F&0x200080)===0x200080
))this.AD(0x0,0x10);if(((((DX&0x100000)===0x100000)&&((CV&0x100000)===0x100000))&&
!((this.F&0x10)===0x10))&&(!((this.F&0x200000)===0x200000)||((!((this.F&0x80)===
0x80)&&!!this.G)&&((this.G.F&0x10)===0x10))))this.AD(0x10,0x0);if(((((DX&0x200000
)===0x200000)&&((Df&0x200000)===0x200000))&&!((this.F&0x10)===0x10))&&((this.F&0x100000
)===0x100000))this.AD(0x10,0x0);if((((((DX&0x200000)===0x200000)&&((CV&0x200000)===
0x200000))&&((this.F&0x100010)===0x100010))&&!((this.F&0x80)===0x80))&&((!!this.
G&&!((this.G.F&0x10)===0x10))||((((this.F&0x10000)===0x10000)&&!!this.G)&&(null!==
this))))this.AD(0x0,0x10);},_Init:function(aArg){this.__proto__=D.B_;B.h7++;},_Done:
function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var
A;if((A=this.AG)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.At)&&(A._cycle!=E
))A._Mark(A._cycle=E);if((A=this.G)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.
AY)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.K)&&(A._cycle!=E))A._Mark(A._cycle=
E);},K:null,_cycle:0,_observers:null,_className:"Core::View"};D.Ee={BA:B.wf,B8:B.
wf,Bz:B.wf,B7:B.wf,IP:function(Ao,JH){var Aq=B._NewObject(D.Jm,0);this.AY=null;Aq.
CE=this.GetExtent();Aq.AU=Ao;Aq.Hf=JH;Aq.I2=this.B7;Aq.I3=this.Bz;Aq.I4=this.B8;
Aq.I5=this.BA;this.AY=Aq;},Jc:function(Ao,Dg){var A;var A4=this.B1;var Aq=(D.Jm.
isPrototypeOf(A=this.AY)?A:null);var Aa=Aq.CE[0];var Ab=Aq.CE[1];var Ad=Aq.CE[2];
var X=Aq.CE[3];var CD=[Ao[2]-Ao[0],Ao[3]-Ao[1]];var AV=Ad-Aa;var AQ=X-Ab;if(!Dg){
var DF=[(A=Aq.AU)[2]-A[0],A[3]-A[1]];Aa=Aa-Aq.AU[0];Ab=Ab-Aq.AU[1];if(DF[0]!==CD[
0]){var Bh=((A4&0x4)===0x4);var Bi=((A4&0x8)===0x8);var Eo=((A4&0x1)===0x1);if(!
Bh&&(Eo||!Bi))Aa=((Aa*CD[0])/DF[0])|0;if(!Bi&&(Eo||!Bh)){Ad=Ad-Aq.AU[0];Ad=((Ad*
CD[0])/DF[0])|0;Ad=Ad-CD[0];}else Ad=Ad-Aq.AU[2];Aa=Aa+Ao[0];Ad=Ad+Ao[2];if(!Eo){
if(Bh&&!Bi)Ad=Aa+AV;else if(!Bh&&Bi)Aa=Ad-AV;else{Aa=Aa+((((Ad-Aa)-AV)/2)|0);Ad=
Aa+AV;}}}else{Ad=Ad-Aq.AU[2];Aa=Aa+Ao[0];Ad=Ad+Ao[2];}if(DF[1]!==CD[1]){var Bj=((
A4&0x10)===0x10);var Bg=((A4&0x20)===0x20);var Ep=((A4&0x2)===0x2);if(!Bj&&(Ep||
!Bg))Ab=((Ab*CD[1])/DF[1])|0;if(!Bg&&(Ep||!Bj)){X=X-Aq.AU[1];X=((X*CD[1])/DF[1])|
0;X=X-CD[1];}else X=X-Aq.AU[3];Ab=Ab+Ao[1];X=X+Ao[3];if(!Ep){if(Bj&&!Bg)X=Ab+AQ;
else if(!Bj&&Bg)Ab=X-AQ;else{Ab=Ab+((((X-Ab)-AQ)/2)|0);X=Ab+AQ;}}}else{X=X-Aq.AU[
3];Ab=Ab+Ao[1];X=X+Ao[3];}}else{switch(Dg){case 3:{Aa=Ao[0];Ad=Aa+AV;}break;case
4:{Ad=Ao[2];Aa=Ad-AV;}break;case 1:{Ab=Ao[1];X=Ab+AQ;}break;case 2:{X=Ao[3];Ab=X-
AQ;}break;default:;}if((Dg===3)||(Dg===4)){var Bj=((A4&0x10)===0x10);var Bg=((A4&
0x20)===0x20);var Ep=((A4&0x2)===0x2);if(Ep){Ab=Ao[1];X=Ao[3];}else if(Bj&&!Bg){
Ab=Ao[1];X=Ab+AQ;}else if(Bg&&!Bj){X=Ao[3];Ab=X-AQ;}else{Ab=Ao[1]+((((Ao[3]-Ao[1
])-AQ)/2)|0);X=Ab+AQ;}}if((Dg===1)||(Dg===2)){var Bh=((A4&0x4)===0x4);var Bi=((A4&
0x8)===0x8);var Eo=((A4&0x1)===0x1);if(Eo){Aa=Ao[0];Ad=Ao[2];}else if(Bh&&!Bi){Aa=
Ao[0];Ad=Aa+AV;}else if(Bi&&!Bh){Ad=Ao[2];Aa=Ad-AV;}else{Aa=Ao[0]+((((Ao[2]-Ao[0
])-AV)/2)|0);Ad=Aa+AV;}}}Aq.isEmpty=(Aa>=Ad)||(Ab>=X);AV=(Ad-Aa)-1;AQ=(X-Ab)-1;var
Fn=Aq.CE[0];var Fo=Aq.CE[1];var EO=(Aq.CE[2]-Fn)-1;var EN=(Aq.CE[3]-Fo)-1;if(!EO
)EO=1;if(!EN)EN=1;if(((this.F&0x100)===0x100)){this.B7=[Aa+((((Aq.I2[0]-Fn)*AV)/
EO)|0),Ab+((((Aq.I2[1]-Fo)*AQ)/EN)|0)];this.Bz=[Aa+((((Aq.I3[0]-Fn)*AV)/EO)|0),Ab+((((
Aq.I3[1]-Fo)*AQ)/EN)|0)];this.B8=[Aa+((((Aq.I4[0]-Fn)*AV)/EO)|0),Ab+((((Aq.I4[1]-
Fo)*AQ)/EN)|0)];this.BA=[Aa+((((Aq.I5[0]-Fn)*AV)/EO)|0),Ab+((((Aq.I5[1]-Fo)*AQ)/
EN)|0)];}else{this.B3([Aa+((((Aq.I2[0]-Fn)*AV)/EO)|0),Ab+((((Aq.I2[1]-Fo)*AQ)/EN
)|0)]);this.B4([Aa+((((Aq.I3[0]-Fn)*AV)/EO)|0),Ab+((((Aq.I3[1]-Fo)*AQ)/EN)|0)]);
this.B5([Aa+((((Aq.I4[0]-Fn)*AV)/EO)|0),Ab+((((Aq.I4[1]-Fo)*AQ)/EN)|0)]);this.B6([
Aa+((((Aq.I5[0]-Fn)*AV)/EO)|0),Ab+((((Aq.I5[1]-Fo)*AQ)/EN)|0)]);this.AY=Aq;}return[
AV+1,AQ+1];},KS:function(aOffset,JG){if(JG){this.B7=B.abf(this.B7,aOffset);this.
Bz=B.abf(this.Bz,aOffset);this.B8=B.abf(this.B8,aOffset);this.BA=B.abf(this.BA,aOffset
);}else{this.B3(B.abf(this.B7,aOffset));this.B4(B.abf(this.Bz,aOffset));this.B5(
B.abf(this.B8,aOffset));this.B6(B.abf(this.BA,aOffset));}},GetExtent:function(){
if(!!this.AY&&this.AY.isEmpty)return AS;var Aa=this.B7[0];var Ab=this.B7[1];var Ad=
this.B8[0];var X=this.B8[1];if((((this.BA[0]!==Aa)||(this.Bz[1]!==Ab))||(this.Bz[
0]!==Ad))||(this.BA[1]!==X)){if(this.Bz[0]<Aa)Aa=this.Bz[0];if(this.B8[0]<Aa)Aa=
this.B8[0];if(this.BA[0]<Aa)Aa=this.BA[0];if(this.Bz[1]<Ab)Ab=this.Bz[1];if(this.
B8[1]<Ab)Ab=this.B8[1];if(this.BA[1]<Ab)Ab=this.BA[1];if(this.B7[0]>Ad)Ad=this.B7[
0];if(this.Bz[0]>Ad)Ad=this.Bz[0];if(this.BA[0]>Ad)Ad=this.BA[0];if(this.B7[1]>X
)X=this.B7[1];if(this.Bz[1]>X)X=this.Bz[1];if(this.BA[1]>X)X=this.BA[1];}else{var
tmp;if(Ad<Aa){tmp=Aa;Aa=Ad;Ad=tmp;}if(X<Ab){tmp=Ab;Ab=X;X=tmp;}}return[Aa,Ab,Ad+
1,X+1];},B6:function(C){var A;if(B.aaX(C,this.BA))return;if(!!this.G&&((this.F&0x1
)===0x1))this.G.Ac(this.GetClipping());this.AY=null;this.BA=C;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.GetClipping());if((!!this.G&&((this.F&0x400)===0x400
))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;
B.pe([A=this.G,A.C2],this);}},B5:function(C){var A;if(B.aaX(C,this.B8))return;if(
!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping());this.AY=null;this.B8=
C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping());if((!!this.G&&((
this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.
G.F=this.G.F|0x4000;B.pe([A=this.G,A.C2],this);}},B4:function(C){var A;if(B.aaX(
C,this.Bz))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping()
);this.AY=null;this.Bz=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping(
));if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.C2],this);}},B3:function(
C){var A;if(B.aaX(C,this.B7))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(
this.GetClipping());this.AY=null;this.B7=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ac(this.GetClipping());if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000
)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.C2],this
);}},KG:function(G2){var A3=B.abi(4,B.wf,null);var L=0;var A8=3;var LR=false;var
LS=false;A3.Set(0,this.B7);A3.Set(1,this.Bz);A3.Set(2,this.B8);A3.Set(3,this.BA);
while(L<4){var NA=A3.Get(L)[0];var Kg=A3.Get(L)[1];var QH=A3.Get(A8)[0];var Ma=A3.
Get(A8)[1];if(((Kg>G2[1])!==(Ma>G2[1]))||((Kg<G2[1])!==(Ma<G2[1]))){var NB=((((QH-
NA)*(G2[1]-Kg))/(Ma-Kg))|0)+NA;if(G2[0]>NB)LR=!LR;if(G2[0]<NB)LS=!LS;}A8=L;L=L+1;
}return LR||LS;},NY:function(){return((((this.B7[0]===this.BA[0])&&(this.Bz[0]===
this.B8[0]))&&(this.B7[1]===this.Bz[1]))&&(this.B8[1]===this.BA[1]))||((((this.B7[
0]===this.Bz[0])&&(this.B8[0]===this.BA[0]))&&(this.B7[1]===this.BA[1]))&&(this.
Bz[1]===this.B8[1]));},_Init:function(aArg){D.B_._Init.call(this,aArg);this.__proto__=
D.Ee;},_className:"Core::QuadView"};D.AO={O:B.wg,IP:function(Ao,JH){var Aq=B._NewObject(
D.Jl,0);Aq.CE=this.O;Aq.AU=Ao;Aq.Hf=JH;this.AY=Aq;},Jc:function(Ao,Dg){var A;var
A4=this.B1;var Aq=this.AY;var Aa=Aq.CE[0];var Ab=Aq.CE[1];var Ad=Aq.CE[2];var X=
Aq.CE[3];var CD=[Ao[2]-Ao[0],Ao[3]-Ao[1]];var AV=Ad-Aa;var AQ=X-Ab;if(!Dg){var DF=[(
A=Aq.AU)[2]-A[0],A[3]-A[1]];Aa=Aa-Aq.AU[0];Ab=Ab-Aq.AU[1];if(DF[0]!==CD[0]){var Bh=((
A4&0x4)===0x4);var Bi=((A4&0x8)===0x8);var Eo=((A4&0x1)===0x1);if(!Bh&&(Eo||!Bi)
)Aa=((Aa*CD[0])/DF[0])|0;if(!Bi&&(Eo||!Bh)){Ad=Ad-Aq.AU[0];Ad=((Ad*CD[0])/DF[0])|
0;Ad=Ad-CD[0];}else Ad=Ad-Aq.AU[2];Aa=Aa+Ao[0];Ad=Ad+Ao[2];if(!Eo){if(Bh&&!Bi)Ad=
Aa+AV;else if(!Bh&&Bi)Aa=Ad-AV;else{Aa=Aa+((((Ad-Aa)-AV)/2)|0);Ad=Aa+AV;}}}else{
Ad=Ad-Aq.AU[2];Aa=Aa+Ao[0];Ad=Ad+Ao[2];}if(DF[1]!==CD[1]){var Bj=((A4&0x10)===0x10
);var Bg=((A4&0x20)===0x20);var Ep=((A4&0x2)===0x2);if(!Bj&&(Ep||!Bg))Ab=((Ab*CD[
1])/DF[1])|0;if(!Bg&&(Ep||!Bj)){X=X-Aq.AU[1];X=((X*CD[1])/DF[1])|0;X=X-CD[1];}else
X=X-Aq.AU[3];Ab=Ab+Ao[1];X=X+Ao[3];if(!Ep){if(Bj&&!Bg)X=Ab+AQ;else if(!Bj&&Bg)Ab=
X-AQ;else{Ab=Ab+((((X-Ab)-AQ)/2)|0);X=Ab+AQ;}}}else{X=X-Aq.AU[3];Ab=Ab+Ao[1];X=X+
Ao[3];}}else{switch(Dg){case 3:{Aa=Ao[0];Ad=Aa+AV;}break;case 4:{Ad=Ao[2];Aa=Ad-
AV;}break;case 1:{Ab=Ao[1];X=Ab+AQ;}break;case 2:{X=Ao[3];Ab=X-AQ;}break;default:;
}if((Dg===3)||(Dg===4)){var Bj=((A4&0x10)===0x10);var Bg=((A4&0x20)===0x20);var Ep=((
A4&0x2)===0x2);if(Ep){Ab=Ao[1];X=Ao[3];}else if(Bj&&!Bg){Ab=Ao[1];X=Ab+AQ;}else if(
Bg&&!Bj){X=Ao[3];Ab=X-AQ;}else{Ab=Ao[1]+((((Ao[3]-Ao[1])-AQ)/2)|0);X=Ab+AQ;}}if((
Dg===1)||(Dg===2)){var Bh=((A4&0x4)===0x4);var Bi=((A4&0x8)===0x8);var Eo=((A4&0x1
)===0x1);if(Eo){Aa=Ao[0];Ad=Ao[2];}else if(Bh&&!Bi){Aa=Ao[0];Ad=Aa+AV;}else if(Bi&&
!Bh){Ad=Ao[2];Aa=Ad-AV;}else{Aa=Ao[0]+((((Ao[2]-Ao[0])-AV)/2)|0);Ad=Aa+AV;}}}Aq.
isEmpty=(Aa>=Ad)||(Ab>=X);if(((this.F&0x100)===0x100))this.O=[Aa,Ab,Ad,X];else{this.
N([Aa,Ab,Ad,X]);this.AY=Aq;}return[Ad-Aa,X-Ab];},KS:function(aOffset,JG){if(JG)this.
O=B.abh(this.O,aOffset);else this.N(B.abh(this.O,aOffset));},GetExtent:function(
){return this.O;},N:function(C){var A;if(B.aaY(C,this.O))return;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.GetClipping());this.AY=null;this.O=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ac(this.GetClipping());if((!!this.G&&((this.F&0x400)===
0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;
B.pe([A=this.G,A.C2],this);}},_Init:function(aArg){D.B_._Init.call(this,aArg);this.
__proto__=D.AO;},_className:"Core::RectView"};D.P={C9:null,Cc:null,J0:null,Dq:null
,Cf:255,IL:0,IO:0,IN:0,IM:0,Cu:function(aArg){this.Bd();},Cs:function(AK,aClip,aOffset
,Az,aBlend){var A;Az=((Az+1)*this.Cf)>>8;aBlend=aBlend&&((this.F&0x2)===0x2);this.
Qk(AK,aClip,B.abf(aOffset,this.O.slice(0,2)),Az,aBlend);},GetClipping:function(){
var A;var I=this.O;I=[].concat(I[0]-this.IM,I.slice(1,4));I=B.abP(I,I[1]-this.IO
);I=B.abN(I,I[2]+this.IN);I=[].concat(I.slice(0,3),I[3]+this.IL);if(((this.F&0x80000
)===0x80000)){var Hh=AS;var H;for(H=this.C9;!!H;H=H.AG)if(((H.F&0x1)===0x1))Hh=B.
wC(Hh,H.GetClipping());I=B.wC(I,B.abh(Hh,this.O.slice(0,2)));}return I;},EU:function(
Av,U,Cz,EJ,EL,G4){var A;var H=this.Cc;var G_=null;var V=AS;var CY=null;if(((A=B.
lb(Av,this.O))[0]>=A[2])||(A[1]>=A[3]))return null;Av=B.abg(Av,this.O.slice(0,2)
);if(!!EL){H=EL;while(!!H&&(H.G!==this))H=H.G;}while(!!H){if(((H.F&0x400)===0x400
)&&!CY){CY=H.At;while(!!CY&&!((CY.F&0x200)===0x200))CY=CY.At;if(!!CY)V=B.lb(Av,CY.
GetExtent());else V=AS;}if(CY===H){CY=null;V=AS;}if((!!EJ&&!!(D.P.isPrototypeOf(
H)?H:null))||((((((H.F&0x8)===0x8)&&((H.F&0x10)===0x10))&&!((H.F&0x40000)===0x40000
))&&!((H.F&0x20000)===0x20000))&&(!((H.F&0x10000)===0x10000)||(null===H)))){var CE=
H.GetExtent();var JT=EJ;var G8=null;if(JT===H)JT=null;if(((H.F&0x400)===0x400)){
if(!(((A=B.lb(CE,V))[0]>=A[2])||(A[1]>=A[3])))G8=H.EU(V,U,Cz,JT,EL,G4);}else if(
!(((A=B.lb(CE,Av))[0]>=A[2])||(A[1]>=A[3]))||(EJ===H))G8=H.EU(Av,U,Cz,JT,EL,G4);
H=H.At;if(!!G8){if(!G_||((G8.H4<G_.H4)&&(G8.H4>=0)))G_=G8;if(!G8.H4)H=null;}}else
H=H.At;EL=null;}return G_;},Jb:function(Av){var A;var S;var H=this.C9;var G6=AS;
var I1=true;var result=(Av=S=B.abg(Av,this.O.slice(0,2)),S);while(!!H){if(((H.F&
0x200)===0x200)){var HX=(D.Ih.isPrototypeOf(H)?H:null);G6=B.lb(Av,HX.O);I1=((HX.
F&0x1)===0x1);}if(((H.F&0x1)===0x1)){if(((H.F&0x400)===0x400)){if(I1){var V=B.lb(
H.GetClipping(),G6);if(!((V[0]>=V[2])||(V[1]>=V[3])))result=B.wC(result,H.Jb(V));
}}else{var V=B.lb(H.GetClipping(),Av);if(!((V[0]>=V[2])||(V[1]>=V[3])))result=B.
wC(result,H.Jb(V));}}H=H.AG;}return B.lb(B.abh(result,this.O.slice(0,2)),this.O);
},AD:function(CV,Df){var A;var J4=this.F;if((!!this.G&&((this.F&0x80001)===0x80001
))&&((Df&0x80000)===0x80000))this.G.Ac(this.GetClipping());D.AO.AD.call(this,CV,
Df);if(((!!this.G&&((this.F&0x1)===0x1))&&((CV&0x80000)===0x80000))&&!((J4&0x80000
)===0x80000))this.G.Ac(this.GetClipping());var DX=this.F^J4;if(!!this.Dq&&((DX&0x40
)===0x40)){if(((this.F&0x40)===0x40))this.Dq.AD(0x40,0x0);else this.Dq.AD(0x0,0x40
);}if(((DX&0x10)===0x10)){var H;for(H=this.C9;!!H;H=H.AG)if((((H.F&0x300000)===0x300000
)&&!((H.F&0x80)===0x80))&&(!((H.F&0x10000)===0x10000)||(null===H)))H.AD(CV&0x10,
Df&0x10);}if(!!DX){this.F=this.F|0x8000;B.pe([this,this.Kf],this);}},N:function(
C){var A;if(B.aaY(C,this.O))return;var FS=[(A=this.O)[2]-A[0],A[3]-A[1]];var LY=[
C[2]-C[0],C[3]-C[1]];var HY=!B.aaX(FS,LY);D.AO.N.call(this,C);if((HY&&(FS[0]>0))&&(
FS[1]>0)){var AU=[].concat(AH,FS);var H=this.C9;while(!!H){if((!H.AY&&(H.B1!==0x14
))&&!((H.F&0x400)===0x400))H.IP(AU,null);H=H.AG;}}if(HY){this.F=this.F|0x5000;B.
pe([this,this.Kf],this);}},Nh:function(AE){var M5=(D.KeyEvent.isPrototypeOf(AE)?
AE:null);var DY=this.J0;if(!M5)return null;while(!!DY&&(!DY.By||!DY.Bo(M5)))DY=DY.
AG;return DY;},Qk:function(AK,aClip,aOffset,Az,aBlend){var A;var H=this.C9;var G6=
AS;var I1=true;this.NQ(AK,aClip,aOffset,Az,aBlend);while(!!H){if(((H.F&0x200)===
0x200)){var HX=(D.Ih.isPrototypeOf(H)?H:null);I1=((HX.F&0x1)===0x1);G6=aClip;if(
!((HX.F&0x80000)===0x80000))G6=B.lb(G6,B.abh(HX.O,aOffset));}if(((H.F&0x1)===0x1
)){if(((H.F&0x400)===0x400)){if(I1){var V=B.lb(B.abh(H.GetClipping(),aOffset),G6
);if(!((V[0]>=V[2])||(V[1]>=V[3])))H.Cs(AK,V,aOffset,Az,aBlend);}}else{var V=B.lb(
B.abh(H.GetClipping(),aOffset),aClip);if(!((V[0]>=V[2])||(V[1]>=V[3])))H.Cs(AK,V
,aOffset,Az,aBlend);}}H=H.AG;}this.NT(AK,aClip,aOffset,Az,aBlend);},Qz:function(
){var A;var LP=((this.F&0x1000)===0x1000);var Fp=[0,0,(A=this.O)[2]-A[0],A[3]-A[
1]];var EP=false;var HT=AS;var LN=AS;var H=this.Cc;var CY=null;while(!!H){if(((H.
F&0x800)===0x800)){EP=true;H.F=H.F&~0x800;}if(EP&&((H.F&0x200)===0x200))EP=false;
H=H.At;}EP=false;H=this.C9;if(LP){this.F=this.F&~0x1000;LP=!((Fp[0]>=Fp[2])||(Fp[
1]>=Fp[3]));}this.F=this.F|0x2000;while(!!H){if(((H.F&0x400)===0x400)){if(!!H.AY&&(
H.AY.Hf!==CY))H.AY=null;if((!H.AY&&EP)&&(H.B1!==0x14))H.IP(LN,CY);}if(!!H.AY){if(
LP&&!((H.F&0x400)===0x400))H.Jc(Fp,0);if(EP&&((H.F&0x400)===0x400))H.Jc(LN,0);}if(((
H.F&0x200)===0x200)){EP=((H.F&0x1000)===0x1000);CY=(D.Ih.isPrototypeOf(H)?H:null
);if(EP){H.F=H.F&~0x1000;HT=CY.O;LN=HT;EP=!((HT[0]>=HT[2])||(HT[1]>=HT[3]));}if(
EP)this.Ac(CY.O);}H=H.AG;}this.F=this.F&~0x2000;this.JB([Fp[2]-Fp[0],Fp[3]-Fp[1]
]);},C2:function(Ap){B.pe([this,this.Kf],this);},Kf:function(Ap){var A;var QF=((
this.F&0x1000)===0x1000);if(((this.F&0x4000)===0x4000)){this.F=this.F&~0x4000;this.
Qz();}if(((this.F&0x8000)===0x8000)||QF){this.F=this.F&~0x8000;this.Fg(this.F);}
},Hw:function(C){var A;if(!!C&&(C.G!==this))throw new Error(Ca);if(!!C&&!((C.F&0x14
)===0x14))C=null;if(!!C&&((C.F&0x10000)===0x10000))C=null;if(C===this.Dq)return;
if(!!this.Dq)this.Dq.AD(0x0,0x60);this.Dq=C;if(!!C){if(((this.F&0x40)===0x40))C.
AD(0x60,0x0);else C.AD(0x20,0x0);}},R:function(C){if(C)this.AD(0x100000,0x0);else
this.AD(0x0,0x100000);},Ba:function(C){var A;if(C>255)C=255;if(C<0)C=0;if(C===this.
Cf)return;this.Cf=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping(
));},JF:function(QG){this.Ba(QG);},W:function(C){if(C)this.AD(0x1,0x0);else this.
AD(0x0,0x1);},ExtendClipping:function(GZ,G0,G1,GY){var A;var IF=this.O;var CW=IF;
if(GZ<0)GZ=0;if(GZ>255)GZ=255;if(G0<0)G0=0;if(G0>255)G0=255;if(G1<0)G1=0;if(G1>255
)G1=255;if(GY<0)GY=0;if(GY>255)GY=255;CW=[].concat(CW[0]-(Math.max(GZ,this.IM)&0xFF
),CW.slice(1,4));CW=B.abN(CW,CW[2]+(Math.max(G0,this.IN)&0xFF));CW=B.abP(CW,CW[1
]-(Math.max(G1,this.IO)&0xFF));CW=[].concat(CW.slice(0,3),CW[3]+(Math.max(GY,this.
IL)&0xFF));if(GZ!==this.IM){if((!!this.G&&((this.F&0x1)===0x1))&&!((this.F&0x80000
)===0x80000)){var I=CW;I=B.abN(I,IF[0]);this.G.Ac(I);}this.IM=GZ&0xFF;}if(G0!==this.
IN){if((!!this.G&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var I=CW;
I=[].concat(IF[2],I.slice(1,4));this.G.Ac(I);}this.IN=G0&0xFF;}if(G1!==this.IO){
if((!!this.G&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var I=CW;I=[
].concat(I.slice(0,3),IF[1]);this.G.Ac(I);}this.IO=G1&0xFF;}if(GY!==this.IL){if((
!!this.G&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var I=CW;I=B.abP(
I,IF[3]);this.G.Ac(I);}this.IL=GY&0xFF;}},NT:function(AK,aClip,aOffset,Az,aBlend
){},NQ:function(AK,aClip,aOffset,Az,aBlend){},GetMaximalSize:function(){return EH;
},GetMinimalSize:function(){return AH;},DispatchEvent:function(AE){var A;var H=this.
Dq;var Ar=(D.P.isPrototypeOf(H)?H:null);var Be=null;if(!!H&&((((H.F&0x10000)===0x10000
)||((H.F&0x40000)===0x40000))||((H.F&0x20000)===0x20000))){H=null;Ar=null;}if(!!
Ar)Be=Ar.DispatchEvent(AE);else if(!!H)Be=H.Bo(AE);if(!Be)Be=this.Bo(AE);if(!Be)
Be=this.Nh(AE);return Be;},BroadcastEventAtPosition:function(AE,MN,aFilter){var A;
var H=this.Cc;var Be=null;while(!!H&&!Be){if((!aFilter||((A=aFilter)&&((H.F&A)===
A)))&&B.wa(H.GetExtent(),MN)){var Ar=(D.P.isPrototypeOf(H)?H:null);if(!!Ar)Be=Ar.
BroadcastEventAtPosition(AE,B.abe(MN,Ar.O.slice(0,2)),aFilter);else Be=H.Bo(AE);
}H=H.At;}if(!Be)Be=this.Bo(AE);return Be;},BroadcastEvent:function(AE,aFilter){var
A;var H=this.Cc;var Be=null;while(!!H&&!Be){if(!aFilter||((A=aFilter)&&((H.F&A)===
A))){var Ar=(D.P.isPrototypeOf(H)?H:null);if(!!Ar)Be=Ar.BroadcastEvent(AE,aFilter
);else Be=H.Bo(AE);}H=H.At;}if(!Be)Be=this.Bo(AE);if(!Be)Be=this.Nh(AE);return Be;
},JB:function(aSize){},Fg:function(Dh){},Bd:function(){this.F=this.F|0x8000;B.pe([
this,this.Kf],this);},Ac:function(Av){var A;var Ar=this;while(!!Ar&&!((Av[0]>=Av[
2])||(Av[1]>=Av[3]))){if(!Ar.G&&(Ar!==this)){Ar.Ac(Av);return;}if(!((Ar.F&0x1)===
0x1))return;var I=Ar.O;Av=B.abh(Av,I.slice(0,2));if(!((Ar.F&0x80000)===0x80000)){
I=[].concat(I[0]-Ar.IM,I.slice(1,4));I=B.abP(I,I[1]-Ar.IO);I=B.abN(I,I[2]+Ar.IN);
I=[].concat(I.slice(0,3),I[3]+Ar.IL);Av=B.lb(Av,I);}Ar=Ar.G;}},Me:function(M,aFilter
){var A;if(!M||(M.G!==this))return null;var FR=M.AG;var FU=M.At;var IW=0x10000;if(((
aFilter&0x10000)===0x10000))IW=0x0;while(!!FR||!!FU){if((!!FR&&(!aFilter||((A=aFilter
)&&((FR.F&A)===A))))&&(!IW||!((A=IW)&&((FR.F&A)===A))))return FR;if((!!FU&&(!aFilter||((
A=aFilter)&&((FU.F&A)===A))))&&(!IW||!((A=IW)&&((FU.F&A)===A))))return FU;if(!!FR
)FR=FR.AG;if(!!FU)FU=FU.At;}return null;},OG:function(M,Dy){var A;if(!M)throw new
Error(DT);if(M.G!==this)throw new Error(Dw);var Fi=M;var Bk=M;var Hi=M.DQ;while(((
Dy>0)&&!!Fi.AG)&&(Fi.AG.DQ<=Hi)){Fi=Fi.AG;Dy=Dy-1;}while(((Dy<0)&&!!Bk.At)&&(Bk.
At.DQ>=Hi)){Bk=Bk.At;Dy=Dy+1;}if((Fi===M)&&(Bk===M))return;if(((M.F&0x401)===0x401
)){if(!!M.At&&!!M.AY)M.At.F=M.At.F|0x800;M.F=M.F|0x800;this.F=this.F|0x4000;B.pe([
this,this.C2],this);}if(((M.F&0x200)===0x200)){if(!!M.At)M.At.F=M.At.F|0x800;M.F=
M.F|0x800;this.F=this.F|0x4000;B.pe([this,this.C2],this);}if(!!M.At)M.At.AG=M.AG;
if(!!M.AG)M.AG.At=M.At;if(this.C9===M)this.C9=M.AG;if(this.Cc===M)this.Cc=M.At;if(
Fi!==M){M.AG=Fi.AG;M.At=Fi;Fi.AG=M;if(!!M.AG)M.AG.At=M;}if(Bk!==M){M.AG=Bk;M.At=
Bk.At;Bk.At=M;if(!!M.At)M.At.AG=M;}if(!M.AG)this.Cc=M;if(!M.At)this.C9=M;if(((M.
F&0x1)===0x1))this.Ac(M.GetClipping());},HI:function(M){var A;if(!M)throw new Error(
DU);if(M.G!==this)throw new Error(Dw);if((((M.F&0x401)===0x401)&&!!M.At)&&!!M.AY
){M.At.F=M.At.F|0x800;this.F=this.F|0x4000;B.pe([this,this.C2],this);}if(((M.F&0x200
)===0x200)){if(!!M.At)M.At.F=M.At.F|0x800;this.F=this.F|0x4000;B.pe([this,this.C2
],this);}M.AY=null;if(this.Dq===M)this.Hw(this.Me(M,0x14));if(!!M.At)M.At.AG=M.AG;
if(!!M.AG)M.AG.At=M.At;if(this.C9===M)this.C9=M.AG;if(this.Cc===M)this.Cc=M.At;M.
G=null;M.AG=null;M.At=null;if((!((M.F&0x10)===0x10)&&((M.F&0x100000)===0x100000)
)&&!((this.F&0x80)===0x80))M.AD(0x10,0x0);if(((M.F&0x1)===0x1))this.Ac(M.GetClipping(
));},T:function(M,Dy){var A;if(!M)throw new Error(Ei);if(!!M.G)throw new Error(FL
);var Bk=null;var Hi=M.DQ;if(((Dy<0)&&!!this.Cc)&&(this.Cc.DQ>=Hi)){Bk=this.Cc;Dy=
Dy+1;}while((((Dy<0)&&!!Bk)&&!!Bk.At)&&(Bk.At.DQ>=Hi)){Bk=Bk.At;Dy=Dy+1;}if((!Bk&&
!!this.Cc)&&(this.Cc.DQ>Hi))Bk=this.Cc;while((!!Bk&&!!Bk.At)&&(Bk.At.DQ>Hi))Bk=Bk.
At;if(!Bk){M.G=this;M.At=this.Cc;if(!!this.Cc)this.Cc.AG=M;if(!this.C9)this.C9=M;
this.Cc=M;}else{M.G=this;M.At=Bk.At;M.AG=Bk;Bk.At=M;if(!!M.At)M.At.AG=M;else this.
C9=M;}if(((M.F&0x1)===0x1))this.Ac(M.GetClipping());if(((M.F&0x80)===0x80)&&(B.aam(
).NW()===M))M.AD(0x10,0x0);else if(!((this.F&0x10)===0x10)&&((M.F&0x200010)===0x200010
))M.AD(0x0,0x10);else if((((this.F&0x10)===0x10)&&!((M.F&0x10)===0x10))&&((M.F&0x100000
)===0x100000))M.AD(0x10,0x0);if(((!this.Dq&&((M.F&0x4)===0x4))&&((M.F&0x10)===0x10
))&&!((M.F&0x10000)===0x10000))this.Hw(M);if(((M.F&0x401)===0x401)){M.F=M.F|0x800;
this.F=this.F|0x4000;B.pe([this,this.C2],this);}if(((M.F&0x200)===0x200)){M.F=M.
F|0x800;this.F=this.F|0x4000;B.pe([this,this.C2],this);}},Hr:function(){return this.
Cf;},_Init:function(aArg){D.AO._Init.call(this,aArg);this.__proto__=D.P;this.F=0x10001F;
this.Cu(aArg);},_Mark:function(E){var A;D.AO._Mark.call(this,E);if((A=this.C9)&&(
A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Cc)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.J0)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Dq)&&(A._cycle!=
E))A._Mark(A._cycle=E);},_className:"Core::Group"};D.Root={C0:null,A2:B.abi(10,null
,null),HQ:null,Fm:null,Ja:0,A9:0,BW:B.abi(10,0,null),JS:B.abi(10,B.wg,null),DD:B.
abi(10,0,null),EM:B.abi(10,B.wf,null),HS:B.abi(10,0,null),Fl:B.abi(10,B.wf,null)
,DC:B.abi(10,B.wf,null),CX:B.abi(10,B.wf,null),Ej:B.abi(10,B.wf,null),AF:0,JX:0,
JW:0,Ck:B.abi(4,0,null),Bs:B.abi(4,B.wg,null),Br:0,IS:0,HU:0,LQ:true,Cu:function(
aArg){if(!!!this.K){var obj=this;B.abD(obj);}},H7:function(){return this;},Cs:function(
AK,aClip,aOffset,Az,aBlend){var fullScreenUpdate=false;fullScreenUpdate=B.m7;if(
!fullScreenUpdate)AK.Kw(aClip,B.abh(B.abh(aClip,aOffset),this.O.slice(0,2)),0x00000000
,0x00000000,0x00000000,0x00000000,false);D.P.Cs.call(this,AK,aClip,aOffset,Az,aBlend
);},AD:function(CV,Df){var A;D.P.AD.call(this,CV,Df);if(!this.G&&(((CV&0x1)===0x1
)||((Df&0x1)===0x1)))this.Ac([0,0,(A=this.O)[2]-A[0],A[3]-A[1]]);if(!this.G&&(((
CV&0x2)===0x2)||((Df&0x2)===0x2)))this.Ac([0,0,(A=this.O)[2]-A[0],A[3]-A[1]]);},
Hw:function(C){if((C!==null)||!C)D.P.Hw.call(this,C);},Ba:function(C){var A;var Dl=
this.Cf;D.P.Ba.call(this,C);if(((Dl!==this.Cf)&&!this.G)&&((this.F&0x1)===0x1))this.
Ac([0,0,(A=this.O)[2]-A[0],A[3]-A[1]]);},DispatchEvent:function(AE){if(!!AE){AE.
H$=!!this.A9;if(!!this.A9)AE.Ax=this.A9;}var Be;Be=D.P.DispatchEvent.call(this,AE
);this.A9=0;return Be;},BroadcastEvent:function(AE,aFilter){if(!!AE){AE.H$=!!this.
A9;if(!!this.A9)AE.Ax=this.A9;}var Be=D.P.BroadcastEvent.call(this,AE,aFilter);this.
A9=0;return Be;},Ac:function(Av){var A;if(this.Ja>0)throw new Error(Ix);var fullScreenUpdate=
false;fullScreenUpdate=B.m7;if(fullScreenUpdate)Av=[0,0,(A=this.O)[2]-A[0],A[3]-
A[1]];if(!!this.G){D.P.Ac.call(this,Av);return;}Av=B.lb(B.abh(Av,this.O.slice(0,
2)),this.O);if((Av[0]>=Av[2])||(Av[1]>=Av[3]))return;var L;for(L=0;L<this.Br;L=L+
1)if(!(((A=B.lb(this.Bs.Get(L),Av))[0]>=A[2])||(A[1]>=A[3]))){this.Bs.Set(L,B.wC(
this.Bs.Get(L),Av));this.Ck.Set(L,B.aaH(this.Bs.Get(L)));return;}if(this.Br<3){this.
Bs.Set(this.Br,Av);this.Ck.Set(this.Br,B.aaH(Av));this.Br=this.Br+1;return;}var A8;
var CZ;var IR=0;var IT=0;var MT=2147483647;this.Bs.Set(this.Br,Av);this.Ck.Set(this.
Br,B.aaH(Av));for(A8=0;A8<=this.Br;A8=A8+1)for(CZ=A8+1;CZ<=this.Br;CZ=CZ+1){var Ke=
B.aaH(B.wC(this.Bs.Get(A8),this.Bs.Get(CZ)));var Ng=((Ke<<8)/(this.Ck.Get(A8)+this.
Ck.Get(CZ)))|0;if(Ng<MT){MT=Ng;IR=A8;IT=CZ;}}this.Bs.Set(IR,B.wC(this.Bs.Get(IR)
,this.Bs.Get(IT)));this.Ck.Set(IR,B.aaH(this.Bs.Get(IR)));if(IT!==this.Br){this.
Bs.Set(IT,this.Bs.Get(this.Br));this.Ck.Set(IT,this.Ck.Get(this.Br));}},Qg:function(
){var BX=B._NewObject(D.H5,0);BX.H$=!!this.A9;if(!!this.A9)BX.Ax=this.A9;return BX;
},G7:function(){var BX=B._NewObject(D.ET,0);BX.H$=!!this.A9;if(!!this.A9)BX.Ax=this.
A9;return BX;},HR:function(){var BX=B._NewObject(D.Kr,0);BX.H$=!!this.A9;if(!!this.
A9)BX.Ax=this.A9;return BX;},Qh:function(Ap){var L;var G_=false;for(L=0;L<10;L=L+
1)if(!!this.A2.Get(L)){var AZ=this.CX.Get(L);var Ar=this.A2.Get(L).G;while(!!Ar&&(
Ar!==this)){AZ=B.abe(AZ,Ar.O.slice(0,2));Ar=Ar.G;}if(!Ar&&(this.A2.Get(L)!==this
)){var tmp=this.A2.Get(L);this.AF=L;this.A2.Set(L,null);tmp.Bo(this.G7().InitializeUp(
L,this.Fl.Get(L),this.EM.Get(L),this.DD.Get(L),this.BW.Get(L)+1,this.DC.Get(L),false
,this.CX.Get(L),this.Ej.Get(L)));this.BroadcastEvent(this.HR().InitializeUp(L,this.
BW.Get(L)+1,false,tmp,this.CX.Get(L)),0x18);}else{this.DD.Set(L,(this.Fm.Ax-this.
HS.Get(L))|0);if(this.DD.Get(L)<10)this.DD.Set(L,10);this.AF=L;this.A2.Get(L).Bo(
this.G7().InitializeHold(L,AZ,this.EM.Get(L),this.DD.Get(L),this.BW.Get(L)+1,this.
DC.Get(L),this.CX.Get(L),this.Ej.Get(L)));G_=true;}}if(!G_)this.Fm.R(false);},GetFPS:
function(){var ticksCount=0;var M4=0;ticksCount=((new Date).getTime()-B.v$)|0;if(
!!this.JX&&(ticksCount>this.JX))M4=((this.JW*1000)/((ticksCount-this.JX)|0))|0;this.
JW=0;this.JX=ticksCount;return M4;},Update:function(){var A;if(!this.HQ)this.HQ=
B._NewObject(B.Graphics.Canvas,0);this.HQ.Mm([(A=this.O)[2]-A[0],A[3]-A[1]]);this.
HQ.Update();return this.UpdateGE20(this.HQ);},UpdateGE20:function(AK){if(!this.BeginUpdate(
))return AS;var ER=this.UpdateCanvas(AK,AH);this.EndUpdate();return ER;},EndUpdate:
function(){if(this.Br>0){this.JW=this.JW+1;this.Br=0;}},UpdateCanvas:function(AK
,aOffset){var A;var ER=AS;var P$=[].concat(aOffset,B.abf(AK.FrameSize,aOffset));
var L;var A8=this.Br;this.Ja=this.Ja+1;AK.G$=this;for(L=0;(L<A8)&&(L<4);L=L+1)if(
this.Ck.Get(L)>0){this.Cs(AK,B.abg(this.Bs.Get(L),aOffset),[-aOffset[0],-aOffset[
1]],255,true);ER=B.wC(ER,B.lb(P$,this.Bs.Get(L)));}else A8=A8+1;AK.G$=null;this.
Ja=this.Ja-1;if(!((ER[0]>=ER[2])||(ER[1]>=ER[3])))return B.abg(ER,aOffset);else return ER;
},GetUpdateRegion:function(JI){var L;var A8=this.Br;if(JI<0)return AS;for(L=0;(L<
A8)&&(L<4);L=L+1)if(!this.Ck.Get(L)){A8=A8+1;JI=JI+1;}else if(L===JI)return this.
Bs.Get(L);return AS;},BeginUpdate:function(){var A;var L;if(!!this.Br&&!B.aaY(this.
Bs.Get(0),[0,0,(A=this.O)[2]-A[0],A[3]-A[1]])){var Nw=B.abi(3,B.wg,null);var Nv=
this.Br;for(L=0;L<Nv;L++)Nw.Set(L,this.Bs.Get(L));for(L=0;L<Nv;L++){var Ni=B.abh(
Nw.Get(L),this.O.slice(0,2));var Nj=this.Jb(Ni);if(!B.aaY(Ni,Nj))this.Ac(B.abg(Nj
,this.O.slice(0,2)));}}var A8;var CZ;for(A8=0;A8<(this.Br-1);A8++)if(this.Ck.Get(
A8)>0)for(CZ=A8+1;CZ<this.Br;CZ++)if(this.Ck.Get(CZ)>0){var Ke=B.aaH(B.wC(this.Bs.
Get(A8),this.Bs.Get(CZ)));if(((Ke-this.Ck.Get(A8))-this.Ck.Get(CZ))<0){this.Bs.Set(
A8,B.wC(this.Bs.Get(A8),this.Bs.Get(CZ)));this.Ck.Set(A8,Ke);this.Ck.Set(CZ,0);}
}for(L=this.Br-1;L>=0;L--)if(!this.Ck.Get(L))this.Br=this.Br-1;return this.Br;},
DoesNeedUpdate:function(){if(this.Br>0)return true;return false;},Initialize:function(
aSize){this.N([].concat(AH,aSize));if(this.LQ)this.F=this.F|0x60;else this.F=this.
F|0x20;this.Ac(this.O);return this;},SetRootFocus:function(Lz){if(Lz===this.LQ)return false;
this.LQ=Lz;if(!Lz)this.AD(0x0,0x40);else this.AD(0x40,0x0);return true;},SetUserInputTimestamp:
function(P8){this.A9=P8;},DriveKeyboardHitting:function(Bv,Iz,DV){var A;var L7=!
!this.C0;if(!!this.C0&&((!DV||(this.IS!==Bv))||(this.HU!==Iz))){var BX=null;var H=(
D.B_.isPrototypeOf(A=this.C0)?A:null);var DY=(D.FA.isPrototypeOf(A=this.C0)?A:null
);if(!!this.IS)BX=B._NewObject(D.KeyEvent,0).Initialize(this.IS,false);if(this.HU
!==0x00)BX=B._NewObject(D.KeyEvent,0).Initialize2(this.HU,false);if(!!DY)DY.Bo(BX
);else if(!!H)H.Bo(BX);this.IS=0;this.HU=0x00;this.C0=null;}if(!!this.C0){var BX=
null;var H=(D.B_.isPrototypeOf(A=this.C0)?A:null);var DY=(D.FA.isPrototypeOf(A=this.
C0)?A:null);if(!!Bv)BX=B._NewObject(D.KeyEvent,0).Initialize(Bv,true);if(this.HU
!==0x00)BX=B._NewObject(D.KeyEvent,0).Initialize2(Iz,true);if(!!DY)DY.Bo(BX);else
if(!!H)H.Bo(BX);}if(!this.C0&&DV){if(!!Bv)this.C0=this.DispatchEvent(B._NewObject(
D.KeyEvent,0).Initialize(Bv,true));if(Iz!==0x00)this.C0=this.DispatchEvent(B._NewObject(
D.KeyEvent,0).Initialize2(Iz,true));if(!(D.FA.isPrototypeOf(A=this.C0)?A:null)&&
!(D.B_.isPrototypeOf(A=this.C0)?A:null))this.C0=null;this.IS=Bv;this.HU=Iz;L7=L7||
!!this.C0;}this.A9=0;return L7;},DriveCursorMovement:function(BN){return this.DriveMultiTouchMovement(
this.AF,BN);},DriveMultiTouchMovement:function(U,BN){if((U<0)||(U>9)){this.A9=0;
return false;}var Bx=B.abe(BN,this.CX.Get(U));this.CX.Set(U,BN);if(!this.A2.Get(
U)||B.aaX(Bx,AH)){this.A9=0;return false;}var AZ=BN;var Ar=this.A2.Get(U).G;while(
!!Ar&&(Ar!==this)){AZ=B.abe(AZ,Ar.O.slice(0,2));Ar=Ar.G;}if(!Ar&&(this.A2.Get(U)
!==this)){var tmp=this.A2.Get(U);this.AF=U;this.A2.Set(U,null);tmp.Bo(this.G7().
InitializeUp(U,this.Fl.Get(U),this.EM.Get(U),this.DD.Get(U),this.BW.Get(U)+1,this.
DC.Get(U),false,this.CX.Get(U),this.Ej.Get(U)));this.BroadcastEvent(this.HR().InitializeUp(
U,this.BW.Get(U)+1,false,tmp,BN),0x18);}else{this.Fl.Set(U,AZ);this.AF=U;this.A2.
Get(U).Bo(this.Qg().Initialize(U,AZ,this.EM.Get(U),Bx,this.DD.Get(U),this.BW.Get(
U)+1,this.DC.Get(U),BN,this.Ej.Get(U)));}this.A9=0;return true;},DriveCursorHitting:
function(DV,U,BN){return this.DriveMultiTouchHitting(DV,U,BN);},DriveMultiTouchHitting:
function(DV,U,BN){if((U<0)||(U>9)){this.A9=0;return false;}var ticksCount=this.A9;
if(!ticksCount)ticksCount=((new Date).getTime()-B.v$)|0;var QE=this.A9;this.DriveMultiTouchMovement(
U,BN);BN=this.CX.Get(U);this.A9=QE;if(DV)this.Ej.Set(U,BN);if(DV&&!this.A2.Get(U
)){var BG;var AZ=BN;if(B.wa(this.JS.Get(U),BN)&&((ticksCount-this.HS.Get(U))<=250
))this.BW.Set(U,this.BW.Get(U)+1);else this.BW.Set(U,0);this.JS.Set(U,B.abh(GW,BN
));this.HS.Set(U,ticksCount);BG=this.EU(B.abh(GW,BN),U,this.BW.Get(U)+1,null,null
,0x0);if(!!BG){this.BroadcastEvent(this.HR().InitializeDown(U,this.BW.Get(U)+1,false
,BG.B_,BN),0x18);this.A2.Set(U,BG.B_);this.DC.Set(U,BG.Dt);}else{this.A2.Set(U,null
);this.DC.Set(U,AH);this.A9=0;return false;}var Ar=BG.B_.G;while(!!Ar&&(Ar!==this
)){AZ=B.abe(AZ,Ar.O.slice(0,2));Ar=Ar.G;}this.EM.Set(U,AZ);this.Fl.Set(U,AZ);this.
DD.Set(U,0);this.Fm.R(true);this.AF=U;this.A2.Get(U).Bo(this.G7().InitializeDown(
U,AZ,this.BW.Get(U)+1,this.DC.Get(U),false,BN));this.A9=0;return true;}if(!DV&&!
!this.A2.Get(U)){var AZ=BN;var Ar=this.A2.Get(U).G;while(!!Ar&&(Ar!==this)){AZ=B.
abe(AZ,Ar.O.slice(0,2));Ar=Ar.G;}if(!Ar)AZ=this.Fl.Get(U);this.AF=U;var tmp=this.
A2.Get(U);this.A2.Set(U,null);tmp.Bo(this.G7().InitializeUp(U,AZ,this.EM.Get(U),
this.DD.Get(U),this.BW.Get(U)+1,this.DC.Get(U),false,BN,this.Ej.Get(U)));this.BroadcastEvent(
this.HR().InitializeUp(U,this.BW.Get(U)+1,false,tmp,BN),0x18);this.A9=0;return true;
}this.A9=0;return false;},Mu:function(EK,ML,EL,G4){if(EK===this)EK=null;if(!this.
A2.Get(this.AF))return;var BG;BG=this.EU(B.abh(GW,this.CX.Get(this.AF)),this.AF,
1,EK,EL,G4);if(!!BG&&(this.A2.Get(this.AF)!==BG.B_))this.Mb(BG.B_,BG.Dt);if(!BG&&(
this.A2.Get(this.AF)!==ML))this.Mb(ML,AH);},Mb:function(EK,Dx){if(!this.A2.Get(this.
AF)||(this.A2.Get(this.AF)===EK))return;var tmp=this.A2.Get(this.AF);this.A2.Set(
this.AF,null);tmp.Bo(this.G7().InitializeUp(this.AF,this.Fl.Get(this.AF),this.EM.
Get(this.AF),this.DD.Get(this.AF),this.BW.Get(this.AF)+1,this.DC.Get(this.AF),true
,this.CX.Get(this.AF),this.Ej.Get(this.AF)));this.BroadcastEvent(this.HR().InitializeUp(
this.AF,this.BW.Get(this.AF)+1,true,tmp,this.CX.Get(this.AF)),0x18);var AZ=this.
CX.Get(this.AF);var Ar=null;if(!!EK)Ar=EK.G;while(!!Ar&&(Ar!==this)){AZ=B.abe(AZ
,Ar.O.slice(0,2));Ar=Ar.G;}if(!Ar&&(EK!==this)){this.A2.Set(this.AF,null);return;
}this.BroadcastEvent(this.HR().InitializeDown(this.AF,this.BW.Get(this.AF)+1,true
,EK,this.CX.Get(this.AF)),0x18);var ticksCount=0;ticksCount=((new Date).getTime(
)-B.v$)|0;this.A2.Set(this.AF,EK);this.DC.Set(this.AF,Dx);this.EM.Set(this.AF,AZ
);this.Fl.Set(this.AF,AZ);this.BW.Set(this.AF,0);this.DD.Set(this.AF,0);this.HS.
Set(this.AF,ticksCount);this.Ej.Set(this.AF,this.CX.Get(this.AF));this.A2.Get(this.
AF).Bo(this.G7().InitializeDown(this.AF,AZ,this.BW.Get(this.AF)+1,this.DC.Get(this.
AF),true,this.Ej.Get(this.AF)));},NW:function(){return null;},_Init:function(aArg
){D.P._Init.call(this,aArg);D.Timer._Init.call(this.Fm={K:this},0);(this.A2=[]).
__proto__=D.Root.A2;(this.BW=[]).__proto__=D.Root.BW;(this.JS=[]).__proto__=D.Root.
JS;(this.DD=[]).__proto__=D.Root.DD;(this.EM=[]).__proto__=D.Root.EM;(this.HS=[]
).__proto__=D.Root.HS;(this.Fl=[]).__proto__=D.Root.Fl;(this.DC=[]).__proto__=D.
Root.DC;(this.CX=[]).__proto__=D.Root.CX;(this.Ej=[]).__proto__=D.Root.Ej;(this.
Ck=[]).__proto__=D.Root.Ck;(this.Bs=[]).__proto__=D.Root.Bs;this.__proto__=D.Root;
this.F=0x10007F;this.Fm.FF(10);this.Fm.FH=[this,this.Qh];this.Cu(aArg);},_Done:function(
){this.__proto__=D.P;this.Fm._Done();D.P._Done.call(this);},_ReInit:function(){D.
P._ReInit.call(this);this.Fm._ReInit();},_Mark:function(E){var A;D.P._Mark.call(
this,E);if((A=this.C0)&&(A._cycle!=E))A._Mark(A._cycle=E);B.aa6(this.A2,E);if((A=
this.HQ)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Fm)._cycle!=E)A._Mark(A._cycle=
E);},_className:"Core::Root"};D.Event={Ax:0,H$:false,Cu:function(aArg){this.Ax=this.
Jk();},Jk:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.v$)|0;return ticksCount;
},_Init:function(aArg){this.__proto__=D.Event;this.Cu(aArg);B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.K)&&(A._cycle!=E))A._Mark(A._cycle=E);},K:null,_cycle:0,_observers:null,_className:
"Core::Event"};D.KeyEvent={Bn:0,AM:0,Down:false,Initialize2:function(Bv,DV){this.
Bn=0;this.AM=Bv;this.Down=DV;if((Bv>=0x30)&&(Bv<=0x39))this.Bn=(10+Bv)-48;if((Bv>=
0x41)&&(Bv<=0x5A))this.Bn=(105+Bv)-65;if((Bv>=0x61)&&(Bv<=0x7A))this.Bn=(105+Bv)-
97;if(Bv===0x20)this.Bn=131;if(!this.Bn)switch(Bv){case 0x2B:this.Bn=132;break;case
0x2D:this.Bn=133;break;case 0x2A:this.Bn=134;break;case 0x2F:this.Bn=135;break;case
0x3D:this.Bn=136;break;case 0x2E:this.Bn=137;break;case 0x2C:this.Bn=138;break;case
0x3A:this.Bn=139;break;case 0x3B:this.Bn=140;break;default:;}return this;},Initialize:
function(Bv,DV){this.Bn=Bv;this.Down=DV;this.AM=0x00;var LH=Bv-10;var LG=Bv-105;
if((LH>=0)&&(LH<=9))this.AM=(48+LH)&0xFFFF;if((LG>=0)&&(LG<=25))this.AM=(65+LG)&
0xFFFF;if(Bv===131)this.AM=0x20;if(this.AM===0x00)switch(Bv){case 132:this.AM=0x2B;
break;case 133:this.AM=0x2D;break;case 134:this.AM=0x2A;break;case 135:this.AM=0x2F;
break;case 136:this.AM=0x3D;break;case 137:this.AM=0x2E;break;case 138:this.AM=0x2C;
break;case 139:this.AM=0x3A;break;case 140:this.AM=0x3B;break;default:;}return this;
},N0:function(MJ){switch(MJ){case 141:return((this.AM>=0x41)&&(this.AM<=0x5A))||((
this.AM>=0x61)&&(this.AM<=0x7A));case 142:return(((this.AM>=0x41)&&(this.AM<=0x5A
))||((this.AM>=0x61)&&(this.AM<=0x7A)))||((this.AM>=0x30)&&(this.AM<=0x39));case
143:return(this.AM>=0x30)&&(this.AM<=0x39);case 144:return(((this.AM>=0x41)&&(this.
AM<=0x46))||((this.AM>=0x61)&&(this.AM<=0x66)))||((this.AM>=0x30)&&(this.AM<=0x39
));case 145:return this.AM!==0x00;case 146:return(this.AM===0x00)&&!!this.Bn;case
147:return(((this.Bn===6)||(this.Bn===7))||(this.Bn===4))||(this.Bn===5);case 148:
return(this.AM!==0x00)||!!this.Bn;default:;}return MJ===this.Bn;},_Init:function(
aArg){D.Event._Init.call(this,aArg);this.__proto__=D.KeyEvent;},_className:"Core::KeyEvent"
};D.Kr={Lb:null,CO:B.wf,Ch:0,Bt:0,Down:false,Cl:false,InitializeUp:function(U,Cz
,GX,LC,DW){this.Down=false;this.Bt=U;this.Ch=Cz;this.CO=DW;this.Lb=LC;this.Cl=GX;
return this;},InitializeDown:function(U,Cz,GX,LC,DW){this.Down=true;this.Bt=U;this.
Ch=Cz;this.CO=DW;this.Lb=LC;this.Cl=GX;return this;},_Init:function(aArg){D.Event.
_Init.call(this,aArg);this.__proto__=D.Kr;},_Mark:function(E){var A;D.Event._Mark.
call(this,E);if((A=this.Lb)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Core::CursorGrabEvent"
};D.ET={H9:B.wf,CO:B.wf,Ch:0,BJ:0,CP:B.wf,BD:B.wf,Bt:0,Down:false,Cl:false,InitializeHold:
function(U,FM,IB,IC,Cz,Dx,DW,IA){this.Down=true;this.Bt=U;this.BD=B.abf(FM,Dx);this.
CP=B.abf(IB,Dx);this.BJ=IC;this.Ch=Cz;this.CO=DW;this.H9=IA;return this;},InitializeUp:
function(U,FM,IB,IC,Cz,Dx,GX,DW,IA){this.Down=false;this.Bt=U;this.BD=B.abf(FM,Dx
);this.CP=B.abf(IB,Dx);this.BJ=IC;this.Ch=Cz;this.Cl=GX;this.CO=DW;this.H9=IA;return this;
},InitializeDown:function(U,FM,Cz,Dx,GX,DW){this.Down=true;this.Bt=U;this.BD=B.abf(
FM,Dx);this.CP=B.abf(FM,Dx);this.BJ=0;this.Ch=Cz;this.Cl=GX;this.CO=DW;this.H9=DW;
return this;},_Init:function(aArg){D.Event._Init.call(this,aArg);this.__proto__=
D.ET;},_className:"Core::CursorEvent"};D.H5={H9:B.wf,CO:B.wf,Ch:0,BJ:0,Dt:B.wf,CP:
B.wf,BD:B.wf,Bt:0,Initialize:function(U,FM,IB,aOffset,IC,P5,Dx,DW,IA){this.Bt=U;
this.BD=B.abf(FM,Dx);this.CP=B.abf(IB,Dx);this.Dt=aOffset;this.BJ=IC;this.Ch=P5;
this.CO=DW;this.H9=IA;return this;},_Init:function(aArg){D.Event._Init.call(this
,aArg);this.__proto__=D.H5;},_className:"Core::DragEvent"};D.Ih={Cs:function(AK,
aClip,aOffset,Az,aBlend){},GetClipping:function(){var A;var I=D.AO.GetClipping.call(
this);if(((this.F&0x80000)===0x80000)){var Hh=AS;var H;for(H=this.AG;!!H&&!((H.F&
0x200)===0x200);H=H.AG)if(((H.F&0x1)===0x1))Hh=B.wC(Hh,H.GetClipping());I=B.wC(I
,Hh);}return I;},AD:function(CV,Df){var A;var J4=this.F;if((!!this.G&&((this.F&0x80001
)===0x80001))&&((Df&0x80000)===0x80000))this.G.Ac(this.GetClipping());D.AO.AD.call(
this,CV,Df);if(((!!this.G&&((this.F&0x1)===0x1))&&((CV&0x80000)===0x80000))&&!((
J4&0x80000)===0x80000))this.G.Ac(this.GetClipping());},N:function(C){var A;if(B.
aaY(C,this.O))return;var FS=[(A=this.O)[2]-A[0],A[3]-A[1]];var LY=[C[2]-C[0],C[3
]-C[1]];var HY=!B.aaX(FS,LY);var Bx=B.abe(C.slice(0,2),this.O.slice(0,2));if(!B.
aaX(Bx,AH)&&!HY){var H=this.AG;while(!!H&&!((H.F&0x200)===0x200)){if(((H.F&0x400
)===0x400)){var tmp=((H.F&0x100)===0x100);H.KS(Bx,tmp);}H=H.AG;}}if((HY&&(FS[0]>
0))&&(FS[1]>0)){var AU=this.O;var H=this.AG;while(!!H&&!((H.F&0x200)===0x200)){if(((
H.F&0x400)===0x400)){if(!!H.AY&&(H.AY.Hf!==this))H.AY=null;if(!H.AY&&(H.B1!==0x14
))H.IP(AU,this);}H=H.AG;}}D.AO.N.call(this,C);if(!!this.G&&HY){this.F=this.F|0x1000;
if(!((this.G.F&0x2000)===0x2000)){this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.C2],
this);}}},_Init:function(aArg){D.AO._Init.call(this,aArg);this.__proto__=D.Ih;this.
F=0x203;},_className:"Core::Outline"};D.Bp={KU:null,Jr:null,Jq:null,Du:null,BK:null
,As:0,Bt:0,Ax:0,Ch:0,BJ:0,Dt:B.wf,CP:B.wf,BD:B.wf,OH:8,Mi:1,Down:false,Dr:false,
Cl:false,LM:false,IU:0,Cs:function(AK,aClip,aOffset,Az,aBlend){},Bo:function(AE){
var A;var Ai=(D.ET.isPrototypeOf(AE)?AE:null);var BO=(D.H5.isPrototypeOf(AE)?AE:
null);var JY=this.Dr;var Dm;var C_;var I_;var BP;var G9;if(!Ai&&!BO)return null;
Dm=(!!Ai&&Ai.Down)&&!Ai.BJ;C_=(!!Ai&&Ai.Down)&&(Ai.BJ>0);I_=(!!Ai&&Ai.Down)&&(Ai.
BJ>this.IU);BP=!!Ai&&!Ai.Down;G9=!!BO;if(Dm)this.IU=((A=(Ai.Cl?0:50))&0x80)?A|0xFFFFFF00:
A&0xFF;if(Dm){var Hb=0;var Ek;this.As=this.As|(1<<Ai.Bt);for(Ek=this.As&4095;Ek>
0;Ek=Ek>>1)if(!!(Ek&1))Hb=Hb+1;if(Hb===1)this.As=(this.As|16777216)|(4096<<Ai.Bt
);}if(BP&&(this.As<16777216)){var Dn=this.H7();var BG=null;if(!!Dn){var L_=(!!this.
At?this.At:this.G);BG=Dn.EU(B.abh(HO,Ai.CO),Ai.Bt,Ai.Ch,null,L_,0x0);}if(!!BG){var
L;for(L=0;L<10;L++)if(!!(this.As&(1<<L)))BG.B_.Bo(B._NewObject(D.ET,0).InitializeDown(
L,Ai.BD,Ai.Ch,AH,true,Ai.CO));for(L=0;L<10;L++)if(!!(this.As&(1<<L)))BG.B_.Bo(B.
_NewObject(D.ET,0).InitializeUp(L,Ai.BD,Ai.BD,0,Ai.Ch,AH,false,Ai.CO,Ai.CO));}}if(
BP)this.As=(this.As&~(1<<Ai.Bt))|33554432;if(I_&&(this.As<16777216))this.As=this.
As|67108864;if(BP&&Ai.Cl)this.As=this.As|67108864;if(BP&&!(this.As&16777215))this.
As=0;if(C_&&(this.As>=67108864)){var Dn=this.H7();if(!!Dn)Dn.Mu(null,null,this,0x0
);}if((C_&&!!(this.As&16777216))&&!!(this.As&33554432)){C_=false;BP=true;}if(!!Ai&&
!(this.As&(4096<<Ai.Bt)))return this;if(!!BO&&!(this.As&(4096<<BO.Bt)))return this;
if(BP&&!(this.As&16777216))return this;if(((Dm||G9)||C_)&&((this.As<16777216)||(
this.As>=33554432)))return this;if(BP)this.As=this.As&3758100479;if(BP&&!(this.As&
16777215))this.As=0;if(!!Ai){this.Down=Dm||C_;this.Dr=this.KG(Ai.BD);this.CP=Ai.
CP;this.BD=Ai.BD;this.Dt=AH;this.BJ=Ai.BJ;this.Ch=Ai.Ch;this.Cl=Ai.Cl;this.Bt=Ai.
Bt;this.Ax=Ai.Ax;if(Ai.Down&&!Ai.BJ)JY=false;}if(!!BO){this.Down=true;this.Dr=this.
KG(BO.BD);this.CP=BO.CP;this.BD=BO.BD;this.Dt=BO.Dt;this.BJ=BO.BJ;this.Ch=BO.Ch;
this.Bt=BO.Bt;this.Cl=false;this.Ax=BO.Ax;}var LL=this.Down;if(!!BO)(A=this.KU)?
A[1].call(A[0],this):null;if((!!Ai&&this.Down)&&!this.BJ)(A=this.BK)?A[1].call(A[
0],this):null;if((this.Down&&this.Dr)&&!JY){this.LM=true;(A=this.Jq)?A[1].call(A[
0],this):null;}if(this.LM&&(((LL&&!this.Dr)&&JY)||((!LL&&this.Dr)&&JY))){this.LM=
false;(A=this.Jr)?A[1].call(A[0],this):null;}if(!!Ai&&!LL)(A=this.Du)?A[1].call(
A[0],this):null;return this;},EU:function(Av,U,Cz,EJ,EL,G4){var A;if(!!EJ&&(EJ!==
this))return null;if((Cz<1)||(Cz>this.Mi))return null;if(this.As>=33554432)return null;
if((this.As>=16777216)&&!(this.As&(4096<<U)))return null;if(this.NY()){var I=B.lb(
Av,this.GetExtent());if(!((I[0]>=I[2])||(I[1]>=I[3]))){var CB=B.aaI(Av);var Bx=AH;
if(CB[0]<I[0])Bx=[I[0]-CB[0],Bx[1]];if(CB[0]>=I[2])Bx=[(I[2]-CB[0])-1,Bx[1]];if(
CB[1]<I[1])Bx=[Bx[0],I[1]-CB[1]];if(CB[1]>=I[3])Bx=[Bx[0],(I[3]-CB[1])-1];return B.
_NewObject(D.Je,0).Initialize(this,Bx);}}else{var A3=B.abi(9,B.wf,null);var L;A3.
Set(0,B.aaI(Av));A3.Set(1,A3.Get(0));A3.Set(2,A3.Get(0));A3.Set(3,A3.Get(0));A3.
Set(4,A3.Get(0));A3.Set(1,[Av[0],A3.Get(1)[1]]);A3.Set(2,[A3.Get(2)[0],Av[1]]);A3.
Set(3,[Av[2],A3.Get(3)[1]]);A3.Set(4,[A3.Get(4)[0],Av[3]]);A3.Set(5,Av.slice(0,2
));A3.Set(6,[Av[2],Av[1]]);A3.Set(7,[Av[0],Av[3]]);A3.Set(8,Av.slice(2,4));for(L=
0;L<9;L=L+1)if(this.KG(A3.Get(L)))return B._NewObject(D.Je,0).Initialize(this,B.
abe(A3.Get(L),A3.Get(0)));}return null;},K5:function(C){if(C<1)C=1;this.OH=C;},Ig:
function(C){if(C<1)C=1;this.Mi=C;},R:function(C){if(C)this.AD(0x100000,0x0);else
this.AD(0x0,0x100000);},_Init:function(aArg){D.Ee._Init.call(this,aArg);this.__proto__=
D.Bp;this.F=0x10011B;},_Mark:function(E){var A;D.Ee._Mark.call(this,E);if((A=this.
KU)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Jr)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.Jq)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);
if((A=this.Du)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.BK)&&((A=A[0
])._cycle!=E))A._Mark(A._cycle=E);},_className:"Core::SimpleTouchHandler"};D.C5={
K0:null,KV:null,K8:null,As:0,Ms:0,CP:B.wf,Mc:0,Jx:0,Angle:0,Down:false,Dr:false,
Cl:false,IU:0,Cs:function(AK,aClip,aOffset,Az,aBlend){},Bo:function(AE){var A;var
Ai=(D.ET.isPrototypeOf(AE)?AE:null);var BO=(D.H5.isPrototypeOf(AE)?AE:null);var Dm;
var C_;var I_;var BP;var G9;if(!Ai&&!BO)return null;Dm=(!!Ai&&Ai.Down)&&!Ai.BJ;C_=(
!!Ai&&Ai.Down)&&(Ai.BJ>0);I_=(!!Ai&&Ai.Down)&&(Ai.BJ>this.IU);BP=!!Ai&&!Ai.Down;
G9=!!BO;if(Dm)this.IU=((A=(Ai.Cl?0:50))&0x80)?A|0xFFFFFF00:A&0xFF;if(Dm){var Hb=
0;var Ek;this.As=this.As|(1<<Ai.Bt);for(Ek=this.As&4095;Ek>0;Ek=Ek>>1)if(!!(Ek&1
))Hb=Hb+1;if(Hb===1)this.As=(this.As|16777216)|(4096<<Ai.Bt);}if(BP&&(this.As<16777216
)){var Dn=this.H7();var BG=null;if(!!Dn){var L_=(!!this.At?this.At:this.G);BG=Dn.
EU(B.abh(HO,Ai.CO),Ai.Bt,Ai.Ch,null,L_,0x0);}if(!!BG){var L;for(L=0;L<10;L++)if(
!!(this.As&(1<<L)))BG.B_.Bo(B._NewObject(D.ET,0).InitializeDown(L,Ai.BD,Ai.Ch,AH
,true,Ai.CO));for(L=0;L<10;L++)if(!!(this.As&(1<<L)))BG.B_.Bo(B._NewObject(D.ET,
0).InitializeUp(L,Ai.BD,Ai.BD,0,Ai.Ch,AH,false,Ai.CO,Ai.CO));}}if(BP)this.As=(this.
As&~(1<<Ai.Bt))|33554432;if(I_&&(this.As<16777216))this.As=this.As|67108864;if(BP&&
Ai.Cl)this.As=this.As|67108864;if(BP&&!(this.As&16777215))this.As=0;if(C_&&(this.
As>=67108864)){var Dn=this.H7();if(!!Dn)Dn.Mu(null,null,this,0x0);}if((C_&&!!(this.
As&16777216))&&!!(this.As&33554432)){C_=false;BP=true;}if(!!Ai&&!(this.As&(4096<<
Ai.Bt)))return this;if(!!BO&&!(this.As&(4096<<BO.Bt)))return this;if(BP&&!(this.
As&16777216))return this;if(((Dm||G9)||C_)&&((this.As<16777216)||(this.As>=33554432
)))return this;if(BP)this.As=this.As&3758100479;if(BP&&!(this.As&16777215))this.
As=0;if(((!Dm&&!BP)&&!G9)&&!C_)return this;var AZ=AH;var ID=this.Angle;var J5=this.
Ms;var Qs=J5;var Aj;if((Dm||BP)||C_){this.Dr=B.wa(this.O,Ai.BD);this.Cl=Ai.Cl;this.
CP=Ai.CP;this.Down=Dm||C_;AZ=B.abe(Ai.BD,B.aaI(this.O));}if(G9){this.Dr=B.wa(this.
O,BO.BD);this.CP=BO.CP;this.Down=true;AZ=B.abe(BO.BD,B.aaI(this.O));}var I=Math.
sqrt((AZ[0]*AZ[0])+(AZ[1]*AZ[1]));if(I>=8){J5=I|0;ID=(Math.acos(AZ[0]/I)*B.rE)|0;
if(AZ[1]>0)ID=360-ID;}Aj=ID-this.Angle;if(Aj>180)Aj=Aj-360;if(Aj<-180)Aj=Aj+360;
this.Angle=ID;this.Mc=Aj;this.Jx=this.Jx+Aj;this.Ms=J5;if(Dm){this.Mc=0;this.Jx=
0;(A=this.K8)?A[1].call(A[0],this):null;}if(!!Aj||(J5!==Qs))(A=this.K0)?A[1].call(
A[0],this):null;if(BP)(A=this.KV)?A[1].call(A[0],this):null;return this;},EU:function(
Av,U,Cz,EJ,EL,G4){var A;if(!!EJ&&(EJ!==this))return null;if(this.As>=33554432)return null;
if((this.As>=16777216)&&!(this.As&(4096<<U)))return null;var I=B.lb(Av,this.O);if(
!((I[0]>=I[2])||(I[1]>=I[3]))){var CB=B.aaI(Av);var Bx=AH;if(CB[0]<I[0])Bx=[I[0]-
CB[0],Bx[1]];if(CB[0]>=I[2])Bx=[(I[2]-CB[0])-1,Bx[1]];if(CB[1]<I[1])Bx=[Bx[0],I[
1]-CB[1]];if(CB[1]>=I[3])Bx=[Bx[0],(I[3]-CB[1])-1];return B._NewObject(D.Je,0).Initialize(
this,Bx);}return null;},_Init:function(aArg){D.AO._Init.call(this,aArg);this.__proto__=
D.C5;this.F=0x10011B;},_Mark:function(E){var A;D.AO._Mark.call(this,E);if((A=this.
K0)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.KV)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.K8)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);
},_className:"Core::RotateTouchHandler"};D.FA={AG:null,Du:null,BK:null,Hg:0,Ax:0
,Mt:0,BU:148,Bn:0,AM:0,By:true,Down:false,K9:false,Cu:function(aArg){var A;var G$=(
D.P.isPrototypeOf(A=this.K)?A:null);if(!G$)throw new Error(Iy);this.AG=G$.J0;G$.
J0=this;},Bo:function(AE){var A;if(!!AE&&AE.N0(this.BU)){this.Down=AE.Down;this.
Bn=AE.Bn;this.AM=AE.AM;this.Ax=AE.Ax;if(AE.Down){this.Mt=this.Hg;this.K9=this.Hg>
0;if(!this.K9)(A=this.BK)?A[1].call(A[0],this):null;this.Hg=this.Hg+1;return true;
}if(!AE.Down){this.K9=this.Hg>1;this.Mt=this.Hg-1;this.Hg=0;(A=this.Du)?A[1].call(
A[0],this):null;return true;}}return false;},_Init:function(aArg){this.__proto__=
D.FA;this.Cu(aArg);B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:
function(){},_Mark:function(E){var A;if((A=this.AG)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.Du)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.BK)&&((A=
A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.K)&&(A._cycle!=E))A._Mark(A._cycle=
E);},K:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"};D.Je={B_:
null,H4:0,Dt:B.wf,Initialize:function(M,aOffset){this.B_=M;this.Dt=aOffset;this.
H4=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:function(
aArg){this.__proto__=D.Je;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;}
,_ReInit:function(){},_Mark:function(E){var A;if((A=this.B_)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.K)&&(A._cycle!=E))A._Mark(A._cycle=E);},K:null,_cycle:0,_observers:
null,_className:"Core::CursorHit"};D.Jl={Hf:null,CE:B.wg,AU:B.wg,isEmpty:false,_Init:
function(aArg){this.__proto__=D.Jl;B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.Hf)&&(A._cycle!=
E))A._Mark(A._cycle=E);if((A=this.K)&&(A._cycle!=E))A._Mark(A._cycle=E);},K:null
,_cycle:0,_observers:null,_className:"Core::LayoutContext"};D.Jm={I5:B.wf,I4:B.wf
,I3:B.wf,I2:B.wf,_Init:function(aArg){D.Jl._Init.call(this,aArg);this.__proto__=
D.Jm;},_className:"Core::LayoutQuadContext"};D.Fd={resource:null,C3:function(){this.
resource=null;},Cu:function(aArg){this.resource=aArg;},_Init:function(aArg){this.
__proto__=D.Fd;this.Cu(aArg);B.h7++;},_Done:function(){this.C3();this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.K)&&(A._cycle
!=E))A._Mark(A._cycle=E);},K:null,_cycle:0,_observers:null,_className:"Core::Resource"
};D.Timer={FH:null,timer:null,Ax:0,Period:1000,Hl:0,By:false,C3:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},J7:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=B.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},FF:function(C){if(C<0)C=0;if(C===this.Period)return;
this.Period=C;if(this.By)this.J7(this.Hl,C);},FB:function(C){if(C<0)C=0;if(C===this.
Hl)return;this.Hl=C;if(this.By)this.J7(C,this.Period);},R:function(C){if(C===this.
By)return;this.By=C;if(C)this.J7(this.Hl,this.Period);else this.J7(0,0);this.Ax=
this.Jk();},Jk:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.v$
)|0;return ticksCount;},Trigger:function(){var A;this.Ax=this.Jk();if(!this.Period
)this.R(false);(A=this.FH)?A[1].call(A[0],this):null;},_Init:function(aArg){this.
__proto__=D.Timer;B.h7++;},_Done:function(){this.C3();this.__proto__=null;B.h7--;
},_ReInit:function(){},_Mark:function(E){var A;if((A=this.FH)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.K)&&(A._cycle!=E))A._Mark(A._cycle=E);},K:null
,_cycle:0,_observers:null,_className:"Core::Timer"};D.Ax={Jy:0,KR:0,KD:0,H3:0,Jp:
0,My:0,Qn:function(){var result=0;{var d=new Date;result=Math.trunc(d.getTime()/
1000-(d.getTimezoneOffset()*60));}return result;},On:function(C){var A;C+=62162035200;
if(C<0)C=0;var H1=Math.trunc(C/86400)|0;var M2=(((H1>=0)?H1:H1-146096)/146097)|0;
var IK=H1-(M2*146097);var Kh=((((IK-((IK/1460)|0))+((IK/36524)|0))-((IK/146096)|
0))/365)|0;var BQ=Kh+(M2*400);var M1=IK-(((365*Kh)+((Kh/4)|0))-((Kh/100)|0));var
LX=(((5*M1)+2)/153)|0;var d=(M1-((((153*LX)+2)/5)|0))+1;var C1=LX+((LX<10)?3:-9);
var AQ=Math.trunc(C/3600)%24|0;var L=Math.trunc(C/60)%60|0;var D2=C%60|0;this.My=
BQ+((C1<=2)?1:0);this.Oh(C1);this.FC(d);this.Oc(AQ+((AQ<0)?24:0));this.Og(L+((L<
0)?60:0));this.Ol(D2+((D2<0)?60:0));},N8:function(){return B._NewObject(D.Ax,0).
Initialize(this.Qn());},Gz:function(){var A;var d=this.H3;var C1=this.Jp+((this.
Jp>2)?-2:10);var BQ=this.My-((this.Jp<=2)?1:0);var Ah=(BQ/100)|0;BQ%=100;d+=((((((((
26*C1)-2)/10)|0)+BQ)+((BQ/4)|0))+((Ah/4)|0))-(2*Ah));if(d>=0)return d%7;else return(
7-(-d%7))%7;},Ol:function(C){if(C<0)C=0;if(C>59)C=59;this.Jy=C;},Og:function(C){
if(C<0)C=0;if(C>59)C=59;this.KR=C;},Oc:function(C){if(C<0)C=0;if(C>23)C=23;this.
KD=C;},FC:function(C){if(C<1)C=1;if(C>31)C=31;this.H3=C;},Oh:function(C){if(C<1)
C=1;if(C>12)C=12;this.Jp=C;},Initialize:function(P7){this.On(P7);return this;},_Init:
function(aArg){this.__proto__=D.Ax;B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.K)&&(A._cycle!=
E))A._Mark(A._cycle=E);},K:null,_cycle:0,_observers:null,_className:"Core::Time"
};D.Mr={KW:null,Y:null,Nf:function(Ap){var A;(A=this.KW)?A[1].call(A[0],this):null;
},Ed:function(C){if(B.aaZ(this.Y,C))return;if(!!this.Y)B.z$([this,this.Nf],this.
Y,0);this.Y=C;if(!!this.Y)B.zX([this,this.Nf],this.Y,0);},_Init:function(aArg){this.
__proto__=D.Mr;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(
){},_Mark:function(E){var A;if((A=this.KW)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=
E);if((A=this.Y)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.K)&&(A._cycle
!=E))A._Mark(A._cycle=E);},K:null,_cycle:0,_observers:null,_className:"Core::PropertyObserver"
};D.RI={RJ:0x1,QP:0x2,Q1:0x4,RF:0x8,By:0x10,Fe:0x20,Q2:0x40,Rb:0x80,QZ:0x100,Q7:
0x200,QY:0x400,Rl:0x800,JB:0x1000,RH:0x2000,Ri:0x4000,Rj:0x8000,QW:0x10000,Rh:0x20000
,Rv:0x40000,QX:0x80000,Rk:0x100000,QV:0x200000};D.B1={Rm:0x1,Rn:0x2,QL:0x4,QM:0x8
,QN:0x10,QK:0x20};D.Q4={Rc:0,RC:1,QS:2,Q8:3,Rp:4,RD:5,RE:6,QT:7,QU:8,Q_:9,Q9:10,
Rr:11,Rq:12};D.KeyCode={NoKey:0,Ok:1,Exit:2,Menu:3,Up:4,Down:5,Left:6,Right:7,PageUp:
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
346};D.Ro={RN:0x1,RK:0x2,RL:0x4,RM:0x8,Q$:0x10,Q3:0x20};
D._Init=function(){D.Ee.__proto__=D.B_;D.AO.__proto__=D.B_;D.P.__proto__=D.AO;D.Root.
__proto__=D.P;D.KeyEvent.__proto__=D.Event;D.Kr.__proto__=D.Event;D.ET.__proto__=
D.Event;D.H5.__proto__=D.Event;D.Ih.__proto__=D.AO;D.Bp.__proto__=D.Ee;D.C5.__proto__=
D.AO;D.Jm.__proto__=D.Jl;};D._ReInit=function(){};D.Ci=function(E){};return D;})(
);

/* Embedded Wizard */