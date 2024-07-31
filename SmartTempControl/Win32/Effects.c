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
#include "_CoreTimer.h"
#include "_EffectsColorEffect.h"
#include "_EffectsEffect.h"
#include "_EffectsEffectTimerClass.h"
#include "_EffectsInt32Effect.h"
#include "Effects.h"

/* Constant values used in this 'C' module only. */
static const XColor _Const0000 = { 0xFF, 0xFF, 0xFF, 0xFF };

/* Initializer for the class 'Effects::Effect' */
void EffectsEffect__Init( EffectsEffect _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  XObject__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( EffectsEffect );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( EffectsEffect );

  /* ... and initialize objects, variables, properties, etc. */
  _this->invCycleDuration = 0.001f;
  _this->CycleDuration = 1000;
}

/* Re-Initializer for the class 'Effects::Effect' */
void EffectsEffect__ReInit( EffectsEffect _this )
{
  /* At first re-initialize the super class ... */
  XObject__ReInit( &_this->_.Super );
}

/* Finalizer method for the class 'Effects::Effect' */
void EffectsEffect__Done( EffectsEffect _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( XObject );

  /* Don't forget to deinitialize the super class ... */
  XObject__Done( &_this->_.Super );
}

/* 'C' function for method : 'Effects::Effect.timerSlot()' */
void EffectsEffect_timerSlot( EffectsEffect _this, XObject sender )
{
  XBool done;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( _this->timer == 0 )
    return;

  if ( _this->startDirection == 0 )
  {
    _this->startDirection = 1;
    _this->direction = _this->startDirection;
    _this->startTime = _this->timer->Time;
    _this->cycleCounter = 0;
    _this->lastFrame = -1.0f;
  }

  if (( _this->startDirection > 0 ) && ( _this->direction > 0 ))
    done = EffectsEffect_runFwdFwd( _this );
  else
    if (( _this->startDirection < 0 ) && ( _this->direction < 0 ))
      done = EffectsEffect_runRevRev( _this );
    else
      if ( _this->startDirection > 0 )
        done = EffectsEffect_runFwdRev( _this );
      else
        done = EffectsEffect_runRevFwd( _this );

  if ( done )
  {
    EffectsEffect_OnSetEnabled( _this, 0 );
    EwSignal( _this->OnFinished, ((XObject)_this ));
  }
}

/* 'C' function for method : 'Effects::Effect.run()' */
void EffectsEffect_run( EffectsEffect _this, XFloat aFrame )
{
  EffectsEffect__Animate( _this, aFrame );
  EwSignal( _this->OnAnimate, ((XObject)_this ));
}

/* 'C' function for method : 'Effects::Effect.runRevRev()' */
XBool EffectsEffect_runRevRev( EffectsEffect _this )
{
  XInt32 time = (XInt32)( _this->timer->Time - _this->startTime );
  XInt32 delay;
  XInt32 period0;
  XInt32 periodN;
  XBool done;
  XFloat frame;

  if ( time < 0 )
    time = -time;

  delay = _this->InitialDelay;
  period0 = _this->InitialDelay + _this->CycleDuration;
  periodN = _this->InterCycleDelay + _this->CycleDuration;
  done = 0;
  frame = _this->lastFrame;

  if (( _this->cycleCounter == 0 ) && ( time >= period0 ))
  {
    _this->cycleCounter = 1;
    time = time - period0;
    _this->startTime = _this->startTime + period0;
  }

  if (( _this->cycleCounter > 0 ) && ( time >= periodN ))
  {
    XInt32 cycles = time / periodN;
    _this->cycleCounter = _this->cycleCounter + cycles;
    time = time - ( cycles * periodN );
    _this->startTime = _this->startTime + ( cycles * periodN );
  }

  if (( _this->cycleCounter > 2 ) && ( _this->NoOfCycles == 0 ))
    _this->cycleCounter = 1;

  if ( _this->cycleCounter > 0 )
    delay = _this->InterCycleDelay;

  if (( _this->cycleCounter >= _this->NoOfCycles ) && ( _this->NoOfCycles > 0 ))
  {
    done = 1;
    frame = 0.0f;
  }
  else
    if ( time >= delay )
      frame = 1.0f - ((XFloat)( time - delay ) * _this->invCycleDuration );
    else
      if ( frame >= 0.0f )
        frame = 0.0f;

  if ( frame != _this->lastFrame )
  {
    if ( frame < 0.0f )
      frame = 0.0f;

    if ( frame > 1.0f )
      frame = 1.0f;
  }

  if ( frame != _this->lastFrame )
  {
    _this->lastFrame = frame;
    EffectsEffect_run( _this, frame );
  }

  return done;
}

/* 'C' function for method : 'Effects::Effect.runRevFwd()' */
XBool EffectsEffect_runRevFwd( EffectsEffect _this )
{
  XInt32 time = (XInt32)( _this->startTime - _this->timer->Time );
  XInt32 delay = _this->InitialDelay;
  XInt32 period0 = _this->InitialDelay + _this->CycleDuration;
  XInt32 periodN = _this->InterCycleDelay + _this->CycleDuration;
  XBool done = 0;
  XFloat frame = _this->lastFrame;

  if (( _this->cycleCounter > 1 ) && ( time < 0 ))
  {
    XInt32 cycles = (( -time + periodN ) - 1 ) / periodN;

    if (( _this->cycleCounter - cycles ) <= 0 )
      cycles = _this->cycleCounter - 1;

    _this->cycleCounter = _this->cycleCounter - cycles;
    time = time + ( cycles * periodN );
    _this->startTime = _this->startTime + ( cycles * periodN );
  }

  if ((( _this->cycleCounter == 1 ) && ( time < 0 )) && ( _this->NoOfCycles > 0 ))
  {
    _this->cycleCounter = 0;
    time = time + period0;
    _this->startTime = _this->startTime + period0;
  }

  if ((( _this->cycleCounter == 1 ) && ( time < 0 )) && ( _this->NoOfCycles == 0 ))
  {
    XInt32 cycles = (( -time + periodN ) - 1 ) / periodN;
    time = time + ( cycles * periodN );
    _this->startTime = _this->startTime + ( cycles * periodN );
  }

  if ( _this->cycleCounter > 0 )
    delay = _this->InterCycleDelay;

  if ( time < 0 )
  {
    done = 1;
    frame = 1.0f;
  }
  else
    if ( time >= delay )
      frame = 1.0f - ((XFloat)( time - delay ) * _this->invCycleDuration );
    else
      if ( frame >= 0.0f )
        frame = 1.0f;

  if ( frame != _this->lastFrame )
  {
    if ( frame < 0.0f )
      frame = 0.0f;

    if ( frame > 1.0f )
      frame = 1.0f;
  }

  if ( frame != _this->lastFrame )
  {
    _this->lastFrame = frame;
    EffectsEffect_run( _this, frame );
  }

  return done;
}

/* 'C' function for method : 'Effects::Effect.runFwdRev()' */
XBool EffectsEffect_runFwdRev( EffectsEffect _this )
{
  XInt32 time = (XInt32)( _this->startTime - _this->timer->Time );
  XInt32 delay = _this->InitialDelay;
  XInt32 period0 = _this->InitialDelay + _this->CycleDuration;
  XInt32 periodN = _this->InterCycleDelay + _this->CycleDuration;
  XBool done = 0;
  XFloat frame = _this->lastFrame;

  if (( _this->cycleCounter > 1 ) && ( time < 0 ))
  {
    XInt32 cycles = (( -time + periodN ) - 1 ) / periodN;

    if (( _this->cycleCounter - cycles ) <= 0 )
      cycles = _this->cycleCounter - 1;

    _this->cycleCounter = _this->cycleCounter - cycles;
    time = time + ( cycles * periodN );
    _this->startTime = _this->startTime + ( cycles * periodN );
  }

  if ((( _this->cycleCounter == 1 ) && ( time < 0 )) && ( _this->NoOfCycles > 0 ))
  {
    _this->cycleCounter = 0;
    time = time + period0;
    _this->startTime = _this->startTime + period0;
  }

  if ((( _this->cycleCounter == 1 ) && ( time < 0 )) && ( _this->NoOfCycles == 0 ))
  {
    XInt32 cycles = (( -time + periodN ) - 1 ) / periodN;
    time = time + ( cycles * periodN );
    _this->startTime = _this->startTime + ( cycles * periodN );
  }

  if ( _this->cycleCounter > 0 )
    delay = _this->InterCycleDelay;

  if ( time < 0 )
  {
    done = 1;
    frame = 0.0f;
  }
  else
    if ( time >= delay )
      frame = (XFloat)( time - delay ) * _this->invCycleDuration;
    else
      if ( frame >= 0.0f )
        frame = 0.0f;

  if ( frame != _this->lastFrame )
  {
    if ( frame < 0.0f )
      frame = 0.0f;

    if ( frame > 1.0f )
      frame = 1.0f;
  }

  if ( frame != _this->lastFrame )
  {
    _this->lastFrame = frame;
    EffectsEffect_run( _this, frame );
  }

  return done;
}

/* 'C' function for method : 'Effects::Effect.runFwdFwd()' */
XBool EffectsEffect_runFwdFwd( EffectsEffect _this )
{
  XInt32 time = (XInt32)( _this->timer->Time - _this->startTime );
  XInt32 delay;
  XInt32 period0;
  XInt32 periodN;
  XBool done;
  XFloat frame;

  if ( time < 0 )
    time = -time;

  delay = _this->InitialDelay;
  period0 = _this->InitialDelay + _this->CycleDuration;
  periodN = _this->InterCycleDelay + _this->CycleDuration;
  done = 0;
  frame = _this->lastFrame;

  if (( _this->cycleCounter == 0 ) && ( time >= period0 ))
  {
    _this->cycleCounter = 1;
    time = time - period0;
    _this->startTime = _this->startTime + period0;
  }

  if (( _this->cycleCounter > 0 ) && ( time >= periodN ))
  {
    XInt32 cycles = time / periodN;
    _this->cycleCounter = _this->cycleCounter + cycles;
    time = time - ( cycles * periodN );
    _this->startTime = _this->startTime + ( cycles * periodN );
  }

  if (( _this->cycleCounter > 2 ) && ( _this->NoOfCycles == 0 ))
    _this->cycleCounter = 1;

  if ( _this->cycleCounter > 0 )
    delay = _this->InterCycleDelay;

  if (( _this->cycleCounter >= _this->NoOfCycles ) && ( _this->NoOfCycles > 0 ))
  {
    done = 1;
    frame = 1.0f;
  }
  else
    if ( time >= delay )
      frame = (XFloat)( time - delay ) * _this->invCycleDuration;
    else
      if ( frame >= 0.0f )
        frame = 1.0f;

  if ( frame != _this->lastFrame )
  {
    if ( frame < 0.0f )
      frame = 0.0f;

    if ( frame > 1.0f )
      frame = 1.0f;
  }

  if ( frame != _this->lastFrame )
  {
    _this->lastFrame = frame;
    EffectsEffect_run( _this, frame );
  }

  return done;
}

/* 'C' function for method : 'Effects::Effect.OnSetNoOfCycles()' */
void EffectsEffect_OnSetNoOfCycles( EffectsEffect _this, XInt32 value )
{
  if ( value < 0 )
    value = 0;

  _this->NoOfCycles = value;
}

/* 'C' function for method : 'Effects::Effect.OnSetCycleDuration()' */
void EffectsEffect_OnSetCycleDuration( EffectsEffect _this, XInt32 value )
{
  if ( value < 15 )
    value = 15;

  _this->CycleDuration = value;
  _this->invCycleDuration = 1.0f / (XFloat)value;
}

/* 'C' function for method : 'Effects::Effect.OnSetInterCycleDelay()' */
void EffectsEffect_OnSetInterCycleDelay( EffectsEffect _this, XInt32 value )
{
  if ( value < 0 )
    value = 0;

  _this->InterCycleDelay = value;
}

/* 'C' function for method : 'Effects::Effect.OnSetInitialDelay()' */
void EffectsEffect_OnSetInitialDelay( EffectsEffect _this, XInt32 value )
{
  if ( value < 0 )
    value = 0;

  _this->InitialDelay = value;
}

/* 'C' function for method : 'Effects::Effect.OnSetEnabled()' */
void EffectsEffect_OnSetEnabled( EffectsEffect _this, XBool value )
{
  if ( _this->Enabled == value )
    return;

  _this->Enabled = value;

  if ( !value && ( _this->timer != 0 ))
  {
    EwDetachObjObserver( EwNewSlot( _this, EffectsEffect_timerSlot ), (XObject)_this->timer, 
      0 );
    _this->timer = 0;
  }

  if ( value )
  {
    _this->timer = ((CoreTimer)EwGetAutoObject( &EffectsEffectTimer, EffectsEffectTimerClass ));
    EwAttachObjObserver( EwNewSlot( _this, EffectsEffect_timerSlot ), (XObject)_this->timer, 
      0 );
    _this->startDirection = 0;
    EwPostSignal( EwNewSlot( _this, EffectsEffect_timerSlot ), ((XObject)_this ));
  }
}

/* 'C' function for method : 'Effects::Effect.Animate()' */
void EffectsEffect_Animate( EffectsEffect _this, XFloat aProgress )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( _this );
  EW_UNUSED_ARG( aProgress );
}

/* Wrapper function for the virtual method : 'Effects::Effect.Animate()' */
void EffectsEffect__Animate( void* _this, XFloat aProgress )
{
  ((EffectsEffect)_this)->_.VMT->Animate((EffectsEffect)_this, aProgress );
}

/* Variants derived from the class : 'Effects::Effect' */
EW_DEFINE_CLASS_VARIANTS( EffectsEffect )
EW_END_OF_CLASS_VARIANTS( EffectsEffect )

/* Virtual Method Table (VMT) for the class : 'Effects::Effect' */
EW_DEFINE_CLASS( EffectsEffect, XObject, timer, timer, OnFinished, direction, direction, 
                 direction, "Effects::Effect" )
  EffectsEffect_Animate,
EW_END_OF_CLASS( EffectsEffect )

/* Initializer for the class 'Effects::Int32Effect' */
void EffectsInt32Effect__Init( EffectsInt32Effect _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  EffectsEffect__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( EffectsInt32Effect );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( EffectsInt32Effect );

  /* ... and initialize objects, variables, properties, etc. */
}

/* Re-Initializer for the class 'Effects::Int32Effect' */
void EffectsInt32Effect__ReInit( EffectsInt32Effect _this )
{
  /* At first re-initialize the super class ... */
  EffectsEffect__ReInit( &_this->_.Super );
}

/* Finalizer method for the class 'Effects::Int32Effect' */
void EffectsInt32Effect__Done( EffectsInt32Effect _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( EffectsEffect );

  /* Don't forget to deinitialize the super class ... */
  EffectsEffect__Done( &_this->_.Super );
}

/* 'C' function for method : 'Effects::Int32Effect.Animate()' */
void EffectsInt32Effect_Animate( EffectsInt32Effect _this, XFloat aProgress )
{
  _this->Value = (XInt32)EwMathRound( 255.0f * aProgress );

  if ( _this->Outlet.Object != 0 )
    EwOnSetInt32( _this->Outlet, _this->Value );
}

/* Variants derived from the class : 'Effects::Int32Effect' */
EW_DEFINE_CLASS_VARIANTS( EffectsInt32Effect )
EW_END_OF_CLASS_VARIANTS( EffectsInt32Effect )

/* Virtual Method Table (VMT) for the class : 'Effects::Int32Effect' */
EW_DEFINE_CLASS( EffectsInt32Effect, EffectsEffect, Outlet, Outlet, Outlet, Outlet, 
                 Value, Value, "Effects::Int32Effect" )
  EffectsInt32Effect_Animate,
EW_END_OF_CLASS( EffectsInt32Effect )

/* Initializer for the class 'Effects::ColorEffect' */
void EffectsColorEffect__Init( EffectsColorEffect _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  EffectsEffect__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( EffectsColorEffect );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( EffectsColorEffect );

  /* ... and initialize objects, variables, properties, etc. */
  _this->Value2 = _Const0000;
}

/* Re-Initializer for the class 'Effects::ColorEffect' */
void EffectsColorEffect__ReInit( EffectsColorEffect _this )
{
  /* At first re-initialize the super class ... */
  EffectsEffect__ReInit( &_this->_.Super );
}

/* Finalizer method for the class 'Effects::ColorEffect' */
void EffectsColorEffect__Done( EffectsColorEffect _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( EffectsEffect );

  /* Don't forget to deinitialize the super class ... */
  EffectsEffect__Done( &_this->_.Super );
}

/* 'C' function for method : 'Effects::ColorEffect.Animate()' */
void EffectsColorEffect_Animate( EffectsColorEffect _this, XFloat aProgress )
{
  XInt32 red = _this->Value1.Red;
  XInt32 green = _this->Value1.Green;
  XInt32 blue = _this->Value1.Blue;
  XInt32 alpha = _this->Value1.Alpha;

  red = red + (XInt32)((XFloat)( _this->Value2.Red - red ) * aProgress );
  green = green + (XInt32)((XFloat)( _this->Value2.Green - green ) * aProgress );
  blue = blue + (XInt32)((XFloat)( _this->Value2.Blue - blue ) * aProgress );
  alpha = alpha + (XInt32)((XFloat)( _this->Value2.Alpha - alpha ) * aProgress );

  if ( red < 0 )
    red = 0;

  if ( red > 255 )
    red = 255;

  if ( green < 0 )
    green = 0;

  if ( green > 255 )
    green = 255;

  if ( blue < 0 )
    blue = 0;

  if ( blue > 255 )
    blue = 255;

  if ( alpha < 0 )
    alpha = 0;

  if ( alpha > 255 )
    alpha = 255;

  _this->Value = EwNewColor((XUInt8)red, (XUInt8)green, (XUInt8)blue, (XUInt8)alpha );

  if ( _this->Outlet.Object != 0 )
    EwOnSetColor( _this->Outlet, _this->Value );
}

/* Variants derived from the class : 'Effects::ColorEffect' */
EW_DEFINE_CLASS_VARIANTS( EffectsColorEffect )
EW_END_OF_CLASS_VARIANTS( EffectsColorEffect )

/* Virtual Method Table (VMT) for the class : 'Effects::ColorEffect' */
EW_DEFINE_CLASS( EffectsColorEffect, EffectsEffect, Outlet, Outlet, Outlet, Outlet, 
                 Value, Value, "Effects::ColorEffect" )
  EffectsColorEffect_Animate,
EW_END_OF_CLASS( EffectsColorEffect )

/* Initializer for the class 'Effects::EffectTimerClass' */
void EffectsEffectTimerClass__Init( EffectsEffectTimerClass _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  CoreTimer__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( EffectsEffectTimerClass );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( EffectsEffectTimerClass );
}

/* Re-Initializer for the class 'Effects::EffectTimerClass' */
void EffectsEffectTimerClass__ReInit( EffectsEffectTimerClass _this )
{
  /* At first re-initialize the super class ... */
  CoreTimer__ReInit( &_this->_.Super );
}

/* Finalizer method for the class 'Effects::EffectTimerClass' */
void EffectsEffectTimerClass__Done( EffectsEffectTimerClass _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( CoreTimer );

  /* Don't forget to deinitialize the super class ... */
  CoreTimer__Done( &_this->_.Super );
}

/* The method Trigger() will be invoked when the timer is expired (when the interval 
   defined in @Begin or @Period is elapsed). The method can be overridden and implemented 
   in derived classes. The default implementation of this method sends a signal 
   to the slot method stored in the @OnTrigger property. */
void EffectsEffectTimerClass_Trigger( EffectsEffectTimerClass _this )
{
  CoreTimer_Trigger((CoreTimer)_this );
  EwNotifyObjObservers((XObject)_this, 0 );
}

/* Variants derived from the class : 'Effects::EffectTimerClass' */
EW_DEFINE_CLASS_VARIANTS( EffectsEffectTimerClass )
EW_END_OF_CLASS_VARIANTS( EffectsEffectTimerClass )

/* Virtual Method Table (VMT) for the class : 'Effects::EffectTimerClass' */
EW_DEFINE_CLASS( EffectsEffectTimerClass, CoreTimer, _.VMT, _.VMT, _.VMT, _.VMT, 
                 _.VMT, _.VMT, "Effects::EffectTimerClass" )
  EffectsEffectTimerClass_Trigger,
EW_END_OF_CLASS( EffectsEffectTimerClass )

/* The global autoobject Effects::EffectTimer triggers all actually active animation 
   effects. In this way all effects will run simultanously. Per default the timer 
   is configured with 15 ms period (~60 FPS). By overriding the Effects::EffectTimer 
   autoobject by a variant you can specify another resolution to drive the animations. */
EW_DEFINE_AUTOOBJECT( EffectsEffectTimer, EffectsEffectTimerClass )

/* Initializer for the auto object 'Effects::EffectTimer' */
void EffectsEffectTimer__Init( EffectsEffectTimerClass _this )
{
  CoreTimer_OnSetPeriod((CoreTimer)_this, 15 );
  CoreTimer_OnSetEnabled((CoreTimer)_this, 1 );
}

/* Re-Initializer for the auto object 'Effects::EffectTimer' */
void EffectsEffectTimer__ReInit( EffectsEffectTimerClass _this )
{
  EW_UNUSED_ARG( _this );
}

/* Table with links to derived variants of the auto object : 'Effects::EffectTimer' */
EW_DEFINE_AUTOOBJECT_VARIANTS( EffectsEffectTimer )
EW_END_OF_AUTOOBJECT_VARIANTS( EffectsEffectTimer )

/* Embedded Wizard */
