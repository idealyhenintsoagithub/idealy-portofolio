export default function parseResponseCollection<T>(response: any): T[] {
  if (response && response['member']) {
    return response['member'];
  }

  return [];
};
