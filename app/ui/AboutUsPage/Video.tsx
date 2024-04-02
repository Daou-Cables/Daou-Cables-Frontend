import { getVideo } from "@/app/lib/services/MediaServices";
import React from "react";

type Props = {};

async function Video({ }: Props) {
    let video = undefined;
    try {
        video = await getVideo();
    } catch (error) {
        // TODO: Handle error
    }

    
    return (
        <video controls autoPlay loop muted preload="auto" playsInline className="shadow-2xl">
            <source src={video} type="video/mp4" />
        </video>
    );
}

export default Video;
