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

/* Font resources used for the different widgets. If you want to change the fonts 
   within your project, just create a variant of these font resources and define 
   the attributes of the font resources according your design ideas. */
EW_DEFINE_FONT_RES( ThermostatFontM, 19, 5, 0, 16, 0x00C0, 0x00C0 )
  EW_GLYPH( 0x0000, 1, -14, 7, 14, 9, 0x00000000 ),
  EW_GLYPH( 0x0020, 0, 0, 0, 0, 5, 0x00000144 ),                /* ' ' */
  EW_GLYPH( 0x0021, 1, -14, 3, 14, 5, 0x00000144 ),             /* '!' */
  EW_GLYPH( 0x0022, 1, -15, 4, 4, 6, 0x0000018A ),              /* '"' */
  EW_GLYPH( 0x0023, 0, -14, 12, 14, 12, 0x000001B5 ),           /* '#' */
  EW_GLYPH( 0x0024, 1, -16, 9, 18, 11, 0x000003B0 ),            /* '$' */
  EW_GLYPH( 0x0025, 1, -14, 13, 14, 15, 0x000005C4 ),           /* '%' */
  EW_GLYPH( 0x0026, 0, -14, 12, 14, 12, 0x00000807 ),           /* '&' */
  EW_GLYPH( 0x0027, 1, -15, 2, 4, 3, 0x00000A33 ),              /* ''' */
  EW_GLYPH( 0x0028, 1, -16, 5, 21, 6, 0x00000A53 ),             /* '(' */
  EW_GLYPH( 0x0029, 0, -16, 6, 21, 7, 0x00000B80 ),             /* ')' */
  EW_GLYPH( 0x002A, 0, -14, 9, 8, 8, 0x00000CAA ),              /* '*' */
  EW_GLYPH( 0x002B, 0, -12, 11, 11, 11, 0x00000D8E ),           /* '+' */
  EW_GLYPH( 0x002C, 0, -2, 3, 5, 4, 0x00000E64 ),               /* ',' */
  EW_GLYPH( 0x002D, 0, -7, 6, 1, 6, 0x00000E98 ),               /* '-' */
  EW_GLYPH( 0x002E, 1, -2, 3, 2, 5, 0x00000EB5 ),               /* '.' */
  EW_GLYPH( 0x002F, 0, -14, 8, 15, 8, 0x00000EC5 ),             /* '/' */
  EW_GLYPH( 0x0030, 1, -14, 9, 14, 11, 0x00000FCE ),            /* '0' */
  EW_GLYPH( 0x0031, 1, -14, 6, 14, 11, 0x0000114C ),            /* '1' */
  EW_GLYPH( 0x0032, 1, -14, 10, 14, 11, 0x000011E0 ),           /* '2' */
  EW_GLYPH( 0x0033, 0, -14, 10, 14, 11, 0x00001378 ),           /* '3' */
  EW_GLYPH( 0x0034, 0, -14, 11, 14, 11, 0x00001529 ),           /* '4' */
  EW_GLYPH( 0x0035, 1, -14, 10, 14, 11, 0x00001686 ),           /* '5' */
  EW_GLYPH( 0x0036, 1, -14, 9, 14, 11, 0x00001829 ),            /* '6' */
  EW_GLYPH( 0x0037, 0, -14, 11, 14, 11, 0x000019E2 ),           /* '7' */
  EW_GLYPH( 0x0038, 1, -14, 9, 14, 11, 0x00001B53 ),            /* '8' */
  EW_GLYPH( 0x0039, 1, -14, 9, 14, 11, 0x00001D2F ),            /* '9' */
  EW_GLYPH( 0x003A, 1, -11, 3, 11, 4, 0x00001EE0 ),             /* ':' */
  EW_GLYPH( 0x003B, 0, -11, 4, 14, 4, 0x00001F1F ),             /* ';' */
  EW_GLYPH( 0x003C, 0, -11, 9, 9, 10, 0x00001F90 ),             /* '<' */
  EW_GLYPH( 0x003D, 1, -9, 9, 5, 11, 0x000020A4 ),              /* '=' */
  EW_GLYPH( 0x003E, 1, -11, 9, 9, 10, 0x00002140 ),             /* '>' */
  EW_GLYPH( 0x003F, 0, -14, 9, 14, 9, 0x0000224B ),             /* '?' */
  EW_GLYPH( 0x0040, 1, -14, 17, 18, 18, 0x00002386 ),           /* '@' */
  EW_GLYPH( 0x0041, 0, -14, 13, 14, 12, 0x0000273D ),           /* 'A' */
  EW_GLYPH( 0x0042, 1, -14, 10, 14, 12, 0x0000291D ),           /* 'B' */
  EW_GLYPH( 0x0043, 1, -14, 11, 14, 13, 0x00002AB5 ),           /* 'C' */
  EW_GLYPH( 0x0044, 1, -14, 11, 14, 13, 0x00002C74 ),           /* 'D' */
  EW_GLYPH( 0x0045, 1, -14, 10, 14, 11, 0x00002DDF ),           /* 'E' */
  EW_GLYPH( 0x0046, 1, -14, 10, 14, 11, 0x00002F10 ),           /* 'F' */
  EW_GLYPH( 0x0047, 1, -14, 12, 14, 14, 0x00003020 ),           /* 'G' */
  EW_GLYPH( 0x0048, 1, -14, 12, 14, 14, 0x000031FC ),           /* 'H' */
  EW_GLYPH( 0x0049, 2, -14, 2, 14, 5, 0x000032FD ),             /* 'I' */
  EW_GLYPH( 0x004A, 0, -14, 10, 14, 11, 0x00003321 ),           /* 'J' */
  EW_GLYPH( 0x004B, 2, -14, 11, 14, 13, 0x0000341C ),           /* 'K' */
  EW_GLYPH( 0x004C, 1, -14, 9, 14, 11, 0x000035A6 ),            /* 'L' */
  EW_GLYPH( 0x004D, 1, -14, 15, 14, 17, 0x00003648 ),           /* 'M' */
  EW_GLYPH( 0x004E, 1, -14, 12, 14, 14, 0x00003827 ),           /* 'N' */
  EW_GLYPH( 0x004F, 1, -14, 12, 14, 14, 0x0000397B ),           /* 'O' */
  EW_GLYPH( 0x0050, 1, -14, 11, 14, 12, 0x00003B45 ),           /* 'P' */
  EW_GLYPH( 0x0051, 1, -14, 12, 17, 14, 0x00003CA8 ),           /* 'Q' */
  EW_GLYPH( 0x0052, 1, -14, 11, 14, 13, 0x00003EC7 ),           /* 'R' */
  EW_GLYPH( 0x0053, 0, -14, 12, 14, 12, 0x00004051 ),           /* 'S' */
  EW_GLYPH( 0x0054, 0, -14, 12, 14, 12, 0x00004261 ),           /* 'T' */
  EW_GLYPH( 0x0055, 1, -14, 11, 14, 13, 0x00004369 ),           /* 'U' */
  EW_GLYPH( 0x0056, 0, -14, 12, 14, 12, 0x00004488 ),           /* 'V' */
  EW_GLYPH( 0x0057, 0, -14, 18, 14, 18, 0x00004645 ),           /* 'W' */
  EW_GLYPH( 0x0058, 0, -14, 12, 14, 12, 0x000048E8 ),           /* 'X' */
  EW_GLYPH( 0x0059, 0, -14, 12, 14, 12, 0x00004ACC ),           /* 'Y' */
  EW_GLYPH( 0x005A, 0, -14, 12, 14, 12, 0x00004C2B ),           /* 'Z' */
  EW_GLYPH( 0x005B, 1, -16, 4, 19, 5, 0x00004DDE ),             /* '[' */
  EW_GLYPH( 0x005C, 0, -14, 8, 15, 8, 0x00004E57 ),             /* '\' */
  EW_GLYPH( 0x005D, 0, -16, 4, 19, 5, 0x00004F6D ),             /* ']' */
  EW_GLYPH( 0x005E, 0, -14, 8, 7, 8, 0x00004FD9 ),              /* '^' */
  EW_GLYPH( 0x005F, 0, 0, 9, 1, 9, 0x00005084 ),                /* '_' */
  EW_GLYPH( 0x0060, 1, -15, 4, 3, 6, 0x000050B2 ),              /* '`' */
  EW_GLYPH( 0x0061, 1, -11, 9, 11, 11, 0x000050E0 ),            /* 'a' */
  EW_GLYPH( 0x0062, 1, -15, 9, 15, 11, 0x00005252 ),            /* 'b' */
  EW_GLYPH( 0x0063, 0, -11, 10, 11, 10, 0x0000539C ),           /* 'c' */
  EW_GLYPH( 0x0064, 1, -15, 9, 15, 11, 0x000054F0 ),            /* 'd' */
  EW_GLYPH( 0x0065, 0, -11, 10, 11, 10, 0x0000563B ),           /* 'e' */
  EW_GLYPH( 0x0066, 0, -15, 7, 15, 7, 0x000057B3 ),             /* 'f' */
  EW_GLYPH( 0x0067, 1, -11, 9, 15, 11, 0x00005885 ),            /* 'g' */
  EW_GLYPH( 0x0068, 1, -15, 9, 15, 11, 0x00005A2D ),            /* 'h' */
  EW_GLYPH( 0x0069, 1, -15, 2, 15, 4, 0x00005B1E ),             /* 'i' */
  EW_GLYPH( 0x006A, -1, -15, 5, 19, 5, 0x00005B55 ),            /* 'j' */
  EW_GLYPH( 0x006B, 1, -15, 9, 15, 10, 0x00005BF0 ),            /* 'k' */
  EW_GLYPH( 0x006C, 1, -15, 2, 15, 4, 0x00005D2B ),             /* 'l' */
  EW_GLYPH( 0x006D, 1, -11, 16, 11, 18, 0x00005D54 ),           /* 'm' */
  EW_GLYPH( 0x006E, 1, -11, 9, 11, 11, 0x00005ED0 ),            /* 'n' */
  EW_GLYPH( 0x006F, 0, -11, 11, 11, 11, 0x00005FA0 ),           /* 'o' */
  EW_GLYPH( 0x0070, 1, -11, 9, 15, 11, 0x000060F1 ),            /* 'p' */
  EW_GLYPH( 0x0071, 1, -11, 9, 15, 11, 0x00006243 ),            /* 'q' */
  EW_GLYPH( 0x0072, 1, -11, 6, 11, 7, 0x000063AE ),             /* 'r' */
  EW_GLYPH( 0x0073, 0, -11, 9, 11, 10, 0x0000642F ),            /* 's' */
  EW_GLYPH( 0x0074, 0, -14, 6, 14, 6, 0x000065A3 ),             /* 't' */
  EW_GLYPH( 0x0075, 1, -11, 9, 11, 11, 0x00006646 ),            /* 'u' */
  EW_GLYPH( 0x0076, 0, -11, 10, 11, 10, 0x000066F7 ),           /* 'v' */
  EW_GLYPH( 0x0077, 0, -11, 15, 11, 15, 0x00006823 ),           /* 'w' */
  EW_GLYPH( 0x0078, 0, -11, 10, 11, 10, 0x00006A16 ),           /* 'x' */
  EW_GLYPH( 0x0079, 0, -11, 10, 15, 10, 0x00006B6F ),           /* 'y' */
  EW_GLYPH( 0x007A, 0, -11, 10, 11, 10, 0x00006CFE ),           /* 'z' */
  EW_GLYPH( 0x007B, 0, -16, 7, 20, 7, 0x00006E3C ),             /* '{' */
  EW_GLYPH( 0x007C, 1, -14, 2, 17, 4, 0x00006F78 ),             /* '|' */
  EW_GLYPH( 0x007D, 0, -16, 7, 20, 7, 0x00006FA4 ),             /* '}' */
  EW_GLYPH( 0x007E, 1, -8, 12, 4, 14, 0x000070E3 ),             /* '~' */
  EW_GLYPH( 0x00A0, 0, 0, 0, 0, 5, 0x00007196 ),
  EW_GLYPH( 0x00A1, 1, -11, 2, 15, 4, 0x00007196 ),
  EW_GLYPH( 0x00A2, 1, -13, 9, 15, 11, 0x000071DA ),
  EW_GLYPH( 0x00A3, 0, -14, 11, 14, 11, 0x00007377 ),
  EW_GLYPH( 0x00A4, 0, -13, 14, 14, 14, 0x0000750D ),
  EW_GLYPH( 0x00A5, 0, -14, 12, 14, 12, 0x00007770 ),
  EW_GLYPH( 0x00A6, 1, -14, 2, 17, 4, 0x00007955 ),
  EW_GLYPH( 0x00A7, 1, -14, 10, 19, 12, 0x00007995 ),
  EW_GLYPH( 0x00A8, 1, -15, 7, 2, 9, 0x00007C50 ),
  EW_GLYPH( 0x00A9, 1, -14, 14, 14, 16, 0x00007C71 ),
  EW_GLYPH( 0x00AA, 1, -14, 7, 7, 9, 0x00007F3F ),
  EW_GLYPH( 0x00AB, 1, -9, 7, 7, 9, 0x0000800C ),
  EW_GLYPH( 0x00AC, 1, -8, 9, 4, 11, 0x000080E7 ),
  EW_GLYPH( 0x00AD, 0, -7, 6, 1, 6, 0x0000814E ),
  EW_GLYPH( 0x00AE, 1, -14, 14, 14, 16, 0x0000816B ),
  EW_GLYPH( 0x00AF, 1, -14, 7, 1, 9, 0x00008418 ),
  EW_GLYPH( 0x00B0, 1, -14, 6, 5, 8, 0x0000843C ),
  EW_GLYPH( 0x00B1, 0, -13, 10, 13, 11, 0x000084D2 ),
  EW_GLYPH( 0x00B2, 0, -14, 7, 8, 7, 0x000085DB ),
  EW_GLYPH( 0x00B3, 0, -14, 7, 8, 7, 0x000086AA ),
  EW_GLYPH( 0x00B4, 1, -15, 4, 3, 6, 0x00008790 ),
  EW_GLYPH( 0x00B5, 1, -11, 9, 15, 11, 0x000087C3 ),
  EW_GLYPH( 0x00B6, 1, -14, 7, 14, 10, 0x000088B0 ),
  EW_GLYPH( 0x00B7, 1, -8, 3, 2, 5, 0x0000896E ),
  EW_GLYPH( 0x00B8, 1, 0, 3, 4, 5, 0x0000897F ),
  EW_GLYPH( 0x00B9, 1, -14, 4, 8, 7, 0x000089B9 ),
  EW_GLYPH( 0x00BA, 1, -14, 7, 7, 9, 0x00008A08 ),
  EW_GLYPH( 0x00BB, 1, -9, 7, 7, 9, 0x00008AD5 ),
  EW_GLYPH( 0x00BC, 1, -14, 13, 14, 15, 0x00008BAA ),
  EW_GLYPH( 0x00BD, 1, -14, 14, 14, 15, 0x00008D7B ),
  EW_GLYPH( 0x00BE, 0, -14, 15, 14, 16, 0x00008F85 ),
  EW_GLYPH( 0x00BF, 0, -11, 9, 15, 9, 0x00009208 ),
  EW_GLYPH( 0x00C0, 0, -18, 13, 18, 12, 0x00009341 ),
  EW_GLYPH( 0x00C1, 0, -18, 13, 18, 12, 0x0000957E ),
  EW_GLYPH( 0x00C2, 0, -18, 13, 18, 12, 0x000097C2 ),
  EW_GLYPH( 0x00C3, 0, -18, 13, 18, 12, 0x00009A2E ),
  EW_GLYPH( 0x00C4, 0, -18, 13, 18, 12, 0x00009C9B ),
  EW_GLYPH( 0x00C5, 0, -19, 13, 19, 12, 0x00009ED5 ),
  EW_GLYPH( 0x00C6, 0, -14, 18, 14, 18, 0x0000A13A ),
  EW_GLYPH( 0x00C7, 1, -14, 11, 18, 13, 0x0000A3B2 ),
  EW_GLYPH( 0x00C8, 1, -18, 10, 18, 11, 0x0000A5E0 ),
  EW_GLYPH( 0x00C9, 1, -18, 10, 18, 11, 0x0000A762 ),
  EW_GLYPH( 0x00CA, 1, -18, 10, 18, 11, 0x0000A8EB ),
  EW_GLYPH( 0x00CB, 1, -18, 10, 18, 11, 0x0000AA9C ),
  EW_GLYPH( 0x00CC, 0, -18, 4, 18, 5, 0x0000AC1B ),
  EW_GLYPH( 0x00CD, 2, -18, 4, 18, 5, 0x0000AC94 ),
  EW_GLYPH( 0x00CE, -1, -18, 6, 18, 5, 0x0000AD14 ),
  EW_GLYPH( 0x00CF, -1, -18, 7, 18, 5, 0x0000ADE0 ),
  EW_GLYPH( 0x00D0, 0, -14, 13, 14, 13, 0x0000AE8C ),
  EW_GLYPH( 0x00D1, 1, -18, 12, 18, 14, 0x0000B04A ),
  EW_GLYPH( 0x00D2, 1, -18, 12, 18, 14, 0x0000B227 ),
  EW_GLYPH( 0x00D3, 1, -18, 12, 18, 14, 0x0000B44A ),
  EW_GLYPH( 0x00D4, 1, -18, 12, 18, 14, 0x0000B674 ),
  EW_GLYPH( 0x00D5, 1, -18, 12, 18, 14, 0x0000B8C6 ),
  EW_GLYPH( 0x00D6, 1, -18, 12, 18, 14, 0x0000BB19 ),
  EW_GLYPH( 0x00D7, 0, -10, 10, 9, 10, 0x0000BD39 ),
  EW_GLYPH( 0x00D8, 1, -15, 12, 16, 14, 0x0000BE62 ),
  EW_GLYPH( 0x00D9, 1, -18, 11, 18, 13, 0x0000C0CE ),
  EW_GLYPH( 0x00DA, 1, -18, 11, 18, 13, 0x0000C242 ),
  EW_GLYPH( 0x00DB, 1, -18, 11, 18, 13, 0x0000C3BD ),
  EW_GLYPH( 0x00DC, 1, -18, 11, 18, 13, 0x0000C560 ),
  EW_GLYPH( 0x00DD, 0, -18, 12, 18, 12, 0x0000C6D1 ),
  EW_GLYPH( 0x00DE, 1, -14, 10, 14, 12, 0x0000C890 ),
  EW_GLYPH( 0x00DF, 1, -15, 10, 15, 12, 0x0000C9C9 ),
  EW_GLYPH( 0x00E0, 1, -15, 9, 15, 11, 0x0000CB5A ),
  EW_GLYPH( 0x00E1, 1, -15, 9, 15, 11, 0x0000CD19 ),
  EW_GLYPH( 0x00E2, 1, -15, 9, 15, 11, 0x0000CEDF ),
  EW_GLYPH( 0x00E3, 1, -15, 9, 15, 11, 0x0000D0CD ),
  EW_GLYPH( 0x00E4, 1, -15, 9, 15, 11, 0x0000D2BC ),
  EW_GLYPH( 0x00E5, 1, -16, 9, 16, 11, 0x0000D478 ),
  EW_GLYPH( 0x00E6, 0, -11, 17, 11, 17, 0x0000D65B ),
  EW_GLYPH( 0x00E7, 0, -11, 10, 15, 10, 0x0000D8FE ),
  EW_GLYPH( 0x00E8, 0, -15, 10, 15, 10, 0x0000DABA ),
  EW_GLYPH( 0x00E9, 0, -15, 10, 15, 10, 0x0000DC83 ),
  EW_GLYPH( 0x00EA, 0, -15, 10, 15, 10, 0x0000DE53 ),
  EW_GLYPH( 0x00EB, 0, -15, 10, 15, 10, 0x0000E04B ),
  EW_GLYPH( 0x00EC, 0, -15, 4, 15, 4, 0x0000E211 ),
  EW_GLYPH( 0x00ED, 1, -15, 4, 15, 4, 0x0000E281 ),
  EW_GLYPH( 0x00EE, -1, -15, 6, 15, 4, 0x0000E2F8 ),
  EW_GLYPH( 0x00EF, -1, -15, 7, 15, 4, 0x0000E3B5 ),
  EW_GLYPH( 0x00F0, 1, -15, 10, 15, 12, 0x0000E44F ),
  EW_GLYPH( 0x00F1, 1, -15, 9, 15, 11, 0x0000E642 ),
  EW_GLYPH( 0x00F2, 0, -15, 11, 15, 11, 0x0000E78F ),
  EW_GLYPH( 0x00F3, 0, -15, 11, 15, 11, 0x0000E935 ),
  EW_GLYPH( 0x00F4, 0, -15, 11, 15, 11, 0x0000EAE2 ),
  EW_GLYPH( 0x00F5, 0, -15, 11, 15, 11, 0x0000ECB7 ),
  EW_GLYPH( 0x00F6, 0, -15, 11, 15, 11, 0x0000EE8D ),
  EW_GLYPH( 0x00F7, 0, -11, 11, 10, 11, 0x0000F030 ),
  EW_GLYPH( 0x00F8, 0, -13, 11, 15, 11, 0x0000F117 ),
  EW_GLYPH( 0x00F9, 1, -15, 9, 15, 11, 0x0000F313 ),
  EW_GLYPH( 0x00FA, 1, -15, 9, 15, 11, 0x0000F411 ),
  EW_GLYPH( 0x00FB, 1, -15, 9, 15, 11, 0x0000F516 ),
  EW_GLYPH( 0x00FC, 1, -15, 9, 15, 11, 0x0000F643 ),
  EW_GLYPH( 0x00FD, 0, -15, 10, 19, 10, 0x0000F73E ),
  EW_GLYPH( 0x00FE, 1, -15, 9, 19, 11, 0x0000F925 ),
  EW_GLYPH( 0x00FF, 0, -15, 10, 19, 10, 0x0000FAAF ),

  EW_FONT_PIXEL( ThermostatFontM, 0x0000FC8C )                  /* ratio 65.55 % */
    0xEF7BDEF7, 0xEF7BFF1D, 0xA4F0A7AE, 0x8F50F94C, 0xC2462067, 0xE6000FBC, 0xA246207D,
    0x5320CF1E, 0x93C29E3E, 0xDDEF7FE3, 0x0000D795, 0xE42E2000, 0x78CFBC49, 0xEC0704C1,
    0x41902760, 0xF90F1826, 0x0D60CF00, 0xEBBEF73C, 0x9FDD6FDE, 0xBFF1DEE7, 0x41FDF6B7,
    0xE300CF26, 0x06781321, 0xFBDC41EB, 0x79BF7BAE, 0xFEB7B8AF, 0x17BED6F7, 0x900E649E,
    0x1EB00449, 0x1BF0099E, 0xEBFF4000, 0x71BF25FF, 0xE31DCDEF, 0xE7E8A5F9, 0x8FF80F9D,
    0xC56EA098, 0xCEFE5907, 0x7BBE203B, 0xB5882EEE, 0xE019EFDF, 0x3C0B73E9, 0x66A039F3,
    0x7CC537AF, 0xDEF76C6F, 0xFBC4BFFF, 0x006FFFAF, 0x09FF3DE0, 0x06FDCED0, 0xEFCB543E,
    0x30644AC7, 0x191AFC42, 0x542FD08C, 0xF237EF8B, 0x37F67681, 0xE7BC0BEE, 0x3AE5573F,
    0xF5F88167, 0x09EEF7DC, 0x88EED7BF, 0x4478A8DE, 0x897E8192, 0xC97E3124, 0x33FE88EE,
    0x77BEE616, 0xDDFFAC4F, 0x73BF300F, 0xFFE097FB, 0x603D6A1B, 0xEFC033C1, 0x6B02AF4F,
    0x00FC5FAE, 0xB0178F5F, 0x0C4CEF7E, 0x7F3FEFE6, 0xBE87F837, 0xA5FDF9E1, 0xFACC4888,
    0x81F2257D, 0xF7F4D98E, 0xE3E35D90, 0xD7B9CEF9, 0x0DFCCFDE, 0xBE4046B1, 0xBDF8F9C4,
    0xEF0F98C3, 0x9EA2D447, 0x17903FE0, 0x12200091, 0xA81FF179, 0x785A8827, 0xE0F98C3F,
    0x7E7126F7, 0x13FEA0B5, 0xAFC25FBE, 0x9AC05661, 0x07AC37B0, 0x00240232, 0x60464480,
    0xAC37B03D, 0xBA254F07, 0xFA92FDF1, 0x00FC604F, 0x8830C601, 0xAEFDDE69, 0x3ECF5F77,
    0x8BFFEC63, 0xB9C17D58, 0xC37D42CB, 0x00580FEF, 0x00000074, 0xEF718000, 0x77BDCEBD,
    0x75EF7B8D, 0x000BBDEE, 0x28000000, 0x4E70BD60, 0xEB138CD4, 0xFE637BDE, 0x7807F801,
    0x40738056, 0x07DF02CE, 0x2B3C133C, 0x56203DC0, 0xDF01F981, 0x9C033504, 0x603D6203,
    0xBFFD003E, 0xEF2FC6FF, 0xF353F9BD, 0xFACDF94B, 0xE7F9E03F, 0x399FFC1F, 0x00000CC1,
    0xE609CC00, 0xE7F83FCC, 0xBFCF01FF, 0x37E52FD6, 0xBDEE37CB, 0x4FEC83F9, 0x38C4777D,
    0xAF8C7FE7, 0x00000000, 0x00000000, 0xDFF73DE2, 0xBDEE7D88, 0x8567E9B9, 0x1FACA2FC,
    0x007FC398, 0x167C8061, 0xDE00EDE0, 0x0FCAC098, 0xA80FBF98, 0x78C03FDF, 0x4E71806F,
    0xDEFB9D02, 0xC41DEF7B, 0x37FFBFFB, 0xDDF67D88, 0xC42B5D36, 0xC81F273B, 0xF9E01DE3,
    0x0F9BE303, 0x83EDDEE2, 0x3B9FF7B8, 0x05E7EC80, 0x001FE5D8, 0xB72EC0B1, 0xD7AE8857,
    0x1DDF67D8, 0x0B3C803B, 0x35800CE0, 0x1FBE300B, 0xF00379C0, 0x9E78053E, 0x801F4406,
    0xAA8097EF, 0x677BDEF7, 0x7BDD5FDF, 0xEFB3BDEF, 0x0000000F, 0xBDEF7180, 0x7599FEF7,
    0x4FF7BDEF, 0x003DC026, 0x7F710019, 0x7806FCE7, 0x8BFFF9CF, 0xB7CC9BDF, 0x4008E601,
    0x9E081F50, 0xE223584A, 0x9BA7833D, 0xE73DF5F5, 0xFFEF905F, 0xEE7BAC0E, 0x5DDF3C1D,
    0x3C127D09, 0x3D7F8031, 0x61BE73BF, 0xFDCFA73C, 0x0DFCD3FF, 0xE03B66B1, 0xF18C8057,
    0x19BF1907, 0xFEF1ADF0, 0xD6D55887, 0x6FFEF7D7, 0xBDEF7B8C, 0xE31BDEF7, 0xBDEF7BDE,
    0xEF0013DF, 0xC006500B, 0x7CC6017D, 0x401FDE00, 0xBDF804D6, 0xC026B900, 0xF31002B7,
    0x012B3007, 0xEF1017DE, 0x10DFFEFF, 0x8EDBBEDB, 0xEF10DF39, 0x7D83679C, 0xB3FF06CE,
    0x63A21BD6, 0xA7B9CFD9, 0xB9D7627E, 0x757476A7, 0xFADFAE88, 0xF10057C0, 0x7EA9E03C,
    0xF6F58857, 0xEF7DFFD8, 0x9EF10F7F, 0xE3B127BB, 0x757FFBDE, 0x1ADF1875, 0xBF9883EB,
    0x24467048, 0x8E07EA18, 0x5F8C2B9E, 0xE7BFFDC8, 0xEFCA7FED, 0x0BEC6F9C, 0x7780B3E4,
    0x35FE6206, 0x1FEEF771, 0x0FF30FF3, 0x07F98000, 0x3FCC0FF3, 0xEB000000, 0x3511CE05,
    0xE78009C5, 0x3FBECF05, 0x2F9EFB3C, 0x97EE7DCD, 0x1BF7F78C, 0x97DFBE30, 0x7CF7D9E0,
    0xCF7D9E09, 0xFBD9E09B, 0xF7BDEEB7, 0x7BAEFBDE, 0xBEF7BDEF, 0x7BAC0000, 0xBEF7BDEF,
    0xEDF803EF, 0xE7BE413D, 0xF7C827FE, 0xF902FFEE, 0xAFC82F75, 0xDDEF917B, 0x73DF25FF,
    0xBDBF13FF, 0xEFFD6027, 0x7BEEF1BF, 0x7CC578EF, 0x7433BE53, 0x10588D22, 0x016FC091,
    0xE3A0BC5F, 0xC07E7207, 0x0D9E00CA, 0x01FCF000, 0x73BF5800, 0x78015ECF, 0x3DCFA7FE,
    0xF6609ED7, 0xDAC6077D, 0xB7E307FF, 0x1BDF1013, 0xEFC60EDC, 0x9BF117FE, 0xE73C8786,
    0xD9E0DFEE, 0x1FB787EA, 0x1769C821, 0x00C41F39, 0x3207A933, 0x441CE080, 0xC8188202,
    0x89334C40, 0xB985BE3F, 0x93DF878D, 0x6FD52796, 0x6F8C7DF9, 0xF77EFB9F, 0x4D630F7F,
    0xFEAD39D6, 0xEDE25FFF, 0x7FC80007, 0x0E8C157F, 0x7BEFF8C0, 0x0013E9EF, 0x6F8003AC,
    0xFA2A003C, 0xF3DF3800, 0x596A2024, 0xF855601F, 0x1877C01E, 0xE1446051, 0x81EFC077,
    0xDD730159, 0x8989EF7B, 0xF7BDEF27, 0xF387EFDE, 0xE21C9E03, 0x99F58099, 0xE5BE004F,
    0xBBDEF7B9, 0xEF7BC83B, 0x8C07F9BD, 0x12B003CF, 0xBE302660, 0xEF7BC8F5, 0xDE47F3DD,
    0xEDF9EF7B, 0x2F7D6204, 0x00801540, 0xAC403DF8, 0x7BDEF2D9, 0xE883D9F7, 0x41EFCF7D,
    0xDCF738EE, 0x379F79B7, 0xF1ACFFA9, 0x7E798834, 0xF3FDF805, 0x002B180F, 0x90004000,
    0xBF58C07F, 0xE3FEFC02, 0x78F31069, 0xFFA9379F, 0xDEE3B92C, 0xEE36DF73, 0x26FCF7BD,
    0xFB9EF7B8, 0x2FD401FF, 0x0D5F003E, 0xE007EB00, 0x0163000E, 0x0058C000, 0xF58800EE,
    0x00D5F803, 0x7B87C76A, 0x8FEFB9EF, 0xF7BDEF71, 0xEF72FBDE, 0x17DEF7BD, 0x00000000,
    0xBDEF7B80, 0xF7BDC5F7, 0x0002FBDE, 0x00000000, 0xBDEF7B80, 0xDEE3BEF7, 0xF7BDEF7B,
    0xEF7BDEE5, 0x00002FBD, 0xF7000000, 0x8BEF7BDE, 0xF7BDEF7B, 0x00000005, 0x00000000,
    0x7773BF98, 0xF7FEFC07, 0x593B13DC, 0xFBE457EB, 0x7817BCBC, 0xC401862B, 0x5800998D,
    0x7BBF0000, 0xFC161DEF, 0x04CCBDEE, 0x80078C60, 0x5980075F, 0xDF9E21FB, 0x39EFBC18,
    0x36FF9F77, 0x01FFC02E, 0x00000000, 0xEE000000, 0x7BDEF7BD, 0x7BDEF713, 0x0009BDEF,
    0x00000000, 0xE0000000, 0x0000000E, 0x0003FE00, 0x00000000, 0x00000000, 0x0D8C0040,
    0x3C06390C, 0x78B7BC46, 0xD7D63F7E, 0x71EF9CF7, 0x017FE403, 0x880B3EE2, 0xFC40D3FF,
    0x3FE2069F, 0x3F37C05F, 0x05EAFC60, 0xC093E89C, 0xE01D56FC, 0x003EBBC7, 0x71005ADF,
    0xBF2007DF, 0xF7A800DF, 0x0000B8C4, 0x00000000, 0x00000000, 0x00000000, 0xEF7BDEE0,
    0x8036E3BD, 0x004C4BBA, 0x04CF1837, 0x3FB853E4, 0x590737C0, 0xF81F980A, 0x824F980E,
    0x05DF0959, 0x28A87D62, 0xE7137E09, 0x94CF9007, 0xCFDC0135, 0xA8A80137, 0xFBE001F9,
    0x74C0049E, 0xC00CE781, 0x9002E21D, 0xE77801AB, 0x007D9000, 0xE005F398, 0xFA20055B,
    0x0FAE6005, 0x80155F80, 0xE001BDF8, 0x7E003F59, 0xC178800B, 0x27B39DFC, 0x9CFBFDF8,
    0xFDA1FFFB, 0x15E7E306, 0x15DE05F3, 0x56640995, 0x0699804E, 0x060000C0, 0x601390C0,
    0x99026566, 0x7A05F315, 0x8C1BF685, 0xFDF8BC5F, 0xFFF739EF, 0xDEF7B9E3, 0xBC81BE7B,
    0xFFBBDEF7, 0xEFE6200F, 0x0189E007, 0x018A8000, 0x7935F3C4, 0x7CF7BDEF, 0xDEF7BC93,
    0x00002BF3, 0x00000000, 0x9EFB5800, 0x7DBF04DF, 0x1FFFB9EF, 0xEA0DF8DE, 0x40D98967,
    0x302556BF, 0x98049D46, 0x00040019, 0x024E0004, 0xC09551CC, 0x81B39518, 0x1BF1BC9E,
    0xEFC69F8C, 0xCF39EF7F, 0xE7BEE607, 0xD000F73F, 0xE60013BF, 0xDEF7B88E, 0xE7057E7B,
    0xBBCF7BDE, 0x379CF100, 0x0078C600, 0x03C63000, 0xE7074E78, 0x77DF7BDE, 0x5B7BDCE2,
    0x40132C01, 0xF3D40077, 0x02677802, 0xF6B17AE4, 0x7E03BBB9, 0x627B9EFB, 0x06FD7307,
    0xFB8FD6F9, 0x1F715F00, 0x2FA65C60, 0xF7FF6040, 0xFD60266F, 0x00DFDCFB, 0x33DFFE8C,
    0xE6DEA009, 0xA844F026, 0x7E11501F, 0xFD720DF5, 0xEFFFF89A, 0x9FFFF7B9, 0xDEF7BDD6,
    0x6BBDEF7B, 0x9CEF7BDD, 0x00BBDEF7, 0x00000000, 0x00000000, 0x00000000, 0x00000000,
    0xF00FD600, 0x0000005B, 0x00000000, 0x00000000, 0x5805C800, 0x72A05951, 0x219BEFC5,
    0xF9E1D7E6, 0xFEEF7BEF, 0xB007EB4F, 0xF80953F6, 0x201EB2FD, 0xF01F3A73, 0x00C67855,
    0xA0FAC5CF, 0xC16F83C6, 0x07C8C27F, 0x977E07EB, 0x15980727, 0xB3C407CE, 0xF38059E2,
    0xE780159F, 0xA9800EF9, 0xFEF00EA0, 0x80655380, 0x9E5480F5, 0x414F9182, 0xFC3FEC3D,
    0x6F61FF6A, 0x4F7EA0AA, 0x20C31541, 0x1A41A473, 0x4F16A2A8, 0x3FFF0551, 0xECDECDFF,
    0xF3C53C3F, 0x07A84F50, 0xA81E78D2, 0xED54121A, 0x14FDEC3F, 0xB055FFB0, 0x2AA06F6A,
    0x80AA2212, 0x37E03F1C, 0xC09FF112, 0x4EDE2338, 0xF350E770, 0xB9E8D685, 0xF380F318,
    0x1826F3A6, 0x402C74F3, 0x2220079B, 0xDEB7E002, 0x37EA7803, 0xF7E20BE7, 0x7C157785,
    0xC1BF6455, 0xF3983F9C, 0xF00DFB27, 0x00FEB3D5, 0x0162B9FF, 0x037EA62B, 0x3554BDF2,
    0x35E81AF4, 0x6F90D518, 0x6B00DF73, 0xBA0163D6, 0x359E01BB, 0x0026400B, 0x00000000,
    0xF7BFF000, 0xFDEF7BDE, 0xDEF7BFF1, 0x005C4F7B, 0x39802ADF, 0x03EC805F, 0xB001CCE0,
    0x0F78C034, 0xF009D380, 0xEB5009CE, 0x17F78803, 0x00F5BF00, 0x7BDCF3C4, 0xC6F7BDEF,
    0xDD5FEF73, 0x0000003F, 0x00000000, 0xFAFFBA80, 0xF0073501, 0x026F80FC, 0xFCE04CF9,
    0xF0266781, 0x8137C07C, 0x1CE01E7C, 0x981279E0, 0x403DF01F, 0x3BDEE7CE, 0x000005EE,
    0x00000000, 0xF05EE000, 0xC1358835, 0xEF84D67C, 0x333C3EFB, 0xBE1CE287, 0x5987CC63,
    0xF7BDEF71, 0x3FBEFBDE, 0x3F38B5DE, 0x7FDFFDE2, 0x3BDF6FE3, 0x21BD6B3E, 0x21AB27BF,
    0x1800C632, 0x9BDEFFEF, 0xBDEE7FEA, 0x095EDD37, 0x7E1C80D6, 0xD639E0EF, 0xDFFB9DFA,
    0x17AC67FF, 0x00000000, 0x2F9CEFC6, 0x1DCFBA78, 0xF10DF89B, 0xDBE052C6, 0x0801E780,
    0x8F3C0080, 0xFC5B7C07, 0x752D7886, 0x47F1DCFB, 0x89EEE77C, 0xEF7BFFD8, 0x2B3DF8B7,
    0xFA86F38C, 0x488E5720, 0x00000EF0, 0xA6609118, 0xDF9A20FA, 0xDEF8C2B3, 0xEF7FFB14,
    0x77802FFD, 0x40000001, 0x06FCE77C, 0xEE9EE3FE, 0xF186F2C7, 0x940FBF0B, 0x8091007C,
    0x00F3C048, 0xCB1E07F6, 0xF82FC61B, 0x214FA7BB, 0x857F73DE, 0x7EF7BBF8, 0xD437CF45,
    0xF0BD65EF, 0xF00C318C, 0xBDEF714C, 0xEF7916F7, 0x67DEF7BD, 0x17A8008C, 0x86F57E0C,
    0x63FC4BE8, 0xED436DDF, 0xBDEFC9BB, 0x903CF59B, 0xBDD76E30, 0x7BAEDC63, 0x00000007,
    0x00000000, 0xFCE7BC40, 0xF77F2F46, 0x0DE59774, 0x07F617E3, 0x09007CCA, 0x01F30090,
    0xA6503FFC, 0xF05F8C37, 0x87DF4F77, 0xD5F9CF78, 0xE5544060, 0xADF1867F, 0x7BDEF791,
    0x00FD6BF7, 0x20000000, 0x837F73DE, 0xDDCFFDF5, 0x2B17467F, 0x49E0351F, 0x00000000,
    0x40000000, 0x7AC7F47F, 0x71800001, 0x004E3002, 0x000002E2, 0x00000000, 0xF2BF0230,
    0x07EB6CDD, 0x00000000, 0x3780FDF0, 0x0F9FA07E, 0xD603FD74, 0xBF3C07FC, 0xCFFC609C,
    0xFE46603B, 0x7D4F004E, 0xE0357780, 0x00FE7ACC, 0xFCF00000, 0x37F73DE2, 0x5F39DF8C,
    0xB9FFBEB2, 0x3EDCFFFB, 0x17465C77, 0x87FDF9EB, 0x03194778, 0x613C0572, 0x00000001,
    0x00000000, 0x00000000, 0x8DEB0000, 0x60DF9CF7, 0xF673FF7C, 0x958BA79F, 0x13301A8F,
    0x00000030, 0x00000000, 0x37FDFFE8, 0xCDEF79D8, 0xCA5F5E8D, 0x41B3356F, 0x8C03194F,
    0x011000C8, 0x18063220, 0x9E835691, 0xF94DEBBC, 0x7B8EC6AD, 0x8F566E6F, 0x505F39DF,
    0xE3FAE7DD, 0x7967C437, 0xCF01B7C0, 0x04804804, 0xBE03D33C, 0x3E21BE2D, 0xD73E9D4B,
    0xE73BF51F, 0x0000000B, 0xBF39DF10, 0xDC7B2EF1, 0xF358FDD3, 0x7E17E30D, 0x03E5307F,
    0x02440488, 0x077E0272, 0x61BD6B4C, 0xF71FF0FC, 0x3BE24F74, 0x000037E7, 0xCFF3C000,
    0xFB7979DF, 0x7207B2BC, 0x00000000, 0x77EA0000, 0xBEA1EFCE, 0x3DF9CE7B, 0xFD3C5BCE,
    0xDFE6071A, 0x0827BEAF, 0xEEE7FFB9, 0xE77EB107, 0xE9E025ED, 0xBC101DD7, 0x5AFD18A7,
    0xDFBDCF7D, 0x700006E2, 0x7B9F73AF, 0x0000FB9D, 0x06000000, 0x77EF03E4, 0x6FC17AE7,
    0x00000001, 0x00000000, 0xD1E3C0B2, 0x8EE0DF8C, 0xFA94FA73, 0x0651FF03, 0xE0FBE194,
    0x582CF1FF, 0x6545990F, 0x0F9C3BE2, 0xE20B5156, 0xC0279E79, 0x4F00E7B9, 0x2D600F3D,
    0x26F20718, 0x540C319C, 0x0AA18614, 0x1547F5FF, 0x07E9E37B, 0x787ACDFF, 0x2D43D456,
    0xDDBD8722, 0xCAA0646D, 0x0552D47A, 0x78878F7B, 0xCF50DEC6, 0x3DFEC7F7, 0x78559E05,
    0x33FC03E6, 0x9C47F991, 0x7E27F782, 0x78FAC62F, 0xF03B7356, 0x84D7A39B, 0x603F33E8,
    0x9FA00A8E, 0xF7CC601A, 0x7CEDC077, 0xE4D7A366, 0x2F98C39D, 0x80718FB2, 0x503C6353,
    0xFE077CA3, 0xEB02B30F, 0xC9E4D447, 0xFEE3F381, 0x26A1C9E0, 0x09E7BF58, 0x00E73DF0,
    0x9E00F3C3, 0x90071802, 0x3F7880B3, 0x80B1DF60, 0xF7BDEF7B, 0xDEF7B8FE, 0x780B8FFB,
    0x356B0167, 0x3803DE30, 0x273BC09D, 0xE203EB50, 0xABF005FD, 0xDE678807, 0x01BDEF7B,
    0xDEC44EF1, 0x503D6F13, 0x000B107F, 0x6F102300, 0x43EA7125, 0xFC42F59C, 0x02644066,
    0x1F300000, 0xAD60FFB0, 0xE358FF06, 0x00000007, 0xB980DF30, 0x2F53C077, 0x006605D8,
    0xC8062000, 0x3DF80DE7, 0x13CEF027, 0x3205FCC4, 0xC0000003, 0x437FC133, 0x7F1585AF,
    0x1BFBBF90, 0xF73DCAB0, 0x6ABD819C, 0xCA739E3E, 0x718D86B3, 0xD7C73DEE, 0xB85ACD7C,
    0xC0002B82, 0xEB00007F, 0x782FFF9F, 0x7737B9F7, 0xD10DF58C, 0xC056FE6B, 0x6A82E3B9,
    0xC6006003, 0x56FCF905, 0xD63FEFC0, 0xD7AAC437, 0xFEF73FFB, 0xF9FF3077, 0xE80002FF,
    0xF02FFDFF, 0xAFCF7DCB, 0xE30BF351, 0xE3058C4E, 0xBF00EE49, 0x012002E4, 0x7BDD76E3,
    0x75BEE303, 0x00300DEF, 0x098C0130, 0xE301BFE0, 0xEF7BDF56, 0x10004BBD, 0xCEFE69EC,
    0x73734DF9, 0x39EFFF7A, 0x30FBBFF7, 0xD457E79E, 0x9A833E6F, 0xE2CDF02F, 0x7F7C01FF,
    0x0990019E, 0x800CF000, 0xC01FFE4C, 0x05E2A7F7, 0xE66628BE, 0xE45FA8AF, 0xFDFFFFE4,
    0xFFF739EF, 0x0DF9FFFB, 0x6FCE77F3, 0x24E33F1A, 0xD58E4E30, 0xBBD37DC0, 0x6E85A60A,
    0xD6785F44, 0xDF00E7A2, 0x881AA31B, 0xF82FD7F7, 0xFD4FDBDD, 0xDDF97DEE, 0xBDEFAB7B,
    0xBBF0002F, 0x7BDF56F7, 0xDEF77E5F, 0x0BEF7BEA, 0xFD600000, 0x58FD6000, 0xB580003F,
    0xFB0BDDEF, 0xFBBDEF7F, 0xC60DF1E7, 0x00F93E6F, 0xDE02CECF, 0x417733DF, 0xF9F67FA4,
    0xB3FFD066, 0x65DFFEEF, 0xFF7F3136, 0xF460596F, 0xF400DE6F, 0xF213DFB8, 0x9FFDF57D,
    0x10FDDFFB, 0xE37F77EB, 0x57731018, 0x93C413FD, 0x7CCC07CF, 0x37E32767, 0xCF73AF2B,
    0x33733FDD, 0xBD10024E, 0xC02BDDEF, 0xF7B9EFB3, 0xDE785DDE, 0xB7D192BD, 0xE23FF44B,
    0xFC8BE73B, 0xFC2FE6BF, 0x4FE4E7FF, 0x8CB7EB7C, 0xDCC9E8B5, 0xC4D84CC2, 0x98560002,
    0x7B589B09, 0x26B16B19, 0xF0BF3FF3, 0xFFF39FFF, 0xFBC66FC9, 0xF9CEF88F, 0xF3CBCF22,
    0xBE8C95EE, 0x3DF6785D, 0x0BBBDCF7, 0x47FFBECF, 0x17E7BDF6, 0xD23187B9, 0xFAA6F7DC,
    0x0C49BDCE, 0xB3DD5435, 0xAD7AC99F, 0xF6B7ED57, 0xBC6FDE3B, 0xFDC5FB9F, 0x7EE2FDC2,
    0x78DFBC61, 0xB5BF6A3F, 0xF7BDDFDF, 0x77E37BDE, 0x02F7BDEF, 0xF7BAC000, 0xBEF640DE,
    0xF300AF67, 0xBDCF73DE, 0x7BFF30BB, 0x5BEFA325, 0xBDE2FBF2, 0xB7917CF7, 0xDDF06F7D,
    0xDFC9FFF3, 0x17300F53, 0xFBC00DCF, 0xF77C1390, 0xDF010D3E, 0xB3935FBD, 0xDF06A01E,
    0xB100DEFD, 0x7DF93D64, 0xCEE43EF1, 0xBDFF997B, 0x1DF7D192, 0x7B9EF798, 0xF717FDEE,
    0x6BEF7BDE, 0x7E53FFFE, 0x7EB97F7B, 0x7EB5BF11, 0xDF95BF11, 0x01825FBE, 0x00001B10,
    0xF7B88000, 0x5FDEF71E, 0x7B8F7BDC, 0x00000FEF, 0x00D88000, 0x7BDDF806, 0xF1F7BDEF,
    0xB21EEFFC, 0xEF0F7DCF, 0xAC590CF0, 0x62F7F305, 0xFFFA37FD, 0xDEE7AC43, 0xFBFF58FB,
    0xF7BEE47F, 0xAD2FE4FC, 0x83BF7581, 0x5913BF75, 0x8778CCD4, 0x73E8E4F1, 0x64EA17EF,
    0xF55CBFBC, 0x2EF03F58, 0x00000000, 0x80000000, 0x85F11407, 0xBDE543F1, 0xDCFA14F7,
    0x000BBCFD, 0xBEF40000, 0xA06BDAF7, 0x04807807, 0x3BC05006, 0x4035EC40, 0x00007BEF,
    0x8938C000, 0xEF5E9D35, 0xE2FE9EF7, 0x0EDFADF9, 0x0007FBDF, 0xDDFF9E00, 0x6F73EA8F,
    0x186FFF8F, 0x44072FDF, 0x6FFF880E, 0xFAAFDF18, 0x7DE3D3DC, 0x3BEF0FBC, 0x4E7077DE,
    0xE9F2939E, 0x9D3E5A7C, 0xCF273B4F, 0xEF1BF7C9, 0x5BF3C437, 0xF0077A00, 0x07FBEF05,
    0xDE0008CF, 0x00BFA006, 0x78013590, 0x4F017B2F, 0xCB582F0E, 0xD01FA6DB, 0x05FFE45F,
    0x0BEF4D46, 0xFFA9EBE8, 0x3991FEED, 0xEEDEF73C, 0x8802F91F, 0xE800B7E7, 0x780BE01D,
    0x233C3FDF, 0x0036F000, 0xB2000BFA, 0xEBDE0026, 0xC03DDFF9, 0xDCFB2393, 0xB7AD60F7,
    0x40678779, 0xB58B217F, 0xF9826A30, 0xCC17D17B, 0x80E646FF, 0x17C83FDE, 0xDEF73D62,
    0xFFBFF3C7, 0xCEFE4007, 0x05F03F3D, 0xE0358779, 0xF7588119, 0x5836F03B, 0x7F413BF7,
    0xA66A4881, 0x877909AC, 0xB2F7A4F1, 0xF73BF197, 0xF0E4F17E, 0x5DDFFCC2, 0x00FD36DE,
    0xBFFC8BFA, 0xF7A6A300, 0x53D7D005, 0x83FDDBFF, 0xF7B9E1CC, 0x5F20FF76, 0x000A7000,
    0xC00014E0, 0x0991007F, 0x2F8066FC, 0x0FE7305E, 0xA39035F8, 0xC5601880, 0xE66C8918,
    0xA19DF29B, 0xBF77BDF7, 0xE001FDE0, 0xE7000B5D, 0x00DC8007, 0xDF000758, 0xF4540078,
    0xE7BE7001, 0xB2D44049, 0xF0AAC03E, 0x30EF803D, 0xC288C0A2, 0x03DF80EF, 0xBAE602B3,
    0x1313DEF7, 0xEF7BDE4F, 0xE70FDFBD, 0xC4393C07, 0x33EB0133, 0x0B7C009F, 0xC4012750,
    0xAB004BFB, 0x0BE6001E, 0xF0007580, 0x4540078D, 0x7BE7001F, 0x2D44049E, 0x0AAC03EB,
    0x0EF803DF, 0x288C0A23, 0x3DF80EFC, 0xAE602B30, 0x313DEF7B, 0xF7BDE4F1, 0x70FDFBDE,
    0x4393C07E, 0x3EB0133C, 0xB7C009F3, 0x800CF780, 0x7FF7E5F8, 0xF57E7300, 0x0FF5807E,
    0x075802EB, 0x0078DF00, 0x7001F454, 0x4049E7BE, 0xC03EB2D4, 0x803DF0AA, 0xC0A230EF,
    0x80EFC288, 0x02B303DF, 0xDEF7BAE6, 0xDE4F1313, 0xDFBDEF7B, 0x3C07E70F, 0x0133C439,
    0x009F33EB, 0x00800B7C, 0xD69FF39E, 0xF7DEF40B, 0x67F817EC, 0x0017E7BC, 0x1BE000EB,
    0x3E8A800F, 0x3CF7CE00, 0xD65A8809, 0xBE155807, 0x461DF007, 0xF8511814, 0x607BF01D,
    0xF75CC056, 0xE2627BDE, 0xBDEF7BC9, 0xFCE1FBF7, 0x78872780, 0xE67D6026, 0xC16F8013,
    0x00938CDC, 0x719B9800, 0xAC000012, 0x3C6F8003, 0x00FA2A00, 0x24F3DF38, 0x1F596A20,
    0x1EF85560, 0x511877C0, 0x77E14460, 0x5981EFC0, 0x7BDD7301, 0x278989EF, 0xDEF7BDEF,
    0x03F387EF, 0x99E21C9E, 0x4F99F580, 0xC605BE00, 0xFA005FFF, 0x00000BEE, 0xC017DDF4,
    0x800BFFF8, 0x8DF00075, 0x1F454007, 0x9E7BE700, 0xEB2D4404, 0xDF0AAC03, 0x230EF803,
    0xFC288C0A, 0x303DF80E, 0x7BAE602B, 0xF1313DEF, 0xDEF7BDE4, 0x7E70FDFB, 0x3C4393C0,
    0xF33EB013, 0x00B7C009, 0x7BDEF7BC, 0x1801BDEF, 0xEF7BBE35, 0xB70037BD, 0xD6B00017,
    0xDE200123, 0xDF800057, 0xD400069B, 0xEF7BE85A, 0x5F780FBD, 0xBDEF799C, 0x055E81F7,
    0xEE7CE400, 0xC013B7BD, 0xEF7BDEFB, 0x733C00FD, 0x0DD10001, 0x0F9E8098, 0x7BDEF330,
    0xBD11FDEF, 0xC83DF9EF, 0xFB9EE71D, 0x26F3EF36, 0x9E359FF5, 0xAFCF3106, 0xFE7FBF00,
    0x00056301, 0xF2000800, 0x57EB180F, 0x3C7FDF80, 0xEF1E620D, 0x9FF526F3, 0x7BDC7725,
    0xFE88DBEE, 0xC01EFF77, 0x7EF005E9, 0x0FE9C02F, 0x77803FBC, 0x03F3802D, 0xBDC60DC8,
    0xEF7BDEF7, 0xDEF7BDCB, 0x00005F7B, 0xEE000000, 0x17DEF7BD, 0xEF7BDEF7, 0x0000000B,
    0xEE000000, 0xFBDEF7BD, 0xC4093A82, 0xD5604BFB, 0x8C2F9803, 0xF7BDEF7B, 0xEF7B97DE,
    0x00BEF7BD, 0x00000000, 0xBDEF7BDC, 0xF7BDEE2F, 0x000017DE, 0x00000000, 0xBDEF7BDC,
    0x0CF785F7, 0xFEFCBF10, 0xD5F9CC0F, 0x87FAC1FB, 0xDEF71975, 0x2FBDEF7B, 0xEF7BDEF7,
    0x0000017D, 0xF7B80000, 0xDC5F7BDE, 0x2FBDEF7B, 0x00000000, 0xF7B80000, 0xCBEF7BDE,
    0x00938CDC, 0x49C66E60, 0xEF7B8C00, 0x97DEF7BD, 0xF7BDEF7B, 0x000000BE, 0x7BDC0000,
    0xEE2FBDEF, 0x17DEF7BD, 0x00000000, 0x7BDC0000, 0x7DF7BDEF, 0x716BBC7F, 0x1DC6E47E,
    0x00000000, 0x4EA00000, 0x55CBFBC6, 0x0772F98F, 0x00000000, 0x7BC00000, 0xF7E5F886,
    0xEAFCE67F, 0xAC3FD6FD, 0x00003B8B, 0x00000000, 0x00000000, 0x024E3373, 0x049C66E6,
    0x00000EE0, 0x00000000, 0x00000000, 0xDEFFC000, 0xB007777B, 0x1DD7BDEF, 0xFEFF4600,
    0x2F53C001, 0x8003CE00, 0xB9BDE327, 0xDE081DEF, 0x01DEFB9B, 0xF0001000, 0x1E700064,
    0x00BD6600, 0x03FDFDE3, 0xC6F7BDF6, 0xF008001E, 0x5EB4FF9C, 0xB3DF7BD0, 0x78CFF05F,
    0xCE782FCF, 0x2E21DC00, 0x801AB900, 0xD9000E77, 0x5F398007, 0x0055BE00, 0xE6005FA2,
    0x55F800FA, 0x1BDF8801, 0x03F59E00, 0x8800B7E0, 0x003FBC17, 0x3800B5DE, 0x0372003F,
    0xF673BF98, 0x9F7FBF04, 0xB43FFF73, 0xBCFC60DF, 0xBBC0BE62, 0xCC8132A2, 0xD33009CA,
    0xC0001800, 0x02721800, 0x204CACCC, 0x40BE62B3, 0x837ED0AF, 0xBF178BF1, 0xFEE73DFF,
    0x1275007F, 0x025FDE20, 0xCC007AAC, 0xCEFE6017, 0xFEFC13D9, 0xFFFDCE7D, 0xF1837ED0,
    0x02F98AF3, 0x04CA8AEF, 0xC0272B32, 0x0060034C, 0xC8600300, 0x32B33009, 0xF98ACC81,
    0xFB42BD02, 0x5E2FC60D, 0x9CF7FEFC, 0xEF01FFFB, 0xE5F88019, 0x39807FF7, 0x603F7ABF,
    0x80BAC3FD, 0x4F673BF9, 0x39F7FBF0, 0xFB43FFF7, 0x2BCFC60D, 0x2BBC0BE6, 0xACC8132A,
    0x0D33009C, 0x0C000180, 0xC0272180, 0x3204CACC, 0xF40BE62B, 0x1837ED0A, 0xFBF178BF,
    0xFFEE73DF, 0xE7804007, 0x82F5A7FC, 0xFD9EFBDE, 0x7BC67F82, 0xDFCC017E, 0xDF827B39,
    0xFFB9CFBF, 0x306FDA1F, 0x5F315E7E, 0x99515DE0, 0x04E56640, 0x0C006998, 0x0C006000,
    0x56660139, 0x31599026, 0x6857A05F, 0xC5F8C1BF, 0x9EFFDF8B, 0x983FFF73, 0x0012719B,
    0x938CDCC0, 0xDFCC0000, 0xDF827B39, 0xFFB9CFBF, 0x306FDA1F, 0x5F315E7E, 0x99515DE0,
    0x04E56640, 0x0C006998, 0x0C006000, 0x56660139, 0x31599026, 0x6857A05F, 0xC5F8C1BF,
    0x9EFFDF8B, 0xBC3FFF73, 0xFFF1F105, 0xDFA8FE06, 0x0FCDF87F, 0x07CF9F4F, 0xD02F3C66,
    0xE7E809E6, 0xE63FCEFF, 0x7F37C373, 0x62F893EC, 0xF9891000, 0x1F4F673B, 0xE73EFF7E,
    0xB53BFFFE, 0x5E7460DF, 0xDFD05F31, 0x3584CA8C, 0x909CAC9E, 0x80D336BF, 0x398032F7,
    0xD7E41806, 0x5EF27218, 0x33995998, 0xD62B3207, 0x2BD0BDFB, 0xFC60D3BC, 0xEFA9E5E2,
    0x3FFF739E, 0x73EE7BFC, 0x1FDE04F6, 0x002D7780, 0x372007E7, 0x6FC03F58, 0x00000001,
    0x00000000, 0x00000000, 0x45601720, 0x15CA8165, 0x98866FBF, 0xBFE7875F, 0x3FFBBDEF,
    0x10127501, 0xAB012FEF, 0xC2F9801E, 0x0B7E01FA, 0x00000000, 0x00000000, 0x00000000,
    0x2A2B00B9, 0xF8AE540B, 0xFCC4337D, 0x7DFF3C3A, 0x09FFDDEF, 0xF88033DE, 0xC07FF7E5,
    0x1FBD5F9C, 0x2EB0FF58, 0x5BF00FD6, 0x00000000, 0x00000000, 0x00000000, 0x515805C8,
    0xC572A059, 0xE6219BEF, 0xEFF9E1D7, 0x4FFEEF7B, 0x0938CDCC, 0x719B9800, 0x1FAC0012,
    0x0000B7E0, 0x00000000, 0x00000000, 0x0B900000, 0x40B2A2B0, 0x37DF8AE5, 0xC3AFCC43,
    0xDEF7DFF3, 0x3A809FFD, 0x2FEF1009, 0x003D5601, 0x1FD60BE6, 0x2C573FE0, 0x6FD4C560,
    0xAA97BE40, 0xBD035E86, 0xF21AA306, 0x601BEE6D, 0x402C7ACD, 0xB3C03777, 0x04C80166,
    0x00000000, 0x01710000, 0x7B800000, 0xB81DDDEF, 0x7F9BDEF7, 0x02D6F8C0, 0x00006FF8,
    0xDF181BFE, 0xEF7BDC5A, 0xBDEE3FC9, 0x0001DFF7, 0xCE7BC400, 0xEE37C06F, 0x7C93FFF9,
    0x61EB30BE, 0x5100203D, 0x02577805, 0x06B00FEA, 0x1805BF40, 0xC60177FF, 0x7E2026FE,
    0x3C2C401F, 0xEE07BD45, 0xF0F7F7B9, 0x5AEF00FE, 0xE403F380, 0xEFFEF106, 0xEFB7F1BF,
    0xDEB59F1D, 0xD593DF90, 0x00631910, 0xEF7FF78C, 0xF73FF54D, 0xAF6E9BDE, 0x0E406B04,
    0x1CF077BF, 0xFDCEFD6B, 0x4033FFEF, 0xFEF1049D, 0x807AAC12, 0xFFBC42F9, 0xEDFC6FFB,
    0xAD67C77B, 0x64F7E437, 0x18C64435, 0xDFFDE300, 0xCFFD537B, 0xDBA6F7BD, 0x901AC12B,
    0x3C1DEFC3, 0x73BF5AC7, 0x0CFFFBFF, 0xFC4067BC, 0x983FFBF2, 0xC3F7ABF3, 0x117587FA,
    0x1BFEFFEF, 0xF1DEFB7F, 0xF90DEB59, 0x910D593D, 0x78C00631, 0x54DEF7FF, 0xBDEF73FF,
    0xB04AF6E9, 0x7BF0E406, 0xD6B1CF07, 0xFEFFDCEF, 0x3C10033F, 0x97AD3FE7, 0xFD9EFBDE,
    0xCF78CFF2, 0x7FF7882F, 0x7DBF8DFF, 0xF5ACF8EF, 0xAC9EFC86, 0x0318C886, 0x7BFFBC60,
    0xB9FFAA6F, 0x7B74DEF7, 0x72035825, 0xE783BDF8, 0xEE77EB58, 0x619FFF7F, 0x0049C66E,
    0x0938CDCC, 0xF7FF7880, 0xF7DBF8DF, 0x6F5ACF8E, 0x6AC9EFC8, 0x00318C88, 0xF7BFFBC6,
    0x7B9FFAA6, 0x57B74DEF, 0x87203582, 0x8E783BDF, 0xFEE77EB5, 0x1819FFF7, 0xBE817FFF,
    0x7D0002FB, 0xFFE305F7, 0xBFFBC42F, 0xBEDFC6FF, 0x7AD67C77, 0x564F7E43, 0x018C6443,
    0xBDFFDE30, 0xDCFFD537, 0xBDBA6F7B, 0x3901AC12, 0x73C1DEFC, 0xF73BF5AC, 0x60CFFFBF,
    0x4AFEE77C, 0x06FCE77C, 0x7B9F7FC6, 0x3DE767BF, 0x73BC5FF7, 0x1D57F352, 0x1FECD7EA,
    0xCF07E3FC, 0x48807308, 0xE7DAC990, 0xBDEE2FDE, 0xFDE4DEF7, 0xCBF7B9F5, 0xF7BDEF7B,
    0x0C16F30E, 0x62301080, 0xC43AA202, 0x867AFDFA, 0x71BE3F58, 0xF6BBBEEF, 0x179F77BE,
    0x27BB9DF1, 0xBDEFFF62, 0xACF7E2DF, 0xEA1BCE30, 0x22395C83, 0x00003BC1, 0x99824460,
    0x7E6883EA, 0x7BE30ACF, 0xBDFFEC53, 0xDF10BFF7, 0x9C09EEFB, 0x7BF7805E, 0xE03FA701,
    0x6BBC01FD, 0x401F9C01, 0x73DE206E, 0xBBF8857F, 0xCF457EF7, 0x65EFD437, 0x318CF0BD,
    0x714CF00C, 0x16F7BDEF, 0xF7BDEF79, 0x008C67DE, 0x7E0C17A8, 0x4BE886F5, 0x6DDF63FC,
    0x1024EA03, 0x55812FEF, 0x20BE600F, 0x857F73DE, 0x7EF7BBF8, 0xD437CF45, 0xF0BD65EF,
    0xF00C318C, 0xBDEF714C, 0xEF7916F7, 0x67DEF7BD, 0x17A8008C, 0x86F57E0C, 0x63FC4BE8,
    0xF7836DDF, 0xFCBF100C, 0xF9CC0FFE, 0xFAC1FBD5, 0xDE217587, 0xF8857F73, 0x457EF7BB,
    0xEFD437CF, 0x8CF0BD65, 0x4CF00C31, 0xF7BDEF71, 0xBDEF7916, 0x8C67DEF7, 0x0C17A800,
    0xE886F57E, 0xDF63FC4B, 0xC66E636D, 0x37300049, 0x880024E3, 0x215FDCF7, 0x5FBDEEFE,
    0xF50DF3D1, 0x3C2F597B, 0x3C030C63, 0xEF7BDC53, 0x7BDE45BD, 0x19F7BDEF, 0x05EA0023,
    0x21BD5F83, 0xD8FF12FA, 0x1FDEDB77, 0x1F9C5AEF, 0x00FE79B9, 0x00000000, 0x7F78C9D4,
    0x5F31EAB9, 0x00003F9E, 0xBC000000, 0x7E5F8867, 0xAFCE67FF, 0xC3FD6FDE, 0x007F3CBA,
    0x00000000, 0x6E600000, 0xDCC049C6, 0x9E00938C, 0x0000003F, 0x00000000, 0x77BE0000,
    0x5FFE3A00, 0xBBEC8DBE, 0x7E21A7FE, 0x3C81F9EB, 0x460B17DF, 0xBF50FBF1, 0x0C67BE73,
    0x79CE77CF, 0x7BEFD35F, 0x18E65F18, 0x10099605, 0xC7330073, 0xDBCA5098, 0xEA5F7A93,
    0xA7B9CFBF, 0xFCE78200, 0x7BD2F5A7, 0xFE5FB3DF, 0x85F9EF19, 0xCE7BC6F5, 0xFFBE306F,
    0xD3CFFB39, 0x0D47CAC5, 0x00180998, 0x00000000, 0x3FBC0000, 0x005AEF00, 0x6E400FCE,
    0x7FDFFE80, 0xDEF79D83, 0xA5F5E8DC, 0x1B3356FC, 0xC03194F4, 0x11000C88, 0x80632200,
    0xE8356911, 0x94DEBBC9, 0xB8EC6ADF, 0xA806E6F7, 0x7F788093, 0x00F55809, 0xFFD017CC,
    0xF3B06FFB, 0xBD1B9BDE, 0x6ADF94BE, 0x329E8366, 0x01911806, 0x64400220, 0xAD22300C,
    0xD7793D06, 0x8D5BF29B, 0xDCDEF71D, 0x10067BC0, 0x0FFEFCBF, 0xF7ABF398, 0xD61FEB03,
    0xFF7FFA05, 0x7BDE760D, 0x97D7A373, 0x6CCD5BF2, 0x00C653D0, 0x44003223, 0x018C8800,
    0xA0D5A446, 0x537AEF27, 0xE3B1AB7E, 0x801B9BDE, 0xA7FCE780, 0x7DEF42F5, 0x9FE17ECF,
    0x805F9EF1, 0x837FDFFE, 0xDCDEF79D, 0xFCA5F5E8, 0xF41B3356, 0x88C03194, 0x0011000C,
    0x11806322, 0xC9E83569, 0xDF94DEBB, 0xF7B8EC6A, 0x19B986E6, 0x73000127, 0x00024E33,
    0x1BFEFFF4, 0xE6F7BCEC, 0xE52FAF46, 0xA0D99AB7, 0x46018CA7, 0x00880064, 0x8C031910,
    0x4F41AB48, 0xFCA6F5DE, 0xBDC76356, 0x4E303737, 0x9C600002, 0x7BAC0004, 0xDEF7BDEF,
    0xF7BDD63B, 0x1DEF7BDE, 0x8C000000, 0x80000093, 0xFA0FE000, 0x1FBFFF7F, 0x3EF7BCEC,
    0xD2FAF43F, 0x1A79AB9A, 0xE453DBEF, 0x9118A9E0, 0x3117DE03, 0x88881550, 0x488CBEE1,
    0x5E832BB3, 0xF2FEFAF4, 0xF7CE8D5D, 0xEE07F8DE, 0x077FDFF9, 0xFDE0097C, 0x00B5DE01,
    0x0DC807E7, 0x05BF05EB, 0x00000000, 0xC8000000, 0x33478F02, 0xCE3B837E, 0x9D4053E9,
    0x12FEF104, 0xF9807AAC, 0xB7E0BD62, 0x00000000, 0x00000000, 0x68F1E059, 0xC7706FC6,
    0xDE0A7D39, 0xF97E2033, 0xF9CC1FFD, 0xFD61FBD5, 0x17ACBAC3, 0x000016FC, 0x00000000,
    0x3C0B2000, 0x0DF8CD1E, 0x4FA738EE, 0x24E33731, 0x9C66E600, 0xE0BD6004, 0x000000B7,
    0x00000000, 0xF1E05900, 0x706FC668, 0x0A7D39C7, 0xBC4093A8, 0x3D5604BF, 0x38C2F980,
    0x1E31A9C0, 0x03BE51A8, 0x815987FF, 0xF26A23F5, 0x71F9C0E4, 0x50E4F07F, 0xF3DFAC13,
    0x739EF804, 0x0079E180, 0x038C014F, 0xBC4059C8, 0x58EFB01F, 0x00017DE0, 0xFC600000,
    0xE782F9CE, 0xC7F5CF7D, 0x3D33E297, 0x9E03FBE0, 0x95809009, 0xE03D3180, 0x8A5F17F7,
    0x3DE754CF, 0xBF51FC77, 0x0000DE73, 0x66E60000, 0x7300049C, 0x60024E33, 0x18D4E01C,
    0xDF28D40F, 0xACC3FF81, 0x3511FAC0, 0xFCE07279, 0x72783FB8, 0xEFD609A8, 0xCF7C0279,
    0x3CF0C039, 0xC600A780, 0x202CE401, 0x77D80FDE, 0x0000002C

  EW_FONT_KERNING_CODES( ThermostatFontM )
  EW_FONT_KERNING_VALUES( ThermostatFontM )
EW_END_OF_FONT_RES( ThermostatFontM )

/* Embedded Wizard */
