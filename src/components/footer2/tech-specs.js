import React from 'react';
import { StyledParagraph } from './tech-specs.styles';
import TextLink from 'components/common/TextLink';

const TechSpecs = props => {
  return (
    <div {...props}>
      <StyledParagraph>
        Made with love by{' '}
        <TextLink href="https://www.georgegillams.co.uk/" hrefExternal>
          George
        </TextLink>
      </StyledParagraph>
      <StyledParagraph>
        Please do not share with anyone under the legal purchase age for alcohol. Drink Responsibly.
      </StyledParagraph>
    </div>
  );
};

export default TechSpecs;
