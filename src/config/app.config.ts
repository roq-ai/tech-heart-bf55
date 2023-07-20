interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Teacher'],
  customerRoles: ['Student'],
  tenantRoles: ['Content Creator', 'Teacher'],
  tenantName: 'Client',
  applicationName: 'π Tech Heart',
  addOns: [],
};
