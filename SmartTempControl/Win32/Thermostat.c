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
#include "_CorePropertyObserver.h"
#include "_CoreRotateTouchHandler.h"
#include "_CoreSimpleTouchHandler.h"
#include "_CoreTimer.h"
#include "_CoreView.h"
#include "_EffectsColorEffect.h"
#include "_EffectsInt32Effect.h"
#include "_GraphicsPath.h"
#include "_ResourcesBitmap.h"
#include "_ResourcesFont.h"
#include "_ThermostatDefaultThermostat.h"
#include "_ThermostatDeviceClass.h"
#include "_ThermostatExitScreen.h"
#include "_ThermostatFanMode.h"
#include "_ThermostatLogo.h"
#include "_ThermostatTemperatureController.h"
#include "_ThermostatThermostat.h"
#include "_ViewsImage.h"
#include "_ViewsRectangle.h"
#include "_ViewsStrokePath.h"
#include "_ViewsText.h"
#include "_ViewsWallpaper.h"
#include "_ViewsWarpImage.h"
#include "_WidgetSetRadioButton.h"
#include "_WidgetSetRadioButtonConfig.h"
#include "_WidgetSetToggleButton.h"
#include "_WidgetSetToggleButtonConfig.h"
#include "_WidgetSetVerticalSlider.h"
#include "_WidgetSetVerticalSliderConfig.h"
#include "Core.h"
#include "Resources.h"
#include "Thermostat.h"
#include "Views.h"

/* Compressed strings for the language 'Default'. */
EW_CONST_STRING_PRAGMA static const unsigned int _StringsDefault0[] =
{
  0x000000BE, /* ratio 75.79 % */
  0xB8001300, 0x00064452, 0x1C5C0018, 0xC00B0004, 0x09100010, 0x10A22C0C, 0x0D898162,
  0x3054421F, 0x001861F1, 0x01D00070, 0x1BC00690, 0x02206E00, 0x08913030, 0x54798F80,
  0x84E89822, 0x00338024, 0xB95488D0, 0x9795A260, 0x1D00C600, 0x4A64F259, 0x16260D88,
  0x08335001, 0x98002100, 0x020A5800, 0x4E001180, 0x4814426B, 0x94D009B0, 0x51B28075,
  0xD5E26079, 0x42AA00AC, 0x88F049EC, 0x0064B7C9, 0xB3100188, 0x2A10800C, 0x000406F3,
  0x00000000
};

/* Constant values used in this 'C' module only. */
static const XPoint _Const0000 = { 75, 44 };
static const XColor _Const0001 = { 0xFF, 0xFF, 0xFF, 0xFF };
static const XPoint _Const0002 = { 440, 44 };
static const XPoint _Const0003 = { 44, 44 };
static const XPoint _Const0004 = { 40, 320 };
static const XRect _Const0005 = {{ 0, 0 }, { 340, 340 }};
static const XColor _Const0006 = { 0x00, 0x00, 0x00, 0xFF };
static const XRect _Const0007 = {{ 10, 10 }, { 330, 330 }};
static const XPoint _Const0008 = { 50, 120 };
static const XPoint _Const0009 = { 150, 120 };
static const XPoint _Const000A = { 150, 20 };
static const XPoint _Const000B = { 50, 20 };
static const XPoint _Const000C = { 15, 132 };
static const XColor _Const000D = { 0x00, 0x00, 0xFF, 0xFF };
static const XRect _Const000E = {{ 140, 240 }, { 200, 280 }};
static const XRect _Const000F = {{ 120, 100 }, { 221, 140 }};
static const XStringRes _Const0010 = { _StringsDefault0, 0x0002 };
static const XPoint _Const0011 = { 93, 199 };
static const XPoint _Const0012 = { 157, 199 };
static const XPoint _Const0013 = { 157, 140 };
static const XPoint _Const0014 = { 93, 140 };
static const XPoint _Const0015 = { 191, 187 };
static const XPoint _Const0016 = { 253, 187 };
static const XPoint _Const0017 = { 253, 147 };
static const XPoint _Const0018 = { 191, 147 };
static const XPoint _Const0019 = { 0, 0 };
static const XStringRes _Const001A = { _StringsDefault0, 0x000B };
static const XStringRes _Const001B = { _StringsDefault0, 0x000F };
static const XRect _Const001C = {{ 0, 0 }, { 800, 480 }};
static const XRect _Const001D = {{ -3, 0 }, { 799, 480 }};
static const XRect _Const001E = {{ -3, 0 }, { 797, 480 }};
static const XPoint _Const001F = { 3, 16 };
static const XPoint _Const0020 = { 91, 16 };
static const XPoint _Const0021 = { 91, 89 };
static const XPoint _Const0022 = { 6, 89 };
static const XPoint _Const0023 = { 6, 9 };
static const XPoint _Const0024 = { 106, 9 };
static const XPoint _Const0025 = { 106, 109 };
static const XPoint _Const0026 = { 6, 109 };
static const XRect _Const0027 = {{ 735, 16 }, { 779, 60 }};
static const XRect _Const0028 = {{ 443, 207 }, { 518, 251 }};
static const XStringRes _Const0029 = { _StringsDefault0, 0x0014 };
static const XRect _Const002A = {{ 205, 38 }, { 328, 82 }};
static const XStringRes _Const002B = { _StringsDefault0, 0x001E };
static const XRect _Const002C = {{ 347, 38 }, { 478, 82 }};
static const XStringRes _Const002D = { _StringsDefault0, 0x0024 };
static const XRect _Const002E = {{ 518, 38 }, { 713, 82 }};
static const XStringRes _Const002F = { _StringsDefault0, 0x002C };
static const XRect _Const0030 = {{ 35, 95 }, { 375, 435 }};
static const XRect _Const0031 = {{ 425, 251 }, { 556, 281 }};
static const XStringRes _Const0032 = { _StringsDefault0, 0x0037 };
static const XPoint _Const0033 = { 708, 3 };
static const XPoint _Const0034 = { 805, 3 };
static const XPoint _Const0035 = { 805, 95 };
static const XPoint _Const0036 = { 708, 95 };
static const XRect _Const0037 = {{ 425, 347 }, { 662, 414 }};
static const XRect _Const0038 = {{ -3, 38 }, { 158, 82 }};
static const XStringRes _Const0039 = { _StringsDefault0, 0x0044 };
static const XRect _Const003A = {{ 700, 380 }, { 800, 480 }};
static const XRect _Const003B = {{ 130, 240 }, { 285, 290 }};
static const XRect _Const003C = {{ 647, 192 }, { 708, 251 }};
static const XRect _Const003D = {{ 627, 250 }, { 727, 280 }};
static const XStringRes _Const003E = { _StringsDefault0, 0x004D };
static const XPoint _Const003F = { 627, 181 };
static const XPoint _Const0040 = { 727, 181 };
static const XPoint _Const0041 = { 727, 281 };
static const XPoint _Const0042 = { 627, 281 };
static const XColor _Const0043 = { 0xD7, 0xD7, 0xD7, 0xFF };
static const XColor _Const0044 = { 0xDD, 0xDD, 0xDD, 0xFF };
static const XRect _Const0045 = {{ 285, 370 }, { 516, 481 }};
static const XStringRes _Const0046 = { _StringsDefault0, 0x0054 };
static const XRect _Const0047 = {{ 230, 99 }, { 568, 381 }};
static const XRect _Const0048 = {{ 326, 197 }, { 472, 334 }};
static const XRect _Const0049 = {{ 230, 70 }, { 570, 410 }};
static const XRect _Const004A = {{ 11, 11 }, { 78, 81 }};
static const XRect _Const004B = {{ 0, 0 }, { 100, 100 }};
static const XColor _Const004C = { 0xFF, 0xFF, 0xFF, 0x00 };
static const XRect _Const004D = {{ 25, 30 }, { 75, 80 }};
static const XRect _Const004E = {{ 359, 80 }, { 399, 400 }};
static const XRect _Const004F = {{ 298, 344 }, { 348, 394 }};
static const XRect _Const0050 = {{ 298, 78 }, { 348, 128 }};
static const XRect _Const0051 = {{ 0, 6 }, { 87, 78 }};

/* User defined auto object: 'Thermostat::SwingSwitchConfig' */
EW_DEFINE_AUTOOBJECT( ThermostatSwingSwitchConfig, WidgetSetToggleButtonConfig )

/* Initializer for the auto object 'Thermostat::SwingSwitchConfig' */
void ThermostatSwingSwitchConfig__Init( WidgetSetToggleButtonConfig _this )
{
  WidgetSetToggleButtonConfig_OnSetFaceOnFrameActive( _this, 3 );
  WidgetSetToggleButtonConfig_OnSetFaceOnFrameFocused( _this, 1 );
  WidgetSetToggleButtonConfig_OnSetFaceOnFrameDisabled( _this, 1 );
  WidgetSetToggleButtonConfig_OnSetFaceOnFrameDefault( _this, 1 );
  WidgetSetToggleButtonConfig_OnSetFaceOnBitmapActive( _this, EwLoadResource( &ThermostatSwingSwitch, 
  ResourcesBitmap ));
  WidgetSetToggleButtonConfig_OnSetFaceOnBitmapFocused( _this, EwLoadResource( &ThermostatSwingSwitch, 
  ResourcesBitmap ));
  WidgetSetToggleButtonConfig_OnSetFaceOnBitmapDisabled( _this, EwLoadResource( 
  &ThermostatSwingSwitch, ResourcesBitmap ));
  WidgetSetToggleButtonConfig_OnSetFaceOnBitmapDefault( _this, EwLoadResource( &ThermostatSwingSwitch, 
  ResourcesBitmap ));
  WidgetSetToggleButtonConfig_OnSetFaceOffFrameActive( _this, 2 );
  WidgetSetToggleButtonConfig_OnSetFaceOffFrameFocused( _this, 0 );
  WidgetSetToggleButtonConfig_OnSetFaceOffFrameDisabled( _this, 0 );
  WidgetSetToggleButtonConfig_OnSetFaceOffFrameDefault( _this, 0 );
  WidgetSetToggleButtonConfig_OnSetFaceOffBitmapActive( _this, EwLoadResource( &ThermostatSwingSwitch, 
  ResourcesBitmap ));
  WidgetSetToggleButtonConfig_OnSetFaceOffBitmapFocused( _this, EwLoadResource( 
  &ThermostatSwingSwitch, ResourcesBitmap ));
  WidgetSetToggleButtonConfig_OnSetFaceOffBitmapDisabled( _this, EwLoadResource( 
  &ThermostatSwingSwitch, ResourcesBitmap ));
  WidgetSetToggleButtonConfig_OnSetFaceOffBitmapDefault( _this, EwLoadResource( 
  &ThermostatSwingSwitch, ResourcesBitmap ));
  WidgetSetToggleButtonConfig_OnSetWidgetMaxSize( _this, _Const0000 );
  WidgetSetToggleButtonConfig_OnSetWidgetMinSize( _this, _Const0000 );
}

/* Re-Initializer for the auto object 'Thermostat::SwingSwitchConfig' */
void ThermostatSwingSwitchConfig__ReInit( WidgetSetToggleButtonConfig _this )
{
  EW_UNUSED_ARG( _this );
}

/* Table with links to derived variants of the auto object : 'Thermostat::SwingSwitchConfig' */
EW_DEFINE_AUTOOBJECT_VARIANTS( ThermostatSwingSwitchConfig )
EW_END_OF_AUTOOBJECT_VARIANTS( ThermostatSwingSwitchConfig )

/* Include a file containing the bitmap resource : 'Thermostat::SwingSwitch' */
#include "_ThermostatSwingSwitch.h"

/* Table with links to derived variants of the bitmap resource : 'Thermostat::SwingSwitch' */
EW_RES_WITHOUT_VARIANTS( ThermostatSwingSwitch )

/* Include a file containing the bitmap resource : 'Thermostat::ButtonDay' */
#include "_ThermostatButtonDay.h"

/* Table with links to derived variants of the bitmap resource : 'Thermostat::ButtonDay' */
EW_RES_WITHOUT_VARIANTS( ThermostatButtonDay )

/* Include a file containing the bitmap resource : 'Thermostat::ButtonNight' */
#include "_ThermostatButtonNight.h"

/* Table with links to derived variants of the bitmap resource : 'Thermostat::ButtonNight' */
EW_RES_WITHOUT_VARIANTS( ThermostatButtonNight )

/* Include a file containing the bitmap resource : 'Thermostat::ButtonVacation' */
#include "_ThermostatButtonVacation.h"

/* Table with links to derived variants of the bitmap resource : 'Thermostat::ButtonVacation' */
EW_RES_WITHOUT_VARIANTS( ThermostatButtonVacation )

/* User defined auto object: 'Thermostat::RadioButtonDayConfig' */
EW_DEFINE_AUTOOBJECT( ThermostatRadioButtonDayConfig, WidgetSetRadioButtonConfig )

/* Initializer for the auto object 'Thermostat::RadioButtonDayConfig' */
void ThermostatRadioButtonDayConfig__Init( WidgetSetRadioButtonConfig _this )
{
  WidgetSetRadioButtonConfig_OnSetLabelOnColorActive( _this, _Const0001 );
  WidgetSetRadioButtonConfig_OnSetLabelOnColorFocused( _this, _Const0001 );
  WidgetSetRadioButtonConfig_OnSetLabelOnColorDefault( _this, ThermostatHot );
  WidgetSetRadioButtonConfig_OnSetLabelOffColorActive( _this, _Const0001 );
  WidgetSetRadioButtonConfig_OnSetLabelOffColorFocused( _this, _Const0001 );
  WidgetSetRadioButtonConfig_OnSetLabelOffColorDefault( _this, ThermostatHot );
  WidgetSetRadioButtonConfig_OnSetLabelMarginLeft( _this, 50 );
  WidgetSetRadioButtonConfig_OnSetLabelAlignment( _this, ViewsTextAlignmentAlignHorzLeft 
  | ViewsTextAlignmentAlignVertCenter );
  WidgetSetRadioButtonConfig_OnSetLabelOnFont( _this, EwLoadResource( &ThermostatFontL, 
  ResourcesFont ));
  WidgetSetRadioButtonConfig_OnSetLabelOffFont( _this, EwLoadResource( &ThermostatFontL, 
  ResourcesFont ));
  WidgetSetRadioButtonConfig_OnSetFaceLayout( _this, CoreLayoutAlignToBottom | CoreLayoutAlignToLeft 
  | CoreLayoutAlignToTop );
  WidgetSetRadioButtonConfig_OnSetFaceOnFrameActive( _this, 1 );
  WidgetSetRadioButtonConfig_OnSetFaceOnFrameFocused( _this, 1 );
  WidgetSetRadioButtonConfig_OnSetFaceOnFrameDisabled( _this, 1 );
  WidgetSetRadioButtonConfig_OnSetFaceOnFrameDefault( _this, 1 );
  WidgetSetRadioButtonConfig_OnSetFaceOnBitmapActive( _this, EwLoadResource( &ThermostatButtonDay, 
  ResourcesBitmap ));
  WidgetSetRadioButtonConfig_OnSetFaceOnBitmapFocused( _this, EwLoadResource( &ThermostatButtonDay, 
  ResourcesBitmap ));
  WidgetSetRadioButtonConfig_OnSetFaceOnBitmapDisabled( _this, EwLoadResource( &ThermostatButtonDay, 
  ResourcesBitmap ));
  WidgetSetRadioButtonConfig_OnSetFaceOnBitmapDefault( _this, EwLoadResource( &ThermostatButtonDay, 
  ResourcesBitmap ));
  WidgetSetRadioButtonConfig_OnSetFaceOffFrameActive( _this, 0 );
  WidgetSetRadioButtonConfig_OnSetFaceOffFrameFocused( _this, 0 );
  WidgetSetRadioButtonConfig_OnSetFaceOffFrameDisabled( _this, 0 );
  WidgetSetRadioButtonConfig_OnSetFaceOffFrameDefault( _this, 0 );
  WidgetSetRadioButtonConfig_OnSetFaceOffBitmapActive( _this, EwLoadResource( &ThermostatButtonDay, 
  ResourcesBitmap ));
  WidgetSetRadioButtonConfig_OnSetFaceOffBitmapFocused( _this, EwLoadResource( &ThermostatButtonDay, 
  ResourcesBitmap ));
  WidgetSetRadioButtonConfig_OnSetFaceOffBitmapDisabled( _this, EwLoadResource( 
  &ThermostatButtonDay, ResourcesBitmap ));
  WidgetSetRadioButtonConfig_OnSetFaceOffBitmapDefault( _this, EwLoadResource( &ThermostatButtonDay, 
  ResourcesBitmap ));
  WidgetSetRadioButtonConfig_OnSetWidgetMaxSize( _this, _Const0002 );
  WidgetSetRadioButtonConfig_OnSetWidgetMinSize( _this, _Const0003 );
}

/* Re-Initializer for the auto object 'Thermostat::RadioButtonDayConfig' */
void ThermostatRadioButtonDayConfig__ReInit( WidgetSetRadioButtonConfig _this )
{
  EW_UNUSED_ARG( _this );
}

/* Table with links to derived variants of the auto object : 'Thermostat::RadioButtonDayConfig' */
EW_DEFINE_AUTOOBJECT_VARIANTS( ThermostatRadioButtonDayConfig )
EW_END_OF_AUTOOBJECT_VARIANTS( ThermostatRadioButtonDayConfig )

/* User defined auto object: 'Thermostat::RadioButtonNightConfig' */
EW_DEFINE_AUTOOBJECT( ThermostatRadioButtonNightConfig, WidgetSetRadioButtonConfig )

/* Initializer for the auto object 'Thermostat::RadioButtonNightConfig' */
void ThermostatRadioButtonNightConfig__Init( WidgetSetRadioButtonConfig _this )
{
  WidgetSetRadioButtonConfig_OnSetLabelOnColorActive( _this, _Const0001 );
  WidgetSetRadioButtonConfig_OnSetLabelOnColorFocused( _this, _Const0001 );
  WidgetSetRadioButtonConfig_OnSetLabelOnColorDefault( _this, ThermostatCold );
  WidgetSetRadioButtonConfig_OnSetLabelOffColorActive( _this, _Const0001 );
  WidgetSetRadioButtonConfig_OnSetLabelOffColorFocused( _this, _Const0001 );
  WidgetSetRadioButtonConfig_OnSetLabelOffColorDefault( _this, ThermostatCold );
  WidgetSetRadioButtonConfig_OnSetLabelMarginLeft( _this, 50 );
  WidgetSetRadioButtonConfig_OnSetLabelAlignment( _this, ViewsTextAlignmentAlignHorzLeft 
  | ViewsTextAlignmentAlignVertCenter );
  WidgetSetRadioButtonConfig_OnSetLabelOnFont( _this, EwLoadResource( &ThermostatFontL, 
  ResourcesFont ));
  WidgetSetRadioButtonConfig_OnSetLabelOffFont( _this, EwLoadResource( &ThermostatFontL, 
  ResourcesFont ));
  WidgetSetRadioButtonConfig_OnSetFaceLayout( _this, CoreLayoutAlignToBottom | CoreLayoutAlignToLeft 
  | CoreLayoutAlignToTop );
  WidgetSetRadioButtonConfig_OnSetFaceOnFrameActive( _this, 1 );
  WidgetSetRadioButtonConfig_OnSetFaceOnFrameFocused( _this, 1 );
  WidgetSetRadioButtonConfig_OnSetFaceOnFrameDisabled( _this, 1 );
  WidgetSetRadioButtonConfig_OnSetFaceOnFrameDefault( _this, 1 );
  WidgetSetRadioButtonConfig_OnSetFaceOnBitmapActive( _this, EwLoadResource( &ThermostatButtonNight, 
  ResourcesBitmap ));
  WidgetSetRadioButtonConfig_OnSetFaceOnBitmapFocused( _this, EwLoadResource( &ThermostatButtonNight, 
  ResourcesBitmap ));
  WidgetSetRadioButtonConfig_OnSetFaceOnBitmapDisabled( _this, EwLoadResource( &ThermostatButtonNight, 
  ResourcesBitmap ));
  WidgetSetRadioButtonConfig_OnSetFaceOnBitmapDefault( _this, EwLoadResource( &ThermostatButtonNight, 
  ResourcesBitmap ));
  WidgetSetRadioButtonConfig_OnSetFaceOffFrameActive( _this, 0 );
  WidgetSetRadioButtonConfig_OnSetFaceOffFrameFocused( _this, 0 );
  WidgetSetRadioButtonConfig_OnSetFaceOffFrameDisabled( _this, 0 );
  WidgetSetRadioButtonConfig_OnSetFaceOffFrameDefault( _this, 0 );
  WidgetSetRadioButtonConfig_OnSetFaceOffBitmapActive( _this, EwLoadResource( &ThermostatButtonNight, 
  ResourcesBitmap ));
  WidgetSetRadioButtonConfig_OnSetFaceOffBitmapFocused( _this, EwLoadResource( &ThermostatButtonNight, 
  ResourcesBitmap ));
  WidgetSetRadioButtonConfig_OnSetFaceOffBitmapDisabled( _this, EwLoadResource( 
  &ThermostatButtonNight, ResourcesBitmap ));
  WidgetSetRadioButtonConfig_OnSetFaceOffBitmapDefault( _this, EwLoadResource( &ThermostatButtonNight, 
  ResourcesBitmap ));
  WidgetSetRadioButtonConfig_OnSetWidgetMaxSize( _this, _Const0002 );
  WidgetSetRadioButtonConfig_OnSetWidgetMinSize( _this, _Const0003 );
}

/* Re-Initializer for the auto object 'Thermostat::RadioButtonNightConfig' */
void ThermostatRadioButtonNightConfig__ReInit( WidgetSetRadioButtonConfig _this )
{
  EW_UNUSED_ARG( _this );
}

/* Table with links to derived variants of the auto object : 'Thermostat::RadioButtonNightConfig' */
EW_DEFINE_AUTOOBJECT_VARIANTS( ThermostatRadioButtonNightConfig )
EW_END_OF_AUTOOBJECT_VARIANTS( ThermostatRadioButtonNightConfig )

/* User defined auto object: 'Thermostat::RadioButtonVacationConfig' */
EW_DEFINE_AUTOOBJECT( ThermostatRadioButtonVacationConfig, WidgetSetRadioButtonConfig )

/* Initializer for the auto object 'Thermostat::RadioButtonVacationConfig' */
void ThermostatRadioButtonVacationConfig__Init( WidgetSetRadioButtonConfig _this )
{
  WidgetSetRadioButtonConfig_OnSetLabelOnColorActive( _this, _Const0001 );
  WidgetSetRadioButtonConfig_OnSetLabelOnColorFocused( _this, _Const0001 );
  WidgetSetRadioButtonConfig_OnSetLabelOnColorDefault( _this, ThermostatVac );
  WidgetSetRadioButtonConfig_OnSetLabelOffColorActive( _this, _Const0001 );
  WidgetSetRadioButtonConfig_OnSetLabelOffColorFocused( _this, _Const0001 );
  WidgetSetRadioButtonConfig_OnSetLabelOffColorDefault( _this, ThermostatVac );
  WidgetSetRadioButtonConfig_OnSetLabelMarginLeft( _this, 50 );
  WidgetSetRadioButtonConfig_OnSetLabelAlignment( _this, ViewsTextAlignmentAlignHorzLeft 
  | ViewsTextAlignmentAlignVertCenter );
  WidgetSetRadioButtonConfig_OnSetLabelOnFont( _this, EwLoadResource( &ThermostatFontL, 
  ResourcesFont ));
  WidgetSetRadioButtonConfig_OnSetLabelOffFont( _this, EwLoadResource( &ThermostatFontL, 
  ResourcesFont ));
  WidgetSetRadioButtonConfig_OnSetFaceLayout( _this, CoreLayoutAlignToBottom | CoreLayoutAlignToLeft 
  | CoreLayoutAlignToTop );
  WidgetSetRadioButtonConfig_OnSetFaceOnFrameActive( _this, 1 );
  WidgetSetRadioButtonConfig_OnSetFaceOnFrameFocused( _this, 1 );
  WidgetSetRadioButtonConfig_OnSetFaceOnFrameDisabled( _this, 1 );
  WidgetSetRadioButtonConfig_OnSetFaceOnFrameDefault( _this, 1 );
  WidgetSetRadioButtonConfig_OnSetFaceOnBitmapActive( _this, EwLoadResource( &ThermostatButtonVacation, 
  ResourcesBitmap ));
  WidgetSetRadioButtonConfig_OnSetFaceOnBitmapFocused( _this, EwLoadResource( &ThermostatButtonVacation, 
  ResourcesBitmap ));
  WidgetSetRadioButtonConfig_OnSetFaceOnBitmapDisabled( _this, EwLoadResource( &ThermostatButtonVacation, 
  ResourcesBitmap ));
  WidgetSetRadioButtonConfig_OnSetFaceOnBitmapDefault( _this, EwLoadResource( &ThermostatButtonVacation, 
  ResourcesBitmap ));
  WidgetSetRadioButtonConfig_OnSetFaceOffFrameActive( _this, 0 );
  WidgetSetRadioButtonConfig_OnSetFaceOffFrameFocused( _this, 0 );
  WidgetSetRadioButtonConfig_OnSetFaceOffFrameDisabled( _this, 0 );
  WidgetSetRadioButtonConfig_OnSetFaceOffFrameDefault( _this, 0 );
  WidgetSetRadioButtonConfig_OnSetFaceOffBitmapActive( _this, EwLoadResource( &ThermostatButtonVacation, 
  ResourcesBitmap ));
  WidgetSetRadioButtonConfig_OnSetFaceOffBitmapFocused( _this, EwLoadResource( &ThermostatButtonVacation, 
  ResourcesBitmap ));
  WidgetSetRadioButtonConfig_OnSetFaceOffBitmapDisabled( _this, EwLoadResource( 
  &ThermostatButtonVacation, ResourcesBitmap ));
  WidgetSetRadioButtonConfig_OnSetFaceOffBitmapDefault( _this, EwLoadResource( &ThermostatButtonVacation, 
  ResourcesBitmap ));
  WidgetSetRadioButtonConfig_OnSetWidgetMaxSize( _this, _Const0002 );
  WidgetSetRadioButtonConfig_OnSetWidgetMinSize( _this, _Const0003 );
}

/* Re-Initializer for the auto object 'Thermostat::RadioButtonVacationConfig' */
void ThermostatRadioButtonVacationConfig__ReInit( WidgetSetRadioButtonConfig _this )
{
  EW_UNUSED_ARG( _this );
}

/* Table with links to derived variants of the auto object : 'Thermostat::RadioButtonVacationConfig' */
EW_DEFINE_AUTOOBJECT_VARIANTS( ThermostatRadioButtonVacationConfig )
EW_END_OF_AUTOOBJECT_VARIANTS( ThermostatRadioButtonVacationConfig )

/* Include a file containing the font resource : 'Thermostat::FontL' */
#include "_ThermostatFontL.h"

/* Table with links to derived variants of the font resource : 'Thermostat::FontL' */
EW_RES_WITHOUT_VARIANTS( ThermostatFontL )

/* Include a file containing the bitmap resource : 'Thermostat::VertBar' */
#include "_ThermostatVertBar.h"

/* Table with links to derived variants of the bitmap resource : 'Thermostat::VertBar' */
EW_RES_WITHOUT_VARIANTS( ThermostatVertBar )

/* User defined auto object: 'Thermostat::VerticalSliderConfig' */
EW_DEFINE_AUTOOBJECT( ThermostatVerticalSliderConfig, WidgetSetVerticalSliderConfig )

/* Initializer for the auto object 'Thermostat::VerticalSliderConfig' */
void ThermostatVerticalSliderConfig__Init( WidgetSetVerticalSliderConfig _this )
{
  WidgetSetVerticalSliderConfig_OnSetTrackAboveFrameActive( _this, 0 );
  WidgetSetVerticalSliderConfig_OnSetTrackAboveFrameFocused( _this, 0 );
  WidgetSetVerticalSliderConfig_OnSetTrackAboveFrameDisabled( _this, 0 );
  WidgetSetVerticalSliderConfig_OnSetTrackAboveFrameDefault( _this, 0 );
  WidgetSetVerticalSliderConfig_OnSetTrackAboveBitmapActive( _this, EwLoadResource( 
  &ThermostatVertBar, ResourcesBitmap ));
  WidgetSetVerticalSliderConfig_OnSetTrackAboveBitmapFocused( _this, EwLoadResource( 
  &ThermostatVertBar, ResourcesBitmap ));
  WidgetSetVerticalSliderConfig_OnSetTrackAboveBitmapDisabled( _this, EwLoadResource( 
  &ThermostatVertBar, ResourcesBitmap ));
  WidgetSetVerticalSliderConfig_OnSetTrackAboveBitmapDefault( _this, EwLoadResource( 
  &ThermostatVertBar, ResourcesBitmap ));
  WidgetSetVerticalSliderConfig_OnSetTrackBelowFrameActive( _this, 1 );
  WidgetSetVerticalSliderConfig_OnSetTrackBelowFrameFocused( _this, 1 );
  WidgetSetVerticalSliderConfig_OnSetTrackBelowFrameDisabled( _this, 1 );
  WidgetSetVerticalSliderConfig_OnSetTrackBelowFrameDefault( _this, 1 );
  WidgetSetVerticalSliderConfig_OnSetTrackBelowBitmapActive( _this, EwLoadResource( 
  &ThermostatVertBar, ResourcesBitmap ));
  WidgetSetVerticalSliderConfig_OnSetTrackBelowBitmapFocused( _this, EwLoadResource( 
  &ThermostatVertBar, ResourcesBitmap ));
  WidgetSetVerticalSliderConfig_OnSetTrackBelowBitmapDisabled( _this, EwLoadResource( 
  &ThermostatVertBar, ResourcesBitmap ));
  WidgetSetVerticalSliderConfig_OnSetTrackBelowBitmapDefault( _this, EwLoadResource( 
  &ThermostatVertBar, ResourcesBitmap ));
  WidgetSetVerticalSliderConfig_OnSetWidgetMaxSize( _this, _Const0004 );
  WidgetSetVerticalSliderConfig_OnSetWidgetMinSize( _this, _Const0004 );
}

/* Re-Initializer for the auto object 'Thermostat::VerticalSliderConfig' */
void ThermostatVerticalSliderConfig__ReInit( WidgetSetVerticalSliderConfig _this )
{
  EW_UNUSED_ARG( _this );
}

/* Table with links to derived variants of the auto object : 'Thermostat::VerticalSliderConfig' */
EW_DEFINE_AUTOOBJECT_VARIANTS( ThermostatVerticalSliderConfig )
EW_END_OF_AUTOOBJECT_VARIANTS( ThermostatVerticalSliderConfig )

/* Initializer for the class 'Thermostat::DeviceClass' */
void ThermostatDeviceClass__Init( ThermostatDeviceClass _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  TemplatesDeviceClass__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( ThermostatDeviceClass );

  /* ... then construct all embedded objects */
  CoreTimer__Init( &_this->ChangeTempTimer, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ThermostatDeviceClass );

  /* ... and initialize objects, variables, properties, etc. */
  _this->ActualTemp = 155;
  _this->NominalTemp = 215;
  _this->FanSpeed = 15;
  CoreTimer_OnSetPeriod( &_this->ChangeTempTimer, 350 );
  CoreTimer_OnSetEnabled( &_this->ChangeTempTimer, 1 );
  _this->ChangeTempTimer.OnTrigger = EwNewSlot( _this, ThermostatDeviceClass_ChangeActualTemp );
}

/* Re-Initializer for the class 'Thermostat::DeviceClass' */
void ThermostatDeviceClass__ReInit( ThermostatDeviceClass _this )
{
  /* At first re-initialize the super class ... */
  TemplatesDeviceClass__ReInit( &_this->_.Super );

  /* ... then re-construct all embedded objects */
  CoreTimer__ReInit( &_this->ChangeTempTimer );
}

/* Finalizer method for the class 'Thermostat::DeviceClass' */
void ThermostatDeviceClass__Done( ThermostatDeviceClass _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( TemplatesDeviceClass );

  /* Finalize all embedded objects */
  CoreTimer__Done( &_this->ChangeTempTimer );

  /* Don't forget to deinitialize the super class ... */
  TemplatesDeviceClass__Done( &_this->_.Super );
}

/* This method is intended to be called by the device to notify the GUI application 
   about an alternation of the property 'ActualTemp'. */
void ThermostatDeviceClass_UpdateActualTemp( ThermostatDeviceClass _this, XInt32 
  aNewValue )
{
  if ( aNewValue != _this->ActualTemp )
  {
    _this->ActualTemp = aNewValue;
    EwNotifyRefObservers( EwNewRef( _this, ThermostatDeviceClass_OnGetActualTemp, 
      ThermostatDeviceClass_OnSetActualTemp ), 0 );
  }
}

/* Wrapper function for the non virtual method : 'Thermostat::DeviceClass.UpdateActualTemp()' */
void ThermostatDeviceClass__UpdateActualTemp( void* _this, XInt32 aNewValue )
{
  ThermostatDeviceClass_UpdateActualTemp((ThermostatDeviceClass)_this, aNewValue );
}

/* 'C' function for method : 'Thermostat::DeviceClass.OnSetNominalTemp()' */
void ThermostatDeviceClass_OnSetNominalTemp( ThermostatDeviceClass _this, XInt32 
  value )
{
  if ( _this->NominalTemp == value )
    return;

  _this->NominalTemp = value;
  {
    /*
       TO DO:

       You can call a function of your own device API or you simply
       modify a variable existing in your middleware to reflect the
       new value:

       YourDevice_SetSomeValue( value );

       or

       YourDevice_SomeVariable = value;
    */
  }
  EwNotifyRefObservers( EwNewRef( _this, ThermostatDeviceClass_OnGetNominalTemp, 
    ThermostatDeviceClass_OnSetNominalTemp ), 0 );
}

/* 'C' function for method : 'Thermostat::DeviceClass.OnSetFanSpeed()' */
void ThermostatDeviceClass_OnSetFanSpeed( ThermostatDeviceClass _this, XInt32 value )
{
  if ( _this->FanSpeed == value )
    return;

  _this->FanSpeed = value;
  {
    /*
       TO DO:

       You can call a function of your own device API or you simply
       modify a variable existing in your middleware to reflect the
       new value:

       YourDevice_SetSomeValue( value );

       or

       YourDevice_SomeVariable = value;
    */
  }
  EwNotifyRefObservers( EwNewRef( _this, ThermostatDeviceClass_OnGetFanSpeed, ThermostatDeviceClass_OnSetFanSpeed ), 
    0 );
}

/* 'C' function for method : 'Thermostat::DeviceClass.OnSetSwingMode()' */
void ThermostatDeviceClass_OnSetSwingMode( ThermostatDeviceClass _this, XBool value )
{
  if ( _this->SwingMode == value )
    return;

  _this->SwingMode = value;
  {
    /*
       TO DO:

       You can call a function of your own device API or you simply
       modify a variable existing in your middleware to reflect the
       new value:

       YourDevice_SetSomeValue( value );

       or

       YourDevice_SomeVariable = value;
    */
  }
  EwNotifyRefObservers( EwNewRef( _this, ThermostatDeviceClass_OnGetSwingMode, ThermostatDeviceClass_OnSetSwingMode ), 
    0 );
}

/* 'C' function for method : 'Thermostat::DeviceClass.ChangeActualTemp()' */
void ThermostatDeviceClass_ChangeActualTemp( ThermostatDeviceClass _this, XObject 
  sender )
{
  XInt32 temp;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  temp = _this->ActualTemp;

  if ( _this->SettingNo == 0 )
    ThermostatDeviceClass_OnSetNominalTemp( _this, 215 );

  if ( _this->SettingNo == 1 )
    ThermostatDeviceClass_OnSetNominalTemp( _this, 190 );

  if ( _this->SettingNo == 2 )
    ThermostatDeviceClass_OnSetNominalTemp( _this, 170 );

  if ( _this->SwingMode == 1 )
  {
    if (( _this->FanSpeed > 30 ) && ( _this->FanSpeed < 50 ))
      ThermostatDeviceClass_OnSetNominalTemp( _this, _this->NominalTemp - 10 );

    if ( _this->FanSpeed > 50 )
      ThermostatDeviceClass_OnSetNominalTemp( _this, _this->NominalTemp - 20 );
  }

  if ( temp < _this->NominalTemp )
    temp = temp + 1;
  else
    if ( temp > _this->NominalTemp )
      temp = temp - 1;

  ThermostatDeviceClass_UpdateActualTemp( _this, temp );
}

/* 'C' function for method : 'Thermostat::DeviceClass.OnSetSettingNo()' */
void ThermostatDeviceClass_OnSetSettingNo( ThermostatDeviceClass _this, XInt32 value )
{
  if ( value > 3 )
    value = 3;

  if ( value < 0 )
    value = 0;

  if ( _this->SettingNo == value )
    return;

  _this->SettingNo = value;
  {
    /*
       TO DO:

       You can call a function of your own device API or you simply
       modify a variable existing in your middleware to reflect the
       new value:

       YourDevice_SetSomeValue( value );

       or

       YourDevice_SomeVariable = value;
    */
  }
  EwNotifyRefObservers( EwNewRef( _this, ThermostatDeviceClass_OnGetSettingNo, ThermostatDeviceClass_OnSetSettingNo ), 
    0 );
}

/* Default onget method for the property 'ActualTemp' */
XInt32 ThermostatDeviceClass_OnGetActualTemp( ThermostatDeviceClass _this )
{
  return _this->ActualTemp;
}

/* Default onset method for the property 'ActualTemp' */
void ThermostatDeviceClass_OnSetActualTemp( ThermostatDeviceClass _this, XInt32 
  value )
{
  _this->ActualTemp = value;
}

/* Default onget method for the property 'NominalTemp' */
XInt32 ThermostatDeviceClass_OnGetNominalTemp( ThermostatDeviceClass _this )
{
  return _this->NominalTemp;
}

/* Default onget method for the property 'FanSpeed' */
XInt32 ThermostatDeviceClass_OnGetFanSpeed( ThermostatDeviceClass _this )
{
  return _this->FanSpeed;
}

/* Default onget method for the property 'SwingMode' */
XBool ThermostatDeviceClass_OnGetSwingMode( ThermostatDeviceClass _this )
{
  return _this->SwingMode;
}

/* Default onget method for the property 'SettingNo' */
XInt32 ThermostatDeviceClass_OnGetSettingNo( ThermostatDeviceClass _this )
{
  return _this->SettingNo;
}

/* Variants derived from the class : 'Thermostat::DeviceClass' */
EW_DEFINE_CLASS_VARIANTS( ThermostatDeviceClass )
EW_END_OF_CLASS_VARIANTS( ThermostatDeviceClass )

/* Virtual Method Table (VMT) for the class : 'Thermostat::DeviceClass' */
EW_DEFINE_CLASS( ThermostatDeviceClass, TemplatesDeviceClass, ChangeTempTimer, ActualTemp, 
                 ActualTemp, ActualTemp, ActualTemp, ActualTemp, "Thermostat::DeviceClass" )
EW_END_OF_CLASS( ThermostatDeviceClass )

/* User defined auto object: 'Thermostat::Device' */
EW_DEFINE_AUTOOBJECT( ThermostatDevice, ThermostatDeviceClass )

/* Initializer for the auto object 'Thermostat::Device' */
void ThermostatDevice__Init( ThermostatDeviceClass _this )
{
  EW_UNUSED_ARG( _this );
}

/* Re-Initializer for the auto object 'Thermostat::Device' */
void ThermostatDevice__ReInit( ThermostatDeviceClass _this )
{
  EW_UNUSED_ARG( _this );
}

/* Table with links to derived variants of the auto object : 'Thermostat::Device' */
EW_DEFINE_AUTOOBJECT_VARIANTS( ThermostatDevice )
EW_END_OF_AUTOOBJECT_VARIANTS( ThermostatDevice )

/* Include a file containing the bitmap resource : 'Thermostat::Wheels' */
#include "_ThermostatWheels.h"

/* Table with links to derived variants of the bitmap resource : 'Thermostat::Wheels' */
EW_RES_WITHOUT_VARIANTS( ThermostatWheels )

/* Include a file containing the bitmap resource : 'Thermostat::Controller' */
#include "_ThermostatController.h"

/* Table with links to derived variants of the bitmap resource : 'Thermostat::Controller' */
EW_RES_WITHOUT_VARIANTS( ThermostatController )

/* Initializer for the class 'Thermostat::TemperatureController' */
void ThermostatTemperatureController__Init( ThermostatTemperatureController _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  CoreGroup__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( ThermostatTemperatureController );

  /* ... then construct all embedded objects */
  CoreRotateTouchHandler__Init( &_this->RotateTouchHandler, &_this->_.XObject, 0 );
  ViewsImage__Init( &_this->Wheel, &_this->_.XObject, 0 );
  ViewsImage__Init( &_this->Foreground, &_this->_.XObject, 0 );
  ViewsWarpImage__Init( &_this->Needle, &_this->_.XObject, 0 );
  GraphicsPath__Init( &_this->DeltaTempPath, &_this->_.XObject, 0 );
  ViewsStrokePath__Init( &_this->DeltaTempView, &_this->_.XObject, 0 );
  ViewsImage__Init( &_this->Symbol, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->ActualText, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->NominalText, &_this->_.XObject, 0 );
  EffectsInt32Effect__Init( &_this->FadeTextEffect, &_this->_.XObject, 0 );
  CoreSimpleTouchHandler__Init( &_this->SimpleTouchHandlerPlus, &_this->_.XObject, 0 );
  CoreSimpleTouchHandler__Init( &_this->SimpleTouchHandlerMinus, &_this->_.XObject, 0 );
  ThermostatDeviceClass__Init( &_this->Device, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ThermostatTemperatureController );

  /* ... and initialize objects, variables, properties, etc. */
  CoreRectView__OnSetBounds( _this, _Const0005 );
  CoreView_OnSetLayout((CoreView)&_this->RotateTouchHandler, CoreLayoutAlignToLeft 
  | CoreLayoutAlignToRight | CoreLayoutAlignToTop );
  CoreRectView__OnSetBounds( &_this->RotateTouchHandler, _Const0005 );
  CoreRectView__OnSetBounds( &_this->Wheel, _Const0005 );
  ViewsImage_OnSetColor( &_this->Wheel, _Const0006 );
  CoreRectView__OnSetBounds( &_this->Foreground, _Const0007 );
  CoreQuadView__OnSetPoint4( &_this->Needle, _Const0008 );
  CoreQuadView__OnSetPoint3( &_this->Needle, _Const0009 );
  CoreQuadView__OnSetPoint2( &_this->Needle, _Const000A );
  CoreQuadView__OnSetPoint1( &_this->Needle, _Const000B );
  ViewsWarpView_OnSetSourceAnchor((ViewsWarpView)&_this->Needle, _Const000C );
  ViewsWarpImage_OnSetColor( &_this->Needle, ThermostatHot );
  _this->NominalValue = 300;
  _this->ActualValue = 150;
  CoreRectView__OnSetBounds( &_this->DeltaTempView, _Const0005 );
  ViewsStrokePath_OnSetColor( &_this->DeltaTempView, _Const000D );
  ViewsStrokePath_OnSetWidth( &_this->DeltaTempView, 4.0f );
  CoreRectView__OnSetBounds( &_this->Symbol, _Const000E );
  CoreView_OnSetLayout((CoreView)&_this->ActualText, CoreLayoutAlignToBottom | CoreLayoutAlignToRight 
  | CoreLayoutAlignToTop | CoreLayoutResizeHorz | CoreLayoutResizeVert );
  CoreRectView__OnSetBounds( &_this->ActualText, _Const000F );
  ViewsText_OnSetAlignment( &_this->ActualText, ViewsTextAlignmentAlignHorzRight 
  | ViewsTextAlignmentAlignVertTop );
  ViewsText_OnSetString( &_this->ActualText, EwLoadString( &_Const0010 ));
  ViewsText_OnSetColor( &_this->ActualText, _Const0006 );
  CoreView_OnSetLayout((CoreView)&_this->NominalText, CoreLayoutAlignToBottom | 
  CoreLayoutAlignToRight | CoreLayoutAlignToTop | CoreLayoutResizeHorz | CoreLayoutResizeVert );
  CoreRectView__OnSetBounds( &_this->NominalText, _Const000F );
  ViewsText_OnSetAlignment( &_this->NominalText, ViewsTextAlignmentAlignHorzRight 
  | ViewsTextAlignmentAlignVertTop );
  ViewsText_OnSetString( &_this->NominalText, EwLoadString( &_Const0010 ));
  ViewsText_OnSetColor( &_this->NominalText, _Const0006 );
  ViewsText_OnSetOpacity( &_this->NominalText, 0 );
  EffectsEffect_OnSetNoOfCycles((EffectsEffect)&_this->FadeTextEffect, 1 );
  EffectsEffect_OnSetCycleDuration((EffectsEffect)&_this->FadeTextEffect, 500 );
  EffectsEffect_OnSetInitialDelay((EffectsEffect)&_this->FadeTextEffect, 1200 );
  CoreQuadView__OnSetPoint4( &_this->SimpleTouchHandlerPlus, _Const0011 );
  CoreQuadView__OnSetPoint3( &_this->SimpleTouchHandlerPlus, _Const0012 );
  CoreQuadView__OnSetPoint2( &_this->SimpleTouchHandlerPlus, _Const0013 );
  CoreQuadView__OnSetPoint1( &_this->SimpleTouchHandlerPlus, _Const0014 );
  CoreSimpleTouchHandler_OnSetMaxStrikeCount( &_this->SimpleTouchHandlerPlus, 100 );
  CoreQuadView__OnSetPoint4( &_this->SimpleTouchHandlerMinus, _Const0015 );
  CoreQuadView__OnSetPoint3( &_this->SimpleTouchHandlerMinus, _Const0016 );
  CoreQuadView__OnSetPoint2( &_this->SimpleTouchHandlerMinus, _Const0017 );
  CoreQuadView__OnSetPoint1( &_this->SimpleTouchHandlerMinus, _Const0018 );
  CoreSimpleTouchHandler_OnSetMaxStrikeCount( &_this->SimpleTouchHandlerMinus, 100 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->RotateTouchHandler ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Wheel ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Foreground ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Needle ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->DeltaTempView ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Symbol ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->ActualText ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->NominalText ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->SimpleTouchHandlerPlus ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->SimpleTouchHandlerMinus ), 
  0 );
  _this->RotateTouchHandler.OnRotate = EwNewSlot( _this, ThermostatTemperatureController_onRotateSlot );
  _this->RotateTouchHandler.OnEnd = EwNewSlot( _this, ThermostatTemperatureController_onEndSlot );
  _this->RotateTouchHandler.OnStart = EwNewSlot( _this, ThermostatTemperatureController_onStartSlot );
  ViewsImage_OnSetBitmap( &_this->Wheel, EwLoadResource( &ThermostatWheels, ResourcesBitmap ));
  ViewsImage_OnSetBitmap( &_this->Foreground, EwLoadResource( &ThermostatController, 
  ResourcesBitmap ));
  ViewsWarpImage_OnSetBitmap( &_this->Needle, EwLoadResource( &ThermostatNeedle, 
  ResourcesBitmap ));
  ViewsStrokePath_OnSetPath( &_this->DeltaTempView, &_this->DeltaTempPath );
  ViewsImage_OnSetBitmap( &_this->Symbol, EwLoadResource( &ThermostatSymbolHeadCool, 
  ResourcesBitmap ));
  ViewsText_OnSetFont( &_this->ActualText, EwLoadResource( &ThermostatFontL, ResourcesFont ));
  ViewsText_OnSetFont( &_this->NominalText, EwLoadResource( &ThermostatFontXXL, 
  ResourcesFont ));
  _this->FadeTextEffect.Super1.OnAnimate = EwNewSlot( _this, ThermostatTemperatureController_fadeText );
  _this->SimpleTouchHandlerPlus.OnPress = EwNewSlot( _this, ThermostatTemperatureController_incrNominal );
  _this->SimpleTouchHandlerMinus.OnPress = EwNewSlot( _this, ThermostatTemperatureController_decrNominal );
}

/* Re-Initializer for the class 'Thermostat::TemperatureController' */
void ThermostatTemperatureController__ReInit( ThermostatTemperatureController _this )
{
  /* At first re-initialize the super class ... */
  CoreGroup__ReInit( &_this->_.Super );

  /* ... then re-construct all embedded objects */
  CoreRotateTouchHandler__ReInit( &_this->RotateTouchHandler );
  ViewsImage__ReInit( &_this->Wheel );
  ViewsImage__ReInit( &_this->Foreground );
  ViewsWarpImage__ReInit( &_this->Needle );
  GraphicsPath__ReInit( &_this->DeltaTempPath );
  ViewsStrokePath__ReInit( &_this->DeltaTempView );
  ViewsImage__ReInit( &_this->Symbol );
  ViewsText__ReInit( &_this->ActualText );
  ViewsText__ReInit( &_this->NominalText );
  EffectsInt32Effect__ReInit( &_this->FadeTextEffect );
  CoreSimpleTouchHandler__ReInit( &_this->SimpleTouchHandlerPlus );
  CoreSimpleTouchHandler__ReInit( &_this->SimpleTouchHandlerMinus );
  ThermostatDeviceClass__ReInit( &_this->Device );
}

/* Finalizer method for the class 'Thermostat::TemperatureController' */
void ThermostatTemperatureController__Done( ThermostatTemperatureController _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( CoreGroup );

  /* Finalize all embedded objects */
  CoreRotateTouchHandler__Done( &_this->RotateTouchHandler );
  ViewsImage__Done( &_this->Wheel );
  ViewsImage__Done( &_this->Foreground );
  ViewsWarpImage__Done( &_this->Needle );
  GraphicsPath__Done( &_this->DeltaTempPath );
  ViewsStrokePath__Done( &_this->DeltaTempView );
  ViewsImage__Done( &_this->Symbol );
  ViewsText__Done( &_this->ActualText );
  ViewsText__Done( &_this->NominalText );
  EffectsInt32Effect__Done( &_this->FadeTextEffect );
  CoreSimpleTouchHandler__Done( &_this->SimpleTouchHandlerPlus );
  CoreSimpleTouchHandler__Done( &_this->SimpleTouchHandlerMinus );
  ThermostatDeviceClass__Done( &_this->Device );

  /* Don't forget to deinitialize the super class ... */
  CoreGroup__Done( &_this->_.Super );
}

/* The method UpdateLayout() is invoked automatically after the size of the component 
   has been changed. This method can be overridden and filled with logic to perform 
   a sophisticated arrangement calculation for one or more enclosed views. In this 
   case the parameter aSize can be used. It contains the current size of the component. 
   Usually, all enclosed views are arranged automatically accordingly to their @Layout 
   property. UpdateLayout() gives the derived components a chance to extend this 
   automatism by a user defined algorithm. */
void ThermostatTemperatureController_UpdateLayout( ThermostatTemperatureController _this, 
  XPoint aSize )
{
  XInt32 cX;
  XInt32 cY;

  CoreGroup_UpdateLayout((CoreGroup)_this, aSize );
  cX = aSize.X / 2;
  cY = aSize.Y / 2;
  CoreRectView__OnSetBounds( &_this->DeltaTempView, EwNewRect2Point( _Const0019, 
  aSize ));
  ViewsStrokePath_OnSetOffset( &_this->DeltaTempView, EwNewPoint( cX, cY ));
}

/* The method UpdateViewState() is invoked automatically after the state of the 
   component has been changed. This method can be overridden and filled with logic 
   to ensure the visual aspect of the component does reflect its current state. 
   For example, the 'enabled' state of the component can affect its colors (disabled 
   components may appear pale). In this case the logic of the method should modify 
   the respective color properties accordingly to the current 'enabled' state. 
   The current state of the component is passed as a set in the parameter aState. 
   It reflects the very basic component state like its visibility or the ability 
   to react to user inputs. Beside this common state, the method can also involve 
   any other variables used in the component as long as they reflect its current 
   state. For example, the toggle switch component can take in account its toggle 
   state 'on' or 'off' and change accordingly the location of the slider, etc.
   Usually, this method will be invoked automatically by the framework. Optionally 
   you can request its invocation by using the method @InvalidateViewState(). */
void ThermostatTemperatureController_UpdateViewState( ThermostatTemperatureController _this, 
  XSet aState )
{
  XInt32 alpha;
  XInt32 actual;
  XFloat actAngle;
  XInt32 nominal;
  XFloat nomAngle;
  XColor hot;
  XColor cold;

  CoreGroup_UpdateViewState((CoreGroup)_this, aState );
  alpha = 0;
  actual = _this->ActualValue;
  nominal = _this->NominalValue;

  if ( actual < 100 )
    actual = 100;

  if ( actual > 400 )
    actual = 400;

  if ( nominal < 100 )
    nominal = 100;

  if ( nominal > 400 )
    nominal = 400;

  actAngle = 135.0f - (((XFloat)( actual - 100 ) * 270.0f ) / 300.0f );
  nomAngle = 135.0f - (((XFloat)( nominal - 100 ) * 270.0f ) / 300.0f );
  ViewsWarpView_RotateAndScale((ViewsWarpView)&_this->Needle, EwGetRectCenter( _this->Foreground.Super1.Bounds ), 
  nomAngle, 1.0f, 1.0f );

  if ( actual != nominal )
  {
    GraphicsPath_InitSubPath( &_this->DeltaTempPath, 0, 84 );
    GraphicsPath_Rotate( &_this->DeltaTempPath, -actAngle - 90.0f );
    GraphicsPath_Begin( &_this->DeltaTempPath, 0, 92.0f, 0.0f );
    GraphicsPath_AddLine( &_this->DeltaTempPath, 0, 102.0f, 0.0f );
    GraphicsPath_AddArc( &_this->DeltaTempPath, 0, 0.0f, 0.0f, 102.0f, 102.0f, 0.0f, 
    -nomAngle + actAngle, 80 );
    GraphicsPath_Rotate( &_this->DeltaTempPath, actAngle + 90.0f );
  }
  else
    GraphicsPath_InitSubPath( &_this->DeltaTempPath, 0, 84 );

  if ( actual < nominal )
  {
    ViewsImage_OnSetFrameNumber( &_this->Symbol, 0 );
    ViewsImage_OnSetColor( &_this->Symbol, ThermostatHot );
    ViewsStrokePath_OnSetColor( &_this->DeltaTempView, ThermostatHot );
    alpha = ( nominal - actual ) * 10;
  }
  else
    if ( actual > nominal )
    {
      ViewsImage_OnSetFrameNumber( &_this->Symbol, 1 );
      ViewsImage_OnSetColor( &_this->Symbol, ThermostatCold );
      ViewsStrokePath_OnSetColor( &_this->DeltaTempView, ThermostatCold );
      alpha = ( actual - nominal ) * 10;
    }

  if ( alpha > 255 )
    alpha = 255;

  ViewsImage_OnSetOpacity( &_this->Symbol, alpha );
  ViewsText_OnSetString( &_this->ActualText, EwConcatString( EwConcatString( EwConcatString( 
  EwNewStringInt( actual / 10, 0, 10 ), EwLoadString( &_Const001A )), EwNewStringInt( 
  actual % 10, 0, 10 )), EwLoadString( &_Const001B )));
  ViewsText_OnSetString( &_this->NominalText, EwConcatString( EwConcatString( EwConcatString( 
  EwNewStringInt( nominal / 10, 0, 10 ), EwLoadString( &_Const001A )), EwNewStringInt( 
  nominal % 10, 0, 10 )), EwLoadString( &_Const001B )));
  alpha = (( actual - 100 ) * 255 ) / 300;
  hot = EwBlendColorInt( ThermostatHot, alpha );
  cold = EwBlendColorInt( ThermostatCold, (XUInt8)( 255 - alpha ));
  ViewsText_OnSetColor( &_this->ActualText, EwPlusColor( hot, cold ));
}

/* 'C' function for method : 'Thermostat::TemperatureController.OnSetNominalValue()' */
void ThermostatTemperatureController_OnSetNominalValue( ThermostatTemperatureController _this, 
  XInt32 value )
{
  if ( _this->NominalValue == value )
    return;

  _this->NominalValue = value;
  CoreGroup_InvalidateViewState((CoreGroup)_this );
}

/* 'C' function for method : 'Thermostat::TemperatureController.OnSetActualValue()' */
void ThermostatTemperatureController_OnSetActualValue( ThermostatTemperatureController _this, 
  XInt32 value )
{
  if ( _this->ActualValue == value )
    return;

  _this->ActualValue = value;
  CoreGroup_InvalidateViewState((CoreGroup)_this );
}

/* This slot method will receive a signal, if the value of the property assigned 
   to @Outlet has been changed by another widget or by the application logic. In 
   response to this notification, the widget will update itself. */
void ThermostatTemperatureController_outletNominalSlot( ThermostatTemperatureController _this, 
  XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( _this->OutletNominal.Object != 0 )
    ThermostatTemperatureController_OnSetNominalValue( _this, EwOnGetInt32( _this->OutletNominal ));
}

/* 'C' function for method : 'Thermostat::TemperatureController.OnSetOutletNominal()' */
void ThermostatTemperatureController_OnSetOutletNominal( ThermostatTemperatureController _this, 
  XRef value )
{
  if ( !EwCompRef( _this->OutletNominal, value ))
    return;

  if ( _this->OutletNominal.Object != 0 )
    EwDetachRefObserver( EwNewSlot( _this, ThermostatTemperatureController_outletNominalSlot ), 
      _this->OutletNominal, 0 );

  _this->OutletNominal = value;

  if ( value.Object != 0 )
    EwAttachRefObserver( EwNewSlot( _this, ThermostatTemperatureController_outletNominalSlot ), 
      value, 0 );

  if ( value.Object != 0 )
    EwPostSignal( EwNewSlot( _this, ThermostatTemperatureController_outletNominalSlot ), 
      ((XObject)_this ));
}

/* This slot method will receive a signal, if the value of the property assigned 
   to @Outlet has been changed by another widget or by the application logic. In 
   response to this notification, the widget will update itself. */
void ThermostatTemperatureController_outletCurrentSlot( ThermostatTemperatureController _this, 
  XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( _this->OutletActual.Object != 0 )
    ThermostatTemperatureController_OnSetActualValue( _this, EwOnGetInt32( _this->OutletActual ));
}

/* 'C' function for method : 'Thermostat::TemperatureController.OnSetOutletActual()' */
void ThermostatTemperatureController_OnSetOutletActual( ThermostatTemperatureController _this, 
  XRef value )
{
  if ( !EwCompRef( _this->OutletActual, value ))
    return;

  if ( _this->OutletActual.Object != 0 )
    EwDetachRefObserver( EwNewSlot( _this, ThermostatTemperatureController_outletCurrentSlot ), 
      _this->OutletActual, 0 );

  _this->OutletActual = value;

  if ( value.Object != 0 )
    EwAttachRefObserver( EwNewSlot( _this, ThermostatTemperatureController_outletCurrentSlot ), 
      value, 0 );

  if ( value.Object != 0 )
    EwPostSignal( EwNewSlot( _this, ThermostatTemperatureController_outletCurrentSlot ), 
      ((XObject)_this ));
}

/* 'C' function for method : 'Thermostat::TemperatureController.onStartSlot()' */
void ThermostatTemperatureController_onStartSlot( ThermostatTemperatureController _this, 
  XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  CoreGroup_InvalidateViewState((CoreGroup)_this );
  _this->startValue = _this->NominalValue;
  ViewsText_OnSetOpacity( &_this->NominalText, 255 );
  ViewsText_OnSetOpacity( &_this->ActualText, 0 );
  EffectsEffect_OnSetEnabled((EffectsEffect)&_this->FadeTextEffect, 0 );
}

/* 'C' function for method : 'Thermostat::TemperatureController.onRotateSlot()' */
void ThermostatTemperatureController_onRotateSlot( ThermostatTemperatureController _this, 
  XObject sender )
{
  XInt32 temp;
  XInt32 delta;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  delta = 0;

  if (( _this->NominalValue >= 100 ) && ( _this->NominalValue <= 400 ))
    delta = ( _this->RotateTouchHandler.Relative * 300 ) / 720;

  temp = _this->startValue - delta;

  if ( temp < 100 )
    temp = 100;

  if ( temp > 400 )
    temp = 400;

  if ( _this->NominalValue != temp )
  {
    XInt32 inx = _this->Wheel.FrameNumber;

    if (( _this->NominalValue - temp ) > 0 )
      inx = inx - 1;
    else
      inx = inx + 1;

    if ( inx < 0 )
      inx = 3;

    if ( inx > 3 )
      inx = 0;

    ViewsImage_OnSetFrameNumber( &_this->Wheel, inx );
    ThermostatTemperatureController_OnSetNominalValue( _this, temp );

    if ( _this->OutletNominal.Object != 0 )
      EwOnSetInt32( _this->OutletNominal, _this->NominalValue );

    EwNotifyRefObservers( _this->OutletNominal, 0 );
  }
}

/* 'C' function for method : 'Thermostat::TemperatureController.onEndSlot()' */
void ThermostatTemperatureController_onEndSlot( ThermostatTemperatureController _this, 
  XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  CoreGroup_InvalidateViewState((CoreGroup)_this );
  EffectsEffect_OnSetEnabled((EffectsEffect)&_this->FadeTextEffect, 1 );
}

/* 'C' function for method : 'Thermostat::TemperatureController.fadeText()' */
void ThermostatTemperatureController_fadeText( ThermostatTemperatureController _this, 
  XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  ViewsText_OnSetOpacity( &_this->NominalText, 255 - _this->FadeTextEffect.Value );
  ViewsText_OnSetOpacity( &_this->ActualText, _this->FadeTextEffect.Value );
}

/* 'C' function for method : 'Thermostat::TemperatureController.incrNominal()' */
void ThermostatTemperatureController_incrNominal( ThermostatTemperatureController _this, 
  XObject sender )
{
  XInt32 temp;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  temp = _this->NominalValue + 5;
  ViewsText_OnSetOpacity( &_this->NominalText, 255 );
  ViewsText_OnSetOpacity( &_this->ActualText, 0 );
  EffectsEffect_OnSetEnabled((EffectsEffect)&_this->FadeTextEffect, 0 );

  if ( temp > 400 )
    temp = 400;

  ThermostatTemperatureController_OnSetNominalValue( _this, temp );

  if ( _this->OutletNominal.Object != 0 )
    EwOnSetInt32( _this->OutletNominal, _this->NominalValue );

  EwNotifyRefObservers( _this->OutletNominal, 0 );
  EffectsEffect_OnSetEnabled((EffectsEffect)&_this->FadeTextEffect, 1 );
}

/* 'C' function for method : 'Thermostat::TemperatureController.decrNominal()' */
void ThermostatTemperatureController_decrNominal( ThermostatTemperatureController _this, 
  XObject sender )
{
  XInt32 temp;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  temp = _this->NominalValue - 5;
  ViewsText_OnSetOpacity( &_this->NominalText, 255 );
  ViewsText_OnSetOpacity( &_this->ActualText, 0 );
  EffectsEffect_OnSetEnabled((EffectsEffect)&_this->FadeTextEffect, 0 );

  if ( temp < 100 )
    temp = 100;

  ThermostatTemperatureController_OnSetNominalValue( _this, temp );

  if ( _this->OutletNominal.Object != 0 )
    EwOnSetInt32( _this->OutletNominal, _this->NominalValue );

  EwNotifyRefObservers( _this->OutletNominal, 0 );
  EffectsEffect_OnSetEnabled((EffectsEffect)&_this->FadeTextEffect, 1 );
}

/* Variants derived from the class : 'Thermostat::TemperatureController' */
EW_DEFINE_CLASS_VARIANTS( ThermostatTemperatureController )
EW_END_OF_CLASS_VARIANTS( ThermostatTemperatureController )

/* Virtual Method Table (VMT) for the class : 'Thermostat::TemperatureController' */
EW_DEFINE_CLASS( ThermostatTemperatureController, CoreGroup, RotateTouchHandler, 
                 OutletNominal, OutletNominal, OutletNominal, NominalValue, NominalValue, 
                 "Thermostat::TemperatureController" )
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
  ThermostatTemperatureController_UpdateLayout,
  ThermostatTemperatureController_UpdateViewState,
  CoreGroup_InvalidateArea,
EW_END_OF_CLASS( ThermostatTemperatureController )

/* Include a file containing the bitmap resource : 'Thermostat::Needle' */
#include "_ThermostatNeedle.h"

/* Table with links to derived variants of the bitmap resource : 'Thermostat::Needle' */
EW_RES_WITHOUT_VARIANTS( ThermostatNeedle )

/* User defined constant: 'Thermostat::Cold' */
const XColor ThermostatCold = { 0x14, 0x88, 0xD7, 0xFF };

/* User defined constant: 'Thermostat::Hot' */
const XColor ThermostatHot = { 0xC7, 0x0B, 0x6A, 0xFF };

/* Include a file containing the bitmap resource : 'Thermostat::SymbolHeadCool' */
#include "_ThermostatSymbolHeadCool.h"

/* Table with links to derived variants of the bitmap resource : 'Thermostat::SymbolHeadCool' */
EW_RES_WITHOUT_VARIANTS( ThermostatSymbolHeadCool )

/* Include a file containing the font resource : 'Thermostat::FontXXL' */
#include "_ThermostatFontXXL.h"

/* Table with links to derived variants of the font resource : 'Thermostat::FontXXL' */
EW_RES_WITHOUT_VARIANTS( ThermostatFontXXL )

/* Initializer for the class 'Thermostat::Thermostat' */
void ThermostatThermostat__Init( ThermostatThermostat _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  CoreGroup__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( ThermostatThermostat );

  /* ... then construct all embedded objects */
  ViewsRectangle__Init( &_this->FilledBackground, &_this->_.XObject, 0 );
  ThermostatFanMode__Init( &_this->FanMode, &_this->_.XObject, 0 );
  CoreSimpleTouchHandler__Init( &_this->SimpleTouchHandlerFanMode, &_this->_.XObject, 0 );
  ThermostatExitScreen__Init( &_this->ExitScreen, &_this->_.XObject, 0 );
  ThermostatDefaultThermostat__Init( &_this->DefaultThermostat, &_this->_.XObject, 0 );
  CoreSimpleTouchHandler__Init( &_this->GoBackTouchHandler, &_this->_.XObject, 0 );
  ViewsWallpaper__Init( &_this->Background, &_this->_.XObject, 0 );
  ViewsWallpaper__Init( &_this->Overlay, &_this->_.XObject, 0 );
  WidgetSetRadioButton__Init( &_this->RadioPowerOff, &_this->_.XObject, 0 );
  WidgetSetToggleButton__Init( &_this->ToggleButton, &_this->_.XObject, 0 );
  WidgetSetRadioButton__Init( &_this->RadioDay, &_this->_.XObject, 0 );
  WidgetSetRadioButton__Init( &_this->RadioNight, &_this->_.XObject, 0 );
  WidgetSetRadioButton__Init( &_this->RadioVacation, &_this->_.XObject, 0 );
  ThermostatTemperatureController__Init( &_this->TemperatureController, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->OnOffButtonText, &_this->_.XObject, 0 );
  EffectsInt32Effect__Init( &_this->FadeEffect, &_this->_.XObject, 0 );
  CorePropertyObserver__Init( &_this->SettingsObserver, &_this->_.XObject, 0 );
  CoreSimpleTouchHandler__Init( &_this->SimpleTouchHandler, &_this->_.XObject, 0 );
  EffectsInt32Effect__Init( &_this->FadeEffectPowerOff, &_this->_.XObject, 0 );
  ClockClock__Init( &_this->Clock, &_this->_.XObject, 0 );
  WidgetSetRadioButton__Init( &_this->Default, &_this->_.XObject, 0 );
  ThermostatLogo__Init( &_this->Logo, &_this->_.XObject, 0 );
  ViewsRectangle__Init( &_this->FilledRectangle, &_this->_.XObject, 0 );
  EffectsInt32Effect__Init( &_this->FadeEffectManual, &_this->_.XObject, 0 );
  EffectsInt32Effect__Init( &_this->FadeEffectGoBack, &_this->_.XObject, 0 );
  ViewsImage__Init( &_this->Fan, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->FanText, &_this->_.XObject, 0 );
  CoreSimpleTouchHandler__Init( &_this->FanTouchHandler, &_this->_.XObject, 0 );
  EffectsInt32Effect__Init( &_this->FadeEffectFanMode, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ThermostatThermostat );

  /* ... and initialize objects, variables, properties, etc. */
  CoreRectView__OnSetBounds( _this, _Const001C );
  CoreRectView__OnSetBounds( &_this->FilledBackground, _Const001D );
  CoreRectView__OnSetBounds( &_this->FanMode, _Const001E );
  CoreGroup_OnSetVisible((CoreGroup)&_this->FanMode, 0 );
  CoreQuadView__OnSetPoint4( &_this->SimpleTouchHandlerFanMode, _Const001F );
  CoreQuadView__OnSetPoint3( &_this->SimpleTouchHandlerFanMode, _Const0020 );
  CoreQuadView__OnSetPoint2( &_this->SimpleTouchHandlerFanMode, _Const0021 );
  CoreQuadView__OnSetPoint1( &_this->SimpleTouchHandlerFanMode, _Const0022 );
  CoreRectView__OnSetBounds( &_this->ExitScreen, _Const001C );
  CoreGroup_OnSetVisible((CoreGroup)&_this->ExitScreen, 0 );
  CoreRectView__OnSetBounds( &_this->DefaultThermostat, _Const001E );
  CoreQuadView__OnSetPoint4( &_this->GoBackTouchHandler, _Const0023 );
  CoreQuadView__OnSetPoint3( &_this->GoBackTouchHandler, _Const0024 );
  CoreQuadView__OnSetPoint2( &_this->GoBackTouchHandler, _Const0025 );
  CoreQuadView__OnSetPoint1( &_this->GoBackTouchHandler, _Const0026 );
  CoreRectView__OnSetBounds( &_this->Background, _Const001C );
  CoreRectView__OnSetBounds( &_this->Overlay, _Const001C );
  ViewsWallpaper_OnSetOpacity( &_this->Overlay, 0 );
  CoreRectView__OnSetBounds( &_this->RadioPowerOff, _Const0027 );
  WidgetSetRadioButton_OnSetOutletSelector( &_this->RadioPowerOff, 1 );
  WidgetSetRadioButton_OnSetLabel( &_this->RadioPowerOff, 0 );
  CoreRectView__OnSetBounds( &_this->ToggleButton, _Const0028 );
  WidgetSetToggleButton_OnSetLabel( &_this->ToggleButton, EwLoadString( &_Const0029 ));
  CoreRectView__OnSetBounds( &_this->RadioDay, _Const002A );
  WidgetSetRadioButton_OnSetLabel( &_this->RadioDay, EwLoadString( &_Const002B ));
  CoreRectView__OnSetBounds( &_this->RadioNight, _Const002C );
  WidgetSetRadioButton_OnSetOutletSelector( &_this->RadioNight, 1 );
  WidgetSetRadioButton_OnSetLabel( &_this->RadioNight, EwLoadString( &_Const002D ));
  CoreRectView__OnSetBounds( &_this->RadioVacation, _Const002E );
  WidgetSetRadioButton_OnSetOutletSelector( &_this->RadioVacation, 2 );
  WidgetSetRadioButton_OnSetLabel( &_this->RadioVacation, EwLoadString( &_Const002F ));
  CoreRectView__OnSetBounds( &_this->TemperatureController, _Const0030 );
  CoreRectView__OnSetBounds( &_this->OnOffButtonText, _Const0031 );
  ViewsText_OnSetString( &_this->OnOffButtonText, EwLoadString( &_Const0032 ));
  EffectsEffect_OnSetNoOfCycles((EffectsEffect)&_this->FadeEffect, 1 );
  CoreQuadView__OnSetPoint4( &_this->SimpleTouchHandler, _Const0033 );
  CoreQuadView__OnSetPoint3( &_this->SimpleTouchHandler, _Const0034 );
  CoreQuadView__OnSetPoint2( &_this->SimpleTouchHandler, _Const0035 );
  CoreQuadView__OnSetPoint1( &_this->SimpleTouchHandler, _Const0036 );
  EffectsEffect_OnSetNoOfCycles((EffectsEffect)&_this->FadeEffectPowerOff, 1 );
  EffectsEffect_OnSetCycleDuration((EffectsEffect)&_this->FadeEffectPowerOff, 1000 );
  CoreRectView__OnSetBounds( &_this->Clock, _Const0037 );
  CoreRectView__OnSetBounds( &_this->Default, _Const0038 );
  WidgetSetRadioButton_OnSetOutletSelector( &_this->Default, 3 );
  WidgetSetRadioButton_OnSetLabel( &_this->Default, EwLoadString( &_Const0039 ));
  CoreRectView__OnSetBounds( &_this->Logo, _Const003A );
  CoreGroup__OnSetOpacity( &_this->Logo, 255 );
  CoreRectView__OnSetBounds( &_this->FilledRectangle, _Const003B );
  ViewsRectangle_OnSetColor( &_this->FilledRectangle, _Const0006 );
  ViewsRectangle_OnSetAlphaBlended( &_this->FilledRectangle, 1 );
  ViewsRectangle_OnSetVisible( &_this->FilledRectangle, 1 );
  EffectsEffect_OnSetNoOfCycles((EffectsEffect)&_this->FadeEffectManual, 1 );
  EffectsEffect_OnSetNoOfCycles((EffectsEffect)&_this->FadeEffectGoBack, 1 );
  CoreRectView__OnSetBounds( &_this->Fan, _Const003C );
  CoreRectView__OnSetBounds( &_this->FanText, _Const003D );
  ViewsText_OnSetString( &_this->FanText, EwLoadString( &_Const003E ));
  CoreQuadView__OnSetPoint4( &_this->FanTouchHandler, _Const003F );
  CoreQuadView__OnSetPoint3( &_this->FanTouchHandler, _Const0040 );
  CoreQuadView__OnSetPoint2( &_this->FanTouchHandler, _Const0041 );
  CoreQuadView__OnSetPoint1( &_this->FanTouchHandler, _Const0042 );
  EffectsEffect_OnSetNoOfCycles((EffectsEffect)&_this->FadeEffectFanMode, 1 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->FilledBackground ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->FanMode ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->SimpleTouchHandlerFanMode ), 
  0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->ExitScreen ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->DefaultThermostat ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->GoBackTouchHandler ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Background ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Overlay ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->RadioPowerOff ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->ToggleButton ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->RadioDay ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->RadioNight ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->RadioVacation ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->TemperatureController ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->OnOffButtonText ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->SimpleTouchHandler ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Clock ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Default ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Logo ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->FilledRectangle ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Fan ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->FanText ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->FanTouchHandler ), 0 );
  _this->SimpleTouchHandlerFanMode.OnPress = EwNewSlot( _this, ThermostatThermostat_SlotGoBackFanMode );
  _this->GoBackTouchHandler.OnPress = EwNewSlot( _this, ThermostatThermostat_GoBackSlot );
  ViewsWallpaper_OnSetBitmap( &_this->Background, EwLoadResource( &ThermostatBackgroundDay, 
  ResourcesBitmap ));
  ViewsWallpaper_OnSetBitmap( &_this->Overlay, EwLoadResource( &ThermostatBackgroundDay, 
  ResourcesBitmap ));
  WidgetSetRadioButton_OnSetOutlet( &_this->RadioPowerOff, EwNullRef );
  WidgetSetRadioButton_OnSetIcon( &_this->RadioPowerOff, 0 );
  WidgetSetRadioButton_OnSetAppearance( &_this->RadioPowerOff, EwGetAutoObject( 
  &ThermostatRadioButtonPowerOff, WidgetSetRadioButtonConfig ));
  WidgetSetToggleButton_OnSetOutlet( &_this->ToggleButton, EwNewRef( EwGetAutoObject( 
  &ThermostatDevice, ThermostatDeviceClass ), ThermostatDeviceClass_OnGetSwingMode, 
  ThermostatDeviceClass_OnSetSwingMode ));
  WidgetSetToggleButton_OnSetAppearance( &_this->ToggleButton, EwGetAutoObject( 
  &ThermostatSwingSwitchConfig, WidgetSetToggleButtonConfig ));
  WidgetSetRadioButton_OnSetOutlet( &_this->RadioDay, EwNewRef( EwGetAutoObject( 
  &ThermostatDevice, ThermostatDeviceClass ), ThermostatDeviceClass_OnGetSettingNo, 
  ThermostatDeviceClass_OnSetSettingNo ));
  WidgetSetRadioButton_OnSetAppearance( &_this->RadioDay, EwGetAutoObject( &ThermostatRadioButtonDayConfig, 
  WidgetSetRadioButtonConfig ));
  WidgetSetRadioButton_OnSetOutlet( &_this->RadioNight, EwNewRef( EwGetAutoObject( 
  &ThermostatDevice, ThermostatDeviceClass ), ThermostatDeviceClass_OnGetSettingNo, 
  ThermostatDeviceClass_OnSetSettingNo ));
  WidgetSetRadioButton_OnSetAppearance( &_this->RadioNight, EwGetAutoObject( &ThermostatRadioButtonNightConfig, 
  WidgetSetRadioButtonConfig ));
  WidgetSetRadioButton_OnSetOutlet( &_this->RadioVacation, EwNewRef( EwGetAutoObject( 
  &ThermostatDevice, ThermostatDeviceClass ), ThermostatDeviceClass_OnGetSettingNo, 
  ThermostatDeviceClass_OnSetSettingNo ));
  WidgetSetRadioButton_OnSetAppearance( &_this->RadioVacation, EwGetAutoObject( 
  &ThermostatRadioButtonVacationConfig, WidgetSetRadioButtonConfig ));
  _this->Device = EwGetAutoObject( &ThermostatDevice, ThermostatDeviceClass );
  ThermostatTemperatureController_OnSetOutletNominal( &_this->TemperatureController, 
  EwNewRef( EwGetAutoObject( &ThermostatDevice, ThermostatDeviceClass ), ThermostatDeviceClass_OnGetNominalTemp, 
  ThermostatDeviceClass_OnSetNominalTemp ));
  ThermostatTemperatureController_OnSetOutletActual( &_this->TemperatureController, 
  EwNewRef( EwGetAutoObject( &ThermostatDevice, ThermostatDeviceClass ), ThermostatDeviceClass_OnGetActualTemp, 
  ThermostatDeviceClass_OnSetActualTemp ));
  ViewsText_OnSetFont( &_this->OnOffButtonText, EwLoadResource( &ThermostatFontM, 
  ResourcesFont ));
  _this->FadeEffect.Super1.OnFinished = EwNewSlot( _this, ThermostatThermostat_changeBackFinished );
  _this->FadeEffect.Outlet = EwNewRef( &_this->Overlay, ViewsWallpaper_OnGetOpacity, 
  ViewsWallpaper_OnSetOpacity );
  _this->SettingsObserver.OnEvent = EwNewSlot( _this, ThermostatThermostat_onSettingChanged );
  CorePropertyObserver_OnSetOutlet( &_this->SettingsObserver, EwNewRef( EwGetAutoObject( 
  &ThermostatDevice, ThermostatDeviceClass ), ThermostatDeviceClass_OnGetSettingNo, 
  ThermostatDeviceClass_OnSetSettingNo ));
  _this->SimpleTouchHandler.OnPress = EwNewSlot( _this, ThermostatThermostat_ExitScreenSlot );
  _this->FadeEffectPowerOff.Super1.OnFinished = EwNullSlot;
  _this->FadeEffectPowerOff.Outlet = EwNewRef( &_this->ExitScreen, CoreGroup_OnGetOpacity, 
  CoreGroup__OnSetOpacity );
  WidgetSetRadioButton_OnSetOutlet( &_this->Default, EwNewRef( EwGetAutoObject( 
  &ThermostatDevice, ThermostatDeviceClass ), ThermostatDeviceClass_OnGetSettingNo, 
  ThermostatDeviceClass_OnSetSettingNo ));
  _this->Default.OnSelect = EwNewSlot( _this, ThermostatThermostat_DefaultThermSlot );
  WidgetSetRadioButton_OnSetAppearance( &_this->Default, EwGetAutoObject( &ThermostatRadioButtonDefaultConfig, 
  WidgetSetRadioButtonConfig ));
  _this->FadeEffectManual.Outlet = EwNewRef( &_this->DefaultThermostat, CoreGroup_OnGetOpacity, 
  CoreGroup__OnSetOpacity );
  _this->FadeEffectGoBack.Outlet = EwNewRef( &_this->TemperatureController, CoreGroup_OnGetOpacity, 
  CoreGroup__OnSetOpacity );
  ViewsImage_OnSetBitmap( &_this->Fan, EwLoadResource( &ThermostatSymbolFanBig, 
  ResourcesBitmap ));
  ViewsText_OnSetFont( &_this->FanText, EwLoadResource( &ThermostatFontM, ResourcesFont ));
  _this->FanTouchHandler.OnPress = EwNewSlot( _this, ThermostatThermostat_SlotFan );
  _this->FadeEffectFanMode.Outlet = EwNewRef( &_this->FanMode, CoreGroup_OnGetOpacity, 
  CoreGroup__OnSetOpacity );
}

/* Re-Initializer for the class 'Thermostat::Thermostat' */
void ThermostatThermostat__ReInit( ThermostatThermostat _this )
{
  /* At first re-initialize the super class ... */
  CoreGroup__ReInit( &_this->_.Super );

  /* ... then re-construct all embedded objects */
  ViewsRectangle__ReInit( &_this->FilledBackground );
  ThermostatFanMode__ReInit( &_this->FanMode );
  CoreSimpleTouchHandler__ReInit( &_this->SimpleTouchHandlerFanMode );
  ThermostatExitScreen__ReInit( &_this->ExitScreen );
  ThermostatDefaultThermostat__ReInit( &_this->DefaultThermostat );
  CoreSimpleTouchHandler__ReInit( &_this->GoBackTouchHandler );
  ViewsWallpaper__ReInit( &_this->Background );
  ViewsWallpaper__ReInit( &_this->Overlay );
  WidgetSetRadioButton__ReInit( &_this->RadioPowerOff );
  WidgetSetToggleButton__ReInit( &_this->ToggleButton );
  WidgetSetRadioButton__ReInit( &_this->RadioDay );
  WidgetSetRadioButton__ReInit( &_this->RadioNight );
  WidgetSetRadioButton__ReInit( &_this->RadioVacation );
  ThermostatTemperatureController__ReInit( &_this->TemperatureController );
  ViewsText__ReInit( &_this->OnOffButtonText );
  EffectsInt32Effect__ReInit( &_this->FadeEffect );
  CorePropertyObserver__ReInit( &_this->SettingsObserver );
  CoreSimpleTouchHandler__ReInit( &_this->SimpleTouchHandler );
  EffectsInt32Effect__ReInit( &_this->FadeEffectPowerOff );
  ClockClock__ReInit( &_this->Clock );
  WidgetSetRadioButton__ReInit( &_this->Default );
  ThermostatLogo__ReInit( &_this->Logo );
  ViewsRectangle__ReInit( &_this->FilledRectangle );
  EffectsInt32Effect__ReInit( &_this->FadeEffectManual );
  EffectsInt32Effect__ReInit( &_this->FadeEffectGoBack );
  ViewsImage__ReInit( &_this->Fan );
  ViewsText__ReInit( &_this->FanText );
  CoreSimpleTouchHandler__ReInit( &_this->FanTouchHandler );
  EffectsInt32Effect__ReInit( &_this->FadeEffectFanMode );
}

/* Finalizer method for the class 'Thermostat::Thermostat' */
void ThermostatThermostat__Done( ThermostatThermostat _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( CoreGroup );

  /* Finalize all embedded objects */
  ViewsRectangle__Done( &_this->FilledBackground );
  ThermostatFanMode__Done( &_this->FanMode );
  CoreSimpleTouchHandler__Done( &_this->SimpleTouchHandlerFanMode );
  ThermostatExitScreen__Done( &_this->ExitScreen );
  ThermostatDefaultThermostat__Done( &_this->DefaultThermostat );
  CoreSimpleTouchHandler__Done( &_this->GoBackTouchHandler );
  ViewsWallpaper__Done( &_this->Background );
  ViewsWallpaper__Done( &_this->Overlay );
  WidgetSetRadioButton__Done( &_this->RadioPowerOff );
  WidgetSetToggleButton__Done( &_this->ToggleButton );
  WidgetSetRadioButton__Done( &_this->RadioDay );
  WidgetSetRadioButton__Done( &_this->RadioNight );
  WidgetSetRadioButton__Done( &_this->RadioVacation );
  ThermostatTemperatureController__Done( &_this->TemperatureController );
  ViewsText__Done( &_this->OnOffButtonText );
  EffectsInt32Effect__Done( &_this->FadeEffect );
  CorePropertyObserver__Done( &_this->SettingsObserver );
  CoreSimpleTouchHandler__Done( &_this->SimpleTouchHandler );
  EffectsInt32Effect__Done( &_this->FadeEffectPowerOff );
  ClockClock__Done( &_this->Clock );
  WidgetSetRadioButton__Done( &_this->Default );
  ThermostatLogo__Done( &_this->Logo );
  ViewsRectangle__Done( &_this->FilledRectangle );
  EffectsInt32Effect__Done( &_this->FadeEffectManual );
  EffectsInt32Effect__Done( &_this->FadeEffectGoBack );
  ViewsImage__Done( &_this->Fan );
  ViewsText__Done( &_this->FanText );
  CoreSimpleTouchHandler__Done( &_this->FanTouchHandler );
  EffectsInt32Effect__Done( &_this->FadeEffectFanMode );

  /* Don't forget to deinitialize the super class ... */
  CoreGroup__Done( &_this->_.Super );
}

/* 'C' function for method : 'Thermostat::Thermostat.changeBackFinished()' */
void ThermostatThermostat_changeBackFinished( ThermostatThermostat _this, XObject 
  sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  ViewsWallpaper_OnSetBitmap( &_this->Background, _this->Overlay.Bitmap );
  ViewsWallpaper_OnSetOpacity( &_this->Overlay, 0 );
}

/* This slot method is executed when the associated property observer 'PropertyObserver' 
   is notified. */
void ThermostatThermostat_onSettingChanged( ThermostatThermostat _this, XObject 
  sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  ViewsWallpaper_OnSetOpacity( &_this->Overlay, 0 );
  EffectsEffect_OnSetEnabled((EffectsEffect)&_this->FadeEffect, 0 );

  switch ( _this->Device->SettingNo )
  {
    case 1 :
      ViewsWallpaper_OnSetBitmap( &_this->Overlay, EwLoadResource( &ThermostatBackgroundNight, 
      ResourcesBitmap ));
    break;

    case 2 :
      ViewsWallpaper_OnSetBitmap( &_this->Overlay, EwLoadResource( &ThermostatBackgroundVacation, 
      ResourcesBitmap ));
    break;

    case 0 :
    case 3 :
      ViewsWallpaper_OnSetBitmap( &_this->Overlay, EwLoadResource( &ThermostatBackgroundDay, 
      ResourcesBitmap ));
    break;

    default : 
      ViewsWallpaper_OnSetBitmap( &_this->Overlay, EwLoadResource( &ThermostatBackgroundDefault, 
      ResourcesBitmap ));
  }

  EffectsEffect_OnSetEnabled((EffectsEffect)&_this->FadeEffect, 1 );
}

/* 'C' function for method : 'Thermostat::Thermostat.ExitScreenSlot()' */
void ThermostatThermostat_ExitScreenSlot( ThermostatThermostat _this, XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  CoreGroup__OnSetOpacity( &_this->ExitScreen, 0 );
  EffectsEffect_OnSetEnabled((EffectsEffect)&_this->FadeEffectPowerOff, 0 );
  ViewsWallpaper_OnSetVisible( &_this->Background, 0 );
  ViewsWallpaper_OnSetVisible( &_this->Overlay, 0 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->ToggleButton, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->ToggleButton, 0 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->RadioDay, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->RadioDay, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->RadioNight, 0 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->RadioNight, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->RadioVacation, 0 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->RadioVacation, 0 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->TemperatureController, 0 );
  ViewsText_OnSetVisible( &_this->OnOffButtonText, 0 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->Clock, 0 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->Default, 0 );
  ViewsRectangle_OnSetVisible( &_this->FilledRectangle, 0 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->DefaultThermostat, 0 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->RadioPowerOff, 0 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->FanMode, 0 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->Logo, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->RadioPowerOff, 0 );
  ViewsImage_OnSetVisible( &_this->Fan, 0 );
  ViewsText_OnSetVisible( &_this->FanText, 0 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->ExitScreen, 1 );
  EffectsEffect_OnSetEnabled((EffectsEffect)&_this->FadeEffectPowerOff, 1 );
}

/* 'C' function for method : 'Thermostat::Thermostat.DefaultThermSlot()' */
void ThermostatThermostat_DefaultThermSlot( ThermostatThermostat _this, XObject 
  sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  CoreGroup__OnSetOpacity( &_this->DefaultThermostat, 0 );
  EffectsEffect_OnSetEnabled((EffectsEffect)&_this->FadeEffectManual, 0 );
  ThermostatDeviceClass_OnSetSettingNo( EwGetAutoObject( &ThermostatDevice, ThermostatDeviceClass ), 
  3 );
  ViewsWallpaper_OnSetVisible( &_this->Background, 0 );
  ViewsWallpaper_OnSetVisible( &_this->Overlay, 0 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->ToggleButton, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->ToggleButton, 0 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->RadioDay, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->RadioDay, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->RadioNight, 0 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->RadioNight, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->RadioVacation, 0 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->RadioVacation, 0 );
  ViewsRectangle_OnSetVisible( &_this->FilledRectangle, 0 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->TemperatureController, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->TemperatureController, 0 );
  ViewsText_OnSetVisible( &_this->OnOffButtonText, 0 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->Clock, 0 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->Default, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->Default, 0 );
  CoreView_OnSetStackingPriority((CoreView)&_this->DefaultThermostat, 1 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->DefaultThermostat, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->DefaultThermostat, 1 );
  CoreSimpleTouchHandler_OnSetEnabled( &_this->GoBackTouchHandler, 1 );
  EffectsEffect_OnSetEnabled((EffectsEffect)&_this->FadeEffectManual, 1 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->RadioPowerOff, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->RadioPowerOff, 1 );
  ThermostatDeviceClass_OnSetFanSpeed( _this->Device, 15 );
  ThermostatDeviceClass_OnSetSwingMode( _this->Device, 0 );
}

/* 'C' function for method : 'Thermostat::Thermostat.GoBackSlot()' */
void ThermostatThermostat_GoBackSlot( ThermostatThermostat _this, XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  CoreGroup__OnSetOpacity( &_this->TemperatureController, 0 );
  EffectsEffect_OnSetEnabled((EffectsEffect)&_this->FadeEffectGoBack, 0 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->DefaultThermostat, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->TemperatureController, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->DefaultThermostat, 0 );
  CoreSimpleTouchHandler_OnSetEnabled( &_this->GoBackTouchHandler, 0 );
  ViewsWallpaper_OnSetVisible( &_this->Background, 1 );
  ViewsWallpaper_OnSetVisible( &_this->Overlay, 1 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->ToggleButton, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->ToggleButton, 1 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->RadioDay, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->RadioDay, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->RadioNight, 1 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->RadioNight, 1 );
  ViewsRectangle_OnSetVisible( &_this->FilledRectangle, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->RadioVacation, 1 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->RadioVacation, 1 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->TemperatureController, 1 );
  ViewsText_OnSetVisible( &_this->OnOffButtonText, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->RadioPowerOff, 1 );
  ViewsRectangle_OnSetVisible( &_this->FilledRectangle, 1 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->RadioPowerOff, 1 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->Clock, 1 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->Default, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->Default, 1 );
  WidgetSetRadioButton_OnSetSelected( &_this->Default, 0 );
  WidgetSetRadioButton_OnSetSelected( &_this->RadioDay, 1 );
  ThermostatDeviceClass_OnSetSettingNo( _this->Device, 0 );
  EffectsEffect_OnSetEnabled((EffectsEffect)&_this->FadeEffectGoBack, 1 );
}

/* 'C' function for method : 'Thermostat::Thermostat.SlotFan()' */
void ThermostatThermostat_SlotFan( ThermostatThermostat _this, XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  CoreGroup__OnSetOpacity( &_this->FanMode, 0 );
  EffectsEffect_OnSetEnabled((EffectsEffect)&_this->FadeEffectFanMode, 0 );
  ViewsWallpaper_OnSetVisible( &_this->Background, 0 );
  ViewsWallpaper_OnSetVisible( &_this->Overlay, 0 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->ToggleButton, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->ToggleButton, 0 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->RadioDay, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->RadioDay, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->RadioNight, 0 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->RadioNight, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->RadioVacation, 0 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->RadioVacation, 0 );
  ViewsRectangle_OnSetVisible( &_this->FilledRectangle, 0 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->TemperatureController, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->TemperatureController, 0 );
  ViewsText_OnSetVisible( &_this->OnOffButtonText, 0 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->Clock, 0 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->Default, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->Default, 0 );
  CoreView_OnSetStackingPriority((CoreView)&_this->FanMode, 1 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->FanMode, 1 );
  EffectsEffect_OnSetEnabled((EffectsEffect)&_this->FadeEffectFanMode, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->FanMode, 1 );
  CoreSimpleTouchHandler_OnSetEnabled( &_this->SimpleTouchHandlerFanMode, 1 );
}

/* 'C' function for method : 'Thermostat::Thermostat.SlotGoBackFanMode()' */
void ThermostatThermostat_SlotGoBackFanMode( ThermostatThermostat _this, XObject 
  sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  CoreGroup__OnSetOpacity( &_this->TemperatureController, 0 );
  EffectsEffect_OnSetEnabled((EffectsEffect)&_this->FadeEffectGoBack, 0 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->FanMode, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->FanMode, 0 );
  CoreSimpleTouchHandler_OnSetEnabled( &_this->SimpleTouchHandlerFanMode, 0 );
  ViewsWallpaper_OnSetVisible( &_this->Background, 1 );
  ViewsWallpaper_OnSetVisible( &_this->Overlay, 1 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->ToggleButton, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->ToggleButton, 1 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->RadioDay, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->RadioDay, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->RadioNight, 1 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->RadioNight, 1 );
  ViewsRectangle_OnSetVisible( &_this->FilledRectangle, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->RadioVacation, 1 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->RadioVacation, 1 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->TemperatureController, 1 );
  ViewsText_OnSetVisible( &_this->OnOffButtonText, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->RadioPowerOff, 1 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->RadioPowerOff, 1 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->Clock, 1 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->Default, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->Default, 1 );
  WidgetSetRadioButton_OnSetSelected( &_this->RadioDay, 1 );
  ThermostatDeviceClass_OnSetSettingNo( _this->Device, 0 );
  EffectsEffect_OnSetEnabled((EffectsEffect)&_this->FadeEffectGoBack, 1 );
}

/* Variants derived from the class : 'Thermostat::Thermostat' */
EW_DEFINE_CLASS_VARIANTS( ThermostatThermostat )
EW_END_OF_CLASS_VARIANTS( ThermostatThermostat )

/* Virtual Method Table (VMT) for the class : 'Thermostat::Thermostat' */
EW_DEFINE_CLASS( ThermostatThermostat, CoreGroup, FilledBackground, Device, _.VMT, 
                 _.VMT, _.VMT, _.VMT, "Thermostat::Thermostat" )
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
EW_END_OF_CLASS( ThermostatThermostat )

/* Include a file containing the bitmap resource : 'Thermostat::BackgroundDay' */
#include "_ThermostatBackgroundDay.h"

/* Table with links to derived variants of the bitmap resource : 'Thermostat::BackgroundDay' */
EW_RES_WITHOUT_VARIANTS( ThermostatBackgroundDay )

/* Include a file containing the bitmap resource : 'Thermostat::BackgroundNight' */
#include "_ThermostatBackgroundNight.h"

/* Table with links to derived variants of the bitmap resource : 'Thermostat::BackgroundNight' */
EW_RES_WITHOUT_VARIANTS( ThermostatBackgroundNight )

/* Include a file containing the font resource : 'Thermostat::FontM' */
#include "_ThermostatFontM.h"

/* Table with links to derived variants of the font resource : 'Thermostat::FontM' */
EW_RES_WITHOUT_VARIANTS( ThermostatFontM )

/* Include a file containing the bitmap resource : 'Thermostat::BackgroundDefault' */
#include "_ThermostatBackgroundDefault.h"

/* Table with links to derived variants of the bitmap resource : 'Thermostat::BackgroundDefault' */
EW_RES_WITHOUT_VARIANTS( ThermostatBackgroundDefault )

/* User defined auto object: 'Thermostat::RadioButtonPowerOff' */
EW_DEFINE_AUTOOBJECT( ThermostatRadioButtonPowerOff, WidgetSetRadioButtonConfig )

/* Initializer for the auto object 'Thermostat::RadioButtonPowerOff' */
void ThermostatRadioButtonPowerOff__Init( WidgetSetRadioButtonConfig _this )
{
  WidgetSetRadioButtonConfig_OnSetLabelOnColorActive( _this, _Const0001 );
  WidgetSetRadioButtonConfig_OnSetLabelOnColorFocused( _this, _Const0001 );
  WidgetSetRadioButtonConfig_OnSetLabelOnColorDefault( _this, _Const0001 );
  WidgetSetRadioButtonConfig_OnSetLabelOffColorActive( _this, _Const0001 );
  WidgetSetRadioButtonConfig_OnSetLabelOffColorFocused( _this, _Const0001 );
  WidgetSetRadioButtonConfig_OnSetLabelOffColorDefault( _this, _Const0001 );
  WidgetSetRadioButtonConfig_OnSetLabelMarginLeft( _this, 50 );
  WidgetSetRadioButtonConfig_OnSetLabelAlignment( _this, ViewsTextAlignmentAlignHorzLeft 
  | ViewsTextAlignmentAlignVertCenter );
  WidgetSetRadioButtonConfig_OnSetLabelOnFont( _this, EwLoadResource( &ThermostatFontL, 
  ResourcesFont ));
  WidgetSetRadioButtonConfig_OnSetLabelOffFont( _this, EwLoadResource( &ThermostatFontL, 
  ResourcesFont ));
  WidgetSetRadioButtonConfig_OnSetFaceLayout( _this, CoreLayoutAlignToBottom | CoreLayoutAlignToLeft 
  | CoreLayoutAlignToTop );
  WidgetSetRadioButtonConfig_OnSetFaceOnFrameActive( _this, 1 );
  WidgetSetRadioButtonConfig_OnSetFaceOnFrameFocused( _this, 1 );
  WidgetSetRadioButtonConfig_OnSetFaceOnFrameDisabled( _this, 1 );
  WidgetSetRadioButtonConfig_OnSetFaceOnFrameDefault( _this, 1 );
  WidgetSetRadioButtonConfig_OnSetFaceOnBitmapActive( _this, EwLoadResource( &ThermostatPowerOffIcon, 
  ResourcesBitmap ));
  WidgetSetRadioButtonConfig_OnSetFaceOnBitmapFocused( _this, EwLoadResource( &ThermostatPowerOffIcon, 
  ResourcesBitmap ));
  WidgetSetRadioButtonConfig_OnSetFaceOnBitmapDisabled( _this, EwLoadResource( &ThermostatPowerOffIcon, 
  ResourcesBitmap ));
  WidgetSetRadioButtonConfig_OnSetFaceOnBitmapDefault( _this, EwLoadResource( &ThermostatPowerOffIcon, 
  ResourcesBitmap ));
  WidgetSetRadioButtonConfig_OnSetFaceOffTintDefault( _this, _Const0001 );
  WidgetSetRadioButtonConfig_OnSetFaceOffFrameActive( _this, 0 );
  WidgetSetRadioButtonConfig_OnSetFaceOffFrameFocused( _this, 0 );
  WidgetSetRadioButtonConfig_OnSetFaceOffFrameDisabled( _this, 0 );
  WidgetSetRadioButtonConfig_OnSetFaceOffFrameDefault( _this, 0 );
  WidgetSetRadioButtonConfig_OnSetFaceOffBitmapActive( _this, EwLoadResource( &ThermostatPowerOffIcon, 
  ResourcesBitmap ));
  WidgetSetRadioButtonConfig_OnSetFaceOffBitmapFocused( _this, EwLoadResource( &ThermostatPowerOffIcon, 
  ResourcesBitmap ));
  WidgetSetRadioButtonConfig_OnSetFaceOffBitmapDisabled( _this, EwLoadResource( 
  &ThermostatPowerOffIcon, ResourcesBitmap ));
  WidgetSetRadioButtonConfig_OnSetFaceOffBitmapDefault( _this, EwLoadResource( &ThermostatPowerOffIcon, 
  ResourcesBitmap ));
  WidgetSetRadioButtonConfig_OnSetWidgetMaxSize( _this, _Const0002 );
  WidgetSetRadioButtonConfig_OnSetWidgetMinSize( _this, _Const0003 );
}

/* Re-Initializer for the auto object 'Thermostat::RadioButtonPowerOff' */
void ThermostatRadioButtonPowerOff__ReInit( WidgetSetRadioButtonConfig _this )
{
  EW_UNUSED_ARG( _this );
}

/* Table with links to derived variants of the auto object : 'Thermostat::RadioButtonPowerOff' */
EW_DEFINE_AUTOOBJECT_VARIANTS( ThermostatRadioButtonPowerOff )
EW_END_OF_AUTOOBJECT_VARIANTS( ThermostatRadioButtonPowerOff )

/* Include a file containing the bitmap resource : 'Thermostat::PowerOffIcon' */
#include "_ThermostatPowerOffIcon.h"

/* Table with links to derived variants of the bitmap resource : 'Thermostat::PowerOffIcon' */
EW_RES_WITHOUT_VARIANTS( ThermostatPowerOffIcon )

/* Initializer for the class 'Thermostat::ExitScreen' */
void ThermostatExitScreen__Init( ThermostatExitScreen _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  CoreGroup__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( ThermostatExitScreen );

  /* ... then construct all embedded objects */
  ViewsRectangle__Init( &_this->Background, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->Text, &_this->_.XObject, 0 );
  EffectsColorEffect__Init( &_this->ColorEffect, &_this->_.XObject, 0 );
  ViewsImage__Init( &_this->House, &_this->_.XObject, 0 );
  ViewsImage__Init( &_this->Icon, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ThermostatExitScreen );

  /* ... and initialize objects, variables, properties, etc. */
  CoreRectView__OnSetBounds( _this, _Const001C );
  CoreRectView__OnSetBounds( &_this->Background, _Const001C );
  ViewsRectangle_OnSetColorTR( &_this->Background, _Const0043 );
  ViewsRectangle_OnSetColorTL( &_this->Background, _Const0044 );
  CoreRectView__OnSetBounds( &_this->Text, _Const0045 );
  ViewsText_OnSetString( &_this->Text, EwLoadString( &_Const0046 ));
  EffectsEffect_OnSetInterCycleDelay((EffectsEffect)&_this->ColorEffect, 500 );
  EffectsEffect_OnSetInitialDelay((EffectsEffect)&_this->ColorEffect, 500 );
  EffectsEffect_OnSetEnabled((EffectsEffect)&_this->ColorEffect, 1 );
  _this->ColorEffect.Value2 = ThermostatCold;
  _this->ColorEffect.Value1 = ThermostatHot;
  CoreRectView__OnSetBounds( &_this->House, _Const0047 );
  CoreRectView__OnSetBounds( &_this->Icon, _Const0048 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Background ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Text ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->House ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Icon ), 0 );
  ViewsText_OnSetFont( &_this->Text, EwLoadResource( &ResourcesFontExtraLarge, ResourcesFont ));
  _this->ColorEffect.Super1.OnFinished = EwNullSlot;
  _this->ColorEffect.Outlet = EwNewRef( &_this->Text, ViewsText_OnGetColor, ViewsText_OnSetColor );
  ViewsImage_OnSetBitmap( &_this->House, EwLoadResource( &ThermostatHouseSplashScreen, 
  ResourcesBitmap ));
  ViewsImage_OnSetBitmap( &_this->Icon, EwLoadResource( &ThermostatHeatSplashScreen, 
  ResourcesBitmap ));
}

/* Re-Initializer for the class 'Thermostat::ExitScreen' */
void ThermostatExitScreen__ReInit( ThermostatExitScreen _this )
{
  /* At first re-initialize the super class ... */
  CoreGroup__ReInit( &_this->_.Super );

  /* ... then re-construct all embedded objects */
  ViewsRectangle__ReInit( &_this->Background );
  ViewsText__ReInit( &_this->Text );
  EffectsColorEffect__ReInit( &_this->ColorEffect );
  ViewsImage__ReInit( &_this->House );
  ViewsImage__ReInit( &_this->Icon );
}

/* Finalizer method for the class 'Thermostat::ExitScreen' */
void ThermostatExitScreen__Done( ThermostatExitScreen _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( CoreGroup );

  /* Finalize all embedded objects */
  ViewsRectangle__Done( &_this->Background );
  ViewsText__Done( &_this->Text );
  EffectsColorEffect__Done( &_this->ColorEffect );
  ViewsImage__Done( &_this->House );
  ViewsImage__Done( &_this->Icon );

  /* Don't forget to deinitialize the super class ... */
  CoreGroup__Done( &_this->_.Super );
}

/* Variants derived from the class : 'Thermostat::ExitScreen' */
EW_DEFINE_CLASS_VARIANTS( ThermostatExitScreen )
EW_END_OF_CLASS_VARIANTS( ThermostatExitScreen )

/* Virtual Method Table (VMT) for the class : 'Thermostat::ExitScreen' */
EW_DEFINE_CLASS( ThermostatExitScreen, CoreGroup, Background, _.VMT, _.VMT, _.VMT, 
                 _.VMT, _.VMT, "Thermostat::ExitScreen" )
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
EW_END_OF_CLASS( ThermostatExitScreen )

/* Include a file containing the bitmap resource : 'Thermostat::BackgroundVacation' */
#include "_ThermostatBackgroundVacation.h"

/* Table with links to derived variants of the bitmap resource : 'Thermostat::BackgroundVacation' */
EW_RES_WITHOUT_VARIANTS( ThermostatBackgroundVacation )

/* User defined constant: 'Thermostat::Vac' */
const XColor ThermostatVac = { 0xFF, 0x8B, 0x4F, 0xFF };

/* Include a file containing the bitmap resource : 'Thermostat::HouseSplashScreen' */
#include "_ThermostatHouseSplashScreen.h"

/* Table with links to derived variants of the bitmap resource : 'Thermostat::HouseSplashScreen' */
EW_RES_WITHOUT_VARIANTS( ThermostatHouseSplashScreen )

/* Include a file containing the bitmap resource : 'Thermostat::HeatSplashScreen' */
#include "_ThermostatHeatSplashScreen.h"

/* Table with links to derived variants of the bitmap resource : 'Thermostat::HeatSplashScreen' */
EW_RES_WITHOUT_VARIANTS( ThermostatHeatSplashScreen )

/* Initializer for the class 'Thermostat::DefaultThermostat' */
void ThermostatDefaultThermostat__Init( ThermostatDefaultThermostat _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  CoreGroup__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( ThermostatDefaultThermostat );

  /* ... then construct all embedded objects */
  ViewsImage__Init( &_this->BackgroundImage, &_this->_.XObject, 0 );
  ThermostatTemperatureController__Init( &_this->TemperatureController, &_this->_.XObject, 0 );
  ViewsImage__Init( &_this->GoBackArrow, &_this->_.XObject, 0 );
  WidgetSetRadioButton__Init( &_this->PowerOff, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ThermostatDefaultThermostat );

  /* ... and initialize objects, variables, properties, etc. */
  CoreRectView__OnSetBounds( _this, _Const001C );
  CoreRectView__OnSetBounds( &_this->BackgroundImage, _Const001C );
  CoreRectView__OnSetBounds( &_this->TemperatureController, _Const0049 );
  CoreRectView__OnSetBounds( &_this->GoBackArrow, _Const004A );
  CoreRectView__OnSetBounds( &_this->PowerOff, _Const0027 );
  WidgetSetRadioButton_OnSetLabel( &_this->PowerOff, 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->BackgroundImage ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->TemperatureController ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->GoBackArrow ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->PowerOff ), 0 );
  ViewsImage_OnSetBitmap( &_this->BackgroundImage, EwLoadResource( &ThermostatBackgroundDay, 
  ResourcesBitmap ));
  ThermostatTemperatureController_OnSetOutletNominal( &_this->TemperatureController, 
  EwNewRef( EwGetAutoObject( &ThermostatDevice, ThermostatDeviceClass ), ThermostatDeviceClass_OnGetNominalTemp, 
  ThermostatDeviceClass_OnSetNominalTemp ));
  ThermostatTemperatureController_OnSetOutletActual( &_this->TemperatureController, 
  EwNewRef( EwGetAutoObject( &ThermostatDevice, ThermostatDeviceClass ), ThermostatDeviceClass_OnGetActualTemp, 
  ThermostatDeviceClass_OnSetActualTemp ));
  ViewsImage_OnSetBitmap( &_this->GoBackArrow, EwLoadResource( &ThermostatGoBackArrow, 
  ResourcesBitmap ));
  WidgetSetRadioButton_OnSetAppearance( &_this->PowerOff, EwGetAutoObject( &ThermostatRadioButtonPowerOff, 
  WidgetSetRadioButtonConfig ));
}

/* Re-Initializer for the class 'Thermostat::DefaultThermostat' */
void ThermostatDefaultThermostat__ReInit( ThermostatDefaultThermostat _this )
{
  /* At first re-initialize the super class ... */
  CoreGroup__ReInit( &_this->_.Super );

  /* ... then re-construct all embedded objects */
  ViewsImage__ReInit( &_this->BackgroundImage );
  ThermostatTemperatureController__ReInit( &_this->TemperatureController );
  ViewsImage__ReInit( &_this->GoBackArrow );
  WidgetSetRadioButton__ReInit( &_this->PowerOff );
}

/* Finalizer method for the class 'Thermostat::DefaultThermostat' */
void ThermostatDefaultThermostat__Done( ThermostatDefaultThermostat _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( CoreGroup );

  /* Finalize all embedded objects */
  ViewsImage__Done( &_this->BackgroundImage );
  ThermostatTemperatureController__Done( &_this->TemperatureController );
  ViewsImage__Done( &_this->GoBackArrow );
  WidgetSetRadioButton__Done( &_this->PowerOff );

  /* Don't forget to deinitialize the super class ... */
  CoreGroup__Done( &_this->_.Super );
}

/* Variants derived from the class : 'Thermostat::DefaultThermostat' */
EW_DEFINE_CLASS_VARIANTS( ThermostatDefaultThermostat )
EW_END_OF_CLASS_VARIANTS( ThermostatDefaultThermostat )

/* Virtual Method Table (VMT) for the class : 'Thermostat::DefaultThermostat' */
EW_DEFINE_CLASS( ThermostatDefaultThermostat, CoreGroup, BackgroundImage, _.VMT, 
                 _.VMT, _.VMT, _.VMT, _.VMT, "Thermostat::DefaultThermostat" )
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
EW_END_OF_CLASS( ThermostatDefaultThermostat )

/* User defined auto object: 'Thermostat::RadioButtonDefaultConfig' */
EW_DEFINE_AUTOOBJECT( ThermostatRadioButtonDefaultConfig, WidgetSetRadioButtonConfig )

/* Initializer for the auto object 'Thermostat::RadioButtonDefaultConfig' */
void ThermostatRadioButtonDefaultConfig__Init( WidgetSetRadioButtonConfig _this )
{
  WidgetSetRadioButtonConfig_OnSetLabelOnColorActive( _this, _Const0001 );
  WidgetSetRadioButtonConfig_OnSetLabelOnColorFocused( _this, _Const0001 );
  WidgetSetRadioButtonConfig_OnSetLabelOnColorDefault( _this, ThermostatHot );
  WidgetSetRadioButtonConfig_OnSetLabelOffColorActive( _this, _Const0001 );
  WidgetSetRadioButtonConfig_OnSetLabelOffColorFocused( _this, _Const0001 );
  WidgetSetRadioButtonConfig_OnSetLabelOffColorDefault( _this, ThermostatHot );
  WidgetSetRadioButtonConfig_OnSetLabelMarginLeft( _this, 50 );
  WidgetSetRadioButtonConfig_OnSetLabelAlignment( _this, ViewsTextAlignmentAlignHorzLeft 
  | ViewsTextAlignmentAlignVertCenter );
  WidgetSetRadioButtonConfig_OnSetLabelOnFont( _this, EwLoadResource( &ThermostatFontL, 
  ResourcesFont ));
  WidgetSetRadioButtonConfig_OnSetLabelOffFont( _this, EwLoadResource( &ThermostatFontL, 
  ResourcesFont ));
  WidgetSetRadioButtonConfig_OnSetFaceLayout( _this, CoreLayoutAlignToBottom | CoreLayoutAlignToLeft 
  | CoreLayoutAlignToTop );
  WidgetSetRadioButtonConfig_OnSetFaceOnFrameActive( _this, 1 );
  WidgetSetRadioButtonConfig_OnSetFaceOnFrameFocused( _this, 1 );
  WidgetSetRadioButtonConfig_OnSetFaceOnFrameDisabled( _this, 1 );
  WidgetSetRadioButtonConfig_OnSetFaceOnFrameDefault( _this, 1 );
  WidgetSetRadioButtonConfig_OnSetFaceOnBitmapActive( _this, 0 );
  WidgetSetRadioButtonConfig_OnSetFaceOnBitmapFocused( _this, 0 );
  WidgetSetRadioButtonConfig_OnSetFaceOnBitmapDisabled( _this, 0 );
  WidgetSetRadioButtonConfig_OnSetFaceOnBitmapDefault( _this, 0 );
  WidgetSetRadioButtonConfig_OnSetFaceOffFrameActive( _this, 0 );
  WidgetSetRadioButtonConfig_OnSetFaceOffFrameFocused( _this, 0 );
  WidgetSetRadioButtonConfig_OnSetFaceOffFrameDisabled( _this, 0 );
  WidgetSetRadioButtonConfig_OnSetFaceOffFrameDefault( _this, 0 );
  WidgetSetRadioButtonConfig_OnSetFaceOffBitmapActive( _this, 0 );
  WidgetSetRadioButtonConfig_OnSetFaceOffBitmapFocused( _this, 0 );
  WidgetSetRadioButtonConfig_OnSetFaceOffBitmapDisabled( _this, 0 );
  WidgetSetRadioButtonConfig_OnSetFaceOffBitmapDefault( _this, 0 );
  WidgetSetRadioButtonConfig_OnSetWidgetMaxSize( _this, _Const0002 );
  WidgetSetRadioButtonConfig_OnSetWidgetMinSize( _this, _Const0003 );
}

/* Re-Initializer for the auto object 'Thermostat::RadioButtonDefaultConfig' */
void ThermostatRadioButtonDefaultConfig__ReInit( WidgetSetRadioButtonConfig _this )
{
  EW_UNUSED_ARG( _this );
}

/* Table with links to derived variants of the auto object : 'Thermostat::RadioButtonDefaultConfig' */
EW_DEFINE_AUTOOBJECT_VARIANTS( ThermostatRadioButtonDefaultConfig )
EW_END_OF_AUTOOBJECT_VARIANTS( ThermostatRadioButtonDefaultConfig )

/* Include a file containing the bitmap resource : 'Thermostat::GoBackArrow' */
#include "_ThermostatGoBackArrow.h"

/* Table with links to derived variants of the bitmap resource : 'Thermostat::GoBackArrow' */
EW_RES_WITHOUT_VARIANTS( ThermostatGoBackArrow )

/* Initializer for the class 'Thermostat::Logo' */
void ThermostatLogo__Init( ThermostatLogo _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  CoreGroup__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( ThermostatLogo );

  /* ... then construct all embedded objects */
  ViewsRectangle__Init( &_this->Background, &_this->_.XObject, 0 );
  ViewsImage__Init( &_this->HouseImage, &_this->_.XObject, 0 );
  ViewsImage__Init( &_this->HeatSymbol, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ThermostatLogo );

  /* ... and initialize objects, variables, properties, etc. */
  CoreRectView__OnSetBounds( _this, _Const004B );
  CoreRectView__OnSetBounds( &_this->Background, _Const004B );
  ViewsRectangle_OnSetColor( &_this->Background, _Const004C );
  CoreRectView__OnSetBounds( &_this->HouseImage, _Const004B );
  ViewsImage_OnSetColor( &_this->HouseImage, _Const0001 );
  CoreRectView__OnSetBounds( &_this->HeatSymbol, _Const004D );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Background ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->HouseImage ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->HeatSymbol ), 0 );
  ViewsImage_OnSetBitmap( &_this->HouseImage, EwLoadResource( &ThermostatHouseImage, 
  ResourcesBitmap ));
  ViewsImage_OnSetBitmap( &_this->HeatSymbol, EwLoadResource( &ThermostatHeatHandsSymbol, 
  ResourcesBitmap ));
}

/* Re-Initializer for the class 'Thermostat::Logo' */
void ThermostatLogo__ReInit( ThermostatLogo _this )
{
  /* At first re-initialize the super class ... */
  CoreGroup__ReInit( &_this->_.Super );

  /* ... then re-construct all embedded objects */
  ViewsRectangle__ReInit( &_this->Background );
  ViewsImage__ReInit( &_this->HouseImage );
  ViewsImage__ReInit( &_this->HeatSymbol );
}

/* Finalizer method for the class 'Thermostat::Logo' */
void ThermostatLogo__Done( ThermostatLogo _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( CoreGroup );

  /* Finalize all embedded objects */
  ViewsRectangle__Done( &_this->Background );
  ViewsImage__Done( &_this->HouseImage );
  ViewsImage__Done( &_this->HeatSymbol );

  /* Don't forget to deinitialize the super class ... */
  CoreGroup__Done( &_this->_.Super );
}

/* Variants derived from the class : 'Thermostat::Logo' */
EW_DEFINE_CLASS_VARIANTS( ThermostatLogo )
EW_END_OF_CLASS_VARIANTS( ThermostatLogo )

/* Virtual Method Table (VMT) for the class : 'Thermostat::Logo' */
EW_DEFINE_CLASS( ThermostatLogo, CoreGroup, Background, _.VMT, _.VMT, _.VMT, _.VMT, 
                 _.VMT, "Thermostat::Logo" )
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
EW_END_OF_CLASS( ThermostatLogo )

/* Include a file containing the bitmap resource : 'Thermostat::HouseImage' */
#include "_ThermostatHouseImage.h"

/* Table with links to derived variants of the bitmap resource : 'Thermostat::HouseImage' */
EW_RES_WITHOUT_VARIANTS( ThermostatHouseImage )

/* Include a file containing the bitmap resource : 'Thermostat::HeatHandsSymbol' */
#include "_ThermostatHeatHandsSymbol.h"

/* Table with links to derived variants of the bitmap resource : 'Thermostat::HeatHandsSymbol' */
EW_RES_WITHOUT_VARIANTS( ThermostatHeatHandsSymbol )

/* Initializer for the class 'Thermostat::FanMode' */
void ThermostatFanMode__Init( ThermostatFanMode _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  CoreGroup__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( ThermostatFanMode );

  /* ... then construct all embedded objects */
  ViewsImage__Init( &_this->BackgroundImage, &_this->_.XObject, 0 );
  WidgetSetVerticalSlider__Init( &_this->VerticalSlider, &_this->_.XObject, 0 );
  ViewsImage__Init( &_this->FanSmall, &_this->_.XObject, 0 );
  ViewsImage__Init( &_this->FanBig, &_this->_.XObject, 0 );
  ViewsImage__Init( &_this->GoBackFanMode, &_this->_.XObject, 0 );
  ThermostatLogo__Init( &_this->Logo, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ThermostatFanMode );

  /* ... and initialize objects, variables, properties, etc. */
  CoreRectView__OnSetBounds( _this, _Const001C );
  CoreRectView__OnSetBounds( &_this->BackgroundImage, _Const001C );
  CoreRectView__OnSetBounds( &_this->VerticalSlider, _Const004E );
  CoreRectView__OnSetBounds( &_this->FanSmall, _Const004F );
  CoreRectView__OnSetBounds( &_this->FanBig, _Const0050 );
  CoreRectView__OnSetBounds( &_this->GoBackFanMode, _Const0051 );
  CoreRectView__OnSetBounds( &_this->Logo, _Const003A );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->BackgroundImage ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->VerticalSlider ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->FanSmall ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->FanBig ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->GoBackFanMode ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Logo ), 0 );
  ViewsImage_OnSetBitmap( &_this->BackgroundImage, EwLoadResource( &ThermostatBackgroundDay, 
  ResourcesBitmap ));
  WidgetSetVerticalSlider_OnSetOutlet( &_this->VerticalSlider, EwNewRef( EwGetAutoObject( 
  &ThermostatDevice, ThermostatDeviceClass ), ThermostatDeviceClass_OnGetFanSpeed, 
  ThermostatDeviceClass_OnSetFanSpeed ));
  WidgetSetVerticalSlider_OnSetAppearance( &_this->VerticalSlider, EwGetAutoObject( 
  &ThermostatVerticalSliderConfig, WidgetSetVerticalSliderConfig ));
  ViewsImage_OnSetBitmap( &_this->FanSmall, EwLoadResource( &ThermostatSymbolFanSmall, 
  ResourcesBitmap ));
  ViewsImage_OnSetBitmap( &_this->FanBig, EwLoadResource( &ThermostatSymbolFanBig, 
  ResourcesBitmap ));
  ViewsImage_OnSetBitmap( &_this->GoBackFanMode, EwLoadResource( &ThermostatGoBackArrow, 
  ResourcesBitmap ));
}

/* Re-Initializer for the class 'Thermostat::FanMode' */
void ThermostatFanMode__ReInit( ThermostatFanMode _this )
{
  /* At first re-initialize the super class ... */
  CoreGroup__ReInit( &_this->_.Super );

  /* ... then re-construct all embedded objects */
  ViewsImage__ReInit( &_this->BackgroundImage );
  WidgetSetVerticalSlider__ReInit( &_this->VerticalSlider );
  ViewsImage__ReInit( &_this->FanSmall );
  ViewsImage__ReInit( &_this->FanBig );
  ViewsImage__ReInit( &_this->GoBackFanMode );
  ThermostatLogo__ReInit( &_this->Logo );
}

/* Finalizer method for the class 'Thermostat::FanMode' */
void ThermostatFanMode__Done( ThermostatFanMode _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( CoreGroup );

  /* Finalize all embedded objects */
  ViewsImage__Done( &_this->BackgroundImage );
  WidgetSetVerticalSlider__Done( &_this->VerticalSlider );
  ViewsImage__Done( &_this->FanSmall );
  ViewsImage__Done( &_this->FanBig );
  ViewsImage__Done( &_this->GoBackFanMode );
  ThermostatLogo__Done( &_this->Logo );

  /* Don't forget to deinitialize the super class ... */
  CoreGroup__Done( &_this->_.Super );
}

/* Variants derived from the class : 'Thermostat::FanMode' */
EW_DEFINE_CLASS_VARIANTS( ThermostatFanMode )
EW_END_OF_CLASS_VARIANTS( ThermostatFanMode )

/* Virtual Method Table (VMT) for the class : 'Thermostat::FanMode' */
EW_DEFINE_CLASS( ThermostatFanMode, CoreGroup, BackgroundImage, _.VMT, _.VMT, _.VMT, 
                 _.VMT, _.VMT, "Thermostat::FanMode" )
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
EW_END_OF_CLASS( ThermostatFanMode )

/* Include a file containing the bitmap resource : 'Thermostat::SymbolFanBig' */
#include "_ThermostatSymbolFanBig.h"

/* Table with links to derived variants of the bitmap resource : 'Thermostat::SymbolFanBig' */
EW_RES_WITHOUT_VARIANTS( ThermostatSymbolFanBig )

/* Include a file containing the bitmap resource : 'Thermostat::SymbolFanSmall' */
#include "_ThermostatSymbolFanSmall.h"

/* Table with links to derived variants of the bitmap resource : 'Thermostat::SymbolFanSmall' */
EW_RES_WITHOUT_VARIANTS( ThermostatSymbolFanSmall )

/* Embedded Wizard */
