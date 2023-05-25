const config = {
  security: {
    url:
      process.env.SECURITY_URL ||
      "http://cdkin-myfar-korb3zuwpr09-1788869907.us-east-1.elb.amazonaws.com/security",
  },
  records: {
    url:
      process.env.RECORD_URL ||
      "http://cdkin-myfar-korb3zuwpr09-1788869907.us-east-1.elb.amazonaws.com/records",
  },
  operations: {
    url:
      process.env.OPERATIONS_URL ||
      "http://cdkin-myfar-korb3zuwpr09-1788869907.us-east-1.elb.amazonaws.com",
  },
};

export default config;
