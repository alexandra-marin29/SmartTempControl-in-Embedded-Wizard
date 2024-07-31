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
* Profile  : Win32
* Platform : Windows.Software.RGBA8888
*
*******************************************************************************/

#ifndef Thermostat_H
#define Thermostat_H

#ifdef __cplusplus
  extern "C"
  {
#endif

#include "ewrte.h"
#if ( EW_RTE_VERSION >> 16 ) != 13
  #error Wrong version of Embedded Wizard Runtime Environment.
#endif

#include "ewgfx.h"
#if ( EW_GFX_VERSION >> 16 ) != 13
  #error Wrong version of Embedded Wizard Graphics Engine.
#endif

#include "_ThermostatDefaultThermostat.h"
#include "_ThermostatDeviceClass.h"
#include "_ThermostatExitScreen.h"
#include "_ThermostatFanMode.h"
#include "_ThermostatLogo.h"
#include "_ThermostatTemperatureController.h"
#include "_ThermostatThermostat.h"

/* Bitmap resource : 'Thermostat::SwingSwitch' */
EW_DECLARE_BITMAP_RES( ThermostatSwingSwitch )

/* Bitmap resource : 'Thermostat::ButtonDay' */
EW_DECLARE_BITMAP_RES( ThermostatButtonDay )

/* Bitmap resource : 'Thermostat::ButtonNight' */
EW_DECLARE_BITMAP_RES( ThermostatButtonNight )

/* Bitmap resource : 'Thermostat::ButtonVacation' */
EW_DECLARE_BITMAP_RES( ThermostatButtonVacation )

/* Font resources used for the different widgets. If you want to change the fonts 
   within your project, just create a variant of these font resources and define 
   the attributes of the font resources according your design ideas. */
EW_DECLARE_FONT_RES( ThermostatFontL )

/* Bitmap resource : 'Thermostat::VertBar' */
EW_DECLARE_BITMAP_RES( ThermostatVertBar )

/* Bitmap resource : 'Thermostat::Wheels' */
EW_DECLARE_BITMAP_RES( ThermostatWheels )

/* Bitmap resource : 'Thermostat::Controller' */
EW_DECLARE_BITMAP_RES( ThermostatController )

/* Bitmap resource : 'Thermostat::Needle' */
EW_DECLARE_BITMAP_RES( ThermostatNeedle )

/* Bitmap resource : 'Thermostat::SymbolHeadCool' */
EW_DECLARE_BITMAP_RES( ThermostatSymbolHeadCool )

/* Font resources used for the different widgets. If you want to change the fonts 
   within your project, just create a variant of these font resources and define 
   the attributes of the font resources according your design ideas. */
EW_DECLARE_FONT_RES( ThermostatFontXXL )

/* Bitmap resource : 'Thermostat::BackgroundDay' */
EW_DECLARE_BITMAP_RES( ThermostatBackgroundDay )

/* Bitmap resource : 'Thermostat::BackgroundNight' */
EW_DECLARE_BITMAP_RES( ThermostatBackgroundNight )

/* Font resources used for the different widgets. If you want to change the fonts 
   within your project, just create a variant of these font resources and define 
   the attributes of the font resources according your design ideas. */
EW_DECLARE_FONT_RES( ThermostatFontM )

/* Bitmap resource : 'Thermostat::BackgroundDefault' */
EW_DECLARE_BITMAP_RES( ThermostatBackgroundDefault )

/* Bitmap resource : 'Thermostat::PowerOffIcon' */
EW_DECLARE_BITMAP_RES( ThermostatPowerOffIcon )

/* Bitmap resource : 'Thermostat::BackgroundVacation' */
EW_DECLARE_BITMAP_RES( ThermostatBackgroundVacation )

/* Bitmap resource : 'Thermostat::HouseSplashScreen' */
EW_DECLARE_BITMAP_RES( ThermostatHouseSplashScreen )

/* Bitmap resource : 'Thermostat::HeatSplashScreen' */
EW_DECLARE_BITMAP_RES( ThermostatHeatSplashScreen )

/* Bitmap resource : 'Thermostat::GoBackArrow' */
EW_DECLARE_BITMAP_RES( ThermostatGoBackArrow )

/* Bitmap resource : 'Thermostat::HouseImage' */
EW_DECLARE_BITMAP_RES( ThermostatHouseImage )

/* Bitmap resource : 'Thermostat::HeatHandsSymbol' */
EW_DECLARE_BITMAP_RES( ThermostatHeatHandsSymbol )

/* Bitmap resource : 'Thermostat::SymbolFanBig' */
EW_DECLARE_BITMAP_RES( ThermostatSymbolFanBig )

/* Bitmap resource : 'Thermostat::SymbolFanSmall' */
EW_DECLARE_BITMAP_RES( ThermostatSymbolFanSmall )

/* Forward declaration of the class WidgetSet::RadioButtonConfig */
#ifndef _WidgetSetRadioButtonConfig_
  EW_DECLARE_CLASS( WidgetSetRadioButtonConfig )
#define _WidgetSetRadioButtonConfig_
#endif

/* Forward declaration of the class WidgetSet::ToggleButtonConfig */
#ifndef _WidgetSetToggleButtonConfig_
  EW_DECLARE_CLASS( WidgetSetToggleButtonConfig )
#define _WidgetSetToggleButtonConfig_
#endif

/* Forward declaration of the class WidgetSet::VerticalSliderConfig */
#ifndef _WidgetSetVerticalSliderConfig_
  EW_DECLARE_CLASS( WidgetSetVerticalSliderConfig )
#define _WidgetSetVerticalSliderConfig_
#endif

/* User defined auto object: 'Thermostat::SwingSwitchConfig' */
EW_DECLARE_AUTOOBJECT( ThermostatSwingSwitchConfig, WidgetSetToggleButtonConfig )

/* User defined auto object: 'Thermostat::RadioButtonDayConfig' */
EW_DECLARE_AUTOOBJECT( ThermostatRadioButtonDayConfig, WidgetSetRadioButtonConfig )

/* User defined auto object: 'Thermostat::RadioButtonNightConfig' */
EW_DECLARE_AUTOOBJECT( ThermostatRadioButtonNightConfig, WidgetSetRadioButtonConfig )

/* User defined auto object: 'Thermostat::RadioButtonVacationConfig' */
EW_DECLARE_AUTOOBJECT( ThermostatRadioButtonVacationConfig, WidgetSetRadioButtonConfig )

/* User defined auto object: 'Thermostat::VerticalSliderConfig' */
EW_DECLARE_AUTOOBJECT( ThermostatVerticalSliderConfig, WidgetSetVerticalSliderConfig )

/* User defined auto object: 'Thermostat::Device' */
EW_DECLARE_AUTOOBJECT( ThermostatDevice, ThermostatDeviceClass )

/* User defined constant: 'Thermostat::Cold' */
extern const XColor ThermostatCold;

/* User defined constant: 'Thermostat::Hot' */
extern const XColor ThermostatHot;

/* User defined auto object: 'Thermostat::RadioButtonPowerOff' */
EW_DECLARE_AUTOOBJECT( ThermostatRadioButtonPowerOff, WidgetSetRadioButtonConfig )

/* User defined constant: 'Thermostat::Vac' */
extern const XColor ThermostatVac;

/* User defined auto object: 'Thermostat::RadioButtonDefaultConfig' */
EW_DECLARE_AUTOOBJECT( ThermostatRadioButtonDefaultConfig, WidgetSetRadioButtonConfig )

#ifdef __cplusplus
  }
#endif

#endif /* Thermostat_H */

/* Embedded Wizard */
