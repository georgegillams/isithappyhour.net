import React from 'react';
import PageContainer from 'components/common/PageContainer';
import Paragraph from '@george-gillams/components/paragraph';
import PageTitle from 'components/common/PageTitle';
import TextLink from 'components/common/TextLink';
import { ScrollAnimationWrapper, ANIMATIONS } from '@george-gillams/components/effects';

const NotFound = props => {
  return (
    <PageContainer bottomPadding centred {...props}>
      <PageTitle name="Oops." pageTitle="404">
        <ScrollAnimationWrapper animation={ANIMATIONS.fade}>
          <Paragraph>
            This page doesn&#39;t exist... Time to <TextLink href={'/'}>go home</TextLink>, you&#39;re drunk!
          </Paragraph>
        </ScrollAnimationWrapper>
      </PageTitle>
    </PageContainer>
  );
};

export default NotFound;
