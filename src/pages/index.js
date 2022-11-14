import React from 'react';

import Home from 'containers/HomePageV2';
import CommonLayout from 'components/common/CommonLayout';
import apiStructure from 'helpers/common/apiStructure';

const Page = props => {
  return (
    <CommonLayout>
      <Home {...props} />
    </CommonLayout>
  );
};

Page.propTypes = {};

export async function getServerSideProps() {
  const requestUrl = apiStructure.loadHappyHour.fullPath;
  const ssrHappyHourData = await fetch(requestUrl).then(data => data.json());
  return { props: { ssrHappyHourData } }; // will be passed to the page component as props
}

export default Page;
