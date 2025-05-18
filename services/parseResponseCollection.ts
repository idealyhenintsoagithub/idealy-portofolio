export default function parseResponseCollection(response: any) {
  if (response && response['member']) {
    return response['member'];
  }

  return [];
};
