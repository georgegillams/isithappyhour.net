import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import PageContainer from 'components/common/PageContainer';
import { Answer, AnswerWrapper } from './home.styles';
import { ScrollAnimationWrapper } from '@george-gillams/components/effects';
import Text, { SIZES } from '@george-gillams/components/text';
import Paragraph from '@george-gillams/components/paragraph';
import { spacingBase } from '@george-gillams/components/constants/layout';
import { isHappyHour } from 'helpers/happy-hour';

const HomePage = props => {
  const { ssrHappyHourData, ...rest } = props;

  const { location, hoursInTimeZone, minutesInTimeZone } = ssrHappyHourData || {};
  const [isHappyHourNow, setIsHappyHourNow] = useState(false);

  useEffect(() => {
    const browserDate = new Date();
    const isHappyHourResult = isHappyHour(browserDate);
    setIsHappyHourNow(isHappyHourResult);
  }, []);

  const renderTimeZone = !isHappyHourNow && !!(location && hoursInTimeZone && minutesInTimeZone);

  return (
    <PageContainer centred {...rest}>
      <ScrollAnimationWrapper>
        <AnswerWrapper>
          <Answer>YES!</Answer>
        </AnswerWrapper>
      </ScrollAnimationWrapper>
      {isHappyHourNow && (
        <ScrollAnimationWrapper>
          <Paragraph>
            <Text size={SIZES.lg}>
              {`It looks like it's happy hour where you are. You should definitely have a beer.`}
            </Text>
          </Paragraph>
        </ScrollAnimationWrapper>
      )}
      {renderTimeZone && (
        <>
          <ScrollAnimationWrapper>
            <Paragraph>
              <Text size={SIZES.lg}>
                {`In ${location} it's ${hoursInTimeZone}:${minutesInTimeZone}, so it's likely to be happy hour there.`}
              </Text>
            </Paragraph>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <Paragraph>
              <Text size={SIZES.lg}>
                Travelling all that way would be environmentally unfriendly, so you&#39;re really doing us all a favour
                by staying where you are and having a beer.
              </Text>
            </Paragraph>
          </ScrollAnimationWrapper>
        </>
      )}
      <ScrollAnimationWrapper>
        <Paragraph style={{ marginBottom: spacingBase }}>
          <Text size={SIZES.lg}>Cheers 🍻</Text>
        </Paragraph>
      </ScrollAnimationWrapper>
    </PageContainer>
  );
};

HomePage.propTypes = {
  ssrHappyHourData: PropTypes.shape({
    location: PropTypes.string,
    hoursInTimeZone: PropTypes.string,
    minutesInTimeZone: PropTypes.string,
  }).isRequired,
};

export default HomePage;
