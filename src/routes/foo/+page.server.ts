export const load = async () => {
  await new Promise(r => setTimeout(r, 500));

  return { num: Math.random() }; // some data to invalidate
}
