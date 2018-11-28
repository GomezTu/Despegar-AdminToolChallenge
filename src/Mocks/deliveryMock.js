const deliveryMock = [
  {
    id: 1,
    name: 'Argetino',
    description: 'Mock Description',
    specialty: 'Mock Speciality',
    address: 'Calle 5 nro 1548',
    time: {
      from: '',
      to: '',
    },
    phoneNumber: '456 715 42',
    adminContact: {
      name: 'Admin Mock Name',
      lastName: 'Mock LastName',
      phone: '456 715 42',
      email: 'MockEmail@MockEmail.com',
    },
    sameAsAdmin: true,
    comercialContact: {},
  },
  {
    id: 2,
    name: 'Bar BQ',
    description: 'Mock Description',
    specialty: 'Mock Speciality',
    address: 'Calle 126 nro 1542',
    time: {
      from: '',
      to: '',
    },
    phoneNumber: '125 164 48',
    adminContact: {
      name: 'Mock Name',
      lastName: 'Mock LastName',
      phone: '125 164 48',
      email: 'MockEmail@MockEmail.com',
    },
    sameAsAdmin: true,
    comercialContact: {},
  },
  {
    id: 3,
    name: 'El Galpon De Jose',
    description: 'Mock Description',
    specialty: 'Mock Speciality',
    address: 'Calle 44 nro 2365',
    time: {
      from: '',
      to: '',
    },
    phoneNumber: '(0221) 154 135 4548',
    adminContact: {
      name: 'Admin Mock Name',
      lastName: 'Mock LastName',
      phone: '(0221) 154 135 4548',
      email: 'MockEmail@MockEmail.com',
    },
    sameAsAdmin: false,
    comercialContact: {
      name: 'Comercial Mock Name',
      lastName: 'Comercial Mock LastName',
      phone: '(0221) 154 135 4548',
      email: 'ComercialMockEmail@ComercialMockEMmail.com',
    },
  },
  {
    id: 4,
    name: 'Fanaticos Del Asado',
    description: 'Mock Description',
    specialty: 'Mock Speciality',
    address: 'Calle 121 nro 458',
    time: {
      from: '',
      to: '',
    },
    phoneNumber: '156 456 12',
    adminContact: {
      name: 'Admin Mock Name',
      lastName: 'Mock LastName',
      phone: '156 456 12',
      email: 'MockEmail@MockEmail.com',
    },
    sameAsAdmin: false,
    comercialContact: {
      name: 'Comercial Mock Name',
      lastName: 'Comercial Mock LastName',
      phone: '(0221) 154 135 4548',
      email: 'ComercialMockEmail@ComercialMockEMmail.com',
    },
  },
  {
    id: 5,
    name: 'Cachito Premium',
    description: 'Mock Description',
    specialty: 'Mock Speciality',
    address: 'Calle Falsa nro 123',
    time: {
      from: '',
      to: '',
    },
    phoneNumber: '(011) 4247 2611',
    adminContact: {
      name: 'Admin Mock Name',
      lastName: 'Mock LastName',
      phone: '(011) 4247 2611',
      email: 'MockEmail@MockEmail.com',
    },
    sameAsAdmin: true,
    comercialContact: {},
  }
];

export default deliveryMock;