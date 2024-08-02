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
);if(EmWiApp.ach)throw new Error("The unit file 'Effects.js' included twice!");EmWiApp.
ach=(function(){var B=EmWiApp;var D={};
var AG=[100,100];var AZ="Trying to remove a fader from a task, which is actually running";
var Cc="The fader doesn\'t belong to this task";var Et="Trying to add a fader to a task, which is actually running";
var DA="The fader belongs already to a task";
D.A6={Cl:null,timer:null,Iq:null,Ip:null,J4:0,Gx:0,DE:0,CE:0,J$:0.001,CW:0,A8:0,AR:
0,L3:0.5,NP:3,Ju:3,I8:0.5,DQ:3,MP:0,MO:0,Dw:0,FN:1000,F_:0,Gg:0,AM:false,MI:false
,Id:false,LP:false,BZ:function(Ab){var A;if(!this.timer)return;if(!this.Gx){if(this.
MI)this.Gx=-1;else this.Gx=1;this.J4=this.Gx;this.AR=this.timer.AC;this.A8=0;this.
CW=-1;}var CT;if((this.Gx>0)&&(this.J4>0))CT=this.S5();else if((this.Gx<0)&&(this.
J4<0))CT=this.S8();else if(this.Gx>0)CT=this.S6();else CT=this.S7();if(CT){this.
Ao(false);(A=this.Iq)?A[1].call(A[0],this):null;}},LI:function(L){var A;if(!this.
Cl&&(((this.Gg===19)||(this.Gg===20))||(this.Gg===21))){var Lk=this.NP+1;var SH=
Math.sqrt(this.L3);var Ic=0.5;var M;this.Cl=B._NewObject(D.K9,0);this.Cl.CG.Set(
0,1);this.Cl.GV.Set(0,1);for(M=1;M<Lk;M=M+1){this.Cl.CG.Set(M,this.Cl.CG.Get(M-1
)*SH);this.Cl.GV.Set(M,this.Cl.GV.Get(M-1)*this.L3);Ic=Ic+this.Cl.CG.Get(M);}var
SN=1/Ic;this.Cl.CG.Set(0,0.5);Ic=0;for(M=0;M<Lk;M=M+1){this.Cl.CG.Set(M,this.Cl.
CG.Get(M)*SN);Ic=Ic+this.Cl.CG.Get(M);}this.Cl.CG.Set(Lk,this.Cl.CG.Get(Lk)+(1-Ic
));}switch(this.Gg){case 1:L=Math.pow(L,this.DQ);break;case 2:{L=1-L;L=1-Math.pow(
L,this.DQ);}break;case 3:{L=L*2;if(L<1)L=Math.pow(L,this.DQ)/2;else{L=2-L;L=(2-Math.
pow(L,this.DQ))*0.5;}}break;case 4:L=(Math.pow(2.718,this.DQ*L)-1)/(Math.pow(2.718
,this.DQ)-1);break;case 5:{L=1-L;L=1-((Math.pow(2.718,this.DQ*L)-1)/(Math.pow(2.718
,this.DQ)-1));}break;case 6:{L=L*2;if(L<1)L=((Math.pow(2.718,this.DQ*L)-1)/(Math.
pow(2.718,this.DQ)-1))/2;else{L=2-L;L=(2-((Math.pow(2.718,this.DQ*L)-1)/(Math.pow(
2.718,this.DQ)-1)))*0.5;}}break;case 7:L=1-Math.cos((L*90)*B.k$);break;case 8:L=
Math.sin((L*90)*B.k$);break;case 9:{L=L*2;if(L<1){L=1-Math.cos((L*90)*B.k$);L=L*
0.5;}else{L=2-L;L=1-Math.cos((L*90)*B.k$);L=(2-L)*0.5;}}break;case 10:L=1-Math.sqrt(
1-(L*L));break;case 11:{L=1-L;L=Math.sqrt(1-(L*L));}break;case 12:{L=L*2;if(L<1){
L=1-Math.sqrt(1-(L*L));L=L*0.5;}else{L=2-L;L=1-Math.sqrt(1-(L*L));L=(2-L)*0.5;}}
break;case 13:L=((L*L)*L)-((L*this.I8)*Math.sin((L*180)*B.k$));break;case 14:{L=
1-L;L=((L*L)*L)-((L*this.I8)*Math.sin((L*180)*B.k$));L=1-L;}break;case 15:{L=L*2;
if(L<1){L=((L*L)*L)-((L*this.I8)*Math.sin((L*180)*B.k$));L=L*0.5;}else{L=2-L;L=((
L*L)*L)-((L*this.I8)*Math.sin((L*180)*B.k$));L=(2-L)*0.5;}}break;case 16:L=((L*L
)*L)*Math.sin(((L*90)*(1+(4*this.Ju)))*B.k$);break;case 17:{L=1-L;L=1-(((L*L)*L)
*Math.sin(((L*90)*(1+(4*this.Ju)))*B.k$));}break;case 18:{L=L*2;if(L<1){L=((L*L)
*L)*Math.sin(((L*90)*(1+(4*this.Ju)))*B.k$);L=L*0.5;}else{L=2-L;L=((L*L)*L)*Math.
sin(((L*90)*(1+(4*this.Ju)))*B.k$);L=(2-L)*0.5;}}break;case 19:{var E_=this.Cl;var
M=0;var Fe=0;var CY=E_.CG.Get(0);var Ck=1-L;while(Ck>CY){M=M+1;Fe=CY;CY=CY+E_.CG.
Get(M);}L=(Ck-Fe)/(CY-Fe);if(!M)L=1-(L*L);else{L=(2*L)-1;L=E_.GV.Get(M)*(1-(L*L)
);}}break;case 20:{var E_=this.Cl;var M=0;var Fe=0;var CY=E_.CG.Get(0);while(L>CY
){M=M+1;Fe=CY;CY=CY+E_.CG.Get(M);}L=(L-Fe)/(CY-Fe);if(!M)L=L*L;else{L=(2*L)-1;L=
1-(E_.GV.Get(M)*(1-(L*L)));}}break;case 21:{var E_=this.Cl;var M=0;var Fe=0;var CY=
E_.CG.Get(0);var DF=L*2;var Ck=DF-1;if(DF<1)Ck=-Ck;while(Ck>CY){M=M+1;Fe=CY;CY=CY+
E_.CG.Get(M);}Ck=(Ck-Fe)/(CY-Fe);if(!M)Ck=Ck*Ck;else{Ck=(2*Ck)-1;Ck=1-(E_.GV.Get(
M)*(1-(Ck*Ck)));}if(DF<1)L=0.5*(1-Ck);else L=0.5*(1+Ck);}break;default:if(this.Id
){var DF=L;var Kf=1-DF;L=((Kf*DF)*(this.CE+1))+(DF*DF);}else if(this.LP){var DF=
L;var Kf=1-DF;var OV=DF*DF;var SR=Kf*Kf;L=(((SR*DF)*(this.CE+1))+((Kf*OV)*(this.
DE+2)))+(OV*DF);}}this.KA(L);(A=this.Ip)?A[1].call(A[0],this):null;},S8:function(
){var Aq=(this.timer.AC-this.AR)|0;if(Aq<0)Aq=-Aq;var Dr=this.F_;var D8=this.F_+
this.FN;var BD=this.FN;var CT=false;var AD=this.CW;if(!this.A8&&(Aq>=D8)){this.A8=
1;Aq=Aq-D8;this.AR=this.AR+D8;}if((this.A8>0)&&(Aq>=BD)){var BM=(Aq/BD)|0;this.A8=
this.A8+BM;Aq=Aq-(BM*BD);this.AR=this.AR+(BM*BD);}if((this.A8>2)&&!this.Dw)this.
A8=1;if(this.A8>0)Dr=0;if((this.A8>=this.Dw)&&(this.Dw>0)){CT=true;AD=0;}else if(
Aq>=Dr)AD=1-((Aq-Dr)*this.J$);else if(AD>=0)AD=0;if(AD!==this.CW){if(AD<0)AD=0;if(
AD>1)AD=1;}if(AD!==this.CW){this.CW=AD;this.LI(AD);}return CT;},S7:function(){var
Aq=(this.AR-this.timer.AC)|0;var Dr=this.F_;var D8=this.F_+this.FN;var BD=this.FN;
var CT=false;var AD=this.CW;if((this.A8>1)&&(Aq<0)){var BM=(((-Aq+BD)-1)/BD)|0;if((
this.A8-BM)<=0)BM=this.A8-1;this.A8=this.A8-BM;Aq=Aq+(BM*BD);this.AR=this.AR+(BM
*BD);}if(((this.A8===1)&&(Aq<0))&&(this.Dw>0)){this.A8=0;Aq=Aq+D8;this.AR=this.AR+
D8;}if(((this.A8===1)&&(Aq<0))&&!this.Dw){var BM=(((-Aq+BD)-1)/BD)|0;Aq=Aq+(BM*BD
);this.AR=this.AR+(BM*BD);}if(this.A8>0)Dr=0;if(Aq<0){CT=true;AD=1;}else if(Aq>=
Dr)AD=1-((Aq-Dr)*this.J$);else if(AD>=0)AD=1;if(AD!==this.CW){if(AD<0)AD=0;if(AD>
1)AD=1;}if(AD!==this.CW){this.CW=AD;this.LI(AD);}return CT;},S6:function(){var Aq=(
this.AR-this.timer.AC)|0;var Dr=this.F_;var D8=this.F_+this.FN;var BD=this.FN;var
CT=false;var AD=this.CW;if((this.A8>1)&&(Aq<0)){var BM=(((-Aq+BD)-1)/BD)|0;if((this.
A8-BM)<=0)BM=this.A8-1;this.A8=this.A8-BM;Aq=Aq+(BM*BD);this.AR=this.AR+(BM*BD);
}if(((this.A8===1)&&(Aq<0))&&(this.Dw>0)){this.A8=0;Aq=Aq+D8;this.AR=this.AR+D8;
}if(((this.A8===1)&&(Aq<0))&&!this.Dw){var BM=(((-Aq+BD)-1)/BD)|0;Aq=Aq+(BM*BD);
this.AR=this.AR+(BM*BD);}if(this.A8>0)Dr=0;if(Aq<0){CT=true;AD=0;}else if(Aq>=Dr
)AD=(Aq-Dr)*this.J$;else if(AD>=0)AD=0;if(AD!==this.CW){if(AD<0)AD=0;if(AD>1)AD=
1;}if(AD!==this.CW){this.CW=AD;this.LI(AD);}return CT;},S5:function(){var Aq=(this.
timer.AC-this.AR)|0;if(Aq<0)Aq=-Aq;var Dr=this.F_;var D8=this.F_+this.FN;var BD=
this.FN;var CT=false;var AD=this.CW;if(!this.A8&&(Aq>=D8)){this.A8=1;Aq=Aq-D8;this.
AR=this.AR+D8;}if((this.A8>0)&&(Aq>=BD)){var BM=(Aq/BD)|0;this.A8=this.A8+BM;Aq=
Aq-(BM*BD);this.AR=this.AR+(BM*BD);}if((this.A8>2)&&!this.Dw)this.A8=1;if(this.A8>
0)Dr=0;if((this.A8>=this.Dw)&&(this.Dw>0)){CT=true;AD=1;}else if(Aq>=Dr)AD=(Aq-Dr
)*this.J$;else if(AD>=0)AD=1;if(AD!==this.CW){if(AD<0)AD=0;if(AD>1)AD=1;}if(AD!==
this.CW){this.CW=AD;this.LI(AD);}return CT;},MB:function(C){if(this.MI===C)return;
this.MI=C;if(!this.AM||!this.Gx)return;if(C)this.J4=-1;else this.J4=1;this.AR=(this.
timer.Jb()*2)-this.AR;},N7:function(C){if(C<0)C=0;if(C>1)C=1;this.L3=C;},N5:function(
C){if(C<1)C=1;if(C>10)C=10;this.NP=C;this.Cl=null;},N$:function(C){if(C<1)C=1;if(
C>10)C=10;this.Ju=C;},N4:function(C){if(C<0)C=0;if(C>10)C=10;this.I8=C;},N8:function(
C){if(C<1)C=1;if(C>100)C=100;this.DQ=C;},Oe:function(C){if(this.MP===C)return;this.
MP=C;if(this.Gg===26){this.DE=C;this.Id=(this.CE===this.DE)&&!!this.CE;this.LP=!
this.Id&&(this.CE!==this.DE);}},Od:function(C){if(this.MO===C)return;this.MO=C;if(
this.Gg===26){this.CE=C;this.Id=(this.CE===this.DE)&&!!this.CE;this.LP=!this.Id&&(
this.CE!==this.DE);}},MC:function(C){if(this.Gg===C)return;this.Gg=C;this.Cl=null;
switch(C){case 24:{this.CE=-1.1;this.DE=1.1;}break;case 22:{this.CE=-1;this.DE=-
2;}break;case 23:{this.CE=2;this.DE=1;}break;case 25:{this.CE=1.1;this.DE=-1.1;}
break;case 0:{this.CE=0;this.DE=0;}break;default:{this.CE=this.MO;this.DE=this.MP;
}}this.Id=(this.CE===this.DE)&&!!this.CE;this.LP=!this.Id&&(this.CE!==this.DE);}
,HE:function(C){if(C<0)C=0;this.Dw=C;},Ga:function(C){if(C<15)C=15;this.FN=C;this.
J$=1/C;},Jj:function(C){if(C<0)C=0;this.F_=C;},Ao:function(C){if(this.AM===C)return;
this.AM=C;if(!C&&!!this.timer){B.z9([this,this.BZ],this.timer,0);this.timer=null;
}if(C){this.timer=B._GetAutoObject(D.FX);B.zV([this,this.BZ],this.timer,0);this.
Gx=0;B.pe([this,this.BZ],this);}},KA:function(FB){},_Init:function(aArg){this.__proto__=
D.A6;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){}
,_Mark:function(E){var A;if((A=this.Cl)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=
this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Iq)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.Ip)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);
if((A=this.J)&&(A._cycle!=E))A._Mark(A._cycle=E);},J:null,_cycle:0,_observers:null
,_className:"Effects::Effect"};D.Io={Ad:null,Fu:0,A4:255,A3:0,KA:function(FB){var
U;this.Fu=this.A3+(Math.round((this.A4-this.A3)*FB)|0);if(!!this.Ad)(U=this.Ad,U[
2].call(U[0],this.Fu));},_Init:function(aArg){D.A6._Init.call(this,aArg);this.__proto__=
D.Io;},_Mark:function(E){var A;D.A6._Mark.call(this,E);if((A=this.Ad)&&((A=A[0]).
_cycle!=E))A._Mark(A._cycle=E);},_className:"Effects::Int32Effect"};D.MF={Fu:B.wf
,A4:AG,A3:B.wf,KA:function(FB){var Ie=this.A3[0];var BE=this.A3[1];Ie=Ie+(Math.round((
this.A4[0]-Ie)*FB)|0);BE=BE+(Math.round((this.A4[1]-BE)*FB)|0);this.Fu=[Ie,BE];}
,_Init:function(aArg){D.A6._Init.call(this,aArg);this.__proto__=D.MF;},_className:
"Effects::PointEffect"};D.Dg={Ad:null,Fu:0,A4:0xFFFFFFFF,A3:0,KA:function(FB){var
U;var G5=this.A3&0xFF;var GY=(this.A3>>8)&0xFF;var GW=(this.A3>>16)&0xFF;var CR=(
this.A3>>24)&0xFF;G5=G5+((((this.A4&0xFF)-G5)*FB)|0);GY=GY+(((((this.A4>>8)&0xFF
)-GY)*FB)|0);GW=GW+(((((this.A4>>16)&0xFF)-GW)*FB)|0);CR=CR+(((((this.A4>>24)&0xFF
)-CR)*FB)|0);if(G5<0)G5=0;if(G5>255)G5=255;if(GY<0)GY=0;if(GY>255)GY=255;if(GW<0
)GW=0;if(GW>255)GW=255;if(CR<0)CR=0;if(CR>255)CR=255;this.Fu=(G5&0xFF)|((GY&0xFF
)<<8)|((GW&0xFF)<<16)|((CR&0xFF)<<24);if(!!this.Ad)(U=this.Ad,U[2].call(U[0],this.
Fu));},_Init:function(aArg){D.A6._Init.call(this,aArg);this.__proto__=D.Dg;},_Mark:
function(E){var A;D.A6._Mark.call(this,E);if((A=this.Ad)&&((A=A[0])._cycle!=E))A.
_Mark(A._cycle=E);},_className:"Effects::ColorEffect"};D.Dk={DN:null,X:null,Z:null
,G:null,H:null,LA:null,NB:null,Is:null,AY:true,AM:true,GS:true,Ig:false,Ih:true,
Ge:true,EX:true,Dh:function(){if(!!this.DN)this.DN.Dh();},KO:function(){return true;
},GF:function(){},EV:function(){this.Dh();},_Init:function(aArg){this.__proto__=
D.Dk;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){}
,_Mark:function(E){var A;if((A=this.DN)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=
this.X)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Z)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.G)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.H)&&(A._cycle
!=E))A._Mark(A._cycle=E);if((A=this.LA)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E
);if((A=this.NB)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Is)&&((A=A[
0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.J)&&(A._cycle!=E))A._Mark(A._cycle=
E);},J:null,_cycle:0,_observers:null,_className:"Effects::Fader"};D.IQ={Of:B.wf,
DG:false,KO:function(){return this.DG;},GF:function(){if(!this.AY&&!!this.H.G)this.
H.BQ(false);if((!this.AY&&this.EX)&&!!this.H.G)this.H.G.Gc(this.H);if(!this.AM)this.
H.Ao(false);},EV:function(){if(this.AM)this.H.Ao(true);if((this.AY||this.Ig)&&!this.
H.G){this.H.BQ(false);this.G.S(this.H,0);}if(this.AY&&this.Ge)this.H.G.MH(this.H
);if(this.AY&&this.Ih)this.H.G.Dx(this.H);if(this.AY&&!this.GS)this.H.R(B.abJ(this.
H.Q,this.Of));if(this.AY){this.H.Bd(255);this.H.BQ(true);}if(!this.AY&&(this.G.CB===
this.H))this.G.Dx(null);this.DG=true;this.Dh();},_Init:function(aArg){D.Dk._Init.
call(this,aArg);this.__proto__=D.IQ;},_className:"Effects::VisibilityFader"};D.ME={
A6:null,DG:false,KO:function(){return this.DG;},GF:function(){if(this.AY)this.H.
Bd(this.A6.A4);if(!this.AY&&!this.H.Bi)this.H.BQ(false);if((!this.AY&&this.EX)&&
!!this.H.G)this.H.G.Gc(this.H);if(!this.AM)this.H.Ao(false);},EV:function(){var A;
if(this.GS){if(this.H.Ek()&&!!this.H.G)this.A6.A3=this.H.Bi;else this.A6.A3=0;}var
Ns=((!this.H.G||!this.H.Bi)||!this.H.Ek())||(((A=B.lb(this.H.Q,[0,0,(A=this.G.Q)[
2]-A[0],A[3]-A[1]]))[0]>=A[2])||(A[1]>=A[3]));var Nt=((!this.AY&&((!this.H.G||!this.
H.Ek())||this.EX))||!this.A6.A4)||(((A=B.lb(this.H.Q,[0,0,(A=this.G.Q)[2]-A[0],A[
3]-A[1]]))[0]>=A[2])||(A[1]>=A[3]));if(Ns&&Nt){this.A6.A3=0;this.A6.A4=0;}if(this.
AM)this.H.Ao(true);if((this.AY||this.Ig)&&!this.H.G){this.H.BQ(false);this.G.S(this.
H,0);}if(this.AY&&this.Ge)this.H.G.MH(this.H);if(this.AY&&this.Ih)this.H.G.Dx(this.
H);if(!this.AY&&(this.G.CB===this.H))this.G.Dx(null);if(this.AY&&!this.H.Ek()){this.
H.Bd(this.A6.A3);this.H.BQ(true);}if(!this.AY&&((!this.H.G||!this.H.Ek())||!this.
H.Bi)){this.DG=true;this.Dh();return;}if(!this.AY&&(this.A6.A3===this.A6.A4))this.
H.Bd(this.A6.A3);if(this.H.Bi===this.A6.A4){this.DG=true;this.Dh();return;}if(this.
A6.A3===this.A6.A4){this.DG=true;this.Dh();return;}if(!this.A6.Dw)this.A6.HE(1);
this.A6.Ad=[A=this.H,A.KV,A.Oy];this.A6.MB(false);this.A6.Iq=[this,this.LB];this.
A6.Ip=null;this.A6.Ao(true);},LB:function(Ab){this.DG=true;this.Dh();},_Init:function(
aArg){D.Dk._Init.call(this,aArg);D.Io._Init.call(this.A6={J:this},0);this.__proto__=
D.ME;},_Done:function(){this.__proto__=D.Dk;this.A6._Done();D.Dk._Done.call(this
);},_ReInit:function(){D.Dk._ReInit.call(this);this.A6._ReInit();},_Mark:function(
E){var A;D.Dk._Mark.call(this,E);if((A=this.A6)._cycle!=E)A._Mark(A._cycle=E);},
_className:"Effects::OpacityFader"};D.GP={A2:null,AF:null,DG:false,KO:function(){
return this.DG;},GF:function(){if(this.AY){this.H.Bd(this.A2.A4);this.H.R(B.abJ(
this.H.Q,this.AF.A4));}if(!this.AY&&!this.H.Bi)this.H.BQ(false);if((!this.AY&&this.
EX)&&!!this.H.G)this.H.G.Gc(this.H);if(!this.AM)this.H.Ao(false);},EV:function(){
var A;if(this.GS){if(this.H.Ek()&&!!this.H.G)this.A2.A3=this.H.Bi;else this.A2.A3=
0;this.AF.A3=this.H.Q.slice(0,2);}var Ns=((!this.H.G||!this.H.Bi)||!this.H.Ek())||(((
A=B.lb(this.H.Q,[0,0,(A=this.G.Q)[2]-A[0],A[3]-A[1]]))[0]>=A[2])||(A[1]>=A[3]));
var Nt=((!this.AY&&((!this.H.G||!this.H.Ek())||this.EX))||!this.A2.A4)||(((A=B.lb(
B.abh([0,0,(A=this.H.Q)[2]-A[0],A[3]-A[1]],this.AF.A4),[0,0,(A=this.G.Q)[2]-A[0]
,A[3]-A[1]]))[0]>=A[2])||(A[1]>=A[3]));if(Ns&&Nt){this.A2.A3=0;this.A2.A4=0;this.
AF.A3=this.AF.A4;}if(this.AM)this.H.Ao(true);if((this.AY||this.Ig)&&!this.H.G){this.
H.BQ(false);this.G.S(this.H,0);}if(this.AY&&this.Ge)this.H.G.MH(this.H);if(this.
AY&&this.Ih)this.H.G.Dx(this.H);if(!this.AY&&(this.G.CB===this.H))this.G.Dx(null
);if(this.AY&&!this.H.Ek()){this.H.R(B.abJ(this.H.Q,this.AF.A3));this.H.Bd(this.
A2.A3);this.H.BQ(true);}if(!this.AY&&((!this.H.G||!this.H.Ek())||!this.H.Bi)){this.
DG=true;this.Dh();return;}if(!this.AY&&B.aaX(this.AF.A3,this.AF.A4))this.H.R(B.abJ(
this.H.Q,this.AF.A3));if(!this.AY&&(this.A2.A3===this.A2.A4))this.H.Bd(this.A2.A3
);if((this.H.Bi===this.A2.A4)&&B.aaX(this.H.Q.slice(0,2),this.AF.A4)){this.DG=true;
this.Dh();return;}if((this.A2.A3===this.A2.A4)&&B.aaX(this.AF.A3,this.AF.A4)){this.
DG=true;this.Dh();return;}if(!this.A2.Dw)this.A2.HE(1);if(!this.AF.Dw)this.AF.HE(
1);this.AF.MB(false);this.AF.Iq=[this,this.LB];this.AF.Ip=[this,this.ST];this.A2.
Ad=[A=this.H,A.KV,A.Oy];this.A2.MB(false);this.A2.Iq=[this,this.LB];this.A2.Ip=null;
this.AF.Ao(!B.aaX(this.AF.A3,this.AF.A4));this.A2.Ao(this.A2.A3!==this.A2.A4);},
LB:function(Ab){this.DG=!this.A2.AM&&!this.AF.AM;this.Dh();},ST:function(Ab){this.
H.R(B.abJ(this.H.Q,this.AF.Fu));},_Init:function(aArg){D.Dk._Init.call(this,aArg
);D.Io._Init.call(this.A2={J:this},0);D.MF._Init.call(this.AF={J:this},0);this.__proto__=
D.GP;},_Done:function(){this.__proto__=D.Dk;this.A2._Done();this.AF._Done();D.Dk.
_Done.call(this);},_ReInit:function(){D.Dk._ReInit.call(this);this.A2._ReInit();
this.AF._ReInit();},_Mark:function(E){var A;D.Dk._Mark.call(this,E);if((A=this.A2
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.AF)._cycle!=E)A._Mark(A._cycle=E);},_className:
"Effects::PositionFader"};D.Er={Fi:function(){return null;},Hc:function(){return null;
},He:function(){return this.Fi();},Hd:function(){return this.Hc();},_Init:function(
aArg){this.__proto__=D.Er;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;}
,_ReInit:function(){},_Mark:function(E){var A;if((A=this.J)&&(A._cycle!=E))A._Mark(
A._cycle=E);},J:null,_cycle:0,_observers:null,_className:"Effects::Transition"};
D.MJ={Fi:function(){var I=B._NewObject(D.IQ,0);I.AY=true;I.AM=true;I.Ih=false;I.
Ge=true;I.GS=false;I.Is=[this,this.Ki];return I;},Hc:function(){var I=B._NewObject(
D.IQ,0);I.AY=false;I.AM=false;I.EX=true;return I;},He:function(){var I=D.Er.He.call(
this);I.Ge=false;I.AM=true;return I;},Hd:function(){var I=B._NewObject(D.IQ,0);I.
AY=false;I.AM=true;I.Ig=true;I.EX=false;return I;},Ki:function(Ab){var A;var I=(
D.IQ.isPrototypeOf(Ab)?Ab:null);var Ax=[0,0,(A=I.G.Q)[2]-A[0],A[3]-A[1]];var AV=[(
A=I.H.Q)[2]-A[0],A[3]-A[1]];var V=Ax.slice(0,2);V=[(Ax[0]+(((Ax[2]-Ax[0])/2)|0))-((
AV[0]/2)|0),V[1]];V=[V[0],(Ax[1]+(((Ax[3]-Ax[1])/2)|0))-((AV[1]/2)|0)];I.Of=V;},
_Init:function(aArg){D.Er._Init.call(this,aArg);this.__proto__=D.MJ;},_className:
"Effects::ShowHideTransition"};D.KK={Fi:function(){var I=B._NewObject(D.GP,0);I.
AY=true;I.AM=true;I.Ih=false;I.Ge=true;I.GS=true;I.Is=[this,this.Ki];I.A2.Ga(500
);I.A2.A3=0;I.A2.A4=255;I.AF.Ga(500);I.AF.MC(23);return I;},Hc:function(){var I=
B._NewObject(D.ME,0);I.AY=false;I.AM=false;I.EX=true;I.GS=true;I.A6.A3=255;I.A6.
A4=0;I.A6.Ga(500);return I;},He:function(){var I=D.Er.He.call(this);I.Ge=false;I.
AM=true;return I;},Hd:function(){var I=D.Er.Hd.call(this);I.Ig=true;I.EX=false;I.
AM=true;return I;},Ki:function(Ab){var A;var I=(D.GP.isPrototypeOf(Ab)?Ab:null);
var Ax=[0,0,(A=I.G.Q)[2]-A[0],A[3]-A[1]];var AV=[(A=I.H.Q)[2]-A[0],A[3]-A[1]];var
V=Ax.slice(0,2);V=[(Ax[0]+(((Ax[2]-Ax[0])/2)|0))-((AV[0]/2)|0),V[1]];V=[V[0],(Ax[
1]+(((Ax[3]-Ax[1])/2)|0))-((AV[1]/2)|0)];I.AF.A4=V;if(((!I.H.G||!I.H.Ek())||!I.H.
Bi)||(((A=B.lb(I.H.Q,[0,0,(A=I.G.Q)[2]-A[0],A[3]-A[1]]))[0]>=A[2])||(A[1]>=A[3])
))I.H.R(B.abJ(I.H.Q,V));},_Init:function(aArg){D.Er._Init.call(this,aArg);this.__proto__=
D.KK;},_className:"Effects::FadeInOutTransition"};D.Fq={KH:0,Fi:function(){var I=
B._NewObject(D.GP,0);I.AY=true;I.AM=true;I.Ih=false;I.Ge=true;I.GS=true;I.Is=[this
,this.Ki];I.A2.Ga(500);I.A2.Jj(0);I.A2.A3=0;I.A2.A4=255;I.AF.Ga(500);I.AF.MC(23);
I.AF.Od(0);I.AF.Oe(0);I.AF.N8(3);I.AF.N4(0.5);I.AF.N$(3);I.AF.N5(3);I.AF.N7(0.5);
return I;},Hc:function(){var I=B._NewObject(D.GP,0);I.AY=false;I.AM=false;I.EX=true;
I.GS=true;I.Is=[this,this.SX];I.A2.A3=255;I.A2.A4=0;I.A2.Ga(500);I.A2.Jj(0);I.AF.
Ga(500);I.AF.MC(23);I.AF.Od(0);I.AF.Oe(0);I.AF.N8(3);I.AF.N4(0.5);I.AF.N$(3);I.AF.
N5(3);I.AF.N7(0.5);return I;},He:function(){var I=D.Er.He.call(this);I.Ge=false;
I.AM=true;return I;},Hd:function(){var I=D.Er.Hd.call(this);I.Ig=true;I.EX=false;
I.AM=true;return I;},Ki:function(Ab){var A;var I=(D.GP.isPrototypeOf(Ab)?Ab:null
);var Ax=[0,0,(A=I.G.Q)[2]-A[0],A[3]-A[1]];var AV=[(A=I.H.Q)[2]-A[0],A[3]-A[1]];
var V=Ax.slice(0,2);V=[(Ax[0]+(((Ax[2]-Ax[0])/2)|0))-((AV[0]/2)|0),V[1]];V=[V[0]
,(Ax[1]+(((Ax[3]-Ax[1])/2)|0))-((AV[1]/2)|0)];I.AF.A4=V;if(((!I.H.G||!I.H.Ek())||
!I.H.Bi)||(((A=B.lb(I.H.Q,[0,0,(A=I.G.Q)[2]-A[0],A[3]-A[1]]))[0]>=A[2])||(A[1]>=
A[3]))){var D9=[(A=I.G.Q)[2]-A[0],A[3]-A[1]];switch(this.KH){case 5:V=[V[0],-AV[
1]];break;case 3:{V=[V[0],-AV[1]];V=[D9[0],V[1]];}break;case 8:V=[-AV[0],-AV[1]];
break;case 2:V=[D9[0],V[1]];break;case 7:V=[-AV[0],V[1]];break;case 4:V=[V[0],D9[
1]];break;case 1:{V=[V[0],D9[1]];V=[D9[0],V[1]];}break;case 6:{V=[V[0],D9[1]];V=[-
AV[0],V[1]];}break;default:;}I.H.R(B.abJ(I.H.Q,V));}},SX:function(Ab){var A;var I=(
D.GP.isPrototypeOf(Ab)?Ab:null);var V=I.H.Q.slice(0,2);var AV=[(A=I.H.Q)[2]-A[0]
,A[3]-A[1]];var D9=[(A=I.G.Q)[2]-A[0],A[3]-A[1]];switch(this.KH){case 5:V=[V[0],
D9[1]];break;case 3:{V=[V[0],D9[1]];V=[-AV[0],V[1]];}break;case 8:{V=[V[0],D9[1]
];V=[D9[0],V[1]];}break;case 2:V=[-AV[0],V[1]];break;case 7:V=[D9[0],V[1]];break;
case 4:V=[V[0],-AV[1]];break;case 1:V=[-AV[0],-AV[1]];break;case 6:{V=[V[0],-AV[
1]];V=[D9[0],V[1]];}break;default:;}I.AF.A4=V;},_Init:function(aArg){D.Er._Init.
call(this,aArg);this.__proto__=D.Fq;},_className:"Effects::SlideTransition"};D.Gg={
T3:0,Uc:1,Ue:2,Ud:3,TL:4,TN:5,TM:6,Uu:7,Uw:8,Uv:9,Ty:10,TA:11,Tz:12,Tm:13,To:14,
Tn:15,TH:16,TJ:17,TI:18,Tv:19,Tx:20,Tw:21,TG:22,TO:23,TF:24,TP:25,TB:26};D.L2={Trigger:
function(){B.Core.Timer.Trigger.call(this);B.we(this,0);},_Init:function(aArg){B.
Core.Timer._Init.call(this,aArg);this.__proto__=D.L2;},_className:"Effects::EffectTimerClass"
};D.FX={_Init:function(){D.L2._Init.call(this,0);this.GJ(15);this.Ao(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};D.K9={CG:B.abi(12,0,
null),GV:B.abi(12,0,null),_Init:function(aArg){(this.CG=[]).__proto__=D.K9.CG;(this.
GV=[]).__proto__=D.K9.GV;this.__proto__=D.K9;B.h7++;},_Done:function(){this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.J)&&(A._cycle
!=E))A._Mark(A._cycle=E);},J:null,_cycle:0,_observers:null,_className:"Effects::TimingList"
};D.KL={AS:null,AO:null,N1:function(JW){var I=this.AO;while(!!I){I.GF();I.H.F=I.
H.F&~0x40000;I=I.Z;}I=this.AO;while(!!I){B.pe(I.NB,I);I=I.Z;}},N0:function(JW){var
I=this.AO;while(!!I){B.pe(I.LA,I);I=I.Z;}this.AO=null;this.AS=null;},EV:function(
JW){var A;if(!this.AO)this.Dh();var I=this.AO;while(!!I){I.H.F=(I.H.F|0x40000)&~
0x20000;I.H.H$=null;I=I.Z;}I=this.AO;while(!!I){(A=I.Is)?A[1].call(A[0],I):null;
I.EV();I=I.Z;}},Dh:function(){var I=this.AO;while(!!I&&I.KO())I=I.Z;if(!I)B.Core.
JC.Dh.call(this);},QF:function(A5){if(!A5)return;if(this.Md())throw new Error(AZ
);if(A5.DN!==this)throw new Error(Cc);if(!!A5.Z)A5.Z.X=A5.X;else this.AS=A5.X;if(
!!A5.X)A5.X.Z=A5.Z;else this.AO=A5.Z;A5.DN=null;A5.Z=null;A5.X=null;if(!!A5.H)A5.
H.H$=null;B.pe(A5.LA,A5);if(!this.AO)this.NQ();},NO:function(A5){if(!A5)return;if(
this.Md())throw new Error(Et);if(!!A5.DN)throw new Error(DA);A5.X=this.AS;A5.Z=null;
if(!!this.AS)this.AS.Z=A5;else this.AO=A5;this.AS=A5;A5.DN=this;},_Init:function(
aArg){B.Core.JC._Init.call(this,aArg);this.__proto__=D.KL;},_Mark:function(E){var
A;B.Core.JC._Mark.call(this,E);if((A=this.AS)&&(A._cycle!=E))A._Mark(A._cycle=E);
if((A=this.AO)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Effects::FaderTask"
};D.IP={_Init:function(){D.MJ._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};
D._Init=function(){D.Io.__proto__=D.A6;D.MF.__proto__=D.A6;D.Dg.__proto__=D.A6;D.
IQ.__proto__=D.Dk;D.ME.__proto__=D.Dk;D.GP.__proto__=D.Dk;D.MJ.__proto__=D.Er;D.
KK.__proto__=D.Er;D.Fq.__proto__=D.Er;D.L2.__proto__=B.Core.Timer;D.KL.__proto__=
B.Core.JC;};D._ReInit=function(){var A;if((A=D.FX._this))A._ReInit(),D.FX._ReInit.
call(A);if((A=D.IP._this))A._ReInit(),D.IP._ReInit.call(A);};D.Cx=function(E){var
A;if((A=D.FX._this)&&(A._cycle!=E))A._Done(D.FX._this=null);if((A=D.IP._this)&&(
A._cycle!=E))A._Done(D.IP._this=null);};return D;})();

/* Embedded Wizard */