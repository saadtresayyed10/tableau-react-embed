import React, { useEffect, useRef } from "react";

const EmbedDashboard: React.FC = () => {
  const vizContainerRef = useRef<HTMLDivElement | null>(null);

  // Tableau API URL and Dashboard URL
  const tableauScriptUrl =
    "https://public.tableau.com/javascripts/api/viz_v1.js";
  const tableauDashboardUrl =
    "https://public.tableau.com/views/Netflixtest_17042112994090/Dashboard1";

  useEffect(() => {
    const loadTableauScript = () => {
      const scriptElement = document.createElement("script");
      scriptElement.src = tableauScriptUrl;
      scriptElement.async = true;
      document.body.appendChild(scriptElement);

      scriptElement.onload = () => {
        if (window.tableau && vizContainerRef.current) {
          try {
            // Initialize the Tableau Viz
            const options = {
              hideTabs: true,
              hideToolbar: true,
              onFirstInteractive: () => {
                console.log("Tableau Viz is interactive!");
              },
            };
            new window.tableau.Viz(
              vizContainerRef.current,
              tableauDashboardUrl,
              options
            );
          } catch (error) {
            console.error("Error initializing Tableau Viz:", error);
          }
        } else {
          console.error(
            "Tableau API script not loaded or container is missing."
          );
        }
      };

      scriptElement.onerror = () => {
        console.error("Failed to load Tableau API script.");
      };
    };

    loadTableauScript();

    // Cleanup function to remove script when component unmounts
    return () => {
      document
        .querySelectorAll(`script[src="${tableauScriptUrl}"]`)
        .forEach((script) => script.remove());
    };
  }, []);

  return (
    <div
      ref={vizContainerRef}
      className="tableauPlaceholder"
      style={{ position: "relative", width: "100%", height: "75vh" }}
    >
      <noscript>
        <a href="#">
          <img
            alt="Tableau Visualization"
            src="https://public.tableau.com/static/images/CO/COVID2020_17036841933140/COVID2020/1_rss.png"
            style={{ border: "none" }}
          />
        </a>
      </noscript>
    </div>
  );
};

export default EmbedDashboard;
