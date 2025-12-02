import USDTFlip from "../components/USDTFlip";

export default function Home() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold">
        Fast, Secure USDT Payments for Your Tasks & Services
      </h1>

      <p className="mt-4 text-gray-300 text-lg">
        Pay using TRC20 USDT. Instant confirmation. No app required.
      </p>

      <USDTFlip />

      <button
        onClick={() => (window.location.href = "/create-invoice")}
        className="mt-10 px-6 py-3 bg-emerald-500 text-black rounded-xl font-bold hover:scale-110 transition"
      >
        Create Payment Invoice
      </button>
    </div>
  );
}
