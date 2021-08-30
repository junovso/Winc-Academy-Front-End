const retrieveData = async function () {
  const retrievedData = await getData();
  console.log(retrievedData);
  return retrievedData;
};

retrieveData();
