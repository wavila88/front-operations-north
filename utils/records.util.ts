export const filterObjects = (
  objects: Array<any>,
  searchTerm: string
): Array<any> => {
  const filteredObjects = objects.filter((object: any) => {
    // Verificar si hay coincidencia en cada uno de los campos
    const operation = object.operation.type
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const response = object.operation_response
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const userBalance = JSON.stringify(object.user_balance)
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchAmount = JSON.stringify(object.amount)
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchDate = object.createdAt
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // Devolver el objeto si hay coincidencia en al menos uno de los campos
    return operation || response || userBalance || matchDate || matchAmount;
  });

  return filteredObjects;
};
