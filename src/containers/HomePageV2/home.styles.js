// @import '~utils/tokens';

import styled from 'styled-components';
import Text from '@george-gillams/components/text';
import { breakpointMd, breakpointSm, spacingLg, spacingBase } from '@george-gillams/components/constants/layout';

export const AnswerWrapper = styled.div`
  margin-top: ${spacingLg};
  margin-bottom: ${spacingBase};
`;

export const Answer = styled(Text)`
  font-size: 8rem;

  @media (min-width: ${breakpointSm}) {
    font-size: 10rem;
  }

  @media (min-width: ${breakpointMd}) {
    font-size: 18rem;
  }
`;
