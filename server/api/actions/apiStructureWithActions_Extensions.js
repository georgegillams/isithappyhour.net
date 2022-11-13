const apiStructureWithActionsExtensions = apiStructure => {
  // Happy hour
  apiStructure.loadHappyHour.action = require('./happy-hour/query');

  return apiStructure;
};

export default { apiStructureWithActionsExtensions };
export { apiStructureWithActionsExtensions };
