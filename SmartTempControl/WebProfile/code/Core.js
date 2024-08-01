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
var AI=[0,0];var AU=[0,0,0,0];var Ch="The view does not belong to this group";var
EQ=[800,480];var DZ="No view to restack";var DD="View is not in this group";var D0=
"No view to remove";var Er="No view to add";var FS="View already in a group";var
IE="Recursive invalidate during active update cycle.";var G4=[-8,-8,9,9];var HX=[
0,0,1,1];var IF="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";
D.Cf={AG:null,At:null,G:null,A0:null,F:0x103,DV:0,Cc:0x14,IW:function(Ap,JS){},FN:
function(C){if(this.DV===C)return;this.DV=C;if(!!this.G){var Fy=this.AG;var Aj=0;
while(!!Fy&&(C>Fy.DV)){Fy=Fy.AG;Aj=Aj+1;}Fy=this.At;while(!!Fy&&(C<Fy.DV)){Fy=Fy.
At;Aj=Aj-1;}if(!!Aj)this.G.OW(this,Aj);}},HP:function(C){var A;var Aj=C^this.Cc;
if(!Aj)return;this.Cc=C;if(!!this.A0&&!((this.F&0x400)===0x400)){this.G.F=this.G.
F|0x5000;B.pe([A=this.G,A.C4],this);this.G.Ac([0,0,(A=this.G.Q)[2]-A[0],A[3]-A[1
]]);}if(!!this.A0&&((this.F&0x400)===0x400)){this.A0.Hn.F=this.A0.Hn.F|0x1000;this.
G.F=this.G.F|0x4000;B.pe([A=this.G,A.C4],this);}},Ie:function(){var Ar=this.G;while(
!!Ar){var Ds=(D.Root.isPrototypeOf(Ar)?Ar:null);if(!!Ds)return Ds;Ar=Ar.G;}return null;
},Cx:function(AM,aClip,aOffset,Az,aBlend){},GetClipping:function(){return this.GetExtent(
);},Br:function(AE){return null;},E2:function(Av,V,CE,ER,ET,Ha){return null;},Ji:
function(Av){return Av;},Jj:function(Ap,Dl){return AI;},K2:function(aOffset,JR){
},GetExtent:function(){return AU;},AD:function(CX,Dk){var A;if(((this.F&0x200)===
0x200))CX=CX&~0x400;var L9=(this.F&~Dk)|CX;var D3=L9^this.F;this.F=L9;if(!!this.
G&&!!(D3&0x14)){var Nh=((this.F&0x14)===0x14);if(Nh&&!this.G.Dw)this.G.HF(this);
if(!Nh&&(this.G.Dw===this))this.G.HF(this.G.Mp(this,0x14));}if(!!this.G&&!!(D3&0x403
))this.G.Ac(this.GetClipping());if(((!!this.A0&&!!this.G)&&((L9&0x400)===0x400))&&((
D3&0x1)===0x1)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.C4
],this);}if(!!this.G&&((D3&0x400)===0x400)){this.A0=null;this.F=this.F|0x800;this.
G.F=this.G.F|0x4000;B.pe([A=this.G,A.C4],this);}if(((((D3&0x100000)===0x100000)&&((
Dk&0x100000)===0x100000))&&((this.F&0x10)===0x10))&&!((this.F&0x200080)===0x200080
))this.AD(0x0,0x10);if(((((D3&0x100000)===0x100000)&&((CX&0x100000)===0x100000))&&
!((this.F&0x10)===0x10))&&(!((this.F&0x200000)===0x200000)||((!((this.F&0x80)===
0x80)&&!!this.G)&&((this.G.F&0x10)===0x10))))this.AD(0x10,0x0);if(((((D3&0x200000
)===0x200000)&&((Dk&0x200000)===0x200000))&&!((this.F&0x10)===0x10))&&((this.F&0x100000
)===0x100000))this.AD(0x10,0x0);if((((((D3&0x200000)===0x200000)&&((CX&0x200000)===
0x200000))&&((this.F&0x100010)===0x100010))&&!((this.F&0x80)===0x80))&&((!!this.
G&&!((this.G.F&0x10)===0x10))||((((this.F&0x10000)===0x10000)&&!!this.G)&&(null!==
this))))this.AD(0x0,0x10);},_Init:function(aArg){this.__proto__=D.Cf;B.h7++;},_Done:
function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var
A;if((A=this.AG)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.At)&&(A._cycle!=E
))A._Mark(A._cycle=E);if((A=this.G)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.
A0)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.J)&&(A._cycle!=E))A._Mark(A._cycle=
E);},J:null,_cycle:0,_observers:null,_className:"Core::View"};D.En={BH:B.wf,Ce:B.
wf,BG:B.wf,Cd:B.wf,IW:function(Ap,JS){var Aq=B._NewObject(D.Jv,0);this.A0=null;Aq.
CJ=this.GetExtent();Aq.AX=Ap;Aq.Hn=JS;Aq.I9=this.Cd;Aq.I_=this.BG;Aq.I$=this.Ce;
Aq.Ja=this.BH;this.A0=Aq;},Jj:function(Ap,Dl){var A;var A6=this.Cc;var Aq=(D.Jv.
isPrototypeOf(A=this.A0)?A:null);var Aa=Aq.CJ[0];var Ab=Aq.CJ[1];var Ad=Aq.CJ[2];
var X=Aq.CJ[3];var CI=[Ap[2]-Ap[0],Ap[3]-Ap[1]];var AY=Ad-Aa;var AT=X-Ab;if(!Dl){
var DM=[(A=Aq.AX)[2]-A[0],A[3]-A[1]];Aa=Aa-Aq.AX[0];Ab=Ab-Aq.AX[1];if(DM[0]!==CI[
0]){var Bj=((A6&0x4)===0x4);var Bk=((A6&0x8)===0x8);var Ex=((A6&0x1)===0x1);if(!
Bj&&(Ex||!Bk))Aa=((Aa*CI[0])/DM[0])|0;if(!Bk&&(Ex||!Bj)){Ad=Ad-Aq.AX[0];Ad=((Ad*
CI[0])/DM[0])|0;Ad=Ad-CI[0];}else Ad=Ad-Aq.AX[2];Aa=Aa+Ap[0];Ad=Ad+Ap[2];if(!Ex){
if(Bj&&!Bk)Ad=Aa+AY;else if(!Bj&&Bk)Aa=Ad-AY;else{Aa=Aa+((((Ad-Aa)-AY)/2)|0);Ad=
Aa+AY;}}}else{Ad=Ad-Aq.AX[2];Aa=Aa+Ap[0];Ad=Ad+Ap[2];}if(DM[1]!==CI[1]){var Bl=((
A6&0x10)===0x10);var Bi=((A6&0x20)===0x20);var Ey=((A6&0x2)===0x2);if(!Bl&&(Ey||
!Bi))Ab=((Ab*CI[1])/DM[1])|0;if(!Bi&&(Ey||!Bl)){X=X-Aq.AX[1];X=((X*CI[1])/DM[1])|
0;X=X-CI[1];}else X=X-Aq.AX[3];Ab=Ab+Ap[1];X=X+Ap[3];if(!Ey){if(Bl&&!Bi)X=Ab+AT;
else if(!Bl&&Bi)Ab=X-AT;else{Ab=Ab+((((X-Ab)-AT)/2)|0);X=Ab+AT;}}}else{X=X-Aq.AX[
3];Ab=Ab+Ap[1];X=X+Ap[3];}}else{switch(Dl){case 3:{Aa=Ap[0];Ad=Aa+AY;}break;case
4:{Ad=Ap[2];Aa=Ad-AY;}break;case 1:{Ab=Ap[1];X=Ab+AT;}break;case 2:{X=Ap[3];Ab=X-
AT;}break;default:;}if((Dl===3)||(Dl===4)){var Bl=((A6&0x10)===0x10);var Bi=((A6&
0x20)===0x20);var Ey=((A6&0x2)===0x2);if(Ey){Ab=Ap[1];X=Ap[3];}else if(Bl&&!Bi){
Ab=Ap[1];X=Ab+AT;}else if(Bi&&!Bl){X=Ap[3];Ab=X-AT;}else{Ab=Ap[1]+((((Ap[3]-Ap[1
])-AT)/2)|0);X=Ab+AT;}}if((Dl===1)||(Dl===2)){var Bj=((A6&0x4)===0x4);var Bk=((A6&
0x8)===0x8);var Ex=((A6&0x1)===0x1);if(Ex){Aa=Ap[0];Ad=Ap[2];}else if(Bj&&!Bk){Aa=
Ap[0];Ad=Aa+AY;}else if(Bk&&!Bj){Ad=Ap[2];Aa=Ad-AY;}else{Aa=Ap[0]+((((Ap[2]-Ap[0
])-AY)/2)|0);Ad=Aa+AY;}}}Aq.isEmpty=(Aa>=Ad)||(Ab>=X);AY=(Ad-Aa)-1;AT=(X-Ab)-1;var
Fu=Aq.CJ[0];var Fv=Aq.CJ[1];var EW=(Aq.CJ[2]-Fu)-1;var EV=(Aq.CJ[3]-Fv)-1;if(!EW
)EW=1;if(!EV)EV=1;if(((this.F&0x100)===0x100)){this.Cd=[Aa+((((Aq.I9[0]-Fu)*AY)/
EW)|0),Ab+((((Aq.I9[1]-Fv)*AT)/EV)|0)];this.BG=[Aa+((((Aq.I_[0]-Fu)*AY)/EW)|0),Ab+((((
Aq.I_[1]-Fv)*AT)/EV)|0)];this.Ce=[Aa+((((Aq.I$[0]-Fu)*AY)/EW)|0),Ab+((((Aq.I$[1]-
Fv)*AT)/EV)|0)];this.BH=[Aa+((((Aq.Ja[0]-Fu)*AY)/EW)|0),Ab+((((Aq.Ja[1]-Fv)*AT)/
EV)|0)];}else{this.BR([Aa+((((Aq.I9[0]-Fu)*AY)/EW)|0),Ab+((((Aq.I9[1]-Fv)*AT)/EV
)|0)]);this.BS([Aa+((((Aq.I_[0]-Fu)*AY)/EW)|0),Ab+((((Aq.I_[1]-Fv)*AT)/EV)|0)]);
this.BT([Aa+((((Aq.I$[0]-Fu)*AY)/EW)|0),Ab+((((Aq.I$[1]-Fv)*AT)/EV)|0)]);this.BU([
Aa+((((Aq.Ja[0]-Fu)*AY)/EW)|0),Ab+((((Aq.Ja[1]-Fv)*AT)/EV)|0)]);this.A0=Aq;}return[
AY+1,AT+1];},K2:function(aOffset,JR){if(JR){this.Cd=B.abf(this.Cd,aOffset);this.
BG=B.abf(this.BG,aOffset);this.Ce=B.abf(this.Ce,aOffset);this.BH=B.abf(this.BH,aOffset
);}else{this.BR(B.abf(this.Cd,aOffset));this.BS(B.abf(this.BG,aOffset));this.BT(
B.abf(this.Ce,aOffset));this.BU(B.abf(this.BH,aOffset));}},GetExtent:function(){
if(!!this.A0&&this.A0.isEmpty)return AU;var Aa=this.Cd[0];var Ab=this.Cd[1];var Ad=
this.Ce[0];var X=this.Ce[1];if((((this.BH[0]!==Aa)||(this.BG[1]!==Ab))||(this.BG[
0]!==Ad))||(this.BH[1]!==X)){if(this.BG[0]<Aa)Aa=this.BG[0];if(this.Ce[0]<Aa)Aa=
this.Ce[0];if(this.BH[0]<Aa)Aa=this.BH[0];if(this.BG[1]<Ab)Ab=this.BG[1];if(this.
Ce[1]<Ab)Ab=this.Ce[1];if(this.BH[1]<Ab)Ab=this.BH[1];if(this.Cd[0]>Ad)Ad=this.Cd[
0];if(this.BG[0]>Ad)Ad=this.BG[0];if(this.BH[0]>Ad)Ad=this.BH[0];if(this.Cd[1]>X
)X=this.Cd[1];if(this.BG[1]>X)X=this.BG[1];if(this.BH[1]>X)X=this.BH[1];}else{var
tmp;if(Ad<Aa){tmp=Aa;Aa=Ad;Ad=tmp;}if(X<Ab){tmp=Ab;Ab=X;X=tmp;}}return[Aa,Ab,Ad+
1,X+1];},BU:function(C){var A;if(B.aaX(C,this.BH))return;if(!!this.G&&((this.F&0x1
)===0x1))this.G.Ac(this.GetClipping());this.A0=null;this.BH=C;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.GetClipping());if((!!this.G&&((this.F&0x400)===0x400
))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;
B.pe([A=this.G,A.C4],this);}},BT:function(C){var A;if(B.aaX(C,this.Ce))return;if(
!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping());this.A0=null;this.Ce=
C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping());if((!!this.G&&((
this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.
G.F=this.G.F|0x4000;B.pe([A=this.G,A.C4],this);}},BS:function(C){var A;if(B.aaX(
C,this.BG))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping()
);this.A0=null;this.BG=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping(
));if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.C4],this);}},BR:function(
C){var A;if(B.aaX(C,this.Cd))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(
this.GetClipping());this.A0=null;this.Cd=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ac(this.GetClipping());if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000
)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.C4],this
);}},KQ:function(G_){var A5=B.abi(4,B.wf,null);var M=0;var A9=3;var L1=false;var
L2=false;A5.Set(0,this.Cd);A5.Set(1,this.BG);A5.Set(2,this.Ce);A5.Set(3,this.BH);
while(M<4){var NQ=A5.Get(M)[0];var Kr=A5.Get(M)[1];var Rf=A5.Get(A9)[0];var Mk=A5.
Get(A9)[1];if(((Kr>G_[1])!==(Mk>G_[1]))||((Kr<G_[1])!==(Mk<G_[1]))){var NR=((((Rf-
NQ)*(G_[1]-Kr))/(Mk-Kr))|0)+NQ;if(G_[0]>NR)L1=!L1;if(G_[0]<NR)L2=!L2;}A9=M;M=M+1;
}return L1||L2;},Od:function(){return((((this.Cd[0]===this.BH[0])&&(this.BG[0]===
this.Ce[0]))&&(this.Cd[1]===this.BG[1]))&&(this.Ce[1]===this.BH[1]))||((((this.Cd[
0]===this.BG[0])&&(this.Ce[0]===this.BH[0]))&&(this.Cd[1]===this.BH[1]))&&(this.
BG[1]===this.Ce[1]));},_Init:function(aArg){D.Cf._Init.call(this,aArg);this.__proto__=
D.En;},_className:"Core::QuadView"};D.AQ={Q:B.wg,IW:function(Ap,JS){var Aq=B._NewObject(
D.Ju,0);Aq.CJ=this.Q;Aq.AX=Ap;Aq.Hn=JS;this.A0=Aq;},Jj:function(Ap,Dl){var A;var
A6=this.Cc;var Aq=this.A0;var Aa=Aq.CJ[0];var Ab=Aq.CJ[1];var Ad=Aq.CJ[2];var X=
Aq.CJ[3];var CI=[Ap[2]-Ap[0],Ap[3]-Ap[1]];var AY=Ad-Aa;var AT=X-Ab;if(!Dl){var DM=[(
A=Aq.AX)[2]-A[0],A[3]-A[1]];Aa=Aa-Aq.AX[0];Ab=Ab-Aq.AX[1];if(DM[0]!==CI[0]){var Bj=((
A6&0x4)===0x4);var Bk=((A6&0x8)===0x8);var Ex=((A6&0x1)===0x1);if(!Bj&&(Ex||!Bk)
)Aa=((Aa*CI[0])/DM[0])|0;if(!Bk&&(Ex||!Bj)){Ad=Ad-Aq.AX[0];Ad=((Ad*CI[0])/DM[0])|
0;Ad=Ad-CI[0];}else Ad=Ad-Aq.AX[2];Aa=Aa+Ap[0];Ad=Ad+Ap[2];if(!Ex){if(Bj&&!Bk)Ad=
Aa+AY;else if(!Bj&&Bk)Aa=Ad-AY;else{Aa=Aa+((((Ad-Aa)-AY)/2)|0);Ad=Aa+AY;}}}else{
Ad=Ad-Aq.AX[2];Aa=Aa+Ap[0];Ad=Ad+Ap[2];}if(DM[1]!==CI[1]){var Bl=((A6&0x10)===0x10
);var Bi=((A6&0x20)===0x20);var Ey=((A6&0x2)===0x2);if(!Bl&&(Ey||!Bi))Ab=((Ab*CI[
1])/DM[1])|0;if(!Bi&&(Ey||!Bl)){X=X-Aq.AX[1];X=((X*CI[1])/DM[1])|0;X=X-CI[1];}else
X=X-Aq.AX[3];Ab=Ab+Ap[1];X=X+Ap[3];if(!Ey){if(Bl&&!Bi)X=Ab+AT;else if(!Bl&&Bi)Ab=
X-AT;else{Ab=Ab+((((X-Ab)-AT)/2)|0);X=Ab+AT;}}}else{X=X-Aq.AX[3];Ab=Ab+Ap[1];X=X+
Ap[3];}}else{switch(Dl){case 3:{Aa=Ap[0];Ad=Aa+AY;}break;case 4:{Ad=Ap[2];Aa=Ad-
AY;}break;case 1:{Ab=Ap[1];X=Ab+AT;}break;case 2:{X=Ap[3];Ab=X-AT;}break;default:;
}if((Dl===3)||(Dl===4)){var Bl=((A6&0x10)===0x10);var Bi=((A6&0x20)===0x20);var Ey=((
A6&0x2)===0x2);if(Ey){Ab=Ap[1];X=Ap[3];}else if(Bl&&!Bi){Ab=Ap[1];X=Ab+AT;}else if(
Bi&&!Bl){X=Ap[3];Ab=X-AT;}else{Ab=Ap[1]+((((Ap[3]-Ap[1])-AT)/2)|0);X=Ab+AT;}}if((
Dl===1)||(Dl===2)){var Bj=((A6&0x4)===0x4);var Bk=((A6&0x8)===0x8);var Ex=((A6&0x1
)===0x1);if(Ex){Aa=Ap[0];Ad=Ap[2];}else if(Bj&&!Bk){Aa=Ap[0];Ad=Aa+AY;}else if(Bk&&
!Bj){Ad=Ap[2];Aa=Ad-AY;}else{Aa=Ap[0]+((((Ap[2]-Ap[0])-AY)/2)|0);Ad=Aa+AY;}}}Aq.
isEmpty=(Aa>=Ad)||(Ab>=X);if(((this.F&0x100)===0x100))this.Q=[Aa,Ab,Ad,X];else{this.
L([Aa,Ab,Ad,X]);this.A0=Aq;}return[Ad-Aa,X-Ab];},K2:function(aOffset,JR){if(JR)this.
Q=B.abh(this.Q,aOffset);else this.L(B.abh(this.Q,aOffset));},GetExtent:function(
){return this.Q;},L:function(C){var A;if(B.aaY(C,this.Q))return;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ac(this.GetClipping());this.A0=null;this.Q=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ac(this.GetClipping());if((!!this.G&&((this.F&0x400)===
0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;
B.pe([A=this.G,A.C4],this);}},_Init:function(aArg){D.Cf._Init.call(this,aArg);this.
__proto__=D.AQ;},_className:"Core::RectView"};D.P={Da:null,Cj:null,J$:null,Dw:null
,Cl:255,IS:0,IV:0,IU:0,IT:0,Cy:function(aArg){this.Bf();},Cx:function(AM,aClip,aOffset
,Az,aBlend){var A;Az=((Az+1)*this.Cl)>>8;aBlend=aBlend&&((this.F&0x2)===0x2);this.
QU(AM,aClip,B.abf(aOffset,this.Q.slice(0,2)),Az,aBlend);},GetClipping:function(){
var A;var I=this.Q;I=[].concat(I[0]-this.IT,I.slice(1,4));I=B.abP(I,I[1]-this.IV
);I=B.abN(I,I[2]+this.IU);I=[].concat(I.slice(0,3),I[3]+this.IS);if(((this.F&0x80000
)===0x80000)){var Hp=AU;var H;for(H=this.Da;!!H;H=H.AG)if(((H.F&0x1)===0x1))Hp=B.
wC(Hp,H.GetClipping());I=B.wC(I,B.abh(Hp,this.Q.slice(0,2)));}return I;},E2:function(
Av,V,CE,ER,ET,Ha){var A;var H=this.Cj;var Hg=null;var W=AU;var C0=null;if(((A=B.
lb(Av,this.Q))[0]>=A[2])||(A[1]>=A[3]))return null;Av=B.abg(Av,this.Q.slice(0,2)
);if(!!ET){H=ET;while(!!H&&(H.G!==this))H=H.G;}while(!!H){if(((H.F&0x400)===0x400
)&&!C0){C0=H.At;while(!!C0&&!((C0.F&0x200)===0x200))C0=C0.At;if(!!C0)W=B.lb(Av,C0.
GetExtent());else W=AU;}if(C0===H){C0=null;W=AU;}if((!!ER&&!!(D.P.isPrototypeOf(
H)?H:null))||((((((H.F&0x8)===0x8)&&((H.F&0x10)===0x10))&&!((H.F&0x40000)===0x40000
))&&!((H.F&0x20000)===0x20000))&&(!((H.F&0x10000)===0x10000)||(null===H)))){var CJ=
H.GetExtent();var J4=ER;var He=null;if(J4===H)J4=null;if(((H.F&0x400)===0x400)){
if(!(((A=B.lb(CJ,W))[0]>=A[2])||(A[1]>=A[3])))He=H.E2(W,V,CE,J4,ET,Ha);}else if(
!(((A=B.lb(CJ,Av))[0]>=A[2])||(A[1]>=A[3]))||(ER===H))He=H.E2(Av,V,CE,J4,ET,Ha);
H=H.At;if(!!He){if(!Hg||((He.Ib<Hg.Ib)&&(He.Ib>=0)))Hg=He;if(!He.Ib)H=null;}}else
H=H.At;ET=null;}return Hg;},Ji:function(Av){var A;var U;var H=this.Da;var Hc=AU;
var I8=true;var result=(Av=U=B.abg(Av,this.Q.slice(0,2)),U);while(!!H){if(((H.F&
0x200)===0x200)){var H6=(D.Io.isPrototypeOf(H)?H:null);Hc=B.lb(Av,H6.Q);I8=((H6.
F&0x1)===0x1);}if(((H.F&0x1)===0x1)){if(((H.F&0x400)===0x400)){if(I8){var W=B.lb(
H.GetClipping(),Hc);if(!((W[0]>=W[2])||(W[1]>=W[3])))result=B.wC(result,H.Ji(W));
}}else{var W=B.lb(H.GetClipping(),Av);if(!((W[0]>=W[2])||(W[1]>=W[3])))result=B.
wC(result,H.Ji(W));}}H=H.AG;}return B.lb(B.abh(result,this.Q.slice(0,2)),this.Q);
},AD:function(CX,Dk){var A;var Kd=this.F;if((!!this.G&&((this.F&0x80001)===0x80001
))&&((Dk&0x80000)===0x80000))this.G.Ac(this.GetClipping());D.AQ.AD.call(this,CX,
Dk);if(((!!this.G&&((this.F&0x1)===0x1))&&((CX&0x80000)===0x80000))&&!((Kd&0x80000
)===0x80000))this.G.Ac(this.GetClipping());var D3=this.F^Kd;if(!!this.Dw&&((D3&0x40
)===0x40)){if(((this.F&0x40)===0x40))this.Dw.AD(0x40,0x0);else this.Dw.AD(0x0,0x40
);}if(((D3&0x10)===0x10)){var H;for(H=this.Da;!!H;H=H.AG)if((((H.F&0x300000)===0x300000
)&&!((H.F&0x80)===0x80))&&(!((H.F&0x10000)===0x10000)||(null===H)))H.AD(CX&0x10,
Dk&0x10);}if(!!D3){this.F=this.F|0x8000;B.pe([this,this.Kq],this);}},L:function(
C){var A;if(B.aaY(C,this.Q))return;var FZ=[(A=this.Q)[2]-A[0],A[3]-A[1]];var L8=[
C[2]-C[0],C[3]-C[1]];var H7=!B.aaX(FZ,L8);D.AQ.L.call(this,C);if((H7&&(FZ[0]>0))&&(
FZ[1]>0)){var AX=[].concat(AI,FZ);var H=this.Da;while(!!H){if((!H.A0&&(H.Cc!==0x14
))&&!((H.F&0x400)===0x400))H.IW(AX,null);H=H.AG;}}if(H7){this.F=this.F|0x5000;B.
pe([this,this.Kq],this);}},Nx:function(AE){var Nj=(D.KeyEvent.isPrototypeOf(AE)?
AE:null);var D4=this.J$;if(!Nj)return null;while(!!D4&&(!D4.BE||!D4.Br(Nj)))D4=D4.
AG;return D4;},QU:function(AM,aClip,aOffset,Az,aBlend){var A;var H=this.Da;var Hc=
AU;var I8=true;this.N7(AM,aClip,aOffset,Az,aBlend);while(!!H){if(((H.F&0x200)===
0x200)){var H6=(D.Io.isPrototypeOf(H)?H:null);I8=((H6.F&0x1)===0x1);Hc=aClip;if(
!((H6.F&0x80000)===0x80000))Hc=B.lb(Hc,B.abh(H6.Q,aOffset));}if(((H.F&0x1)===0x1
)){if(((H.F&0x400)===0x400)){if(I8){var W=B.lb(B.abh(H.GetClipping(),aOffset),Hc
);if(!((W[0]>=W[2])||(W[1]>=W[3])))H.Cx(AM,W,aOffset,Az,aBlend);}}else{var W=B.lb(
B.abh(H.GetClipping(),aOffset),aClip);if(!((W[0]>=W[2])||(W[1]>=W[3])))H.Cx(AM,W
,aOffset,Az,aBlend);}}H=H.AG;}this.N_(AM,aClip,aOffset,Az,aBlend);},Q9:function(
){var A;var LZ=((this.F&0x1000)===0x1000);var Fw=[0,0,(A=this.Q)[2]-A[0],A[3]-A[
1]];var EX=false;var H2=AU;var LX=AU;var H=this.Cj;var C0=null;while(!!H){if(((H.
F&0x800)===0x800)){EX=true;H.F=H.F&~0x800;}if(EX&&((H.F&0x200)===0x200))EX=false;
H=H.At;}EX=false;H=this.Da;if(LZ){this.F=this.F&~0x1000;LZ=!((Fw[0]>=Fw[2])||(Fw[
1]>=Fw[3]));}this.F=this.F|0x2000;while(!!H){if(((H.F&0x400)===0x400)){if(!!H.A0&&(
H.A0.Hn!==C0))H.A0=null;if((!H.A0&&EX)&&(H.Cc!==0x14))H.IW(LX,C0);}if(!!H.A0){if(
LZ&&!((H.F&0x400)===0x400))H.Jj(Fw,0);if(EX&&((H.F&0x400)===0x400))H.Jj(LX,0);}if(((
H.F&0x200)===0x200)){EX=((H.F&0x1000)===0x1000);C0=(D.Io.isPrototypeOf(H)?H:null
);if(EX){H.F=H.F&~0x1000;H2=C0.Q;LX=H2;EX=!((H2[0]>=H2[2])||(H2[1]>=H2[3]));}if(
EX)this.Ac(C0.Q);}H=H.AG;}this.F=this.F&~0x2000;this.JM([Fw[2]-Fw[0],Fw[3]-Fw[1]
]);},C4:function(An){B.pe([this,this.Kq],this);},Kq:function(An){var A;var Rd=((
this.F&0x1000)===0x1000);if(((this.F&0x4000)===0x4000)){this.F=this.F&~0x4000;this.
Q9();}if(((this.F&0x8000)===0x8000)||Rd){this.F=this.F&~0x8000;this.Fn(this.F);}
},HF:function(C){var A;if(!!C&&(C.G!==this))throw new Error(Ch);if(!!C&&!((C.F&0x14
)===0x14))C=null;if(!!C&&((C.F&0x10000)===0x10000))C=null;if(C===this.Dw)return;
if(!!this.Dw)this.Dw.AD(0x0,0x60);this.Dw=C;if(!!C){if(((this.F&0x40)===0x40))C.
AD(0x60,0x0);else C.AD(0x20,0x0);}},N:function(C){if(C)this.AD(0x100000,0x0);else
this.AD(0x0,0x100000);},Bc:function(C){var A;if(C>255)C=255;if(C<0)C=0;if(C===this.
Cl)return;this.Cl=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ac(this.GetClipping(
));},JQ:function(Re){this.Bc(Re);},R:function(C){if(C)this.AD(0x1,0x0);else this.
AD(0x0,0x1);},ExtendClipping:function(G7,G8,G9,G6){var A;var IM=this.Q;var CY=IM;
if(G7<0)G7=0;if(G7>255)G7=255;if(G8<0)G8=0;if(G8>255)G8=255;if(G9<0)G9=0;if(G9>255
)G9=255;if(G6<0)G6=0;if(G6>255)G6=255;CY=[].concat(CY[0]-(Math.max(G7,this.IT)&0xFF
),CY.slice(1,4));CY=B.abN(CY,CY[2]+(Math.max(G8,this.IU)&0xFF));CY=B.abP(CY,CY[1
]-(Math.max(G9,this.IV)&0xFF));CY=[].concat(CY.slice(0,3),CY[3]+(Math.max(G6,this.
IS)&0xFF));if(G7!==this.IT){if((!!this.G&&((this.F&0x1)===0x1))&&!((this.F&0x80000
)===0x80000)){var I=CY;I=B.abN(I,IM[0]);this.G.Ac(I);}this.IT=G7&0xFF;}if(G8!==this.
IU){if((!!this.G&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var I=CY;
I=[].concat(IM[2],I.slice(1,4));this.G.Ac(I);}this.IU=G8&0xFF;}if(G9!==this.IV){
if((!!this.G&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var I=CY;I=[
].concat(I.slice(0,3),IM[1]);this.G.Ac(I);}this.IV=G9&0xFF;}if(G6!==this.IS){if((
!!this.G&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var I=CY;I=B.abP(
I,IM[3]);this.G.Ac(I);}this.IS=G6&0xFF;}},N_:function(AM,aClip,aOffset,Az,aBlend
){},N7:function(AM,aClip,aOffset,Az,aBlend){},GetMaximalSize:function(){return EQ;
},GetMinimalSize:function(){return AI;},DispatchEvent:function(AE){var A;var H=this.
Dw;var Ar=(D.P.isPrototypeOf(H)?H:null);var Bg=null;if(!!H&&((((H.F&0x10000)===0x10000
)||((H.F&0x40000)===0x40000))||((H.F&0x20000)===0x20000))){H=null;Ar=null;}if(!!
Ar)Bg=Ar.DispatchEvent(AE);else if(!!H)Bg=H.Br(AE);if(!Bg)Bg=this.Br(AE);if(!Bg)
Bg=this.Nx(AE);return Bg;},BroadcastEventAtPosition:function(AE,M3,aFilter){var A;
var H=this.Cj;var Bg=null;while(!!H&&!Bg){if((!aFilter||((A=aFilter)&&((H.F&A)===
A)))&&B.wa(H.GetExtent(),M3)){var Ar=(D.P.isPrototypeOf(H)?H:null);if(!!Ar)Bg=Ar.
BroadcastEventAtPosition(AE,B.abe(M3,Ar.Q.slice(0,2)),aFilter);else Bg=H.Br(AE);
}H=H.At;}if(!Bg)Bg=this.Br(AE);return Bg;},BroadcastEvent:function(AE,aFilter){var
A;var H=this.Cj;var Bg=null;while(!!H&&!Bg){if(!aFilter||((A=aFilter)&&((H.F&A)===
A))){var Ar=(D.P.isPrototypeOf(H)?H:null);if(!!Ar)Bg=Ar.BroadcastEvent(AE,aFilter
);else Bg=H.Br(AE);}H=H.At;}if(!Bg)Bg=this.Br(AE);if(!Bg)Bg=this.Nx(AE);return Bg;
},JM:function(aSize){},Fn:function(Dm){},Bf:function(){this.F=this.F|0x8000;B.pe([
this,this.Kq],this);},Ac:function(Av){var A;var Ar=this;while(!!Ar&&!((Av[0]>=Av[
2])||(Av[1]>=Av[3]))){if(!Ar.G&&(Ar!==this)){Ar.Ac(Av);return;}if(!((Ar.F&0x1)===
0x1))return;var I=Ar.Q;Av=B.abh(Av,I.slice(0,2));if(!((Ar.F&0x80000)===0x80000)){
I=[].concat(I[0]-Ar.IT,I.slice(1,4));I=B.abP(I,I[1]-Ar.IV);I=B.abN(I,I[2]+Ar.IU);
I=[].concat(I.slice(0,3),I[3]+Ar.IS);Av=B.lb(Av,I);}Ar=Ar.G;}},Mp:function(O,aFilter
){var A;if(!O||(O.G!==this))return null;var FY=O.AG;var F_=O.At;var I3=0x10000;if(((
aFilter&0x10000)===0x10000))I3=0x0;while(!!FY||!!F_){if((!!FY&&(!aFilter||((A=aFilter
)&&((FY.F&A)===A))))&&(!I3||!((A=I3)&&((FY.F&A)===A))))return FY;if((!!F_&&(!aFilter||((
A=aFilter)&&((F_.F&A)===A))))&&(!I3||!((A=I3)&&((F_.F&A)===A))))return F_;if(!!FY
)FY=FY.AG;if(!!F_)F_=F_.At;}return null;},OW:function(O,DF){var A;if(!O)throw new
Error(DZ);if(O.G!==this)throw new Error(DD);var Fp=O;var Bm=O;var Hq=O.DV;while(((
DF>0)&&!!Fp.AG)&&(Fp.AG.DV<=Hq)){Fp=Fp.AG;DF=DF-1;}while(((DF<0)&&!!Bm.At)&&(Bm.
At.DV>=Hq)){Bm=Bm.At;DF=DF+1;}if((Fp===O)&&(Bm===O))return;if(((O.F&0x401)===0x401
)){if(!!O.At&&!!O.A0)O.At.F=O.At.F|0x800;O.F=O.F|0x800;this.F=this.F|0x4000;B.pe([
this,this.C4],this);}if(((O.F&0x200)===0x200)){if(!!O.At)O.At.F=O.At.F|0x800;O.F=
O.F|0x800;this.F=this.F|0x4000;B.pe([this,this.C4],this);}if(!!O.At)O.At.AG=O.AG;
if(!!O.AG)O.AG.At=O.At;if(this.Da===O)this.Da=O.AG;if(this.Cj===O)this.Cj=O.At;if(
Fp!==O){O.AG=Fp.AG;O.At=Fp;Fp.AG=O;if(!!O.AG)O.AG.At=O;}if(Bm!==O){O.AG=Bm;O.At=
Bm.At;Bm.At=O;if(!!O.At)O.At.AG=O;}if(!O.AG)this.Cj=O;if(!O.At)this.Da=O;if(((O.
F&0x1)===0x1))this.Ac(O.GetClipping());},HR:function(O){var A;if(!O)throw new Error(
D0);if(O.G!==this)throw new Error(DD);if((((O.F&0x401)===0x401)&&!!O.At)&&!!O.A0
){O.At.F=O.At.F|0x800;this.F=this.F|0x4000;B.pe([this,this.C4],this);}if(((O.F&0x200
)===0x200)){if(!!O.At)O.At.F=O.At.F|0x800;this.F=this.F|0x4000;B.pe([this,this.C4
],this);}O.A0=null;if(this.Dw===O)this.HF(this.Mp(O,0x14));if(!!O.At)O.At.AG=O.AG;
if(!!O.AG)O.AG.At=O.At;if(this.Da===O)this.Da=O.AG;if(this.Cj===O)this.Cj=O.At;O.
G=null;O.AG=null;O.At=null;if((!((O.F&0x10)===0x10)&&((O.F&0x100000)===0x100000)
)&&!((this.F&0x80)===0x80))O.AD(0x10,0x0);if(((O.F&0x1)===0x1))this.Ac(O.GetClipping(
));},T:function(O,DF){var A;if(!O)throw new Error(Er);if(!!O.G)throw new Error(FS
);var Bm=null;var Hq=O.DV;if(((DF<0)&&!!this.Cj)&&(this.Cj.DV>=Hq)){Bm=this.Cj;DF=
DF+1;}while((((DF<0)&&!!Bm)&&!!Bm.At)&&(Bm.At.DV>=Hq)){Bm=Bm.At;DF=DF+1;}if((!Bm&&
!!this.Cj)&&(this.Cj.DV>Hq))Bm=this.Cj;while((!!Bm&&!!Bm.At)&&(Bm.At.DV>Hq))Bm=Bm.
At;if(!Bm){O.G=this;O.At=this.Cj;if(!!this.Cj)this.Cj.AG=O;if(!this.Da)this.Da=O;
this.Cj=O;}else{O.G=this;O.At=Bm.At;O.AG=Bm;Bm.At=O;if(!!O.At)O.At.AG=O;else this.
Da=O;}if(((O.F&0x1)===0x1))this.Ac(O.GetClipping());if(((O.F&0x80)===0x80)&&(B.aam(
).Ob()===O))O.AD(0x10,0x0);else if(!((this.F&0x10)===0x10)&&((O.F&0x200010)===0x200010
))O.AD(0x0,0x10);else if((((this.F&0x10)===0x10)&&!((O.F&0x10)===0x10))&&((O.F&0x100000
)===0x100000))O.AD(0x10,0x0);if(((!this.Dw&&((O.F&0x4)===0x4))&&((O.F&0x10)===0x10
))&&!((O.F&0x10000)===0x10000))this.HF(O);if(((O.F&0x401)===0x401)){O.F=O.F|0x800;
this.F=this.F|0x4000;B.pe([this,this.C4],this);}if(((O.F&0x200)===0x200)){O.F=O.
F|0x800;this.F=this.F|0x4000;B.pe([this,this.C4],this);}},HA:function(){return this.
Cl;},_Init:function(aArg){D.AQ._Init.call(this,aArg);this.__proto__=D.P;this.F=0x10001F;
this.Cy(aArg);},_Mark:function(E){var A;D.AQ._Mark.call(this,E);if((A=this.Da)&&(
A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Cj)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.J$)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Dw)&&(A._cycle!=
E))A._Mark(A._cycle=E);},_className:"Core::Group"};D.Root={C2:null,A4:B.abi(10,null
,null),HZ:null,Ft:null,Jh:0,A$:0,B8:B.abi(10,0,null),J3:B.abi(10,B.wg,null),DK:B.
abi(10,0,null),EU:B.abi(10,B.wf,null),H1:B.abi(10,0,null),Fs:B.abi(10,B.wf,null)
,DJ:B.abi(10,B.wf,null),CZ:B.abi(10,B.wf,null),Es:B.abi(10,B.wf,null),AF:0,J8:0,
J7:0,Cp:B.abi(4,0,null),Bv:B.abi(4,B.wg,null),Bu:0,IZ:0,H3:0,L0:true,Cy:function(
aArg){if(!!!this.J){var obj=this;B.abD(obj);}},Ie:function(){return this;},Cx:function(
AM,aClip,aOffset,Az,aBlend){var fullScreenUpdate=false;fullScreenUpdate=B.m7;if(
!fullScreenUpdate)AM.KH(aClip,B.abh(B.abh(aClip,aOffset),this.Q.slice(0,2)),0x00000000
,0x00000000,0x00000000,0x00000000,false);D.P.Cx.call(this,AM,aClip,aOffset,Az,aBlend
);},AD:function(CX,Dk){var A;D.P.AD.call(this,CX,Dk);if(!this.G&&(((CX&0x1)===0x1
)||((Dk&0x1)===0x1)))this.Ac([0,0,(A=this.Q)[2]-A[0],A[3]-A[1]]);if(!this.G&&(((
CX&0x2)===0x2)||((Dk&0x2)===0x2)))this.Ac([0,0,(A=this.Q)[2]-A[0],A[3]-A[1]]);},
HF:function(C){if((C!==null)||!C)D.P.HF.call(this,C);},Bc:function(C){var A;var Dq=
this.Cl;D.P.Bc.call(this,C);if(((Dq!==this.Cl)&&!this.G)&&((this.F&0x1)===0x1))this.
Ac([0,0,(A=this.Q)[2]-A[0],A[3]-A[1]]);},DispatchEvent:function(AE){if(!!AE){AE.
Ii=!!this.A$;if(!!this.A$)AE.Ax=this.A$;}var Bg;Bg=D.P.DispatchEvent.call(this,AE
);this.A$=0;return Bg;},BroadcastEvent:function(AE,aFilter){if(!!AE){AE.Ii=!!this.
A$;if(!!this.A$)AE.Ax=this.A$;}var Bg=D.P.BroadcastEvent.call(this,AE,aFilter);this.
A$=0;return Bg;},Ac:function(Av){var A;if(this.Jh>0)throw new Error(IE);var fullScreenUpdate=
false;fullScreenUpdate=B.m7;if(fullScreenUpdate)Av=[0,0,(A=this.Q)[2]-A[0],A[3]-
A[1]];if(!!this.G){D.P.Ac.call(this,Av);return;}Av=B.lb(B.abh(Av,this.Q.slice(0,
2)),this.Q);if((Av[0]>=Av[2])||(Av[1]>=Av[3]))return;var M;for(M=0;M<this.Bu;M=M+
1)if(!(((A=B.lb(this.Bv.Get(M),Av))[0]>=A[2])||(A[1]>=A[3]))){this.Bv.Set(M,B.wC(
this.Bv.Get(M),Av));this.Cp.Set(M,B.aaH(this.Bv.Get(M)));return;}if(this.Bu<3){this.
Bv.Set(this.Bu,Av);this.Cp.Set(this.Bu,B.aaH(Av));this.Bu=this.Bu+1;return;}var A9;
var C1;var IY=0;var I0=0;var M9=2147483647;this.Bv.Set(this.Bu,Av);this.Cp.Set(this.
Bu,B.aaH(Av));for(A9=0;A9<=this.Bu;A9=A9+1)for(C1=A9+1;C1<=this.Bu;C1=C1+1){var Kp=
B.aaH(B.wC(this.Bv.Get(A9),this.Bv.Get(C1)));var Nw=((Kp<<8)/(this.Cp.Get(A9)+this.
Cp.Get(C1)))|0;if(Nw<M9){M9=Nw;IY=A9;I0=C1;}}this.Bv.Set(IY,B.wC(this.Bv.Get(IY)
,this.Bv.Get(I0)));this.Cp.Set(IY,B.aaH(this.Bv.Get(IY)));if(I0!==this.Bu){this.
Bv.Set(I0,this.Bv.Get(this.Bu));this.Cp.Set(I0,this.Cp.Get(this.Bu));}},QQ:function(
){var B9=B._NewObject(D.Ic,0);B9.Ii=!!this.A$;if(!!this.A$)B9.Ax=this.A$;return B9;
},Hd:function(){var B9=B._NewObject(D.E1,0);B9.Ii=!!this.A$;if(!!this.A$)B9.Ax=this.
A$;return B9;},H0:function(){var B9=B._NewObject(D.KC,0);B9.Ii=!!this.A$;if(!!this.
A$)B9.Ax=this.A$;return B9;},QR:function(An){var M;var Hg=false;for(M=0;M<10;M=M+
1)if(!!this.A4.Get(M)){var A1=this.CZ.Get(M);var Ar=this.A4.Get(M).G;while(!!Ar&&(
Ar!==this)){A1=B.abe(A1,Ar.Q.slice(0,2));Ar=Ar.G;}if(!Ar&&(this.A4.Get(M)!==this
)){var tmp=this.A4.Get(M);this.AF=M;this.A4.Set(M,null);tmp.Br(this.Hd().InitializeUp(
M,this.Fs.Get(M),this.EU.Get(M),this.DK.Get(M),this.B8.Get(M)+1,this.DJ.Get(M),false
,this.CZ.Get(M),this.Es.Get(M)));this.BroadcastEvent(this.H0().InitializeUp(M,this.
B8.Get(M)+1,false,tmp,this.CZ.Get(M)),0x18);}else{this.DK.Set(M,(this.Ft.Ax-this.
H1.Get(M))|0);if(this.DK.Get(M)<10)this.DK.Set(M,10);this.AF=M;this.A4.Get(M).Br(
this.Hd().InitializeHold(M,A1,this.EU.Get(M),this.DK.Get(M),this.B8.Get(M)+1,this.
DJ.Get(M),this.CZ.Get(M),this.Es.Get(M)));Hg=true;}}if(!Hg)this.Ft.N(false);},GetFPS:
function(){var ticksCount=0;var Ni=0;ticksCount=((new Date).getTime()-B.v$)|0;if(
!!this.J8&&(ticksCount>this.J8))Ni=((this.J7*1000)/((ticksCount-this.J8)|0))|0;this.
J7=0;this.J8=ticksCount;return Ni;},Update:function(){var A;if(!this.HZ)this.HZ=
B._NewObject(B.Graphics.Canvas,0);this.HZ.Mx([(A=this.Q)[2]-A[0],A[3]-A[1]]);this.
HZ.Update();return this.UpdateGE20(this.HZ);},UpdateGE20:function(AM){if(!this.BeginUpdate(
))return AU;var EZ=this.UpdateCanvas(AM,AI);this.EndUpdate();return EZ;},EndUpdate:
function(){if(this.Bu>0){this.J7=this.J7+1;this.Bu=0;}},UpdateCanvas:function(AM
,aOffset){var A;var EZ=AU;var QJ=[].concat(aOffset,B.abf(AM.FrameSize,aOffset));
var M;var A9=this.Bu;this.Jh=this.Jh+1;AM.Hh=this;for(M=0;(M<A9)&&(M<4);M=M+1)if(
this.Cp.Get(M)>0){this.Cx(AM,B.abg(this.Bv.Get(M),aOffset),[-aOffset[0],-aOffset[
1]],255,true);EZ=B.wC(EZ,B.lb(QJ,this.Bv.Get(M)));}else A9=A9+1;AM.Hh=null;this.
Jh=this.Jh-1;if(!((EZ[0]>=EZ[2])||(EZ[1]>=EZ[3])))return B.abg(EZ,aOffset);else return EZ;
},GetUpdateRegion:function(JT){var M;var A9=this.Bu;if(JT<0)return AU;for(M=0;(M<
A9)&&(M<4);M=M+1)if(!this.Cp.Get(M)){A9=A9+1;JT=JT+1;}else if(M===JT)return this.
Bv.Get(M);return AU;},BeginUpdate:function(){var A;var M;if(!!this.Bu&&!B.aaY(this.
Bv.Get(0),[0,0,(A=this.Q)[2]-A[0],A[3]-A[1]])){var NM=B.abi(3,B.wg,null);var NL=
this.Bu;for(M=0;M<NL;M++)NM.Set(M,this.Bv.Get(M));for(M=0;M<NL;M++){var Ny=B.abh(
NM.Get(M),this.Q.slice(0,2));var Nz=this.Ji(Ny);if(!B.aaY(Ny,Nz))this.Ac(B.abg(Nz
,this.Q.slice(0,2)));}}var A9;var C1;for(A9=0;A9<(this.Bu-1);A9++)if(this.Cp.Get(
A9)>0)for(C1=A9+1;C1<this.Bu;C1++)if(this.Cp.Get(C1)>0){var Kp=B.aaH(B.wC(this.Bv.
Get(A9),this.Bv.Get(C1)));if(((Kp-this.Cp.Get(A9))-this.Cp.Get(C1))<0){this.Bv.Set(
A9,B.wC(this.Bv.Get(A9),this.Bv.Get(C1)));this.Cp.Set(A9,Kp);this.Cp.Set(C1,0);}
}for(M=this.Bu-1;M>=0;M--)if(!this.Cp.Get(M))this.Bu=this.Bu-1;return this.Bu;},
DoesNeedUpdate:function(){if(this.Bu>0)return true;return false;},Initialize:function(
aSize){this.L([].concat(AI,aSize));if(this.L0)this.F=this.F|0x60;else this.F=this.
F|0x20;this.Ac(this.Q);return this;},SetRootFocus:function(LJ){if(LJ===this.L0)return false;
this.L0=LJ;if(!LJ)this.AD(0x0,0x40);else this.AD(0x40,0x0);return true;},SetUserInputTimestamp:
function(QG){this.A$=QG;},DriveKeyboardHitting:function(BA,IG,D1){var A;var Mf=!
!this.C2;if(!!this.C2&&((!D1||(this.IZ!==BA))||(this.H3!==IG))){var B9=null;var H=(
D.Cf.isPrototypeOf(A=this.C2)?A:null);var D4=(D.FH.isPrototypeOf(A=this.C2)?A:null
);if(!!this.IZ)B9=B._NewObject(D.KeyEvent,0).Initialize(this.IZ,false);if(this.H3
!==0x00)B9=B._NewObject(D.KeyEvent,0).Initialize2(this.H3,false);if(!!D4)D4.Br(B9
);else if(!!H)H.Br(B9);this.IZ=0;this.H3=0x00;this.C2=null;}if(!!this.C2){var B9=
null;var H=(D.Cf.isPrototypeOf(A=this.C2)?A:null);var D4=(D.FH.isPrototypeOf(A=this.
C2)?A:null);if(!!BA)B9=B._NewObject(D.KeyEvent,0).Initialize(BA,true);if(this.H3
!==0x00)B9=B._NewObject(D.KeyEvent,0).Initialize2(IG,true);if(!!D4)D4.Br(B9);else
if(!!H)H.Br(B9);}if(!this.C2&&D1){if(!!BA)this.C2=this.DispatchEvent(B._NewObject(
D.KeyEvent,0).Initialize(BA,true));if(IG!==0x00)this.C2=this.DispatchEvent(B._NewObject(
D.KeyEvent,0).Initialize2(IG,true));if(!(D.FH.isPrototypeOf(A=this.C2)?A:null)&&
!(D.Cf.isPrototypeOf(A=this.C2)?A:null))this.C2=null;this.IZ=BA;this.H3=IG;Mf=Mf||
!!this.C2;}this.A$=0;return Mf;},DriveCursorMovement:function(BX){return this.DriveMultiTouchMovement(
this.AF,BX);},DriveMultiTouchMovement:function(V,BX){if((V<0)||(V>9)){this.A$=0;
return false;}var BC=B.abe(BX,this.CZ.Get(V));this.CZ.Set(V,BX);if(!this.A4.Get(
V)||B.aaX(BC,AI)){this.A$=0;return false;}var A1=BX;var Ar=this.A4.Get(V).G;while(
!!Ar&&(Ar!==this)){A1=B.abe(A1,Ar.Q.slice(0,2));Ar=Ar.G;}if(!Ar&&(this.A4.Get(V)
!==this)){var tmp=this.A4.Get(V);this.AF=V;this.A4.Set(V,null);tmp.Br(this.Hd().
InitializeUp(V,this.Fs.Get(V),this.EU.Get(V),this.DK.Get(V),this.B8.Get(V)+1,this.
DJ.Get(V),false,this.CZ.Get(V),this.Es.Get(V)));this.BroadcastEvent(this.H0().InitializeUp(
V,this.B8.Get(V)+1,false,tmp,BX),0x18);}else{this.Fs.Set(V,A1);this.AF=V;this.A4.
Get(V).Br(this.QQ().Initialize(V,A1,this.EU.Get(V),BC,this.DK.Get(V),this.B8.Get(
V)+1,this.DJ.Get(V),BX,this.Es.Get(V)));}this.A$=0;return true;},DriveCursorHitting:
function(D1,V,BX){return this.DriveMultiTouchHitting(D1,V,BX);},DriveMultiTouchHitting:
function(D1,V,BX){if((V<0)||(V>9)){this.A$=0;return false;}var ticksCount=this.A$;
if(!ticksCount)ticksCount=((new Date).getTime()-B.v$)|0;var Rc=this.A$;this.DriveMultiTouchMovement(
V,BX);BX=this.CZ.Get(V);this.A$=Rc;if(D1)this.Es.Set(V,BX);if(D1&&!this.A4.Get(V
)){var BN;var A1=BX;if(B.wa(this.J3.Get(V),BX)&&((ticksCount-this.H1.Get(V))<=250
))this.B8.Set(V,this.B8.Get(V)+1);else this.B8.Set(V,0);this.J3.Set(V,B.abh(G4,BX
));this.H1.Set(V,ticksCount);BN=this.E2(B.abh(G4,BX),V,this.B8.Get(V)+1,null,null
,0x0);if(!!BN){this.BroadcastEvent(this.H0().InitializeDown(V,this.B8.Get(V)+1,false
,BN.Cf,BX),0x18);this.A4.Set(V,BN.Cf);this.DJ.Set(V,BN.DA);}else{this.A4.Set(V,null
);this.DJ.Set(V,AI);this.A$=0;return false;}var Ar=BN.Cf.G;while(!!Ar&&(Ar!==this
)){A1=B.abe(A1,Ar.Q.slice(0,2));Ar=Ar.G;}this.EU.Set(V,A1);this.Fs.Set(V,A1);this.
DK.Set(V,0);this.Ft.N(true);this.AF=V;this.A4.Get(V).Br(this.Hd().InitializeDown(
V,A1,this.B8.Get(V)+1,this.DJ.Get(V),false,BX));this.A$=0;return true;}if(!D1&&!
!this.A4.Get(V)){var A1=BX;var Ar=this.A4.Get(V).G;while(!!Ar&&(Ar!==this)){A1=B.
abe(A1,Ar.Q.slice(0,2));Ar=Ar.G;}if(!Ar)A1=this.Fs.Get(V);this.AF=V;var tmp=this.
A4.Get(V);this.A4.Set(V,null);tmp.Br(this.Hd().InitializeUp(V,A1,this.EU.Get(V),
this.DK.Get(V),this.B8.Get(V)+1,this.DJ.Get(V),false,BX,this.Es.Get(V)));this.BroadcastEvent(
this.H0().InitializeUp(V,this.B8.Get(V)+1,false,tmp,BX),0x18);this.A$=0;return true;
}this.A$=0;return false;},MF:function(ES,M1,ET,Ha){if(ES===this)ES=null;if(!this.
A4.Get(this.AF))return;var BN;BN=this.E2(B.abh(G4,this.CZ.Get(this.AF)),this.AF,
1,ES,ET,Ha);if(!!BN&&(this.A4.Get(this.AF)!==BN.Cf))this.Ml(BN.Cf,BN.DA);if(!BN&&(
this.A4.Get(this.AF)!==M1))this.Ml(M1,AI);},Ml:function(ES,DE){if(!this.A4.Get(this.
AF)||(this.A4.Get(this.AF)===ES))return;var tmp=this.A4.Get(this.AF);this.A4.Set(
this.AF,null);tmp.Br(this.Hd().InitializeUp(this.AF,this.Fs.Get(this.AF),this.EU.
Get(this.AF),this.DK.Get(this.AF),this.B8.Get(this.AF)+1,this.DJ.Get(this.AF),true
,this.CZ.Get(this.AF),this.Es.Get(this.AF)));this.BroadcastEvent(this.H0().InitializeUp(
this.AF,this.B8.Get(this.AF)+1,true,tmp,this.CZ.Get(this.AF)),0x18);var A1=this.
CZ.Get(this.AF);var Ar=null;if(!!ES)Ar=ES.G;while(!!Ar&&(Ar!==this)){A1=B.abe(A1
,Ar.Q.slice(0,2));Ar=Ar.G;}if(!Ar&&(ES!==this)){this.A4.Set(this.AF,null);return;
}this.BroadcastEvent(this.H0().InitializeDown(this.AF,this.B8.Get(this.AF)+1,true
,ES,this.CZ.Get(this.AF)),0x18);var ticksCount=0;ticksCount=((new Date).getTime(
)-B.v$)|0;this.A4.Set(this.AF,ES);this.DJ.Set(this.AF,DE);this.EU.Set(this.AF,A1
);this.Fs.Set(this.AF,A1);this.B8.Set(this.AF,0);this.DK.Set(this.AF,0);this.H1.
Set(this.AF,ticksCount);this.Es.Set(this.AF,this.CZ.Get(this.AF));this.A4.Get(this.
AF).Br(this.Hd().InitializeDown(this.AF,A1,this.B8.Get(this.AF)+1,this.DJ.Get(this.
AF),true,this.Es.Get(this.AF)));},Ob:function(){return null;},_Init:function(aArg
){D.P._Init.call(this,aArg);D.Timer._Init.call(this.Ft={J:this},0);(this.A4=[]).
__proto__=D.Root.A4;(this.B8=[]).__proto__=D.Root.B8;(this.J3=[]).__proto__=D.Root.
J3;(this.DK=[]).__proto__=D.Root.DK;(this.EU=[]).__proto__=D.Root.EU;(this.H1=[]
).__proto__=D.Root.H1;(this.Fs=[]).__proto__=D.Root.Fs;(this.DJ=[]).__proto__=D.
Root.DJ;(this.CZ=[]).__proto__=D.Root.CZ;(this.Es=[]).__proto__=D.Root.Es;(this.
Cp=[]).__proto__=D.Root.Cp;(this.Bv=[]).__proto__=D.Root.Bv;this.__proto__=D.Root;
this.F=0x10007F;this.Ft.FM(10);this.Ft.FO=[this,this.QR];this.Cy(aArg);},_Done:function(
){this.__proto__=D.P;this.Ft._Done();D.P._Done.call(this);},_ReInit:function(){D.
P._ReInit.call(this);this.Ft._ReInit();},_Mark:function(E){var A;D.P._Mark.call(
this,E);if((A=this.C2)&&(A._cycle!=E))A._Mark(A._cycle=E);B.aa6(this.A4,E);if((A=
this.HZ)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ft)._cycle!=E)A._Mark(A._cycle=
E);},_className:"Core::Root"};D.Event={Ax:0,Ii:false,Cy:function(aArg){this.Ax=this.
Jt();},Jt:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.v$)|0;return ticksCount;
},_Init:function(aArg){this.__proto__=D.Event;this.Cy(aArg);B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.J)&&(A._cycle!=E))A._Mark(A._cycle=E);},J:null,_cycle:0,_observers:null,_className:
"Core::Event"};D.KeyEvent={Bp:0,AP:0,Down:false,Initialize2:function(BA,D1){this.
Bp=0;this.AP=BA;this.Down=D1;if((BA>=0x30)&&(BA<=0x39))this.Bp=(10+BA)-48;if((BA>=
0x41)&&(BA<=0x5A))this.Bp=(105+BA)-65;if((BA>=0x61)&&(BA<=0x7A))this.Bp=(105+BA)-
97;if(BA===0x20)this.Bp=131;if(!this.Bp)switch(BA){case 0x2B:this.Bp=132;break;case
0x2D:this.Bp=133;break;case 0x2A:this.Bp=134;break;case 0x2F:this.Bp=135;break;case
0x3D:this.Bp=136;break;case 0x2E:this.Bp=137;break;case 0x2C:this.Bp=138;break;case
0x3A:this.Bp=139;break;case 0x3B:this.Bp=140;break;default:;}return this;},Initialize:
function(BA,D1){this.Bp=BA;this.Down=D1;this.AP=0x00;var LR=BA-10;var LQ=BA-105;
if((LR>=0)&&(LR<=9))this.AP=(48+LR)&0xFFFF;if((LQ>=0)&&(LQ<=25))this.AP=(65+LQ)&
0xFFFF;if(BA===131)this.AP=0x20;if(this.AP===0x00)switch(BA){case 132:this.AP=0x2B;
break;case 133:this.AP=0x2D;break;case 134:this.AP=0x2A;break;case 135:this.AP=0x2F;
break;case 136:this.AP=0x3D;break;case 137:this.AP=0x2E;break;case 138:this.AP=0x2C;
break;case 139:this.AP=0x3A;break;case 140:this.AP=0x3B;break;default:;}return this;
},Of:function(MZ){switch(MZ){case 141:return((this.AP>=0x41)&&(this.AP<=0x5A))||((
this.AP>=0x61)&&(this.AP<=0x7A));case 142:return(((this.AP>=0x41)&&(this.AP<=0x5A
))||((this.AP>=0x61)&&(this.AP<=0x7A)))||((this.AP>=0x30)&&(this.AP<=0x39));case
143:return(this.AP>=0x30)&&(this.AP<=0x39);case 144:return(((this.AP>=0x41)&&(this.
AP<=0x46))||((this.AP>=0x61)&&(this.AP<=0x66)))||((this.AP>=0x30)&&(this.AP<=0x39
));case 145:return this.AP!==0x00;case 146:return(this.AP===0x00)&&!!this.Bp;case
147:return(((this.Bp===6)||(this.Bp===7))||(this.Bp===4))||(this.Bp===5);case 148:
return(this.AP!==0x00)||!!this.Bp;default:;}return MZ===this.Bp;},_Init:function(
aArg){D.Event._Init.call(this,aArg);this.__proto__=D.KeyEvent;},_className:"Core::KeyEvent"
};D.KC={Ll:null,CQ:B.wf,Cm:0,Bw:0,Down:false,Cq:false,InitializeUp:function(V,CE
,G5,LM,D2){this.Down=false;this.Bw=V;this.Cm=CE;this.CQ=D2;this.Ll=LM;this.Cq=G5;
return this;},InitializeDown:function(V,CE,G5,LM,D2){this.Down=true;this.Bw=V;this.
Cm=CE;this.CQ=D2;this.Ll=LM;this.Cq=G5;return this;},_Init:function(aArg){D.Event.
_Init.call(this,aArg);this.__proto__=D.KC;},_Mark:function(E){var A;D.Event._Mark.
call(this,E);if((A=this.Ll)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Core::CursorGrabEvent"
};D.E1={Ig:B.wf,CQ:B.wf,Cm:0,BQ:0,CR:B.wf,BM:B.wf,Bw:0,Down:false,Cq:false,InitializeHold:
function(V,FT,II,IJ,CE,DE,D2,IH){this.Down=true;this.Bw=V;this.BM=B.abf(FT,DE);this.
CR=B.abf(II,DE);this.BQ=IJ;this.Cm=CE;this.CQ=D2;this.Ig=IH;return this;},InitializeUp:
function(V,FT,II,IJ,CE,DE,G5,D2,IH){this.Down=false;this.Bw=V;this.BM=B.abf(FT,DE
);this.CR=B.abf(II,DE);this.BQ=IJ;this.Cm=CE;this.Cq=G5;this.CQ=D2;this.Ig=IH;return this;
},InitializeDown:function(V,FT,CE,DE,G5,D2){this.Down=true;this.Bw=V;this.BM=B.abf(
FT,DE);this.CR=B.abf(FT,DE);this.BQ=0;this.Cm=CE;this.Cq=G5;this.CQ=D2;this.Ig=D2;
return this;},_Init:function(aArg){D.Event._Init.call(this,aArg);this.__proto__=
D.E1;},_className:"Core::CursorEvent"};D.Ic={Ig:B.wf,CQ:B.wf,Cm:0,BQ:0,DA:B.wf,CR:
B.wf,BM:B.wf,Bw:0,Initialize:function(V,FT,II,aOffset,IJ,QD,DE,D2,IH){this.Bw=V;
this.BM=B.abf(FT,DE);this.CR=B.abf(II,DE);this.DA=aOffset;this.BQ=IJ;this.Cm=QD;
this.CQ=D2;this.Ig=IH;return this;},_Init:function(aArg){D.Event._Init.call(this
,aArg);this.__proto__=D.Ic;},_className:"Core::DragEvent"};D.Io={Cx:function(AM,
aClip,aOffset,Az,aBlend){},GetClipping:function(){var A;var I=D.AQ.GetClipping.call(
this);if(((this.F&0x80000)===0x80000)){var Hp=AU;var H;for(H=this.AG;!!H&&!((H.F&
0x200)===0x200);H=H.AG)if(((H.F&0x1)===0x1))Hp=B.wC(Hp,H.GetClipping());I=B.wC(I
,Hp);}return I;},AD:function(CX,Dk){var A;var Kd=this.F;if((!!this.G&&((this.F&0x80001
)===0x80001))&&((Dk&0x80000)===0x80000))this.G.Ac(this.GetClipping());D.AQ.AD.call(
this,CX,Dk);if(((!!this.G&&((this.F&0x1)===0x1))&&((CX&0x80000)===0x80000))&&!((
Kd&0x80000)===0x80000))this.G.Ac(this.GetClipping());},L:function(C){var A;if(B.
aaY(C,this.Q))return;var FZ=[(A=this.Q)[2]-A[0],A[3]-A[1]];var L8=[C[2]-C[0],C[3
]-C[1]];var H7=!B.aaX(FZ,L8);var BC=B.abe(C.slice(0,2),this.Q.slice(0,2));if(!B.
aaX(BC,AI)&&!H7){var H=this.AG;while(!!H&&!((H.F&0x200)===0x200)){if(((H.F&0x400
)===0x400)){var tmp=((H.F&0x100)===0x100);H.K2(BC,tmp);}H=H.AG;}}if((H7&&(FZ[0]>
0))&&(FZ[1]>0)){var AX=this.Q;var H=this.AG;while(!!H&&!((H.F&0x200)===0x200)){if(((
H.F&0x400)===0x400)){if(!!H.A0&&(H.A0.Hn!==this))H.A0=null;if(!H.A0&&(H.Cc!==0x14
))H.IW(AX,this);}H=H.AG;}}D.AQ.L.call(this,C);if(!!this.G&&H7){this.F=this.F|0x1000;
if(!((this.G.F&0x2000)===0x2000)){this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.C4],
this);}}},_Init:function(aArg){D.AQ._Init.call(this,aArg);this.__proto__=D.Io;this.
F=0x203;},_className:"Core::Outline"};D.AR={K4:null,JB:null,Jz:null,DB:null,BF:null
,As:0,Bw:0,Ax:0,Cm:0,BQ:0,DA:B.wf,CR:B.wf,BM:B.wf,OX:8,Mt:1,Down:false,Dy:false,
Cq:false,LW:false,I1:0,Cx:function(AM,aClip,aOffset,Az,aBlend){},Br:function(AE){
var A;var Ai=(D.E1.isPrototypeOf(AE)?AE:null);var BY=(D.Ic.isPrototypeOf(AE)?AE:
null);var J9=this.Dy;var Dr;var Db;var Jf;var BZ;var Hf;if(!Ai&&!BY)return null;
Dr=(!!Ai&&Ai.Down)&&!Ai.BQ;Db=(!!Ai&&Ai.Down)&&(Ai.BQ>0);Jf=(!!Ai&&Ai.Down)&&(Ai.
BQ>this.I1);BZ=!!Ai&&!Ai.Down;Hf=!!BY;if(Dr)this.I1=((A=(Ai.Cq?0:50))&0x80)?A|0xFFFFFF00:
A&0xFF;if(Dr){var Hj=0;var Et;this.As=this.As|(1<<Ai.Bw);for(Et=this.As&4095;Et>
0;Et=Et>>1)if(!!(Et&1))Hj=Hj+1;if(Hj===1)this.As=(this.As|16777216)|(4096<<Ai.Bw
);}if(BZ&&(this.As<16777216)){var Ds=this.Ie();var BN=null;if(!!Ds){var Mi=(!!this.
At?this.At:this.G);BN=Ds.E2(B.abh(HX,Ai.CQ),Ai.Bw,Ai.Cm,null,Mi,0x0);}if(!!BN){var
M;for(M=0;M<10;M++)if(!!(this.As&(1<<M)))BN.Cf.Br(B._NewObject(D.E1,0).InitializeDown(
M,Ai.BM,Ai.Cm,AI,true,Ai.CQ));for(M=0;M<10;M++)if(!!(this.As&(1<<M)))BN.Cf.Br(B.
_NewObject(D.E1,0).InitializeUp(M,Ai.BM,Ai.BM,0,Ai.Cm,AI,false,Ai.CQ,Ai.CQ));}}if(
BZ)this.As=(this.As&~(1<<Ai.Bw))|33554432;if(Jf&&(this.As<16777216))this.As=this.
As|67108864;if(BZ&&Ai.Cq)this.As=this.As|67108864;if(BZ&&!(this.As&16777215))this.
As=0;if(Db&&(this.As>=67108864)){var Ds=this.Ie();if(!!Ds)Ds.MF(null,null,this,0x0
);}if((Db&&!!(this.As&16777216))&&!!(this.As&33554432)){Db=false;BZ=true;}if(!!Ai&&
!(this.As&(4096<<Ai.Bw)))return this;if(!!BY&&!(this.As&(4096<<BY.Bw)))return this;
if(BZ&&!(this.As&16777216))return this;if(((Dr||Hf)||Db)&&((this.As<16777216)||(
this.As>=33554432)))return this;if(BZ)this.As=this.As&3758100479;if(BZ&&!(this.As&
16777215))this.As=0;if(!!Ai){this.Down=Dr||Db;this.Dy=this.KQ(Ai.BM);this.CR=Ai.
CR;this.BM=Ai.BM;this.DA=AI;this.BQ=Ai.BQ;this.Cm=Ai.Cm;this.Cq=Ai.Cq;this.Bw=Ai.
Bw;this.Ax=Ai.Ax;if(Ai.Down&&!Ai.BQ)J9=false;}if(!!BY){this.Down=true;this.Dy=this.
KQ(BY.BM);this.CR=BY.CR;this.BM=BY.BM;this.DA=BY.DA;this.BQ=BY.BQ;this.Cm=BY.Cm;
this.Bw=BY.Bw;this.Cq=false;this.Ax=BY.Ax;}var LV=this.Down;if(!!BY)(A=this.K4)?
A[1].call(A[0],this):null;if((!!Ai&&this.Down)&&!this.BQ)(A=this.BF)?A[1].call(A[
0],this):null;if((this.Down&&this.Dy)&&!J9){this.LW=true;(A=this.Jz)?A[1].call(A[
0],this):null;}if(this.LW&&(((LV&&!this.Dy)&&J9)||((!LV&&this.Dy)&&J9))){this.LW=
false;(A=this.JB)?A[1].call(A[0],this):null;}if(!!Ai&&!LV)(A=this.DB)?A[1].call(
A[0],this):null;return this;},E2:function(Av,V,CE,ER,ET,Ha){var A;if(!!ER&&(ER!==
this))return null;if((CE<1)||(CE>this.Mt))return null;if(this.As>=33554432)return null;
if((this.As>=16777216)&&!(this.As&(4096<<V)))return null;if(this.Od()){var I=B.lb(
Av,this.GetExtent());if(!((I[0]>=I[2])||(I[1]>=I[3]))){var CG=B.aaI(Av);var BC=AI;
if(CG[0]<I[0])BC=[I[0]-CG[0],BC[1]];if(CG[0]>=I[2])BC=[(I[2]-CG[0])-1,BC[1]];if(
CG[1]<I[1])BC=[BC[0],I[1]-CG[1]];if(CG[1]>=I[3])BC=[BC[0],(I[3]-CG[1])-1];return B.
_NewObject(D.Jm,0).Initialize(this,BC);}}else{var A5=B.abi(9,B.wf,null);var M;A5.
Set(0,B.aaI(Av));A5.Set(1,A5.Get(0));A5.Set(2,A5.Get(0));A5.Set(3,A5.Get(0));A5.
Set(4,A5.Get(0));A5.Set(1,[Av[0],A5.Get(1)[1]]);A5.Set(2,[A5.Get(2)[0],Av[1]]);A5.
Set(3,[Av[2],A5.Get(3)[1]]);A5.Set(4,[A5.Get(4)[0],Av[3]]);A5.Set(5,Av.slice(0,2
));A5.Set(6,[Av[2],Av[1]]);A5.Set(7,[Av[0],Av[3]]);A5.Set(8,Av.slice(2,4));for(M=
0;M<9;M=M+1)if(this.KQ(A5.Get(M)))return B._NewObject(D.Jm,0).Initialize(this,B.
abe(A5.Get(M),A5.Get(0)));}return null;},Ld:function(C){if(C<1)C=1;this.OX=C;},In:
function(C){if(C<1)C=1;this.Mt=C;},N:function(C){if(C)this.AD(0x100000,0x0);else
this.AD(0x0,0x100000);},_Init:function(aArg){D.En._Init.call(this,aArg);this.__proto__=
D.AR;this.F=0x10011B;},_Mark:function(E){var A;D.En._Mark.call(this,E);if((A=this.
K4)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.JB)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.Jz)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);
if((A=this.DB)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.BF)&&((A=A[0
])._cycle!=E))A._Mark(A._cycle=E);},_className:"Core::SimpleTouchHandler"};D.C8={
K_:null,K5:null,Lg:null,As:0,MD:0,CR:B.wf,Mm:0,JI:0,Angle:0,Down:false,Dy:false,
Cq:false,I1:0,Cx:function(AM,aClip,aOffset,Az,aBlend){},Br:function(AE){var A;var
Ai=(D.E1.isPrototypeOf(AE)?AE:null);var BY=(D.Ic.isPrototypeOf(AE)?AE:null);var Dr;
var Db;var Jf;var BZ;var Hf;if(!Ai&&!BY)return null;Dr=(!!Ai&&Ai.Down)&&!Ai.BQ;Db=(
!!Ai&&Ai.Down)&&(Ai.BQ>0);Jf=(!!Ai&&Ai.Down)&&(Ai.BQ>this.I1);BZ=!!Ai&&!Ai.Down;
Hf=!!BY;if(Dr)this.I1=((A=(Ai.Cq?0:50))&0x80)?A|0xFFFFFF00:A&0xFF;if(Dr){var Hj=
0;var Et;this.As=this.As|(1<<Ai.Bw);for(Et=this.As&4095;Et>0;Et=Et>>1)if(!!(Et&1
))Hj=Hj+1;if(Hj===1)this.As=(this.As|16777216)|(4096<<Ai.Bw);}if(BZ&&(this.As<16777216
)){var Ds=this.Ie();var BN=null;if(!!Ds){var Mi=(!!this.At?this.At:this.G);BN=Ds.
E2(B.abh(HX,Ai.CQ),Ai.Bw,Ai.Cm,null,Mi,0x0);}if(!!BN){var M;for(M=0;M<10;M++)if(
!!(this.As&(1<<M)))BN.Cf.Br(B._NewObject(D.E1,0).InitializeDown(M,Ai.BM,Ai.Cm,AI
,true,Ai.CQ));for(M=0;M<10;M++)if(!!(this.As&(1<<M)))BN.Cf.Br(B._NewObject(D.E1,
0).InitializeUp(M,Ai.BM,Ai.BM,0,Ai.Cm,AI,false,Ai.CQ,Ai.CQ));}}if(BZ)this.As=(this.
As&~(1<<Ai.Bw))|33554432;if(Jf&&(this.As<16777216))this.As=this.As|67108864;if(BZ&&
Ai.Cq)this.As=this.As|67108864;if(BZ&&!(this.As&16777215))this.As=0;if(Db&&(this.
As>=67108864)){var Ds=this.Ie();if(!!Ds)Ds.MF(null,null,this,0x0);}if((Db&&!!(this.
As&16777216))&&!!(this.As&33554432)){Db=false;BZ=true;}if(!!Ai&&!(this.As&(4096<<
Ai.Bw)))return this;if(!!BY&&!(this.As&(4096<<BY.Bw)))return this;if(BZ&&!(this.
As&16777216))return this;if(((Dr||Hf)||Db)&&((this.As<16777216)||(this.As>=33554432
)))return this;if(BZ)this.As=this.As&3758100479;if(BZ&&!(this.As&16777215))this.
As=0;if(((!Dr&&!BZ)&&!Hf)&&!Db)return this;var A1=AI;var IK=this.Angle;var Ke=this.
MD;var Q2=Ke;var Aj;if((Dr||BZ)||Db){this.Dy=B.wa(this.Q,Ai.BM);this.Cq=Ai.Cq;this.
CR=Ai.CR;this.Down=Dr||Db;A1=B.abe(Ai.BM,B.aaI(this.Q));}if(Hf){this.Dy=B.wa(this.
Q,BY.BM);this.CR=BY.CR;this.Down=true;A1=B.abe(BY.BM,B.aaI(this.Q));}var I=Math.
sqrt((A1[0]*A1[0])+(A1[1]*A1[1]));if(I>=8){Ke=I|0;IK=(Math.acos(A1[0]/I)*B.rE)|0;
if(A1[1]>0)IK=360-IK;}Aj=IK-this.Angle;if(Aj>180)Aj=Aj-360;if(Aj<-180)Aj=Aj+360;
this.Angle=IK;this.Mm=Aj;this.JI=this.JI+Aj;this.MD=Ke;if(Dr){this.Mm=0;this.JI=
0;(A=this.Lg)?A[1].call(A[0],this):null;}if(!!Aj||(Ke!==Q2))(A=this.K_)?A[1].call(
A[0],this):null;if(BZ)(A=this.K5)?A[1].call(A[0],this):null;return this;},E2:function(
Av,V,CE,ER,ET,Ha){var A;if(!!ER&&(ER!==this))return null;if(this.As>=33554432)return null;
if((this.As>=16777216)&&!(this.As&(4096<<V)))return null;var I=B.lb(Av,this.Q);if(
!((I[0]>=I[2])||(I[1]>=I[3]))){var CG=B.aaI(Av);var BC=AI;if(CG[0]<I[0])BC=[I[0]-
CG[0],BC[1]];if(CG[0]>=I[2])BC=[(I[2]-CG[0])-1,BC[1]];if(CG[1]<I[1])BC=[BC[0],I[
1]-CG[1]];if(CG[1]>=I[3])BC=[BC[0],(I[3]-CG[1])-1];return B._NewObject(D.Jm,0).Initialize(
this,BC);}return null;},_Init:function(aArg){D.AQ._Init.call(this,aArg);this.__proto__=
D.C8;this.F=0x10011B;},_Mark:function(E){var A;D.AQ._Mark.call(this,E);if((A=this.
K_)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.K5)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.Lg)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);
},_className:"Core::RotateTouchHandler"};D.FH={AG:null,DB:null,BF:null,Ho:0,Ax:0
,ME:0,B4:148,Bp:0,AP:0,BE:true,Down:false,Lh:false,Cy:function(aArg){var A;var Hh=(
D.P.isPrototypeOf(A=this.J)?A:null);if(!Hh)throw new Error(IF);this.AG=Hh.J$;Hh.
J$=this;},Br:function(AE){var A;if(!!AE&&AE.Of(this.B4)){this.Down=AE.Down;this.
Bp=AE.Bp;this.AP=AE.AP;this.Ax=AE.Ax;if(AE.Down){this.ME=this.Ho;this.Lh=this.Ho>
0;if(!this.Lh)(A=this.BF)?A[1].call(A[0],this):null;this.Ho=this.Ho+1;return true;
}if(!AE.Down){this.Lh=this.Ho>1;this.ME=this.Ho-1;this.Ho=0;(A=this.DB)?A[1].call(
A[0],this):null;return true;}}return false;},_Init:function(aArg){this.__proto__=
D.FH;this.Cy(aArg);B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:
function(){},_Mark:function(E){var A;if((A=this.AG)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.DB)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.BF)&&((A=
A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.J)&&(A._cycle!=E))A._Mark(A._cycle=
E);},J:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"};D.Jm={Cf:
null,Ib:0,DA:B.wf,Initialize:function(O,aOffset){this.Cf=O;this.DA=aOffset;this.
Ib=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:function(
aArg){this.__proto__=D.Jm;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;}
,_ReInit:function(){},_Mark:function(E){var A;if((A=this.Cf)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.J)&&(A._cycle!=E))A._Mark(A._cycle=E);},J:null,_cycle:0,_observers:
null,_className:"Core::CursorHit"};D.Ju={Hn:null,CJ:B.wg,AX:B.wg,isEmpty:false,_Init:
function(aArg){this.__proto__=D.Ju;B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.Hn)&&(A._cycle!=
E))A._Mark(A._cycle=E);if((A=this.J)&&(A._cycle!=E))A._Mark(A._cycle=E);},J:null
,_cycle:0,_observers:null,_className:"Core::LayoutContext"};D.Jv={Ja:B.wf,I$:B.wf
,I_:B.wf,I9:B.wf,_Init:function(aArg){D.Ju._Init.call(this,aArg);this.__proto__=
D.Jv;},_className:"Core::LayoutQuadContext"};D.Fk={resource:null,C6:function(){this.
resource=null;},Cy:function(aArg){this.resource=aArg;},_Init:function(aArg){this.
__proto__=D.Fk;this.Cy(aArg);B.h7++;},_Done:function(){this.C6();this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.J)&&(A._cycle
!=E))A._Mark(A._cycle=E);},J:null,_cycle:0,_observers:null,_className:"Core::Resource"
};D.Timer={FO:null,timer:null,Ax:0,Period:1000,Ht:0,BE:false,C6:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},Kg:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=B.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},FM:function(C){if(C<0)C=0;if(C===this.Period)return;
this.Period=C;if(this.BE)this.Kg(this.Ht,C);},FI:function(C){if(C<0)C=0;if(C===this.
Ht)return;this.Ht=C;if(this.BE)this.Kg(C,this.Period);},N:function(C){if(C===this.
BE)return;this.BE=C;if(C)this.Kg(this.Ht,this.Period);else this.Kg(0,0);this.Ax=
this.Jt();},Jt:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.v$
)|0;return ticksCount;},Trigger:function(){var A;this.Ax=this.Jt();if(!this.Period
)this.N(false);(A=this.FO)?A[1].call(A[0],this):null;},_Init:function(aArg){this.
__proto__=D.Timer;B.h7++;},_Done:function(){this.C6();this.__proto__=null;B.h7--;
},_ReInit:function(){},_Mark:function(E){var A;if((A=this.FO)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.J)&&(A._cycle!=E))A._Mark(A._cycle=E);},J:null
,_cycle:0,_observers:null,_className:"Core::Timer"};D.Ax={JJ:0,K1:0,KN:0,Ia:0,Jy:
0,MJ:0,QX:function(){var result=0;{var d=new Date;result=Math.trunc(d.getTime()/
1000-(d.getTimezoneOffset()*60));}return result;},OD:function(C){var A;C+=62162035200;
if(C<0)C=0;var H_=Math.trunc(C/86400)|0;var Ng=(((H_>=0)?H_:H_-146096)/146097)|0;
var IR=H_-(Ng*146097);var Ks=((((IR-((IR/1460)|0))+((IR/36524)|0))-((IR/146096)|
0))/365)|0;var B0=Ks+(Ng*400);var Nf=IR-(((365*Ks)+((Ks/4)|0))-((Ks/100)|0));var
L7=(((5*Nf)+2)/153)|0;var d=(Nf-((((153*L7)+2)/5)|0))+1;var C3=L7+((L7<10)?3:-9);
var AT=Math.trunc(C/3600)%24|0;var M=Math.trunc(C/60)%60|0;var D8=C%60|0;this.MJ=
B0+((C3<=2)?1:0);this.Oy(C3);this.FJ(d);this.Ou(AT+((AT<0)?24:0));this.Ox(M+((M<
0)?60:0));this.OB(D8+((D8<0)?60:0));},Oo:function(){return B._NewObject(D.Ax,0).
Initialize(this.QX());},GG:function(){var A;var d=this.Ia;var C3=this.Jy+((this.
Jy>2)?-2:10);var B0=this.MJ-((this.Jy<=2)?1:0);var Ah=(B0/100)|0;B0%=100;d+=((((((((
26*C3)-2)/10)|0)+B0)+((B0/4)|0))+((Ah/4)|0))-(2*Ah));if(d>=0)return d%7;else return(
7-(-d%7))%7;},OB:function(C){if(C<0)C=0;if(C>59)C=59;this.JJ=C;},Ox:function(C){
if(C<0)C=0;if(C>59)C=59;this.K1=C;},Ou:function(C){if(C<0)C=0;if(C>23)C=23;this.
KN=C;},FJ:function(C){if(C<1)C=1;if(C>31)C=31;this.Ia=C;},Oy:function(C){if(C<1)
C=1;if(C>12)C=12;this.Jy=C;},Initialize:function(QF){this.OD(QF);return this;},_Init:
function(aArg){this.__proto__=D.Ax;B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.J)&&(A._cycle!=
E))A._Mark(A._cycle=E);},J:null,_cycle:0,_observers:null,_className:"Core::Time"
};D.MC={K6:null,Y:null,Nv:function(An){var A;(A=this.K6)?A[1].call(A[0],this):null;
},Em:function(C){if(B.aaZ(this.Y,C))return;if(!!this.Y)B.z$([this,this.Nv],this.
Y,0);this.Y=C;if(!!this.Y)B.zX([this,this.Nv],this.Y,0);},_Init:function(aArg){this.
__proto__=D.MC;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(
){},_Mark:function(E){var A;if((A=this.K6)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=
E);if((A=this.Y)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.J)&&(A._cycle
!=E))A._Mark(A._cycle=E);},J:null,_cycle:0,_observers:null,_className:"Core::PropertyObserver"
};D.Sg={Sh:0x1,Rn:0x2,Rz:0x4,Sd:0x8,BE:0x10,Fl:0x20,RA:0x40,RL:0x80,Rx:0x100,RF:
0x200,Rw:0x400,RV:0x800,JM:0x1000,Sf:0x2000,RS:0x4000,RT:0x8000,Ru:0x10000,RR:0x20000
,R5:0x40000,Rv:0x80000,RU:0x100000,Rt:0x200000};D.Cc={RW:0x1,RX:0x2,Rj:0x4,Rk:0x8
,Rl:0x10,Ri:0x20};D.RC={RM:0,Sa:1,Rq:2,RG:3,RZ:4,Sb:5,Sc:6,Rr:7,Rs:8,RI:9,RH:10,
R1:11,R0:12};D.KeyCode={NoKey:0,Ok:1,Exit:2,Menu:3,Up:4,Down:5,Left:6,Right:7,PageUp:
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
346};D.RY={Sl:0x1,Si:0x2,Sj:0x4,Sk:0x8,RJ:0x10,RB:0x20};
D._Init=function(){D.En.__proto__=D.Cf;D.AQ.__proto__=D.Cf;D.P.__proto__=D.AQ;D.Root.
__proto__=D.P;D.KeyEvent.__proto__=D.Event;D.KC.__proto__=D.Event;D.E1.__proto__=
D.Event;D.Ic.__proto__=D.Event;D.Io.__proto__=D.AQ;D.AR.__proto__=D.En;D.C8.__proto__=
D.AQ;D.Jv.__proto__=D.Ju;};D._ReInit=function(){};D.Cn=function(E){};return D;})(
);

/* Embedded Wizard */