import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton:React.FC = (props) => (
  <ContentLoader 
    speed={2}
    width={254}
    height={438}
    viewBox="0 0 253 437"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="119" cy="96" r="90" /> 
    <rect x="23" y="200" rx="3" ry="3" width="188" height="24" /> 
    <rect x="24" y="229" rx="5" ry="5" width="187" height="38" /> 
    <rect x="190" y="324" rx="0" ry="0" width="11" height="3" /> 
    <rect x="24" y="274" rx="5" ry="5" width="57" height="29" /> 
    <rect x="88" y="273" rx="7" ry="7" width="57" height="30" /> 
    <rect x="155" y="272" rx="6" ry="6" width="49" height="31" /> 
    <rect x="31" y="350" rx="0" ry="0" width="80" height="21" /> 
    <rect x="150" y="362" rx="14" ry="14" width="54" height="34" /> 
    <rect x="34" y="413" rx="0" ry="0" width="95" height="12" />
  </ContentLoader>
)

export default Skeleton