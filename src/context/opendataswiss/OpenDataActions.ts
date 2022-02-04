export const search = async () => {
  const response = await fetch(
    'https://ckan.opendata.swiss/api/3/action/package_show?id=covid-19-schweiz'
  );

  console.log(response);

  const data = await response.json();

  console.log(data);

  return data;
};
