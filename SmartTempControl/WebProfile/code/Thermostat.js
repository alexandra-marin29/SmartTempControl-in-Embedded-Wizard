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
var AG=[75,44];var AZ=[440,44];var Cc=[44,44];var Et=[40,320];var DA=[0,0];var Eu=
".";var Ev="\xB0C";var E2=[0,0,340,340];var Gj=[10,10,330,330];var HM=[50,120];var
JM=[150,120];var JN=[150,20];var JO=[50,20];var JP=[15,132];var HN=[140,240,200,
280];var HO=[120,100,221,140];var IT="20.0\xB0C";var JQ=[93,199];var JR=[157,199
];var M2=[157,140];var M3=[93,140];var M4=[191,187];var M5=[253,187];var M6=[253
,147];var QS=[191,147];var QT="Zi";var QU="Noapte";var QV="Vacanta";var QW="VENTILATOR";
var QX="PORNIRE VENTILATOR";var QY="Limba";var Oq="Day";var Or="Night";var Os="Vacation";
var QZ="FAN";var Ot="ENABLE FAN";var Ou="Language";var Cd=[0,0,800,480];var Q0=[-
3,0,799,480];var Q1=[0,207];var Q2=[66,207];var Q3=[66,282];var Q4=[0,282];var Q5=[-
3,0,797,480];var Q6=[443,207,518,251];var Q7="Caption";var Q8=[207,37,330,81];var
Q9=[335,38,515,82];var Q_=[518,38,713,82];var Q$=[35,95,375,435];var Ra=[386,251
,615,281];var Rb=[397,347,634,414];var Rc=[26,38,187,82];var Rd="Manual";var Ov=[
700,380,800,480];var Re=[130,240,285,290];var Rf=[647,192,708,251];var Rg=[608,253
,750,282];var Rh="FAN ";var Ri=[-2,0,267,320];var Rj=[6,23,56,73];var Rk=[0,21];
var Rl=[66,21];var Rm=[66,81];var Rn=[0,81];var Ro=[224,-4];var Rp=[268,-4];var Rq=[
268,38];var Rr=[224,38];var Rs=[30,135];var Rt=[166,135];var Ru=[166,181];var Rv=[
30,181];var Rw=[26,238];var Rx=[196,238];var Ry=[196,282];var Rz=[26,282];var Ow=[
750,0,800,50];var RA=[230,70,570,410];var RB=[0,204,73,276];var M7=[0,0,100,100];
var RC=[25,30,75,80];var RD=[359,80,399,400];var RE=[298,344,348,394];var RF=[298
,78,348,128];var RG=[0,204,87,276];var Ox=[0,0,277,323];var RH=[55,32,219,86];var
RI=[34,135,184,185];var RJ="English";var RK=[34,234,184,284];var RL="Romanian";var
RM=[220,2,277,32];var RN="X";var RO=[84,48,734,431];var RP=[213,104,587,173];var
RQ="Are you sure you";var RR=[222,187,579,224];var RS="want to exit?";var RT=[293
,240,553,336];var RU=[293,325,553,421];var RV=[373,273,473,303];var RW="Yes";var
RX=[341,358,506,389];var RY="Cancel";var RZ=[256,90,544,391];var R0=[315,168,485
,342];var R1=[283,390,517,451];var R2="Goodbye!";var R3=[307,248];var R4=[531,248
];var R5=[531,325];var R6=[306,326];var R7=[0,203];var R8=[100,203];var R9=[100,
279];var R_=[0,279];var R$=[627,179];var Sa=[727,179];var Sb=[727,279];var Sc=[627
,279];var Sd=[322,328];var Se=[528,328];var Sf=[528,408];var Sg=[322,408];var Sh=[
723,-2];var Si=[799,-1];var Sj=[798,80];var Sk=[723,80];
D.JB={_Init:function(){B.aci.MQ._Init.call(this,0);this.II(3);this.IL(1);this.IK(
1);this.IJ(1);this.IE(B.aaL(D.Fr));this.IH(B.aaL(D.Fr));this.IG(B.aaL(D.Fr));this.
IF(B.aaL(D.Fr));this.IA(2);this.ID(0);this.IC(0);this.IB(0);this.Iw(B.aaL(D.Fr));
this.Iz(B.aaL(D.Fr));this.Iy(B.aaL(D.Fr));this.Ix(B.aaL(D.Fr));this.GM(AG);this.
GN(AG);},_ReInit:function(){},_variants:function(){return this;},_this:null};D.Fr={
_class:function(){return B.acg.T;},0:{FileName:"./res/ThermostatSwingSwitch.png"
,Format:B._PIXEL_FORMAT_ALPHA8,NoOfFrames:4,FrameSize:[75,44],FrameDelay:0,_this:
null}};D.Ff={_class:function(){return B.acg.T;},0:{FileName:"./res/ThermostatButtonDay.png"
,Format:B._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[44,44],FrameDelay:0,_this:
null}};D.Fg={_class:function(){return B.acg.T;},0:{FileName:"./res/ThermostatButtonNight.png"
,Format:B._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[44,44],FrameDelay:0,_this:
null}};D.Fh={_class:function(){return B.acg.T;},0:{FileName:"./res/ThermostatButtonVacation.png"
,Format:B._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[44,44],FrameDelay:0,_this:
null}};D.Jw={_Init:function(){B.aci.HG._Init.call(this,0);this.Jp(0xFFFFFFFF);this.
Jr(0xFFFFFFFF);this.Jq(D.Cb);this.Jl(0xFFFFFFFF);this.Jn(0xFFFFFFFF);this.Jm(D.Cb
);this.K2(50);this.Jk(0x11);this.Js(B.aaL(D.CK));this.Jo(B.aaL(D.CK));this.K1(0x34
);this.II(1);this.IL(1);this.IK(1);this.IJ(1);this.IE(B.aaL(D.Ff));this.IH(B.aaL(
D.Ff));this.IG(B.aaL(D.Ff));this.IF(B.aaL(D.Ff));this.IA(0);this.ID(0);this.IC(0
);this.IB(0);this.Iw(B.aaL(D.Ff));this.Iz(B.aaL(D.Ff));this.Iy(B.aaL(D.Ff));this.
Ix(B.aaL(D.Ff));this.GM(AZ);this.GN(Cc);},_ReInit:function(){},_variants:function(
){return this;},_this:null};D.Jy={_Init:function(){B.aci.HG._Init.call(this,0);this.
Jp(0xFFFFFFFF);this.Jr(0xFFFFFFFF);this.Jq(D.G_);this.Jl(0xFFFFFFFF);this.Jn(0xFFFFFFFF
);this.Jm(D.G_);this.K2(50);this.Jk(0x11);this.Js(B.aaL(D.CK));this.Jo(B.aaL(D.CK
));this.K1(0x34);this.II(1);this.IL(1);this.IK(1);this.IJ(1);this.IE(B.aaL(D.Fg)
);this.IH(B.aaL(D.Fg));this.IG(B.aaL(D.Fg));this.IF(B.aaL(D.Fg));this.IA(0);this.
ID(0);this.IC(0);this.IB(0);this.Iw(B.aaL(D.Fg));this.Iz(B.aaL(D.Fg));this.Iy(B.
aaL(D.Fg));this.Ix(B.aaL(D.Fg));this.GM(AZ);this.GN(Cc);},_ReInit:function(){},_variants:
function(){return this;},_this:null};D.Jz={_Init:function(){B.aci.HG._Init.call(
this,0);this.Jp(0xFFFFFFFF);this.Jr(0xFFFFFFFF);this.Jq(D.MZ);this.Jl(0xFFFFFFFF
);this.Jn(0xFFFFFFFF);this.Jm(D.MZ);this.K2(50);this.Jk(0x11);this.Js(B.aaL(D.CK
));this.Jo(B.aaL(D.CK));this.K1(0x34);this.II(1);this.IL(1);this.IK(1);this.IJ(1
);this.IE(B.aaL(D.Fh));this.IH(B.aaL(D.Fh));this.IG(B.aaL(D.Fh));this.IF(B.aaL(D.
Fh));this.IA(0);this.ID(0);this.IC(0);this.IB(0);this.Iw(B.aaL(D.Fh));this.Iz(B.
aaL(D.Fh));this.Iy(B.aaL(D.Fh));this.Ix(B.aaL(D.Fh));this.GM(AZ);this.GN(Cc);},_ReInit:
function(){},_variants:function(){return this;},_this:null};D.CK={_class:function(
){return B.acg.B0;},0:{Data:function(){return B.acm;},Cache:[],_this:null}};D.Fv={
_class:function(){return B.acg.T;},0:{FileName:"./res/ThermostatVertBar.png",Format:
B._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[20,220],FrameDelay:0,_this:null}};
D.Gi={_Init:function(){B.aci.Gi._Init.call(this,0);this.Qq(0);this.Qt(0);this.Qs(
0);this.Qr(0);this.Qm(B.aaL(D.Fv));this.Qp(B.aaL(D.Fv));this.Qo(B.aaL(D.Fv));this.
Qn(B.aaL(D.Fv));this.Qy(1);this.QB(1);this.QA(1);this.Qz(1);this.Qu(B.aaL(D.Fv));
this.Qx(B.aaL(D.Fv));this.Qw(B.aaL(D.Fv));this.Qv(B.aaL(D.Fv));this.GM(Et);this.
GN(Et);},_ReInit:function(){},_variants:function(){return this;},_this:null};D.Ec={
I7:155,HB:215,Ik:15,HI:0,K7:false,UpdateActualTemp:function(OD){if(OD!==this.I7){
this.I7=OD;B.abo([this,this.Mt,this.Mx],0);}},GI:function(C){if(this.HB===C)return;
this.HB=C;{}B.abo([this,this.Mv,this.GI],0);},My:function(C){if(this.Ik===C)return;
this.Ik=C;{}B.abo([this,this.N2,this.My],0);},Oc:function(C){if(this.K7===C)return;
this.K7=C;{}B.abo([this,this.N3,this.Oc],0);},GL:function(C){if(C>3)C=3;if(C<0)C=
0;if(this.HI===C)return;this.HI=C;{}B.abo([this,this.Ir,this.GL],0);},Mt:function(
){return this.I7;},Mx:function(C){this.I7=C;},Mv:function(){return this.HB;},N2:
function(){return this.Ik;},N3:function(){return this.K7;},Ir:function(){return this.
HI;},_Init:function(aArg){B.acj.Ec._Init.call(this,aArg);this.__proto__=D.Ec;var
Oz=this._variants();if(Oz){this.B6={};Oz._Init.call(this,aArg);}},_Done:function(
){if(this.B6)this.B6._Done.call(this);this.__proto__=B.acj.Ec;B.acj.Ec._Done.call(
this);},_ReInit:function(){B.acj.Ec._ReInit.call(this);if(this.B6)this.B6._ReInit.
call(this);},_Mark:function(E){B.acj.Ec._Mark.call(this,E);if(this.B6)this.B6._Mark(
E);},_variants:function(){return D.NT._variants();},B6:null,_className:"Thermostat::DeviceClass"
};D.Device={_Init:function(){D.Ec._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};D.M1={_class:function(){return B.acg.T;},0:{
FileName:"./res/ThermostatWheels.png",Format:B._PIXEL_FORMAT_ALPHA8,NoOfFrames:4
,FrameSize:[340,340],FrameDelay:0,_this:null}};D.LY={_class:function(){return B.
acg.T;},0:{FileName:"./res/ThermostatController.png",Format:B._PIXEL_FORMAT_NATIVE
,NoOfFrames:1,FrameSize:[320,320],FrameDelay:0,_this:null}};D.BX={C7:null,HF:null
,Dn:null,Fw:null,GD:null,CM:null,Eb:null,DP:null,Eq:null,CI:null,CN:null,C2:null
,E1:null,E0:null,Device:null,DU:300,LS:150,Pj:0,K_:function(aSize){B.Core.H.K_.call(
this,aSize);var Ss=(aSize[0]/2)|0;var St=(aSize[1]/2)|0;this.DP.R([].concat(DA,aSize
));this.DP.Qh([Ss,St]);},Gh:function(DD){B.Core.H.Gh.call(this,DD);var CR=0;var D1=
this.LS;var Lj;var Ez=this.DU;var NA;if(D1<100)D1=100;if(D1>400)D1=400;if(Ez<100
)Ez=100;if(Ez>400)Ez=400;Lj=135-(((D1-100)*270)/300);NA=135-(((Ez-100)*270)/300);
this.CM.QI(B.aaI(this.GD.Q),NA,1,1);if(D1!==Ez){this.Eb.NX(0,84);this.Eb.Ol(-Lj-
90);this.Eb.Ii(0,92,0);this.Eb.Pw(0,102,0);this.Eb.Pv(0,0,0,102,102,0,-NA+Lj,80);
this.Eb.Ol(Lj+90);}else this.Eb.NX(0,84);if(D1<Ez){this.Eq.CC(0);this.Eq.A7(D.Cb
);this.DP.A7(D.Cb);CR=(Ez-D1)*10;}else if(D1>Ez){this.Eq.CC(1);this.Eq.A7(D.G_);
this.DP.A7(D.G_);CR=(D1-Ez)*10;}if(CR>255)CR=255;this.Eq.Bd(CR);this.CI.Cn(((((D1
/10)|0).toFixed()+Eu)+(D1%10).toFixed())+Ev);this.CN.Cn(((((Ez/10)|0).toFixed()+
Eu)+(Ez%10).toFixed())+Ev);CR=(((D1-100)*255)/300)|0;var SL=B.z3(D.Cb,CR);var Sz=
B.z3(D.G_,(255-CR)&0xFF);this.CI.A7(B.abw(SL,Sz));},K3:function(C){if(this.DU===
C)return;this.DU=C;this.Bt();},P9:function(C){if(this.LS===C)return;this.LS=C;this.
Bt();},NH:function(Ab){var U;if(!!this.C7)this.K3((U=this.C7,U[1].call(U[0])));}
,Ob:function(C){if(B.aaZ(this.C7,C))return;if(!!this.C7)B.z$([this,this.NH],this.
C7,0);this.C7=C;if(!!C)B.zX([this,this.NH],C,0);if(!!C)B.pe([this,this.NH],this);
},NG:function(Ab){var U;if(!!this.HF)this.P9((U=this.HF,U[1].call(U[0])));},Oa:function(
C){if(B.aaZ(this.HF,C))return;if(!!this.HF)B.z$([this,this.NG],this.HF,0);this.HF=
C;if(!!C)B.zX([this,this.NG],C,0);if(!!C)B.pe([this,this.NG],this);},S3:function(
Ab){this.Bt();this.Pj=this.DU;this.CN.Bd(255);this.CI.Bd(0);this.C2.Ao(false);},
S1:function(Ab){var U;var BV;var An=0;if((this.DU>=100)&&(this.DU<=400))An=((this.
Dn.K5*300)/720)|0;BV=this.Pj-An;if(BV<100)BV=100;if(BV>400)BV=400;if(this.DU!==BV
){var DH=this.Fw.Fk;if((this.DU-BV)>0)DH=DH-1;else DH=DH+1;if(DH<0)DH=3;if(DH>3)
DH=0;this.Fw.CC(DH);this.K3(BV);if(!!this.C7)(U=this.C7,U[2].call(U[0],this.DU));
B.abo(this.C7,0);}},SW:function(Ab){this.Bt();this.C2.Ao(true);},SI:function(Ab){
this.CN.Bd(255-this.C2.Fu);this.CI.Bd(this.C2.Fu);},SM:function(Ab){var U;var BV=
this.DU+5;this.CN.Bd(255);this.CI.Bd(0);this.C2.Ao(false);if(BV>400)BV=400;this.
K3(BV);if(!!this.C7)(U=this.C7,U[2].call(U[0],this.DU));B.abo(this.C7,0);this.C2.
Ao(true);},SE:function(Ab){var U;var BV=this.DU-5;this.CN.Bd(255);this.CI.Bd(0);
this.C2.Ao(false);if(BV<100)BV=100;this.K3(BV);if(!!this.C7)(U=this.C7,U[2].call(
U[0],this.DU));B.abo(this.C7,0);this.C2.Ao(true);},_Init:function(aArg){B.Core.H.
_Init.call(this,aArg);B.Core.Dn._Init.call(this.Dn={J:this},0);B.acf.AJ._Init.call(
this.Fw={J:this},0);B.acf.AJ._Init.call(this.GD={J:this},0);B.acf.M0._Init.call(
this.CM={J:this},0);B.Graphics.Dl._Init.call(this.Eb={J:this},0);B.acf.JA._Init.
call(this.DP={J:this},0);B.acf.AJ._Init.call(this.Eq={J:this},0);B.acf.Text._Init.
call(this.CI={J:this},0);B.acf.Text._Init.call(this.CN={J:this},0);B.ach.Io._Init.
call(this.C2={J:this},0);B.Core.Bu._Init.call(this.E1={J:this},0);B.Core.Bu._Init.
call(this.E0={J:this},0);D.Ec._Init.call(this.Device={J:this},0);this.__proto__=
D.BX;this.R(E2);this.Dn.IM(0x1C);this.Dn.R(E2);this.Fw.R(E2);this.Fw.A7(0xFF000000
);this.GD.R(Gj);this.CM.B5(HM);this.CM.B4(JM);this.CM.B3(JN);this.CM.B2(JO);this.
CM.Qk(JP);this.CM.A7(D.Cb);this.DP.R(E2);this.DP.A7(0xFFFF0000);this.DP.MD(4);this.
Eq.R(HN);this.CI.IM(0x3B);this.CI.R(HO);this.CI.It(0xC);this.CI.Cn(IT);this.CI.A7(
0xFF000000);this.CN.IM(0x3B);this.CN.R(HO);this.CN.It(0xC);this.CN.Cn(IT);this.CN.
A7(0xFF000000);this.CN.Bd(0);this.C2.HE(1);this.C2.Ga(500);this.C2.Jj(1200);this.
E1.B5(JQ);this.E1.B4(JR);this.E1.B3(M2);this.E1.B2(M3);this.E1.Jt(100);this.E0.B5(
M4);this.E0.B4(M5);this.E0.B3(M6);this.E0.B2(QS);this.E0.Jt(100);this.S(this.Dn,
0);this.S(this.Fw,0);this.S(this.GD,0);this.S(this.CM,0);this.S(this.DP,0);this.
S(this.Eq,0);this.S(this.CI,0);this.S(this.CN,0);this.S(this.E1,0);this.S(this.E0
,0);this.Dn.Mw=[this,this.S1];this.Dn.GF=[this,this.SW];this.Dn.EV=[this,this.S3
];this.Fw.AP(B.aaL(D.M1));this.GD.AP(B.aaL(D.LY));this.CM.AP(B.aaL(D.CM));this.DP.
Qi(this.Eb);this.Eq.AP(B.aaL(D.MM));this.CI.El(B.aaL(D.CK));this.CN.El(B.aaL(D.L8
));this.C2.Ip=[this,this.SI];this.E1.BP=[this,this.SM];this.E0.BP=[this,this.SE];
},_Done:function(){this.__proto__=B.Core.H;this.Dn._Done();this.Fw._Done();this.
GD._Done();this.CM._Done();this.Eb._Done();this.DP._Done();this.Eq._Done();this.
CI._Done();this.CN._Done();this.C2._Done();this.E1._Done();this.E0._Done();this.
Device._Done();B.Core.H._Done.call(this);},_ReInit:function(){B.Core.H._ReInit.call(
this);this.Dn._ReInit();this.Fw._ReInit();this.GD._ReInit();this.CM._ReInit();this.
Eb._ReInit();this.DP._ReInit();this.Eq._ReInit();this.CI._ReInit();this.CN._ReInit(
);this.C2._ReInit();this.E1._ReInit();this.E0._ReInit();this.Device._ReInit();},
_Mark:function(E){var A;B.Core.H._Mark.call(this,E);if((A=this.C7)&&((A=A[0])._cycle
!=E))A._Mark(A._cycle=E);if((A=this.HF)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E
);if((A=this.Dn)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Fw)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.GD)._cycle!=E)A._Mark(A._cycle=E);if((A=this.CM)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.Eb)._cycle!=E)A._Mark(A._cycle=E);if((A=this.DP
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Eq)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.CI)._cycle!=E)A._Mark(A._cycle=E);if((A=this.CN)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.C2)._cycle!=E)A._Mark(A._cycle=E);if((A=this.E1)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.E0)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Device)._cycle
!=E)A._Mark(A._cycle=E);},_className:"Thermostat::TemperatureController"};D.CM={
_class:function(){return B.acg.T;},0:{FileName:"./res/ThermostatNeedle.png",Format:
B._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,20],FrameDelay:0,_this:null}};
D.G_=0xFFD78814;D.Cb=0xFF6A0BC7;D.MM={_class:function(){return B.acg.T;},0:{FileName:
"./res/ThermostatSymbolHeadCool.png",Format:B._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,
FrameSize:[36,36],FrameDelay:0,_this:null}};D.L8={_class:function(){return B.acg.
B0;},0:{Data:function(){return B.aco;},Cache:[],_this:null}};D.Do={Device:null,Il:
null,Exit:null,Ei:null,Di:null,Bb:null,C8:null,DX:null,Em:null,En:null,Eo:null,BX:
null,EU:null,F0:null,IO:null,Clock:null,EE:null,Cv:null,ER:null,Ho:null,EP:null,
Ep:null,C9:null,EZ:null,DY:null,Fj:null,BO:null,BT:null,EO:null,Dm:null,Sv:function(
Ab){this.Bb.AP(this.C8.T);this.C8.Bd(0);},S2:function(Ab){this.C8.Bd(0);this.F0.
Ao(false);switch(this.Device.HI){case 1:this.C8.AP(B.aaL(D.LW));break;case 2:this.
C8.AP(B.aaL(D.LX));break;case 0:case 3:this.C8.AP(B.aaL(D.Gy));break;default:this.
C8.AP(B.aaL(D.LV));}this.F0.Ao(true);},PL:function(Ab){this.Di.Ao(true);this.Ei.
Ao(true);B._GetAutoObject(D.Device).GL(3);this.DY.Ao(false);this.C9.Ao(false);this.
BT.Ao(false);this.BX.Ao(false);var Cj=B._NewObject(D.Di,0);var S_=this.EO;this.HJ(
Cj,S_,null,null,null,null,null,null,null,null,false);this.Device.My(15);},PV:function(
Ab){this.Ep.Ao(false);this.ER.A7(0xFF000000);var SQ=B._NewObject(D.Do,0);this.HJ(
SQ,null,null,null,null,null,null,null,null,null,false);this.Em.GK(true);this.Device.
GL(0);this.DY.Ao(true);this.Ep.Ao(true);this.Di.Ao(false);},QN:function(Ab){this.
C9.BQ(true);this.BT.Ao(true);this.BO.Ao(true);},QM:function(Ab){this.C9.BQ(false
);this.BO.Ao(false);this.BT.Ao(false);},PJ:function(Ab){this.Em.Dy(QT);this.En.Dy(
QU);this.Eo.Dy(QV);this.EP.Cn(QW);this.EU.Cn(QX);this.C9.Fs.Cn(QY);},PH:function(
Ab){this.Em.Dy(Oq);this.En.Dy(Or);this.Eo.Dy(Os);this.EP.Cn(QZ);this.EU.Cn(Ot);this.
C9.Fs.Cn(Ou);},_Init:function(aArg){B.Core.H._Init.call(this,aArg);B.acf.CD._Init.
call(this.Il={J:this},0);D.Exit._Init.call(this.Exit={J:this},0);B.Core.Bu._Init.
call(this.Ei={J:this},0);D.Di._Init.call(this.Di={J:this},0);B.acf.K$._Init.call(
this.Bb={J:this},0);B.acf.K$._Init.call(this.C8={J:this},0);B.aci.DX._Init.call(
this.DX={J:this},0);B.aci.GQ._Init.call(this.Em={J:this},0);B.aci.GQ._Init.call(
this.En={J:this},0);B.aci.GQ._Init.call(this.Eo={J:this},0);D.BX._Init.call(this.
BX={J:this},0);B.acf.Text._Init.call(this.EU={J:this},0);B.ach.Io._Init.call(this.
F0={J:this},0);B.Core.Og._Init.call(this.IO={J:this},0);B.Clock.Clock._Init.call(
this.Clock={J:this},0);B.aci.GQ._Init.call(this.EE={J:this},0);D.Cv._Init.call(this.
Cv={J:this},0);B.acf.CD._Init.call(this.ER={J:this},0);B.acf.AJ._Init.call(this.
Ho={J:this},0);B.acf.Text._Init.call(this.EP={J:this},0);B.ach.Dg._Init.call(this.
Ep={J:this},0);D.C9._Init.call(this.C9={J:this},0);B.acf.AJ._Init.call(this.EZ={
J:this},0);B.Core.Bu._Init.call(this.DY={J:this},0);B.Core.Bu._Init.call(this.Fj={
J:this},0);B.Core.Bu._Init.call(this.BO={J:this},0);B.Core.Bu._Init.call(this.BT={
J:this},0);B.ach.KK._Init.call(this.EO={J:this},0);B.acf.AJ._Init.call(this.Dm={
J:this},0);this.__proto__=D.Do;var A;this.R(Cd);this.Il.R(Q0);this.Exit.R(Cd);this.
Ei.B5(Q1);this.Ei.B4(Q2);this.Ei.B3(Q3);this.Ei.B2(Q4);this.Ei.Ao(false);this.Di.
R(Q5);this.Di.Ao(false);this.Bb.R(Cd);this.C8.R(Cd);this.C8.Bd(0);this.DX.R(Q6);
this.DX.Dy(Q7);this.Em.R(Q8);this.Em.Dy(Oq);this.En.R(Q9);this.En.Mz(1);this.En.
Dy(Or);this.Eo.R(Q_);this.Eo.Mz(2);this.Eo.Dy(Os);this.BX.R(Q$);this.EU.IM(0x1C);
this.EU.R(Ra);this.EU.Cn(Ot);this.F0.HE(1);this.Clock.R(Rb);this.EE.R(Rc);this.EE.
Mz(3);this.EE.Dy(Rd);this.Cv.R(Ov);this.Cv.Bd(255);this.ER.R(Re);this.ER.A7(0xFF000000
);this.ER.P_(true);this.ER.BQ(true);this.Ho.R(Rf);this.EP.IM(0x1C);this.EP.R(Rg);
this.EP.Cn(Rh);this.Ep.HE(1);this.Ep.Ga(800);this.Ep.Jj(0);this.Ep.A4=0xFF000000;
this.Ep.A3=0xFF000000;this.C9.R(Ri);this.C9.BQ(false);this.EZ.R(Rj);this.DY.B5(Rk
);this.DY.B4(Rl);this.DY.B3(Rm);this.DY.B2(Rn);this.Fj.B5(Ro);this.Fj.B4(Rp);this.
Fj.B3(Rq);this.Fj.B2(Rr);this.BO.B5(Rs);this.BO.B4(Rt);this.BO.B3(Ru);this.BO.B2(
Rv);this.BO.Ao(false);this.BT.B5(Rw);this.BT.B4(Rx);this.BT.B3(Ry);this.BT.B2(Rz
);this.BT.Ao(false);this.Dm.R(Ow);this.S(this.Il,0);this.S(this.Exit,0);this.S(this.
Ei,0);this.S(this.Di,0);this.S(this.Bb,0);this.S(this.C8,0);this.S(this.DX,0);this.
S(this.Em,0);this.S(this.En,0);this.S(this.Eo,0);this.S(this.BX,0);this.S(this.EU
,0);this.S(this.Clock,0);this.S(this.EE,0);this.S(this.Cv,0);this.S(this.ER,0);this.
S(this.Ho,0);this.S(this.EP,0);this.S(this.C9,0);this.S(this.EZ,0);this.S(this.DY
,0);this.S(this.Fj,0);this.S(this.BO,0);this.S(this.BT,0);this.S(this.Dm,0);this.
Ei.BP=[this,this.PV];this.Bb.AP(B.aaL(D.Gy));this.C8.AP(B.aaL(D.Gy));this.DX.Fp([
A=B._GetAutoObject(D.Device),A.N3,A.Oc]);this.DX.Fo(B._GetAutoObject(D.JB));this.
Em.Fp([A=B._GetAutoObject(D.Device),A.Ir,A.GL]);this.Em.Fo(B._GetAutoObject(D.Jw
));this.En.Fp([A=B._GetAutoObject(D.Device),A.Ir,A.GL]);this.En.Fo(B._GetAutoObject(
D.Jy));this.Eo.Fp([A=B._GetAutoObject(D.Device),A.Ir,A.GL]);this.Eo.Fo(B._GetAutoObject(
D.Jz));this.Device=B._GetAutoObject(D.Device);this.BX.Ob([A=B._GetAutoObject(D.Device
),A.Mv,A.GI]);this.BX.Oa([A=B._GetAutoObject(D.Device),A.Mt,A.Mx]);this.EU.El(B.
aaL(D.KN));this.F0.Iq=[this,this.Sv];this.F0.Ad=[A=this.C8,A.KV,A.Bd];this.IO.Ms=[
this,this.S2];this.IO.Fp([A=B._GetAutoObject(D.Device),A.Ir,A.GL]);this.EE.Fp([A=
B._GetAutoObject(D.Device),A.Ir,A.GL]);this.EE.F$=[this,this.PL];this.EE.Fo(B._GetAutoObject(
D.Jx));this.Ho.AP(B.aaL(D.K8));this.EP.El(B.aaL(D.KN));this.Ep.Ad=[A=this.ER,A.Mu
,A.A7];this.EZ.AP(B.aaL(D.EZ));this.DY.DW=null;this.DY.BP=[this,this.QN];this.Fj.
BP=[this,this.QM];this.BO.BP=[this,this.PH];this.BT.BP=[this,this.PJ];this.Dm.AP(
B.aaL(D.K4));},_Done:function(){this.__proto__=B.Core.H;this.Il._Done();this.Exit.
_Done();this.Ei._Done();this.Di._Done();this.Bb._Done();this.C8._Done();this.DX.
_Done();this.Em._Done();this.En._Done();this.Eo._Done();this.BX._Done();this.EU.
_Done();this.F0._Done();this.IO._Done();this.Clock._Done();this.EE._Done();this.
Cv._Done();this.ER._Done();this.Ho._Done();this.EP._Done();this.Ep._Done();this.
C9._Done();this.EZ._Done();this.DY._Done();this.Fj._Done();this.BO._Done();this.
BT._Done();this.EO._Done();this.Dm._Done();B.Core.H._Done.call(this);},_ReInit:function(
){B.Core.H._ReInit.call(this);this.Il._ReInit();this.Exit._ReInit();this.Ei._ReInit(
);this.Di._ReInit();this.Bb._ReInit();this.C8._ReInit();this.DX._ReInit();this.Em.
_ReInit();this.En._ReInit();this.Eo._ReInit();this.BX._ReInit();this.EU._ReInit(
);this.F0._ReInit();this.IO._ReInit();this.Clock._ReInit();this.EE._ReInit();this.
Cv._ReInit();this.ER._ReInit();this.Ho._ReInit();this.EP._ReInit();this.Ep._ReInit(
);this.C9._ReInit();this.EZ._ReInit();this.DY._ReInit();this.Fj._ReInit();this.BO.
_ReInit();this.BT._ReInit();this.EO._ReInit();this.Dm._ReInit();},_Mark:function(
E){var A;B.Core.H._Mark.call(this,E);if((A=this.Device)&&(A._cycle!=E))A._Mark(A.
_cycle=E);if((A=this.Il)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Exit)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.Ei)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Di
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Bb)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.C8)._cycle!=E)A._Mark(A._cycle=E);if((A=this.DX)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.Em)._cycle!=E)A._Mark(A._cycle=E);if((A=this.En)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.Eo)._cycle!=E)A._Mark(A._cycle=E);if((A=this.BX)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.EU)._cycle!=E)A._Mark(A._cycle=E);if((A=this.F0
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.IO)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.Clock)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EE)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.Cv)._cycle!=E)A._Mark(A._cycle=E);if((A=this.ER)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.Ho)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EP)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.Ep)._cycle!=E)A._Mark(A._cycle=E);if((A=this.C9
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EZ)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.DY)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Fj)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.BO)._cycle!=E)A._Mark(A._cycle=E);if((A=this.BT)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.EO)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Dm)._cycle!=
E)A._Mark(A._cycle=E);},_className:"Thermostat::Thermostat"};D.Gy={_class:function(
){return B.acg.T;},0:{FileName:"./res/ThermostatBackgroundDay.png",Format:B._PIXEL_FORMAT_NATIVE
,NoOfFrames:1,FrameSize:[800,480],FrameDelay:0,_this:null}};D.LW={_class:function(
){return B.acg.T;},0:{FileName:"./res/ThermostatBackgroundNight.png",Format:B._PIXEL_FORMAT_NATIVE
,NoOfFrames:1,FrameSize:[800,480],FrameDelay:0,_this:null}};D.KN={_class:function(
){return B.acg.B0;},0:{Data:function(){return B.acn;},Cache:[],_this:null}};D.LV={
_class:function(){return B.acg.T;},0:{FileName:"./res/ThermostatBackgroundDefault.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[4,480],FrameDelay:0,_this:
null}};D.K4={_class:function(){return B.acg.T;},0:{FileName:"./res/ThermostatPowerOffIcon.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[25,26],FrameDelay:0,_this:
null}};D.LX={_class:function(){return B.acg.T;},0:{FileName:"./res/ThermostatBackgroundVacation.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[800,480],FrameDelay:0,_this:
null}};D.MZ=0xFF4F8BFF;D.Mb={_class:function(){return B.acg.T;},0:{FileName:"./res/ThermostatHouseSplashScreen.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[360,360],FrameDelay:0,_this:
null}};D.L$={_class:function(){return B.acg.T;},0:{FileName:"./res/ThermostatHeatSplashScreen.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[120,120],FrameDelay:0,_this:
null}};D.Di={AI:null,BX:null,Eh:null,Dm:null,_Init:function(aArg){B.Core.H._Init.
call(this,aArg);B.acf.AJ._Init.call(this.AI={J:this},0);D.BX._Init.call(this.BX={
J:this},0);B.acf.AJ._Init.call(this.Eh={J:this},0);B.acf.AJ._Init.call(this.Dm={
J:this},0);this.__proto__=D.Di;var A;this.R(Cd);this.AI.R(Cd);this.BX.R(RA);this.
Eh.R(RB);this.Dm.R(Ow);this.S(this.AI,0);this.S(this.BX,0);this.S(this.Eh,0);this.
S(this.Dm,0);this.AI.AP(B.aaL(D.Gy));this.BX.Ob([A=B._GetAutoObject(D.Device),A.
Mv,A.GI]);this.BX.Oa([A=B._GetAutoObject(D.Device),A.Mt,A.Mx]);this.Eh.AP(B.aaL(
D.Eh));this.Dm.AP(B.aaL(D.K4));},_Done:function(){this.__proto__=B.Core.H;this.AI.
_Done();this.BX._Done();this.Eh._Done();this.Dm._Done();B.Core.H._Done.call(this
);},_ReInit:function(){B.Core.H._ReInit.call(this);this.AI._ReInit();this.BX._ReInit(
);this.Eh._ReInit();this.Dm._ReInit();},_Mark:function(E){var A;B.Core.H._Mark.call(
this,E);if((A=this.AI)._cycle!=E)A._Mark(A._cycle=E);if((A=this.BX)._cycle!=E)A.
_Mark(A._cycle=E);if((A=this.Eh)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Dm)._cycle
!=E)A._Mark(A._cycle=E);},_className:"Thermostat::DefaultThermostat"};D.Jx={_Init:
function(){B.aci.HG._Init.call(this,0);this.Jp(0xFFFFFFFF);this.Jr(0xFFFFFFFF);this.
Jq(D.Cb);this.Jl(0xFFFFFFFF);this.Jn(0xFFFFFFFF);this.Jm(D.Cb);this.K2(50);this.
Jk(0x11);this.Js(B.aaL(D.CK));this.Jo(B.aaL(D.CK));this.K1(0x34);this.II(1);this.
IL(1);this.IK(1);this.IJ(1);this.IE(null);this.IH(null);this.IG(null);this.IF(null
);this.IA(0);this.ID(0);this.IC(0);this.IB(0);this.Iw(null);this.Iz(null);this.Iy(
null);this.Ix(null);this.GM(AZ);this.GN(Cc);},_ReInit:function(){},_variants:function(
){return this;},_this:null};D.Eh={_class:function(){return B.acg.T;},0:{FileName:
"./res/ThermostatGoBackArrow.png",Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[
60,60],FrameDelay:0,_this:null}};D.Cv={Bb:null,Ej:null,Hr:null,_Init:function(aArg
){B.Core.H._Init.call(this,aArg);B.acf.CD._Init.call(this.Bb={J:this},0);B.acf.AJ.
_Init.call(this.Ej={J:this},0);B.acf.AJ._Init.call(this.Hr={J:this},0);this.__proto__=
D.Cv;this.R(M7);this.Bb.R(M7);this.Bb.A7(0x00FFFFFF);this.Ej.R(M7);this.Ej.A7(0xFFFFFFFF
);this.Hr.R(RC);this.S(this.Bb,0);this.S(this.Ej,0);this.S(this.Hr,0);this.Ej.AP(
B.aaL(D.Ej));this.Hr.AP(B.aaL(D.L_));},_Done:function(){this.__proto__=B.Core.H;
this.Bb._Done();this.Ej._Done();this.Hr._Done();B.Core.H._Done.call(this);},_ReInit:
function(){B.Core.H._ReInit.call(this);this.Bb._ReInit();this.Ej._ReInit();this.
Hr._ReInit();},_Mark:function(E){var A;B.Core.H._Mark.call(this,E);if((A=this.Bb
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Ej)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.Hr)._cycle!=E)A._Mark(A._cycle=E);},_className:"Thermostat::Logo"};D.Ej={
_class:function(){return B.acg.T;},0:{FileName:"./res/ThermostatHouseImage.png",
Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[100,100],FrameDelay:0,_this:
null}};D.L_={_class:function(){return B.acg.T;},0:{FileName:"./res/ThermostatHeatHandsSymbol.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};D.DR={AI:null,Es:null,Hq:null,Hp:null,Ca:null,Cv:null,_Init:function(aArg
){B.Core.H._Init.call(this,aArg);B.acf.AJ._Init.call(this.AI={J:this},0);B.aci.Es.
_Init.call(this.Es={J:this},0);B.acf.AJ._Init.call(this.Hq={J:this},0);B.acf.AJ.
_Init.call(this.Hp={J:this},0);B.acf.AJ._Init.call(this.Ca={J:this},0);D.Cv._Init.
call(this.Cv={J:this},0);this.__proto__=D.DR;var A;this.R(Cd);this.AI.R(Cd);this.
Es.R(RD);this.Hq.R(RE);this.Hp.R(RF);this.Ca.R(RG);this.Cv.R(Ov);this.S(this.AI,
0);this.S(this.Es,0);this.S(this.Hq,0);this.S(this.Hp,0);this.S(this.Ca,0);this.
S(this.Cv,0);this.AI.AP(B.aaL(D.Gy));this.Es.Fp([A=B._GetAutoObject(D.Device),A.
N2,A.My]);this.Es.Fo(B._GetAutoObject(D.Gi));this.Hq.AP(B.aaL(D.ML));this.Hp.AP(
B.aaL(D.K8));this.Ca.AP(B.aaL(D.Eh));},_Done:function(){this.__proto__=B.Core.H;
this.AI._Done();this.Es._Done();this.Hq._Done();this.Hp._Done();this.Ca._Done();
this.Cv._Done();B.Core.H._Done.call(this);},_ReInit:function(){B.Core.H._ReInit.
call(this);this.AI._ReInit();this.Es._ReInit();this.Hq._ReInit();this.Hp._ReInit(
);this.Ca._ReInit();this.Cv._ReInit();},_Mark:function(E){var A;B.Core.H._Mark.call(
this,E);if((A=this.AI)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Es)._cycle!=E)A.
_Mark(A._cycle=E);if((A=this.Hq)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Hp)._cycle
!=E)A._Mark(A._cycle=E);if((A=this.Ca)._cycle!=E)A._Mark(A._cycle=E);if((A=this.
Cv)._cycle!=E)A._Mark(A._cycle=E);},_className:"Thermostat::FanMode"};D.K8={_class:
function(){return B.acg.T;},0:{FileName:"./res/ThermostatSymbolFanBig.png",Format:
B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[60,65],FrameDelay:0,_this:null}};
D.ML={_class:function(){return B.acg.T;},0:{FileName:"./res/ThermostatSymbolFanSmall.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,43],FrameDelay:0,_this:
null}};D.EZ={_class:function(){return B.acg.T;},0:{FileName:"./res/ThermostatSettingsIcon.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};D.C9={Bb:null,Fs:null,BO:null,CP:null,BT:null,GC:null,_Init:function(aArg
){B.Core.H._Init.call(this,aArg);B.acf.CD._Init.call(this.Bb={J:this},0);B.acf.Text.
_Init.call(this.Fs={J:this},0);B.aci.GQ._Init.call(this.BO={J:this},0);B.aci.HG.
_Init.call(this.CP={J:this},0);B.aci.GQ._Init.call(this.BT={J:this},0);B.acf.Text.
_Init.call(this.GC={J:this},0);this.__proto__=D.C9;this.R(Ox);this.Bb.R(Ox);this.
Bb.A7(0xCC737373);this.Fs.R(RH);this.Fs.Cn(Ou);this.BO.R(RI);this.BO.Dy(RJ);this.
CP.Jp(D.Cb);this.CP.Jr(D.Cb);this.CP.Qe(D.Cb);this.CP.Jq(D.Cb);this.CP.Jl(D.Cb);
this.CP.Jn(D.Cb);this.CP.Qd(D.Cb);this.CP.Jm(D.Cb);this.CP.Jk(0x11);this.BT.R(RK
);this.BT.Dy(RL);this.GC.R(RM);this.GC.Cn(RN);this.S(this.Bb,0);this.S(this.Fs,0
);this.S(this.BO,0);this.S(this.BT,0);this.S(this.GC,0);this.Fs.El(B.aaL(B.acg.L7
));this.BO.F$=null;this.BO.Qc(null);this.BO.Fo(this.CP);this.CP.Js(B.aaL(D.CK));
this.CP.Jo(B.aaL(D.CK));this.BT.F$=null;this.BT.Fo(this.CP);this.GC.El(B.aaL(D.CK
));},_Done:function(){this.__proto__=B.Core.H;this.Bb._Done();this.Fs._Done();this.
BO._Done();this.CP._Done();this.BT._Done();this.GC._Done();B.Core.H._Done.call(this
);},_ReInit:function(){B.Core.H._ReInit.call(this);this.Bb._ReInit();this.Fs._ReInit(
);this.BO._ReInit();this.CP._ReInit();this.BT._ReInit();this.GC._ReInit();},_Mark:
function(E){var A;B.Core.H._Mark.call(this,E);if((A=this.Bb)._cycle!=E)A._Mark(A.
_cycle=E);if((A=this.Fs)._cycle!=E)A._Mark(A._cycle=E);if((A=this.BO)._cycle!=E)
A._Mark(A._cycle=E);if((A=this.CP)._cycle!=E)A._Mark(A._cycle=E);if((A=this.BT).
_cycle!=E)A._Mark(A._cycle=E);if((A=this.GC)._cycle!=E)A._Mark(A._cycle=E);},_className:
"Thermostat::Settings"};D.Ef={Bb:null,CD:null,FY:null,FZ:null,HK:null,HL:null,GT:
null,Gz:null,_Init:function(aArg){B.Core.H._Init.call(this,aArg);B.acf.CD._Init.
call(this.Bb={J:this},0);B.acf.CD._Init.call(this.CD={J:this},0);B.acf.Text._Init.
call(this.FY={J:this},0);B.acf.Text._Init.call(this.FZ={J:this},0);B.acf.AJ._Init.
call(this.HK={J:this},0);B.acf.AJ._Init.call(this.HL={J:this},0);B.acf.Text._Init.
call(this.GT={J:this},0);B.acf.Text._Init.call(this.Gz={J:this},0);this.__proto__=
D.Ef;this.R(Cd);this.Bb.R(Cd);this.Bb.HD(0xFFFFFFFF);this.Bb.A7(0xFFD4D4D4);this.
CD.R(RO);this.CD.A7(0x49FFFFFF);this.FY.R(RP);this.FY.Cn(RQ);this.FY.A7(D.Cb);this.
FZ.R(RR);this.FZ.Cn(RS);this.FZ.A7(D.Cb);this.HK.R(RT);this.HL.R(RU);this.GT.R(RV
);this.GT.Cn(RW);this.Gz.R(RX);this.Gz.Cn(RY);this.S(this.Bb,0);this.S(this.CD,0
);this.S(this.FY,0);this.S(this.FZ,0);this.S(this.HK,0);this.S(this.HL,0);this.S(
this.GT,0);this.S(this.Gz,0);this.FY.El(B.aaL(B.acg.KM));this.FZ.El(B.aaL(B.acg.
KM));this.HK.AP(B.aaL(D.KD));this.HL.AP(B.aaL(D.KD));this.GT.El(B.aaL(D.CK));this.
Gz.El(B.aaL(D.CK));},_Done:function(){this.__proto__=B.Core.H;this.Bb._Done();this.
CD._Done();this.FY._Done();this.FZ._Done();this.HK._Done();this.HL._Done();this.
GT._Done();this.Gz._Done();B.Core.H._Done.call(this);},_ReInit:function(){B.Core.
H._ReInit.call(this);this.Bb._ReInit();this.CD._ReInit();this.FY._ReInit();this.
FZ._ReInit();this.HK._ReInit();this.HL._ReInit();this.GT._ReInit();this.Gz._ReInit(
);},_Mark:function(E){var A;B.Core.H._Mark.call(this,E);if((A=this.Bb)._cycle!=E
)A._Mark(A._cycle=E);if((A=this.CD)._cycle!=E)A._Mark(A._cycle=E);if((A=this.FY).
_cycle!=E)A._Mark(A._cycle=E);if((A=this.FZ)._cycle!=E)A._Mark(A._cycle=E);if((A=
this.HK)._cycle!=E)A._Mark(A._cycle=E);if((A=this.HL)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.GT)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Gz)._cycle!=E)A._Mark(
A._cycle=E);},_className:"Thermostat::ExitScreen"};D.KD={_class:function(){return B.
acg.T;},0:{FileName:"./res/ThermostatChoiceButton.png",Format:B._PIXEL_FORMAT_NATIVE
,NoOfFrames:1,FrameSize:[200,100],FrameDelay:0,_this:null}};D.Ee={AJ:null,Hu:null
,Hv:null,Text:null,Dg:null,_Init:function(aArg){B.Core.H._Init.call(this,aArg);B.
acf.AJ._Init.call(this.AJ={J:this},0);B.acf.AJ._Init.call(this.Hu={J:this},0);B.
acf.AJ._Init.call(this.Hv={J:this},0);B.acf.Text._Init.call(this.Text={J:this},0
);B.ach.Dg._Init.call(this.Dg={J:this},0);this.__proto__=D.Ee;var A;this.R(Cd);this.
AJ.R(Cd);this.Hu.R(RZ);this.Hv.R(R0);this.Text.R(R1);this.Text.Cn(R2);this.Dg.HE(
0);this.Dg.Jj(0);this.Dg.Ao(true);this.Dg.A4=D.G_;this.Dg.A3=D.Cb;this.S(this.AJ
,0);this.S(this.Hu,0);this.S(this.Hv,0);this.S(this.Text,0);this.AJ.AP(B.aaL(D.Gy
));this.Hu.AP(B.aaL(D.Mb));this.Hv.AP(B.aaL(D.L$));this.Text.El(B.aaL(D.CK));this.
Dg.Ad=[A=this.Text,A.Mu,A.A7];},_Done:function(){this.__proto__=B.Core.H;this.AJ.
_Done();this.Hu._Done();this.Hv._Done();this.Text._Done();this.Dg._Done();B.Core.
H._Done.call(this);},_ReInit:function(){B.Core.H._ReInit.call(this);this.AJ._ReInit(
);this.Hu._ReInit();this.Hv._ReInit();this.Text._ReInit();this.Dg._ReInit();},_Mark:
function(E){var A;B.Core.H._Mark.call(this,E);if((A=this.AJ)._cycle!=E)A._Mark(A.
_cycle=E);if((A=this.Hu)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Hv)._cycle!=E)
A._Mark(A._cycle=E);if((A=this.Text)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Dg
)._cycle!=E)A._Mark(A._cycle=E);},_className:"Thermostat::ExitDialog"};D.Exit={Ee:
null,Ef:null,Bu:null,QO:function(Ab){this.Ef.BQ(false);this.Ef.Ao(false);this.Ee.
BQ(true);},_Init:function(aArg){B.Core.H._Init.call(this,aArg);D.Ee._Init.call(this.
Ee={J:this},0);D.Ef._Init.call(this.Ef={J:this},0);B.Core.Bu._Init.call(this.Bu={
J:this},0);this.__proto__=D.Exit;this.R(Cd);this.Ee.R(Cd);this.Ee.BQ(false);this.
Ef.R(Cd);this.Bu.B5(R3);this.Bu.B4(R4);this.Bu.B3(R5);this.Bu.B2(R6);this.S(this.
Ee,0);this.S(this.Ef,0);this.S(this.Bu,0);this.Bu.BP=[this,this.QO];},_Done:function(
){this.__proto__=B.Core.H;this.Ee._Done();this.Ef._Done();this.Bu._Done();B.Core.
H._Done.call(this);},_ReInit:function(){B.Core.H._ReInit.call(this);this.Ee._ReInit(
);this.Ef._ReInit();this.Bu._ReInit();},_Mark:function(E){var A;B.Core.H._Mark.call(
this,E);if((A=this.Ee)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Ef)._cycle!=E)A.
_Mark(A._cycle=E);if((A=this.Bu)._cycle!=E)A._Mark(A._cycle=E);},_className:"Thermostat::Exit"
};D.NT={G9:null,PG:function(Ab){var BV=this.I7;if(!this.HI)this.GI(215);if(this.
HI===1)this.GI(190);if(this.HI===2)this.GI(170);if(this.K7===true){if((this.Ik>30
)&&(this.Ik<50))this.GI(this.HB-10);if(this.Ik>50)this.GI(this.HB-20);}if(BV<this.
HB)BV=BV+1;else if(BV>this.HB)BV=BV-1;this.UpdateActualTemp(BV);},_Init:function(
aArg){var B6=this.B6;B.Core.Timer._Init.call(B6.G9={J:this},0);B6.__proto__=D.NT;
B6.G9.GJ(350);B6.G9.Ao(true);B6.G9.GO=[this,B6.PG];B.h7++;},_Done:function(){var
B6=this.B6;B6.__proto__=null;B6.G9._Done();B.h7--;},_ReInit:function(){var B6=this.
B6;B6.G9._ReInit();},_Mark:function(E){var A;if((A=this.G9)._cycle!=E)A._Mark(A.
_cycle=E);},_variants:function(){return this;},_className:"Thermostat::DeviceClass1"
};D.DT={DR:null,Ca:null,Do:null,EQ:null,EO:null,Fq:null,PR:function(Ab){this.Do.
Ao(false);this.DR.Ao(true);this.Ca.Ao(true);this.Do.Di.Ao(false);var Cj=B._NewObject(
D.DR,0);var S$=this.Fq;this.HJ(Cj,S$,null,null,null,null,null,null,null,null,false
);},PU:function(Ab){this.Do.Ao(true);var Cj=B._NewObject(D.Do,0);this.HJ(Cj,null
,null,null,null,null,null,null,null,null,false);this.DR.Ao(false);this.Ca.Ao(false
);},_Init:function(aArg){B.Core.H._Init.call(this,aArg);D.DR._Init.call(this.DR={
J:this},0);B.Core.Bu._Init.call(this.Ca={J:this},0);D.Do._Init.call(this.Do={J:this
},0);B.Core.Bu._Init.call(this.EQ={J:this},0);B.ach.KK._Init.call(this.EO={J:this
},0);B.ach.Fq._Init.call(this.Fq={J:this},0);this.__proto__=D.DT;this.R(Cd);this.
DR.R(Cd);this.Ca.B5(R7);this.Ca.B4(R8);this.Ca.B3(R9);this.Ca.B2(R_);this.Ca.Ao(
false);this.Do.R(Cd);this.EQ.B5(R$);this.EQ.B4(Sa);this.EQ.B3(Sb);this.EQ.B2(Sc);
this.EQ.Ao(true);this.Fq.KH=7;this.S(this.DR,0);this.S(this.Ca,0);this.S(this.Do
,0);this.S(this.EQ,0);this.Ca.BP=[this,this.PU];this.EQ.BP=[this,this.PR];},_Done:
function(){this.__proto__=B.Core.H;this.DR._Done();this.Ca._Done();this.Do._Done(
);this.EQ._Done();this.EO._Done();this.Fq._Done();B.Core.H._Done.call(this);},_ReInit:
function(){B.Core.H._ReInit.call(this);this.DR._ReInit();this.Ca._ReInit();this.
Do._ReInit();this.EQ._ReInit();this.EO._ReInit();this.Fq._ReInit();},_Mark:function(
E){var A;B.Core.H._Mark.call(this,E);if((A=this.DR)._cycle!=E)A._Mark(A._cycle=E
);if((A=this.Ca)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Do)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.EQ)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EO)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.Fq)._cycle!=E)A._Mark(A._cycle=E);},_className:
"Thermostat::Interface"};D.Ft={Exit:null,Ea:null,DT:null,ES:null,P7:function(Ab){
var Cj=B._NewObject(D.Exit,0);var Ta=this.DT.EO;this.HJ(Cj,Ta,null,null,null,null
,null,null,null,null,false);this.DT.Ao(false);this.Ea.Ao(true);},PE:function(Ab){
var Cj=B._NewObject(D.DT,0);this.HJ(Cj,null,null,null,null,null,null,null,null,null
,false);this.Ea.Ao(false);this.ES.Ao(true);},_Init:function(aArg){B.Core.H._Init.
call(this,aArg);D.Exit._Init.call(this.Exit={J:this},0);B.Core.Bu._Init.call(this.
Ea={J:this},0);D.DT._Init.call(this.DT={J:this},0);B.Core.Bu._Init.call(this.ES={
J:this},0);this.__proto__=D.Ft;this.R(Cd);this.Exit.R(Cd);this.Ea.B5(Sd);this.Ea.
B4(Se);this.Ea.B3(Sf);this.Ea.B2(Sg);this.DT.R(Cd);this.ES.B5(Sh);this.ES.B4(Si);
this.ES.B3(Sj);this.ES.B2(Sk);this.S(this.Exit,0);this.S(this.Ea,0);this.S(this.
DT,0);this.S(this.ES,0);this.Ea.BP=[this,this.PE];this.ES.BP=[this,this.P7];},_Done:
function(){this.__proto__=B.Core.H;this.Exit._Done();this.Ea._Done();this.DT._Done(
);this.ES._Done();B.Core.H._Done.call(this);},_ReInit:function(){B.Core.H._ReInit.
call(this);this.Exit._ReInit();this.Ea._ReInit();this.DT._ReInit();this.ES._ReInit(
);},_Mark:function(E){var A;B.Core.H._Mark.call(this,E);if((A=this.Exit)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.Ea)._cycle!=E)A._Mark(A._cycle=E);if((A=this.DT
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.ES)._cycle!=E)A._Mark(A._cycle=E);},_className:
"Thermostat::ThermostatApp"};
D._Init=function(){D.Ec.__proto__=B.acj.Ec;D.BX.__proto__=B.Core.H;D.Do.__proto__=
B.Core.H;D.Di.__proto__=B.Core.H;D.Cv.__proto__=B.Core.H;D.DR.__proto__=B.Core.H;
D.C9.__proto__=B.Core.H;D.Ef.__proto__=B.Core.H;D.Ee.__proto__=B.Core.H;D.Exit.__proto__=
B.Core.H;D.DT.__proto__=B.Core.H;D.Ft.__proto__=B.Core.H;};D._ReInit=function(){
var A;if((A=D.JB._this))A._ReInit(),D.JB._ReInit.call(A);if((A=D.Jw._this))A._ReInit(
),D.Jw._ReInit.call(A);if((A=D.Jy._this))A._ReInit(),D.Jy._ReInit.call(A);if((A=
D.Jz._this))A._ReInit(),D.Jz._ReInit.call(A);if((A=D.Gi._this))A._ReInit(),D.Gi.
_ReInit.call(A);if((A=D.Device._this))A._ReInit(),D.Device._ReInit.call(A);if((A=
D.Jx._this))A._ReInit(),D.Jx._ReInit.call(A);};D.Cx=function(E){var A;if((A=D.JB.
_this)&&(A._cycle!=E))A._Done(D.JB._this=null);if((A=D.Fr[0]._this)&&(A._cycle!=
E))A._Done(D.Fr[0]._this=null);if((A=D.Ff[0]._this)&&(A._cycle!=E))A._Done(D.Ff[
0]._this=null);if((A=D.Fg[0]._this)&&(A._cycle!=E))A._Done(D.Fg[0]._this=null);if((
A=D.Fh[0]._this)&&(A._cycle!=E))A._Done(D.Fh[0]._this=null);if((A=D.Jw._this)&&(
A._cycle!=E))A._Done(D.Jw._this=null);if((A=D.Jy._this)&&(A._cycle!=E))A._Done(D.
Jy._this=null);if((A=D.Jz._this)&&(A._cycle!=E))A._Done(D.Jz._this=null);if((A=D.
CK[0]._this)&&(A._cycle!=E))A._Done(D.CK[0]._this=null);if((A=D.Fv[0]._this)&&(A.
_cycle!=E))A._Done(D.Fv[0]._this=null);if((A=D.Gi._this)&&(A._cycle!=E))A._Done(
D.Gi._this=null);if((A=D.Device._this)&&(A._cycle!=E))A._Done(D.Device._this=null
);if((A=D.M1[0]._this)&&(A._cycle!=E))A._Done(D.M1[0]._this=null);if((A=D.LY[0].
_this)&&(A._cycle!=E))A._Done(D.LY[0]._this=null);if((A=D.CM[0]._this)&&(A._cycle
!=E))A._Done(D.CM[0]._this=null);if((A=D.MM[0]._this)&&(A._cycle!=E))A._Done(D.MM[
0]._this=null);if((A=D.L8[0]._this)&&(A._cycle!=E))A._Done(D.L8[0]._this=null);if((
A=D.Gy[0]._this)&&(A._cycle!=E))A._Done(D.Gy[0]._this=null);if((A=D.LW[0]._this)&&(
A._cycle!=E))A._Done(D.LW[0]._this=null);if((A=D.KN[0]._this)&&(A._cycle!=E))A._Done(
D.KN[0]._this=null);if((A=D.LV[0]._this)&&(A._cycle!=E))A._Done(D.LV[0]._this=null
);if((A=D.K4[0]._this)&&(A._cycle!=E))A._Done(D.K4[0]._this=null);if((A=D.LX[0].
_this)&&(A._cycle!=E))A._Done(D.LX[0]._this=null);if((A=D.Mb[0]._this)&&(A._cycle
!=E))A._Done(D.Mb[0]._this=null);if((A=D.L$[0]._this)&&(A._cycle!=E))A._Done(D.L$[
0]._this=null);if((A=D.Jx._this)&&(A._cycle!=E))A._Done(D.Jx._this=null);if((A=D.
Eh[0]._this)&&(A._cycle!=E))A._Done(D.Eh[0]._this=null);if((A=D.Ej[0]._this)&&(A.
_cycle!=E))A._Done(D.Ej[0]._this=null);if((A=D.L_[0]._this)&&(A._cycle!=E))A._Done(
D.L_[0]._this=null);if((A=D.K8[0]._this)&&(A._cycle!=E))A._Done(D.K8[0]._this=null
);if((A=D.ML[0]._this)&&(A._cycle!=E))A._Done(D.ML[0]._this=null);if((A=D.EZ[0].
_this)&&(A._cycle!=E))A._Done(D.EZ[0]._this=null);if((A=D.KD[0]._this)&&(A._cycle
!=E))A._Done(D.KD[0]._this=null);};return D;})();

/* Embedded Wizard */