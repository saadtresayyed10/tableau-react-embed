import { useRef } from "react";

const EmbedDashboard = () => {
  const tableauContainerRef = useRef<HTMLDivElement | null>(null);
  const url = import.meta.env.TABLEAU_URL as string;
  const api = import.meta.env.API_URI as string;

  return <div>EmbedDashboard</div>;
};

export default EmbedDashboard;
