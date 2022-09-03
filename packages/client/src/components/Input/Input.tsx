import React, { SyntheticEvent } from 'react'
import styled from 'styled-components';

export type InputProps = {
  // properties
  error?: string,
  label?: string,
  value?: string,

  // events
  onChange?: (evt: SyntheticEvent, value: string) => void
};

const variables = {
  placeholderFontSize: '9px',
  placeholderMargin: '17px', // placeholderFontSize + 8px
  blue: '#3369F3',
  lightBlue: '#a4cef3',
  red: '#FF2F2F',
  fontColorSecondary: '#999999'
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: ${ variables.placeholderMargin };
`;

const Inp = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-weight: 500;
  padding: 7px 0;
`;

const Label = styled.span<{ label?: string }>`
    position: absolute;
    display: block;
    width: 100%;
    height: calc(100% - ${ variables.placeholderMargin });
    top: ${ variables.placeholderMargin };
    left: 0;
    pointer-events: none;
    border-bottom: 2px solid ${ variables.lightBlue };
    
    &:before {
      content: "";
      display: block;
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      transition: .4s top, .4s font-size;
    }

    &:after {
      color: ${ variables.fontColorSecondary };
      line-height: 1.2;
      content: "${ props => props.label }";
      display: block;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      padding: 7px 0;
      transition: .4s top, .4s font-size;
    }
    
    ${Inp}:focus + &:before {
      width: 100%;
      background: ${ variables.blue };
    }
    
    ${Inp}:focus + &:after,
    ${Inp}:not(.empty) + &:after {
      top: -${ variables.placeholderMargin };
      font-size: ${ variables.placeholderFontSize };
    }
`;

const Error = styled.span`
    margin-top: 7px;
    font-weight: 400;
    font-size: 10px;
    line-height: 10px;
    color: ${ variables.red };
    user-select: none;
`;

export class Input extends React.PureComponent<InputProps> {
  changeHandler = (evt: SyntheticEvent) => {
    const target = evt.target as HTMLInputElement;

    if(target.value.length) {
      target.classList.remove('empty');
    } else {
      target.classList.add('empty');
    }

    this.props.onChange && this.props.onChange.call(this, evt, target.value);
  }

  render() {
    return <>
      <Wrapper>
        <Inp value={ this.props.value } onChange={ this.changeHandler } className={ this.props.value ? '' : 'empty' } />
        <Label label={ this.props.label } />
      </Wrapper>
      { this.props.error ? <Error>{ this.props.error }</Error> : null }
    </>
  }
}