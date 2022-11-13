const apiStructureWithDescriptionsExtensions = apiStructure => {
  // Happy hour
  apiStructure.loadHappyHour.description = 'Load happy hour data';
  apiStructure.loadHappyHour.authorisation = 'None';

  return apiStructure;
};

export default { apiStructureWithDescriptionsExtensions };
export { apiStructureWithDescriptionsExtensions };
