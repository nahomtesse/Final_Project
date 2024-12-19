import React from "react";
import * as $ from 'jquery';

function LastModified() {
    const lastModified = document.lastModified;

    return (
        <div>
            <p>This page was last modified on {lastModified}</p>
        </div>
    )
    
}

export default LastModified;