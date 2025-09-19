import * as React from "react"
import { useEffect, useRef } from "react"
import { addPropertyControls, ControlType } from "framer"

// The URL for the bundled Three.js viewer
const VIEWER_SCRIPT_URL =
    "https://cdn.jsdelivr.net/gh/j-gj/json-particle-viewer@v1.0.4/dist/json-point-cloud-viewer.js"

export function PointCloudViewer(props) {
    const containerRef = useRef(null)
    const viewerRef = useRef(null) // Ref to hold the viewer instance

    // Effect to handle initial setup and cleanup
    useEffect(() => {
        let viewerInstance = null

        import(VIEWER_SCRIPT_URL)
            .then((module) => {
                const JSONPointCloudViewer = module.default

                if (containerRef.current) {
                    viewerInstance = new JSONPointCloudViewer(
                        containerRef.current,
                        {
                            jsonUrl: props.jsonUrl,
                            particleColor: props.particleColor,
                            backgroundColor: props.backgroundColor,
                            particleSize: props.particleSize,
                        }
                    )
                    viewerRef.current = viewerInstance // Store the instance in the ref
                }
            })
            .catch((error) => {
                console.error("Failed to load the point cloud viewer:", error)
            })

        // Cleanup function
        return () => {
            if (viewerRef.current) {
                viewerRef.current.destroy()
                viewerRef.current = null
            }
        }
    }, []) // Empty dependency array for mount and unmount

    // Effect to handle prop updates
    useEffect(() => {
        const viewer = viewerRef.current
        if (viewer) {
            // Update settings if any of the relevant props have changed
            viewer.updateSettings({
                particleColor: props.particleColor,
                backgroundColor: props.backgroundColor,
                particleSize: props.particleSize,
            })
        }
    }, [
        props.jsonUrl,
        props.particleColor,
        props.backgroundColor,
        props.particleSize,
    ])
    // Separate Effect to handle jsonUrl changes
    useEffect(() => {
        const viewer = viewerRef.current;
        if (viewer && props.jsonUrl) {
            viewer.loadNewData(props.jsonUrl);
        }
    }, [props.jsonUrl]);

    return (
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <div
                id="point-cloud-container"
                ref={containerRef}
                style={{ width: "100%", height: "100%" }}
            ></div>
            <div id="error" style={{ display: "none" }}>
                <p>Error loading point cloud</p>
            </div>
        </div>
    )
}

// Property controls for the Framer UI
addPropertyControls(PointCloudViewer, {
    jsonUrl: {
        type: ControlType.String,
        title: "JSON URL",
        defaultValue:
            "https://gmxkwskcrqq1xoty.public.blob.vercel-storage.com/particle-cloud-turbine-246000pts.json",
        placeholder: "Enter a .json URL",
    },
    particleColor: {
        type: ControlType.Color,
        title: "Particle Color",
        defaultValue: "#372CD5",
    },
    backgroundColor: {
        type: ControlType.Color,
        title: "Background Color",
        defaultValue: "#ffffff",
    },
    particleSize: {
        type: ControlType.Number,
        title: "Particle Size",
        defaultValue: 0.1,
        min: 0.01,
        max: 1.0,
        step: 0.01,
    },
})
