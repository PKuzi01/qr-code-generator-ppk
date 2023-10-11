import React from "react";

function URLForm() {
    return (
        <div>
            <form>
                <div>
                    <div>
                        <input  type="search" placeholder="Enter the URL..."/>
                    </div>
                    <div>
                        <input type="submit" value="Search" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default URLForm;