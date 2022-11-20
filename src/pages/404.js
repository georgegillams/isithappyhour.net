import React from 'react';

import CommonLayout from 'components/common/CommonLayout';
import NotFoundIhh from 'containers/NotFoundIhh';

const Page = props => {
  return (
    <CommonLayout>
      <NotFoundIhh {...props}></NotFoundIhh>
    </CommonLayout>
  );
};

Page.propTypes = {};

export default Page;
