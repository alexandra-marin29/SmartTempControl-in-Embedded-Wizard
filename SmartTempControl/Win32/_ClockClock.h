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

#ifndef _ClockClock_H
#define _ClockClock_H

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

#include "_ClockDayOfWeek.h"
#include "_ClockDigit.h"
#include "_ClockDots.h"
#include "_CoreGroup.h"
#include "_CoreTime.h"
#include "_CoreTimer.h"
#include "_ViewsBorder.h"
#include "_ViewsImage.h"
#include "_ViewsRectangle.h"

/* Forward declaration of the class Clock::Clock */
#ifndef _ClockClock_
  EW_DECLARE_CLASS( ClockClock )
#define _ClockClock_
#endif

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


/* Deklaration of class : 'Clock::Clock' */
EW_DEFINE_FIELDS( ClockClock, CoreGroup )
  EW_OBJECT  ( Image,           ViewsImage )
  EW_OBJECT  ( Hour1,           ClockDigit )
  EW_OBJECT  ( Hour2,           ClockDigit )
  EW_OBJECT  ( Dots1,           ClockDots )
  EW_OBJECT  ( Min1,            ClockDigit )
  EW_OBJECT  ( Min2,            ClockDigit )
  EW_OBJECT  ( Dots2,           ClockDots )
  EW_OBJECT  ( Sec1,            ClockDigit )
  EW_OBJECT  ( Sec2,            ClockDigit )
  EW_OBJECT  ( Timer,           CoreTimer )
  EW_OBJECT  ( Time,            CoreTime )
  EW_OBJECT  ( DayOfWeek0,      ClockDayOfWeek )
  EW_OBJECT  ( DayOfWeek1,      ClockDayOfWeek )
  EW_OBJECT  ( DayOfWeek2,      ClockDayOfWeek )
  EW_OBJECT  ( DayOfWeek3,      ClockDayOfWeek )
  EW_OBJECT  ( DayOfWeek4,      ClockDayOfWeek )
  EW_OBJECT  ( DayOfWeek5,      ClockDayOfWeek )
  EW_OBJECT  ( DayOfWeek6,      ClockDayOfWeek )
  EW_OBJECT  ( Border,          ViewsBorder )
  EW_OBJECT  ( Glass1,          ViewsRectangle )
  EW_OBJECT  ( Glass2,          ViewsRectangle )
EW_END_OF_FIELDS( ClockClock )

/* Virtual Method Table (VMT) for the class : 'Clock::Clock' */
EW_DEFINE_METHODS( ClockClock, CoreGroup )
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
EW_END_OF_METHODS( ClockClock )

/* The method Init() is invoked automatically after the component has been created. 
   This method can be overridden and filled with logic containing additional initialization 
   statements. */
void ClockClock_Init( ClockClock _this, XHandle aArg );

/* This method will receive signals from the timer object @Timer. It performs the 
   clock update. */
void ClockClock_updateSlot( ClockClock _this, XObject sender );

#ifdef __cplusplus
  }
#endif

#endif /* _ClockClock_H */

/* Embedded Wizard */
