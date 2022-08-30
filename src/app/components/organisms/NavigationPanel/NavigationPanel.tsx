import { Sidebar } from "@components/molecules";
import LabPanel from "../LabPanel/LabPanel";

const NavigationPanel = () => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <LabPanel />
    </div>
  );
};

export default NavigationPanel;
