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

#include "ewlocale.h"
#include "_ClockClock.h"
#include "_ClockDayOfWeek.h"
#include "_ClockDigit.h"
#include "_ClockDots.h"
#include "_CoreTime.h"
#include "_CoreTimer.h"
#include "_CoreView.h"
#include "_ResourcesBitmap.h"
#include "_ViewsBorder.h"
#include "_ViewsImage.h"
#include "_ViewsRectangle.h"
#include "Clock.h"
#include "Thermostat.h"

/* Constant values used in this 'C' module only. */
static const XRect _Const0000 = {{ 0, 0 }, { 36, 52 }};
static const XColor _Const0001 = { 0xFF, 0xFF, 0xFF, 0xFF };
static const XPoint _Const0002 = { 36, 52 };
static const XRect _Const0003 = {{ 0, 0 }, { 10, 30 }};
static const XRect _Const0004 = {{ 0, 0 }, { 40, 14 }};
static const XRect _Const0005 = {{ 0, 0 }, { 28, 14 }};
static const XPoint _Const0006 = { 28, 14 };
static const XRect _Const0007 = {{ 0, 0 }, { 237, 67 }};
static const XRect _Const0008 = {{ 0, 0 }, { 236, 67 }};
static const XRect _Const0009 = {{ 36, 0 }, { 72, 52 }};
static const XRect _Const000A = {{ 71, 9 }, { 81, 39 }};
static const XRect _Const000B = {{ 82, 0 }, { 118, 52 }};
static const XRect _Const000C = {{ 118, 0 }, { 154, 52 }};
static const XRect _Const000D = {{ 153, 9 }, { 163, 39 }};
static const XRect _Const000E = {{ 164, 0 }, { 200, 52 }};
static const XRect _Const000F = {{ 200, 0 }, { 236, 52 }};
static const XRect _Const0010 = {{ 204, 52 }, { 232, 66 }};
static const XRect _Const0011 = {{ 6, 52 }, { 34, 66 }};
static const XRect _Const0012 = {{ 39, 52 }, { 67, 66 }};
static const XRect _Const0013 = {{ 72, 52 }, { 100, 66 }};
static const XRect _Const0014 = {{ 105, 52 }, { 133, 66 }};
static const XRect _Const0015 = {{ 138, 52 }, { 166, 66 }};
static const XRect _Const0016 = {{ 171, 52 }, { 199, 66 }};
static const XRect _Const0017 = {{ 0, 0 }, { 236, 26 }};
static const XColor _Const0018 = { 0xFF, 0xFF, 0xFF, 0xA0 };
static const XColor _Const0019 = { 0xFF, 0xFF, 0xFF, 0x00 };
static const XRect _Const001A = {{ 0, 26 }, { 236, 66 }};

/* Initializer for the class 'Clock::Digit' */
void ClockDigit__Init( ClockDigit _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  CoreGroup__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( ClockDigit );

  /* ... then construct all embedded objects */
  ViewsImage__Init( &_this->BackgroundImage, &_this->_.XObject, 0 );
  ViewsImage__Init( &_this->DigitImage, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ClockDigit );

  /* ... and initialize objects, variables, properties, etc. */
  CoreRectView__OnSetBounds( _this, _Const0000 );
  CoreRectView__OnSetBounds( &_this->BackgroundImage, _Const0000 );
  ViewsImage_OnSetColor( &_this->BackgroundImage, _Const0001 );
  ViewsImage_OnSetFrameNumber( &_this->BackgroundImage, 10 );
  ViewsImage_OnSetOpacity( &_this->BackgroundImage, 40 );
  CoreRectView__OnSetBounds( &_this->DigitImage, _Const0000 );
  ViewsImage_OnSetColorTL( &_this->DigitImage, _Const0001 );
  ViewsImage_OnSetColor( &_this->DigitImage, _Const0001 );
  ViewsImage_OnSetFrameNumber( &_this->DigitImage, 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->BackgroundImage ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->DigitImage ), 0 );
  ViewsImage_OnSetBitmap( &_this->BackgroundImage, EwLoadResource( &ClockDigitImages, 
  ResourcesBitmap ));
  ViewsImage_OnSetBitmap( &_this->DigitImage, EwLoadResource( &ClockDigitImages, 
  ResourcesBitmap ));
}

/* Re-Initializer for the class 'Clock::Digit' */
void ClockDigit__ReInit( ClockDigit _this )
{
  /* At first re-initialize the super class ... */
  CoreGroup__ReInit( &_this->_.Super );

  /* ... then re-construct all embedded objects */
  ViewsImage__ReInit( &_this->BackgroundImage );
  ViewsImage__ReInit( &_this->DigitImage );
}

/* Finalizer method for the class 'Clock::Digit' */
void ClockDigit__Done( ClockDigit _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( CoreGroup );

  /* Finalize all embedded objects */
  ViewsImage__Done( &_this->BackgroundImage );
  ViewsImage__Done( &_this->DigitImage );

  /* Don't forget to deinitialize the super class ... */
  CoreGroup__Done( &_this->_.Super );
}

/* 'C' function for method : 'Clock::Digit.OnSetDigit()' */
void ClockDigit_OnSetDigit( ClockDigit _this, XInt32 value )
{
  if ( value > 9 )
    value = 9;

  if ( value < 0 )
    value = -1;

  if ( value == _this->Digit )
    return;

  _this->Digit = value;
  ViewsImage_OnSetVisible( &_this->DigitImage, (XBool)( value != -1 ));
  ViewsImage_OnSetFrameNumber( &_this->DigitImage, value );
}

/* 'C' function for method : 'Clock::Digit.OnSetBounds()' */
void ClockDigit_OnSetBounds( ClockDigit _this, XRect value )
{
  value = EwSetRectSize( value, _Const0002 );
  CoreGroup_OnSetBounds((CoreGroup)_this, value );
}

/* Variants derived from the class : 'Clock::Digit' */
EW_DEFINE_CLASS_VARIANTS( ClockDigit )
EW_END_OF_CLASS_VARIANTS( ClockDigit )

/* Virtual Method Table (VMT) for the class : 'Clock::Digit' */
EW_DEFINE_CLASS( ClockDigit, CoreGroup, BackgroundImage, Digit, Digit, Digit, Digit, 
                 Digit, "Clock::Digit" )
  CoreRectView_initLayoutContext,
  CoreView_GetRoot,
  CoreGroup_Draw,
  CoreGroup_GetClipping,
  CoreView_HandleEvent,
  CoreGroup_CursorHitTest,
  CoreGroup_AdjustDrawingArea,
  CoreRectView_ArrangeView,
  CoreRectView_MoveView,
  CoreRectView_GetExtent,
  CoreGroup_ChangeViewState,
  ClockDigit_OnSetBounds,
  CoreGroup_OnSetFocus,
  CoreGroup_OnSetOpacity,
  CoreGroup_DispatchEvent,
  CoreGroup_BroadcastEvent,
  CoreGroup_UpdateLayout,
  CoreGroup_UpdateViewState,
  CoreGroup_InvalidateArea,
EW_END_OF_CLASS( ClockDigit )

/* Initializer for the class 'Clock::Dots' */
void ClockDots__Init( ClockDots _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  CoreGroup__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( ClockDots );

  /* ... then construct all embedded objects */
  ViewsImage__Init( &_this->BackgroundImage, &_this->_.XObject, 0 );
  ViewsImage__Init( &_this->DotsImage, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ClockDots );

  /* ... and initialize objects, variables, properties, etc. */
  CoreRectView__OnSetBounds( _this, _Const0003 );
  _this->Active = 1;
  CoreRectView__OnSetBounds( &_this->BackgroundImage, _Const0003 );
  ViewsImage_OnSetFrameNumber( &_this->BackgroundImage, 1 );
  ViewsImage_OnSetOpacity( &_this->BackgroundImage, 40 );
  CoreRectView__OnSetBounds( &_this->DotsImage, _Const0003 );
  ViewsImage_OnSetFrameNumber( &_this->DotsImage, 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->BackgroundImage ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->DotsImage ), 0 );
  ViewsImage_OnSetBitmap( &_this->BackgroundImage, EwLoadResource( &ClockDotsImages, 
  ResourcesBitmap ));
  ViewsImage_OnSetBitmap( &_this->DotsImage, EwLoadResource( &ClockDotsImages, ResourcesBitmap ));
}

/* Re-Initializer for the class 'Clock::Dots' */
void ClockDots__ReInit( ClockDots _this )
{
  /* At first re-initialize the super class ... */
  CoreGroup__ReInit( &_this->_.Super );

  /* ... then re-construct all embedded objects */
  ViewsImage__ReInit( &_this->BackgroundImage );
  ViewsImage__ReInit( &_this->DotsImage );
}

/* Finalizer method for the class 'Clock::Dots' */
void ClockDots__Done( ClockDots _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( CoreGroup );

  /* Finalize all embedded objects */
  ViewsImage__Done( &_this->BackgroundImage );
  ViewsImage__Done( &_this->DotsImage );

  /* Don't forget to deinitialize the super class ... */
  CoreGroup__Done( &_this->_.Super );
}

/* 'C' function for method : 'Clock::Dots.OnSetActive()' */
void ClockDots_OnSetActive( ClockDots _this, XBool value )
{
  if ( value == _this->Active )
    return;

  _this->Active = value;
  ViewsImage_OnSetVisible( &_this->DotsImage, value );
}

/* Variants derived from the class : 'Clock::Dots' */
EW_DEFINE_CLASS_VARIANTS( ClockDots )
EW_END_OF_CLASS_VARIANTS( ClockDots )

/* Virtual Method Table (VMT) for the class : 'Clock::Dots' */
EW_DEFINE_CLASS( ClockDots, CoreGroup, BackgroundImage, Active, Active, Active, 
                 Active, Active, "Clock::Dots" )
  CoreRectView_initLayoutContext,
  CoreView_GetRoot,
  CoreGroup_Draw,
  CoreGroup_GetClipping,
  CoreView_HandleEvent,
  CoreGroup_CursorHitTest,
  CoreGroup_AdjustDrawingArea,
  CoreRectView_ArrangeView,
  CoreRectView_MoveView,
  CoreRectView_GetExtent,
  CoreGroup_ChangeViewState,
  CoreGroup_OnSetBounds,
  CoreGroup_OnSetFocus,
  CoreGroup_OnSetOpacity,
  CoreGroup_DispatchEvent,
  CoreGroup_BroadcastEvent,
  CoreGroup_UpdateLayout,
  CoreGroup_UpdateViewState,
  CoreGroup_InvalidateArea,
EW_END_OF_CLASS( ClockDots )

/* Initializer for the class 'Clock::DayOfWeek' */
void ClockDayOfWeek__Init( ClockDayOfWeek _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  CoreGroup__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( ClockDayOfWeek );

  /* ... then construct all embedded objects */
  ViewsImage__Init( &_this->BackgroundImage, &_this->_.XObject, 0 );
  ViewsImage__Init( &_this->DOWImage, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ClockDayOfWeek );

  /* ... and initialize objects, variables, properties, etc. */
  CoreRectView__OnSetBounds( _this, _Const0004 );
  _this->Active = 1;
  CoreRectView__OnSetBounds( &_this->BackgroundImage, _Const0005 );
  ViewsImage_OnSetFrameNumber( &_this->BackgroundImage, 13 );
  ViewsImage_OnSetOpacity( &_this->BackgroundImage, 40 );
  CoreRectView__OnSetBounds( &_this->DOWImage, _Const0005 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->BackgroundImage ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->DOWImage ), 0 );
  ViewsImage_OnSetBitmap( &_this->BackgroundImage, EwLoadResource( &ClockDOWImages, 
  ResourcesBitmap ));
  ViewsImage_OnSetBitmap( &_this->DOWImage, EwLoadResource( &ClockDOWImages, ResourcesBitmap ));
}

/* Re-Initializer for the class 'Clock::DayOfWeek' */
void ClockDayOfWeek__ReInit( ClockDayOfWeek _this )
{
  /* At first re-initialize the super class ... */
  CoreGroup__ReInit( &_this->_.Super );

  /* ... then re-construct all embedded objects */
  ViewsImage__ReInit( &_this->BackgroundImage );
  ViewsImage__ReInit( &_this->DOWImage );
}

/* Finalizer method for the class 'Clock::DayOfWeek' */
void ClockDayOfWeek__Done( ClockDayOfWeek _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( CoreGroup );

  /* Finalize all embedded objects */
  ViewsImage__Done( &_this->BackgroundImage );
  ViewsImage__Done( &_this->DOWImage );

  /* Don't forget to deinitialize the super class ... */
  CoreGroup__Done( &_this->_.Super );
}

/* 'C' function for method : 'Clock::DayOfWeek.OnSetBounds()' */
void ClockDayOfWeek_OnSetBounds( ClockDayOfWeek _this, XRect value )
{
  value = EwSetRectSize( value, _Const0006 );
  CoreGroup_OnSetBounds((CoreGroup)_this, value );
}

/* 'C' function for method : 'Clock::DayOfWeek.OnSetActive()' */
void ClockDayOfWeek_OnSetActive( ClockDayOfWeek _this, XBool value )
{
  if ( value == _this->Active )
    return;

  _this->Active = value;
  ViewsImage_OnSetVisible( &_this->DOWImage, value );
}

/* This onset method is invoked automatically, when the value of the property @Day 
   is changed. This method forces the view to display the day of the week with the 
   given number. */
void ClockDayOfWeek_OnSetDay( ClockDayOfWeek _this, XInt32 value )
{
  if ( value < 0 )
    value = 0;

  if ( value > 6 )
    value = 6;

  if ( value == _this->Day )
    return;

  _this->Day = value;
  value = value - 1;

  if ( value == -1 )
    value = 6;

  ViewsImage_OnSetFrameNumber( &_this->BackgroundImage, value * 2 );
  ViewsImage_OnSetFrameNumber( &_this->DOWImage, value * 2 );
}

/* Variants derived from the class : 'Clock::DayOfWeek' */
EW_DEFINE_CLASS_VARIANTS( ClockDayOfWeek )
EW_END_OF_CLASS_VARIANTS( ClockDayOfWeek )

/* Virtual Method Table (VMT) for the class : 'Clock::DayOfWeek' */
EW_DEFINE_CLASS( ClockDayOfWeek, CoreGroup, BackgroundImage, Day, Day, Day, Day, 
                 Day, "Clock::DayOfWeek" )
  CoreRectView_initLayoutContext,
  CoreView_GetRoot,
  CoreGroup_Draw,
  CoreGroup_GetClipping,
  CoreView_HandleEvent,
  CoreGroup_CursorHitTest,
  CoreGroup_AdjustDrawingArea,
  CoreRectView_ArrangeView,
  CoreRectView_MoveView,
  CoreRectView_GetExtent,
  CoreGroup_ChangeViewState,
  ClockDayOfWeek_OnSetBounds,
  CoreGroup_OnSetFocus,
  CoreGroup_OnSetOpacity,
  CoreGroup_DispatchEvent,
  CoreGroup_BroadcastEvent,
  CoreGroup_UpdateLayout,
  CoreGroup_UpdateViewState,
  CoreGroup_InvalidateArea,
EW_END_OF_CLASS( ClockDayOfWeek )

/* Initializer for the class 'Clock::Clock' */
void ClockClock__Init( ClockClock _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  CoreGroup__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( ClockClock );

  /* ... then construct all embedded objects */
  ViewsImage__Init( &_this->Image, &_this->_.XObject, 0 );
  ClockDigit__Init( &_this->Hour1, &_this->_.XObject, 0 );
  ClockDigit__Init( &_this->Hour2, &_this->_.XObject, 0 );
  ClockDots__Init( &_this->Dots1, &_this->_.XObject, 0 );
  ClockDigit__Init( &_this->Min1, &_this->_.XObject, 0 );
  ClockDigit__Init( &_this->Min2, &_this->_.XObject, 0 );
  ClockDots__Init( &_this->Dots2, &_this->_.XObject, 0 );
  ClockDigit__Init( &_this->Sec1, &_this->_.XObject, 0 );
  ClockDigit__Init( &_this->Sec2, &_this->_.XObject, 0 );
  CoreTimer__Init( &_this->Timer, &_this->_.XObject, 0 );
  CoreTime__Init( &_this->Time, &_this->_.XObject, 0 );
  ClockDayOfWeek__Init( &_this->DayOfWeek0, &_this->_.XObject, 0 );
  ClockDayOfWeek__Init( &_this->DayOfWeek1, &_this->_.XObject, 0 );
  ClockDayOfWeek__Init( &_this->DayOfWeek2, &_this->_.XObject, 0 );
  ClockDayOfWeek__Init( &_this->DayOfWeek3, &_this->_.XObject, 0 );
  ClockDayOfWeek__Init( &_this->DayOfWeek4, &_this->_.XObject, 0 );
  ClockDayOfWeek__Init( &_this->DayOfWeek5, &_this->_.XObject, 0 );
  ClockDayOfWeek__Init( &_this->DayOfWeek6, &_this->_.XObject, 0 );
  ViewsBorder__Init( &_this->Border, &_this->_.XObject, 0 );
  ViewsRectangle__Init( &_this->Glass1, &_this->_.XObject, 0 );
  ViewsRectangle__Init( &_this->Glass2, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ClockClock );

  /* ... and initialize objects, variables, properties, etc. */
  CoreRectView__OnSetBounds( _this, _Const0007 );
  CoreRectView__OnSetBounds( &_this->Image, _Const0008 );
  ViewsImage_OnSetOpacity( &_this->Image, 50 );
  CoreRectView__OnSetBounds( &_this->Hour1, _Const0000 );
  CoreRectView__OnSetBounds( &_this->Hour2, _Const0009 );
  CoreRectView__OnSetBounds( &_this->Dots1, _Const000A );
  CoreRectView__OnSetBounds( &_this->Min1, _Const000B );
  CoreRectView__OnSetBounds( &_this->Min2, _Const000C );
  CoreRectView__OnSetBounds( &_this->Dots2, _Const000D );
  CoreRectView__OnSetBounds( &_this->Sec1, _Const000E );
  CoreRectView__OnSetBounds( &_this->Sec2, _Const000F );
  CoreGroup__OnSetOpacity( &_this->Sec2, 255 );
  CoreTimer_OnSetPeriod( &_this->Timer, 500 );
  CoreTimer_OnSetEnabled( &_this->Timer, 1 );
  CoreRectView__OnSetBounds( &_this->DayOfWeek0, _Const0010 );
  ClockDayOfWeek_OnSetActive( &_this->DayOfWeek0, 0 );
  CoreRectView__OnSetBounds( &_this->DayOfWeek1, _Const0011 );
  ClockDayOfWeek_OnSetActive( &_this->DayOfWeek1, 0 );
  ClockDayOfWeek_OnSetDay( &_this->DayOfWeek1, 1 );
  CoreRectView__OnSetBounds( &_this->DayOfWeek2, _Const0012 );
  ClockDayOfWeek_OnSetActive( &_this->DayOfWeek2, 0 );
  ClockDayOfWeek_OnSetDay( &_this->DayOfWeek2, 2 );
  CoreRectView__OnSetBounds( &_this->DayOfWeek3, _Const0013 );
  ClockDayOfWeek_OnSetActive( &_this->DayOfWeek3, 0 );
  ClockDayOfWeek_OnSetDay( &_this->DayOfWeek3, 3 );
  CoreRectView__OnSetBounds( &_this->DayOfWeek4, _Const0014 );
  ClockDayOfWeek_OnSetActive( &_this->DayOfWeek4, 0 );
  ClockDayOfWeek_OnSetDay( &_this->DayOfWeek4, 4 );
  CoreRectView__OnSetBounds( &_this->DayOfWeek5, _Const0015 );
  ClockDayOfWeek_OnSetActive( &_this->DayOfWeek5, 0 );
  ClockDayOfWeek_OnSetDay( &_this->DayOfWeek5, 5 );
  CoreRectView__OnSetBounds( &_this->DayOfWeek6, _Const0016 );
  ClockDayOfWeek_OnSetActive( &_this->DayOfWeek6, 0 );
  ClockDayOfWeek_OnSetDay( &_this->DayOfWeek6, 6 );
  CoreRectView__OnSetBounds( &_this->Border, _Const0007 );
  ViewsBorder_OnSetWidth( &_this->Border, 3 );
  ViewsBorder_OnSetColorBL( &_this->Border, ThermostatVac );
  ViewsBorder_OnSetColorBR( &_this->Border, ThermostatHot );
  ViewsBorder_OnSetColorTR( &_this->Border, ThermostatCold );
  ViewsBorder_OnSetColorTL( &_this->Border, ThermostatHot );
  ViewsBorder_OnSetColor( &_this->Border, _Const0001 );
  CoreRectView__OnSetBounds( &_this->Glass1, _Const0017 );
  ViewsRectangle_OnSetColorBL( &_this->Glass1, _Const0018 );
  ViewsRectangle_OnSetColorBR( &_this->Glass1, _Const0018 );
  ViewsRectangle_OnSetColorTR( &_this->Glass1, _Const0019 );
  ViewsRectangle_OnSetColorTL( &_this->Glass1, _Const0019 );
  CoreRectView__OnSetBounds( &_this->Glass2, _Const001A );
  ViewsRectangle_OnSetColorBL( &_this->Glass2, _Const0019 );
  ViewsRectangle_OnSetColorBR( &_this->Glass2, _Const0019 );
  ViewsRectangle_OnSetColorTR( &_this->Glass2, _Const0018 );
  ViewsRectangle_OnSetColorTL( &_this->Glass2, _Const0018 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Image ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Hour1 ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Hour2 ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Dots1 ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Min1 ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Min2 ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Dots2 ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Sec1 ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Sec2 ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->DayOfWeek0 ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->DayOfWeek1 ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->DayOfWeek2 ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->DayOfWeek3 ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->DayOfWeek4 ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->DayOfWeek5 ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->DayOfWeek6 ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Border ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Glass1 ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Glass2 ), 0 );
  ViewsImage_OnSetBitmap( &_this->Image, EwLoadResource( &ClockBackgroundClock, 
  ResourcesBitmap ));
  _this->Timer.OnTrigger = EwNewSlot( _this, ClockClock_updateSlot );

  /* Call the user defined constructor */
  ClockClock_Init( _this, aArg );
}

/* Re-Initializer for the class 'Clock::Clock' */
void ClockClock__ReInit( ClockClock _this )
{
  /* At first re-initialize the super class ... */
  CoreGroup__ReInit( &_this->_.Super );

  /* ... then re-construct all embedded objects */
  ViewsImage__ReInit( &_this->Image );
  ClockDigit__ReInit( &_this->Hour1 );
  ClockDigit__ReInit( &_this->Hour2 );
  ClockDots__ReInit( &_this->Dots1 );
  ClockDigit__ReInit( &_this->Min1 );
  ClockDigit__ReInit( &_this->Min2 );
  ClockDots__ReInit( &_this->Dots2 );
  ClockDigit__ReInit( &_this->Sec1 );
  ClockDigit__ReInit( &_this->Sec2 );
  CoreTimer__ReInit( &_this->Timer );
  CoreTime__ReInit( &_this->Time );
  ClockDayOfWeek__ReInit( &_this->DayOfWeek0 );
  ClockDayOfWeek__ReInit( &_this->DayOfWeek1 );
  ClockDayOfWeek__ReInit( &_this->DayOfWeek2 );
  ClockDayOfWeek__ReInit( &_this->DayOfWeek3 );
  ClockDayOfWeek__ReInit( &_this->DayOfWeek4 );
  ClockDayOfWeek__ReInit( &_this->DayOfWeek5 );
  ClockDayOfWeek__ReInit( &_this->DayOfWeek6 );
  ViewsBorder__ReInit( &_this->Border );
  ViewsRectangle__ReInit( &_this->Glass1 );
  ViewsRectangle__ReInit( &_this->Glass2 );
}

/* Finalizer method for the class 'Clock::Clock' */
void ClockClock__Done( ClockClock _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( CoreGroup );

  /* Finalize all embedded objects */
  ViewsImage__Done( &_this->Image );
  ClockDigit__Done( &_this->Hour1 );
  ClockDigit__Done( &_this->Hour2 );
  ClockDots__Done( &_this->Dots1 );
  ClockDigit__Done( &_this->Min1 );
  ClockDigit__Done( &_this->Min2 );
  ClockDots__Done( &_this->Dots2 );
  ClockDigit__Done( &_this->Sec1 );
  ClockDigit__Done( &_this->Sec2 );
  CoreTimer__Done( &_this->Timer );
  CoreTime__Done( &_this->Time );
  ClockDayOfWeek__Done( &_this->DayOfWeek0 );
  ClockDayOfWeek__Done( &_this->DayOfWeek1 );
  ClockDayOfWeek__Done( &_this->DayOfWeek2 );
  ClockDayOfWeek__Done( &_this->DayOfWeek3 );
  ClockDayOfWeek__Done( &_this->DayOfWeek4 );
  ClockDayOfWeek__Done( &_this->DayOfWeek5 );
  ClockDayOfWeek__Done( &_this->DayOfWeek6 );
  ViewsBorder__Done( &_this->Border );
  ViewsRectangle__Done( &_this->Glass1 );
  ViewsRectangle__Done( &_this->Glass2 );

  /* Don't forget to deinitialize the super class ... */
  CoreGroup__Done( &_this->_.Super );
}

/* The method Init() is invoked automatically after the component has been created. 
   This method can be overridden and filled with logic containing additional initialization 
   statements. */
void ClockClock_Init( ClockClock _this, XHandle aArg )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( aArg );

  EwPostSignal( EwNewSlot( _this, ClockClock_updateSlot ), ((XObject)_this ));
}

/* This method will receive signals from the timer object @Timer. It performs the 
   clock update. */
void ClockClock_updateSlot( ClockClock _this, XObject sender )
{
  CoreTime current;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  current = CoreTime_OnGetCurrentTime( &_this->Time );
  ClockDigit_OnSetDigit( &_this->Hour1, current->Hour / 10 );
  ClockDigit_OnSetDigit( &_this->Hour2, current->Hour % 10 );
  ClockDigit_OnSetDigit( &_this->Min1, current->Minute / 10 );
  ClockDigit_OnSetDigit( &_this->Min2, current->Minute % 10 );
  ClockDigit_OnSetDigit( &_this->Sec1, current->Second / 10 );
  ClockDigit_OnSetDigit( &_this->Sec2, current->Second % 10 );
  ClockDots_OnSetActive( &_this->Dots1, (XBool)(( current->Second % 2 ) == 0 ));
  ClockDots_OnSetActive( &_this->Dots2, _this->Dots1.Active );
  ClockDayOfWeek_OnSetActive( &_this->DayOfWeek0, (XBool)( CoreTime_OnGetDayOfWeek( 
  current ) == 0 ));
  ClockDayOfWeek_OnSetActive( &_this->DayOfWeek1, (XBool)( CoreTime_OnGetDayOfWeek( 
  current ) == 1 ));
  ClockDayOfWeek_OnSetActive( &_this->DayOfWeek2, (XBool)( CoreTime_OnGetDayOfWeek( 
  current ) == 2 ));
  ClockDayOfWeek_OnSetActive( &_this->DayOfWeek3, (XBool)( CoreTime_OnGetDayOfWeek( 
  current ) == 3 ));
  ClockDayOfWeek_OnSetActive( &_this->DayOfWeek4, (XBool)( CoreTime_OnGetDayOfWeek( 
  current ) == 4 ));
  ClockDayOfWeek_OnSetActive( &_this->DayOfWeek5, (XBool)( CoreTime_OnGetDayOfWeek( 
  current ) == 5 ));
  ClockDayOfWeek_OnSetActive( &_this->DayOfWeek6, (XBool)( CoreTime_OnGetDayOfWeek( 
  current ) == 6 ));
}

/* Variants derived from the class : 'Clock::Clock' */
EW_DEFINE_CLASS_VARIANTS( ClockClock )
EW_END_OF_CLASS_VARIANTS( ClockClock )

/* Virtual Method Table (VMT) for the class : 'Clock::Clock' */
EW_DEFINE_CLASS( ClockClock, CoreGroup, Image, _.VMT, _.VMT, _.VMT, _.VMT, _.VMT, 
                 "Clock::Clock" )
  CoreRectView_initLayoutContext,
  CoreView_GetRoot,
  CoreGroup_Draw,
  CoreGroup_GetClipping,
  CoreView_HandleEvent,
  CoreGroup_CursorHitTest,
  CoreGroup_AdjustDrawingArea,
  CoreRectView_ArrangeView,
  CoreRectView_MoveView,
  CoreRectView_GetExtent,
  CoreGroup_ChangeViewState,
  CoreGroup_OnSetBounds,
  CoreGroup_OnSetFocus,
  CoreGroup_OnSetOpacity,
  CoreGroup_DispatchEvent,
  CoreGroup_BroadcastEvent,
  CoreGroup_UpdateLayout,
  CoreGroup_UpdateViewState,
  CoreGroup_InvalidateArea,
EW_END_OF_CLASS( ClockClock )

/* Include a file containing the bitmap resource : 'Clock::DigitImages' */
#include "_ClockDigitImages.h"

/* Table with links to derived variants of the bitmap resource : 'Clock::DigitImages' */
EW_RES_WITHOUT_VARIANTS( ClockDigitImages )

/* Include a file containing the bitmap resource : 'Clock::DotsImages' */
#include "_ClockDotsImages.h"

/* Table with links to derived variants of the bitmap resource : 'Clock::DotsImages' */
EW_RES_WITHOUT_VARIANTS( ClockDotsImages )

/* Include a file containing the bitmap resource : 'Clock::DOWImages' */
#include "_ClockDOWImages.h"

/* Table with links to derived variants of the bitmap resource : 'Clock::DOWImages' */
EW_RES_WITHOUT_VARIANTS( ClockDOWImages )

/* Include a file containing the bitmap resource : 'Clock::BackgroundClock' */
#include "_ClockBackgroundClock.h"

/* Table with links to derived variants of the bitmap resource : 'Clock::BackgroundClock' */
EW_RES_WITHOUT_VARIANTS( ClockBackgroundClock )

/* Embedded Wizard */
