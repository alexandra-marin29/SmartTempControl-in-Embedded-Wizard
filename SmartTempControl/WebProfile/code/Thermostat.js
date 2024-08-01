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
var AH=[75,44];var AS=[440,44];var Ca=[44,44];var EH=[40,320];var DT=[0,0];var Dw=
".";var DU="\xB0C";var Ei=[0,0,340,340];var FL=[10,10,330,330];var Ix=[50,120];var
GW=[150,120];var HO=[150,20];var Iy=[50,20];var Lo=[15,132];var Lp=[140,240,200,
280];var JD=[120,100,221,140];var JE="20.0\xB0C";var Lq=[93,199];var Lr=[157,199
];var Ls=[157,140];var Lt=[93,140];var Lu=[191,187];var Lv=[253,187];var Lw=[253
,147];var OR=[191,147];var OS="Zi";var OT="Noapte";var OU="Vacanta";var OV="VENTILATOR";
var OW="PORNIRE VENTILATOR";var OX="Limba";var OY="La revedere !";var Mz="Day";var
MA="Night";var MB="Vacation";var OZ="FAN";var MC="ENABLE FAN";var MD="Language";
var ME="Goodbye!";var EI=[0,0,800,480];var O0=[-3,0,799,480];var MF=[-3,0,797,480
];var O1=[70,0];var O2=[69,60];var O3=[3,60];var O4=[6,9];var O5=[106,9];var O6=[
106,109];var O7=[6,109];var MG=[735,16,779,60];var O8=[443,207,518,251];var O9="Caption";
var O_=[207,37,330,81];var O$=[335,38,515,82];var Pa=[518,38,713,82];var Pb=[35,
95,375,435];var Pc=[386,251,615,281];var Pd=[708,3];var Pe=[805,3];var Pf=[805,95
];var Pg=[708,95];var Ph=[397,347,634,414];var Pi=[26,38,187,82];var Pj="Manual";
var MH=[700,380,800,480];var Pk=[130,240,285,290];var Pl=[647,192,708,251];var Pm=[
606,252,748,281];var Pn="FAN ";var Po=[627,181];var Pp=[727,181];var Pq=[727,281
];var Pr=[627,281];var Ps=[-2,0,268,357];var Pt=[6,23,56,73];var Pu=[0,21];var Pv=[
66,21];var Pw=[66,81];var Px=[0,81];var Py=[224,-4];var Pz=[268,-4];var PA=[268,
38];var PB=[224,38];var PC=[35,135];var PD=[171,135];var PE=[171,181];var PF=[35
,181];var PG=[35,237];var PH=[205,237];var PJ=[205,281];var PK=[35,281];var PL=[
215,370,580,481];var PM=[230,99,568,381];var PN=[326,197,472,334];var PO=[230,70
,570,410];var PP=[11,11,78,81];var Lx=[0,0,100,100];var PQ=[25,30,75,80];var PR=[
359,80,399,400];var PS=[298,344,348,394];var PT=[298,78,348,128];var PU=[0,0,87,
72];var MI=[0,0,277,357];var PV=[55,45,219,99];var PW=[55,140,205,190];var PX="English";
var PY=[55,236,205,286];var PZ="Romanian";var P0=[220,2,277,32];var P1="X";
D.In={_Init:function(){B.ach.Lc._Init.call(this,0);this.GN(3);this.GQ(1);this.GP(
1);this.GO(1);this.GJ(B.aaL(D.EC));this.GM(B.aaL(D.EC));this.GL(B.aaL(D.EC));this.
GK(B.aaL(D.EC));this.GF(2);this.GI(0);this.GH(0);this.GG(0);this.GB(B.aaL(D.EC));
this.GE(B.aaL(D.EC));this.GD(B.aaL(D.EC));this.GC(B.aaL(D.EC));this.E$(AH);this.
Fa(AH);},_ReInit:function(){},_variants:function(){return this;},_this:null};D.EC={
_class:function(){return B.acg.Q;},0:{FileName:"./res/ThermostatSwingSwitch.png"
,Format:B._PIXEL_FORMAT_ALPHA8,NoOfFrames:4,FrameSize:[75,44],FrameDelay:0,_this:
null}};D.Eq={_class:function(){return B.acg.Q;},0:{FileName:"./res/ThermostatButtonDay.png"
,Format:B._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[44,44],FrameDelay:0,_this:
null}};D.Er={_class:function(){return B.acg.Q;},0:{FileName:"./res/ThermostatButtonNight.png"
,Format:B._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[44,44],FrameDelay:0,_this:
null}};D.Es={_class:function(){return B.acg.Q;},0:{FileName:"./res/ThermostatButtonVacation.png"
,Format:B._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[44,44],FrameDelay:0,_this:
null}};D.Ii={_Init:function(){B.ach.FJ._Init.call(this,0);this.HC(0xFFFFFFFF);this.
HE(0xFFFFFFFF);this.HD(D.Ce);this.Hy(0xFFFFFFFF);this.HA(0xFFFFFFFF);this.Hz(D.Ce
);this.If(50);this.Hx(0x11);this.HF(B.aaL(D.CN));this.HB(B.aaL(D.CN));this.Ie(0x34
);this.GN(1);this.GQ(1);this.GP(1);this.GO(1);this.GJ(B.aaL(D.Eq));this.GM(B.aaL(
D.Eq));this.GL(B.aaL(D.Eq));this.GK(B.aaL(D.Eq));this.GF(0);this.GI(0);this.GH(0
);this.GG(0);this.GB(B.aaL(D.Eq));this.GE(B.aaL(D.Eq));this.GD(B.aaL(D.Eq));this.
GC(B.aaL(D.Eq));this.E$(AS);this.Fa(Ca);},_ReInit:function(){},_variants:function(
){return this;},_this:null};D.Ik={_Init:function(){B.ach.FJ._Init.call(this,0);this.
HC(0xFFFFFFFF);this.HE(0xFFFFFFFF);this.HD(D.F_);this.Hy(0xFFFFFFFF);this.HA(0xFFFFFFFF
);this.Hz(D.F_);this.If(50);this.Hx(0x11);this.HF(B.aaL(D.CN));this.HB(B.aaL(D.CN
));this.Ie(0x34);this.GN(1);this.GQ(1);this.GP(1);this.GO(1);this.GJ(B.aaL(D.Er)
);this.GM(B.aaL(D.Er));this.GL(B.aaL(D.Er));this.GK(B.aaL(D.Er));this.GF(0);this.
GI(0);this.GH(0);this.GG(0);this.GB(B.aaL(D.Er));this.GE(B.aaL(D.Er));this.GD(B.
aaL(D.Er));this.GC(B.aaL(D.Er));this.E$(AS);this.Fa(Ca);},_ReInit:function(){},_variants:
function(){return this;},_this:null};D.Il={_Init:function(){B.ach.FJ._Init.call(
this,0);this.HC(0xFFFFFFFF);this.HE(0xFFFFFFFF);this.HD(D.Ll);this.Hy(0xFFFFFFFF
);this.HA(0xFFFFFFFF);this.Hz(D.Ll);this.If(50);this.Hx(0x11);this.HF(B.aaL(D.CN
));this.HB(B.aaL(D.CN));this.Ie(0x34);this.GN(1);this.GQ(1);this.GP(1);this.GO(1
);this.GJ(B.aaL(D.Es));this.GM(B.aaL(D.Es));this.GL(B.aaL(D.Es));this.GK(B.aaL(D.
Es));this.GF(0);this.GI(0);this.GH(0);this.GG(0);this.GB(B.aaL(D.Es));this.GE(B.
aaL(D.Es));this.GD(B.aaL(D.Es));this.GC(B.aaL(D.Es));this.E$(AS);this.Fa(Ca);},_ReInit:
function(){},_variants:function(){return this;},_this:null};D.CN={_class:function(
){return B.acg.BI;},0:{Data:function(){return B.acm;},Cache:[],_this:null}};D.EE={
_class:function(){return B.acg.Q;},0:{FileName:"./res/ThermostatVertBar.png",Format:
B._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[20,220],FrameDelay:0,_this:null}};
D.Fh={_Init:function(){B.ach.Fh._Init.call(this,0);this.Os(0);this.Ov(0);this.Ou(
0);this.Ot(0);this.Oo(B.aaL(D.EE));this.Or(B.aaL(D.EE));this.Oq(B.aaL(D.EE));this.
Op(B.aaL(D.EE));this.OA(1);this.OD(1);this.OC(1);this.OB(1);this.Ow(B.aaL(D.EE));
this.Oz(B.aaL(D.EE));this.Oy(B.aaL(D.EE));this.Ox(B.aaL(D.EE));this.E$(EH);this.
Fa(EH);},_ReInit:function(){},_variants:function(){return this;},_this:null};D.DI={
F0:null,H2:155,Gy:215,Ho:15,GU:0,Jz:false,UpdateActualTemp:function(MM){if(MM!==
this.H2){this.H2=MM;B.abo([this,this.KX,this.K1],0);}},FE:function(C){if(this.Gy===
C)return;this.Gy=C;{}B.abo([this,this.KZ,this.FE],0);},K3:function(C){if(this.Ho===
C)return;this.Ho=C;{}B.abo([this,this.Mj,this.K3],0);},K6:function(C){if(this.Jz===
C)return;this.Jz=C;{}B.abo([this,this.Mk,this.K6],0);},NK:function(Ap){var BC=this.
H2;if(!this.GU)this.FE(215);if(this.GU===1)this.FE(190);if(this.GU===2)this.FE(170
);if(this.Jz===true){if((this.Ho>30)&&(this.Ho<50))this.FE(this.Gy-10);if(this.Ho>
50)this.FE(this.Gy-20);}if(BC<this.Gy)BC=BC+1;else if(BC>this.Gy)BC=BC-1;this.UpdateActualTemp(
BC);},E_:function(C){if(C>3)C=3;if(C<0)C=0;if(this.GU===C)return;this.GU=C;{}B.abo([
this,this.Hs,this.E_],0);},KX:function(){return this.H2;},K1:function(C){this.H2=
C;},KZ:function(){return this.Gy;},Mj:function(){return this.Ho;},Mk:function(){
return this.Jz;},Hs:function(){return this.GU;},_Init:function(aArg){B.acj.DI._Init.
call(this,aArg);B.Core.Timer._Init.call(this.F0={K:this},0);this.__proto__=D.DI;
this.F0.FF(350);this.F0.R(true);this.F0.FH=[this,this.NK];},_Done:function(){this.
__proto__=B.acj.DI;this.F0._Done();B.acj.DI._Done.call(this);},_ReInit:function(
){B.acj.DI._ReInit.call(this);this.F0._ReInit();},_Mark:function(E){var A;B.acj.
DI._Mark.call(this,E);if((A=this.F0)._cycle!=E)A._Mark(A._cycle=E);},_className:
"Thermostat::DeviceClass"};D.Device={_Init:function(){D.DI._Init.call(this,0);},
_ReInit:function(){},_variants:function(){return this;},_this:null};D.Ln={_class:
function(){return B.acg.Q;},0:{FileName:"./res/ThermostatWheels.png",Format:B._PIXEL_FORMAT_ALPHA8
,NoOfFrames:4,FrameSize:[340,340],FrameDelay:0,_this:null}};D.Kp={_class:function(
){return B.acg.Q;},0:{FileName:"./res/ThermostatController.png",Format:B._PIXEL_FORMAT_NATIVE
,NoOfFrames:1,FrameSize:[320,320],FrameDelay:0,_this:null}};D.A6={CU:null,GS:null
,C5:null,EF:null,Fy:null,Cv:null,DH:null,Dp:null,DR:null,Cr:null,Cw:null,CM:null
,Eh:null,Eg:null,Device:null,Ds:300,Ki:150,Np:0,JB:function(aSize){B.Core.P.JB.call(
this,aSize);var P9=(aSize[0]/2)|0;var P_=(aSize[1]/2)|0;this.Dp.N([].concat(DT,aSize
));this.Dp.Oi([P9,P_]);},Fg:function(Dh){B.Core.P.Fg.call(this,Dh);var CA=0;var Dz=
this.Ki;var JP;var DZ=this.Ds;var L0;if(Dz<100)Dz=100;if(Dz>400)Dz=400;if(DZ<100
)DZ=100;if(DZ>400)DZ=400;JP=135-(((Dz-100)*270)/300);L0=135-(((DZ-100)*270)/300);
this.Cv.OI(B.aaI(this.Fy.O),L0,1,1);if(Dz!==DZ){this.DH.Mg(0,84);this.DH.Mv(-JP-
90);this.DH.Hl(0,92,0);this.DH.ND(0,102,0);this.DH.NC(0,0,0,102,102,0,-L0+JP,80);
this.DH.Mv(JP+90);}else this.DH.Mg(0,84);if(Dz<DZ){this.DR.Cn(0);this.DR.A1(D.Ce
);this.Dp.A1(D.Ce);CA=(DZ-Dz)*10;}else if(Dz>DZ){this.DR.Cn(1);this.DR.A1(D.F_);
this.Dp.A1(D.F_);CA=(Dz-DZ)*10;}if(CA>255)CA=255;this.DR.Ba(CA);this.Cr.Co(((((Dz
/10)|0).toFixed()+Dw)+(Dz%10).toFixed())+DU);this.Cw.Co(((((DZ/10)|0).toFixed()+
Dw)+(DZ%10).toFixed())+DU);CA=(((Dz-100)*255)/300)|0;var Qo=B.z3(D.Ce,CA);var Qe=
B.z3(D.F_,(255-CA)&0xFF);this.Cr.A1(B.abw(Qo,Qe));},Jv:function(C){if(this.Ds===
C)return;this.Ds=C;this.Bd();},N9:function(C){if(this.Ki===C)return;this.Ki=C;this.
Bd();},L5:function(Ap){var S;if(!!this.CU)this.Jv((S=this.CU,S[1].call(S[0])));}
,Mq:function(C){if(B.aaZ(this.CU,C))return;if(!!this.CU)B.z$([this,this.L5],this.
CU,0);this.CU=C;if(!!C)B.zX([this,this.L5],C,0);if(!!C)B.pe([this,this.L5],this);
},L4:function(Ap){var S;if(!!this.GS)this.N9((S=this.GS,S[1].call(S[0])));},Mp:function(
C){if(B.aaZ(this.GS,C))return;if(!!this.GS)B.z$([this,this.L4],this.GS,0);this.GS=
C;if(!!C)B.zX([this,this.L4],C,0);if(!!C)B.pe([this,this.L4],this);},Qy:function(
Ap){this.Bd();this.Np=this.Ds;this.Cw.Ba(255);this.Cr.Ba(0);this.CM.R(false);},Qw:
function(Ap){var S;var BC;var Aj=0;if((this.Ds>=100)&&(this.Ds<=400))Aj=((this.C5.
Jx*300)/720)|0;BC=this.Np-Aj;if(BC<100)BC=100;if(BC>400)BC=400;if(this.Ds!==BC){
var Dj=this.EF.Ev;if((this.Ds-BC)>0)Dj=Dj-1;else Dj=Dj+1;if(Dj<0)Dj=3;if(Dj>3)Dj=
0;this.EF.Cn(Dj);this.Jv(BC);if(!!this.CU)(S=this.CU,S[2].call(S[0],this.Ds));B.
abo(this.CU,0);}},Qu:function(Ap){this.Bd();this.CM.R(true);},Ql:function(Ap){this.
Cw.Ba(255-this.CM.GV);this.Cr.Ba(this.CM.GV);},Qp:function(Ap){var S;var BC=this.
Ds+5;this.Cw.Ba(255);this.Cr.Ba(0);this.CM.R(false);if(BC>400)BC=400;this.Jv(BC);
if(!!this.CU)(S=this.CU,S[2].call(S[0],this.Ds));B.abo(this.CU,0);this.CM.R(true
);},Qi:function(Ap){var S;var BC=this.Ds-5;this.Cw.Ba(255);this.Cr.Ba(0);this.CM.
R(false);if(BC<100)BC=100;this.Jv(BC);if(!!this.CU)(S=this.CU,S[2].call(S[0],this.
Ds));B.abo(this.CU,0);this.CM.R(true);},_Init:function(aArg){B.Core.P._Init.call(
this,aArg);B.Core.C5._Init.call(this.C5={K:this},0);B.acf.AX._Init.call(this.EF={
K:this},0);B.acf.AX._Init.call(this.Fy={K:this},0);B.acf.Lm._Init.call(this.Cv={
K:this},0);B.Graphics.C4._Init.call(this.DH={K:this},0);B.acf.Im._Init.call(this.
Dp={K:this},0);B.acf.AX._Init.call(this.DR={K:this},0);B.acf.Text._Init.call(this.
Cr={K:this},0);B.acf.Text._Init.call(this.Cw={K:this},0);B.aci.Fz._Init.call(this.
CM={K:this},0);B.Core.Bp._Init.call(this.Eh={K:this},0);B.Core.Bp._Init.call(this.
Eg={K:this},0);D.DI._Init.call(this.Device={K:this},0);this.__proto__=D.A6;this.
N(Ei);this.C5.HG(0x1C);this.C5.N(Ei);this.EF.N(Ei);this.EF.A1(0xFF000000);this.Fy.
N(FL);this.Cv.B6(Ix);this.Cv.B5(GW);this.Cv.B4(HO);this.Cv.B3(Iy);this.Cv.Om(Lo);
this.Cv.A1(D.Ce);this.Dp.N(Ei);this.Dp.A1(0xFFFF0000);this.Dp.K7(4);this.DR.N(Lp
);this.Cr.HG(0x3B);this.Cr.N(JD);this.Cr.Ht(0xC);this.Cr.Co(JE);this.Cr.A1(0xFF000000
);this.Cw.HG(0x3B);this.Cw.N(JD);this.Cw.Ht(0xC);this.Cw.Co(JE);this.Cw.A1(0xFF000000
);this.Cw.Ba(0);this.CM.GR(1);this.CM.K2(500);this.CM.K4(1200);this.Eh.B6(Lq);this.
Eh.B5(Lr);this.Eh.B4(Ls);this.Eh.B3(Lt);this.Eh.Ig(100);this.Eg.B6(Lu);this.Eg.B5(
Lv);this.Eg.B4(Lw);this.Eg.B3(OR);this.Eg.Ig(100);this.T(this.C5,0);this.T(this.
EF,0);this.T(this.Fy,0);this.T(this.Cv,0);this.T(this.Dp,0);this.T(this.DR,0);this.
T(this.Cr,0);this.T(this.Cw,0);this.T(this.Eh,0);this.T(this.Eg,0);this.C5.K0=[this
,this.Qw];this.C5.KV=[this,this.Qu];this.C5.K8=[this,this.Qy];this.EF.AN(B.aaL(D.
Ln));this.Fy.AN(B.aaL(D.Kp));this.Cv.AN(B.aaL(D.Cv));this.Dp.Oj(this.DH);this.DR.
AN(B.aaL(D.La));this.Cr.FD(B.aaL(D.CN));this.Cw.FD(B.aaL(D.Kz));this.CM.KT=[this
,this.Ql];this.Eh.BK=[this,this.Qp];this.Eg.BK=[this,this.Qi];},_Done:function(){
this.__proto__=B.Core.P;this.C5._Done();this.EF._Done();this.Fy._Done();this.Cv.
_Done();this.DH._Done();this.Dp._Done();this.DR._Done();this.Cr._Done();this.Cw.
_Done();this.CM._Done();this.Eh._Done();this.Eg._Done();this.Device._Done();B.Core.
P._Done.call(this);},_ReInit:function(){B.Core.P._ReInit.call(this);this.C5._ReInit(
);this.EF._ReInit();this.Fy._ReInit();this.Cv._ReInit();this.DH._ReInit();this.Dp.
_ReInit();this.DR._ReInit();this.Cr._ReInit();this.Cw._ReInit();this.CM._ReInit(
);this.Eh._ReInit();this.Eg._ReInit();this.Device._ReInit();},_Mark:function(E){
var A;B.Core.P._Mark.call(this,E);if((A=this.CU)&&((A=A[0])._cycle!=E))A._Mark(A.
_cycle=E);if((A=this.GS)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.C5
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EF)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.Fy)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Cv)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.DH)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Dp)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.DR)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Cr)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.Cw)._cycle!=E)A._Mark(A._cycle=E);if((A=this.CM
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Eh)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.Eg)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Device)._cycle!=E)A._Mark(A.
_cycle=E);},_className:"Thermostat::TemperatureController"};D.Cv={_class:function(
){return B.acg.Q;},0:{FileName:"./res/ThermostatNeedle.png",Format:B._PIXEL_FORMAT_ALPHA8
,NoOfFrames:1,FrameSize:[30,20],FrameDelay:0,_this:null}};D.F_=0xFFD78814;D.Ce=0xFF6A0BC7;
D.La={_class:function(){return B.acg.Q;},0:{FileName:"./res/ThermostatSymbolHeadCool.png"
,Format:B._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[36,36],FrameDelay:0,_this:
null}};D.Kz={_class:function(){return B.acg.BI;},0:{Data:function(){return B.aco;
},Cache:[],_this:null}};D.Ff={Device:null,Hp:null,Cd:null,DP:null,CL:null,Cm:null
,DM:null,AR:null,BV:null,Cg:null,BF:null,BE:null,BL:null,BM:null,A6:null,CR:null
,E6:null,HJ:null,Bp:null,Et:null,Clock:null,BS:null,B2:null,Ct:null,Fw:null,Hn:null
,Fx:null,DK:null,Eu:null,Fv:null,De:null,Bu:null,Dv:null,C6:null,Db:null,BT:null
,B9:null,Qa:function(Ap){this.AR.AN(this.BV.Q);this.BV.Ba(0);},Qx:function(Ap){this.
BV.Ba(0);this.E6.R(false);switch(this.Device.GU){case 1:this.BV.AN(B.aaL(D.Kn));
break;case 2:this.BV.AN(B.aaL(D.Ko));break;case 0:case 3:this.BV.AN(B.aaL(D.FZ));
break;default:this.BV.AN(B.aaL(D.Km));}this.E6.R(true);},NU:function(Ap){this.CL.
Ba(0);this.Et.R(false);this.AR.W(false);this.BV.W(false);this.BF.W(false);this.BF.
R(false);this.BE.W(false);this.BE.R(false);this.BL.R(false);this.BL.W(false);this.
BM.R(false);this.BM.W(false);this.A6.W(false);this.CR.W(false);this.Clock.W(false
);this.BS.W(false);this.Ct.W(false);this.Cm.W(false);this.Cg.W(false);this.Cd.W(
false);this.B2.W(false);this.Cg.R(false);this.Fx.W(false);this.DK.W(false);this.
Bu.W(false);this.Bu.R(false);this.Dv.W(false);this.CL.W(true);this.Et.R(true);},
NO:function(Ap){this.Cm.Ba(0);this.Fw.R(false);B._GetAutoObject(D.Device).E_(3);
this.AR.W(false);this.BV.W(false);this.BF.W(false);this.BF.R(false);this.BE.W(false
);this.BE.R(false);this.BL.R(false);this.BL.W(false);this.BM.R(false);this.BM.W(
false);this.Ct.W(false);this.A6.W(false);this.A6.R(false);this.CR.W(false);this.
Clock.W(false);this.BS.W(false);this.BS.R(false);this.Bu.R(false);this.Bu.W(false
);this.Db.R(false);this.C6.R(false);this.Cm.FG(1);this.Cm.W(true);this.Cm.R(true
);this.DM.R(true);this.Fw.R(true);this.Cg.W(true);this.Cg.R(true);this.Device.K3(
15);this.Device.K6(false);},NX:function(Ap){this.De.R(false);this.Ct.A1(0xFF000000
);this.Cm.W(false);this.A6.R(true);this.Cm.R(false);this.DM.R(false);this.AR.W(true
);this.BV.W(true);this.BF.W(true);this.BF.R(true);this.BE.W(true);this.BE.R(true
);this.BL.R(true);this.BL.W(true);this.Ct.W(false);this.BM.R(true);this.BM.W(true
);this.A6.W(true);this.CR.W(true);this.Cg.R(true);this.Ct.W(true);this.Cg.W(true
);this.Clock.W(true);this.BS.W(true);this.BS.R(true);this.BS.Ez(false);this.Bu.R(
true);this.Db.R(true);this.C6.R(true);this.BE.Ez(true);this.Device.E_(0);this.De.
R(true);},OM:function(Ap){this.Cd.Ba(0);this.Fv.R(false);this.AR.W(false);this.BV.
W(false);this.BF.W(false);this.BF.R(false);this.BE.W(false);this.BE.R(false);this.
BL.R(false);this.BL.W(false);this.BM.R(false);this.BM.W(false);this.Ct.W(false);
this.A6.W(false);this.A6.R(false);this.CR.W(false);this.Clock.W(false);this.BS.W(
false);this.BS.R(false);this.Bu.R(false);this.Bu.W(false);this.Db.R(false);this.
C6.R(false);this.Bu.R(false);this.Cd.FG(1);this.Cd.W(true);this.Fv.R(true);this.
Cd.R(true);this.DP.R(true);},ON:function(Ap){this.De.R(false);this.Cd.W(false);this.
Cd.R(false);this.DP.R(false);this.AR.W(true);this.BV.W(true);this.BF.W(true);this.
BF.R(true);this.BE.W(true);this.BE.R(true);this.BL.R(true);this.BL.W(true);this.
Ct.W(true);this.BM.R(true);this.BM.W(true);this.A6.W(true);this.CR.W(true);this.
Cg.R(true);this.Cg.W(true);this.Clock.W(true);this.BS.W(true);this.BS.R(true);this.
BE.Ez(true);this.Bu.R(true);this.Db.R(true);this.C6.R(true);this.Dv.W(true);this.
Bu.W(false);this.Device.E_(0);this.De.R(true);},OO:function(Ap){this.Bu.W(true);
},OL:function(Ap){this.Bu.W(false);},NM:function(Ap){this.BE.CT(OS);this.BL.CT(OT
);this.BM.CT(OU);this.DK.Co(OV);this.CR.Co(OW);this.Bu.ED.Co(OX);this.CL.Text.Co(
OY);},NL:function(Ap){this.BE.CT(Mz);this.BL.CT(MA);this.BM.CT(MB);this.DK.Co(OZ
);this.CR.Co(MC);this.Bu.ED.Co(MD);this.CL.Text.Co(ME);},_Init:function(aArg){B.
Core.P._Init.call(this,aArg);B.acf.Fc._Init.call(this.Hp={K:this},0);D.Cd._Init.
call(this.Cd={K:this},0);B.Core.Bp._Init.call(this.DP={K:this},0);D.CL._Init.call(
this.CL={K:this},0);D.Cm._Init.call(this.Cm={K:this},0);B.Core.Bp._Init.call(this.
DM={K:this},0);B.acf.JC._Init.call(this.AR={K:this},0);B.acf.JC._Init.call(this.
BV={K:this},0);B.ach.EB._Init.call(this.Cg={K:this},0);B.ach.BF._Init.call(this.
BF={K:this},0);B.ach.EB._Init.call(this.BE={K:this},0);B.ach.EB._Init.call(this.
BL={K:this},0);B.ach.EB._Init.call(this.BM={K:this},0);D.A6._Init.call(this.A6={
K:this},0);B.acf.Text._Init.call(this.CR={K:this},0);B.aci.Fz._Init.call(this.E6={
K:this},0);B.Core.Mr._Init.call(this.HJ={K:this},0);B.Core.Bp._Init.call(this.Bp={
K:this},0);B.aci.Fz._Init.call(this.Et={K:this},0);B.Clock.Clock._Init.call(this.
Clock={K:this},0);B.ach.EB._Init.call(this.BS={K:this},0);D.B2._Init.call(this.B2={
K:this},0);B.acf.Fc._Init.call(this.Ct={K:this},0);B.aci.Fz._Init.call(this.Fw={
K:this},0);B.aci.Fz._Init.call(this.Hn={K:this},0);B.acf.AX._Init.call(this.Fx={
K:this},0);B.acf.Text._Init.call(this.DK={K:this},0);B.Core.Bp._Init.call(this.Eu={
K:this},0);B.aci.Fz._Init.call(this.Fv={K:this},0);B.aci.CK._Init.call(this.De={
K:this},0);D.Bu._Init.call(this.Bu={K:this},0);B.acf.AX._Init.call(this.Dv={K:this
},0);B.Core.Bp._Init.call(this.C6={K:this},0);B.Core.Bp._Init.call(this.Db={K:this
},0);B.Core.Bp._Init.call(this.BT={K:this},0);B.Core.Bp._Init.call(this.B9={K:this
},0);this.__proto__=D.Ff;var A;this.N(EI);this.Hp.N(O0);this.Cd.N(MF);this.Cd.W(
false);this.DP.B6(DT);this.DP.B5(O1);this.DP.B4(O2);this.DP.B3(O3);this.CL.N(EI);
this.CL.W(false);this.Cm.N(MF);this.DM.B6(O4);this.DM.B5(O5);this.DM.B4(O6);this.
DM.B3(O7);this.AR.N(EI);this.BV.N(EI);this.BV.Ba(0);this.Cg.N(MG);this.Cg.Jw(1);
this.Cg.CT(B.jV);this.BF.N(O8);this.BF.CT(O9);this.BE.N(O_);this.BE.CT(Mz);this.
BL.N(O$);this.BL.Jw(1);this.BL.CT(MA);this.BM.N(Pa);this.BM.Jw(2);this.BM.CT(MB);
this.A6.N(Pb);this.CR.HG(0x1C);this.CR.N(Pc);this.CR.Co(MC);this.E6.GR(1);this.Bp.
B6(Pd);this.Bp.B5(Pe);this.Bp.B4(Pf);this.Bp.B3(Pg);this.Et.GR(1);this.Et.K2(1000
);this.Clock.N(Ph);this.BS.N(Pi);this.BS.Jw(3);this.BS.CT(Pj);this.B2.N(MH);this.
B2.Ba(255);this.Ct.N(Pk);this.Ct.A1(0xFF000000);this.Ct.N_(true);this.Ct.W(true);
this.Fw.GR(1);this.Hn.GR(1);this.Fx.N(Pl);this.DK.HG(0x1C);this.DK.N(Pm);this.DK.
Co(Pn);this.Eu.B6(Po);this.Eu.B5(Pp);this.Eu.B4(Pq);this.Eu.B3(Pr);this.Fv.GR(1);
this.De.GR(1);this.De.K2(800);this.De.K4(0);this.De.HL=0xFF000000;this.De.HK=0x00000000;
this.Bu.N(Ps);this.Bu.W(false);this.Dv.N(Pt);this.C6.B6(Pu);this.C6.B5(Pv);this.
C6.B4(Pw);this.C6.B3(Px);this.Db.B6(Py);this.Db.B5(Pz);this.Db.B4(PA);this.Db.B3(
PB);this.BT.B6(PC);this.BT.B5(PD);this.BT.B4(PE);this.BT.B3(PF);this.B9.B6(PG);this.
B9.B5(PH);this.B9.B4(PJ);this.B9.B3(PK);this.T(this.Hp,0);this.T(this.Cd,0);this.
T(this.DP,0);this.T(this.CL,0);this.T(this.Cm,0);this.T(this.DM,0);this.T(this.AR
,0);this.T(this.BV,0);this.T(this.Cg,0);this.T(this.BF,0);this.T(this.BE,0);this.
T(this.BL,0);this.T(this.BM,0);this.T(this.A6,0);this.T(this.CR,0);this.T(this.Bp
,0);this.T(this.Clock,0);this.T(this.BS,0);this.T(this.B2,0);this.T(this.Ct,0);this.
T(this.Fx,0);this.T(this.DK,0);this.T(this.Eu,0);this.T(this.Bu,0);this.T(this.Dv
,0);this.T(this.C6,0);this.T(this.Db,0);this.T(this.BT,0);this.T(this.B9,0);this.
DP.BK=[this,this.ON];this.DM.BK=[this,this.NX];this.AR.AN(B.aaL(D.FZ));this.BV.AN(
B.aaL(D.FZ));this.Cg.Ed(null);this.Cg.Mn(null);this.Cg.DO(B._GetAutoObject(D.HH)
);this.BF.Ed([A=B._GetAutoObject(D.Device),A.Mk,A.K6]);this.BF.DO(B._GetAutoObject(
D.In));this.BE.Ed([A=B._GetAutoObject(D.Device),A.Hs,A.E_]);this.BE.DO(B._GetAutoObject(
D.Ii));this.BL.Ed([A=B._GetAutoObject(D.Device),A.Hs,A.E_]);this.BL.DO(B._GetAutoObject(
D.Ik));this.BM.Ed([A=B._GetAutoObject(D.Device),A.Hs,A.E_]);this.BM.DO(B._GetAutoObject(
D.Il));this.Device=B._GetAutoObject(D.Device);this.A6.Mq([A=B._GetAutoObject(D.Device
),A.KZ,A.FE]);this.A6.Mp([A=B._GetAutoObject(D.Device),A.KX,A.K1]);this.CR.FD(B.
aaL(D.Jj));this.E6.Ic=[this,this.Qa];this.E6.Y=[A=this.BV,A.Hr,A.Ba];this.HJ.KW=[
this,this.Qx];this.HJ.Ed([A=B._GetAutoObject(D.Device),A.Hs,A.E_]);this.Bp.BK=[this
,this.NU];this.Et.Ic=null;this.Et.Y=[A=this.CL,A.Hr,A.JF];this.BS.Ed([A=B._GetAutoObject(
D.Device),A.Hs,A.E_]);this.BS.E9=[this,this.NO];this.BS.DO(B._GetAutoObject(D.Ij
));this.Fw.Y=[A=this.Cm,A.Hr,A.JF];this.Hn.Y=[A=this.A6,A.Hr,A.JF];this.Fx.AN(B.
aaL(D.JA));this.DK.FD(B.aaL(D.Jj));this.Eu.BK=[this,this.OM];this.Fv.Y=[A=this.Cd
,A.Hr,A.JF];this.De.Y=[A=this.Ct,A.KY,A.A1];this.Dv.AN(B.aaL(D.Dv));this.C6.Du=null;
this.C6.BK=[this,this.OO];this.Db.BK=[this,this.OL];this.BT.BK=[this,this.NL];this.
B9.BK=[this,this.NM];},_Done:function(){this.__proto__=B.Core.P;this.Hp._Done();
this.Cd._Done();this.DP._Done();this.CL._Done();this.Cm._Done();this.DM._Done();
this.AR._Done();this.BV._Done();this.Cg._Done();this.BF._Done();this.BE._Done();
this.BL._Done();this.BM._Done();this.A6._Done();this.CR._Done();this.E6._Done();
this.HJ._Done();this.Bp._Done();this.Et._Done();this.Clock._Done();this.BS._Done(
);this.B2._Done();this.Ct._Done();this.Fw._Done();this.Hn._Done();this.Fx._Done(
);this.DK._Done();this.Eu._Done();this.Fv._Done();this.De._Done();this.Bu._Done(
);this.Dv._Done();this.C6._Done();this.Db._Done();this.BT._Done();this.B9._Done(
);B.Core.P._Done.call(this);},_ReInit:function(){B.Core.P._ReInit.call(this);this.
Hp._ReInit();this.Cd._ReInit();this.DP._ReInit();this.CL._ReInit();this.Cm._ReInit(
);this.DM._ReInit();this.AR._ReInit();this.BV._ReInit();this.Cg._ReInit();this.BF.
_ReInit();this.BE._ReInit();this.BL._ReInit();this.BM._ReInit();this.A6._ReInit(
);this.CR._ReInit();this.E6._ReInit();this.HJ._ReInit();this.Bp._ReInit();this.Et.
_ReInit();this.Clock._ReInit();this.BS._ReInit();this.B2._ReInit();this.Ct._ReInit(
);this.Fw._ReInit();this.Hn._ReInit();this.Fx._ReInit();this.DK._ReInit();this.Eu.
_ReInit();this.Fv._ReInit();this.De._ReInit();this.Bu._ReInit();this.Dv._ReInit(
);this.C6._ReInit();this.Db._ReInit();this.BT._ReInit();this.B9._ReInit();},_Mark:
function(E){var A;B.Core.P._Mark.call(this,E);if((A=this.Device)&&(A._cycle!=E))
A._Mark(A._cycle=E);if((A=this.Hp)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Cd).
_cycle!=E)A._Mark(A._cycle=E);if((A=this.DP)._cycle!=E)A._Mark(A._cycle=E);if((A=
this.CL)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Cm)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.DM)._cycle!=E)A._Mark(A._cycle=E);if((A=this.AR)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.BV)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Cg)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.BF)._cycle!=E)A._Mark(A._cycle=E);if((A=this.BE
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.BL)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.BM)._cycle!=E)A._Mark(A._cycle=E);if((A=this.A6)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.CR)._cycle!=E)A._Mark(A._cycle=E);if((A=this.E6)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.HJ)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Bp)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.Et)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Clock
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.BS)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.B2)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Ct)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.Fw)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Hn)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.Fx)._cycle!=E)A._Mark(A._cycle=E);if((A=this.DK)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.Eu)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Fv
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.De)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.Bu)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Dv)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.C6)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Db)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.BT)._cycle!=E)A._Mark(A._cycle=E);if((A=this.B9)._cycle!=
E)A._Mark(A._cycle=E);},_className:"Thermostat::Thermostat"};D.FZ={_class:function(
){return B.acg.Q;},0:{FileName:"./res/ThermostatBackgroundDay.png",Format:B._PIXEL_FORMAT_NATIVE
,NoOfFrames:1,FrameSize:[800,480],FrameDelay:0,_this:null}};D.Kn={_class:function(
){return B.acg.Q;},0:{FileName:"./res/ThermostatBackgroundNight.png",Format:B._PIXEL_FORMAT_NATIVE
,NoOfFrames:1,FrameSize:[800,480],FrameDelay:0,_this:null}};D.Jj={_class:function(
){return B.acg.BI;},0:{Data:function(){return B.acn;},Cache:[],_this:null}};D.Km={
_class:function(){return B.acg.Q;},0:{FileName:"./res/ThermostatBackgroundDefault.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[4,480],FrameDelay:0,_this:
null}};D.HH={_Init:function(){B.ach.FJ._Init.call(this,0);this.HC(0xFFFFFFFF);this.
HE(0xFFFFFFFF);this.HD(0xFFFFFFFF);this.Hy(0xFFFFFFFF);this.HA(0xFFFFFFFF);this.
Hz(0xFFFFFFFF);this.If(50);this.Hx(0x11);this.HF(B.aaL(D.CN));this.HB(B.aaL(D.CN
));this.Ie(0x34);this.GN(1);this.GQ(1);this.GP(1);this.GO(1);this.GJ(B.aaL(D.EA)
);this.GM(B.aaL(D.EA));this.GL(B.aaL(D.EA));this.GK(B.aaL(D.EA));this.Ob(0xFFFFFFFF
);this.GF(0);this.GI(0);this.GH(0);this.GG(0);this.GB(B.aaL(D.EA));this.GE(B.aaL(
D.EA));this.GD(B.aaL(D.EA));this.GC(B.aaL(D.EA));this.E$(AS);this.Fa(Ca);},_ReInit:
function(){},_variants:function(){return this;},_this:null};D.EA={_class:function(
){return B.acg.Q;},0:{FileName:"./res/ThermostatPowerOffIcon.png",Format:B._PIXEL_FORMAT_NATIVE
,NoOfFrames:1,FrameSize:[25,26],FrameDelay:0,_this:null}};D.CL={AR:null,Text:null
,CK:null,Gs:null,Dc:null,_Init:function(aArg){B.Core.P._Init.call(this,aArg);B.acf.
Fc._Init.call(this.AR={K:this},0);B.acf.Text._Init.call(this.Text={K:this},0);B.
aci.CK._Init.call(this.CK={K:this},0);B.acf.AX._Init.call(this.Gs={K:this},0);B.
acf.AX._Init.call(this.Dc={K:this},0);this.__proto__=D.CL;var A;this.N(EI);this.
AR.N(EI);this.AR.Id(0xFFD7D7D7);this.AR.GA(0xFFDDDDDD);this.Text.N(PL);this.Text.
Co(ME);this.CK.Od(500);this.CK.K4(500);this.CK.R(true);this.CK.HL=D.F_;this.CK.HK=
D.Ce;this.Gs.N(PM);this.Dc.N(PN);this.T(this.AR,0);this.T(this.Text,0);this.T(this.
Gs,0);this.T(this.Dc,0);this.Text.FD(B.aaL(B.acg.Kx));this.CK.Ic=null;this.CK.Y=[
A=this.Text,A.KY,A.A1];this.Gs.AN(B.aaL(D.KE));this.Dc.AN(B.aaL(D.KC));},_Done:function(
){this.__proto__=B.Core.P;this.AR._Done();this.Text._Done();this.CK._Done();this.
Gs._Done();this.Dc._Done();B.Core.P._Done.call(this);},_ReInit:function(){B.Core.
P._ReInit.call(this);this.AR._ReInit();this.Text._ReInit();this.CK._ReInit();this.
Gs._ReInit();this.Dc._ReInit();},_Mark:function(E){var A;B.Core.P._Mark.call(this
,E);if((A=this.AR)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Text)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.CK)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Gs)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.Dc)._cycle!=E)A._Mark(A._cycle=E);},_className:
"Thermostat::ExitScreen"};D.Ko={_class:function(){return B.acg.Q;},0:{FileName:"./res/ThermostatBackgroundVacation.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[800,480],FrameDelay:0,_this:
null}};D.Ll=0xFF4F8BFF;D.KE={_class:function(){return B.acg.Q;},0:{FileName:"./res/ThermostatHouseSplashScreen.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[360,360],FrameDelay:0,_this:
null}};D.KC={_class:function(){return B.acg.Q;},0:{FileName:"./res/ThermostatHeatSplashScreen.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[120,120],FrameDelay:0,_this:
null}};D.Cm={AB:null,A6:null,DL:null,FI:null,_Init:function(aArg){B.Core.P._Init.
call(this,aArg);B.acf.AX._Init.call(this.AB={K:this},0);D.A6._Init.call(this.A6={
K:this},0);B.acf.AX._Init.call(this.DL={K:this},0);B.ach.EB._Init.call(this.FI={
K:this},0);this.__proto__=D.Cm;var A;this.N(EI);this.AB.N(EI);this.A6.N(PO);this.
DL.N(PP);this.FI.N(MG);this.FI.CT(B.jV);this.T(this.AB,0);this.T(this.A6,0);this.
T(this.DL,0);this.T(this.FI,0);this.AB.AN(B.aaL(D.FZ));this.A6.Mq([A=B._GetAutoObject(
D.Device),A.KZ,A.FE]);this.A6.Mp([A=B._GetAutoObject(D.Device),A.KX,A.K1]);this.
DL.AN(B.aaL(D.DL));this.FI.DO(B._GetAutoObject(D.HH));},_Done:function(){this.__proto__=
B.Core.P;this.AB._Done();this.A6._Done();this.DL._Done();this.FI._Done();B.Core.
P._Done.call(this);},_ReInit:function(){B.Core.P._ReInit.call(this);this.AB._ReInit(
);this.A6._ReInit();this.DL._ReInit();this.FI._ReInit();},_Mark:function(E){var A;
B.Core.P._Mark.call(this,E);if((A=this.AB)._cycle!=E)A._Mark(A._cycle=E);if((A=this.
A6)._cycle!=E)A._Mark(A._cycle=E);if((A=this.DL)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.FI)._cycle!=E)A._Mark(A._cycle=E);},_className:"Thermostat::DefaultThermostat"
};D.Ij={_Init:function(){B.ach.FJ._Init.call(this,0);this.HC(0xFFFFFFFF);this.HE(
0xFFFFFFFF);this.HD(D.Ce);this.Hy(0xFFFFFFFF);this.HA(0xFFFFFFFF);this.Hz(D.Ce);
this.If(50);this.Hx(0x11);this.HF(B.aaL(D.CN));this.HB(B.aaL(D.CN));this.Ie(0x34
);this.GN(1);this.GQ(1);this.GP(1);this.GO(1);this.GJ(null);this.GM(null);this.GL(
null);this.GK(null);this.GF(0);this.GI(0);this.GH(0);this.GG(0);this.GB(null);this.
GE(null);this.GD(null);this.GC(null);this.E$(AS);this.Fa(Ca);},_ReInit:function(
){},_variants:function(){return this;},_this:null};D.DL={_class:function(){return B.
acg.Q;},0:{FileName:"./res/ThermostatGoBackArrow.png",Format:B._PIXEL_FORMAT_NATIVE
,NoOfFrames:1,FrameSize:[60,60],FrameDelay:0,_this:null}};D.B2={AR:null,DN:null,
Gp:null,_Init:function(aArg){B.Core.P._Init.call(this,aArg);B.acf.Fc._Init.call(
this.AR={K:this},0);B.acf.AX._Init.call(this.DN={K:this},0);B.acf.AX._Init.call(
this.Gp={K:this},0);this.__proto__=D.B2;this.N(Lx);this.AR.N(Lx);this.AR.A1(0x00FFFFFF
);this.DN.N(Lx);this.DN.A1(0xFFFFFFFF);this.Gp.N(PQ);this.T(this.AR,0);this.T(this.
DN,0);this.T(this.Gp,0);this.DN.AN(B.aaL(D.DN));this.Gp.AN(B.aaL(D.KB));},_Done:
function(){this.__proto__=B.Core.P;this.AR._Done();this.DN._Done();this.Gp._Done(
);B.Core.P._Done.call(this);},_ReInit:function(){B.Core.P._ReInit.call(this);this.
AR._ReInit();this.DN._ReInit();this.Gp._ReInit();},_Mark:function(E){var A;B.Core.
P._Mark.call(this,E);if((A=this.AR)._cycle!=E)A._Mark(A._cycle=E);if((A=this.DN).
_cycle!=E)A._Mark(A._cycle=E);if((A=this.Gp)._cycle!=E)A._Mark(A._cycle=E);},_className:
"Thermostat::Logo"};D.DN={_class:function(){return B.acg.Q;},0:{FileName:"./res/ThermostatHouseImage.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[100,100],FrameDelay:0,_this:
null}};D.KB={_class:function(){return B.acg.Q;},0:{FileName:"./res/ThermostatHeatHandsSymbol.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};D.Cd={AB:null,DS:null,Gn:null,Gm:null,Go:null,B2:null,_Init:function(aArg
){B.Core.P._Init.call(this,aArg);B.acf.AX._Init.call(this.AB={K:this},0);B.ach.DS.
_Init.call(this.DS={K:this},0);B.acf.AX._Init.call(this.Gn={K:this},0);B.acf.AX.
_Init.call(this.Gm={K:this},0);B.acf.AX._Init.call(this.Go={K:this},0);D.B2._Init.
call(this.B2={K:this},0);this.__proto__=D.Cd;var A;this.N(EI);this.AB.N(EI);this.
DS.N(PR);this.Gn.N(PS);this.Gm.N(PT);this.Go.N(PU);this.B2.N(MH);this.T(this.AB,
0);this.T(this.DS,0);this.T(this.Gn,0);this.T(this.Gm,0);this.T(this.Go,0);this.
T(this.B2,0);this.AB.AN(B.aaL(D.FZ));this.DS.Ed([A=B._GetAutoObject(D.Device),A.
Mj,A.K3]);this.DS.DO(B._GetAutoObject(D.Fh));this.Gn.AN(B.aaL(D.K$));this.Gm.AN(
B.aaL(D.JA));this.Go.AN(B.aaL(D.DL));},_Done:function(){this.__proto__=B.Core.P;
this.AB._Done();this.DS._Done();this.Gn._Done();this.Gm._Done();this.Go._Done();
this.B2._Done();B.Core.P._Done.call(this);},_ReInit:function(){B.Core.P._ReInit.
call(this);this.AB._ReInit();this.DS._ReInit();this.Gn._ReInit();this.Gm._ReInit(
);this.Go._ReInit();this.B2._ReInit();},_Mark:function(E){var A;B.Core.P._Mark.call(
this,E);if((A=this.AB)._cycle!=E)A._Mark(A._cycle=E);if((A=this.DS)._cycle!=E)A.
_Mark(A._cycle=E);if((A=this.Gn)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Gm)._cycle
!=E)A._Mark(A._cycle=E);if((A=this.Go)._cycle!=E)A._Mark(A._cycle=E);if((A=this.
B2)._cycle!=E)A._Mark(A._cycle=E);},_className:"Thermostat::FanMode"};D.JA={_class:
function(){return B.acg.Q;},0:{FileName:"./res/ThermostatSymbolFanBig.png",Format:
B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[60,65],FrameDelay:0,_this:null}};
D.K$={_class:function(){return B.acg.Q;},0:{FileName:"./res/ThermostatSymbolFanSmall.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,43],FrameDelay:0,_this:
null}};D.Dv={_class:function(){return B.acg.Q;},0:{FileName:"./res/ThermostatSettingsIcon.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};D.Bu={AR:null,ED:null,BT:null,Cy:null,B9:null,Fu:null,_Init:function(aArg
){B.Core.P._Init.call(this,aArg);B.acf.Fc._Init.call(this.AR={K:this},0);B.acf.Text.
_Init.call(this.ED={K:this},0);B.ach.EB._Init.call(this.BT={K:this},0);B.ach.FJ.
_Init.call(this.Cy={K:this},0);B.ach.EB._Init.call(this.B9={K:this},0);B.acf.Text.
_Init.call(this.Fu={K:this},0);this.__proto__=D.Bu;this.N(MI);this.AR.N(MI);this.
AR.A1(0x93737373);this.ED.N(PV);this.ED.Co(MD);this.BT.N(PW);this.BT.CT(PX);this.
Cy.HC(D.Ce);this.Cy.HE(D.Ce);this.Cy.Of(D.Ce);this.Cy.HD(D.Ce);this.Cy.Hy(D.Ce);
this.Cy.HA(D.Ce);this.Cy.Oe(D.Ce);this.Cy.Hz(D.Ce);this.Cy.Hx(0x11);this.B9.N(PY
);this.B9.CT(PZ);this.Fu.N(P0);this.Fu.Co(P1);this.T(this.AR,0);this.T(this.ED,0
);this.T(this.BT,0);this.T(this.B9,0);this.T(this.Fu,0);this.ED.FD(B.aaL(B.acg.Ky
));this.BT.E9=null;this.BT.Mn(null);this.BT.DO(this.Cy);this.Cy.HF(B.aaL(D.CN));
this.Cy.HB(B.aaL(D.CN));this.B9.E9=null;this.B9.DO(this.Cy);this.Fu.FD(B.aaL(D.CN
));},_Done:function(){this.__proto__=B.Core.P;this.AR._Done();this.ED._Done();this.
BT._Done();this.Cy._Done();this.B9._Done();this.Fu._Done();B.Core.P._Done.call(this
);},_ReInit:function(){B.Core.P._ReInit.call(this);this.AR._ReInit();this.ED._ReInit(
);this.BT._ReInit();this.Cy._ReInit();this.B9._ReInit();this.Fu._ReInit();},_Mark:
function(E){var A;B.Core.P._Mark.call(this,E);if((A=this.AR)._cycle!=E)A._Mark(A.
_cycle=E);if((A=this.ED)._cycle!=E)A._Mark(A._cycle=E);if((A=this.BT)._cycle!=E)
A._Mark(A._cycle=E);if((A=this.Cy)._cycle!=E)A._Mark(A._cycle=E);if((A=this.B9).
_cycle!=E)A._Mark(A._cycle=E);if((A=this.Fu)._cycle!=E)A._Mark(A._cycle=E);},_className:
"Thermostat::Settings"};
D._Init=function(){D.DI.__proto__=B.acj.DI;D.A6.__proto__=B.Core.P;D.Ff.__proto__=
B.Core.P;D.CL.__proto__=B.Core.P;D.Cm.__proto__=B.Core.P;D.B2.__proto__=B.Core.P;
D.Cd.__proto__=B.Core.P;D.Bu.__proto__=B.Core.P;};D._ReInit=function(){var A;if((
A=D.In._this))A._ReInit(),D.In._ReInit.call(A);if((A=D.Ii._this))A._ReInit(),D.Ii.
_ReInit.call(A);if((A=D.Ik._this))A._ReInit(),D.Ik._ReInit.call(A);if((A=D.Il._this
))A._ReInit(),D.Il._ReInit.call(A);if((A=D.Fh._this))A._ReInit(),D.Fh._ReInit.call(
A);if((A=D.Device._this))A._ReInit(),D.Device._ReInit.call(A);if((A=D.HH._this))
A._ReInit(),D.HH._ReInit.call(A);if((A=D.Ij._this))A._ReInit(),D.Ij._ReInit.call(
A);};D.Ci=function(E){var A;if((A=D.In._this)&&(A._cycle!=E))A._Done(D.In._this=
null);if((A=D.EC[0]._this)&&(A._cycle!=E))A._Done(D.EC[0]._this=null);if((A=D.Eq[
0]._this)&&(A._cycle!=E))A._Done(D.Eq[0]._this=null);if((A=D.Er[0]._this)&&(A._cycle
!=E))A._Done(D.Er[0]._this=null);if((A=D.Es[0]._this)&&(A._cycle!=E))A._Done(D.Es[
0]._this=null);if((A=D.Ii._this)&&(A._cycle!=E))A._Done(D.Ii._this=null);if((A=D.
Ik._this)&&(A._cycle!=E))A._Done(D.Ik._this=null);if((A=D.Il._this)&&(A._cycle!=
E))A._Done(D.Il._this=null);if((A=D.CN[0]._this)&&(A._cycle!=E))A._Done(D.CN[0].
_this=null);if((A=D.EE[0]._this)&&(A._cycle!=E))A._Done(D.EE[0]._this=null);if((
A=D.Fh._this)&&(A._cycle!=E))A._Done(D.Fh._this=null);if((A=D.Device._this)&&(A.
_cycle!=E))A._Done(D.Device._this=null);if((A=D.Ln[0]._this)&&(A._cycle!=E))A._Done(
D.Ln[0]._this=null);if((A=D.Kp[0]._this)&&(A._cycle!=E))A._Done(D.Kp[0]._this=null
);if((A=D.Cv[0]._this)&&(A._cycle!=E))A._Done(D.Cv[0]._this=null);if((A=D.La[0].
_this)&&(A._cycle!=E))A._Done(D.La[0]._this=null);if((A=D.Kz[0]._this)&&(A._cycle
!=E))A._Done(D.Kz[0]._this=null);if((A=D.FZ[0]._this)&&(A._cycle!=E))A._Done(D.FZ[
0]._this=null);if((A=D.Kn[0]._this)&&(A._cycle!=E))A._Done(D.Kn[0]._this=null);if((
A=D.Jj[0]._this)&&(A._cycle!=E))A._Done(D.Jj[0]._this=null);if((A=D.Km[0]._this)&&(
A._cycle!=E))A._Done(D.Km[0]._this=null);if((A=D.HH._this)&&(A._cycle!=E))A._Done(
D.HH._this=null);if((A=D.EA[0]._this)&&(A._cycle!=E))A._Done(D.EA[0]._this=null);
if((A=D.Ko[0]._this)&&(A._cycle!=E))A._Done(D.Ko[0]._this=null);if((A=D.KE[0]._this
)&&(A._cycle!=E))A._Done(D.KE[0]._this=null);if((A=D.KC[0]._this)&&(A._cycle!=E)
)A._Done(D.KC[0]._this=null);if((A=D.Ij._this)&&(A._cycle!=E))A._Done(D.Ij._this=
null);if((A=D.DL[0]._this)&&(A._cycle!=E))A._Done(D.DL[0]._this=null);if((A=D.DN[
0]._this)&&(A._cycle!=E))A._Done(D.DN[0]._this=null);if((A=D.KB[0]._this)&&(A._cycle
!=E))A._Done(D.KB[0]._this=null);if((A=D.JA[0]._this)&&(A._cycle!=E))A._Done(D.JA[
0]._this=null);if((A=D.K$[0]._this)&&(A._cycle!=E))A._Done(D.K$[0]._this=null);if((
A=D.Dv[0]._this)&&(A._cycle!=E))A._Done(D.Dv[0]._this=null);};return D;})();

/* Embedded Wizard */