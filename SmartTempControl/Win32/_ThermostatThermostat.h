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

#ifndef _ThermostatThermostat_H
#define _ThermostatThermostat_H

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

#include "_ClockClock.h"
#include "_CoreGroup.h"
#include "_CorePropertyObserver.h"
#include "_CoreSimpleTouchHandler.h"
#include "_EffectsInt32Effect.h"
#include "_ThermostatDefaultThermostat.h"
#include "_ThermostatExitScreen.h"
#include "_ThermostatFanMode.h"
#include "_ThermostatLogo.h"
#include "_ThermostatTemperatureController.h"
#include "_ViewsImage.h"
#include "_ViewsRectangle.h"
#include "_ViewsText.h"
#include "_ViewsWallpaper.h"
#include "_WidgetSetRadioButton.h"
#include "_WidgetSetToggleButton.h"

/* Forward declaration of the class Core::KeyPressHandler */
#ifndef _CoreKeyPressHandler_
  EW_DECLARE_CLASS( CoreKeyPressHandler )
#define _CoreKeyPressHandler_
#endif

/* Forward declaration of the class Core::LayoutContext */
#ifndef _CoreLayoutContext_
  EW_DECLARE_CLASS( CoreLayoutContext )
#define _CoreLayoutContext_
#endif

/* Forward declaration of the class Core::View */
#ifndef _CoreView_
  EW_DECLARE_CLASS( CoreView )
#define _CoreView_
#endif

/* Forward declaration of the class Thermostat::DeviceClass */
#ifndef _ThermostatDeviceClass_
  EW_DECLARE_CLASS( ThermostatDeviceClass )
#define _ThermostatDeviceClass_
#endif

/* Forward declaration of the class Thermostat::Thermostat */
#ifndef _ThermostatThermostat_
  EW_DECLARE_CLASS( ThermostatThermostat )
#define _ThermostatThermostat_
#endif


/* Deklaration of class : 'Thermostat::Thermostat' */
EW_DEFINE_FIELDS( ThermostatThermostat, CoreGroup )
  EW_OBJECT  ( FilledBackground, ViewsRectangle )
  EW_OBJECT  ( FanMode,         ThermostatFanMode )
  EW_OBJECT  ( SimpleTouchHandlerFanMode, CoreSimpleTouchHandler )
  EW_OBJECT  ( ExitScreen,      ThermostatExitScreen )
  EW_OBJECT  ( DefaultThermostat, ThermostatDefaultThermostat )
  EW_OBJECT  ( GoBackTouchHandler, CoreSimpleTouchHandler )
  EW_OBJECT  ( Background,      ViewsWallpaper )
  EW_OBJECT  ( Overlay,         ViewsWallpaper )
  EW_OBJECT  ( RadioPowerOff,   WidgetSetRadioButton )
  EW_OBJECT  ( ToggleButton,    WidgetSetToggleButton )
  EW_OBJECT  ( RadioDay,        WidgetSetRadioButton )
  EW_OBJECT  ( RadioNight,      WidgetSetRadioButton )
  EW_OBJECT  ( RadioVacation,   WidgetSetRadioButton )
  EW_OBJECT  ( TemperatureController, ThermostatTemperatureController )
  EW_OBJECT  ( OnOffButtonText, ViewsText )
  EW_OBJECT  ( FadeEffect,      EffectsInt32Effect )
  EW_OBJECT  ( SettingsObserver, CorePropertyObserver )
  EW_OBJECT  ( SimpleTouchHandler, CoreSimpleTouchHandler )
  EW_OBJECT  ( FadeEffectPowerOff, EffectsInt32Effect )
  EW_OBJECT  ( Clock,           ClockClock )
  EW_OBJECT  ( Default,         WidgetSetRadioButton )
  EW_OBJECT  ( Logo,            ThermostatLogo )
  EW_OBJECT  ( FilledRectangle, ViewsRectangle )
  EW_OBJECT  ( FadeEffectManual, EffectsInt32Effect )
  EW_OBJECT  ( FadeEffectGoBack, EffectsInt32Effect )
  EW_OBJECT  ( Fan,             ViewsImage )
  EW_OBJECT  ( FanText,         ViewsText )
  EW_OBJECT  ( FanTouchHandler, CoreSimpleTouchHandler )
  EW_OBJECT  ( FadeEffectFanMode, EffectsInt32Effect )
  EW_VARIABLE( Device,          ThermostatDeviceClass )
EW_END_OF_FIELDS( ThermostatThermostat )

/* Virtual Method Table (VMT) for the class : 'Thermostat::Thermostat' */
EW_DEFINE_METHODS( ThermostatThermostat, CoreGroup )
  EW_METHOD( initLayoutContext, void )( CoreRectView _this, XRect aBounds, CoreOutline 
    aOutline )
  EW_METHOD( GetRoot,           CoreRoot )( CoreView _this )
  EW_METHOD( Draw,              void )( CoreGroup _this, GraphicsCanvas aCanvas, 
    XRect aClip, XPoint aOffset, XInt32 aOpacity, XBool aBlend )
  EW_METHOD( GetClipping,       XRect )( CoreGroup _this )
  EW_METHOD( HandleEvent,       XObject )( CoreView _this, CoreEvent aEvent )
  EW_METHOD( CursorHitTest,     CoreCursorHit )( CoreGroup _this, XRect aArea, XInt32 
    aFinger, XInt32 aStrikeCount, CoreView aDedicatedView, CoreView aStartView, 
    XSet aRetargetReason )
  EW_METHOD( AdjustDrawingArea, XRect )( CoreGroup _this, XRect aArea )
  EW_METHOD( ArrangeView,       XPoint )( CoreRectView _this, XRect aBounds, XEnum 
    aFormation )
  EW_METHOD( MoveView,          void )( CoreRectView _this, XPoint aOffset, XBool 
    aFastMove )
  EW_METHOD( GetExtent,         XRect )( CoreRectView _this )
  EW_METHOD( ChangeViewState,   void )( CoreGroup _this, XSet aSetState, XSet aClearState )
  EW_METHOD( OnSetBounds,       void )( CoreGroup _this, XRect value )
  EW_METHOD( OnSetFocus,        void )( CoreGroup _this, CoreView value )
  EW_METHOD( OnSetOpacity,      void )( CoreGroup _this, XInt32 value )
  EW_METHOD( DispatchEvent,     XObject )( CoreGroup _this, CoreEvent aEvent )
  EW_METHOD( BroadcastEvent,    XObject )( CoreGroup _this, CoreEvent aEvent, XSet 
    aFilter )
  EW_METHOD( UpdateLayout,      void )( CoreGroup _this, XPoint aSize )
  EW_METHOD( UpdateViewState,   void )( CoreGroup _this, XSet aState )
  EW_METHOD( InvalidateArea,    void )( CoreGroup _this, XRect aArea )
EW_END_OF_METHODS( ThermostatThermostat )

/* 'C' function for method : 'Thermostat::Thermostat.changeBackFinished()' */
void ThermostatThermostat_changeBackFinished( ThermostatThermostat _this, XObject 
  sender );

/* This slot method is executed when the associated property observer 'PropertyObserver' 
   is notified. */
void ThermostatThermostat_onSettingChanged( ThermostatThermostat _this, XObject 
  sender );

/* 'C' function for method : 'Thermostat::Thermostat.ExitScreenSlot()' */
void ThermostatThermostat_ExitScreenSlot( ThermostatThermostat _this, XObject sender );

/* 'C' function for method : 'Thermostat::Thermostat.DefaultThermSlot()' */
void ThermostatThermostat_DefaultThermSlot( ThermostatThermostat _this, XObject 
  sender );

/* 'C' function for method : 'Thermostat::Thermostat.GoBackSlot()' */
void ThermostatThermostat_GoBackSlot( ThermostatThermostat _this, XObject sender );

/* 'C' function for method : 'Thermostat::Thermostat.SlotFan()' */
void ThermostatThermostat_SlotFan( ThermostatThermostat _this, XObject sender );

/* 'C' function for method : 'Thermostat::Thermostat.SlotGoBackFanMode()' */
void ThermostatThermostat_SlotGoBackFanMode( ThermostatThermostat _this, XObject 
  sender );

#ifdef __cplusplus
  }
#endif

#endif /* _ThermostatThermostat_H */

/* Embedded Wizard */
