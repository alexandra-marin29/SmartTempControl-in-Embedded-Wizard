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

#ifndef Clock_H
#define Clock_H

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
#include "_ClockDayOfWeek.h"
#include "_ClockDigit.h"
#include "_ClockDots.h"

/* Bitmap resource : 'Clock::DigitImages' */
EW_DECLARE_BITMAP_RES( ClockDigitImages )

/* Bitmap resource : 'Clock::DotsImages' */
EW_DECLARE_BITMAP_RES( ClockDotsImages )

/* Bitmap resource : 'Clock::DOWImages' */
EW_DECLARE_BITMAP_RES( ClockDOWImages )

/* Bitmap resource : 'Clock::BackgroundClock' */
EW_DECLARE_BITMAP_RES( ClockBackgroundClock )

#ifdef __cplusplus
  }
#endif

#endif /* Clock_H */

/* Embedded Wizard */
