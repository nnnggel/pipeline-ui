import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ReactComponent as MAlogo } from './icon.svg';
import Button, { StyledButton } from '../Button/BaseButton';

const brandColors = {
  baseColor: '#000',
  hoverColor: '#4c4c4c',
  activeColor: '#999',
  foregroundColor: '#FFFFFF',
};

const MAStyledButton = styled(StyledButton)`
  & {
    transition: all 0.15s ease;
  }

  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }

  && > svg.r-ff-icon {
    height: ${props => (props.size === 'small' ? '1rem' : '1.5rem')};
    width: ${props => (props.size === 'small' ? '1rem' : '1.5rem')};
    margin-right: 0.5rem;
    margin-bottom: -2px;
  }
`;

const StyledButtonSolid = styled(MAStyledButton)`
  & {
    color: ${brandColors.foregroundColor};
    background: ${brandColors.baseColor};
  }
  &:hover {
    background-color: ${brandColors.hoverColor};
  }
  &:active {
    background-color: ${brandColors.activeColor};
  }
`;

const StyledButtonOutline = styled(MAStyledButton)`
  & {
    color: #333;
    background: ${brandColors.foregroundColor};
    border: 1px solid #ccc;
  }
  &:hover {
    background-color: #f3f2f2;
  }
  &:active {
    background-color: #e4e4e4;
  }
`;

const ButtonBody = ({ children, size }) => (
  <React.Fragment>
    <MAlogo className={'r-ff-icon'} size={size} />
    {children}
  </React.Fragment>
);

const MyAlgoButtonSolid = ({ className, children, ...props }) => {
  return (
    <StyledButtonSolid className={className} {...props}>
      <ButtonBody children={children} size={props.size} />
    </StyledButtonSolid>
  );
};

const MyAlgoButtonOutline = ({ className, children, ...props }) => {
  return (
    <StyledButtonOutline className={className} {...props}>
      <ButtonBody children={children} size={props.size} />
    </StyledButtonOutline>
  );
};

const defaultProps = {
  ...Button.defaultProps,
  width: 'auto',
  borderRadius: 1,
  boxShadow: 1,
};

MyAlgoButtonSolid.defaultProps = defaultProps;
MyAlgoButtonOutline.defaultProps = defaultProps;

let MyAlgoButton;

MyAlgoButton = MyAlgoButtonSolid;
MyAlgoButton.Solid = MyAlgoButtonSolid;
MyAlgoButton.Outline = MyAlgoButtonOutline;

MyAlgoButton.propTypes = {
  ...Button.propTypes,
};

MyAlgoButton.displayName = 'MyAlgoButton';

export default MyAlgoButton;