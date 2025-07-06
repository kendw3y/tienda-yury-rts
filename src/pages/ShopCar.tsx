import Header from "../components/head";
import { RenderStep } from "@/components/RenderStep";

export function ShopCar() {
  
  return (
    <div className="  nunito-normal flex flex-col bg-background">
      <Header />
      <div className="   ">
          <RenderStep></RenderStep>
      </div>
    </div>
  );
}
