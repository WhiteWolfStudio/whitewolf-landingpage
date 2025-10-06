export interface Project {
  name: string;
  url: string;
  description: string;
  status: 'live' | 'coming-soon';
  image: string;
}

export const projects: Project[] = [
  {
    name: 'PrepAhead',
    url: 'https://prepahead.co.za',
    description: 'Educational platform for exam preparation and learning resources',
    status: 'live',
    image: '/images/prepahead.png'
  },
  {
    name: 'MyInsureBuddy',
    url: 'https://myinsurebuddy.co.za',
    description: 'Insurance comparison and management platform',
    status: 'live',
    image: '/images/insurebuddy.png'
  },
  {
    name: 'Burfilicious',
    url: 'https://burfilicious.co.za',
    description: 'Premium burger restaurant website',
    status: 'live',
    image: '/images/burfi.png'
  },
  {
    name: 'EquipX',
    url: 'https://equipx.co.za',
    description: 'Online marketplace for manufacturing equipment',
    status: 'coming-soon',
    image: '/images/logo.png'
  },
  {
    name: 'Gegrond',
    url: 'https://gegrond.co.za',
    description: 'Real estate platform for property listings and management',
    status: 'live',
    image: '/images/gegrond.png'
  },
  {
    name: 'ZJD Law',
    url: 'https://zjdlaw.co.za/',
    description: 'Professional legal services website',
    status: 'live',
    image: '/images/zjd.png'
  }
];
