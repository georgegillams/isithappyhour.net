import React from 'react';

import PageContainer from 'components/common/PageContainer';
import { Answer, AnswerWrapper } from './home.styles';
import { ScrollAnimationWrapper } from '@george-gillams/components/effects';
import Text, { SIZES } from '@george-gillams/components/text';

const HomePage = props => {
  const { ...rest } = props;

  return (
    <PageContainer centred {...rest}>
      <ScrollAnimationWrapper>
        <AnswerWrapper>
          <Answer>YES!</Answer>
        </AnswerWrapper>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Text size={SIZES.lg}>It&#39;s happy hour somewhere in the world. Cheers 🍻</Text>
      </ScrollAnimationWrapper>
    </PageContainer>
  );
};

export default HomePage;
