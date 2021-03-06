import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../theme/utils/propToStyle';

const Container = styled.div`
    width: 100%;
    max-width: initial;
  ${propToStyle('marginTop')}
`;

export const Grid = {
  Container,
  Row: styled.div`
    display: flex;
    flex-wrap: wrap;
  `,
  Col: styled.div`
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    ${({ value }) => {
    if (typeof value === 'number') {
      return css`
          flex-grow: 0;
          flex-shrink: 0;
          flex-basis: ${(100 * value) / 12}%;
          max-width: ${(100 * value) / 12}%;
        `;
    }
    return breakpointsMedia({
      xs: value?.xs || value?.xs === 0
        ? css`
            height: ${value.xs === 0 ? '0px' : 'auto'};
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: ${(100 * value.xs) / 12}%;
            max-width: ${(100 * value.xs) / 12}%;
          `
        : '',
      sm: value?.sm
        ? css`
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: ${(100 * value.sm) / 12}%;
            max-width: ${(100 * value.sm) / 12}%;
          `
        : '',
      md: value?.md
        ? css`
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: ${(100 * value.md) / 12}%;
            max-width: ${(100 * value.md) / 12}%;
          `
        : '',
      lg: value?.lg
        ? css`
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: ${(100 * value.lg) / 12}%;
            max-width: ${(100 * value.lg) / 12}%;
          `
        : '',
      xl: value?.xl
        ? css`
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: ${(100 * value.xl) / 12}%;
            max-width: ${(100 * value.xl) / 12}%;
          `
        : '',
    });
  }}
    ${({ offset }) => {
    if (typeof offset === 'number') {
      return css`
          margin-left: ${(100 * offset) / 12}%;
        `;
    }
    return breakpointsMedia({
      xs: offset?.xs
        ? css`
            margin-left: ${(100 * offset.xs) / 12}%;
          `
        : '',
      sm: offset?.sm
        ? css`
            margin-left: ${(100 * offset.sm) / 12}%;
          `
        : '',
      md: offset?.md
        ? css`
            margin-left: ${(100 * offset.md) / 12}%;
          `
        : '',
      lg: offset?.lg
        ? css`
            margin-left: ${(100 * offset.lg) / 12}%;
          `
        : '',
      xl: offset?.xl
        ? css`
            margin-left: ${(100 * offset.xl) / 12}%;
          `
        : '',
    });
  }}
    ${propToStyle('display')}
    ${propToStyle('alignItems')}
    ${propToStyle('justifyContent')}
    ${propToStyle('flexDirection')}
    ${propToStyle('backgroundColor')}
    ${propToStyle('height')}
    ${propToStyle('padding')}
    ${propToStyle('padding-left')}
    ${propToStyle('padding-right')}
  `,
};
