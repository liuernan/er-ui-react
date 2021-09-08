let importAll = (requireContext:any) => requireContext.keys().forEach(requireContext)
try {
  // @ts-ignore
  importAll(require.context('./svg/', true, /\.svg$/))
} catch (error) {
  console.log(error)
}