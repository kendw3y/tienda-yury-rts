interface StepIndicatorProps {
  currentStep: number
}

const StepIndicator = ({ currentStep }: StepIndicatorProps) => {
  const steps = [
    { number: 1, name: "Productos" },
    { number: 2, name: "Información de entrega" },
    { number: 3, name: "Resumen" },
    { number: 4, name: "Pago" },
  ]

  return (
    <div className="flex justify-between items-center">
      {steps.map((step) => (
        <div key={step.number} className="flex flex-col items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentStep >= step.number ? "bg-gray-600 text-blanco" : "bg-gray-900 text-blanco border border-gray-600"
            }`}
          >
            {step.number}
          </div>
          <div className="mt-2 text-sm font-medium text-blanco">{step.name}</div>
        </div>
      ))}
    </div>
  )
}

export default StepIndicator
