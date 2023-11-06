interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Restaurant Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager', 'Wait Staff', 'Chef'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Edit your info.', 'View restaurant information.', 'Book a table.', 'View menus.'],
  ownerAbilities: [
    'Manage restaurant information',
    'Create menus for the restaurant',
    'Manage user information',
    'Manage bookings',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/6b3defeb-b014-497e-9566-8f25fd9d6cea',
};
