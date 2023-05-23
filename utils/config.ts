const config = {
  security: {
    url: process.env.SECURITY_URL || "http://localhost:3001/security",
  },
  records: {
    url: process.env.RECORD_URL || "http://localhost:3001/records",
  },
  operations: {
    url: process.env.OPERATIONS_URL || "http://localhost:3001",
  },
};

export default config;
