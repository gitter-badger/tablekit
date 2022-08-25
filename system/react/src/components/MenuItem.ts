import styled, { CSSObject } from '@emotion/styled';

export const classySelector = '.menu-item';

/**
 * We export the objects as well for compatibilty with 3rd party libs like react-select
 */

/**
 *
 * @alias menuItemStateStylesObjects
 */
export const stateStylesObjects: Record<
  'focus' | 'selected' | 'active' | 'hover',
  CSSObject
> = {
  active: {
    color: 'var(--text)',
    background: 'var(--surface-active)'
  },
  focus: {
    color: 'var(--text)',
    background: 'var(--surface-hover)'
  },
  selected: {
    color: 'var(--text)',
    background: 'var(--surface-active)'
  },
  hover: {
    color: 'var(--text)',
    background: 'var(--surface-hover)'
  }
};

export const baseStylesObject: CSSObject = {
  font: 'var(--body-1)',
  color: 'var(--text)',
  padding: 'var(--spacing-l3)',
  borderRadius: 'var(--border-radius-small)',
  display: 'grid',
  gridGap: 'var(--spacing-l2)',
  gridAutoFlow: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  textDecoration: 'none !important',
  outline: 'none',
  '&:is(button, :any-link)': {
    cursor: 'pointer'
  }
};

// eslint-disable-next-line @emotion/syntax-preference
export const MenuItem = styled.span<{ 'data-selected'?: boolean }>({
  ...baseStylesObject,
  '&:is(button, :any-link):active': stateStylesObjects.active,
  '&:is(button, :any-link):focus': stateStylesObjects.focus,
  '&:is(button, :any-link):hover': stateStylesObjects.hover,
  '&[data-selected=true]': stateStylesObjects.selected
});
