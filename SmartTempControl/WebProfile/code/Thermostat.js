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
);if(EmWiApp.Thermostat)throw new Error("The unit file 'Thermostat.js' included twice!"
);EmWiApp.Thermostat=(function(){var B=EmWiApp;var D={};
var AI=[75,44];var AU=[440,44];var Ch=[44,44];var EQ=[40,320];var DZ=[0,0];var DD=
".";var D0="\xB0C";var Er=[0,0,340,340];var FS=[10,10,330,330];var IE=[50,120];var
G4=[150,120];var HX=[150,20];var IF=[50,20];var Ly=[15,132];var Lz=[140,240,200,
280];var JO=[120,100,221,140];var JP="20.0\xB0C";var LA=[93,199];var LB=[157,199
];var LC=[157,140];var LD=[93,140];var LE=[191,187];var LF=[253,187];var LG=[253
,147];var O8=[191,147];var O9="Zi";var O_="Noapte";var O$="Vacanta";var Pa="VENTILATOR";
var Pb="PORNIRE VENTILATOR";var Pc="Limba";var Pd="Anulare";var Pe="Da";var Pf="Sunteti sigur ca ";
var Pg="doriti sa iesiti?";var Ph="La revedere!";var MK="Day";var ML="Night";var
MM="Vacation";var Pi="FAN";var MN="ENABLE FAN";var MO="Language";var MP="Cancel";
var MQ="Yes";var MR="Are you sure you";var MS="want to exit?";var MT="Goodbye!";
var C9=[0,0,800,480];var Pj=[-3,0,799,480];var MU=[-3,0,797,480];var Pk=[70,0];var
Pl=[69,60];var Pm=[3,60];var Pn=[315,341];var Po=[534,341];var Pp=[534,417];var Pq=[
315,419];var Pr=[6,9];var Ps=[106,9];var Pt=[106,109];var Pu=[6,109];var MV=[735
,16,779,60];var Pv=[443,207,518,251];var Pw="Caption";var Px=[207,37,330,81];var
Py=[335,38,515,82];var Pz=[518,38,713,82];var PA=[35,95,375,435];var PB=[386,251
,615,281];var PC=[708,3];var PD=[805,3];var PE=[805,95];var PF=[708,95];var PG=[
397,347,634,414];var PH=[26,38,187,82];var PJ="Manual";var MW=[700,380,800,480];
var PK=[130,240,285,290];var PL=[647,192,708,251];var PM=[608,253,750,282];var PN=
"FAN ";var PO=[627,181];var PP=[727,181];var PQ=[727,281];var PR=[627,281];var PS=[-
2,0,267,320];var PT=[6,23,56,73];var PU=[0,21];var PV=[66,21];var PW=[66,81];var
PX=[0,81];var PY=[224,-4];var PZ=[268,-4];var P0=[268,38];var P1=[224,38];var P2=[
30,135];var P3=[166,135];var P4=[166,181];var P5=[30,181];var P6=[26,238];var P7=[
196,238];var P8=[196,282];var P9=[26,282];var P_=[230,70,570,410];var P$=[11,11,
78,81];var LH=[0,0,100,100];var Qa=[25,30,75,80];var Qb=[359,80,399,400];var Qc=[
298,344,348,394];var Qd=[298,78,348,128];var Qe=[0,0,87,72];var MX=[0,0,277,323];
var Qf=[55,32,219,86];var Qg=[34,135,184,185];var Qh="English";var Qi=[34,234,184
,284];var Qj="Romanian";var Qk=[220,2,277,32];var Ql="X";var Qm=[84,48,734,431];
var Qn=[213,104,587,173];var Qo=[222,187,579,224];var Qp=[293,240,553,336];var Qq=[
293,325,553,421];var Qr=[373,273,473,303];var Qs=[341,358,506,389];var Qt=[256,90
,544,391];var Qu=[315,168,485,342];var Qv=[283,390,517,451];var Qw=[307,248];var
Qx=[531,248];var Qy=[531,325];var Qz=[306,326];
D.Iu={_Init:function(){B.ach.Lm._Init.call(this,0);this.GU(3);this.GX(1);this.GW(
1);this.GV(1);this.GQ(B.aaL(D.EK));this.GT(B.aaL(D.EK));this.GS(B.aaL(D.EK));this.
GR(B.aaL(D.EK));this.GM(2);this.GP(0);this.GO(0);this.GN(0);this.GI(B.aaL(D.EK));
this.GL(B.aaL(D.EK));this.GK(B.aaL(D.EK));this.GJ(B.aaL(D.EK));this.Fh(AI);this.
Fi(AI);},_ReInit:function(){},_variants:function(){return this;},_this:null};D.EK={
_class:function(){return B.acg.S;},0:{FileName:"./res/ThermostatSwingSwitch.png"
,Format:B._PIXEL_FORMAT_ALPHA8,NoOfFrames:4,FrameSize:[75,44],FrameDelay:0,_this:
null}};D.Ez={_class:function(){return B.acg.S;},0:{FileName:"./res/ThermostatButtonDay.png"
,Format:B._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[44,44],FrameDelay:0,_this:
null}};D.EA={_class:function(){return B.acg.S;},0:{FileName:"./res/ThermostatButtonNight.png"
,Format:B._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[44,44],FrameDelay:0,_this:
null}};D.EB={_class:function(){return B.acg.S;},0:{FileName:"./res/ThermostatButtonVacation.png"
,Format:B._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[44,44],FrameDelay:0,_this:
null}};D.Ip={_Init:function(){B.ach.FQ._Init.call(this,0);this.HL(0xFFFFFFFF);this.
HN(0xFFFFFFFF);this.HM(D.B5);this.HH(0xFFFFFFFF);this.HJ(0xFFFFFFFF);this.HI(D.B5
);this.Im(50);this.HG(0x11);this.HO(B.aaL(D.Ck));this.HK(B.aaL(D.Ck));this.Il(0x34
);this.GU(1);this.GX(1);this.GW(1);this.GV(1);this.GQ(B.aaL(D.Ez));this.GT(B.aaL(
D.Ez));this.GS(B.aaL(D.Ez));this.GR(B.aaL(D.Ez));this.GM(0);this.GP(0);this.GO(0
);this.GN(0);this.GI(B.aaL(D.Ez));this.GL(B.aaL(D.Ez));this.GK(B.aaL(D.Ez));this.
GJ(B.aaL(D.Ez));this.Fh(AU);this.Fi(Ch);},_ReInit:function(){},_variants:function(
){return this;},_this:null};D.Ir={_Init:function(){B.ach.FQ._Init.call(this,0);this.
HL(0xFFFFFFFF);this.HN(0xFFFFFFFF);this.HM(D.Ge);this.HH(0xFFFFFFFF);this.HJ(0xFFFFFFFF
);this.HI(D.Ge);this.Im(50);this.HG(0x11);this.HO(B.aaL(D.Ck));this.HK(B.aaL(D.Ck
));this.Il(0x34);this.GU(1);this.GX(1);this.GW(1);this.GV(1);this.GQ(B.aaL(D.EA)
);this.GT(B.aaL(D.EA));this.GS(B.aaL(D.EA));this.GR(B.aaL(D.EA));this.GM(0);this.
GP(0);this.GO(0);this.GN(0);this.GI(B.aaL(D.EA));this.GL(B.aaL(D.EA));this.GK(B.
aaL(D.EA));this.GJ(B.aaL(D.EA));this.Fh(AU);this.Fi(Ch);},_ReInit:function(){},_variants:
function(){return this;},_this:null};D.Is={_Init:function(){B.ach.FQ._Init.call(
this,0);this.HL(0xFFFFFFFF);this.HN(0xFFFFFFFF);this.HM(D.Lv);this.HH(0xFFFFFFFF
);this.HJ(0xFFFFFFFF);this.HI(D.Lv);this.Im(50);this.HG(0x11);this.HO(B.aaL(D.Ck
));this.HK(B.aaL(D.Ck));this.Il(0x34);this.GU(1);this.GX(1);this.GW(1);this.GV(1
);this.GQ(B.aaL(D.EB));this.GT(B.aaL(D.EB));this.GS(B.aaL(D.EB));this.GR(B.aaL(D.
EB));this.GM(0);this.GP(0);this.GO(0);this.GN(0);this.GI(B.aaL(D.EB));this.GL(B.
aaL(D.EB));this.GK(B.aaL(D.EB));this.GJ(B.aaL(D.EB));this.Fh(AU);this.Fi(Ch);},_ReInit:
function(){},_variants:function(){return this;},_this:null};D.Ck={_class:function(
){return B.acg.BP;},0:{Data:function(){return B.acm;},Cache:[],_this:null}};D.EM={
_class:function(){return B.acg.S;},0:{FileName:"./res/ThermostatVertBar.png",Format:
B._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[20,220],FrameDelay:0,_this:null}};
D.Fo={_Init:function(){B.ach.Fo._Init.call(this,0);this.OI(0);this.OL(0);this.OK(
0);this.OJ(0);this.OE(B.aaL(D.EM));this.OH(B.aaL(D.EM));this.OG(B.aaL(D.EM));this.
OF(B.aaL(D.EM));this.OQ(1);this.OT(1);this.OS(1);this.OR(1);this.OM(B.aaL(D.EM));
this.OP(B.aaL(D.EM));this.OO(B.aaL(D.EM));this.ON(B.aaL(D.EM));this.Fh(EQ);this.
Fi(EQ);},_ReInit:function(){},_variants:function(){return this;},_this:null};D.DP={
H$:155,GF:215,Hw:15,G0:0,JK:false,UpdateActualTemp:function(M2){if(M2!==this.H$){
this.H$=M2;B.abo([this,this.K7,this.K$],0);}},FL:function(C){if(this.GF===C)return;
this.GF=C;{}B.abo([this,this.K9,this.FL],0);},Lb:function(C){if(this.Hw===C)return;
this.Hw=C;{}B.abo([this,this.Mu,this.Lb],0);},Le:function(C){if(this.JK===C)return;
this.JK=C;{}B.abo([this,this.Mv,this.Le],0);},Fg:function(C){if(C>3)C=3;if(C<0)C=
0;if(this.G0===C)return;this.G0=C;{}B.abo([this,this.HB,this.Fg],0);},K7:function(
){return this.H$;},K$:function(C){this.H$=C;},K9:function(){return this.GF;},Mu:
function(){return this.Hw;},Mv:function(){return this.JK;},HB:function(){return this.
G0;},_Init:function(aArg){B.acj.DP._Init.call(this,aArg);this.__proto__=D.DP;var
MY=this._variants();if(MY){this.BW={};MY._Init.call(this,aArg);}},_Done:function(
){if(this.BW)this.BW._Done.call(this);this.__proto__=B.acj.DP;B.acj.DP._Done.call(
this);},_ReInit:function(){B.acj.DP._ReInit.call(this);if(this.BW)this.BW._ReInit.
call(this);},_Mark:function(E){B.acj.DP._Mark.call(this,E);if(this.BW)this.BW._Mark(
E);},_variants:function(){return D.Mn._variants();},BW:null,_className:"Thermostat::DeviceClass"
};D.Device={_Init:function(){D.DP._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};D.Lx={_class:function(){return B.acg.S;},0:{
FileName:"./res/ThermostatWheels.png",Format:B._PIXEL_FORMAT_ALPHA8,NoOfFrames:4
,FrameSize:[340,340],FrameDelay:0,_this:null}};D.KA={_class:function(){return B.
acg.S;},0:{FileName:"./res/ThermostatController.png",Format:B._PIXEL_FORMAT_NATIVE
,NoOfFrames:1,FrameSize:[320,320],FrameDelay:0,_this:null}};D.A3={CV:null,GY:null
,C8:null,EN:null,FF:null,Cz:null,DO:null,Du:null,DW:null,Cw:null,CA:null,CP:null
,Eq:null,Ep:null,Device:null,Dz:300,Kt:150,NF:0,JM:function(aSize){B.Core.P.JM.call(
this,aSize);var QH=(aSize[0]/2)|0;var QI=(aSize[1]/2)|0;this.Du.L([].concat(DZ,aSize
));this.Du.Oz([QH,QI]);},Fn:function(Dm){B.Core.P.Fn.call(this,Dm);var CF=0;var DG=
this.Kt;var J0;var D5=this.Dz;var L_;if(DG<100)DG=100;if(DG>400)DG=400;if(D5<100
)D5=100;if(D5>400)D5=400;J0=135-(((DG-100)*270)/300);L_=135-(((D5-100)*270)/300);
this.Cz.OY(B.aaI(this.FF.Q),L_,1,1);if(DG!==D5){this.DO.Mr(0,84);this.DO.MG(-J0-
90);this.DO.Ht(0,92,0);this.DO.NT(0,102,0);this.DO.NS(0,0,0,102,102,0,-L_+J0,80);
this.DO.MG(J0+90);}else this.DO.Mr(0,84);if(DG<D5){this.DW.Cs(0);this.DW.AV(D.B5
);this.Du.AV(D.B5);CF=(D5-DG)*10;}else if(DG>D5){this.DW.Cs(1);this.DW.AV(D.Ge);
this.Du.AV(D.Ge);CF=(DG-D5)*10;}if(CF>255)CF=255;this.DW.Bc(CF);this.Cw.A_(((((DG
/10)|0).toFixed()+DD)+(DG%10).toFixed())+D0);this.CA.A_(((((D5/10)|0).toFixed()+
DD)+(D5%10).toFixed())+D0);CF=(((DG-100)*255)/300)|0;var QY=B.z3(D.B5,CF);var QO=
B.z3(D.Ge,(255-CF)&0xFF);this.Cw.AV(B.abw(QY,QO));},JG:function(C){if(this.Dz===
C)return;this.Dz=C;this.Bf();},Op:function(C){if(this.Kt===C)return;this.Kt=C;this.
Bf();},Md:function(An){var U;if(!!this.CV)this.JG((U=this.CV,U[1].call(U[0])));}
,MB:function(C){if(B.aaZ(this.CV,C))return;if(!!this.CV)B.z$([this,this.Md],this.
CV,0);this.CV=C;if(!!C)B.zX([this,this.Md],C,0);if(!!C)B.pe([this,this.Md],this);
},Mc:function(An){var U;if(!!this.GY)this.Op((U=this.GY,U[1].call(U[0])));},MA:function(
C){if(B.aaZ(this.GY,C))return;if(!!this.GY)B.z$([this,this.Mc],this.GY,0);this.GY=
C;if(!!C)B.zX([this,this.Mc],C,0);if(!!C)B.pe([this,this.Mc],this);},Q8:function(
An){this.Bf();this.NF=this.Dz;this.CA.Bc(255);this.Cw.Bc(0);this.CP.N(false);},Q6:
function(An){var U;var BL;var Aj=0;if((this.Dz>=100)&&(this.Dz<=400))Aj=((this.C8.
JI*300)/720)|0;BL=this.NF-Aj;if(BL<100)BL=100;if(BL>400)BL=400;if(this.Dz!==BL){
var Do=this.EN.ED;if((this.Dz-BL)>0)Do=Do-1;else Do=Do+1;if(Do<0)Do=3;if(Do>3)Do=
0;this.EN.Cs(Do);this.JG(BL);if(!!this.CV)(U=this.CV,U[2].call(U[0],this.Dz));B.
abo(this.CV,0);}},Q4:function(An){this.Bf();this.CP.N(true);},QV:function(An){this.
CA.Bc(255-this.CP.G1);this.Cw.Bc(this.CP.G1);},QZ:function(An){var U;var BL=this.
Dz+5;this.CA.Bc(255);this.Cw.Bc(0);this.CP.N(false);if(BL>400)BL=400;this.JG(BL);
if(!!this.CV)(U=this.CV,U[2].call(U[0],this.Dz));B.abo(this.CV,0);this.CP.N(true
);},QS:function(An){var U;var BL=this.Dz-5;this.CA.Bc(255);this.Cw.Bc(0);this.CP.
N(false);if(BL<100)BL=100;this.JG(BL);if(!!this.CV)(U=this.CV,U[2].call(U[0],this.
Dz));B.abo(this.CV,0);this.CP.N(true);},_Init:function(aArg){B.Core.P._Init.call(
this,aArg);B.Core.C8._Init.call(this.C8={J:this},0);B.acf.AH._Init.call(this.EN={
J:this},0);B.acf.AH._Init.call(this.FF={J:this},0);B.acf.Lw._Init.call(this.Cz={
J:this},0);B.Graphics.C7._Init.call(this.DO={J:this},0);B.acf.It._Init.call(this.
Du={J:this},0);B.acf.AH._Init.call(this.DW={J:this},0);B.acf.Text._Init.call(this.
Cw={J:this},0);B.acf.Text._Init.call(this.CA={J:this},0);B.aci.FG._Init.call(this.
CP={J:this},0);B.Core.AR._Init.call(this.Eq={J:this},0);B.Core.AR._Init.call(this.
Ep={J:this},0);D.DP._Init.call(this.Device={J:this},0);this.__proto__=D.A3;this.
L(Er);this.C8.HP(0x1C);this.C8.L(Er);this.EN.L(Er);this.EN.AV(0xFF000000);this.FF.
L(FS);this.Cz.BU(IE);this.Cz.BT(G4);this.Cz.BS(HX);this.Cz.BR(IF);this.Cz.OC(Ly);
this.Cz.AV(D.B5);this.Du.L(Er);this.Du.AV(0xFFFF0000);this.Du.Lf(4);this.DW.L(Lz
);this.Cw.HP(0x3B);this.Cw.L(JO);this.Cw.HC(0xC);this.Cw.A_(JP);this.Cw.AV(0xFF000000
);this.CA.HP(0x3B);this.CA.L(JO);this.CA.HC(0xC);this.CA.A_(JP);this.CA.AV(0xFF000000
);this.CA.Bc(0);this.CP.FK(1);this.CP.La(500);this.CP.Lc(1200);this.Eq.BU(LA);this.
Eq.BT(LB);this.Eq.BS(LC);this.Eq.BR(LD);this.Eq.In(100);this.Ep.BU(LE);this.Ep.BT(
LF);this.Ep.BS(LG);this.Ep.BR(O8);this.Ep.In(100);this.T(this.C8,0);this.T(this.
EN,0);this.T(this.FF,0);this.T(this.Cz,0);this.T(this.Du,0);this.T(this.DW,0);this.
T(this.Cw,0);this.T(this.CA,0);this.T(this.Eq,0);this.T(this.Ep,0);this.C8.K_=[this
,this.Q6];this.C8.K5=[this,this.Q4];this.C8.Lg=[this,this.Q8];this.EN.AK(B.aaL(D.
Lx));this.FF.AK(B.aaL(D.KA));this.Cz.AK(B.aaL(D.Cz));this.Du.OA(this.DO);this.DW.
AK(B.aaL(D.Lk));this.Cw.DU(B.aaL(D.Ck));this.CA.DU(B.aaL(D.KJ));this.CP.K3=[this
,this.QV];this.Eq.BF=[this,this.QZ];this.Ep.BF=[this,this.QS];},_Done:function(){
this.__proto__=B.Core.P;this.C8._Done();this.EN._Done();this.FF._Done();this.Cz.
_Done();this.DO._Done();this.Du._Done();this.DW._Done();this.Cw._Done();this.CA.
_Done();this.CP._Done();this.Eq._Done();this.Ep._Done();this.Device._Done();B.Core.
P._Done.call(this);},_ReInit:function(){B.Core.P._ReInit.call(this);this.C8._ReInit(
);this.EN._ReInit();this.FF._ReInit();this.Cz._ReInit();this.DO._ReInit();this.Du.
_ReInit();this.DW._ReInit();this.Cw._ReInit();this.CA._ReInit();this.CP._ReInit(
);this.Eq._ReInit();this.Ep._ReInit();this.Device._ReInit();},_Mark:function(E){
var A;B.Core.P._Mark.call(this,E);if((A=this.CV)&&((A=A[0])._cycle!=E))A._Mark(A.
_cycle=E);if((A=this.GY)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.C8
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EN)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.FF)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Cz)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.DO)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Du)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.DW)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Cw)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.CA)._cycle!=E)A._Mark(A._cycle=E);if((A=this.CP
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Eq)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.Ep)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Device)._cycle!=E)A._Mark(A.
_cycle=E);},_className:"Thermostat::TemperatureController"};D.Cz={_class:function(
){return B.acg.S;},0:{FileName:"./res/ThermostatNeedle.png",Format:B._PIXEL_FORMAT_ALPHA8
,NoOfFrames:1,FrameSize:[30,20],FrameDelay:0,_this:null}};D.Ge=0xFFD78814;D.B5=0xFF6A0BC7;
D.Lk={_class:function(){return B.acg.S;},0:{FileName:"./res/ThermostatSymbolHeadCool.png"
,Format:B._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[36,36],FrameDelay:0,_this:
null}};D.KJ={_class:function(){return B.acg.BP;},0:{Data:function(){return B.aco;
},Cache:[],_this:null}};D.Fm={Device:null,Hx:null,B3:null,DC:null,Exit:null,DX:null
,B2:null,Dx:null,AO:null,BV:null,B7:null,Bz:null,Bx:null,BI:null,BJ:null,A3:null
,CB:null,Fc:null,HS:null,AR:null,Ej:null,Clock:null,BD:null,B6:null,Cr:null,FE:null
,Hv:null,Fd:null,Dv:null,Dg:null,FD:null,Di:null,Bs:null,Dj:null,CW:null,Df:null
,Bq:null,By:null,QK:function(An){this.AO.AK(this.BV.S);this.BV.Bc(0);},Q7:function(
An){this.BV.Bc(0);this.Fc.N(false);switch(this.Device.G0){case 1:this.BV.AK(B.aaL(
D.Ky));break;case 2:this.BV.AK(B.aaL(D.Kz));break;case 0:case 3:this.BV.AK(B.aaL(
D.Fz));break;default:this.BV.AK(B.aaL(D.Kx));}this.Fc.N(true);},N$:function(An){
this.Exit.Bc(0);this.Ej.N(false);this.AO.R(false);this.BV.R(false);this.Bz.R(false
);this.Bz.N(false);this.Bx.R(false);this.Bx.N(false);this.BI.N(false);this.BI.R(
false);this.BJ.N(false);this.BJ.R(false);this.A3.R(false);this.A3.N(false);this.
CB.R(false);this.Clock.R(false);this.BD.R(false);this.Cr.R(false);this.B2.R(false
);this.B7.R(false);this.B3.R(false);this.B6.R(false);this.B7.N(false);this.Fd.R(
false);this.Dg.N(false);this.Dv.R(false);this.Bs.R(false);this.Bs.N(false);this.
Dj.R(false);this.Bq.N(false);this.By.N(false);this.B2.N(false);this.CW.N(false);
this.BD.N(false);this.Exit.R(true);this.Exit.De.R(false);this.DX.N(true);this.Ej.
N(true);},N5:function(An){this.B2.Bc(0);this.FE.N(false);B._GetAutoObject(D.Device
).Fg(3);this.Exit.R(false);this.AO.R(false);this.BV.R(false);this.Bz.R(false);this.
Bz.N(false);this.Bx.R(false);this.Bx.N(false);this.BI.N(false);this.BI.R(false);
this.BJ.N(false);this.BJ.R(false);this.Cr.R(false);this.A3.R(false);this.A3.N(false
);this.CB.R(false);this.Clock.R(false);this.BD.R(false);this.BD.N(false);this.Bs.
N(false);this.Bs.R(false);this.Df.N(false);this.CW.N(false);this.Dx.N(false);this.
DC.N(false);this.Dg.N(false);this.Exit.R(false);this.B2.FN(1);this.B2.R(true);this.
B2.N(true);this.Dx.N(true);this.FE.N(true);this.B7.R(true);this.B7.N(true);this.
Device.Lb(15);this.Device.Le(false);},Oc:function(An){this.Di.N(false);this.Cr.AV(
0xFF000000);this.B2.R(false);this.A3.N(true);this.B2.N(false);this.Dx.N(false);this.
AO.R(true);this.BV.R(true);this.Bz.R(true);this.Bz.N(true);this.Bx.R(true);this.
Bx.N(true);this.BI.N(true);this.BI.R(true);this.Cr.R(false);this.BJ.N(true);this.
BJ.R(true);this.A3.R(true);this.CB.R(true);this.B7.N(true);this.Cr.R(true);this.
B7.R(true);this.Clock.R(true);this.BD.R(true);this.BD.N(true);this.BD.EH(false);
this.Bs.N(true);this.Df.N(true);this.CW.N(true);this.Dg.N(true);this.Bx.EH(true);
this.Device.Fg(0);this.Di.N(true);},O2:function(An){this.B3.Bc(0);this.FD.N(false
);this.AO.R(false);this.BV.R(false);this.Bz.R(false);this.Bz.N(false);this.Bx.R(
false);this.Bx.N(false);this.BI.N(false);this.BI.R(false);this.BJ.N(false);this.
BJ.R(false);this.Cr.R(false);this.A3.R(false);this.A3.N(false);this.CB.R(false);
this.Clock.R(false);this.BD.R(false);this.BD.N(false);this.Bs.N(false);this.Bs.R(
false);this.Df.N(false);this.CW.N(false);this.Bs.N(false);this.B3.FN(1);this.B3.
R(true);this.FD.N(true);this.B3.N(true);this.DC.N(true);},O3:function(An){this.Di.
N(false);this.B3.R(false);this.B3.N(false);this.DC.N(false);this.AO.R(true);this.
BV.R(true);this.Bz.R(true);this.Bz.N(true);this.Bx.R(true);this.Bx.N(true);this.
BI.N(true);this.BI.R(true);this.Cr.R(true);this.BJ.N(true);this.BJ.R(true);this.
A3.R(true);this.CB.R(true);this.B7.N(true);this.B7.R(true);this.Clock.R(true);this.
BD.R(true);this.BD.N(true);this.Bx.EH(true);this.Bs.N(true);this.Df.N(true);this.
CW.N(true);this.Dj.R(true);this.Bs.R(false);this.Device.Fg(0);this.Di.N(true);},
O4:function(An){this.Bs.R(true);this.By.N(true);this.Bq.N(true);},O1:function(An
){this.Bs.R(false);},N3:function(An){this.Bx.CU(O9);this.BI.CU(O_);this.BJ.CU(O$
);this.Dv.A_(Pa);this.CB.A_(Pb);this.Bs.EL.A_(Pc);this.Exit.Cb.EC.A_(Pd);this.Exit.
Cb.EP.A_(Pe);this.Exit.Cb.D$.A_(Pf);this.Exit.Cb.Ea.A_(Pg);this.Exit.De.Text.A_(
Ph);this.By.N(false);},N2:function(An){this.Bx.CU(MK);this.BI.CU(ML);this.BJ.CU(
MM);this.Dv.A_(Pi);this.CB.A_(MN);this.Bs.EL.A_(MO);this.Exit.Cb.EC.A_(MP);this.
Exit.Cb.EP.A_(MQ);this.Exit.Cb.D$.A_(MR);this.Exit.Cb.Ea.A_(MS);this.Exit.De.Text.
A_(MT);this.Bq.N(false);},N0:function(An){this.Exit.R(false);this.DX.N(false);this.
AO.R(true);this.BV.R(true);this.Bz.R(true);this.Bz.N(true);this.Bx.R(true);this.
Bx.N(true);this.BI.N(true);this.BI.R(true);this.BJ.N(true);this.BJ.R(true);this.
A3.R(true);this.CB.R(true);this.Clock.R(true);this.BD.R(true);this.Cr.R(true);this.
B2.R(true);this.B7.R(true);this.B3.R(true);this.B6.R(true);this.B7.N(true);this.
Fd.R(true);this.Dv.R(true);this.Dg.N(true);this.B3.R(false);this.B2.R(false);this.
BD.N(true);this.Bq.N(true);this.By.N(true);this.Bs.N(true);this.Dj.R(true);this.
Ej.N(true);},_Init:function(aArg){B.Core.P._Init.call(this,aArg);B.acf.Ct._Init.
call(this.Hx={J:this},0);D.B3._Init.call(this.B3={J:this},0);B.Core.AR._Init.call(
this.DC={J:this},0);D.Exit._Init.call(this.Exit={J:this},0);B.Core.AR._Init.call(
this.DX={J:this},0);D.B2._Init.call(this.B2={J:this},0);B.Core.AR._Init.call(this.
Dx={J:this},0);B.acf.JN._Init.call(this.AO={J:this},0);B.acf.JN._Init.call(this.
BV={J:this},0);B.ach.EJ._Init.call(this.B7={J:this},0);B.ach.Bz._Init.call(this.
Bz={J:this},0);B.ach.EJ._Init.call(this.Bx={J:this},0);B.ach.EJ._Init.call(this.
BI={J:this},0);B.ach.EJ._Init.call(this.BJ={J:this},0);D.A3._Init.call(this.A3={
J:this},0);B.acf.Text._Init.call(this.CB={J:this},0);B.aci.FG._Init.call(this.Fc={
J:this},0);B.Core.MC._Init.call(this.HS={J:this},0);B.Core.AR._Init.call(this.AR={
J:this},0);B.aci.FG._Init.call(this.Ej={J:this},0);B.Clock.Clock._Init.call(this.
Clock={J:this},0);B.ach.EJ._Init.call(this.BD={J:this},0);D.B6._Init.call(this.B6={
J:this},0);B.acf.Ct._Init.call(this.Cr={J:this},0);B.aci.FG._Init.call(this.FE={
J:this},0);B.aci.FG._Init.call(this.Hv={J:this},0);B.acf.AH._Init.call(this.Fd={
J:this},0);B.acf.Text._Init.call(this.Dv={J:this},0);B.Core.AR._Init.call(this.Dg={
J:this},0);B.aci.FG._Init.call(this.FD={J:this},0);B.aci.C5._Init.call(this.Di={
J:this},0);D.Bs._Init.call(this.Bs={J:this},0);B.acf.AH._Init.call(this.Dj={J:this
},0);B.Core.AR._Init.call(this.CW={J:this},0);B.Core.AR._Init.call(this.Df={J:this
},0);B.Core.AR._Init.call(this.Bq={J:this},0);B.Core.AR._Init.call(this.By={J:this
},0);this.__proto__=D.Fm;var A;this.L(C9);this.Hx.L(Pj);this.B3.L(MU);this.B3.R(
false);this.DC.BU(DZ);this.DC.BT(Pk);this.DC.BS(Pl);this.DC.BR(Pm);this.Exit.L(C9
);this.DX.BU(Pn);this.DX.BT(Po);this.DX.BS(Pp);this.DX.BR(Pq);this.B2.L(MU);this.
Dx.BU(Pr);this.Dx.BT(Ps);this.Dx.BS(Pt);this.Dx.BR(Pu);this.AO.L(C9);this.BV.L(C9
);this.BV.Bc(0);this.B7.L(MV);this.B7.JH(1);this.B7.CU(B.jV);this.Bz.L(Pv);this.
Bz.CU(Pw);this.Bx.L(Px);this.Bx.CU(MK);this.BI.L(Py);this.BI.JH(1);this.BI.CU(ML
);this.BJ.L(Pz);this.BJ.JH(2);this.BJ.CU(MM);this.A3.L(PA);this.CB.HP(0x1C);this.
CB.L(PB);this.CB.A_(MN);this.Fc.FK(1);this.AR.BU(PC);this.AR.BT(PD);this.AR.BS(PE
);this.AR.BR(PF);this.Ej.FK(1);this.Ej.La(1000);this.Clock.L(PG);this.BD.L(PH);this.
BD.JH(3);this.BD.CU(PJ);this.B6.L(MW);this.B6.Bc(255);this.Cr.L(PK);this.Cr.AV(0xFF000000
);this.Cr.Oq(true);this.Cr.R(true);this.FE.FK(1);this.Hv.FK(1);this.Fd.L(PL);this.
Dv.HP(0x1C);this.Dv.L(PM);this.Dv.A_(PN);this.Dg.BU(PO);this.Dg.BT(PP);this.Dg.BS(
PQ);this.Dg.BR(PR);this.FD.FK(1);this.Di.FK(1);this.Di.La(800);this.Di.Lc(0);this.
Di.HU=0xFF000000;this.Di.HT=0x00000000;this.Bs.L(PS);this.Bs.R(false);this.Dj.L(
PT);this.CW.BU(PU);this.CW.BT(PV);this.CW.BS(PW);this.CW.BR(PX);this.Df.BU(PY);this.
Df.BT(PZ);this.Df.BS(P0);this.Df.BR(P1);this.Bq.BU(P2);this.Bq.BT(P3);this.Bq.BS(
P4);this.Bq.BR(P5);this.Bq.N(false);this.By.BU(P6);this.By.BT(P7);this.By.BS(P8);
this.By.BR(P9);this.By.N(false);this.T(this.Hx,0);this.T(this.B3,0);this.T(this.
DC,0);this.T(this.Exit,0);this.T(this.DX,0);this.T(this.B2,0);this.T(this.Dx,0);
this.T(this.AO,0);this.T(this.BV,0);this.T(this.B7,0);this.T(this.Bz,0);this.T(this.
Bx,0);this.T(this.BI,0);this.T(this.BJ,0);this.T(this.A3,0);this.T(this.CB,0);this.
T(this.AR,0);this.T(this.Clock,0);this.T(this.BD,0);this.T(this.B6,0);this.T(this.
Cr,0);this.T(this.Fd,0);this.T(this.Dv,0);this.T(this.Dg,0);this.T(this.Bs,0);this.
T(this.Dj,0);this.T(this.CW,0);this.T(this.Df,0);this.T(this.Bq,0);this.T(this.By
,0);this.DC.BF=[this,this.O3];this.DX.BF=[this,this.N0];this.Dx.BF=[this,this.Oc
];this.AO.AK(B.aaL(D.Fz));this.BV.AK(B.aaL(D.Fz));this.B7.Em(null);this.B7.My(null
);this.B7.DT(B._GetAutoObject(D.HQ));this.Bz.Em([A=B._GetAutoObject(D.Device),A.
Mv,A.Le]);this.Bz.DT(B._GetAutoObject(D.Iu));this.Bx.Em([A=B._GetAutoObject(D.Device
),A.HB,A.Fg]);this.Bx.DT(B._GetAutoObject(D.Ip));this.BI.Em([A=B._GetAutoObject(
D.Device),A.HB,A.Fg]);this.BI.DT(B._GetAutoObject(D.Ir));this.BJ.Em([A=B._GetAutoObject(
D.Device),A.HB,A.Fg]);this.BJ.DT(B._GetAutoObject(D.Is));this.Device=B._GetAutoObject(
D.Device);this.A3.MB([A=B._GetAutoObject(D.Device),A.K9,A.FL]);this.A3.MA([A=B._GetAutoObject(
D.Device),A.K7,A.K$]);this.CB.DU(B.aaL(D.Js));this.Fc.JA=[this,this.QK];this.Fc.
Y=[A=this.BV,A.HA,A.Bc];this.HS.K6=[this,this.Q7];this.HS.Em([A=B._GetAutoObject(
D.Device),A.HB,A.Fg]);this.AR.BF=[this,this.N$];this.Ej.JA=null;this.Ej.Y=[A=this.
Exit,A.HA,A.JQ];this.BD.Em([A=B._GetAutoObject(D.Device),A.HB,A.Fg]);this.BD.Ff=[
this,this.N5];this.BD.DT(B._GetAutoObject(D.Iq));this.FE.Y=[A=this.B2,A.HA,A.JQ];
this.Hv.Y=[A=this.A3,A.HA,A.JQ];this.Fd.AK(B.aaL(D.JL));this.Dv.DU(B.aaL(D.Js));
this.Dg.BF=[this,this.O2];this.FD.Y=[A=this.B3,A.HA,A.JQ];this.Di.Y=[A=this.Cr,A.
K8,A.AV];this.Dj.AK(B.aaL(D.Dj));this.CW.DB=null;this.CW.BF=[this,this.O4];this.
Df.BF=[this,this.O1];this.Bq.BF=[this,this.N2];this.By.BF=[this,this.N3];},_Done:
function(){this.__proto__=B.Core.P;this.Hx._Done();this.B3._Done();this.DC._Done(
);this.Exit._Done();this.DX._Done();this.B2._Done();this.Dx._Done();this.AO._Done(
);this.BV._Done();this.B7._Done();this.Bz._Done();this.Bx._Done();this.BI._Done(
);this.BJ._Done();this.A3._Done();this.CB._Done();this.Fc._Done();this.HS._Done(
);this.AR._Done();this.Ej._Done();this.Clock._Done();this.BD._Done();this.B6._Done(
);this.Cr._Done();this.FE._Done();this.Hv._Done();this.Fd._Done();this.Dv._Done(
);this.Dg._Done();this.FD._Done();this.Di._Done();this.Bs._Done();this.Dj._Done(
);this.CW._Done();this.Df._Done();this.Bq._Done();this.By._Done();B.Core.P._Done.
call(this);},_ReInit:function(){B.Core.P._ReInit.call(this);this.Hx._ReInit();this.
B3._ReInit();this.DC._ReInit();this.Exit._ReInit();this.DX._ReInit();this.B2._ReInit(
);this.Dx._ReInit();this.AO._ReInit();this.BV._ReInit();this.B7._ReInit();this.Bz.
_ReInit();this.Bx._ReInit();this.BI._ReInit();this.BJ._ReInit();this.A3._ReInit(
);this.CB._ReInit();this.Fc._ReInit();this.HS._ReInit();this.AR._ReInit();this.Ej.
_ReInit();this.Clock._ReInit();this.BD._ReInit();this.B6._ReInit();this.Cr._ReInit(
);this.FE._ReInit();this.Hv._ReInit();this.Fd._ReInit();this.Dv._ReInit();this.Dg.
_ReInit();this.FD._ReInit();this.Di._ReInit();this.Bs._ReInit();this.Dj._ReInit(
);this.CW._ReInit();this.Df._ReInit();this.Bq._ReInit();this.By._ReInit();},_Mark:
function(E){var A;B.Core.P._Mark.call(this,E);if((A=this.Device)&&(A._cycle!=E))
A._Mark(A._cycle=E);if((A=this.Hx)._cycle!=E)A._Mark(A._cycle=E);if((A=this.B3).
_cycle!=E)A._Mark(A._cycle=E);if((A=this.DC)._cycle!=E)A._Mark(A._cycle=E);if((A=
this.Exit)._cycle!=E)A._Mark(A._cycle=E);if((A=this.DX)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.B2)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Dx)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.AO)._cycle!=E)A._Mark(A._cycle=E);if((A=this.BV)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.B7)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Bz
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Bx)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.BI)._cycle!=E)A._Mark(A._cycle=E);if((A=this.BJ)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.A3)._cycle!=E)A._Mark(A._cycle=E);if((A=this.CB)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.Fc)._cycle!=E)A._Mark(A._cycle=E);if((A=this.HS)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.AR)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Ej
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Clock)._cycle!=E)A._Mark(A._cycle=E);
if((A=this.BD)._cycle!=E)A._Mark(A._cycle=E);if((A=this.B6)._cycle!=E)A._Mark(A.
_cycle=E);if((A=this.Cr)._cycle!=E)A._Mark(A._cycle=E);if((A=this.FE)._cycle!=E)
A._Mark(A._cycle=E);if((A=this.Hv)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Fd).
_cycle!=E)A._Mark(A._cycle=E);if((A=this.Dv)._cycle!=E)A._Mark(A._cycle=E);if((A=
this.Dg)._cycle!=E)A._Mark(A._cycle=E);if((A=this.FD)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.Di)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Bs)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.Dj)._cycle!=E)A._Mark(A._cycle=E);if((A=this.CW)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.Df)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Bq
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.By)._cycle!=E)A._Mark(A._cycle=E);},_className:
"Thermostat::Thermostat"};D.Fz={_class:function(){return B.acg.S;},0:{FileName:"./res/ThermostatBackgroundDay.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[800,480],FrameDelay:0,_this:
null}};D.Ky={_class:function(){return B.acg.S;},0:{FileName:"./res/ThermostatBackgroundNight.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[800,480],FrameDelay:0,_this:
null}};D.Js={_class:function(){return B.acg.BP;},0:{Data:function(){return B.acn;
},Cache:[],_this:null}};D.Kx={_class:function(){return B.acg.S;},0:{FileName:"./res/ThermostatBackgroundDefault.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[4,480],FrameDelay:0,_this:
null}};D.HQ={_Init:function(){B.ach.FQ._Init.call(this,0);this.HL(0xFFFFFFFF);this.
HN(0xFFFFFFFF);this.HM(0xFFFFFFFF);this.HH(0xFFFFFFFF);this.HJ(0xFFFFFFFF);this.
HI(0xFFFFFFFF);this.Im(50);this.HG(0x11);this.HO(B.aaL(D.Ck));this.HK(B.aaL(D.Ck
));this.Il(0x34);this.GU(1);this.GX(1);this.GW(1);this.GV(1);this.GQ(B.aaL(D.EI)
);this.GT(B.aaL(D.EI));this.GS(B.aaL(D.EI));this.GR(B.aaL(D.EI));this.Ot(0xFFFFFFFF
);this.GM(0);this.GP(0);this.GO(0);this.GN(0);this.GI(B.aaL(D.EI));this.GL(B.aaL(
D.EI));this.GK(B.aaL(D.EI));this.GJ(B.aaL(D.EI));this.Fh(AU);this.Fi(Ch);},_ReInit:
function(){},_variants:function(){return this;},_this:null};D.EI={_class:function(
){return B.acg.S;},0:{FileName:"./res/ThermostatPowerOffIcon.png",Format:B._PIXEL_FORMAT_NATIVE
,NoOfFrames:1,FrameSize:[25,26],FrameDelay:0,_this:null}};D.Kz={_class:function(
){return B.acg.S;},0:{FileName:"./res/ThermostatBackgroundVacation.png",Format:B.
_PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[800,480],FrameDelay:0,_this:null}};
D.Lv=0xFF4F8BFF;D.KO={_class:function(){return B.acg.S;},0:{FileName:"./res/ThermostatHouseSplashScreen.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[360,360],FrameDelay:0,_this:
null}};D.KM={_class:function(){return B.acg.S;},0:{FileName:"./res/ThermostatHeatSplashScreen.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[120,120],FrameDelay:0,_this:
null}};D.B2={AB:null,A3:null,DR:null,FP:null,_Init:function(aArg){B.Core.P._Init.
call(this,aArg);B.acf.AH._Init.call(this.AB={J:this},0);D.A3._Init.call(this.A3={
J:this},0);B.acf.AH._Init.call(this.DR={J:this},0);B.ach.EJ._Init.call(this.FP={
J:this},0);this.__proto__=D.B2;var A;this.L(C9);this.AB.L(C9);this.A3.L(P_);this.
DR.L(P$);this.FP.L(MV);this.FP.CU(B.jV);this.T(this.AB,0);this.T(this.A3,0);this.
T(this.DR,0);this.T(this.FP,0);this.AB.AK(B.aaL(D.Fz));this.A3.MB([A=B._GetAutoObject(
D.Device),A.K9,A.FL]);this.A3.MA([A=B._GetAutoObject(D.Device),A.K7,A.K$]);this.
DR.AK(B.aaL(D.DR));this.FP.DT(B._GetAutoObject(D.HQ));},_Done:function(){this.__proto__=
B.Core.P;this.AB._Done();this.A3._Done();this.DR._Done();this.FP._Done();B.Core.
P._Done.call(this);},_ReInit:function(){B.Core.P._ReInit.call(this);this.AB._ReInit(
);this.A3._ReInit();this.DR._ReInit();this.FP._ReInit();},_Mark:function(E){var A;
B.Core.P._Mark.call(this,E);if((A=this.AB)._cycle!=E)A._Mark(A._cycle=E);if((A=this.
A3)._cycle!=E)A._Mark(A._cycle=E);if((A=this.DR)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.FP)._cycle!=E)A._Mark(A._cycle=E);},_className:"Thermostat::DefaultThermostat"
};D.Iq={_Init:function(){B.ach.FQ._Init.call(this,0);this.HL(0xFFFFFFFF);this.HN(
0xFFFFFFFF);this.HM(D.B5);this.HH(0xFFFFFFFF);this.HJ(0xFFFFFFFF);this.HI(D.B5);
this.Im(50);this.HG(0x11);this.HO(B.aaL(D.Ck));this.HK(B.aaL(D.Ck));this.Il(0x34
);this.GU(1);this.GX(1);this.GW(1);this.GV(1);this.GQ(null);this.GT(null);this.GS(
null);this.GR(null);this.GM(0);this.GP(0);this.GO(0);this.GN(0);this.GI(null);this.
GL(null);this.GK(null);this.GJ(null);this.Fh(AU);this.Fi(Ch);},_ReInit:function(
){},_variants:function(){return this;},_this:null};D.DR={_class:function(){return B.
acg.S;},0:{FileName:"./res/ThermostatGoBackArrow.png",Format:B._PIXEL_FORMAT_NATIVE
,NoOfFrames:1,FrameSize:[60,60],FrameDelay:0,_this:null}};D.B6={AO:null,DS:null,
Gv:null,_Init:function(aArg){B.Core.P._Init.call(this,aArg);B.acf.Ct._Init.call(
this.AO={J:this},0);B.acf.AH._Init.call(this.DS={J:this},0);B.acf.AH._Init.call(
this.Gv={J:this},0);this.__proto__=D.B6;this.L(LH);this.AO.L(LH);this.AO.AV(0x00FFFFFF
);this.DS.L(LH);this.DS.AV(0xFFFFFFFF);this.Gv.L(Qa);this.T(this.AO,0);this.T(this.
DS,0);this.T(this.Gv,0);this.DS.AK(B.aaL(D.DS));this.Gv.AK(B.aaL(D.KL));},_Done:
function(){this.__proto__=B.Core.P;this.AO._Done();this.DS._Done();this.Gv._Done(
);B.Core.P._Done.call(this);},_ReInit:function(){B.Core.P._ReInit.call(this);this.
AO._ReInit();this.DS._ReInit();this.Gv._ReInit();},_Mark:function(E){var A;B.Core.
P._Mark.call(this,E);if((A=this.AO)._cycle!=E)A._Mark(A._cycle=E);if((A=this.DS).
_cycle!=E)A._Mark(A._cycle=E);if((A=this.Gv)._cycle!=E)A._Mark(A._cycle=E);},_className:
"Thermostat::Logo"};D.DS={_class:function(){return B.acg.S;},0:{FileName:"./res/ThermostatHouseImage.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[100,100],FrameDelay:0,_this:
null}};D.KL={_class:function(){return B.acg.S;},0:{FileName:"./res/ThermostatHeatHandsSymbol.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};D.B3={AB:null,DY:null,Gt:null,Gs:null,Gu:null,B6:null,_Init:function(aArg
){B.Core.P._Init.call(this,aArg);B.acf.AH._Init.call(this.AB={J:this},0);B.ach.DY.
_Init.call(this.DY={J:this},0);B.acf.AH._Init.call(this.Gt={J:this},0);B.acf.AH.
_Init.call(this.Gs={J:this},0);B.acf.AH._Init.call(this.Gu={J:this},0);D.B6._Init.
call(this.B6={J:this},0);this.__proto__=D.B3;var A;this.L(C9);this.AB.L(C9);this.
DY.L(Qb);this.Gt.L(Qc);this.Gs.L(Qd);this.Gu.L(Qe);this.B6.L(MW);this.T(this.AB,
0);this.T(this.DY,0);this.T(this.Gt,0);this.T(this.Gs,0);this.T(this.Gu,0);this.
T(this.B6,0);this.AB.AK(B.aaL(D.Fz));this.DY.Em([A=B._GetAutoObject(D.Device),A.
Mu,A.Lb]);this.DY.DT(B._GetAutoObject(D.Fo));this.Gt.AK(B.aaL(D.Lj));this.Gs.AK(
B.aaL(D.JL));this.Gu.AK(B.aaL(D.DR));},_Done:function(){this.__proto__=B.Core.P;
this.AB._Done();this.DY._Done();this.Gt._Done();this.Gs._Done();this.Gu._Done();
this.B6._Done();B.Core.P._Done.call(this);},_ReInit:function(){B.Core.P._ReInit.
call(this);this.AB._ReInit();this.DY._ReInit();this.Gt._ReInit();this.Gs._ReInit(
);this.Gu._ReInit();this.B6._ReInit();},_Mark:function(E){var A;B.Core.P._Mark.call(
this,E);if((A=this.AB)._cycle!=E)A._Mark(A._cycle=E);if((A=this.DY)._cycle!=E)A.
_Mark(A._cycle=E);if((A=this.Gt)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Gs)._cycle
!=E)A._Mark(A._cycle=E);if((A=this.Gu)._cycle!=E)A._Mark(A._cycle=E);if((A=this.
B6)._cycle!=E)A._Mark(A._cycle=E);},_className:"Thermostat::FanMode"};D.JL={_class:
function(){return B.acg.S;},0:{FileName:"./res/ThermostatSymbolFanBig.png",Format:
B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[60,65],FrameDelay:0,_this:null}};
D.Lj={_class:function(){return B.acg.S;},0:{FileName:"./res/ThermostatSymbolFanSmall.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,43],FrameDelay:0,_this:
null}};D.Dj={_class:function(){return B.acg.S;},0:{FileName:"./res/ThermostatSettingsIcon.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};D.Bs={AO:null,EL:null,Bq:null,CD:null,By:null,FC:null,_Init:function(aArg
){B.Core.P._Init.call(this,aArg);B.acf.Ct._Init.call(this.AO={J:this},0);B.acf.Text.
_Init.call(this.EL={J:this},0);B.ach.EJ._Init.call(this.Bq={J:this},0);B.ach.FQ.
_Init.call(this.CD={J:this},0);B.ach.EJ._Init.call(this.By={J:this},0);B.acf.Text.
_Init.call(this.FC={J:this},0);this.__proto__=D.Bs;this.L(MX);this.AO.L(MX);this.
AO.AV(0xCC737373);this.EL.L(Qf);this.EL.A_(MO);this.Bq.L(Qg);this.Bq.CU(Qh);this.
CD.HL(D.B5);this.CD.HN(D.B5);this.CD.Ow(D.B5);this.CD.HM(D.B5);this.CD.HH(D.B5);
this.CD.HJ(D.B5);this.CD.Ov(D.B5);this.CD.HI(D.B5);this.CD.HG(0x11);this.By.L(Qi
);this.By.CU(Qj);this.FC.L(Qk);this.FC.A_(Ql);this.T(this.AO,0);this.T(this.EL,0
);this.T(this.Bq,0);this.T(this.By,0);this.T(this.FC,0);this.EL.DU(B.aaL(B.acg.KI
));this.Bq.Ff=null;this.Bq.My(null);this.Bq.DT(this.CD);this.CD.HO(B.aaL(D.Ck));
this.CD.HK(B.aaL(D.Ck));this.By.Ff=null;this.By.DT(this.CD);this.FC.DU(B.aaL(D.Ck
));},_Done:function(){this.__proto__=B.Core.P;this.AO._Done();this.EL._Done();this.
Bq._Done();this.CD._Done();this.By._Done();this.FC._Done();B.Core.P._Done.call(this
);},_ReInit:function(){B.Core.P._ReInit.call(this);this.AO._ReInit();this.EL._ReInit(
);this.Bq._ReInit();this.CD._ReInit();this.By._ReInit();this.FC._ReInit();},_Mark:
function(E){var A;B.Core.P._Mark.call(this,E);if((A=this.AO)._cycle!=E)A._Mark(A.
_cycle=E);if((A=this.EL)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Bq)._cycle!=E)
A._Mark(A._cycle=E);if((A=this.CD)._cycle!=E)A._Mark(A._cycle=E);if((A=this.By).
_cycle!=E)A._Mark(A._cycle=E);if((A=this.FC)._cycle!=E)A._Mark(A._cycle=E);},_className:
"Thermostat::Settings"};D.Cb={AO:null,Ct:null,D$:null,Ea:null,G2:null,G3:null,EP:
null,EC:null,_Init:function(aArg){B.Core.P._Init.call(this,aArg);B.acf.Ct._Init.
call(this.AO={J:this},0);B.acf.Ct._Init.call(this.Ct={J:this},0);B.acf.Text._Init.
call(this.D$={J:this},0);B.acf.Text._Init.call(this.Ea={J:this},0);B.acf.AH._Init.
call(this.G2={J:this},0);B.acf.AH._Init.call(this.G3={J:this},0);B.acf.Text._Init.
call(this.EP={J:this},0);B.acf.Text._Init.call(this.EC={J:this},0);this.__proto__=
D.Cb;this.L(C9);this.AO.L(C9);this.AO.GH(0xFFFFFFFF);this.AO.AV(0xFFD4D4D4);this.
Ct.L(Qm);this.Ct.AV(0x49FFFFFF);this.D$.L(Qn);this.D$.A_(MR);this.D$.AV(D.B5);this.
Ea.L(Qo);this.Ea.A_(MS);this.Ea.AV(D.B5);this.G2.L(Qp);this.G3.L(Qq);this.EP.L(Qr
);this.EP.A_(MQ);this.EC.L(Qs);this.EC.A_(MP);this.T(this.AO,0);this.T(this.Ct,0
);this.T(this.D$,0);this.T(this.Ea,0);this.T(this.G2,0);this.T(this.G3,0);this.T(
this.EP,0);this.T(this.EC,0);this.D$.DU(B.aaL(B.acg.Jr));this.Ea.DU(B.aaL(B.acg.
Jr));this.G2.AK(B.aaL(D.Jl));this.G3.AK(B.aaL(D.Jl));this.EP.DU(B.aaL(D.Ck));this.
EC.DU(B.aaL(D.Ck));},_Done:function(){this.__proto__=B.Core.P;this.AO._Done();this.
Ct._Done();this.D$._Done();this.Ea._Done();this.G2._Done();this.G3._Done();this.
EP._Done();this.EC._Done();B.Core.P._Done.call(this);},_ReInit:function(){B.Core.
P._ReInit.call(this);this.AO._ReInit();this.Ct._ReInit();this.D$._ReInit();this.
Ea._ReInit();this.G2._ReInit();this.G3._ReInit();this.EP._ReInit();this.EC._ReInit(
);},_Mark:function(E){var A;B.Core.P._Mark.call(this,E);if((A=this.AO)._cycle!=E
)A._Mark(A._cycle=E);if((A=this.Ct)._cycle!=E)A._Mark(A._cycle=E);if((A=this.D$).
_cycle!=E)A._Mark(A._cycle=E);if((A=this.Ea)._cycle!=E)A._Mark(A._cycle=E);if((A=
this.G2)._cycle!=E)A._Mark(A._cycle=E);if((A=this.G3)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.EP)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EC)._cycle!=E)A._Mark(
A._cycle=E);},_className:"Thermostat::ExitScreen"};D.Jl={_class:function(){return B.
acg.S;},0:{FileName:"./res/ThermostatChoiceButton.png",Format:B._PIXEL_FORMAT_NATIVE
,NoOfFrames:1,FrameSize:[200,100],FrameDelay:0,_this:null}};D.De={AH:null,Gy:null
,Gz:null,Text:null,C5:null,_Init:function(aArg){B.Core.P._Init.call(this,aArg);B.
acf.AH._Init.call(this.AH={J:this},0);B.acf.AH._Init.call(this.Gy={J:this},0);B.
acf.AH._Init.call(this.Gz={J:this},0);B.acf.Text._Init.call(this.Text={J:this},0
);B.aci.C5._Init.call(this.C5={J:this},0);this.__proto__=D.De;var A;this.L(C9);this.
AH.L(C9);this.Gy.L(Qt);this.Gz.L(Qu);this.Text.L(Qv);this.Text.A_(MT);this.C5.FK(
0);this.C5.Lc(0);this.C5.N(true);this.C5.HU=D.Ge;this.C5.HT=D.B5;this.T(this.AH,
0);this.T(this.Gy,0);this.T(this.Gz,0);this.T(this.Text,0);this.AH.AK(B.aaL(D.Fz
));this.Gy.AK(B.aaL(D.KO));this.Gz.AK(B.aaL(D.KM));this.Text.DU(B.aaL(D.Ck));this.
C5.Y=[A=this.Text,A.K8,A.AV];},_Done:function(){this.__proto__=B.Core.P;this.AH.
_Done();this.Gy._Done();this.Gz._Done();this.Text._Done();this.C5._Done();B.Core.
P._Done.call(this);},_ReInit:function(){B.Core.P._ReInit.call(this);this.AH._ReInit(
);this.Gy._ReInit();this.Gz._ReInit();this.Text._ReInit();this.C5._ReInit();},_Mark:
function(E){var A;B.Core.P._Mark.call(this,E);if((A=this.AH)._cycle!=E)A._Mark(A.
_cycle=E);if((A=this.Gy)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Gz)._cycle!=E)
A._Mark(A._cycle=E);if((A=this.Text)._cycle!=E)A._Mark(A._cycle=E);if((A=this.C5
)._cycle!=E)A._Mark(A._cycle=E);},_className:"Thermostat::ExitDialog"};D.Exit={De:
null,Cb:null,AR:null,O5:function(An){this.Cb.R(false);this.Cb.N(false);this.De.R(
true);},_Init:function(aArg){B.Core.P._Init.call(this,aArg);D.De._Init.call(this.
De={J:this},0);D.Cb._Init.call(this.Cb={J:this},0);B.Core.AR._Init.call(this.AR={
J:this},0);this.__proto__=D.Exit;this.L(C9);this.De.L(C9);this.Cb.L(C9);this.AR.
BU(Qw);this.AR.BT(Qx);this.AR.BS(Qy);this.AR.BR(Qz);this.T(this.De,0);this.T(this.
Cb,0);this.T(this.AR,0);this.AR.BF=[this,this.O5];},_Done:function(){this.__proto__=
B.Core.P;this.De._Done();this.Cb._Done();this.AR._Done();B.Core.P._Done.call(this
);},_ReInit:function(){B.Core.P._ReInit.call(this);this.De._ReInit();this.Cb._ReInit(
);this.AR._ReInit();},_Mark:function(E){var A;B.Core.P._Mark.call(this,E);if((A=
this.De)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Cb)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.AR)._cycle!=E)A._Mark(A._cycle=E);},_className:"Thermostat::Exit"};
D.Mn={Gd:null,N1:function(An){var BL=this.H$;if(!this.G0)this.FL(215);if(this.G0===
1)this.FL(190);if(this.G0===2)this.FL(170);if(this.JK===true){if((this.Hw>30)&&(
this.Hw<50))this.FL(this.GF-10);if(this.Hw>50)this.FL(this.GF-20);}if(BL<this.GF
)BL=BL+1;else if(BL>this.GF)BL=BL-1;this.UpdateActualTemp(BL);},_Init:function(aArg
){var BW=this.BW;B.Core.Timer._Init.call(BW.Gd={J:this},0);BW.__proto__=D.Mn;BW.
Gd.FM(350);BW.Gd.N(true);BW.Gd.FO=[this,BW.N1];B.h7++;},_Done:function(){var BW=
this.BW;BW.__proto__=null;BW.Gd._Done();B.h7--;},_ReInit:function(){var BW=this.
BW;BW.Gd._ReInit();},_Mark:function(E){var A;if((A=this.Gd)._cycle!=E)A._Mark(A.
_cycle=E);},_variants:function(){return this;},_className:"Thermostat::DeviceClass1"
};
D._Init=function(){D.DP.__proto__=B.acj.DP;D.A3.__proto__=B.Core.P;D.Fm.__proto__=
B.Core.P;D.B2.__proto__=B.Core.P;D.B6.__proto__=B.Core.P;D.B3.__proto__=B.Core.P;
D.Bs.__proto__=B.Core.P;D.Cb.__proto__=B.Core.P;D.De.__proto__=B.Core.P;D.Exit.__proto__=
B.Core.P;};D._ReInit=function(){var A;if((A=D.Iu._this))A._ReInit(),D.Iu._ReInit.
call(A);if((A=D.Ip._this))A._ReInit(),D.Ip._ReInit.call(A);if((A=D.Ir._this))A._ReInit(
),D.Ir._ReInit.call(A);if((A=D.Is._this))A._ReInit(),D.Is._ReInit.call(A);if((A=
D.Fo._this))A._ReInit(),D.Fo._ReInit.call(A);if((A=D.Device._this))A._ReInit(),D.
Device._ReInit.call(A);if((A=D.HQ._this))A._ReInit(),D.HQ._ReInit.call(A);if((A=
D.Iq._this))A._ReInit(),D.Iq._ReInit.call(A);};D.Cn=function(E){var A;if((A=D.Iu.
_this)&&(A._cycle!=E))A._Done(D.Iu._this=null);if((A=D.EK[0]._this)&&(A._cycle!=
E))A._Done(D.EK[0]._this=null);if((A=D.Ez[0]._this)&&(A._cycle!=E))A._Done(D.Ez[
0]._this=null);if((A=D.EA[0]._this)&&(A._cycle!=E))A._Done(D.EA[0]._this=null);if((
A=D.EB[0]._this)&&(A._cycle!=E))A._Done(D.EB[0]._this=null);if((A=D.Ip._this)&&(
A._cycle!=E))A._Done(D.Ip._this=null);if((A=D.Ir._this)&&(A._cycle!=E))A._Done(D.
Ir._this=null);if((A=D.Is._this)&&(A._cycle!=E))A._Done(D.Is._this=null);if((A=D.
Ck[0]._this)&&(A._cycle!=E))A._Done(D.Ck[0]._this=null);if((A=D.EM[0]._this)&&(A.
_cycle!=E))A._Done(D.EM[0]._this=null);if((A=D.Fo._this)&&(A._cycle!=E))A._Done(
D.Fo._this=null);if((A=D.Device._this)&&(A._cycle!=E))A._Done(D.Device._this=null
);if((A=D.Lx[0]._this)&&(A._cycle!=E))A._Done(D.Lx[0]._this=null);if((A=D.KA[0].
_this)&&(A._cycle!=E))A._Done(D.KA[0]._this=null);if((A=D.Cz[0]._this)&&(A._cycle
!=E))A._Done(D.Cz[0]._this=null);if((A=D.Lk[0]._this)&&(A._cycle!=E))A._Done(D.Lk[
0]._this=null);if((A=D.KJ[0]._this)&&(A._cycle!=E))A._Done(D.KJ[0]._this=null);if((
A=D.Fz[0]._this)&&(A._cycle!=E))A._Done(D.Fz[0]._this=null);if((A=D.Ky[0]._this)&&(
A._cycle!=E))A._Done(D.Ky[0]._this=null);if((A=D.Js[0]._this)&&(A._cycle!=E))A._Done(
D.Js[0]._this=null);if((A=D.Kx[0]._this)&&(A._cycle!=E))A._Done(D.Kx[0]._this=null
);if((A=D.HQ._this)&&(A._cycle!=E))A._Done(D.HQ._this=null);if((A=D.EI[0]._this)&&(
A._cycle!=E))A._Done(D.EI[0]._this=null);if((A=D.Kz[0]._this)&&(A._cycle!=E))A._Done(
D.Kz[0]._this=null);if((A=D.KO[0]._this)&&(A._cycle!=E))A._Done(D.KO[0]._this=null
);if((A=D.KM[0]._this)&&(A._cycle!=E))A._Done(D.KM[0]._this=null);if((A=D.Iq._this
)&&(A._cycle!=E))A._Done(D.Iq._this=null);if((A=D.DR[0]._this)&&(A._cycle!=E))A.
_Done(D.DR[0]._this=null);if((A=D.DS[0]._this)&&(A._cycle!=E))A._Done(D.DS[0]._this=
null);if((A=D.KL[0]._this)&&(A._cycle!=E))A._Done(D.KL[0]._this=null);if((A=D.JL[
0]._this)&&(A._cycle!=E))A._Done(D.JL[0]._this=null);if((A=D.Lj[0]._this)&&(A._cycle
!=E))A._Done(D.Lj[0]._this=null);if((A=D.Dj[0]._this)&&(A._cycle!=E))A._Done(D.Dj[
0]._this=null);if((A=D.Jl[0]._this)&&(A._cycle!=E))A._Done(D.Jl[0]._this=null);};
return D;})();

/* Embedded Wizard */