import React from 'react';
import PropTypes from 'prop-types';
import Input from '@george-gillams/components/input';
import Select from '@george-gillams/components/select';
import Checkbox from '@george-gillams/components/checkbox';

const defaultFilters = { deleted: true, adminStatus: 'all', emailVerified: 'all' };

const filterUsers = (users, filters) => {
  let filteredUsers = users;
  if (filteredUsers && filteredUsers.filter) {
    if (filters.deleted) {
      filteredUsers = filteredUsers.filter(x => !x.deleted);
    }
    if (filters.adminStatus && filters.adminStatus !== 'all') {
      filteredUsers = filteredUsers.filter(x => {
        if (x.admin && filters.adminStatus === 'admin') {
          return true;
        }
        if (!x.admin && filters.adminStatus === 'nonAdmin') {
          return true;
        }
        return false;
      });
    }
    if (filters.emailVerified && filters.emailVerified !== 'all') {
      filteredUsers = filteredUsers.filter(x => {
        if (x.emailVerified && filters.emailVerified === 'verified') {
          return true;
        }
        if (!x.emailVerified && filters.emailVerified === 'notVerified') {
          return true;
        }
        return false;
      });
    }
    if (filters.name) {
      filteredUsers = filteredUsers.filter(x => x.name && x.name.includes(filters.name));
    }
  }
  return filteredUsers;
};

const UserFilter = props => {
  const { filters, onFiltersChanged } = props;
  const { deleted, adminStatus, emailVerified, name } = filters;

  const onDeletedFilterChanged = event => {
    onFiltersChanged({ ...filters, deleted: !event.target.checked });
  };

  const onAdminStatusFilterChanged = event => {
    onFiltersChanged({ ...filters, adminStatus: event.target.value });
  };

  const onEmailVerifiedFilterChanged = event => {
    onFiltersChanged({ ...filters, emailVerified: event.target.value });
  };

  const onNameFilterChanged = event => {
    onFiltersChanged({ ...filters, name: event.target.value });
  };

  return (
    <div>
      <Checkbox label="Show deleted" name="deleted" checked={!deleted} onChange={onDeletedFilterChanged} />
      <label htmlFor="adminStatus">Filter by admin status</label>
      <Select
        id="adminStatus"
        name="Filter by admin status"
        value={adminStatus}
        options={[
          { value: 'all', name: 'All' },
          { value: 'admin', name: 'Admin' },
          { value: 'nonAdmin', name: 'Non-admin' },
        ]}
        onChange={onAdminStatusFilterChanged}
      />
      <label htmlFor="emailVerified">Filter by email verification status</label>
      <Select
        id="emailVerified"
        name="Filter by email verification status"
        value={emailVerified}
        options={[
          { value: 'all', name: 'All' },
          { value: 'verified', name: 'Verified' },
          { value: 'notVerified', name: 'Non-verified' },
        ]}
        onChange={onEmailVerifiedFilterChanged}
      />
      <label htmlFor="name">Filter by name</label>
      <Input id="name" value={name} onChange={onNameFilterChanged} />
    </div>
  );
};

UserFilter.propTypes = {
  filters: PropTypes.object.isRequired,
  onFiltersChanged: PropTypes.func.isRequired,
};

export default UserFilter;
export { defaultFilters, filterUsers };
