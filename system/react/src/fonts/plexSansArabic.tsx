import { css } from '@emotion/react';
import * as React from 'react';

import {
  buildFontFace,
  buildPreloadLink,
  FontType,
  GetCdnPathFunction
} from './buildFontFace';
import { FontWeight } from './weights';

const name = 'IBM Plex Sans Arabic';
const folder = 'IBMPlex-Sans-Arabic';

export function plexSansArabicFont(
  getCdnPath: GetCdnPathFunction,
  fontWeights: (keyof typeof FontWeight)[]
): FontType {
  const sourceSansArabicExtraLightWoff = getCdnPath(
    folder,
    'IBMPlexSansArabic-ExtraLight.woff'
  );
  const sourceSansArabicExtraLightWoff2 = getCdnPath(
    folder,
    'IBMPlexSansArabic-ExtraLight.woff2'
  );

  const sourceSansArabicLightWoff = getCdnPath(
    folder,
    'IBMPlexSansArabic-Light.woff'
  );
  const sourceSansArabicLightWoff2 = getCdnPath(
    folder,
    'IBMPlexSansArabic-Light.woff2'
  );

  const sourceSansArabicRegularWoff = getCdnPath(
    folder,
    'IBMPlexSansArabic-Regular.woff'
  );
  const sourceSansArabicRegularWoff2 = getCdnPath(
    folder,
    'IBMPlexSansArabic-Regular.woff2'
  );

  const sourceSansArabicMediumWoff = getCdnPath(
    folder,
    'IBMPlexSansArabic-Medium.woff'
  );
  const sourceSansArabicMediumWoff2 = getCdnPath(
    folder,
    'IBMPlexSansArabic-Medium.woff2'
  );

  const sourceSansArabicSemiBoldWoff = getCdnPath(
    folder,
    'IBMPlexSansArabic-SemiBold.woff'
  );
  const sourceSansArabicSemiBoldWoff2 = getCdnPath(
    folder,
    'IBMPlexSansArabic-SemiBold.woff2'
  );

  const sourceSansArabicBoldWoff = getCdnPath(
    folder,
    'IBMPlexSansArabic-Bold.woff'
  );
  const sourceSansArabicBoldWoff2 = getCdnPath(
    folder,
    'IBMPlexSansArabic-Bold.woff2'
  );

  const preloadLinks = fontWeights.reduce<React.ReactNode[]>(
    (result, fontWeight) => {
      switch (fontWeight) {
        case 'ExtraLight': {
          return result.concat([
            buildPreloadLink(sourceSansArabicExtraLightWoff2)
          ]);
        }
        case 'Light': {
          return result.concat([buildPreloadLink(sourceSansArabicLightWoff2)]);
        }
        case 'Regular': {
          return result.concat([
            buildPreloadLink(sourceSansArabicRegularWoff2)
          ]);
        }
        case 'Medium': {
          return result.concat([buildPreloadLink(sourceSansArabicMediumWoff2)]);
        }
        case 'SemiBold': {
          return result.concat([
            buildPreloadLink(sourceSansArabicSemiBoldWoff2)
          ]);
        }
        case 'Bold': {
          return result.concat([buildPreloadLink(sourceSansArabicBoldWoff2)]);
        }
      }
      return result;
    },
    []
  );

  return [
    preloadLinks,
    css`
      ${buildFontFace({
        name,
        weight: 'ExtraLight',
        woff: sourceSansArabicExtraLightWoff,
        woff2: sourceSansArabicExtraLightWoff2
      })}

      ${buildFontFace({
        name,
        weight: 'Light',
        woff: sourceSansArabicLightWoff,
        woff2: sourceSansArabicLightWoff2
      })}
    
    ${buildFontFace({
        name,
        weight: 'Regular',
        woff: sourceSansArabicRegularWoff,
        woff2: sourceSansArabicRegularWoff2
      })}
    
    ${buildFontFace({
        name,
        weight: 'Medium',
        woff: sourceSansArabicMediumWoff,
        woff2: sourceSansArabicMediumWoff2
      })}
    
    ${buildFontFace({
        name,
        weight: 'SemiBold',
        woff: sourceSansArabicSemiBoldWoff,
        woff2: sourceSansArabicSemiBoldWoff2
      })}
    
    ${buildFontFace({
        name,
        weight: 'Bold',
        woff: sourceSansArabicBoldWoff,
        woff2: sourceSansArabicBoldWoff2
      })}
    `
  ];
}
