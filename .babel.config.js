export default () => {
    const presets = ["next/babel"]
    const plugins = [["styled-components", { "ssr": true }]]
  
    return {
        presets,
        plugins
    }
}