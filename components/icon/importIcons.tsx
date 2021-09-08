const importAllSVG = (requireContext:any) => requireContext.keys().forEach(requireContext)
try {
  // @ts-ignore
  importAllSVG(require.context('./svg/', true, /\.svg$/))
} catch (error) {
  console.log(error)
}