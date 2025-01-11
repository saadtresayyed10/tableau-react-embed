import { useEffect, useRef } from "react";

const EmbedDashboard = () => {
  const vizContainerRef = useRef<HTMLDivElement | null>(null);
  const url = import.meta.env.TABLEAU_URL as string;
  const api = import.meta.env.API_URI as string;

  useEffect(() => {
    const loadScript = () => {
      const scriptElement = document.createElement("script");
      scriptElement.src = api;
      scriptElement.async = true;
      document.body.appendChild(scriptElement);

      scriptElement.onload = () => {
        if (vizContainerRef.current) {
          new window.tableau.Viz(vizContainerRef.current, url);
        }
      };
    };

    loadScript();
  }, [api, url]);

  return <div>EmbedDashboard</div>;
};

export default EmbedDashboard;
