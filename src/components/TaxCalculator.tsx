import { useState } from "react"

export default function TaxCalculator() {
  const [tp, setTp] = useState("") // Tax Payable
  const [et, setEt] = useState("") // Amended Estimated Tax
  const [calculationSteps, setCalculationSteps] = useState<string[]>([])
  const [calculationDetails, setCalculationDetails] = useState("")
  const [finalTaxIncrease, setFinalTaxIncrease] = useState<string>("")
  const [error, setError] = useState<string>("")

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-MY", { style: "currency", currency: "MYR" }).format(value)
  }

  const validateInput = (input: string): boolean => {
    if (!input || isNaN(Number(input)) || Number(input) < 0) {
      setError("Please enter a valid positive number.")
      return false
    }
    return true
  }

  const calculateTaxIncrease = () => {
    setError("")
    if (!validateInput(tp) || !validateInput(et)) {
      // Prevent calculation if validation fails
      return
    }
    const tpValue = parseFloat(tp)
    const etValue = parseFloat(et)
    const difference = tpValue - etValue
    const threshold = 0.3 * tpValue
    const taxIncrease = difference > threshold ? (difference - threshold) * 0.1 : 0

    const steps = [
      `Step 1: Calculate the difference between TP and ET = TP - ET = ${formatCurrency(
        tpValue
      )} - ${formatCurrency(etValue)} = ${formatCurrency(difference)}`,
      `Step 2: Calculate 30% of TP = 30% x ${formatCurrency(tpValue)} = ${formatCurrency(
        threshold
      )}`,
      `Step 3: Subtract 30% of TP from the difference = ${formatCurrency(
        difference
      )} - ${formatCurrency(threshold)} = ${formatCurrency(difference - threshold)}`,
      `Step 4: Calculate 10% increase (if applicable) = ${formatCurrency(
        (difference - threshold) * 0.1
      )}`,
    ]

    setCalculationSteps(steps)
    setFinalTaxIncrease(`Final Tax Increase: ${formatCurrency(taxIncrease)}`)
  }

  return (
    <div className="p-4 space-y-4 w-full max-w-5xl lg:max-w-2xl">
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex flex-col gap-8 mt-4 mb-4">
        {" "}
        <div>
          <label htmlFor="tp" className="block text-xl font-bold space-y-2">
            Tax Payable (TP)
          </label>

          <div className="flex flex-row gap-2">
            <p className="block self-center">RM</p>
            <input
              type="number"
              id="tp"
              value={tp}
              onChange={(e) => setTp(e.target.value)}
              className="mt-1 block w-inherit rounded-md border-gray-300 shadow-sm  p-2 sm:text-sm w-3/4 dark:text-black"
              placeholder="Enter Tax Payable"
            />
          </div>
        </div>
        <div>
          <label htmlFor="et" className="block text-xl font-bold space-y-2">
            Amended Estimated Tax (ET)
          </label>

          <div className="flex flex-row gap-2">
            <p className="block self-center">RM</p>
            <input
              type="number"
              id="et"
              value={et}
              onChange={(e) => setEt(e.target.value)}
              className="mt-1 block w-inherit rounded-md border-gray-300 shadow-sm  p-2 sm:text-sm w-3/4 dark:text-black"
              placeholder="Enter Amended Estimated Tax"
            />
          </div>
        </div>
      </div>

      <button
        onClick={calculateTaxIncrease}
        className="px-4 py-2 border-b font-bold border-gray-300 w-full  rounded-md backdrop-blur-2xl dark:border-neutral-800  dark:from-inherit lg:static lg:w-auto bg-zinc-800  mx-auto lg:rounded-xl lg:border dark:bg-gray-200 lg:bg-zinc-800 text-white lg:px-4 lg:py-2 lg:dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-black dark:font-bold"
      >
        Calculate
      </button>
      <div className="">
        {finalTaxIncrease && <p className="mt-20 text-xl font-semibold">{finalTaxIncrease}</p>}
      </div>
      <div className="border-b border-gray-300 backdrop-blur-2xl dark:border-neutral-800" />

      {calculationSteps.length !== 0 && (
        <div className="border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static rounded-xl lg:w-auto lg:rounded-xl border bg-gray-200 p-4 dark:bg-zinc-800/30 lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 ">
          <h3 className="text-md sm:text-lg font-semibold flex flex-row gap-2">
            Calculation Details:
          </h3>
          {calculationSteps.map((step, index) => (
            <p key={index} className="whitespace-pre-wrap text-sm font-mono py-4">
              {step}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}
