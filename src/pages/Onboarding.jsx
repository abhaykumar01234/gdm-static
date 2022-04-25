import React, { useEffect } from "react";
import { ONBOARDING_VIDEOS_LIST } from "../assets/static";

const scrollToAnchor = (videoAnchor) => {
  const currentElem = document.getElementById(videoAnchor);

  if (currentElem) {
    window.scroll({
      top: currentElem.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  }
};

const Onboarding = () => {
  useEffect(() => {
    const allCollapse = document.querySelectorAll("details");
    const allHandlers = {};

    allCollapse.forEach((D, idx, A) => {
      const handler = (_) => {
        if (D.open) {
          A.forEach((d) => {
            if (d !== D) d.open = false;
          });
          scrollToAnchor(D.getAttribute("id"));
        }
      };
      allHandlers["h" + idx] = handler;
      D.addEventListener("toggle", handler);
    });

    return () => {
      allCollapse.forEach((D, idx) => {
        D.removeEventListener("toggle", allHandlers["h" + idx]);
      });
    };
  }, []);
  return (
    <div className="contentBox">
      <h1>Onboarding Video Series</h1>
      {ONBOARDING_VIDEOS_LIST.map(
        ({ subTitle, subTitleCopy, videoAccordionList }, idx) => (
          <React.Fragment key={"Heading" + idx}>
            <h2>{subTitle}</h2>
            <p>{subTitleCopy}</p>
            {videoAccordionList.map(
              ({ anchor, videoId, header, copy, transcriptPoints }) => (
                <details key={videoId} id={anchor}>
                  <summary>
                    <h3>{header}</h3>
                  </summary>
                  <div>
                    <p>{copy}</p>
                    <div className="video">
                      <h1>{videoId}</h1>
                    </div>
                    <h4>Transcript</h4>
                    {transcriptPoints.map(({ copy }, idx3) => (
                      <p key={"Transcript" + idx3}>{copy}</p>
                    ))}
                  </div>
                </details>
              )
            )}
          </React.Fragment>
        )
      )}
    </div>
  );
};

export default Onboarding;
