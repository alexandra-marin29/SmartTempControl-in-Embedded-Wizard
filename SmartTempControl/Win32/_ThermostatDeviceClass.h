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

#ifndef _ThermostatDeviceClass_H
#define _ThermostatDeviceClass_H

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

#include "_CoreTimer.h"
#include "_TemplatesDeviceClass.h"

/* Forward declaration of the class Thermostat::DeviceClass */
#ifndef _ThermostatDeviceClass_
  EW_DECLARE_CLASS( ThermostatDeviceClass )
#define _ThermostatDeviceClass_
#endif


/* Deklaration of class : 'Thermostat::DeviceClass' */
EW_DEFINE_FIELDS( ThermostatDeviceClass, TemplatesDeviceClass )
  EW_OBJECT  ( ChangeTempTimer, CoreTimer )
  EW_PROPERTY( ActualTemp,      XInt32 )
  EW_PROPERTY( NominalTemp,     XInt32 )
  EW_PROPERTY( FanSpeed,        XInt32 )
  EW_PROPERTY( SettingNo,       XInt32 )
  EW_PROPERTY( SwingMode,       XBool )
EW_END_OF_FIELDS( ThermostatDeviceClass )

/* Virtual Method Table (VMT) for the class : 'Thermostat::DeviceClass' */
EW_DEFINE_METHODS( ThermostatDeviceClass, TemplatesDeviceClass )
EW_END_OF_METHODS( ThermostatDeviceClass )

/* This method is intended to be called by the device to notify the GUI application 
   about an alternation of the property 'ActualTemp'. */
void ThermostatDeviceClass_UpdateActualTemp( ThermostatDeviceClass _this, XInt32 
  aNewValue );

/* Wrapper function for the non virtual method : 'Thermostat::DeviceClass.UpdateActualTemp()' */
void ThermostatDeviceClass__UpdateActualTemp( void* _this, XInt32 aNewValue );

/* The following define announces the presence of the method Thermostat::DeviceClass.UpdateActualTemp(). */
#define _ThermostatDeviceClass__UpdateActualTemp_

/* 'C' function for method : 'Thermostat::DeviceClass.OnSetNominalTemp()' */
void ThermostatDeviceClass_OnSetNominalTemp( ThermostatDeviceClass _this, XInt32 
  value );

/* 'C' function for method : 'Thermostat::DeviceClass.OnSetFanSpeed()' */
void ThermostatDeviceClass_OnSetFanSpeed( ThermostatDeviceClass _this, XInt32 value );

/* 'C' function for method : 'Thermostat::DeviceClass.OnSetSwingMode()' */
void ThermostatDeviceClass_OnSetSwingMode( ThermostatDeviceClass _this, XBool value );

/* 'C' function for method : 'Thermostat::DeviceClass.ChangeActualTemp()' */
void ThermostatDeviceClass_ChangeActualTemp( ThermostatDeviceClass _this, XObject 
  sender );

/* 'C' function for method : 'Thermostat::DeviceClass.OnSetSettingNo()' */
void ThermostatDeviceClass_OnSetSettingNo( ThermostatDeviceClass _this, XInt32 value );

/* Default onget method for the property 'ActualTemp' */
XInt32 ThermostatDeviceClass_OnGetActualTemp( ThermostatDeviceClass _this );

/* Default onset method for the property 'ActualTemp' */
void ThermostatDeviceClass_OnSetActualTemp( ThermostatDeviceClass _this, XInt32 
  value );

/* Default onget method for the property 'NominalTemp' */
XInt32 ThermostatDeviceClass_OnGetNominalTemp( ThermostatDeviceClass _this );

/* Default onget method for the property 'FanSpeed' */
XInt32 ThermostatDeviceClass_OnGetFanSpeed( ThermostatDeviceClass _this );

/* Default onget method for the property 'SwingMode' */
XBool ThermostatDeviceClass_OnGetSwingMode( ThermostatDeviceClass _this );

/* Default onget method for the property 'SettingNo' */
XInt32 ThermostatDeviceClass_OnGetSettingNo( ThermostatDeviceClass _this );

#ifdef __cplusplus
  }
#endif

#endif /* _ThermostatDeviceClass_H */

/* Embedded Wizard */