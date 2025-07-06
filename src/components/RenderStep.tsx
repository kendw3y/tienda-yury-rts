import { products } from "../data/data.json";
import { ProductList, DeliveryForm, OrderSummary, PaymentMethod } from ".";
import { useCalculateTotal } from "@/hooks/useCalculateTotal";
import { useRenderStep } from "@/hooks/useRenderStep";
import { AnimatePresence, motion } from "framer-motion";

export const RenderStep = () => {
  const { delivery, total } = useCalculateTotal();
  const { currentStep, direction, onBack, onContinue } = useRenderStep();

  const render = () => {
    switch (currentStep) {
      case 1:
        return <ProductList products={products} onContinue={onContinue} />;

      case 2:
        return <DeliveryForm onBack={onBack} onContinue={onContinue} />;
      case 3:
        return (
          <OrderSummary
            products={products}
            totals={{ delivery, total }}
            onBack={onBack}
            onContinue={onContinue}
          />
        );
      case 4:
        return <PaymentMethod onBack={onBack} total={total} />;
      default:
        return null;
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={currentStep}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
        className=" w-full"
      >
        {render()}
      </motion.div>
    </AnimatePresence>
  );
};
