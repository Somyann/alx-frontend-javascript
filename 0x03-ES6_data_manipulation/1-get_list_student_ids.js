export default function getListStudents(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  const ids = arr.map((x) => x.id);
  return ids;
}
