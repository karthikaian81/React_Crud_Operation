import React from "react";

export default function TotalCountSection({objliTaglength}){
 return (<article> Total count of inserted tag is {objliTaglength}</article>)
}

TotalCountSection.defaultProps = {
    objliTaglength:0
}

