import { getVideo } from "@/app/lib/services/MainServices";
import React from "react";

type Props = {};

async function Video({}: Props) {
    const video = await getVideo();
    return (
        <video controls autoPlay loop muted preload="auto" playsInline className="shadow-2xl">
            <source src={video} type="video/mp4" />
        </video>
    );
}

export default Video;
